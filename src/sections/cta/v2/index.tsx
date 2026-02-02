'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CtaBanner() {
  return (
    <section className="relative bg-white px-4 py-20 font-sans overflow-hidden">
      <div className="mx-auto w-full max-w-6xl">
        {/* Main Banner Container with Exact Light Peach Gradient */}
        <div className="relative flex min-h-[350px] w-full items-center justify-center overflow-hidden rounded-[60px] bg-gradient-to-br from-[#FFF9F5] via-[#FFF0E5] to-[#FFF9F5] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(255,106,0,0.1)]">
             <div className="pointer-events-none absolute left-[1%] bottom-[15%] h-[200px] w-[200px] animate-pulse rounded-full bg-primary/90 blur-[100px]" />
            <div className="pointer-events-none absolute right-[1%] bottom-[15%] h-[200px] w-[200px] animate-pulse rounded-full bg-primary/90 blur-[100px]" />

          {/* THE ANIMATED "SNAKE" BORDERS (Glowing Orange Lines) */}
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

              {/* Top-Right Line */}
              <motion.rect
                x="0" y="0"
                width="100%" height="100%"
                rx="60"
                fill="none"
                stroke="#3cb878"
                strokeWidth="6"
                strokeLinecap="round"
                filter="url(#orangeGlow)"
                initial={{ pathLength: 0.2, pathOffset: 0.05 }}
                animate={{ pathOffset: 1.05 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Bottom-Left Line (Starts Opposite) */}
              <motion.rect
                x="0" y="0"
                width="100%" height="100%"
                rx="60"
                fill="none"
                stroke="#3cb878"
                strokeWidth="6"
                strokeLinecap="round"
                filter="url(#orangeGlow)"
                initial={{ pathLength: 0.2, pathOffset: 0.55 }}
                animate={{ pathOffset: 1.55 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          {/* CONTENT AREA */}
          <div className="relative z-20 flex flex-col items-center text-center">
            
            {/* Headline with Exact "First Rank" Orange Italic Styling */}
            <h2 className="mb-6 max-w-4xl  font-[900] leading-[1.2] tracking-tight text-[#444] h2">
              Get Your Website <span className="italic text-[#3cb878]">First Rank</span> on Google
            </h2>

            {/* Subtitle Paragraph */}
            <p className="mb-12 max-w-2xl p font-medium leading-relaxed text-[#666] md:text-[18px]">
              Boost your business visibility with proven SEO strategies. Simple, powerful tools to monitor your rankings.
            </p>

            {/* THE BUTTONS: Ready to Rank? Want More Traffic? Need Top Results? */}
            <div className="flex flex-wrap justify-center gap-5">
              {[
                "Ready to Rank #1?",
                "Want More Traffic?",
                "Need Top Results?"
              ].map((text, i) => (
                <button
                  key={i}
                  className="rounded-full border border-white/80 bg-white/40 px-8 py-3.5 h6 font-bold text-[#555] shadow-sm backdrop-blur-md transition-all hover:bg-white/90 hover:scale-105 active:scale-95"
                >
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