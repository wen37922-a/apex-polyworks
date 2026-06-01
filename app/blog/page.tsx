import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { blogPosts, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Knowledge Center for Engineering Plastics and CNC Plastic Parts",
  description:
    "Practical articles for buyers choosing engineering plastics, CNC machining options, cut-to-size sheets, and custom plastic parts.",
  alternates: {
    canonical: `${siteConfig.url}/blog`
  }
};

export default function BlogPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Knowledge Center", path: "/blog" }
        ]}
      />
      <PageHero
        eyebrow="Knowledge Center"
        title="Practical plastic material and RFQ guidance for industrial buyers"
        text="Short, useful articles on material selection, plastic machining, sheet purchasing, and custom part sourcing."
        primaryCta="Request a Quote"
        secondaryCta="Contact an Expert"
      />
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Articles"
            title="Buyer-focused technical notes"
            text="Written for sourcing, engineering, and maintenance teams that need clear tradeoffs before placing an order."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-md border border-graphite/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"
              >
                <div className="flex items-center gap-3 text-sm font-semibold text-teal">
                  <BookOpenText className="size-4" aria-hidden="true" />
                  {post.category} / {post.readTime}
                </div>
                <h2 className="mt-4 text-2xl font-semibold leading-tight text-graphite">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-steel">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                  Read article
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
