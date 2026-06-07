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
            className="input-field"
            required
          />
        </div>
        <div className="w-full md:w-36">
          <input
            type="text"
            placeholder="ZIP Code"
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
            className="input-field"
            pattern="\d{5}"
            maxLength={5}
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
              className="input-field"
              min="0"
              step="0.01"
            />
          </div>
        )}
        <button type="submit" className="btn-primary whitespace-nowrap">
          Check Price
        </button>
      </div>
    </form>
  );
}
