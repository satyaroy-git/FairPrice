import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Understanding Fair Prices for Auto Repair in India (2026) | FairPrice',
  description: 'Compare authorised service centre vs multi-brand workshop costs for car service, oil change, brake pads, denting, painting and more. 2026 pricing guide for India.',
  alternates: { canonical: 'https://getfairprice.in/blog/auto-repair-costs-india' },
};

export default function AutoRepairCostsIndiaPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">Auto</span>
          <span className="text-xs text-gray-400">8 min read</span>
          <span className="text-xs text-gray-400">July 3, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Understanding Fair Prices for Auto Repair in India (2026)
        </h1>
        <p className="text-lg text-gray-600">
          Are you overpaying at the authorised service centre? Here&apos;s a complete breakdown of what car repairs should cost — and when the local workshop is the smarter choice.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Authorised Service Centre vs Multi-Brand Workshop</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The biggest pricing decision for car owners is choosing between an authorised service centre (ASC) and a multi-brand/local workshop. The price difference is staggering — multi-brand workshops are typically <strong>40-60% cheaper</strong> for the same job with comparable quality parts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            However, the choice isn&apos;t always straightforward. Authorised centres use genuine OEM parts, maintain your warranty, and have brand-trained technicians. After your warranty period ends (typically 2-3 years), switching to a trusted multi-brand workshop makes financial sense for routine maintenance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-2">Authorised Service Centre</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>+ Genuine OEM parts guaranteed</li>
                <li>+ Warranty remains valid</li>
                <li>+ Digital service history</li>
                <li>+ Brand-trained technicians</li>
                <li>- 40-60% more expensive</li>
                <li>- Frequent upselling of unnecessary services</li>
                <li>- Longer wait times for appointments</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h3 className="font-bold text-green-900 mb-2">Multi-Brand Workshop</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>+ 40-60% cheaper overall</li>
                <li>+ Flexible scheduling</li>
                <li>+ Willing to use aftermarket parts (your choice)</li>
                <li>+ Personal relationship with mechanic</li>
                <li>- Quality varies widely</li>
                <li>- No warranty coverage protection</li>
                <li>- May not have brand-specific diagnostic tools</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Auto Repair Costs (2026)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Service</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Authorised Centre</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Multi-Brand Workshop</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Engine oil change (synthetic)</td><td className="border border-gray-200 px-4 py-3">₹2,500 — ₹4,000</td><td className="border border-gray-200 px-4 py-3">₹1,500 — ₹2,500</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Brake pad replacement (pair)</td><td className="border border-gray-200 px-4 py-3">₹3,500 — ₹5,000</td><td className="border border-gray-200 px-4 py-3">₹2,000 — ₹3,500</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">General car service (minor)</td><td className="border border-gray-200 px-4 py-3">₹5,000 — ₹8,000</td><td className="border border-gray-200 px-4 py-3">₹3,000 — ₹5,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Denting per panel</td><td className="border border-gray-200 px-4 py-3">₹5,000 — ₹15,000</td><td className="border border-gray-200 px-4 py-3">₹3,000 — ₹8,000</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Painting per panel</td><td className="border border-gray-200 px-4 py-3">₹4,000 — ₹10,000</td><td className="border border-gray-200 px-4 py-3">₹3,000 — ₹6,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Tyre replacement (per tyre)</td><td className="border border-gray-200 px-4 py-3">₹4,000 — ₹8,000</td><td className="border border-gray-200 px-4 py-3">₹3,000 — ₹7,000</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Battery replacement</td><td className="border border-gray-200 px-4 py-3">₹5,000 — ₹9,000</td><td className="border border-gray-200 px-4 py-3">₹3,500 — ₹6,500</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">AC gas refill (car)</td><td className="border border-gray-200 px-4 py-3">₹2,500 — ₹4,000</td><td className="border border-gray-200 px-4 py-3">₹1,500 — ₹2,500</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Clutch plate replacement</td><td className="border border-gray-200 px-4 py-3">₹8,000 — ₹15,000</td><td className="border border-gray-200 px-4 py-3">₹5,000 — ₹10,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm italic">Note: Prices for hatchbacks/sedans (Maruti, Hyundai, Honda). SUVs and luxury brands cost 30-100% more. Prices include parts and labour.</p>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding the Service Menu — What&apos;s Actually Needed?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Authorised service centres are notorious for recommending services your car doesn&apos;t need. Here&apos;s a realistic maintenance schedule vs what they often push:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Service</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Actually Needed</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Often Pushed At</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-3">Engine oil change</td><td className="border border-gray-200 px-4 py-3">Every 10,000-15,000 km</td><td className="border border-gray-200 px-4 py-3">Every 5,000 km</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">Air filter replacement</td><td className="border border-gray-200 px-4 py-3">Every 20,000-30,000 km</td><td className="border border-gray-200 px-4 py-3">Every 10,000 km</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3">Brake fluid change</td><td className="border border-gray-200 px-4 py-3">Every 40,000-60,000 km</td><td className="border border-gray-200 px-4 py-3">Every 20,000 km</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">Coolant flush</td><td className="border border-gray-200 px-4 py-3">Every 40,000-50,000 km</td><td className="border border-gray-200 px-4 py-3">Every service visit</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3">Spark plugs</td><td className="border border-gray-200 px-4 py-3">Every 30,000-50,000 km</td><td className="border border-gray-200 px-4 py-3">Every 15,000-20,000 km</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">Wheel alignment</td><td className="border border-gray-200 px-4 py-3">Every 10,000-15,000 km or after pothole</td><td className="border border-gray-200 px-4 py-3">Every service visit</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Pro tip:</strong> Always check your owner&apos;s manual for the manufacturer&apos;s recommended service intervals. These are based on engineering data, not revenue targets. If a service centre recommends something ahead of schedule, ask them to show you the worn/damaged part.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Avoid Upselling at Service Centres</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li><strong>Know your service schedule</strong> — Keep a record of what was done at each service. Decline services that aren&apos;t due yet per the owner&apos;s manual.</li>
            <li><strong>Ask to see old parts</strong> — Before any replacement, ask the service advisor to show you the worn part. A legitimate issue will be visually obvious.</li>
            <li><strong>Get a pre-service estimate</strong> — Insist on a written estimate before work begins. Any additions during service should require your phone approval.</li>
            <li><strong>Decline &quot;recommended&quot; add-ons</strong> — Fuel injector cleaning, engine flush, and underbody coating are often unnecessary upsells with minimal actual benefit.</li>
            <li><strong>Check part prices independently</strong> — Look up genuine part prices on boodmo.com or the manufacturer&apos;s parts portal before agreeing to replacements.</li>
            <li><strong>Ask &quot;what happens if I skip this?&quot;</strong> — Most upsold services can safely wait. If the answer is vague (&quot;it&apos;s good to do&quot;), it&apos;s probably not urgent.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Denting &amp; Painting — What Drives the Cost</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Denting and painting costs vary dramatically based on the severity of damage, panel location, and paint type. Here&apos;s what affects pricing:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-4">
            <h3 className="font-semibold text-gray-900 mb-3">Cost factors for denting &amp; painting:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><span>Minor scratch (single panel)</span><span className="font-semibold">₹3,000 — ₹5,000</span></li>
              <li className="flex justify-between"><span>Medium dent (door panel)</span><span className="font-semibold">₹5,000 — ₹10,000</span></li>
              <li className="flex justify-between"><span>Major dent (bonnet/roof)</span><span className="font-semibold">₹8,000 — ₹15,000</span></li>
              <li className="flex justify-between"><span>Full body repaint</span><span className="font-semibold">₹30,000 — ₹60,000</span></li>
              <li className="flex justify-between"><span>Metallic/pearl paint (premium)</span><span className="font-semibold">+20-40% over standard</span></li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Insurance tip:</strong> For damages above ₹8,000-10,000, filing an insurance claim often makes sense. However, frequent small claims can increase your premium at renewal. Save your claim-free bonus for larger repairs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tyre Replacement Guide</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tyre prices in India range from ₹3,000 to ₹8,000 per tyre for standard cars, depending on size, brand, and type. Here&apos;s what to know:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li><strong>Budget brands</strong> (CEAT, Apollo basic): ₹3,000-4,500 per tyre. Good for city driving with moderate life.</li>
            <li><strong>Mid-range brands</strong> (MRF, Bridgestone, Yokohama): ₹4,000-6,000 per tyre. Best value for most drivers.</li>
            <li><strong>Premium brands</strong> (Michelin, Continental): ₹5,500-8,000 per tyre. Better grip, longer life, quieter.</li>
            <li><strong>Always replace in pairs</strong> (both front or both rear) for balanced handling.</li>
            <li><strong>Don&apos;t forget alignment</strong> — new tyres without alignment wear unevenly. Budget ₹400-800 for alignment.</li>
          </ul>
        </section>

        <section className="mb-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Verify Your Car Service Quote</h2>
          <p className="text-gray-700 mb-4">
            Got a service estimate that feels high? Check it against what other car owners are paying on FairPrice. Our community-reported data helps you identify fair pricing for every auto service.
          </p>
          <Link href="/lookup?category=auto-repair" className="btn-primary inline-block">
            Check Auto Repair Prices
          </Link>
        </section>
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/blog" className="text-blue-600 hover:underline">&larr; Back to all articles</Link>
      </footer>
    </article>
  );
}
