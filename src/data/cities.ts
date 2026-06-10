export interface CityInfo {
  slug: string;
  name: string;
  state: string;
  country: string;
  zipPrefix: string;
}

export const cities: CityInfo[] = [
  // India
  { slug: 'delhi', name: 'Delhi', state: 'Delhi', country: 'India', zipPrefix: '110' },
  { slug: 'mumbai', name: 'Mumbai', state: 'Maharashtra', country: 'India', zipPrefix: '400' },
  { slug: 'bangalore', name: 'Bangalore', state: 'Karnataka', country: 'India', zipPrefix: '560' },
  { slug: 'chennai', name: 'Chennai', state: 'Tamil Nadu', country: 'India', zipPrefix: '600' },
  { slug: 'hyderabad', name: 'Hyderabad', state: 'Telangana', country: 'India', zipPrefix: '500' },
  { slug: 'kolkata', name: 'Kolkata', state: 'West Bengal', country: 'India', zipPrefix: '700' },
  { slug: 'pune', name: 'Pune', state: 'Maharashtra', country: 'India', zipPrefix: '411' },
  { slug: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', country: 'India', zipPrefix: '380' },
  { slug: 'jaipur', name: 'Jaipur', state: 'Rajasthan', country: 'India', zipPrefix: '302' },
  { slug: 'lucknow', name: 'Lucknow', state: 'Uttar Pradesh', country: 'India', zipPrefix: '226' },
  { slug: 'bhubaneswar', name: 'Bhubaneswar', state: 'Odisha', country: 'India', zipPrefix: '751' },
  { slug: 'noida', name: 'Noida', state: 'Uttar Pradesh', country: 'India', zipPrefix: '201' },
  { slug: 'gurgaon', name: 'Gurgaon', state: 'Haryana', country: 'India', zipPrefix: '122' },
  // US
  { slug: 'new-york', name: 'New York', state: 'NY', country: 'United States', zipPrefix: '100' },
  { slug: 'los-angeles', name: 'Los Angeles', state: 'CA', country: 'United States', zipPrefix: '900' },
  { slug: 'chicago', name: 'Chicago', state: 'IL', country: 'United States', zipPrefix: '606' },
  { slug: 'houston', name: 'Houston', state: 'TX', country: 'United States', zipPrefix: '770' },
  { slug: 'phoenix', name: 'Phoenix', state: 'AZ', country: 'United States', zipPrefix: '850' },
  { slug: 'san-francisco', name: 'San Francisco', state: 'CA', country: 'United States', zipPrefix: '941' },
  { slug: 'austin', name: 'Austin', state: 'TX', country: 'United States', zipPrefix: '787' },
  { slug: 'atlanta', name: 'Atlanta', state: 'GA', country: 'United States', zipPrefix: '303' },
  { slug: 'portland', name: 'Portland', state: 'OR', country: 'United States', zipPrefix: '972' },
];
