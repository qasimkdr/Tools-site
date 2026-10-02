// Verify the actual resolver with independent worked examples and parser boundaries.
const fs=require('node:fs'),assert=require('node:assert/strict'),ts=require('typescript');
require.extensions['.ts']=(m,file)=>m._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,file);
const {resolveRoadmap126:resolve,parsePolynomial}=require('../components/calculators/roadmap-126-145.ts');
const calc=(slug,...v)=>{const [a='',b='',c='',d='',e='']=v.map(String);const conf=resolve({slug,a,b,c,d,e,cash:x=>x.toFixed(2)});assert(conf,slug);return conf.calculate()};
const value=(s,...v)=>calc(s,...v)[0].value,bad=(s,...v)=>assert.equal(value(s,...v),'Unable to calculate',s+' invalid input');
assert.equal(value('calories-burned-calculator',70,30,'walk','minutes',100),'139.65 kcal');
assert.equal(value('calories-burned-calculator',70,3000,'walk','steps',100),'139.65 kcal');bad('calories-burned-calculator',70,3000,'bike','steps',100);
assert.equal(value('pine-straw-calculator',20,10,50,10),'5');bad('pine-straw-calculator',20,10,0,10);
for(const [mode,b,c] of [['vi',12,.5],['vr',12,24],['ir',.5,24]]){const rows=calc('ohms-law-calculator',mode,b,c,'gold');assert.equal(rows[0].value,'24 Ω');assert.equal(rows[3].value,'6 W')}
assert.equal(value('ohms-law-calculator','code',100,0,'gold'),'brown · black · brown · gold');assert.equal(value('ohms-law-calculator','code',1000,0,'gold'),'brown · black · red · gold');bad('ohms-law-calculator','code',123,0,'gold');
assert.equal(value('fence-post-depth-calculator',6,'third',0,6),'24 in');assert.equal(calc('fence-post-depth-calculator',6,'third',36,6)[1].value,'42 in');
assert.equal(value('lead-time-calculator',1,5,3,1),'10 calendar days');bad('lead-time-calculator',1,-5,3,1);
assert.equal(value('recessed-light-calculator',5,4,800,150,.7),'6');bad('recessed-light-calculator',5,4,0,150,.7);
assert.equal(value('running-pace-calculator',5,30,'km',1,'pace'),'6:00 per km');assert.match(value('running-pace-calculator',5.5,33,'km',2,'splits'),/2 km: 12 min · 4 km: 24 min · 5.5 km: 33 min \(finish\)/);bad('running-pace-calculator',500,30,'km',1,'splits');
assert.equal(value('partial-fraction-calculator','1','1,-1'),'0.5/(x − 1) − 0.5/(x + 1)');
assert.equal(value('partial-fraction-calculator','1','1,1'),'0/(x − 1) + 1/(x − 1)^2');
assert.equal(calc('partial-fraction-calculator','1,0,0','1,-1')[2].value,'1');bad('partial-fraction-calculator','hello','1');bad('partial-fraction-calculator','1','');
assert.equal(calc('implicit-differentiation-calculator','x^2+y^2=25',3,4)[2].value,'-0.75');assert.match(calc('implicit-differentiation-calculator','x^2+y^2=25',1,1)[2].value,/not on/);assert.match(calc('implicit-differentiation-calculator','x^2+y^2=25',5,0)[2].value,/undefined/);
assert(parsePolynomial('2*x*y+y^2=3'));for(const s of ['x^-2','sin(x)','x/(y)','2*','x^13','x^8*y^8','process.exit()','x==y','*x'])assert.equal(parsePolynomial(s),null,s);
assert.equal(value('greek-gematria-calculator','αβγ'),'6');assert.equal(value('greek-gematria-calculator','ίς Σ'),'410');bad('greek-gematria-calculator','abc');bad('greek-gematria-calculator','α1');
assert.equal(value('time-off-calculator',40,4,6,16,80),'48 hours');assert.equal(value('time-off-calculator',40,4,6,90,50),'-40 hours');bad('time-off-calculator',40,4,1.5,16,80);
assert.equal(value('interest-rate-calculator',1000,12,2,'simple',0),'1240.00');
for(const [a,b,mode,p,expected] of [['0.1','0.2','add',10,'0.3'],['1','3','divide',4,'0.3333'],['-.1','.2','subtract',3,'−0.3'],['-1.25','1','multiply',1,'−1.3'],['1.25','1','multiply',1,'1.3'],['2.','+.5','multiply',5,'1'],['1','8','divide',30,'0.125'],['0','2','divide',0,'0']])assert.equal(value('decimals-calculator',a,b,mode,p),expected);
bad('decimals-calculator',1,0,'divide',5);bad('decimals-calculator','1e3',2,'add',5);bad('decimals-calculator',1,2,'add',31);
console.log('Roadmap 126–145: MET, materials, electric modes, splits, lighting, algebra, Greek, PTO and exact decimal examples/boundaries passed.');
