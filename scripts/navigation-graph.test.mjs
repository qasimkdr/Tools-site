import test from 'node:test';
import assert from 'node:assert/strict';
import {anchors,auditGraph,validateGraph} from './check-navigation-graph.mjs';
test('exported anchors ignore script data and keep image alt',()=>{
 assert.deepEqual(anchors('<script>"<a href="/fake/">fake</a>"</script><a href="/real/"><img alt="Readable"></a>'),[{href:'/real/',text:'Readable'}]);
});
const pages=new Set(['/','/directory/','/a/','/b/']),profiles=new Set(['/a/','/b/']);
const good={'/':'<main><a href="/directory/">Directory</a></main>','/directory/':'<main><a href="/a/">A</a><a href="/b/">B</a></main>','/a/':'<main><a href="/b/">B task</a></main>','/b/':'<main><a href="/a/">A task</a></main>'};
const audit=html=>auditGraph(pages,profiles,p=>html[p],()=>false);
test('directory reachability and contextual incoming are distinct',()=>{const r=audit(good);validateGraph(r);assert.equal(r.maxClicks,2);const r2=audit({...good,'/b/':'<header><a href="/a/">Header</a></header><main>B</main>'});assert.deepEqual(r2.missingContextualIncoming,['/a/']);assert.throws(()=>validateGraph(r2));});
test('broken links, empty anchors and orphans fail independently',()=>{
 const r=audit({...good,'/directory/':'<main><a href="/missing/">Missing</a></main>','/a/':'<main><a href="/b/"></a></main>'});assert.equal(r.brokenInternalLinks.length,1);assert.equal(r.emptyInternalAnchors.length,1);assert(r.unreachable.includes('/a/'));assert.throws(()=>validateGraph(r));
});
