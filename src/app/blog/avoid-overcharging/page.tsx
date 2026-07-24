import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '5 Proven Tips to Avoid Getting Overcharged for Home Services | FairPrice',
  description: 'Learn how to avoid getting overcharged by plumbers, electricians, and contractors. Get fair prices with these 5 proven strategies backed by real data.',
  alternates: { canonical: 'https://getfairprice.in/blog/avoid-overcharging' },
};

export default function AvoidOverchargingPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-800">Tips</span>
          <span className="text-xs text-gray-400">7 min read</span>
          <span className="text-xs text-gray-400">July 12, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          5 Proven Tips to Avoid Getting Overcharged for Home Services
        </h1>
        <p className="text-lg text-gray-600">
          From plumbers quoting ₹5,000 for a ₹500 fix to electricians charging triple rates — here&apos;s how to protect yourself every time.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Overcharging is So Common</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Most homeowners have no idea what home services should cost. This information asymmetry is the #1 reason people get overcharged. A plumber knows you can&apos;t verify whether a &quot;pipe replacement&quot; was actually necessary or if a simple washer change would have sufficed. An electrician can claim a &quot;wiring fault&quot; when the issue was a tripped MCB.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our data shows that first-time homeowners pay an average of 40-60% more than experienced homeowners for the same service. The difference? Knowledge. Here are 5 proven strategies to level the playing field.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tip 1: Always Get 2-3 Quotes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is the single most effective way to avoid overpaying. For any job over ₹1,000, get at least 2-3 quotes from different service providers. This gives you a natural price benchmark and creates competition.
          </p>
          <div className="bg-green-50 rounded-xl p-6 mb-4">
            <h3 className="font-semibold text-green-900 mb-3">Real example:</h3>
            <p className="text-gray-700 text-sm">
              A Bangalore homeowner needed a kitchen sink replacement. Quote 1 (app-based): ₹4,500. Quote 2 (local plumber): ₹2,200. Quote 3 (society-recommended): ₹1,800. Same job, same materials — but a ₹2,700 difference between highest and lowest.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>When you don&apos;t have time for 3 quotes:</strong> At minimum, check FairPrice for the typical range. If the quote falls within the fair range, proceed. If it&apos;s above, negotiate or seek alternatives.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tip 2: Research Fair Prices Before Hiring</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Knowledge is your best defence against overcharging. Before calling any service provider, spend 5 minutes researching what the job should cost. This helps you identify unreasonable quotes immediately.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Service</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Fair Price</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Overcharged Price</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-3">Basic electrical repair</td><td className="border border-gray-200 px-4 py-3">₹200 — ₹500</td><td className="border border-gray-200 px-4 py-3">₹800 — ₹1,500</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">Tap/faucet replacement</td><td className="border border-gray-200 px-4 py-3">₹300 — ₹700</td><td className="border border-gray-200 px-4 py-3">₹1,000 — ₹2,000</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3">AC service (basic)</td><td className="border border-gray-200 px-4 py-3">₹400 — ₹800</td><td className="border border-gray-200 px-4 py-3">₹1,200 — ₹2,500</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">Painting (per sq ft)</td><td className="border border-gray-200 px-4 py-3">₹14 — ₹25</td><td className="border border-gray-200 px-4 py-3">₹30 — ₹50</td></tr>
                <tr><td className="border border-gray-200 px-4 py-3">Pest control (2BHK)</td><td className="border border-gray-200 px-4 py-3">₹1,000 — ₹2,000</td><td className="border border-gray-200 px-4 py-3">₹3,500 — ₹5,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Use FairPrice to check community-reported prices for any service in your city. Armed with this data, you can confidently push back on inflated quotes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tip 3: Get Written Estimates with Breakdown</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Never accept a single lump-sum quote. Always ask for a breakdown that separates labour, materials, and any additional charges. This makes it impossible for service providers to hide inflated costs in vague line items.
          </p>
          <div className="bg-amber-50 rounded-xl p-6 mb-4">
            <h3 className="font-semibold text-amber-900 mb-3">What a good estimate looks like:</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Labour:</strong> ₹X (hours × rate)</li>
              <li><strong>Materials:</strong> ₹Y (itemized list with quantities)</li>
              <li><strong>Travel/visit charge:</strong> ₹Z (if applicable)</li>
              <li><strong>Warranty:</strong> Duration and coverage details</li>
              <li><strong>Timeline:</strong> Expected start and completion</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Red flag:</strong> If a service provider refuses to give you a written breakdown or says &quot;I&apos;ll tell you the cost after the work is done,&quot; walk away. This is the most common setup for overcharging.
          </p>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tip 4: Buy Materials Yourself for Big Jobs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For larger projects like bathroom renovations, painting, or full electrical rewiring, buying materials yourself can save 20-40%. Many contractors mark up materials significantly — sometimes doubling the actual retail price.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Visit your local hardware store or check prices online before the job. For plumbing fittings, electrical components, and paint, retail prices are easily verifiable. Tell the contractor upfront that you&apos;ll supply materials and need a labour-only quote.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-4">
            <h3 className="font-semibold text-gray-900 mb-3">Best categories for self-purchase:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><span>Paint (Asian Paints, Berger, etc.)</span><span className="font-semibold text-green-600">Save 25-35%</span></li>
              <li className="flex justify-between"><span>Bathroom fittings (taps, showers)</span><span className="font-semibold text-green-600">Save 30-50%</span></li>
              <li className="flex justify-between"><span>Electrical switches &amp; wires</span><span className="font-semibold text-green-600">Save 20-30%</span></li>
              <li className="flex justify-between"><span>Tiles &amp; flooring</span><span className="font-semibold text-green-600">Save 15-25%</span></li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Exception:</strong> For specialized items where compatibility matters (AC parts, specific plumbing joints), let the professional source materials. Wrong parts can lead to callbacks and additional costs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tip 5: Avoid Emergency &amp; Weekend Pricing</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Urgency is the enemy of fair pricing. Emergency calls (evenings, weekends, holidays) typically cost 50-100% more than standard rates. Whenever possible, plan non-urgent work during weekday business hours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 rounded-xl p-5 border border-red-200">
              <h3 className="font-bold text-red-900 mb-2">Emergency Pricing (avoid when possible)</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>After 8 PM: +50-100% premium</li>
                <li>Sundays/holidays: +30-50% premium</li>
                <li>Same-hour response: +100% premium</li>
                <li>&quot;Only available today&quot; pressure tactics</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h3 className="font-bold text-green-900 mb-2">Smart Scheduling (best rates)</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>Weekday mornings: standard rate</li>
                <li>Planned 2-3 days ahead: best rates</li>
                <li>Bundled with other jobs: volume discount</li>
                <li>Off-season (monsoon for AC, summer for heaters)</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>For genuine emergencies</strong> (burst pipe, electrical fire risk, gas leak): Pay the premium — safety comes first. But for a dripping tap, a non-cooling AC, or a broken doorbell? Schedule it for a weekday.
          </p>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Red Flags That You&apos;re Being Overcharged</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li><strong>No upfront pricing:</strong> &quot;I&apos;ll tell you after I see the problem&quot; followed by a surprise bill 3x what you expected.</li>
            <li><strong>Unnecessary part replacements:</strong> Replacing entire assemblies when a single component fix would work.</li>
            <li><strong>Fear tactics:</strong> &quot;If you don&apos;t fix this now, the whole wall/pipe/wiring will fail.&quot;</li>
            <li><strong>Refusing to show old parts:</strong> Legitimate professionals will show you damaged components they replaced.</li>
            <li><strong>Vague descriptions:</strong> &quot;General maintenance work&quot; without specific details of what was done.</li>
            <li><strong>Cash-only, no receipt:</strong> While common in India, always insist on at least a handwritten receipt with work description.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Verify Contractor Credentials</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before hiring any service provider for a job over ₹5,000, take these verification steps:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li><strong>Ask for references</strong> — A good contractor should be able to provide 2-3 recent customer references in your area.</li>
            <li><strong>Check online reviews</strong> — Google Maps, Justdial, and Sulekha reviews can reveal patterns of overcharging or poor work.</li>
            <li><strong>Verify business registration</strong> — For larger jobs, ask for their GST number or business registration. Legitimate businesses are accountable.</li>
            <li><strong>Check for insurance</strong> — For high-risk work (electrical, structural), ask if they carry liability insurance.</li>
            <li><strong>Look at past work</strong> — Ask to see photos of similar completed projects or visit a nearby completed site.</li>
          </ol>
        </section>

        <section className="mb-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Verify Your Quote Instantly</h2>
          <p className="text-gray-700 mb-4">
            Got a quote and not sure if it&apos;s fair? Enter the service and amount on FairPrice to instantly compare with what others in your city have paid. Stop guessing — start knowing.
          </p>
          <Link href="/lookup" className="btn-primary inline-block">
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
