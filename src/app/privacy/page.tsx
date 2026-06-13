import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | FairPrice',
  description: 'FairPrice Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: June 13, 2026</p>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            FairPrice (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this policy carefully. By using FairPrice, you consent to the data practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-medium mb-3">2.1 Information You Provide</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Account Information:</strong> Email address when you register or submit a price report.</li>
            <li><strong>Price Submissions:</strong> Service type, price paid, ZIP/PIN code, company name, and job description.</li>
            <li><strong>Contact Information:</strong> Name, email, and phone number when you request contractor quotes.</li>
            <li><strong>Communications:</strong> Messages you send to us through our contact form.</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6">2.2 Information Collected Automatically</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Usage Data:</strong> Pages visited, search queries, time spent on pages, and interaction patterns.</li>
            <li><strong>Device Information:</strong> Browser type, operating system, device type, and screen resolution.</li>
            <li><strong>Location Data:</strong> Approximate location based on IP address (not precise GPS).</li>
            <li><strong>Cookies:</strong> We use cookies and similar tracking technologies for analytics and advertising purposes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>To provide and maintain our price comparison service.</li>
            <li>To process and display aggregated price data to help users get fair prices.</li>
            <li>To connect users with contractors and service providers upon request.</li>
            <li>To send price alerts and notifications you&apos;ve opted into.</li>
            <li>To improve our website, services, and user experience.</li>
            <li>To display relevant advertisements through Google AdSense and other ad networks.</li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Advertising</h2>
          <p className="text-gray-700 leading-relaxed">
            We use Google AdSense and other third-party advertising services to display ads on our website. These services may use cookies and similar technologies to serve ads based on your prior visits to our website or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to FairPrice and/or other sites on the Internet.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. Alternatively, you can opt out of third-party vendor cookies by visiting the <a href="https://optout.networkadvertising.org/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative opt-out page</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
          <p className="text-gray-700 leading-relaxed">We do not sell your personal information. We may share your information with:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
            <li><strong>Service Providers:</strong> Third-party companies that help us operate our website (hosting, analytics, email).</li>
            <li><strong>Contractors:</strong> When you explicitly request a quote, we share your contact info with selected contractors.</li>
            <li><strong>Advertising Partners:</strong> Aggregated, non-personally-identifiable data for ad targeting.</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data.</li>
            <li>Opt out of marketing communications.</li>
            <li>Withdraw consent for data processing.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            To exercise any of these rights, please contact us at <a href="mailto:privacy@fairprice.app" className="text-primary-600 hover:underline">privacy@fairprice.app</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Cookies Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We use essential cookies for site functionality, analytics cookies (Google Analytics) to understand usage patterns, and advertising cookies (Google AdSense) to serve relevant ads. You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Children&apos;s Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            FairPrice is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we will delete it promptly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of FairPrice after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mt-3">
            <p className="text-gray-700">Email: <a href="mailto:privacy@fairprice.app" className="text-primary-600 hover:underline">privacy@fairprice.app</a></p>
            <p className="text-gray-700">Website: <a href="/contact" className="text-primary-600 hover:underline">Contact Form</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
