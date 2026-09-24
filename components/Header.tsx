import Link from "next/link";
import {Logo} from "./Logo";
import {NavbarSearch,type SearchEntry} from "./NavbarSearch";
import {tools} from "@/lib/tools";
import {globalTools} from "@/lib/global-tools";
import {guides} from "@/lib/guides";
import {pdfTools} from "@/lib/pdf-tools";
import {documentTools} from "@/lib/document-tools";
import {imageTools} from "@/lib/image-tools";
import {mediaTools} from "@/lib/media-tools";
import {generatorTools} from "@/lib/generator-tools";
import {creatorTools} from "@/lib/creator-tools";
import {productivityTools} from "@/lib/productivity-tools";
const searchEntries:SearchEntry[]=[
 ...creatorTools.map(t=>({title:t.title,href:"/generator-tools/"+t.slug+"/",type:"Generator tool" as const,category:t.category,icon:t.icon,searchText:(t.title+" "+t.shortTitle+" "+t.category+" "+t.keywords.join(" ")).toLowerCase()})),
 ...productivityTools.map(t=>({title:t.title,href:"/generator-tools/"+t.slug+"/",type:"Generator tool" as const,category:t.category,icon:t.icon,searchText:(t.title+" "+t.shortTitle+" "+t.category+" "+t.keywords.join(" ")).toLowerCase()})),
 ...generatorTools.map(t=>({title:t.title,href:"/generator-tools/"+t.slug+"/",type:"Generator tool" as const,category:t.category,icon:t.icon,searchText:(t.title+" "+t.shortTitle+" "+t.category+" "+t.keywords.join(" ")).toLowerCase()})),
 ...mediaTools.map(t=>({title:t.title,href:"/media-tools/"+t.slug+"/",type:"Media tool" as const,category:t.kind,icon:t.icon,searchText:(t.title+" "+t.shortTitle+" "+t.keywords.join(" ")).toLowerCase()})),
 ...imageTools.map(t=>({title:t.title,href:"/image-tools/"+t.slug+"/",type:"Image tool" as const,category:"Images",icon:t.icon,searchText:(t.title+" "+t.shortTitle+" "+t.keywords.join(" ")).toLowerCase()})),
 ...documentTools.map(t=>({title:t.title,href:"/document-tools/"+t.slug+"/",type:"Document tool" as const,category:"Documents & data",icon:t.icon,searchText:(t.title+" "+t.shortTitle+" "+t.keywords.join(" ")).toLowerCase()})),
 ...pdfTools.map(t=>({title:t.title,href:"/pdf-tools/"+t.slug+"/",type:"PDF tool" as const,category:"PDF",icon:t.icon,searchText:(t.title+" "+t.shortTitle+" "+t.keywords.join(" ")).toLowerCase()})),
 ...tools.map(t=>({title:t.title,href:"/pk/tools/"+t.slug+"/",type:"Pakistan tool" as const,category:t.category,icon:t.icon,searchText:(t.title+" "+t.shortTitle+" "+t.category+" "+t.keywords.join(" ")).toLowerCase()})),
 ...globalTools.map(t=>({title:t.title,href:"/tools/"+t.slug+"/",type:"Global tool" as const,category:t.category,icon:t.icon,searchText:(t.title+" "+t.shortTitle+" "+t.category+" "+t.keywords.join(" ")).toLowerCase()})),
 ...guides.map(g=>({title:g.title,href:"/guides/"+g.slug+"/",type:"Guide" as const,category:g.category,icon:g.icon,searchText:(g.title+" "+g.description+" "+g.category).toLowerCase()}))
];
export function Header(){return <header className="site-header"><div className="shell nav-wrap"><Logo/><nav aria-label="Primary navigation"><Link href="/generator-tools/">Generators</Link><Link href="/media-tools/">Media tools</Link><Link href="/image-tools/">Image tools</Link><Link href="/document-tools/">Document tools</Link><Link href="/pdf-tools/">PDF tools</Link><Link href="/tools/">Global tools</Link><Link href="/pk/tools/">Pakistan tools</Link><Link href="/guides/">Guides</Link><Link href="/about/">About</Link></nav><NavbarSearch entries={searchEntries}/><Link className="nav-cta" href="/#tool-categories">Explore tools <span>→</span></Link></div></header>}
