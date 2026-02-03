import {
  BarChart3, Search, Mail, FileText, Megaphone,
  MapPin, Smartphone, ShoppingCart, Share2,
  Star, Target, Laptop
} from 'lucide-react';
import React from 'react';

export const servicesSectionData = {
  title: "Inbound Marketing ",
  titleHighlight: "Services",
  description: "With over 19 years of experience in digital marketing, I worked in enterprise and marketing agency settings as an inbound marketing consultant and expert. I gained vast experience in organic and local SEO, content marketing, web design and development, paid advertising, email automation, and offered marketing services for B2B, SaaS, software, IT, startup and technology companies.",
  services: [
    { title: 'Digital Marketing Strategy', icon: React.createElement(BarChart3, { className: "h-10 w-10" }) },
    { title: 'Search Engine Optimization', icon: React.createElement(Search, { className: "h-10 w-10" }) },
    { title: 'Email Marketing', icon: React.createElement(Mail, { className: "h-10 w-10" }) },
    { title: 'Content Marketing', icon: React.createElement(FileText, { className: "h-10 w-10" }) },
    { title: 'Digital Advertising', icon: React.createElement(Megaphone, { className: "h-10 w-10" }) },
    { title: 'Local SEO Services', icon: React.createElement(MapPin, { className: "h-10 w-10" }) },
    { title: 'Mobile Marketing', icon: React.createElement(Smartphone, { className: "h-10 w-10" }) },
    { title: 'Ecommerce Marketing', icon: React.createElement(ShoppingCart, { className: "h-10 w-10" }) },
    { title: 'Social Media Marketing', icon: React.createElement(Share2, { className: "h-10 w-10" }) },
    { title: 'Online Reputation Management', icon: React.createElement(Star, { className: "h-10 w-10" }) },
    { title: 'Conversion Rate Optimization', icon: React.createElement(Target, { className: "h-10 w-10" }) },
    { title: 'Web Design', icon: React.createElement(Laptop, { className: "h-10 w-10" }) },
  ]
};