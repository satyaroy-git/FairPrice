import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Complete Guide to House Rent in Bangalore — Area-wise Breakdown (2026) | FairPrice',
  description: 'Area-wise rental prices for 1BHK, 2BHK, 3BHK apartments in Bangalore. Covers Whitefield, Electronic City, Koramangala, Indiranagar, HSR Layout, and more with tips on negotiating rent.',
  alternates: { canonical: 'https://getfairprice.in/blog/house-rent-bangalore' },
};

export default function HouseRentBangalorePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-800">Rentals</span>
          <span className="text-xs text-gray-400">8 min read</span>
          <span className="text-xs text-gray-400">July 15, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Complete Guide to House Rent in Bangalore — Area-wise Breakdown (2026)
        </h1>
        <p className="text-lg text-gray-600">
          Bangalore&apos;s rental market saw a 14% surge in 2026 driven by tech hiring and limited housing supply. Here&apos;s what you should really be paying — area by area.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bangalore Rental Market Overview (2026)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            India saw a 14% rent surge in 2026, and Bangalore has been at the epicentre of this increase. With major tech companies mandating return-to-office, demand for rental apartments near IT corridors has skyrocketed. Areas within 5 km of major tech parks have seen the steepest hikes — often 18-22% year-on-year.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you&apos;re a fresh graduate relocating for your first job or a family looking to upsize, understanding area-wise pricing is crucial to avoiding overpayment. This guide breaks down realistic rents across Bangalore&apos;s most popular localities for 1BHK, 2BHK, and 3BHK apartments, along with PG accommodation rates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Area-wise Rent Breakdown — Apartments</h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Area</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">1BHK</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">2BHK</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">3BHK</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Whitefield</td><td className="border border-gray-200 px-4 py-3">₹16,000 — ₹25,000</td><td className="border border-gray-200 px-4 py-3">₹22,000 — ₹35,000</td><td className="border border-gray-200 px-4 py-3">₹30,000 — ₹50,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Electronic City</td><td className="border border-gray-200 px-4 py-3">₹14,000 — ₹22,000</td><td className="border border-gray-200 px-4 py-3">₹20,000 — ₹30,000</td><td className="border border-gray-200 px-4 py-3">₹28,000 — ₹42,000</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Koramangala</td><td className="border border-gray-200 px-4 py-3">₹25,000 — ₹40,000</td><td className="border border-gray-200 px-4 py-3">₹35,000 — ₹55,000</td><td className="border border-gray-200 px-4 py-3">₹50,000 — ₹80,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Indiranagar</td><td className="border border-gray-200 px-4 py-3">₹22,000 — ₹35,000</td><td className="border border-gray-200 px-4 py-3">₹32,000 — ₹50,000</td><td className="border border-gray-200 px-4 py-3">₹45,000 — ₹75,000</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">HSR Layout</td><td className="border border-gray-200 px-4 py-3">₹18,000 — ₹30,000</td><td className="border border-gray-200 px-4 py-3">₹25,000 — ₹40,000</td><td className="border border-gray-200 px-4 py-3">₹35,000 — ₹60,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Marathahalli</td><td className="border border-gray-200 px-4 py-3">₹15,000 — ₹25,000</td><td className="border border-gray-200 px-4 py-3">₹22,000 — ₹35,000</td><td className="border border-gray-200 px-4 py-3">₹30,000 — ₹48,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm italic">Note: Prices are monthly rents for semi-furnished apartments. Fully furnished units command a 20-40% premium. Maintenance charges (₹2,000-6,000/month) are extra.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">PG Accommodation Rates in Bangalore (2026)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Paying Guest (PG) accommodation remains the most affordable option for singles moving to Bangalore. Rates vary based on sharing, amenities, and location. Most PGs include meals, WiFi, and housekeeping in the price.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Type</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Price Range (per month)</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Typically Includes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-3">Triple sharing</td><td className="border border-gray-200 px-4 py-3">₹7,000 — ₹10,000</td><td className="border border-gray-200 px-4 py-3">Meals, WiFi, housekeeping</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">Double sharing</td><td className="border border-gray-200 px-4 py-3">₹9,000 — ₹13,000</td><td className="border border-gray-200 px-4 py-3">Meals, WiFi, housekeeping, AC</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3">Single occupancy</td><td className="border border-gray-200 px-4 py-3">₹12,000 — ₹15,000</td><td className="border border-gray-200 px-4 py-3">Meals, WiFi, housekeeping, AC, attached bath</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Premium co-living spaces like Zolo, Stanza Living, and Colive charge ₹12,000-₹20,000 for single rooms with additional amenities like gyms, common areas, and community events. These are popular among young professionals who value a social environment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Bangalore&apos;s Rental Costs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beyond the monthly rent, there are several additional costs that tenants should budget for when renting in Bangalore:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-4">
            <h3 className="font-semibold text-gray-900 mb-3">Additional costs to expect:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><span>Security deposit</span><span className="font-semibold">10 months&apos; rent (standard in Bangalore)</span></li>
              <li className="flex justify-between"><span>Broker fee</span><span className="font-semibold">1 month&apos;s rent (one-time)</span></li>
              <li className="flex justify-between"><span>Maintenance charges</span><span className="font-semibold">₹2,000 — ₹6,000/month</span></li>
              <li className="flex justify-between"><span>Painting charges (at move-out)</span><span className="font-semibold">₹15,000 — ₹30,000</span></li>
              <li className="flex justify-between"><span>Police verification</span><span className="font-semibold">₹0 (mandatory, but free online)</span></li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Negotiating Rent in Bangalore</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li><strong>Research comparable rents first</strong> — Check 3-4 listings in the same building or society before making an offer. Use FairPrice to verify if the asking rent is above market rate.</li>
            <li><strong>Negotiate the deposit, not just the rent</strong> — Bangalore&apos;s notorious 10-month deposit is negotiable. Many landlords now accept 5-6 months for good tenants with stable employment.</li>
            <li><strong>Offer longer lock-in for lower rent</strong> — Landlords value stability. Committing to 2 years instead of 11 months can get you a 5-10% discount.</li>
            <li><strong>Time your search right</strong> — January-February and July-August (when fewer people relocate) offer better negotiating leverage. Avoid April-June when fresh graduates flood the market.</li>
            <li><strong>Ask about included amenities</strong> — Some landlords will include parking, an extra cupboard, or minor repairs as part of the deal if you don&apos;t push too hard on rent.</li>
            <li><strong>Highlight your profile</strong> — Working professionals at reputed companies, couples without pets, and vegetarian tenants (for vegetarian owners) often get priority and better rates.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Broker Fees &amp; How to Avoid Them</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The standard broker fee in Bangalore is 1 month&apos;s rent, paid as a one-time charge. For a 2BHK at ₹30,000/month, that&apos;s ₹30,000 going to the broker — a significant expense on top of the deposit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h3 className="font-bold text-green-900 mb-2">Ways to Avoid Broker Fees</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>+ NoBroker, Flat and Flatmates groups</li>
                <li>+ Society notice boards and WhatsApp groups</li>
                <li>+ Direct owner listings on Housing.com</li>
                <li>+ Company relocation channels</li>
                <li>+ Word of mouth through colleagues</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <h3 className="font-bold text-amber-900 mb-2">When a Broker is Worth It</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>+ Relocating from another city with limited time</li>
                <li>+ Need a specific locality with few listings</li>
                <li>+ Looking for premium/gated community homes</li>
                <li>+ Need help with agreement documentation</li>
                <li>+ Short timeline (less than 1 week)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Police Verification &amp; Rental Agreement</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Police verification is mandatory for all rental tenants in Bangalore under Karnataka Police Act. Both landlords and tenants can face fines for non-compliance. The process is now entirely online through the Karnataka State Police website and takes 3-5 business days.
          </p>
          <div className="bg-blue-50 rounded-xl p-6 mb-4">
            <h3 className="font-semibold text-blue-900 mb-3">Rental agreement essentials:</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Registration:</strong> Mandatory for leases over 11 months (costs ₹3,000-5,000 for stamp duty + registration)</li>
              <li><strong>Lock-in period:</strong> Typically 6-12 months with 1-2 months&apos; notice for termination</li>
              <li><strong>Rent escalation:</strong> Standard 5-10% annual increase clause</li>
              <li><strong>Maintenance responsibility:</strong> Clearly specify who pays for repairs (typically: minor repairs tenant, major repairs landlord)</li>
              <li><strong>Furnishing inventory:</strong> Always get a signed inventory list with photographs</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Lock-in Periods &amp; What They Mean</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most Bangalore rental agreements include a lock-in period of 6-12 months. During this period, neither the landlord nor the tenant can terminate the agreement without penalty. If you break the lock-in early, you typically forfeit 1-2 months&apos; rent from your deposit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            After the lock-in period, either party can terminate with 1-2 months&apos; written notice (as specified in the agreement). Always read the exit clause carefully before signing — some landlords insert 3-month notice periods which can be costly if you need to move quickly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Red Flags to Watch For</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li><strong>Deposits above 10 months:</strong> While 10 months is standard, anything above this is unusual and should be negotiated down.</li>
            <li><strong>No registered agreement:</strong> Insist on a registered agreement for any stay beyond 11 months. Unregistered agreements offer limited legal protection.</li>
            <li><strong>Vague maintenance clauses:</strong> Ensure the agreement clearly states what constitutes &quot;normal wear and tear&quot; versus damage.</li>
            <li><strong>No receipts for deposit:</strong> Always get a signed receipt for all payments, especially the security deposit.</li>
            <li><strong>Pressure to decide immediately:</strong> Good properties do move fast, but high-pressure tactics often indicate problematic landlords.</li>
          </ul>
        </section>

        <section className="mb-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Check If Your Rent is Fair</h2>
          <p className="text-gray-700 mb-4">
            Not sure if the rent being quoted is fair for your area? Use FairPrice to compare what others are paying in your exact locality and apartment type. Don&apos;t overpay in this competitive market.
          </p>
          <Link href="/lookup?category=rent" className="btn-primary inline-block">
            Check Rent Prices Now
          </Link>
        </section>
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/blog" className="text-blue-600 hover:underline">&larr; Back to all articles</Link>
      </footer>
    </article>
  );
}
