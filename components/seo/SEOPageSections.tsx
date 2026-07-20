import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import type {
  SEOContentLink,
  SEOFaqItem,
  SEOImage,
  SEOQuoteCta
} from "@/lib/seo-page-types";

export function SEOImagePanel({
  image,
  priority = false,
  sizes = "(min-width: 1024px) 48vw, 100vw",
  aspect = "landscape",
  embedded = false
}: {
  image: SEOImage;
  priority?: boolean;
  sizes?: string;
  aspect?: "landscape" | "standard";
  embedded?: boolean;
}) {
  return (
    <div
      className={`relative min-w-0 overflow-hidden bg-slate-50 ${
        aspect === "standard" ? "aspect-[4/3]" : "aspect-[16/10]"
      } ${embedded ? "" : "rounded-md border border-graphite/10 shadow-sm"}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

export function FAQAccordion({
  items,
  title = "Material Selection FAQ",
  text = "Practical answers for engineering and purchasing teams."
}: {
  items: SEOFaqItem[];
  title?: string;
  text?: string;
}) {
  return (
    <section className="border-y border-graphite/10 bg-slate-50 py-14 lg:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title={title} text={text} align="center" />
        <div className="mt-8 grid gap-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-md border border-graphite/10 bg-white p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-graphite">
                <span>{item.question}</span>
                <ChevronDown
                  className="size-5 shrink-0 text-teal transition group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 pr-8 text-sm leading-7 text-steel">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedContentSection({
  eyebrow = "Related resources",
  title = "Continue your technical review",
  links
}: {
  eyebrow?: string;
  title?: string;
  links: SEOContentLink[];
}) {
  if (!links.length) return null;

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader eyebrow={eyebrow} title={title} />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex h-full flex-col rounded-md border border-graphite/10 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"
            >
              <span className="text-lg font-semibold text-graphite">{link.title}</span>
              <span className="mt-3 text-sm leading-7 text-steel">{link.description}</span>
              <span className="mt-auto pt-5 text-sm font-semibold text-teal">View resource</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QuoteCTASection({
  quoteCta,
  defaultTitle,
  defaultDescription,
  id
}: {
  quoteCta?: SEOQuoteCta;
  defaultTitle: string;
  defaultDescription: string;
  id?: string;
}) {
  const primaryHref = quoteCta?.primaryHref ?? "/request-a-quote";
  const secondaryHref = quoteCta?.secondaryHref ?? "/request-a-quote";

  return (
    <section id={id} className="scroll-mt-24 bg-graphite py-14 text-white lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-citrus">
            Engineering RFQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            {quoteCta?.title ?? defaultTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">
            {quoteCta?.description ?? defaultDescription}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <ButtonLink href={primaryHref}>
            {quoteCta?.primaryLabel ?? "Request a Quote"}
          </ButtonLink>
          <ButtonLink href={secondaryHref} variant="secondary">
            {quoteCta?.secondaryLabel ?? "Upload Drawing"}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
