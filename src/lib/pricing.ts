import { PriceRange, LookupResult, BreakdownItem, ContractorScore, VerdictType, UnitPricing } from './types';
import { detectCurrency } from './currency';
import { supabase } from './supabase';
import { categories } from '@/data/categories';

interface DbSubmission {
  id: string;
  service_type: string;
  category_id: string;
  zip_code: string;
  price_paid: number;
  units: number | null;
  unit_type: string | null;
  company_name: string | null;
  job_description: string | null;
  submitted_at: string;
  trust_points: number;
}

/**
 * Get nearby ZIP/PIN codes prefix (first 3 digits for area matching)
 */
function getZipPrefix(zipCode: string): string {
  return zipCode.substring(0, 3);
}

/**
 * Calculate price range from submissions
 */
function calculatePriceRange(filteredSubmissions: DbSubmission[], userQuote?: number): PriceRange {
  if (filteredSubmissions.length === 0) {
    return { low: 0, average: 0, high: 0, submissionCount: 0, freshness: 0 };
  }

  const prices = filteredSubmissions.map(s => Number(s.price_paid)).sort((a, b) => a - b);
  const low = prices[0];
  const high = prices[prices.length - 1];
  const average = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);

  // Calculate freshness (% within 6 months)
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const recentCount = filteredSubmissions.filter(
    s => new Date(s.submitted_at) >= sixMonthsAgo
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
function generateBreakdown(filteredSubmissions: DbSubmission[]): BreakdownItem[] {
  const descriptionGroups: Record<string, DbSubmission[]> = {};

  filteredSubmissions.forEach(s => {
    const key = (s.job_description || 'standard').toLowerCase();
    const groupKey = key.split(',')[0].trim().substring(0, 30);
    if (!descriptionGroups[groupKey]) {
      descriptionGroups[groupKey] = [];
    }
    descriptionGroups[groupKey].push(s);
  });

  return Object.entries(descriptionGroups).map(([label, subs]) => {
    const prices = subs.map(s => Number(s.price_paid)).sort((a, b) => a - b);
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
  filteredSubmissions: DbSubmission[],
  areaAverage: number
): ContractorScore[] {
  const contractors: Record<string, { prices: number[]; count: number }> = {};

  filteredSubmissions.forEach(s => {
    if (s.company_name) {
      if (!contractors[s.company_name]) {
        contractors[s.company_name] = { prices: [], count: 0 };
      }
      contractors[s.company_name].prices.push(Number(s.price_paid));
      contractors[s.company_name].count++;
    }
  });

  return Object.entries(contractors).map(([name, data]) => {
    const avgPrice = data.prices.reduce((a, b) => a + b, 0) / data.prices.length;
    const deviation = ((avgPrice - areaAverage) / areaAverage) * 100;
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
 * Main lookup function - queries Supabase
 */
export async function lookupPrice(
  serviceType: string,
  zipCode: string,
  userQuote?: number,
  categoryId?: string,
  units?: number
): Promise<LookupResult> {
  const normalizedService = serviceType.toLowerCase().trim();
  const prefix = getZipPrefix(zipCode);

  // Query Supabase for matching submissions
  let query = supabase
    .from('submissions')
    .select('*')
    .ilike('service_type', `%${normalizedService}%`)
    .like('zip_code', `${prefix}%`);

  if (categoryId) {
    query = query.eq('category_id', categoryId);
  }

  const { data: filteredSubmissions, error } = await query;

  if (error) {
    console.error('Supabase query error:', error);
  }

  const submissions = (filteredSubmissions || []) as DbSubmission[];

  const priceRange = calculatePriceRange(submissions, userQuote);
  const breakdown = generateBreakdown(submissions);
  const contractors = calculateContractorScores(submissions, priceRange.average);
  const currency = detectCurrency(zipCode);

  // Calculate unit pricing if units provided
  let unitPricing: UnitPricing | undefined;
  if (units && units > 0 && priceRange.submissionCount > 0) {
    let unitLabel = 'units';
    for (const cat of categories) {
      for (const sub of cat.subcategories) {
        if (sub.unitConfig) {
          const matchesSubService = sub.serviceTypes.some(st =>
            st.toLowerCase().includes(normalizedService) ||
            normalizedService.includes(st.toLowerCase())
          );
          if (matchesSubService) {
            unitLabel = sub.unitConfig.unit;
            break;
          }
        }
      }
    }

    // Calculate per-unit rates from submissions that have unit data
    const submissionsWithUnits = submissions.filter(s => s.units && Number(s.units) > 0);

    let perUnitLow: number;
    let perUnitAverage: number;
    let perUnitHigh: number;

    if (submissionsWithUnits.length > 0) {
      // Use actual per-unit data from submissions (price / stored_units)
      const perUnitPrices = submissionsWithUnits
        .map(s => Number(s.price_paid) / Number(s.units))
        .sort((a, b) => a - b);
      perUnitLow = Math.round(perUnitPrices[0]);
      perUnitHigh = Math.round(perUnitPrices[perUnitPrices.length - 1]);
      perUnitAverage = Math.round(perUnitPrices.reduce((a, b) => a + b, 0) / perUnitPrices.length);
    } else {
      // No unit data stored — estimate by dividing total price by a reasonable default
      // This is a fallback; ideally all submissions should have units
      perUnitLow = priceRange.low;
      perUnitAverage = priceRange.average;
      perUnitHigh = priceRange.high;
    }

    unitPricing = {
      units,
      unitLabel,
      perUnitLow,
      perUnitAverage,
      perUnitHigh,
      totalEstimateLow: Math.round(perUnitLow * units),
      totalEstimateAverage: Math.round(perUnitAverage * units),
      totalEstimateHigh: Math.round(perUnitHigh * units),
    };

    // Override main price range with unit-adjusted values
    // so the price bar shows the correct price for the requested size
    priceRange.low = Math.round(perUnitLow * units);
    priceRange.average = Math.round(perUnitAverage * units);
    priceRange.high = Math.round(perUnitHigh * units);

    // Re-evaluate verdict against adjusted average
    if (userQuote !== undefined) {
      const adjThreshold10 = priceRange.average * 1.1;
      const adjThreshold25 = priceRange.average * 1.25;
      if (userQuote <= adjThreshold10) {
        priceRange.verdict = 'FAIR';
      } else if (userQuote <= adjThreshold25) {
        priceRange.verdict = 'A_BIT_HIGH';
      } else {
        priceRange.verdict = 'OVERPRICED';
      }
    }
  }

  return {
    serviceType: normalizedService,
    zipCode,
    currency,
    priceRange,
    unitPricing,
    breakdown,
    contractors,
    recentSubmissions: submissions.slice(0, 5).map(s => ({
      id: s.id,
      serviceType: s.service_type,
      categoryId: s.category_id,
      zipCode: s.zip_code,
      pricePaid: Number(s.price_paid),
      companyName: s.company_name || undefined,
      jobDescription: s.job_description || undefined,
      submittedAt: s.submitted_at,
      trustPoints: s.trust_points,
    })),
  };
}

/**
 * Search available services from database
 */
export async function searchServices(query: string): Promise<string[]> {
  const normalizedQuery = query.toLowerCase().trim();

  const { data, error } = await supabase
    .from('submissions')
    .select('service_type')
    .ilike('service_type', `%${normalizedQuery}%`)
    .limit(20);

  if (error || !data) return [];

  // Deduplicate
  return Array.from(new Set(data.map(d => d.service_type)));
}

/**
 * Add a new submission to Supabase
 */
export async function addSubmission(submission: {
  serviceType: string;
  categoryId: string;
  zipCode: string;
  pricePaid: number;
  units?: number;
  unitType?: string;
  companyName?: string;
  jobDescription?: string;
  userEmail?: string;
}) {
  const { data, error } = await supabase
    .from('submissions')
    .insert({
      service_type: submission.serviceType,
      category_id: submission.categoryId,
      zip_code: submission.zipCode,
      price_paid: submission.pricePaid,
      units: submission.units || null,
      unit_type: submission.unitType || null,
      company_name: submission.companyName || null,
      job_description: submission.jobDescription || null,
      user_email: submission.userEmail || null,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return {
    id: data.id,
    serviceType: data.service_type,
    categoryId: data.category_id,
    zipCode: data.zip_code,
    pricePaid: Number(data.price_paid),
    units: data.units ? Number(data.units) : undefined,
    unitType: data.unit_type || undefined,
    companyName: data.company_name || undefined,
    jobDescription: data.job_description || undefined,
    submittedAt: data.submitted_at,
    trustPoints: data.trust_points,
  };
}
