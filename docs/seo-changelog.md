# SEO changelog

## 2026-11-23 — Recovery batch 2 (template boilerplate + page weight)
No calculator logic, formulas, inputs, defaults, URLs, canonicals or catalog definitions changed (render-time only).
- `lib/page-cleanup.ts`: FAQs, considerations and intro sentences that appear word-for-word on 8+ tools are hidden at render
  time; SEO-process wording ("keyword variants", "thin duplicate pages", "canonical page", "closely matching searches") is
  always hidden. FAQs are topped up from each page's own formula, example, description and specific factors (min 5 global,
  min 4 Pakistan). Visible SEO jargon on pages: dozens → 0.
- Pakistan: the site-wide "Is the … free?" FAQ (181 pages) removed; category-shared considerations filtered.
- Generic "mistakes/scenarios" fallback (`lib/flagship-content.ts`) uses each distinct factor once instead of repeating the
  same card three times, and drops a generic sentence.
- File-tool and generator feature cards: the identical sentence under every feature (42–144 repeats) replaced by a plain list.
- Global "Sources" section: removed the identical disclaimer sentence (369 pages); links kept.
- `lib/page-supplements.ts`: verified FAQs for GCF and Superscript pages (they fell below 900 words after cleanup).
- Directory pages no longer serialise full tool objects into client props: /tools/ 2.2 MB → 332 KB, /pk/tools/ 564 → 165 KB,
  homepage 508 → 113 KB.
- Open: FileToolEditorial shared guidance on 41 document/media pages; Pakistan per-category considerations on pages that
  have no tool-specific ones; 314 short meta descriptions; thin older Pakistan guides.

## 2026-11-23 — Recovery batch 1 (quality + internal linking + speed)
Why: site-wide ranking suppression from 10 Oct 2026 (see docs/seo-audit.md §4–5). No manual action.
No calculator logic, formulas, inputs, defaults, tool instructions, URLs, canonicals or catalog definitions changed.

Quality (all tool routes)
- Removed the visible "Related questions this calculator covers" keyword list (290 global pages). Keywords remain in metadata.
- Removed four generic paragraphs ("Understanding the displayed figures", "Planning with multiple scenarios") from 134 global pages.
- Removed the repeated methodology disclaimer (333 pages) and shortened the privacy/accuracy paragraphs to one line with links.
- Pakistan calculators: replaced three generic FAQ entries shared by all 181 pages with page-specific Q&As built from each
  tool's own description, formula and worked example (visible FAQ and FAQPage schema stay identical). `lib/pk-faqs.ts`.
- "Read the complete guide →" (62×) now names the guide.

Internal linking (`lib/internal-links.ts`, `components/InternalLinks.tsx`)
- Every tool and guide page has a "Related tools for this task" paragraph with 3–4 contextual links (descriptive anchors =
  target page names) plus its directory link. Before: 398 pages had zero in-article tool links; after: 0.
- Pakistan, PDF, document, image, media, archive and generator pages no longer show the same "first 4" cards: all tool pages
  show 6 relevance-ranked cards; every tool page receives ≥3 card links from other pages (min 3, max 24).
- New build gate `scripts/check-internal-links.mjs`: ≥3 contextual links, 6 cards, ≥3 inbound, no broken links, no generic anchors.

Speed / technical
- Header search index (≈240 KB) moved from every page's inline payload to `/search-index.json`, fetched only when search opens.
  Typical tool page HTML: ≈326 KB → ≈55 KB.
- AdSense script: `beforeInteractive` → `afterInteractive`.
- Titles: " | SolvePilot" suffix dropped when it would exceed 60 characters (titles >60: 142 → 52; wording unchanged).

Owner follow-up
- After deploy: GSC URL Inspection → Request indexing for the top 10 pages (≤10/day), resubmit sitemap-v2.xml.
- Pause new tool batches until impressions recover. Check GSC at +14 and +28 days.
