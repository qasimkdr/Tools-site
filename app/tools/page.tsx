import type { Metadata } from "next";
import Link from "next/link";
import { CategoryBrowser } from "@/components/CategoryBrowser";
import { globalTools } from "@/lib/global-tools";

export const metadata: Metadata = {
  title: "Free Global Finance and Online Calculators",
  description:
    "Use free global finance calculators for cash runway, loans, budgets, savings and business planning, plus everyday and technology tools with explained formulas.",
  alternates: { canonical: "/tools/" },
};

const copy: Record<string, string> = {
  Crafts: 'Plan fabric and craft material quantities from measured dimensions, usable widths and explicit working allowances.',
  Construction: 'Estimate separate material quantities with measured dimensions, product sizes and supplier assumptions; verify the project design independently.',
  Science: 'Inspect bounded scientific arithmetic with stated inputs, units and method limits; calculations do not establish laboratory or clinical validation.',
  Sports: 'Check sport-specific scores and performance arithmetic under the disclosed rules and entered assumptions.',
  "E-commerce & Ads":
    "Measure advertising efficiency, acquisition cost, customer value, order contribution, returns, inventory and shipping with currency-neutral inputs.",
  Money:
    "Plan cash runway, emergency reserves, savings goals, borrowing, budgets and recurring costs with currency-neutral inputs and transparent assumptions.",
  Business:
    "Check pricing, tax, margins, break-even points and working time before making a commercial decision.",
  Education:
    "Compare college-admission scenarios with disclosed assumptions, cautious ranges and clear guidance on what an estimator cannot know.",
  Everyday:
    "Solve shopping, dining, fitness and shared-expense calculations quickly without creating an account.",
  Technology:
    "Estimate downloads and resize digital media with clearly labelled technical units.",
  Vehicles:
    "Compare car financing, lease-versus-buy costs and fuel-economy measurements with clearly disclosed assumptions.",
};

export default function GlobalToolsPage() {
  const discoverableTools = globalTools.filter((tool) => !tool.canonicalSlug);
  const categories = [...new Set(discoverableTools.map((tool) => tool.category))];
  return (
    <div className="shell listing-page">
      <span className="eyebrow">Global SolvePilot collection</span>
      <h1>Free online calculators for everyday decisions</h1>
      <p>
        Choose a universal tool that works with your own currency and
        measurements. Calculations run privately in your browser, and every page
        explains its formula, assumptions and limits.
      </p>
      <CategoryBrowser tools={discoverableTools} hrefPrefix="/tools" />
      <section className="category-explainers">
        <span className="eyebrow">Browse by purpose</span>
        <h2>Global calculator collections</h2>
        <div className="category-explainer-grid">
          {categories.map((category) => (
            <article key={category}>
              <h3>{category} calculators</h3>
              <p>{copy[category]}</p>
              <div>
                {discoverableTools
                  .filter((tool) => tool.category === category)
                  .slice(0, 4)
                  .map((tool) => (
                    <Link key={tool.slug} href={`/tools/${tool.slug}/`}>
                      {tool.shortTitle} →
                    </Link>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="accuracy-note">
        <b>Looking for local calculations?</b> Pakistan tax, electricity, solar,
        property and marketplace tools remain in the{" "}
        <Link href="/pk/tools/">Pakistan tools directory</Link>.
      </section>
    </div>
  );
}
