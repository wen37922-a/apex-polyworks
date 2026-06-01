import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { findPost, blogPosts, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Knowledge Center", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` }
        ]}
      />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            {post.category} / {post.readTime}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-steel">{post.excerpt}</p>
          <div className="mt-10 grid gap-6 text-base leading-8 text-ink">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 rounded-md bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-graphite">Need material help on a live RFQ?</h2>
            <p className="mt-3 text-sm leading-6 text-steel">
              Send drawings, application notes, and target quantity. We will help review the material and manufacturing route before quoting.
            </p>
            <div className="mt-5">
              <ButtonLink href="/request-a-quote">Start RFQ</ButtonLink>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
