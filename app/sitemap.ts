import type { MetadataRoute } from "next";
import { allStaticRoutes, routeLastModified, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allStaticRoutes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified: new Date(routeLastModified[route] ?? siteConfig.lastModified),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("/blog/") ? 0.55 : 0.75
  }));
}
