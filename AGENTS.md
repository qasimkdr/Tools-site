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

Last verified: **6 October 2026**

| Collection | Source catalog | Public route | Pages |
|---|---|---|---:|
| Pakistan calculators | `lib/tools.ts` | `/pk/tools/[slug]/` | 181 |
| Global calculators | `lib/global-tools.ts` plus focused catalogs | `/tools/[slug]/` | 355 canonical + 5 noindex aliases (360 generated) |
| PDF tools | `lib/pdf-tools.ts` | `/pdf-tools/[slug]/` | 14 |
| Document and data tools | `lib/document-tools.ts` | `/document-tools/[slug]/` | 25 |
| Image tools | `lib/image-tools.ts` | `/image-tools/[slug]/` | 13 |
| Video, audio and subtitle tools | `lib/media-tools.ts` | `/media-tools/[slug]/` | 16 |
| Archive and compressed-file tools | `lib/archive-tools.ts` | `/archive-tools/[slug]/` | 6 |
| Generator tools | three focused generator catalogs | `/generator-tools/[slug]/` | 48 |
| Guides | guide catalog in `lib/` | `/guides/[slug]/` | 45 |

The production build is expected to generate **731 static pages** after the verified-gap batch of 6 October 2026. The content gate recognizes **181 Pakistan calculators, 355 indexable global tools (360 generated routes including five noindex canonical aliases), 48 Phase 6 generators, 20 archive/data/subtitle tools and 45 guides**. There are **722 canonical sitemap URLs** and **703 tool/guide profiles**. All 489 unique workbook rows have been reviewed; **351 scoped rows (71.8%)** are completed, while 138 remain outside the completed count. These counts do not establish indexing or search positions.

The roadmap ranks 69–85 are covered by six new canonical calculators and eleven keyword upgrades/merges into existing relevant pages. Rank 68, “Login Calculator,” is deferred because its mapped “ug calculator” query has mixed unrelated search intent and does not support a reliable, accurate login calculator page.

The 2 October SolvePilot 50 Tools Daily SEO Roadmap batch covers ranks 86–105. It adds 17 canonical global calculators in `lib/semrush-roadmap-86-105-tools.ts` and calculator logic in `components/calculators/semrush-phase-one-b.ts`. Rank 93 merges into the existing prorated salary tool; rank 102 expands the existing one-rep-max page to bench, squat and deadlift; rank 104 adds river-rock intent to the gravel/stone estimator. Rank 105's visceral-fat query is a distinct output and receives its own sourced estimate page. The workbook's rank 98 “Mango+calculator” and rank 364 “Calculator+mango” rows have no sufficiently clear calculator intent, so they remain unbuilt pending a corrected query; do not invent a tool or include those phrases as metadata. The height page explicitly uses the mid-parental estimate and does not claim to implement Khamis–Roche without its age-specific coefficient table. The validator checks the new routes, formulas' resolver coverage, metadata keywords, audit content, sitemap, directory discovery and internal links. The expected static export is 526 pages, with 160 canonical global calculators and five noindex aliases.

The ranks **106–125** batch adds 15 global routes in `lib/roadmap-106-125-tools.ts`, with resolver logic in `components/calculators/roadmap-106-125.ts`. Existing Tile Quantity, Linear Feet, Pay Raise, AP Statistics, Interest Rate, Wall Stud and AP Chemistry URLs are upgraded instead of duplicated. CD and FD use one interest/deposit engine, with nominal and APY modes. Surface area separates geometry from BSA and roof geometry; volume supports box, cube, cylinder, cone, sphere, tube and pond modes. The mistakenly clustered baby-percentile term receives a WHO weight-for-age page limited to exact monthly points 0–24 and |z|≤3; it does not claim gestational-age birthweight percentiles. WHO monthly LMS data are bundled with source provenance in `lib/who-weight-for-age.ts`. PT-141 is an approved Vyleesi frequency-label check, not dosing or reconstitution advice. Blood pressure uses adult categories rather than fabricated age-based normals. Arrow speed uses measured distance/time and explicitly does not implement an IBO correction model. Missing diagrams, perimeter-only area and survey boundaries are recorded as requiring additional information. Every exact workbook keyword is tracked with its destination and scope in `lib/roadmap-106-125-keywords.ts`; preserve these method boundaries in future work. Expected export: 541 pages, 175 canonical global tools plus five noindex aliases.

Completed major phases include Pakistan calculator expansion, global calculators, Phase 5A browser file tools, Phase 6 generators and the 25-tool global finance expansion.

The 29 September Semrush Batch 1B expansion completes the first 50 roadmap targets by adding 30 global calculators, upgrading existing Mortgage Payment, Work Hours and Overtime pages, consolidating duplicate Air Force PT, hourly-pay and date-addition routes as noindex canonical aliases, and replacing the malformed `finance finance calculator` candidate with the next valid Scientific Notation Calculator opportunity. The Hypotenuse URL is also retained as a noindex alias of the Right Triangle solver, which now supports legs, hypotenuse-plus-leg, and leg-plus-angle modes. Definitions live in `lib/semrush-phase-one-b-tools.ts` and logic in `components/calculators/semrush-phase-one-b.ts`. The validator checks all first-50 canonical pages, aliases, sources, schema, sitemap, directory discovery and internal links.

The 29 September Semrush Batch 1A expansion added 16 new global calculators and upgraded the existing Discount Calculator, covering the first 17 roadmap targets without duplicate intent pages. New definitions live in `lib/semrush-phase-one-tools.ts` and logic in `components/calculators/semrush-phase-one.ts`. Payment includes separate loan and annuity modes and links to existing mortgage, card-payoff and extra-payment tools. Interest-rate supports rate-solving and savings-growth modes. Ratio and Sand clusters exclude unrelated terms. The Army page follows the July 2026 WHtR policy rather than the obsolete tape/body-fat formula; AP World uses current section weights without inventing an unofficial 1–5 cutoff.

The 29 September education expansion added one consolidated College Admission Chances Calculator for the verified college-chance, acceptance-simulator and admission-predictor keyword cluster. Its definition lives in `lib/global-education-tools.ts`; duplicate pages for keyword variants are prohibited.

The 29 September Semrush Phase 1–2 expansion consolidated low-KD finance queries into six new global calculators, upgraded the existing Credit Card Payoff Calculator, and added ten distinct auto-finance guides. Tool definitions live in `lib/seo-finance-tools.ts`, calculator logic in `components/calculators/seo-finance.ts`, and editorial guides in `lib/auto-finance-guides.ts`. Close keyword variants must continue to target these canonical pages rather than new duplicate URLs.

The 1 October ratio-keyword expansion keeps the ratio calculator, ratio scale, ratio simplification, equivalent-ratio solving, ratio/fraction conversion and ratio/percentage conversion on the canonical `/tools/ratio-calculator/` page. Its real modes live in `components/calculators/semrush-phase-one.ts`; intent coverage and scenarios live in `lib/semrush-batch-one-audit.ts`. The existing `/tools/proportion-calculator/` URL remains as a noindex canonical alias of Ratio Calculator. Aspect-ratio image/video resizing remains a separate intent on the existing `/tools/aspect-ratio-calculator/` page, now with both width-from-height and height-from-width modes. Do not create separate thin URLs for the ratio keyword variants.

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
- `lib/generator-tools.ts`: QR, barcode and business-document generators.
- `lib/productivity-tools.ts`: career and student/office generators.
- `lib/creator-tools.ts`: social and creator generators.
- `lib/ecommerce-tools.ts`: global E-commerce and Ads calculators.

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

### Explicit calculation interaction — permanent rule
All mathematics calculators must keep displayed results unchanged while users edit inputs. Calculate runs only when the user clicks **Calculate result**. The initial state prompts for a click instead of calculating the defaults. New calculators must use the shared submitted-results state; never call `config.calculate()` during rendering or initialization. Apply the same interaction to future tools. Verify that editing a field leaves the last submitted result visible and clicking Calculate updates it.

Batch verification commands: `npm run verify:roadmap106` checks real formulas, shape modes, invalid-input boundaries and all 50 WHO monthly median lookups. `npm run verify:calculate` exercises the shared component’s actual callbacks and persistent state without a browser binary; it checks initial click gating and unchanged output while editing. Full browser QA was unavailable in the managed environment because the Chromium download returned an invalid archive. Typecheck and static-export/content gates remain required.

The ranks **126–145** batch covers all 20 roadmap targets: 11 new canonical global calculators, seven upgraded existing calculator URLs covering eight ranks, and one Canon LS-154TG product-intent guide. Exact workbook terms and scope are in `lib/roadmap-126-145-keywords.ts`; retain every destination in future work. Running Pace adds cumulative even splits, Interest adds simple interest, and AP/mare keywords reuse existing pages. Greek gematria is Greek isopsephy only; partial fractions accept monic denominators supplied as at most six real linear roots; implicit differentiation accepts bounded polynomials only. Calories use sourced adult METs and measured-cadence walking steps. Lighting uses supplied lumen-method factors; fence embedment is planning, not engineering. PTO projects a fixed accrual/cap model. Canon seller code is not asserted to be a verified manufacturer part number. New math tools preserve the Calculate-button policy. Expected current export: 553 pages, 186 canonical global calculators plus five aliases, and 36 guides. `npm run verify:roadmap126` checks the actual new resolver and its arithmetic/parser boundaries.

The ranks **146–165** batch covers all 20 targets and 21 exact workbook queries in `lib/roadmap-146-165-keywords.ts`. Nine new global tools live in `lib/roadmap-146-165-tools.ts` with logic in `components/calculators/roadmap-146-165.ts`: Epoxy Resin, Molarity, Garage Door Spring ideal torque, Lawn Mowing Cost, Quarter Mile, Firewood Cords, Nether Portal coordinates, ARV, and Breastfeeding general calorie addition. Eight existing URLs are upgraded: Ohms/Watts/Amps, AP English Language, USAF chart-point total, Business Break-Even, Seller Financing, Cubic Yard, Retirement Savings Runway, and Sales Tax/VAT. The two quarter-mile ranks merge into one canonical calculator. Epoxy ratios are by volume only; molarity uses final solution volume. Garage torque is not spring sizing or winding advice. Quarter-mile outputs are a disclosed empirical correlation. Nether conversion does not guarantee linking. ARV is equal-weight comparable price/area arithmetic, not appraisal or a bid recommendation. Breastfeeding adds CDC's 330–400 kcal general increment to an existing reference; no individual diet, deficit, milk-supply or feeding-percentage model is provided. Exact branded Nemin query coverage clearly states independence. Generic tax query coverage is limited to user-rate sales tax/VAT, not universal income tax.

Two new guides in `lib/roadmap-146-165-guides.ts` cover prescription-to-20/20 and LRI clinical-resource intent. No prescription-to-acuity prediction or surgical nomogram is fabricated. The eye guide embeds a measured-Snellen notation converter with its own WebApplication schema and the same click gating; it never uses diopters as acuity inputs. LRI guide links the licensed clinical provider and produces no incision parameters. Medical editorial review is explicitly distinguished from clinician/specialist review. Guide data supports optional embedded calculator fields.

Current expected export: **564 pages**, **195 canonical global calculators plus five aliases**, **38 guides**. `npm run verify:roadmap146` checks the actual resolver, four chemistry modes, AC/DC conversions, balloons, inflation, coordinates and invalid inputs. All new tools are required to receive contextual inbound links. `npm run build` now calls `scripts/prepare-static-build.mjs` to clear only generated `.next` and `out` directories before building; the managed Next runtime otherwise reused stale exported routes despite generating new ones. Preserve this fresh-export check for future catalog changes.

The ranks **166–185** batch covers all 20 ranks and **49 exact matching workbook queries** in `lib/roadmap-166-185-keywords.ts`. Ten new canonical global pages live in `lib/roadmap-166-185-tools.ts`: VPD/Relative Humidity, Goat Gestation, Gas/Oil Mix, Nutrition Macros, Macroeconomics GDP, Vinegar Protocol Scaling, Integer Radical Expression Simplifier, Redacted Text, Wedding Liquor, and educational ABG Arithmetic. Eight existing URLs are upgraded: Mean/SD/SEM, Soil/Loam, Margin/Markup, Lease vs Buy, Aspect Ratio, AP Chemistry (two ranks), Retirement Runway, and Dog Pregnancy. VPD and RH share modes; wedding word-order variants share one page. Macroeconomics is split from the incorrectly clustered nutrition queries. No rank is omitted and no duplicate keyword-only URL is added.

The actual resolver is `components/calculators/roadmap-166-185.ts`. VPD uses FAO liquid-water pressure arithmetic at 0–50 °C and preserves negative leaf deficits; no crop target is prescribed. Goat dates use a 150-day center and 145–155-day window; dog dates distinguish breeding from veterinarian-established ovulation. Fuel ratios are verified gasoline:oil volume ratios with explicit gallon definitions. Nutrition allocates supplied kcal with 4/4/9 energy factors; no TDEE, diet prescription, sex-based multiplier or outcome prediction is made. GDP is supplied consistent expenditure-identity arithmetic, not a live economic forecast or additive chained-real series. Vinegar scales an independently verified protocol volume/acidity basis only: no universal mL-per-ppm nitrate dose or safety recommendation is fabricated. Its zero default does not suggest a starting dose.

Radicals support up to 20 bounded integer square-root terms and constants, with no eval, variables or general CAS. ABG displays uncorrected anion gap and a Henderson–Hasselbalch pH comparison only, with no diagnosis, compensation classification, treatment recommendation or claimed clinician validation. SD uses stable Welford accumulation and separately labels sample SEM. Loam density is supplied, not assumed. Lease/buy retains a documented 36-month horizon and now includes remaining purchase debt, resale and explicit extra costs. Decimal aspect ratios are not rounded into fictitious integer reductions.

`components/RedactedTextTool.tsx` and `lib/text-redaction.ts` provide local literal replacement and a separate reviewed TXT download; the processor is integrated through the existing global dynamic route. No automatic PII detection, PDF-object redaction or anonymity guarantee is claimed. Source edits retain the last generated copy until Generate is clicked; Clear empties interface state. Audit related links support optional explicit paths for relevant generator/document resources.

Current expected export: **574 pages**, **205 canonical global tools plus five aliases**, **38 guides**. `npm run verify:roadmap166` exercises the actual formulas, humidity modes, date bases, pricing/equity, bounded parser, literal replacement and invalid inputs. `npm run verify:redaction` checks the real text-component callbacks and the actual downloaded Blob contents. `npm run verify:calculate` checks all new mathematics and upgraded interactive modes remain click-gated. All ten new pages require at least 900 rendered words, matching schema, sitemap/directory integration and contextual inbound links; preserve all earlier quality gates.


### Roadmap ranks 186–205 — completed 3 October 2026
All 20 ranks and **99 exact workbook matching queries** are mapped in `lib/roadmap-186-205-keywords.ts`. Seven new canonical calculators are defined in `lib/roadmap-186-205-tools.ts`: Percent, Mulch, Concrete Block count, Basis Points, Rounding, Tire Size and Anniversary. Eleven existing canonical URLs are upgraded for Bowling, AP World, independent Myusfinance-name payment intent, Radicals, Can/Recessed Lights, Anion Gap/ABG, VOO/Compound Interest, Dog Due Date, Grade Curve, Soil Yards and AP Lang. Do not create extra URLs for their close variants.

Two guides in `lib/roadmap-186-205-guides.ts` cover Military PT test selection and BPC-157/TB-500 blend evidence. Military embeds a total of supplied official points/maxima; it does not invent raw-event charts or pass rules. The peptide guide supplies no dose, reconstitution, injection or stacking model. Regulatory listing/nomination is not asserted to be product approval or a universal legal status. Related chemistry and measurement tools are not dosing substitutes. Editorial review is not specialist clinical review.

Logic lives in `components/calculators/roadmap-186-205.ts`. RPD explicitly uses the mean of two non-negative values; change uses a positive original baseline. Percent modes include reverse, duration and nested percentages; examination percentages do not imply board grades. Rounding uses exact BigInt decimal text, explicit halfway rules and significant-figure carry handling. Tire output is nominal metric geometry, not Tacoma fitment or retailer affiliation. Anniversary uses user-selected February 29 observation and Gregorian calendar dates. Basis points are currency-neutral financial arithmetic, not pay scales. Compound interest now supports end-of-month contributions and nominal/effective annual bases, without hidden VOO returns, distributions, taxes or fees. Grade Curve preserves the existing additive highest/mean methods and adds linear z-score rescaling; it does not create a Gaussian distribution. All shared tools retain click-to-calculate interaction.

Current expected export: **583 pages**, **212 canonical global tools plus five noindex aliases (217 routes)** and **40 guides**. `npm run verify:roadmap186` checks actual formula modes, exact rounding ties/carry, date boundaries, finance conventions, legacy grading behavior and related destinations. The content gate requires all 99 exact keywords, nine new destinations, original audits, useful word counts, five FAQs, schema and contextual inbound links.

### Sitemap and indexing checks — 3 October 2026
The pre-push live sitemap returned HTTP 200, valid XML and 565 unique URLs; robots pointed to the apex sitemap and did not block crawling. Googlebot user-agent requests also returned the same XML, which does not establish actual Googlebot IP access or explain a historical Search Console fetch failure. No IndexNow code exists in this checkout. Do not reintroduce it as a Google indexing fix or claim a submission guarantees crawling/ranking.

A stronger full-export sitemap gate found and fixed inherited homepage canonicals on Contact, Privacy, Cookies and Terms. This was a canonical indexing inconsistency, not demonstrated evidence of a transport fetch failure. `lib/site-url.ts` normalizes origin trailing slashes and rejects path/query/credential configuration. `npm run build` now checks every sitemap URL against its exported self-canonical, rejects noindex entries, duplicates, missing targets, malformed host/path and invalid/future dates, enforces protocol limits and validates robots discovery. The current build sitemap contains 585 canonical URLs after ranks 206–225. `python3 scripts/check-live-sitemap.py` diagnoses live XML, robots, Googlebot user-agent parity and the four fixed page canonicals after deployment; it cannot read Search Console historical errors. Keep fetchability, canonical indexing and completed deployment as distinct observations.


### Roadmap ranks 206–225 — completed 3 October 2026
All 20 ranks and **37 exact matching workbook queries** are tracked in `lib/roadmap-206-225-keywords.ts`. Eight new canonical tools live in `lib/roadmap-206-225-tools.ts`: GC Content, LLC User-Rate Tax Reserve, Wainscoting Layout, Charles’ Law, Manual Crypto Conversion, Minecraft Sphere, Basic Arithmetic and 2025 New Jersey Income Tax. Nine existing pages are upgraded for Percentage Decrease, Horse Gestation, Dog Gestation, Right-Triangle Homework Checks, Firewood, Rucking Calories, Square Feet to Linear Feet, Amps to Watts and Roofing. Three guides cover Bank Model Selection, VCE Study Scores and Breast Implant Selection Limits. Do not create separate URLs for their close matching phrases.

The shared resolver is `components/calculators/roadmap-206-225.ts`. GC uses a multiline textarea to preserve one pasted FASTA record and accepts one DNA/RNA record, counts only A/C/G/T-or-U/N and explicitly separates known-base GC from all-position resolved lower bounds. LLC is a supplied-effective-rate cash-reserve scenario, not an actual federal/state liability or classification election. Charles’ law uses positive Kelvin temperatures and fixed pressure/amount. Crypto uses manual quotes and explicit proportional fees, without live OVO prices or inferred token identity. Provider-name keywords describe independent alternatives, not affiliation. Basic arithmetic uses a bounded recursive parser, four operations, parentheses and literal percent, with no eval or hardware-specific commercial percentage-key behavior.

`lib/minecraft-sphere.ts` and `components/MinecraftSphereTool.tsx` generate diameter 1–64 integer voxel layers. Solid mode tests cell centers against a sphere; hollow mode uses six face neighbors. Layer selection changes only the stored plan’s view, and downloadable CSV contains zero-based offsets, not game commands. Input edits keep the last calculated plan. The shared calculator now supports up to eight optional fields while retaining click-only calculation and submitted-input snapshots. Preserve that behavior for every future tool.

Roofing retains horizontal-plan uniform-pitch geometry and adds supplied package coverage, price per planned square foot, separate costs and an independent rise/run mode. No local price or universal bundle coverage is assumed. Area-to-linear-length requires actual uniform coverage width. Rucking adds published 2024 Adult Compendium categories 17010 (7.0 MET), 17011 (3.5) and 17012 (7.8), using supplied minutes and no invented pack/speed/slope correction. Existing DC/single-phase/balanced-three-phase electrical models retain their labeled voltage and power-factor basis.

`lib/nj-tax-2025.ts` bundles all **2,000 official $50 tax-table rows** from the verified 2025 NJ-1040 instructions, plus official factor/subtraction schedules for taxable income ≥$100,000. The source URL, extraction date and PDF SHA256 are recorded. NJ gross and taxable income are distinct inputs; gross-income thresholds are explicit. This is full-year resident USD arithmetic, not a federal, payroll, part-year or nonresident model. Known credits/payments are supplied; negative balance is not a guaranteed refund. Do not relabel it for later years without verified instructions.

Bank guide embeds fixed-denominator simple-interest arithmetic from supplied days; it does not perform a 30/360 date transformation. Study guide embeds a normalized weighted assessment percentage; it does not predict a VCAA study score, moderation, scaling or ATAR. Breast implant guide has no personalized cc algorithm, cup conversion, sizing recommendation or image analysis. Related measurement pages are not device-selection substitutes; editorial review is not clinical review.

Expected export: **594 pages**, **220 canonical global tools plus five aliases (225 routes)**, **43 guides** and **585 sitemap URLs**. `npm run verify:roadmap206` checks shipped formula modes, all tax rows, official examples/boundaries, voxel counts/symmetry, parser rejections and exact keyword destinations. `npm run verify:sphere` checks actual component callbacks and the exported CSV Blob. `npm run verify:calculate` covers initial click gates, stable outputs and all extra roof-field snapshots. Preserve previous regression and full-export sitemap gates.


### Next 20 eligible destinations after rank 225 — completed 4 October 2026
The selection rule for that batch was to skip an existing calculator updated within the preceding **four days**; the user superseded it with **six days** for all subsequent batches on 4 October 2026. Skip an existing calculator created or updated within that new six-day window and move to another eligible roadmap entry. Upgrade an older existing canonical calculator instead of making a duplicate. Check both per-tool review metadata and calculator-specific git history: inherited dates can be stale, and broad shared-file commit dates alone do not prove a particular calculator changed. Shared contextual navigation links may connect new destinations without resetting an existing tool's reviewed date or changing its calculation/editorial model.

This batch uses **20 unique destinations** covering **21 exact workbook queries/ranks** from 227 through 267; ranks 257 and 258 merge into one Swim Time Converter. `research/roadmap-next20-selection.json` records every inspected row 226–267, the cutoff, recently updated skips, unresolved intent deferrals and exact previous-state evidence for the three eligible upgrades. **Next unreviewed rank: 268.** Do not describe this as all ranks 226–245 completed: several are intentionally skipped or deferred.

Fifteen new canonical calculators live in `lib/roadmap-next20-tools.ts`: Horsepower, Interest Rate Cap Period Payout, Geographic Midpoint, Cake Pricing, Sheep Gestation, Boolean Algebra truth tables, Megawatt unit conversion, two-equation Substitution, Cap Rate, Swim Time Conversion, CPM, Fence Cost, Subwoofer Case Volume, Acres per Hour and Torque Conversion. `components/calculators/roadmap-next20.ts` owns their bounded formulas and the three older upgrades. Existing Asphalt/Pavement, AP Biology and adult/reverse BMI pages are upgraded at their original URLs; their calculator-specific content/logic was older than the cutoff. Mean/SD, Weighted Mean, Bowling, Basis Points, USAF, AP Chemistry, Profit Margin, Molarity, Radicals and the military/peptide clusters remain unselected when recently updated.

`lib/roadmap-next20-keywords.ts` retains exact keyword, volume, KD, CPC, destination and rank from the supplied roadmap. `lib/roadmap-next20-audit.ts` and `lib/roadmap-next20-upgrades.ts` supply original methodology, examples, limitations and contextual links. New money worksheets and asphalt cost are currency-neutral in the real shared UI. The new Boolean component `components/BooleanAlgebraTool.tsx` renders an accessible complete table after explicit submission, preserves the last valid table while editing or rejecting invalid input, and supports at most four variables/16 rows. Boolean is evaluation/classification, not a symbolic minimizer or HDL simulator. Substitution is six numeric coefficients for two real linear equations, with near-singular rejection, not general CAS.

Horsepower uses torque and rpm at one operating point and labels mechanical hp versus metric PS. Interest-rate cap is supplied single-period payout, **not Chatham premium pricing, curve/volatility valuation or live quotes**. Geographic midpoint requires manually supplied coordinates and is spherical shorter-arc geometry, **not city geocoding, road distance or driving time**; antipodal pairs have no unique midpoint. Cake price uses labor as cost and margin/percentage fees as shares of final price. Sheep dates use a 147-day center and 144–150-day general reference, not diagnosis or intervention advice. Megawatt and torque are unit conversions, not energy/fastener recommendations. Swim conversion is distance scaling multiplied by an explicit supplied factor; **factor one is not an official SCY/SCM/LCM performance conversion**. No federation factor or additive conversion is fabricated.

Cap rate uses annual NOI and supplied positive property value with negative NOI preserved; no appraisal or investment recommendation. CPM uses matched spend/impressions and a constant-price inverse scenario, not unique reach, conversion or earnings prediction. Fence cost uses supplied rates, explicit material-only allowance and separate charges, not market prices or structural design. Subwoofer estimates rectangular net air volume after supplied displacement, not acoustic tuning. Field capacity uses width/speed/efficiency and the 8.25 unit factor, not a safe-speed prescription. Asphalt replaces a hidden fixed allowance with an explicit one and supplied material-only price while retaining the older 5% scenario. AP Biology validates MC count and FRQ percentage and does not invent 1–5 cutoffs. Reverse BMI is the adult identity using a **user-supplied BMI, not an ideal-weight target**.

Two source-backed guides in `lib/roadmap-next20-guides.ts` cover Puppy Weight Estimator limitations and Ski DIN Calculator/technician checks. No universal adult puppy-weight multiplier, feeding prescription, personalized ski release setting or unverified adjustment chart is generated. Editorial review is distinguished from individual veterinary/technician assessment. Unclear cherry, reputation, binding and mixed calculator.net clusters remain deferred, as do product-label pool-shock dosing and unverified BTZ policy.

Expected export: **611 static pages**, **235 canonical global calculators plus five noindex aliases (240 generated global routes)**, **45 guides**, **602 sitemap URLs**. `npm run verify:next20` tests all new/default/upgrade formulas, parser and date boundaries, midpoint symmetry, negative NOI, unit conversions, actual Boolean callbacks and related destinations. `npm run verify:calculate` exercises all eighteen mathematics resolvers and the extra field snapshots with real component callbacks. The full build gates all fifteen new pages at 900 rendered words, both guides at 1200 words, exact keyword destinations, metadata/schema, contextual inbound links, directory discovery and all sitemap self-canonicals. Keep all previous regression gates.


### Next 20 calculators after rank 267 — completed 4 October 2026
The current selection rule is **six days**, superseding the earlier four-day cutoff. Do not change the calculation, editorial definition or reviewed date of a calculator created/updated within that interval. This batch adds **20 new calculators** and changes **none of the 240 pre-existing global calculator definitions**. `research/roadmap-268-baseline.json` stores the prior reviewed dates and SHA256 definition fingerprints; `npm run verify:roadmap268` checks all are unchanged. Contextual related-page navigation is supplied by the existing shared link graph and does not reset reviewed dates.

Ranks **268–327 were reviewed**, with 20 selected ranks and **43 exact workbook keywords** mapped in `lib/roadmap-268-plus-keywords.ts`. `research/roadmap-268-plus-selection.json` records the cutoff, every selected/skipped/deferred row and scope limits. **Next unreviewed rank: 328.** Do not describe all ranks268–327 as completed. Older already-useful canonical engines may remain unchanged; no forced rewrite or duplicate page is needed merely to meet a batch count. Distinct missing outputs such as stem-and-leaf plots and battery runtime are not counted complete from loosely related summary-statistics/energy pages.

New catalog and editorial ownership: `lib/roadmap-268-plus-tools.ts` and `lib/roadmap-268-plus-audit.ts`. Logic: `components/calculators/roadmap-268-plus.ts`. The twenty calculators are Drywall, Constant-Acceleration 0–60, Watt Hours, K/D, Deck Boards, Supplied-Neutral-Axis Plate Arc, Running Record Arithmetic, Integer-Rate NDF Timecode, Cow/Cattle Gestation Planning, Rim Offset, Pearson Correlation, Speed/Distance/Time, Measured TV Mounting Height, Wire-Length Takeoff, Gear Ratio Speed/RPM, Supplied-Density Christmas Lights, Baseball OPS, Binomial Probabilities, Regular Octagon, and Win Rate.

Scope boundaries must be preserved: acceleration is a supplied constant, not a horsepower-based vehicle forecast. Decking is parallel-row, row-specific stock counting without offcut optimization or prescribed gaps. Plate rolling is a circular-arc identity with independently supplied neutral-axis factor and process allowance, not machine setup or springback. Running records are supplied tallies, not automated literacy diagnosis. Timecode supports exact integer24/25/30/50/60fps NDF only and signed duration arithmetic; no fractional rates, DF labels or midnight wrapping. Cattle dates use an adjustable283-day planning convention, not an individual pregnancy or calving finding. Rim output is nominal edge movement, not tyre fitment.

Pearson r accepts2–1,000 paired observations, uses centered incremental sums and rejects constant lists; no causal/significance claim. Speed has three active-input modes, plus mph/m/s/ft/s outputs, without traffic or route forecasts. TV measurements do not establish comfort, bracket-hole patterns or wall strength. Wire takeoff distinguishes jacket routes and summed conductors, without gauge/code approval. Gearing is rigid supplied-ratio arithmetic and independently supplied rolling diameter, not TREMEC affiliation or a safe/achievable speed. Christmas light density is user preference, not a universal rule or electrical connection limit. OPS is unadjusted supplied official-count arithmetic, not OPS+. Binomial probabilities use0–500 independent equal-probability trials and labeled inclusive tails, with numerical precision boundaries. Octagon geometry is regular only. Win-rate draw handling is explicit, and a100% target is impossible with retained included non-wins.

All20 pages have at least900 rendered words, five useful FAQs, methodology, examples, scenario checks, sources, reviewed metadata, schema, contextual inbound links and sitemap/directory/search discovery. The shared Calculate-button and submitted-output rules remain mandatory; `verify:calculate` exercises every new calculator, multiline correlation and the eighth OPS field.

Expected current export: **631 static pages**, **255 canonical global tools plus five noindex aliases (260 generated routes)**, **45 guides**, **622 sitemap URLs**. Before publication run `verify:roadmap268`, `verify:calculate`, prior regression gates, typecheck, full build and diff whitespace checks.

### Conservative cumulative roadmap accounting
Static export worker concurrency is capped at two in `next.config.ts`. Render exposed 33 workers and its 631-page export failed after 473 pages without a compiler or content error; keep this build-only cap unless a measured hosting change justifies increasing it.

`research/roadmap-completion.json` is the explicit row/destination ledger: **280 of489 roadmap rows have documented scoped destinations:270 calculator/tool rows and10 guide rows**, with matching-intent rows merged rather than duplicated. Counts are implementation coverage, not indexed pages, traffic or complete support for every possible branded method. Ranks50,52,67,68,98 and99 are excluded from the cumulative completion total: malformed/mixed intent, absent verified destination or unsupported Khamis–Roche coefficients. Row99 retains a mid-parental alternate but its primary method is not implemented. Other skipped or unverified rows stay outside the count. When a rank maps to multiple distinct destinations, preserve all paths rather than overwriting the rank with the last keyword.

### IndexNow — 4 October 2026
User explicitly requested IndexNow alongside the existing sitemap. `scripts/indexnow.mjs generate` runs only after successful content validation and creates a manifest of canonical sitemap URLs, rendered HTML and referenced JS fingerprints, plus the commit marker. It performs no network submission during builds. `.github/workflows/indexnow.yml` waits for that exact commit's manifest and root ownership key to be live before sending added/changed/deleted URLs to the shared IndexNow endpoint. A successful 200 or pending-validation 202 response advances the cached checkpoint; failed deployment/submission does not. First run or an evicted checkpoint submits all current canonical URLs. Removed URLs are retained from the previous checkpoint for deletion notification. Do not remove sitemap/robots or add browser-side notification calls. IndexNow receipt is not guaranteed indexing/ranking, and is not a Google sitemap-fetch fix. Run `verify:indexnow`, typecheck and build before publishing.

### Crawl/indexing audit — 4 October 2026
The Pakistan/global Age Calculator pair had identical canonical title tags. The Pakistan route now uses “Age Calculator — Years, Months and Days” for title/OG without changing calculation definitions or review dates. The full-export gate rejects duplicate canonical titles across sitemap URLs. Exported canonical link graph: all622 destinations reachable within two clicks of homepage, no broken internal links or orphan sitemap destinations. Public sitemap XML/robots/DNS and user-agent tests are diagnostics, not proof of verified Googlebot/Bingbot IP access. GSC Wizard account reports were inaccessible because its subscription had expired; do not infer a manual action or the historical sitemap-fetch cause from a public HTTP200 test. Bing “Discovered but not crawled” is not itself a specific transport error. Diagnose using Bing Live URL and Google’s expanded sitemap error/live test before claiming a root cause or making speculative sitemap changes.


### Scored related navigation — 4 October 2026
All nine tool/guide dynamic routes render `components/RelatedNavigation.tsx` on the server. `lib/related-navigation.ts` builds a unified full-path catalog of canonical calculator, file-tool, generator and guide destinations; `lib/relevance-engine.ts` owns deterministic token normalization, inverse-document-frequency topic weighting, candidate indexing, directional scoring, diversity selection and process-local caching. Existing navigation and contextual editorial links remain intact during the additive pilot: removing legacy blocks broke required inbound-link gates. Scored recommendations supplement them. Replace legacy category/first-N blocks only after approved replacements preserve contextual coverage and all content gates pass.

Publishing rules:
- Use full canonical paths as page identities; Pakistan/global slugs can collide. Exclude canonical aliases, self-links, blocked relationships and missing destinations. New catalog pages automatically enter matching through their collection.
- Scores use intent25, functional/method-description overlap25, topic20, workflow15, title keyword10 and audience5. These are navigation heuristics, not Google ranking factors or correctness probabilities. Capabilities currently use title/description/formula evidence, not verified structured input/output signatures. Never claim this lexical engine proves a tool supports a mentioned task.
- Preserve explicit editorial associations as overrides. Automatic matches require multiple concepts, title evidence and method/description overlap. Automatic cross-region matching is disabled. Explicit scope conflicts are rejected when profiles supply scope; current catalogs do not yet have complete structured tax-year/method metadata. Review sensitive relationships editorially.
- Only the leading automatic candidate can receive high confidence: score85+ and a10-point lead. Score75+ qualifies as a secondary recommendation. Ambiguous lower-score candidates remain in the report, not published. Strongly overlapping named tasks may receive10 workflow points; explicit editorial associations receive15. Never force three-to-five links when evidence is weak.
- Select up to five distinct useful destinations; diversify near-equivalent recommendations without promoting weak candidates. Guide/tool relations are directional. Existing guide associations supply supporting-guide evidence to their tools only with shared title and multiple topic concepts; automatic matches are never blindly reciprocated.
- Navigation scoring MUST NOT change canonical tags, redirects, robots, sitemap membership, formulas, editorial definitions or reviewed dates. Independent useful guides retain self-canonicals. The six-day calculator rule remains unchanged for shared navigation updates.
- Duplicate detection is report-only: normalized title overlap flags candidates for manual task/formula/main-content review. It does not establish duplication and must never automatically merge, redirect, delete or cross-canonicalize pages.
- Run `npm run verify:related` and `npm run related:report` after catalog/matcher changes. The regenerated (gitignored) report at `research/related-navigation-report.json` includes selected matches, signal breakdowns, review candidates, incoming-link counts, unmatched pages and title-overlap candidates. A compact audit is versioned at `research/related-navigation-summary.json`. Regenerate reports rather than hand-editing scores. Build runs the navigation verification alongside existing content gates.
- Validate actual automatic selections, wrong-topic negatives, ties, regions, aliases, blocked edges and scope conflicts. Thresholds are provisional; no100–150-pair manually labeled benchmark or embedding/API layer is implemented. Do not claim calibrated precision or complete contextual coverage. Broaden matching only after reviewed examples justify it.
- Keep Render static-export concurrency capped at two. The matcher uses inverted token indexes and one cached ranking per source within a worker; no network/API call or visitor JavaScript is needed.


### Contextual coverage and future publishing gate — 4 October 2026
The additive matcher now includes **83 explicitly reviewed task families covering 288 destinations** in `lib/navigation-topics.ts`. They connect adjacent useful tasks, independent comparisons and supporting documentation; membership must be reviewed explicitly. They do not claim equal functionality, official eligibility, diagnosis, fitment or rule equivalence. Every selected reviewed association retains its reason in the audit. Do not expand families using broad category labels or unreviewed keyword/brand overlap. No API, embedding service or paid dependency is introduced.

Prior navigation-phase audit: **603 canonical tools/guides**, **622 sitemap URLs**, **zero broken internal anchors**, **zero sitemap orphans**, and **zero tools/guides missing an incoming main-content link from another tool/guide**. All sitemap destinations are reachable from homepage visible links within two clicks. The scored block renders **574 additional links across330 pages**; the other273 pages retain their existing links and also pass contextual incoming coverage. These are rendered navigation counts, not new pages or Google indexing counts. Header/footer and directory links count for crawl discovery; they do NOT count as contextual incoming links between detail pages. A page lacking an additional scored recommendation can still have contextual links in its existing editorial/navigation sections; do not equate an unmatched report entry with an orphan.

`node scripts/check-navigation-graph.mjs` audits actual exported `<a href>` anchors, ignores inline script data, checks readable anchor text/image alt, internal targets, homepage reachability and detail-page contextual incoming links. `npm run verify:navigation` exercises failure cases and the actual export. The build runs content gates, relevance/export verification and this graph gate before generating the IndexNow manifest. Reports are generated from the current catalogs: `research/related-navigation-summary.json` and `research/navigation-graph-summary.json`; detailed scored matches are regenerated by `npm run related:report`.

Before publishing any future tool or guide:
1. Keep its existing canonical catalog, directory, header search and sitemap integration. Use a self-canonical unless a genuine duplicate/alias decision was separately reviewed.
2. Review its user task, actual method, inputs/outputs, region, year and exclusions. Add an explicit topic membership or directional editorial relationship only when it helps a visitor; never invent capability support from a keyword mention.
3. Ensure at least one existing relevant tool/guide renders an incoming contextual link to the new canonical URL. Add that relationship through shared navigation rather than rewriting recently updated calculator definitions/review dates.
4. Inspect selected recommendations and recorded reasons. Preserve existing navigation until approved replacements satisfy all original content gates. Do not reduce thresholds or disable graph failures to publish.
5. Run `npm run verify:related`, `npm run verify:navigation` after a fresh export, `npm run verify:roadmap268` for baseline preservation, typecheck, full build and whitespace checks. A new page without contextual incoming coverage fails the build even if it appears in a directory/sitemap.
6. Keep links visible, crawlable and descriptive. Do not add hidden links, repeated keyword anchors, forced cross-region/year relationships, reciprocal site-wide blocks or copied keyword-only pages. Avoid claims that this guarantees indexing, first-page positions or approval of the whole site under Google's policies.

Policy references reviewed: Google Search Central links guidance (`https://developers.google.com/search/docs/crawling-indexing/links-crawlable`), canonical consolidation (`https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls`) and spam policies (`https://developers.google.com/search/docs/essentials/spam-policies`). Internal linking is a user-navigation improvement, not a cure for DNS resets, historical sitemap fetch failures or thin content. The six-day rule, two-worker export limit, original functionality/content gates and duplicate-review-only policy remain in force.

### Next 20 tools after rank 327 — completed 4 October 2026
Reviewed ranks **328–368**, selected **20 new canonical tools** and mapped **45 exact workbook queries** in `lib/roadmap-328-plus-keywords.ts`. Next unreviewed rank: **369**. `research/roadmap-328-plus-selection.json` records every inspected row, skipped recent/covered intents and unsupported deferrals. Do not count the skipped rows as new completion. The six-day rule preserves every pre-existing global definition: all **260** prior definitions/review dates are fingerprinted in `research/roadmap-328-baseline.json` and checked by `npm run verify:roadmap328`.

Catalog and original editorial content: `lib/roadmap-328-plus-tools.ts` and `lib/roadmap-328-plus-audit.ts`; bounded computation: `components/calculators/roadmap-328-plus.ts`. Added tools: Matrix Multiplication, Decimal to Fraction, Blown Insulation, Euler's Method, Log Weight, Roman Numerals, Prop Slip, RC Filter, Probability, Target Heart Rate, Pension Benefit, Grams/mL, Siding Courses, Difference Quotient, Odds/Risk Ratios, Time-Lapse, Mileage Reimbursement, Draw Length, Cardiac Output and Option Profit.

Preserve these scopes: matrix multiplication is numeric up to8×8, not a general CAS. Decimal fractions use exact finite text and BigInt arithmetic; repeating notation is not parsed. Roman conversion uses canonical subtractive1–3999 and real Gregorian component dates. Euler accepts only affine y′=a·x+b·y+c, up to1,000 explicit steps. Difference quotients accept only quadratic coefficients, with nonzero h. Insulation requires actual label coverage at an independently selected specification; no R-value is inferred. Siding is rectangular whole-board counting per course without opening deductions or offcut sharing. Whole purchasing counts exceeding safe-integer precision are rejected. Log mass uses ideal circular-frustum volume and supplied density, not lifting approval.

Prop slip preserves negative apparent values and is not setup/safe-speed advice. RC is a single unloaded passive first-order stage. Probability requires explicit independence or a feasible supplied overlap. Odds/risk are observed2×2 arithmetic without inference/clinical prediction; case-control proportions do not estimate population risk. Target HR uses adult220-minus-age population references, not measured maximum or exercise clearance. Cardiac output requires independently supplied stroke volume and heart rate; optional BSA indexing gives no diagnosis. Draw length converts a measured nock-to-pivot distance plus1¾in under the stated ATA convention, not a wingspan fit or arrow-sizing recommendation.

Pension uses supplied final-salary accrual, not state entitlement or investment-pot growth. Mileage uses odometer difference and an explicit supplied rate; **no2025/2026 statutory rate** is loaded. Options model purchased vanilla calls/puts at expiry only, including supplied fees and contract size; no live valuation or short positions. Money outputs are currency-neutral. Time-lapse includes a first capture at zero and an endpoint only when the interval lands there. Grams/mL requires supplied material density, not a universal water assumption.

All20 pages must retain900 useful rendered words, fiveFAQs, supported methodology, exact relevant keywords, schema and canonical sitemap/discovery. Shared reviewed associations supply incoming contextual links without rewriting recently updated calculators. `verify:roadmap328` checks formulas, modes, boundaries,3999 Roman round trips, defaults and preserved definitions. `verify:calculate` checks every actual new component callback, two matrix textareas and seventh-field snapshots. Run these plus prior baseline gates, typecheck, full build, navigation and whitespace checks before publishing.

Current totals: **651 static pages**, **275 canonical global tools plus five aliases**, **45 guides**, **642 canonical sitemap URLs**, **623 tool/guide profiles**. Conservative workbook ledger: **280/489 scoped rows**, comprising **270 calculator/tool rows and10 guide rows**, with **210 distinct calculator/tool destinations and10 guide destinations**. Roadmap row completion is not a count of indexed or ranking URLs. The sitemap and post-deployment IndexNow workflow remain enabled, and static export concurrency stays capped at two.

### Next 20 tools after rank 368 — 5 October 2026
The user's current cutoff replaces the earlier relative six-day selection rule: **leave an existing calculator created or updated on/after 28 September 2026 untouched and continue to another roadmap entry**. This batch is additive and preserves all **280 pre-existing global definitions and 181 Pakistan definitions**, including their review dates. Fingerprints are in `research/roadmap-369-baseline.json`; `npm run verify:roadmap369` checks them alongside computation modes, invalid inputs and defaults. Previous batch fingerprints now recognize only the already published, explicitly requested molecular correction at commit `cdb6c589b8319bfc07de009e5609b6be03337b64`; each original molecular fingerprint remains recorded. This is not a general exemption from preservation.

Reviewed ranks **369–422** and added **20 distinct canonical tools**, mapping **114 supported historical workbook keywords** in `lib/roadmap-369-plus-keywords.ts`. Every inspected row and excluded keyword is recorded in `research/roadmap-369-plus-selection.json`. Next unreviewed rank: **423**. Rank384 circle area already has a recent destination and remains unchanged; rank381 receives a distinct circumference and reverse-perimeter worksheet. Rank410's malformed primary query is not counted complete, although valid secondary length queries have a scoped destination. No competitor brand affiliation, live quote, unsupported unit or hidden capability is claimed from workbook grouping.

New tools: Age Difference, Parallel Resistors, Scrap Silver, Z-Score, Circumference, Pounds/Ounces, Pizza Party, Length Conversion, Electricity Usage, 2×2 Eigenvalues, Percent Error, Cartesian Midpoint, Dew Point, Lottery Annuity, Feet/Inches Arithmetic, Long Division, Permutations/Combinations, Logarithms, Trip Fuel Cost and Big Integers. Original editorial/catalog data is in `lib/roadmap-369-plus-tools.ts` and `lib/roadmap-369-plus-audit.ts`; computation is in `components/calculators/roadmap-369-plus.ts`. Preserve 900 useful rendered words, five FAQs, appropriate keywords, method references, self-canonicals, structured data, sensible defaults and click-to-calculate behavior. Reviewed task families supply contextual inbound links without editing recent definitions.

Important scopes: birthdays compare date-only Gregorian dates with explicit end-of-month clamping. Resistance is ideal positive real parallel branches (1–100), not arbitrary circuit solving or AC impedance. Silver uses supplied quotes, purity and payout; troy ounces never mean ordinary or fluid ounces. Z-score is supplied-reference standardization without normal-probability or clinical inference. Circumference accepts radius/diameter/perimeter, not a duplicate area-led destination. Mass is avoirdupois; length uses international feet/miles and excludes knots. Pizza counts use supplied appetite/cut assumptions. Electricity uses supplied flat price and duty cycle, not bill slabs. Eigenvalues are numeric real-entry2×2 only; complex values are displayed without complex eigenvectors. Percent error has a nonzero reference and an explicit absolute-magnitude denominator. Midpoint is Cartesian, not geographic routing.

Dew point uses a liquid-water Magnus approximation, with both air and computed dew point restricted to0–50°C; reject frost/subzero results. Lottery is a supplied annual escalating schedule with a flat-tax illustration and discount assumption, not an official cash option or actual tax calculation. Mixed length supports addition/subtraction, with a negative sign applying to the entire result. Division accepts finite written decimal inputs with up to60 integer digits and18 decimal places, generates at most50 fractional digits and marks detected repetition or truncation. Counting uses distinct items without replacement, exact BigInt arithmetic and0≤r≤n≤1000. Logarithms use real positive arguments and positive bases other than one. Trip fuel requires matching distance/economy/price units, including explicit US versus imperial gallons. Big-number operations are exact signed integers up to500 input digits; division truncates toward zero and shows its signed remainder.

Current target totals after validated export: **671 static pages**, **295 canonical global tools plus five aliases**, **45 guides**, **662 canonical sitemap URLs**, **643 tool/guide profiles**. Workbook ledger: **303/489 scoped rows**, **293 calculator/tool rows and10 guides**, **230 distinct calculator/tool destinations and10 guide destinations**. Counts describe scoped implementations, not indexed pages or ranking guarantees. Run `verify:roadmap369`, `verify:calculate`, prior baseline gates, typecheck, full build, related navigation, navigation graph and whitespace checks before publishing. Keep two-worker static export and the post-live IndexNow workflow.

IndexNow notification concurrency now cancels superseded runs (`cancel-in-progress: true`) so queued older commits cannot fail merely because a newer production manifest replaced them. Keep exact-commit live verification, ownership-key verification and checkpoint saving only after accepted submissions. Cancellation may leave the checkpoint at the last accepted saved manifest; the next run can safely resubmit the remaining changed URLs. Do not treat a cancelled stale run as a failed deployment or disable notifications.

## Roadmap continuation from rank 423 — 5 October 2026

Reviewed ranks **423–488** and added **20 distinct canonical tools**: Trigonometric Functions, Slope, Rental Property Cash Flow, Resistor Color Codes, Quadratic Equations, Density/Mass/Volume, Net Carbohydrate, Least Common Multiple, Dice Sum Probability, Nth Roots, Title Case, Sequence Sums, Lease Buyout, Half-Life, Acreage, Annualized Return, Time Value of Money, Prime Factorization, IPv6 Subnets and Bandwidth Requirements. Sources of truth are `lib/roadmap-423-plus-tools.ts`, `lib/roadmap-423-plus-audit.ts`, `lib/roadmap-423-plus-keywords.ts` and `components/calculators/roadmap-423-plus.ts`. The new bounded engines map **56 supported historical workbook queries**. Historical volume and difficulty are not current Search Console observations.

The user's cutoff is **28 September 2026**. All **300 pre-existing global definitions and 181 Pakistan definitions**, including dates, remain unchanged and are fingerprinted in `research/roadmap-423-baseline.json`. Existing computation modules are unchanged. Shared integration adds only the new resolver/catalog, defaults and reviewed contextual task families; scoped long-result styling applies only to named new pages. Keep calculations click-gated and preserve submitted output during edits.

Do not broaden these implementations silently. Trigonometry is not a full physics/scientific calculator; roots are real numeric principal roots; sequences are finite arithmetic/geometric progressions; TVM solves only PV/FV/PMT with a per-period rate and disclosed positive-balance convention. Rental and lease models use supplied amounts, not live quotes or tax engines. Net carbohydrate is an explicit label-subtraction scenario, not a glucose or medication model. Half-life is constant mathematical decay, not clinical clearance. Dice probabilities use identical fair independent numbered dice, not a random roller or advanced game mechanics. Acreage uses simple planar measured polygons, not geographic coordinates or a legal survey. IPv6 is hexadecimal 128-bit prefix arithmetic with a deliberately limited parser; counts are address space, not usable-host guarantees or broadcast addresses. Title capitalization follows simple disclosed English rules and normalizes acronyms; it does not claim complete compliance with named style guides.

`research/roadmap-423-plus-selection.json` records every inspected row, preserved destinations and exclusions. Ranks 473,479,487 intentionally merge into new TVM, density and sequence destinations. Rank424's primary physics intent is not counted complete even though five valid trigonometric secondary queries are supported. Other unsupported medical, branded, proprietary or current-tax intents remain deferred. Protected or already covered existing rows are not counted as newly completed. The next unreviewed rank is **489**; the workbook still has deferred rows, so reaching its end will not mean every intent is implemented.

Expected totals: **691 static pages**, **315 canonical global tools plus five aliases**, **45 guides**, **682 sitemap URLs**, **663 tool/guide profiles**. The conservative ledger has **326/489 scoped rows**, **316 calculator/tool rows and10 guide rows**, with **250 distinct calculator/tool destinations and10 guide destinations**. Preserve the original denominator and distinguish row completion from indexed or ranking pages.

Run `verify:roadmap423`, existing roadmap268/328/369 baseline checks, `verify:calculate`, typecheck, full production build, related-navigation export, navigation graph and `git diff --check` before publishing. The new content gate requires 900 useful rendered words, five FAQs, distinct method/examples, self-canonical metadata, WebApplication/FAQPage/HowTo/BreadcrumbList schema, all supported mapped keywords, directory/sitemap discovery and a contextual incoming link. Title Case links to existing generator text tools; do not invent global text-counter routes. Keep two-worker static export and exact-live-commit IndexNow checks with cancellation of superseded notification runs.

## Deferred-intent batch: 6 October 2026

Twenty distinct worksheets were added after reviewing the final workbook row and revisiting deferred intents. The selection record is `research/roadmap-deferred-selection.json`; original authored content is reproducible with `python research/build-deferred-batch.py`. The batch contains five-number summaries, duration averages, integer exponent rules, stem-and-leaf plots, battery energy runtime, dilution ratio conventions, coupon-date fixed bonds, Cartesian 3D distance, timed BPM, label-based food protein, seven distinct mechanics/gas equations, Mifflin resting energy, Rockport walk prediction and confirmed Table III 2026 RMD arithmetic.

Matching queries are merged into one calculation page. Physics extensions are distinct formulas, not seven additional roadmap rows. Unsupported broad physics intent, I bonds, Harris–Benedict and ordinary averages remain excluded from primary completion counts. Existing student-loan amortization overlaps protected payment destinations and receives no duplicate URL. The conservative ledger has **337/489 scoped rows**, comprising **327 calculator/tool rows and 10 guides**. Eleven deferred rows gained supported primary destinations; same-intent summary ranks 245 and 276 share one URL. Keyword provenance retains 25 exact supported workbook queries separately from new extension terms and does not invent their search volumes.

No existing definition or review date was rewritten. `research/roadmap-deferred-baseline.json` protects all **320 prior global and 181 Pakistan definitions**. `npm run verify:deferred` checks actual engines, independent examples, inverse modes, invalid inputs and the IRS table provenance. `verify:calculate` exercises all twenty actual callbacks, requires explicit Calculate, preserves submitted output during edits, and tests the RMD confirmation gate. RMD defaults to unconfirmed; inherited, Roth-owner and Table II cases are excluded. Resting energy is Mifflin only, without an activity factor; Rockport uses the original healthy-adult age scope and an already completed test record.

Expected validated export: **711 pages**, **335 canonical global tools plus five aliases**, **702 sitemap URLs**, **683 tool/guide profiles**. Run typecheck, new and prior baseline gates, interaction checks, full content/export/navigation validation and whitespace checks before pushing. Static export remains capped at two workers. Preserve the exact-live-commit manifest check and the existing post-live IndexNow workflow. Google ranking and indexing cannot be guaranteed.


## 22. Next twenty verified-gap tools (6 October 2026)

The user authorized another additive twenty-tool batch. Catalog `lib/roadmap-gap20-tools.ts`, method content `lib/roadmap-gap20-audit.ts`, logic `components/calculators/roadmap-gap20.ts`, defaults `components/calculators/gap20-defaults.ts` and reviewed families `lib/roadmap-gap20-navigation.ts` are integrated into the shared catalog, page and calculator flows. `research/build-gap20.py` preserves deterministic individually authored content and method-specific steps. Existing definitions and dates remain unchanged under the on/after-28-September cutoff; `research/roadmap-gap20-baseline.json` fingerprints all **340 prior global and 181 Pakistan definitions**.

New tasks: men’s decathlon scoring; augmentation-dot musical duration; matrix RREF and space bases; complex arithmetic; measured snow mass and pressure; the Labrador epigenetic age comparison and its mathematical inverse; golf differential/raw index arithmetic; ANC laboratory arithmetic; revised 1984 Harris–Benedict resting energy; the checked Nike adult shoe chart; food energy conversion and EU composition factors; assessed taxable-income reconciliation; Texas retail/dealer vehicle tax; 2025 NYC resident tax before credits; supplied clothing chart matching; Boer lean mass; point-mass center of mass; construction crew capacity; excavation swell/hauling; vector dot/cross/projection.

Source data `lib/gap20-reference-data.ts` retains **1,302 official 2025 NYC city intervals** and **38 Nike adult chart rows**, with source URLs/fingerprints in `research/gap20-source-provenance.json`. NYC city scope is 2025 full-year resident before credits; never relabel it 2026 or combine it silently with federal/state tax. Shoe CM/JP labels differ from measured length; converted foot cm use the published inch row. Decathlon uses the combined-events coefficients, automatic sprint timing and per-event truncation. Golf output is raw arithmetic, excluding official history safeguards. ANC, resting-energy and lean-mass pages are bounded arithmetic/estimates, with no clinical decisions. Labrador scope is not a universal dog formula. Snow is measured mass, not roof capacity or code design.

The ledger has exactly **489 unique ranks** after twenty duplicate rank records were consolidated while preserving existing completion evidence. It now records **351 completed scoped rows: 341 tools and 10 guides**, with **271 distinct completed tool paths and 10 guide paths**. The prior summary’s 260 distinct-tool figure exceeded its actual 257 documented paths; this summary is recomputed from unique primary paths. This batch adds fourteen primary scoped completions and **27 exact workbook queries**, whose historical metrics are preserved in `lib/roadmap-gap20-keywords.ts`. Supplied clothing matching does not complete body-shape primary; complex/vector/mass-center tasks do not complete broad scientific/physics primary; crew and haul tasks do not complete broad construction primary. No duplicate stair, inverse-matrix, water-intake, generic growth or student-loan engine was added.

Required gates: `npm run typecheck`, `npm run verify:gap20`, all prior calculation/baseline scripts, `npm run verify:calculate`, full build/content/navigation checks and `git diff --check`. The gap20 gate tests all NYC interval endpoints, published examples, inverses, domain failures, source dimensions and protected fingerprints. Actual component callbacks cover all twenty tools, explicit scope gates, persistent submitted output, multiline inputs and the eighth haul field. Every new route needs a contextual incoming link from a pre-existing main-content tool or guide. Export concurrency remains two. Confirm exact production commit manifest, all twenty URLs and Render logs after the authorized publish.

## 23. Security dependency patches (6 October 2026)

The user explicitly authorized fixing the dependency vulnerabilities reported after the gap20 batch. Next.js is pinned to **16.3.8**, including its matching environment/SWC packages; the existing PostCSS-compatible source-map-js dependency is locked to **1.2.2** without an override or new direct dependency. These resolve the prior critical Next.js image-response advisory and high source-map indexed-offset denial-of-service advisory. React versions, all calculator/editorial definitions and reviewed dates, route counts and spreadsheet coverage are unchanged. Verify a clean npm ci, zero-known-vulnerability npm audit, typecheck, calculation/baseline regressions, full 731-page export/content/navigation gates and whitespace checks before publishing. Confirm the exact live commit and Render logs afterward. The local npm unknown http-proxy configuration warning comes from injected runner environment variables, not application code; do not add a repository workaround or alter hosting secrets for it.
