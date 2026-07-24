import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How We Calculate Fair Prices — Our Methodology | FairPrice',
  description:
    'Learn how FairPrice determines fair price ranges using community data, time-decay weighting, and statistical analysis.',
  alternates: { canonical: 'https://getfairprice.in/methodology' },
};

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          How We Calculate Fair Prices
        </h1>
        <p className="text-lg text-gray-600">
          Transparency is at the heart of FairPrice. Here&apos;s exactly how we
          turn community-reported prices into actionable insights you can trust.
        </p>
      </header>

      <div className="prose prose-lg max-w-none space-y-10">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            1. Community-Sourced Data
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every price on FairPrice comes from a real person who actually paid
            for a service. We don&apos;t scrape estimates or use theoretical
            calculators. When someone gets their plumbing fixed, AC serviced, or
            signs a rental agreement, they submit the exact amount they paid
            along with context (location, scope of work, provider name).
          </p>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              What we collect with each submission:
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">●</span>
                <span><strong>Service type</strong> — What was done (e.g., &ldquo;2BHK rent&rdquo;, &ldquo;brake pads replacement&rdquo;)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">●</span>
                <span><strong>Price paid</strong> — The actual amount in local currency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">●</span>
                <span><strong>ZIP / PIN code</strong> — For location-specific pricing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">●</span>
                <span><strong>Job description</strong> — Scope, materials, complexity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">●</span>
                <span><strong>Provider name</strong> (optional) — For contractor fairness scores</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">●</span>
                <span><strong>Date</strong> — When the service was completed</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2. Location Matching
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Prices vary significantly by location. A plumber in South Mumbai
            charges differently than one in Thane. We match your query to
            nearby areas using ZIP/PIN code prefixes:
          </p>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p className="text-gray-700 text-sm mb-2">
              <strong>How it works:</strong> When you search for a service in
              PIN 400051 (Bandra), we look at all submissions in the 400xxx
              range — covering the greater Mumbai area. This ensures enough data
              points for a meaningful range while keeping results locally
              relevant.
            </p>
            <p className="text-gray-600 text-xs mt-3 italic">
              For Indian PINs: first 3 digits = district/region. For US ZIPs:
              first 3 digits = sectional center.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3. Time-Decay Weighted Averages
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Prices change over time. A submission from last month is more
            relevant than one from a year ago. We use a time-decay algorithm
            that gives more weight to recent data:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Submission Age</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Weight</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Impact on Average</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-3">Less than 3 months</td><td className="border border-gray-200 px-4 py-3 font-semibold text-green-700">1.0 (full weight)</td><td className="border border-gray-200 px-4 py-3">Maximum influence</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">3 — 6 months</td><td className="border border-gray-200 px-4 py-3 font-semibold text-yellow-700">0.8</td><td className="border border-gray-200 px-4 py-3">High influence</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3">6 — 9 months</td><td className="border border-gray-200 px-4 py-3 font-semibold text-orange-700">0.5</td><td className="border border-gray-200 px-4 py-3">Moderate influence</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">9 — 12 months</td><td className="border border-gray-200 px-4 py-3 font-semibold text-red-700">0.3</td><td className="border border-gray-200 px-4 py-3">Low influence</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3">Over 12 months</td><td className="border border-gray-200 px-4 py-3 font-semibold text-gray-500">0.1</td><td className="border border-gray-200 px-4 py-3">Minimal (stale data)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm">
            This means if prices have risen recently (as they did 14% in India
            in Q1 2026), our averages reflect the increase quickly rather than
            being dragged down by outdated data.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            4. The Verdict System
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you enter your quote, we compare it against the weighted
            average and give you an instant verdict:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-xl p-5 border border-green-200 text-center">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="font-bold text-green-800">FAIR</h3>
              <p className="text-xs text-gray-600 mt-1">
                Quote is within 10% of the area average
              </p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-200 text-center">
              <div className="text-3xl mb-2">⚠️</div>
              <h3 className="font-bold text-yellow-800">A BIT HIGH</h3>
              <p className="text-xs text-gray-600 mt-1">
                Quote is 10-25% above average
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-200 text-center">
              <div className="text-3xl mb-2">🚨</div>
              <h3 className="font-bold text-red-800">OVERPRICED</h3>
              <p className="text-xs text-gray-600 mt-1">
                Quote is more than 25% above average
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            5. Contractor Fairness Scores
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When multiple submissions mention the same contractor or company, we
            calculate a Fairness Score (0-100) based on how their pricing
            compares to the area average:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">90-100:</span>
              <span>Consistently fair pricing — excellent value</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">70-89:</span>
              <span>Generally fair with occasional premium pricing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">50-69:</span>
              <span>Above average pricing — may be justified by quality</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">Below 50:</span>
              <span>Significantly above area averages — approach with caution</span>
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            6. Data Freshness Indicators
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We&apos;re transparent about how current our data is. Every lookup
            result includes a freshness badge:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
              <span>🟢</span>
              <div><strong className="text-emerald-800">Fresh</strong><span className="text-gray-600 text-sm ml-2">— Most recent data is less than 3 months old</span></div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
              <span>🟡</span>
              <div><strong className="text-yellow-800">Recent</strong><span className="text-gray-600 text-sm ml-2">— Data is 3-6 months old, still reliable</span></div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
              <span>🟠</span>
              <div><strong className="text-orange-800">Aging</strong><span className="text-gray-600 text-sm ml-2">— Data is 6-12 months old, prices may have changed</span></div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
              <span>🔴</span>
              <div><strong className="text-red-800">Stale</strong><span className="text-gray-600 text-sm ml-2">— Data is over 12 months old, treat as rough estimate</span></div>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            7. Trust Points &amp; Data Quality
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To prevent spam and ensure data quality, FairPrice uses a Trust
            Points system. Contributors earn points for verified submissions,
            which unlocks additional features:
          </p>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span>New user (0 points)</span>
                <span className="text-gray-500">10 free lookups</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span>Contributor (10+ points)</span>
                <span className="text-gray-500">20 lookups + contractor scores</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Trusted (50+ points)</span>
                <span className="text-gray-500">Unlimited lookups + all features</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Each verified price submission earns 10 trust points. This creates a
            virtuous cycle: contribute data → unlock features → get better
            pricing insights.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            8. Privacy &amp; Anonymity
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All submissions are anonymous. We never display individual prices
            with identifying information. Only aggregated ranges, averages, and
            contractor-level scores are shown publicly. Your email is used
            solely for trust point tracking and optional price alerts — never
            shared with third parties. Read our full{' '}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>{' '}
            for details.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 rounded-xl p-8 border border-blue-200 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Try It Yourself
          </h2>
          <p className="text-gray-700 mb-4">
            Enter a service and your ZIP/PIN code to see our methodology in
            action — instant price ranges, freshness data, and a verdict on
            your quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/lookup" className="btn-primary inline-block">
              Look Up a Price
            </Link>
            <Link href="/submit" className="btn-secondary inline-block">
              Submit What You Paid
            </Link>
          </div>
        </section>
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/blog" className="text-blue-600 hover:underline">
          &larr; Read our blog for pricing guides
        </Link>
      </footer>
    </div>
  );
}
