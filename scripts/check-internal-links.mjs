// Internal-link gate on the exported site (docs/SEO-PLAYBOOK.md §5.3, §9.2).
// Every canonical tool/guide page: ≥3 contextual in-article links, exactly 6 related cards
// (excluding itself), ≥3 inbound related-card links, no broken internal hrefs, no generic anchors.
import {readFileSync,existsSync} from "node:fs";
import {join} from "node:path";

const out=join(process.cwd(),"out");
const sitemap=readFileSync(join(out,"sitemap.xml"),"utf8");
const urls=[...sitemap.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map(m=>m[1]);
const detail=urls.filter(u=>/^\/(tools|pk\/tools|pdf-tools|document-tools|image-tools|media-tools|archive-tools|generator-tools|guides)\/[^/]+\/$/.test(u));
const strip=h=>h.replace(/<script[\s\S]*?<\/script>/g,"");
const failures=[],inbound=new Map(detail.map(u=>[u,0])),broken=new Set();
const exists=href=>existsSync(join(out,href,"index.html"))||existsSync(join(out,href));
const generic=/^(click here|here|read more|more|learn more|this page|link)$/i;
let contextualTotal=0;
for(const u of detail){
  const html=strip(readFileSync(join(out,u,"index.html"),"utf8"));
  const ctx=html.match(/data-testid="contextual-links"[^>]*>([\s\S]*?)<\/section>/);
  const ctxLinks=ctx?[...new Set([...ctx[1].matchAll(/href="([^"#]+)"/g)].map(m=>m[1]).filter(h=>h!==u&&detail.includes(h)))]:[];
  contextualTotal+=ctxLinks.length;
  if(ctxLinks.length<3)failures.push(`${u}: ${ctxLinks.length} contextual in-article links (minimum 3)`);
  const rel=html.match(/data-testid="related-list"[^>]*>([\s\S]*?)<\/section>/);
  if(!u.startsWith("/guides/")){
    const cards=rel?[...new Set([...rel[1].matchAll(/<a[^>]*class="tool-card"[^>]*href="([^"#]+)"|<a[^>]*href="([^"#]+)"[^>]*class="tool-card"/g)].map(m=>m[1]||m[2]))]:[];
    if(cards.length!==6)failures.push(`${u}: ${cards.length} related cards (expected 6)`);
    if(cards.includes(u))failures.push(`${u}: related block links to itself`);
    for(const c of cards)if(inbound.has(c))inbound.set(c,inbound.get(c)+1);
  }
  const main=html.match(/<main id="main">([\s\S]*)<\/main>/)?.[1]||"";
  for(const m of main.matchAll(/<a[^>]*href="(\/[^"#?]*)"[^>]*>([\s\S]*?)<\/a>/g)){
    if(!exists(m[1]))broken.add(`${u} -> ${m[1]}`);
    const text=m[2].replace(/<[^>]+>/g,"").replace(/[→›]/g,"").trim();
    if(generic.test(text))failures.push(`${u}: generic anchor "${text}" -> ${m[1]}`);
  }
}
const tools=detail.filter(u=>!u.startsWith("/guides/"));
for(const u of tools)if(inbound.get(u)<3)failures.push(`${u}: only ${inbound.get(u)} inbound related-card links (minimum 3)`);
for(const b of broken)failures.push(`broken internal link ${b}`);
const summary={pages:detail.length,toolPages:tools.length,contextualLinks:contextualTotal,minInbound:Math.min(...tools.map(u=>inbound.get(u))),maxInbound:Math.max(...tools.map(u=>inbound.get(u))),brokenLinks:broken.size};
if(failures.length){console.error(`Internal-link gate failed (${failures.length}):\n`+failures.slice(0,60).join("\n"));process.exit(1);}
console.log("Internal-link gate passed",JSON.stringify(summary));
