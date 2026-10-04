import Link from 'next/link';
import {relatedNavigation} from '@/lib/related-navigation';
export function RelatedNavigation({path,exclude=[]}:{path:string;exclude?:string[]}) {
  const matches=relatedNavigation.select(path,5,exclude);
  if(!matches.length)return null;
  return <section className="shell related" data-related-navigation="v1"><div className="section-heading"><div><span className="eyebrow">Continue exploring</span><h2>Related tools and guides</h2></div></div><div className="tools-grid three">{matches.map(match=>{const page=relatedNavigation.byPath.get(match.path)!;return <Link className="tool-card" href={page.path} key={page.path}><span>{page.icon}</span><h3>{page.title}</h3><p>{page.description}</p><span className="text-link">{page.kind==='guide'?'Read guide':'Open tool'} →</span></Link>;})}</div></section>;
}
