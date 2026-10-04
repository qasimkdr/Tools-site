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
for(const slug of ['percent-calculator','mulch-calculator','concrete-block-calculator','basis-points-calculator','rounding-calculator','tire-size-calculator','anniversary-calculator','compound-interest-calculator','grade-curve-calculator','military-chart-points-total','surface-area-calculator','volume-calculator','sourdough-calculator','discount-calculator','decimals-calculator','implicit-differentiation-calculator','partial-fraction-calculator','ohms-law-calculator','calories-burned-calculator','pine-straw-calculator','fence-post-depth-calculator','lead-time-calculator','recessed-light-calculator','greek-gematria-calculator','time-off-calculator','running-pace-calculator','interest-rate-calculator','epoxy-resin-calculator','molarity-calculator','garage-door-spring-calculator','lawn-mowing-cost-calculator','quarter-mile-calculator','firewood-cord-calculator','nether-portal-calculator','arv-calculator','breastfeeding-calorie-calculator','measured-visual-acuity-converter','business-break-even-calculator','sales-tax-vat-calculator','seller-financing-calculator','savings-withdrawal-runway-calculator','cubic-yard-calculator','air-force-pt-test-calculator','vpd-calculator','goat-gestation-calculator','gas-oil-mix-calculator','macro-calculator','macroeconomics-calculator','vinegar-carbon-dosing-calculator','radical-expression-simplifier','wedding-liquor-calculator','mean-standard-deviation-calculator','soil-calculator','profit-margin-calculator-global','dog-pregnancy-calculator','car-lease-vs-buy-calculator','aspect-ratio-calculator']){
 states.length=0;let tree=render(slug);assert.equal(result(tree),"Click Calculate",slug+" must wait for the first click");button(tree).props.onClick();tree=render(slug);const before=result(tree);
 const name=slug==='surface-area-calculator'?'Edge':slug==='volume-calculator'?'Length':slug==='sourdough-calculator'?'Final dough weight':'Original price';
 const input=field(tree,name)||walk(tree,n=>typeof n.type==='function'&&n.props.onChange);assert(input,slug+' input');input.props.onChange(slug==='sourdough-calculator'?'2000':'7');tree=render(slug);assert.equal(result(tree),before,slug+' must keep submitted output while editing');
 button(tree).props.onClick();tree=render(slug);assert.notEqual(result(tree),before,slug+' must update on Calculate');
}
for(const slug of ['basis-points-calculator','compound-interest-calculator','arv-calculator','lawn-mowing-cost-calculator','firewood-cord-calculator','macroeconomics-calculator','profit-margin-calculator-global','car-lease-vs-buy-calculator']){states.length=0;let tree=render(slug,false);button(tree).props.onClick();tree=render(slug,false);assert(!result(tree).includes('PKR'),slug+' must not assume Pakistan currency');}
console.log('Shared component interaction passed: new math, volume, sourdough and existing discount results stay fixed during editing and update on Calculate.');

// ABG: edit sodium so the primary gap changes; measured pH affects the separate comparison.
states.length=0;let abg=render('abg-calculator');assert.equal(result(abg),'Click Calculate');button(abg).props.onClick();abg=render('abg-calculator');const oldGap=result(abg);field(abg,'Serum sodium').props.onChange('150');abg=render('abg-calculator');assert.equal(result(abg),oldGap);button(abg).props.onClick();assert.notEqual(result(render('abg-calculator')),oldGap);

// Ranks 206–225: first click, preserved output, explicit resubmission and extra roofing controls.
for(const [slug,label,next]of [['gc-content-calculator','DNA or RNA sequence (one FASTA record allowed)','GGGG'],['llc-tax-calculator','Combined effective reserve rate supplied by adviser','20'],['wainscoting-calculator','Wall run length','144'],['charles-law-calculator','Final absolute temperature T₂','600'],['crypto-conversion-calculator','Token quantity','200'],['basic-calculator','Arithmetic expression','7 * 9'],['new-jersey-tax-calculator','2025 NJ taxable income (line 42)','40000'],['bank-simple-interest-days','Accrual days','60'],['study-assessment-weighted-total','Assessment percentages, comma separated','80,90,100'],['linear-feet-calculator','Feet per piece','3']]){
 states.length=0;let t=render(slug);assert.equal(result(t),'Click Calculate',slug);button(t).props.onClick();t=render(slug);const previous=result(t);field(t,label).props.onChange(next);t=render(slug);assert.equal(result(t),previous,slug+' holds output');button(t).props.onClick();assert.notEqual(result(render(slug)),previous,slug+' submits new output');
}
const allText=n=>Array.isArray(n)?n.map(allText).join(''):n&&typeof n==='object'?allText(n.props?.children):String(n??'');
states.length=0;let roof=render('roof-area-calculator',false);assert.equal(result(roof),'Click Calculate');field(roof,'Supplied unit cost per planned roof ft² (0 to omit cost)').props.onChange('5');roof=render('roof-area-calculator',false);button(roof).props.onClick();roof=render('roof-area-calculator',false);const textBefore=allText(walk(roof,n=>n.props?.className==='result-grid'));assert(textBefore.includes('7,379.02'));field(roof,'Other project cost on same quotation basis').props.onChange('1000');roof=render('roof-area-calculator',false);assert.equal(allText(walk(roof,n=>n.props?.className==='result-grid')),textBefore);assert(allText(roof).includes('Inputs changed'));button(roof).props.onClick();roof=render('roof-area-calculator',false);assert(allText(walk(roof,n=>n.props?.className==='result-grid')).includes('8,379.02'));assert(!allText(roof).includes('PKR'));
const oldArea=result(roof);field(roof,'Mode').props.onChange('pitch');roof=render('roof-area-calculator');assert.equal(result(roof),oldArea);field(roof,'Measured vertical rise').props.onChange('6');field(roof,'Measured horizontal run').props.onChange('12');roof=render('roof-area-calculator');button(roof).props.onClick();assert.equal(result(render('roof-area-calculator')),'6 / 12');
console.log('Ranks 206–225 shared UI passed, including roofing sixth/seventh/eighth field snapshots.');

// FASTA must use a real textarea: a single-line input strips pasted newlines.
states.length=0;let gc=render('gc-content-calculator');const sequenceField=field(gc,'DNA or RNA sequence (one FASTA record allowed)'),control=sequenceField.type(sequenceField.props);assert(walk(control,n=>n.type==='textarea'));sequenceField.props.onChange('>record one\nACGTNN');gc=render('gc-content-calculator');assert.equal(result(gc),'Click Calculate');button(gc).props.onClick();assert.equal(result(render('gc-content-calculator')),'50 %');
console.log('GC textarea preserves multiline FASTA and remains click-gated.');

// Every next-batch resolver uses the actual persistent submitted-results shell.
for(const [slug,label,next]of [
 ['horsepower-calculator','Torque at measured operating point','300'],
 ['interest-rate-cap-payout-calculator','Observed index rate','7'],
 ['geographic-midpoint-calculator','First latitude','10'],
 ['cake-pricing-calculator','Ingredients and decoration cost','50'],
 ['sheep-gestation-calculator','Known mating date','2026-01-08'],
 ['asphalt-calculator','Paved surface area','1200'],
 ['boolean-algebra-calculator','Boolean expression using A–D','A|B'],
 ['megawatt-calculator','Power value','3'],
 ['substitution-calculator','Equation 1: right side','8'],
 ['ap-biology-score-calculator','Multiple-choice correct','48'],
 ['womens-bmi-calculator','Measured body weight','70'],
 ['cap-rate-calculator','Annual gross operating income','140000'],
 ['swim-time-converter','Recorded time: seconds or m:ss.xx','90'],
 ['cpm-calculator','Campaign spend','300'],
 ['fence-cost-estimator','Fence run length (exclude gate openings)','120'],
 ['subwoofer-case-calculator','External rectangular width','18'],
 ['acres-per-hour-calculator','Effective implement working width','24'],
 ['torque-converter','Torque value','120']]){
 states.length=0;let tree=render(slug,false);assert.equal(result(tree),'Click Calculate',slug);button(tree).props.onClick();tree=render(slug,false);const previous=result(tree);assert(!previous.includes('PKR'),slug+' global currency');field(tree,label).props.onChange(next);tree=render(slug,false);assert.equal(result(tree),previous,slug+' output while editing');button(tree).props.onClick();assert.notEqual(result(render(slug,false)),previous,slug+' submitted output');
}
// Sixth/seventh-field changes must also wait for resubmission.
states.length=0;let cake=render('cake-pricing-calculator',false);button(cake).props.onClick();cake=render('cake-pricing-calculator',false);const priorCake=result(cake);field(cake,'Fixed transaction fee').props.onChange('10');cake=render('cake-pricing-calculator',false);assert.equal(result(cake),priorCake);button(cake).props.onClick();assert.notEqual(result(render('cake-pricing-calculator',false)),priorCake);
console.log('Next 20 shared UI passed: all 18 resolver modes click-gated; global money is currency-neutral; extra fields preserve submitted snapshots.');

// Next 20 calculators after rank 267: run the shipped callbacks for every new tool.
for(const [slug,label,next] of [
 ['drywall-calculator','Total wall and ceiling area','550'],
 ['zero-to-sixty-calculator','Constant acceleration scenario','5'],
 ['watt-hour-calculator','Measured or supplied power','80'],
 ['kd-calculator','Recorded kills','150'],
 ['deck-board-calculator','Deck width across board rows','14'],
 ['plate-rolling-calculator','Inside finished radius','120'],
 ['running-record-calculator','Uncorrected scored errors','10'],
 ['timecode-calculator','First timecode HH:MM:SS:FF','00:00:14:15'],
 ['cow-gestation-calculator','Planning gestation length','280'],
 ['rim-offset-calculator','Proposed offset','30'],
 ['correlation-coefficient-calculator','Y observations in matching order','8,6,4,2'],
 ['speed-distance-time-calculator','Distance','180'],
 ['tv-mounting-height-calculator','Measured seated eye height','110'],
 ['wire-length-calculator','Measured one-way route','25'],
 ['gear-ratio-speed-calculator','Engine rotational speed','3500'],
 ['christmas-tree-light-calculator','Existing usable light count','0'],
 ['ops-calculator','Home runs','5'],
 ['binomial-distribution-calculator','Success count of interest','4'],
 ['octagon-calculator','Side length of regular octagon','3'],
 ['winrate-calculator','Recorded wins','40']]){
 states.length=0;let tree=render(slug,true);assert.equal(result(tree),'Click Calculate',slug+' initial gate');button(tree).props.onClick();tree=render(slug,true);const saved=result(tree);assert(!String(saved).includes('Check inputs'));field(tree,label).props.onChange(next);tree=render(slug,true);assert.equal(result(tree),saved,slug+' retains submitted output during edits');button(tree).props.onClick();assert.notEqual(result(render(slug,true)),saved,slug+' recalculates after click');
}
states.length=0;let corr=render('correlation-coefficient-calculator');const corrField=field(corr,'X observations in pair order');assert(walk(corrField.type(corrField.props),n=>n.type==='textarea'));corrField.props.onChange('1\n2\n3\n4');corr=render('correlation-coefficient-calculator');assert.equal(result(corr),'Click Calculate');button(corr).props.onClick();assert.equal(result(render('correlation-coefficient-calculator')),'1');
console.log('Roadmap268 UI passed: all 20 real calculators wait for submission, retain prior outputs during edits, and support eighth-field/textarea inputs.');
