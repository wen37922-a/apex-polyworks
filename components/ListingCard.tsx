import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ListingCardProps = {
  href: string;
  eyebrow: string;
  title: string;
  text: string;
};

export function ListingCard({ href, eyebrow, title, text }: ListingCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-md border border-graphite/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">{eyebrow}</p>
      <h3 className="mt-3 text-xl font-semibold text-graphite">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-steel">{text}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal">
        View details
        <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
