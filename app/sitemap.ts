import type {MetadataRoute} from "next";
import {tools} from "@/lib/tools";
import {guides} from "@/lib/guides";
import {globalTools} from "@/lib/global-tools";
import {pdfTools} from "@/lib/pdf-tools";
import {documentTools} from "@/lib/document-tools";
import {imageTools} from "@/lib/image-tools";
import {mediaTools} from "@/lib/media-tools";
import {archiveTools} from "@/lib/archive-tools";
import {generatorTools} from "@/lib/generator-tools";
import {productivityTools} from "@/lib/productivity-tools";
import {creatorTools} from "@/lib/creator-tools";
export const dynamic="force-static";
const base=process.env.NEXT_PUBLIC_SITE_URL||"https://solvepilot.xyz";
const monthly=(url:string,date:string,priority=.8)=>({url,lastModified:new Date(date),changeFrequency:"monthly" as const,priority});
export default function sitemap():MetadataRoute.Sitemap{
 const fixed=["","/tools","/pdf-tools","/document-tools","/image-tools","/media-tools","/archive-tools","/generator-tools","/pk/tools","/pk/mobiles","/guides","/about","/editorial-policy","/author/mohammad-qasim","/contact","/privacy","/cookies","/terms","/disclaimer"].map((path,i)=>({url:base+path+"/",lastModified:new Date("2026-09-25"),changeFrequency:(i<8?"weekly":"monthly") as "weekly"|"monthly",priority:i===0?1:i<8?.8:.4}));
 return[
  ...fixed,
  ...archiveTools.map(t=>monthly(base+"/archive-tools/"+t.slug+"/","2026-09-25")),
  ...[...generatorTools,...productivityTools,...creatorTools].map(t=>monthly(base+"/generator-tools/"+t.slug+"/","2026-09-24")),
  ...mediaTools.map(t=>monthly(base+"/media-tools/"+t.slug+"/","2026-09-25")),
  ...imageTools.map(t=>monthly(base+"/image-tools/"+t.slug+"/","2026-09-23")),
  ...documentTools.map(t=>monthly(base+"/document-tools/"+t.slug+"/","2026-09-25")),
  ...pdfTools.map(t=>monthly(base+"/pdf-tools/"+t.slug+"/","2026-09-23")),
  ...globalTools.map(t=>monthly(base+"/tools/"+t.slug+"/",t.updatedAt)),
  ...guides.map(g=>monthly(base+"/guides/"+g.slug+"/",g.reviewedAt)),
  ...tools.map(t=>monthly(base+"/pk/tools/"+t.slug+"/",t.updatedAt))
 ];
}
