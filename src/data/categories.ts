import { ServiceCategory } from '@/lib/types';

export interface UnitConfig {
  label: string;        // e.g., "Area (sq ft)", "Number of cameras"
  unit: string;         // e.g., "sq ft", "units", "rooms", "teeth"
  placeholder: string;  // e.g., "e.g., 500"
  options?: number[];   // predefined options if applicable
}

export interface SubCategory {
  id: string;
  name: string;
  serviceTypes: string[];
  unitConfig?: UnitConfig;  // optional - only for services that need quantity/area
}

export interface CategoryWithSubs extends ServiceCategory {
  subcategories: SubCategory[];
}

export const categories: CategoryWithSubs[] = [
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: '🔧',
    description: 'Leak fix, water heater, pipe replacement, drain cleaning',
    subcategories: [
      { id: 'water-heater', name: 'Water Heater', serviceTypes: ['water heater installation', 'water heater replacement', 'geyser installation', 'tankless water heater'], unitConfig: { label: 'Capacity (liters)', unit: 'L', placeholder: 'e.g., 15', options: [10, 15, 25, 50] } },
      { id: 'leak-repair', name: 'Leak Repair', serviceTypes: ['leak fix', 'pipe leak repair', 'faucet repair', 'toilet leak fix'], unitConfig: { label: 'Number of leaks', unit: 'leaks', placeholder: 'e.g., 1', options: [1, 2, 3] } },
      { id: 'drain-cleaning', name: 'Drain Cleaning', serviceTypes: ['drain cleaning', 'sewer line clearing', 'clogged drain', 'drain snake'], unitConfig: { label: 'Number of drains', unit: 'drains', placeholder: 'e.g., 1', options: [1, 2, 3, 4] } },
      { id: 'pipe-work', name: 'Pipe Work', serviceTypes: ['pipe replacement', 'pipe fitting', 'pipe insulation', 'repipe'], unitConfig: { label: 'Length (feet)', unit: 'ft', placeholder: 'e.g., 20' } },
      { id: 'toilet-repair', name: 'Toilet & Fixtures', serviceTypes: ['toilet installation', 'toilet repair', 'bidet installation', 'fixture replacement'], unitConfig: { label: 'Number of fixtures', unit: 'fixtures', placeholder: 'e.g., 1', options: [1, 2, 3] } },
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: '⚡',
    description: 'Panel upgrade, wiring, outlet install, inverter setup',
    subcategories: [
      { id: 'panel-upgrade', name: 'Panel Upgrade', serviceTypes: ['panel upgrade', 'circuit breaker replacement', 'MCB installation', 'fuse box upgrade'] },
      { id: 'wiring', name: 'Wiring & Rewiring', serviceTypes: ['wiring repair', 'house rewiring', 'new wiring installation', 'concealed wiring'], unitConfig: { label: 'Number of rooms', unit: 'rooms', placeholder: 'e.g., 3', options: [1, 2, 3, 4, 5, 6] } },
      { id: 'outlet-switch', name: 'Outlets & Switches', serviceTypes: ['outlet install', 'switch replacement', 'dimmer installation', 'USB outlet install'], unitConfig: { label: 'Number of points', unit: 'points', placeholder: 'e.g., 5', options: [1, 2, 3, 5, 10] } },
      { id: 'lighting', name: 'Lighting', serviceTypes: ['light fixture install', 'chandelier installation', 'recessed lighting', 'LED conversion'], unitConfig: { label: 'Number of lights', unit: 'lights', placeholder: 'e.g., 6', options: [1, 2, 4, 6, 8, 10] } },
      { id: 'inverter-ups', name: 'Inverter & UPS', serviceTypes: ['inverter installation', 'UPS installation', 'battery replacement', 'solar inverter setup'] },
    ],
  },
  {
    id: 'auto-repair',
    name: 'Auto Repair',
    icon: '🚗',
    description: 'Brake pads, oil change, car service, denting & painting',
    subcategories: [
      { id: 'brakes', name: 'Brakes', serviceTypes: ['brake pads replacement', 'brake disc replacement', 'brake fluid change', 'brake caliper repair'] },
      { id: 'engine', name: 'Engine', serviceTypes: ['engine oil change', 'engine tune-up', 'engine overhaul', 'timing belt replacement'] },
      { id: 'car-service', name: 'General Service', serviceTypes: ['car service', 'full car service', 'periodic maintenance', 'car inspection'] },
      { id: 'body-work', name: 'Body & Paint', serviceTypes: ['denting and painting', 'scratch removal', 'bumper repair', 'full body paint'], unitConfig: { label: 'Number of panels', unit: 'panels', placeholder: 'e.g., 2', options: [1, 2, 3, 4, 5] } },
      { id: 'ac-repair', name: 'Car AC', serviceTypes: ['car ac repair', 'car ac gas refill', 'car ac compressor', 'car ac service'] },
      { id: 'tyres', name: 'Tyres & Wheels', serviceTypes: ['tyre replacement', 'wheel alignment', 'wheel balancing', 'puncture repair'], unitConfig: { label: 'Number of tyres', unit: 'tyres', placeholder: 'e.g., 4', options: [1, 2, 4] } },
    ],
  },
  {
    id: 'home-exterior',
    name: 'Home Exterior',
    icon: '🏠',
    description: 'Roof repair, gutter cleaning, painting, waterproofing',
    subcategories: [
      { id: 'roofing', name: 'Roofing', serviceTypes: ['roof repair', 'roof replacement', 'shingle repair', 'roof leak fix'], unitConfig: { label: 'Area (sq ft)', unit: 'sq ft', placeholder: 'e.g., 1500' } },
      { id: 'painting', name: 'Painting', serviceTypes: ['house painting', 'exterior painting', 'interior painting', 'wall texture'], unitConfig: { label: 'Area (sq ft)', unit: 'sq ft', placeholder: 'e.g., 1000', options: [500, 800, 1000, 1500, 2000, 3000] } },
      { id: 'gutter', name: 'Gutters', serviceTypes: ['gutter cleaning', 'gutter installation', 'gutter repair', 'downspout repair'], unitConfig: { label: 'Length (feet)', unit: 'ft', placeholder: 'e.g., 100' } },
      { id: 'waterproofing', name: 'Waterproofing', serviceTypes: ['terrace waterproofing', 'bathroom waterproofing', 'basement waterproofing', 'wall waterproofing'], unitConfig: { label: 'Area (sq ft)', unit: 'sq ft', placeholder: 'e.g., 500', options: [100, 200, 500, 800, 1000] } },
      { id: 'siding', name: 'Siding & Facade', serviceTypes: ['siding repair', 'siding replacement', 'facade cleaning', 'power washing'], unitConfig: { label: 'Area (sq ft)', unit: 'sq ft', placeholder: 'e.g., 500' } },
    ],
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    icon: '🌿',
    description: 'Lawn mowing, tree removal, garden design, irrigation',
    subcategories: [
      { id: 'lawn-care', name: 'Lawn Care', serviceTypes: ['lawn mowing', 'lawn aeration', 'sod installation', 'lawn fertilization'], unitConfig: { label: 'Area (sq ft)', unit: 'sq ft', placeholder: 'e.g., 2000' } },
      { id: 'tree-service', name: 'Tree Service', serviceTypes: ['tree removal', 'tree trimming', 'stump grinding', 'tree planting'], unitConfig: { label: 'Number of trees', unit: 'trees', placeholder: 'e.g., 1', options: [1, 2, 3, 5] } },
      { id: 'garden', name: 'Garden & Plants', serviceTypes: ['garden design', 'flower bed installation', 'mulching', 'plant installation'], unitConfig: { label: 'Area (sq ft)', unit: 'sq ft', placeholder: 'e.g., 200' } },
      { id: 'irrigation', name: 'Irrigation', serviceTypes: ['sprinkler install', 'drip irrigation', 'irrigation repair', 'sprinkler winterization'], unitConfig: { label: 'Number of zones', unit: 'zones', placeholder: 'e.g., 4' } },
    ],
  },
  {
    id: 'dental',
    name: 'Dental',
    icon: '🦷',
    description: 'Root canal, crown, cleaning, braces, implants',
    subcategories: [
      { id: 'root-canal', name: 'Root Canal', serviceTypes: ['root canal', 'root canal with crown', 'root canal retreatment'], unitConfig: { label: 'Number of teeth', unit: 'teeth', placeholder: 'e.g., 1', options: [1, 2, 3] } },
      { id: 'cleaning', name: 'Cleaning & Scaling', serviceTypes: ['dental cleaning', 'scaling and polishing', 'deep cleaning', 'fluoride treatment'] },
      { id: 'crowns-bridges', name: 'Crowns & Bridges', serviceTypes: ['dental crown', 'dental bridge', 'ceramic crown', 'zirconia crown'], unitConfig: { label: 'Number of crowns', unit: 'crowns', placeholder: 'e.g., 1', options: [1, 2, 3, 4] } },
      { id: 'braces', name: 'Braces & Aligners', serviceTypes: ['metal braces', 'ceramic braces', 'invisible aligners', 'retainer fitting'] },
      { id: 'implants', name: 'Implants', serviceTypes: ['dental implant', 'implant with crown', 'full mouth implants', 'mini implants'], unitConfig: { label: 'Number of implants', unit: 'implants', placeholder: 'e.g., 1', options: [1, 2, 4, 6] } },
      { id: 'extraction', name: 'Extraction', serviceTypes: ['tooth extraction', 'wisdom tooth removal', 'surgical extraction'], unitConfig: { label: 'Number of teeth', unit: 'teeth', placeholder: 'e.g., 1', options: [1, 2, 3, 4] } },
    ],
  },
  {
    id: 'moving',
    name: 'Moving & Relocation',
    icon: '📦',
    description: 'Local move, long-distance, packers & movers, storage',
    subcategories: [
      { id: 'local-move', name: 'Local Move', serviceTypes: ['local move', '1BHK move', '2BHK move', '3BHK move'], unitConfig: { label: 'Home size (BHK)', unit: 'BHK', placeholder: 'e.g., 2', options: [1, 2, 3, 4] } },
      { id: 'long-distance', name: 'Long Distance', serviceTypes: ['long-distance move', 'interstate move', 'intercity move', 'cross-country move'], unitConfig: { label: 'Distance (km)', unit: 'km', placeholder: 'e.g., 500' } },
      { id: 'packing', name: 'Packing Services', serviceTypes: ['packing service', 'fragile items packing', 'furniture disassembly', 'unpacking service'], unitConfig: { label: 'Number of rooms', unit: 'rooms', placeholder: 'e.g., 3', options: [1, 2, 3, 4, 5] } },
      { id: 'storage', name: 'Storage', serviceTypes: ['storage unit rental', 'climate controlled storage', 'short-term storage', 'warehouse storage'], unitConfig: { label: 'Size (sq ft)', unit: 'sq ft', placeholder: 'e.g., 100', options: [50, 100, 200, 500] } },
    ],
  },
  {
    id: 'hvac',
    name: 'HVAC & Air Conditioning',
    icon: '❄️',
    description: 'AC service, furnace repair, duct cleaning, installation',
    subcategories: [
      { id: 'ac-service', name: 'AC Service', serviceTypes: ['ac service', 'ac deep cleaning', 'ac gas refill', 'ac filter replacement'], unitConfig: { label: 'Number of ACs', unit: 'ACs', placeholder: 'e.g., 2', options: [1, 2, 3, 4] } },
      { id: 'ac-install', name: 'AC Installation', serviceTypes: ['ac installation', 'split ac install', 'window ac install', 'central ac install'], unitConfig: { label: 'Tonnage', unit: 'ton', placeholder: 'e.g., 1.5', options: [1, 1.5, 2, 3] } },
      { id: 'ac-repair', name: 'AC Repair', serviceTypes: ['ac repair', 'ac compressor repair', 'ac leak fix', 'ac not cooling'] },
      { id: 'heating', name: 'Heating', serviceTypes: ['furnace repair', 'furnace installation', 'heat pump repair', 'boiler service'] },
      { id: 'duct-work', name: 'Duct Work', serviceTypes: ['duct cleaning', 'duct sealing', 'duct installation', 'vent cleaning'], unitConfig: { label: 'Home size (sq ft)', unit: 'sq ft', placeholder: 'e.g., 2000' } },
    ],
  },
  {
    id: 'appliance-repair',
    name: 'Appliance Repair',
    icon: '🔌',
    description: 'Washing machine, refrigerator, microwave, dishwasher',
    subcategories: [
      { id: 'washing-machine', name: 'Washing Machine', serviceTypes: ['washing machine repair', 'washing machine service', 'washer drum repair', 'washer motor replacement'] },
      { id: 'refrigerator', name: 'Refrigerator', serviceTypes: ['refrigerator repair', 'fridge gas refill', 'fridge compressor repair', 'fridge thermostat fix'] },
      { id: 'microwave', name: 'Microwave & Oven', serviceTypes: ['microwave repair', 'oven repair', 'microwave magnetron replacement', 'oven thermostat fix'] },
      { id: 'dishwasher', name: 'Dishwasher', serviceTypes: ['dishwasher repair', 'dishwasher installation', 'dishwasher drain fix', 'dishwasher pump replacement'] },
      { id: 'water-purifier', name: 'Water Purifier', serviceTypes: ['water purifier service', 'RO service', 'filter replacement', 'UV lamp replacement'] },
    ],
  },
  {
    id: 'pest-control',
    name: 'Pest Control',
    icon: '🐛',
    description: 'Termites, cockroaches, bed bugs, rodents, mosquitoes',
    subcategories: [
      { id: 'general-pest', name: 'General Pest Control', serviceTypes: ['general pest control', 'cockroach treatment', 'ant treatment', 'spider treatment'], unitConfig: { label: 'Home size (BHK)', unit: 'BHK', placeholder: 'e.g., 2', options: [1, 2, 3, 4] } },
      { id: 'termites', name: 'Termites', serviceTypes: ['termite treatment', 'anti-termite treatment', 'termite inspection', 'wood borer treatment'], unitConfig: { label: 'Area (sq ft)', unit: 'sq ft', placeholder: 'e.g., 1000', options: [500, 1000, 1500, 2000] } },
      { id: 'bed-bugs', name: 'Bed Bugs', serviceTypes: ['bed bug treatment', 'bed bug heat treatment', 'mattress treatment'], unitConfig: { label: 'Number of rooms', unit: 'rooms', placeholder: 'e.g., 2', options: [1, 2, 3, 4] } },
      { id: 'rodents', name: 'Rodents', serviceTypes: ['rat control', 'mouse trap installation', 'rodent proofing', 'rodent exclusion'], unitConfig: { label: 'Home size (BHK)', unit: 'BHK', placeholder: 'e.g., 2', options: [1, 2, 3, 4] } },
      { id: 'mosquitoes', name: 'Mosquitoes', serviceTypes: ['mosquito fogging', 'mosquito net installation', 'larvicide treatment'], unitConfig: { label: 'Area (sq ft)', unit: 'sq ft', placeholder: 'e.g., 1000' } },
    ],
  },
  {
    id: 'cleaning',
    name: 'Cleaning Services',
    icon: '🧹',
    description: 'Deep cleaning, carpet cleaning, sofa cleaning, move-out',
    subcategories: [
      { id: 'deep-clean', name: 'Deep Cleaning', serviceTypes: ['deep cleaning', 'full house cleaning', 'spring cleaning', 'post-construction cleaning'], unitConfig: { label: 'Home size (BHK)', unit: 'BHK', placeholder: 'e.g., 2', options: [1, 2, 3, 4, 5] } },
      { id: 'carpet-sofa', name: 'Carpet & Sofa', serviceTypes: ['carpet cleaning', 'sofa cleaning', 'upholstery cleaning', 'mattress cleaning'], unitConfig: { label: 'Number of items', unit: 'items', placeholder: 'e.g., 1', options: [1, 2, 3, 4, 5] } },
      { id: 'kitchen-bath', name: 'Kitchen & Bathroom', serviceTypes: ['kitchen deep clean', 'bathroom cleaning', 'chimney cleaning', 'exhaust fan cleaning'], unitConfig: { label: 'Number of areas', unit: 'areas', placeholder: 'e.g., 2', options: [1, 2, 3, 4] } },
      { id: 'tank-clean', name: 'Tank & Overhead', serviceTypes: ['water tank cleaning', 'overhead tank cleaning', 'sump cleaning'], unitConfig: { label: 'Tank capacity (liters)', unit: 'L', placeholder: 'e.g., 1000', options: [500, 1000, 2000, 5000] } },
      { id: 'move-clean', name: 'Move-in/Move-out', serviceTypes: ['move-out cleaning', 'move-in cleaning', 'end of lease cleaning'], unitConfig: { label: 'Home size (BHK)', unit: 'BHK', placeholder: 'e.g., 2', options: [1, 2, 3, 4] } },
    ],
  },
  {
    id: 'home-security',
    name: 'Home Security',
    icon: '🔒',
    description: 'CCTV installation, door locks, alarm systems, intercom',
    subcategories: [
      { id: 'cctv', name: 'CCTV', serviceTypes: ['cctv installation', 'security camera setup', 'cctv repair', 'DVR installation'], unitConfig: { label: 'Number of cameras', unit: 'cameras', placeholder: 'e.g., 4', options: [2, 4, 6, 8, 16] } },
      { id: 'locks', name: 'Locks & Keys', serviceTypes: ['door lock installation', 'smart lock install', 'lock replacement', 'key duplication'], unitConfig: { label: 'Number of locks', unit: 'locks', placeholder: 'e.g., 1', options: [1, 2, 3, 4] } },
      { id: 'alarm', name: 'Alarm Systems', serviceTypes: ['alarm system install', 'burglar alarm', 'fire alarm install', 'alarm monitoring'], unitConfig: { label: 'Number of sensors', unit: 'sensors', placeholder: 'e.g., 8', options: [4, 8, 12, 16] } },
      { id: 'intercom', name: 'Intercom & Video Door', serviceTypes: ['video doorbell install', 'intercom installation', 'access control system'], unitConfig: { label: 'Number of units', unit: 'units', placeholder: 'e.g., 1', options: [1, 2, 3] } },
    ],
  },
  {
    id: 'carpentry',
    name: 'Carpentry & Furniture',
    icon: '🪚',
    description: 'Custom furniture, door repair, cabinet making, assembly',
    subcategories: [
      { id: 'furniture', name: 'Custom Furniture', serviceTypes: ['custom wardrobe', 'bookshelf making', 'TV unit', 'kitchen cabinet'], unitConfig: { label: 'Size (sq ft / running ft)', unit: 'sq ft', placeholder: 'e.g., 40', options: [20, 30, 40, 60, 80, 100] } },
      { id: 'door-window', name: 'Doors & Windows', serviceTypes: ['door repair', 'door installation', 'window repair', 'window frame repair'], unitConfig: { label: 'Number of doors/windows', unit: 'units', placeholder: 'e.g., 2', options: [1, 2, 3, 4, 5] } },
      { id: 'assembly', name: 'Furniture Assembly', serviceTypes: ['furniture assembly', 'bed assembly', 'desk assembly', 'wardrobe assembly'], unitConfig: { label: 'Number of items', unit: 'items', placeholder: 'e.g., 2', options: [1, 2, 3, 4, 5] } },
      { id: 'repair', name: 'Furniture Repair', serviceTypes: ['furniture repair', 'chair repair', 'table repair', 'wood polish'], unitConfig: { label: 'Number of items', unit: 'items', placeholder: 'e.g., 2', options: [1, 2, 3, 4, 5] } },
    ],
  },
  {
    id: 'interior-design',
    name: 'Interior Design',
    icon: '🎨',
    description: 'False ceiling, modular kitchen, wallpaper, flooring',
    subcategories: [
      { id: 'false-ceiling', name: 'False Ceiling', serviceTypes: ['false ceiling installation', 'POP ceiling', 'gypsum ceiling', 'ceiling repair'], unitConfig: { label: 'Area (sq ft)', unit: 'sq ft', placeholder: 'e.g., 150', options: [80, 100, 150, 200, 300, 500] } },
      { id: 'modular-kitchen', name: 'Modular Kitchen', serviceTypes: ['modular kitchen', 'kitchen renovation', 'kitchen countertop', 'kitchen backsplash'], unitConfig: { label: 'Kitchen size (sq ft)', unit: 'sq ft', placeholder: 'e.g., 80', options: [40, 60, 80, 100, 120, 150] } },
      { id: 'flooring', name: 'Flooring', serviceTypes: ['tile installation', 'wooden flooring', 'marble polishing', 'vinyl flooring'], unitConfig: { label: 'Area (sq ft)', unit: 'sq ft', placeholder: 'e.g., 500', options: [100, 200, 500, 800, 1000, 1500] } },
      { id: 'wallpaper', name: 'Wallpaper & Wall Decor', serviceTypes: ['wallpaper installation', 'wall paneling', 'accent wall', 'wall stencil'], unitConfig: { label: 'Wall area (sq ft)', unit: 'sq ft', placeholder: 'e.g., 100', options: [50, 100, 150, 200, 300] } },
    ],
  },
];
