import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Use service role key for seeding (bypasses RLS)
function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, key);
}

const seedData = [
  // PLUMBING - Water Heater
  { service_type: 'water heater replacement', category_id: 'plumbing', zip_code: '90210', price_paid: 1200, company_name: 'Quick Plumb Pro', job_description: '50-gallon gas water heater, standard install' },
  { service_type: 'water heater replacement', category_id: 'plumbing', zip_code: '90210', price_paid: 1450, company_name: 'Beverly Hills Plumbing', job_description: '50-gallon gas, tankless upgrade' },
  { service_type: 'water heater replacement', category_id: 'plumbing', zip_code: '90211', price_paid: 1100, job_description: '40-gallon electric water heater' },
  { service_type: 'water heater installation', category_id: 'plumbing', zip_code: '110001', price_paid: 8500, company_name: 'Delhi Plumbing Services', job_description: '15L geyser installation, bathroom' },
  { service_type: 'water heater installation', category_id: 'plumbing', zip_code: '110001', price_paid: 12000, company_name: 'HomeFix India', job_description: '25L storage geyser, new plumbing lines' },
  { service_type: 'water heater installation', category_id: 'plumbing', zip_code: '110002', price_paid: 9500, job_description: '15L instant geyser, standard install' },
  { service_type: 'water heater installation', category_id: 'plumbing', zip_code: '110003', price_paid: 7000, company_name: 'Urban Company', job_description: '10L instant geyser, simple setup' },
  // PLUMBING - Leak Fix
  { service_type: 'leak fix', category_id: 'plumbing', zip_code: '90210', price_paid: 250, company_name: 'Quick Plumb Pro', job_description: 'Kitchen sink leak, pipe joint' },
  { service_type: 'leak fix', category_id: 'plumbing', zip_code: '90210', price_paid: 350, job_description: 'Bathroom wall leak, drywall access needed' },
  { service_type: 'leak fix', category_id: 'plumbing', zip_code: '110001', price_paid: 1500, company_name: 'Delhi Plumbing Services', job_description: 'Kitchen pipe leak repair' },
  { service_type: 'leak fix', category_id: 'plumbing', zip_code: '110001', price_paid: 2500, job_description: 'Concealed pipe leak, wall cutting needed' },
  { service_type: 'drain cleaning', category_id: 'plumbing', zip_code: '110001', price_paid: 1200, company_name: 'Urban Company', job_description: 'Kitchen drain blockage clearing' },
  { service_type: 'drain cleaning', category_id: 'plumbing', zip_code: '400001', price_paid: 2000, job_description: 'Bathroom drain, deep blockage' },
  // ELECTRICAL
  { service_type: 'panel upgrade', category_id: 'electrical', zip_code: '10001', price_paid: 2200, company_name: 'NYC Electric', job_description: '100A to 200A panel upgrade' },
  { service_type: 'panel upgrade', category_id: 'electrical', zip_code: '10001', price_paid: 2500, company_name: 'Metro Electrical', job_description: '200A panel with subpanel' },
  { service_type: 'wiring repair', category_id: 'electrical', zip_code: '400001', price_paid: 5000, company_name: 'Mumbai Electricals', job_description: '1 room complete rewiring' },
  { service_type: 'house rewiring', category_id: 'electrical', zip_code: '400001', price_paid: 15000, job_description: '2BHK full house rewiring' },
  { service_type: 'wiring repair', category_id: 'electrical', zip_code: '110001', price_paid: 8000, company_name: 'Delhi Electricals', job_description: '1BHK partial rewiring with MCB' },
  { service_type: 'inverter installation', category_id: 'electrical', zip_code: '110001', price_paid: 3500, company_name: 'Delhi Electricals', job_description: 'Inverter + battery connection setup' },
  { service_type: 'inverter installation', category_id: 'electrical', zip_code: '110001', price_paid: 4500, job_description: 'Inverter installation with new wiring run' },
  { service_type: 'inverter installation', category_id: 'electrical', zip_code: '110002', price_paid: 3000, company_name: 'Urban Company', job_description: 'Basic inverter hookup, existing wiring' },
  // AUTO REPAIR
  { service_type: 'brake pads replacement', category_id: 'auto-repair', zip_code: '60601', price_paid: 350, company_name: 'Chicago Auto Care', job_description: 'Front brake pads, Honda Civic 2020' },
  { service_type: 'brake pads replacement', category_id: 'auto-repair', zip_code: '60601', price_paid: 450, company_name: 'Premium Auto Shop', job_description: 'Front and rear brake pads, Toyota Camry' },
  { service_type: 'brake pads replacement', category_id: 'auto-repair', zip_code: '110001', price_paid: 3500, company_name: 'Delhi Auto Care', job_description: 'Front brake pads, Maruti Baleno' },
  { service_type: 'brake pads replacement', category_id: 'auto-repair', zip_code: '110002', price_paid: 4200, job_description: 'Front and rear pads, Honda City' },
  { service_type: 'car service', category_id: 'auto-repair', zip_code: '560001', price_paid: 5500, company_name: 'GoMechanic Bangalore', job_description: 'Full car service, Maruti Swift, oil+filter+AC' },
  { service_type: 'car service', category_id: 'auto-repair', zip_code: '560001', price_paid: 8000, company_name: 'Authorized Maruti Service', job_description: 'Periodic service with brake pad check' },
  { service_type: 'car service', category_id: 'auto-repair', zip_code: '560002', price_paid: 4500, job_description: 'Basic service, Hyundai i20, oil change' },
  { service_type: 'car service', category_id: 'auto-repair', zip_code: '110001', price_paid: 6000, company_name: 'GoMechanic Delhi', job_description: 'Full service, Honda City, oil+filters+AC' },
  // HVAC
  { service_type: 'ac service', category_id: 'hvac', zip_code: '110001', price_paid: 1200, company_name: 'Urban Company', job_description: 'Split AC deep cleaning, 1.5 ton' },
  { service_type: 'ac service', category_id: 'hvac', zip_code: '110001', price_paid: 2500, company_name: 'CoolFix Services', job_description: 'AC gas refill + general service, 1.5 ton' },
  { service_type: 'ac service', category_id: 'hvac', zip_code: '110002', price_paid: 800, job_description: 'Window AC basic cleaning' },
  { service_type: 'ac service', category_id: 'hvac', zip_code: '110001', price_paid: 1500, company_name: 'Jeeves', job_description: 'Split AC foam cleaning + gas check' },
  { service_type: 'ac installation', category_id: 'hvac', zip_code: '400001', price_paid: 3500, company_name: 'Mumbai Cool Tech', job_description: 'Split AC installation, 1.5 ton, ground floor' },
  { service_type: 'ac installation', category_id: 'hvac', zip_code: '400001', price_paid: 5000, job_description: 'Split AC install, 2 ton, 3rd floor with piping' },
  { service_type: 'ac installation', category_id: 'hvac', zip_code: '110001', price_paid: 4000, company_name: 'Urban Company', job_description: 'Split AC install, 1.5 ton, 2nd floor' },
  { service_type: 'ac service', category_id: 'hvac', zip_code: '85001', price_paid: 120, company_name: 'Desert Cool HVAC', job_description: 'Annual AC maintenance, 3-ton unit' },
  { service_type: 'ac service', category_id: 'hvac', zip_code: '85001', price_paid: 150, company_name: 'Arizona Air Pros', job_description: 'AC tune-up, refrigerant top-off' },
  // HOME EXTERIOR - Painting
  { service_type: 'house painting', category_id: 'home-exterior', zip_code: '110001', price_paid: 45000, company_name: 'Asian Paints Service', job_description: '2BHK full interior painting, premium finish' },
  { service_type: 'house painting', category_id: 'home-exterior', zip_code: '110001', price_paid: 25000, job_description: '1BHK interior painting, standard emulsion' },
  { service_type: 'house painting', category_id: 'home-exterior', zip_code: '110003', price_paid: 35000, company_name: 'HomeFix India', job_description: '2BHK walls and ceiling, Berger paint' },
  { service_type: 'roof repair', category_id: 'home-exterior', zip_code: '30301', price_paid: 800, company_name: 'Atlanta Roofing Co', job_description: 'Shingle repair, small leak area' },
  { service_type: 'roof repair', category_id: 'home-exterior', zip_code: '30301', price_paid: 1200, job_description: 'Multiple leak points, flashing repair' },
  { service_type: 'terrace waterproofing', category_id: 'home-exterior', zip_code: '110001', price_paid: 15000, company_name: 'Dr Fixit Service', job_description: '500 sqft terrace, chemical treatment' },
  { service_type: 'terrace waterproofing', category_id: 'home-exterior', zip_code: '400001', price_paid: 20000, company_name: 'Mumbai Waterproof Solutions', job_description: '800 sqft terrace, complete treatment' },
  // DENTAL
  { service_type: 'root canal', category_id: 'dental', zip_code: '560001', price_paid: 8000, company_name: 'Clove Dental Bangalore', job_description: 'Single molar root canal, without crown' },
  { service_type: 'root canal', category_id: 'dental', zip_code: '560001', price_paid: 15000, job_description: 'Root canal + ceramic crown, molar' },
  { service_type: 'root canal', category_id: 'dental', zip_code: '560002', price_paid: 6000, company_name: 'Sabka Dentist', job_description: 'Front tooth root canal' },
  { service_type: 'root canal', category_id: 'dental', zip_code: '110001', price_paid: 10000, company_name: 'Clove Dental Delhi', job_description: 'Molar root canal' },
  { service_type: 'root canal', category_id: 'dental', zip_code: '94102', price_paid: 1100, company_name: 'SF Dental Group', job_description: 'Molar root canal, no crown' },
  { service_type: 'root canal', category_id: 'dental', zip_code: '94102', price_paid: 1400, company_name: 'Bay Area Endodontics', job_description: 'Molar root canal + porcelain crown' },
  { service_type: 'dental cleaning', category_id: 'dental', zip_code: '110001', price_paid: 1500, company_name: 'Clove Dental Delhi', job_description: 'Scaling and polishing' },
  { service_type: 'dental cleaning', category_id: 'dental', zip_code: '110001', price_paid: 2000, job_description: 'Deep scaling with fluoride' },
  { service_type: 'dental implant', category_id: 'dental', zip_code: '110001', price_paid: 35000, company_name: 'Max Dental Delhi', job_description: 'Single implant, titanium, without crown' },
  { service_type: 'dental implant', category_id: 'dental', zip_code: '110001', price_paid: 50000, job_description: 'Implant + zirconia crown' },
  // MOVING
  { service_type: 'local move', category_id: 'moving', zip_code: '110001', price_paid: 8000, company_name: 'Agarwal Packers', job_description: '1BHK, within Delhi, 10 km' },
  { service_type: 'local move', category_id: 'moving', zip_code: '110001', price_paid: 15000, company_name: 'Porter Movers', job_description: '2BHK, within Delhi NCR, 15 km' },
  { service_type: 'local move', category_id: 'moving', zip_code: '110002', price_paid: 5000, job_description: 'Studio apartment, same area, 3 km' },
  { service_type: 'local move', category_id: 'moving', zip_code: '78701', price_paid: 800, company_name: 'Austin Movers', job_description: '1-bedroom apartment, 5 miles' },
  { service_type: 'local move', category_id: 'moving', zip_code: '78701', price_paid: 1500, company_name: 'Texas Moving Co', job_description: '3-bedroom house, 10 miles' },
  // APPLIANCE REPAIR
  { service_type: 'washing machine repair', category_id: 'appliance-repair', zip_code: '110001', price_paid: 2500, company_name: 'Urban Company', job_description: 'Drain pump replacement, front load LG' },
  { service_type: 'washing machine repair', category_id: 'appliance-repair', zip_code: '400001', price_paid: 3500, company_name: 'Mumbai Appliance Fix', job_description: 'Motor replacement, Samsung' },
  { service_type: 'refrigerator repair', category_id: 'appliance-repair', zip_code: '110001', price_paid: 3000, company_name: 'CoolFix Services', job_description: 'Thermostat replacement, double door' },
  { service_type: 'fridge gas refill', category_id: 'appliance-repair', zip_code: '110001', price_paid: 2000, job_description: 'Gas refill, single door Whirlpool' },
  { service_type: 'RO service', category_id: 'appliance-repair', zip_code: '110001', price_paid: 1500, company_name: 'Aquaguard Service', job_description: 'Annual service, filter + membrane change' },
  { service_type: 'RO service', category_id: 'appliance-repair', zip_code: '110001', price_paid: 2500, job_description: 'Complete overhaul, Kent RO, all filters' },
  // PEST CONTROL
  { service_type: 'general pest control', category_id: 'pest-control', zip_code: '110001', price_paid: 1500, company_name: 'Urban Company', job_description: '2BHK, cockroach + ant treatment' },
  { service_type: 'general pest control', category_id: 'pest-control', zip_code: '400001', price_paid: 2000, company_name: 'Hicare Mumbai', job_description: '3BHK, comprehensive pest treatment' },
  { service_type: 'termite treatment', category_id: 'pest-control', zip_code: '110001', price_paid: 5000, company_name: 'Rentokil PCI', job_description: '2BHK, chemical barrier treatment' },
  { service_type: 'termite treatment', category_id: 'pest-control', zip_code: '110001', price_paid: 8000, job_description: '3BHK, drilling + chemical injection' },
  // CLEANING
  { service_type: 'deep cleaning', category_id: 'cleaning', zip_code: '110001', price_paid: 4500, company_name: 'Urban Company', job_description: '2BHK full deep cleaning, 4-5 hours' },
  { service_type: 'deep cleaning', category_id: 'cleaning', zip_code: '110001', price_paid: 6500, company_name: 'Jeeves', job_description: '3BHK deep cleaning with balcony' },
  { service_type: 'deep cleaning', category_id: 'cleaning', zip_code: '400001', price_paid: 5000, company_name: 'HouseJoy Mumbai', job_description: '2BHK complete, kitchen intensive' },
  { service_type: 'sofa cleaning', category_id: 'cleaning', zip_code: '110001', price_paid: 1200, company_name: 'Urban Company', job_description: '5-seater sofa, shampooing' },
  { service_type: 'deep cleaning', category_id: 'cleaning', zip_code: '94102', price_paid: 350, company_name: 'SF Clean Co', job_description: '2-bed apartment, deep clean' },
  // HOME SECURITY
  { service_type: 'cctv installation', category_id: 'home-security', zip_code: '110001', price_paid: 12000, company_name: 'SecureHome Delhi', job_description: '4 camera setup, 1TB DVR, installation' },
  { service_type: 'cctv installation', category_id: 'home-security', zip_code: '110001', price_paid: 8000, job_description: '2 wireless cameras, cloud storage setup' },
  { service_type: 'cctv installation', category_id: 'home-security', zip_code: '400001', price_paid: 15000, company_name: 'Mumbai Security Systems', job_description: '6 camera system, 2TB DVR, night vision' },
  { service_type: 'smart lock install', category_id: 'home-security', zip_code: '110001', price_paid: 3500, company_name: 'Urban Company', job_description: 'Smart fingerprint lock, main door' },
  // CARPENTRY
  { service_type: 'custom wardrobe', category_id: 'carpentry', zip_code: '110001', price_paid: 45000, company_name: 'Delhi Interiors', job_description: '6ft sliding wardrobe, laminate finish' },
  { service_type: 'custom wardrobe', category_id: 'carpentry', zip_code: '400001', price_paid: 55000, company_name: 'HomeLane', job_description: '8ft wardrobe, hinged doors, plywood' },
  { service_type: 'kitchen cabinet', category_id: 'carpentry', zip_code: '110001', price_paid: 65000, company_name: 'HomeLane', job_description: 'U-shaped kitchen cabinets, marine ply' },
  { service_type: 'furniture repair', category_id: 'carpentry', zip_code: '110001', price_paid: 2500, company_name: 'Urban Company', job_description: 'Sofa frame repair + polishing' },
  // INTERIOR DESIGN
  { service_type: 'false ceiling installation', category_id: 'interior-design', zip_code: '110001', price_paid: 25000, company_name: 'Delhi Interiors', job_description: 'Living room, gypsum, 150 sqft with cove lighting' },
  { service_type: 'false ceiling installation', category_id: 'interior-design', zip_code: '400001', price_paid: 30000, company_name: 'Mumbai Interior Studio', job_description: 'Hall + dining, gypsum, 250 sqft' },
  { service_type: 'modular kitchen', category_id: 'interior-design', zip_code: '110001', price_paid: 150000, company_name: 'HomeLane', job_description: 'L-shape modular kitchen, acrylic finish, full accessories' },
  { service_type: 'modular kitchen', category_id: 'interior-design', zip_code: '560001', price_paid: 120000, company_name: 'Livspace Bangalore', job_description: 'Straight kitchen, laminate, basic accessories' },
  { service_type: 'tile installation', category_id: 'interior-design', zip_code: '10001', price_paid: 2500, company_name: 'NYC Tile Pros', job_description: 'Bathroom floor, 60 sqft, porcelain' },
];

export async function POST(request: NextRequest) {
  // Simple auth check - require a secret to seed
  const authHeader = request.headers.get('x-seed-secret');
  if (authHeader !== process.env.SUPABASE_SERVICE_ROLE_KEY?.substring(0, 20)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getAdminClient();

  // Check if data already exists
  const { count } = await supabase
    .from('submissions')
    .select('*', { count: 'exact', head: true });

  if (count && count > 0) {
    return NextResponse.json({
      message: `Database already has ${count} submissions. Skipping seed.`,
      count,
    });
  }

  // Insert seed data
  const { data, error } = await supabase
    .from('submissions')
    .insert(seedData)
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    message: `Seeded ${data.length} submissions successfully.`,
    count: data.length,
  });
}

export async function GET() {
  return NextResponse.json({
    message: 'Use POST with x-seed-secret header to seed the database.',
  });
}
