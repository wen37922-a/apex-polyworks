import assert from "node:assert/strict";
import test from "node:test";
import { trackWhatsAppClick } from "../lib/analytics.ts";
import {
  ga4MeasurementId,
  getRfqThankYouPath,
  parseRfqConversionDebugResult,
  parsePendingRfqConversion,
  queuePendingRfqConversion,
  rfqConversion,
  storePendingRfqConversion
} from "../lib/google-ads.ts";

class MemoryStorage {
  private values = new Map<string, string>();

  getItem(key: string) {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string) {
    this.values.set(key, value);
  }

  removeItem(key: string) {
    this.values.delete(key);
  }
}

function createReadyTrackingWindow() {
  const dataLayer: unknown[] = [];
  return {
    __APEX_GA4_MEASUREMENT_ID__: ga4MeasurementId,
    dataLayer,
    location: { search: "" },
    gtag(...args: unknown[]) {
      dataLayer.push(args);
    }
  };
}

function getEventCommands(dataLayer: unknown[]) {
  return dataLayer
    .filter((entry): entry is unknown[] => Array.isArray(entry))
    .filter((entry) => entry[0] === "event");
}

test("debug query parameters are preserved on the thank-you redirect", () => {
  assert.equal(
    getRfqThankYouPath("?tracking_debug=1"),
    "/thank-you?tracking_debug=1"
  );
  assert.equal(
    getRfqThankYouPath("?debug_mode=1"),
    "/thank-you?tracking_debug=1"
  );
  assert.equal(getRfqThankYouPath("?utm_source=google"), "/thank-you");
  assert.equal(getRfqThankYouPath(""), "/thank-you");
});

test("empty, validation-failed, and API-failed submissions create no pending conversion", () => {
  const storage = new MemoryStorage();

  const emptyResult = storePendingRfqConversion({
    apiSucceeded: false,
    material: "",
    sourcePage: "/materials/uhmwpe",
    storage
  });
  const apiFailureResult = storePendingRfqConversion({
    apiSucceeded: false,
    material: "UHMWPE",
    sourcePage: "/materials/uhmwpe",
    storage
  });

  assert.equal(emptyResult, null);
  assert.equal(apiFailureResult, null);
  assert.equal(storage.getItem(rfqConversion.storageKey), null);
});

test("successful RFQ queues one GA4 lead and one Ads conversion despite duplicate mounts", async () => {
  const storage = new MemoryStorage();
  const targetWindow = createReadyTrackingWindow();
  const eventId = "rfq-test-event-1";

  const pending = storePendingRfqConversion({
    apiSucceeded: true,
    material: "UHMWPE",
    sourcePage: "/materials/uhmwpe?tracking_debug=1",
    eventId,
    storage
  });

  assert.ok(pending);
  assert.deepEqual(
    Object.keys(pending).sort(),
    ["eventId", "material", "pending", "sourcePage", "submittedAt"].sort()
  );
  assert.equal(parsePendingRfqConversion(storage.getItem(rfqConversion.storageKey))?.eventId, eventId);

  const results = await Promise.all([
    queuePendingRfqConversion({ targetWindow, storage, debug: true }),
    queuePendingRfqConversion({ targetWindow, storage, debug: true })
  ]);

  assert.equal(results.filter((result) => result.status === "queued").length, 1);
  assert.equal(results.filter((result) => result.status === "in_flight").length, 1);

  const events = getEventCommands(targetWindow.dataLayer);
  const ga4Events = events.filter((entry) => entry[1] === "generate_lead");
  const adsEvents = events.filter((entry) => entry[1] === "conversion");
  assert.equal(ga4Events.length, 1);
  assert.equal(adsEvents.length, 1);

  assert.deepEqual(ga4Events[0][2], {
    send_to: "G-VZJTKBPCXW",
    material: "UHMWPE",
    source_page: "/materials/uhmwpe?tracking_debug=1",
    page_path: "/materials/uhmwpe?tracking_debug=1",
    transport_type: "beacon",
    event_id: eventId,
    debug_mode: true
  });
  assert.deepEqual(adsEvents[0][2], {
    send_to: "AW-10303746203/v61BC1mptAcE0uB9JdE",
    transaction_id: eventId,
    event_id: eventId
  });
  assert.equal(JSON.stringify(events).includes("AW-18303746283"), false);
  assert.equal(storage.getItem(rfqConversion.storageKey), null);
  assert.equal(storage.getItem(rfqConversion.sentStorageKey), eventId);

  const debugResult = parseRfqConversionDebugResult(
    storage.getItem(rfqConversion.lastResultStorageKey)
  );
  assert.deepEqual(debugResult, {
    status: "queued",
    eventId,
    recordedAt: debugResult?.recordedAt,
    ga4Queued: true,
    adsQueued: true,
    pendingRemoved: true
  });
  assert.ok(Number.isFinite(Date.parse(debugResult?.recordedAt || "")));

  const debugResultKeys = Object.keys(debugResult || {}).sort();
  assert.deepEqual(
    debugResultKeys,
    [
      "status",
      "eventId",
      "recordedAt",
      "ga4Queued",
      "adsQueued",
      "pendingRemoved"
    ].sort()
  );

  const eventPayload = JSON.stringify(events).toLowerCase();
  for (const forbiddenField of ["email", "phone", "message", "drawing", "file_name"]) {
    assert.equal(eventPayload.includes(forbiddenField), false);
  }

  const debugPayload = storage
    .getItem(rfqConversion.lastResultStorageKey)
    ?.toLowerCase() || "";
  for (const forbiddenValue of [
    "name",
    "email",
    "phone",
    "message",
    "drawing",
    "filename",
    "projectdescription"
  ]) {
    assert.equal(debugPayload.includes(forbiddenValue), false);
  }

  const eventCountBeforeRefresh = events.length;
  const refreshResult = await queuePendingRfqConversion({
    targetWindow: createReadyTrackingWindow(),
    storage
  });
  assert.equal(refreshResult.status, "no_pending");
  assert.equal(getEventCommands(targetWindow.dataLayer).length, eventCountBeforeRefresh);
});

test("normal mode does not write a tracking debug result", async () => {
  const storage = new MemoryStorage();
  const targetWindow = createReadyTrackingWindow();

  storePendingRfqConversion({
    apiSucceeded: true,
    material: "UHMWPE",
    sourcePage: "/materials/uhmwpe",
    eventId: "rfq-normal-mode",
    storage
  });

  const result = await queuePendingRfqConversion({
    targetWindow,
    storage,
    debug: false
  });

  assert.equal(result.status, "queued");
  assert.equal(storage.getItem(rfqConversion.lastResultStorageKey), null);
});

test("direct thank-you access queues no events", async () => {
  const storage = new MemoryStorage();
  const targetWindow = createReadyTrackingWindow();

  const result = await queuePendingRfqConversion({ targetWindow, storage });

  assert.equal(result.status, "no_pending");
  assert.equal(getEventCommands(targetWindow.dataLayer).length, 0);
});

test("gtag timeout preserves the pending marker and sends no event", async () => {
  const storage = new MemoryStorage();
  storePendingRfqConversion({
    apiSucceeded: true,
    material: "UHMWPE",
    sourcePage: "/materials/uhmwpe",
    eventId: "rfq-timeout-test",
    storage
  });
  const targetWindow = { dataLayer: [] as unknown[], location: { search: "" } };

  const result = await queuePendingRfqConversion({
    targetWindow,
    storage,
    maxWaitMs: 2,
    retryIntervalMs: 1,
    debug: true
  });

  assert.equal(result.status, "gtag_timeout");
  assert.notEqual(storage.getItem(rfqConversion.storageKey), null);
  assert.equal(targetWindow.dataLayer.length, 0);
  assert.deepEqual(
    parseRfqConversionDebugResult(
      storage.getItem(rfqConversion.lastResultStorageKey)
    )?.status,
    "gtag_timeout"
  );
});

test("WhatsApp click queues one GA4 event and no RFQ conversion", () => {
  const targetWindow = createReadyTrackingWindow();
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: targetWindow
  });

  try {
    trackWhatsAppClick({
      pathname: "/materials/uhmwpe",
      location: "header_desktop",
      material: "UHMWPE"
    });
  } finally {
    if (originalWindow) {
      Object.defineProperty(globalThis, "window", originalWindow);
    } else {
      delete (globalThis as { window?: unknown }).window;
    }
  }

  const events = getEventCommands(targetWindow.dataLayer);
  assert.equal(events.length, 1);
  assert.equal(events[0][1], "whatsapp_click");
  assert.deepEqual(events[0][2], {
    page_path: "/materials/uhmwpe",
    location: "header_desktop",
    material: "UHMWPE",
    transport_type: "beacon",
    send_to: "G-VZJTKBPCXW"
  });
  assert.equal(JSON.stringify(events).includes("AW-10303746203"), false);
  assert.equal(JSON.stringify(events).includes("AW-18303746283"), false);
});
