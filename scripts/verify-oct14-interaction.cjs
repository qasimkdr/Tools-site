const fs=require('node:fs'),assert=require('node:assert/strict'),ts=require('typescript'),Module=require('node:module'),realLoad=Module._load;
require.extensions['.ts']=require.extensions['.tsx']=(m,p)=>m._compile(ts.transpileModule(fs.readFileSync(p,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX}}).outputText,p);
let states=[],cursor=0;const react=require('react'),hooks={...react,useMemo:f=>f(),useState:initial=>{const i=cursor++;if(!(i in states))states[i]=typeof initial==='function'?initial():initial;return[states[i],v=>{states[i]=typeof v==='function'?v(states[i]):v}];}};
Module._load=function(id,p,...r){if(id==='react'&&/\/components\/(Calculator|BirthdayGenerator|RentBuyTool)\.tsx$/.test(p?.filename||''))return hooks;return realLoad.call(this,id.startsWith('@/')?process.cwd()+'/'+id.slice(2):id,p,...r);};
global.requestAnimationFrame=f=>f();global.setTimeout=f=>0;
const {Calculator}=require('../components/Calculator.tsx');
const text=n=>Array.isArray(n)?n.map(text).join(''):n&&typeof n==='object'?text(n.props?.children):String(n??'');
function walk(n,predicate){if(Array.isArray(n)){for(const x of n){const found=walk(x,predicate);if(found)return found;}return null;}if(!n||typeof n!=='object')return null;if(predicate(n))return n;return walk(n.props?.children,predicate);}
function render(Component,props={}){cursor=0;return Component(props);}
function control(tree,label){const field=walk(tree,n=>n.props?.label===label||n.type==='label'&&text(n).startsWith(label));assert(field,'Missing actual field '+label);const resolved=typeof field.type==='function'?field.type(field.props):field;return walk(resolved,n=>['input','select','textarea'].includes(n.type));}
const button=(tree,label)=>{const b=walk(tree,n=>n.type==='button'&&text(n).startsWith(label));assert(b,'Missing button '+label);return b;};
const heading=tree=>text(walk(tree,n=>n.type==='h2'));

const {oct14Defaults}=require('../components/calculators/oct14-defaults.ts');
const cases={
'reputation-calculator':['4,300\n4,200','4.6','4.8'],
'pool-shock-calculator':['20000','usgal','1','8','50','1.2','no'],
'sourdough-starter-calculator':['100','total','2','3','1','50'],
'fixed-index-annuity-calculator':['200000','5,0,30','70','8','2','2','no'],
'love-calculator-paper':['Carol','Daniel','loves']};
const results=tree=>text(walk(tree,n=>n.props?.className?.startsWith('calc-results')));
for(const [slug,changes] of Object.entries(cases)){
 const base=[...oct14Defaults[slug]];if(slug==='pool-shock-calculator'){base[3]='6';base[6]='yes';}if(slug==='pool-salt-calculator'){base[3]='4000';base[5]='yes';}if(slug==='fixed-index-annuity-calculator')base[6]='yes';
 states=[];let tree=render(Calculator,{slug});assert.equal(heading(tree),'Click Calculate');
 const gateIndex=slug==='pool-salt-calculator'?5:['pool-shock-calculator','fixed-index-annuity-calculator'].includes(slug)?6:-1;
 if(gateIndex>=0){button(tree,'Calculate result').props.onClick();tree=render(Calculator,{slug});assert.equal(heading(tree),'Unable to calculate');assert(text(tree).includes('Check inputs'));}
 const {resolveOct14}=require('../components/calculators/roadmap-oct14.ts');const ctx={slug,a:base[0],b:base[1],c:base[2],d:base[3],e:base[4],f:base[5],g:base[6],cash:String};const labels=resolveOct14(ctx).labels;
 for(let i=0;i<changes.length;i++){
  states=[];tree=render(Calculator,{slug});for(let j=0;j<base.length;j++){control(tree,labels[j]).props.onChange({target:{value:base[j]}});tree=render(Calculator,{slug});}
  button(tree,'Calculate result').props.onClick();tree=render(Calculator,{slug});assert.notEqual(heading(tree),'Unable to calculate',slug+' checked base');const before=heading(tree),beforeResults=results(tree);
  control(tree,labels[i]).props.onChange({target:{value:changes[i]}});tree=render(Calculator,{slug});assert.equal(heading(tree),before);assert(text(tree).includes('Inputs changed'));
  button(tree,'Calculate result').props.onClick();tree=render(Calculator,{slug});assert.notEqual(results(tree),beforeResults,slug+' field '+labels[i]+' must affect submitted output');
 }
 states=[];tree=render(Calculator,{slug});control(tree,labels[0]).props.onChange({target:{value:''}});tree=render(Calculator,{slug});button(tree,'Calculate result').props.onClick();tree=render(Calculator,{slug});assert.equal(heading(tree),'Unable to calculate');assert(text(tree).includes('Check inputs'));
}
console.log('Oct14 interaction: five actual shared calculators, every visible input, explicit confirmation, retained results and invalid input badges passed.');
