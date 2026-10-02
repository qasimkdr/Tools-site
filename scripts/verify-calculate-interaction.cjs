// Execute the real shared component's callbacks with persistent hook state.
// This component-level harness requires no downloadable browser binary.
const fs=require('node:fs'),assert=require('node:assert/strict'),ts=require('typescript'),Module=require('node:module');
require.extensions['.ts']=require.extensions['.tsx']=(m,file)=>m._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,jsx:ts.JsxEmit.ReactJSX}}).outputText,file);
const states=[];let slot=0;const react=require('react'),realLoad=Module._load;
const hooks={...react,useMemo:fn=>fn(),useState:init=>{const index=slot++;if(!(index in states))states[index]=typeof init==='function'?init():init;return[states[index],v=>{states[index]=typeof v==='function'?v(states[index]):v}]} };
Module._load=function(id,parent,...rest){if(id==='react'&&parent?.filename.endsWith('/components/Calculator.tsx'))return hooks;return realLoad.call(this,id,parent,...rest)};
global.requestAnimationFrame=fn=>fn();
const {Calculator}=require('../components/Calculator.tsx');
const walk=(node,predicate)=>{if(!node||typeof node!=='object')return null;if(predicate(node))return node;for(const child of [node.props?.children].flat(Infinity)){const found=walk(child,predicate);if(found)return found;}return null};
const render=(slug,currencyNeutral=true)=>{slot=0;return Calculator({slug,currencyNeutral})};
const result=t=>walk(t,n=>n.type==='h2').props.children;
const button=t=>walk(t,n=>n.type==='button'&&n.props.className==='calculate-button');
const field=(t,label)=>walk(t,n=>typeof n.type==='function'&&n.props.label===label);
for(const slug of ['surface-area-calculator','volume-calculator','sourdough-calculator','discount-calculator','decimals-calculator','implicit-differentiation-calculator','partial-fraction-calculator','ohms-law-calculator','calories-burned-calculator','pine-straw-calculator','fence-post-depth-calculator','lead-time-calculator','recessed-light-calculator','greek-gematria-calculator','time-off-calculator','running-pace-calculator','interest-rate-calculator','epoxy-resin-calculator','molarity-calculator','garage-door-spring-calculator','lawn-mowing-cost-calculator','quarter-mile-calculator','firewood-cord-calculator','nether-portal-calculator','arv-calculator','breastfeeding-calorie-calculator','measured-visual-acuity-converter','business-break-even-calculator','sales-tax-vat-calculator','seller-financing-calculator','savings-withdrawal-runway-calculator','cubic-yard-calculator','air-force-pt-test-calculator','vpd-calculator','goat-gestation-calculator','gas-oil-mix-calculator','macro-calculator','macroeconomics-calculator','vinegar-carbon-dosing-calculator','radical-expression-simplifier','wedding-liquor-calculator','mean-standard-deviation-calculator','soil-calculator','profit-margin-calculator-global','dog-pregnancy-calculator','car-lease-vs-buy-calculator','aspect-ratio-calculator']){
 states.length=0;let tree=render(slug);assert.equal(result(tree),"Click Calculate",slug+" must wait for the first click");button(tree).props.onClick();tree=render(slug);const before=result(tree);
 const name=slug==='surface-area-calculator'?'Edge':slug==='volume-calculator'?'Length':slug==='sourdough-calculator'?'Final dough weight':'Original price';
 const input=field(tree,name)||walk(tree,n=>typeof n.type==='function'&&n.props.onChange);assert(input,slug+' input');input.props.onChange(slug==='sourdough-calculator'?'2000':'7');tree=render(slug);assert.equal(result(tree),before,slug+' must keep submitted output while editing');
 button(tree).props.onClick();tree=render(slug);assert.notEqual(result(tree),before,slug+' must update on Calculate');
}
for(const slug of ['arv-calculator','lawn-mowing-cost-calculator','firewood-cord-calculator','macroeconomics-calculator','profit-margin-calculator-global','car-lease-vs-buy-calculator']){states.length=0;let tree=render(slug,false);button(tree).props.onClick();tree=render(slug,false);assert(!result(tree).includes('PKR'),slug+' must not assume Pakistan currency');}
console.log('Shared component interaction passed: new math, volume, sourdough and existing discount results stay fixed during editing and update on Calculate.');

// ABG: edit sodium so the primary gap changes; measured pH affects the separate comparison.
states.length=0;let abg=render('abg-calculator');assert.equal(result(abg),'Click Calculate');button(abg).props.onClick();abg=render('abg-calculator');const oldGap=result(abg);field(abg,'Serum sodium').props.onChange('150');abg=render('abg-calculator');assert.equal(result(abg),oldGap);button(abg).props.onClick();assert.notEqual(result(render('abg-calculator')),oldGap);
