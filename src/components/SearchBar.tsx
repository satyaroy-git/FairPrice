'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (service: string, zip: string, quote?: number) => void;
  showQuoteField?: boolean;
  initialService?: string;
}

export default function SearchBar({ onSearch, showQuoteField = true, initialService = '' }: SearchBarProps) {
  const [service, setService] = useState(initialService);
  const [zip, setZip] = useState('');
  const [quote, setQuote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!service.trim() || !zip.trim()) return;
    onSearch(service.trim(), zip.trim(), quote ? parseFloat(quote) : undefined);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <input
            type="text"
            placeholder="What service? (e.g., water heater replacement)"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 bg-white placeholder-gray-400"
            required
          />
        </div>
        <div className="w-full md:w-36">
          <input
            type="text"
            placeholder="PIN/ZIP Code"
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 6))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 bg-white placeholder-gray-400"
            pattern="\d{5,6}"
            maxLength={6}
            required
          />
        </div>
        {showQuoteField && (
          <div className="w-full md:w-40">
            <input
              type="number"
              placeholder="Your quote ($)"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 bg-white placeholder-gray-400"
              min="0"
              step="0.01"
            />
          </div>
        )}
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm whitespace-nowrap">
          Check Price
        </button>
      </div>
    </form>
  );
}
