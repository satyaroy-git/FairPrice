'use client';

import { useState, useEffect } from 'react';
import { categories, SubCategory, UnitConfig } from '@/data/categories';

export default function SubmitPage() {
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
  const [trustPoints, setTrustPoints] = useState(0);

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
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      setSuccess(true);
      setTrustPoints(prev => prev + 10);
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

  // Calculate per-unit price for display
  const perUnitPrice = formData.pricePaid && formData.units
    ? (parseFloat(formData.pricePaid) / parseFloat(formData.units)).toFixed(0)
    : null;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit a Price</h1>
      <p className="text-gray-600 mb-8">
        Help others get fair prices by sharing what you paid. All submissions are anonymous.
      </p>

      {trustPoints > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-center gap-3">
          <span className="text-2xl">⭐</span>
          <div>
            <span className="font-semibold text-amber-800">Trust Points: {trustPoints}</span>
            <p className="text-amber-700 text-sm">Thank you for contributing to the community!</p>
          </div>
        </div>
      )}

      {success && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6 text-center">
          <div className="text-4xl mb-2">🎉</div>
          <h3 className="text-lg font-semibold text-emerald-800">Submitted Successfully!</h3>
          <p className="text-emerald-700 text-sm mt-1">
            You earned 10 trust points. Your data helps the community get fair prices.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="btn-primary mt-4 text-sm !py-2 !px-4"
          >
            Submit Another
          </button>
        </div>
      )}

      {!success && (
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

      {/* Info Section */}
      <div className="mt-8 card bg-gray-50 border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-3">Why Submit?</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-emerald-500 mt-0.5">✓</span>
            <span>Help others avoid getting overcharged</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-500 mt-0.5">✓</span>
            <span>All submissions are completely anonymous</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-500 mt-0.5">✓</span>
            <span>Earn trust points for contributing to the community</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-500 mt-0.5">✓</span>
            <span>More data = more accurate prices for everyone</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
