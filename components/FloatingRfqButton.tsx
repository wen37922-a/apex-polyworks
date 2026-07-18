"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function FloatingRfqButton() {
  const pathname = usePathname();
  const href = pathname.startsWith("/materials/") ? "#material-rfq" : "/request-a-quote";

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Quick Material Inquiry on WhatsApp"
        title="Quick Material Inquiry"
        className="group relative grid size-11 place-items-center rounded-md border border-white/20 bg-teal text-white shadow-soft transition hover:bg-teal/90 focus-visible:outline focus-visible:outline-4 focus-visible:outline-teal/20"
      >
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-graphite px-3 py-2 text-xs font-semibold text-white shadow-sm group-hover:block group-focus-visible:block">
          Quick Material Inquiry
        </span>
        <MessageCircle className="size-5" aria-hidden="true" />
      </a>
      <Link
        href={href}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-amber/90 focus-visible:outline focus-visible:outline-4 focus-visible:outline-amber/20"
      >
        <Send className="size-4" aria-hidden="true" />
        Request a Quote
      </Link>
    </div>
  );
}
