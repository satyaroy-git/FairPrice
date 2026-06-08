'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import VerdictBadge from '@/components/VerdictBadge';
import PriceRangeBar from '@/components/PriceRangeBar';
import ContractorTable from '@/components/ContractorTable';
import { LookupResult } from '@/lib/types';

interface UserTier {
  email: string;
  trust_points: number;
  tier: string;
}

function LookupContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [result, setResult] = useState<LookupResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({ name: '', phone: '', email: '' });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  // User gating state
  const [userTier, setUserTier] = useState<UserTier | null>(null);
  const [gateEmail, setGateEmail] = useState('');
  const [gateLoading, setGateLoading] = useState(false);

  const serviceParam = searchParams.get('service') || '';
  const zipParam = searchParams.get('zip') || '';
  const quoteParam = searchParams.get('quote') || '';
  const unitsParam = searchParams.get('units') || '';
  const categoryParam = searchParams.get('category') || '';

  // Load user from localStorage on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('fairprice_email');
    if (savedEmail) {
      fetchUserTier(savedEmail);
    }
  }, []);

  useEffect(() => {
    if (serviceParam && zipParam) {
      fetchResults(serviceParam, zipParam, quoteParam ? parseFloat(quoteParam) : undefined, unitsParam ? parseFloat(unitsParam) : undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceParam, zipParam, quoteParam, unitsParam]);

  const fetchUserTier = async (email: string) => {
    try {
      const res = await fetch(`/api/user?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      setUserTier({
        email: data.email,
        trust_points: data.trust_points || 0,
        tier: data.tier || 'new',
      });
    } catch {
      // Silently fail - user just won't see gated content
    }
  };

  const handleGateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gateEmail || !gateEmail.includes('@')) return;
    setGateLoading(true);
    const normalizedEmail = gateEmail.toLowerCase().trim();
    localStorage.setItem('fairprice_email', normalizedEmail);
    await fetchUserTier(normalizedEmail);
    setGateLoading(false);
  };

  const fetchResults = async (service: string, zip: string, quote?: number, units?: number) => {
    setLoading(true);
    setError('');
    setShowQuoteForm(false);
    setQuoteSubmitted(false);
    setQuoteFormData({ name: '', phone: '', email: '' });
    try {
      const params = new URLSearchParams({ service, zip });
      if (quote) params.set('quote', String(quote));
      if (units) params.set('units', String(units));
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

  const handleSearch = (service: string, zip: string, quote?: number, units?: number) => {
    const params = new URLSearchParams({ service, zip });
    if (quote) params.set('quote', String(quote));
    if (units) params.set('units', String(units));
    router.push(`/lookup?${params.toString()}`);
  };

  const formatPrice = (amount: number) => {
    if (!result) return `$${amount.toLocaleString()}`;
    return `${result.currency.symbol}${amount.toLocaleString(result.currency.locale)}`;
  };

  // Gating helpers
  const points = userTier?.trust_points || 0;
  const canSeeContractors = points >= 10;    // Contributor+
  const canSeeBreakdown = points >= 50;      // Trusted+
  const canSeeUnitPricing = points >= 50;    // Trusted+

  // Gate overlay component
  const GatedSection = ({ requiredPoints, requiredTier, children }: { requiredPoints: number; requiredTier: string; children: React.ReactNode }) => {
    if (points >= requiredPoints) {
      return <>{children}</>;
    }

    return (
      <div className="relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 rounded-xl flex items-center justify-center">
          <div className="text-center p-6">
            <div className="text-3xl mb-2">🔒</div>
            <p className="font-semibold text-gray-800 mb-1">
              {requiredTier} Feature
            </p>
            <p className="text-sm text-gray-600 mb-3">
              You need {requiredPoints}+ trust points to unlock this.
              {points > 0 ? ` You have ${points}.` : ''}
            </p>
            <a href="/submit" className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700">
              Submit prices to earn points
            </a>
          </div>
        </div>
        <div className="opacity-30 pointer-events-none">
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Price Lookup</h1>
      <p className="text-gray-600 mb-8">Enter a service and ZIP/PIN code to see fair prices in your area</p>

      <div className="card mb-8">
        <SearchBar onSearch={handleSearch} initialService={serviceParam} lockedCategory={categoryParam || undefined} />
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
          {/* Verdict Badge - always visible */}
          {result.priceRange.verdict && result.priceRange.userQuote && (
            <VerdictBadge
              verdict={result.priceRange.verdict}
              quote={result.priceRange.userQuote}
              average={result.priceRange.average}
              currency={result.currency}
            />
          )}

          {/* Price Range - always visible */}
          {result.priceRange.submissionCount > 0 ? (
            <>
              <div className="card">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 capitalize">
                      {result.serviceType}
                    </h2>
                    <p className="text-gray-500">
                      in {result.zipCode.length === 6 ? 'PIN' : 'ZIP'} {result.zipCode} area
                      <span className="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded">
                        {result.currency.country} ({result.currency.code})
                      </span>
                    </p>
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
                  currency={result.currency}
                />
              </div>

              {/* Email gate - show if user not identified */}
              {!userTier && (
                <div className="card border-amber-200 bg-amber-50">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900 mb-1">🔓 Unlock detailed pricing data</p>
                    <p className="text-sm text-gray-600 mb-4">
                      Enter your email to see contractor scores, price breakdowns, and per-unit estimates.
                      <br />Submit prices to earn points and unlock more features!
                    </p>
                    <form onSubmit={handleGateSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={gateEmail}
                        onChange={(e) => setGateEmail(e.target.value)}
                        className="input-field flex-1"
                        required
                      />
                      <button
                        type="submit"
                        disabled={gateLoading}
                        className="btn-primary whitespace-nowrap disabled:opacity-50"
                      >
                        {gateLoading ? 'Loading...' : 'Unlock'}
                      </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-2">No login required. We just track your trust points.</p>
                  </div>
                </div>
              )}

              {/* Unit Pricing - Gated to Trusted (50+ pts) */}
              {result.unitPricing && (
                <GatedSection requiredPoints={50} requiredTier="Trusted Contributor">
                  <div className="card bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      📐 Price Estimate for {result.unitPricing.units} {result.unitPricing.unitLabel}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <p className="text-sm text-gray-500 mb-1">Per {result.unitPricing.unitLabel} rate</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-emerald-600 font-semibold">{formatPrice(result.unitPricing.perUnitLow)}</span>
                          <span className="text-gray-400">—</span>
                          <span className="text-red-600 font-semibold">{formatPrice(result.unitPricing.perUnitHigh)}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Avg: {formatPrice(result.unitPricing.perUnitAverage)} / {result.unitPricing.unitLabel}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-indigo-200">
                        <p className="text-sm text-gray-500 mb-1">Total estimate ({result.unitPricing.units} {result.unitPricing.unitLabel})</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-emerald-600 text-lg font-bold">{formatPrice(result.unitPricing.totalEstimateLow)}</span>
                          <span className="text-gray-400">—</span>
                          <span className="text-red-600 text-lg font-bold">{formatPrice(result.unitPricing.totalEstimateHigh)}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Avg total: {formatPrice(result.unitPricing.totalEstimateAverage)}</p>
                      </div>
                    </div>
                  </div>
                </GatedSection>
              )}

              {/* Breakdown - Gated to Trusted (50+ pts) */}
              {result.breakdown.length > 0 && (
                <GatedSection requiredPoints={50} requiredTier="Trusted Contributor">
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
                            <span className="text-emerald-600">{formatPrice(item.low)}</span>
                            <span className="text-gray-400 mx-1">—</span>
                            <span className="text-red-600">{formatPrice(item.high)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </GatedSection>
              )}

              {/* Contractors - Gated to Contributor (10+ pts) */}
              {result.contractors.length > 0 && (
                <GatedSection requiredPoints={10} requiredTier="Contributor">
                  <ContractorTable contractors={result.contractors} />
                </GatedSection>
              )}

              {/* Get 3 Quotes CTA - Always visible */}
              <div className="card bg-gradient-to-r from-blue-50 to-blue-50 border-blue-200">
                {!showQuoteForm && !quoteSubmitted && (
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">📊 Want Better Quotes?</h3>
                      <p className="text-gray-600 text-sm">Get connected to 2-3 vetted local professionals for free quotes.</p>
                    </div>
                    <button
                      onClick={() => setShowQuoteForm(true)}
                      className="btn-primary whitespace-nowrap"
                    >
                      Get 3 Free Quotes
                    </button>
                  </div>
                )}

                {showQuoteForm && !quoteSubmitted && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">📊 Get Free Quotes</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Enter your details and we&apos;ll connect you with 2-3 vetted local professionals for <span className="font-semibold capitalize">{result.serviceType}</span> near {result.zipCode}.
                    </p>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setQuoteSubmitted(true);
                        setShowQuoteForm(false);
                      }}
                      className="space-y-3"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={quoteFormData.name}
                          onChange={(e) => setQuoteFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 bg-white text-sm"
                          required
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={quoteFormData.phone}
                          onChange={(e) => setQuoteFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 bg-white text-sm"
                          required
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={quoteFormData.email}
                          onChange={(e) => setQuoteFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 bg-white text-sm"
                          required
                        />
                      </div>
                      <div className="flex gap-3">
                        <button type="submit" className="btn-primary text-sm !py-2.5">
                          Send Me Quotes
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowQuoteForm(false)}
                          className="text-sm text-gray-500 hover:text-gray-700"
                        >
                          Cancel
                        </button>
                      </div>
                      <p className="text-xs text-gray-400">No spam. Professionals will contact you within 24 hours.</p>
                    </form>
                  </div>
                )}

                {quoteSubmitted && (
                  <div className="text-center py-4">
                    <div className="text-3xl mb-2">✅</div>
                    <h3 className="text-lg font-semibold text-emerald-700">Request Submitted!</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      2-3 vetted professionals for <span className="font-semibold capitalize">{result.serviceType}</span> near {result.zipCode} will contact you within 24 hours with their best quotes.
                    </p>
                    {result.contractors.length > 0 && (
                      <div className="mt-4 text-left bg-white rounded-lg p-4 border border-gray-200">
                        <p className="text-sm font-medium text-gray-700 mb-2">Top-rated contractors in your area:</p>
                        <ul className="space-y-1">
                          {result.contractors.slice(0, 3).map((c) => (
                            <li key={c.companyName} className="text-sm text-gray-600 flex items-center gap-2">
                              <span className="text-emerald-500">●</span>
                              <span className="font-medium">{c.companyName}</span>
                              <span className="text-xs text-gray-400">(Fairness: {c.fairnessScore}/100)</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
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
          <p className="text-lg">Enter a service and ZIP/PIN code above to see price data</p>
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
