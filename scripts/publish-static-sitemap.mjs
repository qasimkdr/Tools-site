// Generate the canonical XML sitemap directly from the exported static HTML pages.
// No Next.js sitemap route is needed. Render publishes the out/ directory.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const output = join(process.cwd(), "out");
const origin = "https://solvepilot.xyz";
const entries = [];
async function scan(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await scan(path);
    else if (entry.name === "index.html" || (entry.name.endsWith(".html") && !entry.name.startsWith("404"))) {
      const rel = relative(output, path).split(sep).join("/");
      const pathname = rel === "index.html" ? "/" : rel.endsWith("/index.html")
        ? "/" + rel.slice(0, -"/index.html".length) + "/"
        : "/" + rel.slice(0, -".html".length);
      const html = await readFile(path, "utf8");
      const canonical = html.match(/<link\b(?=[^>]*\brel=["']canonical["'])(?=[^>]*\bhref=["']([^"']+)["'])[^>]*>/i)?.[1]
        ?? html.match(/<link\b(?=[^>]*\bhref=["']([^"']+)["'])(?=[^>]*\brel=["']canonical["'])[^>]*>/i)?.[1];
      if (!canonical) throw new Error(`Missing canonical URL in ${rel}`);
      const url = new URL(canonical.replaceAll("&amp;", "&"), origin);
      const expected = new URL(pathname, origin);
      // Exclude alias/redirect pages whose canonical points at a different URL.
      if (url.href !== expected.href) continue;
      if (url.origin !== origin || url.search || url.hash) throw new Error(`Invalid canonical in ${rel}`);
      if (/<meta\b(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex)/i.test(html)) continue;
      entries.push(url.href);
    }
  }
}
await scan(output);
entries.sort();
if (entries.length < 100) throw new Error(`Unexpectedly small sitemap: ${entries.length} URLs`);
if (entries.length > 50000 || new Set(entries).size !== entries.length) throw new Error("Duplicate URLs or sitemap URL limit exceeded");
const escape = (s) => s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  + entries.map(url => `  <url><loc>${escape(url)}</loc></url>`).join("\n")
  + '\n</urlset>\n';
if (Buffer.byteLength(xml) > 50 * 1024 * 1024) throw new Error("Sitemap exceeds 50MB");
await writeFile(join(output, "sitemap.xml"), xml, "utf8");
console.log(`Published static out/sitemap.xml with ${entries.length} canonical URLs`);
