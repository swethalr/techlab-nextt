'use client';
import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  Globe,
  ArrowRight,
  MousePointer2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Star,
  ExternalLink,
  Trophy,
} from 'lucide-react';

export default function GoogleRankingExpertPage() {
  // High-end animation variants for the sections below the banner
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const RANKING_CASES = [
    {
      id: 1,
      src: '/assets/images/results/case-1.jpg',
      title: '45 Days Challenge',
      location: 'New Gurgaon, India',
    },
    {
      id: 2,
      src: '/assets/images/results/case-2.jpg',
      title: 'GMB Performance Max',
      location: 'London, UK',
    },
    {
      id: 3,
      src: '/assets/images/results/case-3.jpg',
      title: 'Top #1 AI Ranking',
      location: 'Toronto, Canada',
    },
    {
      id: 4,
      src: '/assets/images/results/case-4.jpg',
      title: 'SEO Success Story',
      location: 'Dubai, UAE',
    },
    {
      id: 5,
      src: '/assets/images/results/case-5.jpg',
      title: 'Map Pack Dominance',
      location: 'New York, USA',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % RANKING_CASES.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + RANKING_CASES.length) % RANKING_CASES.length
    );
  return (
    <main className="min-h-screen bg-white selection:bg-[#3cb878] selection:text-white">
      {/* --- 1. YOUR BANNER CODE (AS PROVIDED) --- */}
      <section className="relative mt-28 overflow-hidden bg-[#3cb878]/10 pb-24 pt-32 text-center">
        <div className="container relative z-10 mx-auto px-6">
          <h1 className="h1  mb-6 tracking-tighter text-white drop-shadow-md">
            Google Ranking Services
          </h1>
          <p className="p font-bold uppercase tracking-[0.4em] text-white/90">
            Home <span className="mx-2">/</span> Google Ranking Expert
          </p>
        </div>
        {/* Abstract pattern for premium feel */} 
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)',
            backgroundSize: '40px 40px',
          }}
        />
      </section>

      <section className="overflow-hidden bg-white py-24 selection:bg-orange-100 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative w-full lg:w-[45%]">
              {/* Modern Bordered Wrapper */}
              <div className="relative z-10 rounded-[3.5rem] border border-orange-100 bg-white p-2 shadow-[0_40px_100px_-20px_rgba(249,115,22,0.1)] transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[3rem]">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/google-ranking-services/rank-your-business-everywhere.webp"
                    alt="Google Ranking Platforms Cloud"
                    className="object-fit h-auto max-h-[550px] w-full transform transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Decorative Background Aura */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-50/60 blur-[100px]" />
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="w-full space-y-10 lg:w-1/2">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-12 bg-orange-500" />
                  <span className="p text-[18px] font-bold uppercase tracking-[0.4em] text-orange-500">
                    Market Dominance
                  </span>
                </div>
                <h2 className="h2 leading-[0.95] tracking-tighter  text-slate-900">
                  Rank your Business
                  <span className="italic text-orange-500"> Everywhere!</span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="p p font-medium leading-relaxed text-slate-700">
                  Our specialized Google & AI SEO Ranking services are
                  engineered to propel your online visibility with a
                  multi-pronged approach for{' '}
                  <span className="font-bold text-slate-900 ">Future 2026</span>
                  . We optimize your Google Business Profile for{' '}
                  <span className="font-bold text-orange-600">
                    Prime (#1 Spot)
                  </span>
                  placement and architect your website to dominate search
                  results. Our cutting-edge strategies now fully integrate
                  highly dominant rich experiences across all AI platforms
                  including{' '}
                  <span className="font-bold text-slate-800">
                    ChatGPT, Gemini, DeepSeek, and Claude
                  </span>
                  . By capturing high-intent organic traffic directly, we drive
                  a greater volume of qualified inquiries and sustainable
                  growth.
                </p>
              </div>

              {/* Premium CTA Button */}
              <div className="pt-4">
                <button className="group relative overflow-hidden rounded-2xl bg-orange-500 px-6 py-5 shadow-2xl shadow-slate-200 transition-all hover:scale-105 active:scale-95">
                  {/* Shimmer Effect */}
                  <div className="ease-[cubic-bezier(0.22,1,0.36,1)] absolute inset-0 translate-y-full  bg-white transition-transform duration-500 group-hover:translate-y-0" />
                  <span className="h6 relative z-10 flex items-center gap-4 uppercase tracking-widest text-white group-hover:text-orange-500">
                    Get Free Audit Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-2"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(-50%) translateY(0); }
      50% { transform: translateY(-50%) translateY(-15px); }
    }
    .animate-bounce-slow {
      animation: bounce-slow 4s ease-in-out infinite;
    }
  `,
          }}
        />
      </section>
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        {/* Premium Background Accents */}
        <div className="absolute left-1/4 top-0 -z-10 h-96 w-96 rounded-full bg-orange-50 opacity-60 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2"
            >
              <Trophy size={14} className="text-orange-600" />
              <span className="p text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">
                Our First Rank Results
              </span>
            </motion.div>
            <h2 className="h2 uppercase tracking-tighter text-slate-900">
              Expert in{' '}
              <span className="italic text-orange-500">Google Ranking</span>
            </h2>
          </div>

          {/* --- INFINITE SWIPE CAROUSEL --- */}
          <div className="relative cursor-grab active:cursor-grabbing">
            <motion.div
              className="flex items-center gap-6"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -50) nextSlide();
                else if (swipe > 50) prevSlide();
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'circOut' }}
                  className="flex w-full flex-col items-center gap-8 lg:flex-row"
                >
                  {/* We display 3 items at a time for a "Premium Gallery" look */}
                  {[
                    RANKING_CASES[
                      (currentIndex - 1 + RANKING_CASES.length) %
                        RANKING_CASES.length
                    ],
                    RANKING_CASES[currentIndex],
                    RANKING_CASES[(currentIndex + 1) % RANKING_CASES.length],
                  ].map((item, idx) => {
                    const isCenter = idx === 1;
                    return (
                      <div
                        key={`${item.id}-${idx}`}
                        className={`relative flex-shrink-0 transition-all duration-700 
                    ${isCenter ? 'z-20 w-full scale-100 opacity-100 lg:w-[450px]' : 'z-10 hidden scale-90 opacity-40 lg:block lg:w-[300px]'}
                  `}
                      >
                        <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] border-4 border-white bg-slate-100 shadow-2xl">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
                          />

                          {/* Glassmorphism Info Overlay (Only on center) */}
                          {isCenter && (
                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900/80 via-transparent to-transparent p-10">
                              <div className="mb-3 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={14}
                                    className="fill-orange-400 text-orange-400"
                                  />
                                ))}
                              </div>
                              <h4 className="h4 mb-1 uppercase text-white">
                                {item.title}
                              </h4>
                              <p className="text-sm font-bold uppercase tracking-widest text-white/70">
                                {item.location}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Modern Float Navigation */}
            <div className="lg:-px-10 pointer-events-none absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-2">
              <button
                onClick={prevSlide}
                className="pointer-events-auto rounded-full border border-slate-100 bg-white/90 p-5 text-slate-900 shadow-xl backdrop-blur-md transition-all hover:bg-orange-500 hover:text-white active:scale-90"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={nextSlide}
                className="pointer-events-auto rounded-full border border-slate-100 bg-white/90 p-5 text-slate-900 shadow-xl backdrop-blur-md transition-all hover:bg-orange-500 hover:text-white active:scale-90"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="mt-12 flex justify-center gap-3">
            {RANKING_CASES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-10 bg-orange-500' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
