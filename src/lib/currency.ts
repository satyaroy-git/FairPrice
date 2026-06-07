export interface CurrencyInfo {
  code: string;
  symbol: string;
  locale: string;
  country: string;
}

/**
 * Detect country and currency based on ZIP/PIN code format
 * - 5 digits: US (USD)
 * - 6 digits: India (INR)
 * Can be extended for other countries
 */
export function detectCurrency(zipCode: string): CurrencyInfo {
  if (zipCode.length === 6) {
    return {
      code: 'INR',
      symbol: '₹',
      locale: 'en-IN',
      country: 'India',
    };
  }

  // Default: US
  return {
    code: 'USD',
    symbol: '$',
    locale: 'en-US',
    country: 'United States',
  };
}

/**
 * Format a price with the correct currency symbol and locale formatting
 */
export function formatPrice(amount: number, currency: CurrencyInfo): string {
  return `${currency.symbol}${amount.toLocaleString(currency.locale)}`;
}
