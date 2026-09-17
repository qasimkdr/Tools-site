"use client";
import { useMemo, useState } from "react";
import { ToolCard } from "@/components/ToolCard";
import type { Tool } from "@/lib/tools";

const categoryMeta:Record<string,{icon:string;copy:string;color:string}>={
  Energy:{icon:"⚡",copy:"Bills, backup and power planning",color:"amber"},Solar:{icon:"☀️",copy:"Panels, batteries and savings",color:"green"},Money:{icon:"💼",copy:"Salary, tax, loans and budgets",color:"blue"},Mobiles:{icon:"📱",copy:"Compare, inspect and choose phones",color:"violet"},Technology:{icon:"🧠",copy:"Devices, data and digital decisions",color:"violet"},Business:{icon:"📊",copy:"Pricing, profit and freelance work",color:"rose"},Vehicles:{icon:"🚗",copy:"Fuel, EV and travel costs",color:"green"},Education:{icon:"🎓",copy:"Marks, attendance and study",color:"violet"},Construction:{icon:"🏗️",copy:"Materials, rooms and quantities",color:"amber"},Everyday:{icon:"✨",copy:"Fast daily calculations",color:"blue"}
};
export function CategoryBrowser({tools,initialCount}:{tools:Tool[];initialCount?:number}){
  const [active,setActive]=useState("All");
  const categories=useMemo(()=>[...new Set(tools.map(t=>t.category))],[tools]);
  const filtered=active==="All"?tools:tools.filter(t=>t.category===active);
  const visible=active==="All"&&initialCount?filtered.slice(0,initialCount):filtered;
  return <div className="category-browser"><div className="category-rail" aria-label="Tool categories"><button className={`category-tile all ${active==="All"?"active":""}`} onClick={()=>setActive("All")}><span>✦</span><b>All tools</b><small>{tools.length} calculators</small></button>{categories.map(category=>{const meta=categoryMeta[category]||{icon:"🧮",copy:"Helpful interactive calculators",color:"blue"};const count=tools.filter(t=>t.category===category).length;return <button key={category} className={`category-tile ${meta.color} ${active===category?"active":""}`} onClick={()=>setActive(category)}><span>{meta.icon}</span><b>{category}</b><small>{count} tools · {meta.copy}</small></button>})}</div><div className="filtered-heading"><div><span>{active==="All"?"Featured collection":`${active} collection`}</span><h2>{active==="All"?"Explore useful calculators":`${active} tools`}</h2></div><b>{filtered.length} available</b></div><div className="tools-grid animated-grid" key={active}>{visible.map((tool,index)=><div className="tool-reveal" style={{animationDelay:`${Math.min(index,11)*35}ms`}} key={tool.slug}><ToolCard tool={tool}/></div>)}</div></div>;
}
