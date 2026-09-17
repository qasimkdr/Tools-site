import Link from "next/link";
import type { Tool } from "@/lib/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  return <Link href={`/pk/tools/${tool.slug}/`} className={`tool-card ${tool.accent}`}><span className="tool-icon" aria-hidden>{tool.icon}</span><span className="tool-kicker">{tool.category}</span><h3>{tool.shortTitle}</h3><p>{tool.description}</p><span className="card-action">Use free tool <b>→</b></span></Link>;
}
