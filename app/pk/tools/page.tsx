import type { Metadata } from "next";
import { ToolCard } from "@/components/ToolCard";
import { categories, tools } from "@/lib/tools";
export const metadata:Metadata={title:"All Free Pakistan Calculators and Tools",description:"Browse free Pakistan calculators for energy, solar, tax, mobiles, business, vehicles and education.",alternates:{canonical:"/pk/tools/"}};
export default function ToolsPage(){return <div className="shell listing-page"><span className="eyebrow">SolvePilot directory</span><h1>All calculators and smart tools</h1><p>Fast, private and transparent tools created for everyday decisions in Pakistan.</p>{categories.map(category=><section key={category}><h2>{category}</h2><div className="tools-grid">{tools.filter(t=>t.category===category).map(t=><ToolCard key={t.slug} tool={t}/>)}</div></section>)}</div>}
