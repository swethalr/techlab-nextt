'use client';
import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ParticleBackground } from '@/src/components/ParticleBackground';

export default function AboutSection({ data }: { data: any }) {
  const [isDragging, setIsDragging] = useState(false);
  const rotateX = useMotionValue(20);
  const rotateY = useMotionValue(-20);
  const smoothX = useSpring(rotateX, { stiffness: 50, damping: 25 });
  const smoothY = useSpring(rotateY, { stiffness: 50, damping: 25 });

  useEffect(() => {
    const handleGlobalMove = (e: PointerEvent) => {
      if (!isDragging) return;
      rotateY.set(rotateY.get() + e.movementX * 0.4);
      rotateX.set(rotateX.get() - e.movementY * 0.4);
    };
    const handleGlobalUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('pointermove', handleGlobalMove);
      window.addEventListener('pointerup', handleGlobalUp);
      document.body.style.cursor = 'grabbing';
    } else {
      document.body.style.cursor = 'default';
    }
    return () => {
      window.removeEventListener('pointermove', handleGlobalMove);
      window.removeEventListener('pointerup', handleGlobalUp);
    };
  }, [isDragging, rotateX, rotateY]);
  // inside your component function...
const [isMobile, setIsMobile] = React.useState(false);

React.useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 768);
  checkMobile();
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);

// The Z-distance must be exactly HALF of the width/height
// Mobile w-64 = 256px -> Z = 128px
// Desktop w-80 = 320px -> Z = 160px
const zDistance = isMobile ? '128px' : '160px';

  return (
    <section className="relative flex min-h-screen select-none flex-col items-center justify-between overflow-hidden bg-[#FDFDFD] px-6 py-16 lg:flex-row lg:px-24">
      {/* Background Overlays */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>

      {/* 3D CORE (LEFT) */}
      <div className="relative z-10 flex h-[450px] w-full items-center justify-center [perspective:2000px] lg:h-screen lg:w-1/2">
        <motion.div
          onPointerDown={(e) => {
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
            setIsDragging(true);
          }}
          style={{ rotateX: smoothX, rotateY: smoothY, transformStyle: 'preserve-3d' }}
          className={`relative h-64 w-64 touch-none md:h-80 md:w-80 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
          {[
            'rotateY(0deg) translateZ(160px)',
            'rotateY(90deg) translateZ(160px)',
            'rotateY(180deg) translateZ(160px)',
            'rotateY(-90deg) translateZ(160px)',
            'rotateX(90deg) translateZ(160px)',
            'rotateX(-90deg) translateZ(160px)',
          ].map((transform, i) => (
            <div
              key={i}
              className="absolute inset-0 overflow-hidden rounded-sm border border-black/10 bg-white/90 shadow-[0_0_40px_rgba(0,0,0,0.05)]"
              style={{ transform, backfaceVisibility: 'hidden' }}
            >
              <img src={data.images[i]} alt="Zammy Zaif" draggable="false" className="pointer-events-none h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-50" />
            </div>
          ))}
        </motion.div>
        <ParticleBackground />
        <div className="absolute bottom-10 flex flex-col items-center gap-3 opacity-40 lg:bottom-20">
          <div className="h-12 w-[1px] bg-gradient-to-b from-orange-500 to-transparent" />
          <span className="h6 font-bold uppercase tracking-[0.5em] text-black">Hold to Spin Archive</span>
        </div>
      </div>

      {/* CONTENT (RIGHT) */}
      <div className="relative z-20 mt-10 w-full lg:mt-0 lg:w-6/12">
        <div className="space-y-10">
          <header className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#3cb878]" />
              <span className="h5 mb-4 font-bold uppercase tracking-[0.2em] text-[#3cb878]">{data.legacy}</span>
            </div>
            <h2 className="h2 font-secondary leading-[0.85] tracking-tighter text-gray-900">
              {data.title}
            </h2>
          </header>

          <p className="p max-w-2xl border-l-4 border-[#3cb878] pl-8 font-medium leading-relaxed text-gray-700">
            {data.description.text1} <span className="font-bold text-gray-900">{data.description.bold1}</span> {data.description.text2} {data.description.text3} <span className="font-bold text-gray-900">{data.description.bold2}</span>.
          </p>

          <div className="max-w-2xl space-y-6">
            {data.stats.map((s: any, i: number) => (
              <div key={i} className="group space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="h6 font-mono font-bold uppercase tracking-widest text-gray-900">{s.label}</span>
                  <span className="h6 italic text-[#3cb878]">{s.val}</span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-gray-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: s.val }}
                    transition={{ duration: 1.2, delay: 0.1 * i }}
                    className="relative h-full overflow-hidden bg-[#3cb878]"
                  >
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex max-w-2xl flex-col gap-4 pt-4 sm:flex-row">
            <button className="h6 flex-1 rounded-sm bg-[#3cb878] py-4 font-black uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-white hover:text-[#3cb878]">Consult Authority</button>
            <button className="h6 flex-1 rounded-sm border-2 border-[#3cb878] py-4 uppercase tracking-[0.2em] text-[#3cb878] transition-all hover:bg-[#3cb878] hover:text-white">Case Studies</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer { 100% { transform: translateX(100%); } }
      `}</style>
    </section>
  );
}