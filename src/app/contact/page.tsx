'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Simulate form submission (in production, send to API/email service)
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setSending(false);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-emerald-50 rounded-2xl p-12">
          <span className="text-5xl block mb-4">✉️</span>
          <h1 className="text-3xl font-bold mb-4 text-emerald-800">Message Sent!</h1>
          <p className="text-gray-700 text-lg mb-6">
            Thank you for reaching out. We typically respond within 24-48 hours.
          </p>
          <a href="/" className="btn-primary inline-block">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 text-lg mb-10">
        Have a question, feedback, or partnership inquiry? We&apos;d love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Form */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="input-field"
              >
                <option value="general">General Inquiry</option>
                <option value="feedback">Feedback / Suggestion</option>
                <option value="bug">Report a Bug</option>
                <option value="data">Data Correction Request</option>
                <option value="contractor">Contractor Partnership</option>
                <option value="advertising">Advertising Inquiry</option>
                <option value="press">Press / Media</option>
                <option value="privacy">Privacy Concern</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="input-field resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">📧</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <a href="mailto:satya.bit123@gmail.com" className="text-sm text-primary-600 hover:underline">
                    satya.bit123@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🕐</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Response Time</p>
                  <p className="text-sm text-gray-600">Within 24-48 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🌍</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Coverage</p>
                  <p className="text-sm text-gray-600">India &amp; United States</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-3">For Contractors</h3>
            <p className="text-sm text-gray-700 mb-4">
              Want to list your business and get leads from price-conscious customers?
            </p>
            <a href="/contractors" className="text-sm text-primary-600 font-medium hover:underline">
              Learn about Contractor Partnerships →
            </a>
          </div>

          <div className="bg-amber-50 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-3">Advertising</h3>
            <p className="text-sm text-gray-700 mb-4">
              Interested in advertising on FairPrice? We reach thousands of homeowners actively seeking services.
            </p>
            <a href="mailto:satya.bit123@gmail.com" className="text-sm text-amber-700 font-medium hover:underline">
              satya.bit123@gmail.com →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
