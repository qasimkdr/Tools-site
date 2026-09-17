"use client";
import { useEffect } from "react";

declare global { interface Window { adsbygoogle?: Record<string, unknown>[] } }

export function AdSlot({ slot, format = "auto" }: { slot: string; format?: string }) {
  const enabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";
  useEffect(() => { if (enabled) { try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {} } }, [enabled]);
  if (!enabled) return null;
  return <div className="ad-wrap" aria-label="Advertisement"><ins className="adsbygoogle" style={{display:"block"}} data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT} data-ad-slot={slot} data-ad-format={format} data-full-width-responsive="true"/></div>;
}
