/** One origin for sitemap, robots and root metadata; reject accidental path/query URLs. */
export function normalizeSiteUrl(input:string):string{
 const url=new URL(input.trim());
 if(!['http:','https:'].includes(url.protocol)||url.username||url.password||url.search||url.hash||url.pathname.replace(/\/+$/,'')!=='')throw Error('NEXT_PUBLIC_SITE_URL must be an absolute HTTP(S) origin without a path, query or credentials.');
 return url.origin;
}
export const siteUrl=normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL||'https://solvepilot.xyz');
