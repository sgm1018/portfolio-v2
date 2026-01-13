import { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  repoUrl: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Service {
  id: number;
  title: string;
  icon: LucideIcon;
}

export interface TechItem {
  name: string;
  iconUrl: string; // Using devicon URLs
}

export interface NavLink {
  name: string;
  href: string;
}