import {navigationTopics} from "./navigation-topics";
import {globalTools} from './global-tools';
import {tools} from './tools';
import {guides} from './guides';
import {pdfTools} from './pdf-tools';
import {documentTools} from './document-tools';
import {imageTools} from './image-tools';
import {mediaTools} from './media-tools';
import {archiveTools} from './archive-tools';
import {generatorTools} from './generator-tools';
import {productivityTools} from './productivity-tools';
import {creatorTools} from './creator-tools';
import {auditForTool} from './semrush-batch-one-audit';
import {createMatcher,tokens,type PageProfile} from './relevance-engine';
type CatalogPage={slug:string;title:string;description:string;icon:string;keywords?:string[];category?:string;formula?:string;canonicalSlug?:string};
const collections:[string,CatalogPage[]][]=[['/tools',globalTools],['/pk/tools',tools],['/pdf-tools',pdfTools],['/document-tools',documentTools],['/image-tools',imageTools],['/media-tools',mediaTools],['/archive-tools',archiveTools],['/generator-tools',[...generatorTools,...productivityTools,...creatorTools]]];
const profiles:PageProfile[]=collections.flatMap(([prefix,items])=>items.filter(t=>!t.canonicalSlug).map(t=>({path:`${prefix}/${t.slug}/`,title:t.title,description:t.description,icon:t.icon,kind:'tool' as const,region:prefix==='/pk/tools'?'pakistan' as const:'global' as const,category:t.category||prefix,terms:tokens(`${t.title} ${(t.keywords||[]).join(' ')} ${t.description}`),capabilities:tokens(`${t.title} ${t.description} ${t.formula||''}`),approved:[],indexable:true})));
const resolveSlug=(slug:string)=>{const g=globalTools.find(t=>t.slug===slug);if(g)return `/tools/${g.canonicalSlug||g.slug}/`;const p=tools.find(t=>t.slug===slug);return p?`/pk/tools/${p.slug}/`:null;};
for(const g of guides)profiles.push({path:`/guides/${g.slug}/`,title:g.title,description:g.description,icon:g.icon,kind:'guide',region:/pakistan/i.test(g.title+' '+g.slug)?'pakistan':'global',category:g.category,terms:tokens(`${g.title} ${(g.keywords||[]).join(' ')} ${g.description}`),capabilities:tokens(`${g.title} ${g.description} ${g.quickAnswer}`),approved:[...g.relatedTools.flatMap(s=>{const path=resolveSlug(s);return path?[path]:[];}),...g.relatedGuides.map(s=>`/guides/${s}/`)],indexable:true});
const index=new Map(profiles.map(p=>[p.path,p]));
for(const t of globalTools.filter(t=>!t.canonicalSlug)){const p=index.get(`/tools/${t.slug}/`)!;for(const link of auditForTool(t)?.relatedCalculators||[]){const path=link.path||resolveSlug(link.slug);if(path&&index.has(path))p.approved.push(path);}}
// Guide associations supply explicit supporting-guide evidence to their tools.
for(const p of profiles.filter(p=>p.kind==='guide'))for(const path of p.approved){const target=index.get(path);if(target?.kind==='tool'&&tokens(target.title).some(t=>tokens(p.title).includes(t))&&target.terms.filter(t=>p.terms.includes(t)).length>=2)target.approved.push(p.path);}
for(const p of profiles)p.approved=[...new Set(p.approved)].filter(path=>path!==p.path&&index.has(path));
// Small reviewed task families add neighbours, not a site-wide all-to-all block.
for(const topic of navigationTopics){
 for(const path of topic.paths)if(!index.has(path))throw new Error(`Unknown reviewed navigation member: ${topic.id} ${path}`);
 if(topic.paths.length<2||new Set(topic.paths).size!==topic.paths.length)throw new Error(`Invalid navigation topic: ${topic.id}`);
 for(let i=0;i<topic.paths.length;i++){
  const p=index.get(topic.paths[i])!;
  for(const offset of [-1,1]){const target=topic.paths[(i+offset+topic.paths.length)%topic.paths.length];
   p.approved.push(target);p.reviewed={...p.reviewed,[target]:`${topic.id}: ${topic.reason}`};
  }
 }
}
for(const p of profiles)p.approved=[...new Set(p.approved)];
export const navigationProfiles=profiles;
export const relatedNavigation=createMatcher(profiles);
