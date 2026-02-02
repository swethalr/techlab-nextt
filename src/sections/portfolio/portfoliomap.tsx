'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaArrowRight,
  FaChartSimple,
  FaPhone,
  FaMessage,
  FaCalendarDays,
  FaLocationDot,
  FaGlobe,
  FaMapLocationDot,
  FaRankingStar,
  FaCircleCheck,
} from 'react-icons/fa6';

const mapSteps = [
  {
    title: 'Profile Optimization',
    desc: 'Enhance your Google Business Profile with accurate details and images.',
    icon: <FaMapLocationDot />,
    color: 'bg-primary',
    image: '/assets/images/map/optimization.jpg', // Path to your first image
  },
  {
    title: 'Local Citations',
    desc: 'Build strong local citations that improve trust and ranking consistency.',
    icon: <FaRankingStar />,
    color: 'bg-cyan-500',
    image: '/assets/images/map/citations.jpg', // Path to your second image
  },
  {
    title: 'Performance Tracking',
    desc: 'Monitor engagement and ranking progress through detailed reports.',
    icon: <FaChartSimple />,
    color: 'bg-indigo-500',
    image: '/assets/images/map/tracking.jpg', // Path to your third image
  },
];

export default function PortfolioSectionmap() {
  const [activeTab, setActiveTab] = useState('Overview');
    const [hoveredStep, setHoveredStep] = useState(0);
    
    return (
        <section className="relative overflow-hidden bg-transparent px-4 py-20">
              {/* --- 4. NEW UPDATED GOOGLE MAPS SECTION (ONLY CHANGE HERE) --- */}
                    <div className="relative pb-20 pt-24">
                      <header className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-1.5">
                          <FaMapLocationDot className="text-xs text-cyan-500" />
                          <h6 className="h6 font-bold uppercase tracking-widest text-cyan-600">
                            Boost Visibility • Drive Growth
                          </h6>
                        </div>
                        <h2 className="h2 font-bold leading-tight text-accent-900">
                          Google Maps{' '}
                          <span className="italic text-primary">Ranking Experts</span>
                        </h2>
                      </header>
            
                      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                        {/* Interactive Service Cards */}
                        <div className="space-y-6 lg:col-span-5">
                          {mapSteps.map((step, i) => (
                            <motion.article
                              key={i}
                              onMouseEnter={() => setHoveredStep(i)}
                              className={`group cursor-pointer rounded-[2rem] border p-6 transition-all duration-500 ${hoveredStep === i ? 'border-primary/20 bg-white shadow-xl shadow-primary/5' : 'border-slate-100 bg-transparent'}`}
                            >
                              <div className="flex gap-5">
                                <div
                                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg ${step.color}`}
                                >
                                  {step.icon}
                                </div>
                                <div>
                                  <h4 className="h4 mb-2 font-bold text-accent-900">
                                    {step.title}
                                  </h4>
                                  <h6 className="h6 leading-relaxed text-slate-500">
                                    {step.desc}
                                  </h6>
                                </div>
                              </div>
                            </motion.article>
                          ))}
                          <button className="p mt-8 flex items-center gap-3 rounded-full bg-primary px-10 py-4 font-bold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105">
                            Claim Today <FaArrowRight />
                          </button>
                        </div>
            
                        {/* Geographic Map Visualization - NO BLANK GAP VERSION */}
                        <div className="relative lg:col-span-7">
                          <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] border border-slate-200 bg-slate-100 shadow-2xl">
                            {/* 1. PRELOADER: This hides the images in the background so they are ready instantly */}
                            <div className="hidden">
                              {mapSteps.map((step, i) => (
                                <img key={i} src={step.image} alt="preload" />
                              ))}
                            </div>
            
                            {/* 2. CROSS-FADE TRANSITION: No 'mode="wait"' means no white gap */}
                            <AnimatePresence>
                              <motion.div
                                key={hoveredStep}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }} // Faster transition for a snappier feel
                                className="absolute inset-0"
                              >
                                <Image
                                  src={mapSteps[hoveredStep].image}
                                  alt={mapSteps[hoveredStep].title}
                                  fill
                                  className="object-cover"
                                  priority // Tells Next.js to load these images first
                                />
                              </motion.div>
                            </AnimatePresence>
            
                            {/* Stats Bar */}
                            <div className="absolute bottom-6 left-6 right-6 flex justify-around rounded-2xl border border-slate-100 bg-white/95 p-5 shadow-lg backdrop-blur-md">
                              {[
                                { v: '98%', l: 'Reach' },
                                { v: '#1', l: 'Rank' },
                                { v: '2.4k', l: 'Views' },
                              ].map((s, i) => (
                                <div key={i} className="text-center">
                                  <h4 className="h4 font-black text-primary">{s.v}</h4>
                                  <h6 className="h6 font-bold uppercase tracking-tighter text-slate-400">
                                    {s.l}
                                  </h6>
                                </div>
                              ))}
                            </div>
                            
              </div>
            </div>
                </div>
            </div>
             </section>
  );
}

            










    