import { Metadata } from 'next';
import { categories } from '@/data/categories';
import { cities } from '@/data/cities';
import { getServiceSupabase } from '@/lib/supabase';
import Link from 'next/link';

interface PageProps {
  params: { category: string; city: string };
}

// Generate all static paths for SEO
export async function generateStaticParams() {
  const paths: { category: string; city: string }[] = [];
  for (const cat of categories) {
    for (const city of cities) {
      paths.push({ category: cat.id, city: city.slug });
    }
  }
  return paths;
}

// Dynamic meta tags for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = categories.find(c => c.id === params.category);
  const city = cities.find(c => c.slug === params.city);

  if (!category || !city) {
    return { title: 'FairPrice - Price Not Found' };
  }

  const title = `${category.name} Prices in ${city.name} (2026) — FairPrice`;
  const description = `Compare ${category.name.toLowerCase()} prices in ${city.name}, ${city.state}. See what real people paid for ${category.description.toLowerCase()} services. Updated ${new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://fairprice.app/prices/${params.category}/${params.city}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `/prices/${params.category}/${params.city}`,
    },
  };
}

async function getCityPriceData(categoryId: string, zipPrefix: string) {
  const supabase = getServiceSupabase();

  const { data: submissions } = await supabase
    .from('submissions')
    .select('*')
    .eq('category_id', categoryId)
    .like('zip_code', `${zipPrefix}%`)
    .order('submitted_at', { ascending: false })
    .limit(50);

  return submissions || [];
}

export default async function SEOPricePage({ params }: PageProps) {
  const category = categories.find(c => c.id === params.category);
  const city = cities.find(c => c.slug === params.city);

  if (!category || !city) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Page Not Found</h1>
        <p className="text-gray-600 mt-2">This price page doesn&apos;t exist.</p>
        <Link href="/" className="btn-primary inline-block mt-4">Go Home</Link>
      </div>
    );
  }

  const submissions = await getCityPriceData(category.id, city.zipPrefix);
  const isIndia = city.country === 'India';
  const symbol = isIndia ? '₹' : '$';
  const locale = isIndia ? 'en-IN' : 'en-US';

  // Calculate price stats
  const prices = submissions.map(s => Number(s.price_paid));
  const hasData = prices.length > 0;
  const low = hasData ? Math.min(...prices) : 0;
  const high = hasData ? Math.max(...prices) : 0;
  const avg = hasData ? Math.round(prices.reduce((a, b) => a + b, 0) / prices.length) : 0;

  // Group by service type
  const serviceGroups: Record<string, { prices: number[]; companies: string[] }> = {};
  submissions.forEach(s => {
    const key = s.service_type;
    if (!serviceGroups[key]) serviceGroups[key] = { prices: [], companies: [] };
    serviceGroups[key].prices.push(Number(s.price_paid));
    if (s.company_name && !serviceGroups[key].companies.includes(s.company_name)) {
      serviceGroups[key].companies.push(s.company_name);
    }
  });

  const formatPrice = (amount: number) => `${symbol}${amount.toLocaleString(locale)}`;

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${category.name} Services in ${city.name}`,
    description: `${category.name} prices and costs in ${city.name}, ${city.state}`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: { '@type': 'State', name: city.state },
    },
    provider: {
      '@type': 'Organization',
      name: 'FairPrice',
    },
    ...(hasData && {
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: low,
        highPrice: high,
        priceCurrency: isIndia ? 'INR' : 'USD',
        offerCount: submissions.length,
      },
    }),
  };

  return (
    <div>
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/prices/${category.id}/${city.slug}`} className="hover:text-blue-600">{category.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{city.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{category.icon}</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                {category.name} Prices in {city.name}
              </h1>
              <p className="text-blue-200">{city.state}, {city.country} • Updated {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
            </div>
          </div>
          {hasData && (
            <div className="mt-6 bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-blue-200 text-sm">Low</p>
                  <p className="text-2xl font-bold">{formatPrice(low)}</p>
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Average</p>
                  <p className="text-2xl font-bold">{formatPrice(avg)}</p>
                </div>
                <div>
                  <p className="text-blue-200 text-sm">High</p>
                  <p className="text-2xl font-bold">{formatPrice(high)}</p>
                </div>
              </div>
              <p className="text-blue-200 text-xs text-center mt-3">Based on {submissions.length} price reports</p>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {hasData ? (
          <>
            {/* Service Breakdown */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {category.name} Services & Prices in {city.name}
              </h2>
              <div className="space-y-4">
                {Object.entries(serviceGroups).map(([serviceType, group]) => {
                  const sLow = Math.min(...group.prices);
                  const sHigh = Math.max(...group.prices);
                  const sAvg = Math.round(group.prices.reduce((a, b) => a + b, 0) / group.prices.length);

                  return (
                    <div key={serviceType} className="card">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900 capitalize">{serviceType}</h3>
                          <p className="text-sm text-gray-500">{group.prices.length} reports</p>
                          {group.companies.length > 0 && (
                            <p className="text-xs text-gray-400 mt-1">
                              Companies: {group.companies.join(', ')}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Range</p>
                          <p className="font-semibold">
                            <span className="text-emerald-600">{formatPrice(sLow)}</span>
                            <span className="text-gray-400 mx-1">—</span>
                            <span className="text-red-600">{formatPrice(sHigh)}</span>
                          </p>
                          <p className="text-xs text-gray-500">Avg: {formatPrice(sAvg)}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Subcategories */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {category.name} Subcategories
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.subcategories.map(sub => (
                  <div key={sub.id} className="card !p-4">
                    <h3 className="font-medium text-gray-900 text-sm">{sub.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{sub.serviceTypes.length} service types</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          <div className="text-center py-16">
            <span className="text-5xl block mb-4">📊</span>
            <h2 className="text-xl font-bold text-gray-700 mb-2">
              No price data yet for {category.name} in {city.name}
            </h2>
            <p className="text-gray-500 mb-6">
              Be the first to submit what you paid for {category.name.toLowerCase()} services in {city.name}.
            </p>
            <Link href="/submit" className="btn-primary inline-block">
              Submit a Price
            </Link>
          </div>
        )}

        {/* CTA */}
        <section className="card bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 text-center">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Need a {category.name} quote in {city.name}?</h2>
          <p className="text-gray-600 text-sm mb-4">Check if your quote is fair or get connected with vetted professionals.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={`/lookup?category=${category.id}`} className="btn-primary inline-block">
              Check Your Quote
            </Link>
            <Link href="/submit" className="btn-secondary inline-block">
              Submit What You Paid
            </Link>
          </div>
        </section>

        {/* Internal Links for SEO */}
        <section className="mt-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Other Services in {city.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.filter(c => c.id !== category.id).map(cat => (
              <Link
                key={cat.id}
                href={`/prices/${cat.id}/${city.slug}`}
                className="text-sm px-3 py-1.5 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
              >
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {category.name} in Other Cities
          </h3>
          <div className="flex flex-wrap gap-2">
            {cities.filter(c => c.slug !== city.slug).slice(0, 12).map(c => (
              <Link
                key={c.slug}
                href={`/prices/${category.id}/${c.slug}`}
                className="text-sm px-3 py-1.5 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
