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

const trustPages = ["about", "contact", "privacy", "cookies", "terms", "disclaimer", "editorial-policy", "guides", "pk/mobiles"];
const unfinished = /coming soon|publishing soon|in review|under construction|before launch|will be added|placeholder|lorem ipsum/i;
for (const route of trustPages) {
  const html = readFileSync(join(process.cwd(), "out", route, "index.html"), "utf8");
  const text = visibleText(html);
  const words = text.split(" ").filter(Boolean).length;
  if (words < 180) failures.push(`${route}: only ${words} rendered words on trust/content page`);
  if (unfinished.test(text)) failures.push(`${route}: contains unfinished-page language`);
  if (!html.includes('rel="canonical"')) failures.push(`${route}: missing canonical URL`);
}

if (pages.length !== declaredTools) failures.push(`${declaredTools} tools declared but ${pages.length} pages generated`);
if (failures.length) {
  console.error("Content quality gate failed:\n- " + failures.join("\n- "));
  process.exit(1);
}
console.log(`Content quality gate passed for ${pages.length} calculator pages.`);
