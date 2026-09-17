import type { Metadata } from "next";
import { CategoryBrowser } from "@/components/CategoryBrowser";
import { tools } from "@/lib/tools";
export const metadata:Metadata={title:"All Free Pakistan Calculators and Tools",description:"Browse free Pakistan calculators for energy, solar, tax, mobiles, business, vehicles and education.",alternates:{canonical:"/pk/tools/"}};
export default function ToolsPage(){return <div className="shell listing-page"><span className="eyebrow">SolvePilot directory</span><h1>All calculators and smart tools</h1><p>Choose a category, then explore fast, private and transparent tools created for everyday decisions in Pakistan.</p><CategoryBrowser tools={tools}/></div>}
