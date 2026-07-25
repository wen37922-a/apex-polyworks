export type Ga4EventValue = string | number | boolean;

type Ga4EventParameters = Record<string, Ga4EventValue | undefined>;

declare global {
  interface Window {
    __APEX_GA4_MEASUREMENT_ID__?: string;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const materialPaths = [
  ["/products/uhmwpe-wear-parts", "UHMWPE"],
  ["/products/peek-machined-parts", "PEEK"],
  ["/products/peek-sheet", "PEEK Sheet"],
  ["/products/peek-rod", "PEEK Rod"],
  ["/materials/polycarbonate-pc", "Polycarbonate PC"],
  ["/materials/acrylic-pmma", "Acrylic PMMA"],
  ["/materials/pom-acetal", "POM / Acetal"],
  ["/materials/nylon-pa", "Nylon PA"],
  ["/materials/uhmwpe", "UHMWPE"],
  ["/materials/peek", "PEEK"],
  ["/materials/ptfe", "PTFE"],
  ["/materials/hdpe", "HDPE"],
  ["/materials/abs", "ABS"],
  ["/materials/pp", "PP"]
] as const;

export function getPagePath(pathname?: string) {
  if (pathname) {
    return pathname;
  }

  if (typeof window === "undefined") {
    return "/";
  }

  return `${window.location.pathname}${window.location.search}`;
}

export function inferMaterial(pathname: string) {
  const normalizedPath = pathname.toLowerCase();
  const match = materialPaths.find(([path]) => normalizedPath.startsWith(path));
  return match?.[1] ?? "not_specified";
}

export function trackGa4Event(eventName: string, parameters: Ga4EventParameters) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const measurementId = window.__APEX_GA4_MEASUREMENT_ID__;
    if (!measurementId) {
      return;
    }

    const cleanParameters = Object.fromEntries(
      Object.entries(parameters).filter(([, value]) => value !== undefined && value !== "")
    );

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtagFallback(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag("event", eventName, {
      ...cleanParameters,
      send_to: measurementId
    });

    if (process.env.NODE_ENV === "development") {
      console.info(`GA4 event fired: ${eventName}`, cleanParameters);
    }
  } catch {
    // Analytics must never block navigation or a successful RFQ submission.
  }
}

export function trackGa4PageView(pagePath = getPagePath()) {
  trackGa4Event("page_view", {
    page_path: pagePath,
    page_location:
      typeof window === "undefined" ? undefined : window.location.href,
    page_title:
      typeof document === "undefined" ? undefined : document.title
  });
}

export function trackRfqCtaClick({
  pathname,
  ctaLocation,
  material
}: {
  pathname?: string;
  ctaLocation: string;
  material?: string;
}) {
  const pagePath = getPagePath(pathname);
  trackGa4Event("rfq_cta_click", {
    page_path: pagePath,
    cta_location: ctaLocation,
    material: material || inferMaterial(pagePath)
  });
}

export function trackWhatsAppClick({
  pathname,
  location,
  material
}: {
  pathname?: string;
  location: string;
  material?: string;
}) {
  const pagePath = getPagePath(pathname);
  trackGa4Event("whatsapp_click", {
    page_path: pagePath,
    location,
    material: material || inferMaterial(pagePath)
  });
}

export function trackGenerateLead({
  material,
  sourcePage
}: {
  material: string;
  sourcePage?: string;
}) {
  const pagePath = getPagePath(sourcePage);
  trackGa4Event("generate_lead", {
    material: material || inferMaterial(pagePath),
    page_path: pagePath,
    source_page: pagePath
  });
}
