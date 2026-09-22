"use client";

import Link from "next/link";
import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";

export type SearchEntry = { title:string; href:string; type:"Pakistan tool"|"Global tool"|"Guide"; category:string; icon:string; searchText:string };

export function NavbarSearch({entries}:{entries:SearchEntry[]}) {
  const [open,setOpen]=useState(false);
  const [query,setQuery]=useState("");
  const deferredQuery=useDeferredValue(query.trim().toLowerCase());
  const inputRef=useRef<HTMLInputElement>(null);
  const results=useMemo(()=>{
    if(!deferredQuery) return entries.slice(0,6);
    const words=deferredQuery.split(/\s+/).filter(Boolean);
    return entries.map(entry=>{
      if(!words.every(word=>entry.searchText.includes(word))) return null;
      const title=entry.title.toLowerCase();
      const score=title===deferredQuery?0:title.startsWith(deferredQuery)?1:title.includes(deferredQuery)?2:3;
      return {entry,score};
    }).filter((item):item is {entry:SearchEntry;score:number}=>Boolean(item)).sort((a,b)=>a.score-b.score||a.entry.title.localeCompare(b.entry.title)).slice(0,8).map(item=>item.entry);
  },[deferredQuery,entries]);
  useEffect(()=>{
    if(!open) return;
    inputRef.current?.focus();
    const onKeyDown=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpen(false)};
    document.addEventListener("keydown",onKeyDown);document.body.classList.add("search-open");
    return()=>{document.removeEventListener("keydown",onKeyDown);document.body.classList.remove("search-open")};
  },[open]);
  const close=()=>{setOpen(false);setQuery("")};
  return <>
    <button className="nav-search-button" type="button" aria-label="Search tools and guides" onClick={()=>setOpen(true)}><span aria-hidden="true">⌕</span><b>Search</b></button>
    {open&&<div className="search-overlay" role="presentation" onMouseDown={event=>{if(event.target===event.currentTarget)close()}}><section className="search-dialog" role="dialog" aria-modal="true" aria-labelledby="site-search-title">
      <div className="search-dialog-head"><div><small>Find anything</small><h2 id="site-search-title">Search SolvePilot</h2></div><button type="button" aria-label="Close search" onClick={close}>×</button></div>
      <label className="search-field"><span aria-hidden="true">⌕</span><input ref={inputRef} aria-label="Search tools and guides" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Electricity, salary tax, solar, EMI…" autoComplete="off" />{query&&<button type="button" onClick={()=>setQuery("")} aria-label="Clear search">Clear</button>}</label>
      <div className="search-results" aria-live="polite"><p>{deferredQuery?`${results.length} best matches`:"Popular tools and guides"}</p>{results.length?results.map(entry=><Link key={entry.href} href={entry.href} onClick={close}><span className="search-result-icon">{entry.icon}</span><span><strong>{entry.title}</strong><small>{entry.type} · {entry.category}</small></span><b aria-hidden="true">→</b></Link>):<div className="search-empty"><span>⌕</span><strong>No matching page found</strong><small>Try a shorter phrase such as “solar”, “tax” or “loan”.</small></div>}</div>
      <footer><span>Searches {entries.length} pages instantly</span><span>Zero API requests</span></footer>
    </section></div>}
  </>;
}
