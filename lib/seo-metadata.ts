const suffixes: Record<string, string> = {
  Energy: "Review the calculation, tariff assumptions and limitations before comparing it with an electricity bill.",
  Solar: "Review the energy assumptions, equipment limits and worked example before planning a solar purchase.",
  Money: "Review the formula, rates, repayment assumptions and limitations before making a financial decision.",
  Business: "Review the cost assumptions, formula and worked example before using the result for business planning.",
  Vehicles: "Review the distance, efficiency, price assumptions and limitations before making a vehicle decision.",
  Technology: "Review the units, technical assumptions and worked example before relying on the estimate.",
  Education: "Review the formula and confirm the applicable rules with your institution before using the result.",
  Home: "Review the measurements, local price assumptions and limitations before requesting a professional quotation.",
  Everyday: "Review the formula, entered values and worked example to understand and verify the result.",
  Guide: "Read the method, practical examples, official sources and limitations before relying on the information.",
};

const clean = (value: string) => value.replace(/\s+/g, " ").trim();
const firstSentence = (value: string) => (clean(value).match(/^.*?[.!?](?=\s|$)/)?.[0] || clean(value)).trim();
const DANGLING = /\s+(and|or|the|to|of|a|an|before|with|for|in|on|by|from)$/i;

/** Shorten without leaving a broken clause: prefer a sentence end, else a word boundary with no dangling connector. */
const trimClean = (value: string, maximum = 160) => {
  if (value.length <= maximum) return value;
  const cut = value.slice(0, maximum);
  const sentenceEnd = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "), cut.lastIndexOf("! "));
  if (sentenceEnd >= 109) return cut.slice(0, sentenceEnd + 1);
  let words = cut.slice(0, cut.lastIndexOf(" ")).replace(/[,:;\s]+$/, "");
  while (DANGLING.test(words)) words = words.replace(DANGLING, "");
  return `${words}.`;
};

/**
 * Meta description, 110–160 characters where possible. Short descriptions are completed with a
 * whole sentence from the page itself (worked example, formula, intro) before falling back to a
 * category sentence; text is never cut mid-sentence.
 */
export const seoDescription = (description: string, category = "Everyday", extras: string[] = []) => {
  const base = clean(description);
  if (base.length > 160) return trimClean(base);
  if (base.length >= 140) return base;
  for (const extra of extras) {
    const sentence = firstSentence(extra || "");
    const candidate = `${base} ${sentence}`;
    if (sentence.length > 20 && !base.includes(sentence) && candidate.length <= 160 && candidate.length >= 110) return candidate;
  }
  const suffix = suffixes[category] || suffixes.Everyday;
  const withSuffix = `${base} ${suffix}`;
  if (withSuffix.length <= 160) return withSuffix;
  if (base.length >= 110) return base;
  for (const tail of [" Free to use, no signup required.", " Free to use in your browser, with no signup and no values sent to a server."]) {
    const candidate = `${base}${tail}`;
    if (candidate.length >= 110 && candidate.length <= 160) return candidate;
  }
  return trimClean(withSuffix);
};

/** Title for <title>: drop the " | SolvePilot" suffix when it would push the title past 60 characters. */
export const pageTitle = (title: string): string | { absolute: string } =>
  `${title} | SolvePilot`.length > 60 ? { absolute: title } : title;
