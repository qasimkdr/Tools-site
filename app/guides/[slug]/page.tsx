import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, guides } from "@/lib/guides";
import { getTool } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";

export function generateStaticParams() { return guides.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.description, alternates: { canonical: `/guides/${guide.slug}/` }, openGraph: { title: guide.title, description: guide.description, url: `/guides/${guide.slug}/`, type: "article" } };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const relatedTools = guide.relatedTools.map(getTool).filter(Boolean);
  const relatedGuides = guide.relatedGuides.map(getGuide).filter(Boolean);
  const jsonLd = {"@context":"https://schema.org","@graph":[{"@type":"Article",headline:guide.title,description:guide.description,datePublished:guide.publishedAt||"2026-09-18",dateModified:guide.reviewedAt,author:{"@type":"Person",name:"Mohammad Qasim",url:"https://solvepilot.xyz/author/mohammad-qasim/"},reviewedBy:{"@type":"Person",name:"Mohammad Qasim",url:"https://solvepilot.xyz/author/mohammad-qasim/"},publisher:{"@type":"Organization",name:"SolvePilot",url:"https://solvepilot.xyz/"},mainEntityOfPage:`https://solvepilot.xyz/guides/${guide.slug}/`},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://solvepilot.xyz/"},{"@type":"ListItem",position:2,name:"Guides",item:"https://solvepilot.xyz/guides/"},{"@type":"ListItem",position:3,name:guide.title,item:`https://solvepilot.xyz/guides/${guide.slug}/`}]},...(guide.faqs?.length?[{"@type":"FAQPage",mainEntity:guide.faqs.map(item=>({"@type":"Question",name:item.question,acceptedAnswer:{"@type":"Answer",text:item.answer}}))}]:[])]};
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>
    <article className="guide-article">
      <header className="guide-hero"><div className="shell guide-hero-inner">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/guides/">Guides</Link><span>›</span><span>{guide.category}</span></nav>
        <span className="guide-icon">{guide.icon}</span><span className="eyebrow">{guide.category} guide · {guide.readingMinutes} minute read</span>
        <h1>{guide.title}</h1><p>{guide.description}</p>
        <div className="byline"><Link href="/author/mohammad-qasim/">Written and reviewed by Mohammad Qasim</Link><span>Published {guide.publishedAt||"2026-09-18"}</span><span>Updated {guide.reviewedAt}</span><span>Sources checked</span></div>
      </div></header>
      <div className="shell guide-layout"><div className="guide-body">
        <section className="quick-answer"><span>Quick answer</span><p>{guide.quickAnswer}</p></section>
        <section><h2>What to remember</h2><ul className="takeaway-list">{guide.takeaways.map(item=><li key={item}>✓ <span>{item}</span></li>)}</ul></section>
        {guide.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}{section.bullets&&<ul>{section.bullets.map(item=><li key={item}>{item}</li>)}</ul>}</section>)}
        {guide.tables?.map(table=><section key={table.caption}><h2>{table.caption}</h2><div className="guide-table-wrap"><table><thead><tr>{table.headers.map(header=><th key={header}>{header}</th>)}</tr></thead><tbody>{table.rows.map((row,index)=><tr key={`${table.caption}-${index}`}>{row.map((cell,cellIndex)=><td key={`${index}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>{table.note&&<p className="table-note">{table.note}</p>}</section>)}
        {guide.example&&<section className="worked-example"><h2>{guide.example.heading}</h2>{guide.example.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}{guide.example.steps&&<ol>{guide.example.steps.map(step=><li key={step}>{step}</li>)}</ol>}</section>}
        {guide.faqs?.length&&<section><h2>Frequently asked questions</h2><div className="guide-faqs">{guide.faqs.map(item=><details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>}
        <section className="guide-limit"><h2>Limitations and responsible use</h2><p>{guide.limitation}</p></section>
        <section><h2>Sources and further verification</h2><div className="source-list">{guide.sources.map(source=><a key={source.name} href={source.url} target={source.url.startsWith("http")?"_blank":undefined} rel={source.url.startsWith("http")?"noopener noreferrer":undefined}><b>{source.name}</b><span>{source.note}</span></a>)}</div><p className="source-note">Sources are provided for verification. A link does not imply endorsement, and official rules may change after our review date.</p></section>
        <section><h2>Continue learning</h2><div className="related-guide-links">{relatedGuides.map(item=><Link key={item!.slug} href={`/guides/${item!.slug}/`}><span>{item!.icon}</span><b>{item!.title}</b> →</Link>)}</div></section>
      </div><aside className="guide-aside"><div className="side-card"><b>Editorial checks</b><span>✓ Practical purpose</span><span>✓ Method explained</span><span>✓ Primary sources preferred</span><span>✓ Limitations disclosed</span><Link className="text-link" href="/editorial-policy/">Read our policy →</Link></div><div className="side-card author-mini"><span>MQ</span><div><b>Mohammad Qasim</b><small>Founder and editor, SolvePilot</small><Link href="/author/mohammad-qasim/">About the author →</Link></div></div></aside></div>
    </article>
    <section className="shell related guide-tools"><div className="section-heading"><div><span className="eyebrow">Put the guide into practice</span><h2>Related calculators</h2></div><Link href="/pk/tools/">All tools →</Link></div><div className="tools-grid three">{relatedTools.slice(0,5).map(tool=><ToolCard key={tool!.slug} tool={tool!}/>)}</div></section>
  </>;
}
