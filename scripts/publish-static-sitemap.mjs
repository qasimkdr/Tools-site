// Publish a second, standalone static sitemap from the complete Next.js export.
// This does not alter sitemap.xml, robots.txt, or the diagnostic one-URL sitemap.
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const source = join(process.cwd(), "out", "sitemap.xml");
const destination = join(process.cwd(), "out", "sitemap-v2.xml");
const xml = await readFile(source, "utf8");

if (!xml.includes("<urlset") || !xml.includes("</urlset>")) {
  throw new Error("Generated sitemap is not a complete XML URL set");
}
const urls = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((match) => match[1]);
if (!urls.length) throw new Error("Generated sitemap contains no URLs");
if (new Set(urls).size !== urls.length) throw new Error("Generated sitemap contains duplicate URLs");
for (const url of urls) {
  const parsed = new URL(url.replaceAll("&amp;", "&"));
  if (parsed.origin !== "https://solvepilot.xyz" || parsed.search || parsed.hash) {
    throw new Error(`Unexpected sitemap URL: ${url}`);
  }
}
if (Buffer.byteLength(xml, "utf8") > 50 * 1024 * 1024 || urls.length > 50000) {
  throw new Error("Sitemap exceeds Google XML sitemap limits");
}
await writeFile(destination, xml, "utf8");
console.log(`Created out/sitemap-v2.xml with ${urls.length} URLs.`);
