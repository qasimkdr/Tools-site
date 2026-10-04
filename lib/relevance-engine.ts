/** Deterministic navigation matching. Never writes canonical tags or redirects. */
export type PageProfile = {
  path: string; title: string; description: string; icon: string;
  kind: 'tool' | 'guide'; region: 'global' | 'pakistan'; category: string;
  terms: string[]; capabilities: string[]; approved: string[]; blocked?: string[];
  scope?: string; indexable: boolean;
};
export type Match = {path: string; score: number; relationship: string; reasons: string[];
  signals: Record<string, number>; editorial: boolean; confidence: 'approved' | 'high' | 'review' | 'secondary'};
const stop = new Set('a an the and or for to of in on with by from your our how use using free online calculator calculators tool tools guide guides calculate calculation estimate estimated supplied user input inputs output outputs result results planning method example solvepilot pakistan global'.split(' '));
const synonyms: Record<string,string> = {electrical:'electricity',electric:'electricity',batteries:'battery',taxes:'tax',loans:'loan',payments:'payment',mortgages:'mortgage',invoices:'invoice',salaries:'salary',percentages:'percent',percentage:'percent',kilowatt:'kw',watts:'watt',hours:'hour',documents:'document',images:'image',converting:'convert',conversion:'convert'};
export function tokens(text: string): string[] {
  return [...new Set((text.toLowerCase().match(/[a-z0-9]+/g)||[]).map(t=>synonyms[t]||t).filter(t=>t.length>1&&!stop.has(t)))];
}
const overlap=(a:string[],b:string[])=>a.filter(t=>b.includes(t));
const fraction=(shared:number,a:number,b:number)=>shared/Math.max(1,Math.min(a,b));
export function scorePair(a:PageProfile,b:PageProfile, idf:Map<string,number>=new Map()):Match|null {
  if(a.path===b.path||!a.indexable||!b.indexable||a.blocked?.includes(b.path)||b.blocked?.includes(a.path))return null;
  const editorial=a.approved.includes(b.path);
  if(a.scope&&b.scope&&a.scope!==b.scope)return null;
  const titleA=tokens(a.title),titleB=tokens(b.title),sharedTitle=overlap(titleA,titleB);
  const shared=overlap(a.terms,b.terms),cap=overlap(a.capabilities,b.capabilities);
  // A category label or shared generic word is never enough evidence.
  if(!editorial&&(shared.length<2||!sharedTitle.length||cap.length<2))return null;
  if(!editorial&&a.region!==b.region)return null;
  const weight=(ts:string[])=>ts.reduce((n,t)=>n+(idf.get(t)||1),0);
  const topic=Math.min(1,weight(shared)/Math.max(1,Math.min(weight(a.terms),weight(b.terms))));
  const functional=fraction(cap.length,a.capabilities.length,b.capabilities.length);
  const keyword=fraction(sharedTitle.length,titleA.length,titleB.length);
  const intent=a.kind!==b.kind?1:Math.min(1,keyword);
  // Workflow evidence: editorial association or strongly overlapping named tasks; no inferred input/output conversion.
  const signals={intent:Math.round(25*intent),functional:Math.round(25*functional),topic:Math.round(20*topic),workflow:editorial?15:(sharedTitle.length>=2&&functional>=0.6?10:0),keyword:Math.round(10*keyword),audience:a.region===b.region?5:0};
  const score=Object.values(signals).reduce((n,v)=>n+v,0);
  return {path:b.path,score,signals,editorial,relationship:a.kind!==b.kind?(a.kind==='guide'?'explanation-to-tool':'tool-to-explanation'):'related-task',reasons:[...(editorial?['Explicit editorial association']:[]),`Shared concepts: ${shared.join(', ')}`,`Method/description overlap: ${cap.join(', ')}`],confidence:editorial?'approved':'review'};
}
export function createMatcher(pages:PageProfile[]) {
  const byPath=new Map(pages.map(p=>[p.path,p]));
  if(byPath.size!==pages.length)throw new Error('Duplicate relevance profile paths');
  const postings=new Map<string,Set<string>>(),frequency=new Map<string,number>();
  for(const p of pages)for(const t of p.terms){frequency.set(t,(frequency.get(t)||0)+1);const set=postings.get(t)||new Set<string>();set.add(p.path);postings.set(t,set);}
  const idf=new Map([...frequency].map(([t,n])=>[t,1+Math.log((pages.length+1)/(n+1))]));
  const cache=new Map<string,Match[]>();
  function ranked(path:string):Match[]{
    if(cache.has(path))return cache.get(path)!;
    const p=byPath.get(path);if(!p)return [];
    const candidates=new Set(p.approved);
    for(const t of p.terms)for(const target of postings.get(t)||[])candidates.add(target);
    const matches=[...candidates].flatMap(target=>{const b=byPath.get(target);const m=b&&scorePair(p,b,idf);return m?[m]:[];}).sort((a,b)=>Number(b.editorial)-Number(a.editorial)||b.score-a.score||a.path.localeCompare(b.path));
    const automatic=matches.filter(m=>!m.editorial);
    for(let i=0;i<automatic.length;i++){const m=automatic[i],lead=m.score-(automatic[i+1]?.score||0);m.confidence=i===0&&m.score>=85&&lead>=10?'high':m.score>=75?'secondary':'review';}
    cache.set(path,matches);return matches;
  }
  function select(path:string,limit=5,excluded:string[]=[]):Match[]{
    const eligible=ranked(path).filter(m=>!excluded.includes(m.path)&&(m.editorial||m.confidence==='high'||m.confidence==='secondary'));
    const selected:Match[]=[];
    // Greedy diversity: penalize substantially repeated title concepts, never promote weak matches.
    while(selected.length<limit&&eligible.length){
      eligible.sort((a,b)=>utility(b)-utility(a)||a.path.localeCompare(b.path));
      selected.push(eligible.shift()!);
    }
    function utility(m:Match){const title=tokens(byPath.get(m.path)!.title);const redundancy=Math.max(0,...selected.map(s=>fraction(overlap(title,tokens(byPath.get(s.path)!.title)).length,title.length,tokens(byPath.get(s.path)!.title).length)));return (m.editorial?200:0)+m.score-12*redundancy;}
    return selected;
  }
  return {byPath,ranked,select};
}
export function duplicateCandidates(pages:PageProfile[]) {
  const groups=new Map<string,PageProfile[]>();
  for(const p of pages){const key=tokens(p.title).sort().join(' ');if(!key)continue;groups.set(key,[...(groups.get(key)||[]),p]);}
  return [...groups.values()].filter(g=>g.length>1).flatMap(g=>g.slice(1).map(p=>({paths:[g[0].path,p.path],reason:'Same normalized title; manual task/method/content review required',action:'review-only'})));
}
