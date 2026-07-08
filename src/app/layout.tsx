import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'FairPrice - Know What You Should Really Pay',
  description: 'Crowd-sourced price intelligence for local services. Get fair price ranges for plumbing, electrical, auto repair, and more in your area.',
  keywords: 'fair price, price comparison, home services, plumbing cost, electrical cost, contractor pricing, service quotes',
  authors: [{ name: 'FairPrice' }],
  metadataBase: new URL('https://getfairprice.in'),
  openGraph: {
    title: 'FairPrice - Know What You Should Really Pay',
    description: 'Crowd-sourced price intelligence for local services. Stop guessing if you\'re being ripped off.',
    type: 'website',
    siteName: 'FairPrice',
    url: 'https://getfairprice.in',
    images: [{ url: '/logo.svg', width: 512, height: 512, alt: 'FairPrice Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FairPrice - Know What You Should Really Pay',
    description: 'Crowd-sourced price intelligence for local services.',
  },
  alternates: {
    canonical: 'https://getfairprice.in',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1a5c5c" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4341893599860053"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen">
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16">
              <a href="/" className="flex items-center space-x-1.5 sm:space-x-2">
                <img src="/logo.svg" alt="FairPrice" className="h-8 sm:h-10 w-8 sm:w-10 rounded-full" />
                <span className="text-lg sm:text-xl font-bold">
                  <span className="text-[#1a5c5c]">Fair</span><span className="text-[#e87530]">Price</span>
                </span>
              </a>
              <div className="flex items-center space-x-2 sm:space-x-5">
                <a href="/lookup" className="text-sm sm:text-base text-gray-600 hover:text-blue-600 font-medium transition-colors">
                  Lookup
                </a>
                <a href="/contractors" className="hidden sm:inline text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors">
                  For Contractors
                </a>
                <a href="/about" className="hidden md:inline text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors">
                  About
                </a>
                <a href="/contact" className="hidden md:inline text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors">
                  Contact
                </a>
                <a href="/submit" className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold py-2 px-3 sm:px-4 rounded-lg transition-colors">
                  Submit Price
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img src="/logo.svg" alt="FairPrice" className="h-8 w-8 rounded-full" />
                  <span className="text-lg font-bold text-white">FairPrice</span>
                </div>
                <p className="text-sm">Crowd-sourced price intelligence. Know what you should really pay for local services.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/lookup" className="hover:text-white transition-colors">Look Up a Price</a></li>
                  <li><a href="/submit" className="hover:text-white transition-colors">Submit a Price</a></li>
                  <li><a href="/alerts" className="hover:text-white transition-colors">Price Alerts</a></li>
                  <li><a href="/contractors" className="hover:text-white transition-colors">For Contractors</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="/admin" className="hover:text-white transition-colors">Admin</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
              <p>&copy; 2026 FairPrice. All data is anonymous and crowd-sourced.</p>
              <p className="mt-2 text-xs text-gray-500">
                FairPrice provides price information for informational purposes only. 
                See our <a href="/terms" className="hover:text-gray-300 underline">Terms of Service</a> for details.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
