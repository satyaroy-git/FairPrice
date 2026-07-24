import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Negotiate with Contractors — A Homeowner\'s Guide | FairPrice',
  description: 'Learn 7 proven negotiation techniques to get better prices from contractors without sacrificing quality. Psychology-backed strategies for homeowners.',
  alternates: { canonical: 'https://getfairprice.in/blog/negotiate-with-contractors' },
};

export default function NegotiateWithContractorsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">Negotiation</span>
          <span className="text-xs text-gray-400">9 min read</span>
          <span className="text-xs text-gray-400">July 8, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          How to Negotiate with Contractors — A Homeowner&apos;s Guide
        </h1>
        <p className="text-lg text-gray-600">
          Negotiation isn&apos;t about being cheap — it&apos;s about paying fairly. Here are 7 techniques that work, backed by the psychology of pricing.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Psychology of Contractor Pricing</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Most contractors don&apos;t have fixed prices — they quote based on perceived willingness to pay. A contractor visiting a premium apartment complex will quote 30-50% higher than the same contractor visiting a middle-class neighbourhood. This isn&apos;t dishonesty; it&apos;s market pricing. Understanding this dynamic is the first step to effective negotiation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Contractors also price in risk — the risk of callbacks, the risk of scope creep, and the risk of difficult customers. When you present yourself as an informed, reasonable homeowner, you reduce their perceived risk, which naturally brings prices down.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Negotiate vs When Not To</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h3 className="font-bold text-green-900 mb-2">Good Times to Negotiate</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>+ Large projects (₹10,000+)</li>
                <li>+ Multiple jobs at once</li>
                <li>+ Off-season work</li>
                <li>+ When you have competing quotes</li>
                <li>+ Repeat/ongoing relationships</li>
                <li>+ When you can be flexible on timeline</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-200">
              <h3 className="font-bold text-red-900 mb-2">When NOT to Negotiate</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>- Emergency repairs (safety first)</li>
                <li>- Very small jobs (under ₹500)</li>
                <li>- When the quote is already fair</li>
                <li>- Highly specialized/rare skills</li>
                <li>- When you need it done TODAY</li>
                <li>- If it means compromising safety/quality</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The goal isn&apos;t to squeeze every rupee — it&apos;s to reach a fair price where both parties feel good about the transaction. Over-negotiating leads to cut corners, resentment, and poor workmanship.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7 Proven Negotiation Techniques</h2>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">1. Bundle Multiple Jobs Together</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Instead of calling a plumber for one leaky tap, combine it with other pending plumbing work — the running flush, the slow drain, the dripping showerhead. Bundling gives the contractor a larger job (more revenue) while you get a bulk discount (typically 15-25% off individual pricing).
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p className="text-sm text-gray-700"><strong>Script:</strong> &quot;I have 3-4 plumbing jobs that need doing. If I give you all of them together, can you offer a package rate?&quot;</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">2. Schedule During Off-Season</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every trade has a peak season when demand (and prices) are highest. AC technicians are swamped in April-June, painters are busy October-December (post-monsoon), and movers peak in May-June (transfer season). Scheduling during off-peak months can save 15-30% simply because contractors need work.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Service</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Peak Season</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Best Time to Book</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-4 py-3">AC service/repair</td><td className="border border-gray-200 px-4 py-3">April — June</td><td className="border border-gray-200 px-4 py-3">February — March</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">Painting</td><td className="border border-gray-200 px-4 py-3">October — December</td><td className="border border-gray-200 px-4 py-3">January — March</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3">Plumbing (major)</td><td className="border border-gray-200 px-4 py-3">Monsoon season</td><td className="border border-gray-200 px-4 py-3">October — November</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-3">Pest control</td><td className="border border-gray-200 px-4 py-3">June — August</td><td className="border border-gray-200 px-4 py-3">March — April</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-3">Packers &amp; movers</td><td className="border border-gray-200 px-4 py-3">May — June</td><td className="border border-gray-200 px-4 py-3">August — September</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">3. Offer Cash Payment</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many contractors prefer cash payments as it simplifies their accounting. While this shouldn&apos;t be used to encourage tax evasion, offering immediate cash payment (versus UPI with delayed settlement or cheques) often earns a 5-10% discount. Always get a receipt regardless of payment method.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">4. Offer Referrals in Exchange for Discount</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contractors value word-of-mouth referrals more than any advertising. Offering to recommend them to neighbours, your apartment society WhatsApp group, or colleagues is genuinely valuable to them. A guaranteed 2-3 referrals can easily justify a 10-15% discount.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p className="text-sm text-gray-700"><strong>Script:</strong> &quot;If the work is good, I&apos;ll recommend you in our society group — we have 200+ families. Can you offer a better rate knowing you&apos;ll get more work from here?&quot;</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">5. Show Competitor Quotes</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is the most direct negotiation technique. When you have a lower quote from another contractor, show it to your preferred contractor and ask if they can match or beat it. Most will — they&apos;d rather take the job at a lower margin than lose it entirely.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Important:</strong> Be honest. Never fabricate quotes — it damages trust and you may end up with a contractor who cuts corners to meet an unrealistically low price.
            </p>
          </div>


          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">6. Be Flexible on Timeline</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contractors charge a premium for tight deadlines. If you&apos;re flexible about when the work gets done — say, &quot;anytime in the next 2 weeks&quot; instead of &quot;must be done this Saturday&quot; — they can slot you into gaps between higher-paying urgent jobs. This flexibility alone can save 10-20%.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p className="text-sm text-gray-700"><strong>Script:</strong> &quot;I&apos;m flexible on timing. You can come whenever you have a gap this week or next. Does that help on pricing?&quot;</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">7. Do Partial DIY (Prep Work)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You don&apos;t need to be a skilled tradesperson to reduce costs. Handling prep work yourself — clearing furniture before painters arrive, removing old fixtures before plumbers install new ones, cleaning the area before electricians work — reduces the contractor&apos;s time on-site and therefore their quote.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Move furniture away from walls before painting (saves 1-2 hours of labour)</li>
              <li>Clear debris/storage from work areas</li>
              <li>Remove old curtain rods, hooks, and fixtures yourself</li>
              <li>Handle cleanup after the job (sweeping, mopping)</li>
              <li>Purchase materials yourself to avoid markup</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Do&apos;s and Don&apos;ts of Negotiation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h3 className="font-bold text-green-900 mb-2">Do&apos;s</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>+ Be respectful and professional</li>
                <li>+ Have data to back your position</li>
                <li>+ Offer something in return (referrals, repeat work)</li>
                <li>+ Be willing to walk away</li>
                <li>+ Pay promptly when work is done well</li>
                <li>+ Build long-term relationships</li>
                <li>+ Acknowledge their expertise</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-200">
              <h3 className="font-bold text-red-900 mb-2">Don&apos;ts</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>- Haggle over tiny amounts (₹100-200)</li>
                <li>- Disrespect their skill or time</li>
                <li>- Use fake competitor quotes</li>
                <li>- Negotiate after work is completed</li>
                <li>- Keep adding scope without adjusting pay</li>
                <li>- Delay payments as a power move</li>
                <li>- Compare skilled work to unskilled rates</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Building Long-term Contractor Relationships</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The best pricing comes from repeat relationships. When a contractor knows you&apos;ll call them for every job, pay on time, and refer others, they naturally offer better rates. Think of it as a loyalty discount earned through mutual respect.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Keep a list of reliable contractors for each trade (plumber, electrician, carpenter, painter). When you find good ones, treat them well — offer water/tea, pay promptly, and don&apos;t nickel-and-dime on small overages. The goodwill pays back many times over.
          </p>
        </section>

        <section className="mb-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Know Your Fair Price Before Negotiating</h2>
          <p className="text-gray-700 mb-4">
            The best negotiation starts with knowledge. Check what others in your city are paying for the same service on FairPrice — then negotiate from a position of confidence, not guesswork.
          </p>
          <Link href="/lookup" className="btn-primary inline-block">
            Check Fair Prices Now
          </Link>
        </section>
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/blog" className="text-blue-600 hover:underline">&larr; Back to all articles</Link>
      </footer>
    </article>
  );
}
