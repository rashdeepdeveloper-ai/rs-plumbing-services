import type { MetadataRoute } from "next";
import { company } from "@/lib/company";
import { navLinks } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((link) => ({
    url: new URL(link.href, company.url).toString(),
    lastModified: new Date(),
    changeFrequency: link.href === "/" ? "weekly" : "monthly",
    priority: link.href === "/" ? 1 : 0.8
  }));
}
