'use client';

import React from 'react';
import { 
  BarChart3, Search, Mail, FileText, Megaphone, 
  MapPin, Smartphone, ShoppingCart, Share2, 
  Star, Target, Laptop 
} from 'lucide-react';

const services = [
  { title: "Digital Marketing Strategy", icon: <BarChart3 className="w-10 h-10" /> },
  { title: "Search Engine Optimization", icon: <Search className="w-10 h-10" /> },
  { title: "Email Marketing", icon: <Mail className="w-10 h-10" /> },
  { title: "Content Marketing", icon: <FileText className="w-10 h-10" /> },
  { title: "Digital Advertising", icon: <Megaphone className="w-10 h-10" /> },
  { title: "Local SEO Services", icon: <MapPin className="w-10 h-10" /> },
  { title: "Mobile Marketing", icon: <Smartphone className="w-10 h-10" /> },
  { title: "Ecommerce Marketing", icon: <ShoppingCart className="w-10 h-10" /> },
  { title: "Social Media Marketing", icon: <Share2 className="w-10 h-10" /> },
  { title: "Online Reputation Management", icon: <Star className="w-10 h-10" /> },
  { title: "Conversion Rate Optimization", icon: <Target className="w-10 h-10" /> },
  { title: "Web Design", icon: <Laptop className="w-10 h-10" /> },
];

export default function ServicesSection() {
  return (
      <section className="relative overflow-hidden py-16 px-4 md:py-24">
          <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
          
        <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
        </div>
          



      <div className="mx-auto max-w-6xl text-center">
        {/* Header Section */}
        <h2 className=" h2 font-bold tracking-tight text-slate-900 ">
          Inbound Marketing <span className=" text-[#3cb878]">Services</span>
        </h2>
        
        <p className="mx-auto mt-8 max-w-4xl  leading-relaxed text-slate-800 p">
          With over 19 years of experience in digital marketing, I worked in enterprise and marketing agency settings as 
          an inbound marketing consultant and expert. I gained vast experience in organic and local SEO, content 
          marketing, web design and development, paid advertising, email automation, and offered marketing services 
          for B2B, SaaS, software, IT, startup and technology companies.
        </p>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-2 gap-y-12 gap-x-4 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center space-y-4 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 text-[#3cb878] transition-colors duration-300 group-hover:bg-[#3cb878] group-hover:text-white shadow-sm">
                {service.icon}
              </div>
              <h5 className="h5 font-bold leading-snug text-slate-800 px-2">
                {service.title}
              </h5>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}