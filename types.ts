import { LucideIcon } from 'lucide-react';

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  goal: string;
}

export interface Feature {
  title: string;
  description: string;
  payoff: string;
  icon: LucideIcon;
}

export interface Niche {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ComparisonPoint {
  manual: string;
  system: string;
}