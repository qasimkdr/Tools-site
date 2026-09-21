import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "out", "pk", "tools");
const toolSource = readFileSync(join(process.cwd(), "lib", "tools.ts"), "utf8");
const baseSection = toolSource.split("const baseTools:")[1]?.split("const editorial:")[0] || "";
const declaredTools = (baseSection.match(/slug:\s*"[^"]+"/g) || []).length + (baseSection.match(/financeTool\("[^"]+"/g) || []).length + (baseSection.match(/energyTool\("[^"]+"/g) || []).length + (baseSection.match(/businessTool\("[^"]+"/g) || []).length + (baseSection.match(/vehicleTool\("[^"]+"/g) || []).length + (baseSection.match(/propertyTool\("[^"]+"/g) || []).length + (baseSection.match(/utilityTool\("[^"]+"/g) || []).length + 8;
const pages = readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => ({ slug: entry.name, html: readFileSync(join(root, entry.name, "index.html"), "utf8") }));

const failures = [];
const visibleText = (html) => html
  .replace(/<script[\s\S]*?<\/script>/gi, " ")
  .replace(/<style[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&[a-z#0-9]+;/gi, " ")
  .replace(/\s+/g, " ")
  .trim();
for (const { slug, html } of pages) {
  const text = visibleText(html);
  const words = text.split(" ").filter(Boolean).length;
  const h2s = (html.match(/<h2/g) || []).length;
  const faqs = (html.match(/<details/g) || []).length;
  const checks = [
    [words >= 380, `only ${words} rendered words (minimum 380)`],
    [h2s >= 7, `only ${h2s} H2 sections (minimum 7)`],
    [faqs >= 4, `only ${faqs} FAQs (minimum 4)`],
    [html.includes("Formula and methodology"), "missing methodology"],
    [html.includes("Limits of this estimate"), "missing limitations"],
    [html.includes('rel="canonical"'), "missing canonical URL"],
    [html.includes("application/ld+json"), "missing structured data"],
  ];
  for (const [passed, message] of checks) if (!passed) failures.push(`${slug}: ${message}`);
}

const globalRoot = join(process.cwd(), "out", "tools");
const globalPages = readdirSync(globalRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => ({ slug: entry.name, html: readFileSync(join(globalRoot, entry.name, "index.html"), "utf8") }));
for (const { slug, html } of globalPages) {
  const text = visibleText(html);
  const words = text.split(" ").filter(Boolean).length;
  const h2s = (html.match(/<h2/g) || []).length;
  const faqs = (html.match(/<details/g) || []).length;
  if (words < 380) failures.push(`global ${slug}: only ${words} rendered words (minimum 380)`);
  if (h2s < 7) failures.push(`global ${slug}: only ${h2s} H2 sections (minimum 7)`);
  if (faqs < 5) failures.push(`global ${slug}: only ${faqs} FAQs (minimum 5)`);
  if (!html.includes("Formula and methodology")) failures.push(`global ${slug}: missing methodology`);
  if (!html.includes("Limits of this estimate")) failures.push(`global ${slug}: missing limitations`);
  if (!html.includes('rel="canonical"')) failures.push(`global ${slug}: missing canonical URL`);
  if (!html.includes("application/ld+json")) failures.push(`global ${slug}: missing structured data`);
}

const flagshipPages = [...pages, ...globalPages].filter(({ html }) => html.includes("How to interpret your result"));
if (flagshipPages.length !== 40) failures.push(`40 flagship calculator pages expected but ${flagshipPages.length} generated`);
for (const { slug, html } of flagshipPages) {
  const text = visibleText(html);
  const words = text.split(" ").filter(Boolean).length;
  if (words < 750) failures.push(`flagship ${slug}: only ${words} rendered words (minimum 750)`);
  if (!html.includes("Scenario comparison")) failures.push(`flagship ${slug}: missing scenario comparison`);
  if (!html.includes("Common mistakes to avoid")) failures.push(`flagship ${slug}: missing mistakes section`);
  if (!html.includes("How to verify this result")) failures.push(`flagship ${slug}: missing verification guidance`);
  if ((html.match(/<tr/g) || []).length < 4) failures.push(`flagship ${slug}: incomplete scenario table`);
}

const trustPages = ["about", "author/mohammad-qasim", "contact", "privacy", "cookies", "terms", "disclaimer", "editorial-policy", "guides", "pk/mobiles"];
const unfinished = /coming soon|publishing soon|in review|under construction|before launch|will be added|placeholder|lorem ipsum/i;
for (const route of trustPages) {
  const html = readFileSync(join(process.cwd(), "out", route, "index.html"), "utf8");
  const text = visibleText(html);
  const words = text.split(" ").filter(Boolean).length;
  if (words < 180) failures.push(`${route}: only ${words} rendered words on trust/content page`);
  if (unfinished.test(text)) failures.push(`${route}: contains unfinished-page language`);
  if (!html.includes('rel="canonical"')) failures.push(`${route}: missing canonical URL`);
}

const guideRoot = join(process.cwd(), "out", "guides");
const guidePages = readdirSync(guideRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => ({ slug: entry.name, html: readFileSync(join(guideRoot, entry.name, "index.html"), "utf8") }));
for (const { slug, html } of guidePages) {
  const text = visibleText(html);
  const words = text.split(" ").filter(Boolean).length;
  const h2s = (html.match(/<h2/g) || []).length;
  const internalLinks = (html.match(/href="\/(?:guides|pk\/tools)\//g) || []).length;
  const isLongForm = html.includes("guide-table-wrap");
  const minimumWords = isLongForm ? 1200 : 550;
  if (words < minimumWords) failures.push(`guide ${slug}: only ${words} rendered words (minimum ${minimumWords})`);
  if (h2s < 7) failures.push(`guide ${slug}: only ${h2s} H2 sections (minimum 7)`);
  if (internalLinks < 4) failures.push(`guide ${slug}: only ${internalLinks} guide/tool internal links`);
  if (!html.includes("Sources and further verification")) failures.push(`guide ${slug}: missing sources section`);
  if (!html.includes("Limitations and responsible use")) failures.push(`guide ${slug}: missing limitations section`);
  if (!html.includes("reviewed by Mohammad Qasim")) failures.push(`guide ${slug}: missing reviewer attribution`);
  if (isLongForm && (html.match(/<details/g) || []).length < 5) failures.push(`guide ${slug}: fewer than 5 FAQs`);
  if (isLongForm && !html.includes("worked-example")) failures.push(`guide ${slug}: missing worked example`);
  if (!html.includes('rel="canonical"')) failures.push(`guide ${slug}: missing canonical URL`);
  if (!html.includes("application/ld+json")) failures.push(`guide ${slug}: missing structured data`);
}

if (pages.length !== declaredTools) failures.push(`${declaredTools} tools declared but ${pages.length} pages generated`);
if (globalPages.length !== 15) failures.push(`15 global tools expected but ${globalPages.length} pages generated`);
if (failures.length) {
  console.error("Content quality gate failed:\n- " + failures.join("\n- "));
  process.exit(1);
}
console.log(`Content quality gate passed for ${pages.length} Pakistan calculators, ${globalPages.length} global calculators, ${flagshipPages.length} flagship upgrades and ${guidePages.length} guides.`);
