import type { MetadataRoute } from "next";
import { allStaticRoutes, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.lastModified);

  return allStaticRoutes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("/blog/") ? 0.55 : 0.75
  }));
}
