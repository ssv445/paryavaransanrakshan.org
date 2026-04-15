import type { MetadataRoute } from "next";
import { programs, karyavibhag, events, stories } from "@/lib/content";

const SITE = "https://paryavaransanrakshan.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/about/mission",
    "/about/story",
    "/about/logo",
    "/about/presence",
    "/about/panch-parivartan",
    "/programs",
    "/karyavibhag",
    "/events",
    "/stories",
    "/resources",
    "/contact",
  ].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const dynamicRoutes = [
    ...programs.map((p) => ({ url: `${SITE}/programs/${p.slug}`, lastModified: now })),
    ...karyavibhag.map((k) => ({ url: `${SITE}/karyavibhag/${k.slug}`, lastModified: now })),
    ...events.map((e) => ({ url: `${SITE}/events/${e.slug}`, lastModified: now })),
    ...stories.map((s) => ({ url: `${SITE}/stories/${s.slug}`, lastModified: now })),
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
