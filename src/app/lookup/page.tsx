'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import VerdictBadge from '@/components/VerdictBadge';
import PriceRangeBar from '@/components/PriceRangeBar';
import ContractorTable from '@/components/ContractorTable';
import { LookupResult } from '@/lib/types';

function LookupContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [result, setResult] = useState<LookupResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const serviceParam = searchParams.get('service') || '';
  const zipParam = searchParams.get('zip') || '';
  const quoteParam = searchParams.get('quote') || '';

  useEffect(() => {
    if (serviceParam && zipParam) {
      fetchResults(serviceParam, zipParam, quoteParam ? parseFloat(quoteParam) : undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceParam, zipParam, quoteParam]);

  const fetchResults = async (service: string, zip: string, quote?: number) => {
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams({ service, zip });
      if (quote) params.set('quote', String(quote));
      const response = await fetch(`/api/lookup?${params.toString()}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (service: string, zip: string, quote?: number) => {
    const params = new URLSearchParams({ service, zip });
    if (quote) params.set('quote', String(quote));
    router.push(`/lookup?${params.toString()}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Price Lookup</h1>
      <p className="text-gray-600 mb-8">Enter a service and ZIP code to see fair prices in your area</p>

      <div className="card mb-8">
        <SearchBar onSearch={handleSearch} initialService={serviceParam} />
      </div>

      {loading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-500 mt-4">Looking up prices...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error}
        </div>
      )}

      {result && !loading && (
        <div className="space-y-6">
          {/* Verdict Badge */}
          {result.priceRange.verdict && result.priceRange.userQuote && (
            <VerdictBadge
              verdict={result.priceRange.verdict}
              quote={result.priceRange.userQuote}
              average={result.priceRange.average}
            />
          )}

          {/* Price Range */}
          {result.priceRange.submissionCount > 0 ? (
            <>
              <div className="card">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 capitalize">
                      {result.serviceType}
                    </h2>
                    <p className="text-gray-500">in ZIP {result.zipCode} area</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">
                      Based on <span className="font-semibold text-gray-700">{result.priceRange.submissionCount}</span> reports
                    </div>
                    <div className="text-xs text-emerald-600 mt-1">
                      {result.priceRange.freshness}% submitted within 6 months
                    </div>
                  </div>
                </div>

                <PriceRangeBar
                  low={result.priceRange.low}
                  average={result.priceRange.average}
                  high={result.priceRange.high}
                  userQuote={result.priceRange.userQuote}
                />
              </div>

              {/* Breakdown */}
              {result.breakdown.length > 0 && (
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Price Breakdown</h3>
                  <div className="space-y-3">
                    {result.breakdown.map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                        <div>
                          <span className="font-medium text-gray-900">{item.label}</span>
                          <span className="text-xs text-gray-500 ml-2">({item.count} reports)</span>
                        </div>
                        <div className="text-right">
                          <span className="text-emerald-600">${item.low.toLocaleString()}</span>
                          <span className="text-gray-400 mx-1">—</span>
                          <span className="text-red-600">${item.high.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contractors */}
              <ContractorTable contractors={result.contractors} />

              {/* Get 3 Quotes CTA */}
              <div className="card bg-gradient-to-r from-blue-50 to-blue-50 border-blue-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">📊 Want Better Quotes?</h3>
                    <p className="text-gray-600 text-sm">Get connected to 2-3 vetted local professionals for free quotes.</p>
                  </div>
                  <button className="btn-primary whitespace-nowrap">
                    Get 3 Free Quotes
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="card text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No data yet for this area</h3>
              <p className="text-gray-500 mb-6">
                We don&apos;t have enough price reports for &quot;{result.serviceType}&quot; near {result.zipCode} yet.
              </p>
              <a href="/submit" className="btn-primary inline-block">
                Be the first to submit a price
              </a>
            </div>
          )}
        </div>
      )}

      {!result && !loading && !error && (
        <div className="text-center py-16 text-gray-500">
          <div className="text-5xl mb-4">💰</div>
          <p className="text-lg">Enter a service and ZIP code above to see price data</p>
        </div>
      )}
    </div>
  );
}

export default function LookupPage() {
  return (
    <Suspense fallback={
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    }>
      <LookupContent />
    </Suspense>
  );
}
