# SolvePilot Content and SEO Standard

This is the mandatory acceptance checklist for every new tool or article.

## Search intent and uniqueness

- One primary long-tail query and supporting secondary terms.
- Unique search title, H1, 110–160 character meta description and primary keyword.
- At least 900 useful rendered words; do not pad with repeated generic text.
- Unique introduction, formula/method, worked example, considerations and practical guidance.
- Avoid pages that differ only by replacing a tool name or number.

## Page structure

- Working tool or direct answer appears near the top.
- Clear steps or HowTo section.
- Formula and methodology with visible assumptions.
- Realistic worked example.
- Interpretation guidance and common mistakes.
- Privacy/browser-processing statement where inputs are used.
- Accuracy/verification guidance.
- Limitations and responsible-use section.
- Sources, review date and author/reviewer links.
- At least five useful internal links, normally four related pages plus directory/breadcrumb links.
- Five helpful FAQs unless the page type genuinely requires a different format.

## Technical SEO

- Dedicated clean URL and indexable static HTML.
- Self-referencing canonical.
- Unique title and meta description.
- `og:title`, `og:type`, absolute `og:image` and absolute `og:url`.
- Twitter large-image metadata.
- `WebApplication` or appropriate article schema.
- `FAQPage`, `BreadcrumbList` and `HowTo` schema where applicable.
- Included in sitemap, category directory, site search and relevant homepage/category count.
- Related pages should form a real topic cluster, not random links.

## Calculation and trust

- Calculator output must be deterministic and tested with a worked example.
- Labels and units must be explicit.
- Currency-neutral tools must not silently convert currencies.
- Country/provider/platform rates must be editable and dated when used.
- Clearly distinguish revenue, contribution, gross profit and net profit.
- Do not present planning results as official, legal, tax, medical or financial determinations.
- Do not claim guaranteed traffic, ranking, earnings or performance.

## Build enforcement

Update `scripts/validate-content.mjs` with the phase slug list and checks. A page is not complete until `npm run typecheck` and `npm run build` both pass.

