import { PriceSubmission } from '@/lib/types';

// Comprehensive seed data - realistic price submissions for India (INR) and US (USD)
export const submissions: PriceSubmission[] = [
  // ===== PLUMBING =====
  // Water Heater - US
  { id: '1', serviceType: 'water heater replacement', categoryId: 'plumbing', zipCode: '90210', pricePaid: 1200, companyName: 'Quick Plumb Pro', jobDescription: '50-gallon gas water heater, standard install', submittedAt: '2026-05-15', trustPoints: 10 },
  { id: '2', serviceType: 'water heater replacement', categoryId: 'plumbing', zipCode: '90210', pricePaid: 1450, companyName: 'Beverly Hills Plumbing', jobDescription: '50-gallon gas, tankless upgrade', submittedAt: '2026-04-20', trustPoints: 10 },
  { id: '3', serviceType: 'water heater replacement', categoryId: 'plumbing', zipCode: '90211', pricePaid: 1100, jobDescription: '40-gallon electric water heater', submittedAt: '2026-03-10', trustPoints: 10 },
  { id: '4', serviceType: 'tankless water heater', categoryId: 'plumbing', zipCode: '90210', pricePaid: 2200, companyName: 'Premium Plumbing Co', jobDescription: 'Navien tankless, whole house', submittedAt: '2026-02-28', trustPoints: 10 },
  // Water Heater - India
  { id: '5', serviceType: 'water heater installation', categoryId: 'plumbing', zipCode: '110001', pricePaid: 8500, companyName: 'Delhi Plumbing Services', jobDescription: '15L geyser installation, bathroom', submittedAt: '2026-05-20', trustPoints: 10 },
  { id: '6', serviceType: 'water heater installation', categoryId: 'plumbing', zipCode: '110001', pricePaid: 12000, companyName: 'HomeFix India', jobDescription: '25L storage geyser, new plumbing lines', submittedAt: '2026-04-15', trustPoints: 10 },
  { id: '7', serviceType: 'geyser installation', categoryId: 'plumbing', zipCode: '110002', pricePaid: 9500, jobDescription: '15L instant geyser, standard install', submittedAt: '2026-03-22', trustPoints: 10 },
  { id: '8', serviceType: 'water heater installation', categoryId: 'plumbing', zipCode: '110003', pricePaid: 7000, companyName: 'Urban Company', jobDescription: '10L instant geyser, simple setup', submittedAt: '2026-05-01', trustPoints: 10 },
  // Leak Repair - US
  { id: '9', serviceType: 'leak fix', categoryId: 'plumbing', zipCode: '90210', pricePaid: 250, companyName: 'Quick Plumb Pro', jobDescription: 'Kitchen sink leak, pipe joint', submittedAt: '2026-05-20', trustPoints: 10 },
  { id: '10', serviceType: 'leak fix', categoryId: 'plumbing', zipCode: '90210', pricePaid: 350, jobDescription: 'Bathroom wall leak, drywall access needed', submittedAt: '2026-04-10', trustPoints: 10 },
  { id: '11', serviceType: 'faucet repair', categoryId: 'plumbing', zipCode: '90211', pricePaid: 180, companyName: 'Beverly Hills Plumbing', jobDescription: 'Simple faucet drip fix', submittedAt: '2026-03-25', trustPoints: 10 },
  // Leak Repair - India
  { id: '12', serviceType: 'leak fix', categoryId: 'plumbing', zipCode: '110001', pricePaid: 1500, companyName: 'Delhi Plumbing Services', jobDescription: 'Kitchen pipe leak repair', submittedAt: '2026-05-18', trustPoints: 10 },
  { id: '13', serviceType: 'pipe leak repair', categoryId: 'plumbing', zipCode: '110001', pricePaid: 2500, jobDescription: 'Concealed pipe leak, wall cutting needed', submittedAt: '2026-04-10', trustPoints: 10 },
  { id: '14', serviceType: 'faucet repair', categoryId: 'plumbing', zipCode: '110002', pricePaid: 800, companyName: 'Urban Company', jobDescription: 'Tap leak and washer replacement', submittedAt: '2026-03-28', trustPoints: 10 },
  // Drain Cleaning - US
  { id: '15', serviceType: 'drain cleaning', categoryId: 'plumbing', zipCode: '10001', pricePaid: 200, companyName: 'NYC Drains', jobDescription: 'Kitchen drain clog, snake method', submittedAt: '2026-05-12', trustPoints: 10 },
  { id: '16', serviceType: 'clogged drain', categoryId: 'plumbing', zipCode: '10001', pricePaid: 350, jobDescription: 'Main sewer line, hydro jet', submittedAt: '2026-04-08', trustPoints: 10 },
  // Drain Cleaning - India
  { id: '17', serviceType: 'drain cleaning', categoryId: 'plumbing', zipCode: '400001', pricePaid: 1200, companyName: 'Mumbai Plumbing Co', jobDescription: 'Kitchen drain blockage clearing', submittedAt: '2026-05-14', trustPoints: 10 },
  { id: '18', serviceType: 'drain cleaning', categoryId: 'plumbing', zipCode: '400001', pricePaid: 2000, jobDescription: 'Bathroom drain, deep blockage', submittedAt: '2026-04-20', trustPoints: 10 },

  // ===== ELECTRICAL =====
  // Panel Upgrade - US
  { id: '19', serviceType: 'panel upgrade', categoryId: 'electrical', zipCode: '10001', pricePaid: 2200, companyName: 'NYC Electric', jobDescription: '100A to 200A panel upgrade', submittedAt: '2026-05-18', trustPoints: 10 },
  { id: '20', serviceType: 'panel upgrade', categoryId: 'electrical', zipCode: '10001', pricePaid: 2500, companyName: 'Metro Electrical', jobDescription: '200A panel with subpanel', submittedAt: '2026-04-22', trustPoints: 10 },
  { id: '21', serviceType: 'circuit breaker replacement', categoryId: 'electrical', zipCode: '10002', pricePaid: 350, jobDescription: 'Single breaker replacement', submittedAt: '2026-03-15', trustPoints: 10 },
  // Wiring - India
  { id: '22', serviceType: 'wiring repair', categoryId: 'electrical', zipCode: '400001', pricePaid: 5000, companyName: 'Mumbai Electricals', jobDescription: '1 room complete rewiring', submittedAt: '2026-05-22', trustPoints: 10 },
  { id: '23', serviceType: 'house rewiring', categoryId: 'electrical', zipCode: '400001', pricePaid: 15000, jobDescription: '2BHK full house rewiring', submittedAt: '2026-04-18', trustPoints: 10 },
  { id: '24', serviceType: 'concealed wiring', categoryId: 'electrical', zipCode: '400002', pricePaid: 25000, companyName: 'PowerFix Solutions', jobDescription: '2BHK concealed wiring, new construction', submittedAt: '2026-03-12', trustPoints: 10 },
  { id: '25', serviceType: 'wiring repair', categoryId: 'electrical', zipCode: '110001', pricePaid: 8000, companyName: 'Delhi Electricals', jobDescription: '1BHK partial rewiring with MCB', submittedAt: '2026-05-05', trustPoints: 10 },
  // Inverter - India
  { id: '26', serviceType: 'inverter installation', categoryId: 'electrical', zipCode: '110001', pricePaid: 3500, companyName: 'Delhi Electricals', jobDescription: 'Inverter + battery connection setup', submittedAt: '2026-05-14', trustPoints: 10 },
  { id: '27', serviceType: 'inverter installation', categoryId: 'electrical', zipCode: '110001', pricePaid: 4500, jobDescription: 'Inverter installation with new wiring run', submittedAt: '2026-04-20', trustPoints: 10 },
  { id: '28', serviceType: 'inverter installation', categoryId: 'electrical', zipCode: '110002', pricePaid: 3000, companyName: 'Urban Company', jobDescription: 'Basic inverter hookup, existing wiring', submittedAt: '2026-03-18', trustPoints: 10 },
  // Lighting - US
  { id: '29', serviceType: 'recessed lighting', categoryId: 'electrical', zipCode: '60601', pricePaid: 800, companyName: 'Chicago Electric Co', jobDescription: '6 recessed lights, existing ceiling', submittedAt: '2026-05-10', trustPoints: 10 },
  { id: '30', serviceType: 'light fixture install', categoryId: 'electrical', zipCode: '60601', pricePaid: 200, jobDescription: 'Ceiling fan with light kit', submittedAt: '2026-04-25', trustPoints: 10 },

  // ===== AUTO REPAIR =====
  // Brakes - US
  { id: '31', serviceType: 'brake pads replacement', categoryId: 'auto-repair', zipCode: '60601', pricePaid: 350, companyName: 'Chicago Auto Care', jobDescription: 'Front brake pads, Honda Civic 2020', submittedAt: '2026-05-25', trustPoints: 10 },
  { id: '32', serviceType: 'brake pads replacement', categoryId: 'auto-repair', zipCode: '60601', pricePaid: 450, companyName: 'Premium Auto Shop', jobDescription: 'Front and rear brake pads, Toyota Camry', submittedAt: '2026-04-30', trustPoints: 10 },
  { id: '33', serviceType: 'brake disc replacement', categoryId: 'auto-repair', zipCode: '60602', pricePaid: 650, jobDescription: 'Front rotors + pads, SUV', submittedAt: '2026-03-20', trustPoints: 10 },
  // Brakes - India
  { id: '34', serviceType: 'brake pads replacement', categoryId: 'auto-repair', zipCode: '110001', pricePaid: 3500, companyName: 'Delhi Auto Care', jobDescription: 'Front brake pads, Maruti Baleno', submittedAt: '2026-05-10', trustPoints: 10 },
  { id: '35', serviceType: 'brake pads replacement', categoryId: 'auto-repair', zipCode: '110002', pricePaid: 4200, jobDescription: 'Front and rear pads, Honda City', submittedAt: '2026-04-22', trustPoints: 10 },
  { id: '36', serviceType: 'brake pads replacement', categoryId: 'auto-repair', zipCode: '560001', pricePaid: 3000, companyName: 'GoMechanic', jobDescription: 'Front pads, Hyundai i20', submittedAt: '2026-03-15', trustPoints: 10 },
  // Car Service - India
  { id: '37', serviceType: 'car service', categoryId: 'auto-repair', zipCode: '560001', pricePaid: 5500, companyName: 'GoMechanic Bangalore', jobDescription: 'Full car service, Maruti Swift, oil+filter+AC', submittedAt: '2026-05-25', trustPoints: 10 },
  { id: '38', serviceType: 'full car service', categoryId: 'auto-repair', zipCode: '560001', pricePaid: 8000, companyName: 'Authorized Maruti Service', jobDescription: 'Periodic service with brake pad check', submittedAt: '2026-04-28', trustPoints: 10 },
  { id: '39', serviceType: 'car service', categoryId: 'auto-repair', zipCode: '560002', pricePaid: 4500, jobDescription: 'Basic service, Hyundai i20, oil change', submittedAt: '2026-03-15', trustPoints: 10 },
  { id: '40', serviceType: 'car service', categoryId: 'auto-repair', zipCode: '110001', pricePaid: 6000, companyName: 'GoMechanic Delhi', jobDescription: 'Full service, Honda City, oil+filters+AC', submittedAt: '2026-05-08', trustPoints: 10 },
  // Tyres - India
  { id: '41', serviceType: 'tyre replacement', categoryId: 'auto-repair', zipCode: '110001', pricePaid: 4500, companyName: 'MRF Tyre Shop', jobDescription: '1 tyre, 185/65 R15, Maruti Baleno', submittedAt: '2026-05-20', trustPoints: 10 },
  { id: '42', serviceType: 'wheel alignment', categoryId: 'auto-repair', zipCode: '110001', pricePaid: 800, jobDescription: 'Front wheel alignment, sedan', submittedAt: '2026-04-15', trustPoints: 10 },

  // ===== HVAC =====
  // AC Service - India
  { id: '43', serviceType: 'ac service', categoryId: 'hvac', zipCode: '110001', pricePaid: 1200, companyName: 'Urban Company', jobDescription: 'Split AC deep cleaning, 1.5 ton', submittedAt: '2026-05-21', trustPoints: 10 },
  { id: '44', serviceType: 'ac gas refill', categoryId: 'hvac', zipCode: '110001', pricePaid: 2500, companyName: 'CoolFix Services', jobDescription: 'AC gas refill + general service, 1.5 ton', submittedAt: '2026-04-16', trustPoints: 10 },
  { id: '45', serviceType: 'ac deep cleaning', categoryId: 'hvac', zipCode: '110002', pricePaid: 800, jobDescription: 'Window AC basic cleaning', submittedAt: '2026-03-20', trustPoints: 10 },
  { id: '46', serviceType: 'ac service', categoryId: 'hvac', zipCode: '110001', pricePaid: 1500, companyName: 'Jeeves', jobDescription: 'Split AC foam cleaning + gas check', submittedAt: '2026-05-05', trustPoints: 10 },
  { id: '47', serviceType: 'ac service', categoryId: 'hvac', zipCode: '400001', pricePaid: 1000, companyName: 'Mumbai Cool Tech', jobDescription: 'Window AC servicing', submittedAt: '2026-04-28', trustPoints: 10 },
  // AC Installation - India
  { id: '48', serviceType: 'ac installation', categoryId: 'hvac', zipCode: '400001', pricePaid: 3500, companyName: 'Mumbai Cool Tech', jobDescription: 'Split AC installation, 1.5 ton, ground floor', submittedAt: '2026-05-08', trustPoints: 10 },
  { id: '49', serviceType: 'split ac install', categoryId: 'hvac', zipCode: '400001', pricePaid: 5000, jobDescription: 'Split AC install, 2 ton, 3rd floor with piping', submittedAt: '2026-04-12', trustPoints: 10 },
  { id: '50', serviceType: 'ac installation', categoryId: 'hvac', zipCode: '110001', pricePaid: 4000, companyName: 'Urban Company', jobDescription: 'Split AC install, 1.5 ton, 2nd floor', submittedAt: '2026-05-18', trustPoints: 10 },
  // HVAC - US
  { id: '51', serviceType: 'ac service', categoryId: 'hvac', zipCode: '85001', pricePaid: 120, companyName: 'Desert Cool HVAC', jobDescription: 'Annual AC maintenance, 3-ton unit', submittedAt: '2026-05-22', trustPoints: 10 },
  { id: '52', serviceType: 'ac service', categoryId: 'hvac', zipCode: '85001', pricePaid: 150, companyName: 'Arizona Air Pros', jobDescription: 'AC tune-up, refrigerant top-off', submittedAt: '2026-04-18', trustPoints: 10 },
  { id: '53', serviceType: 'furnace repair', categoryId: 'hvac', zipCode: '60601', pricePaid: 400, companyName: 'Chicago Heating Co', jobDescription: 'Ignitor replacement, gas furnace', submittedAt: '2026-03-10', trustPoints: 10 },
  { id: '54', serviceType: 'duct cleaning', categoryId: 'hvac', zipCode: '60601', pricePaid: 350, jobDescription: 'Whole house duct cleaning, 2000 sqft', submittedAt: '2026-02-25', trustPoints: 10 },

  // ===== HOME EXTERIOR =====
  // Painting - India
  { id: '55', serviceType: 'house painting', categoryId: 'home-exterior', zipCode: '110001', pricePaid: 45000, companyName: 'Asian Paints Service', jobDescription: '2BHK full interior painting, premium finish', submittedAt: '2026-05-19', trustPoints: 10 },
  { id: '56', serviceType: 'interior painting', categoryId: 'home-exterior', zipCode: '110001', pricePaid: 25000, jobDescription: '1BHK interior painting, standard emulsion', submittedAt: '2026-04-25', trustPoints: 10 },
  { id: '57', serviceType: 'house painting', categoryId: 'home-exterior', zipCode: '110003', pricePaid: 35000, companyName: 'HomeFix India', jobDescription: '2BHK walls and ceiling, Berger paint', submittedAt: '2026-03-18', trustPoints: 10 },
  { id: '58', serviceType: 'exterior painting', categoryId: 'home-exterior', zipCode: '400001', pricePaid: 80000, companyName: 'Mumbai Painters', jobDescription: '2BHK exterior, weatherproof paint', submittedAt: '2026-05-10', trustPoints: 10 },
  // Roofing - US
  { id: '59', serviceType: 'roof repair', categoryId: 'home-exterior', zipCode: '30301', pricePaid: 800, companyName: 'Atlanta Roofing Co', jobDescription: 'Shingle repair, small leak area', submittedAt: '2026-05-19', trustPoints: 10 },
  { id: '60', serviceType: 'roof repair', categoryId: 'home-exterior', zipCode: '30301', pricePaid: 1200, jobDescription: 'Multiple leak points, flashing repair', submittedAt: '2026-04-25', trustPoints: 10 },
  { id: '61', serviceType: 'roof replacement', categoryId: 'home-exterior', zipCode: '30301', pricePaid: 8500, companyName: 'Southern Exteriors', jobDescription: 'Full roof replacement, 1500 sqft, architectural shingles', submittedAt: '2026-03-12', trustPoints: 10 },
  // Waterproofing - India
  { id: '62', serviceType: 'terrace waterproofing', categoryId: 'home-exterior', zipCode: '110001', pricePaid: 15000, companyName: 'Dr Fixit Service', jobDescription: '500 sqft terrace, chemical treatment', submittedAt: '2026-05-15', trustPoints: 10 },
  { id: '63', serviceType: 'bathroom waterproofing', categoryId: 'home-exterior', zipCode: '110001', pricePaid: 8000, jobDescription: 'Single bathroom, membrane application', submittedAt: '2026-04-20', trustPoints: 10 },
  { id: '64', serviceType: 'terrace waterproofing', categoryId: 'home-exterior', zipCode: '400001', pricePaid: 20000, companyName: 'Mumbai Waterproof Solutions', jobDescription: '800 sqft terrace, complete treatment', submittedAt: '2026-03-25', trustPoints: 10 },

  // ===== DENTAL =====
  // Root Canal - India
  { id: '65', serviceType: 'root canal', categoryId: 'dental', zipCode: '560001', pricePaid: 8000, companyName: 'Clove Dental Bangalore', jobDescription: 'Single molar root canal, without crown', submittedAt: '2026-05-23', trustPoints: 10 },
  { id: '66', serviceType: 'root canal with crown', categoryId: 'dental', zipCode: '560001', pricePaid: 15000, jobDescription: 'Root canal + ceramic crown, molar', submittedAt: '2026-04-19', trustPoints: 10 },
  { id: '67', serviceType: 'root canal', categoryId: 'dental', zipCode: '560002', pricePaid: 6000, companyName: 'Sabka Dentist', jobDescription: 'Front tooth root canal', submittedAt: '2026-03-25', trustPoints: 10 },
  { id: '68', serviceType: 'root canal', categoryId: 'dental', zipCode: '110001', pricePaid: 10000, companyName: 'Clove Dental Delhi', jobDescription: 'Molar root canal', submittedAt: '2026-05-08', trustPoints: 10 },
  // Root Canal - US
  { id: '69', serviceType: 'root canal', categoryId: 'dental', zipCode: '94102', pricePaid: 1100, companyName: 'SF Dental Group', jobDescription: 'Molar root canal, no crown', submittedAt: '2026-05-21', trustPoints: 10 },
  { id: '70', serviceType: 'root canal with crown', categoryId: 'dental', zipCode: '94102', pricePaid: 1400, companyName: 'Bay Area Endodontics', jobDescription: 'Molar root canal + porcelain crown', submittedAt: '2026-04-16', trustPoints: 10 },
  { id: '71', serviceType: 'root canal', categoryId: 'dental', zipCode: '94103', pricePaid: 900, jobDescription: 'Front tooth root canal', submittedAt: '2026-03-22', trustPoints: 10 },
  // Dental Cleaning - India
  { id: '72', serviceType: 'dental cleaning', categoryId: 'dental', zipCode: '110001', pricePaid: 1500, companyName: 'Clove Dental Delhi', jobDescription: 'Scaling and polishing', submittedAt: '2026-05-12', trustPoints: 10 },
  { id: '73', serviceType: 'scaling and polishing', categoryId: 'dental', zipCode: '110001', pricePaid: 2000, jobDescription: 'Deep scaling with fluoride', submittedAt: '2026-04-08', trustPoints: 10 },
  { id: '74', serviceType: 'dental cleaning', categoryId: 'dental', zipCode: '560001', pricePaid: 1200, companyName: 'Sabka Dentist', jobDescription: 'Basic cleaning and polishing', submittedAt: '2026-03-20', trustPoints: 10 },
  // Dental Implant - India
  { id: '75', serviceType: 'dental implant', categoryId: 'dental', zipCode: '110001', pricePaid: 35000, companyName: 'Max Dental Delhi', jobDescription: 'Single implant, titanium, without crown', submittedAt: '2026-05-18', trustPoints: 10 },
  { id: '76', serviceType: 'implant with crown', categoryId: 'dental', zipCode: '110001', pricePaid: 50000, jobDescription: 'Implant + zirconia crown', submittedAt: '2026-04-12', trustPoints: 10 },

  // ===== MOVING =====
  // Local Move - India
  { id: '77', serviceType: 'local move', categoryId: 'moving', zipCode: '110001', pricePaid: 8000, companyName: 'Agarwal Packers', jobDescription: '1BHK, within Delhi, 10 km', submittedAt: '2026-05-24', trustPoints: 10 },
  { id: '78', serviceType: '2BHK move', categoryId: 'moving', zipCode: '110001', pricePaid: 15000, companyName: 'Porter Movers', jobDescription: '2BHK, within Delhi NCR, 15 km', submittedAt: '2026-04-30', trustPoints: 10 },
  { id: '79', serviceType: 'local move', categoryId: 'moving', zipCode: '110002', pricePaid: 5000, jobDescription: 'Studio apartment, same area, 3 km', submittedAt: '2026-03-22', trustPoints: 10 },
  { id: '80', serviceType: '3BHK move', categoryId: 'moving', zipCode: '400001', pricePaid: 25000, companyName: 'Leo Packers Mumbai', jobDescription: '3BHK, within Mumbai, 20 km', submittedAt: '2026-05-15', trustPoints: 10 },
  // Local Move - US
  { id: '81', serviceType: 'local move', categoryId: 'moving', zipCode: '78701', pricePaid: 800, companyName: 'Austin Movers', jobDescription: '1-bedroom apartment, 5 miles', submittedAt: '2026-05-23', trustPoints: 10 },
  { id: '82', serviceType: 'local move', categoryId: 'moving', zipCode: '78701', pricePaid: 1500, companyName: 'Texas Moving Co', jobDescription: '3-bedroom house, 10 miles', submittedAt: '2026-04-28', trustPoints: 10 },
  { id: '83', serviceType: 'local move', categoryId: 'moving', zipCode: '78702', pricePaid: 600, jobDescription: 'Studio apartment, same complex', submittedAt: '2026-03-18', trustPoints: 10 },

  // ===== LANDSCAPING =====
  // Tree Service - US
  { id: '84', serviceType: 'tree removal', categoryId: 'landscaping', zipCode: '97201', pricePaid: 1500, companyName: 'Portland Tree Service', jobDescription: 'Medium oak tree, backyard', submittedAt: '2026-05-24', trustPoints: 10 },
  { id: '85', serviceType: 'tree removal', categoryId: 'landscaping', zipCode: '97201', pricePaid: 2200, jobDescription: 'Large pine tree near power lines', submittedAt: '2026-04-19', trustPoints: 10 },
  { id: '86', serviceType: 'tree trimming', categoryId: 'landscaping', zipCode: '97201', pricePaid: 500, companyName: 'Green Valley Landscaping', jobDescription: '2 large trees, crown reduction', submittedAt: '2026-03-28', trustPoints: 10 },
  // Lawn - US
  { id: '87', serviceType: 'lawn mowing', categoryId: 'landscaping', zipCode: '30301', pricePaid: 50, companyName: 'Atlanta Green Lawns', jobDescription: 'Weekly mow, 0.25 acre lot', submittedAt: '2026-05-20', trustPoints: 10 },
  { id: '88', serviceType: 'sod installation', categoryId: 'landscaping', zipCode: '30301', pricePaid: 2500, jobDescription: '1000 sqft front yard, Bermuda grass', submittedAt: '2026-04-15', trustPoints: 10 },

  // ===== APPLIANCE REPAIR =====
  // Washing Machine - India
  { id: '89', serviceType: 'washing machine repair', categoryId: 'appliance-repair', zipCode: '110001', pricePaid: 2500, companyName: 'Urban Company', jobDescription: 'Drain pump replacement, front load LG', submittedAt: '2026-05-22', trustPoints: 10 },
  { id: '90', serviceType: 'washing machine service', categoryId: 'appliance-repair', zipCode: '110001', pricePaid: 800, jobDescription: 'Deep cleaning and descaling, top load', submittedAt: '2026-04-18', trustPoints: 10 },
  { id: '91', serviceType: 'washing machine repair', categoryId: 'appliance-repair', zipCode: '400001', pricePaid: 3500, companyName: 'Mumbai Appliance Fix', jobDescription: 'Motor replacement, Samsung', submittedAt: '2026-03-25', trustPoints: 10 },
  { id: '92', serviceType: 'washer drum repair', categoryId: 'appliance-repair', zipCode: '560001', pricePaid: 4000, companyName: 'Bangalore Service Center', jobDescription: 'Drum bearing replacement, IFB', submittedAt: '2026-05-10', trustPoints: 10 },
  // Refrigerator - India
  { id: '93', serviceType: 'refrigerator repair', categoryId: 'appliance-repair', zipCode: '110001', pricePaid: 3000, companyName: 'CoolFix Services', jobDescription: 'Thermostat replacement, double door', submittedAt: '2026-05-19', trustPoints: 10 },
  { id: '94', serviceType: 'fridge gas refill', categoryId: 'appliance-repair', zipCode: '110001', pricePaid: 2000, jobDescription: 'Gas refill, single door Whirlpool', submittedAt: '2026-04-14', trustPoints: 10 },
  { id: '95', serviceType: 'fridge compressor repair', categoryId: 'appliance-repair', zipCode: '400001', pricePaid: 5500, companyName: 'Mumbai Appliance Fix', jobDescription: 'Compressor replacement, LG 260L', submittedAt: '2026-03-20', trustPoints: 10 },
  // Water Purifier - India
  { id: '96', serviceType: 'RO service', categoryId: 'appliance-repair', zipCode: '110001', pricePaid: 1500, companyName: 'Aquaguard Service', jobDescription: 'Annual service, filter + membrane change', submittedAt: '2026-05-16', trustPoints: 10 },
  { id: '97', serviceType: 'water purifier service', categoryId: 'appliance-repair', zipCode: '110001', pricePaid: 2500, jobDescription: 'Complete overhaul, Kent RO, all filters', submittedAt: '2026-04-10', trustPoints: 10 },
  { id: '98', serviceType: 'filter replacement', categoryId: 'appliance-repair', zipCode: '560001', pricePaid: 1200, companyName: 'Pureit Service', jobDescription: 'Sediment + carbon filter change', submittedAt: '2026-03-28', trustPoints: 10 },
  // Appliance - US
  { id: '99', serviceType: 'refrigerator repair', categoryId: 'appliance-repair', zipCode: '60601', pricePaid: 350, companyName: 'Chicago Appliance Repair', jobDescription: 'Ice maker replacement, Samsung', submittedAt: '2026-05-20', trustPoints: 10 },
  { id: '100', serviceType: 'dishwasher repair', categoryId: 'appliance-repair', zipCode: '60601', pricePaid: 250, jobDescription: 'Drain pump fix, Bosch dishwasher', submittedAt: '2026-04-15', trustPoints: 10 },

  // ===== PEST CONTROL =====
  // General Pest - India
  { id: '101', serviceType: 'general pest control', categoryId: 'pest-control', zipCode: '110001', pricePaid: 1500, companyName: 'Urban Company', jobDescription: '2BHK, cockroach + ant treatment', submittedAt: '2026-05-21', trustPoints: 10 },
  { id: '102', serviceType: 'cockroach treatment', categoryId: 'pest-control', zipCode: '110001', pricePaid: 1200, companyName: 'Rentokil PCI', jobDescription: '1BHK, gel treatment, 3-month warranty', submittedAt: '2026-04-17', trustPoints: 10 },
  { id: '103', serviceType: 'general pest control', categoryId: 'pest-control', zipCode: '400001', pricePaid: 2000, companyName: 'Hicare Mumbai', jobDescription: '3BHK, comprehensive pest treatment', submittedAt: '2026-03-22', trustPoints: 10 },
  // Termites - India
  { id: '104', serviceType: 'termite treatment', categoryId: 'pest-control', zipCode: '110001', pricePaid: 5000, companyName: 'Rentokil PCI', jobDescription: '2BHK, chemical barrier treatment', submittedAt: '2026-05-18', trustPoints: 10 },
  { id: '105', serviceType: 'anti-termite treatment', categoryId: 'pest-control', zipCode: '110001', pricePaid: 8000, jobDescription: '3BHK, drilling + chemical injection', submittedAt: '2026-04-12', trustPoints: 10 },
  { id: '106', serviceType: 'termite treatment', categoryId: 'pest-control', zipCode: '560001', pricePaid: 4500, companyName: 'Hicare Bangalore', jobDescription: '1BHK, preventive treatment', submittedAt: '2026-03-15', trustPoints: 10 },
  // Pest Control - US
  { id: '107', serviceType: 'general pest control', categoryId: 'pest-control', zipCode: '78701', pricePaid: 200, companyName: 'Austin Pest Solutions', jobDescription: 'Quarterly treatment, 2000 sqft home', submittedAt: '2026-05-15', trustPoints: 10 },
  { id: '108', serviceType: 'termite treatment', categoryId: 'pest-control', zipCode: '78701', pricePaid: 1500, jobDescription: 'Whole house, bait station system', submittedAt: '2026-04-08', trustPoints: 10 },
  { id: '109', serviceType: 'bed bug treatment', categoryId: 'pest-control', zipCode: '10001', pricePaid: 800, companyName: 'NYC Pest Control', jobDescription: '1-bedroom, heat treatment', submittedAt: '2026-03-20', trustPoints: 10 },

  // ===== CLEANING =====
  // Deep Cleaning - India
  { id: '110', serviceType: 'deep cleaning', categoryId: 'cleaning', zipCode: '110001', pricePaid: 4500, companyName: 'Urban Company', jobDescription: '2BHK full deep cleaning, 4-5 hours', submittedAt: '2026-05-23', trustPoints: 10 },
  { id: '111', serviceType: 'full house cleaning', categoryId: 'cleaning', zipCode: '110001', pricePaid: 6500, companyName: 'Jeeves', jobDescription: '3BHK deep cleaning with balcony', submittedAt: '2026-04-19', trustPoints: 10 },
  { id: '112', serviceType: 'deep cleaning', categoryId: 'cleaning', zipCode: '400001', pricePaid: 5000, companyName: 'HouseJoy Mumbai', jobDescription: '2BHK complete, kitchen intensive', submittedAt: '2026-03-25', trustPoints: 10 },
  { id: '113', serviceType: 'post-construction cleaning', categoryId: 'cleaning', zipCode: '560001', pricePaid: 8000, jobDescription: '2BHK, post renovation cleanup', submittedAt: '2026-05-05', trustPoints: 10 },
  // Sofa & Carpet - India
  { id: '114', serviceType: 'sofa cleaning', categoryId: 'cleaning', zipCode: '110001', pricePaid: 1200, companyName: 'Urban Company', jobDescription: '5-seater sofa, shampooing', submittedAt: '2026-05-20', trustPoints: 10 },
  { id: '115', serviceType: 'carpet cleaning', categoryId: 'cleaning', zipCode: '110001', pricePaid: 2000, jobDescription: '200 sqft carpet, deep extraction', submittedAt: '2026-04-15', trustPoints: 10 },
  { id: '116', serviceType: 'mattress cleaning', categoryId: 'cleaning', zipCode: '400001', pricePaid: 800, companyName: 'Clean Corp Mumbai', jobDescription: 'Queen size mattress, anti-allergic treatment', submittedAt: '2026-03-18', trustPoints: 10 },
  // Cleaning - US
  { id: '117', serviceType: 'deep cleaning', categoryId: 'cleaning', zipCode: '94102', pricePaid: 350, companyName: 'SF Clean Co', jobDescription: '2-bed apartment, deep clean', submittedAt: '2026-05-18', trustPoints: 10 },
  { id: '118', serviceType: 'move-out cleaning', categoryId: 'cleaning', zipCode: '94102', pricePaid: 450, jobDescription: '1-bed apartment, end of lease', submittedAt: '2026-04-22', trustPoints: 10 },
  { id: '119', serviceType: 'carpet cleaning', categoryId: 'cleaning', zipCode: '60601', pricePaid: 200, companyName: 'Chicago Carpet Pros', jobDescription: '3 rooms, steam cleaning', submittedAt: '2026-03-15', trustPoints: 10 },

  // ===== HOME SECURITY =====
  // CCTV - India
  { id: '120', serviceType: 'cctv installation', categoryId: 'home-security', zipCode: '110001', pricePaid: 12000, companyName: 'SecureHome Delhi', jobDescription: '4 camera setup, 1TB DVR, installation', submittedAt: '2026-05-22', trustPoints: 10 },
  { id: '121', serviceType: 'security camera setup', categoryId: 'home-security', zipCode: '110001', pricePaid: 8000, jobDescription: '2 wireless cameras, cloud storage setup', submittedAt: '2026-04-18', trustPoints: 10 },
  { id: '122', serviceType: 'cctv installation', categoryId: 'home-security', zipCode: '400001', pricePaid: 15000, companyName: 'Mumbai Security Systems', jobDescription: '6 camera system, 2TB DVR, night vision', submittedAt: '2026-03-25', trustPoints: 10 },
  // Locks - India
  { id: '123', serviceType: 'smart lock install', categoryId: 'home-security', zipCode: '110001', pricePaid: 3500, companyName: 'Urban Company', jobDescription: 'Smart fingerprint lock, main door', submittedAt: '2026-05-16', trustPoints: 10 },
  { id: '124', serviceType: 'door lock installation', categoryId: 'home-security', zipCode: '110001', pricePaid: 1500, jobDescription: 'Godrej lock, main door replacement', submittedAt: '2026-04-10', trustPoints: 10 },
  // Security - US
  { id: '125', serviceType: 'cctv installation', categoryId: 'home-security', zipCode: '30301', pricePaid: 1200, companyName: 'Atlanta Security Pro', jobDescription: '4 camera Ring system, professional install', submittedAt: '2026-05-19', trustPoints: 10 },
  { id: '126', serviceType: 'alarm system install', categoryId: 'home-security', zipCode: '30301', pricePaid: 500, jobDescription: 'SimpliSafe setup, 8 sensors + keypad', submittedAt: '2026-04-14', trustPoints: 10 },
  { id: '127', serviceType: 'video doorbell install', categoryId: 'home-security', zipCode: '78701', pricePaid: 150, jobDescription: 'Ring doorbell, existing wiring', submittedAt: '2026-03-20', trustPoints: 10 },

  // ===== CARPENTRY =====
  // Custom Furniture - India
  { id: '128', serviceType: 'custom wardrobe', categoryId: 'carpentry', zipCode: '110001', pricePaid: 45000, companyName: 'Delhi Interiors', jobDescription: '6ft sliding wardrobe, laminate finish', submittedAt: '2026-05-21', trustPoints: 10 },
  { id: '129', serviceType: 'kitchen cabinet', categoryId: 'carpentry', zipCode: '110001', pricePaid: 65000, companyName: 'HomeLane', jobDescription: 'U-shaped kitchen cabinets, marine ply', submittedAt: '2026-04-16', trustPoints: 10 },
  { id: '130', serviceType: 'TV unit', categoryId: 'carpentry', zipCode: '400001', pricePaid: 25000, jobDescription: 'Wall-mounted TV unit with storage, laminate', submittedAt: '2026-03-22', trustPoints: 10 },
  { id: '131', serviceType: 'bookshelf making', categoryId: 'carpentry', zipCode: '560001', pricePaid: 18000, companyName: 'Bangalore Woodworks', jobDescription: 'Floor-to-ceiling bookshelf, pine wood', submittedAt: '2026-05-08', trustPoints: 10 },
  // Furniture Repair - India
  { id: '132', serviceType: 'furniture repair', categoryId: 'carpentry', zipCode: '110001', pricePaid: 2500, companyName: 'Urban Company', jobDescription: 'Sofa frame repair + polishing', submittedAt: '2026-05-18', trustPoints: 10 },
  { id: '133', serviceType: 'wood polish', categoryId: 'carpentry', zipCode: '110001', pricePaid: 5000, jobDescription: 'Full bedroom set polish, 4 items', submittedAt: '2026-04-12', trustPoints: 10 },
  // Carpentry - US
  { id: '134', serviceType: 'furniture assembly', categoryId: 'carpentry', zipCode: '94102', pricePaid: 150, companyName: 'SF Handyman', jobDescription: 'IKEA wardrobe assembly, PAX system', submittedAt: '2026-05-15', trustPoints: 10 },
  { id: '135', serviceType: 'door repair', categoryId: 'carpentry', zipCode: '94102', pricePaid: 300, jobDescription: 'Interior door, hinge replacement + alignment', submittedAt: '2026-04-20', trustPoints: 10 },

  // ===== INTERIOR DESIGN =====
  // False Ceiling - India
  { id: '136', serviceType: 'false ceiling installation', categoryId: 'interior-design', zipCode: '110001', pricePaid: 25000, companyName: 'Delhi Interiors', jobDescription: 'Living room, gypsum, 150 sqft with cove lighting', submittedAt: '2026-05-20', trustPoints: 10 },
  { id: '137', serviceType: 'POP ceiling', categoryId: 'interior-design', zipCode: '110001', pricePaid: 18000, jobDescription: 'Bedroom, POP design, 120 sqft', submittedAt: '2026-04-15', trustPoints: 10 },
  { id: '138', serviceType: 'false ceiling installation', categoryId: 'interior-design', zipCode: '400001', pricePaid: 30000, companyName: 'Mumbai Interior Studio', jobDescription: 'Hall + dining, gypsum, 250 sqft', submittedAt: '2026-03-20', trustPoints: 10 },
  // Modular Kitchen - India
  { id: '139', serviceType: 'modular kitchen', categoryId: 'interior-design', zipCode: '110001', pricePaid: 150000, companyName: 'HomeLane', jobDescription: 'L-shape modular kitchen, acrylic finish, full accessories', submittedAt: '2026-05-18', trustPoints: 10 },
  { id: '140', serviceType: 'modular kitchen', categoryId: 'interior-design', zipCode: '560001', pricePaid: 120000, companyName: 'Livspace Bangalore', jobDescription: 'Straight kitchen, laminate, basic accessories', submittedAt: '2026-04-10', trustPoints: 10 },
  { id: '141', serviceType: 'kitchen countertop', categoryId: 'interior-design', zipCode: '110001', pricePaid: 35000, jobDescription: 'Granite countertop, 20 sqft, L-shape', submittedAt: '2026-03-15', trustPoints: 10 },
  // Flooring - India
  { id: '142', serviceType: 'tile installation', categoryId: 'interior-design', zipCode: '110001', pricePaid: 45, companyName: 'Delhi Tiles & More', jobDescription: 'Per sqft rate, vitrified tiles, hall', submittedAt: '2026-05-12', trustPoints: 10 },
  { id: '143', serviceType: 'wooden flooring', categoryId: 'interior-design', zipCode: '400001', pricePaid: 180, jobDescription: 'Per sqft, engineered wood, bedroom', submittedAt: '2026-04-08', trustPoints: 10 },
  { id: '144', serviceType: 'marble polishing', categoryId: 'interior-design', zipCode: '110001', pricePaid: 12000, companyName: 'Stone Care India', jobDescription: '500 sqft, diamond polishing', submittedAt: '2026-03-22', trustPoints: 10 },
  // Interior - US
  { id: '145', serviceType: 'tile installation', categoryId: 'interior-design', zipCode: '10001', pricePaid: 2500, companyName: 'NYC Tile Pros', jobDescription: 'Bathroom floor, 60 sqft, porcelain', submittedAt: '2026-05-16', trustPoints: 10 },
  { id: '146', serviceType: 'kitchen countertop', categoryId: 'interior-design', zipCode: '10001', pricePaid: 4500, jobDescription: 'Quartz countertop, 30 sqft, with installation', submittedAt: '2026-04-20', trustPoints: 10 },

  // ===== HOUSE RENT =====
  // Sources: NoBroker, MagicBricks, Zumper, Zillow, Colive, Zolo (Q1-Q2 2026 data)
  // India saw 14% surge in residential rents in Q1 2026

  // 1 BHK - Mumbai (400xxx)
  { id: '147', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '400051', pricePaid: 35000, companyName: 'NoBroker', jobDescription: '1BHK, 450 sqft, semi-furnished, Bandra East', submittedAt: '2026-06-01', trustPoints: 10 },
  { id: '148', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '400051', pricePaid: 45000, jobDescription: '1BHK, 500 sqft, fully furnished, Bandra West', submittedAt: '2026-05-15', trustPoints: 10 },
  { id: '149', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '400069', pricePaid: 20000, jobDescription: '1BHK, 400 sqft, unfurnished, Andheri East', submittedAt: '2026-05-20', trustPoints: 10 },
  { id: '150', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '400069', pricePaid: 28000, companyName: 'MagicBricks', jobDescription: '1BHK, 500 sqft, semi-furnished, Andheri West', submittedAt: '2026-06-05', trustPoints: 10 },
  { id: '151', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '400076', pricePaid: 45000, jobDescription: '1BHK, 430 sqft, semi-furnished, Powai, Hiranandani', submittedAt: '2026-05-25', trustPoints: 10 },
  { id: '152', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '400076', pricePaid: 72000, companyName: 'NoBroker', jobDescription: '1BHK, 450 sqft, fully furnished, Powai premium society', submittedAt: '2026-06-02', trustPoints: 10 },

  // 1 BHK - Delhi/NCR (110xxx)
  { id: '153', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '110001', pricePaid: 25000, jobDescription: '1BHK, 500 sqft, semi-furnished, Connaught Place area', submittedAt: '2026-06-01', trustPoints: 10 },
  { id: '154', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '110048', pricePaid: 18000, jobDescription: '1BHK, 550 sqft, unfurnished, Saket', submittedAt: '2026-05-18', trustPoints: 10 },
  { id: '155', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '110092', pricePaid: 12000, jobDescription: '1BHK, 450 sqft, unfurnished, Shahdara', submittedAt: '2026-05-28', trustPoints: 10 },

  // 1 BHK - Bangalore (560xxx)
  { id: '156', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '560034', pricePaid: 16000, companyName: 'NoBroker', jobDescription: '1BHK, 550 sqft, semi-furnished, Electronic City', submittedAt: '2026-06-02', trustPoints: 10 },
  { id: '157', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '560038', pricePaid: 22000, jobDescription: '1BHK, 600 sqft, semi-furnished, Indiranagar', submittedAt: '2026-05-20', trustPoints: 10 },
  { id: '158', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '560066', pricePaid: 18000, jobDescription: '1BHK, 500 sqft, semi-furnished, Whitefield', submittedAt: '2026-06-04', trustPoints: 10 },

  // 2 BHK - Mumbai
  { id: '159', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '400051', pricePaid: 65000, companyName: 'Housing.com', jobDescription: '2BHK, 800 sqft, semi-furnished, Bandra West', submittedAt: '2026-06-03', trustPoints: 10 },
  { id: '160', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '400069', pricePaid: 35000, jobDescription: '2BHK, 750 sqft, semi-furnished, Andheri East', submittedAt: '2026-05-22', trustPoints: 10 },
  { id: '161', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '400069', pricePaid: 42000, jobDescription: '2BHK, 850 sqft, furnished, Andheri West', submittedAt: '2026-06-01', trustPoints: 10 },
  { id: '162', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '400076', pricePaid: 55000, jobDescription: '2BHK, 900 sqft, semi-furnished, Powai', submittedAt: '2026-05-28', trustPoints: 10 },

  // 2 BHK - Delhi/NCR
  { id: '163', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '110001', pricePaid: 38000, jobDescription: '2BHK, 900 sqft, semi-furnished, Karol Bagh', submittedAt: '2026-06-01', trustPoints: 10 },
  { id: '164', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '110048', pricePaid: 30000, jobDescription: '2BHK, 1000 sqft, unfurnished, Saket', submittedAt: '2026-05-25', trustPoints: 10 },
  { id: '165', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '110092', pricePaid: 18000, companyName: 'NoBroker', jobDescription: '2BHK, 850 sqft, unfurnished, Laxmi Nagar', submittedAt: '2026-06-04', trustPoints: 10 },

  // 2 BHK - Bangalore
  { id: '166', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '560034', pricePaid: 22000, companyName: 'NoBroker', jobDescription: '2BHK, 1000 sqft, semi-furnished, Electronic City', submittedAt: '2026-06-01', trustPoints: 10 },
  { id: '167', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '560038', pricePaid: 35000, jobDescription: '2BHK, 1100 sqft, semi-furnished, Koramangala', submittedAt: '2026-05-30', trustPoints: 10 },
  { id: '168', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '560066', pricePaid: 25000, companyName: 'MagicBricks', jobDescription: '2BHK, 1050 sqft, semi-furnished, Whitefield', submittedAt: '2026-05-20', trustPoints: 10 },

  // 2 BHK - Pune & Chennai
  { id: '169', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '411001', pricePaid: 22000, jobDescription: '2BHK, 900 sqft, semi-furnished, Shivaji Nagar, Pune', submittedAt: '2026-05-28', trustPoints: 10 },
  { id: '170', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '600001', pricePaid: 20000, jobDescription: '2BHK, 850 sqft, semi-furnished, T Nagar, Chennai', submittedAt: '2026-05-25', trustPoints: 10 },

  // 3 BHK - India
  { id: '171', serviceType: '3bhk rent', categoryId: 'house-rent', zipCode: '400051', pricePaid: 120000, companyName: 'Housing.com', jobDescription: '3BHK, 1400 sqft, fully furnished, Bandra West', submittedAt: '2026-06-02', trustPoints: 10 },
  { id: '172', serviceType: '3bhk rent', categoryId: 'house-rent', zipCode: '400076', pricePaid: 75000, jobDescription: '3BHK, 1200 sqft, semi-furnished, Powai', submittedAt: '2026-05-25', trustPoints: 10 },
  { id: '173', serviceType: '3bhk rent', categoryId: 'house-rent', zipCode: '110048', pricePaid: 55000, jobDescription: '3BHK, 1500 sqft, semi-furnished, Greater Kailash', submittedAt: '2026-06-01', trustPoints: 10 },
  { id: '174', serviceType: '3bhk rent', categoryId: 'house-rent', zipCode: '560038', pricePaid: 50000, companyName: 'MagicBricks', jobDescription: '3BHK, 1600 sqft, semi-furnished, Indiranagar', submittedAt: '2026-05-28', trustPoints: 10 },
  { id: '175', serviceType: '3bhk rent', categoryId: 'house-rent', zipCode: '411001', pricePaid: 35000, jobDescription: '3BHK, 1300 sqft, semi-furnished, Koregaon Park, Pune', submittedAt: '2026-05-22', trustPoints: 10 },

  // PG / Shared - India (based on Zolo, Colive, Stanza Living 2026 rates)
  { id: '176', serviceType: 'pg rent', categoryId: 'house-rent', zipCode: '560066', pricePaid: 7500, companyName: 'Zolo', jobDescription: 'Double sharing, AC, food included, Whitefield', submittedAt: '2026-06-05', trustPoints: 10 },
  { id: '177', serviceType: 'pg rent', categoryId: 'house-rent', zipCode: '560066', pricePaid: 13000, companyName: 'Colive', jobDescription: 'Single room, AC, attached bath, Whitefield premium', submittedAt: '2026-05-30', trustPoints: 10 },
  { id: '178', serviceType: 'pg rent', categoryId: 'house-rent', zipCode: '560034', pricePaid: 7000, companyName: 'Zolo', jobDescription: 'Double sharing, non-AC, food, Electronic City', submittedAt: '2026-06-01', trustPoints: 10 },
  { id: '179', serviceType: 'pg rent', categoryId: 'house-rent', zipCode: '560034', pricePaid: 11000, companyName: 'Stanza Living', jobDescription: 'Single room, AC, Electronic City Phase 1', submittedAt: '2026-05-22', trustPoints: 10 },
  { id: '180', serviceType: 'pg rent', categoryId: 'house-rent', zipCode: '400069', pricePaid: 12000, jobDescription: 'Double sharing PG, food, WiFi, Andheri East', submittedAt: '2026-06-01', trustPoints: 10 },
  { id: '181', serviceType: 'pg rent', categoryId: 'house-rent', zipCode: '400069', pricePaid: 18000, companyName: 'NestAway', jobDescription: 'Single room, furnished, Andheri West', submittedAt: '2026-05-20', trustPoints: 10 },
  { id: '182', serviceType: 'shared room rent', categoryId: 'house-rent', zipCode: '411001', pricePaid: 8000, jobDescription: 'Triple sharing, Hinjewadi, Pune', submittedAt: '2026-05-18', trustPoints: 10 },

  // House Rent - US (based on Zumper March 2026 report, Zillow data)
  { id: '183', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '10001', pricePaid: 3400, jobDescription: '1BR apartment, 550 sqft, Manhattan, walk-up', submittedAt: '2026-06-01', trustPoints: 10 },
  { id: '184', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '10001', pricePaid: 3900, companyName: 'StreetEasy', jobDescription: '1BR, 600 sqft, Midtown, elevator doorman', submittedAt: '2026-05-20', trustPoints: 10 },
  { id: '185', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '10001', pricePaid: 4000, jobDescription: '2BR apartment, 850 sqft, Upper East Side', submittedAt: '2026-05-28', trustPoints: 10 },
  { id: '186', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '10001', pricePaid: 4800, jobDescription: '2BR, 900 sqft, West Village, pre-war', submittedAt: '2026-06-03', trustPoints: 10 },
  { id: '187', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '94102', pricePaid: 3200, jobDescription: '1BR, 650 sqft, SOMA, San Francisco', submittedAt: '2026-06-01', trustPoints: 10 },
  { id: '188', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '94102', pricePaid: 3790, companyName: 'Zillow', jobDescription: '1BR, 700 sqft, Mission District, SF (new build)', submittedAt: '2026-05-25', trustPoints: 10 },
  { id: '189', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '94102', pricePaid: 4200, jobDescription: '2BR, 950 sqft, Pacific Heights, SF', submittedAt: '2026-06-02', trustPoints: 10 },
  { id: '190', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '94102', pricePaid: 5270, companyName: 'Zumper', jobDescription: '2BR, 1100 sqft, Marina District, SF (all-time high)', submittedAt: '2026-05-18', trustPoints: 10 },
  { id: '191', serviceType: '1bhk rent', categoryId: 'house-rent', zipCode: '60601', pricePaid: 2100, jobDescription: '1BR, 700 sqft, The Loop, Chicago', submittedAt: '2026-05-25', trustPoints: 10 },
  { id: '192', serviceType: '2bhk rent', categoryId: 'house-rent', zipCode: '60601', pricePaid: 2800, jobDescription: '2BR, 1000 sqft, River North, Chicago', submittedAt: '2026-06-01', trustPoints: 10 },
  { id: '193', serviceType: '3bhk rent', categoryId: 'house-rent', zipCode: '78701', pricePaid: 3200, companyName: 'Apartments.com', jobDescription: '3BR house, 1500 sqft, East Austin, TX', submittedAt: '2026-05-22', trustPoints: 10 },

  // Commercial / Office - India
  { id: '194', serviceType: 'office rent', categoryId: 'house-rent', zipCode: '400051', pricePaid: 120000, jobDescription: '500 sqft, furnished office, BKC, Mumbai', submittedAt: '2026-06-01', trustPoints: 10 },
  { id: '195', serviceType: 'shop rent', categoryId: 'house-rent', zipCode: '560038', pricePaid: 55000, jobDescription: '300 sqft, ground floor shop, 100 Feet Road, Indiranagar', submittedAt: '2026-05-28', trustPoints: 10 },
  { id: '196', serviceType: 'coworking space rent', categoryId: 'house-rent', zipCode: '110001', pricePaid: 9000, companyName: 'WeWork', jobDescription: 'Hot desk, per seat/month, Connaught Place', submittedAt: '2026-06-05', trustPoints: 10 },
];
