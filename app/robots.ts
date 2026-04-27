import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://ocedro.com.br/sitemap.xml',
    host: 'https://ocedro.com.br',
  };
}
