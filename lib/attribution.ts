export type MarketingAttribution = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  gclid: string;
  gbraid: string;
  wbraid: string;
  landingPage: string;
  referrer: string;
  capturedAt: string;
};

const sessionStorageKey = "apex-marketing-attribution";
const localStorageKey = "apex-marketing-attribution-last-non-direct";
const localStorageMaxAge = 90 * 24 * 60 * 60 * 1000;

const trackedFields = [
  "utmSource",
  "utmMedium",
  "utmCampaign",
  "utmTerm",
  "utmContent",
  "gclid",
  "gbraid",
  "wbraid"
] as const;

function readStoredAttribution(
  storage: Storage,
  key: string,
  enforceMaxAge: boolean
) {
  try {
    const rawValue = storage.getItem(key);
    if (!rawValue) {
      return null;
    }

    const value = JSON.parse(rawValue) as Partial<MarketingAttribution>;
    const capturedAt = typeof value.capturedAt === "string" ? value.capturedAt : "";
    const capturedAtTime = new Date(capturedAt).getTime();

    if (
      enforceMaxAge &&
      (!capturedAt ||
        !Number.isFinite(capturedAtTime) ||
        Date.now() - capturedAtTime > localStorageMaxAge)
    ) {
      storage.removeItem(key);
      return null;
    }

    return {
      utmSource: typeof value.utmSource === "string" ? value.utmSource : "",
      utmMedium: typeof value.utmMedium === "string" ? value.utmMedium : "",
      utmCampaign: typeof value.utmCampaign === "string" ? value.utmCampaign : "",
      utmTerm: typeof value.utmTerm === "string" ? value.utmTerm : "",
      utmContent: typeof value.utmContent === "string" ? value.utmContent : "",
      gclid: typeof value.gclid === "string" ? value.gclid : "",
      gbraid: typeof value.gbraid === "string" ? value.gbraid : "",
      wbraid: typeof value.wbraid === "string" ? value.wbraid : "",
      landingPage: typeof value.landingPage === "string" ? value.landingPage : "",
      referrer: typeof value.referrer === "string" ? value.referrer : "",
      capturedAt
    } satisfies MarketingAttribution;
  } catch {
    return null;
  }
}

function writeStoredAttribution(
  storage: Storage,
  key: string,
  attribution: MarketingAttribution
) {
  try {
    storage.setItem(key, JSON.stringify(attribution));
  } catch {
    // Attribution must never block navigation or form submission.
  }
}

function getCurrentAttribution(): MarketingAttribution {
  const query = new URLSearchParams(window.location.search);
  const utmSource = query.get("utm_source")?.trim() ?? "";
  const utmMedium = query.get("utm_medium")?.trim() ?? "";
  const utmCampaign = query.get("utm_campaign")?.trim() ?? "";
  const utmTerm = query.get("utm_term")?.trim() ?? "";
  const utmContent = query.get("utm_content")?.trim() ?? "";
  const gclid = query.get("gclid")?.trim() ?? "";
  const gbraid = query.get("gbraid")?.trim() ?? "";
  const wbraid = query.get("wbraid")?.trim() ?? "";
  const trackedQuery = new URLSearchParams();

  [
    ["utm_source", utmSource],
    ["utm_medium", utmMedium],
    ["utm_campaign", utmCampaign],
    ["utm_term", utmTerm],
    ["utm_content", utmContent],
    ["gclid", gclid],
    ["gbraid", gbraid],
    ["wbraid", wbraid]
  ].forEach(([key, value]) => {
    if (value) {
      trackedQuery.set(key, value);
    }
  });

  let referrer = "";
  try {
    if (document.referrer) {
      const referrerUrl = new URL(document.referrer);
      referrer = `${referrerUrl.origin}${referrerUrl.pathname}`;
    }
  } catch {
    referrer = "";
  }

  const trackedQueryString = trackedQuery.toString();

  return {
    utmSource,
    utmMedium,
    utmCampaign,
    utmTerm,
    utmContent,
    gclid,
    gbraid,
    wbraid,
    landingPage: `${window.location.pathname}${trackedQueryString ? `?${trackedQueryString}` : ""}`,
    referrer,
    capturedAt: new Date().toISOString()
  };
}

function hasCampaignAttribution(attribution: MarketingAttribution) {
  return trackedFields.some((field) => Boolean(attribution[field]));
}

export function captureMarketingAttribution() {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const currentAttribution = getCurrentAttribution();
    const sessionAttribution = readStoredAttribution(
      window.sessionStorage,
      sessionStorageKey,
      false
    );

    if (hasCampaignAttribution(currentAttribution)) {
      writeStoredAttribution(
        window.sessionStorage,
        sessionStorageKey,
        currentAttribution
      );
      writeStoredAttribution(
        window.localStorage,
        localStorageKey,
        currentAttribution
      );
      return;
    }

    if (sessionAttribution) {
      return;
    }

    const lastNonDirectAttribution = readStoredAttribution(
      window.localStorage,
      localStorageKey,
      true
    );

    writeStoredAttribution(
      window.sessionStorage,
      sessionStorageKey,
      lastNonDirectAttribution ?? currentAttribution
    );
  } catch {
    // Storage restrictions must never interfere with site use.
  }
}

export function getStoredMarketingAttribution() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return (
      readStoredAttribution(window.sessionStorage, sessionStorageKey, false) ??
      readStoredAttribution(window.localStorage, localStorageKey, true)
    );
  } catch {
    return null;
  }
}
