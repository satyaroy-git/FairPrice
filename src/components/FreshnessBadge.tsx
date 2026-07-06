'use client';

import { DataFreshness } from '@/lib/types';

interface FreshnessBadgeProps {
  dataFreshness: DataFreshness;
}

/**
 * Displays a visual badge indicating how fresh/stale the price data is.
 * Encourages users to submit prices when data is aging or stale.
 */
export default function FreshnessBadge({ dataFreshness }: FreshnessBadgeProps) {
  const { status, lastUpdated, freshness, totalSubmissions, staleCount } = dataFreshness;

  const config = {
    fresh: {
      icon: '🟢',
      label: 'Fresh Data',
      description: 'Prices are based on recent reports (within 3 months)',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-700',
      badgeColor: 'bg-emerald-100 text-emerald-800',
    },
    recent: {
      icon: '🟡',
      label: 'Recent Data',
      description: 'Prices are from the last 3-6 months — still reliable',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-700',
      badgeColor: 'bg-yellow-100 text-yellow-800',
    },
    aging: {
      icon: '🟠',
      label: 'Aging Data',
      description: 'Most recent data is 6-12 months old — prices may have changed',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-700',
      badgeColor: 'bg-orange-100 text-orange-800',
    },
    stale: {
      icon: '🔴',
      label: 'Stale Data',
      description: 'Data is over 12 months old — consider these as rough estimates only',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-700',
      badgeColor: 'bg-red-100 text-red-800',
    },
  };

  const { icon, label, description, bgColor, borderColor, textColor, badgeColor } = config[status];

  // Format "last updated" as relative time
  const getRelativeTime = (isoDate: string): string => {
    const now = new Date();
    const then = new Date(isoDate);
    const diffMs = now.getTime() - then.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'today';
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  return (
    <div className={`rounded-lg border ${borderColor} ${bgColor} p-4`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <div>
            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${badgeColor}`}>
              {label}
            </span>
            <p className={`text-sm mt-1 ${textColor}`}>{description}</p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
        {lastUpdated && (
          <span>Last report: <strong>{getRelativeTime(lastUpdated)}</strong></span>
        )}
        <span>Data points: <strong>{totalSubmissions}</strong></span>
        <span>Freshness score: <strong>{freshness}%</strong></span>
        {staleCount > 0 && (
          <span className="text-orange-600">({staleCount} stale entries excluded from weighting)</span>
        )}
      </div>

      {/* CTA for aging/stale data */}
      {(status === 'aging' || status === 'stale') && (
        <div className="mt-3 pt-3 border-t border-dashed border-gray-300">
          <p className="text-sm text-gray-700">
            <strong>Help improve accuracy!</strong> If you&apos;ve recently paid for this service,{' '}
            <a href="/submit" className="text-blue-600 hover:underline font-medium">
              submit your price
            </a>{' '}
            to keep data fresh for your community.
          </p>
        </div>
      )}
    </div>
  );
}
