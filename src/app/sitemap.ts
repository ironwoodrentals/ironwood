import type { MetadataRoute } from "next";
import { tracks } from "@/lib/site";
import { cities } from "@/lib/locations";

const SITE_URL = "https://www.ironwoodrentals.ca";

function uniqueCategorySlugs(): string[] {
  const seen = new Set<string>();
  for (const track of tracks) {
    for (const category of track.categories) {
      seen.add(category.slug);
    }
  }
  return [...seen];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/event-rentals`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/film-rentals`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...uniqueCategorySlugs().map((slug) => ({
      url: `${SITE_URL}/rentals/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...cities.map((city) => ({
      url: `${SITE_URL}/locations/${city.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
  return pages;
}
