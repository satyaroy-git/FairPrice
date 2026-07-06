'use client';

import { useState, useEffect } from 'react';
import { categories } from '@/data/categories';

interface Alert {
  id: string;
  email: string;
  service_type: string;
  category_id: string | null;
  zip_code: string;
  target_price: number | null;
  frequency: string;
  active: boolean;
  created_at: string;
}

export default function AlertsPage() {
  const [email, setEmail] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // New alert form
  const [newAlert, setNewAlert] = useState({
    serviceType: '',
    categoryId: '',
    zipCode: '',
    targetPrice: '',
    frequency: 'weekly',
  });

  useEffect(() => {
    const savedEmail = localStorage.getItem('fairprice_email');
    if (savedEmail) {
      setEmail(savedEmail);
      setEmailVerified(true);
      fetchAlerts(savedEmail);
    }
  }, []);

  const fetchAlerts = async (userEmail: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/alerts?email=${encodeURIComponent(userEmail)}`);
      const data = await res.json();
      setAlerts(data.alerts || []);
    } catch {
      setAlerts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      const normalized = email.toLowerCase().trim();
      localStorage.setItem('fairprice_email', normalized);
      setEmailVerified(true);
      fetchAlerts(normalized);
    }
  };

  const handleCreateAlert = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/alerts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          serviceType: newAlert.serviceType,
          categoryId: newAlert.categoryId || undefined,
          zipCode: newAlert.zipCode,
          targetPrice: newAlert.targetPrice ? parseFloat(newAlert.targetPrice) : undefined,
          frequency: newAlert.frequency,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setSuccess(data.message);
      setNewAlert({ serviceType: '', categoryId: '', zipCode: '', targetPrice: '', frequency: 'weekly' });
      fetchAlerts(email.toLowerCase().trim());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create alert');
    } finally {
      setCreating(false);
    }
  };

  const handleDeleteAlert = async (alertId: string) => {
    try {
      await fetch(`/api/alerts?id=${alertId}`, { method: 'DELETE' });
      setAlerts(prev => prev.filter(a => a.id !== alertId));
    } catch {
      setError('Failed to delete alert');
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">🔔 Price Alerts</h1>
          <p className="text-blue-100">Get notified when prices drop for services in your area.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Email Entry */}
        {!emailVerified ? (
          <div className="card border-blue-200 bg-blue-50 mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">Enter your email to manage alerts</h3>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field flex-1"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">Continue</button>
            </form>
          </div>
        ) : (
          <>
            {/* Create New Alert */}
            <div className="card mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Alert</h3>

              {success && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-emerald-700 text-sm mb-4">
                  {success}
                </div>
              )}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleCreateAlert} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
                    <input
                      type="text"
                      value={newAlert.serviceType}
                      onChange={(e) => setNewAlert(prev => ({ ...prev, serviceType: e.target.value }))}
                      placeholder="e.g., ac service, root canal"
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ZIP/PIN Code *</label>
                    <input
                      type="text"
                      value={newAlert.zipCode}
                      onChange={(e) => setNewAlert(prev => ({ ...prev, zipCode: e.target.value.replace(/\D/g, '').slice(0, 6) }))}
                      placeholder="e.g., 110001"
                      className="input-field"
                      pattern="\d{5,6}"
                      maxLength={6}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category (optional)</label>
                    <select
                      value={newAlert.categoryId}
                      onChange={(e) => setNewAlert(prev => ({ ...prev, categoryId: e.target.value }))}
                      className="input-field"
                    >
                      <option value="">Any category</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notify me if price drops below</label>
                    <input
                      type="number"
                      value={newAlert.targetPrice}
                      onChange={(e) => setNewAlert(prev => ({ ...prev, targetPrice: e.target.value }))}
                      placeholder="Optional (e.g., 5000)"
                      className="input-field"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
                    <select
                      value={newAlert.frequency}
                      onChange={(e) => setNewAlert(prev => ({ ...prev, frequency: e.target.value }))}
                      className="input-field"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                </div>
                <button type="submit" disabled={creating} className="btn-primary disabled:opacity-50">
                  {creating ? 'Setting Alert...' : '🔔 Set Price Alert'}
                </button>
              </form>
            </div>

            {/* Active Alerts */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Your Active Alerts ({alerts.length})
              </h3>

              {loading ? (
                <p className="text-gray-500 text-center py-8">Loading alerts...</p>
              ) : alerts.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <span className="text-4xl block mb-2">🔕</span>
                  <p>No alerts set yet. Create one above to get notified when prices change.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {alerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div>
                        <p className="font-medium text-gray-900 capitalize">{alert.service_type}</p>
                        <p className="text-sm text-gray-500">
                          {alert.zip_code.length === 6 ? 'PIN' : 'ZIP'} {alert.zip_code}
                          {alert.target_price && <span> • Below {alert.zip_code.length === 6 ? '₹' : '$'}{Number(alert.target_price).toLocaleString()}</span>}
                          <span> • {alert.frequency}</span>
                        </p>
                      </div>
                      <button
                        onClick={() => handleDeleteAlert(alert.id)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
