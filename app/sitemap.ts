import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ocedro.com.br';
  const now = new Date();

  return [
    { url: `${baseUrl}/`,        lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/leandro`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/agende`,  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/igreja`,  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/lab`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/fineias`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
