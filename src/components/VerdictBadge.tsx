'use client';

import { VerdictType, CurrencyInfo } from '@/lib/types';

interface VerdictBadgeProps {
  verdict: VerdictType;
  quote: number;
  average: number;
  currency: CurrencyInfo;
}

export default function VerdictBadge({ verdict, quote, average, currency }: VerdictBadgeProps) {
  const config = {
    FAIR: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-800',
      icon: '🟢',
      label: 'FAIR',
      description: 'Your quote is within the normal range',
    },
    A_BIT_HIGH: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-800',
      icon: '🟡',
      label: 'A BIT HIGH',
      description: 'You might want to get a second quote',
    },
    OVERPRICED: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: '🔴',
      label: 'OVERPRICED',
      description: 'Most people paid significantly less',
    },
  };

  const c = config[verdict];
  const diff = quote - average;
  const percentage = Math.round((diff / average) * 100);

  const formatPrice = (amount: number) => {
    return `${currency.symbol}${amount.toLocaleString(currency.locale)}`;
  };

  return (
    <div className={`${c.bg} ${c.border} border-2 rounded-xl p-6 text-center`}>
      <div className="text-4xl mb-2">{c.icon}</div>
      <h3 className={`text-2xl font-bold ${c.text} mb-1`}>{c.label}</h3>
      <p className={`${c.text} text-sm mb-3`}>{c.description}</p>
      <div className="text-gray-600 text-sm">
        Your quote: <span className="font-bold">{formatPrice(quote)}</span>
        {diff > 0 && (
          <span className="ml-2 text-red-600">(+{percentage}% above average)</span>
        )}
        {diff < 0 && (
          <span className="ml-2 text-emerald-600">({percentage}% below average)</span>
        )}
        {diff === 0 && (
          <span className="ml-2 text-gray-500">(exactly at average)</span>
        )}
      </div>
    </div>
  );
}
