# SolvePilot operating manual

This is the primary instruction file for every coding session working on `qasimkdr/Tools-site`. Read it completely before inspecting large source files or making changes. Follow the nearest additional `AGENTS.md` if a subdirectory gains one later.

## 1. Product and ownership

- Product: **SolvePilot**
- Production domain: `https://solvepilot.xyz/`
- Repository: `qasimkdr/Tools-site`
- Main branch: `main`
- Owner, author and reviewer: **Mohammad Qasim**
- Purpose: useful, free tools and practical guides for Pakistan and global visitors.
- Growth goal: sustainable organic traffic through genuinely functional long-tail tools, strong content, internal topic clusters and trustworthy methodology.
- Hosting: Render. Pushing `main` may trigger production deployment, so never push a failing build.
- Framework: Next.js, TypeScript and static export. Pages must remain crawlable without client-side navigation.

## 2. Start every session efficiently

Do not read the entire repository. Use this order:

1. Read this file.
2. Run `git status --short --branch` and preserve unrelated changes.
3. Read only the catalog, route, component and validator relevant to the requested phase.
4. Search existing slugs, titles and keyword intent with `rg` before proposing or adding anything.
5. Run `npm run typecheck` during implementation and `npm run build` before committing.

Useful commands:

```bash
rg --files app components lib scripts
rg -n "slug:|title:|keywords:" lib
rg -n "globalTools|tools|pdfTools|documentTools|imageTools|mediaTools|generatorTools" app components lib
npm run typecheck
npm run build
```

Prefer focused searches and small excerpts. Never repeatedly load large catalogs when a slug or symbol search answers the question.

## 3. Current project snapshot

Update this section whenever a completed phase changes counts or architecture.

Last verified: **25 September 2026**

| Collection | Source catalog | Public route | Pages |
|---|---|---|---:|
| Pakistan calculators | `lib/tools.ts` | `/pk/tools/[slug]/` | 181 |
| Global calculators | `lib/global-tools.ts` plus focused catalogs | `/tools/[slug]/` | 72 |
| PDF tools | `lib/pdf-tools.ts` | `/pdf-tools/[slug]/` | 14 |
| Document and data tools | `lib/document-tools.ts` | `/document-tools/[slug]/` | 25 |
| Image tools | `lib/image-tools.ts` | `/image-tools/[slug]/` | 13 |
| Video, audio and subtitle tools | `lib/media-tools.ts` | `/media-tools/[slug]/` | 16 |
| Archive and compressed-file tools | `lib/archive-tools.ts` | `/archive-tools/[slug]/` | 6 |
| Generator tools | three focused generator catalogs | `/generator-tools/[slug]/` | 48 |
| Guides | guide catalog in `lib/` | `/guides/[slug]/` | 25 |

The production build currently generates **423 static pages**. The content gate recognizes **181 Pakistan calculators, 72 global calculators, 48 Phase 6 generators, 20 new archive/data/subtitle tools and 25 guides**.

Completed major phases include Pakistan calculator expansion, global calculators, Phase 5A browser file tools, Phase 6 generators and the 25-tool global finance expansion.

The 25 September file expansion checked 25 requested ideas, reused five existing converters and added 20 unique pages: six archive tools, five Excel tools, six structured-data converters and three subtitle tools. Their processors live in `components/ArchiveTool.tsx`, `components/DocumentTool.tsx` and `components/MediaTool.tsx`; shared long-form guidance is supplied by `components/FileToolEditorial.tsx`.

## 4. Architecture and sources of truth

### Catalogs

- `lib/tools.ts`: Pakistan calculator definitions.
- `lib/global-tools.ts`: global catalog aggregator and original global tools.
- `lib/global-finance-tools.ts`: earlier global finance collection.
- `lib/global-finance-expansion.ts`: 25-tool finance expansion added 25 September 2026.
- `lib/pdf-tools.ts`: PDF utilities.
- `lib/document-tools.ts`: document and structured-data utilities.
- `lib/image-tools.ts`: image utilities.
- `lib/media-tools.ts`: video, audio and subtitle utilities.
- `lib/archive-tools.ts`: ZIP creation, extraction, protection and archive-conversion utilities.
- `lib/generator-tools.ts`: QR, barcode and business-document generators.\n- `lib/productivity-tools.ts`: career and student/office generators.\n- `lib/creator-tools.ts`: social and creator generators.\n- `lib/ecommerce-tools.ts`: global E-commerce and Ads calculators.

### Calculator system

- `components/Calculator.tsx`: shared interactive calculator shell.
- `components/calculators/defaults.ts`: initial field values by slug.
- `components/calculators/types.ts`: shared resolver contracts.
- `components/calculators/*.ts`: calculation logic grouped by domain.
- A tool is incomplete if it has content but falls through to the generic percentage resolver.

### Routes and discovery

- `app/pk/tools/[slug]/page.tsx`: Pakistan calculator pages.
- `app/tools/[slug]/page.tsx`: global calculator pages.
- Each file-tool collection uses its own dynamic `[slug]` route.
- `app/sitemap.ts`: sitemap source.
- `components/Header.tsx`: searchable site index.
- `app/page.tsx`: homepage category discovery.
- Collection `page.tsx` files: tool directories and category navigation.

### Quality and trust

- `scripts/validate-content.mjs`: generated-output quality gate.
- `lib/seo-metadata.ts`: SEO description handling.
- `lib/flagship-content.ts`: richer tool-specific interpretation modules.
- `/editorial-policy/`, author, about, contact, privacy, cookies, terms and disclaimer pages provide trust information.

Do not create individual hand-written route files when a catalog plus dynamic route already owns that content type.

## 5. Duplicate and cannibalization prevention

Before approving or building a tool:

1. Search all catalogs for its proposed slug, title and close synonyms.
2. Compare search intent, inputs, formula and expected output—not only the name.
3. Check Pakistan-specific and global collections. A global version is allowed only when it removes local assumptions and serves a distinct international query.
4. Do not publish two pages that answer the same user question with only wording differences.
5. Prefer one stronger tool with modes or comparisons when two ideas share the same intent.
6. If an existing page can satisfy the query through a meaningful upgrade, improve it instead of creating another URL.
7. Never remove existing tools or content merely to add a phase unless explicitly requested.

Every accepted tool needs a unique slug, primary keyword, user problem, calculation or transformation, and result presentation.

## 6. Keyword-selection standard

Research is required before large future phases. Recommendations are hypotheses until verified with current data.

Preferred targets:

- Global keyword difficulty around **KD 0–15**.
- Global monthly volume of at least **100** when reliable data is available.
- Traffic potential of at least **200** when reliable data is available.
- Clear tool, informational or transactional intent.
- A SERP where a genuinely better interactive result can compete.
- Strong SolvePilot relevance and internal-link potential.
- Evergreen or repeat-use demand rather than a short-lived novelty.

Do not fabricate Ahrefs volume, difficulty or traffic potential. Record exact metrics only when retrieved from Ahrefs or another named current source. A high-volume keyword with dominant authoritative results may be worse than a lower-volume long-tail query with weak tools.

Prioritize functional pages when users expect to calculate, convert, generate, inspect, edit or download something. Use guides when the query primarily needs explanation, comparison or a process.

## 7. Mandatory standard for every future tool page

### Functionality

- A dedicated stable URL.
- A real working tool—not a mock interface, generic percentage fallback or content-only page.
- Sensible defaults that demonstrate the tool immediately.
- Labels, units, validation and result notes that match the formula.
- Mobile usability and accessible labels.
- No server upload when the page claims local processing.
- Honest technical limits for browser memory, file types, precision and compatibility.

### Unique SEO content

- At least **900 useful rendered words** for every new tool page.
- Content must be useful and relevant; never pad with repeated filler.
- Unique title, H1, meta description and primary keyword.
- Meta descriptions should normally render between 110 and 160 characters.
- Unique introduction, methodology, formula, worked example, instructions, factors, mistakes, verification guidance and FAQs.
- Explain what the result means, not just how to press the button.
- Avoid mass-produced paragraphs that merely replace a tool name.

### Required sections

- Direct explanation near the top.
- How to use the tool.
- Formula and methodology.
- Worked example.
- How to interpret the result.
- Scenario or comparison guidance where appropriate.
- Factors affecting the result.
- Common mistakes.
- Privacy and data-processing explanation.
- Accuracy and verification guidance.
- Limitations and responsible-use disclaimer.
- Sources or review information.
- At least five useful FAQs.
- Three to five genuinely related internal links.

### Metadata

- Self-referencing canonical URL.
- Unique page title and meta description.
- Complete Open Graph tags: `og:title`, `og:type`, absolute `og:image` and absolute `og:url`.
- Meaningful OG image and alt text.
- Reviewed or updated date.
- Author/reviewer attribution where supported.

### Structured data

Include relevant valid JSON-LD:

- `WebApplication` for interactive tools.
- `FAQPage` matching visible FAQs.
- `HowTo` matching visible steps.
- `BreadcrumbList` matching visible navigation.
- `Article` only for genuine editorial articles or guides.

Structured data must describe visible content. Never add ratings, reviews or claims that are not present and supported.

### Discovery integration

A new page is incomplete until it is:

- Generated by its dynamic route.
- Listed in the correct directory/category.
- Included in `app/sitemap.ts` through its catalog.
- Included in header search through its catalog.
- Counted on the homepage/category card where applicable.
- Linked from related pages.
- Covered by the content validator.

## 8. Finance-tool requirements

- Global tools must be currency-neutral. Use labels such as `currency`, not PKR, USD or another assumed currency.
- Never silently load a tax rate, exchange rate, provider fee, withdrawal rule or legal threshold.
- Clearly distinguish nominal and effective rates, gross and net values, monthly and annual periods, and calendar and business days.
- Explain compounding and payment timing where relevant.
- Results are educational estimates, not financial, investment, credit, accounting, tax or legal advice.
- Ask users to verify statements, contracts, provider disclosures and local rules.
- Do not promise returns, approval, eligibility, savings or a safe withdrawal outcome.

The 25-tool global finance expansion contains:

1. Debt Snowball vs Avalanche Calculator
2. Credit Card Minimum Payment Calculator
3. Credit Card Payoff Calculator
4. Credit Card Utilization Calculator
5. Investment Fee Calculator
6. Inflation-Adjusted Return Calculator
7. Dollar-Cost Averaging Calculator
8. Lump Sum vs DCA Calculator
9. Coast FIRE Calculator
10. FIRE Number Calculator
11. Savings Rate Calculator
12. Dividend Reinvestment Calculator
13. Portfolio Rebalancing Calculator
14. Capital Gains Calculator
15. Tiered Commission Calculator
16. Prorated Salary Calculator
17. Pay Raise Percentage Calculator
18. Overtime Pay Calculator
19. Invoice Due Date Calculator
20. Net 30/60/90 Date Calculator
21. Invoice Discount Calculator
22. Freelance Project Profit Calculator
23. SaaS Pricing Calculator
24. Debt Service Coverage Ratio Calculator
25. Merchant Processing Fee Calculator

## 9. Browser file-tool requirements

- Preserve the privacy promise: selected files stay on the device unless upload behavior is explicitly disclosed.
- Only claim support for formats the implementation genuinely processes.
- Keep the original file unchanged and produce a separate download.
- Explain size and memory constraints, especially on mobile.
- Provide progress and error states for expensive operations.
- Tell users to keep a backup and review output.
- Never claim to recover unknown passwords, bypass rights protection, repair every corrupted file or guarantee forensic metadata removal.
- File tools require unique content and the same 900-word, metadata, schema, internal-link and discovery standards as calculators.

Existing collections cover PDF, DOCX/document/data, image, video, audio, subtitle and generator workflows. Check those catalogs before proposing ZIP, spreadsheet, archive, subtitle or conversion utilities.

## 10. Guide and article standard

- Target **1,200–2,000 useful words** for substantial guides.
- Give a direct answer or summary near the top.
- Use an original structure, tables and worked examples where useful.
- Cite current official or primary sources for changing rules, prices, taxes, standards or technical claims.
- Display author/reviewer information and published/updated dates.
- Include limitations and a responsible-use disclaimer.
- Link to the relevant calculator and at least three to five related tools or guides.
- Include useful FAQs and Article/Breadcrumb schema where appropriate.
- Avoid unsupported claims, copied wording and generic filler.

## 11. Content integrity and AdSense safety

- Functionality and user value come before page count.
- Never publish broken, empty, placeholder or “coming soon” pages.
- Do not make misleading financial, health, legal, tax or earnings promises.
- Avoid scraped, spun, copied or near-duplicate content.
- Do not add intrusive overlays, forced redirects, deceptive download buttons or ads that imitate controls.
- Keep ads clearly separated from inputs, results and download actions.
- Reusing a brand-level OG image is acceptable, but do not insert the same visible article image repeatedly merely to increase page length.
- Preserve privacy, contact, editorial, author, disclaimer, terms and cookie information.

## 12. Implementation workflow

For every phase:

1. Inventory existing tools and reject duplicates.
2. Finalize unique slug, title, intent, category and primary keyword.
3. Add catalog definitions with unique descriptions, formulas, examples, instructions, limitations and FAQs.
4. Implement actual calculator or processor logic.
5. Add realistic defaults and verify every visible field affects the result as described.
6. Ensure the dynamic route supplies metadata, schema and content sections.
7. Confirm directory, homepage, search, sitemap and internal-link discovery.
8. Extend validation counts and quality rules without weakening existing rules.
9. Run type checking early.
10. Build the full static site.
11. Inspect representative generated pages and every newly added slug programmatically.
12. Commit only after all gates pass.
13. Push only when authorized and the branch is safe.

When a phase is large, divide implementation into catalogs, calculation logic and validation, but do not call it complete until they work together.

## 13. Validation requirements

Required before every functional or content commit:

```bash
npm run typecheck
npm run build
git diff --check
```

The production build runs `scripts/validate-content.mjs`. Never reduce thresholds or remove checks merely to obtain a green build.

For every new phase additionally verify:

- Added slug count equals the requested count.
- Every slug is unique across relevant catalogs.
- Every page exists under `out/` after export.
- Every new URL appears in `out/sitemap.xml`.
- Canonical and Open Graph URLs are absolute and correct in generated HTML.
- Required JSON-LD types exist.
- Rendered word count satisfies the threshold.
- No escaped `${...}` placeholders appear.
- Header search can find the title and keyword.
- Representative default calculations return sensible results.
- Date tools use real date inputs and file tools use correct accepted formats.

If validation finds a defect, fix the implementation. Do not hide it by changing the test.

## 14. Code-quality rules

- Follow existing TypeScript and React patterns.
- Reuse catalog-driven pages and shared components.
- Keep calculations deterministic and side-effect free.
- Guard division by zero, negative periods, impossible rates and runaway simulations.
- Cap iterative simulations so malformed input cannot freeze the browser.
- Use descriptive labels and notes rather than unexplained numbers.
- Avoid a dependency when a small, reliable implementation already exists.
- Never expose secrets, credentials or private environment values.
- Preserve accessibility and responsive behavior.
- Do not silently change unrelated tools during a phase.

## 15. Git and deployment safety

- The worktree may contain user changes. Never discard them with reset, checkout or destructive cleanup.
- Review `git status` before and after work.
- Stage only task-related files.
- Use focused commit messages such as `feat(finance): add 25 global calculators`.
- Do not amend or rewrite user commits unless explicitly requested.
- Never force-push.
- Push `main` only after successful typecheck/build/validation and user authorization.
- After pushing, verify the remote commit and, when requested, Render deployment health.
- A push is not proof that production deployed; report these as separate states.

## 16. Documentation and state maintenance

This file must let a fresh session continue without rereading old conversations.

After each completed phase update:

- Project snapshot date and page counts.
- New catalog/component ownership.
- Completed phase summary.
- Any permanent content or validation rule.
- Exact validator expectations when counts change.
- Major future candidates only after duplicate and keyword review.

Do not paste every page’s full content here. Keep exact tool data in its catalog and record only phase lists, ownership and durable decisions. This preserves context while limiting token use.

## 17. Decision rules for future suggestions

- Suggest coherent clusters, not random unrelated pages.
- Prefer tools people repeatedly need for money, work, files, education, business or technical tasks.
- Balance demand, competition, feasibility, privacy and internal-link potential.
- Browser-only tools are preferred when reliable and honest.
- Reject tools requiring unavailable live data, licensed datasets or expensive APIs unless the user approves cost and dependency.
- Do not claim a downloader supports a platform when its terms, DRM or controls make that unreliable or inappropriate.
- Research current SERPs and keyword data before promising traffic.
- Traffic is never guaranteed; evaluate impressions, indexing and rankings after publishing, then improve pages from evidence.

## 18. Definition of done

A tool or phase is complete only when:

- The tool works.
- Search intent is unique.
- Content and metadata meet the standard.
- Schema reflects visible content.
- Privacy, accuracy and limitations are explained.
- The page is discoverable from directory, search, internal links and sitemap.
- Automated validation and production build pass.
- Counts and this manual are updated.
- Changes are committed and pushed when authorized.

If any item is missing, report the phase as incomplete rather than describing it as finished.
