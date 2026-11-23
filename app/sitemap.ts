import {siteUrl as base} from "@/lib/site-url";
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
/**
 * Date of the last site-wide change to rendered page content (SEO recovery batches, docs/seo-changelog.md).
 * lastmod = the later of a page's own catalog date and this date. Raise it only when page content really changes.
 * Google ignores priority/changefreq, so they are not emitted.
 */
const CONTENT_REFRESH="2026-11-23";
const later=(date:string)=>date>CONTENT_REFRESH?date:CONTENT_REFRESH;
const entry=(url:string,date:string)=>({url,lastModified:new Date(later(date))});
export default function sitemap():MetadataRoute.Sitemap{
 const refreshed=["","/tools","/pdf-tools","/document-tools","/image-tools","/media-tools","/archive-tools","/generator-tools","/pk/tools","/guides","/cookies","/terms"];
 const fixedDates:Record<string,string>={"/contact":"2026-10-03","/privacy":"2026-10-03"};
 const fixed=["","/tools","/pdf-tools","/document-tools","/image-tools","/media-tools","/archive-tools","/generator-tools","/pk/tools","/pk/mobiles","/guides","/about","/editorial-policy","/author/mohammad-qasim","/contact","/privacy","/cookies","/terms","/disclaimer"].map(path=>({url:base+path+"/",lastModified:new Date(refreshed.includes(path)?CONTENT_REFRESH:fixedDates[path]||"2026-09-25")}));
 return[
  ...fixed,
  ...archiveTools.map(t=>entry(base+"/archive-tools/"+t.slug+"/","2026-09-25")),
  ...[...generatorTools,...productivityTools,...creatorTools].map(t=>entry(base+"/generator-tools/"+t.slug+"/","2026-09-24")),
  ...mediaTools.map(t=>entry(base+"/media-tools/"+t.slug+"/","2026-09-25")),
  ...imageTools.map(t=>entry(base+"/image-tools/"+t.slug+"/","2026-09-23")),
  ...documentTools.map(t=>entry(base+"/document-tools/"+t.slug+"/","2026-09-25")),
  ...pdfTools.map(t=>entry(base+"/pdf-tools/"+t.slug+"/","2026-09-23")),
  ...globalTools.filter(t=>!t.canonicalSlug).map(t=>entry(base+"/tools/"+t.slug+"/",t.updatedAt)),
  ...guides.map(g=>entry(base+"/guides/"+g.slug+"/",g.reviewedAt)),
  ...tools.map(t=>entry(base+"/pk/tools/"+t.slug+"/",t.updatedAt))
 ];
}
