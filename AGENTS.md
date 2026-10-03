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

Last verified: **3 October 2026**

| Collection | Source catalog | Public route | Pages |
|---|---|---|---:|
| Pakistan calculators | `lib/tools.ts` | `/pk/tools/[slug]/` | 181 |
| Global calculators | `lib/global-tools.ts` plus focused catalogs | `/tools/[slug]/` | 220 canonical + 5 noindex aliases (225 generated) |
| PDF tools | `lib/pdf-tools.ts` | `/pdf-tools/[slug]/` | 14 |
| Document and data tools | `lib/document-tools.ts` | `/document-tools/[slug]/` | 25 |
| Image tools | `lib/image-tools.ts` | `/image-tools/[slug]/` | 13 |
| Video, audio and subtitle tools | `lib/media-tools.ts` | `/media-tools/[slug]/` | 16 |
| Archive and compressed-file tools | `lib/archive-tools.ts` | `/archive-tools/[slug]/` | 6 |
| Generator tools | three focused generator catalogs | `/generator-tools/[slug]/` | 48 |
| Guides | guide catalog in `lib/` | `/guides/[slug]/` | 43 |

The production build is expected to generate **594 static pages** after the SolvePilot roadmap ranks 206–225 update. The content gate recognizes **181 Pakistan calculators, 220 indexable global tools (225 generated routes including five noindex canonical aliases), 48 Phase 6 generators, 20 archive/data/subtitle tools and 43 guides**.

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

The shared resolver is `components/calculators/roadmap-206-225.ts`. GC accepts one DNA/RNA record, counts only A/C/G/T-or-U/N and explicitly separates known-base GC from all-position resolved lower bounds. LLC is a supplied-effective-rate cash-reserve scenario, not an actual federal/state liability or classification election. Charles’ law uses positive Kelvin temperatures and fixed pressure/amount. Crypto uses manual quotes and explicit proportional fees, without live OVO prices or inferred token identity. Provider-name keywords describe independent alternatives, not affiliation. Basic arithmetic uses a bounded recursive parser, four operations, parentheses and literal percent, with no eval or hardware-specific commercial percentage-key behavior.

`lib/minecraft-sphere.ts` and `components/MinecraftSphereTool.tsx` generate diameter 1–64 integer voxel layers. Solid mode tests cell centers against a sphere; hollow mode uses six face neighbors. Layer selection changes only the stored plan’s view, and downloadable CSV contains zero-based offsets, not game commands. Input edits keep the last calculated plan. The shared calculator now supports up to eight optional fields while retaining click-only calculation and submitted-input snapshots. Preserve that behavior for every future tool.

Roofing retains horizontal-plan uniform-pitch geometry and adds supplied package coverage, price per planned square foot, separate costs and an independent rise/run mode. No local price or universal bundle coverage is assumed. Area-to-linear-length requires actual uniform coverage width. Rucking adds published 2024 Adult Compendium categories 17010 (7.0 MET), 17011 (3.5) and 17012 (7.8), using supplied minutes and no invented pack/speed/slope correction. Existing DC/single-phase/balanced-three-phase electrical models retain their labeled voltage and power-factor basis.

`lib/nj-tax-2025.ts` bundles all **2,000 official $50 tax-table rows** from the verified 2025 NJ-1040 instructions, plus official factor/subtraction schedules for taxable income ≥$100,000. The source URL, extraction date and PDF SHA256 are recorded. NJ gross and taxable income are distinct inputs; gross-income thresholds are explicit. This is full-year resident USD arithmetic, not a federal, payroll, part-year or nonresident model. Known credits/payments are supplied; negative balance is not a guaranteed refund. Do not relabel it for later years without verified instructions.

Bank guide embeds fixed-denominator simple-interest arithmetic from supplied days; it does not perform a 30/360 date transformation. Study guide embeds a normalized weighted assessment percentage; it does not predict a VCAA study score, moderation, scaling or ATAR. Breast implant guide has no personalized cc algorithm, cup conversion, sizing recommendation or image analysis. Related measurement pages are not device-selection substitutes; editorial review is not clinical review.

Expected export: **594 pages**, **220 canonical global tools plus five aliases (225 routes)**, **43 guides** and **585 sitemap URLs**. `npm run verify:roadmap206` checks shipped formula modes, all tax rows, official examples/boundaries, voxel counts/symmetry, parser rejections and exact keyword destinations. `npm run verify:sphere` checks actual component callbacks and the exported CSV Blob. `npm run verify:calculate` covers initial click gates, stable outputs and all extra roof-field snapshots. Preserve previous regression and full-export sitemap gates.
