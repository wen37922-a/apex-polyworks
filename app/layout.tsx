import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { FloatingRfqButton } from "@/components/FloatingRfqButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";

const googleAdsId = "AW-18303746283";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Apex PolyWorks | Engineering Plastics and CNC Plastic Machining",
    template: "%s | Apex PolyWorks"
  },
  description: siteConfig.description,
  keywords: [
    "engineering plastics",
    "plastic CNC machining",
    "cut to size plastic sheets",
    "plastic rods",
    "custom plastic parts",
    "PEEK machining",
    "PTFE parts",
    "polycarbonate sheets"
  ],
  openGraph: {
    title: "Apex PolyWorks | Engineering Plastics and CNC Plastic Machining",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/plastic-machining-hero.png",
        width: 1680,
        height: 945,
        alt: "Engineering plastic sheets, rods, and CNC machined plastic parts"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: siteConfig.url
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-global-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
            window.gtag('js', new Date());
            window.gtag('config', '${googleAdsId}');
          `}
        </Script>
        <OrganizationJsonLd />
        <Header />
        {children}
        <FloatingRfqButton />
        <Footer />
      </body>
    </html>
  );
}
