import Link from "next/link";
import {anchorFor,contextualFor,directoryFor,relatedFor,type LinkPage} from "@/lib/internal-links";
import {navigationProfiles} from "@/lib/related-navigation";

const ownTitle=new Map(navigationProfiles.map(p=>[p.path,p.title]));

const hash=(s:string)=>[...s].reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,7);
/** Tool → "the <name>", guide → "our guide <name>" so sentences read naturally. */
const A=({p}:{p:LinkPage})=><>{p.kind==="guide"?"our guide ":"the "}<Link href={p.path}>{p.anchor}</Link></>;

/** Server-rendered contextual links inside the article body (playbook §5.1 layer 5). */
export function ContextualLinks({path}:{path:string;subject?:string}){
  const links=contextualFor(path);
  if(links.length<3)return null;
  const [a,b,c,d]=links,dir=directoryFor(path),v=hash(path)%4;
  const isGuide=path.startsWith("/guides/"),name=anchorFor(ownTitle.get(path)||"");
  const the=isGuide?"this guide":`the ${name}`;
  const tail=d?<>, while <A p={d}/> covers a closely related question</>:null;
  const sentences=[
    <>If {the} answers only part of your question, continue with <A p={a}/>. Then use <A p={b}/> and <A p={c}/> for the next related checks{tail}.</>,
    <>People who use {the} often need a second figure: try <A p={a}/>, compare it with <A p={b}/>, or work through <A p={c}/>{tail}.</>,
    <>For a connected calculation, open <A p={a}/>. You can also check related numbers with <A p={b}/> or <A p={c}/>{tail}.</>,
    <>A good next step after {the} is <A p={a}/>; <A p={b}/> and <A p={c}/> cover neighbouring tasks{tail}.</>,
  ];
  return <section className="contextual-links" data-testid="contextual-links"><h2>Related tools for this task</h2><p>{sentences[v]} Browse every page in our <Link href={dir.href}>{dir.label}</Link> directory.</p></section>;
}

/** Six relevance-ranked related cards (playbook §5.2). */
export function RelatedTools({path,heading="Related tools"}:{path:string;heading?:string}){
  const items=relatedFor(path),dir=directoryFor(path);
  if(!items.length)return null;
  return <section className="shell related" data-testid="related-list"><div className="section-heading"><div><span className="eyebrow">Continue exploring</span><h2>{heading}</h2></div><Link href={dir.href}>View all {dir.label} →</Link></div><div className="tools-grid three">{items.map(item=><Link className="tool-card" href={item.path} key={item.path}><span>{item.icon}</span><h3>{item.anchor}</h3><p>{item.description}</p><span className="text-link">{item.kind==="guide"?"Read guide":"Open tool"} →</span></Link>)}</div></section>;
}

export const relatedPaths=(path:string)=>relatedFor(path).map(p=>p.path);
