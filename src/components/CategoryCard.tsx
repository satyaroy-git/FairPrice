'use client';

import { ServiceCategory } from '@/lib/types';

interface CategoryCardProps {
  category: ServiceCategory;
  onClick: (categoryId: string) => void;
}

export default function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={() => onClick(category.id)}
      className="card hover:shadow-md hover:border-blue-200 transition-all duration-200 text-left group cursor-pointer"
    >
      <div className="text-3xl mb-3">{category.icon}</div>
      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
        {category.name}
      </h3>
      <p className="text-sm text-gray-500 mt-1">{category.description}</p>
    </button>
  );
}
