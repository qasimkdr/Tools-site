"use client";
import { useMemo, useState } from "react";
import { calculatorDefaults } from "./calculators/defaults";
import { formatNeutral, formatPkr, numberValue as n } from "./calculators/helpers";
import { resolveGlobal } from "./calculators/global";
import { resolveGlobalFinance } from "./calculators/global-finance";
import { resolveEcommerce } from "./calculators/ecommerce";
import { resolveFinanceExpansion } from "./calculators/finance-expansion";
import { resolveCore } from "./calculators/core";
import { resolveEnergyMobile } from "./calculators/energy-mobile";
import { resolveFinanceTax } from "./calculators/finance-tax";
import { resolveBusiness } from "./calculators/business";
import { resolveVehicles } from "./calculators/vehicles";
import { resolveHomeProperty } from "./calculators/home-property";
import { resolveEducationEveryday } from "./calculators/education-everyday";
import type { CalculatorConfig, CalculatorResolver, CalculatorResult } from "./calculators/types";

const resolvers: CalculatorResolver[] = [resolveFinanceExpansion,resolveEcommerce,resolveGlobalFinance,resolveGlobal,resolveCore,resolveEnergyMobile,resolveFinanceTax,resolveBusiness,resolveVehicles,resolveHomeProperty,resolveEducationEveryday];
const neutralSlugs=new Set(["compound-interest-calculator","savings-goal-calculator","mortgage-payment-calculator","discount-calculator","sales-tax-vat-calculator","profit-margin-calculator-global","business-break-even-calculator","tip-calculator","split-bill-calculator","unit-price-comparison-calculator","work-hours-calculator","personal-cash-runway-calculator","business-cash-runway-calculator","monthly-burn-rate-calculator","emergency-fund-calculator","sinking-fund-calculator","debt-to-income-ratio-calculator","loan-comparison-calculator","effective-interest-rate-calculator","loan-early-payment-calculator","invoice-financing-cost-calculator","late-payment-interest-calculator","subscription-cost-calculator","salary-to-freelance-rate-calculator","savings-withdrawal-runway-calculator","recurring-expense-impact-calculator","lifestyle-inflation-calculator","rent-affordability-calculator","financial-goal-timeline-calculator","budget-percentage-calculator","net-worth-change-calculator"]);
const expansionSlugs=new Set(["debt-snowball-vs-avalanche-calculator","credit-card-minimum-payment-calculator","credit-card-payoff-calculator","credit-card-utilization-calculator","investment-fee-calculator","inflation-adjusted-return-calculator","dollar-cost-averaging-calculator","lump-sum-vs-dca-calculator","coast-fire-calculator","fire-number-calculator","savings-rate-calculator","dividend-reinvestment-calculator","portfolio-rebalancing-calculator","capital-gains-calculator-global","tiered-commission-calculator","prorated-salary-calculator","pay-raise-percentage-calculator","overtime-pay-calculator-global","invoice-due-date-calculator","net-payment-terms-calculator","invoice-discount-calculator","freelance-project-profit-calculator","saas-pricing-calculator","debt-service-coverage-ratio-calculator","merchant-processing-fee-calculator"]);

function Field({label,value,onChange,suffix}:{label:string;value:string;onChange:(value:string)=>void;suffix?:string}){const date=suffix==="date";return <label className="field"><span>{label}</span><div><input type={date?"date":"text"} inputMode={date?undefined:"decimal"} value={value} onChange={(event)=>onChange(event.target.value)} aria-label={label}/>{suffix&&!date&&<b>{suffix}</b>}</div></label>}

export function Calculator({slug,currencyNeutral=false}:{slug:string;currencyNeutral?:boolean}){
 const initial=calculatorDefaults[slug]||["20","5000","0"];
 const [a,setA]=useState(initial[0]);const [b,setB]=useState(initial[1]);const [c,setC]=useState(initial[2]);const [d,setD]=useState(initial[3]||"0");const [e,setE]=useState(initial[4]||"0");const [calculated,setCalculated]=useState(true);
 const config=useMemo<CalculatorConfig>(()=>{
  const cash=(value:number)=>(currencyNeutral||neutralSlugs.has(slug)||expansionSlugs.has(slug))?formatNeutral(value):formatPkr(value);
  const context={slug,a,b,c,d,e,cash};
  for(const resolve of resolvers){const match=resolve(context);if(match)return match}
  return{labels:["Percentage","Value","Unused"],suffix:["%","",""],calculate:()=>[{label:`${n(a)}% of ${n(b)}`,value:(n(a)*n(b)/100).toLocaleString("en-PK"),note:"Instant percentage result"},{label:"Decimal equivalent",value:(n(a)/100).toFixed(4)},{label:"Remaining value",value:(n(b)-n(a)*n(b)/100).toLocaleString("en-PK")}]};
 },[slug,a,b,c,d,e,currencyNeutral]);
 const results:CalculatorResult[]=config.calculate();
 return <section className="calculator-shell" aria-label="Calculator"><div className="calc-inputs"><div className="calc-title"><span>Interactive calculator</span><strong>Your values stay on this device</strong></div><Field label={config.labels[0]} value={a} onChange={setA} suffix={config.suffix[0]}/><Field label={config.labels[1]} value={b} onChange={setB} suffix={config.suffix[1]}/>{config.labels[2]!=="Unused"&&<Field label={config.labels[2]} value={c} onChange={setC} suffix={config.suffix[2]}/>} {config.labels[3]&&<Field label={config.labels[3]} value={d} onChange={setD} suffix={config.suffix[3]}/>} {config.labels[4]&&<Field label={config.labels[4]} value={e} onChange={setE} suffix={config.suffix[4]}/>}<button className="calculate-button" onClick={()=>{setCalculated(false);requestAnimationFrame(()=>setCalculated(true))}}>Calculate result <span>→</span></button></div><div className={`calc-results ${calculated?"show":""}`}><div className="result-badge">✓ Estimated result</div><p>{results[0].label}</p><h2>{results[0].value}</h2><small>{results[0].note}</small><div className="result-grid">{results.slice(1).map(result=><div key={result.label}><span>{result.label}</span><strong>{result.value}</strong></div>)}</div><div className="result-meter"><i style={{width:"72%"}}/><span>Personalised from your inputs</span></div></div></section>
}
