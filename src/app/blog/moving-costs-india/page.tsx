import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Packers and Movers Pricing Guide — What to Expect in 2026 | FairPrice',
  description: 'Complete pricing guide for packers and movers in India. Local and intercity moving costs, hidden charges, and tips to save money on your next move.',
  alternates: { canonical: 'https://getfairprice.in/blog/moving-costs-india' },
};

export default function MovingCostsIndiaPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">Moving</span>
          <span className="text-xs text-gray-400">8 min read</span>
          <span className="text-xs text-gray-400">June 25, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Packers and Movers Pricing Guide — What to Expect in 2026
        </h1>
        <p className="text-lg text-gray-600">
          Moving is stressful enough without worrying about being overcharged. Here&apos;s a comprehensive breakdown of what packers and movers should cost in India — and the hidden fees to watch for.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Moving Costs (Same City)</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Local moves (within the same city, typically under 30 km) are priced based on the volume of goods, which directly correlates to apartment size. Here are the typical all-inclusive rates for local moves in metro cities:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Apartment Size</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Price Range</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Average</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Typical Items</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">1BHK</td><td className="border border-gray-200 px-4 py-3">₹4,000 — ₹8,000</td><td className="border border-gray-200 px-4 py-3">₹6,000</td><td className="border border-gray-200 px-4 py-3">15-25 items</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">2BHK</td><td className="border border-gray-200 px-4 py-3">₹7,000 — ₹15,000</td><td className="border border-gray-200 px-4 py-3">₹10,000</td><td className="border border-gray-200 px-4 py-3">30-50 items</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">3BHK</td><td className="border border-gray-200 px-4 py-3">₹12,000 — ₹25,000</td><td className="border border-gray-200 px-4 py-3">₹17,000</td><td className="border border-gray-200 px-4 py-3">50-80 items</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">4BHK / Villa</td><td className="border border-gray-200 px-4 py-3">₹20,000 — ₹40,000</td><td className="border border-gray-200 px-4 py-3">₹28,000</td><td className="border border-gray-200 px-4 py-3">80-120 items</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm italic">Note: Prices include packing materials, loading, transportation (up to 20 km), unloading, and basic unpacking. Additional distance charged at ₹15-25/km.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Intercity Moving Costs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Intercity moves are significantly more expensive due to long-distance transportation, transit insurance, and multiple handling. Prices depend primarily on distance and volume.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Route</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">1BHK</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">2BHK</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">3BHK</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Delhi — Mumbai</td><td className="border border-gray-200 px-4 py-3">₹20,000 — ₹30,000</td><td className="border border-gray-200 px-4 py-3">₹30,000 — ₹45,000</td><td className="border border-gray-200 px-4 py-3">₹40,000 — ₹65,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Bangalore — Chennai</td><td className="border border-gray-200 px-4 py-3">₹15,000 — ₹22,000</td><td className="border border-gray-200 px-4 py-3">₹22,000 — ₹30,000</td><td className="border border-gray-200 px-4 py-3">₹28,000 — ₹45,000</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Mumbai — Pune</td><td className="border border-gray-200 px-4 py-3">₹10,000 — ₹16,000</td><td className="border border-gray-200 px-4 py-3">₹15,000 — ₹25,000</td><td className="border border-gray-200 px-4 py-3">₹22,000 — ₹35,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Delhi — Bangalore</td><td className="border border-gray-200 px-4 py-3">₹25,000 — ₹38,000</td><td className="border border-gray-200 px-4 py-3">₹35,000 — ₹55,000</td><td className="border border-gray-200 px-4 py-3">₹50,000 — ₹80,000</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Hyderabad — Mumbai</td><td className="border border-gray-200 px-4 py-3">₹18,000 — ₹28,000</td><td className="border border-gray-200 px-4 py-3">₹25,000 — ₹40,000</td><td className="border border-gray-200 px-4 py-3">₹35,000 — ₹55,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm italic">Note: Prices include packing, loading, transport, unloading, and basic unpacking. Transit insurance extra (1-2% of declared value).</p>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hidden Charges to Watch For</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The quoted price is rarely the final price. Packers and movers are notorious for adding charges that weren&apos;t mentioned upfront. Here are the most common hidden fees:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Hidden Charge</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Typical Amount</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">How to Avoid</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Packaging material</td><td className="border border-gray-200 px-4 py-3">₹2,000 — ₹5,000</td><td className="border border-gray-200 px-4 py-3">Confirm if included in quote</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Floor charges (no lift)</td><td className="border border-gray-200 px-4 py-3">₹500 — ₹1,000 per floor</td><td className="border border-gray-200 px-4 py-3">Mention floor details upfront</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Staircase charges</td><td className="border border-gray-200 px-4 py-3">₹300 — ₹800 per floor</td><td className="border border-gray-200 px-4 py-3">Clarify during quotation</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Heavy item surcharge</td><td className="border border-gray-200 px-4 py-3">₹500 — ₹2,000 per item</td><td className="border border-gray-200 px-4 py-3">Declare all heavy items (fridge, washing machine)</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Transit insurance</td><td className="border border-gray-200 px-4 py-3">1-2% of declared value</td><td className="border border-gray-200 px-4 py-3">Always get insurance for intercity moves</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Unpacking &amp; arranging</td><td className="border border-gray-200 px-4 py-3">₹1,000 — ₹3,000</td><td className="border border-gray-200 px-4 py-3">Confirm if included or extra</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Toll charges (intercity)</td><td className="border border-gray-200 px-4 py-3">₹500 — ₹2,500</td><td className="border border-gray-200 px-4 py-3">Ask if tolls are included in quote</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">GST (18%)</td><td className="border border-gray-200 px-4 py-3">18% of base quote</td><td className="border border-gray-200 px-4 py-3">Confirm if quote is inclusive of GST</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-red-50 rounded-xl p-6 mb-4 border border-red-200">
            <h3 className="font-semibold text-red-900 mb-2">Important: Get Everything in Writing</h3>
            <p className="text-gray-700 text-sm">
              Before booking, get a detailed written quotation that explicitly states: total price, what&apos;s included, what&apos;s extra, insurance coverage, delivery timeline, and damage liability. Verbal quotes are worthless when disputes arise.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips to Save on Your Move</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li><strong>Book 2 weeks ahead</strong> — Last-minute bookings (less than 3 days) carry a 20-30% premium. Two weeks gives you time to compare quotes and lets movers plan efficiently.</li>
            <li><strong>Move on weekdays</strong> — Weekday moves are 15-20% cheaper than weekends. Monday-Thursday are the cheapest days. Month-end is the most expensive time.</li>
            <li><strong>Declutter before getting quotes</strong> — Fewer items = lower cost. Sell, donate, or discard things you don&apos;t need before the survey. Every cubic foot counts in pricing.</li>
            <li><strong>Get 3-4 quotes minimum</strong> — Prices vary by 30-50% between movers for the same job. Use aggregator platforms (Sulekha, PMDirectory) alongside direct contacts.</li>
            <li><strong>Do some packing yourself</strong> — Pack clothes, books, and non-fragile items yourself. Let professionals handle electronics, glassware, and furniture. This can save ₹2,000-5,000.</li>
            <li><strong>Avoid month-end moves</strong> — The last week of every month is peak moving time (lease cycles). The first two weeks are typically 10-15% cheaper.</li>
            <li><strong>Negotiate on volume, not quality</strong> — Never compromise on packing quality or insurance to save money. Instead, negotiate on included services like unpacking and arranging.</li>
          </ol>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Verifying Your Mover&apos;s Credentials</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The packers and movers industry in India has a high incidence of fraud — from goods held hostage for extra payment to damaged items with no compensation. Here&apos;s how to verify a legitimate company:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li><strong>Check GST registration</strong> — Legitimate movers have a GST number. Verify it on the GST portal (gst.gov.in). No GST = no accountability.</li>
            <li><strong>Verify on mover.gov.in</strong> — The government portal lists registered transport companies. Cross-check your mover&apos;s registration.</li>
            <li><strong>Look for a physical office</strong> — Visit their office if possible. Fly-by-night operators work from mobile numbers with no physical presence.</li>
            <li><strong>Check online reviews</strong> — Google reviews, Justdial, and Sulekha ratings give real customer feedback. Look for patterns (repeated complaints about hidden charges or damaged goods).</li>
            <li><strong>Ask for past customer references</strong> — A reputable mover should be able to provide 2-3 recent customer contacts in your area.</li>
            <li><strong>Insist on a written contract</strong> — This should include inventory list, agreed price, delivery date, insurance details, and damage liability clause.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Insurance — Don&apos;t Skip It for Intercity Moves</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For local moves within the same city, transit insurance is optional (low risk of damage during short distances). For intercity moves, it&apos;s essential. Your goods will be loaded, transported hundreds of kilometres, possibly transloaded, and unloaded — multiple opportunities for damage.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-4">
            <h3 className="font-semibold text-gray-900 mb-3">Insurance coverage options:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><span>Basic coverage (company liability)</span><span className="font-semibold">Free (limited to ₹500-1,000 per item)</span></li>
              <li className="flex justify-between"><span>Standard transit insurance</span><span className="font-semibold">1-2% of declared value</span></li>
              <li className="flex justify-between"><span>Comprehensive coverage (all-risk)</span><span className="font-semibold">2-3% of declared value</span></li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Pro tip:</strong> Declare realistic values for your items. Over-declaring increases premium unnecessarily. Under-declaring means you won&apos;t get full compensation if something breaks. For expensive electronics, keep purchase receipts handy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Time to Move — Seasonal Calendar</h2>
          <div className="bg-gray-50 rounded-xl p-6 mb-4">
            <h3 className="font-semibold text-gray-900 mb-3">Moving season pricing:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><span>January — March (off-season)</span><span className="font-semibold text-green-600">Best rates — 15-20% below peak</span></li>
              <li className="flex justify-between"><span>April — June (peak: transfers, school)</span><span className="font-semibold text-red-600">Peak pricing + limited availability</span></li>
              <li className="flex justify-between"><span>July — September (monsoon: avoid if possible)</span><span className="font-semibold text-amber-600">Moderate rates, risk of rain damage</span></li>
              <li className="flex justify-between"><span>October — December (moderate)</span><span className="font-semibold text-green-600">Good rates, pleasant weather</span></li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Moving Day Checklist</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li><strong>Before movers arrive:</strong> Take photos of all valuable items (for insurance claims if needed).</li>
            <li><strong>Supervise packing:</strong> Watch how fragile items are packed. Good movers use bubble wrap + cardboard, not just newspaper.</li>
            <li><strong>Sign the inventory list:</strong> Check every item is listed. Note the condition of fragile/valuable items on the list.</li>
            <li><strong>Keep essentials separate:</strong> Pack a personal bag with documents, chargers, medicines, and a change of clothes. Don&apos;t pack these with movers.</li>
            <li><strong>At delivery:</strong> Check all items against inventory before signing the delivery receipt. Note any damage immediately.</li>
            <li><strong>Payment:</strong> Retain 10-20% of payment until all items are delivered and unpacked satisfactorily. Final payment only after verification.</li>
          </ul>
        </section>

        <section className="mb-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Compare Moving Quotes</h2>
          <p className="text-gray-700 mb-4">
            Got a quote from packers and movers? Check if it&apos;s fair based on what others have paid for similar moves. Don&apos;t overpay — and don&apos;t choose the cheapest option without checking their reputation.
          </p>
          <Link href="/lookup?category=movers" className="btn-primary inline-block">
            Check Moving Prices
          </Link>
        </section>
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/blog" className="text-blue-600 hover:underline">&larr; Back to all articles</Link>
      </footer>
    </article>
  );
}
