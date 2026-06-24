import Link from "next/link";
import { Send } from "lucide-react";

export function FloatingRfqButton() {
  return (
    <Link
      href="/request-a-quote"
      className="fixed bottom-4 right-4 z-50 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-amber/90 focus-visible:outline focus-visible:outline-4 focus-visible:outline-amber/20 sm:bottom-6 sm:right-6"
    >
      <Send className="size-4" aria-hidden="true" />
      Request a Quote
    </Link>
  );
}
