'use client';

import { CurrencyInfo } from '@/lib/types';

interface PricePoint {
  month: string;
  average: number;
  count: number;
}

interface PriceHistoryChartProps {
  data: PricePoint[];
  currency: CurrencyInfo;
  serviceType: string;
}

export default function PriceHistoryChart({ data, currency, serviceType }: PriceHistoryChartProps) {
  if (!data || data.length < 2) return null;

  const formatPrice = (amount: number) => `${currency.symbol}${amount.toLocaleString(currency.locale)}`;

  const maxPrice = Math.max(...data.map(d => d.average));
  const minPrice = Math.min(...data.map(d => d.average));
  const range = maxPrice - minPrice || 1;

  // Calculate trend
  const firstAvg = data[0].average;
  const lastAvg = data[data.length - 1].average;
  const trend = ((lastAvg - firstAvg) / firstAvg) * 100;
  const trendLabel = trend > 2 ? '📈 Rising' : trend < -2 ? '📉 Falling' : '➡️ Stable';
  const trendColor = trend > 2 ? 'text-red-600' : trend < -2 ? 'text-emerald-600' : 'text-gray-600';

  return (
    <div className="card">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">📈 Price History</h3>
          <p className="text-sm text-gray-500 capitalize">{serviceType} — Last {data.length} months</p>
        </div>
        <div className={`text-sm font-medium ${trendColor} bg-gray-50 px-3 py-1 rounded-full`}>
          {trendLabel} ({trend > 0 ? '+' : ''}{trend.toFixed(1)}%)
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-48 flex items-end gap-1 sm:gap-2 px-2">
        {data.map((point, index) => {
          const height = ((point.average - minPrice) / range) * 100;
          const barHeight = Math.max(height, 8); // minimum 8% height for visibility

          return (
            <div key={index} className="flex-1 flex flex-col items-center group relative">
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 hidden group-hover:block z-10">
                <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
                  <p className="font-medium">{formatPrice(point.average)}</p>
                  <p className="text-gray-300">{point.count} reports</p>
                </div>
              </div>
              {/* Bar */}
              <div
                className="w-full bg-blue-500 hover:bg-blue-600 rounded-t-sm transition-all cursor-pointer min-h-[4px]"
                style={{ height: `${barHeight}%` }}
              />
              {/* Month label */}
              <span className="text-xs text-gray-400 mt-2 truncate w-full text-center">
                {point.month}
              </span>
            </div>
          );
        })}
      </div>

      {/* Y-axis labels */}
      <div className="flex justify-between mt-3 text-xs text-gray-400 px-2">
        <span>{formatPrice(minPrice)}</span>
        <span>{formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
}
