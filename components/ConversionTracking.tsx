"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  getPagePath,
  inferMaterial,
  trackGa4PageView,
  trackRfqCtaClick,
  trackWhatsAppClick
} from "@/lib/analytics";
import { captureMarketingAttribution } from "@/lib/attribution";

let lastTrackedPagePath = "";

function getLinkLocation(link: HTMLAnchorElement, eventType: "rfq" | "whatsapp") {
  const attribute =
    eventType === "rfq"
      ? link.dataset.rfqCtaLocation
      : link.dataset.whatsappLocation;

  if (attribute) {
    return attribute;
  }

  if (link.closest("header")) {
    return "header";
  }

  if (link.closest("footer")) {
    return "footer";
  }

  const main = link.closest("main");
  const firstSection = main?.querySelector(":scope > section");
  if (firstSection?.contains(link)) {
    return "hero";
  }

  return "page_content";
}

function isRfqTarget(rawHref: string, link: HTMLAnchorElement) {
  if (link.dataset.rfqCtaLocation) {
    return true;
  }

  if (rawHref === "#material-rfq" || rawHref === "#cnc-rfq") {
    return true;
  }

  try {
    const url = new URL(rawHref, window.location.origin);
    return (
      url.origin === window.location.origin &&
      url.pathname === "/request-a-quote"
    );
  } catch {
    return false;
  }
}

export function ConversionTracking({
  measurementId
}: {
  measurementId?: string;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (measurementId) {
      window.__APEX_GA4_MEASUREMENT_ID__ = measurementId;
    }

    captureMarketingAttribution();

    const pagePath = getPagePath();
    if (measurementId && pagePath !== lastTrackedPagePath) {
      trackGa4PageView(pagePath);
      lastTrackedPagePath = pagePath;
    }

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) {
        return;
      }

      const rawHref = link.getAttribute("href") || "";
      const currentPagePath = getPagePath();
      const material =
        link.dataset.trackingMaterial || inferMaterial(currentPagePath);

      if (
        rawHref.startsWith("https://wa.me/") ||
        rawHref.startsWith("http://wa.me/")
      ) {
        trackWhatsAppClick({
          pathname: currentPagePath,
          material,
          location: getLinkLocation(link, "whatsapp")
        });
        return;
      }

      if (isRfqTarget(rawHref, link)) {
        trackRfqCtaClick({
          pathname: currentPagePath,
          material,
          ctaLocation: getLinkLocation(link, "rfq")
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [measurementId, pathname]);

  return null;
}
