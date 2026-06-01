import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Apex Polymer Works | Engineering Plastics and CNC Plastic Machining",
    template: "%s | Apex Polymer Works"
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
    title: "Apex Polymer Works | Engineering Plastics and CNC Plastic Machining",
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
        <OrganizationJsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
