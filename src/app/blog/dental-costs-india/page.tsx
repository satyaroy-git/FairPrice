import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dental Costs in India — What You Should Really Pay in 2026 | FairPrice',
  description: 'Complete guide to dental treatment costs in India including root canal, crowns, braces, implants, and cleaning. City-wise pricing and insurance tips.',
  alternates: { canonical: 'https://getfairprice.in/blog/dental-costs-india' },
};

export default function DentalCostsIndiaPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-pink-100 text-pink-800">Dental</span>
          <span className="text-xs text-gray-400">8 min read</span>
          <span className="text-xs text-gray-400">June 28, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Dental Costs in India — What You Should Really Pay in 2026
        </h1>
        <p className="text-lg text-gray-600">
          From root canals to braces, dental costs in India vary wildly. Here&apos;s a data-backed guide to what&apos;s fair — so you don&apos;t leave the dentist&apos;s chair feeling robbed.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Dental Prices Vary So Much</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Dental treatment pricing in India is incredibly inconsistent. The same root canal can cost ₹3,000 at a neighbourhood clinic and ₹8,000 at a premium dental chain — with comparable outcomes. The variation comes down to location, clinic overhead, dentist experience, and material choices.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mumbai dental costs are typically 30% higher than Pune for the same treatment. Premium localities within a city can add another 20-40% premium. Understanding these pricing dynamics helps you make informed choices without compromising on quality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Dental Procedures &amp; Fair Prices (2026)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Procedure</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Price Range</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Average</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Dental cleaning (scaling)</td><td className="border border-gray-200 px-4 py-3">₹500 — ₹1,500</td><td className="border border-gray-200 px-4 py-3">₹800</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Filling (composite/tooth-coloured)</td><td className="border border-gray-200 px-4 py-3">₹800 — ₹2,500</td><td className="border border-gray-200 px-4 py-3">₹1,500</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Root canal treatment</td><td className="border border-gray-200 px-4 py-3">₹3,000 — ₹8,000</td><td className="border border-gray-200 px-4 py-3">₹5,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Crown (metal)</td><td className="border border-gray-200 px-4 py-3">₹3,000 — ₹5,000</td><td className="border border-gray-200 px-4 py-3">₹4,000</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Crown (ceramic/porcelain)</td><td className="border border-gray-200 px-4 py-3">₹5,000 — ₹10,000</td><td className="border border-gray-200 px-4 py-3">₹7,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Crown (zirconia)</td><td className="border border-gray-200 px-4 py-3">₹8,000 — ₹15,000</td><td className="border border-gray-200 px-4 py-3">₹11,000</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Braces (metal, full treatment)</td><td className="border border-gray-200 px-4 py-3">₹25,000 — ₹50,000</td><td className="border border-gray-200 px-4 py-3">₹35,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Braces (ceramic/clear)</td><td className="border border-gray-200 px-4 py-3">₹40,000 — ₹80,000</td><td className="border border-gray-200 px-4 py-3">₹55,000</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Dental implant (single tooth)</td><td className="border border-gray-200 px-4 py-3">₹25,000 — ₹50,000</td><td className="border border-gray-200 px-4 py-3">₹35,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Tooth extraction (simple)</td><td className="border border-gray-200 px-4 py-3">₹500 — ₹1,500</td><td className="border border-gray-200 px-4 py-3">₹800</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3 font-medium">Wisdom tooth extraction</td><td className="border border-gray-200 px-4 py-3">₹3,000 — ₹8,000</td><td className="border border-gray-200 px-4 py-3">₹5,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3 font-medium">Teeth whitening (in-office)</td><td className="border border-gray-200 px-4 py-3">₹5,000 — ₹15,000</td><td className="border border-gray-200 px-4 py-3">₹8,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm italic">Note: Root canal prices are per tooth. Crown prices are per unit. Braces prices are for full treatment (1.5-2 years). Implant prices include the implant, abutment, and crown.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">City-wise Price Variation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dental costs vary significantly between cities. Here&apos;s a relative pricing comparison using the national average as baseline:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-4">
            <h3 className="font-semibold text-gray-900 mb-3">Relative pricing by city:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><span>Mumbai (Bandra, Andheri, South Mumbai)</span><span className="font-semibold text-red-600">+30-40% above average</span></li>
              <li className="flex justify-between"><span>Delhi NCR (South Delhi, Gurgaon)</span><span className="font-semibold text-orange-600">+20-30% above average</span></li>
              <li className="flex justify-between"><span>Bangalore (Indiranagar, Koramangala)</span><span className="font-semibold text-amber-600">+15-25% above average</span></li>
              <li className="flex justify-between"><span>Hyderabad, Chennai</span><span className="font-semibold text-green-600">At average</span></li>
              <li className="flex justify-between"><span>Pune, Ahmedabad</span><span className="font-semibold text-green-600">-10-20% below average</span></li>
              <li className="flex justify-between"><span>Tier 2 cities (Jaipur, Lucknow, Indore)</span><span className="font-semibold text-emerald-600">-20-30% below average</span></li>
            </ul>
          </div>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Crown Materials — Which to Choose?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            After a root canal, you&apos;ll need a crown. The material choice significantly affects both price and longevity. Here&apos;s a practical comparison:
          </p>
          <div className="space-y-4 mb-4">
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Metal Crown (₹3,000-5,000)</h3>
              <p className="text-gray-700 text-sm mb-2">Made from metal alloys (nickel-chromium or cobalt-chromium). Extremely durable (15-20+ years) but visible metallic colour makes it unsuitable for front teeth.</p>
              <p className="text-gray-700 text-sm"><strong>Best for:</strong> Back molars where aesthetics don&apos;t matter. Budget-conscious patients. Maximum durability.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Ceramic/Porcelain Crown (₹5,000-10,000)</h3>
              <p className="text-gray-700 text-sm mb-2">Tooth-coloured, natural appearance. Good aesthetics but slightly less durable than metal (10-15 years). Can chip under heavy biting forces.</p>
              <p className="text-gray-700 text-sm"><strong>Best for:</strong> Front teeth, visible teeth. Patients who want natural appearance at moderate cost.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Zirconia Crown (₹8,000-15,000)</h3>
              <p className="text-gray-700 text-sm mb-2">The premium option. Combines the strength of metal with the aesthetics of ceramic. Biocompatible, stain-resistant, and extremely durable (15-20+ years).</p>
              <p className="text-gray-700 text-sm"><strong>Best for:</strong> Any tooth position. Patients who want the best of both worlds. Long-term investment.</p>
            </div>
          </div>
          <div className="bg-amber-50 rounded-xl p-6 mb-4 border border-amber-200">
            <h3 className="font-semibold text-amber-900 mb-2">Our Recommendation</h3>
            <p className="text-gray-700 text-sm">
              For front teeth: Zirconia or ceramic (aesthetics matter). For back molars: Metal or zirconia (durability matters). Don&apos;t overspend on zirconia for molars unless you have the budget — metal crowns last just as long and cost 60% less.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Chain Clinics vs Private Practice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-2">Chain Clinics (Clove, Sabka Dentist, etc.)</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>+ Transparent pricing (displayed/online)</li>
                <li>+ Standardized quality protocols</li>
                <li>+ Multiple locations, easy appointments</li>
                <li>+ EMI options available</li>
                <li>- Often rotate dentists (less continuity)</li>
                <li>- Aggressive upselling of cosmetic services</li>
                <li>- Junior dentists for routine procedures</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h3 className="font-bold text-green-900 mb-2">Private Practice</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>+ Same dentist every visit (continuity)</li>
                <li>+ More personalized treatment plans</li>
                <li>+ Often more experienced practitioners</li>
                <li>+ Flexible on pricing for loyal patients</li>
                <li>- Less transparent pricing</li>
                <li>- May not have latest equipment</li>
                <li>- Limited appointment flexibility</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            For routine work (cleaning, fillings), chain clinics offer good value with transparent pricing. For complex procedures (root canals, implants, orthodontics), a well-reviewed private specialist often provides better outcomes due to personal attention and experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Dental Insurance &amp; Coverage Tips</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most health insurance policies in India don&apos;t cover dental procedures unless they result from an accident. However, there are ways to reduce your out-of-pocket dental costs:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li><strong>Check your employer group insurance</strong> — Some corporate plans include dental coverage (typically ₹5,000-15,000/year). Many employees don&apos;t know about this benefit.</li>
            <li><strong>Standalone dental plans</strong> — Companies like Dental Care Plan and some insurers offer dental-specific coverage (₹2,000-5,000 annual premium for ₹15,000-30,000 coverage).</li>
            <li><strong>Preventive care saves money</strong> — A ₹1,000 cleaning every 6 months prevents ₹5,000-50,000 treatments later. Prevention is the cheapest dental insurance.</li>
            <li><strong>Ask about package pricing</strong> — If you need root canal + crown, ask for a combined price. Most dentists offer 10-15% package discount.</li>
            <li><strong>Dental college clinics</strong> — Government dental colleges offer treatments at 50-70% lower cost. Work is done by final-year students under faculty supervision.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Red Flags at the Dentist</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li><strong>Recommending root canal without X-ray:</strong> A proper diagnosis requires an X-ray. Don&apos;t let any dentist recommend invasive treatment without imaging.</li>
            <li><strong>Pushing extraction over root canal:</strong> Unless the tooth is truly unsaveable, a root canal preserves your natural tooth. Get a second opinion before extraction.</li>
            <li><strong>Unnecessary cosmetic upsells:</strong> Teeth whitening, veneers, and smile design being pushed during a routine checkup.</li>
            <li><strong>No explanation of options:</strong> A good dentist explains all treatment options, pros/cons, and lets you decide based on budget and preference.</li>
            <li><strong>Quoting without examination:</strong> Any clinic that gives exact prices over the phone without seeing your teeth is likely quoting inflated numbers.</li>
          </ul>
        </section>

        <section className="mb-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Check Your Dental Quote</h2>
          <p className="text-gray-700 mb-4">
            Got a dental treatment estimate? See how it compares to what others in your city are paying. Make sure you&apos;re paying fair market rates for quality dental care.
          </p>
          <Link href="/lookup?category=dental" className="btn-primary inline-block">
            Check Dental Prices Now
          </Link>
        </section>
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/blog" className="text-blue-600 hover:underline">&larr; Back to all articles</Link>
      </footer>
    </article>
  );
}
