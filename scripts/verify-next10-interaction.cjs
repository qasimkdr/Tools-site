const fs=require('node:fs'),assert=require('node:assert/strict'),ts=require('typescript'),Module=require('node:module'),realLoad=Module._load;
require.extensions['.ts']=require.extensions['.tsx']=(m,p)=>m._compile(ts.transpileModule(fs.readFileSync(p,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX}}).outputText,p);
let states=[],cursor=0;const react=require('react'),hooks={...react,useMemo:f=>f(),useState:initial=>{const i=cursor++;if(!(i in states))states[i]=typeof initial==='function'?initial():initial;return[states[i],v=>{states[i]=typeof v==='function'?v(states[i]):v}];}};
Module._load=function(id,p,...r){if(id==='react'&&/\/components\/(Calculator|BirthdayGenerator|RentBuyTool)\.tsx$/.test(p?.filename||''))return hooks;return realLoad.call(this,id.startsWith('@/')?process.cwd()+'/'+id.slice(2):id,p,...r);};
global.requestAnimationFrame=f=>f();global.setTimeout=f=>0;
const {Calculator}=require('../components/Calculator.tsx'),{BirthdayGenerator}=require('../components/BirthdayGenerator.tsx'),{RentBuyTool}=require('../components/RentBuyTool.tsx');
const text=n=>Array.isArray(n)?n.map(text).join(''):n&&typeof n==='object'?text(n.props?.children):String(n??'');
function walk(n,predicate){if(Array.isArray(n)){for(const x of n){const found=walk(x,predicate);if(found)return found;}return null;}if(!n||typeof n!=='object')return null;if(predicate(n))return n;return walk(n.props?.children,predicate);}
function render(Component,props={}){cursor=0;return Component(props);}
function control(tree,label){const field=walk(tree,n=>n.props?.label===label||n.type==='label'&&text(n).startsWith(label));assert(field,'Missing actual field '+label);const resolved=typeof field.type==='function'?field.type(field.props):field;return walk(resolved,n=>['input','select','textarea'].includes(n.type));}
const button=(tree,label)=>{const b=walk(tree,n=>n.type==='button'&&text(n).startsWith(label));assert(b,'Missing button '+label);return b;};
const heading=tree=>text(walk(tree,n=>n.type==='h2'));
for(const [slug,label,value,gate] of [
 ['bowling-handicap-calculator','Entering average','100'],
 ['quilt-binding-calculator','Finished quilt width','100'],
 ['legal-deadline-calculator','Verified interval','10','Rule and all exclusions independently checked'],
 ['brick-calculator','Wall length','6'],
 ['bra-size-calculator','Snug underbust','31'],
 ['shelf-life-calculator','Duration being compared','720','Protocol assumptions independently checked'],
 ['paver-calculator','Net paving area','40'],
]){
 states=[];let tree=render(Calculator,{slug});assert.equal(heading(tree),'Click Calculate',slug+' initial gate');
 if(gate){button(tree,'Calculate result').props.onClick();tree=render(Calculator,{slug});assert.equal(heading(tree),'Unable to calculate',slug+' scope gate');assert.equal(text(walk(tree,n=>n.props?.className==='result-badge')),'Check inputs',slug+' must not label a rejected scenario as calculated');control(tree,gate).props.onChange({target:{value:'yes'}});tree=render(Calculator,{slug});}
 button(tree,'Calculate result').props.onClick();tree=render(Calculator,{slug});const before=heading(tree);assert.notEqual(before,'Unable to calculate',slug+' submitted default');
 control(tree,label).props.onChange({target:{value}});tree=render(Calculator,{slug});assert.equal(heading(tree),before,slug+' retained output');assert(text(tree).includes('Inputs changed'));
 button(tree,'Calculate result').props.onClick();tree=render(Calculator,{slug});assert.notEqual(heading(tree),before,slug+' resubmission changes output');
}
async function customChecks(){
 let savedBlob=null,savedName=null;global.document={createElement:()=>({href:'',set download(n){savedName=n;},click(){}})};global.URL.createObjectURL=b=>{savedBlob=b;return'blob:test';};global.URL.revokeObjectURL=()=>{};
 let sample=0;Object.defineProperty(globalThis,'crypto',{configurable:true,value:{getRandomValues:a=>{a[0]=sample++*731;return a;}}});
 states=[];let tree=render(BirthdayGenerator);assert.equal(heading(tree),'Click Generate');button(tree,'Generate birthdays').props.onClick();tree=render(BirthdayGenerator);button(tree,'Download CSV').props.onClick();const before=await savedBlob.text();assert.equal(before.trim().split('\n').length,11);assert(savedName.endsWith('.csv'));
 control(tree,'Number of birthdays').props.onChange({target:{value:'3'}});tree=render(BirthdayGenerator);button(tree,'Download CSV').props.onClick();assert.equal(await savedBlob.text(),before,'Edited fields must not mutate downloaded sample');
 button(tree,'Generate birthdays').props.onClick();tree=render(BirthdayGenerator);button(tree,'Download CSV').props.onClick();assert.equal((await savedBlob.text()).trim().split('\n').length,4);
 control(tree,'First eligible date').props.onChange({target:{value:'2200-01-01'}});tree=render(BirthdayGenerator);button(tree,'Generate birthdays').props.onClick();tree=render(BirthdayGenerator);assert(walk(tree,n=>n.props?.role==='alert'));button(tree,'Download CSV').props.onClick();assert.equal((await savedBlob.text()).trim().split('\n').length,4,'Invalid generation preserves last valid sample');
 states=[];tree=render(RentBuyTool);assert.equal(heading(tree),'Click Calculate');button(tree,'Calculate result').props.onClick();tree=render(RentBuyTool);button(tree,'Download year-by-year CSV').props.onClick();const housing=await savedBlob.text();assert.equal(housing.trim().split('\n').length,6);
 control(tree,'Starting monthly rent').props.onChange({target:{value:'3000'}});tree=render(RentBuyTool);button(tree,'Download year-by-year CSV').props.onClick();assert.equal(await savedBlob.text(),housing,'Rent edits preserve submitted output and CSV');button(tree,'Calculate result').props.onClick();tree=render(RentBuyTool);button(tree,'Download year-by-year CSV').props.onClick();assert.notEqual(await savedBlob.text(),housing);
 control(tree,'Mortgage term').props.onChange({target:{value:'0'}});tree=render(RentBuyTool);button(tree,'Calculate result').props.onClick();tree=render(RentBuyTool);assert(walk(tree,n=>n.props?.role==='alert'));assert(button(tree,'Download year-by-year CSV'),'Invalid inputs preserve valid downloadable scenario');
 console.log('Next10 UI: all actual callbacks, explicit scope gates, retained submitted outputs, validation errors and downloaded birthday/housing Blob contents passed.');
}
customChecks().catch(e=>{console.error(e);process.exit(1);});
