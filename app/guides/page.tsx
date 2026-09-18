import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Practical Pakistan Calculator Guides",
  description: "Detailed, reviewed guides to electricity bills, tax, solar, mobiles, finance, business, vehicles, construction and education in Pakistan.",
  alternates: { canonical: "/guides/" },
};

export default function Guides() {
  return <div className="shell listing-page guide-index">
    <span className="eyebrow">SolvePilot learning centre</span>
    <h1>Understand the calculation before using the answer.</h1>
    <p>Detailed Pakistan-focused guides explaining formulas, assumptions, official sources, practical checks and the limits of every estimate.</p>
    <div className="guide-index-meta"><span><b>{guides.length}</b> reviewed guides</span><span><b>Official sources</b> where available</span><span><b>Clear limitations</b> on every page</span></div>
    <div className="guide-grid">
      {guides.map((guide) => <article className="guide-card" key={guide.slug}>
        <span>{guide.icon}</span><small>{guide.category} · {guide.readingMinutes} min read</small>
        <h2><Link href={`/guides/${guide.slug}/`}>{guide.title}</Link></h2>
        <p>{guide.description}</p>
        <div className="guide-reviewed">Reviewed {guide.reviewedAt}</div>
        <Link className="text-link" href={`/guides/${guide.slug}/`}>Read detailed guide →</Link>
      </article>)}
    </div>
    <div className="editorial-banner"><div><span className="eyebrow">Verification first</span><h2>Important decisions deserve a second source.</h2><p>Our formulas and examples help you plan and understand. Official authorities, provider quotations and qualified professionals remain the final source for consequential decisions.</p></div><Link className="secondary-button" href="/editorial-policy/">How we review content</Link></div>
  </div>;
}
