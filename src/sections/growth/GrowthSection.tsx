'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Mock data based on the growth trend in your image
const data = [
  { name: 'Jan', value: 15 },
  { name: 'Feb', value: 30 },
  { name: 'Mar', value: 37 },
  { name: 'Apr', value: 47 },
  { name: 'May', value: 58 },
  { name: 'Jun', value: 75 },
  { name: 'Jul', value: 85 },
  { name: 'Aug', value: 98 },
];

export default function GrowthSection() {
  return (
      <section className=" relative overflow-hidden bg-white py-16 px-4 md:py-24">
          
          <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
        </div>
         
          <div className="mx-auto max-w-7xl">
              <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
        {/* Header Text */}
        <div className="mb-16 text-center">
          <h2 className="h2 font-bold tracking-tight text-slate-900 ">
            Zammy Zaif - <span className="text-[#3cb878]"> Top-Rated</span> SEO Expert
          </h2>
          <p className="mx-auto mt-6 max-w-4xl p text-slate-700 leading-relaxed">
            Zammy Zaif is a Google Ranking Expert specialising in digital marketing, SEO, web design & development, and PPC advertising. He helps businesses increase online visibility, attract the right audience, and turn website visitors into high-quality leads through data-driven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Side: Content */}
          <div className="space-y-8">
            <h4 className=" h4 font-extrabold text-slate-900 leading-tight">
              Zammy Zaif Generates <span className="text-[#3cb878]">687%</span> More Revenue Than the Average Agency
            </h4>
            <p className="p text-slate-600">
              We have generated over 1,000+ 5 star reviews, 800+ case studies, and hundreds of 
              millions of dollars for clients through SEO and digital marketing.
            </p>
            <button className="group relative overflow-hidden rounded-md bg-[#3cb878] px-8 py-4 h6  uppercase tracking-widest text-white transition-all hover:bg-[#2a8c5c] active:scale-95">
              Talk to your digital strategist now
            </button>
          </div>

          {/* Right Side: Graph & Testimonial */}
          <div className="relative h-[400px] w-full rounded-2xl bg-slate-50 p-6 shadow-sm border border-slate-100">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f8e4d7" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3cb878" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="name" 
                  hide={true} 
                />
                <YAxis hide={true} domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3cb878"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  dot={{ r: 6, fill: '#fff', stroke: '#3cb878', strokeWidth: 3 }}
                  activeDot={{ r: 8, strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>

            {/* Floating Testimonial Card */}
            <div className="absolute bottom-4 right-4 max-w-[180px]  rounded-xl bg-white p-2 shadow-2xl border border-slate-50 md:bottom-8 md:right-8">
              <div className=" flex text-[#3cb878]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[1rem]">★</span>
                ))}
              </div>
              <p className="h6 italic text-slate-600  leading-tight">
                "Zammy Zaif is truly committed to delivering the best possible work!"
              </p>
              <p className="mt-2 h6 font-bold text-slate-900">— Swetha L.R</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}