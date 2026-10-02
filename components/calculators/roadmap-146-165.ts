import type {CalculatorResolver,CalculatorResult} from './types';
import {resolveRoadmap126} from './roadmap-126-145';
const format=(n:number,d=4)=>n.toLocaleString('en-US',{maximumFractionDigits:d});
const row=(label:string,value:string,note?:string):CalculatorResult=>({label,value,note});
const fail=(note:string)=>[row('Check your inputs','Unable to calculate',note)];
const number=(s:string,min=0,max=1e12)=>s.trim()!==''&&Number.isFinite(Number(s))&&Number(s)>=min&&Number(s)<=max;
const positive=(s:string)=>number(s)&&Number(s)>=1e-9;
const electricalModes='select:vi=Voltage and current|vr=Voltage and resistance|ir=Current and resistance|code=Resistance to four-band color code|wdc=Watts to amps (DC)|adc=Amps to watts (DC)|wac=Watts to amps (single-phase AC)|aac=Amps to watts (single-phase AC)|wthree=Watts to amps (balanced three-phase AC)|athree=Amps to watts (balanced three-phase AC)';
export const resolveRoadmap146:CalculatorResolver=(ctx)=>{
 const {slug,a,b,c,d,e,cash}=ctx,A=Number(a),B=Number(b),C=Number(c),D=Number(d),E=Number(e);
 if(slug==='ohms-law-calculator'){
  if(!['wdc','adc','wac','aac','wthree','athree'].includes(a)){const base=resolveRoadmap126(ctx);return base?{...base,suffix:[electricalModes,...base.suffix.slice(1)]}:null;}
  const watts=a.startsWith('w'),dc=a.endsWith('dc'),three=a.endsWith('three');
  return{labels:['Known values',watts?'Known real power':'Known current',three?'Line-to-line RMS voltage':dc?'DC voltage':'RMS voltage',dc?'Unused':'Power factor','Unused'],suffix:[electricalModes,watts?'W':'A','V','0–1',''],calculate:()=>{
   if(!number(b)||!positive(c)||!dc&&(!positive(d)||D>1))return fail('Use non-negative watts or amps, positive volts and an AC power factor above zero and at most one.');
   const factor=(three?Math.sqrt(3):1)*(dc?1:D),power=watts?B:B*C*factor,current=watts?B/(C*factor):B;
   if(!Number.isFinite(power)||!Number.isFinite(current))return fail('The selected values exceed the finite numeric range.');
   return[row(watts?'Calculated current':'Calculated real power',format(watts?current:power,6)+(watts?' A':' W'),'Ideal conversion. AC uses RMS values; three-phase assumes balanced sinusoidal loads. This does not size conductors or protection.'),row('Real power',format(power,6)+' W'),row('Current',format(current,6)+' A')];
  }};
 }
 if(slug==='epoxy-resin-calculator')return{labels:['Coated length','Coated width','Layer thickness','Supplier resin:hardener volume ratio','Extra mixed-volume allowance'],suffix:['cm','cm','mm','text','%'],calculate:()=>{
  const m=d.trim().match(/^(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)$/);if(!positive(a)||!positive(b)||!positive(c)||!number(e,0,100)||!m||!positive(m[1])||!positive(m[2]))return fail('Use positive cm/cm/mm dimensions, a supplier volume ratio such as 2:1 and 0–100% allowance. Weight ratios are not interchangeable.');
  const volume=A*B*C/10000,extra=volume*(1+E/100),resin=extra*Number(m[1])/(Number(m[1])+Number(m[2]));
  return[row('Total mixed epoxy volume',format(extra)+' L','Rectangular layer geometry with your allowance. Verify the product volume ratio and permitted pour thickness.'),row('Resin component',format(resin)+' L'),row('Hardener component',format(extra-resin)+' L'),row('Geometric layer volume',format(volume)+' L')];
 }};
 if(slug==='molarity-calculator')return{labels:[d==='required'?'Target molarity':d==='dilute'?'Stock molarity':d==='moles'?'Solute amount':'Solute mass',d==='moles'?'Unused':d==='dilute'?'Target diluted molarity':'Molar mass','Final solution volume','Calculation mode','Unused'],suffix:[d==='mass'?'g':d==='moles'?'mol':'mol/L',d==='dilute'?'mol/L':'g/mol','mL','select:mass=Mass to molarity|moles=Moles to molarity|required=Required solute mass|dilute=Dilution stock volume',''],calculate:()=>{
  if(!number(a)||!positive(c)||d!=='moles'&&!positive(b))return fail('Use non-negative solute amount or concentration, positive solution volume and a positive molar mass or target concentration.');
  const liters=C/1000;if(d==='dilute'){if(B>A)return fail('Target concentration cannot exceed stock concentration in a dilution.');return[row('Stock solution needed',format(B*C/A)+' mL','M1 V1 = M2 V2. Solvent is added to reach the final solution volume, not necessarily by subtracting liquid volumes.'),row('Final solution volume',format(C)+' mL'),row('Target concentration',format(B)+' mol/L')];}
  if(d==='required')return[row('Required solute mass',format(A*liters*B,6)+' g','M × final litres × molar mass. Assumes the specified pure solute; hydration and purity must be accounted for separately.'),row('Required moles',format(A*liters,6)+' mol')];
  const moles=d==='moles'?A:A/B;return[row('Solution molarity',format(moles/liters,6)+' mol/L','Moles of specified solute per litre of final solution; not per litre of solvent added.'),row('Solute amount',format(moles,6)+' mol'),row('Final solution volume',format(liters,6)+' L')];
 }};
 if(slug==='garage-door-spring-calculator')return{labels:['Door weight force from verified documentation','Effective drum moment arm','Number of equally sharing springs'],suffix:['lbf','in','whole springs'],calculate:()=>{
  if(!positive(a)||!positive(b)||!number(c,1,4)||!Number.isInteger(C))return fail('Use verified positive pounds-force and effective moment arm in inches; one to four equal-sharing springs.');
  return[row('Ideal total balancing torque',format(A*B,2)+' lbf·in','Static force × moment arm only. This is not a replacement spring selector, winding instruction or assessment of an installed door.'),row('Ideal torque per equal spring',format(A*B/C,2)+' lbf·in'),row('Ideal total torque in SI',format(A*B*0.112984829,3)+' N·m')];
 }};
 if(slug==='lawn-mowing-cost-calculator')return{labels:['Lawn area to mow','Labor charge','Effective mowing productivity','Fixed charge per visit','Number of visits'],suffix:['ft²','currency/hour','ft²/hour','currency','whole visits'],calculate:()=>{
  if(!number(a)||!number(b)||!positive(c)||!number(d)||!number(e,1,1000)||!Number.isInteger(E))return fail('Use non-negative area, hourly charge and fixed cost; positive measured productivity; one to 1,000 whole visits.');const hours=A/C,price=hours*B+D;
  return[row('Estimated cost per visit',cash(price),'Area ÷ effective productivity × hourly charge + fixed visit charge. Taxes and extra services are excluded unless included in your inputs.'),row('Estimated active labor time',format(hours)+' hours'),row('Cost for selected visits',cash(price*E)),row('Variable labor portion',cash(hours*B))];
 }};
 if(slug==='quarter-mile-calculator')return{labels:['Race weight including driver and fuel','Effective horsepower used by model','Elapsed-time coefficient','Trap-speed coefficient'],suffix:['lb','hp','seconds coefficient','mph coefficient'],calculate:()=>{
  if(!positive(a)||!positive(b)||!number(c,1,20)||!number(d,1,1000))return fail('Enter positive pounds and model horsepower; ET coefficient 1–20 and trap coefficient 1–1,000. Defaults are illustrative empirical coefficients.');const ratio=Math.cbrt(A/B),et=C*ratio,mph=D/ratio;
  return[row('Empirical quarter-mile elapsed time',format(et,3)+' s','Power-to-weight correlation, not a physical simulation or guaranteed performance. Compare only against closed-course timing data.'),row('Empirical trap speed',format(mph,2)+' mph'),row('Quarter-mile distance','1,320 ft = 402.336 m'),row('Race weight per horsepower',format(A/B)+' lb/hp')];
 }};
 if(slug==='firewood-cord-calculator')return{labels:['Stack length','Stack depth','Stack height','Price per full cord'],suffix:['ft','ft','ft','currency/cord'],calculate:()=>{
  if(!positive(a)||!positive(b)||!positive(c)||!number(d))return fail('Use positive measured stacked dimensions in feet and a non-negative price per full cord.');const cubic=A*B*C,cord=cubic/128;
  return[row('Full-cord equivalent',format(cord)+' cords','Stacked volume includes normal air spaces. Loose truckloads and undefined face cords cannot be reliably converted by this rectangular-stack method.'),row('Measured stacked volume',format(cubic)+' ft³'),row('Equivalent cubic metres',format(cubic*0.028316846592)+' m³'),row('Price at entered full-cord rate',cash(cord*D))];
 }};
 if(slug==='nether-portal-calculator')return{labels:['Source X coordinate','Source Z coordinate','Conversion direction','Reference Y coordinate'],suffix:['blocks','blocks','select:to-nether=Overworld to Nether|to-overworld=Nether to Overworld','blocks'],calculate:()=>{
  if(!number(a,-3e7,3e7)||!number(b,-3e7,3e7)||!number(d,-2048,2048))return fail('Use finite X/Z within ±30,000,000 and a reference Y within ±2,048.');const scale=c==='to-overworld'?8:1/8,x=A*scale,z=B*scale;
  if(Math.abs(x)>3e7||Math.abs(z)>3e7)return fail('Converted coordinates exceed the supported ±30,000,000 planning range.');
  return[row('Exact horizontal coordinate target',`X ${format(x,4)}, Z ${format(z,4)}`,'Standard 8:1 horizontal scale only. Nearby existing portals, terrain, edition and server settings can change actual linking.'),row('Lower integer block target',`X ${Math.floor(x)}, Z ${Math.floor(z)}`,'Floors toward negative infinity; this is a planning block coordinate, not a guaranteed portal generation position.'),row('Y reference (not scaled)',format(D)),row('Direction',c==='to-overworld'?'Nether → Overworld':'Overworld → Nether')];
 }};
 if(slug==='arv-calculator')return{labels:['Comparable sold prices (comma separated)','Comparable floor areas (matching order)','Subject property floor area','User-supported value adjustment','Rehab, holding and selling costs combined'],suffix:['text','text','ft²','%','currency'],calculate:()=>{
  const list=(s:string)=>s.split(',').map(x=>x.trim()),prices=list(a),areas=list(b);if(!prices.length||prices.length>20||prices.length!==areas.length||[...prices,...areas].some(x=>!positive(x))||!positive(c)||!number(d,-100,100)||!number(e))return fail('Use 1–20 matching positive sale prices and floor areas, positive subject area, adjustment −100% to +100%, and non-negative combined costs.');const mean=prices.reduce((sum,p,i)=>sum+Number(p)/Number(areas[i]),0)/prices.length,base=mean*C,arv=base*(1+D/100);
  return[row('Indicative after-repair value',cash(arv),'Equal-weight mean sold price per square foot × subject area × entered adjustment. This is not an appraisal or a purchase recommendation.'),row('Mean comparable price per ft²',cash(mean)),row('Unadjusted comparable estimate',cash(base)),row('Value less entered project costs',cash(arv-E),'Before purchase price, financing not entered, taxes not entered and target profit.')];
 }};
 if(slug==='breastfeeding-calorie-calculator')return{labels:['Pre-pregnancy reference intake from your clinician or records','Unused','Unused'],suffix:['kcal/day','',''],calculate:()=>{
  if(!number(a,500,5000))return fail('Enter a pre-pregnancy reference intake between 500 and 5,000 kcal/day. Accepted input limits are not recommended intake limits.');return[row('General breastfeeding calorie range',`${format(A+330,0)}–${format(A+400,0)} kcal/day`,'Reference intake plus CDC’s general additional-energy range for well-nourished breastfeeding mothers. Not an individualized diet, deficit, milk-output or infant-needs calculation.'),row('Additional general energy range','330–400 kcal/day'),row('Reference intake entered',format(A,0)+' kcal/day')];
 }};
 if(slug==='measured-visual-acuity-converter')return{labels:['Measured Snellen test-distance numerator','Measured Snellen denominator','Unused'],suffix:['same distance unit','same distance unit',''],calculate:()=>{
  if(!positive(a)||!positive(b))return fail('Enter a positive measured Snellen fraction, such as 20 and 40 or 6 and 12. Do not enter prescription diopters.');const decimal=A/B;
  return[row('Equivalent 20-foot notation',`20/${format(20/decimal,3)}`,'Equivalent notation of a measured acuity fraction only; this cannot convert a lens prescription into vision or diagnose eye health.'),row('Decimal acuity',format(decimal,4)),row('logMAR equivalent',format(-Math.log10(decimal),4)),row('Equivalent 6-metre notation',`6/${format(6/decimal,3)}`)];
 }};
 if(slug==='cubic-yard-calculator')return{labels:['Length','Width','Depth','Material allowance'],suffix:['ft','ft','ft','%'],calculate:()=>{
  if(!positive(a)||!positive(b)||!positive(c)||!number(d,0,100))return fail('Use positive dimensions in feet and an allowance from 0% to 100%.');const cubic=A*B*C,yards=cubic/27;
  return[row('Geometric cubic yards',format(yards,4)+' yd³','Rectangular volume before allowance or compaction. All three dimensions are in feet.'),row('Planned volume with allowance',format(yards*(1+D/100),4)+' yd³'),row('Cubic feet',format(cubic,4)+' ft³'),row('Cubic metres',format(cubic*0.028316846592,4)+' m³')];
 }};
 if(slug==='air-force-pt-test-calculator')return{labels:['Cardiorespiratory chart points','Waist-to-height ratio chart points','Muscle strength chart points','Core endurance chart points'],suffix:['of 50','of 20','of 15','of 15'],calculate:()=>{
  if(!number(a,0,50)||!number(b,0,20)||!number(c,0,15)||!number(d,0,15))return fail('Enter points from the applicable current official chart: cardio 0–50, WHtR 0–20, strength 0–15, core 0–15.');
  return[row('Entered assessment total',format(A+B+C+D,2),'Arithmetic sum of official chart points supplied by you. No raw-event conversion, minimum assessment, exemption handling or pass decision.'),row('Cardio chart contribution',format(A)+' / 50'),row('Other chart contributions',format(B+C+D)+' / 50')];
 }};
 if(slug==='business-break-even-calculator')return{labels:['Fixed costs for the chosen period','Selling price per unit','Variable cost per unit','Planned units to sell'],suffix:['currency','currency/unit','currency/unit','whole units'],calculate:()=>{
  if(!number(a)||!positive(b)||!number(c)||!number(d)||!Number.isInteger(D))return fail('Use non-negative fixed/variable costs, a positive price and whole planned units.');const contribution=B-C;if(contribution<=0)return[row('Break-even status','No finite break-even volume','Unit contribution must exceed zero to recover fixed costs.'),row('Contribution per unit',cash(contribution)),row('Profit at planned sales',cash(D*contribution-A))];const units=Math.ceil(A/contribution);
  return[row('Whole-unit break-even volume',format(units,0)+' units','Rounds theoretical break-even up to a whole sale. One product, fixed prices and constant variable costs.'),row('Theoretical break-even units',format(A/contribution)),row('Whole-unit break-even revenue',cash(units*B)),row('Profit at planned sales',cash(D*contribution-A))];
 }};
 if(slug==='sales-tax-vat-calculator')return{labels:['Entered net or tax-inclusive amount','User-verified tax rate','Calculation mode'],suffix:['currency','%','select:add=Add tax to net|remove=Remove included tax'],calculate:()=>{
  if(!number(a)||!number(b,0,100))return fail('Use a non-negative amount and a user-verified rate from 0% to 100%. No jurisdiction is selected automatically.');const remove=c==='remove'||c==='1',net=remove?A/(1+B/100):A,gross=remove?A:A*(1+B/100);
  return[row(remove?'Net amount before included tax':'Gross amount including tax',cash(remove?net:gross),'Single-rate sales tax/VAT arithmetic. This is not income, payroll or jurisdiction-specific tax filing.'),row('Tax amount',cash(gross-net)),row(remove?'Gross amount entered':'Net amount entered',cash(remove?gross:net))];
 }};
 if(slug==='savings-withdrawal-runway-calculator')return{labels:['Starting retirement savings','First monthly withdrawal','Assumed nominal annual return','Annual withdrawal inflation','Projection horizon'],suffix:['currency','currency/month','%','%','whole years (1–100)'],calculate:()=>{
  if(!number(a)||!positive(b)||!number(c,-99,100)||!number(d,0,100)||!number(e,1,100)||!Number.isInteger(E))return fail('Use non-negative savings, positive monthly withdrawal, return −99% to +100%, inflation 0–100%, and a whole horizon of 1–100 years.');
  const growth=1+C/1200,inflation=(1+D/100)**(1/12);let balance=A,total=0,full=0,months=0,draw=B;for(let i=0;i<E*12&&balance>0;i++){balance*=growth;months=i+1;const paid=Math.min(balance,draw);total+=paid;balance=Math.max(0,balance-paid);if(paid>=draw-1e-8)full++;draw*=inflation;if(!Number.isFinite(balance)||!Number.isFinite(draw)||!Number.isFinite(total))return fail('Projection exceeds the supported numeric range.');}
  return[row('Retirement savings runway',balance<=0?`${months} months to exhaustion`:`Not exhausted within ${E} years`,'Constant nominal monthly return, then an end-of-month withdrawal growing monthly with entered annual inflation. Excludes sequence risk, fees and tax.'),row('Fully funded monthly withdrawals',format(full,0)),row('Total modeled withdrawals',cash(total)),row('Balance at stopping point',cash(balance))];
 }};
 if(slug==='seller-financing-calculator')return{labels:['Property price','Buyer down payment','Nominal annual interest rate','Amortization term','Balloon due after'],suffix:['currency','currency','%','years','years'],calculate:()=>{
  const count=D*12,paid=E*12;if(!positive(a)||!number(b)||B>A||!number(c,0,100)||!positive(d)||D>100||!positive(e)||E>D||!Number.isInteger(count)||!Number.isInteger(paid))return fail('Down payment must not exceed price; use rate 0–100%, terms up to 100 years in whole months, and a balloon date within the amortization term.');const principal=A-B,rate=C/1200,payment=rate===0?principal/count:principal*rate/(-Math.expm1(-count*Math.log1p(rate))),balance=rate===0?Math.max(0,principal-payment*paid):payment*(-Math.expm1(-(count-paid)*Math.log1p(rate)))/rate,interest=payment*paid-(principal-balance);
  return[row('Estimated monthly payment',cash(payment),'Fixed-rate, end-of-month principal and interest only. Closing fees, escrow, default terms and local law are excluded.'),row('Remaining balloon principal',cash(paid===count?0:balance)),row('Financed principal',cash(principal)),row('Interest through balloon date',cash(Math.max(0,interest)))];
 }};
 return null;
};
