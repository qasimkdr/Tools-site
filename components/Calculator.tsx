"use client";
import {resolveRoadmap328} from "./calculators/roadmap-328-plus";
import {resolveRoadmap268} from "./calculators/roadmap-268-plus";
import {resolveNext20} from "./calculators/roadmap-next20";
import {resolveRoadmap206} from "./calculators/roadmap-206-225";
import {resolveRoadmap186} from "./calculators/roadmap-186-205";
import { useMemo, useState } from "react";
import { calculatorDefaults } from "./calculators/defaults";
import { formatNeutral, formatPkr, numberValue as n } from "./calculators/helpers";
import { resolveGlobal } from "./calculators/global";
import { resolveGlobalFinance } from "./calculators/global-finance";
import { resolveEcommerce } from "./calculators/ecommerce";
import { resolveFinanceExpansion } from "./calculators/finance-expansion";
import { resolveSeoFinance } from "./calculators/seo-finance";
import { resolveSemrushPhaseOne } from "./calculators/semrush-phase-one";
import { resolveSemrushPhaseOneB } from "./calculators/semrush-phase-one-b";
import { resolveSemrushPhaseTwoA } from "./calculators/semrush-phase-two-a";
import { resolveSemrushPhaseThree } from "./calculators/semrush-phase-three";
import { resolveCore } from "./calculators/core";
import { resolveEnergyMobile } from "./calculators/energy-mobile";
import { resolveFinanceTax } from "./calculators/finance-tax";
import { resolveBusiness } from "./calculators/business";
import { resolveVehicles } from "./calculators/vehicles";
import { resolveHomeProperty } from "./calculators/home-property";
import { resolveEducationEveryday } from "./calculators/education-everyday";
import type { CalculatorConfig, CalculatorResolver, CalculatorResult } from "./calculators/types";

import { resolveRoadmap146 } from "./calculators/roadmap-146-165";
import { resolveRoadmap126 } from "./calculators/roadmap-126-145";
import { resolveRoadmap106 } from "./calculators/roadmap-106-125";

import {resolveRoadmap166} from "./calculators/roadmap-166-185";
const resolvers: CalculatorResolver[] = [resolveRoadmap328,resolveRoadmap268,resolveNext20,resolveRoadmap206,resolveRoadmap186,resolveRoadmap166,resolveRoadmap146,resolveRoadmap126,resolveRoadmap106,resolveSemrushPhaseThree,resolveSemrushPhaseTwoA,resolveSemrushPhaseOneB,resolveSemrushPhaseOne,resolveSeoFinance,resolveFinanceExpansion,resolveEcommerce,resolveGlobalFinance,resolveGlobal,resolveCore,resolveEnergyMobile,resolveFinanceTax,resolveBusiness,resolveVehicles,resolveHomeProperty,resolveEducationEveryday];
const neutralSlugs=new Set(["interest-rate-cap-payout-calculator","cake-pricing-calculator","cap-rate-calculator","cpm-calculator","fence-cost-estimator","asphalt-calculator","llc-tax-calculator","crypto-conversion-calculator","bank-simple-interest-days","roof-area-calculator","basis-points-calculator","macroeconomics-calculator","arv-calculator","lawn-mowing-cost-calculator","firewood-cord-calculator","hourly-wage-and-tax-calculator","npv-calculator","paycheck-hours-calculator","paycheck-estimator-calculator","payment-calculator","interest-rate-calculator","401k-calculator","compound-interest-calculator","savings-goal-calculator","mortgage-payment-calculator","discount-calculator","sales-tax-vat-calculator","profit-margin-calculator-global","business-break-even-calculator","tip-calculator","split-bill-calculator","unit-price-comparison-calculator","work-hours-calculator","personal-cash-runway-calculator","business-cash-runway-calculator","monthly-burn-rate-calculator","emergency-fund-calculator","sinking-fund-calculator","debt-to-income-ratio-calculator","loan-comparison-calculator","effective-interest-rate-calculator","loan-early-payment-calculator","invoice-financing-cost-calculator","late-payment-interest-calculator","subscription-cost-calculator","salary-to-freelance-rate-calculator","savings-withdrawal-runway-calculator","recurring-expense-impact-calculator","lifestyle-inflation-calculator","rent-affordability-calculator","financial-goal-timeline-calculator","budget-percentage-calculator","net-worth-change-calculator"]);
const expansionSlugs=new Set(["debt-snowball-vs-avalanche-calculator","credit-card-minimum-payment-calculator","credit-card-payoff-calculator","credit-card-utilization-calculator","investment-fee-calculator","inflation-adjusted-return-calculator","dollar-cost-averaging-calculator","lump-sum-vs-dca-calculator","coast-fire-calculator","fire-number-calculator","savings-rate-calculator","dividend-reinvestment-calculator","portfolio-rebalancing-calculator","capital-gains-calculator-global","tiered-commission-calculator","prorated-salary-calculator","pay-raise-percentage-calculator","overtime-pay-calculator-global","invoice-due-date-calculator","net-payment-terms-calculator","invoice-discount-calculator","freelance-project-profit-calculator","saas-pricing-calculator","debt-service-coverage-ratio-calculator","merchant-processing-fee-calculator"]);
const seoFinanceSlugs=new Set(["real-estate-lawyer-cost-calculator","car-lease-vs-buy-calculator","seller-net-sheet-calculator","seller-financing-calculator","mortgage-buydown-calculator","first-lien-heloc-calculator"]);
const canonicalCalculatorAliases:Record<string,string>={"air-force-pt-calculator":"air-force-pt-test-calculator","hourly-wage-and-tax-calculator":"paycheck-estimator-calculator","date-calculator":"date-from-today-calculator","hypotenuse-calculator":"right-triangle-calculator","proportion-calculator":"ratio-calculator"};

function Field({label,value,onChange,suffix}:{label:string;value:string;onChange:(value:string)=>void;suffix?:string}){const date=suffix==="date",text=suffix==="text",multiline=suffix==="textarea",options=suffix?.startsWith("select:")?suffix.slice(7).split("|").map((item)=>{const [optionValue,optionLabel]=item.split("=");return{value:optionValue,label:optionLabel||optionValue}}):null;return <label className="field"><span>{label}</span><div>{options?<select value={value} onChange={(event)=>onChange(event.target.value)} aria-label={label}>{options.map(option=><option key={option.value} value={option.value}>{option.label}</option>)}</select>:multiline?<textarea rows={6} value={value} onChange={(event)=>onChange(event.target.value)} aria-label={label}/>:<><input type={date?"date":"text"} inputMode={date||text?undefined:"decimal"} value={value} onChange={(event)=>onChange(event.target.value)} aria-label={label}/>{suffix&&!date&&!text&&<b>{suffix}</b>}</>}</div></label>}

export function Calculator({slug,currencyNeutral=false}:{slug:string;currencyNeutral?:boolean}){
 const calculatorSlug=canonicalCalculatorAliases[slug]||slug;
 const initial=calculatorDefaults[calculatorSlug]||calculatorDefaults[slug]||["20","5000","0"];
 const [a,setA]=useState(initial[0]);const [b,setB]=useState(initial[1]);const [c,setC]=useState(initial[2]);const [d,setD]=useState(initial[3]||"0");const [e,setE]=useState(initial[4]||"0");const [f,setF]=useState(initial[5]||"0");const [g,setG]=useState(initial[6]||"0");const [h,setH]=useState(initial[7]||"0");const [calculated,setCalculated]=useState(true);const [submitted,setSubmitted]=useState<string|null>(null);
 const config=useMemo<CalculatorConfig>(()=>{
  const cash=(value:number)=>(currencyNeutral||neutralSlugs.has(slug)||expansionSlugs.has(slug)||seoFinanceSlugs.has(slug))?formatNeutral(value):formatPkr(value);
  const context={slug:calculatorSlug,a,b,c,d,e,f,g,h,cash};
  for(const resolve of resolvers){const match=resolve(context);if(match)return match}
  return{labels:["Percentage","Value","Unused"],suffix:["%","",""],calculate:()=>[{label:`${n(a)}% of ${n(b)}`,value:(n(a)*n(b)/100).toLocaleString("en-PK"),note:"Instant percentage result"},{label:"Decimal equivalent",value:(n(a)/100).toFixed(4)},{label:"Remaining value",value:(n(b)-n(a)*n(b)/100).toLocaleString("en-PK")}]};
 },[slug,a,b,c,d,e,f,g,h,currencyNeutral]);
 const [results,setResults]=useState<CalculatorResult[]>([{label:"Your result",value:"Click Calculate",note:"Enter your values, then click Calculate result."}]);
 return <section className="calculator-shell" aria-label="Calculator"><div className="calc-inputs"><div className="calc-title"><span>Interactive calculator</span><strong>Your values stay on this device</strong></div><Field label={config.labels[0]} value={a} onChange={setA} suffix={config.suffix[0]}/>{config.labels[1]!=="Unused"&&<Field label={config.labels[1]} value={b} onChange={setB} suffix={config.suffix[1]}/>} {config.labels[2]!=="Unused"&&<Field label={config.labels[2]} value={c} onChange={setC} suffix={config.suffix[2]}/>} {config.labels[3]&&config.labels[3]!=="Unused"&&<Field label={config.labels[3]} value={d} onChange={setD} suffix={config.suffix[3]}/>} {config.labels[4]&&config.labels[4]!=="Unused"&&<Field label={config.labels[4]} value={e} onChange={setE} suffix={config.suffix[4]}/>}{config.labels[5]&&config.labels[5]!=="Unused"&&<Field label={config.labels[5]} value={f} onChange={setF} suffix={config.suffix[5]}/>} {config.labels[6]&&config.labels[6]!=="Unused"&&<Field label={config.labels[6]} value={g} onChange={setG} suffix={config.suffix[6]}/>} {config.labels[7]&&config.labels[7]!=="Unused"&&<Field label={config.labels[7]} value={h} onChange={setH} suffix={config.suffix[7]}/>}<button className="calculate-button" onClick={()=>{setResults(config.calculate());setSubmitted(JSON.stringify([a,b,c,d,e,f,g,h]));setCalculated(false);requestAnimationFrame(()=>setCalculated(true))}}>Calculate result <span>→</span></button></div><div aria-live="polite" className={`calc-results ${calculated?"show":""}`}><div className="result-badge">{submitted===null?"Ready to calculate":submitted===JSON.stringify([a,b,c,d,e,f,g,h])?"✓ Calculated result":"Inputs changed — click Calculate to update"}</div><p>{results[0].label}</p><h2>{results[0].value}</h2><small>{results[0].note}</small><div className="result-grid">{results.slice(1).map(result=><div key={result.label}><span>{result.label}</span><strong>{result.value}</strong></div>)}</div><div className="result-meter"><i style={{width:"72%"}}/><span>Result uses last calculated inputs</span></div></div></section>
}
