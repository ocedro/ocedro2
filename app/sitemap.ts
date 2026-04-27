import type { MetadataRoute } from 'next';
import { posts } from '@/lib/newsletter';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ocedro.com.br';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`,           lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/leandro`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/agende`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/igreja`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/lab`,        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/fineias`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/newsletter`, lastModified: now, changeFrequency: 'weekly',  priority: 0.6 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}/newsletter/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...postRoutes];
}
