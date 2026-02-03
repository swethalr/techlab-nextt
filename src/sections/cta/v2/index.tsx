'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function CtaBanner({ data }: { data: any }) {
  return (
    <section className="font-sans relative overflow-hidden bg-white px-4 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative flex min-h-[350px] w-full items-center justify-center overflow-hidden rounded-[60px] p-8 shadow-[0_30px_60px_-15px_rgba(60,184,120,0.7)] md:p-16">
          <div className="pointer-events-none absolute bottom-[15%] left-[1%] h-[200px] w-[200px] animate-pulse rounded-full bg-primary/90 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-[15%] right-[1%] h-[200px] w-[200px] animate-pulse rounded-full bg-primary/90 blur-[100px]" />

          {/* ANIMATED BORDERS - EXACTLY AS YOU WROTE THEM */}
          <div className="pointer-events-none absolute inset-0 z-10">
            <svg className="h-full w-full overflow-visible">
              <defs>
                <filter id="orangeGlow">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <motion.rect
                x="0" y="0" width="100%" height="100%" rx="60"
                fill="none" stroke="#3cb878" strokeWidth="6" strokeLinecap="round"
                filter="url(#orangeGlow)"
                initial={{ pathLength: 0.2, pathOffset: 0.05 }}
                animate={{ pathOffset: 1.05 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <motion.rect
                x="0" y="0" width="100%" height="100%" rx="60"
                fill="none" stroke="#3cb878" strokeWidth="6" strokeLinecap="round"
                filter="url(#orangeGlow)"
                initial={{ pathLength: 0.2, pathOffset: 0.55 }}
                animate={{ pathOffset: 1.55 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
            </svg>
          </div>

          <div className="relative z-20 flex flex-col items-center text-center">
            <h3 className="h3 mb-6 max-w-4xl font-[900] leading-[1.2] tracking-tight text-[#444]">
              {data.titleMain} <span className="italic text-[#3cb878]">{data.titleHighlight}</span> {data.titleEnd}
            </h3>
            <p className="p mb-12 max-w-2xl font-medium leading-relaxed text-[#666] md:text-[18px]">
              {data.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              {data.buttons.map((text: string, i: number) => (
                <button key={i} className="h6 rounded-full border border-white/80 bg-white/40 px-8 py-3.5 font-bold text-[#555] shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:bg-white/90 active:scale-95">
                  {text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}