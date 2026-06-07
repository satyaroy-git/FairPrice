import { PriceSubmission } from '@/lib/types';

// Seed data - realistic price submissions for various services
export const submissions: PriceSubmission[] = [
  // Plumbing - Water Heater Replacement
  { id: '1', serviceType: 'water heater replacement', categoryId: 'plumbing', zipCode: '90210', pricePaid: 1200, companyName: 'Quick Plumb Pro', jobDescription: '50-gallon gas water heater, standard install', submittedAt: '2026-05-15', trustPoints: 10 },
  { id: '2', serviceType: 'water heater replacement', categoryId: 'plumbing', zipCode: '90210', pricePaid: 1450, companyName: 'Beverly Hills Plumbing', jobDescription: '50-gallon gas, tankless upgrade', submittedAt: '2026-04-20', trustPoints: 10 },
  { id: '3', serviceType: 'water heater replacement', categoryId: 'plumbing', zipCode: '90210', pricePaid: 1100, jobDescription: '40-gallon electric water heater', submittedAt: '2026-03-10', trustPoints: 10 },
  { id: '4', serviceType: 'water heater replacement', categoryId: 'plumbing', zipCode: '90210', pricePaid: 1600, companyName: 'Premium Plumbing Co', jobDescription: 'Tankless water heater, complex install', submittedAt: '2026-02-28', trustPoints: 10 },
  { id: '5', serviceType: 'water heater replacement', categoryId: 'plumbing', zipCode: '90211', pricePaid: 1350, jobDescription: '50-gallon gas water heater', submittedAt: '2026-05-01', trustPoints: 10 },
  { id: '6', serviceType: 'water heater replacement', categoryId: 'plumbing', zipCode: '90212', pricePaid: 1250, companyName: 'Quick Plumb Pro', jobDescription: '50-gallon gas, standard', submittedAt: '2026-04-15', trustPoints: 10 },

  // Plumbing - Leak Fix
  { id: '7', serviceType: 'leak fix', categoryId: 'plumbing', zipCode: '90210', pricePaid: 250, companyName: 'Quick Plumb Pro', jobDescription: 'Kitchen sink leak, pipe joint', submittedAt: '2026-05-20', trustPoints: 10 },
  { id: '8', serviceType: 'leak fix', categoryId: 'plumbing', zipCode: '90210', pricePaid: 350, jobDescription: 'Bathroom wall leak, drywall access needed', submittedAt: '2026-04-10', trustPoints: 10 },
  { id: '9', serviceType: 'leak fix', categoryId: 'plumbing', zipCode: '90210', pricePaid: 180, companyName: 'Beverly Hills Plumbing', jobDescription: 'Simple faucet drip fix', submittedAt: '2026-03-25', trustPoints: 10 },
  { id: '10', serviceType: 'leak fix', categoryId: 'plumbing', zipCode: '90211', pricePaid: 275, jobDescription: 'Pipe leak under sink', submittedAt: '2026-05-05', trustPoints: 10 },

  // Electrical - Panel Upgrade
  { id: '11', serviceType: 'panel upgrade', categoryId: 'electrical', zipCode: '10001', pricePaid: 2200, companyName: 'NYC Electric', jobDescription: '100A to 200A panel upgrade', submittedAt: '2026-05-18', trustPoints: 10 },
  { id: '12', serviceType: 'panel upgrade', categoryId: 'electrical', zipCode: '10001', pricePaid: 2500, companyName: 'Metro Electrical Services', jobDescription: '200A panel, with subpanel', submittedAt: '2026-04-22', trustPoints: 10 },
  { id: '13', serviceType: 'panel upgrade', categoryId: 'electrical', zipCode: '10001', pricePaid: 1900, jobDescription: '100A to 200A, straightforward', submittedAt: '2026-03-15', trustPoints: 10 },
  { id: '14', serviceType: 'panel upgrade', categoryId: 'electrical', zipCode: '10002', pricePaid: 2350, companyName: 'NYC Electric', jobDescription: '200A upgrade, older building', submittedAt: '2026-05-02', trustPoints: 10 },

  // Auto Repair - Brake Pads
  { id: '15', serviceType: 'brake pads replacement', categoryId: 'auto-repair', zipCode: '60601', pricePaid: 350, companyName: 'Chicago Auto Care', jobDescription: 'Front brake pads, Honda Civic 2020', submittedAt: '2026-05-25', trustPoints: 10 },
  { id: '16', serviceType: 'brake pads replacement', categoryId: 'auto-repair', zipCode: '60601', pricePaid: 450, companyName: 'Premium Auto Shop', jobDescription: 'Front and rear brake pads, Toyota Camry', submittedAt: '2026-04-30', trustPoints: 10 },
  { id: '17', serviceType: 'brake pads replacement', categoryId: 'auto-repair', zipCode: '60601', pricePaid: 300, jobDescription: 'Front brake pads, basic sedan', submittedAt: '2026-03-20', trustPoints: 10 },
  { id: '18', serviceType: 'brake pads replacement', categoryId: 'auto-repair', zipCode: '60602', pricePaid: 380, companyName: 'Chicago Auto Care', jobDescription: 'Rear brake pads, SUV', submittedAt: '2026-05-10', trustPoints: 10 },

  // HVAC - AC Tune-up
  { id: '19', serviceType: 'ac tune-up', categoryId: 'hvac', zipCode: '85001', pricePaid: 120, companyName: 'Desert Cool HVAC', jobDescription: 'Annual AC maintenance, 3-ton unit', submittedAt: '2026-05-22', trustPoints: 10 },
  { id: '20', serviceType: 'ac tune-up', categoryId: 'hvac', zipCode: '85001', pricePaid: 150, companyName: 'Arizona Air Pros', jobDescription: 'AC tune-up, refrigerant top-off', submittedAt: '2026-04-18', trustPoints: 10 },
  { id: '21', serviceType: 'ac tune-up', categoryId: 'hvac', zipCode: '85001', pricePaid: 95, jobDescription: 'Basic AC inspection and cleaning', submittedAt: '2026-03-30', trustPoints: 10 },
  { id: '22', serviceType: 'ac tune-up', categoryId: 'hvac', zipCode: '85002', pricePaid: 135, companyName: 'Desert Cool HVAC', jobDescription: 'AC maintenance, 2-ton unit', submittedAt: '2026-05-08', trustPoints: 10 },

  // Home Exterior - Roof Repair
  { id: '23', serviceType: 'roof repair', categoryId: 'home-exterior', zipCode: '30301', pricePaid: 800, companyName: 'Atlanta Roofing Co', jobDescription: 'Shingle repair, small leak area', submittedAt: '2026-05-19', trustPoints: 10 },
  { id: '24', serviceType: 'roof repair', categoryId: 'home-exterior', zipCode: '30301', pricePaid: 1200, jobDescription: 'Multiple leak points, flashing repair', submittedAt: '2026-04-25', trustPoints: 10 },
  { id: '25', serviceType: 'roof repair', categoryId: 'home-exterior', zipCode: '30301', pricePaid: 650, companyName: 'Southern Exteriors', jobDescription: 'Minor shingle replacement, 1 section', submittedAt: '2026-03-12', trustPoints: 10 },
  { id: '26', serviceType: 'roof repair', categoryId: 'home-exterior', zipCode: '30302', pricePaid: 950, companyName: 'Atlanta Roofing Co', jobDescription: 'Roof patch and seal, moderate damage', submittedAt: '2026-05-03', trustPoints: 10 },

  // Dental - Root Canal
  { id: '27', serviceType: 'root canal', categoryId: 'dental', zipCode: '94102', pricePaid: 1100, companyName: 'SF Dental Group', jobDescription: 'Molar root canal, no crown', submittedAt: '2026-05-21', trustPoints: 10 },
  { id: '28', serviceType: 'root canal', categoryId: 'dental', zipCode: '94102', pricePaid: 1400, companyName: 'Bay Area Endodontics', jobDescription: 'Molar root canal with crown', submittedAt: '2026-04-16', trustPoints: 10 },
  { id: '29', serviceType: 'root canal', categoryId: 'dental', zipCode: '94102', pricePaid: 900, jobDescription: 'Front tooth root canal', submittedAt: '2026-03-22', trustPoints: 10 },
  { id: '30', serviceType: 'root canal', categoryId: 'dental', zipCode: '94103', pricePaid: 1200, companyName: 'SF Dental Group', jobDescription: 'Premolar root canal', submittedAt: '2026-05-06', trustPoints: 10 },

  // Moving - Local Move
  { id: '31', serviceType: 'local move', categoryId: 'moving', zipCode: '78701', pricePaid: 800, companyName: 'Austin Movers', jobDescription: '1-bedroom apartment, 5 miles', submittedAt: '2026-05-23', trustPoints: 10 },
  { id: '32', serviceType: 'local move', categoryId: 'moving', zipCode: '78701', pricePaid: 1500, companyName: 'Texas Moving Co', jobDescription: '3-bedroom house, 10 miles', submittedAt: '2026-04-28', trustPoints: 10 },
  { id: '33', serviceType: 'local move', categoryId: 'moving', zipCode: '78701', pricePaid: 600, jobDescription: 'Studio apartment, same building complex', submittedAt: '2026-03-18', trustPoints: 10 },
  { id: '34', serviceType: 'local move', categoryId: 'moving', zipCode: '78702', pricePaid: 1100, companyName: 'Austin Movers', jobDescription: '2-bedroom, 8 miles', submittedAt: '2026-05-11', trustPoints: 10 },

  // Landscaping - Tree Removal
  { id: '35', serviceType: 'tree removal', categoryId: 'landscaping', zipCode: '97201', pricePaid: 1500, companyName: 'Portland Tree Service', jobDescription: 'Medium oak tree, backyard', submittedAt: '2026-05-24', trustPoints: 10 },
  { id: '36', serviceType: 'tree removal', categoryId: 'landscaping', zipCode: '97201', pricePaid: 2200, jobDescription: 'Large pine tree near power lines', submittedAt: '2026-04-19', trustPoints: 10 },
  { id: '37', serviceType: 'tree removal', categoryId: 'landscaping', zipCode: '97201', pricePaid: 800, companyName: 'Green Valley Landscaping', jobDescription: 'Small dead tree removal', submittedAt: '2026-03-28', trustPoints: 10 },
  { id: '38', serviceType: 'tree removal', categoryId: 'landscaping', zipCode: '97202', pricePaid: 1800, companyName: 'Portland Tree Service', jobDescription: 'Large maple, stump grinding included', submittedAt: '2026-05-07', trustPoints: 10 },

  // India - Plumbing
  { id: '39', serviceType: 'water heater installation', categoryId: 'plumbing', zipCode: '110001', pricePaid: 8500, companyName: 'Delhi Plumbing Services', jobDescription: '15L geyser installation, bathroom', submittedAt: '2026-05-20', trustPoints: 10 },
  { id: '40', serviceType: 'water heater installation', categoryId: 'plumbing', zipCode: '110001', pricePaid: 12000, companyName: 'HomeFix India', jobDescription: '25L geyser, new plumbing lines', submittedAt: '2026-04-15', trustPoints: 10 },
  { id: '41', serviceType: 'water heater installation', categoryId: 'plumbing', zipCode: '110002', pricePaid: 9500, jobDescription: '15L instant geyser, standard install', submittedAt: '2026-03-22', trustPoints: 10 },
  { id: '42', serviceType: 'leak fix', categoryId: 'plumbing', zipCode: '110001', pricePaid: 1500, companyName: 'Delhi Plumbing Services', jobDescription: 'Kitchen pipe leak repair', submittedAt: '2026-05-18', trustPoints: 10 },
  { id: '43', serviceType: 'leak fix', categoryId: 'plumbing', zipCode: '110001', pricePaid: 2500, jobDescription: 'Bathroom concealed pipe leak, wall cutting needed', submittedAt: '2026-04-10', trustPoints: 10 },
  { id: '44', serviceType: 'leak fix', categoryId: 'plumbing', zipCode: '110003', pricePaid: 1800, companyName: 'UrbanClap Plumber', jobDescription: 'Tap leak and washer replacement', submittedAt: '2026-03-28', trustPoints: 10 },

  // India - Electrical
  { id: '45', serviceType: 'wiring repair', categoryId: 'electrical', zipCode: '400001', pricePaid: 5000, companyName: 'Mumbai Electricals', jobDescription: '1 room complete rewiring', submittedAt: '2026-05-22', trustPoints: 10 },
  { id: '46', serviceType: 'wiring repair', categoryId: 'electrical', zipCode: '400001', pricePaid: 15000, jobDescription: '2BHK full house rewiring', submittedAt: '2026-04-18', trustPoints: 10 },
  { id: '47', serviceType: 'wiring repair', categoryId: 'electrical', zipCode: '400002', pricePaid: 8000, companyName: 'PowerFix Solutions', jobDescription: '1BHK partial rewiring with MCB', submittedAt: '2026-03-12', trustPoints: 10 },
  { id: '48', serviceType: 'inverter installation', categoryId: 'electrical', zipCode: '110001', pricePaid: 3500, companyName: 'Delhi Electricals', jobDescription: 'Inverter + battery connection setup', submittedAt: '2026-05-14', trustPoints: 10 },
  { id: '49', serviceType: 'inverter installation', categoryId: 'electrical', zipCode: '110001', pricePaid: 4500, jobDescription: 'Inverter installation with new wiring', submittedAt: '2026-04-20', trustPoints: 10 },

  // India - Auto Repair
  { id: '50', serviceType: 'car service', categoryId: 'auto-repair', zipCode: '560001', pricePaid: 5500, companyName: 'GoMechanic Bangalore', jobDescription: 'Full car service, Maruti Swift, oil+filter+AC', submittedAt: '2026-05-25', trustPoints: 10 },
  { id: '51', serviceType: 'car service', categoryId: 'auto-repair', zipCode: '560001', pricePaid: 8000, companyName: 'Authorized Maruti Service', jobDescription: 'Periodic service with brake pad replacement', submittedAt: '2026-04-28', trustPoints: 10 },
  { id: '52', serviceType: 'car service', categoryId: 'auto-repair', zipCode: '560002', pricePaid: 4500, jobDescription: 'Basic service, Hyundai i20, oil change', submittedAt: '2026-03-15', trustPoints: 10 },
  { id: '53', serviceType: 'brake pads replacement', categoryId: 'auto-repair', zipCode: '110001', pricePaid: 3500, companyName: 'Delhi Auto Care', jobDescription: 'Front brake pads, Maruti Baleno', submittedAt: '2026-05-10', trustPoints: 10 },
  { id: '54', serviceType: 'brake pads replacement', categoryId: 'auto-repair', zipCode: '110002', pricePaid: 4200, jobDescription: 'Front and rear brake pads, Honda City', submittedAt: '2026-04-22', trustPoints: 10 },

  // India - HVAC (AC Service)
  { id: '55', serviceType: 'ac service', categoryId: 'hvac', zipCode: '110001', pricePaid: 1200, companyName: 'Urban Company', jobDescription: 'Split AC deep cleaning, 1.5 ton', submittedAt: '2026-05-21', trustPoints: 10 },
  { id: '56', serviceType: 'ac service', categoryId: 'hvac', zipCode: '110001', pricePaid: 2500, companyName: 'CoolFix Services', jobDescription: 'AC gas refill + general service', submittedAt: '2026-04-16', trustPoints: 10 },
  { id: '57', serviceType: 'ac service', categoryId: 'hvac', zipCode: '110002', pricePaid: 800, jobDescription: 'Window AC basic cleaning', submittedAt: '2026-03-20', trustPoints: 10 },
  { id: '58', serviceType: 'ac installation', categoryId: 'hvac', zipCode: '400001', pricePaid: 3500, companyName: 'Mumbai Cool Tech', jobDescription: 'Split AC installation, 1.5 ton, ground floor', submittedAt: '2026-05-08', trustPoints: 10 },
  { id: '59', serviceType: 'ac installation', categoryId: 'hvac', zipCode: '400001', pricePaid: 5000, jobDescription: 'Split AC install, 2 ton, 3rd floor with piping', submittedAt: '2026-04-12', trustPoints: 10 },

  // India - Home Exterior (Painting)
  { id: '60', serviceType: 'house painting', categoryId: 'home-exterior', zipCode: '110001', pricePaid: 45000, companyName: 'Asian Paints Service', jobDescription: '2BHK full interior painting, premium finish', submittedAt: '2026-05-19', trustPoints: 10 },
  { id: '61', serviceType: 'house painting', categoryId: 'home-exterior', zipCode: '110001', pricePaid: 25000, jobDescription: '1BHK interior painting, standard emulsion', submittedAt: '2026-04-25', trustPoints: 10 },
  { id: '62', serviceType: 'house painting', categoryId: 'home-exterior', zipCode: '110003', pricePaid: 35000, companyName: 'HomeFix India', jobDescription: '2BHK, walls and ceiling, Berger paint', submittedAt: '2026-03-18', trustPoints: 10 },

  // India - Dental
  { id: '63', serviceType: 'root canal', categoryId: 'dental', zipCode: '560001', pricePaid: 8000, companyName: 'Clove Dental Bangalore', jobDescription: 'Single root canal, molar, without crown', submittedAt: '2026-05-23', trustPoints: 10 },
  { id: '64', serviceType: 'root canal', categoryId: 'dental', zipCode: '560001', pricePaid: 15000, jobDescription: 'Root canal with ceramic crown', submittedAt: '2026-04-19', trustPoints: 10 },
  { id: '65', serviceType: 'root canal', categoryId: 'dental', zipCode: '560002', pricePaid: 6000, companyName: 'Sabka Dentist', jobDescription: 'Front tooth root canal', submittedAt: '2026-03-25', trustPoints: 10 },
  { id: '66', serviceType: 'dental cleaning', categoryId: 'dental', zipCode: '110001', pricePaid: 1500, companyName: 'Clove Dental Delhi', jobDescription: 'Scaling and polishing', submittedAt: '2026-05-12', trustPoints: 10 },
  { id: '67', serviceType: 'dental cleaning', categoryId: 'dental', zipCode: '110001', pricePaid: 2000, jobDescription: 'Deep scaling with fluoride treatment', submittedAt: '2026-04-08', trustPoints: 10 },

  // India - Moving (Packers & Movers)
  { id: '68', serviceType: 'local move', categoryId: 'moving', zipCode: '110001', pricePaid: 8000, companyName: 'Agarwal Packers', jobDescription: '1BHK, within Delhi, 10 km', submittedAt: '2026-05-24', trustPoints: 10 },
  { id: '69', serviceType: 'local move', categoryId: 'moving', zipCode: '110001', pricePaid: 15000, companyName: 'Porter Movers', jobDescription: '2BHK, within Delhi, 15 km', submittedAt: '2026-04-30', trustPoints: 10 },
  { id: '70', serviceType: 'local move', categoryId: 'moving', zipCode: '110002', pricePaid: 5000, jobDescription: 'Studio apartment, same area, 3 km', submittedAt: '2026-03-22', trustPoints: 10 },
];
