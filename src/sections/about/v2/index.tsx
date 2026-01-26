'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

const zammyPortraits = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
];

export default function AboutSection() {
  const [isDragging, setIsDragging] = useState(false);
  
  // High-precision motion values
  const rotateX = useMotionValue(20);
  const rotateY = useMotionValue(-20);
  
  // Ultra-smooth springs to eliminate "stuck" sensations
  const smoothX = useSpring(rotateX, { stiffness: 50, damping: 25 });
  const smoothY = useSpring(rotateY, { stiffness: 50, damping: 25 });

  // Global Pointer Event: Captures drag even if mouse leaves the element
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

  return (
    <section className="relative min-h-screen bg-[#FDFDFD] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 overflow-hidden py-16 select-none">
      
      {/* 1. CINEMATIC 3D ENVIRONMENT */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Multi-color Aura */}
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-orange-200/30 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-blue-200/30 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Liquid Reflection Floor */}
        <div className="absolute bottom-0 w-full h-[30vh] opacity-[0.15]"
             style={{ 
               background: `linear-gradient(to top, #FDFDFD, transparent), 
                            radial-gradient(circle at center, #FD7E1422, transparent),
                            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 40px),
                            repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 40px)`,
               transform: 'perspective(1000px) rotateX(65deg)',
               transformOrigin: 'bottom'
             }} />
      </div>

      {/* 2. THE 3D INTERACTIVE CORE (LEFT) */}
      <div className="relative z-10 w-full lg:w-1/2 h-[450px] lg:h-screen flex items-center justify-center [perspective:2000px]">
        <motion.div
          onPointerDown={(e) => {
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
            setIsDragging(true);
          }}
          style={{ 
            rotateX: smoothX, 
            rotateY: smoothY, 
            transformStyle: "preserve-3d" 
          }}
          className={`relative w-64 h-64 md:w-80 md:h-80 touch-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
          {[
            "rotateY(0deg) translateZ(160px)",
            "rotateY(90deg) translateZ(160px)",
            "rotateY(180deg) translateZ(160px)",
            "rotateY(-90deg) translateZ(160px)",
            "rotateX(90deg) translateZ(160px)",
            "rotateX(-90deg) translateZ(160px)",
          ].map((transform, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-white/90 border border-black/10 shadow-[0_0_40px_rgba(0,0,0,0.05)] overflow-hidden rounded-sm"
              style={{ transform, backfaceVisibility: "hidden" }}
            >
              <img 
                src={zammyPortraits[i]} 
                alt="Zammy Zaif SEO Expert" 
                draggable="false"
                className="w-full h-full object-cover   transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent pointer-events-none" />
              {/* Glass Glint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-50" />
            </div>
          ))}
        </motion.div>
        
        {/* Small Interaction Hint */}
        <div className="absolute bottom-10 lg:bottom-20 flex flex-col items-center gap-3 opacity-40">
           <div className="w-[1px] h-12 bg-gradient-to-b from-orange-500 to-transparent" />
           <span className="text-[9px] font-mono tracking-[0.5em] uppercase text-black">Hold to Spin Archive</span>
        </div>
      </div>

      {/* 3. RANK ONE CONTENT (RIGHT) */}
      <div className="relative z-20 w-full lg:w-5/12 mt-10 lg:mt-0">
        <div className="space-y-10">
          <header className="space-y-4">
            <div className="flex items-center gap-3">
               <span className="w-8 h-[2px] bg-orange-600" />
               <span className="text-[12px] font-bold font-mono text-orange-600 tracking-[0.6em] uppercase">19 Years Legacy</span>
            </div>
            <h2 className="text-[48px] font-black font-bold text-gray-900 italic uppercase tracking-tighter leading-[0.85]">
              ZAMMY 
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #FD7E14' }}> ZAIF.</span>
            </h2>
          </header>

          <div className="space-y-6">
            <p className="text-gray-500 text-[18px] font-medium leading-relaxed max-w-lg border-l-4 border-orange-500 pl-8">
              Zammy Zaif helps websites grow big and strong! As a trusted 
              <span className="text-gray-900 font-bold"> Google SEO Expert </span> 
              with over 19 years of experience, we specialize in organic strategies designed to increase 
              visibility, traffic, and conversions. Zammy Zaif helps websites grow big and strong! Zammy Zaif is a
              trusted Google SEO Expert with over 18 years of experience in
              ranking websites on the first page of Google.
            </p>
            
          </div>

          {/* DYNAMIC PERCENTAGE PROGRESS BARS */}
          <div className="space-y-6">
            {[
              { label: "Search Authority", val: "99%" },
              { label: "Technical Precision", val: "95%" },
              { label: "Client Satisfaction", val: "100%" }
            ].map((s, i) => (
              <div key={i} className="space-y-2 group">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">{s.label}</span>
                  <span className="text-[10px] font-black italic text-orange-600">{s.val}</span>
                </div>
                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: s.val }}
                    transition={{ duration: 1.2, delay: 0.1 * i }}
                    className="h-full bg-orange-600 relative overflow-hidden" 
                  >
                    {/* Shimmer Effect on Bar */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex-1 bg-gray-900 text-white font-black uppercase text-xs tracking-[0.2em] py-6 hover:bg-orange-600 transition-all shadow-xl rounded-sm">
               Consult Authority
            </button>
            <button className="flex-1 border-2 border-gray-900 text-gray-900 font-black uppercase text-xs tracking-[0.2em] py-6 hover:bg-gray-900 hover:text-white transition-all rounded-sm">
               Case Studies
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}