'use client';

import { useState, useEffect } from 'react';
import { categories, SubCategory, UnitConfig } from '@/data/categories';

interface UserInfo {
  email: string;
  trust_points: number;
  submissions_count: number;
  tier: string;
}

const tierLabels: Record<string, { label: string; color: string; icon: string }> = {
  new: { label: 'New Member', color: 'text-gray-600 bg-gray-100', icon: '🌱' },
  contributor: { label: 'Contributor', color: 'text-blue-700 bg-blue-50', icon: '⭐' },
  trusted: { label: 'Trusted Contributor', color: 'text-emerald-700 bg-emerald-50', icon: '🏅' },
  power: { label: 'Power Contributor', color: 'text-purple-700 bg-purple-50', icon: '💎' },
  moderator: { label: 'Community Moderator', color: 'text-amber-700 bg-amber-50', icon: '👑' },
};

export default function SubmitPage() {
  const [email, setEmail] = useState('');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [emailVerified, setEmailVerified] = useState(false);
  const [loadingUser, setLoadingUser] = useState(false);

  const [formData, setFormData] = useState({
    serviceType: '',
    categoryId: '',
    subcategoryId: '',
    zipCode: '',
    pricePaid: '',
    units: '',
    companyName: '',
    jobDescription: '',
  });
  const [subcategories, setSubcategories] = useState<SubCategory[]>([]);
  const [serviceTypes, setServiceTypes] = useState<string[]>([]);
  const [unitConfig, setUnitConfig] = useState<UnitConfig | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Load saved email from localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem('fairprice_email');
    if (savedEmail) {
      setEmail(savedEmail);
      lookupUser(savedEmail);
    }
  }, []);

  useEffect(() => {
    if (formData.categoryId) {
      const cat = categories.find(c => c.id === formData.categoryId);
      setSubcategories(cat?.subcategories || []);
      setFormData(prev => ({ ...prev, subcategoryId: '', serviceType: '', units: '' }));
      setServiceTypes([]);
      setUnitConfig(null);
    } else {
      setSubcategories([]);
      setServiceTypes([]);
      setUnitConfig(null);
    }
  }, [formData.categoryId]);

  useEffect(() => {
    if (formData.subcategoryId && formData.categoryId) {
      const cat = categories.find(c => c.id === formData.categoryId);
      const sub = cat?.subcategories.find(s => s.id === formData.subcategoryId);
      setServiceTypes(sub?.serviceTypes || []);
      setUnitConfig(sub?.unitConfig || null);
      setFormData(prev => ({ ...prev, units: '' }));
    } else {
      setServiceTypes([]);
      setUnitConfig(null);
    }
  }, [formData.subcategoryId, formData.categoryId]);

  const lookupUser = async (userEmail: string) => {
    setLoadingUser(true);
    try {
      const res = await fetch(`/api/user?email=${encodeURIComponent(userEmail)}`);
      const data = await res.json();
      setUserInfo({
        email: data.email,
        trust_points: data.trust_points || 0,
        submissions_count: data.submissions_count || 0,
        tier: data.tier || 'new',
      });
      setEmailVerified(true);
      localStorage.setItem('fairprice_email', userEmail.toLowerCase().trim());
    } catch {
      setEmailVerified(false);
    } finally {
      setLoadingUser(false);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      lookupUser(email.toLowerCase().trim());
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceType: formData.serviceType,
          categoryId: formData.categoryId,
          zipCode: formData.zipCode,
          pricePaid: parseFloat(formData.pricePaid),
          units: formData.units ? parseFloat(formData.units) : undefined,
          unitType: unitConfig?.unit || undefined,
          companyName: formData.companyName || undefined,
          jobDescription: formData.jobDescription || undefined,
          email: email.toLowerCase().trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      setSuccess(true);
      // Update local user info with new points
      if (data.user) {
        setUserInfo({
          email: data.user.email,
          trust_points: data.user.trust_points,
          submissions_count: (userInfo?.submissions_count || 0) + 1,
          tier: data.user.tier,
        });
      }
      setFormData({
        serviceType: '',
        categoryId: '',
        subcategoryId: '',
        zipCode: '',
        pricePaid: '',
        units: '',
        companyName: '',
        jobDescription: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChangeEmail = () => {
    setEmailVerified(false);
    setUserInfo(null);
    localStorage.removeItem('fairprice_email');
  };

  // Calculate per-unit price for display
  const perUnitPrice = formData.pricePaid && formData.units
    ? (parseFloat(formData.pricePaid) / parseFloat(formData.units)).toFixed(0)
    : null;

  // Next tier info
  const getNextTierInfo = () => {
    if (!userInfo) return null;
    const points = userInfo.trust_points;
    if (points < 10) return { next: 'Contributor', needed: 10 - points, icon: '⭐' };
    if (points < 50) return { next: 'Trusted Contributor', needed: 50 - points, icon: '🏅' };
    if (points < 100) return { next: 'Power Contributor', needed: 100 - points, icon: '💎' };
    if (points < 200) return { next: 'Community Moderator', needed: 200 - points, icon: '👑' };
    return null;
  };

  return (
    <div>
      {/* Header matching homepage gradient */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">Submit a Price</h1>
          <p className="text-blue-100">
            Help others get fair prices by sharing what you paid. All submissions are anonymous.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* Email Entry / User Info Section */}
      {!emailVerified ? (
        <div className="card mb-8 border-blue-200 bg-blue-50">
          <h3 className="font-semibold text-gray-900 mb-2">📧 Enter your email to get started</h3>
          <p className="text-sm text-gray-600 mb-4">
            We use your email to track your trust points. No spam, no login required.
          </p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field flex-1"
              required
            />
            <button
              type="submit"
              disabled={loadingUser}
              className="btn-primary whitespace-nowrap disabled:opacity-50"
            >
              {loadingUser ? 'Loading...' : 'Continue'}
            </button>
          </form>
        </div>
      ) : (
        <div className="card mb-8 border-emerald-200 bg-gradient-to-r from-emerald-50 to-blue-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{tierLabels[userInfo?.tier || 'new']?.icon}</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">{email}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tierLabels[userInfo?.tier || 'new']?.color}`}>
                    {tierLabels[userInfo?.tier || 'new']?.label}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mt-0.5">
                  <span className="font-medium text-amber-700">{userInfo?.trust_points || 0} trust points</span>
                  <span className="mx-2">•</span>
                  <span>{userInfo?.submissions_count || 0} submissions</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleChangeEmail}
              className="text-xs text-gray-500 hover:text-gray-700 underline"
            >
              Change
            </button>
          </div>
          {/* Progress to next tier */}
          {getNextTierInfo() && (
            <div className="mt-3 pt-3 border-t border-emerald-100">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>{getNextTierInfo()?.icon} Next: {getNextTierInfo()?.next}</span>
                <span>{getNextTierInfo()?.needed} more points needed ({Math.ceil((getNextTierInfo()?.needed || 0) / 10)} more submissions)</span>
              </div>
              <div className="mt-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all"
                  style={{
                    width: `${Math.min(100, ((userInfo?.trust_points || 0) / ((userInfo?.trust_points || 0) + (getNextTierInfo()?.needed || 1))) * 100)}%`
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6 text-center">
          <div className="text-4xl mb-2">🎉</div>
          <h3 className="text-lg font-semibold text-emerald-800">Submitted Successfully!</h3>
          <p className="text-emerald-700 text-sm mt-1">
            You earned 10 trust points! Total: <span className="font-bold">{userInfo?.trust_points}</span> points ({tierLabels[userInfo?.tier || 'new']?.label})
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="btn-primary mt-4 text-sm !py-2 !px-4"
          >
            Submit Another
          </button>
        </div>
      )}

      {/* Submission Form - Only shows after email is verified */}
      {emailVerified && !success && (
        <form onSubmit={handleSubmit} className="card space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Category */}
          <div>
            <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700 mb-1">
              Service Category *
            </label>
            <select
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className="input-field"
              required
            >
              <option value="">Select a category</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Subcategory */}
          {subcategories.length > 0 && (
            <div>
              <label htmlFor="subcategoryId" className="block text-sm font-medium text-gray-700 mb-1">
                Subcategory *
              </label>
              <select
                id="subcategoryId"
                name="subcategoryId"
                value={formData.subcategoryId}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Select a subcategory</option>
                {subcategories.map(sub => (
                  <option key={sub.id} value={sub.id}>
                    {sub.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Service Type */}
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
              Service Type *
            </label>
            {serviceTypes.length > 0 ? (
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Select service type</option>
                {serviceTypes.map(st => (
                  <option key={st} value={st}>
                    {st.charAt(0).toUpperCase() + st.slice(1)}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                placeholder="e.g., water heater replacement, brake pads, root canal"
                className="input-field"
                required
              />
            )}
          </div>

          {/* Unit/Area/Quantity - shows when subcategory has unitConfig */}
          {unitConfig && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <label htmlFor="units" className="block text-sm font-medium text-blue-800 mb-2">
                📐 {unitConfig.label} *
              </label>
              {unitConfig.options ? (
                <select
                  id="units"
                  name="units"
                  value={formData.units}
                  onChange={handleChange}
                  className="input-field"
                  required
                >
                  <option value="">Select {unitConfig.label.toLowerCase()}</option>
                  {unitConfig.options.map(opt => (
                    <option key={opt} value={opt}>
                      {opt} {unitConfig.unit}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="number"
                  id="units"
                  name="units"
                  value={formData.units}
                  onChange={handleChange}
                  placeholder={unitConfig.placeholder}
                  className="input-field"
                  min="1"
                  step="any"
                  required
                />
              )}
              <p className="text-xs text-blue-600 mt-2">
                This helps calculate accurate per-{unitConfig.unit} pricing for others
              </p>
            </div>
          )}

          {/* ZIP Code */}
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
              ZIP/PIN Code *
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value.replace(/\D/g, '').slice(0, 6) }))}
              placeholder="e.g., 90210 or 110001"
              className="input-field"
              pattern="\d{5,6}"
              maxLength={6}
              required
            />
          </div>

          {/* Price Paid */}
          <div>
            <label htmlFor="pricePaid" className="block text-sm font-medium text-gray-700 mb-1">
              Total Amount Paid *
              <span className="text-gray-400 ml-1">(in local currency)</span>
            </label>
            <input
              type="number"
              id="pricePaid"
              name="pricePaid"
              value={formData.pricePaid}
              onChange={handleChange}
              placeholder="e.g., 1400 or 8500"
              className="input-field"
              min="1"
              step="0.01"
              required
            />
            {/* Per-unit calculation display */}
            {perUnitPrice && unitConfig && (
              <p className="text-sm text-blue-600 mt-1 font-medium">
                = {formData.zipCode.length === 6 ? '₹' : '$'}{parseInt(perUnitPrice).toLocaleString()} per {unitConfig.unit}
              </p>
            )}
          </div>

          {/* Company Name (Optional) */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g., Quick Plumb Pro, Urban Company"
              className="input-field"
            />
          </div>

          {/* Job Description (Optional) */}
          <div>
            <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Brief Job Description <span className="text-gray-400">(optional)</span>
            </label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              placeholder="e.g., 1.5 ton split AC, deep cleaning with gas refill"
              className="input-field min-h-[80px] resize-y"
              rows={3}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                Submitting...
              </span>
            ) : (
              'Submit Price (+10 Trust Points)'
            )}
          </button>
        </form>
      )}

      {/* Tier Benefits Info */}
      <div className="mt-8 card bg-gray-50 border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-3">🏆 Trust Points & Tiers</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3 p-2 rounded bg-white border border-gray-100">
            <span>🌱</span>
            <div className="flex-1">
              <span className="font-medium">New Member</span> — 0 pts
            </div>
            <span className="text-xs text-gray-500">Basic price lookups</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded bg-white border border-gray-100">
            <span>⭐</span>
            <div className="flex-1">
              <span className="font-medium">Contributor</span> — 10+ pts
            </div>
            <span className="text-xs text-gray-500">+ Contractor names</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded bg-white border border-gray-100">
            <span>🏅</span>
            <div className="flex-1">
              <span className="font-medium">Trusted</span> — 50+ pts
            </div>
            <span className="text-xs text-gray-500">+ Full breakdown & per-unit data</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded bg-white border border-gray-100">
            <span>💎</span>
            <div className="flex-1">
              <span className="font-medium">Power</span> — 100+ pts
            </div>
            <span className="text-xs text-gray-500">+ Price alerts & history</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded bg-white border border-gray-100">
            <span>👑</span>
            <div className="flex-1">
              <span className="font-medium">Moderator</span> — 200+ pts
            </div>
            <span className="text-xs text-gray-500">+ Flag data & moderate</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
