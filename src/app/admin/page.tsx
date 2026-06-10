'use client';

import { useState, useEffect } from 'react';

interface Stats {
  submissions: number;
  users: number;
  leads: number;
  alerts: number;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState('submissions');
  const [stats, setStats] = useState<Stats | null>(null);
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 20, total: 0, totalPages: 0 });
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  // Check saved password
  useEffect(() => {
    const saved = localStorage.getItem('fairprice_admin_pw');
    if (saved) {
      setPassword(saved);
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (authenticated) {
      fetchData(activeTab, 1, '');
    }
  }, [authenticated, activeTab]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    // Test the password by making a request
    try {
      const res = await fetch(`/api/admin?tab=submissions&page=1&limit=1`, {
        headers: { 'x-admin-password': password },
      });
      if (res.ok) {
        setAuthenticated(true);
        localStorage.setItem('fairprice_admin_pw', password);
      } else {
        setAuthError('Invalid password');
      }
    } catch {
      setAuthError('Connection error');
    }
  };

  const fetchData = async (tab: string, page: number, searchQuery: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ tab, page: String(page), limit: '20' });
      if (searchQuery) params.set('search', searchQuery);

      const res = await fetch(`/api/admin?${params.toString()}`, {
        headers: { 'x-admin-password': password },
      });
      const result = await res.json();

      if (result.error) {
        if (result.error === 'Unauthorized') {
          setAuthenticated(false);
          localStorage.removeItem('fairprice_admin_pw');
        }
        return;
      }

      setStats(result.stats);
      setData(result.data);
      setPagination(result.pagination);
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(activeTab, 1, search);
  };

  const handleDelete = async (tab: string, id: string) => {
    if (!confirm('Are you sure you want to delete this record?')) return;

    try {
      const res = await fetch(`/api/admin?tab=${tab}&id=${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-password': password },
      });
      if (res.ok) {
        fetchData(activeTab, pagination.page, search);
      }
    } catch {
      // silent
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setPassword('');
    localStorage.removeItem('fairprice_admin_pw');
  };

  // Login Page
  if (!authenticated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="card max-w-sm w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">🔐 Admin Dashboard</h1>
          <p className="text-gray-500 text-sm text-center mb-6">Enter admin password to continue</p>
          {authError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm mb-4">
              {authError}
            </div>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
            <button type="submit" className="btn-primary w-full">Login</button>
          </form>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  // Bulk import state
  const [csvText, setCsvText] = useState('');
  const [importing, setImporting] = useState(false);
  const [importResult, setImportResult] = useState<{ success?: number; errors?: string[] } | null>(null);

  const handleBulkImport = async () => {
    if (!csvText.trim()) return;
    setImporting(true);
    setImportResult(null);

    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': password,
        },
        body: JSON.stringify({ csv: csvText }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error);
      setImportResult({ success: result.imported, errors: result.errors || [] });
      if (result.imported > 0) {
        setCsvText('');
        fetchData('submissions', 1, '');
      }
    } catch (err) {
      setImportResult({ success: 0, errors: [err instanceof Error ? err.message : 'Import failed'] });
    } finally {
      setImporting(false);
    }
  };

  const tabs = [
    { id: 'submissions', label: '📝 Submissions', count: stats?.submissions },
    { id: 'users', label: '👥 Users', count: stats?.users },
    { id: 'leads', label: '📊 Leads', count: stats?.leads },
    { id: 'alerts', label: '🔔 Alerts', count: stats?.alerts },
    { id: 'import', label: '📥 Bulk Import', count: undefined },
  ];

  const getColumns = (tab: string): string[] => {
    switch (tab) {
      case 'submissions': return ['service_type', 'category_id', 'zip_code', 'price_paid', 'units', 'company_name', 'submitted_at'];
      case 'users': return ['email', 'trust_points', 'submissions_count', 'tier', 'created_at'];
      case 'leads': return ['name', 'email', 'phone', 'service_type', 'zip_code', 'status', 'created_at'];
      case 'alerts': return ['email', 'service_type', 'zip_code', 'target_price', 'frequency', 'active', 'created_at'];
      default: return [];
    }
  };

  const formatValue = (key: string, value: unknown): string => {
    if (value === null || value === undefined) return '—';
    if (key === 'created_at' || key === 'submitted_at') {
      return new Date(String(value)).toLocaleDateString();
    }
    if (key === 'price_paid' || key === 'target_price') {
      return Number(value).toLocaleString();
    }
    if (key === 'active') return value ? '✅' : '❌';
    return String(value);
  };

  return (
    <div>
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-bold">🔐 Admin Dashboard</h1>
          <button onClick={handleLogout} className="text-sm text-gray-400 hover:text-white">
            Logout
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.submissions}</div>
              <div className="text-sm text-gray-500">Submissions</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold text-emerald-600">{stats.users}</div>
              <div className="text-sm text-gray-500">Users</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.leads}</div>
              <div className="text-sm text-gray-500">Leads</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold text-amber-600">{stats.alerts}</div>
              <div className="text-sm text-gray-500">Alerts</div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setSearch(''); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label} {tab.count !== undefined && <span className="ml-1 opacity-75">({tab.count})</span>}
            </button>
          ))}
        </div>

        {/* Search */}
        {activeTab !== 'import' && (
        <form onSubmit={handleSearch} className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field flex-1"
          />
          <button type="submit" className="btn-primary !py-2 !px-4 text-sm">Search</button>
          {search && (
            <button
              type="button"
              onClick={() => { setSearch(''); fetchData(activeTab, 1, ''); }}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear
            </button>
          )}
        </form>
        )}

        {/* Bulk Import Panel */}
        {activeTab === 'import' && (
          <div className="card mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">📥 Bulk CSV Import</h3>
            <p className="text-sm text-gray-600 mb-4">
              Paste CSV data below to bulk-import price submissions. First row must be headers.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-xs font-medium text-gray-700 mb-2">Required CSV format (copy this as your first row):</p>
              <code className="text-xs bg-white px-3 py-2 rounded border block overflow-x-auto">
                service_type,category_id,zip_code,price_paid,units,unit_type,company_name,job_description
              </code>
              <p className="text-xs text-gray-500 mt-2">
                <strong>Required:</strong> service_type, category_id, zip_code, price_paid<br />
                <strong>Optional:</strong> units, unit_type, company_name, job_description
              </p>
              <div className="mt-3">
                <p className="text-xs font-medium text-gray-700 mb-1">Example rows:</p>
                <pre className="text-xs bg-white px-3 py-2 rounded border overflow-x-auto whitespace-pre-wrap">
{`service_type,category_id,zip_code,price_paid,units,unit_type,company_name,job_description
ac service,hvac,110001,1500,1,ACs,Urban Company,Split AC deep cleaning 1.5 ton
modular kitchen,interior-design,110001,180000,80,sq ft,HomeLane,L-shape modular kitchen acrylic finish
root canal,dental,560001,9000,1,teeth,Clove Dental,Molar root canal without crown
house painting,home-exterior,400001,55000,1200,sq ft,Asian Paints,3BHK interior premium finish`}
                </pre>
              </div>
              <div className="mt-3">
                <p className="text-xs font-medium text-gray-700 mb-1">Valid category_id values:</p>
                <p className="text-xs text-gray-500">
                  plumbing, electrical, auto-repair, home-exterior, landscaping, dental, moving, hvac, appliance-repair, pest-control, cleaning, home-security, carpentry, interior-design
                </p>
              </div>
            </div>

            <textarea
              value={csvText}
              onChange={(e) => setCsvText(e.target.value)}
              placeholder="Paste your CSV data here (include header row)..."
              className="input-field font-mono text-xs min-h-[200px] resize-y"
              rows={10}
            />

            {importResult && (
              <div className={`mt-4 p-4 rounded-lg ${importResult.success ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'}`}>
                {importResult.success !== undefined && importResult.success > 0 && (
                  <p className="text-emerald-700 font-medium">✅ Successfully imported {importResult.success} rows!</p>
                )}
                {importResult.errors && importResult.errors.length > 0 && (
                  <div className="mt-2">
                    <p className="text-red-700 font-medium text-sm">Errors ({importResult.errors.length}):</p>
                    <ul className="text-xs text-red-600 mt-1 max-h-[150px] overflow-y-auto space-y-1">
                      {importResult.errors.slice(0, 20).map((err, i) => (
                        <li key={i}>Row {i + 2}: {err}</li>
                      ))}
                      {importResult.errors.length > 20 && (
                        <li>...and {importResult.errors.length - 20} more errors</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <button
              onClick={handleBulkImport}
              disabled={importing || !csvText.trim()}
              className="btn-primary mt-4 disabled:opacity-50"
            >
              {importing ? 'Importing...' : `Import CSV Data`}
            </button>
          </div>
        )}

        {/* Data Table */}
        {activeTab !== 'import' && (loading ? (
          <div className="text-center py-12 text-gray-500">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  {getColumns(activeTab).map(col => (
                    <th key={col} className="text-left py-3 px-3 font-medium text-gray-600 whitespace-nowrap">
                      {col.replace(/_/g, ' ')}
                    </th>
                  ))}
                  <th className="text-right py-3 px-3 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    {getColumns(activeTab).map(col => (
                      <td key={col} className="py-3 px-3 text-gray-700 max-w-[200px] truncate">
                        {formatValue(col, row[col])}
                      </td>
                    ))}
                    <td className="py-3 px-3 text-right">
                      {activeTab !== 'users' && (
                        <button
                          onClick={() => handleDelete(activeTab, row.id as string)}
                          className="text-red-500 hover:text-red-700 text-xs font-medium"
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
                {data.length === 0 && (
                  <tr>
                    <td colSpan={getColumns(activeTab).length + 1} className="text-center py-8 text-gray-500">
                      No records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ))}

        {/* Pagination */}
        {activeTab !== 'import' && pagination.totalPages > 1 && (
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-500">
              Showing {((pagination.page - 1) * pagination.limit) + 1}–{Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => fetchData(activeTab, pagination.page - 1, search)}
                disabled={pagination.page <= 1}
                className="px-3 py-1 text-sm border rounded disabled:opacity-50 hover:bg-gray-50"
              >
                Prev
              </button>
              <button
                onClick={() => fetchData(activeTab, pagination.page + 1, search)}
                disabled={pagination.page >= pagination.totalPages}
                className="px-3 py-1 text-sm border rounded disabled:opacity-50 hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
