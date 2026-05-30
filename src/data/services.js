import { Truck, Warehouse, Package, MapPin, Shield, Clock } from 'lucide-react';

export const services = [
  {
    icon: Truck,
    title: 'Freight Shipping',
    description:
      'Full truckload (FTL) and less-than-truckload (LTL) options. We handle shipments of all sizes with precision and care.',
    features: ['Real-time tracking', 'Temperature-controlled options', 'Hazardous materials certified'],
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Distribution',
    description:
      'State-of-the-art facilities strategically located for optimal distribution. Secure, climate-controlled storage.',
    features: ['3PL solutions', 'Inventory management', 'Pick and pack services'],
  },
  {
    icon: Package,
    title: 'Supply Chain Management',
    description:
      'End-to-end supply chain optimization. We analyze, design, and implement efficient logistics solutions.',
    features: ['Route optimization', 'Cost analysis', 'Vendor management'],
  },
  {
    icon: MapPin,
    title: 'Last Mile Delivery',
    description:
      'Fast, reliable final-mile delivery services. We ensure your products reach customers on time, every time.',
    features: ['Same-day delivery', 'White glove service', 'Residential & commercial'],
  },
  {
    icon: Shield,
    title: 'Specialized Transport',
    description:
      'Heavy haul, oversized loads, and fragile equipment. Our specialized fleet handles your unique requirements.',
    features: ['Heavy haul permits', 'Escort vehicles', 'Specialized equipment'],
  },
  {
    icon: Clock,
    title: 'Expedited Shipping',
    description:
      'Time-critical deliveries across North America. When speed matters, we deliver without compromise.',
    features: ['Dedicated trucks', 'Team drivers', 'Direct service'],
  },
];
