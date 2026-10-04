"use client";
import {useState} from 'react';
import {booleanTable} from './calculators/roadmap-next20';
type Plan=ReturnType<typeof booleanTable>&{expression:string};
export function BooleanAlgebraTool(){
 const [expression,setExpression]=useState('A&!B');
 const [plan,setPlan]=useState<Plan|null>(null);
 const [error,setError]=useState('');
 const calculate=()=>{try{const table=booleanTable(expression);setPlan({...table,expression});setError('');}catch(e){setError(e instanceof Error?e.message:'Check the Boolean expression.');}};
 const count=plan?.rows.filter(r=>r.output).length||0;
 return <section className="calculator-shell" aria-label="Boolean algebra calculator">
  <div className="calc-inputs"><div className="calc-title"><span>Boolean truth table</span><strong>Local parsing: no code execution</strong></div>
   <label className="field"><span>Boolean expression</span><div><input aria-label="Boolean expression" type="text" value={expression} maxLength={200} onChange={event=>setExpression(event.target.value)}/></div></label>
   <p>Use A–D, 0, 1, !, &amp;, ^, | and parentheses. Precedence: NOT, AND, XOR, OR.</p>
   <button type="button" className="calculate-button" onClick={calculate}>Calculate result <span>→</span></button>
   {error&&<p role="alert">{error}</p>}
  </div>
  <div className="calc-results show" aria-live="polite">
   <div className="result-badge">{plan?plan.expression===expression?'✓ Calculated result':'Inputs changed — click Calculate to update':'Ready to calculate'}</div>
   {plan?<><p>Submitted expression: {plan.expression}</p><h2>{count===plan.rows.length?'Tautology':count===0?'Contradiction':'Contingent'}</h2><p>{count} true rows out of {plan.rows.length}</p>
    <div className="guide-table-wrap"><table><caption>Truth table for the last submitted expression</caption><thead><tr>{plan.vars.map(v=><th key={v} scope="col">{v}</th>)}<th scope="col">Output</th></tr></thead><tbody>{plan.rows.map((r,i)=><tr key={i}>{r.inputs?r.inputs.split(' ').map((v,j)=><td key={j}>{v}</td>):null}<td>{r.output}</td></tr>)}</tbody></table></div>
   </>:<><p>Your result</p><h2>Click Calculate</h2><small>Every assignment is displayed after you submit an expression.</small></>}
  </div>
 </section>;
}
