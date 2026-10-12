import type {CalculatorConfig, CalculatorResolver, CalculatorResult} from './types';

const row=(label:string,value:string,note?:string):CalculatorResult=>({label,value,note});
const fmt=(n:number,d=3)=>n.toLocaleString('en-US',{maximumFractionDigits:d});
export function inputNumber(s:string,label:string,min=0,max=1e12){
 if(!s.trim()||!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[-+]?\d+)?$/i.test(s.trim()))throw Error(`Enter a number for ${label}.`);
 const n=Number(s);if(!Number.isFinite(n)||n<min||n>max)throw Error(`${label} must be between ${min} and ${max}.`);return n;
}
export function dateOnly(s:string){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(s))throw Error('Use a valid date in YYYY-MM-DD format.');
 const d=new Date(s+'T00:00:00Z');if(!Number.isFinite(+d)||d.toISOString().slice(0,10)!==s||d.getUTCFullYear()<1900||d.getUTCFullYear()>2200)throw Error('Use a real Gregorian date from 1900 through 2200.');return d;
}
export const dateIso=(d:Date)=>d.toISOString().slice(0,10);
const shift=(d:Date,days:number)=>new Date(+d+days*86400000);
const whole=(n:number)=>{if(!Number.isSafeInteger(n))throw Error('The count exceeds exact whole-number precision.');return n;};
const safeConfig=(labels:string[],suffix:string[],calculate:()=>CalculatorResult[]):CalculatorConfig=>({labels,suffix,calculate:()=>{try{return calculate();}catch(e){return[row('Check your inputs','Unable to calculate',e instanceof Error?e.message:'Check the entered values.')];}}});

export function bowlingHandicap(average:number,base:number,percentage:number,games:number,cap:number,scratch:number[]){
 const used=Math.floor(average),raw=Math.max(0,base-used)*percentage/100;
 const perGame=Math.min(Math.floor(raw+1e-10),cap===0?Infinity:cap);
 if(scratch.length&&scratch.length!==games)throw Error('Supply exactly one scratch score per series game, or leave the list blank.');
 if(scratch.some(s=>!Number.isInteger(s)||s<0||s>300))throw Error('Scratch scores must be whole pins from 0 to 300.');
 return{used,raw,perGame,series:perGame*games,adjusted:scratch.length?scratch.reduce((s,v)=>s+v,0)+perGame*games:null};
}
export function bindingPlan(width:number,length:number,strip:number,fabric:number,allowance:number,loss:number){
 if(strip<=0||fabric<=strip||loss>=fabric)throw Error('Usable fabric width must exceed strip width and loss per join.');
 const needed=2*(width+length)+allowance;
 const strips=whole(Math.max(1,Math.ceil((needed-loss)/(fabric-loss)-1e-12)));
 const joined=strips*fabric-(strips-1)*loss,cutLength=strips*strip;
 return{needed,strips,joined,cutLength,yards:cutLength/36,buyYards:Math.ceil(cutLength/36*8-1e-12)/8,metres:cutLength*.0254};
}

/** Standard federal observed dates; exceptional/local holidays must be supplied separately. */
export function federalHolidays(year:number):Map<string,string>{
 const found=new Map<string,string>();
 const add=(y:number,m:number,day:number,name:string)=>{let d=new Date(Date.UTC(y,m,day));if(d.getUTCDay()===6)d=shift(d,-1);else if(d.getUTCDay()===0)d=shift(d,1);found.set(dateIso(d),name);};
 const nth=(m:number,weekday:number,n:number)=>1+(weekday-new Date(Date.UTC(year,m,1)).getUTCDay()+7)%7+(n-1)*7;
 add(year,0,1,"New Year's Day");add(year+1,0,1,"New Year's Day");
 add(year,0,nth(0,1,3),'Martin Luther King Jr. Day');add(year,1,nth(1,1,3),"Washington's Birthday");
 const mayLast=new Date(Date.UTC(year,5,0));add(year,4,mayLast.getUTCDate()-(mayLast.getUTCDay()+6)%7,'Memorial Day');
 if(year>=2021)add(year,5,19,'Juneteenth');add(year,6,4,'Independence Day');add(year,8,nth(8,1,1),'Labor Day');
 add(year,9,nth(9,1,2),'Columbus Day');add(year,10,11,'Veterans Day');add(year,10,nth(10,4,4),'Thanksgiving');add(year,11,25,'Christmas');return found;
}
export function legalDayCount(start:string,days:number,direction:string,extra:string,confirmed:string){
 if(confirmed!=='yes')throw Error('Confirm the applicable day-count rule and the complete court holiday/closure list before calculating.');
 if(!['after','before'].includes(direction)||!Number.isInteger(days)||days<1||days>3650)throw Error('Choose after or before and 1–3650 whole calendar days.');
 const trigger=dateOnly(start);if(trigger.getUTCFullYear()<2025||trigger.getUTCFullYear()>2090)throw Error('This worksheet supports trigger years 2025–2090.');
 const sign=direction==='after'?1:-1,raw=shift(trigger,sign*days),holidays=new Map<string,string>();
 for(let y=Math.min(trigger.getUTCFullYear(),raw.getUTCFullYear())-1;y<=Math.max(trigger.getUTCFullYear(),raw.getUTCFullYear())+1;y++)for(const [date,name] of federalHolidays(y))holidays.set(date,name);
 const supplied=extra.trim()?extra.trim().split(/[\s,;]+/):[];if(supplied.length>366)throw Error('Use at most 366 additional excluded dates.');
 for(const s of supplied){dateOnly(s);holidays.set(s,'Supplied court holiday or closure');}
 let end=raw;const skipped:string[]=[];
 for(let steps=0;end.getUTCDay()===0||end.getUTCDay()===6||holidays.has(dateIso(end));steps++){
  if(steps>=400)throw Error('Too many consecutive excluded dates. Verify the holiday list.');
  skipped.push(`${dateIso(end)} (${holidays.get(dateIso(end))||'weekend'})`);end=shift(end,sign);
 }
 return{raw:dateIso(raw),end:dateIso(end),skipped};
}
export function brickTakeoff(length:number,height:number,openings:number,brickLength:number,brickHeight:number,joint:number,leaves:number,waste:number){
 const gross=length*height,net=gross-openings;if(net<=0)throw Error('Openings must be smaller than the gross wall area.');
 if(!Number.isInteger(leaves)||leaves<1||leaves>4)throw Error('Use 1–4 identical independent brick leaves.');
 const module=(brickLength+joint)*(brickHeight+joint)/1e6,base=net/module*leaves;
 return{gross,net,module,base,count:whole(Math.ceil(base*(1+waste/100)-1e-10)),perArea:1/module};
}
const usCups=['AA','A','B','C','D','DD/E','DDD/F','DDDD/G','H','I','J','K','L','M','N','O'];
const ukCups=['AA','A','B','C','D','DD','E','F','FF','G','GG','H','HH','J','JJ','K'];
export function braEstimate(under:number,bust:number,unit:string){
 if(!['in','cm'].includes(unit))throw Error('Choose inches or centimetres.');
 const u=unit==='cm'?under/2.54:under,b=unit==='cm'?bust/2.54:bust;
 if(b<u)throw Error('The bust measurement cannot be below the underbust measurement.');
 const band=Math.ceil((u-1e-10)/2)*2,roundedBust=Math.ceil(b-1e-10),cup=roundedBust-band;
 if(band<28||band>58||cup<0||cup>15)throw Error('This disclosed chart covers bands 28–58 and differences 0–15 inches. Rounding can put an entry outside the chart; use a fitting service rather than extrapolating.');
 const size=(system:string,bd:number,cp:number)=>`${bd}${(system==='US'?usCups:ukCups)[cp]}`;
 return{band,roundedBust,cup,us:size('US',band,cup),uk:size('UK',band,cup),smaller:band>28&&cup<15?`${size('US',band-2,cup+1)} US / ${size('UK',band-2,cup+1)} UK`:'Outside this chart',larger:band<58&&cup>0?`${size('US',band+2,cup-1)} US / ${size('UK',band+2,cup-1)} UK`:'Outside this chart'};
}
export function agingScenario(duration:number,reference:number,accelerated:number,q10:number,mode:string){
 if(accelerated<reference)throw Error('Accelerated temperature must be at least the reference temperature.');
 if(q10<=1||!['chamber','equivalent'].includes(mode))throw Error('Use a Q10 factor above 1 and a supported direction.');
 const factor=Math.pow(q10,(accelerated-reference)/10);if(!Number.isFinite(factor)||factor>1e9)throw Error('The acceleration factor is outside this worksheet\u2019s numerical range.');
 return{factor,result:mode==='chamber'?duration/factor:duration*factor};
}
export function paverTakeoff(area:number,length:number,width:number,joint:number,baseDepth:number,sandDepth:number,allowance:number,bagLitres:number){
 const factor=1+allowance/100,cell=(length+joint)*(width+joint)/1e6;
 const count=whole(Math.ceil(area/cell*factor-1e-10)),base=area*baseDepth/1000*factor,sand=area*sandDepth/1000*factor;
 return{cell,count,base,sand,baseBags:whole(Math.ceil(base*1000/bagLitres-1e-12)),sandBags:whole(Math.ceil(sand*1000/bagLitres-1e-12))};
}

export const resolveNext10:CalculatorResolver=({slug,a,b,c,d,e,f='',g='',h=''})=>{
 if(slug==='bowling-handicap-calculator')return safeConfig(['Entering average','League basis','Handicap percentage','Games in series','Per-game cap (0 = no cap)','Scratch scores (optional)'],['pins','pins','%','games','pins','textarea'],()=>{
  const av=inputNumber(a,'average',0,300),base=inputNumber(b,'basis',0,300),pct=inputNumber(c,'percentage',0,100),games=inputNumber(d,'games',1,100),cap=inputNumber(e,'cap',0,300);if(!Number.isInteger(games)||!Number.isInteger(cap))throw Error('Games and the cap must be whole numbers.');
  const scores=f.trim()?f.trim().split(/[\s,;]+/).map(s=>inputNumber(s,'scratch score',0,300)):[];const v=bowlingHandicap(av,base,pct,games,cap,scores);
  return[row('Handicap per game',`${v.perGame} pins`,'Fractions dropped from the entering average and per-game handicap; zero above basis.'),row('Series handicap',`${v.series} pins`),row('Whole-pin average used',String(v.used)),row('Unrounded handicap',fmt(v.raw)),row('Adjusted series score',v.adjusted===null?'No scratch scores supplied':String(v.adjusted))];
 });
 if(slug==='quilt-binding-calculator')return safeConfig(['Finished quilt width','Finished quilt length','Cut strip width','Usable fabric width','Tail and corner allowance','Loss per internal join','Measurement unit'],['','', '', '', '', '', 'select:in=Inches|cm=Centimetres'],()=>{
  if(!['in','cm'].includes(g))throw Error('Choose a measurement unit.');const scale=g==='cm'?1/2.54:1;
  const v=bindingPlan(inputNumber(a,'width',.01,10000)*scale,inputNumber(b,'length',.01,10000)*scale,inputNumber(c,'strip width',.01,1000)*scale,inputNumber(d,'fabric width',.01,10000)*scale,inputNumber(e,'allowance',0,10000)*scale,inputNumber(f,'join loss',0,1000)*scale);
  return[row('Binding fabric to buy',`${fmt(v.buyYards)} yd`,'Rounded upward to the next 1/8 yard; straight cross-grain strips only.'),row('Strips to cut',String(v.strips)),row('Required joined binding',`${fmt(v.needed)} in`),row('Available joined length',`${fmt(v.joined)} in`),row('Exact fabric cut length',`${fmt(v.cutLength)} in / ${fmt(v.metres)} m`),row('Unrounded fabric yardage',`${fmt(v.yards,5)} yd`)];
 });
 if(slug==='legal-deadline-calculator')return safeConfig(['Triggering event date','Verified interval','Count direction','Additional court holidays / closures','Rule and all exclusions independently checked'],['date','calendar days','select:after=After event|before=Before event','textarea','select:no=Not yet verified|yes=Verified'],()=>{
  const v=legalDayCount(a,inputNumber(b,'interval',1,3650),c,d,e);return[row('Calculated calendar endpoint',v.end,'FRCP 6(a)-style date arithmetic only. Verify applicability, court timezone and filing cutoff.'),row('Unadjusted endpoint',v.raw),row('Endpoint adjustment',`${v.skipped.length} day(s)`),row('Excluded endpoint dates',v.skipped.join('; ')||'None'),row('Service extensions','Not applied','This worksheet does not decide service rules, appeal deadlines, local orders or electronic filing cutoffs.')];
 });
 if(slug==='brick-calculator')return safeConfig(['Wall length','Wall height','Total opening area','Actual brick face length','Actual brick face height','Joint width','Identical independent leaves','Ordering waste allowance'],['m','m','m²','mm','mm','mm','leaves','%'],()=>{
  const v=brickTakeoff(inputNumber(a,'wall length',.001,1e5),inputNumber(b,'wall height',.001,1e5),inputNumber(c,'openings'),inputNumber(d,'brick length',1,2000),inputNumber(e,'brick height',1,2000),inputNumber(f,'joint width',0,100),inputNumber(g,'leaves',1,4),inputNumber(h,'waste',0,100));
  return[row('Estimated bricks to order',fmt(v.count,0),'Net-area modular face estimate. Corners, special bonds and structural design require separate review.'),row('Net wall area',`${fmt(v.net)} m²`),row('Gross wall area',`${fmt(v.gross)} m²`),row('Bricks per m² per leaf',fmt(v.perArea)),row('Before ordering allowance',fmt(v.base)),row('Nominal face module',`${fmt(v.module,6)} m²`)];
 });
 if(slug==='bra-size-calculator')return safeConfig(['Snug underbust','Fullest bust','Measurement unit'],['','','select:in=Inches|cm=Centimetres'],()=>{
  const v=braEstimate(inputNumber(a,'underbust',1,250),inputNumber(b,'bust',1,300),c);return[row('Chart starting size',`${v.us} US / ${v.uk} UK`,'Disclosed rounded-band chart, not the six-measurement A Bra That Fits method or a fit guarantee.'),row('Band used',`${v.band} in`),row('Rounded bust used',`${v.roundedBust} in`),row('Cup difference',`${v.cup} in`),row('Smaller-band sister option',v.smaller),row('Larger-band sister option',v.larger)];
 });
 if(slug==='shelf-life-calculator')return safeConfig(['Duration being compared','Reference storage temperature','Accelerated temperature','Independently justified Q10','Direction','Protocol assumptions independently checked'],['days','°C','°C','factor','select:chamber=Find chamber days|equivalent=Find equivalent reference days','select:no=Not yet verified|yes=Verified scenario'],()=>{
  if(f!=='yes')throw Error('Confirm a validated protocol basis. These example temperatures and Q10 do not establish an expiry date.');
  const v=agingScenario(inputNumber(a,'duration',.000001,1e6),inputNumber(b,'reference temperature',-50,100),inputNumber(c,'accelerated temperature',-50,150),inputNumber(d,'Q10',1.000001,10),e);
  return[row(e==='chamber'?'Modeled chamber duration':'Modeled reference-duration equivalent',`${fmt(v.result,6)} days`,'Q10 scenario arithmetic only; no product, food, medicine or sterile-barrier certification.'),row('Acceleration factor',fmt(v.factor,6)),row('Whole-day schedule allowance',`${Math.ceil(v.result)} days`),row('Temperature separation',`${fmt(Number(c)-Number(b))} °C`),row('Validation needed','Real-time and protocol review')];
 });
 if(slug==='paver-calculator')return safeConfig(['Net paving area','Actual paver length','Actual paver width','Joint width','Supplied base ordering depth','Supplied bedding ordering depth','Ordering allowance for all quantities','Volume per container'],['m²','mm','mm','mm','mm','mm','%','L'],()=>{
  const v=paverTakeoff(inputNumber(a,'area',.001,1e6),inputNumber(b,'paver length',1,2000),inputNumber(c,'paver width',1,2000),inputNumber(d,'joint',0,100),inputNumber(e,'base depth',0,2000),inputNumber(f,'bedding depth',0,1000),inputNumber(g,'allowance',0,100),inputNumber(h,'container volume',.001,10000));
  return[row('Pavers to order',fmt(v.count,0),'Rectangular module estimate; supplied ordering depths and allowance are not structural or compaction recommendations.'),row('Base aggregate ordering volume',`${fmt(v.base)} m³`),row('Bedding ordering volume',`${fmt(v.sand)} m³`),row('Base containers',fmt(v.baseBags,0)),row('Bedding containers',fmt(v.sandBags,0)),row('Coverage per paver module',`${fmt(v.cell,6)} m²`)];
 });
 return null;
};
