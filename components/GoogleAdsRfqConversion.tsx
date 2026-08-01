"use client";

import { useEffect, useState } from "react";
import {
  getLastRfqConversionDebugResult,
  isTrackingDebugSearch,
  queuePendingRfqConversion,
  rfqConversion,
  type RfqConversionDebugResult
} from "@/lib/google-ads";

export function GoogleAdsRfqConversion() {
  const [debugResult, setDebugResult] =
    useState<RfqConversionDebugResult | null>(null);

  useEffect(() => {
    const debug = isTrackingDebugSearch(window.location.search);
    let cancelled = false;
    let retryTimer: ReturnType<typeof setTimeout> | undefined;

    const showStoredResult = (eventId?: string) => {
      const storedResult = getLastRfqConversionDebugResult();
      if (
        storedResult &&
        (!eventId || storedResult.eventId === eventId) &&
        !cancelled
      ) {
        setDebugResult(storedResult);
        return true;
      }

      return false;
    };

    void queuePendingRfqConversion().then((result) => {
      if (!debug || cancelled) {
        return;
      }

      if (result.status !== "in_flight") {
        showStoredResult("eventId" in result ? result.eventId : undefined);
        return;
      }

      const stopAt = Date.now() + rfqConversion.readyTimeoutMs + 1000;
      const waitForFinalResult = () => {
        if (cancelled || showStoredResult(result.eventId) || Date.now() >= stopAt) {
          return;
        }

        retryTimer = setTimeout(waitForFinalResult, rfqConversion.retryIntervalMs);
      };

      waitForFinalResult();
    });

    return () => {
      cancelled = true;
      if (retryTimer) {
        clearTimeout(retryTimer);
      }
    };
  }, []);

  if (!debugResult) {
    return null;
  }

  return (
    <aside
      className="fixed bottom-3 left-3 z-[100] max-w-xs rounded-md border border-graphite/15 bg-white/95 px-3 py-2 text-left text-xs text-graphite shadow-soft"
      data-testid="rfq-tracking-debug-result"
      role="status"
    >
      <p className="font-semibold">RFQ tracking: {debugResult.status}</p>
      {debugResult.status === "queued" ? (
        <p className="mt-1 text-steel">
          GA4 queued: {debugResult.ga4Queued ? "yes" : "no"} · Ads queued:{" "}
          {debugResult.adsQueued ? "yes" : "no"}
        </p>
      ) : null}
      <p className="mt-1 break-all text-steel">
        Pending removed: {debugResult.pendingRemoved ? "yes" : "no"}
        {debugResult.eventId ? ` · Event: ${debugResult.eventId}` : ""}
      </p>
    </aside>
  );
}
