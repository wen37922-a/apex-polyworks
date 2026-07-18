import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { FloatingRfqButton } from "@/components/FloatingRfqButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/StructuredData";
import { googleAdsIds } from "@/lib/google-ads";
import { getProductImages } from "@/lib/product-images";
import { siteConfig } from "@/lib/site";

const defaultTitle = "Apex PolyWorks | Engineering Plastics and CNC Plastic Machining";

export async function generateMetadata(): Promise<Metadata> {
  const images = await getProductImages();
  const socialImage = images.HOMEPAGE.hero;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: defaultTitle,
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
      title: defaultTitle,
      description: siteConfig.description,
      url: `${siteConfig.url}/`,
      siteName: siteConfig.name,
      images: [
        {
          url: socialImage,
          width: 1600,
          height: 900,
          alt: "Engineering plastic sheets, rods, and CNC machined plastic parts"
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: siteConfig.description,
      images: [socialImage]
    },
    alternates: {
      canonical: `${siteConfig.url}/`
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsIds[0]}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-global-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
            window.gtag('js', new Date());
            ${googleAdsIds.map((id) => `window.gtag('config', '${id}');`).join("\n            ")}
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
