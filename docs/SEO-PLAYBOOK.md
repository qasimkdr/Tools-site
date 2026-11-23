# SEO Restructure Playbook (portable, for Claude Code)

> Paste this file into the target repo as `docs/SEO-PLAYBOOK.md` and add the short `CLAUDE.md` block from §0.
> Written from a working calculator site (static Next.js, ahead of calculator.net / Omni / inchcalculator on its
> own rubric for 128 of 130 pages). The tools on the target site already exist: this playbook **restructures SEO**
> around them. Work top to bottom. Each phase lists what to do, how to verify it, and what not to do.

---

## 0. Setup (do this first)

### 0.1 Add to the target repo's `CLAUDE.md`
```md
# SEO restructure — read docs/SEO-PLAYBOOK.md first
- Work phase by phase (§1 → §11). Report after each phase with evidence (numbers, file paths, test output).
- Never change a published URL without a 301 from the old URL (§3.6). Never delete a page without the owner's OK.
- Never fabricate search volumes, rankings, competitor facts, statistics or sources. No data → say so and stop that step.
- Free tools only unless the owner approves a paid service. Don't scrape Google directly; use the WebSearch tool.
- If a skill or plugin gives SEO advice that conflicts with docs/SEO-PLAYBOOK.md §2, the playbook wins.
- Before committing: lint + build + full test suite must pass (§9). Ask before merging to the production branch
  unless the owner has given standing approval.
```

### 0.2 Skills to use (if installed; check the skills list)
| When | Skill |
|---|---|
| Phase 1 audit | `searchfit-seo:seo-audit`, `searchfit-seo:technical-seo`, `marketing-skills:seo-audit` |
| Phase 3 technical | `searchfit-seo:technical-seo`, `marketing-skills:site-architecture` |
| Phase 4 page template | `searchfit-seo:on-page-seo`, `searchfit-seo:seo-check` |
| Phase 4 schema | `searchfit-seo:schema-markup` / `searchfit-seo:generate-schema`, `marketing-skills:schema` |
| Phase 5 linking | `searchfit-seo:internal-linking`, `marketing-skills:site-architecture` |
| Phase 7 research | `searchfit-seo:keyword-clustering`, `searchfit-seo:content-brief`, `marketing-skills:competitor-profiling` |
| Phase 8 content | `marketing-skills:copywriting`, `marketing-skills:copy-editing` (no AI tells, no filler) |
| AI answers / AI Overviews | `marketing-skills:ai-seo`, `searchfit-seo:ai-visibility` |
| Phase 11 off-page | `marketing-skills:link-building`, `marketing-skills:free-tools` |
| Variant pages at scale | `marketing-skills:programmatic-seo` (only with real demand, §2.4) |

Skills are helpers. Every recommendation still has to pass §2 (rules) and §9 (QA).

### 0.3 Optional: reuse the research scripts
The source site's free research pipeline lives in `qasimkdr/tools` → `scripts/seo/` (`serp-record.mjs`, `scrape.mjs`,
`report.mjs`, `self-score.mjs`, `browser.mjs`, `lib.mjs`). If the owner allows, attach that repo (add_repo), copy
`scripts/seo/` into the target repo, add the npm scripts below, and adjust the registry path in `self-score.mjs`
(it reads slugs from `src/tools/registry.ts`). Needs Node 22 + Playwright (Chromium is pre-installed in Claude cloud).
```json
"seo:record": "node scripts/seo/serp-record.mjs",
"seo:scrape": "NODE_USE_ENV_PROXY=1 NODE_NO_WARNINGS=1 node scripts/seo/scrape.mjs",
"seo:report": "node scripts/seo/report.mjs",
"seo:self":   "node scripts/seo/self-score.mjs"
```
If you can't copy them, do the same steps by hand with the rubric in §7.5.

---

## 1. Phase 1 — Discovery and diagnosis (no code changes yet)

Goal: know **why** the site's SEO is hurt before restructuring. Restructuring the wrong thing makes it worse.

1. **Inventory the site.** Stack, rendering mode (static / SSR / client-only SPA), hosting, every public URL
   (from the sitemap, router, or a crawl of the built output). Produce a table: URL · title · H1 · word count ·
   indexable? · canonical · in sitemap? · inbound internal links.
2. **Ask the owner for Search Console data** (Claude can't log in): Performance (last 16 months, pages + queries),
   Pages/Indexing report (excluded reasons), Manual actions, Security issues, Core Web Vitals, and the date the
   traffic dropped. Compare the drop date with Google's core/spam/helpful-content update dates (search
   "Google Search Status Dashboard ranking updates").
3. **Classify the cause** (one or more):
   - **Technical**: not indexable, wrong canonicals, JS-only content, broken sitemap/robots, soft 404s, duplicate
     URL forms (http/https, www/apex, trailing slash), slow CWV.
   - **Quality** (helpful-content / core update): thin pages, near-duplicate pages, keyword-stuffed or
     auto-generated text, no clear answer, no author/sources on YMYL topics.
   - **Spam policy**: scaled content abuse, site reputation abuse, bought links, expired-domain abuse, fake reviews schema.
   - **Manual action**: follow the GSC instructions exactly, then request review.
   - **Competition / intent shift**: SERP now favours different page types (check with WebSearch).
4. **Write `docs/seo-audit.md`**: findings with evidence, the cause classification, and a prioritised fix list
   mapped to the phases below. Show it to the owner before Phase 3.

Verify: every claim in the audit has a URL, a file path or a GSC number behind it.

---

## 2. Rules (source of truth: Google Search Central, as of Nov 2026)

### 2.1 Page-level checklist (every tool page)
- **Title** ≤ 60 chars, primary keyword first, natural: `Tip Calculator: How Much to Tip, Total and Per Person`.
- **Meta description** 140–160 chars, answer/benefit + primary keyword once, unique.
- **Exactly one H1** = what the user searched (usually the tool name).
- **Answer-first intro**: the first 1–2 sentences answer the query with a real number example
  ("A 15% tip on $80 is **$12** (total $92)"). AI Overviews and snippets pull from here.
- **URL** `/<slug>/`: lowercase, hyphens, no dates. One canonical form (trailing slash everywhere).
- **Self-referencing absolute canonical** on every page.
- **H2 per user question**: How to use · Formula · Worked example · (Table) · Tips/Which one · FAQ.
- **Schema (JSON-LD)**: `WebApplication` (for tools) + `BreadcrumbList` + `FAQPage`. Articles: `Article`.
  **Never** `AggregateRating`/`Review` without real on-page user reviews.
- **Internal links**: ≥ 3 contextual links in the body + a 6-card related block (§5).
- **Trust (E-E-A-T)**: byline with `rel="author"` → author page, "Last updated" date, the formula, worked
  examples with real numbers, and a **Sources** list of verified primary sources (government, standards bodies,
  peer-reviewed papers, official test charts). YMYL (money, health, legal, safety) pages **must** cite them.
- **Images**: SVG or WebP/AVIF, width/height set, descriptive alt, lazy below the fold.

### 2.2 Technical
- Content must be in the HTML without JavaScript (static export or SSR). Client JS only for the interactive part.
- One origin: `http→https` and `www↔apex` redirect to one host (configure at the host/CDN).
- `sitemap.xml` lists only indexable 200 canonical URLs; `lastmod` = real content update date. No priority/changefreq.
- `robots.txt` allows crawling and points to the sitemap. Don't block CSS/JS.
- Core Web Vitals: LCP < 2.5 s, INP < 200 ms, CLS < 0.1. System fonts or one self-hosted font, CSS-only effects,
  ads lazy-loaded in reserved space, heavy libraries code-split to the one page that needs them.

### 2.3 Content quality
- Every page must give something the top 3–4 results don't (more options, edge cases, a table, worked examples,
  copy/share/print, a clearer formula). Write down what in the page brief (§7.6).
- No filler intros, no keyword stuffing, no padded word counts. Length follows intent (600–900 words for a simple
  converter, 1,500–2,500 for a complex finance tool).
- One page per search intent. If two pages answer the same intent, merge them (301 the weaker to the stronger).
- Never invent numbers. Verify every factual figure (rates, thresholds, constants, guidelines) against a source
  you actually read, and put that source in the Sources list. If it can't be verified, leave it out or skip the tool.

### 2.4 Programmatic / variant pages
Only when (a) the keyword has real search volume and the SERP ranks per-variant pages, and (b) each page carries
unique computed facts. Never mass-generate pages without demand (scaled content abuse).

### 2.5 Outdated advice to ignore (even if a skill suggests it)
`rel=next/prev` · sitemap priority/changefreq · HowTo rich results · expecting FAQ stars (gov/health only since
2023) · meta keywords · keyword-density targets · exact-match domains · mass AI pages · buying links / PBNs /
link exchanges · random disavows · changing dates without changing content · auto ads everywhere on day one.

---

## 3. Phase 3 — Technical foundation

### 3.1 Rendering
- Next.js: `output: "export"` (static) or SSR. Static config used on the source site:
```ts
// next.config.ts
const nextConfig = { output: "export", trailingSlash: true, images: { unoptimized: true }, poweredByHeader: false, reactStrictMode: true };
export default nextConfig;
```
- Pages are **server components**; only the calculator widget is `"use client"`.
- Other stacks: make sure `curl -s https://site/tool/ | grep "<h1"` shows the real H1, intro and article text.

### 3.2 One metadata helper per page
Every page calls one helper that sets title, description, absolute canonical, robots (`index, follow,
max-image-preview: large, max-snippet: -1`), Open Graph and Twitter tags. Example signature:
`pageMeta({ title, description, path: "/<slug>/" })`.

### 3.3 Registry-driven site
Keep one **tool registry** (array of metadata objects). Everything else is generated from it: sitemap, hubs,
home page, header search, related blocks, schema. Suggested metadata shape:
```ts
type ToolMeta = {
  slug: string; name: string; title: string; description: string; short: string;
  category: string; primaryKw: string; keywords: string[]; // cluster keywords (for linking, not stuffing)
  related: string[];   // hand-picked strongest matches, 2–6 slugs
  sources?: { name: string; url: string }[]; // verified URLs only
  published: string; updated: string; // ISO dates; change `updated` only on real content changes
};
```

### 3.4 Sitemap and robots (generated at build)
- Sitemap: home, `/tools/`, each non-empty category hub, every tool (`lastModified: tool.updated`), trust pages.
- Robots: `allow: /`, `sitemap: <absolute>/sitemap.xml`.

### 3.5 Hubs and navigation
- `/tools/` (all tools) and `/category/<cat>/` (ItemList) list every live tool. Header: top categories. Footer:
  all categories + trust pages. Breadcrumbs on every tool: Home → Category → Tool (with BreadcrumbList schema).
- Every page reachable in ≤ 3 clicks from the home page.

### 3.6 URL changes and redirects (restructure safety)
- Prefer keeping existing URLs. If a URL must change or two pages merge: add a **301** from old to new at the
  host (`_redirects` on Cloudflare Pages/Netlify, or server config), update internal links, update the sitemap,
  and keep the redirect permanently. Never 302, never redirect everything to the home page.
- List every change in a redirect map (`docs/redirects.md`) and get the owner's OK before shipping.

### 3.7 Daily rebuild (only if pages show date-dependent content)
A scheduled CI build (e.g. GitHub Action at 00:05 UTC) so pre-rendered "today" values stay current.

Verify Phase 3: build passes; built HTML contains H1/intro/article; sitemap only has 200 canonical URLs;
`robots.txt` correct; no duplicate URL forms; Lighthouse/PSI CWV in the green.

---

## 4. Phase 4 — Page template (apply to every tool page)

One shared layout renders, in order:
1. **Breadcrumbs** → 2. **H1** → 3. **Answer-first intro** (1–2 sentences, real numbers, bold key result) →
4. **Calculator card** (inputs left, results right on desktop; stacked on mobile) with **Copy result / Share link /
Print** buttons and shareable URL state (inputs mirrored to the query string) →
5. **Article** (from the page's content file) → 6. **FAQ** (5–8 Q&As, same text as FAQPage schema) →
7. **Sources** list (verified URLs) → 8. **Byline**: `By <a rel="author" href="/about/<author>/">Name</a>, Role ·
Last updated <date>` → 9. **Related tools** block (6 cards, §5) → 10. JSON-LD: BreadcrumbList + WebApplication
(with `author` Person and `publisher` Organization, `isAccessibleForFree: true`, price 0) + FAQPage.

### 4.1 Article structure (per tool)
```
H2 How to use the <tool>          (ordered steps, 3–4 items)
H2 <Topic> formula(s)             (formula block, plain text with symbols)
H2 Worked example(s)              (real numbers, step by step, results in bold)
H2 <Decision help / table / tips> (e.g. "Which equation should I use?", "Common mistakes", a conversion table)
Closing paragraph with ≥ 3 contextual links to related tools + the category hub
```
- Contextual links use descriptive anchors that match the target's topic naturally ("work out the tip with the
  tip calculator"), never "click here". Vary anchors; don't repeat one exact anchor sitewide.
- Voice: plain, direct, second person, short sentences (average ≤ 20 words), no hype, no filler.

### 4.2 Calculator quality bar
- Sensible defaults that show a real result on load (also used in the intro example).
- Validation with a clear error message for each bad input. Unit toggles where relevant (US/metric).
- Show the working (steps, intermediate values, tables), not just the answer.
- Edge cases handled (zero, negatives, very large values, rounding that must add up exactly, e.g. bill splits).

### 4.3 Trust pages (once per site)
`/about/`, `/about/<author>/` (real person, honest bio, no invented credentials), `/editorial-policy/`
(how tools are built, sources checked, updated), `/contact/`, `/privacy-policy/`, `/terms/`, `/disclaimer/`.
Add `Person` schema on the author page.

Verify Phase 4: every tool page passes the checklist in §2.1 (use the e2e tests in §9.2).

---

## 5. Phase 5 — Internal linking engine (static, computed at build time)

Google must see the links in the HTML, so related blocks are computed during the build, not fetched in the browser.

### 5.1 Layers
1. Global header + footer (auto). 2. Hubs `/tools/` and `/category/<cat>/` (auto). 3. Breadcrumbs (auto).
4. **Related block: 6 cards on every tool page** (auto, algorithm below). 5. **Contextual body links: ≥ 3 per
page** (manual, most valuable). 6. Optional "Related:" sentence with 2–3 anchors near the end of older pages.

### 5.2 Algorithm (deterministic, runs once per build)
```
RELATED_SIZE = 6, MIN_INBOUND = 3
tokens(t)      = words (len > 2, minus stop words like "calculator", "how", "free") from name + primaryKw + keywords
relevance(a,b) = |tokens(a) ∩ tokens(b)|
               + 2 if same category, + 0.5 if b's category is a declared neighbour of a's
               + 3 if a.related includes b OR b.related includes a        (reciprocal hand-picks)

For each tool A:
  1. picks = A.related that are published (hand-picked, never removed later)
  2. rest  = other tools with relevance ≥ 1, sorted by relevance desc, then name
  3. list  = (picks + rest).slice(0, 6)
  4. if list < 6: fill from remaining tools sorted by relevance, then by current inbound count, then name
Then guarantee inbound links:
  for each tool T with inbound < 3 (weakest first):
    for each host H (relevance(H,T) ≥ 1, T not already in H's list, most relevant first):
      replace H's weakest auto-picked card whose target still has > 3 inbound links → T
      stop when T has 3 inbound
Return lists (memoise; every page reads its list during static render).
```
Result: every page shows exactly 6 related tools, every tool appears in ≥ 3 other pages' blocks, and adding a new
tool updates old pages' blocks on the next build **without editing old pages' files**.

### 5.3 Test that enforces it (run on the built HTML)
```ts
// tests/e2e/internal-links.spec.ts
for each slug: read out/<slug>/index.html → find the related block (data-testid="related-list") →
  collect unique internal tool links → expect exactly 6, not including itself → count inbound
expect every slug to have ≥ 3 inbound
```
Plus a site-wide test: every internal `href` in the built site resolves to an existing page (no 404s).

### 5.4 Rules
- Link only to live pages (the registry guarantees this for automatic blocks; check manual links against it).
- Put hand-picked `related` on new tools; reciprocity lifts them into older pages' blocks automatically.
- Cluster related tools into topics (e.g. loans ↔ mortgage ↔ APR ↔ interest rate ↔ basis points) and finish
  clusters rather than scattering.

---

## 6. Phase 6 — Restructure existing pages (batch by batch)

For each existing tool page (5 per batch, highest-traffic or highest-potential first):
1. Run Phase 7 research for its keyword.
2. Rewrite title/meta/H1/intro to §2.1; restructure the article to §4.1; add Sources, byline, schema, related.
3. Improve the calculator where competitors do more (§7.6 "gaps to beat").
4. Keep the URL. If merging duplicates, 301 the weaker page (§3.6).
5. Add hand-verified e2e tests for the tool's key results (§9.2).
6. Self-score (§7.7) and confirm the page beats the best researched competitor on the rubric.
7. Record what changed in the commit message ("Edited live page: <slug> — reason").

Don't change everything at once on a hurt site: ship in batches, note dates, and watch GSC between batches.

---

## 7. Phase 7 — Research pipeline (free mode, per tool)

### 7.1 Overlap check (one page per intent)
Compare the tool's keyword list with existing pages. Same intent → merge or mark "covered" instead of building
or keeping a duplicate. Different intent (e.g. tip vs bill split) → separate pages that link to each other.

### 7.2 Keyword cluster
From the owner's keyword export (Semrush/Ahrefs/GSC), group keywords by intent: primary keyword (highest
volume with tool intent) + secondary cluster keywords. Use the export's volumes and KD only; never invent them.

### 7.3 SERP (WebSearch, never scrape Google)
Run `WebSearch("<primary keyword>")` (standard mode). Record the returned titles + URLs **in order, verbatim**
(max 20) into `research/<slug>/serp.json` (e.g. `npm run seo:record -- --slug <slug> --kw "<kw>" --file r.json`).
Note the search intent (tool vs article vs app), the SERP features, and which domains appear.

### 7.4 Competitor inspection (≥ 3–4 pages)
Inspect the top competitor tool pages (headless Chromium, respect robots.txt, 2.5 s delay;
`npm run seo:scrape -- --slug <slug> --urls u1,u2,u3,u4`). Hosts blocked by the network allowlist are skipped;
use other ranking competitors. Extract: word count, H2s, inputs, unit toggle, actions (copy/share/print),
tables/lists, FAQs, author, updated date, sources, internal links, schema types, ads, HTML size.

### 7.5 Scoring rubric (0–5 per dimension, total /30; /25 when a tool is JS-only and inputs can't be parsed)
- **Content**: ≥ 600 words · formula · worked examples · ≥ 3 tables/lists · ≥ 4 FAQs (1 pt each)
- **Functionality**: ≥ 2 inputs · ≥ 6 inputs · unit toggle · print/share/copy/download · cost estimate or chart
- **UX**: start at 5; −1 each for ad networks, ≥ 4 ad slots, > 150 words before the tool, HTML > 500 KB, no viewport
- **Trust**: named author · updated date · authoritative source (.gov/.edu/standards) · avg sentence ≤ 20 words · canonical
- **Linking**: ≥ 3 in-content internal links · ≥ 10 · breadcrumbs · descriptive anchors (avg ≥ 12 chars) · ≥ 3 links to other tools
- **Schema**: any relevant type = 2 · + BreadcrumbList · + FAQPage · + WebApplication/SoftwareApplication
Report: `research/<slug>/report.md` (`npm run seo:report -- --slug <slug>`).

### 7.6 Brief (`docs/research/<slug>.md`, ~10 lines)
```
# Brief: <Tool> (`/<slug>/`) · <date> · <YMYL flag if any>
- Primary: "<kw>" (<vol>, KD <kd>) + cluster. Data: research/<slug>/report.md (<competitor scores>).
- Verified: <each fact/figure + the primary source it came from>.
## Gaps beaten
<what our page does that the best competitor doesn't>
## Test cases
<hand-calculated inputs → expected outputs used in e2e tests>
```

### 7.7 Self-score
Serve the built site locally (`cd out && python3 -m http.server 4173`), run `npm run seo:self -- --slugs <slugs>`
(writes `research/SELF-SCORE.md`), then re-run without `--slugs` to restore the full report. The page should beat
the best competitor's percentage. If it doesn't, add **genuine** value (a missing feature, a verified source, a
chart, a clearer table); never pad text or game the scorer.

### 7.8 When to skip a tool
If the core numbers can't be verified from a reachable primary source (official tables, standards, papers),
don't publish guesses. Mark it skipped/deferred with the reason, or ask the owner to allow the source host.

---

## 8. Phase 8 — Writing rules (every page)

- Answer first; then how to use; formula; worked example with the defaults; decision help; FAQ.
- Every number in the copy must match what the calculator outputs for the same inputs (test it).
- Sources: link only URLs you verified exist (search or fetch them). Prefer .gov, standards bodies, PubMed, official PDFs.
- Health/finance: add scope and safety notes (who it's not for, "not medical/tax advice", see a professional when …).
- No AI tells: no "it's not X, it's Y", no "In today's fast-paced world", no triple-adjective lists, no hype.

---

## 9. Phase 9 — QA gate (all must pass before commit)

### 9.1 Commands
`npm run lint` (type-check) · `npm run build` · full e2e suite (desktop + mobile projects) with `--trace off`.

### 9.2 Tests to have (Playwright on the built static site)
- **SEO per page**: status 200; exactly one H1; title ≤ 60 chars; meta description 140–160; absolute self canonical;
  JSON-LD parses and includes BreadcrumbList + WebApplication + FAQPage; ≥ 5 FAQs; ≥ 3 internal links in the
  article; "Last updated" present; byline links to the author page; page in sitemap.
- **Links**: every internal href resolves (no 404s); related block = 6 and inbound ≥ 3 (§5.3).
- **Functional per tool**: hand-verified expected outputs for defaults and 2–4 other cases (from the brief).
- **Mobile**: no horizontal overflow at 390 px; no console errors.

### 9.3 Visual check
Screenshots at 1366 px desktop and 390 px mobile (light + dark if supported); look at every new/changed page.

---

## 10. Phase 10 — Ship and report

1. Work on the session branch; commit with a clear message listing new/changed pages and any edits to live pages.
2. Push; merge to production only with the owner's approval (or standing approval) and only when §9 is green.
3. Batch report (every batch ends with):
   - What changed per page and why.
   - **Competitors we beat**: per tool, the researched competitors with scores and what our page does better.
   - Skipped/deferred items with reasons; decisions needed from the owner.
   - Totals (pages restructured / remaining) and the category counts.
4. Owner: in GSC, URL Inspection → Request indexing for changed URLs (≤ 10/day), resubmit the sitemap.

---

## 11. Phase 11 — After publishing (measure and iterate)

- At 14 and 28 days per batch, from GSC: impressions, average position, CTR per page.
  - CTR < 2 % at position ≤ 10 → rewrite the title/meta description (keep the primary keyword first).
  - Position 11–30 → add missing sub-questions from the Queries report, more worked examples, more internal links in.
  - No impressions → check indexing (Pages report), canonical, internal links in, and intent match.
- Off-page (owner + Claude drafts): earn links with the tools that genuinely beat competitors (useful for students,
  teachers, finance/fitness communities, resource pages). No paid links, PBNs or link exchanges; paid placements
  must be `rel="sponsored"`.
- Keep a changelog (`docs/seo-changelog.md`): date, pages changed, what, why — so ranking moves can be traced.
