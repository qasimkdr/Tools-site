# Tool Manifest

This compact manifest routes agents to canonical catalogs. Individual slugs remain in source so this file does not duplicate hundreds of records.

| Collection | Count | Canonical catalog |
|---|---:|---|
| Pakistan calculators | 181 | `lib/tools.ts` |
| Global calculators | 72 | `lib/global-tools.ts` plus focused imports |
| E-commerce & Ads | 12 of global total | `lib/ecommerce-tools.ts` |
| Global Finance expansion | 25 of global total | `lib/global-finance-expansion.ts` |
| QR/barcode and business generators | 20 | `lib/generator-tools.ts` |
| Career and student/office generators | 18 | `lib/productivity-tools.ts` |
| Social and creator generators | 10 | `lib/creator-tools.ts` |
| PDF tools | 14 | `lib/pdf-tools.ts` |
| Document/data tools | 14 | `lib/document-tools.ts` |
| Image tools | 13 | `lib/image-tools.ts` |
| Media tools | 13 | `lib/media-tools.ts` |
| Guides | 25 | `lib/guides.ts`, `lib/traffic-guides.ts` |

Use a targeted `rg` search to find an individual slug. Do not load every catalog to answer a single-category task.
