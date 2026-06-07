'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/categories';

export default function HomePage() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSearch = (service: string, zip: string, quote?: number) => {
    const params = new URLSearchParams({ service, zip });
    if (quote) params.set('quote', String(quote));
    router.push(`/lookup?${params.toString()}`);
  };

  const handleCategoryClick = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    if (category) {
      router.push(`/lookup?category=${categoryId}`);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Know What You Should <span className="text-amber-300">Really</span> Pay
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Stop guessing if you&apos;re being ripped off. See what real people in your area paid for the same service.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <SearchBar onSearch={handleSearch} />
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Try: &quot;water heater replacement&quot; in 90210, or &quot;brake pads&quot; in 60601
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">1. Search Your Service</h3>
              <p className="text-gray-600">Enter the service you need and your ZIP code to see local prices.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">2. Get Instant Verdict</h3>
              <p className="text-gray-600">Enter your quote to instantly see if it&apos;s fair, high, or overpriced.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">3. Contribute Back</h3>
              <p className="text-gray-600">After your service, submit what you paid to help others get fair prices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Browse by Category</h2>
          <p className="text-gray-600 text-center mb-10">Select a category to explore prices in your area</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">38+</div>
              <div className="text-gray-600 mt-1">Price Reports</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">8</div>
              <div className="text-gray-600 mt-1">Service Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">12+</div>
              <div className="text-gray-600 mt-1">ZIP Codes Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-gray-600 mt-1">Data Freshness</div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Alert CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-4xl mb-4 block">🔔</span>
          <h2 className="text-2xl font-bold mb-3">Price Alerts</h2>
          <p className="text-gray-600 mb-6">
            Get notified when prices drop for services in your area. Perfect for non-urgent work — time your purchase right.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field flex-1"
            />
            <button className="btn-primary whitespace-nowrap">
              Set Alert
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">We&apos;ll notify you when prices change in your area. No spam.</p>
        </div>
      </section>

      {/* SMS Lookup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-4xl mb-4 block">📱</span>
              <h2 className="text-2xl font-bold mb-3">WhatsApp / SMS Lookup</h2>
              <p className="text-gray-600 mb-4">
                On the go? Text a service name + ZIP to our number and get a price range back instantly.
              </p>
              <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                <p className="text-gray-500">Text to: (555) FAIR-PRC</p>
                <p className="text-gray-900 mt-2">&quot;water heater 90210&quot;</p>
                <p className="text-emerald-600 mt-2">→ Water heater replacement in 90210: $1,100 - $1,600 (avg $1,337)</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">💬</div>
              <p className="text-gray-600">Coming soon — join the waitlist above to get early access!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
