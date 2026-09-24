# SolvePilot Architecture Map

## Framework and rendering

- Next.js 16 App Router, React 19 and TypeScript.
- Static generation through each dynamic route's `generateStaticParams`.
- `npm run build` runs Next.js and the content quality gate.
- Tools calculate in client components; long-form content and metadata render statically.

## Route ownership

| URL | Data | UI/calculation |
|---|---|---|
| `/pk/tools/[slug]/` | `lib/tools.ts` | `components/Calculator.tsx`, `components/calculators/*` |
| `/tools/[slug]/` | `lib/global-tools.ts`, `lib/global-finance-tools.ts`, `lib/ecommerce-tools.ts` | `components/Calculator.tsx`, `components/calculators/*` |
| `/generator-tools/[slug]/` | generator, productivity and creator catalogs | matching generator components |
| `/pdf-tools/[slug]/` | `lib/pdf-tools.ts` | `components/PdfTool.tsx` |
| `/document-tools/[slug]/` | `lib/document-tools.ts` | `components/DocumentTool.tsx` |
| `/image-tools/[slug]/` | `lib/image-tools.ts` | `components/ImageTool.tsx` |
| `/media-tools/[slug]/` | `lib/media-tools.ts` | `components/MediaTool.tsx` |
| `/guides/[slug]/` | `lib/guides.ts`, `lib/traffic-guides.ts` | guide dynamic route |

## Discovery flow

Tool data array → static parameters → individual page → category directory → header search → homepage count → sitemap.

When adding a new standalone catalog, integrate all six destinations. Existing catalogs such as `globalTools` automatically feed the homepage, search and sitemap when appended correctly.

## Calculator flow

1. Defaults live in `components/calculators/defaults.ts`.
2. `components/Calculator.tsx` sends the slug and four values through ordered resolvers.
3. Focused resolver modules return labels, suffixes and results.
4. Currency-neutral global tools pass `currencyNeutral` or belong to the neutral slug set.

Keep resolver modules category-focused. Do not keep expanding one universal conditional file.

## Validation

`scripts/validate-content.mjs` reads exported HTML from `out/` and blocks incomplete builds. Add phase-specific slugs and exact checks there instead of relying on manual review alone.
