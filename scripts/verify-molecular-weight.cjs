const fs=require('node:fs'),assert=require('node:assert/strict'),ts=require('typescript');
require.extensions['.ts']=(m,p)=>m._compile(ts.transpileModule(fs.readFileSync(p,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,p);
const {resolveSemrushPhaseOneB:resolve}=require('../components/calculators/semrush-phase-one-b.ts');
const calc=a=>resolve({slug:'molecular-weight-calculator',a,b:'',c:'',d:'',e:'',cash:String}).calculate();
for(const [formula,mass,counts] of [
 ['H2O',18.015,{H:2,O:1}],['H₂O',18.015,{H:2,O:1}],
 ['C6H12O6',180.156,{C:6,H:12,O:6}],['Ca(OH)2',74.092,{Ca:1,O:2,H:2}],
 ['Al2(SO4)3',342.1311,{Al:2,S:3,O:12}],['CuSO4·5H2O',249.677,{Cu:1,S:1,O:9,H:10}],
 ['CuSO4.5H2O',249.677,{Cu:1,S:1,O:9,H:10}],['((CH3)2)3',90.21,{C:6,H:18}]
]){
 const rows=calc(formula);assert(Math.abs(Number(rows[0].value.replace(/[^\d.]/g,''))-mass)<.0001,formula);
 for(const [el,count] of Object.entries(counts))assert(rows.some(r=>r.label===`${el} × ${count}`),formula+' '+el);
 const percent=rows.filter(r=>r.note?.includes('% by mass')).reduce((sum,r)=>sum+Number(r.note.match(/([\d.]+)%/)[1]),0);assert(Math.abs(percent-100)<.03,formula+' composition');
}
for(const formula of ['', 'h2o','Xx2','H0','Ca(OH','H2O)','()','H2O..NaCl','H9007199254740993','(H9007199254740991)2','H9007199254740991H','('.repeat(200)+'H'+')'.repeat(200),'H'.repeat(4097)])assert.match(calc(formula)[0].value,/Enter a valid formula/,formula.slice(0,40));
console.log('Molecular mass, atom counts, composition, Unicode subscripts, hydrates and malformed-input limits passed.');
