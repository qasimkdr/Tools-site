// Literal matching only; no executable user expressions or hidden originals in output.
export function redactText(text:string,phrases:string,ignoreCase=true):{text:string;matches:number} {
 if(phrases.length>50100)throw Error('Phrase input is limited to 50,100 characters.');
 if(text.length>100000)throw Error('Text is limited to 100,000 characters.');
 const terms=[...new Set(phrases.split(/\r?\n/).map(s=>s.trim()).filter(Boolean))].sort((a,b)=>b.length-a.length);
 if(!terms.length||terms.length>100||terms.some(s=>s.length>500))throw Error('Enter 1–100 literal phrases, one per line, each at most 500 characters.');
 const expression=new RegExp(terms.map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),ignoreCase?'gi':'g');
 let matches=0;const result=text.replace(expression,()=>{matches++;return'[REDACTED]'});return{text:result,matches};
}
