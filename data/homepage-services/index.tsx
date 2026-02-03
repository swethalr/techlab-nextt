import React from 'react';
import { MdMonitor, MdCampaign, MdSearch } from 'react-icons/md';

export interface Service {
  title: string;
  desc: string;
  icon: React.ReactNode; 
  img: string;
  features: string[];
}

export const servicesData: Service[] = [
  {
    title: 'Web Development',
    desc: 'Custom coded solutions tailored for high-performance and business .',
    icon: <MdMonitor />,
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    features: [
      'Fully Responsive',
      'Creativity in Designs',
      'SEO Optimized Content',
    ],
  },
  {
    title: 'SEO Strategy',
    desc: 'Dominate search results with data-driven organic SEO and growth hacks.',
    icon: <MdSearch />,
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    features: ['Keyword Analysis', 'On-Page SEO', 'Backlink Strategy'],
  },
  {
    title: 'Digital Marketing',
    desc: 'Reach your target audience with high-conversion marketing campaigns.',
    icon: <MdCampaign />,
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
    features: ['Paid Media', 'Social Growth', 'Lead Generation'],
  },
  {
    title: 'Digital Marketing',
    desc: 'Reach your target audience with high-conversion marketing campaigns.',
    icon: <MdCampaign />,
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
    features: ['Paid Media', 'Social Growth', 'Lead Generation'],
  },
  {
    title: 'Digital Marketing',
    desc: 'Reach your target audience with high-conversion marketing campaigns.',
    icon: <MdCampaign />,
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
    features: ['Paid Media', 'Social Growth', 'Lead Generation'],
  },
  {
    title: 'SEO Strategy',
    desc: 'Dominate search results with data-driven organic SEO and growth hacks.',
    icon: <MdSearch />,
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    features: ['Keyword Analysis', 'On-Page SEO', 'Backlink Strategy'],
  },
  {
    title: 'SEO Strategy',
    desc: 'Dominate search results with data-driven organic SEO and growth hacks.',
    icon: <MdSearch />,
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    features: ['Keyword Analysis', 'On-Page SEO', 'Backlink Strategy'],
  },
];