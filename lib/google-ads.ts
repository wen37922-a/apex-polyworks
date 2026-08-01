export const googleAdsIds = ["AW-10303746203", "AW-18303746283"] as const;

export const ga4MeasurementId = "G-VZJTKBPCXW";

export const rfqConversion = {
  storageKey: "apex-rfq-conversion-pending",
  sentStorageKey: "apex-rfq-conversion-sent",
  lastResultStorageKey: "apex-rfq-conversion-last-result",
  sendTo: "AW-10303746203/v61BC1mptAcE0uB9JdE",
  ga4MeasurementId,
  retryIntervalMs: 100,
  readyTimeoutMs: 5000
} as const;

export type PendingRfqConversion = {
  pending: true;
  material: string;
  sourcePage: string;
  submittedAt: string;
  eventId: string;
};

type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;

type TrackingWindow = {
  __APEX_GA4_MEASUREMENT_ID__?: string;
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  location?: Pick<Location, "search">;
};

type QueuePendingOptions = {
  targetWindow?: TrackingWindow;
  storage?: StorageLike;
  maxWaitMs?: number;
  retryIntervalMs?: number;
  debug?: boolean;
};

export type QueuePendingResult =
  | { status: "queued"; eventId: string }
  | { status: "already_sent"; eventId: string }
  | { status: "in_flight"; eventId: string }
  | { status: "no_pending" }
  | { status: "invalid_pending" }
  | { status: "gtag_timeout"; eventId: string }
  | { status: "queue_failed"; eventId: string };

export type RfqConversionDebugResult = {
  status:
    | "queued"
    | "already_sent"
    | "gtag_timeout"
    | "queue_failed"
    | "no_pending"
    | "invalid_pending";
  eventId: string;
  recordedAt: string;
  ga4Queued: boolean;
  adsQueued: boolean;
  pendingRemoved: boolean;
};

const inFlightEventIds = new Set<string>();

export function isTrackingDebugSearch(search: string) {
  try {
    const searchParams = new URLSearchParams(search);
    return (
      searchParams.get("tracking_debug") === "1" ||
      searchParams.get("debug_mode") === "1"
    );
  } catch {
    return false;
  }
}

export function getRfqThankYouPath(search: string) {
  return isTrackingDebugSearch(search)
    ? "/thank-you?tracking_debug=1"
    : "/thank-you";
}

export function parseRfqConversionDebugResult(value: string | null) {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as Partial<RfqConversionDebugResult>;
    const validStatuses: RfqConversionDebugResult["status"][] = [
      "queued",
      "already_sent",
      "gtag_timeout",
      "queue_failed",
      "no_pending",
      "invalid_pending"
    ];

    if (
      !validStatuses.includes(parsed.status as RfqConversionDebugResult["status"]) ||
      typeof parsed.eventId !== "string" ||
      !Number.isFinite(Date.parse(parsed.recordedAt || "")) ||
      typeof parsed.ga4Queued !== "boolean" ||
      typeof parsed.adsQueued !== "boolean" ||
      typeof parsed.pendingRemoved !== "boolean"
    ) {
      return null;
    }

    return parsed as RfqConversionDebugResult;
  } catch {
    return null;
  }
}

export function getLastRfqConversionDebugResult(storage?: StorageLike) {
  const targetStorage =
    storage ?? (typeof sessionStorage === "undefined" ? undefined : sessionStorage);
  if (!targetStorage) {
    return null;
  }

  try {
    return parseRfqConversionDebugResult(
      targetStorage.getItem(rfqConversion.lastResultStorageKey)
    );
  } catch {
    return null;
  }
}

function recordRfqConversionDebugResult({
  debug,
  storage,
  status,
  eventId = "",
  ga4Queued = false,
  adsQueued = false,
  pendingRemoved = false
}: {
  debug: boolean;
  storage: StorageLike;
  status: RfqConversionDebugResult["status"];
  eventId?: string;
  ga4Queued?: boolean;
  adsQueued?: boolean;
  pendingRemoved?: boolean;
}) {
  if (!debug) {
    return null;
  }

  const result: RfqConversionDebugResult = {
    status,
    eventId,
    recordedAt: new Date().toISOString(),
    ga4Queued,
    adsQueued,
    pendingRemoved
  };

  try {
    storage.setItem(rfqConversion.lastResultStorageKey, JSON.stringify(result));
    console.info("RFQ tracking result", result);
    return result;
  } catch {
    return null;
  }
}

function createEventId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
}

export function createPendingRfqConversion({
  material,
  sourcePage,
  eventId
}: {
  material: string;
  sourcePage: string;
  eventId?: string;
}): PendingRfqConversion {
  return {
    pending: true,
    material: material.trim() || "not_specified",
    sourcePage: sourcePage.trim() || "/",
    submittedAt: new Date().toISOString(),
    eventId: eventId?.trim() || createEventId()
  };
}

export function parsePendingRfqConversion(value: string | null) {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as Partial<PendingRfqConversion>;
    const submittedAt = Date.parse(parsed.submittedAt || "");

    if (
      parsed.pending !== true ||
      typeof parsed.material !== "string" ||
      typeof parsed.sourcePage !== "string" ||
      typeof parsed.eventId !== "string" ||
      !parsed.material.trim() ||
      !parsed.sourcePage.trim() ||
      !parsed.eventId.trim() ||
      !Number.isFinite(submittedAt)
    ) {
      return null;
    }

    return parsed as PendingRfqConversion;
  } catch {
    return null;
  }
}

export function storePendingRfqConversion({
  apiSucceeded,
  material,
  sourcePage,
  eventId,
  storage
}: {
  apiSucceeded: boolean;
  material: string;
  sourcePage: string;
  eventId?: string;
  storage?: StorageLike;
}) {
  if (!apiSucceeded) {
    return null;
  }

  const targetStorage =
    storage ?? (typeof sessionStorage === "undefined" ? undefined : sessionStorage);
  if (!targetStorage) {
    return null;
  }

  const pendingConversion = createPendingRfqConversion({
    material,
    sourcePage,
    eventId
  });

  try {
    targetStorage.setItem(
      rfqConversion.storageKey,
      JSON.stringify(pendingConversion)
    );
    return pendingConversion;
  } catch {
    return null;
  }
}

function isTrackingDebugMode(targetWindow: TrackingWindow) {
  if (process.env.NODE_ENV === "development") {
    return true;
  }

  try {
    return isTrackingDebugSearch(targetWindow.location?.search || "");
  } catch {
    return false;
  }
}

function isGtagReady(targetWindow: TrackingWindow) {
  return (
    typeof targetWindow.gtag === "function" &&
    Array.isArray(targetWindow.dataLayer) &&
    targetWindow.__APEX_GA4_MEASUREMENT_ID__ === rfqConversion.ga4MeasurementId
  );
}

function delay(milliseconds: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
}

async function waitForGtag(
  targetWindow: TrackingWindow,
  maxWaitMs: number,
  retryIntervalMs: number
) {
  const startedAt = Date.now();

  while (Date.now() - startedAt <= maxWaitMs) {
    if (isGtagReady(targetWindow)) {
      return true;
    }

    await delay(retryIntervalMs);
  }

  return false;
}

function isQueuedEvent(
  entry: unknown,
  eventName: string,
  eventId: string
) {
  if (!entry || typeof entry !== "object") {
    return false;
  }

  const command = Array.from(entry as ArrayLike<unknown>);
  if (command[0] !== "event" || command[1] !== eventName) {
    return false;
  }

  const parameters = command[2];
  return (
    parameters !== null &&
    typeof parameters === "object" &&
    "event_id" in parameters &&
    (parameters as { event_id?: unknown }).event_id === eventId
  );
}

export async function queuePendingRfqConversion(
  options: QueuePendingOptions = {}
): Promise<QueuePendingResult> {
  if (typeof window === "undefined" && !options.targetWindow) {
    return { status: "no_pending" };
  }

  const targetWindow = options.targetWindow ?? window;
  const eventDebug = options.debug ?? isTrackingDebugMode(targetWindow);
  const trackingDebug =
    options.debug ?? isTrackingDebugSearch(targetWindow.location?.search || "");
  const storage =
    options.storage ?? (typeof sessionStorage === "undefined" ? undefined : sessionStorage);
  if (!storage) {
    return { status: "no_pending" };
  }

  const storedPending = storage.getItem(rfqConversion.storageKey);
  if (!storedPending) {
    recordRfqConversionDebugResult({
      debug: trackingDebug,
      storage,
      status: "no_pending"
    });
    return { status: "no_pending" };
  }

  const pendingConversion = parsePendingRfqConversion(storedPending);
  if (!pendingConversion) {
    recordRfqConversionDebugResult({
      debug: trackingDebug,
      storage,
      status: "invalid_pending"
    });
    return { status: "invalid_pending" };
  }

  if (storage.getItem(rfqConversion.sentStorageKey) === pendingConversion.eventId) {
    storage.removeItem(rfqConversion.storageKey);
    recordRfqConversionDebugResult({
      debug: trackingDebug,
      storage,
      status: "already_sent",
      eventId: pendingConversion.eventId,
      ga4Queued: true,
      adsQueued: true,
      pendingRemoved: storage.getItem(rfqConversion.storageKey) === null
    });
    return { status: "already_sent", eventId: pendingConversion.eventId };
  }

  if (inFlightEventIds.has(pendingConversion.eventId)) {
    return { status: "in_flight", eventId: pendingConversion.eventId };
  }

  inFlightEventIds.add(pendingConversion.eventId);

  try {
    const ready = await waitForGtag(
      targetWindow,
      options.maxWaitMs ?? rfqConversion.readyTimeoutMs,
      options.retryIntervalMs ?? rfqConversion.retryIntervalMs
    );

    if (!ready) {
      recordRfqConversionDebugResult({
        debug: trackingDebug,
        storage,
        status: "gtag_timeout",
        eventId: pendingConversion.eventId
      });
      return { status: "gtag_timeout", eventId: pendingConversion.eventId };
    }

    const dataLayer = targetWindow.dataLayer as unknown[];
    const firstNewEntry = dataLayer.length;

    try {
      targetWindow.gtag?.("event", "generate_lead", {
        send_to: rfqConversion.ga4MeasurementId,
        material: pendingConversion.material,
        source_page: pendingConversion.sourcePage,
        page_path: pendingConversion.sourcePage,
        transport_type: "beacon",
        event_id: pendingConversion.eventId,
        ...(eventDebug ? { debug_mode: true } : {})
      });

      targetWindow.gtag?.("event", "conversion", {
        send_to: rfqConversion.sendTo,
        transaction_id: pendingConversion.eventId,
        event_id: pendingConversion.eventId
      });
    } catch {
      const queuedEntries = dataLayer.slice(firstNewEntry);
      recordRfqConversionDebugResult({
        debug: trackingDebug,
        storage,
        status: "queue_failed",
        eventId: pendingConversion.eventId,
        ga4Queued: queuedEntries.some((entry) =>
          isQueuedEvent(entry, "generate_lead", pendingConversion.eventId)
        ),
        adsQueued: queuedEntries.some((entry) =>
          isQueuedEvent(entry, "conversion", pendingConversion.eventId)
        )
      });
      return { status: "queue_failed", eventId: pendingConversion.eventId };
    }

    const queuedEntries = dataLayer.slice(firstNewEntry);
    const ga4Queued = queuedEntries.some((entry) =>
      isQueuedEvent(entry, "generate_lead", pendingConversion.eventId)
    );
    const adsQueued = queuedEntries.some((entry) =>
      isQueuedEvent(entry, "conversion", pendingConversion.eventId)
    );

    if (!ga4Queued || !adsQueued) {
      recordRfqConversionDebugResult({
        debug: trackingDebug,
        storage,
        status: "queue_failed",
        eventId: pendingConversion.eventId,
        ga4Queued,
        adsQueued
      });
      return { status: "queue_failed", eventId: pendingConversion.eventId };
    }

    storage.setItem(rfqConversion.sentStorageKey, pendingConversion.eventId);
    storage.removeItem(rfqConversion.storageKey);

    recordRfqConversionDebugResult({
      debug: trackingDebug,
      storage,
      status: "queued",
      eventId: pendingConversion.eventId,
      ga4Queued,
      adsQueued,
      pendingRemoved: storage.getItem(rfqConversion.storageKey) === null
    });

    return { status: "queued", eventId: pendingConversion.eventId };
  } finally {
    inFlightEventIds.delete(pendingConversion.eventId);
  }
}
