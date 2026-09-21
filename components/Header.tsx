import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return <header className="site-header"><div className="shell nav-wrap"><Logo/><nav aria-label="Primary navigation"><Link href="/tools/">Global tools</Link><Link href="/pk/tools/">Pakistan tools</Link><Link href="/pk/mobiles/">Mobiles</Link><Link href="/guides/">Guides</Link><Link href="/about/">About</Link></nav><Link className="nav-cta" href="/tools/">Explore tools <span>→</span></Link></div></header>;
}
