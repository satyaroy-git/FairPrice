import { MetadataRoute } from 'next';
import { categories } from '@/data/categories';
import { cities } from '@/data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fairprice.app';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/lookup`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/submit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/alerts`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  // SEO pages: /prices/[category]/[city]
  const seoPages: MetadataRoute.Sitemap = [];
  for (const category of categories) {
    for (const city of cities) {
      seoPages.push({
        url: `${baseUrl}/prices/${category.id}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  return [...staticPages, ...seoPages];
}
