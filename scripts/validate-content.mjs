import { existsSync, readdirSync, readFileSync } from "node:fs";
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
const metaValue = (html, name) => {
  const escaped = name.replace(":", "\\:");
  return (html.match(new RegExp(`<meta[^>]+name=["']${escaped}["'][^>]+content=["']([^"']*)["']`, "i"))?.[1]
    || html.match(new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${escaped}["']`, "i"))?.[1]
    || "").replace(/&#x27;|&#39;|&apos;/gi, "'").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"');
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
const ecommerceSlugs = new Set(["roas-calculator","break-even-roas-calculator","cost-per-acquisition-calculator","customer-acquisition-cost-calculator","customer-lifetime-value-calculator","average-order-value-calculator","ecommerce-profit-per-order-calculator","discount-profit-impact-calculator","return-refund-impact-calculator","inventory-reorder-point-calculator","dimensional-weight-calculator","ad-budget-sales-target-calculator"]);
const financeExpansionSlugs = new Set(["debt-snowball-vs-avalanche-calculator","credit-card-minimum-payment-calculator","credit-card-payoff-calculator","credit-card-utilization-calculator","investment-fee-calculator","inflation-adjusted-return-calculator","dollar-cost-averaging-calculator","lump-sum-vs-dca-calculator","coast-fire-calculator","fire-number-calculator","savings-rate-calculator","dividend-reinvestment-calculator","portfolio-rebalancing-calculator","capital-gains-calculator-global","tiered-commission-calculator","prorated-salary-calculator","pay-raise-percentage-calculator","overtime-pay-calculator-global","invoice-due-date-calculator","net-payment-terms-calculator","invoice-discount-calculator","freelance-project-profit-calculator","saas-pricing-calculator","debt-service-coverage-ratio-calculator","merchant-processing-fee-calculator","real-estate-lawyer-cost-calculator","car-lease-vs-buy-calculator","seller-net-sheet-calculator","seller-financing-calculator","mortgage-buydown-calculator","first-lien-heloc-calculator"]);
const globalEducationSlugs = new Set(["college-admission-chances-calculator"]);
const semrushPhaseTwoASlugs = new Set(["grade-calculator","decimal-time-converter","modified-adjusted-gross-income-calculator","money-market-calculator","confidence-interval-calculator","superscript-generator","earned-run-average-calculator","ap-statistics-score-calculator","gcf-calculator","apr-calculator","wire-size-calculator","cone-volume-calculator","normal-cdf-calculator","matrix-inverse-calculator","voltage-drop-calculator","fill-dirt-calculator","board-foot-calculator"]);
const semrushPhaseThreeSlugs = new Set(["circle-skirt-calculator","cross-stitch-calculator","hypergeometric-calculator","stud-calculator","soffit-calculator","ap-english-language-and-composition-score-calculator"]);
const next20Slugs = new Set(["horsepower-calculator", "interest-rate-cap-payout-calculator", "geographic-midpoint-calculator", "cake-pricing-calculator", "sheep-gestation-calculator", "boolean-algebra-calculator", "megawatt-calculator", "substitution-calculator", "cap-rate-calculator", "swim-time-converter", "cpm-calculator", "fence-cost-estimator", "subwoofer-case-calculator", "acres-per-hour-calculator", "torque-converter"]);
const roadmap206Slugs = new Set(["gc-content-calculator","llc-tax-calculator","wainscoting-calculator","charles-law-calculator","crypto-conversion-calculator","minecraft-sphere-generator","basic-calculator","new-jersey-tax-calculator"]);
const roadmap186Slugs = new Set(["percent-calculator","mulch-calculator","concrete-block-calculator","basis-points-calculator","rounding-calculator","tire-size-calculator","anniversary-calculator"]);
const roadmap166Slugs = new Set(["vpd-calculator", "goat-gestation-calculator", "gas-oil-mix-calculator", "macro-calculator", "macroeconomics-calculator", "vinegar-carbon-dosing-calculator", "radical-expression-simplifier", "redacted-text-generator", "wedding-liquor-calculator", "abg-calculator"]);
const roadmap146Slugs = new Set(["epoxy-resin-calculator", "molarity-calculator", "garage-door-spring-calculator", "lawn-mowing-cost-calculator", "quarter-mile-calculator", "firewood-cord-calculator", "nether-portal-calculator", "arv-calculator", "breastfeeding-calorie-calculator"]);
const roadmap126Slugs = new Set(["calories-burned-calculator", "pine-straw-calculator", "ohms-law-calculator", "fence-post-depth-calculator", "lead-time-calculator", "recessed-light-calculator", "partial-fraction-calculator", "implicit-differentiation-calculator", "greek-gematria-calculator", "time-off-calculator", "decimals-calculator"]);
const roadmap106Slugs = new Set(["volume-calculator", "sourdough-calculator", "btu-calculator", "corrected-calcium-calculator", "audiobook-speed-calculator", "arrow-speed-calculator", "blood-pressure-by-age-calculator", "pt-141-dosage-calculator", "baby-percentile-calculator", "time-between-calculator", "body-surface-area-calculator", "productivity-calculator", "roof-area-calculator", "surface-area-calculator", "grade-curve-calculator"]);
const semrushRoadmapSlugs = new Set(["money-counter-calculator","soil-calculator","ffmi-calculator","hex-calculator","dunk-calculator","mare-gestation-calculator","linear-feet-calculator","water-intake-calculator","steps-to-miles-calculator","minecraft-circle-generator","density-altitude-calculator","height-calculator","weighted-mean-calculator","yardage-calculator","mean-standard-deviation-calculator","visceral-fat-calculator","body-fat-calculator"]);
const semrushPhaseOneSlugs = new Set(["date-from-today-calculator","payment-calculator","proportion-calculator","interest-rate-calculator","ratio-calculator","age-calculator","hypotenuse-calculator","period-calculator","random-number-generator","cubic-yard-calculator","gravel-stone-calculator","army-waist-height-ratio-calculator","401k-calculator","sand-calculator","right-triangle-calculator","ap-world-score-calculator"]);
const semrushPhaseOneBSlugs = new Set(["gpa-calculator","square-footage-calculator","bench-press-max-calculator","triangle-calculator","molecular-weight-calculator","bowling-score-calculator","air-force-pt-test-calculator","square-root-calculator","fraction-calculator","how-many-years-calculator","cylinder-volume-calculator","date-calculator","hourly-wage-and-tax-calculator","asphalt-calculator","ap-biology-score-calculator","womens-bmi-calculator","ap-chemistry-score-calculator","concrete-calculator","npv-calculator","weeks-calculator","half-birthday-calculator","paycheck-hours-calculator","dog-pregnancy-calculator","binary-calculator","paycheck-estimator-calculator","pool-salt-calculator","rafter-length-calculator","air-force-pt-calculator","stair-calculator","scientific-notation-calculator"]);
const firstFiftyCanonicalAliases = new Map([["air-force-pt-calculator","air-force-pt-test-calculator"],["hourly-wage-and-tax-calculator","paycheck-estimator-calculator"],["date-calculator","date-from-today-calculator"],["hypotenuse-calculator","right-triangle-calculator"],["proportion-calculator","ratio-calculator"]]);
const firstFiftyExistingUpgrades = new Set(["discount-calculator","mortgage-payment-calculator","work-hours-calculator","overtime-pay-calculator-global"]);
const firstFiftyCanonicalSlugs = new Set([...semrushPhaseOneSlugs, ...semrushPhaseOneBSlugs, ...firstFiftyExistingUpgrades].filter(slug => !firstFiftyCanonicalAliases.has(slug)));
const firstFiftySourceRequired = new Set(["period-calculator","army-waist-height-ratio-calculator","401k-calculator","ap-world-score-calculator","ap-biology-score-calculator","womens-bmi-calculator","ap-chemistry-score-calculator","air-force-pt-test-calculator","dog-pregnancy-calculator","paycheck-estimator-calculator","mortgage-payment-calculator","overtime-pay-calculator-global"]);
const ecommerceTitles = new Map(), ecommerceDescriptions = new Map(), ecommerceKeywords = new Map();
const financeTitles = new Map(), financeDescriptions = new Map(), financeKeywords = new Map();
for (const { slug, html } of globalPages) {
  validateMetaDescription(`global ${slug}`, html);
  validateOpenGraph(`global ${slug}`, html);
  const text = visibleText(html);
  const words = text.split(" ").filter(Boolean).length;
  const h2s = (html.match(/<h2/g) || []).length;
  const faqs = (html.match(/<details/g) || []).length;
  const minimumWords = ecommerceSlugs.has(slug) || financeExpansionSlugs.has(slug) || globalEducationSlugs.has(slug) || semrushPhaseOneSlugs.has(slug) || semrushPhaseOneBSlugs.has(slug) || semrushPhaseTwoASlugs.has(slug) || semrushPhaseThreeSlugs.has(slug) || semrushRoadmapSlugs.has(slug) || roadmap106Slugs.has(slug) || roadmap126Slugs.has(slug) || roadmap146Slugs.has(slug) || roadmap166Slugs.has(slug) || roadmap186Slugs.has(slug) || roadmap206Slugs.has(slug) || next20Slugs.has(slug) ? 900 : 380;
  if (words < minimumWords) failures.push(`global ${slug}: only ${words} rendered words (minimum ${minimumWords})`);
  if (h2s < 7) failures.push(`global ${slug}: only ${h2s} H2 sections (minimum 7)`);
  if (faqs < 5) failures.push(`global ${slug}: only ${faqs} FAQs (minimum 5)`);
  if (!html.includes("Formula and methodology")) failures.push(`global ${slug}: missing methodology`);
  if (!html.includes("Limits of this estimate")) failures.push(`global ${slug}: missing limitations`);
  if (!html.includes('rel="canonical"')) failures.push(`global ${slug}: missing canonical URL`);
  if (!html.includes("application/ld+json")) failures.push(`global ${slug}: missing structured data`);
  if (ecommerceSlugs.has(slug)) {
    const title = html.match(/<title>([^<]+)<\/title>/i)?.[1] || "";
    const description = metaValue(html, "description");
    const primaryKeyword = metaValue(html, "keywords").split(",")[0]?.trim().toLowerCase() || "";
    for (const [value, map, label] of [[title, ecommerceTitles, "title"], [description, ecommerceDescriptions, "meta description"], [primaryKeyword, ecommerceKeywords, "primary keyword"]]) {
      if (!value) failures.push(`global ${slug}: missing ${label}`);
      else if (map.has(value)) failures.push(`global ${slug}: duplicate ${label} also used by ${map.get(value)}`);
      else map.set(value, slug);
    }
    for (const schemaType of ["FAQPage", "HowTo", "BreadcrumbList"]) if (!html.includes(schemaType)) failures.push(`global ${slug}: missing ${schemaType} schema`);
    for (const section of ["Privacy and browser processing", "Accuracy and verification", "Limits of this estimate"]) if (!html.includes(section)) failures.push(`global ${slug}: missing ${section} section`);
    if ((html.match(/href="\/tools\//g) || []).length < 5) failures.push(`global ${slug}: insufficient related internal links`);
  }
  if (financeExpansionSlugs.has(slug)) {
    const title = html.match(/<title>([^<]+)<\/title>/i)?.[1] || "";
    const description = metaValue(html, "description");
    const primaryKeyword = metaValue(html, "keywords").split(",")[0]?.trim().toLowerCase() || "";
    for (const [value, map, label] of [[title, financeTitles, "title"], [description, financeDescriptions, "meta description"], [primaryKeyword, financeKeywords, "primary keyword"]]) {
      if (!value) failures.push(`global ${slug}: missing ${label}`);
      else if (map.has(value)) failures.push(`global ${slug}: duplicate ${label} also used by ${map.get(value)}`);
      else map.set(value, slug);
    }
    for (const schemaType of ["FAQPage", "HowTo", "BreadcrumbList"]) if (!html.includes(schemaType)) failures.push(`global ${slug}: missing ${schemaType} schema`);
    for (const section of ["Privacy and browser processing", "Accuracy and verification", "Limits of this estimate", "Sources and review information"]) if (!html.includes(section)) failures.push(`global ${slug}: missing ${section} section`);
    if ((html.match(/href="\/tools\//g) || []).length < 5) failures.push(`global ${slug}: insufficient related internal links`);
  }
}
const globalDirectory = readFileSync(join(globalRoot, "index.html"), "utf8");
const globalSitemap = readFileSync(join(process.cwd(), "out", "sitemap.xml"), "utf8");
for (const slug of ecommerceSlugs) {
  if (!globalDirectory.includes(`/tools/${slug}/`)) failures.push(`global ${slug}: missing from tools directory`);
  if (!globalSitemap.includes(`/tools/${slug}/`)) failures.push(`global ${slug}: missing from sitemap`);
}
for (const slug of financeExpansionSlugs) {
  if (!globalDirectory.includes(`/tools/${slug}/`)) failures.push(`global ${slug}: missing from tools directory`);
  if (!globalSitemap.includes(`/tools/${slug}/`)) failures.push(`global ${slug}: missing from sitemap`);
}
for (const slug of semrushPhaseOneBSlugs) {
  const aliasTarget = firstFiftyCanonicalAliases.get(slug);
  if (!aliasTarget && !globalDirectory.includes(`/tools/${slug}/`)) failures.push(`global ${slug}: missing from tools directory`);
  if (!aliasTarget && !globalSitemap.includes(`/tools/${slug}/`)) failures.push(`global ${slug}: missing from sitemap`);
  if (aliasTarget && (globalDirectory.includes(`/tools/${slug}/`) || globalSitemap.includes(`/tools/${slug}/`))) failures.push(`global ${slug}: duplicate alias should not be directory or sitemap listed`);
  const page = globalPages.find(item => item.slug === slug);
  if (!page) failures.push(`global ${slug}: page was not generated`);
  else {
    for (const schemaType of ["WebApplication","FAQPage","HowTo","BreadcrumbList"]) if (!page.html.includes(schemaType)) failures.push(`global ${slug}: missing ${schemaType} schema`);
    if ((page.html.match(/href="\/tools\//g) || []).length < 5) failures.push(`global ${slug}: insufficient related internal links`);
    if (!page.html.includes("Search intent and calculator coverage")) failures.push(`global ${slug}: missing first-50 intent audit`);
    if (aliasTarget) {
      if (!page.html.includes(`rel="canonical" href="https://solvepilot.xyz/tools/${aliasTarget}/"`)) failures.push(`global ${slug}: canonical does not point to ${aliasTarget}`);
      if (!page.html.includes('name="robots" content="noindex, follow"')) failures.push(`global ${slug}: alias must be noindex, follow`);
    }
  }
}
for (const slug of semrushPhaseOneSlugs) {
  const aliasTarget = firstFiftyCanonicalAliases.get(slug);
  if (!aliasTarget && !globalDirectory.includes(`/tools/${slug}/`)) failures.push(`global ${slug}: missing from tools directory`);
  if (!aliasTarget && !globalSitemap.includes(`/tools/${slug}/`)) failures.push(`global ${slug}: missing from sitemap`);
  const page = globalPages.find(item => item.slug === slug);
  if (!page) failures.push(`global ${slug}: page was not generated`);
  else {
    for (const schemaType of ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList"]) if (!page.html.includes(schemaType)) failures.push(`global ${slug}: missing ${schemaType} schema`);
    if ((page.html.match(/href="\/tools\//g) || []).length < 5) failures.push(`global ${slug}: insufficient related internal links`);
    if (aliasTarget && (!page.html.includes(`rel="canonical" href="https://solvepilot.xyz/tools/${aliasTarget}/"`) || !page.html.includes('name="robots" content="noindex, follow"'))) failures.push(`global ${slug}: canonical alias metadata is incorrect`);
  }
}
for (const slug of firstFiftyCanonicalSlugs) {
  const page = globalPages.find(item => item.slug === slug);
  if (!page) failures.push(`first-50 ${slug}: canonical page was not generated`);
  else {
    const text = visibleText(page.html);
    if (text.split(" ").filter(Boolean).length < 900) failures.push(`first-50 ${slug}: fewer than 900 rendered words`);
    if (!page.html.includes("Search intent and calculator coverage")) failures.push(`first-50 ${slug}: missing intent coverage section`);
    for (const schemaType of ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList"]) if (!page.html.includes(schemaType)) failures.push(`first-50 ${slug}: missing ${schemaType} schema`);
    if ((page.html.match(/href="\/tools\//g) || []).length < 5) failures.push(`first-50 ${slug}: fewer than five related internal links`);
    if (firstFiftySourceRequired.has(slug) && !/https:\/\/(?:www\.)?(?:irs\.gov|apcentral\.collegeboard\.org|www\.army\.mil|www\.afpc\.af\.mil|www\.cdc\.gov|www\.merckvetmanual\.com|www\.nhs\.uk|www\.consumerfinance\.gov|www\.dol\.gov)/i.test(page.html)) failures.push(`first-50 ${slug}: missing an authoritative reference link`);
    if (!globalDirectory.includes(`/tools/${slug}/`)) failures.push(`first-50 ${slug}: missing from searchable tools directory`);
    if (!globalSitemap.includes(`/tools/${slug}/`)) failures.push(`first-50 ${slug}: missing from sitemap`);
  }
}
for (const slug of globalEducationSlugs) {
  if (!globalDirectory.includes(`/tools/${slug}/`)) failures.push(`global ${slug}: missing from tools directory`);
  if (!globalSitemap.includes(`/tools/${slug}/`)) failures.push(`global ${slug}: missing from sitemap`);
  const page = globalPages.find(item => item.slug === slug);
  if (!page) failures.push(`global ${slug}: page was not generated`);
  else {
    for (const schemaType of ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList"]) if (!page.html.includes(schemaType)) failures.push(`global ${slug}: missing ${schemaType} schema`);
    if ((page.html.match(/href="\/tools\//g) || []).length < 5) failures.push(`global ${slug}: insufficient related internal links`);
    if (!page.html.includes("College Navigator") || !page.html.includes("Common Data Set")) failures.push(`global ${slug}: missing admissions verification sources`);
  }
}
const ecommerceHeader = readFileSync(join(process.cwd(), "components", "Header.tsx"), "utf8");
if (!ecommerceHeader.includes("globalTools.filter(t=>!t.canonicalSlug).map") || !ecommerceHeader.includes("searchText")) failures.push("site search: canonical global tools are not connected or indexed aliases are being added");
const ecommerceHome = readFileSync(join(process.cwd(), "out", "index.html"), "utf8");
if (!ecommerceHome.includes("235") || !ecommerceHome.includes("Global calculators")) failures.push("homepage: updated indexable global-tool count is missing");

const roadmapKeywordChecks = new Map([
  ["cone-volume-calculator", ["cone volume calculator", "volume of a cone calculator", "volume of cone calculator", "cone volume formula", "volume of a cone", "volume of cone formula", "how to find the volume of a cone", "volume-cone", "volume of cone", "cone volume", "volume of a conical shape", "volume of a cone formula"]],
  ["air-force-pt-test-calculator", ["af pt calculator"]],
  ["fraction-calculator", ["fraction to fraction calculator"]],
  ["grade-calculator", ["schoology grade calculator"]],
  ["normal-cdf-calculator", ["normal cdf calculator"]],
  ["matrix-inverse-calculator", ["inverse matrix calculator"]],
  ["credit-card-payoff-calculator", ["credit card pay off calculator", "credit card calculator payoff", "pay off credit card calculator", "credit card payoff calculator", "credit card payoff estimator", "credit card debt payoff calculator", "cc payoff calculator", "credit card debt calculator", "pay off credit card debt calculator", "paying off credit card calculator", "calculate credit card payoff"]],
  ["voltage-drop-calculator", ["voltage drop calculator", "voltage loss calculator", "how to calculate voltage drop", "southwire voltage drop calculator", "voltage drop calculation", "voltage drop calculations", "voltage drop", "calculate voltage drop", "how to compute voltage drop", "voltage and voltage drop"]],
  ["fill-dirt-calculator", ["fill dirt calculator"]],
  ["ap-statistics-score-calculator", ["ap statistics score calculator"]],
  ["board-foot-calculator", ["bd ft calculator", "how to calculate board feet"]],
  ["soffit-calculator", ["soffit calculator"]],
  ["ap-english-language-and-composition-score-calculator", ["ap english language and composition score calculator"]],
  ["circle-skirt-calculator", ["circle skirt calculator"]],
  ["cross-stitch-calculator", ["cross stitch calculator"]],
  ["hypergeometric-calculator", ["hypergeometric calculator"]],
  ["stud-calculator", ["stud calculator"]],
]);
for (const [slug, terms] of roadmapKeywordChecks) {
  const page = globalPages.find(item => item.slug === slug);
  const keywords = page ? metaValue(page.html, "keywords").toLowerCase() : "";
  for (const term of terms) if (!keywords.includes(term)) failures.push(`${slug}: missing roadmap keyword target ${term}`);
}
for (const slug of semrushPhaseThreeSlugs) {
  const page = globalPages.find(item => item.slug === slug);
  if (!page) failures.push(`roadmap tool ${slug}: page was not generated`);
  else {
    if (!metaValue(page.html, "keywords").toLowerCase().includes(slug.replaceAll("-", " ").replace(" calculator", " calculator"))) failures.push(`roadmap tool ${slug}: missing its primary keyword metadata`);
    if (!globalDirectory.includes(`/tools/${slug}/`)) failures.push(`roadmap tool ${slug}: missing from searchable tools directory`);
    if (!globalSitemap.includes(`/tools/${slug}/`)) failures.push(`roadmap tool ${slug}: missing from sitemap`);
  }
}
for (const slug of semrushRoadmapSlugs) {
  const page = globalPages.find(item => item.slug === slug);
  if (!page) failures.push(`roadmap rank 86–105 tool ${slug}: page was not generated`);
  else {
    const keywords = metaValue(page.html, "keywords").toLowerCase();
    if (!keywords.includes(slug.replaceAll("-", " ").replace(" generator", ""))) failures.push(`roadmap tool ${slug}: missing primary keyword metadata`);
    if (!globalDirectory.includes(`/tools/${slug}/`)) failures.push(`roadmap tool ${slug}: missing from searchable tools directory`);
    if (!globalSitemap.includes(`/tools/${slug}/`)) failures.push(`roadmap tool ${slug}: missing from sitemap`);
    if (!page.html.includes("How to verify this result") || !page.html.includes("Common mistakes to avoid")) failures.push(`roadmap tool ${slug}: missing audit content`);
  }
}
for (const [slug, terms] of [["bench-press-max-calculator",["one rep max calculator","deadlift calculator","squat calculator"]],["gravel-stone-calculator",["river rock calculator"]],["prorated-salary-calculator",["pro rata calculator"]]]) {
  const page=globalPages.find(item=>item.slug===slug),keywords=page?metaValue(page.html,"keywords").toLowerCase():"";
  for(const term of terms) if(!keywords.includes(term)) failures.push(`${slug}: missing roadmap keyword target ${term}`);
}

const ratioPage = globalPages.find(item => item.slug === "ratio-calculator");
const ratioKeywords = ratioPage ? metaValue(ratioPage.html, "keywords").toLowerCase() : "";
for (const keyword of ["ratio calculator","ratio scale calculator","ratio solver","simplify ratio calculator","ratio simplifier","equivalent ratios calculator","ratio to fraction calculator","fraction to ratio calculator","ratio to percentage calculator","percentage to ratio calculator"]) {
  if (!ratioKeywords.includes(keyword)) failures.push(`ratio calculator: missing keyword target ${keyword}`);
}
const aspectRatioPage = globalPages.find(item => item.slug === "aspect-ratio-calculator");
if (!aspectRatioPage || !metaValue(aspectRatioPage.html, "keywords").toLowerCase().includes("aspect ratio calculator")) failures.push("aspect ratio calculator: missing its distinct keyword target");
const ratioResolver = readFileSync(join(process.cwd(), "components", "calculators", "semrush-phase-one.ts"), "utf8");
for (const mode of ["scale","equivalent","to-fraction","from-fraction","to-percent","from-percent","share"]) if (!ratioResolver.includes(`mode==="${mode}"`)) failures.push(`ratio calculator: missing functional ${mode} mode`);
const aspectResolver = readFileSync(join(process.cwd(), "components", "calculators", "global.ts"), "utf8");
if (!aspectResolver.includes("Find height from target width") || !aspectResolver.includes("Find width from target height")) failures.push("aspect ratio calculator: missing both dimension-solving modes");

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

const staticOpenGraphPages = ["", "pk/tools", "tools", "generator-tools", ...trustPages];
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
  const internalLinks = (html.match(/href="\/(?:guides|tools|pk\/tools)\//g) || []).length;
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

const generatorRoot = join(process.cwd(), "out", "generator-tools");
const generatorPages = readdirSync(generatorRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => ({ slug: entry.name, html: readFileSync(join(generatorRoot, entry.name, "index.html"), "utf8") }));
const generatorTitles = new Map();
const generatorDescriptions = new Map();
const generatorPrimaryKeywords = new Map();
for (const { slug, html } of generatorPages) {
  validateMetaDescription(`generator ${slug}`, html);
  validateOpenGraph(`generator ${slug}`, html);
  const text = visibleText(html);
  const words = text.split(" ").filter(Boolean).length;
  const h2s = (html.match(/<h2/g) || []).length;
  const faqs = (html.match(/<details/g) || []).length;
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1] || "";
  const description = metaValue(html, "description");
  const primaryKeyword = metaValue(html, "keywords").split(",")[0]?.trim().toLowerCase() || "";
  for (const [value, map, label] of [[title, generatorTitles, "title"], [description, generatorDescriptions, "meta description"], [primaryKeyword, generatorPrimaryKeywords, "primary keyword"]]) {
    if (!value) failures.push(`generator ${slug}: missing ${label}`);
    else if (map.has(value)) failures.push(`generator ${slug}: duplicate ${label} also used by ${map.get(value)}`);
    else map.set(value, slug);
  }
  if (words < 900) failures.push(`generator ${slug}: only ${words} rendered words (minimum 900)`);
  if (h2s < 7) failures.push(`generator ${slug}: only ${h2s} H2 sections (minimum 7)`);
  if (faqs < 5) failures.push(`generator ${slug}: fewer than 5 FAQs`);
  if (!html.includes('rel="canonical"')) failures.push(`generator ${slug}: missing canonical URL`);
  if (!html.includes("application/ld+json")) failures.push(`generator ${slug}: missing structured data`);
  for (const schemaType of ["FAQPage", "HowTo", "BreadcrumbList"]) if (!html.includes(schemaType)) failures.push(`generator ${slug}: missing ${schemaType} schema`);
  if (!html.includes("Privacy and browser processing")) failures.push(`generator ${slug}: missing privacy section`);
  if (!html.includes("Accuracy and verification")) failures.push(`generator ${slug}: missing accuracy section`);
  if (!html.includes("Limitations and responsible use")) failures.push(`generator ${slug}: missing limitations section`);
  const generatorLinks = (html.match(/href="\/generator-tools\//g) || []).length;
  if (generatorLinks < 5) failures.push(`generator ${slug}: only ${generatorLinks} generator internal links`);
}
if (generatorPages.length !== 48) failures.push(`48 Phase 6 generator pages expected but ${generatorPages.length} generated`);
const generatorDirectory = readFileSync(join(generatorRoot, "index.html"), "utf8");
const sitemapXml = readFileSync(join(process.cwd(), "out", "sitemap.xml"), "utf8");
for (const { slug } of generatorPages) {
  if (!generatorDirectory.includes(`/generator-tools/${slug}/`)) failures.push(`generator ${slug}: missing from generator directory`);
  if (!sitemapXml.includes(`/generator-tools/${slug}/`)) failures.push(`generator ${slug}: missing from sitemap`);
}
const homeHtml = readFileSync(join(process.cwd(), "out", "index.html"), "utf8");
if (!homeHtml.includes("48") || !homeHtml.includes("Generators")) failures.push("homepage: Phase 6 generator count is not discoverable");
const headerSource = readFileSync(join(process.cwd(), "components", "Header.tsx"), "utf8");
for (const sourceName of ["generatorTools", "productivityTools", "creatorTools"]) if (!headerSource.includes(sourceName)) failures.push(`site search: missing ${sourceName}`);

const requestedFileSlugs = new Set([
  "create-zip-file", "extract-zip-file", "password-protect-zip-file", "rar-to-zip-converter", "7z-to-zip-converter", "tar-gz-extractor",
  "merge-excel-files", "split-excel-sheets", "remove-duplicate-excel-rows", "compare-two-excel-files", "excel-to-json",
  "csv-to-json", "json-to-csv", "xml-to-json", "json-to-xml", "yaml-to-json", "json-to-yaml",
  "subtitle-time-shifter", "merge-subtitle-files", "subtitle-encoding-fixer"
]);
const fileCollections = [
  {route:"archive-tools",expected:6},
  {route:"document-tools",expected:25},
  {route:"media-tools",expected:16}
];
const fileTitles = new Map(), fileDescriptions = new Map(), fileKeywords = new Map();
for (const {route,expected} of fileCollections) {
  const directory = join(process.cwd(), "out", route);
  const collectionHtml = readFileSync(join(directory, "index.html"), "utf8");
  const collectionPages = readdirSync(directory, {withFileTypes:true}).filter(entry=>entry.isDirectory()).map(entry=>({slug:entry.name,html:readFileSync(join(directory,entry.name,"index.html"),"utf8")}));
  if (collectionPages.length !== expected) failures.push(`${route}: expected ${expected} pages but generated ${collectionPages.length}`);
  for (const {slug,html} of collectionPages) {
    if (!requestedFileSlugs.has(slug)) continue;
    validateMetaDescription(`${route} ${slug}`,html);
    validateOpenGraph(`${route} ${slug}`,html);
    const words=visibleText(html).split(" ").filter(Boolean).length;
    if (words<900) failures.push(`${route} ${slug}: only ${words} rendered words (minimum 900)`);
    if ((html.match(/<details/g)||[]).length<5) failures.push(`${route} ${slug}: fewer than 5 FAQs`);
    for (const schemaType of ["WebApplication","FAQPage","HowTo","BreadcrumbList"]) if (!html.includes(schemaType)) failures.push(`${route} ${slug}: missing ${schemaType} schema`);
    for (const section of ["Privacy","Accuracy and verification","Common mistakes","Sources and review information"]) if (!html.includes(section)) failures.push(`${route} ${slug}: missing ${section} guidance`);
    if (!html.includes('rel="canonical"')) failures.push(`${route} ${slug}: missing canonical URL`);
    if (!collectionHtml.includes(`/${route}/${slug}/`)) failures.push(`${route} ${slug}: missing from directory`);
    if (!sitemapXml.includes(`/${route}/${slug}/`)) failures.push(`${route} ${slug}: missing from sitemap`);
    const title=html.match(/<title>([^<]+)<\/title>/i)?.[1]||"",description=metaValue(html,"description"),keyword=metaValue(html,"keywords").split(",")[0]?.trim().toLowerCase()||"";
    for (const [value,map,label] of [[title,fileTitles,"title"],[description,fileDescriptions,"meta description"],[keyword,fileKeywords,"primary keyword"]]) {
      if (!value) failures.push(`${route} ${slug}: missing ${label}`);
      else if (map.has(value)) failures.push(`${route} ${slug}: duplicate ${label} also used by ${map.get(value)}`);
      else map.set(value,`${route}/${slug}`);
    }
  }
}
if (!headerSource.includes("archiveTools")) failures.push("site search: archive tools are not connected");
if (!homeHtml.includes("Archive tools")) failures.push("homepage: archive category is not discoverable");
if ([...requestedFileSlugs].some(slug=>!sitemapXml.includes(`/${slug}/`))) failures.push("requested file tools: one or more URLs are missing from sitemap");

if (pages.length !== declaredTools) failures.push(`${declaredTools} tools declared but ${pages.length} pages generated`);
if (globalPages.length !== 240) failures.push(`240 global tools expected but ${globalPages.length} pages generated`);
// Every workbook variant retains a destination with an explicit method boundary.
const keywordSource=readFileSync(join(process.cwd(),"lib/roadmap-106-125-keywords.ts"),"utf8");
const keywordMap=JSON.parse(keywordSource.slice(keywordSource.indexOf("= ")+2,keywordSource.lastIndexOf(" as const")));
for (const item of keywordMap) {
 const file=join(process.cwd(),"out",item.path,"index.html");
 if(!existsSync(file)) { failures.push(`roadmap rank ${item.rank}: missing ${item.path}`); continue; }
 const html=readFileSync(file,"utf8");
 if(!metaValue(html,"keywords").toLowerCase().includes(item.keyword.toLowerCase())) failures.push(`roadmap rank ${item.rank}: missing keyword ${item.keyword}`);
 if(html.includes('content="noindex')) failures.push(`roadmap rank ${item.rank}: destination is noindex`);
}
// Ranks 106–125 are required to remain indexable and discoverable after merges.
for (const slug of roadmap106Slugs) {
 const page=globalPages.find(p=>p.slug===slug);
 if(!page) failures.push(`106–125 ${slug}: missing route`);
 if(!globalDirectory.includes(`/tools/${slug}/`)) failures.push(`106–125 ${slug}: missing directory`);
 if(!globalSitemap.includes(`/tools/${slug}/`)) failures.push(`106–125 ${slug}: missing sitemap`);
}

// Verify every exact rank 126–145 query and its intended route.
const source126=readFileSync(join(process.cwd(),"lib/roadmap-126-145-keywords.ts"),"utf8");
const map126=JSON.parse(source126.slice(source126.indexOf("= ")+2,source126.lastIndexOf(" as const")));
if(map126.length!==59) failures.push("ranks 126–145: expected all 59 workbook keyword variants");
if(new Set(map126.map(k=>k.rank)).size!==20) failures.push("ranks 126–145: missing a roadmap rank");
for(const item of map126){
 const file=join(process.cwd(),"out",item.path,"index.html");
 if(!existsSync(file)){failures.push(`rank ${item.rank}: missing ${item.path}`);continue;}
 const html=readFileSync(file,"utf8");
 if(!metaValue(html,"keywords").toLowerCase().includes(item.keyword.toLowerCase()))failures.push(`rank ${item.rank}: missing keyword ${item.keyword}`);
 if(html.includes('content="noindex'))failures.push(`rank ${item.rank}: noindex destination`);
 if(!globalSitemap.includes(item.path))failures.push(`rank ${item.rank}: missing sitemap URL`);
}
for(const slug of roadmap126Slugs){
 const page=globalPages.find(p=>p.slug===slug);
 if(!page||!globalDirectory.includes(`/tools/${slug}/`))failures.push(`rank 126–145 tool ${slug}: missing directory or page`);
 const incoming=globalPages.filter(other=>other.slug!==slug&&other.html.slice(other.html.indexOf("<main"),other.html.indexOf("</main>")).replace(/<script[\s\S]*?<\/script>/g,"").includes(`href="/tools/${slug}/"`));
 if(!incoming.length)failures.push(`${slug}: no contextual link from another calculator`);
 if(page){for(const type of ["WebApplication","FAQPage","HowTo","BreadcrumbList"])if(!page.html.includes(type))failures.push(`${slug}: missing ${type}`);}
}
const canonGuide=guidePages.find(p=>p.slug==="canon-ls154tg-handheld-calculator-guide");
if(!canonGuide||visibleText(canonGuide.html).split(" ").length<1200)failures.push("Canon product-intent guide: requires 1200 useful words");
if(guidePages.length!==45)failures.push(`45 guides expected, generated ${guidePages.length}`);

// Ranks 146–165 keep every exact sheet term and distinct clinical guide intent.
const source146=readFileSync(join(process.cwd(),"lib/roadmap-146-165-keywords.ts"),"utf8");
const map146=JSON.parse(source146.slice(source146.indexOf("= ")+2,source146.lastIndexOf(" as const")));
if(map146.length!==21||new Set(map146.map(k=>k.rank)).size!==20)failures.push("ranks 146–165: expected all 21 sheet queries and 20 ranks");
for(const item of map146){
 const file=join(process.cwd(),"out",item.path,"index.html");
 if(!existsSync(file)){failures.push(`rank ${item.rank}: missing ${item.path}`);continue;}
 const html=readFileSync(file,"utf8");
 if(!metaValue(html,"keywords").toLowerCase().includes(item.keyword.toLowerCase()))failures.push(`rank ${item.rank}: missing exact keyword ${item.keyword}`);
 if(html.includes('content="noindex'))failures.push(`rank ${item.rank}: noindex destination`);
 if(!globalSitemap.includes(item.path))failures.push(`rank ${item.rank}: absent from sitemap`);
}
for(const slug of roadmap146Slugs){
 const page=globalPages.find(p=>p.slug===slug);
 if(!page||!globalDirectory.includes(`/tools/${slug}/`)){failures.push(`${slug}: absent from tool directory`);continue;}
 for(const type of ["WebApplication","FAQPage","HowTo","BreadcrumbList"])if(!page.html.includes(type))failures.push(`${slug}: missing ${type}`);
 const incoming=globalPages.filter(other=>other.slug!==slug&&other.html.slice(other.html.indexOf("<main"),other.html.indexOf("</main>")).replace(/<script[\s\S]*?<\/script>/g,"").includes(`href="/tools/${slug}/"`));
 if(!incoming.length)failures.push(`${slug}: no contextual inbound calculator link`);
}
for(const slug of ["eye-prescription-to-20-20-guide","lri-calculator-guide"]){
 const page=guidePages.find(p=>p.slug===slug);
 if(!page||visibleText(page.html).split(" ").length<1200)failures.push(`${slug}: requires 1200 useful words`);
}
const eyeGuide=guidePages.find(p=>p.slug==="eye-prescription-to-20-20-guide");
if(!eyeGuide?.html.includes("Click Calculate")||!eyeGuide?.html.includes("WebApplication"))failures.push("measured-acuity guide: missing click-gated calculator or application schema");
if(!headerSource.includes('g.keywords'))failures.push("guide search: missing exact-query keyword indexing");

// Ranks 166–185: all exact matching queries and new functional destinations.
const source166=readFileSync(join(process.cwd(),"lib/roadmap-166-185-keywords.ts"),"utf8");
const map166=JSON.parse(source166.slice(source166.indexOf("= ")+2,source166.lastIndexOf(" as const")));
if(map166.length!==49||new Set(map166.map(k=>k.rank)).size!==20)failures.push("ranks 166–185: expected 49 exact queries across all 20 ranks");
for(const item of map166){
 const page=globalPages.find(p=>p.slug===item.slug);
 if(!page){failures.push(`rank ${item.rank}: missing ${item.path}`);continue;}
 if(!metaValue(page.html,"keywords").toLowerCase().includes(item.keyword.toLowerCase()))failures.push(`rank ${item.rank}: missing exact keyword ${item.keyword}`);
 if(page.html.includes('content="noindex'))failures.push(`rank ${item.rank}: noindex destination`);
 if(!globalSitemap.includes(item.path))failures.push(`rank ${item.rank}: absent from sitemap`);
}
for(const slug of roadmap166Slugs){
 const page=globalPages.find(p=>p.slug===slug);
 if(!page||!globalDirectory.includes(`/tools/${slug}/`)){failures.push(`${slug}: missing directory route`);continue;}
 for(const type of ["WebApplication","FAQPage","HowTo","BreadcrumbList"])if(!page.html.includes(type))failures.push(`${slug}: missing ${type}`);
 if(!page.html.includes('data-insight-tier="tool-specific"'))failures.push(`${slug}: missing original editorial audit`);
 const incoming=globalPages.filter(other=>other.slug!==slug&&other.html.slice(other.html.indexOf("<main"),other.html.indexOf("</main>")).replace(/<script[\s\S]*?<\/script>/g,"").includes(`href="/tools/${slug}/"`));
 if(!incoming.length)failures.push(`${slug}: no contextual inbound calculator link`);
}


// Ranks 186–205: retain every workbook query, canonical destination and useful content.
const source186=readFileSync(join(process.cwd(),"lib/roadmap-186-205-keywords.ts"),"utf8");
const map186=JSON.parse(source186.slice(source186.indexOf("= ")+2,source186.lastIndexOf(" as const")));
if(map186.length!==99||new Set(map186.map(k=>k.rank)).size!==20)failures.push("ranks 186–205: expected 99 exact sheet queries and all 20 ranks");
for(const item of map186){
 const file=join(process.cwd(),"out",item.path,"index.html");
 if(!existsSync(file)){failures.push(`rank ${item.rank}: missing ${item.path}`);continue;}
 const html=readFileSync(file,"utf8");
 if(!metaValue(html,"keywords").toLowerCase().includes(item.keyword.toLowerCase()))failures.push(`rank ${item.rank}: missing exact keyword ${item.keyword}`);
 if(/content="noindex/.test(html))failures.push(`rank ${item.rank}: noindex destination`);
 if(!globalSitemap.includes(item.path))failures.push(`rank ${item.rank}: absent from sitemap`);
}
for(const slug of roadmap186Slugs){
 const page=globalPages.find(p=>p.slug===slug);
 if(!page||!globalDirectory.includes(`/tools/${slug}/`)){failures.push(`${slug}: missing directory route`);continue;}
 for(const type of ["WebApplication","FAQPage","HowTo","BreadcrumbList"])if(!page.html.includes(type))failures.push(`${slug}: missing ${type}`);
 if((page.html.match(/<details/g)||[]).length<5)failures.push(`${slug}: fewer than five useful FAQs`);
 if(!page.html.includes('data-insight-tier="tool-specific"'))failures.push(`${slug}: missing specific editorial audit`);
 if(!globalPages.some(other=>other.slug!==slug&&other.html.slice(other.html.indexOf("<main"),other.html.indexOf("</main>")).replace(/<script[\s\S]*?<\/script>/g,"").includes(`href="/tools/${slug}/"`)))failures.push(`${slug}: missing contextual inbound link`);
}
for(const slug of ["military-pt-test-calculator-guide","bpc-157-tb-500-blend-calculator-guide"]){
 const page=guidePages.find(p=>p.slug===slug);
 if(!page||visibleText(page.html).split(" ").length<1200)failures.push(`${slug}: requires 1200 useful words`);
 if(!globalPages.some(p=>p.html.slice(p.html.indexOf("<main"),p.html.indexOf("</main>")).replace(/<script[\s\S]*?<\/script>/g,"").includes(`href="/guides/${slug}/"`)))failures.push(`${slug}: missing contextual inbound link`);
}
const militaryPage=guidePages.find(p=>p.slug==="military-pt-test-calculator-guide");
if(!militaryPage?.html.includes('Click Calculate')||!militaryPage?.html.includes('WebApplication'))failures.push('military guide: missing submitted-point tool');
const peptidePage=guidePages.find(p=>p.slug==="bpc-157-tb-500-blend-calculator-guide");
if(peptidePage?.html.includes('"@type":"WebApplication"'))failures.push('peptide guide: must not imply a dosing calculator');

// Sitemap fetchability starts with correct, finite exported URLs; remote transport is checked separately.
const locs=[...globalSitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
if(!globalSitemap.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'))failures.push('sitemap: missing protocol namespace');
if(new Set(locs).size!==locs.length)failures.push('sitemap: duplicate URLs');
if(locs.length>50000||Buffer.byteLength(globalSitemap)>50*1024*1024)failures.push('sitemap: protocol size limit exceeded');
for(const loc of locs){
 let url;try{url=new URL(loc);}catch{failures.push(`sitemap: invalid URL ${loc}`);continue;}
 if(url.origin!=="https://solvepilot.xyz"||url.search||url.hash||url.pathname.includes('//'))failures.push(`sitemap: malformed production URL ${loc}`);
 const file=join(process.cwd(),'out',url.pathname,'index.html');
 if(!existsSync(file)){failures.push(`sitemap: no export for ${loc}`);continue;}
 const html=readFileSync(file,'utf8');
 if(/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html))failures.push(`sitemap: noindex URL ${loc}`);
 const canonical=html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
 if(canonical!==loc)failures.push(`sitemap: canonical mismatch ${loc} → ${canonical}`);
}
for(const match of globalSitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g))if(!Number.isFinite(Date.parse(match[1]))||Date.parse(match[1])>Date.now())failures.push(`sitemap: invalid or future lastmod ${match[1]}`);
const robotsExport=readFileSync(join(process.cwd(),'out/robots.txt'),'utf8');
if(!robotsExport.includes('Sitemap: https://solvepilot.xyz/sitemap.xml')||/Disallow: \/(?:\r?\n|$)/.test(robotsExport))failures.push('robots: sitemap discovery or crawl allowance invalid');


// Ranks 206–225: preserve every primary and secondary workbook query.
const source206=readFileSync(join(process.cwd(),"lib/roadmap-206-225-keywords.ts"),"utf8");
const map206=JSON.parse(source206.slice(source206.indexOf("= ")+2,source206.lastIndexOf(" as const")));
if(map206.length!==37||new Set(map206.map(k=>k.rank)).size!==20)failures.push("ranks 206–225: expected 37 exact queries and all 20 ranks");
for(const item of map206){
 const file=join(process.cwd(),"out",item.path,"index.html");
 if(!existsSync(file)){failures.push(`rank ${item.rank}: missing ${item.path}`);continue;}
 const html=readFileSync(file,"utf8");
 if(!metaValue(html,"keywords").toLowerCase().includes(item.keyword.toLowerCase()))failures.push(`rank ${item.rank}: missing keyword ${item.keyword}`);
 if(/content="noindex/.test(html)||!globalSitemap.includes(item.path))failures.push(`rank ${item.rank}: destination must be indexable and in sitemap`);
}
for(const slug of roadmap206Slugs){
 const page=globalPages.find(p=>p.slug===slug);
 if(!page||!globalDirectory.includes(`/tools/${slug}/`)){failures.push(`${slug}: missing directory route`);continue;}
 for(const type of ["WebApplication","FAQPage","HowTo","BreadcrumbList"])if(!page.html.includes(type))failures.push(`${slug}: missing ${type}`);
 if((page.html.match(/<details/g)||[]).length<5||!page.html.includes('data-insight-tier="tool-specific"'))failures.push(`${slug}: requires useful FAQs and a specific audit`);
 if(!globalPages.some(other=>other.slug!==slug&&other.html.slice(other.html.indexOf("<main"),other.html.indexOf("</main>")).replace(/<script[\s\S]*?<\/script>/g,"").includes(`href="/tools/${slug}/"`)))failures.push(`${slug}: missing contextual inbound link`);
}
for(const slug of ["bank-calculators-guide","study-score-calculator-guide","breast-implant-size-calculator-guide"]){
 const page=guidePages.find(p=>p.slug===slug);
 if(!page||visibleText(page.html).split(" ").length<1200)failures.push(`${slug}: requires 1200 useful words`);
 if(!globalPages.some(p=>p.html.slice(p.html.indexOf("<main"),p.html.indexOf("</main>")).replace(/<script[\s\S]*?<\/script>/g,"").includes(`href="/guides/${slug}/"`)))failures.push(`${slug}: missing contextual inbound link`);
}
if(locs.length!==602)failures.push(`ranks 206–225: expected 602 sitemap URLs, found ${locs.length}`);

// Next 20 eligible destinations: 15 new tools, 3 older upgrades, 2 guides; 21 ranks with swim merge.
const nextSource=readFileSync(join(process.cwd(),"lib/roadmap-next20-keywords.ts"),"utf8");
const nextMap=JSON.parse(nextSource.slice(nextSource.indexOf("= ")+2,nextSource.lastIndexOf(" as const")));
if(nextMap.length!==21||new Set(nextMap.map(k=>k.path)).size!==20)failures.push("next20: expected 21 exact workbook queries and 20 unique eligible destinations");
for(const item of nextMap){
 const file=join(process.cwd(),"out",item.path,"index.html");
 if(!existsSync(file)){failures.push(`next20: missing ${item.path}`);continue;}
 const html=readFileSync(file,"utf8");
 if(!metaValue(html,"keywords").toLowerCase().includes(item.keyword.toLowerCase()))failures.push(`next20: missing keyword ${item.keyword}`);
 if(!globalSitemap.includes(item.path)||/content="noindex/.test(html))failures.push(`next20: destination not indexable ${item.path}`);
}
for(const slug of next20Slugs){
 const page=globalPages.find(p=>p.slug===slug);
 if(!page||!globalDirectory.includes(`/tools/${slug}/`)){failures.push(`next20: missing directory page ${slug}`);continue;}
 for(const type of ["WebApplication","FAQPage","HowTo","BreadcrumbList"])if(!page.html.includes(type))failures.push(`next20 ${slug}: missing ${type}`);
 if(!page.html.includes('data-insight-tier="tool-specific"'))failures.push(`next20 ${slug}: missing specific editorial audit`);
 if(!globalPages.some(other=>other.slug!==slug&&other.html.slice(other.html.indexOf("<main"),other.html.indexOf("</main>")).replace(/<script[\s\S]*?<\/script>/g,"").includes(`href="/tools/${slug}/"`)))failures.push(`next20 ${slug}: missing contextual inbound link`);
}
for(const slug of ["puppy-weight-estimator-guide","ski-din-calculator-guide"]){
 const page=guidePages.find(p=>p.slug===slug);
 if(!page||visibleText(page.html).split(" ").length<1200)failures.push(`next20 ${slug}: requires 1200 useful words`);
 if(!globalPages.some(p=>p.html.slice(p.html.indexOf("<main"),p.html.indexOf("</main>")).replace(/<script[\s\S]*?<\/script>/g,"").includes(`href="/guides/${slug}/"`)))failures.push(`next20 ${slug}: missing inbound link`);
}
if (failures.length) {
  console.error("Content quality gate failed:\n- " + failures.join("\n- "));
  process.exit(1);
}
console.log(`Content quality gate passed for ${pages.length} Pakistan calculators, ${globalPages.length} global calculators, ${generatorPages.length} Phase 6 generators, ${requestedFileSlugs.size} new archive/data/subtitle tools, ${curatedInsightPages.length} curated flagships, ${toolSpecificInsightPages.length} remaining tool upgrades and ${guidePages.length} guides.`);
