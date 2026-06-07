import { ServiceCategory } from '@/lib/types';

export interface SubCategory {
  id: string;
  name: string;
  serviceTypes: string[];
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
      { id: 'water-heater', name: 'Water Heater', serviceTypes: ['water heater installation', 'water heater replacement', 'geyser installation', 'tankless water heater'] },
      { id: 'leak-repair', name: 'Leak Repair', serviceTypes: ['leak fix', 'pipe leak repair', 'faucet repair', 'toilet leak fix'] },
      { id: 'drain-cleaning', name: 'Drain Cleaning', serviceTypes: ['drain cleaning', 'sewer line clearing', 'clogged drain', 'drain snake'] },
      { id: 'pipe-work', name: 'Pipe Work', serviceTypes: ['pipe replacement', 'pipe fitting', 'pipe insulation', 'repipe'] },
      { id: 'toilet-repair', name: 'Toilet & Fixtures', serviceTypes: ['toilet installation', 'toilet repair', 'bidet installation', 'fixture replacement'] },
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: '⚡',
    description: 'Panel upgrade, wiring, outlet install, inverter setup',
    subcategories: [
      { id: 'panel-upgrade', name: 'Panel Upgrade', serviceTypes: ['panel upgrade', 'circuit breaker replacement', 'MCB installation', 'fuse box upgrade'] },
      { id: 'wiring', name: 'Wiring & Rewiring', serviceTypes: ['wiring repair', 'house rewiring', 'new wiring installation', 'concealed wiring'] },
      { id: 'outlet-switch', name: 'Outlets & Switches', serviceTypes: ['outlet install', 'switch replacement', 'dimmer installation', 'USB outlet install'] },
      { id: 'lighting', name: 'Lighting', serviceTypes: ['light fixture install', 'chandelier installation', 'recessed lighting', 'LED conversion'] },
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
      { id: 'body-work', name: 'Body & Paint', serviceTypes: ['denting and painting', 'scratch removal', 'bumper repair', 'full body paint'] },
      { id: 'ac-repair', name: 'Car AC', serviceTypes: ['car ac repair', 'car ac gas refill', 'car ac compressor', 'car ac service'] },
      { id: 'tyres', name: 'Tyres & Wheels', serviceTypes: ['tyre replacement', 'wheel alignment', 'wheel balancing', 'puncture repair'] },
    ],
  },
  {
    id: 'home-exterior',
    name: 'Home Exterior',
    icon: '🏠',
    description: 'Roof repair, gutter cleaning, painting, waterproofing',
    subcategories: [
      { id: 'roofing', name: 'Roofing', serviceTypes: ['roof repair', 'roof replacement', 'shingle repair', 'roof leak fix'] },
      { id: 'painting', name: 'Painting', serviceTypes: ['house painting', 'exterior painting', 'interior painting', 'wall texture'] },
      { id: 'gutter', name: 'Gutters', serviceTypes: ['gutter cleaning', 'gutter installation', 'gutter repair', 'downspout repair'] },
      { id: 'waterproofing', name: 'Waterproofing', serviceTypes: ['terrace waterproofing', 'bathroom waterproofing', 'basement waterproofing', 'wall waterproofing'] },
      { id: 'siding', name: 'Siding & Facade', serviceTypes: ['siding repair', 'siding replacement', 'facade cleaning', 'power washing'] },
    ],
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    icon: '🌿',
    description: 'Lawn mowing, tree removal, garden design, irrigation',
    subcategories: [
      { id: 'lawn-care', name: 'Lawn Care', serviceTypes: ['lawn mowing', 'lawn aeration', 'sod installation', 'lawn fertilization'] },
      { id: 'tree-service', name: 'Tree Service', serviceTypes: ['tree removal', 'tree trimming', 'stump grinding', 'tree planting'] },
      { id: 'garden', name: 'Garden & Plants', serviceTypes: ['garden design', 'flower bed installation', 'mulching', 'plant installation'] },
      { id: 'irrigation', name: 'Irrigation', serviceTypes: ['sprinkler install', 'drip irrigation', 'irrigation repair', 'sprinkler winterization'] },
    ],
  },
  {
    id: 'dental',
    name: 'Dental',
    icon: '🦷',
    description: 'Root canal, crown, cleaning, braces, implants',
    subcategories: [
      { id: 'root-canal', name: 'Root Canal', serviceTypes: ['root canal', 'root canal with crown', 'root canal retreatment'] },
      { id: 'cleaning', name: 'Cleaning & Scaling', serviceTypes: ['dental cleaning', 'scaling and polishing', 'deep cleaning', 'fluoride treatment'] },
      { id: 'crowns-bridges', name: 'Crowns & Bridges', serviceTypes: ['dental crown', 'dental bridge', 'ceramic crown', 'zirconia crown'] },
      { id: 'braces', name: 'Braces & Aligners', serviceTypes: ['metal braces', 'ceramic braces', 'invisible aligners', 'retainer fitting'] },
      { id: 'implants', name: 'Implants', serviceTypes: ['dental implant', 'implant with crown', 'full mouth implants', 'mini implants'] },
      { id: 'extraction', name: 'Extraction', serviceTypes: ['tooth extraction', 'wisdom tooth removal', 'surgical extraction'] },
    ],
  },
  {
    id: 'moving',
    name: 'Moving & Relocation',
    icon: '📦',
    description: 'Local move, long-distance, packers & movers, storage',
    subcategories: [
      { id: 'local-move', name: 'Local Move', serviceTypes: ['local move', '1BHK move', '2BHK move', '3BHK move'] },
      { id: 'long-distance', name: 'Long Distance', serviceTypes: ['long-distance move', 'interstate move', 'intercity move', 'cross-country move'] },
      { id: 'packing', name: 'Packing Services', serviceTypes: ['packing service', 'fragile items packing', 'furniture disassembly', 'unpacking service'] },
      { id: 'storage', name: 'Storage', serviceTypes: ['storage unit rental', 'climate controlled storage', 'short-term storage', 'warehouse storage'] },
    ],
  },
  {
    id: 'hvac',
    name: 'HVAC & Air Conditioning',
    icon: '❄️',
    description: 'AC service, furnace repair, duct cleaning, installation',
    subcategories: [
      { id: 'ac-service', name: 'AC Service', serviceTypes: ['ac service', 'ac deep cleaning', 'ac gas refill', 'ac filter replacement'] },
      { id: 'ac-install', name: 'AC Installation', serviceTypes: ['ac installation', 'split ac install', 'window ac install', 'central ac install'] },
      { id: 'ac-repair', name: 'AC Repair', serviceTypes: ['ac repair', 'ac compressor repair', 'ac leak fix', 'ac not cooling'] },
      { id: 'heating', name: 'Heating', serviceTypes: ['furnace repair', 'furnace installation', 'heat pump repair', 'boiler service'] },
      { id: 'duct-work', name: 'Duct Work', serviceTypes: ['duct cleaning', 'duct sealing', 'duct installation', 'vent cleaning'] },
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
      { id: 'general-pest', name: 'General Pest Control', serviceTypes: ['general pest control', 'cockroach treatment', 'ant treatment', 'spider treatment'] },
      { id: 'termites', name: 'Termites', serviceTypes: ['termite treatment', 'anti-termite treatment', 'termite inspection', 'wood borer treatment'] },
      { id: 'bed-bugs', name: 'Bed Bugs', serviceTypes: ['bed bug treatment', 'bed bug heat treatment', 'mattress treatment'] },
      { id: 'rodents', name: 'Rodents', serviceTypes: ['rat control', 'mouse trap installation', 'rodent proofing', 'rodent exclusion'] },
      { id: 'mosquitoes', name: 'Mosquitoes', serviceTypes: ['mosquito fogging', 'mosquito net installation', 'larvicide treatment'] },
    ],
  },
  {
    id: 'cleaning',
    name: 'Cleaning Services',
    icon: '🧹',
    description: 'Deep cleaning, carpet cleaning, sofa cleaning, move-out',
    subcategories: [
      { id: 'deep-clean', name: 'Deep Cleaning', serviceTypes: ['deep cleaning', 'full house cleaning', 'spring cleaning', 'post-construction cleaning'] },
      { id: 'carpet-sofa', name: 'Carpet & Sofa', serviceTypes: ['carpet cleaning', 'sofa cleaning', 'upholstery cleaning', 'mattress cleaning'] },
      { id: 'kitchen-bath', name: 'Kitchen & Bathroom', serviceTypes: ['kitchen deep clean', 'bathroom cleaning', 'chimney cleaning', 'exhaust fan cleaning'] },
      { id: 'tank-clean', name: 'Tank & Overhead', serviceTypes: ['water tank cleaning', 'overhead tank cleaning', 'sump cleaning'] },
      { id: 'move-clean', name: 'Move-in/Move-out', serviceTypes: ['move-out cleaning', 'move-in cleaning', 'end of lease cleaning'] },
    ],
  },
  {
    id: 'home-security',
    name: 'Home Security',
    icon: '🔒',
    description: 'CCTV installation, door locks, alarm systems, intercom',
    subcategories: [
      { id: 'cctv', name: 'CCTV', serviceTypes: ['cctv installation', 'security camera setup', 'cctv repair', 'DVR installation'] },
      { id: 'locks', name: 'Locks & Keys', serviceTypes: ['door lock installation', 'smart lock install', 'lock replacement', 'key duplication'] },
      { id: 'alarm', name: 'Alarm Systems', serviceTypes: ['alarm system install', 'burglar alarm', 'fire alarm install', 'alarm monitoring'] },
      { id: 'intercom', name: 'Intercom & Video Door', serviceTypes: ['video doorbell install', 'intercom installation', 'access control system'] },
    ],
  },
  {
    id: 'carpentry',
    name: 'Carpentry & Furniture',
    icon: '🪚',
    description: 'Custom furniture, door repair, cabinet making, assembly',
    subcategories: [
      { id: 'furniture', name: 'Custom Furniture', serviceTypes: ['custom wardrobe', 'bookshelf making', 'TV unit', 'kitchen cabinet'] },
      { id: 'door-window', name: 'Doors & Windows', serviceTypes: ['door repair', 'door installation', 'window repair', 'window frame repair'] },
      { id: 'assembly', name: 'Furniture Assembly', serviceTypes: ['furniture assembly', 'bed assembly', 'desk assembly', 'wardrobe assembly'] },
      { id: 'repair', name: 'Furniture Repair', serviceTypes: ['furniture repair', 'chair repair', 'table repair', 'wood polish'] },
    ],
  },
  {
    id: 'interior-design',
    name: 'Interior Design',
    icon: '🎨',
    description: 'False ceiling, modular kitchen, wallpaper, flooring',
    subcategories: [
      { id: 'false-ceiling', name: 'False Ceiling', serviceTypes: ['false ceiling installation', 'POP ceiling', 'gypsum ceiling', 'ceiling repair'] },
      { id: 'modular-kitchen', name: 'Modular Kitchen', serviceTypes: ['modular kitchen', 'kitchen renovation', 'kitchen countertop', 'kitchen backsplash'] },
      { id: 'flooring', name: 'Flooring', serviceTypes: ['tile installation', 'wooden flooring', 'marble polishing', 'vinyl flooring'] },
      { id: 'wallpaper', name: 'Wallpaper & Wall Decor', serviceTypes: ['wallpaper installation', 'wall paneling', 'accent wall', 'wall stencil'] },
    ],
  },
];
