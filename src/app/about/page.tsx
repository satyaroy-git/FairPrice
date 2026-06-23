import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | FairPrice',
  description: 'Learn about FairPrice - the community-driven platform helping consumers get fair prices for home services, repairs, and more.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">About FairPrice</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <div className="bg-gradient-to-r from-primary-50 to-emerald-50 rounded-2xl p-8 mb-8">
            <p className="text-xl text-gray-800 leading-relaxed font-medium">
              FairPrice is a community-driven price transparency platform that empowers consumers to make informed decisions about home services, repairs, and professional services.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            We believe everyone deserves to know if they&apos;re getting a fair deal. Too often, homeowners and consumers pay significantly more than they should because they lack access to transparent pricing information. FairPrice was created to close this information gap by harnessing the power of community-reported data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="font-semibold text-lg mb-2">Search</h3>
              <p className="text-gray-600 text-sm">
                Enter a service and your location to see what others in your area have actually paid.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-lg mb-2">Compare</h3>
              <p className="text-gray-600 text-sm">
                Get instant price ranges, contractor fairness scores, and a verdict on your quote.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold text-lg mb-2">Contribute</h3>
              <p className="text-gray-600 text-sm">
                After your service, submit what you paid to help others make informed decisions.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What Makes Us Different</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 text-xl mt-1">✓</span>
              <div>
                <strong className="text-gray-900">Real Data from Real People:</strong>
                <span className="text-gray-700"> Every price point comes from actual transactions reported by verified community members.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 text-xl mt-1">✓</span>
              <div>
                <strong className="text-gray-900">Location-Specific:</strong>
                <span className="text-gray-700"> Prices vary dramatically by area. We show you what&apos;s normal for YOUR neighborhood.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 text-xl mt-1">✓</span>
              <div>
                <strong className="text-gray-900">Trust Points System:</strong>
                <span className="text-gray-700"> Contributors earn trust points, ensuring data quality through community participation.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 text-xl mt-1">✓</span>
              <div>
                <strong className="text-gray-900">Contractor Fairness Scores:</strong>
                <span className="text-gray-700"> See which contractors consistently charge fair prices based on community data.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 text-xl mt-1">✓</span>
              <div>
                <strong className="text-gray-900">No Bias:</strong>
                <span className="text-gray-700"> We don&apos;t accept payments from contractors to manipulate rankings. Our data is purely community-driven.</span>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Coverage</h2>
          <p className="text-gray-700 leading-relaxed">
            FairPrice currently covers a wide range of service categories including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {[
              { icon: '🔧', name: 'Plumbing' },
              { icon: '⚡', name: 'Electrical' },
              { icon: '🚗', name: 'Auto Repair' },
              { icon: '❄️', name: 'HVAC' },
              { icon: '🏠', name: 'Home Exterior' },
              { icon: '🦷', name: 'Dental' },
              { icon: '📦', name: 'Moving' },
              { icon: '🌳', name: 'Landscaping' },
            ].map((cat) => (
              <div key={cat.name} className="bg-gray-50 rounded-lg p-3 text-center">
                <span className="text-xl">{cat.icon}</span>
                <p className="text-sm font-medium text-gray-700 mt-1">{cat.name}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            We serve communities across India and the United States, with data from hundreds of ZIP/PIN codes and growing daily.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">For Contractors</h2>
          <p className="text-gray-700 leading-relaxed">
            FairPrice isn&apos;t just for consumers. Honest contractors benefit from our platform too. If you consistently charge fair prices, our Contractor Fairness Score highlights your business to potential customers who value transparency. <Link href="/contractors" className="text-primary-600 hover:underline">Learn more about joining as a contractor</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="font-semibold text-gray-900">Transparency</h3>
              <p className="text-gray-600 text-sm mt-1">We believe hidden pricing enables exploitation. Open data creates accountability.</p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-gray-900">Community</h3>
              <p className="text-gray-600 text-sm mt-1">Every price submission makes the platform stronger for everyone.</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-semibold text-gray-900">Fairness</h3>
              <p className="text-gray-600 text-sm mt-1">We champion fair pricing for consumers and fair recognition for honest businesses.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900">Privacy</h3>
              <p className="text-gray-600 text-sm mt-1">Individual submissions are always anonymous. We only display aggregated data.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
          <p className="text-gray-700 leading-relaxed">
            FairPrice is powered by people like you. Here&apos;s how you can help:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
            <li><Link href="/submit" className="text-primary-600 hover:underline">Submit a price</Link> after your next service appointment.</li>
            <li>Share FairPrice with friends and neighbors who are getting quotes.</li>
            <li><Link href="/contact" className="text-primary-600 hover:underline">Contact us</Link> with feedback or suggestions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            Have questions, feedback, or partnership inquiries? We&apos;d love to hear from you.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mt-3">
            <p className="text-gray-700">Email: <a href="mailto:satya.bit123@gmail.com" className="text-primary-600 hover:underline">satya.bit123@gmail.com</a></p>
            <p className="text-gray-700">Contact Form: <Link href="/contact" className="text-primary-600 hover:underline">Get in Touch</Link></p>
          </div>
        </section>
      </div>
    </div>
  );
}
