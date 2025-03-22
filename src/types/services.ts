import type { LucideIcon } from 'lucide-react';

export interface ProblemPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  metrics?: Metric[];
}

export interface ServiceContent {
  problem: {
    title: string;
    description: string;
    problems: ProblemPoint[];
  };
  solution: {
    title: string;
    description: string;
    features: string[];
    metrics: Metric[];
  };
}