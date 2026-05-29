import type { MetadataRoute } from "next";

const base = "https://journalklar.dk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${base}/`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/saadan-virker-journalklar`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/om`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/tilgang`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/sikkerhed`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/faq`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${base}/cookiepolitik`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/privatlivspolitik`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/databehandleraftale`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/handelsbetingelser`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
