import { PriceSubmission, PriceRange, LookupResult, BreakdownItem, ContractorScore, VerdictType } from './types';
import { detectCurrency } from './currency';
import { submissions } from '@/data/submissions';

/**
 * Get nearby ZIP/PIN codes (uses first 3 digits for area matching)
 * Works for both US ZIP (5 digits) and Indian PIN (6 digits) codes
 */
function getNearbyZips(zipCode: string): string[] {
  const prefix = zipCode.substring(0, 3);
  const allZips = Array.from(new Set(submissions.map(s => s.zipCode)));
  return allZips.filter(z => z.startsWith(prefix));
}

/**
 * Calculate price range from submissions
 */
function calculatePriceRange(filteredSubmissions: PriceSubmission[], userQuote?: number): PriceRange {
  if (filteredSubmissions.length === 0) {
    return { low: 0, average: 0, high: 0, submissionCount: 0, freshness: 0 };
  }

  const prices = filteredSubmissions.map(s => s.pricePaid).sort((a, b) => a - b);
  const low = prices[0];
  const high = prices[prices.length - 1];
  const average = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);

  // Calculate freshness (% within 6 months)
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const recentCount = filteredSubmissions.filter(
    s => new Date(s.submittedAt) >= sixMonthsAgo
  ).length;
  const freshness = Math.round((recentCount / filteredSubmissions.length) * 100);

  let verdict: VerdictType | undefined;
  if (userQuote !== undefined) {
    const threshold10 = average * 1.1;
    const threshold25 = average * 1.25;

    if (userQuote <= threshold10) {
      verdict = 'FAIR';
    } else if (userQuote <= threshold25) {
      verdict = 'A_BIT_HIGH';
    } else {
      verdict = 'OVERPRICED';
    }
  }

  return {
    low,
    average,
    high,
    submissionCount: filteredSubmissions.length,
    freshness,
    verdict,
    userQuote,
  };
}

/**
 * Generate breakdown items from submissions
 */
function generateBreakdown(filteredSubmissions: PriceSubmission[]): BreakdownItem[] {
  const descriptionGroups: Record<string, PriceSubmission[]> = {};

  filteredSubmissions.forEach(s => {
    const key = s.jobDescription?.toLowerCase() || 'standard';
    // Group by first few words for simplicity
    const groupKey = key.split(',')[0].trim().substring(0, 30);
    if (!descriptionGroups[groupKey]) {
      descriptionGroups[groupKey] = [];
    }
    descriptionGroups[groupKey].push(s);
  });

  return Object.entries(descriptionGroups).map(([label, subs]) => {
    const prices = subs.map(s => s.pricePaid).sort((a, b) => a - b);
    return {
      label: label.charAt(0).toUpperCase() + label.slice(1),
      low: prices[0],
      high: prices[prices.length - 1],
      count: subs.length,
    };
  });
}

/**
 * Calculate contractor scores
 */
function calculateContractorScores(
  filteredSubmissions: PriceSubmission[],
  areaAverage: number
): ContractorScore[] {
  const contractors: Record<string, { prices: number[]; count: number }> = {};

  filteredSubmissions.forEach(s => {
    if (s.companyName) {
      if (!contractors[s.companyName]) {
        contractors[s.companyName] = { prices: [], count: 0 };
      }
      contractors[s.companyName].prices.push(s.pricePaid);
      contractors[s.companyName].count++;
    }
  });

  return Object.entries(contractors).map(([name, data]) => {
    const avgPrice = data.prices.reduce((a, b) => a + b, 0) / data.prices.length;
    const deviation = ((avgPrice - areaAverage) / areaAverage) * 100;
    // Fairness score: 100 = exactly at average, decreases as deviation increases
    const fairnessScore = Math.max(0, Math.min(100, Math.round(100 - Math.abs(deviation) * 2)));

    return {
      companyName: name,
      fairnessScore,
      totalReviews: data.count,
      averageDeviation: Math.round(deviation * 10) / 10,
    };
  }).sort((a, b) => b.fairnessScore - a.fairnessScore);
}

/**
 * Main lookup function
 */
export function lookupPrice(
  serviceType: string,
  zipCode: string,
  userQuote?: number
): LookupResult {
  const normalizedService = serviceType.toLowerCase().trim();
  const nearbyZips = getNearbyZips(zipCode);

  // Find matching submissions (fuzzy match on service type)
  const filteredSubmissions = submissions.filter(s => {
    const matchesService = s.serviceType.toLowerCase().includes(normalizedService) ||
      normalizedService.includes(s.serviceType.toLowerCase());
    const matchesArea = nearbyZips.includes(s.zipCode);
    return matchesService && matchesArea;
  });

  const priceRange = calculatePriceRange(filteredSubmissions, userQuote);
  const breakdown = generateBreakdown(filteredSubmissions);
  const contractors = calculateContractorScores(filteredSubmissions, priceRange.average);
  const currency = detectCurrency(zipCode);

  return {
    serviceType: normalizedService,
    zipCode,
    currency,
    priceRange,
    breakdown,
    contractors,
    recentSubmissions: filteredSubmissions.slice(0, 5),
  };
}

/**
 * Search available services
 */
export function searchServices(query: string): string[] {
  const normalizedQuery = query.toLowerCase().trim();
  const allServices = Array.from(new Set(submissions.map(s => s.serviceType)));

  if (!normalizedQuery) return allServices;

  return allServices.filter(service =>
    service.includes(normalizedQuery) || normalizedQuery.includes(service)
  );
}

/**
 * Add a new submission
 */
export function addSubmission(submission: Omit<PriceSubmission, 'id' | 'submittedAt' | 'trustPoints'>): PriceSubmission {
  const newSubmission: PriceSubmission = {
    ...submission,
    id: String(submissions.length + 1),
    submittedAt: new Date().toISOString().split('T')[0],
    trustPoints: 10,
  };
  submissions.push(newSubmission);
  return newSubmission;
}
