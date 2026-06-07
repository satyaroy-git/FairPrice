export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface PriceSubmission {
  id: string;
  serviceType: string;
  categoryId: string;
  zipCode: string;
  pricePaid: number;
  companyName?: string;
  jobDescription?: string;
  submittedAt: string;
  trustPoints: number;
}

export interface PriceRange {
  low: number;
  average: number;
  high: number;
  submissionCount: number;
  freshness: number; // percentage of submissions within 6 months
  verdict?: 'FAIR' | 'A_BIT_HIGH' | 'OVERPRICED';
  userQuote?: number;
}

export interface ContractorScore {
  companyName: string;
  fairnessScore: number; // 0-100
  totalReviews: number;
  averageDeviation: number; // % above/below area average
}

export interface CurrencyInfo {
  code: string;
  symbol: string;
  locale: string;
  country: string;
}

export interface UnitPricing {
  units: number;
  unitLabel: string;
  perUnitLow: number;
  perUnitAverage: number;
  perUnitHigh: number;
  totalEstimateLow: number;
  totalEstimateAverage: number;
  totalEstimateHigh: number;
}

export interface LookupResult {
  serviceType: string;
  zipCode: string;
  currency: CurrencyInfo;
  priceRange: PriceRange;
  unitPricing?: UnitPricing;
  breakdown: BreakdownItem[];
  contractors: ContractorScore[];
  recentSubmissions: PriceSubmission[];
}

export interface BreakdownItem {
  label: string;
  low: number;
  high: number;
  count: number;
}

export type VerdictType = 'FAIR' | 'A_BIT_HIGH' | 'OVERPRICED';
