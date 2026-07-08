import { MetadataRoute } from 'next';
import { categories } from '@/data/categories';
import { cities } from '@/data/cities';
import { submissions as localSubmissions } from '@/data/submissions';

/**
 * Generates sitemap for Google Search Console.
 * Only includes /prices/[category]/[city] pages that have actual data
 * to avoid "thin content" penalties and wasted crawl budget.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://getfairprice.in';

  // Static pages (always included)
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/lookup`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/submit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/alerts`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contractors`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Build a set of category+zipPrefix combos that have actual data
  const dataMap = new Set<string>();
  localSubmissions.forEach(s => {
    const prefix = s.zipCode.substring(0, 3);
    dataMap.add(`${s.categoryId}:${prefix}`);
  });

  // SEO pages: only include /prices/[category]/[city] where data exists
  const seoPages: MetadataRoute.Sitemap = [];
  for (const category of categories) {
    for (const city of cities) {
      const key = `${category.id}:${city.zipPrefix}`;
      if (dataMap.has(key)) {
        seoPages.push({
          url: `${baseUrl}/prices/${category.id}/${city.slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.8,
        });
      }
    }
  }

  return [...staticPages, ...seoPages];
}
