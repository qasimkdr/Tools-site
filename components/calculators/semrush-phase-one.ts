import type { CalculatorResolver } from "./types";
import { numberValue as n } from "./helpers";
const fmt=(x:number,d=2)=>Number.isFinite(x)?x.toLocaleString("en-US",{maximumFractionDigits:d}):"—";
const gcd=(a:number,b:number):number=>b?gcd(b,a%b):Math.abs(a);
const addDays=(date:string,days:number)=>{const x=new Date(`${date}T12:00:00`);if(Number.isNaN(x.getTime()))return null;x.setDate(x.getDate()+Math.trunc(days));return x};
const addMonths=(date:string,months:number)=>{const x=new Date(`${date}T12:00:00`);if(Number.isNaN(x.getTime()))return null;const day=x.getDate();x.setDate(1);x.setMonth(x.getMonth()+Math.trunc(months));const last=new Date(x.getFullYear(),x.getMonth()+1,0).getDate();x.setDate(Math.min(day,last));return x};
const dateText=(d:Date|null)=>d?d.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"Enter a valid date";
export const resolveSemrushPhaseOne:CalculatorResolver=({slug,a,b,c,d,e,cash})=>{
 if(slug==="date-from-today-calculator")return{labels:["Start date","Offset or end date","Unit: days, weeks, or months","Mode: add/subtract or difference"],suffix:["date","number or date","text","text"],calculate:()=>{const mode=String(d).trim().toLowerCase(),unit=String(c).trim().toLowerCase();if(mode.startsWith("diff")){const start=new Date(`${a}T12:00:00`),end=new Date(`${b}T12:00:00`),valid=!Number.isNaN(start.getTime())&&!Number.isNaN(end.getTime()),days=valid?Math.abs(end.getTime()-start.getTime())/86400000:NaN;return[{label:"Days between dates",value:valid?fmt(days,0):"Enter two valid dates",note:"Elapsed calendar days; start date is not counted as an extra day"},{label:"Whole weeks and days",value:valid?`${Math.floor(days/7)} weeks, ${days%7} days`:"—"},{label:"Start and end",value:valid?`${dateText(start)} to ${dateText(end)}`:"—"}]}const amount=n(b),days=unit.startsWith("week")?amount*7:amount,target=unit.startsWith("month")?addMonths(a,amount):unit.startsWith("week")||unit.startsWith("day")?addDays(a,days):null;return[{label:"Target date",value:dateText(target),note:target?`${amount>=0?"After":"Before"} ${Math.abs(amount)} ${unit}`:"Enter days, weeks, or months"},{label:"Equivalent calendar days",value:unit.startsWith("month")&&target?fmt((target.getTime()-new Date(`${a}T12:00:00`).getTime())/86400000,0):fmt(days,0)},{label:"Direction",value:amount>=0?"Future":"Past"}]}};
 if(slug==="payment-calculator")return{labels:["Principal or annuity value","Annual interest rate","Term","Payments per year","Mode: loan payment or annuity payout"],suffix:["currency","%","years","/year","text"],calculate:()=>{const P=n(a),rate=n(b)/100,years=n(c),ppy=Math.max(1,n(d)||12),r=rate/ppy,N=Math.max(1,years*ppy),mode=String(e).trim().toLowerCase();if(mode.startsWith("annuity")){const payout=r?P*r/(1-Math.pow(1+r,-N)):P/N,total=payout*N;return[{label:"Estimated periodic annuity payout",value:cash(payout),note:"Ordinary fixed annuity estimate; assumes level payments and no fees"},{label:"Total scheduled payouts",value:cash(total)},{label:"Value entered",value:cash(P)}]}const payment=r?P*r*Math.pow(1+r,N)/(Math.pow(1+r,N)-1):P/N,total=payment*N;return[{label:"Periodic loan payment",value:cash(payment),note:`${fmt(ppy,0)} payments per year`},{label:"Total repayment",value:cash(total)},{label:"Total interest",value:cash(total-P)}]}};
 if(slug==="proportion-calculator")return{labels:["First ratio A","First ratio B","Second ratio C"],suffix:["","",""],calculate:()=>{const A=n(a),B=n(b),C=n(c),x=A?B*C/A:NaN;return[{label:"Missing value X",value:fmt(x,6),note:`${fmt(A)}:${fmt(B)} = ${fmt(C)}:X`},{label:"Scale factor",value:fmt(A?C/A:NaN,6)},{label:"Cross products",value:`${fmt(A*x)} = ${fmt(B*C)}`}]}};
 if(slug==="interest-rate-calculator")return{labels:["Starting amount","Ending amount or annual rate","Time in years","Mode: solve rate or project savings","Compounds per year"],suffix:["currency","currency or %","years","text","times/year"],calculate:()=>{const mode=String(d).trim().toLowerCase();if(mode.startsWith("project")){const P=n(a),rate=n(b)/100,y=n(c),m=Math.max(1,n(e)||12),future=P*Math.pow(1+rate/m,m*y);return[{label:"Projected ending balance",value:cash(future),note:"Assumes a fixed rate and regular compounding; fees, taxes and deposits are excluded"},{label:"Interest earned",value:cash(future-P)},{label:"Monthly interest at start",value:cash(P*rate/12)}]}const P=n(a),F=n(b),y=n(c),annual=P>0&&F>0&&y>0?Math.pow(F/P,1/y)-1:NaN,monthly=Number.isFinite(annual)?Math.pow(1+annual,1/12)-1:NaN;return[{label:"Implied annual rate",value:`${fmt(annual*100,3)}%`,note:"Compound annual growth rate; assumes no deposits or withdrawals"},{label:"Monthly equivalent",value:`${fmt(monthly*100,3)}%`},{label:"Total growth",value:`${fmt(P?((F/P)-1)*100:NaN,2)}%`}]}};
 if(slug==="ratio-calculator"){
  const mode=String(d).trim().toLowerCase();
  const labelsByMode:Record<string,string[]>={
   simplify:["Ratio terms (for example 18:24 or 1:2:1)","Second term (only if entering a single first term)","Unused","Ratio operation"],
   scale:["Ratio terms (for example 3:4)","Scale factor","Unused","Ratio operation"],
   equivalent:["Known ratio (for example 3:4)","Unused","Known first term in equivalent ratio (C)","Ratio operation"],
   "to-fraction":["Ratio terms (A:B)","Unused","Unused","Ratio operation"],
   "from-fraction":["Fraction (for example 3/4)","Unused","Unused","Ratio operation"],
   "to-percent":["Ratio terms (A:B)","Unused","Unused","Ratio operation"],
   "from-percent":["Percentage from 0 to 100","Unused","Unused","Ratio operation"],
   share:["Ratio terms (for example 1:2)","Second term (only if entering a single first term)","Unused","Ratio operation"],
  };
  const modeSuffix="select:simplify=Simplify ratio|scale=Scale ratio|equivalent=Solve equivalent ratio|to-fraction=Ratio to fraction|from-fraction=Fraction to ratio|to-percent=Ratio to percentage|from-percent=Percentage to ratio|share=Part-to-whole share";
  const labels=labelsByMode[mode]||labelsByMode.simplify;
  return{labels,suffix:["text","","",modeSuffix],calculate:()=>{
   const parseParts=(raw:string,second:string,separatorMode:"ratio"|"fraction"="ratio")=>{
    const value=String(raw).trim();
    const separator=separatorMode==="fraction"?"/":value.includes(":")?":":value.includes(",")?",":"";
    const parts=separator?value.split(separator).map(part=>Number(part.trim())):[Number(value),Number(String(second).trim())];
    const valid=Boolean(separator||String(second).trim())&&parts.length>=2&&parts.length<=5&&parts.every(part=>Number.isFinite(part)&&part>=0)&&parts.some(part=>part>0);
    return valid?parts:null;
   };
   const reduced=(parts:number[])=>{
    const scaled=parts.map(part=>Math.round(part*1_000_000));
    if(scaled.some(part=>!Number.isSafeInteger(part)))return null;
    const divisor=scaled.reduce((left,right)=>gcd(left,right),0)||1;
    return scaled.map(part=>part/divisor);
   };
   const ratio=(parts:number[])=>{const result=reduced(parts);return result?result.join(":"):"Values are too large to simplify safely"};
   const error=(message:string)=>[{label:"Ratio calculation",value:message}];
   if(mode==="from-percent"){
    const percent=Number(String(a).trim().replace(/%$/,""));
    if(!Number.isFinite(percent)||percent<0||percent>100)return error("Enter a percentage from 0 to 100");
    return[{label:"Part-to-remainder ratio",value:ratio([percent,100-percent]),note:"A percentage p of a whole is p:(100 − p)"},{label:"Part of whole",value:`${fmt(percent,4)}%`},{label:"Remainder",value:`${fmt(100-percent,4)}%`}];
   }
   if(mode==="from-fraction"){
    const parts=parseParts(a,"0","fraction");
    if(!parts||parts.length!==2||parts[1]===0)return error("Enter a fraction with two terms and a non-zero denominator");
    return[{label:"Simplified ratio",value:ratio(parts),note:"Fraction numerator : denominator"},{label:"Fraction value",value:fmt(parts[0]/parts[1],6)},{label:"Equivalent percentage",value:`${fmt(parts[0]/parts[1]*100,4)}%`}];
   }
   const parts=parseParts(a,b);
   if(!parts)return error("Enter 2–5 non-negative ratio terms; separate terms with : or ,");
   if(["to-fraction","to-percent","equivalent"].includes(mode)&&parts.length!==2)return error("This mode needs exactly two ratio terms");
   if(mode==="scale"){
    const factor=n(b);
    if(factor<=0)return error("Enter a scale factor greater than zero");
    return[{label:"Scaled ratio",value:parts.map(part=>fmt(part*factor,6)).join(" : "),note:`Each term is multiplied by ${fmt(factor,6)}`},{label:"Equivalent simplified ratio",value:ratio(parts)},{label:"Scale factor",value:fmt(factor,6)}];
   }
   if(mode==="equivalent"){
    if(parts[0]<=0||n(c)<0)return error("The first known ratio term must be greater than zero and C cannot be negative");
    const x=parts[1]*n(c)/parts[0];
    return[{label:"Missing equivalent term (X)",value:fmt(x,6),note:`${fmt(parts[0])}:${fmt(parts[1])} = ${fmt(n(c))}:X`},{label:"Scale factor",value:fmt(n(c)/parts[0],6)},{label:"Cross products",value:`${fmt(parts[0]*x,6)} = ${fmt(parts[1]*n(c),6)}`}];
   }
   if(mode==="to-fraction"){
    if(parts[1]===0)return error("The second ratio term cannot be zero when converting to a fraction");
    const result=reduced(parts);
    return[{label:"Simplified fraction",value:result?`${result[0]}/${result[1]}`:"Values are too large to simplify safely",note:"First ratio term divided by second ratio term"},{label:"Decimal value",value:fmt(parts[0]/parts[1],6)},{label:"Percentage equivalent",value:`${fmt(parts[0]/parts[1]*100,4)}%`}];
   }
   if(mode==="to-percent"){
    if(parts[1]===0)return error("The second ratio term cannot be zero when converting A:B to a percentage");
    const total=parts[0]+parts[1];
    return[{label:"A as a percentage of B",value:`${fmt(parts[0]/parts[1]*100,4)}%`,note:"Calculated as A ÷ B × 100"},{label:"A share of the combined total",value:`${fmt(parts[0]/total*100,4)}%`},{label:"B share of the combined total",value:`${fmt(parts[1]/total*100,4)}%`}];
   }
   if(mode==="share"){
    const total=parts.reduce((sum,part)=>sum+part,0);
    return[{label:"First term share of total",value:`${fmt(total?parts[0]/total*100:NaN,4)}%`,note:`Total of all terms: ${fmt(total,6)}`},{label:"Simplified ratio",value:ratio(parts)},{label:"Other terms share",value:`${fmt(total?(total-parts[0])/total*100:NaN,4)}%`}];
   }
   const total=parts.reduce((sum,part)=>sum+part,0);
   const result=reduced(parts);
   const fraction=parts.length===2&&result?`${result[0]}/${result[1]}`:"Only a two-term ratio converts to one fraction";
   return[{label:"Simplified ratio",value:ratio(parts),note:"Terms are reduced using a common factor"},{label:"Equivalent fraction",value:fraction},{label:"First term share of total",value:`${fmt(total?parts[0]/total*100:NaN,4)}%`}];
  }};
 }
 if(slug==="age-calculator")return{labels:["Date of birth","Age on date","Unused"],suffix:["date","date",""],calculate:()=>{const birth=new Date(`${a}T12:00:00`),on=new Date(`${b}T12:00:00`);if(isNaN(birth.getTime())||isNaN(on.getTime())||on<birth)return[{label:"Chronological age",value:"Enter valid dates"}];let y=on.getFullYear()-birth.getFullYear(),m=on.getMonth()-birth.getMonth(),day=on.getDate()-birth.getDate();if(day<0){m--;day+=new Date(on.getFullYear(),on.getMonth(),0).getDate()}if(m<0){y--;m+=12}const days=Math.floor((on.getTime()-birth.getTime())/86400000);return[{label:"Chronological age",value:`${y} years, ${m} months, ${day} days`,note:"Completed calendar age"},{label:"Total days",value:fmt(days,0)},{label:"Approx. months",value:fmt(days/30.436875,1)}]}};
 if(slug==="hypotenuse-calculator")return{labels:["Leg A","Leg B","Unused"],suffix:["units","units",""],calculate:()=>{const A=n(a),B=n(b),h=Math.hypot(A,B);return[{label:"Hypotenuse",value:fmt(h,6),note:"c = √(a² + b²)"},{label:"Area",value:fmt(A*B/2,6)},{label:"Perimeter",value:fmt(A+B+h,6)}]}};
 if(slug==="period-calculator")return{labels:["First day of last period","Usual cycle length","Period length"],suffix:["date","days","days"],calculate:()=>{const cycle=Math.max(1,n(b)),len=Math.max(1,n(c)),next=addDays(a,cycle),end=next?addDays(next.toISOString().slice(0,10),len-1):null;return[{label:"Estimated next period",value:dateText(next),note:"Cycle estimates can vary naturally"},{label:"Estimated end",value:dateText(end)},{label:"Following cycle",value:next?dateText(addDays(next.toISOString().slice(0,10),cycle)):"—"}]}};
 if(slug==="random-number-generator")return{labels:["Minimum integer","Maximum integer","How many numbers"],suffix:["","",""],calculate:()=>{let min=Math.ceil(n(a)),max=Math.floor(n(b));if(max<min)[min,max]=[max,min];const count=Math.min(20,Math.max(1,Math.floor(n(c)||1))),vals=Array.from({length:count},()=>Math.floor(Math.random()*(max-min+1))+min);return[{label:"Random result",value:vals.join(", "),note:`Inclusive range ${min}–${max}`},{label:"Possible integers",value:fmt(max-min+1,0)},{label:"Draw count",value:String(count)}]}};
 if(slug==="cubic-yard-calculator")return{labels:["Length","Width","Depth"],suffix:["ft","ft","ft"],calculate:()=>{const ft3=n(a)*n(b)*n(c),yd3=ft3/27;return[{label:"Cubic yards",value:fmt(yd3,3),note:"Before waste or compaction"},{label:"Cubic feet",value:fmt(ft3,2)},{label:"Cubic metres",value:fmt(ft3*0.0283168,3)}]}};
 if(slug==="gravel-stone-calculator")return{labels:["Length","Width","Depth","Bulk density"],suffix:["ft","ft","in","lb/ft³"],calculate:()=>{const ft3=n(a)*n(b)*(n(c)/12),yd3=ft3/27,lb=ft3*n(d);return[{label:"Material volume",value:`${fmt(yd3,2)} yd³`,note:"Add project-specific waste separately"},{label:"Estimated weight",value:`${fmt(lb/2000,2)} US tons`},{label:"Cubic feet",value:fmt(ft3,2)}]}};
 if(slug==="army-waist-height-ratio-calculator")return{labels:["Waist at navel","Standing height","Unused"],suffix:["in","in",""],calculate:()=>{const ratio=n(b)>0?n(a)/n(b):NaN;return[{label:"Waist-to-height ratio",value:fmt(ratio,3),note:"Current Army screening method (2026)"},{label:"0.55 benchmark",value:ratio<0.55?"Below benchmark":"At or above benchmark"},{label:"Difference from 0.55",value:`${fmt((0.55-ratio)*100,2)} percentage points`}]}};
 if(slug==="401k-calculator"){const mode=String(a).trim().toLowerCase();if(mode.startsWith("withdraw"))return{labels:["Mode: type withdrawal","Gross distribution","Estimated federal income tax rate","Estimated early distribution penalty rate","Estimated state tax rate"],suffix:["text","currency","%","%","%"],calculate:()=>{const gross=n(b),federal=gross*n(c)/100,penalty=gross*n(d)/100,state=gross*n(e)/100;return[{label:"Estimated amount after entered rates",value:cash(gross-federal-penalty-state),note:"Simplified estimate only; taxability, exceptions and withholding differ"},{label:"Federal tax estimate",value:cash(federal)},{label:"Penalty and state tax estimates",value:cash(penalty+state)}]}};if(mode.startsWith("compare")||mode.startsWith("roth"))return{labels:["Mode: type compare","Annual contribution before tax","Years invested","Assumed annual return","Current tax %, future tax % (e.g. 22,15)"],suffix:["text","currency","years","%","text"],calculate:()=>{const rates=String(e).split(/[,;\s]+/).filter(Boolean).map(Number),current=(rates[0]||0)/100,future=(rates[1]||0)/100,years=Math.max(0,n(c)),r=n(d)/100,factor=r?((Math.pow(1+r,years)-1)/r):years,traditional=n(b)*factor*(1-future),roth=n(b)*(1-current)*factor;return[{label:"Traditional 401(k), after assumed future tax",value:cash(traditional),note:"Same gross contribution; simplified end-of-year contribution model"},{label:"Roth 401(k), after current tax",value:cash(roth)},{label:"Difference (Roth minus traditional)",value:cash(roth-traditional)}]}};return{labels:["Current balance or mode: projection, compare, withdrawal","Annual employee contribution","Annual employer contribution","Assumed annual return","Years"],suffix:["currency or text","currency","currency","%","years"],calculate:()=>{let bal=n(a),emp=n(b),match=n(c),rate=n(d)/100,years=Math.min(60,Math.max(0,Math.floor(n(e))));for(let i=0;i<years;i++)bal=(bal+emp+match)*(1+rate);const contrib=n(a)+(emp+match)*years;return[{label:"Projected balance",value:cash(bal),note:"Illustrative, not guaranteed"},{label:"Total entered contributions",value:cash(contrib)},{label:"Estimated growth",value:cash(bal-contrib)}]}}};
 if(slug==="sand-calculator")return{labels:["Length","Width","Sand depth","Bulk density"],suffix:["ft","ft","in","lb/ft³"],calculate:()=>{const ft3=n(a)*n(b)*(n(c)/12),yd3=ft3/27,lb=ft3*n(d);return[{label:"Sand volume",value:`${fmt(yd3,2)} yd³`,note:"Before waste and compaction"},{label:"Estimated weight",value:`${fmt(lb/2000,2)} US tons`},{label:"Cubic feet",value:fmt(ft3,2)}]}};
 if(slug==="right-triangle-calculator")return{labels:["Known side or leg","Second leg or known leg","Angle in degrees","Mode: legs, hypotenuse + leg, or leg + angle"],suffix:["units","units","degrees","text"],calculate:()=>{const A=n(a),B=n(b),mode=String(d).trim().toLowerCase();let legA=A,legB=B,h=Math.hypot(A,B);if(mode.startsWith("hyp")){if(A<=B||B<=0)return[{label:"Hypotenuse",value:"Hypotenuse must exceed the known leg"}];legA=B;legB=Math.sqrt(A*A-B*B);h=A}else if(mode.startsWith("leg +")){const angle=n(c)*Math.PI/180;if(A<=0||angle<=0||angle>=Math.PI/2)return[{label:"Triangle solution",value:"Enter a positive side and acute angle below 90°"}];legA=A;legB=A/Math.tan(angle);h=A/Math.sin(angle)}const valid=legA>0&&legB>0,ang=Math.atan2(legA,legB)*180/Math.PI;return[{label:"Hypotenuse",value:valid?fmt(h,6):"Enter positive sides",note:"Right triangle solution"},{label:"Missing leg",value:valid?(mode.startsWith("hyp")||mode.startsWith("leg +")?fmt(legB,6):"Both legs entered"):"—"},{label:"Acute angles",value:valid?`${fmt(ang,2)}° / ${fmt(90-ang,2)}°`:"—"},{label:"Area / perimeter",value:valid?`${fmt(legA*legB/2,3)} / ${fmt(legA+legB+h,3)}`:"—"}]}};
 if(slug==="ap-world-score-calculator")return{labels:["MCQ percent","SAQ percent","DBQ percent","LEQ percent"],suffix:["%","%","%","%"],calculate:()=>{const score=n(a)*.40+n(b)*.20+n(c)*.25+n(d)*.15;return[{label:"Weighted composite",value:`${fmt(score,2)}%`,note:"Current section weights; not an official 1–5 conversion"},{label:"MCQ + SAQ contribution",value:`${fmt(n(a)*.40+n(b)*.20,2)} points`},{label:"DBQ + LEQ contribution",value:`${fmt(n(c)*.25+n(d)*.15,2)} points`}]}};
 return null;
};
