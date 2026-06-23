'use client';

import { useState } from 'react';
import { categories } from '@/data/categories';

export default function ContractorsPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    categoryId: '',
    serviceAreas: '',
    zipCodes: '',
    description: '',
    website: '',
    experience: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contractors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Grow Your Business with FairPrice
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get connected with customers who need your services. Receive qualified leads directly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
              <div className="text-3xl mb-2">📊</div>
              <p className="text-sm font-medium">Qualified Leads</p>
              <p className="text-xs text-blue-200">Customers ready to hire</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
              <div className="text-3xl mb-2">⭐</div>
              <p className="text-sm font-medium">Build Reputation</p>
              <p className="text-xs text-blue-200">Fairness score visible to all</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
              <div className="text-3xl mb-2">💰</div>
              <p className="text-sm font-medium">Pay Per Lead</p>
              <p className="text-xs text-blue-200">Only pay for actual leads</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-medium text-sm">Register</h3>
              <p className="text-xs text-gray-500">Fill the form below</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-medium text-sm">Get Verified</h3>
              <p className="text-xs text-gray-500">We verify your business</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-medium text-sm">Receive Leads</h3>
              <p className="text-xs text-gray-500">Customers contact you</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-emerald-600">4</span>
              </div>
              <h3 className="font-medium text-sm">Grow Revenue</h3>
              <p className="text-xs text-gray-500">Win more customers</p>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        {success ? (
          <div className="card text-center py-12 bg-emerald-50 border-emerald-200">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-emerald-800 mb-2">Registration Submitted!</h2>
            <p className="text-emerald-700 mb-4">
              Thank you for registering! Our team will verify your business and contact you within 48 hours.
            </p>
            <p className="text-sm text-emerald-600">
              Once approved, you&apos;ll start receiving qualified leads from customers in your area.
            </p>
          </div>
        ) : (
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Register Your Business</h2>
            <p className="text-gray-600 text-sm mb-6">Fill in your details to start receiving customer leads.</p>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g., Quick Plumb Pro"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name *</label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="business@email.com"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Category *</label>
                  <select
                    name="categoryId"
                    value={formData.categoryId}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select category</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select</option>
                    <option value="1-2">1-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Areas / ZIP-PIN Codes *</label>
                <input
                  type="text"
                  name="zipCodes"
                  value={formData.zipCodes}
                  onChange={handleChange}
                  placeholder="e.g., 110001, 110002, 110003 (comma-separated)"
                  className="input-field"
                  required
                />
                <p className="text-xs text-gray-400 mt-1">Enter the ZIP/PIN codes where you provide services</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">About Your Business</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell customers about your services, specializations, certifications..."
                  className="input-field min-h-[100px] resize-y"
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website (optional)</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://www.yourbusiness.com"
                  className="input-field"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Register as Service Provider'}
              </button>

              <p className="text-xs text-gray-400 text-center">
                By registering, you agree to receive leads from FairPrice. No upfront cost — pay only for qualified leads.
              </p>
            </form>
          </div>
        )}

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="card">
              <h3 className="font-medium text-gray-900">How much does it cost?</h3>
              <p className="text-sm text-gray-600 mt-1">Registration is free. You only pay when you receive a qualified lead. Pricing varies by category (typically ₹50-500 per lead).</p>
            </div>
            <div className="card">
              <h3 className="font-medium text-gray-900">What kind of leads will I receive?</h3>
              <p className="text-sm text-gray-600 mt-1">You&apos;ll receive leads from customers who searched for your service in your area and clicked &quot;Get 3 Free Quotes&quot;. These are high-intent customers ready to hire.</p>
            </div>
            <div className="card">
              <h3 className="font-medium text-gray-900">How is my fairness score calculated?</h3>
              <p className="text-sm text-gray-600 mt-1">When customers report what they paid, we compare your prices to the area average. Contractors with fair pricing get higher visibility and more leads.</p>
            </div>
            <div className="card">
              <h3 className="font-medium text-gray-900">Can I pause receiving leads?</h3>
              <p className="text-sm text-gray-600 mt-1">Yes, you can pause or deactivate your profile anytime. Contact us at satya.bit123@gmail.com.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
