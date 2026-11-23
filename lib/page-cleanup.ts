/**
 * Render-time removal of site-wide boilerplate (docs/seo-audit.md, AGENTS.md §26).
 * Text that appears word-for-word on many tool pages adds no value to any single page and
 * reads as mass-produced. Catalog definitions are NOT modified (protected fingerprints);
 * pages render a cleaned view instead. FAQ text rendered here is also what FAQPage schema uses.
 */
import {supplementalFaqs} from "./page-supplements";

type Faq = {question: string; answer: string};
type Consideration = {title: string; text: string};
export type CleanableTool = {
  slug: string; title: string; shortTitle: string; description: string; intro: string;
  formula: string; example: string; limitations: string; faqs: Faq[]; considerations: Consideration[];
};

/** SEO-process wording written for search engines, not visitors. Always hidden. */
export const SEO_JARGON = /thin (duplicate|url)|keyword variants?|closely (matching|related) (searches|keyword)|search[- ]intent scope|canonical page|cannibali[sz]ation(?! ,| or|, returns)/i;

/** Shared on this many pages or more = boilerplate. */
export const BOILERPLATE_THRESHOLD = 8;

const norm = (text: string, t: Pick<CleanableTool, "shortTitle" | "title">) =>
  text.toLowerCase().split(t.title.toLowerCase()).join("x").split(t.shortTitle.toLowerCase()).join("x").replace(/\s+/g, " ").trim();
const sentences = (text: string) => text.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g)?.map(s => s.trim()).filter(Boolean) || [];

type Counts = {faq: Map<string, number>; con: Map<string, number>; intro: Map<string, number>; lim: Map<string, number>};
const countsCache = new WeakMap<object, Counts>();
function counts(collection: CleanableTool[]): Counts {
  const hit = countsCache.get(collection);
  if (hit) return hit;
  const c: Counts = {faq: new Map(), con: new Map(), intro: new Map(), lim: new Map()};
  const add = (m: Map<string, number>, k: string) => m.set(k, (m.get(k) || 0) + 1);
  for (const t of collection) {
    for (const k of new Set(t.faqs.map(f => norm(f.question + "|" + f.answer, t)))) add(c.faq, k);
    for (const k of new Set(t.considerations.map(x => norm(x.text, t)))) add(c.con, k);
    for (const k of new Set(sentences(t.intro).map(s => norm(s, t)))) add(c.intro, k);
    add(c.lim, norm(t.limitations, t));
  }
  countsCache.set(collection, c);
  return c;
}

const name = (t: CleanableTool) => {
  const s = t.shortTitle.trim();
  return /calculator|converter|checker|estimator|generator|planner|solver|counter|tool|comparison/i.test(s) ? s : `${s} calculator`;
};

/** FAQs without site-wide entries; topped up to `minimum` with answers from the page's own method. */
export function cleanFaqs(t: CleanableTool, collection: CleanableTool[], minimum = 5, threshold = BOILERPLATE_THRESHOLD): Faq[] {
  const c = counts(collection), n = name(t);
  const own = t.faqs.filter(f => (c.faq.get(norm(f.question + "|" + f.answer, t)) || 0) < threshold && !SEO_JARGON.test(f.question + " " + f.answer));
  const specific: Faq[] = [
    {question: `How does the ${n} work out the result?`, answer: t.formula},
    {question: `Can you show a worked ${n} example?`, answer: t.example},
    {question: `What does the ${n} calculate?`, answer: t.description},
    ...((c.lim.get(norm(t.limitations, t)) || 0) < threshold ? [{question: `What are the limits of the ${n}?`, answer: t.limitations}] : []),
  ].map(f => ({question: f.question, answer: f.answer.replace(/\s+/g, " ").trim()}))
    .filter(f => f.answer.length > 20 && !own.some(o => o.question.toLowerCase() === f.question.toLowerCase() || o.answer === f.answer));
  const pageFactors = t.considerations.filter(x => (c.con.get(norm(x.text, t)) || 0) < threshold && !SEO_JARGON.test(x.title + " " + x.text));
  if (pageFactors.length) specific.push({question: `What affects the ${n} result most?`, answer: pageFactors.map(x => `${x.title}: ${x.text}`).join(" ")});
  specific.unshift(...(supplementalFaqs[t.slug] || []));
  const result = [...own];
  const extra = (supplementalFaqs[t.slug] || []).length;
  for (const f of specific) if (result.length < Math.max(minimum, own.length) + extra) result.push(f);
  // Still short: fall back to the least-repeated original entries rather than show too few answers.
  const dropped = t.faqs.filter(f => !result.includes(f) && !SEO_JARGON.test(f.question + " " + f.answer)).sort((x, y) => (c.faq.get(norm(x.question + "|" + x.answer, t)) || 0) - (c.faq.get(norm(y.question + "|" + y.answer, t)) || 0));
  for (const f of dropped) if (result.length < minimum) result.push(f);
  return result;
}

/** Considerations without site-wide cards; falls back to the page's own limitations. */
export function cleanConsiderations(t: CleanableTool, collection: CleanableTool[], threshold = BOILERPLATE_THRESHOLD): Consideration[] {
  const c = counts(collection);
  const kept = t.considerations.filter(x => (c.con.get(norm(x.text, t)) || 0) < threshold && !SEO_JARGON.test(x.title + " " + x.text));
  if (kept.length) return kept;
  if ((c.lim.get(norm(t.limitations, t)) || 0) < threshold) return [{title: "What limits the result", text: t.limitations}];
  return t.considerations.filter(x => !SEO_JARGON.test(x.title + " " + x.text)).slice(0, 1);
}

/** Intro without sentences repeated across many pages (falls back to the description). */
export function cleanIntro(t: CleanableTool, collection: CleanableTool[], threshold = BOILERPLATE_THRESHOLD): string {
  const c = counts(collection);
  const kept = sentences(t.intro).filter(s => (c.intro.get(norm(s, t)) || 0) < threshold && !SEO_JARGON.test(s)).join(" ");
  return kept.length > 40 ? kept : t.description;
}

/** Remove sentences written about SEO strategy from free-text fields (audit interpretations, notes). */
export const stripSeoJargon = (text: string) => sentences(text).filter(s => !SEO_JARGON.test(s)).join(" ") || text;

/** FAQ cleanup for file tools (no formula/example fields): drop entries shared by 8+ tools, top up with page-specific extras. */
export function cleanFileFaqs(t: {title: string; shortTitle: string; faqs: Faq[]}, collection: {title: string; shortTitle: string; faqs: Faq[]}[], extras: Faq[], minimum = 5, threshold = BOILERPLATE_THRESHOLD): Faq[] {
  const key = (x: {title: string; shortTitle: string}, f: Faq) => norm(f.question + "|" + f.answer, x);
  const counts = new Map<string, number>();
  for (const x of collection) for (const k of new Set(x.faqs.map(f => key(x, f)))) counts.set(k, (counts.get(k) || 0) + 1);
  const own = t.faqs.filter(f => (counts.get(key(t, f)) || 0) < threshold && !SEO_JARGON.test(f.question + " " + f.answer));
  const result = [...own];
  for (const f of extras) if (result.length < Math.max(minimum, own.length) && !result.some(o => o.question === f.question)) result.push(f);
  for (const f of t.faqs) if (result.length < minimum && !result.includes(f)) result.push(f);
  return result;
}
