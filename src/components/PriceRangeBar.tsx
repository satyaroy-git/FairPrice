'use client';

import { CurrencyInfo } from '@/lib/types';

interface PriceRangeBarProps {
  low: number;
  average: number;
  high: number;
  userQuote?: number;
  currency: CurrencyInfo;
}

export default function PriceRangeBar({ low, average, high, userQuote, currency }: PriceRangeBarProps) {
  const range = high - low;
  const avgPosition = range > 0 ? ((average - low) / range) * 100 : 50;
  const quotePosition = userQuote && range > 0 
    ? Math.min(100, Math.max(0, ((userQuote - low) / range) * 100))
    : undefined;

  const formatPrice = (amount: number) => {
    return `${currency.symbol}${amount.toLocaleString(currency.locale)}`;
  };

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <span>Low</span>
        <span>Average</span>
        <span>High</span>
      </div>
      <div className="relative h-4 bg-gradient-to-r from-emerald-200 via-amber-200 to-red-200 rounded-full overflow-visible">
        {/* Average marker */}
        <div
          className="absolute top-0 h-4 w-0.5 bg-gray-700"
          style={{ left: `${avgPosition}%` }}
        />
        {/* User quote marker */}
        {quotePosition !== undefined && (
          <div
            className="absolute -top-1 h-6 w-1 bg-blue-600 rounded-full shadow-md"
            style={{ left: `${quotePosition}%` }}
          >
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap">
              Your quote
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between text-lg font-bold mt-2">
        <span className="text-emerald-600">{formatPrice(low)}</span>
        <span className="text-gray-700">{formatPrice(average)}</span>
        <span className="text-red-600">{formatPrice(high)}</span>
      </div>
    </div>
  );
}
