import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Much Should You Pay for Plumbing in Mumbai in 2026? | FairPrice',
  description: 'Complete breakdown of plumbing costs in Mumbai — leak repairs, water heater installation, pipe work, and more. Real prices from community data.',
  alternates: { canonical: 'https://getfairprice.in/blog/plumbing-costs-mumbai' },
};

export default function PlumbingCostsMumbaiPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">Plumbing</span>
          <span className="text-xs text-gray-400">6 min read</span>
          <span className="text-xs text-gray-400">July 10, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          How Much Should You Pay for Plumbing in Mumbai in 2026?
        </h1>
        <p className="text-lg text-gray-600">
          Mumbai&apos;s plumbing costs vary dramatically by area, job complexity, and whether you hire through an app or directly. Here&apos;s what real people are paying.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plumbing Cost Overview in Mumbai (2026)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you&apos;re dealing with a leaky faucet in Andheri or installing a new water heater in Powai, understanding fair plumbing prices is essential. Mumbai&apos;s plumbing market is competitive, but prices can still vary by 2-3x depending on the provider, locality, and urgency of the job.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Based on community-reported data on FairPrice, here are the typical ranges you should expect to pay for common plumbing services across Mumbai in 2026.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Plumbing Services &amp; Fair Prices</h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Service</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Price Range</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Average</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-3">Basic leak fix (faucet/pipe joint)</td><td className="border border-gray-200 px-4 py-3">₹300 — ₹800</td><td className="border border-gray-200 px-4 py-3">₹500</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">Bathroom leak repair (wall access)</td><td className="border border-gray-200 px-4 py-3">₹800 — ₹2,500</td><td className="border border-gray-200 px-4 py-3">₹1,500</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3">Water heater installation (15L geyser)</td><td className="border border-gray-200 px-4 py-3">₹800 — ₹1,500</td><td className="border border-gray-200 px-4 py-3">₹1,100</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">Water heater installation (25L geyser)</td><td className="border border-gray-200 px-4 py-3">₹1,000 — ₹2,000</td><td className="border border-gray-200 px-4 py-3">₹1,400</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3">Drain cleaning (single drain)</td><td className="border border-gray-200 px-4 py-3">₹500 — ₹1,200</td><td className="border border-gray-200 px-4 py-3">₹800</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">Toilet installation</td><td className="border border-gray-200 px-4 py-3">₹1,500 — ₹3,500</td><td className="border border-gray-200 px-4 py-3">₹2,500</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3">Full bathroom plumbing (new fit-out)</td><td className="border border-gray-200 px-4 py-3">₹8,000 — ₹20,000</td><td className="border border-gray-200 px-4 py-3">₹12,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">Pipe replacement (per running foot)</td><td className="border border-gray-200 px-4 py-3">₹150 — ₹400</td><td className="border border-gray-200 px-4 py-3">₹250</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3">Overhead tank cleaning</td><td className="border border-gray-200 px-4 py-3">₹500 — ₹1,500</td><td className="border border-gray-200 px-4 py-3">₹900</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm italic">Note: Prices exclude material costs unless specified. Labour-only rates shown.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Area-wise Price Variation in Mumbai</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plumbing prices in Mumbai vary significantly by locality. Premium areas like Bandra, Powai, and South Mumbai command 30-50% higher rates than suburbs like Thane, Navi Mumbai, or Mira Road. This is primarily due to higher cost of living, parking charges, and travel time for plumbers.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-4">
            <h3 className="font-semibold text-gray-900 mb-3">Approximate multipliers by area:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><span>South Mumbai (Colaba, Fort, Marine Lines)</span><span className="font-semibold text-red-600">1.5x — 2x base rate</span></li>
              <li className="flex justify-between"><span>Bandra, Khar, Juhu</span><span className="font-semibold text-orange-600">1.3x — 1.5x base rate</span></li>
              <li className="flex justify-between"><span>Powai, Vikhroli, Ghatkopar</span><span className="font-semibold text-amber-600">1.1x — 1.3x base rate</span></li>
              <li className="flex justify-between"><span>Andheri, Goregaon, Malad</span><span className="font-semibold text-green-600">1x (base rate)</span></li>
              <li className="flex justify-between"><span>Thane, Navi Mumbai, Mira Road</span><span className="font-semibold text-emerald-600">0.8x — 1x base rate</span></li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">App-based vs Local Plumber: Price Comparison</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Services like Urban Company, Housejoy, and Mr. Right offer standardized pricing but charge a platform premium. Local plumbers are cheaper but less predictable in quality. Here&apos;s how they compare:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-2">App-based Services</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>+ Standardized pricing upfront</li>
                <li>+ Warranty on work (30-90 days)</li>
                <li>+ Background-verified professionals</li>
                <li>- 30-50% higher than local rates</li>
                <li>- Limited negotiation possible</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h3 className="font-bold text-green-900 mb-2">Local Plumber</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>+ 30-50% cheaper</li>
                <li>+ Negotiable pricing</li>
                <li>+ Quick response (same society/area)</li>
                <li>- No formal warranty</li>
                <li>- Quality varies widely</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips to Get the Best Plumbing Deal in Mumbai</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li><strong>Always get a written estimate</strong> before work begins. Ask for a breakdown of labour vs materials.</li>
            <li><strong>Compare at least 2-3 quotes</strong> for non-emergency work. Use FairPrice to check if quotes are in the fair range.</li>
            <li><strong>Ask about warranty</strong> — reputable plumbers offer 30-day warranty on workmanship at minimum.</li>
            <li><strong>Buy materials yourself</strong> for major jobs (water heaters, pipes). Plumbers often mark up materials by 20-40%.</li>
            <li><strong>Avoid emergency pricing</strong> when possible. Weekend/night calls cost 50-100% more. For non-urgent leaks, schedule during weekdays.</li>
            <li><strong>Check society recommendations</strong> — building maintenance staff often know reliable, fairly-priced plumbers in the area.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Call a Plumber vs DIY</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not every plumbing issue requires a professional. Here&apos;s a quick guide:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-5">
              <h3 className="font-semibold text-green-800 mb-2">DIY-friendly</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Replacing tap washers</li>
                <li>Clearing minor sink clogs</li>
                <li>Replacing shower heads</li>
                <li>Tightening pipe joints</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-5">
              <h3 className="font-semibold text-red-800 mb-2">Call a professional</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Wall leaks / hidden pipe damage</li>
                <li>Water heater installation</li>
                <li>Sewer line issues</li>
                <li>Gas line connections</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Check Your Plumbing Quote</h2>
          <p className="text-gray-700 mb-4">
            Got a quote from a plumber? Enter it on FairPrice to instantly see if it&apos;s fair, a bit high, or overpriced compared to what others in Mumbai have paid.
          </p>
          <Link href="/lookup?category=plumbing" className="btn-primary inline-block">
            Check Your Quote Now
          </Link>
        </section>
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/blog" className="text-blue-600 hover:underline">&larr; Back to all articles</Link>
      </footer>
    </article>
  );
}
