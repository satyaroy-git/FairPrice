'use client';

import { useState, useEffect } from 'react';
import { categories, SubCategory, UnitConfig } from '@/data/categories';

interface SearchBarProps {
  onSearch: (service: string, zip: string, quote?: number, units?: number) => void;
  showQuoteField?: boolean;
  initialService?: string;
}

export default function SearchBar({ onSearch, showQuoteField = true, initialService = '' }: SearchBarProps) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [service, setService] = useState(initialService);
  const [zip, setZip] = useState('');
  const [quote, setQuote] = useState('');
  const [units, setUnits] = useState('');
  const [subcategories, setSubcategories] = useState<SubCategory[]>([]);
  const [serviceTypes, setServiceTypes] = useState<string[]>([]);
  const [unitConfig, setUnitConfig] = useState<UnitConfig | null>(null);

  useEffect(() => {
    if (selectedCategory) {
      const cat = categories.find(c => c.id === selectedCategory);
      setSubcategories(cat?.subcategories || []);
      setSelectedSubcategory('');
      setService('');
      setServiceTypes([]);
      setUnitConfig(null);
      setUnits('');
    } else {
      setSubcategories([]);
      setSelectedSubcategory('');
      setServiceTypes([]);
      setUnitConfig(null);
      setUnits('');
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedSubcategory && selectedCategory) {
      const cat = categories.find(c => c.id === selectedCategory);
      const sub = cat?.subcategories.find(s => s.id === selectedSubcategory);
      setServiceTypes(sub?.serviceTypes || []);
      setUnitConfig(sub?.unitConfig || null);
      setUnits('');
      if (sub?.serviceTypes && sub.serviceTypes.length > 0) {
        setService(sub.serviceTypes[0]);
      }
    } else {
      setServiceTypes([]);
      setUnitConfig(null);
      setUnits('');
    }
  }, [selectedSubcategory, selectedCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!service.trim() || !zip.trim()) return;
    onSearch(
      service.trim(),
      zip.trim(),
      quote ? parseFloat(quote) : undefined,
      units ? parseFloat(units) : undefined
    );
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-3">
        {/* Row 1: Category and Subcategory dropdowns */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 bg-white"
            >
              <option value="">Select Category</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 bg-white disabled:bg-gray-100 disabled:text-gray-400"
              disabled={!selectedCategory}
            >
              <option value="">Select Subcategory</option>
              {subcategories.map(sub => (
                <option key={sub.id} value={sub.id}>
                  {sub.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 2: Service type + Unit/Area (if applicable) */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            {serviceTypes.length > 0 ? (
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 bg-white"
                required
              >
                <option value="">Select Service Type</option>
                {serviceTypes.map(st => (
                  <option key={st} value={st}>
                    {st.charAt(0).toUpperCase() + st.slice(1)}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                placeholder="What service? (e.g., water heater installation)"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 bg-white placeholder-gray-400"
                required
              />
            )}
          </div>
          {/* Unit/Area field - shows only when subcategory has unitConfig */}
          {unitConfig && (
            <div className="w-full md:w-44">
              {unitConfig.options ? (
                <select
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 bg-white"
                >
                  <option value="">{unitConfig.label}</option>
                  {unitConfig.options.map(opt => (
                    <option key={opt} value={opt}>
                      {opt} {unitConfig.unit}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="number"
                  placeholder={unitConfig.label}
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 bg-white placeholder-gray-400"
                  min="1"
                  step="any"
                />
              )}
            </div>
          )}
        </div>

        {/* Row 3: ZIP, Quote, Button */}
        <div className="flex flex-col md:flex-row gap-3">
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
                placeholder="Your quote (amount)"
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
      </div>
    </form>
  );
}
