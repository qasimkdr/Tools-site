const fs=require('node:fs'),assert=require('node:assert/strict'),ts=require('typescript'),Module=require('node:module'),old=Module._load;
require.extensions['.ts']=(m,p)=>m._compile(ts.transpileModule(fs.readFileSync(p,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,p);
Module._load=function(id,p,...r){return old.call(this,id.startsWith('@/')?process.cwd()+'/'+id.slice(2):id,p,...r)};
const {createMatcher,scorePair,duplicateCandidates,tokens}=require('../lib/relevance-engine.ts');
const {navigationProfiles:pages,relatedNavigation:matcher}=require('../lib/related-navigation.ts');
const profile=(path,title,extra={})=>({path,title,description:title,icon:'',kind:'tool',region:'global',category:'test',terms:tokens(title),capabilities:tokens(title),approved:[],indexable:true,...extra});
const energy=profile('/energy/','Battery electrical energy voltage capacity');
assert.equal(scorePair(energy,energy),null);
assert.equal(scorePair(energy,profile('/alias/',energy.title,{indexable:false})),null);
assert.equal(scorePair(energy,profile('/pk/',energy.title,{region:'pakistan'})),null);
assert.equal(scorePair(energy,profile('/blocked/',energy.title,{blocked:['/energy/']})),null);
assert.equal(scorePair({...energy,scope:'2025'},profile('/year/',energy.title,{scope:'2026'})),null);
assert.equal(scorePair(profile('/nutrition/','Nutrition macro calories fat'),profile('/gdp/','Macroeconomics GDP expenditure')),null);
assert.equal(scorePair(profile('/gear/','Gear ratio speed rpm'),profile('/debt/','Debt ratio income payment')),null);
assert.equal(scorePair(profile('/wh/','Watt hour energy'),profile('/runtime/','Battery runtime load')),null);
assert.equal(scorePair(profile('/a/','Finance calculator'),profile('/b/','Finance guide')),null);
assert.equal(scorePair(profile('/a/','Unrelated title',{approved:['/b/']}),profile('/b/','Different subject')).editorial,true);
const tied=createMatcher([energy,profile('/b/',energy.title),profile('/c/',energy.title)]);
assert(tied.ranked('/energy/').every(m=>m.confidence!=='high'));
assert.equal(duplicateCandidates([energy,profile('/copy/',energy.title)]).length,1);
const report={version:1,policy:'navigation only; scores are not probabilities; duplicate candidates require manual review',pages:pages.length,selectedLinks:0,automaticLinks:0,editorialLinks:0,unmatched:[],incoming:{},matches:[],duplicateCandidates:duplicateCandidates(pages)};
for(const p of pages){
 assert(/^\/(tools|pk\/tools|guides|pdf-tools|document-tools|image-tools|media-tools|archive-tools|generator-tools)\/[^/]+\/$/.test(p.path));
 const matches=matcher.select(p.path);assert(matches.length<=5);assert.equal(new Set(matches.map(m=>m.path)).size,matches.length);
 if(!matches.length)report.unmatched.push(p.path);
 for(const m of matches){assert.notEqual(m.path,p.path);assert(matcher.byPath.get(m.path)?.indexable);assert(m.editorial||m.score>=75);report.selectedLinks++;report[m.editorial?'editorialLinks':'automaticLinks']++;report.incoming[m.path]=(report.incoming[m.path]||0)+1;}
 report.matches.push({source:p.path,selected:matches,review:matcher.ranked(p.path).filter(m=>m.confidence==='review').slice(0,3)});
}
assert.equal(pages.length,603);
assert.equal(matcher.select('/tools/watt-hour-calculator/',5,['/tools/watt-hour-calculator/']).some(m=>m.path==='/tools/watt-hour-calculator/'),false);
let renderedBlocks=0;
if(fs.existsSync('out/sitemap.xml'))for(const p of pages){
 const file=`out${p.path}index.html`;assert(fs.existsSync(file),p.path+' export missing');
 const html=fs.readFileSync(file,'utf8'),block=html.match(/<section[^>]*data-related-navigation="v1"[^>]*>([\s\S]*?)<\/section>/);
 if(!block)continue;renderedBlocks++;
 const targets=[...block[1].matchAll(/href="([^"#]+)"/g)].map(m=>m[1]);
 assert(targets.length<=5);assert.equal(new Set(targets).size,targets.length);
 const eligible=new Set(matcher.select(p.path,1000).map(m=>m.path));
 for(const target of targets)assert(eligible.has(target),p.path+' invalid rendered match '+target);
}

// Every route uses the same matcher; canonical logic stays in the existing route metadata.
for(const prefix of ['tools','pk/tools','guides','pdf-tools','document-tools','image-tools','media-tools','archive-tools','generator-tools'])assert(fs.readFileSync(`app/${prefix}/[slug]/page.tsx`,'utf8').includes('<RelatedNavigation path='));
if(process.argv.includes('--report')){fs.mkdirSync('research',{recursive:true});fs.writeFileSync('research/related-navigation-report.json',JSON.stringify(report,null,2)+'\n');}
console.log(JSON.stringify({pages:report.pages,selectedLinks:report.selectedLinks,automaticLinks:report.automaticLinks,editorialLinks:report.editorialLinks,unmatched:report.unmatched.length,duplicateReviewPairs:report.duplicateCandidates.length,renderedBlocks}));
