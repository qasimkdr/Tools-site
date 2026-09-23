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

const scanForEscapedPlaceholders = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) scanForEscapedPlaceholders(path);
    else if (/\.(?:ts|tsx|js|mjs)$/.test(entry.name)) {
      const source = readFileSync(path, "utf8");
      if (source.includes("\\${")) failures.push(path + ": contains an escaped template placeholder");
    }
  }
};
for (const directory of ["app", "components", "lib"]) scanForEscapedPlaceholders(join(process.cwd(), directory));
const metaDescriptionLength = (html) => {
  const match = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)
    || html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  return match ? match[1]
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#(?:x27|39);/gi, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .length : 0;
};
const validateMetaDescription = (label, html) => {
  const length = metaDescriptionLength(html);
  if (length < 110 || length > 160) failures.push(`${label}: meta description is ${length} characters (required 110-160)`);
};
const openGraphValue = (html, property) => {
  const escaped = property.replace(":", "\\:");
  const direct = html.match(new RegExp(`<meta[^>]+property=["']${escaped}["'][^>]+content=["']([^"']+)["']`, "i"));
  const reversed = html.match(new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${escaped}["']`, "i"));
  return direct?.[1] || reversed?.[1] || "";
};
const validateOpenGraph = (label, html) => {
  for (const property of ["og:title", "og:type", "og:image", "og:url"]) {
    const value = openGraphValue(html, property);
    if (!value) failures.push(`${label}: missing ${property}`);
    if ((property === "og:image" || property === "og:url") && value && !/^https?:\/\//i.test(value)) {
      failures.push(`${label}: ${property} must be an absolute HTTP(S) URL`);
    }
  }
};
const visibleText = (html) => html
  .replace(/<script[\s\S]*?<\/script>/gi, " ")
  .replace(/<style[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&[a-z#0-9]+;/gi, " ")
  .replace(/\s+/g, " ")
  .trim();
for (const { slug, html } of pages) {
  validateMetaDescription(slug, html);
  validateOpenGraph(slug, html);
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
  validateMetaDescription(`global ${slug}`, html);
  validateOpenGraph(`global ${slug}`, html);
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

const insightPages = [...pages, ...globalPages].filter(({ html }) => html.includes("How to interpret your result"));
const curatedInsightPages = insightPages.filter(({ html }) => html.includes('data-insight-tier="curated"'));
const toolSpecificInsightPages = insightPages.filter(({ html }) => html.includes('data-insight-tier="tool-specific"'));
if (insightPages.length !== pages.length + globalPages.length) failures.push(`all ${pages.length + globalPages.length} calculator pages require insight modules; ${insightPages.length} generated`);
if (curatedInsightPages.length !== 40) failures.push(`40 curated flagship pages expected but ${curatedInsightPages.length} generated`);
const expectedToolSpecificPages = pages.length + globalPages.length - 40;
if (toolSpecificInsightPages.length !== expectedToolSpecificPages) failures.push(`${expectedToolSpecificPages} tool-specific remaining pages expected but ${toolSpecificInsightPages.length} generated`);
for (const { slug, html } of insightPages) {
  const text = visibleText(html);
  const words = text.split(" ").filter(Boolean).length;
  if (words < 700) failures.push(`enhanced ${slug}: only ${words} rendered words (minimum 700)`);
  if (!html.includes("Scenario comparison")) failures.push(`enhanced ${slug}: missing scenario comparison`);
  if (!html.includes("Common mistakes to avoid")) failures.push(`enhanced ${slug}: missing mistakes section`);
  if (!html.includes("How to verify this result")) failures.push(`enhanced ${slug}: missing verification guidance`);
  if ((html.match(/<tr/g) || []).length < 4) failures.push(`enhanced ${slug}: incomplete scenario table`);
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

const staticOpenGraphPages = ["", "pk/tools", "tools", ...trustPages];
for (const route of staticOpenGraphPages) {
  const html = readFileSync(join(process.cwd(), "out", route, "index.html"), "utf8");
  validateOpenGraph(route || "home", html);
}

const guideRoot = join(process.cwd(), "out", "guides");
const guidePages = readdirSync(guideRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => ({ slug: entry.name, html: readFileSync(join(guideRoot, entry.name, "index.html"), "utf8") }));
for (const { slug, html } of guidePages) {
  validateMetaDescription(`guide ${slug}`, html);
  validateOpenGraph(`guide ${slug}`, html);
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
if (globalPages.length !== 35) failures.push(`35 global tools expected but ${globalPages.length} pages generated`);
if (failures.length) {
  console.error("Content quality gate failed:\n- " + failures.join("\n- "));
  process.exit(1);
}
console.log(`Content quality gate passed for ${pages.length} Pakistan calculators, ${globalPages.length} global calculators, ${curatedInsightPages.length} curated flagships, ${toolSpecificInsightPages.length} remaining tool upgrades and ${guidePages.length} guides.`);
