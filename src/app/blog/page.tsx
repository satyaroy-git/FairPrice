import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — FairPrice | Pricing Guides, Tips & Market Insights',
  description: 'Expert guides on fair pricing for home services, rent, auto repair, and more. Learn how to avoid overpaying and get the best deals in your city.',
  alternates: { canonical: 'https://getfairprice.in/blog' },
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
}

const posts: BlogPost[] = [
  {
    slug: 'plumbing-costs-mumbai',
    title: 'How Much Should You Pay for Plumbing in Mumbai in 2026?',
    excerpt: 'A complete breakdown of plumbing costs in Mumbai — from leak repairs to water heater installations. Know the fair price before you hire.',
    date: '2026-07-10',
    readTime: '6 min read',
    category: 'Plumbing',
    categoryColor: 'bg-blue-100 text-blue-800',
  },
  {
    slug: 'house-rent-bangalore',
    title: 'Complete Guide to House Rent in Bangalore — Area-wise Breakdown (2026)',
    excerpt: 'From Electronic City to Indiranagar, here\'s what 1BHK, 2BHK, and 3BHK flats actually cost in every major Bangalore locality.',
    date: '2026-07-08',
    readTime: '8 min read',
    category: 'House Rent',
    categoryColor: 'bg-green-100 text-green-800',
  },
  {
    slug: 'avoid-overcharging',
    title: '5 Proven Tips to Avoid Getting Overcharged for Home Services',
    excerpt: 'Contractors quoting too high? Learn the strategies smart homeowners use to ensure they never pay more than fair market rate.',
    date: '2026-07-06',
    readTime: '5 min read',
    category: 'Tips & Guides',
    categoryColor: 'bg-amber-100 text-amber-800',
  },
  {
    slug: 'negotiate-with-contractors',
    title: 'How to Negotiate with Contractors — A Homeowner\'s Guide',
    excerpt: 'Negotiating doesn\'t mean being cheap. Learn respectful, effective techniques to get fair prices from service providers.',
    date: '2026-07-04',
    readTime: '7 min read',
    category: 'Tips & Guides',
    categoryColor: 'bg-amber-100 text-amber-800',
  },
  {
    slug: 'ac-service-india',
    title: 'When is the Best Time to Get Your AC Serviced in India?',
    excerpt: 'Timing matters. Learn the ideal AC service schedule, seasonal pricing patterns, and how to save 20-30% on maintenance.',
    date: '2026-07-02',
    readTime: '5 min read',
    category: 'HVAC',
    categoryColor: 'bg-cyan-100 text-cyan-800',
  },
  {
    slug: 'auto-repair-costs-india',
    title: 'Understanding Fair Prices for Auto Repair in India (2026)',
    excerpt: 'From brake pads to full car service — what should you really pay? Authorised vs multi-brand workshop comparison.',
    date: '2026-06-30',
    readTime: '6 min read',
    category: 'Auto Repair',
    categoryColor: 'bg-red-100 text-red-800',
  },
  {
    slug: 'dental-costs-india',
    title: 'Dental Costs in India — What You Should Really Pay in 2026',
    excerpt: 'Root canals, crowns, braces, and implants — a transparent guide to dental pricing across Indian cities.',
    date: '2026-06-28',
    readTime: '7 min read',
    category: 'Dental',
    categoryColor: 'bg-purple-100 text-purple-800',
  },
  {
    slug: 'moving-costs-india',
    title: 'Packers and Movers Pricing Guide — What to Expect in 2026',
    excerpt: 'Moving homes? Understand the real costs of local and intercity moves, hidden charges to watch for, and how to get fair quotes.',
    date: '2026-06-26',
    readTime: '6 min read',
    category: 'Moving',
    categoryColor: 'bg-orange-100 text-orange-800',
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">FairPrice Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Expert guides, pricing insights, and tips to help you make informed decisions about home services, rent, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card hover:shadow-lg hover:border-blue-200 transition-all group"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${post.categoryColor}`}>
                {post.category}
              </span>
              <span className="text-xs text-gray-400">{post.readTime}</span>
            </div>
            <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
            <p className="text-xs text-gray-400 mt-3">
              {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center bg-blue-50 rounded-xl p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Have a pricing question?</h2>
        <p className="text-gray-600 mb-4">Use our free lookup tool to instantly check if your quote is fair.</p>
        <Link href="/lookup" className="btn-primary inline-block">Check Your Price</Link>
      </div>
    </div>
  );
}
