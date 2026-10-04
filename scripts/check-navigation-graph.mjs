// Validate exported, visible <a href> links; no network or external package needed.
import {readFileSync,existsSync,statSync,writeFileSync} from 'node:fs';
const root='out';
const file=p=>p==='/'?`${root}/index.html`:`${root}${p.endsWith('/')?p:p+'/'}index.html`;
const clean=s=>s.replace(/<script\b[\s\S]*?<\/script>/gi,'').replace(/<style\b[\s\S]*?<\/style>/gi,'');
const attribute=(tag,name)=>tag.match(new RegExp(`\\b${name}="([^"]*)"`,'i'))?.[1];
export function anchors(html){
 return [...clean(html).matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].flatMap(m=>{
  const href=attribute(m[1],'href');if(!href)return [];
  const imageAlt=[...m[2].matchAll(/<img\b([^>]*)>/gi)].map(i=>attribute(i[1],'alt')||'').join(' ');
  const text=(m[2].replace(/<[^>]*>/g,' ')+' '+imageAlt).replace(/\s+/g,' ').trim();
  return [{href:href.replace(/&amp;/g,'&'),text}];
 });
}
export function auditGraph(paths,profiles,htmlForPath,assetExists){
 const graph=new Map([...paths].map(p=>[p,new Set()]));
 const incoming=new Map([...profiles].map(p=>[p,new Set()]));
 const broken=[],empty=[];
 for(const source of paths){
  const html=htmlForPath(source),main=html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1]||'';
  for(const [content,inMain] of [[html,false],[main,true]])for(const a of anchors(content)){
   const url=new URL(a.href,'https://solvepilot.xyz'+source);
   if(!['http:','https:'].includes(url.protocol)||url.hostname!=='solvepilot.xyz')continue;
   const target=decodeURI(url.pathname);
   if(paths.has(target)){
    if(!inMain)graph.get(source).add(target);
    if(inMain&&source!==target&&profiles.has(source)&&profiles.has(target))incoming.get(target).add(source);
    if(!inMain&&!a.text)empty.push({source,target});
   }else if(!assetExists(target)&&!a.href.startsWith('#'))broken.push({source,target});
  }
 }
 const depth=new Map([['/',0]]),queue=['/'];
 for(let i=0;i<queue.length;i++)for(const target of graph.get(queue[i])||[])if(!depth.has(target)){depth.set(target,depth.get(queue[i])+1);queue.push(target);}
 return {sitemapUrls:paths.size,toolsAndGuides:profiles.size,reachableFromHomepage:depth.size,maxClicks:Math.max(...depth.values()),brokenInternalLinks:[...new Map(broken.map(p=>[p.source+' '+p.target,p])).values()],emptyInternalAnchors:empty,unreachable:[...paths].filter(p=>!depth.has(p)).sort(),missingContextualIncoming:[...incoming].filter(([,sources])=>!sources.size).map(([p])=>p).sort(),contextualIncomingCounts:Object.fromEntries([...incoming].sort(([a],[b])=>a.localeCompare(b)).map(([p,sources])=>[p,sources.size]))};
}
export function validateGraph(report){
 const errors=[];
 for(const key of ['brokenInternalLinks','emptyInternalAnchors','unreachable','missingContextualIncoming'])if(report[key].length)errors.push(`${key}: ${report[key].length} (${JSON.stringify(report[key].slice(0,8))})`);
 if(errors.length)throw new Error('Navigation graph gate failed:\n'+errors.join('\n'));
}
if(process.argv[1]?.endsWith('check-navigation-graph.mjs')){
 const paths=new Set([...readFileSync(`${root}/sitemap.xml`,'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>new URL(m[1]).pathname));
 const summary=JSON.parse(readFileSync('research/related-navigation-summary.json','utf8'));
 const report=auditGraph(paths,new Set(summary.profilePaths),p=>readFileSync(file(p),'utf8'),p=>existsSync(file(p))||(existsSync(root+p)&&statSync(root+p).isFile()));
 if(process.argv.includes('--report'))writeFileSync('research/navigation-graph-summary.json',JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({sitemapUrls:report.sitemapUrls,toolsAndGuides:report.toolsAndGuides,reachableFromHomepage:report.reachableFromHomepage,maxClicks:report.maxClicks,broken:report.brokenInternalLinks.length,emptyAnchors:report.emptyInternalAnchors.length,unreachable:report.unreachable.length,missingContextualIncoming:report.missingContextualIncoming.length}));
 validateGraph(report);
}
