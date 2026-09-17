import type { MetadataRoute } from "next";
import { tools } from "@/lib/tools";
export const dynamic = "force-static";
const base=process.env.NEXT_PUBLIC_SITE_URL||"https://solvepilot.com";
export default function sitemap():MetadataRoute.Sitemap{const fixed=["","/pk/tools","/pk/mobiles","/guides","/about","/editorial-policy","/contact","/privacy","/terms","/disclaimer"].map((path,i)=>({url:`${base}${path}/`,lastModified:new Date("2026-09-17"),changeFrequency:(i<4?"weekly":"monthly") as "weekly"|"monthly",priority:i===0?1:i<4?.8:.4}));return[...fixed,...tools.map(t=>({url:`${base}/pk/tools/${t.slug}/`,lastModified:new Date(t.updatedAt),changeFrequency:"monthly" as const,priority:.8}))]}
