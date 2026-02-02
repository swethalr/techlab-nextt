'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white p-6 md:p-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />

       <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[20%] top-[-10%] h-[20%] w-[60%] rounded-full bg-[#ff6a00]/30 blur-[100px]" />
        </div>
      {/* 1. CLEAN BACKGROUND (Using your exact Brand Hexes) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[-5%] top-[-10%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]" />
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#ff6a00_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      {/* 2. THE STATIONARY STAGE (3D Logic Removed) */}
      <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 items-center gap-8 rounded-[40px] border border-orange-200 bg-gradient-to-b from-[#FFDDC7] to-[#FFC8A9] p-8 shadow-2xl md:p-12 lg:grid-cols-2">
        
        {/* --- LEFT: COMPACT PORTRAIT --- */}
        <div className="group relative flex justify-center lg:justify-start">
          <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-[30px] border-4 border-white shadow-xl">
            <img
              src="/assets/images/about/leading-google-seo-expert.webp"
              alt="Zammy Zaif"
              className="h-full w-full object-cover brightness-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent" />
          </div>

          {/* Decorative Static Corner */}
          <div className="absolute -left-4 -top-4 h-20 w-20 rounded-tl-[30px] border-l-4 border-t-4 border-orange-600/30" />
        </div>

        {/* --- RIGHT: NEAT FORM --- */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h2 className="h2 font-bold leading-tight tracking-tight text-slate-900">
              Ready to <span className="text-orange-600">Scale?</span>
            </h2>
            <p className="mt-2 p font-medium text-slate-700">
              Let's build your SEO roadmap today.
            </p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <CleanInput label="Name" placeholder="John Doe" />
              <CleanInput label="Email" placeholder="john@example.com" />
            </div>
            <CleanInput
              label="Message"
              placeholder="Tell me about your project..."
              area
            />

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#fff8f4', color: '#ff6a00' }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-2xl bg-orange-600 py-4 font-bold text-white shadow-lg shadow-orange-900/10 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}

function CleanInput({
  label,
  placeholder,
  area = false,
}: {
  label: string;
  placeholder: string;
  area?: boolean;
}) {
  return (
    <div className="group flex flex-col gap-1.5">
      <label className="text-xs font-bold uppercase tracking-wider text-slate-600 transition-colors group-focus-within:text-orange-600">
        {label}
      </label>
      {area ? (
        <textarea
          placeholder={placeholder}
          className="w-full resize-none rounded-xl border border-orange-200 bg-white/80 p-4 text-slate-900 transition-all focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/5"
          rows={3}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="h-12 w-full rounded-xl border border-orange-200 bg-white/80 px-4 text-slate-900 transition-all focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/5"
        />
      )}
    </div>
  );
}