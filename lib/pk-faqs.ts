import type {Tool} from "./tools";

/** Generic FAQ entries shared by every Pakistan calculator (lib/tools.ts commonFaq). */
const generic=new Set([
  "Does SolvePilot store my values?",
  "Should I treat the result as an exact bill or quotation?",
  "How can I improve the accuracy?",
]);

const sentenceCase=(s:string)=>s.trim().replace(/\s+/g," ");

/**
 * Page-specific FAQs for Pakistan calculators. Replaces the site-wide generic entries with
 * answers taken from the tool's own formula and worked example, so the visible FAQ and the
 * FAQPage schema differ per page. Catalog definitions stay unchanged.
 */
export function pakistanFaqs(tool:Tool):{question:string;answer:string}[]{
  const short=tool.shortTitle.toLowerCase();
  const name=/calculator|converter|checker|estimator|generator|planner|comparison/.test(short)?short:`${short} calculator`;
  const own=tool.faqs.filter(f=>!generic.has(f.question));
  const specific=[
    {question:`How does the ${name} work out the result?`,answer:sentenceCase(tool.formula)},
    {question:`Can you show a worked ${name} example?`,answer:sentenceCase(tool.example)},
    {question:`What does the ${name} calculate?`,answer:sentenceCase(tool.description)},
  ].filter(f=>f.answer.length>20&&!own.some(o=>o.question===f.question));
  const [first,...rest]=own;
  return first?[first,...specific,...rest]:[...specific,...rest];
}
