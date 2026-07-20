import type { Metadata } from "next";
import { TechnicalArticleTemplate } from "@/components/seo/TechnicalArticleTemplate";
import { peekVsPtfeArticle } from "@/lib/seo-pages/peek-vs-ptfe";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "PEEK vs PTFE: How to Choose the Right Engineering Plastic | Apex PolyWorks"
  },
  description:
    "Compare PEEK vs PTFE for industrial applications. Learn differences in temperature performance, chemical resistance, wear behavior and material selection.",
  alternates: {
    canonical: `${siteConfig.url}/blog/peek-vs-ptfe`
  }
};

export default function PeekVsPtfePage() {
  return <TechnicalArticleTemplate article={peekVsPtfeArticle} />;
}
