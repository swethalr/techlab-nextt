'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaMapLocationDot } from 'react-icons/fa6';

// --- DATA IMPORT ---
import { marqueeTexts, tabContent, mapSteps } from '@/data/portfolio-section';

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [hoveredStep, setHoveredStep] = useState(0);

  const duplicatedTexts = [
    ...marqueeTexts,
    ...marqueeTexts,
    ...marqueeTexts,
    ...marqueeTexts,
  ];

  return (
    <section className="relative overflow-hidden bg-transparent px-4 py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-[-5%] top-[5%] h-[500px] w-[500px] animate-pulse rounded-full bg-primary/30 blur-[100px]" />
      <div className="pointer-events-none absolute right-[-5%] top-[20%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[5%] h-[200px] w-[200px] rounded-full bg-primary/30 blur-[100px]" />

      <div className="container relative z-10 mx-auto max-w-5xl">
        
        {/* 2. THE MARQUEE SECTION */}
        <div className="relative left-[50%] right-[50%] mb-24 ml-[-50vw] mr-[-50vw] w-screen overflow-hidden border-y border-slate-100 bg-[#3cb878]/20 py-12 backdrop-blur-sm">
          <div className="flex whitespace-nowrap">
            <motion.div
              animate={{ x: [0, -1500] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex items-center gap-20 pr-20"
            >
              {duplicatedTexts.map((text, i) => (
                <div key={i} className="flex items-center gap-20">
                  <div
                    className="text-[1.5rem] md:text-[2rem] font-bold uppercase text-[#3cb878]"
                    style={{ WebkitTextStroke: '1px #3cb878' }}
                  >
                    {text}
                  </div>
                  <div className="h-4 w-4 rounded-full bg-white shadow-[0_0_20px_rgba(60,184,120,0.4)]" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 3. PERFORMANCE DASHBOARD SECTION */}
        <div className="relative pb-20 pt-10">
          <header className="mb-16 text-center">
            <h5 className="h5 mb-4 font-bold uppercase tracking-[4px] text-primary">
              Grow your business sales & revenue
            </h5>
            <h2 className="h2 font-bold leading-tight text-accent-900">
              Drive your Google <span className="italic text-primary">Performance Max</span> with us
            </h2>
          </header>

          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {Object.entries(tabContent).map(([label, data], i) => (
              <button
                key={i}
                onClick={() => setActiveTab(label)}
                className={`h6 flex items-center gap-2 rounded-full px-5 py-2.5 font-bold transition-all ${activeTab === label ? 'scale-105 bg-primary text-white shadow-lg shadow-primary/30' : 'border border-slate-100 bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
              >
                {data.icon} {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
            <motion.article
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-center rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] lg:col-span-5"
            >
              <h3 className="h3 mb-6 font-bold leading-tight text-accent-900">
                {tabContent[activeTab as keyof typeof tabContent].title}
              </h3>
              <p className="p mb-8 leading-relaxed text-slate-500">
                {tabContent[activeTab as keyof typeof tabContent].desc}
              </p>
              <button className="p flex w-fit items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-bold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105">
                {tabContent[activeTab as keyof typeof tabContent].btn} <FaArrowRight />
              </button>
            </motion.article>

            <motion.div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-2xl lg:col-span-7">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <h6 className="h6 mb-8 font-bold uppercase tracking-widest text-slate-400">Performance Overview</h6>
              <div className="mb-10 flex h-40 items-end justify-between gap-2 px-4">
                {[40, 70, 45, 90, 65, 80, 55, 95, 70, 85].map((h, i) => (
                  <motion.div
                    key={`${activeTab}-${i}`}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 0.8 }}
                    className="w-full rounded-t-lg bg-gradient-to-t from-primary/20 via-primary to-[#143624]"
                  />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[{ l: 'Traffic', v: '+84%' }, { l: 'Leads', v: '+156%' }, { l: 'Sales', v: '+92%' }].map((stat, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <h4 className="h4 font-black text-primary">{stat.v}</h4>
                    <h6 className="h6 font-bold uppercase tracking-widest text-slate-400">{stat.l}</h6>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4. GOOGLE MAPS SECTION */}
        <div className="relative overflow-hidden pb-20 pt-24">
          <header className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-[#3cb878]/10 px-4 py-1.5">
              <FaMapLocationDot className="text-xs text-[#3cb878]" />
              <h6 className="h6 font-bold uppercase tracking-widest text-[#3cb878]">Boost Visibility • Drive Growth</h6>
            </div>
            <h2 className="h2 font-bold leading-tight text-accent-900">
              Google Maps <span className="italic text-primary">Ranking Experts</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              {mapSteps.map((step, i) => (
                <motion.article
                  key={i}
                  onMouseEnter={() => setHoveredStep(i)}
                  className={`group cursor-pointer rounded-[2rem] border p-6 transition-all duration-500 ${hoveredStep === i ? 'border-primary/20 bg-white shadow-xl shadow-primary/5' : 'border-slate-100 bg-transparent'}`}
                >
                  <div className="flex gap-5">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg ${step.color}`}>
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="h4 mb-2 font-bold text-accent-900">{step.title}</h4>
                      <h6 className="h6 leading-relaxed text-slate-500">{step.desc}</h6>
                    </div>
                  </div>
                </motion.article>
              ))}
              <button className="p mt-8 flex items-center gap-3 rounded-full bg-primary px-10 py-4 font-bold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105">
                Claim Today <FaArrowRight />
              </button>
            </div>

            <div className="relative lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] border border-slate-200 bg-slate-100 shadow-2xl">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={hoveredStep}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={mapSteps[hoveredStep].image}
                      alt={mapSteps[hoveredStep].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Stats Bar */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-around rounded-2xl border border-slate-100 bg-white/95 p-5 shadow-lg backdrop-blur-md">
                  {[{ v: '98%', l: 'Reach' }, { v: '#1', l: 'Rank' }, { v: '2.4k', l: 'Views' }].map((s, i) => (
                    <div key={i} className="text-center">
                      <h4 className="h4 font-black text-primary">{s.v}</h4>
                      <h6 className="h6 font-bold uppercase tracking-tighter text-slate-400">{s.l}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}