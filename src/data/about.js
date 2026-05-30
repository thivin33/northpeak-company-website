import { Shield, Users, Award, Target, Heart, TrendingUp } from 'lucide-react';

export const aboutStats = [
  { value: '15+', label: 'Years Experience', icon: Award },
  { value: '500+', label: 'Active Clients', icon: Users },
  { value: '1M+', label: 'Shipments per Year', icon: TrendingUp },
  { value: '99.8%', label: 'On-Time Delivery', icon: Shield },
];

export const coreValues = [
  {
    icon: Shield,
    title: 'Reliability',
    description:
      'We deliver on our promises. When we commit to a deadline, we meet it. Every shipment is handled with the utmost care and precision.',
  },
  {
    icon: Target,
    title: 'Precision',
    description:
      'Attention to detail in every aspect of logistics. From route planning to final delivery, we optimize every step for efficiency.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We view clients as partners, not customers. Your success is our success, and we work tirelessly to support your business goals.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description:
      'Honest communication and transparent pricing. We build trust through consistent actions and ethical business practices.',
  },
];
