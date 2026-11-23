import {oct14Audit} from '@/lib/roadmap-oct14-content';
import {next10Audit} from "@/lib/roadmap-next10-oct12-content";
import {BirthdayGenerator} from "@/components/BirthdayGenerator";
import {RentBuyTool} from "@/components/RentBuyTool";
import {roadmapGap20Audit} from "@/lib/roadmap-gap20-audit";
import {RelatedNavigation} from "@/components/RelatedNavigation";
import {ContextualLinks,RelatedTools,relatedPaths} from "@/components/InternalLinks";
import {SEO_JARGON,cleanConsiderations,cleanFaqs,cleanIntro,stripSeoJargon} from "@/lib/page-cleanup";

const canonicalGlobal=globalTools.filter(t=>!t.canonicalSlug);
import {roadmapDeferredAudit} from "@/lib/roadmap-deferred-audit";
import {roadmap423Audit} from "@/lib/roadmap-423-plus-audit";
import {roadmap369Audit} from "@/lib/roadmap-369-plus-audit";
import {roadmap328Audit} from "@/lib/roadmap-328-plus-audit";
import {roadmap268Audit} from "@/lib/roadmap-268-plus-audit";
import {BooleanAlgebraTool} from "@/components/BooleanAlgebraTool";
import {next20Audit} from "@/lib/roadmap-next20-audit";
import {roadmap206Audit} from "@/lib/roadmap-206-225-audit";
import {MinecraftSphereTool} from "@/components/MinecraftSphereTool";
import {roadmap186Audit} from "@/lib/roadmap-186-205-audit";
import {roadmap166Audit} from "@/lib/roadmap-166-185-audit";
import {RedactedTextTool} from "@/components/RedactedTextTool";
import {roadmap146Audit} from "@/lib/roadmap-146-165-audit";
import {roadmap126Audit} from "@/lib/roadmap-126-145-audit";
import {roadmap106Audit} from "@/lib/roadmap-106-125-audit";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calculator } from "@/components/Calculator";
import { AdSlot } from "@/components/AdSlot";
import { FlagshipInsights } from "@/components/FlagshipInsights";
import { insightForTool } from "@/lib/flagship-content";
import { getGlobalTool, globalTools } from "@/lib/global-tools";
import { seoDescription, pageTitle } from "@/lib/seo-metadata";
import { CollegeAdmissionEditorial } from "@/components/CollegeAdmissionEditorial";
import { auditForTool } from "@/lib/semrush-batch-one-audit";

export function generateStaticParams() {
  return globalTools.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getGlobalTool(slug);
  if (!tool) return {};
  const description = seoDescription(tool.description, tool.category, [tool.example, tool.formula]);
  return {
    title: pageTitle(tool.title),
    description,
    keywords: tool.keywords,
    alternates: { canonical: `/tools/${tool.canonicalSlug || tool.slug}/` },
    ...(tool.canonicalSlug ? { robots: { index: false, follow: true } } : {}),
    ...((oct14Audit[tool.slug]||next10Audit[tool.slug]) ? {twitter:{card:"summary_large_image" as const,title:tool.title,description,images:["/og-image.png"]}} : {}),
    openGraph: {
      title: tool.title,
      description,
      url: `/tools/${tool.canonicalSlug || tool.slug}/`,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1732,
          height: 909,
          alt: "SolvePilot — Free Calculators & Smart Tools",
        },
      ],
    },
  };
}

export default async function GlobalToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getGlobalTool(slug);
  if (!tool) notFound();
  const hasDetailedEditorial = Boolean((oct14Audit[tool.slug]||next10Audit[tool.slug])||roadmapGap20Audit[tool.slug]||roadmapDeferredAudit[tool.slug]||roadmap423Audit[tool.slug]||roadmap369Audit[tool.slug]||roadmap328Audit[tool.slug]||roadmap268Audit[tool.slug]||next20Audit[tool.slug]||roadmap206Audit[tool.slug]||roadmap186Audit[tool.slug]||roadmap166Audit[tool.slug]||roadmap106Audit[tool.slug]||roadmap126Audit[tool.slug]||roadmap146Audit[tool.slug]);
  const semrushAudit = auditForTool(tool);
  const faqs = cleanFaqs(tool, canonicalGlobal);
  const considerations = cleanConsiderations(tool, canonicalGlobal);
  const intro = cleanIntro(tool, canonicalGlobal);
  const flagship = hasDetailedEditorial ? null : insightForTool({ ...tool, considerations });
  const url = `https://solvepilot.xyz/tools/${tool.canonicalSlug || tool.slug}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: tool.title,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: tool.description,
        url,
        dateModified: tool.updatedAt,
        author: {
          "@type": "Person",
          name: "Mohammad Qasim",
          url: "https://solvepilot.xyz/author/mohammad-qasim/",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@type": "HowTo",
        name: `How to use ${tool.title}`,
        step: tool.howTo.map((text, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          text,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://solvepilot.xyz/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Global tools",
            item: "https://solvepilot.xyz/tools/",
          },
          { "@type": "ListItem", position: 3, name: tool.title, item: url },
        ],
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="tool-hero">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/tools/">Global tools</Link>
            <span>›</span>
            <span>{tool.shortTitle}</span>
          </nav>
          <div className="tool-heading">
            <span className={`big-tool-icon ${tool.accent}`}>{tool.icon}</span>
            <div>
              <span className="eyebrow">
                Free global {tool.category.toLowerCase()} tool · Reviewed{" "}
                {tool.updatedAt}
              </span>
              <h1>{tool.title}</h1>
              <p>{tool.description}</p>
              <div className="tool-review-line">
                <Link href="/author/mohammad-qasim/">
                  Reviewed by Mohammad Qasim
                </Link>
                <span>Method and limitations disclosed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <article className="shell article-layout">
        <div className="article-main">
          {tool.slug==="random-birthday-generator"?<BirthdayGenerator/>:tool.slug==="home-rent-vs-buy-calculator"?<RentBuyTool/>:tool.slug==="boolean-algebra-calculator"?<BooleanAlgebraTool/>:tool.slug==="redacted-text-generator"?<RedactedTextTool/>:tool.slug==="minecraft-sphere-generator"?<MinecraftSphereTool/>:<Calculator key={tool.slug} slug={tool.slug} />}
          <AdSlot slot="0000000001" format="horizontal" />
          <section className="rich-content">
            <h2>How this calculator helps</h2>
            <p>{intro}</p>
            <h2>How to use it</h2>
            <ol className="how-to-list">
              {tool.howTo.map((step, index) => (
                <li key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
            <div className="info-panel">
              <span>ƒ</span>
              <div>
                <h3>Formula and methodology</h3>
                <p>{tool.formula}</p>

              </div>
            </div>
            <h2>Worked calculation example</h2>
            <p>{tool.example}</p>
            <ContextualLinks path={`/tools/${tool.canonicalSlug || tool.slug}/`} subject={tool.shortTitle} />
            {flagship && <FlagshipInsights content={flagship} />}
            {semrushAudit && (
              <section className="semrush-intent-audit" data-insight-tier={hasDetailedEditorial ? "tool-specific" : undefined}>
                <h2>{hasDetailedEditorial ? "How to interpret your result" : "Search intent and calculator coverage"}</h2>
                <p>{stripSeoJargon(semrushAudit.interpretation)}</p>
                {semrushAudit.relatedCalculators?.length ? (
                  <p>For different inputs or formulas, use {semrushAudit.relatedCalculators.map((item, index) => (
                    <span key={item.slug}>{index > 0 ? "; " : ""}<a href={item.path||`/tools/${item.slug}/`}>{item.title}</a></span>
                  ))}.</p>
                ) : null}
                <h2>{hasDetailedEditorial ? "Scenario comparison" : "Worked scenarios"}</h2>
                <div className="guide-table-wrap">
                  <table>
                    <thead><tr><th>Scenario</th><th>What it shows</th></tr></thead>
                    <tbody>
                      {semrushAudit.scenarios.filter((scenario) => !SEO_JARGON.test(scenario)).map((scenario) => {
                        const [label, ...rest] = scenario.split(" — ");
                        return <tr key={scenario}><td>{label}</td><td>{rest.join(" — ")}</td></tr>;
                      })}
                    </tbody>
                  </table>
                </div>
                <h2>Common mistakes to avoid</h2>
                <ul className="mistake-list">
                  {semrushAudit.mistakes.filter((mistake) => !SEO_JARGON.test(mistake)).map((mistake) => <li key={mistake}>{mistake}</li>)}
                </ul>
                <div className="verification-box">
                  <b>How to verify this result</b>
                  <p>{semrushAudit.verification}</p>
                  <small>
                    {semrushAudit.sourceUrl ? (
                      <><a href={semrushAudit.sourceUrl} target="_blank" rel="noreferrer">Authoritative reference</a>{semrushAudit.secondarySourceUrl ? <> and <a href={semrushAudit.secondarySourceUrl} target="_blank" rel="noreferrer">additional source reference</a></> : null}. {semrushAudit.sourceNote}</>
                    ) : semrushAudit.sourceNote}
                  </small>
                </div>
              </section>
            )}
            {(oct14Audit[tool.slug]||next10Audit[tool.slug])?.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(p=><p key={p}>{p}</p>)}</section>)}
            {tool.slug === "college-admission-chances-calculator" && (
              <CollegeAdmissionEditorial />
            )}

            <h2>What can affect the result?</h2>
            <div className="consideration-grid">
              {considerations.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <h2>Privacy and browser processing</h2>
            <p>The {tool.shortTitle} runs in your browser; SolvePilot does not receive the values you enter. See the <Link href="/privacy/">privacy policy</Link>.</p>
            <h2>Accuracy and verification</h2>
            <p>Before relying on the result, re-check {considerations.map((item) => item.title.toLowerCase()).join(", ")} against your own records. Our <Link href="/editorial-policy/">editorial and calculation policy</Link> explains how methods are reviewed.</p>
            <h2>Limits of this estimate</h2>
            <p>{tool.limitations}</p>
            <div className="accuracy-note">
              <b>Important:</b> Treat the result as a planning estimate. Confirm
              official requirements and consequential decisions with the
              relevant institution, authority or qualified professional.
            </div>
            <h2>Sources and review information</h2>
            <div className="tool-sources">
              <Link href="/editorial-policy/">
                Read our editorial and calculation policy →
              </Link>
              <Link href="/author/mohammad-qasim/">
                About the author and reviewer →
              </Link>
            </div>
            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              {faqs.map((f) => (
                <details key={f.question}>
                  <summary>
                    {f.question}
                    <span>＋</span>
                  </summary>
                  <p>{f.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
        <aside className="article-aside">
          <div className="side-card">
            <b>Why use SolvePilot?</b>
            <span>✓ Free with no signup</span>
            <span>✓ Private browser calculation</span>
            <span>✓ Clearly labelled inputs</span>
            <span>✓ Formula explained</span>
          </div>
          <div className="side-card">
            <b>Editorial standard</b>
            <span>✓ Method reviewed</span>
            <span>✓ Assumptions disclosed</span>
            <span>✓ Limitations explained</span>
            <p>Last reviewed</p>
            <strong>{tool.updatedAt}</strong>
            <small>Report outdated information through our contact page.</small>
          </div>
        </aside>
      </article>
      <RelatedTools path={`/tools/${tool.canonicalSlug || tool.slug}/`} heading="Related tools" />
    <RelatedNavigation path={`/tools/${tool.slug}/`} exclude={relatedPaths(`/tools/${tool.canonicalSlug || tool.slug}/`)} /></>
  );
}
