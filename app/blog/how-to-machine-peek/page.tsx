import type { Metadata } from "next";
import { TechnicalArticleTemplate } from "@/components/seo/TechnicalArticleTemplate";
import { howToMachinePeekArticle } from "@/lib/seo-pages/how-to-machine-peek";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "How to Machine PEEK: CNC Machining Guide for Engineering Components | Apex PolyWorks"
  },
  description:
    "Learn how PEEK machining works, including material considerations, CNC processing factors and design requirements for custom PEEK components.",
  alternates: {
    canonical: `${siteConfig.url}/blog/how-to-machine-peek`
  }
};

export default function HowToMachinePeekPage() {
  return <TechnicalArticleTemplate article={howToMachinePeekArticle} />;
}
