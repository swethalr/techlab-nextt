'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Technologies({ data }: { data: any }) {
  const { title, description, techItems } = data;
  const centerX = 600;
  const centerY = 350;

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-24">
      {/* Background Grids and Glows */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl text-center">
        <h3 className="h3 mb-4 tracking-tight text-[#0f172a]">{title}</h3>
        <p className="p mx-auto max-w-5xl leading-relaxed text-slate-900">{description}</p>
      </div>

      {/* DESKTOP VIEW: SVG Paths and Floating Boxes */}
      <div className="relative mx-auto hidden aspect-[12/7] w-full max-w-[1400px] sm:block">
        <svg viewBox="0 0 1200 700" fill="none" className="pointer-events-none absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          {techItems.map((tech: any, i: number) => {
            const isTop = tech.y < centerY;
            const cp1Y = isTop ? centerY - 100 : centerY + 100;
            const cp2Y = centerY;
            const pathD = `M${centerX},${centerY}C${centerX},${cp1Y} ${tech.x},${cp2Y} ${tech.x},${tech.y}`;

            return (
              <g key={`path-${i}`}>
                <path d={pathD} stroke="#000000" strokeWidth="1.1" fill="none" />
                <motion.circle
                  r="2.3"
                  fill="#ad0404"
                  initial={{ offsetDistance: '0%' }}
                  animate={{ offsetDistance: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  style={{ offsetPath: `path('${pathD}')` }}
                />
              </g>
            );
          })}
        </svg>

        {/* Central Label */}
        <div 
          className="h4 absolute z-30 select-none rounded-2xl border-4 border-white/90 bg-black px-5 py-3 font-bold text-white shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          style={{ left: `${(centerX / 1200) * 100}%`, top: `${(centerY / 700) * 100}%`, transform: 'translate(-50%, -50%)' }}
        >
          TECHNOLOGIES
        </div>

        {/* Tech Boxes */}
        {techItems.map((tech: any, i: number) => (
          <div
            key={`box-${i}`}
            className="absolute z-20 flex aspect-square w-[8%] items-center justify-center rounded-[2.5rem] border-2 bg-white shadow-[0_15px_45px_-15px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-110"
            style={{
              left: `${(tech.x / 1200) * 100}%`,
              top: `${(tech.y / 700) * 100}%`,
              transform: 'translate(-50%, -50%)',
              borderColor: `${tech.color}90`,
            }}
          >
            <div className="text-2xl" style={{ color: tech.color }}>{tech.icon}</div>
          </div>
        ))}
      </div>

      {/* MOBILE VIEW */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:hidden">
        {techItems.map((tech: any, i: number) => (
          <motion.div
            key={`mob-${i}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center rounded-2xl border-2 bg-white p-6 shadow-sm"
            style={{ borderColor: `${tech.color}25` }}
          >
            <div className="mb-2 text-4xl" style={{ color: tech.color }}>{tech.icon}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}