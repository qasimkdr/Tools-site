import Link from "next/link";
import type { Tool } from "@/lib/tools";

/** Only the fields a card renders: keeps client props (and page HTML) small. */
export type CardTool = Pick<Tool, "slug" | "title" | "shortTitle" | "description" | "icon" | "category" | "accent">;
export const toCard = ({slug,title,shortTitle,description,icon,category,accent}: CardTool): CardTool => ({slug,title,shortTitle,description,icon,category,accent});

export function ToolCard({ tool, hrefPrefix = "/pk/tools" }: { tool: CardTool; hrefPrefix?: string }) {
  return <Link href={`${hrefPrefix}/${tool.slug}/`} className={`tool-card ${tool.accent}`}><span className="tool-icon" aria-hidden>{tool.icon}</span><span className="tool-kicker">{tool.category}</span><h3>{tool.shortTitle}</h3><p>{tool.description}</p><span className="card-action">Use free tool <b>→</b></span></Link>;
}
