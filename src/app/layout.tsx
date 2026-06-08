import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FairPrice - Know What You Should Really Pay',
  description: 'Crowd-sourced price intelligence for local services. Get fair price ranges for plumbing, electrical, auto repair, and more in your area.',
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
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="min-h-screen">
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16">
              <a href="/" className="flex items-center space-x-1.5 sm:space-x-2">
                <span className="text-xl sm:text-2xl">💰</span>
                <span className="text-lg sm:text-xl font-bold text-blue-700">FairPrice</span>
              </a>
              <div className="flex items-center space-x-3 sm:space-x-6">
                <a href="/lookup" className="text-sm sm:text-base text-gray-600 hover:text-blue-600 font-medium transition-colors">
                  Lookup
                </a>
                <a href="/submit" className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold py-2 px-3 sm:px-4 rounded-lg transition-colors">
                  Submit
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl">💰</span>
                  <span className="text-lg font-bold text-white">FairPrice</span>
                </div>
                <p className="text-sm">Crowd-sourced price intelligence. Know what you should really pay for local services.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/lookup" className="hover:text-white transition-colors">Look Up a Price</a></li>
                  <li><a href="/submit" className="hover:text-white transition-colors">Submit a Price</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">About</h3>
                <p className="text-sm">FairPrice is like Glassdoor for service quotes — anonymous, local, and specific. Stop getting ripped off.</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
              <p>&copy; 2026 FairPrice. All data is anonymous and crowd-sourced.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
