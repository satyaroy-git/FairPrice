import { Metadata } from 'next';
import { categories } from '@/data/categories';
import { cities } from '@/data/cities';
import { submissions as localSubmissions } from '@/data/submissions';
import { getServiceSupabase } from '@/lib/supabase';
import Link from 'next/link';

interface PageProps {
  params: { category: string; city: string };
}

// Only generate static paths for category/city combos with data
export async function generateStaticParams() {
  const dataMap = new Set<string>();
  localSubmissions.forEach(s => {
    const prefix = s.zipCode.substring(0, 3);
    dataMap.add(`${s.categoryId}:${prefix}`);
  });

  const paths: { category: string; city: string }[] = [];
  for (const cat of categories) {
    for (const city of cities) {
      if (dataMap.has(`${cat.id}:${city.zipPrefix}`)) {
        paths.push({ category: cat.id, city: city.slug });
      }
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

  const title = `${category.name} Prices in ${city.name} (2026) — What Should You Pay? | FairPrice`;
  const description = `See real ${category.name.toLowerCase()} costs in ${city.name}, ${city.state}. Compare prices from ${category.description.toLowerCase()}. Community-reported data updated ${new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}. Check if your quote is fair.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://getfairprice.in/prices/${params.category}/${params.city}`,
      images: [{ url: '/logo.svg', width: 512, height: 512, alt: 'FairPrice Logo' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://getfairprice.in/prices/${params.category}/${params.city}`,
    },
  };
}

async function getCityPriceData(categoryId: string, zipPrefix: string) {
  try {
    const supabase = getServiceSupabase();
    const { data: submissions } = await supabase
      .from('submissions')
      .select('*')
      .eq('category_id', categoryId)
      .like('zip_code', `${zipPrefix}%`)
      .order('submitted_at', { ascending: false })
      .limit(50);

    if (submissions && submissions.length > 0) return submissions;
  } catch {
    // Supabase unavailable — fall through to local data
  }

  // Fallback to local seed data
  return localSubmissions
    .filter(s => s.categoryId === categoryId && s.zipCode.startsWith(zipPrefix))
    .map(s => ({
      id: s.id,
      service_type: s.serviceType,
      category_id: s.categoryId,
      zip_code: s.zipCode,
      price_paid: s.pricePaid,
      company_name: s.companyName || null,
      job_description: s.jobDescription || null,
      submitted_at: s.submittedAt,
      trust_points: s.trustPoints,
    }));
}

/**
 * Generate contextual tips based on category and location
 */
function getLocalTips(categoryId: string, cityName: string, isIndia: boolean): string[] {
  const tips: Record<string, string[]> = {
    'plumbing': [
      `Always ask for a written estimate before plumbing work begins in ${cityName}.`,
      `Licensed plumbers in ${isIndia ? 'India' : 'the US'} should provide warranty on labour.`,
      `${isIndia ? 'During monsoon season' : 'In winter'}, plumbing services are in high demand — book early.`,
      `Compare at least 2-3 quotes before choosing a plumber in ${cityName}.`,
    ],
    'electrical': [
      `Always hire a licensed electrician in ${cityName} — unlicensed work can void insurance.`,
      `Ask if the quote includes both materials and labour.`,
      `${isIndia ? 'ISI-marked' : 'UL-listed'} materials are essential for safety.`,
      `Get a post-work inspection certificate for panel upgrades.`,
    ],
    'auto-repair': [
      `Authorised service centres in ${cityName} cost more but offer warranty coverage.`,
      `Multi-brand workshops can save 30-50% compared to dealership prices.`,
      `Always ask for the old parts back after replacement.`,
      `${isIndia ? 'FASTag' : 'AAA membership'} can provide roadside assistance discounts.`,
    ],
    'house-rent': [
      `${cityName} rents have increased ~14% in 2026 due to high demand.`,
      `Always verify the property documents before signing a lease.`,
      `${isIndia ? 'Lock-in period is typically 11 months' : 'Standard leases are 12 months'} in ${cityName}.`,
      `Factor in maintenance charges, parking, and utilities beyond base rent.`,
      `${isIndia ? 'Police verification is mandatory for tenants' : 'Credit checks are standard'} in ${cityName}.`,
    ],
    'hvac': [
      `Annual AC servicing before summer in ${cityName} extends equipment life by 3-5 years.`,
      `${isIndia ? 'Star-rated ACs' : 'ENERGY STAR units'} save significantly on electricity bills.`,
      `Get the gas pressure checked during every service visit.`,
    ],
    'dental': [
      `Dental prices in ${cityName} vary 2-3x between chain clinics and private practitioners.`,
      `Ask about treatment package deals — root canal + crown is often cheaper bundled.`,
      `${isIndia ? 'NABH-accredited' : 'ADA-member'} clinics follow standardised pricing.`,
    ],
    'moving': [
      `Book packers & movers in ${cityName} at least 1-2 weeks in advance.`,
      `${isIndia ? 'Transit insurance is essential' : 'Verify the moving company\'s USDOT number'}.`,
      `Weekday and mid-month moves are typically 15-20% cheaper.`,
      `Get a written inventory list and condition report before loading.`,
    ],
    'home-exterior': [
      `${isIndia ? 'Waterproofing before monsoon' : 'Roof inspection before winter'} prevents costly damage.`,
      `Exterior painting in ${cityName} lasts 4-7 years depending on weather exposure.`,
      `Get quotes from at least 3 contractors and check past work photos.`,
    ],
    'pest-control': [
      `Annual maintenance contracts (AMC) for pest control save 30-40% vs one-time treatments.`,
      `${isIndia ? 'CPCB-approved chemicals' : 'EPA-registered products'} are safer for families and pets.`,
      `Termite treatment should include a 5-year warranty minimum.`,
    ],
    'cleaning': [
      `Deep cleaning in ${cityName} is most affordable during weekdays.`,
      `Professional cleaning before moving in/out can save your security deposit.`,
      `Check if the service includes cleaning supplies or if you need to provide them.`,
    ],
    'appliance-repair': [
      `Out-of-warranty repairs by authorised centres cost 40-60% more than local technicians.`,
      `Always get a diagnostic fee quoted upfront before authorising repairs.`,
      `If repair cost exceeds 50% of replacement cost, consider buying new.`,
    ],
    'home-security': [
      `CCTV installations in ${cityName} should include at least 15 days of recording storage.`,
      `${isIndia ? 'IP cameras with cloud backup' : 'PoE cameras with NVR'} offer the best reliability.`,
      `Smart locks should always have a physical key backup.`,
    ],
    'carpentry': [
      `Custom furniture in ${cityName} takes 2-4 weeks — plan ahead.`,
      `${isIndia ? 'BWP-grade plywood' : 'Baltic birch plywood'} is best for humid areas like kitchens.`,
      `Get a detailed design drawing approved before fabrication begins.`,
    ],
    'interior-design': [
      `Modular kitchen costs in ${cityName} vary based on material: laminate < acrylic < PU finish.`,
      `False ceiling rates are per sq ft — measure accurately to avoid overcharging.`,
      `${isIndia ? 'Gypsum board ceilings' : 'Drywall ceilings'} are easier to repair than POP.`,
    ],
    'landscaping': [
      `Native plants for ${cityName} need less maintenance and water.`,
      `Tree removal near power lines requires certified arborists.`,
      `Irrigation systems save 30-50% water vs manual watering.`,
    ],
  };

  return tips[categoryId] || [
    `Always compare 2-3 quotes before hiring in ${cityName}.`,
    `Ask for references and check online reviews.`,
    `Get a written estimate with breakdown of materials and labour.`,
  ];
}

/**
 * Generate FAQ content for the page
 */
function getFAQs(categoryName: string, cityName: string, isIndia: boolean, hasData: boolean, avg: number, symbol: string): { q: string; a: string }[] {
  const faqs = [
    {
      q: `What is the average cost of ${categoryName.toLowerCase()} in ${cityName}?`,
      a: hasData
        ? `Based on community-reported data, the average cost for ${categoryName.toLowerCase()} services in ${cityName} is approximately ${symbol}${avg.toLocaleString(isIndia ? 'en-IN' : 'en-US')}. Prices vary based on scope of work, materials, and provider.`
        : `We are currently collecting price data for ${categoryName.toLowerCase()} in ${cityName}. Submit your price to help others!`,
    },
    {
      q: `How do I find a reliable ${categoryName.toLowerCase()} service provider in ${cityName}?`,
      a: `Check FairPrice contractor fairness scores, read online reviews, verify ${isIndia ? 'GST registration' : 'licenses and insurance'}, and always get a written estimate before starting work.`,
    },
    {
      q: `Why do ${categoryName.toLowerCase()} prices vary so much in ${cityName}?`,
      a: `Prices vary due to: scope and complexity of work, materials quality, provider experience and reputation, ${isIndia ? 'locality (premium vs suburban areas)' : 'neighborhood and access'}, and seasonal demand.`,
    },
    {
      q: `When is the best time to get ${categoryName.toLowerCase()} services in ${cityName}?`,
      a: `${isIndia ? 'Avoid peak seasons (monsoon for plumbing, summer for AC)' : 'Off-season (spring/fall for HVAC, winter for landscaping)'} for better rates. Weekdays and mid-month bookings often get 10-15% discounts.`,
    },
    {
      q: `How can I ensure I'm getting a fair price?`,
      a: `Use FairPrice to compare what others in ${cityName} have paid for the same service. Get at least 2-3 quotes, check our contractor fairness scores, and never pay the full amount upfront.`,
    },
  ];

  return faqs;
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
  const prices = submissions.map((s: { price_paid: number }) => Number(s.price_paid));
  const hasData = prices.length > 0;
  const low = hasData ? Math.min(...prices) : 0;
  const high = hasData ? Math.max(...prices) : 0;
  const avg = hasData ? Math.round(prices.reduce((a: number, b: number) => a + b, 0) / prices.length) : 0;

  // Group by service type
  const serviceGroups: Record<string, { prices: number[]; companies: string[] }> = {};
  submissions.forEach((s: { service_type: string; price_paid: number; company_name: string | null }) => {
    const key = s.service_type;
    if (!serviceGroups[key]) serviceGroups[key] = { prices: [], companies: [] };
    serviceGroups[key].prices.push(Number(s.price_paid));
    if (s.company_name && !serviceGroups[key].companies.includes(s.company_name)) {
      serviceGroups[key].companies.push(s.company_name);
    }
  });

  const formatPrice = (amount: number) => `${symbol}${amount.toLocaleString(locale)}`;

  // Get rich content
  const localTips = getLocalTips(category.id, city.name, isIndia);
  const faqs = getFAQs(category.name, city.name, isIndia, hasData, avg, symbol);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${category.name} Services in ${city.name}`,
    description: `${category.name} prices and costs in ${city.name}, ${city.state}. Community-reported pricing data.`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: { '@type': 'State', name: city.state },
    },
    provider: {
      '@type': 'Organization',
      name: 'FairPrice',
      url: 'https://getfairprice.in',
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

  // FAQ structured data for Google rich results
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div>
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{category.name}</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{city.name}</span>
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
              <p className="text-blue-200">{city.state}, {city.country} &bull; Updated {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
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
              <p className="text-blue-200 text-xs text-center mt-3">Based on {submissions.length} community price reports</p>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Introduction paragraph — unique content for SEO */}
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            Looking for {category.name.toLowerCase()} services in {city.name}? FairPrice provides transparent,
            community-reported pricing data to help you understand what others in {city.name}, {city.state} have actually
            paid. {hasData
              ? `Based on ${submissions.length} reports, ${category.name.toLowerCase()} costs in ${city.name} range from ${formatPrice(low)} to ${formatPrice(high)}, with an average of ${formatPrice(avg)}.`
              : `We are actively collecting price data for this area. Submit your price to help others in ${city.name} get fair deals.`
            }
          </p>
        </section>

        {hasData ? (
          <>
            {/* Service Breakdown */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {category.name} Services &amp; Prices in {city.name}
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
                              Providers: {group.companies.join(', ')}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Range</p>
                          <p className="font-semibold">
                            <span className="text-emerald-600">{formatPrice(sLow)}</span>
                            <span className="text-gray-400 mx-1">&mdash;</span>
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
                {category.name} Subcategories in {city.name}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.subcategories.map(sub => (
                  <Link
                    key={sub.id}
                    href={`/lookup?category=${category.id}&subcategory=${sub.id}&zip=${city.zipPrefix}001`}
                    className="card !p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-medium text-gray-900 text-sm">{sub.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{sub.serviceTypes.length} service types</p>
                    <p className="text-xs text-blue-600 mt-1">Check prices &rarr;</p>
                  </Link>
                ))}
              </div>
            </section>
          </>
        ) : (
          <div className="text-center py-12 mb-8 bg-gray-50 rounded-xl">
            <span className="text-5xl block mb-4">📊</span>
            <h2 className="text-xl font-bold text-gray-700 mb-2">
              No price data yet for {category.name} in {city.name}
            </h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Be the first to submit what you paid for {category.name.toLowerCase()} services in {city.name}.
              Your anonymous submission helps everyone get fair prices.
            </p>
            <Link href="/submit" className="btn-primary inline-block">
              Submit a Price
            </Link>
          </div>
        )}

        {/* Local Tips — always shown (provides unique content for SEO) */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            💡 Tips for Getting Fair {category.name} Prices in {city.name}
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <ul className="space-y-3">
              {localTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ Section — always shown (rich content for SEO + Google rich results) */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="card group" open={index === 0}>
                <summary className="font-medium text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="card bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 text-center mb-10">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Need a {category.name.toLowerCase()} quote in {city.name}?</h2>
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

        {/* Internal Links for SEO — cross-linking boosts page authority */}
        <section className="mb-8">
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

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {category.name} in Other Cities
          </h3>
          <div className="flex flex-wrap gap-2">
            {cities.filter(c => c.slug !== city.slug).map(c => (
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
