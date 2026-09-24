export type Category = 'all' | 'exterior' | 'interior' | 'autocad' | '3d-product';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'exterior' | 'interior' | 'autocad' | '3d-product';
  client: string;
  location: string;
  year: string;
  area: string; // e.g., "350 m²"
  mainImage: string;
  beforeImage?: string; // 2D AutoCAD drawing image
  gallery: string[];
  software: string[];
  description: string;
  keyFeatures: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  pricePerUnit: string;
  description: string;
  iconName: string;
  deliverables: string[];
  popular?: boolean;
}

export interface SoftwareItem {
  name: string;
  category: 'Modeling' | 'Rendering' | 'Drafting' | 'Post-Processing';
  level: number; // 0 to 100
  icon: string;
  experienceYears: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  comment: string;
  rating: number;
  projectType: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
