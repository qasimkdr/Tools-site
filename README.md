# SolvePilot

Pakistan-first calculators, comparison tools and practical decision guides. Built as a statically exported Next.js application for excellent speed, security and crawlability.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
```

The static site is generated in `out/`.

## Environment

Copy `.env.example` to `.env.local` and set the final site URL. Google Analytics and AdSense remain optional. Ads are disabled until `NEXT_PUBLIC_ADSENSE_ENABLED=true` and a valid publisher client is provided.

## Publishing a tool

Add reviewed tool metadata to `lib/tools.ts`, implement its calculation mode in `components/Calculator.tsx`, and add tests before publication. The tool page, metadata, FAQ structured data and sitemap URL are then generated automatically.
