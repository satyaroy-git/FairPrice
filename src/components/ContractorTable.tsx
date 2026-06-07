'use client';

import { ContractorScore } from '@/lib/types';

interface ContractorTableProps {
  contractors: ContractorScore[];
}

export default function ContractorTable({ contractors }: ContractorTableProps) {
  if (contractors.length === 0) return null;

  const getFairnessColor = (score: number) => {
    if (score >= 80) return 'text-emerald-600 bg-emerald-50';
    if (score >= 60) return 'text-amber-600 bg-amber-50';
    return 'text-red-600 bg-red-50';
  };

  const getFairnessLabel = (score: number) => {
    if (score >= 80) return 'Fair';
    if (score >= 60) return 'Moderate';
    return 'Pricey';
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">🏢 Contractor Fairness Scores</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Company</th>
              <th className="text-center py-3 px-2 text-sm font-medium text-gray-500">Fairness</th>
              <th className="text-center py-3 px-2 text-sm font-medium text-gray-500">Reviews</th>
              <th className="text-right py-3 px-2 text-sm font-medium text-gray-500">vs Average</th>
            </tr>
          </thead>
          <tbody>
            {contractors.map((contractor) => (
              <tr key={contractor.companyName} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-3 px-2 font-medium text-gray-900">{contractor.companyName}</td>
                <td className="py-3 px-2 text-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getFairnessColor(contractor.fairnessScore)}`}>
                    {contractor.fairnessScore}/100 — {getFairnessLabel(contractor.fairnessScore)}
                  </span>
                </td>
                <td className="py-3 px-2 text-center text-gray-600">{contractor.totalReviews}</td>
                <td className="py-3 px-2 text-right">
                  <span className={contractor.averageDeviation > 0 ? 'text-red-600' : 'text-emerald-600'}>
                    {contractor.averageDeviation > 0 ? '+' : ''}{contractor.averageDeviation}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
