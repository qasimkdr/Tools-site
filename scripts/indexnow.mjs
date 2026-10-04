import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
export const origin='https://solvepilot.xyz';
export const key='3f246ba802d64d06a91e573ea1c728b4';
export const manifestPath='/indexnow-manifest.json';
const digest=s=>createHash('sha256').update(s).digest('hex');
export function validateManifest(m){
 if(m?.version!==1||!/^([a-f0-9]{40})$/.test(m.commit)||!m.pages||Array.isArray(m.pages)||typeof m.pages!=='object')throw Error('Invalid IndexNow manifest');
 for(const [url,hash] of Object.entries(m.pages)){
  const u=new URL(url);if(u.origin!==origin||u.search||u.hash||!u.pathname.endsWith('/')||!/^([a-f0-9]{64})$/.test(hash))throw Error('Invalid manifest URL/hash');
 }
 if(!Object.keys(m.pages).length)throw Error('Empty manifest refused');return m;
}
export function changes(previous,current){
 validateManifest(current);if(previous)validateManifest(previous);
 const old=previous?.pages||{};
 return {added:Object.keys(current.pages).filter(u=>!(u in old)),updated:Object.keys(current.pages).filter(u=>u in old&&old[u]!==current.pages[u]),deleted:Object.keys(old).filter(u=>!(u in current.pages))};
}
export async function generate(){
 const xml=await readFile('out/sitemap.xml','utf8');const urls=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
 if(new Set(urls).size!==urls.length)throw Error('Duplicate sitemap URLs');
 const pages={};const assets=new Map();
 for(const url of urls.sort()){
  const u=new URL(url);if(u.origin!==origin)throw Error('Unexpected sitemap origin');
  const html=await readFile('out'+u.pathname+'index.html','utf8');
  const scripts=[...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m=>m[1]).filter(s=>s.startsWith('/_next/'));
  const hashes=[];for(const src of scripts){if(!assets.has(src))assets.set(src,digest(await readFile('out'+src)));hashes.push(assets.get(src));}
  // Ignore inline hydration/build IDs, but retain rendered content, metadata and actual JS changes.
  const clean=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<link\b[^>]*href="\/_next\/[^>]*>/g,'');
  pages[url]=digest(clean+hashes.sort().join(''));
 }
 const commit=execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
 const m=validateManifest({version:1,commit,pages});await writeFile('out'+manifestPath,JSON.stringify(m));console.log(`IndexNow manifest generated: ${urls.length} canonical URLs; no notifications during build.`);
}
const pause=ms=>new Promise(r=>setTimeout(r,ms));
export async function submit(urlList,fetcher=fetch,wait=pause){
 for(let start=0;start<urlList.length;start+=10000){
  const payload={host:new URL(origin).host,key,keyLocation:`${origin}/${key}.txt`,urlList:urlList.slice(start,start+10000)};
  for(let attempt=0;;attempt++){
   let response;try{response=await fetcher('https://api.indexnow.org/indexnow',{method:'POST',headers:{'Content-Type':'application/json; charset=utf-8'},body:JSON.stringify(payload),signal:AbortSignal.timeout(30000)});}catch(error){if(attempt>=4)throw error;await wait(2000*2**attempt);continue;}
   if([200,202].includes(response.status)){console.log(`IndexNow received ${payload.urlList.length} URLs: HTTP ${response.status}${response.status===202?' (key validation pending)':''}`);break;}
   if(attempt<4&&(response.status===429||response.status>=500)){await wait(2000*2**attempt);continue;}
   throw Error(`IndexNow rejected submission: HTTP ${response.status}`);
  }
 }
}
export async function notify(){
 const expected=process.env.GITHUB_SHA||execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
 let current;
 for(let attempt=0;attempt<60;attempt++){
  try{const r=await fetch(`${origin}${manifestPath}?commit=${expected}`,{cache:'no-store',signal:AbortSignal.timeout(15000)});if(r.ok){const m=validateManifest(await r.json());if(m.commit===expected){current=m;break;}}}catch(error){console.log(`Waiting for production: ${error.message}`);}
  await pause(10000);
 }
 if(!current)throw Error('Expected commit is not live; no URLs submitted and checkpoint unchanged');
 const r=await fetch(`${origin}/${key}.txt`,{signal:AbortSignal.timeout(15000)});if(!r.ok||(await r.text()).trim()!==key)throw Error('Live ownership key missing');
 let previous;try{previous=JSON.parse(await readFile('.indexnow-state/manifest.json','utf8'));}catch(e){if(e.code!=='ENOENT')throw e;}
 const delta=changes(previous,current);console.log(JSON.stringify({commit:current.commit,added:delta.added.length,updated:delta.updated.length,deleted:delta.deleted.length}));
 await submit([...delta.added,...delta.updated,...delta.deleted]);
 await mkdir('.indexnow-state',{recursive:true});await writeFile('.indexnow-state/manifest.json',JSON.stringify(current));
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){
 const mode=process.argv[2];if(mode==='generate')await generate();else if(mode==='notify')await notify();else throw Error('Usage: node scripts/indexnow.mjs generate|notify');
}
