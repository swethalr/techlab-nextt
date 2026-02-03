'use client';

import React from 'react';

export default function ServicesSection({ data }: { data: any }) {
  const { title, titleHighlight, description, services } = data;

  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-24">
      {/* Background Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl text-center">
        {/* Header Section */}
        <h3 className="h3 font-bold tracking-tight text-slate-900 ">
          {title}<span className="text-[#3cb878]">{titleHighlight}</span>
        </h3>

        <p className="p mx-auto mt-8 max-w-4xl leading-relaxed text-slate-800">
          {description}
        </p>

        {/* Services Grid - Exact same Layout Logic */}
        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service: any, index: number) => (
            <div
              key={index}
              className="group flex flex-col items-center space-y-4 transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Circle Icon Container with exact group-hover transitions */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 text-[#3cb878] shadow-sm transition-colors duration-300 group-hover:bg-[#3cb878] group-hover:text-white">
                {service.icon}
              </div>
              <h5 className="h5 px-2 font-bold leading-snug text-slate-800">
                {service.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}