import test from 'node:test';
import assert from 'node:assert/strict';
import {changes,submit,origin,key,validateManifest} from './indexnow.mjs';
const h='a'.repeat(64),commit='b'.repeat(40),url=p=>origin+p;
const m=pages=>({version:1,commit,pages});
test('new, changed, deleted and untouched canonical URLs',()=>{
 const old=m({[url('/old/')]:h,[url('/same/')]:h,[url('/changed/')]:h});
 const current=m({[url('/new/')]:h,[url('/same/')]:h,[url('/changed/')]: 'c'.repeat(64)});
 assert.deepEqual(changes(old,current),{added:[url('/new/')],updated:[url('/changed/')],deleted:[url('/old/')]});
 assert.equal(changes(null,current).added.length,3);assert.equal(changes(current,current).updated.length,0);
});
test('foreign, query and malformed URLs are rejected',()=>{
 for(const u of ['https://other.example/a/',url('/a/?q=1'),url('/a')])assert.throws(()=>validateManifest(m({[u]:h})));
 assert.throws(()=>validateManifest(m({})));
});
test('retry transient error, accept 202, preserve exact payload',async()=>{
 let calls=0;await submit([url('/deleted/')],async(endpoint,options)=>{
 assert.equal(endpoint,'https://api.indexnow.org/indexnow');const p=JSON.parse(options.body);assert.equal(p.key,key);assert.equal(p.keyLocation,origin+'/'+key+'.txt');assert.deepEqual(p.urlList,[url('/deleted/')]);return {status:++calls===1?429:202};
 },async()=>{});assert.equal(calls,2);
});
test('permanent rejection fails and no-op sends nothing',async()=>{
 await assert.rejects(submit([url('/a/')],async()=>({status:403}),async()=>{}));
 await submit([],async()=>{assert.fail('No-op must not submit');});
});
test('batch boundary splits at protocol limit',async()=>{
 const urls=Array.from({length:10001},(_,i)=>url('/'+i+'/'));let sizes=[];
 await submit(urls,async(_,o)=>{sizes.push(JSON.parse(o.body).urlList.length);return{status:200};});assert.deepEqual(sizes,[10000,1]);
});
