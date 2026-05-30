import { TrendingUp, Clock, DollarSign, Shield } from 'lucide-react';

export const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Giant Optimizes Distribution',
    client: 'StyleHub Fashion',
    industry: 'E-commerce & Retail',
    challenge:
      'StyleHub struggled with last-mile delivery delays, impacting customer satisfaction. Average delivery time was 5-7 days with a 15% return processing delay.',
    solution:
      "Implemented NorthPeak's strategic warehousing network with 4 regional distribution centers. Deployed real-time tracking and integrated returns management.",
    results: [
      { metric: '45%', label: 'Faster Delivery', icon: Clock },
      { metric: '35%', label: 'Cost Reduction', icon: DollarSign },
      { metric: '98%', label: 'On-Time Rate', icon: Shield },
      { metric: 'NPS +40', label: 'Satisfaction Score', icon: TrendingUp },
    ],
    image:
      'https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Medical Device Manufacturer Ensures Compliance',
    client: 'HealthGuard Medical',
    industry: 'Healthcare & Medical',
    challenge:
      'Temperature-sensitive shipments required strict 2-8°C maintenance. Previous provider had 8% spoilage rate during transit, costing millions annually.',
    solution:
      'Deployed pharmaceutical-grade cold chain logistics with continuous temperature monitoring, redundant cooling systems, and real-time alerts.',
    results: [
      { metric: '< 1%', label: 'Spoilage Rate', icon: Shield },
      { metric: '100%', label: 'Compliance Score', icon: TrendingUp },
      { metric: '$1.2M', label: 'Annual Savings', icon: DollarSign },
      { metric: '24/7', label: 'Monitoring', icon: Clock },
    ],
    image:
      'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Construction Company Moves Heavy Equipment',
    client: 'BuildRight Construction',
    industry: 'Construction & Heavy Equipment',
    challenge:
      'Needed to transport 50-ton crane from Texas to Colorado. Required special permits, escort vehicles, and precise route planning.',
    solution:
      'NorthPeak managed all permits, coordinated with state authorities, provided pilot cars, and handled the entire specialized transport process.',
    results: [
      { metric: '100%', label: 'On-Time Delivery', icon: Clock },
      { metric: 'Zero', label: 'Route Issues', icon: Shield },
      { metric: '3 Days', label: 'Transit Time', icon: TrendingUp },
      { metric: '$50K', label: 'Project Savings', icon: DollarSign },
    ],
    image:
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
