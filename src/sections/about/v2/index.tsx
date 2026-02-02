'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ParticleBackground } from '@/src/components/ParticleBackground';
const zammyPortraits = [
  '/assets/images/about/leading-google-seo-expert.webp',
  '/assets/images/about/download.jpg',
  '/assets/images/about/white-hat-seo-expert.webp',
  '/assets/images/about/best-seo.jpg',
   '/assets/images/about/zammyzaif.jpg',
  '/assets/images/about/seoexpert-zammyzaif.jpg'
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
       <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute left-[-5%] bottom-[5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
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
         <ParticleBackground />
        {/* Small Interaction Hint */}
        <div className="absolute bottom-10 lg:bottom-20 flex flex-col items-center gap-3 opacity-40">
           <div className="w-[1px] h-12 bg-gradient-to-b from-orange-500 to-transparent" />
           <span className="p font-bold tracking-[0.5em] uppercase text-black">Hold to Spin Archive</span>
        </div>
      </div>

      {/* 3. RANK ONE CONTENT (RIGHT) */}
      <div className="relative z-20 w-full lg:w-6/12 mt-10 lg:mt-0">
        <div className="space-y-10">
          <header className="space-y-4">
            <div className="flex items-center gap-3">
               <span className="w-8 h-[2px] bg-[#3cb878]" />
               <span className="h5 font-bold text-[#3cb878] mb-4 tracking-[0.2em] uppercase">19 Years Legacy</span>
            </div>
            <h2 className=" h2 font-secondary text-gray-900  tracking-tighter leading-[0.85]">
              Google Ranking Expert
              <span className="text-[#3cb878]" > ZAMMY ZAIF</span>
            </h2>
          </header>

          <div className="space-y-6">
            <p className="text-gray-700 p font-medium leading-relaxed max-w-2xl border-l-4 border-[#3cb878] pl-8">
              Zammy Zaif helps websites grow big and strong! As a trusted 
              <span className="text-gray-900 font-bold"> Google SEO Expert </span> 
              Zammy Zaif helps websites grow big and strong! Zammy Zaif is a
              trusted Google SEO Expert with over 18 years of experience in
              ranking websites on the first page of Google. We specialize in
              organic SEO strategies designed to increase visibility, traffic,
              and conversions for businesses of all sizes. By following 100%
              Google guidelines, we ensure lasting results through ethical and
              data-driven optimization. Our team has successfully managed over
              2,400 projects and helped 170+ satisfied clients achieve top
              positions in competitive industries.Our team has successfully managed over
              2,400 projects and helped 170+ satisfied clients achieve top
              positions in competitive industries.Our team has successfully managed over
              2,400 projects and helped 170+ satisfied clients achieve top
              positions in competitive industries..<span className="text-gray-900 font-bold">predictable revenue growth</span>.
          </p>
            
          </div>

          {/* DYNAMIC PERCENTAGE PROGRESS BARS */}
          <div className="space-y-6 max-w-2xl">
            {[
              { label: "Search Authority", val: "99%" },
              
              { label: "Client Satisfaction", val: "100%" }
            ].map((s, i) => (
              <div key={i} className="space-y-2 group">
                <div className="flex justify-between items-baseline">
                  <span className="h6 font-bold text-gray-900 uppercase tracking-widest font-mono">{s.label}</span>
                  <span className="h6 italic text-[#3cb878]">{s.val}</span>
                </div>
                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: s.val }}
                    transition={{ duration: 1.2, delay: 0.1 * i }}
                    className="h-full bg-[#3cb878] relative overflow-hidden" 
                  >
                    {/* Shimmer Effect on Bar */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col max-w-2xl sm:flex-row gap-4 pt-4">
            <button className="flex-1 bg-[#3cb878] text-white font-black uppercase h6 tracking-[0.2em] py-4 hover:bg-white hover:text-[#3cb878] transition-all shadow-xl rounded-sm">
               Consult Authority
            </button>
            <button className="flex-1 border-2 border-[#3cb878] text-[#3cb878] uppercase h6 tracking-[0.2em] py-4 hover:bg-[#3cb878] hover:text-white transition-all rounded-sm">
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