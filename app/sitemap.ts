import type {MetadataRoute} from "next";
import {tools} from "@/lib/tools";
import {guides} from "@/lib/guides";
import {globalTools} from "@/lib/global-tools";
import {pdfTools} from "@/lib/pdf-tools";
export const dynamic="force-static";const base=process.env.NEXT_PUBLIC_SITE_URL||"https://solvepilot.xyz";
export default function sitemap():MetadataRoute.Sitemap{const fixed=["","/tools","/pdf-tools","/pk/tools","/pk/mobiles","/guides","/about","/editorial-policy","/author/mohammad-qasim","/contact","/privacy","/cookies","/terms","/disclaimer"].map((path,i)=>({url:base+path+"/",lastModified:new Date("2026-09-23"),changeFrequency:(i<6?"weekly":"monthly") as "weekly"|"monthly",priority:i===0?1:i<6?.8:.4}));return[...fixed,...pdfTools.map(t=>({url:base+"/pdf-tools/"+t.slug+"/",lastModified:new Date("2026-09-23"),changeFrequency:"monthly" as const,priority:.8})),...globalTools.map(t=>({url:base+"/tools/"+t.slug+"/",lastModified:new Date(t.updatedAt),changeFrequency:"monthly" as const,priority:.8})),...guides.map(g=>({url:base+"/guides/"+g.slug+"/",lastModified:new Date(g.reviewedAt),changeFrequency:"monthly" as const,priority:.8})),...tools.map(t=>({url:base+"/pk/tools/"+t.slug+"/",lastModified:new Date(t.updatedAt),changeFrequency:"monthly" as const,priority:.8}))]}
