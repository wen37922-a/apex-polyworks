"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function FloatingRfqButton() {
  const pathname = usePathname();
  const href = pathname.startsWith("/materials/") ? "#material-rfq" : "/request-a-quote";
  const shouldAvoidHeroCtas =
    pathname === "/"
    || pathname === "/products/peek-sheet"
    || pathname === "/services/cnc-plastic-machining";
  const shouldAvoidEntireHero = pathname === "/services/cnc-plastic-machining";
  const floatingRef = useRef<HTMLDivElement>(null);
  const [overlapsHeroCtas, setOverlapsHeroCtas] = useState(shouldAvoidHeroCtas);
  const [rfqInView, setRfqInView] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 639px)");
    const forms = new Map<Element, boolean>();
    let restoreTimer: ReturnType<typeof setTimeout> | undefined;
    const updateVisibility = () => {
      clearTimeout(restoreTimer);
      if (!mobileQuery.matches) {
        setRfqInView(false);
      } else if (Array.from(forms.values()).some(Boolean)) {
        setRfqInView(true);
      } else {
        // Wait for scrolling to settle before restoring both floating actions.
        restoreTimer = setTimeout(() => setRfqInView(false), 150);
      }
    };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (forms.has(entry.target)) forms.set(entry.target, entry.isIntersecting);
      }
      updateVisibility();
    }, { rootMargin: "48px 0px", threshold: 0 });
    const syncForms = () => {
      for (const form of forms.keys()) {
        if (!form.isConnected) {
          observer.unobserve(form);
          forms.delete(form);
        }
      }
      document.querySelectorAll('form[action="/api/request-quote"]').forEach((form) => {
        if (forms.has(form)) return;
        const rect = form.getBoundingClientRect();
        forms.set(form, rect.bottom >= -48 && rect.top <= window.innerHeight + 48);
        observer.observe(form);
      });
      updateVisibility();
    };
    syncForms();
    // Also cover forms arriving after client navigation or streamed rendering.
    const mutations = new MutationObserver(syncForms);
    mutations.observe(document.body, { childList: true, subtree: true });
    mobileQuery.addEventListener("change", updateVisibility);
    return () => {
      clearTimeout(restoreTimer);
      observer.disconnect();
      mutations.disconnect();
      mobileQuery.removeEventListener("change", updateVisibility);
    };
  }, [pathname]);

  useEffect(() => {
    if (!shouldAvoidHeroCtas) {
      setOverlapsHeroCtas(false);
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 640px)");
    let animationFrame = 0;

    const updateOverlap = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        if (!mobileQuery.matches || !floatingRef.current) {
          setOverlapsHeroCtas(false);
          return;
        }

        const hero = document.querySelector("main > section:first-of-type");
        const heroCtas = hero?.querySelectorAll<HTMLAnchorElement>(
          'a[href="/request-a-quote"], a[href="#cnc-rfq"]'
        );

        if (!heroCtas?.length) {
          setOverlapsHeroCtas(false);
          return;
        }

        const floatingRect = floatingRef.current.getBoundingClientRect();
        const heroRect = hero?.getBoundingClientRect();
        const overlaps = shouldAvoidEntireHero && heroRect
          ? heroRect.bottom > floatingRect.top
          : Array.from(heroCtas).some((cta) => {
              const ctaRect = cta.getBoundingClientRect();
              return (
                ctaRect.left < floatingRect.right &&
                ctaRect.right > floatingRect.left &&
                ctaRect.top < floatingRect.bottom &&
                ctaRect.bottom > floatingRect.top
              );
            });

        setOverlapsHeroCtas(overlaps);
      });
    };

    updateOverlap();
    window.addEventListener("scroll", updateOverlap, { passive: true });
    window.addEventListener("resize", updateOverlap);
    mobileQuery.addEventListener("change", updateOverlap);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateOverlap);
      window.removeEventListener("resize", updateOverlap);
      mobileQuery.removeEventListener("change", updateOverlap);
    };
  }, [shouldAvoidEntireHero, shouldAvoidHeroCtas]);

  return (
    <div
      ref={floatingRef}
      className={`fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 transition-opacity sm:bottom-6 sm:right-6 ${
        overlapsHeroCtas || rfqInView
          ? "max-sm:pointer-events-none max-sm:invisible max-sm:opacity-0"
          : ""
      }`}
    >
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Quick Material Inquiry on WhatsApp"
        title="Quick Material Inquiry"
        data-whatsapp-location="floating_whatsapp"
        className="group relative grid size-11 place-items-center rounded-md border border-white/20 bg-teal text-white shadow-soft transition hover:bg-teal/90 focus-visible:outline focus-visible:outline-4 focus-visible:outline-teal/20"
      >
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-graphite px-3 py-2 text-xs font-semibold text-white shadow-sm group-hover:block group-focus-visible:block">
          Quick Material Inquiry
        </span>
        <MessageCircle className="size-5" aria-hidden="true" />
      </a>
      <Link
        href={href}
        data-rfq-cta-location="floating_rfq"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-amber/90 focus-visible:outline focus-visible:outline-4 focus-visible:outline-amber/20"
      >
        <Send className="size-4" aria-hidden="true" />
        Request a Quote
      </Link>
    </div>
  );
}
