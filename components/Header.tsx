import Link from "next/link";
import { Logo } from "./Logo";
import { NavbarSearch, type SearchEntry } from "./NavbarSearch";
import { tools } from "@/lib/tools";
import { globalTools } from "@/lib/global-tools";
import { guides } from "@/lib/guides";

const searchEntries:SearchEntry[]=[
  ...tools.map(tool=>({title:tool.title,href:`/pk/tools/${tool.slug}/`,type:"Pakistan tool" as const,category:tool.category,icon:tool.icon,searchText:`${tool.title} ${tool.shortTitle} ${tool.category} ${tool.keywords.join(" ")}`.toLowerCase()})),
  ...globalTools.map(tool=>({title:tool.title,href:`/tools/${tool.slug}/`,type:"Global tool" as const,category:tool.category,icon:tool.icon,searchText:`${tool.title} ${tool.shortTitle} ${tool.category} ${tool.keywords.join(" ")}`.toLowerCase()})),
  ...guides.map(guide=>({title:guide.title,href:`/guides/${guide.slug}/`,type:"Guide" as const,category:guide.category,icon:guide.icon,searchText:`${guide.title} ${guide.description} ${guide.category}`.toLowerCase()})),
];

export function Header() {
  return <header className="site-header"><div className="shell nav-wrap"><Logo/><nav aria-label="Primary navigation"><Link href="/tools/">Global tools</Link><Link href="/pk/tools/">Pakistan tools</Link><Link href="/pk/mobiles/">Mobiles</Link><Link href="/guides/">Guides</Link><Link href="/about/">About</Link></nav><NavbarSearch entries={searchEntries}/><Link className="nav-cta" href="/tools/">Explore tools <span>→</span></Link></div></header>;
}
