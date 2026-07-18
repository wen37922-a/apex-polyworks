"use client";

import { useEffect } from "react";
import { rfqConversion } from "@/lib/google-ads";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAdsRfqConversion() {
  useEffect(() => {
    let shouldTrack = false;

    try {
      shouldTrack = sessionStorage.getItem(rfqConversion.storageKey) === "1";
      if (shouldTrack) {
        sessionStorage.removeItem(rfqConversion.storageKey);
      }
    } catch {
      shouldTrack = false;
    }

    if (!shouldTrack) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtagFallback(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

    window.gtag("event", "conversion", {
      send_to: rfqConversion.sendTo
    });

    if (process.env.NODE_ENV === "development") {
      console.info("Google Ads RFQ conversion fired");
    }
  }, []);

  return null;
}
