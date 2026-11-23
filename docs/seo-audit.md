# SolvePilot SEO audit — 23 November 2026

Method: fresh static build of `main`@`da76f74` (749 HTML files, 742 sitemap URLs, 723 tool/guide pages),
parsed from `out/**/index.html`. Live-site checks (redirects, http/www) could not run: the session's
network blocks solvepilot.xyz. No Search Console data was available.

## 1. Not the problem (verified)
| Check | Result |
|---|---|
| Rendering | `output: "export"`, all content (H1, intro, article, FAQ) is in the static HTML. Nothing is client-only except the calculator widget and header search. |
| H1 | Exactly one on all 723 pages |
| Canonical | Absolute, self-referencing on all 723 pages |
| Sitemap / robots | 742 URLs, robots allows crawling, points to `sitemap-v2.xml` |
| Directories | `/tools/` links 369/369, `/pk/tools/` 181/181, `/generator-tools/` 48/48, `/guides/` 51/51 in HTML |
| Orphans | 0 pages with zero inbound links from page bodies |

So the "dynamic export" suspicion is not confirmed: pages are static and crawlable.

## 2. Problems found (ranked by likely damage)

### A. Quality / helpful-content signals (likely biggest)
1. **Site-wide boilerplate paragraphs.** Identical text on hundreds of pages:
   privacy paragraph ×369, accuracy paragraph ×369, methodology note ×333, four generic
   "Understanding the displayed figures / Planning with multiple scenarios" paragraphs ×134 each,
   two identical FAQ answers on all 181 Pakistan pages (also inside FAQPage schema), 87× FBR note.
   Source: `app/tools/[slug]/page.tsx` lines ~245–300, `app/pk/tools/[slug]/page.tsx`.
2. **Visible keyword lists.** "Related questions this calculator covers" renders the raw keyword list
   (e.g. ratio page: "ratio calculator | ratio solver | ratio simplifier | …") on **290 pages**.
   This reads as keyword stuffing (playbook §2.3, §2.5).
3. **Thin pages.** File tools render ~390–420 article words (PDF 14, document 25, image 13, media 16)
   with mostly shared template text; 12+ older Pakistan guides are 420–600 words.

### B. Internal linking (your suspicion — confirmed)
4. **No contextual body links on most pages.** In-article links to other tools:
   0 links on **398/723**, 1–2 on 130, ≥3 on only 195.
   - Pakistan tools: 181/181 have <3 (119 have 0).
   - All PDF/document/image/media/archive/generator pages: 0.
   - Global tools: 148 have 0.
5. **Related blocks are not relevance-based on many routes.**
   - Pakistan: `sort by same category → slice(0,4)` ⇒ every page in a category shows the *same first 4* tools.
   - PDF/document/image/media: `slice(0,4)` of the catalog ⇒ same 4 cards everywhere.
   Result: link equity piles on a few pages (ratio 79 inbound, rent-vs-buy 67) while **286 pages have <3 inbound**
   (Pakistan median inbound = 2, PDF median = 2).
6. **Breadcrumbs skip the category** (Home → Global tools → Tool); there are no category hub pages.
7. **Generic anchor**: "Read the complete guide →" ×62.

### C. Technical / performance
8. **Every page is ~310–336 KB, of which ~300 KB is inline JS payload**: the header search index
   (723 entries with all keywords) is passed as props to a client component and serialised into
   every single page. Visible HTML is only ~20 KB. Hurts LCP/INP on mobile and crawl efficiency.
9. **AdSense loaded `beforeInteractive`** in the root layout (render-blocking on every page).
10. **142 titles >60 chars** (52 >70) after the " | SolvePilot" suffix → truncated in results.
11. **314 meta descriptions <140 chars** (playbook wants 140–160).
12. Sitemap has `priority`/`changefreq` (ignored by Google, harmless) and hard-coded lastmod dates for file tools.
13. HowTo schema on tool pages (no longer a rich result; harmless, optional to drop).

## 3. Proposed fix plan (minimal change to tools and their instructions)
Phase 1 — linking (main ask, no calculator/definition changes):
- Build-time "Related calculations" paragraph inside every tool/file-tool article: ≥3 descriptive,
  varied anchors to the most relevant live pages + the directory, computed from the existing
  relevance engine / reviewed task families (`lib/relevance-engine.ts`, `lib/navigation-topics.ts`).
- Replace first-N related cards (Pakistan, PDF, document, image, media, archive, generator) with the
  playbook §5.2 algorithm: 6 relevant cards per page, every page ≥3 inbound.
- Descriptive anchors instead of "Read the complete guide →".
- Add an e2e/validator gate: ≥3 in-article links, 6 related cards, inbound ≥3, no broken links.
Phase 2 — quality (needs your OK, touches shared template text, not tool logic):
- Remove the visible keyword list (keep keywords in data only); trim/replace boilerplate paragraphs.
Phase 3 — technical:
- Load header search index from a static JSON file on demand instead of embedding in every page.
- AdSense `afterInteractive`/lazy; shorten titles >60; extend short meta descriptions.
