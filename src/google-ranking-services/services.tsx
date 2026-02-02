'use client';
import React, { useState } from 'react';
import { motion, Variants ,AnimatePresence} from 'framer-motion';
import { 
  ShieldCheck, Zap, Globe, 
  ArrowRight, MousePointer2, CheckCircle2 , ChevronLeft, ChevronRight, Star, ExternalLink, Trophy
} from 'lucide-react';

export default function GoogleRankingExpertPage() {
  
  // High-end animation variants for the sections below the banner
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

    const RANKING_CASES = [
  { id: 1, src: '/assets/images/results/case-1.jpg', title: '45 Days Challenge', location: 'New Gurgaon, India' },
  { id: 2, src: '/assets/images/results/case-2.jpg', title: 'GMB Performance Max', location: 'London, UK' },
  { id: 3, src: '/assets/images/results/case-3.jpg', title: 'Top #1 AI Ranking', location: 'Toronto, Canada' },
  { id: 4, src: '/assets/images/results/case-4.jpg', title: 'SEO Success Story', location: 'Dubai, UAE' },
  { id: 5, src: '/assets/images/results/case-5.jpg', title: 'Map Pack Dominance', location: 'New York, USA' },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % RANKING_CASES.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + RANKING_CASES.length) % RANKING_CASES.length);
  return (
    <main className="bg-white min-h-screen selection:bg-orange-500 selection:text-white">
      
      {/* --- 1. YOUR BANNER CODE (AS PROVIDED) --- */}
      <section className="bg-orange-500 mt-28 pt-32 pb-24 relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="h1  text-white mb-6 tracking-tighter drop-shadow-md">
            Google Ranking Services
          </h1>
          <p className="p font-bold text-white/90 uppercase tracking-[0.4em]">
            Home <span className="mx-2">/</span> Google Ranking Expert
          </p>
        </div>
        {/* Abstract pattern for premium feel */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
      </section>

     <section className="py-24 lg:py-32 bg-white overflow-hidden selection:bg-orange-100">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      
      {/* --- IMAGE CONTAINER --- */}
      <div className="w-full lg:w-[45%] relative group">
        {/* Modern Bordered Wrapper */}
        <div className="relative z-10 p-2 rounded-[3.5rem] border border-orange-100 bg-white shadow-[0_40px_100px_-20px_rgba(249,115,22,0.1)] transition-transform duration-700 group-hover:scale-[1.02]">
          <div className="overflow-hidden rounded-[3rem]">
            {/* Main Platform Illustration */}
            <img 
              src='/assets/images/google-ranking-services/rank-your-business-everywhere.webp'
              alt="Google Ranking Platforms Cloud" 
              className="w-full h-auto max-h-[550px] object-fit transform transition-transform duration-1000 group-hover:scale-110"
            />
          </div>

         </div>

        {/* Decorative Background Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-50/60 rounded-full blur-[100px] -z-10" />
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="w-full lg:w-1/2 space-y-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
          <div className="h-0.5 w-12 bg-orange-500" />
            <span className="p text-[18px] font-bold uppercase tracking-[0.4em] text-orange-500">Market Dominance</span>
          </div>  
          <h2 className="h2 text-slate-900 tracking-tighter  leading-[0.95]">
            Rank your Business 
            <span className="text-orange-500 italic"> Everywhere!</span>
          </h2>
        </div>

        <div className="space-y-6">
          <p className="p text-slate-700 p leading-relaxed font-medium">
            Our specialized Google & AI SEO Ranking services are engineered to propel your online visibility 
            with a multi-pronged approach for <span className="text-slate-900 font-bold ">Future 2026</span>. 
            We optimize your Google Business Profile for <span className="text-orange-600 font-bold">Prime (#1 Spot)</span> 
            placement and architect your website to dominate search results.
          
            Our cutting-edge strategies now fully integrate highly dominant rich experiences across all AI platforms 
            including <span className="font-bold text-slate-800">ChatGPT, Gemini, DeepSeek, and Claude</span>. 
            By capturing high-intent organic traffic directly, we drive a greater volume of qualified 
            inquiries and sustainable growth.
          </p>
        </div>

        {/* Premium CTA Button */}
        <div className="pt-4">
          <button className="group relative px-6 py-5 bg-orange-500 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-slate-200">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-white translate-y-full  group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative z-10 h6 text-white group-hover:text-orange-500 uppercase tracking-widest flex items-center gap-4">
              Get Free Audit Now
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </button>
        </div>
      </div>

    </div>
  </div>

  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(-50%) translateY(0); }
      50% { transform: translateY(-50%) translateY(-15px); }
    }
    .animate-bounce-slow {
      animation: bounce-slow 4s ease-in-out infinite;
    }
  `}} />
          </section>
<section className="py-24 lg:py-32 bg-white relative overflow-hidden">
  {/* Premium Background Accents */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-50 rounded-full blur-[120px] -z-10 opacity-60" />
  
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100"
      >
        <Trophy size={14} className="text-orange-600" />
        <span className="p text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">Our First Rank Results</span>
      </motion.div>
      <h2 className="h2 text-slate-900 tracking-tighter uppercase">
        Expert in <span className="text-orange-500 italic">Google Ranking</span>
      </h2>
    </div>

    {/* --- INFINITE SWIPE CAROUSEL --- */}
    <div className="relative cursor-grab active:cursor-grabbing">
      <motion.div 
        className="flex gap-6 items-center"
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
            transition={{ duration: 0.5, ease: "circOut" }}
            className="flex flex-col lg:flex-row items-center gap-8 w-full"
          >
            {/* We display 3 items at a time for a "Premium Gallery" look */}
            {[
              RANKING_CASES[(currentIndex - 1 + RANKING_CASES.length) % RANKING_CASES.length],
              RANKING_CASES[currentIndex],
              RANKING_CASES[(currentIndex + 1) % RANKING_CASES.length]
            ].map((item, idx) => {
              const isCenter = idx === 1;
              return (
                <div 
                  key={`${item.id}-${idx}`}
                  className={`relative flex-shrink-0 transition-all duration-700 
                    ${isCenter ? 'w-full lg:w-[450px] z-20 scale-100 opacity-100' : 'hidden lg:block lg:w-[300px] z-10 scale-90 opacity-40'}
                  `}
                >
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100 aspect-[4/5] border-4 border-white">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" 
                    />
                    
                    {/* Glassmorphism Info Overlay (Only on center) */}
                    {isCenter && (
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-10">
                        <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-orange-400 text-orange-400" />)}
                        </div>
                        <h4 className="h4 text-white uppercase mb-1">{item.title}</h4>
                        <p className="text-white/70 text-sm font-bold tracking-widest uppercase">{item.location}</p>
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
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 lg:-px-10 pointer-events-none">
        <button onClick={prevSlide} className="p-5 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-slate-100 text-slate-900 pointer-events-auto hover:bg-orange-500 hover:text-white transition-all active:scale-90">
          <ChevronLeft size={28} />
        </button>
        <button onClick={nextSlide} className="p-5 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-slate-100 text-slate-900 pointer-events-auto hover:bg-orange-500 hover:text-white transition-all active:scale-90">
          <ChevronRight size={28} />
        </button>
      </div>
    </div>

    {/* Indicators */}
    <div className="flex justify-center gap-3 mt-12">
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