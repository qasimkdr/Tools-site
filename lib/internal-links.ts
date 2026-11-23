/**
 * Build-time internal-link engine (docs/SEO-PLAYBOOK.md §5).
 * Every canonical tool/guide page gets six relevant related cards and three or four
 * contextual in-article links. Every page receives at least MIN_INBOUND card links from
 * other pages. Deterministic: same catalogs → same links. Never changes canonicals,
 * robots, sitemap membership, formulas or review dates.
 */
import {navigationProfiles,relatedNavigation} from './related-navigation';
import {tokens,type PageProfile} from './relevance-engine';

export const RELATED_SIZE = 6;
export const MIN_INBOUND = 3;
export const CONTEXTUAL_SIZE = 4;

export type LinkPage = {path:string;title:string;anchor:string;description:string;icon:string;kind:'tool'|'guide'};

const pages = navigationProfiles;
const byPath = new Map(pages.map(p=>[p.path,p]));

/** Short descriptive anchor: the page name without its subtitle. */
export function anchorFor(title:string):string{
  return title.split(/\s+[—–:|]\s+|\s+-\s+|:\s+/)[0].replace(/\s*\([^)]*\)\s*$/,'').trim();
}

export const collectionOf=(path:string)=>path.split('/').slice(0,-2).join('/')+'/';
const collectionLabel:Record<string,string>={
  '/tools/':'global calculators','/pk/tools/':'Pakistan calculators','/pdf-tools/':'PDF tools','/document-tools/':'document and data tools',
  '/image-tools/':'image tools','/media-tools/':'video, audio and subtitle tools','/archive-tools/':'archive tools','/generator-tools/':'generator tools','/guides/':'guides',
};
export const directoryFor=(path:string)=>({href:collectionOf(path),label:collectionLabel[collectionOf(path)]||'tools'});

// Title tokens count double; very common tokens carry little weight (IDF).
const tokenSets=new Map<string,Map<string,number>>();
const df=new Map<string,number>();
for(const p of pages){
  const weights=new Map<string,number>();
  for(const t of p.terms)weights.set(t,1);
  for(const t of tokens(p.title))weights.set(t,2);
  tokenSets.set(p.path,weights);
  for(const t of weights.keys())df.set(t,(df.get(t)||0)+1);
}
const idf=(t:string)=>Math.log(pages.length/(df.get(t)||1));

const reviewedRank=new Map<string,Map<string,number>>();
for(const p of pages){
  const ranks=new Map<string,number>();
  relatedNavigation.ranked(p.path).forEach((m,i)=>{if(m.editorial||m.confidence!=='review')ranks.set(m.path,i);});
  reviewedRank.set(p.path,ranks);
}

function rawLexical(a:PageProfile,b:PageProfile):number{
  const wa=tokenSets.get(a.path)!,wb=tokenSets.get(b.path)!;let n=0;
  for(const [t,w] of wa){const v=wb.get(t);if(v)n+=Math.min(w,v)*idf(t);}
  return n;
}

export function relevance(a:PageProfile,b:PageProfile):number{
  if(a.path===b.path)return 0;
  const wa=tokenSets.get(a.path)!,wb=tokenSets.get(b.path)!;
  let lexical=0;
  for(const [t,w] of wa){const v=wb.get(t);if(v)lexical+=Math.min(w,v)*idf(t);}
  const sharedTitle=[...wa].some(([t,w])=>w===2&&wb.get(t)===2);
  // Shared generic description words are not relevance: need a shared title word or strong overlap.
  if(!(sharedTitle&&lexical>=2)&&lexical<8&&!a.approved.includes(b.path)&&!b.approved.includes(a.path))lexical=0;
  let score=lexical;
  if(score>0||a.approved.includes(b.path)||b.approved.includes(a.path)){
    if(a.category===b.category)score+=2;
    if(collectionOf(a.path)===collectionOf(b.path))score+=3;
    if(a.region===b.region)score+=1.5;
  }
  if(a.approved.includes(b.path)||b.approved.includes(a.path))score+=6; // reviewed editorial pairs
  const rank=reviewedRank.get(a.path)!.get(b.path);
  if(rank!==undefined)score+=Math.max(0,4-rank*0.5);
  return score;
}

type Pick={path:string;score:number;auto:boolean};
let cache:Map<string,Pick[]>|null=null;

function build():Map<string,Pick[]>{
  const lists=new Map<string,Pick[]>();
  const scored=new Map<string,Pick[]>();
  for(const a of pages){
    const all=pages.filter(b=>b.path!==a.path).map(b=>({path:b.path,score:relevance(a,b),auto:true}))
      .sort((x,y)=>y.score-x.score||x.path.localeCompare(y.path));
    scored.set(a.path,all);
    const picks:Pick[]=[];
    for(const path of a.approved){
      if(picks.length>=2)break;
      if(byPath.has(path)&&path!==a.path)picks.push({path,score:relevance(a,byPath.get(path)!),auto:false});
    }
    for(const c of all){if(picks.length>=RELATED_SIZE)break;if(c.score>=3&&!picks.some(p=>p.path===c.path))picks.push(c);}
    // Fill from the same collection when evidence is thin, never from unrelated collections.
    for(const c of all){if(picks.length>=RELATED_SIZE)break;if(c.score>0&&!picks.some(p=>p.path===c.path)&&collectionOf(c.path)===collectionOf(a.path))picks.push(c);}
    for(const c of all){if(picks.length>=RELATED_SIZE)break;if(c.score>0&&!picks.some(p=>p.path===c.path))picks.push(c);}
    // Last resort: nearest pages by category, collection and region (never alphabetical strangers).
    const affinity=(path:string)=>{const b=byPath.get(path)!;return (b.category===a.category?4:0)+(collectionOf(path)===collectionOf(a.path)?2:0)+(b.region===a.region?1:0)+(b.kind==='tool'?0.5:0);};
    const rest=all.filter(c=>!picks.some(p=>p.path===c.path)).map(c=>({c,k:affinity(c.path)+rawLexical(a,byPath.get(c.path)!)})).sort((x,y)=>y.k-x.k||x.c.path.localeCompare(y.c.path)).map(x=>x.c);
    for(const c of rest){if(picks.length>=RELATED_SIZE)break;picks.push(c);}
    // Keep collection context: at least two cards from the same collection when peers exist.
    const peers=all.filter(c=>(c.score>=3||byPath.get(c.path)!.category===a.category)&&collectionOf(c.path)===collectionOf(a.path)&&!picks.some(p=>p.path===c.path))
      .sort((x,y)=>y.score-x.score||rawLexical(a,byPath.get(y.path)!)-rawLexical(a,byPath.get(x.path)!)||x.path.localeCompare(y.path));
    while(picks.filter(p=>collectionOf(p.path)===collectionOf(a.path)).length<2&&peers.length){
      const weakest=picks.map((p,i)=>({p,i})).filter(({p})=>p.auto&&collectionOf(p.path)!==collectionOf(a.path)).sort((x,y)=>x.p.score-y.p.score)[0];
      if(!weakest)break;
      picks[weakest.i]=peers.shift()!;
    }
    lists.set(a.path,picks);
  }
  // Guarantee inbound coverage: weakest pages first, replace a host's weakest auto pick.
  const inbound=new Map(pages.map(p=>[p.path,0]));
  // Guides render their own editorial tool list, so only tool pages host related cards.
  const hosts=pages.filter(p=>p.kind==='tool');
  for(const h of hosts)for(const p of lists.get(h.path)!)inbound.set(p.path,(inbound.get(p.path)||0)+1);
  const needy=hosts.map(p=>p.path).filter(p=>inbound.get(p)!<MIN_INBOUND).sort((x,y)=>inbound.get(x)!-inbound.get(y)!||x.localeCompare(y));
  for(const target of needy){
    const t=byPath.get(target)!;
    const scored=hosts.filter(h=>h.path!==target&&!lists.get(h.path)!.some(p=>p.path===target))
      .map(h=>{const rel=relevance(t,h)+relevance(h,t),near=h.category===t.category||collectionOf(h.path)===collectionOf(t.path);
        return {h,rel,tier:rel>0?0:near?1:2,score:rel+(h.category===t.category?1:0)+(collectionOf(h.path)===collectionOf(t.path)?0.5:0)+(h.region===t.region?0.25:0)};})
      .sort((x,y)=>x.tier-y.tier||y.score-x.score||x.h.path.localeCompare(y.h.path));
    for(const {h,score} of scored){
      if(inbound.get(target)!>=MIN_INBOUND)break;
      const list=lists.get(h.path)!;
      const replaceable=list.map((p,i)=>({p,i})).filter(({p})=>p.auto&&inbound.get(p.path)!>MIN_INBOUND).sort((x,y)=>x.p.score-y.p.score)[0];
      if(!replaceable)continue;
      inbound.set(replaceable.p.path,inbound.get(replaceable.p.path)!-1);
      list[replaceable.i]={path:target,score:score/2,auto:false};
      inbound.set(target,inbound.get(target)!+1);
    }
  }
  for(const [path,list] of lists)lists.set(path,list.sort((x,y)=>y.score-x.score||x.path.localeCompare(y.path)));
  return lists;
}

const toPage=(path:string):LinkPage=>{const p=byPath.get(path)!;return {path,title:p.title,anchor:anchorFor(p.title),description:p.description,icon:p.icon,kind:p.kind};};

/** Six related pages for the card block. */
export function relatedFor(path:string):LinkPage[]{
  cache??=build();
  return (cache.get(path)||[]).map(p=>toPage(p.path));
}

/** Three or four contextual links for the article body (most relevant first, distinct anchors). */
export function contextualFor(path:string):LinkPage[]{
  const seen=new Set<string>(),own=anchorFor(byPath.get(path)?.title||'').toLowerCase();
  return relatedFor(path).filter(p=>{const k=p.anchor.toLowerCase();if(seen.has(k)||k===own)return false;seen.add(k);return true;}).slice(0,CONTEXTUAL_SIZE);
}

export const linkablePaths=()=>pages.map(p=>p.path);
