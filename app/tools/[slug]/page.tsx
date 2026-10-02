import {roadmap146Audit} from "@/lib/roadmap-146-165-audit";
import {roadmap126Audit} from "@/lib/roadmap-126-145-audit";
import {roadmap106Audit} from "@/lib/roadmap-106-125-audit";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calculator } from "@/components/Calculator";
import { AdSlot } from "@/components/AdSlot";
import { ToolCard } from "@/components/ToolCard";
import { FlagshipInsights } from "@/components/FlagshipInsights";
import { insightForTool } from "@/lib/flagship-content";
import { getGlobalTool, globalTools } from "@/lib/global-tools";
import { seoDescription } from "@/lib/seo-metadata";
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
  const description = seoDescription(tool.description, tool.category);
  return {
    title: tool.title,
    description,
    keywords: tool.keywords,
    alternates: { canonical: `/tools/${tool.canonicalSlug || tool.slug}/` },
    ...(tool.canonicalSlug ? { robots: { index: false, follow: true } } : {}),
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
  const hasDetailedEditorial = Boolean(roadmap106Audit[tool.slug]||roadmap126Audit[tool.slug]||roadmap146Audit[tool.slug]);
  const flagship = hasDetailedEditorial ? null : insightForTool(tool);
  const semrushAudit = auditForTool(tool);
  const incoming = globalTools.filter(item => item.slug !== tool.slug && auditForTool(item)?.relatedCalculators?.some(link => link.slug === tool.slug));
  const outgoing = semrushAudit?.relatedCalculators?.map(link => link.slug) || [];
  const related = globalTools
    .filter((item) => item.slug !== tool.slug && !item.canonicalSlug)
    .sort(
      (a, b) =>
        (Number(incoming.includes(b)) * 4 + Number(outgoing.includes(b.slug)) * 2 + Number(b.category === tool.category)) -
        (Number(incoming.includes(a)) * 4 + Number(outgoing.includes(a.slug)) * 2 + Number(a.category === tool.category)),
    )
    .slice(0, 5);
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
        mainEntity: tool.faqs.map((f) => ({
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
          <Calculator key={tool.slug} slug={tool.slug} />
          <AdSlot slot="0000000001" format="horizontal" />
          <section className="rich-content">
            <h2>How this calculator helps</h2>
            <p>{tool.intro}</p>
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
                <p>
                  {tool.category === "Education"
                    ? "The calculator applies the disclosed heuristic to values entered on this device. It does not load private admissions data or claim to reproduce an institution's review process."
                    : "The calculator applies the displayed arithmetic to the values entered on this device. It does not silently load a local tax rate, currency conversion or commercial assumption."}
                </p>
              </div>
            </div>
            <h2>Worked calculation example</h2>
            <p>{tool.example}</p>
            {flagship && <FlagshipInsights content={flagship} />}
            {semrushAudit && (
              <section className="semrush-intent-audit" data-insight-tier={hasDetailedEditorial ? "tool-specific" : undefined}>
                <h2>{hasDetailedEditorial ? "How to interpret your result" : "Search intent and calculator coverage"}</h2>
                <p>{semrushAudit.interpretation}</p>
                {semrushAudit.relatedCalculators?.length ? (
                  <p>For different inputs or formulas, use {semrushAudit.relatedCalculators.map((item, index) => (
                    <span key={item.slug}>{index > 0 ? "; " : ""}<a href={`/tools/${item.slug}/`}>{item.title}</a></span>
                  ))}.</p>
                ) : null}
                <h3>Related questions this calculator covers</h3>
                <ul>
                  {semrushAudit.keywordThemes.map((theme) => <li key={theme}>{theme}</li>)}
                </ul>
                <h2>{hasDetailedEditorial ? "Scenario comparison" : "Worked scenarios"}</h2>
                <div className="guide-table-wrap">
                  <table>
                    <thead><tr><th>Scenario</th><th>What it shows</th></tr></thead>
                    <tbody>
                      {semrushAudit.scenarios.map((scenario) => {
                        const [label, ...rest] = scenario.split(" — ");
                        return <tr key={scenario}><td>{label}</td><td>{rest.join(" — ")}</td></tr>;
                      })}
                    </tbody>
                  </table>
                </div>
                <h2>Common mistakes to avoid</h2>
                <ul className="mistake-list">
                  {semrushAudit.mistakes.map((mistake) => <li key={mistake}>{mistake}</li>)}
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
            {tool.slug === "college-admission-chances-calculator" && (
              <CollegeAdmissionEditorial />
            )}
            {tool.category !== "Education" && !hasDetailedEditorial && <><h2>Understanding the displayed figures</h2>
            <p>
              The main result answers the page’s primary question, while the
              supporting figures reveal how that answer was formed. Read the
              labels carefully before comparing alternatives. A percentage can
              describe a rate, a share of income, a fee or a change over time;
              those meanings are not interchangeable. Monetary fields are
              deliberately currency-neutral, so use one currency throughout the
              calculation and convert external figures before entering them.
            </p>
            <p>
              Dates, balances and rates should come from the same measurement
              period. When an annual rate is combined with monthly payments, the
              calculator converts the rate to the relevant periodic basis
              described in the methodology. Displayed values are rounded for
              readability, but calculations retain additional precision. Small
              differences from a provider statement can result from daily
              accrual, transaction timing or the provider’s rounding convention.
            </p>
            <h2>Planning with multiple scenarios</h2>
            <p>
              Start with values that best describe the current situation and
              keep that result as the baseline. Next, change only one uncertain
              input—such as a rate, payment, fee, return or time period—and
              calculate again. This makes the source of the difference visible.
              A cautious scenario is generally more informative than increasing
              several favourable assumptions at once.
            </p>
            <p>
              Do not interpret a favourable estimate as approval, eligibility or
              a forecast. The calculator cannot know future market conditions,
              personal risk tolerance, contractual exceptions or rules that
              apply in a particular jurisdiction. When comparing products, use
              equivalent periods and include charges that are collected outside
              the headline rate.
            </p></>}
            <h2>What can affect the result?</h2>
            <div className="consideration-grid">
              {tool.considerations.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <h2>Privacy and browser processing</h2>
            <p>
              Values entered on this page are processed in the current browser
              session. SolvePilot does not require an account and does not
              receive the values entered into the calculator.
              Refreshing or closing the page clears the working values unless
              the browser itself restores a previous session. Avoid entering
              identifying or account information because the calculation needs
              summary values only.
            </p>
            <h2>Accuracy and verification</h2>
            <p>
              Accuracy depends first on input quality. Confirm definitions,
              scales, dates and source information before entering a value. Keep
              an independent record of any result used for planning because this
              page does not create an official statement or retain a calculation
              history.
            </p>
            <h2>Limits of this estimate</h2>
            <p>{tool.limitations}</p>
            <div className="accuracy-note">
              <b>Important:</b> Treat the result as a planning estimate. Confirm
              official requirements and consequential decisions with the
              relevant institution, authority or qualified professional.
            </div>
            <h2>Sources and review information</h2>
            <div className="tool-sources">
              <span>
                This tool uses a disclosed calculation and user-entered values;
                it does not embed private institutional data or guarantee an
                outcome.
              </span>
              <Link href="/editorial-policy/">
                Read our editorial and calculation policy →
              </Link>
              <Link href="/author/mohammad-qasim/">
                About the author and reviewer →
              </Link>
            </div>
            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              {tool.faqs.map((f) => (
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
      <section className="shell related">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Continue exploring</span>
            <h2>Related global tools</h2>
          </div>
          <Link href="/tools/">View every global tool →</Link>
        </div>
        <div className="tools-grid four">
          {related.map((item) => (
            <ToolCard key={item.slug} tool={item} hrefPrefix="/tools" />
          ))}
        </div>
      </section>
    </>
  );
}
