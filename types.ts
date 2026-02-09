import { LucideIcon } from 'lucide-react';

export interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  variant?: 'default' | 'highlight';
}

export interface Project {
  title: string;
  role: string;
  description: string;
  image: string;
  link?: string;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
}
