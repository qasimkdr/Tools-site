import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid"><div><Logo/><p>Free calculators, comparisons and decision tools built for a smarter Pakistan.</p></div><div><h3>Explore</h3><Link href="/#tools">All tools</Link><Link href="/pk/mobiles/">Mobile guide</Link><Link href="/guides/">Guides</Link></div><div><h3>Company</h3><Link href="/about/">About</Link><Link href="/editorial-policy/">Editorial policy</Link><Link href="/contact/">Contact</Link></div><div><h3>Legal</h3><Link href="/privacy/">Privacy</Link><Link href="/cookies/">Cookies</Link><Link href="/terms/">Terms</Link><Link href="/disclaimer/">Disclaimer</Link></div></div><div className="shell footer-bottom"><span>© 2026 SolvePilot</span><span>Independent tools for better decisions in Pakistan 🇵🇰</span></div></footer>;
}
