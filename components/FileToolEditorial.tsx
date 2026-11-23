import Link from "next/link";
import {fileToolNotes,formatNotes} from "@/lib/file-format-notes";

type EditorialTool={slug:string;title:string;shortTitle:string};

/**
 * Tool-specific guidance for document and media tools: what the operation changes, what to
 * know about the input and output formats, format-specific mistakes and checks, and links to
 * the format specifications. Replaces a generic block that was identical on 41 pages.
 */
export function FileToolEditorial({tool}:{tool:EditorialTool;area?:"document"|"media"}){
  const notes=fileToolNotes[tool.slug];
  if(!notes)return null;
  const input=formatNotes[notes.input],output=formatNotes[notes.output];
  const sameFormat=notes.input===notes.output;
  const mistakes=[...input.mistakes,...(sameFormat?[]:output.mistakes)];
  const checks=[...output.checks,...(sameFormat?[]:input.checks.slice(0,1))];
  const specs=[input.spec,output.spec].filter((s,i,a):s is {name:string;url:string}=>Boolean(s)&&a.findIndex(x=>x?.url===s!.url)===i);
  return <section className="shell rich-content file-editorial" aria-label={`${tool.shortTitle} format guidance`}>
    <h2>What {tool.shortTitle} changes</h2>
    <p>{notes.operation}</p>
    {input.asInput&&<><h2>About the {input.label} input</h2><p>{input.asInput}</p></>}
    {!sameFormat&&output.asOutput&&<><h2>About the {output.label} result</h2><p>{output.asOutput}</p></>}
    {sameFormat&&output.asOutput&&<p>{output.asOutput}</p>}
    <h2>Common mistakes to avoid</h2>
    <ul>{mistakes.map(m=><li key={m}>{m}</li>)}</ul>
    <h2>Accuracy and verification</h2>
    <ul>{checks.map(c=><li key={c}>{c}</li>)}</ul>
    <p>Keep the original file until you have opened and checked the result.</p>
    <h2>Sources and review information</h2>
    <p>{specs.length?<>Format references: {specs.map((s,i)=><span key={s.url}>{i?"; ":""}<a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a></span>)}. </>:null}The behaviour described here was checked against the tool&apos;s code by Mohammad Qasim under our <Link href="/editorial-policy/">editorial policy</Link>.</p>
  </section>;
}
