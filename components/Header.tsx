import Link from "next/link";
import {Logo} from "./Logo";
import {NavbarSearch,type SearchEntry} from "./NavbarSearch";
import {tools} from "@/lib/tools";
import {globalTools} from "@/lib/global-tools";
import {guides} from "@/lib/guides";
import {pdfTools} from "@/lib/pdf-tools";
import {documentTools} from "@/lib/document-tools";
const searchEntries:SearchEntry[]=[
 ...documentTools.map(t=>({title:t.title,href:"/document-tools/"+t.slug+"/",type:"Document tool" as const,category:"Documents & data",icon:t.icon,searchText:(t.title+" "+t.shortTitle+" "+t.keywords.join(" ")).toLowerCase()})),
 ...pdfTools.map(t=>({title:t.title,href:"/pdf-tools/"+t.slug+"/",type:"PDF tool" as const,category:"PDF",icon:t.icon,searchText:(t.title+" "+t.shortTitle+" "+t.keywords.join(" ")).toLowerCase()})),
 ...tools.map(t=>({title:t.title,href:"/pk/tools/"+t.slug+"/",type:"Pakistan tool" as const,category:t.category,icon:t.icon,searchText:(t.title+" "+t.shortTitle+" "+t.category+" "+t.keywords.join(" ")).toLowerCase()})),
 ...globalTools.map(t=>({title:t.title,href:"/tools/"+t.slug+"/",type:"Global tool" as const,category:t.category,icon:t.icon,searchText:(t.title+" "+t.shortTitle+" "+t.category+" "+t.keywords.join(" ")).toLowerCase()})),
 ...guides.map(g=>({title:g.title,href:"/guides/"+g.slug+"/",type:"Guide" as const,category:g.category,icon:g.icon,searchText:(g.title+" "+g.description+" "+g.category).toLowerCase()}))
];
export function Header(){return <header className="site-header"><div className="shell nav-wrap"><Logo/><nav aria-label="Primary navigation"><Link href="/document-tools/">Document tools</Link><Link href="/pdf-tools/">PDF tools</Link><Link href="/tools/">Global tools</Link><Link href="/pk/tools/">Pakistan tools</Link><Link href="/guides/">Guides</Link><Link href="/about/">About</Link></nav><NavbarSearch entries={searchEntries}/><Link className="nav-cta" href="/document-tools/">Document tools <span>→</span></Link></div></header>}
