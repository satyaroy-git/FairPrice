import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'When is the Best Time to Get Your AC Serviced in India? | FairPrice',
  description: 'Best months for AC service, seasonal pricing patterns, city-wise costs, and how to save on AC maintenance in India. Complete 2026 guide.',
  alternates: { canonical: 'https://getfairprice.in/blog/ac-service-india' },
};

export default function AcServiceIndiaPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800">AC &amp; Cooling</span>
          <span className="text-xs text-gray-400">7 min read</span>
          <span className="text-xs text-gray-400">July 5, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          When is the Best Time to Get Your AC Serviced in India?
        </h1>
        <p className="text-lg text-gray-600">
          Timing your AC service right can save you 30-50% and ensure your unit runs efficiently when you need it most. Here&apos;s the smart scheduling guide.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Best Months for AC Service</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The ideal time to get your AC serviced is <strong>February to March</strong> — just before the summer rush begins. During these months, technicians have lighter schedules, you get better appointment flexibility, and prices are at their lowest. By April, demand spikes 3-4x and both prices and wait times increase significantly.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you missed the pre-summer window, the next best time is <strong>September to October</strong>, right after the monsoon season ends and before winter begins. This is when you should schedule your annual deep cleaning and any repairs needed before the next summer cycle.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Seasonal Pricing Patterns</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            AC service costs in India follow a predictable seasonal pattern. Understanding this can save you thousands over the lifetime of your unit.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Period</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Demand Level</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Price Premium</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Wait Time</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-3">Jan — Feb</td><td className="border border-gray-200 px-4 py-3">Low</td><td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">Base rate (cheapest)</td><td className="border border-gray-200 px-4 py-3">Same day — 2 days</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">March</td><td className="border border-gray-200 px-4 py-3">Medium</td><td className="border border-gray-200 px-4 py-3 text-amber-600 font-semibold">+10-15%</td><td className="border border-gray-200 px-4 py-3">1 — 3 days</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3">April — June</td><td className="border border-gray-200 px-4 py-3">Very High</td><td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">+30-50%</td><td className="border border-gray-200 px-4 py-3">3 — 7 days</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">July — Sept</td><td className="border border-gray-200 px-4 py-3">Medium-Low</td><td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">Base rate</td><td className="border border-gray-200 px-4 py-3">1 — 2 days</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3">Oct — Dec</td><td className="border border-gray-200 px-4 py-3">Low</td><td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">Base rate — 10% discount</td><td className="border border-gray-200 px-4 py-3">Same day</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            During peak summer (April-June), not only do prices increase by 30-50%, but technicians are often rushing between appointments, leading to less thorough service. Pre-summer servicing ensures your unit gets proper attention.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AC Service Costs by City (2026)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">City</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Basic Service</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Deep Clean</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Gas Refill (R32)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Delhi NCR</td><td className="border border-gray-200 px-4 py-3">₹400 — ₹800</td><td className="border border-gray-200 px-4 py-3">₹1,000 — ₹1,800</td><td className="border border-gray-200 px-4 py-3">₹2,500 — ₹4,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Mumbai</td><td className="border border-gray-200 px-4 py-3">₹500 — ₹1,000</td><td className="border border-gray-200 px-4 py-3">₹1,200 — ₹2,200</td><td className="border border-gray-200 px-4 py-3">₹3,000 — ₹4,500</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Bangalore</td><td className="border border-gray-200 px-4 py-3">₹400 — ₹700</td><td className="border border-gray-200 px-4 py-3">₹900 — ₹1,600</td><td className="border border-gray-200 px-4 py-3">₹2,500 — ₹3,800</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Chennai</td><td className="border border-gray-200 px-4 py-3">₹400 — ₹700</td><td className="border border-gray-200 px-4 py-3">₹900 — ₹1,500</td><td className="border border-gray-200 px-4 py-3">₹2,200 — ₹3,500</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Hyderabad</td><td className="border border-gray-200 px-4 py-3">₹350 — ₹650</td><td className="border border-gray-200 px-4 py-3">₹800 — ₹1,400</td><td className="border border-gray-200 px-4 py-3">₹2,000 — ₹3,500</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Kolkata</td><td className="border border-gray-200 px-4 py-3">₹350 — ₹600</td><td className="border border-gray-200 px-4 py-3">₹800 — ₹1,300</td><td className="border border-gray-200 px-4 py-3">₹2,000 — ₹3,200</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm italic">Note: Prices are for split AC (1-1.5 ton). Window AC service is typically 20-30% cheaper. Prices shown are off-season rates.</p>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of AC Service — What You Actually Need</h2>
          <div className="space-y-4 mb-4">
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Basic Service (Dry Service)</h3>
              <p className="text-gray-700 text-sm mb-2">Filter cleaning, external unit dusting, drain check, basic performance test. Recommended every 2-3 months during heavy use.</p>
              <p className="text-gray-700 text-sm"><strong>Cost:</strong> ₹400-800 | <strong>Time:</strong> 30-45 minutes | <strong>Frequency:</strong> Every 2-3 months</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Deep Clean (Wet/Foam Service)</h3>
              <p className="text-gray-700 text-sm mb-2">Complete disassembly of indoor unit, coil cleaning with foam/jet spray, drain pipe cleaning, outdoor unit cleaning. Removes deep-seated dirt and mould.</p>
              <p className="text-gray-700 text-sm"><strong>Cost:</strong> ₹900-2,200 | <strong>Time:</strong> 1.5-2 hours | <strong>Frequency:</strong> Once before summer, once after monsoon</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Gas Refill (Refrigerant Top-up)</h3>
              <p className="text-gray-700 text-sm mb-2">Checking refrigerant levels and topping up if low. Required only when cooling is reduced and the technician confirms a leak or low gas. Should NOT be a routine service.</p>
              <p className="text-gray-700 text-sm"><strong>Cost:</strong> ₹2,000-4,500 | <strong>Time:</strong> 1-2 hours | <strong>Frequency:</strong> Only when needed (not annual)</p>
            </div>
          </div>
          <div className="bg-amber-50 rounded-xl p-6 mb-4 border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">Common Upselling Alert</h3>
            <p className="text-gray-700 text-sm">
              Many technicians push gas refills during every service visit. A properly sealed AC should NOT need gas refill for 3-5 years. If your AC needs frequent gas top-ups, the real issue is a refrigerant leak that should be fixed, not masked with repeated refills.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended Annual Maintenance Schedule</h2>
          <div className="bg-gray-50 rounded-xl p-6 mb-4">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="font-semibold text-blue-600 min-w-[100px]">February:</span><span>Pre-summer deep clean + performance check</span></li>
              <li className="flex items-start gap-3"><span className="font-semibold text-blue-600 min-w-[100px]">April:</span><span>Basic service (filter clean, drain check)</span></li>
              <li className="flex items-start gap-3"><span className="font-semibold text-blue-600 min-w-[100px]">June:</span><span>Mid-summer basic service (heavy use period)</span></li>
              <li className="flex items-start gap-3"><span className="font-semibold text-blue-600 min-w-[100px]">September:</span><span>Post-monsoon deep clean (remove mould/dampness)</span></li>
              <li className="flex items-start gap-3"><span className="font-semibold text-blue-600 min-w-[100px]">November:</span><span>Winterize — cover outdoor unit if not used in winter</span></li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Star Rating &amp; Electricity Bill Impact</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your AC&apos;s star rating directly impacts your electricity bill. Here&apos;s the approximate monthly electricity cost for running a 1.5-ton split AC for 8 hours daily:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Star Rating</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Monthly Bill (8 hrs/day)</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Annual Saving vs 3-star</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-3">3-star (non-inverter)</td><td className="border border-gray-200 px-4 py-3">₹3,500 — ₹4,500</td><td className="border border-gray-200 px-4 py-3">—</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">3-star (inverter)</td><td className="border border-gray-200 px-4 py-3">₹2,200 — ₹3,000</td><td className="border border-gray-200 px-4 py-3">₹6,000 — ₹12,000/year</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3">5-star (inverter)</td><td className="border border-gray-200 px-4 py-3">₹1,500 — ₹2,200</td><td className="border border-gray-200 px-4 py-3">₹12,000 — ₹20,000/year</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Pro tip:</strong> A well-maintained AC runs 15-20% more efficiently than a neglected one. Regular filter cleaning alone can save ₹300-500/month on electricity. The cost of annual maintenance (₹2,000-4,000) pays for itself in lower electricity bills within 2-3 months.
          </p>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Getting the Best AC Service Deal</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li><strong>Book in February-March</strong> when technicians are less busy and prices are lowest.</li>
            <li><strong>Get an Annual Maintenance Contract (AMC)</strong> — covers 2-4 services per year at 20-30% less than individual visits.</li>
            <li><strong>Service all units together</strong> — multi-unit discounts of 15-25% are standard if you have 2+ ACs.</li>
            <li><strong>Ask what&apos;s included</strong> — ensure the quote covers both indoor and outdoor unit cleaning.</li>
            <li><strong>Don&apos;t agree to gas refill without proof</strong> — ask the technician to show you the pressure reading that indicates low gas.</li>
            <li><strong>Keep your filters clean between services</strong> — a simple monthly rinse extends service intervals and reduces costs.</li>
          </ol>
        </section>

        <section className="mb-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Check Your AC Service Quote</h2>
          <p className="text-gray-700 mb-4">
            Been quoted for AC service and not sure if it&apos;s fair? Compare your quote against community-reported prices on FairPrice. See what others in your city are paying for the same service.
          </p>
          <Link href="/lookup?category=ac-service" className="btn-primary inline-block">
            Check AC Service Prices
          </Link>
        </section>
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/blog" className="text-blue-600 hover:underline">&larr; Back to all articles</Link>
      </footer>
    </article>
  );
}
