import type {MetadataRoute} from "next";
import {tools} from "@/lib/tools";
import {guides} from "@/lib/guides";
import {globalTools} from "@/lib/global-tools";
import {pdfTools} from "@/lib/pdf-tools";
import {documentTools} from "@/lib/document-tools";
import {imageTools} from "@/lib/image-tools";
import {mediaTools} from "@/lib/media-tools";
import {generatorTools} from "@/lib/generator-tools";
import {productivityTools} from "@/lib/productivity-tools";
export const dynamic="force-static";const base=process.env.NEXT_PUBLIC_SITE_URL||"https://solvepilot.xyz";
export default function sitemap():MetadataRoute.Sitemap{const fixed=["","/tools","/pdf-tools","/document-tools","/image-tools","/media-tools","/generator-tools","/pk/tools","/pk/mobiles","/guides","/about","/editorial-policy","/author/mohammad-qasim","/contact","/privacy","/cookies","/terms","/disclaimer"].map((path,i)=>({url:base+path+"/",lastModified:new Date("2026-09-24"),changeFrequency:(i<7?"weekly":"monthly") as "weekly"|"monthly",priority:i===0?1:i<7?.8:.4}));return[...fixed,...[...generatorTools,...productivityTools].map(t=>({url:base+"/generator-tools/"+t.slug+"/",lastModified:new Date("2026-09-24"),changeFrequency:"monthly" as const,priority:.8})),...mediaTools.map(t=>({url:base+"/media-tools/"+t.slug+"/",lastModified:new Date("2026-09-23"),changeFrequency:"monthly" as const,priority:.8})),...imageTools.map(t=>({url:base+"/image-tools/"+t.slug+"/",lastModified:new Date("2026-09-23"),changeFrequency:"monthly" as const,priority:.8})),...documentTools.map(t=>({url:base+"/document-tools/"+t.slug+"/",lastModified:new Date("2026-09-23"),changeFrequency:"monthly" as const,priority:.8})),...pdfTools.map(t=>({url:base+"/pdf-tools/"+t.slug+"/",lastModified:new Date("2026-09-23"),changeFrequency:"monthly" as const,priority:.8})),...globalTools.map(t=>({url:base+"/tools/"+t.slug+"/",lastModified:new Date(t.updatedAt),changeFrequency:"monthly" as const,priority:.8})),...guides.map(g=>({url:base+"/guides/"+g.slug+"/",lastModified:new Date(g.reviewedAt),changeFrequency:"monthly" as const,priority:.8})),...tools.map(t=>({url:base+"/pk/tools/"+t.slug+"/",lastModified:new Date(t.updatedAt),changeFrequency:"monthly" as const,priority:.8}))]}
