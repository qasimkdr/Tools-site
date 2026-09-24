# SolvePilot Agent Instructions

Read this file first. Then read only the documentation and source files routed below. Do not recursively dump the repository or reread every tool definition.

## Start every task

1. Run `npm run context:report`.
2. Run `git status --short` and preserve unrelated user changes.
3. Read `docs/PROJECT_STATE.md` plus only the relevant section of `docs/ARCHITECTURE.md`.
4. For new content, read `docs/CONTENT_STANDARD.md` before editing.
5. Search with `rg` and open targeted ranges; never print an entire large catalog unless the task requires it.

## Source routing

| Work | Primary files |
|---|---|
| Pakistan calculators | `lib/tools.ts`, `components/calculators/*`, `app/pk/tools/[slug]/page.tsx` |
| Global calculators | `lib/global-tools.ts`, focused files such as `lib/global-finance-tools.ts` or `lib/ecommerce-tools.ts`, `components/calculators/*`, `app/tools/[slug]/page.tsx` |
| Phase 6 generators | `lib/generator-tools.ts`, `lib/productivity-tools.ts`, `lib/creator-tools.ts`, matching components, `app/generator-tools/[slug]/page.tsx` |
| PDF/document/image/media | Matching `lib/*-tools.ts`, matching component, matching dynamic route |
| Guides | `lib/guides.ts`, `lib/traffic-guides.ts`, `app/guides/[slug]/page.tsx` |
| Discovery | `components/Header.tsx`, `app/page.tsx`, category directory, `app/sitemap.ts` |
| Quality checks | `scripts/validate-content.mjs` |

## Locked delivery contract

- New tools and articles require at least 900 useful rendered words.
- Each page requires unique title, meta description, primary keyword and substantive body.
- Include canonical, complete Open Graph metadata, FAQ schema, breadcrumb schema and HowTo schema when instructional.
- Include methodology, worked example, privacy, accuracy, limitations, sources/review information and related internal links.
- Add every new page to its directory, search, homepage/category discovery and sitemap.
- Calculations must be functional, browser-private, transparent and free of hidden changing rates.
- Use editable assumptions for rates that vary by country, provider, platform or date.
- Never claim guaranteed rankings, traffic, profit or official accuracy.
- Extend `scripts/validate-content.mjs` so violations block the build.

## Efficient workflow

- Work in one related batch of 10–15 pages.
- Reuse shared routes/components, but write tool-specific metadata, formulas, examples and editorial sections.
- Run `npm run typecheck`, then `npm run build` once after the batch; rerun only the failing stage after fixes.
- Keep tool output concise. Show only errors, changed files, counts and final verification.
- Commit one coherent phase. Publish to `main` and verify the newest Render deploy is `live`.

## Deployment

- Repository: `qasimkdr/Tools-site`
- Production: `https://solvepilot.xyz`
- Render service: `srv-dalt45e1egvs73fp0m20`
- Render workspace: `tea-d8uk6ajaml3c73dm78kg`
- Branch: `main`; Render auto-deploys new commits.

Update `docs/PROJECT_STATE.md`, `docs/ROADMAP.md` and `docs/TOOL_MANIFEST.md` whenever a phase changes their facts.
