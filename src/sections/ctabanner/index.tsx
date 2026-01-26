'use client';


import { ctaBannerData } from '@/data/brand-cta';
import React from 'react';
import { motion } from 'framer-motion';

export function CtaBanner() {

    const { title, subtitle, primaryBtn, secondaryBtn } = ctaBannerData;
  return (
    <section className="relative bg-white px-4 py-12 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden rounded-[32px] bg-slate-950 shadow-2xl">
          
          {/* DATA GRID & GROWTH BARS */}
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]" />
          
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex h-64 items-end justify-around gap-2 px-10 opacity-20">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [40, Math.random() * 150 + 50, 40] }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
                className="flex-1 rounded-t-md bg-orange-600"
              />
            ))}
          </div>

          {/* CONTENT AREA */}
          <div className="relative z-30 flex flex-col items-center px-6 text-center">
             <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border-r-2 border-t-2 border-orange-600 p-4"
              >
                <div className="h-full w-full animate-pulse rounded-full bg-orange-600 opacity-40 blur-[15px]" />
              </motion.div>

            <h2 className="mb-6 max-w-4xl text-[36px] font-black uppercase leading-[1] tracking-tighter text-white md:text-[64px]">
              {title}
            </h2>

            <p className="mb-10 max-w-xl text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
             {subtitle}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
                          <button className="rounded-full bg-orange-600 px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95">
                              {primaryBtn.label}
              </button>
              <button className="rounded-full border border-white/20 px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black">
                {secondaryBtn.label}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </section>
  );
}