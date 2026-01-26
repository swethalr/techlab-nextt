'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CtaBanner() {
  return (
    <section className="relative px-4 py-12 md:py-24 font-sans bg-white">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden rounded-[20px] bg-slate-950 shadow-2xl">
          
          {/* --- LAYER 1: THE SILVER "DATA GRID" --- */}
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          {/* --- LAYER 2: RISING RANKING BARS (SEO GROWTH VISUAL) --- */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex h-64 items-end justify-around gap-2 px-10 opacity-30">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [40, Math.random() * 200 + 50, 40] }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="flex-1 rounded-t-sm bg-orange-600"
              />
            ))}
          </div>

          {/* --- LAYER 3: SILVER TRACER (NEW STYLE: TWO LINES RACING) --- */}
          <div className="pointer-events-none absolute inset-0 z-20">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.rect
                x="0.5"
                y="0.5"
                width="99"
                height="99"
                rx="2"
                fill="none"
                stroke="white"
                strokeWidth="0.2"
                style={{ pathLength: 0.1 }}
                animate={{ pathOffset: [0, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <motion.rect
                x="0.5"
                y="0.5"
                width="99"
                height="99"
                rx="2"
                fill="none"
                stroke="#ff6a00"
                strokeWidth="0.4"
                style={{ pathLength: 0.05 }}
                animate={{ pathOffset: [1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />
            </svg>
          </div>

          {/* --- LAYER 4: KINETIC TYPOGRAPHY & REVEAL --- */}
          <div className="relative z-30 flex flex-col items-center px-6 text-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border-r-2 border-t-2 border-orange-600 p-4"
            >
              <div className="h-full w-full animate-pulse rounded-full bg-orange-600 opacity-40 blur-[20px]" />
            </motion.div>

            <h3 className="text-2xl md:text-2xl non-italic font-black uppercase leading-[0.9] tracking-tighter text-white">
              Get Your Website{' '}
              <span className="italic text-orange-600"> First Rank </span>
              On <span className="outline-text"> GOOGLE</span>
            </h3>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              className="mx-auto my-10 h-[2px] max-w-md bg-orange-600"
            />

            <p className="mb-12 max-w-xl font-light uppercase tracking-wide text-slate-100">
              Boost your business visibility with proven SEO strategies.
              Simple, powerful tools to monitor your rankings.
            </p>

            {/* --- LAYER 5: INTERACTIVE BUTTONS (NEO-BRUTALIST) --- */}
            <div className="flex flex-col gap-6 md:flex-row">
              {['Start Ranking', 'Free Analysis'].map((text, i) => (
                <motion.button
                  key={i}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className={`relative px-12 py-5 text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                    i === 0
                      ? 'bg-orange-600 text-white hover:bg-white hover:text-orange-600'
                      : 'border border-white text-white hover:bg-white hover:text-slate-950'
                  }`}
                >
                  {text}
                </motion.button>
              ))}
            </div>
          </div>

          {/* --- LAYER 6: FLOATING SEO NODES (FLOATING AROUND) --- */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
                y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="text-9xl pointer-events-none absolute z-10 select-none font-black text-orange-600/20"
              style={{ left: `${15 * i}%`, top: `${10 * i}%` }}
            >
              #0{i + 1}
            </motion.div>
          ))}
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