import { ServiceCategory } from '@/lib/types';

export const categories: ServiceCategory[] = [
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: '🔧',
    description: 'Leak fix, water heater, pipe replacement',
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: '⚡',
    description: 'Panel upgrade, outlet install, rewiring',
  },
  {
    id: 'auto-repair',
    name: 'Auto Repair',
    icon: '🚗',
    description: 'Brake pads, oil change, transmission',
  },
  {
    id: 'home-exterior',
    name: 'Home Exterior',
    icon: '🏠',
    description: 'Roof repair, gutter cleaning, painting',
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    icon: '🌿',
    description: 'Lawn mowing, tree removal, sod install',
  },
  {
    id: 'dental',
    name: 'Dental',
    icon: '🦷',
    description: 'Root canal, crown, cleaning (without insurance)',
  },
  {
    id: 'moving',
    name: 'Moving',
    icon: '📦',
    description: 'Local move, long-distance, storage',
  },
  {
    id: 'hvac',
    name: 'HVAC',
    icon: '❄️',
    description: 'AC tune-up, furnace repair, duct cleaning',
  },
];
