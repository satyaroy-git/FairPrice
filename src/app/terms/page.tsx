import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | FairPrice',
  description: 'FairPrice Terms of Service - Rules and guidelines for using our price comparison platform.',
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-gray-500 mb-8">Last updated: June 13, 2026</p>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using FairPrice (&quot;the Service&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service. These terms apply to all visitors, users, and contributors.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p className="text-gray-700 leading-relaxed">
            FairPrice is a community-driven price transparency platform that allows users to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
            <li>Look up typical prices for home services, repairs, and professional services in their area.</li>
            <li>Submit prices they have paid for services to contribute to the community database.</li>
            <li>Compare contractor pricing and fairness scores.</li>
            <li>Receive price alerts for services they are interested in.</li>
            <li>Connect with vetted contractors for quotes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <p className="text-gray-700 leading-relaxed">
            Some features require an email address for identification. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You agree to provide accurate and complete information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. User-Submitted Content</h2>
          <h3 className="text-xl font-medium mb-3">4.1 Price Submissions</h3>
          <p className="text-gray-700 leading-relaxed">
            By submitting price data to FairPrice, you:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
            <li>Confirm that the information is accurate and based on actual transactions.</li>
            <li>Grant FairPrice a non-exclusive, royalty-free license to use, display, and aggregate the data.</li>
            <li>Understand that submissions are anonymous and aggregated — your personal details are not publicly displayed.</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6">4.2 Prohibited Content</h3>
          <p className="text-gray-700 leading-relaxed">You may not submit:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
            <li>Intentionally false or misleading price information.</li>
            <li>Spam, promotional content, or automated submissions.</li>
            <li>Content that defames, harasses, or threatens any person or business.</li>
            <li>Content that violates any applicable law or regulation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Trust Points System</h2>
          <p className="text-gray-700 leading-relaxed">
            FairPrice uses a trust points system to reward genuine contributions. Points are earned through verified price submissions and consistent participation. Abuse of this system (fake submissions, manipulation) will result in account suspension and point removal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Disclaimer of Warranties</h2>
          <p className="text-gray-700 leading-relaxed">
            FairPrice provides price information for informational purposes only. We do not guarantee:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
            <li>The accuracy, completeness, or timeliness of any price data.</li>
            <li>That prices shown reflect what you will actually pay.</li>
            <li>The quality, reliability, or trustworthiness of any listed contractor.</li>
            <li>Uninterrupted or error-free operation of the Service.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            In no event shall FairPrice, its directors, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Our total liability shall not exceed the amount you have paid us in the past twelve months (if any).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contractor Listings</h2>
          <p className="text-gray-700 leading-relaxed">
            FairPrice displays contractor information and fairness scores based on user-submitted data. We do not endorse, guarantee, or warranty any contractor&apos;s work. Users should independently verify contractor credentials, insurance, and licensing before hiring. FairPrice is not a party to any agreement between users and contractors.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            The FairPrice name, logo, website design, and proprietary algorithms are the intellectual property of FairPrice. You may not reproduce, distribute, or create derivative works without our written permission. Aggregated price data displayed on the site may be referenced with attribution.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Advertising</h2>
          <p className="text-gray-700 leading-relaxed">
            FairPrice displays third-party advertisements through Google AdSense and other advertising partners. We are not responsible for the content of third-party advertisements or the products/services they promote. Ad interactions are governed by the advertiser&apos;s own terms and privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to terminate or suspend your access to FairPrice at any time, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, contractors, or the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved through binding arbitration.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Continued use of FairPrice after changes constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">14. Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            For questions about these Terms of Service, contact us at:
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mt-3">
            <p className="text-gray-700">Email: <a href="mailto:legal@fairprice.app" className="text-primary-600 hover:underline">legal@fairprice.app</a></p>
            <p className="text-gray-700">Website: <a href="/contact" className="text-primary-600 hover:underline">Contact Form</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
