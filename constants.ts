import { Phone, Mail, Star, Hammer, Stethoscope, Scale, Home, FileText, MessageSquare, Clock, Zap } from 'lucide-react';
import { PricingTier, Feature, Niche, ComparisonPoint } from './types';

export const APP_NAME = "MinAI";

export const COMPARISON_POINTS: ComparisonPoint[] = [
  { manual: "You chase leads when you have time.", system: "Leads are engaged in 30 seconds, 24/7." },
  { manual: "You manually follow up (and forget).", system: "The system follows up for 12 months automatically." },
  { manual: "You handle scheduling back-and-forth.", system: "Appointments appear on your calendar while you sleep." },
];

export const FEATURES: Feature[] = [
  {
    title: "The 24/7 Receptionist",
    description: "Answers every missed call with a text instantly. Captures the lead, answers questions, and books the job.",
    payoff: "You never lose a customer to voicemail again.",
    icon: Phone
  },
  {
    title: "The Nurture Specialist",
    description: "Takes your list of 1,000 \"dead\" leads and text-messages them irresistible offers until they buy.",
    payoff: "Found money from data you already have.",
    icon: Mail
  },
  {
    title: "The Reputation Manager",
    description: "Automatically requests reviews from happy clients and filters out the bad ones.",
    payoff: "You dominate Google rankings without asking nicely.",
    icon: Star
  }
];

export const NICHES: Niche[] = [
  {
    title: "Real Estate",
    description: "Stop losing commission to speed-to-lead. We qualify buyers before you ever speak to them.",
    icon: Home
  },
  {
    title: "Legal & Injury",
    description: "The first firm to answer gets the case. Our system ensures that firm is you.",
    icon: Scale
  },
  {
    title: "Construction",
    description: "Automate your project updates and payment reminders so you can focus on the build.",
    icon: Hammer
  },
  {
    title: "Medical & Chiro",
    description: "Eliminate no-shows with automated confirmation sequences that protect your time.",
    icon: Stethoscope
  }
];

export const PRICING: PricingTier[] = [
  {
    name: "The Growth System",
    price: "$XXX",
    period: "/ Month",
    description: "Best For: Solo Operators.",
    features: ["CRM", "Missed-Call-Text-Back", "Review Automation", "Calendar Booking"],
    goal: "Organize the chaos.",
    cta: "Get Growth"
  },
  {
    name: "The Scale System",
    price: "$XXX",
    period: "/ Month",
    description: "Best For: Businesses growing to $1M+.",
    features: ["Everything in Growth", "Advanced Nurture Workflows", "\"AI Employee\" Logic", "Social Media Autopilot"],
    goal: "Replace admin staff with code.",
    isPopular: true,
    cta: "Get Scale"
  },
  {
    name: "The White-Glove Install",
    price: "Custom Fee",
    period: "One-Time",
    description: "We build the funnels, write the copy, and hand you the keys.",
    features: ["Full Done-For-You Setup", "Custom Funnel Build", "Copywriting Included", "Priority Onboarding"],
    goal: "Turnkey Solution.",
    cta: "Book Install"
  }
];

export const STEPS = [
  {
    title: "We Install",
    description: "We migrate your data and set up your custom \"Growth Engine\" (Days 1-7).",
    icon: FileText
  },
  {
    title: "We Activate",
    description: "We launch a reactivation campaign to generate immediate cash from your old leads (Days 8-14).",
    icon: Zap
  },
  {
    title: "You Cruise",
    description: "The system runs the follow-up, booking, and reviews. You just close the deals.",
    icon: Clock
  }
];
