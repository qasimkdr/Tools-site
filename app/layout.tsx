import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./pages.css";
import "./card-fix.css";
import "./category-grid-fix.css";
import "./search.css";
import "./pdf-tools.css";
import "./document-tools.css";
import "./image-tools.css";
import "./media-tools.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://solvepilot.xyz";
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:"SolvePilot Pakistan – Free Calculators & Smart Tools",template:"%s | SolvePilot"},description:"Free Pakistan calculators for electricity, solar, salary tax, PTA tax, vehicles, ecommerce, education and mobile buying decisions.",applicationName:"SolvePilot",alternates:{canonical:"/"},openGraph:{type:"website",locale:"en_PK",siteName:"SolvePilot",url:"/",title:"SolvePilot Pakistan – Free Calculators & Smart Tools",description:"Calculate, compare and make smarter decisions with free Pakistan-focused tools.",images:[{url:"/og-image.png",width:1732,height:909,alt:"SolvePilot — Free Calculators & Smart Tools"}]},twitter:{card:"summary_large_image",title:"SolvePilot Pakistan",description:"Free calculators, comparisons and smart decision tools.",images:["/og-image.png"]},robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){const adsense=process.env.NEXT_PUBLIC_ADSENSE_CLIENT||"ca-pub-9114585521723425",ga=process.env.NEXT_PUBLIC_GA_ID;return <html lang="en-PK"><body><Script async strategy="beforeInteractive" crossOrigin="anonymous" src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+adsense}/><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/>{ga&&<><Script strategy="afterInteractive" src={"https://www.googletagmanager.com/gtag/js?id="+ga}/><Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga}');`}</Script></>}</body></html>}
