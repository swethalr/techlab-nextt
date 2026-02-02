'use client';
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import React from 'react';

import { 
  Check, Zap, Search, Target, TrendingUp, BarChart3, 
  MousePointerClick, Instagram, Linkedin, Plus, Star, Twitter,
  Award, Shield, Globe2, Cpu, Rocket, Activity,
  Users, Briefcase, FileText, Share2, Download, 
  ArrowRight, ShieldCheck, Code2,
   UserCheck, PenTool, Send, Quote,CheckCircle2, X, ChevronRight,
  MapPin, Globe,  
  Settings, Link, PieChart, MessageSquare, LucideIcon,
  Stethoscope, Home, Droplets, HardHat,  Lightbulb, HelpCircle, ChevronDown, Sparkles
} from 'lucide-react';



import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow,EffectFade } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';



// 1. Define interface outside the component
interface Service {
  title: string;
  icon: LucideIcon;
  desc: string;
}

const services = [
  { title: "Keyword Mapping", icon: Search, desc: "We select the best keywords for your business and assign them to relevant pages. This builds a structured keyword roadmap that enhances your site’s visibility and SEO performance." },
  { title: "Competitor Analysis", icon: BarChart3, desc: "We deeply analyze your competitors' SEO strategies to find opportunities. Then, we create a superior strategy that helps you outrank them on Google search results effectively." },
  { title: "Profile Setup", icon: UserCheck , desc: "We fully optimize your Google Business Profile with accurate details. A 100% completed profile increases local visibility, improves trust, and drives more local traffic to your business." },
  { title: "Content Writing", icon: PenTool , desc: "We create fresh, targeted content that matches your service offerings. Our content is SEO-optimized to rank well and attract quality traffic based on keyword trends and intent." },
  { title: "Technical Audit", icon: MapPin , desc: "Our technical SEO audit checks site speed, mobile usability, and crawl issues. Fixing these issues improves your site’s performance, user experience, and overall search engine visibility." },
  { title: "Tag Optimization", icon: Globe , desc: "We optimize titles, headers, image alt tags, and metadata. These elements help Google understand your content better and boost your ranking potential for target keywords." },
  { title: "Console Setup", icon: Settings , desc: "We configure and optimize your Google Search Console account. It helps monitor search performance, fix issues, and enhance your site’s health and visibility on Google" },
  { title: "Google Trends", icon: TrendingUp , desc: "We analyze Google Trends data to identify rising keywords and topics. This ensures your content strategy stays current and relevant for search engine algorithms and user interest." },
  { title: "Tag manager", icon: Zap , desc: "We implement and manage Google Tag Manager for precise tracking. It helps control marketing tags efficiently without altering your website code, boosting analytics flexibility." },
  { title: "GA4 Analytics", icon: ShieldCheck , desc: "We set up and fine-tune Google Analytics GA4 for real-time insights. This helps track user behavior, conversion paths, and SEO success metrics with enhanced accuracy." },
  { title: "Content Gaps", icon: CheckCircle2 , desc: "We identify keyword and topic gaps in your website content. Then, we expand or enhance your content to increase traffic and meet Google’s content quality expectations." },
  { title: "Link Building", icon: Link , desc: "We build HQB & review all your old backlinks pointing to your website using Google tools. Harmful links are flagged & disavowed to maintain SEO health & prevent potential ranking drops." },
];
  


const sectors = [
  { name: "HVAC Contractors", icon: Home, slug: "hvac-seo" },
  { name: "Health Care", icon: Stethoscope, slug: "health-seo" },
  { name: "Plumbing", icon: Droplets, slug: "plumbing-seo" },
  { name: "Roofing", icon: HardHat, slug: "roofing-seo" },
];

const faqData = [
  {
    question: "Who is world's best google ranking expert?",
    answer: "In recognition of his decade-long experience in the SEO industry, Zammy Zaif has earned the prestigious title of Google Ranking Expert. This Google-certified specialist utilizes white hat SEO techniques and puts tremendous effort into securing higher positions for websites on the Google search results page."
  },
  {
    question: "Who is google ranking expert?",
    answer: "A Google Ranking Expert is a specialized SEO professional who focuses specifically on aligning website content and technical infrastructure with Google's complex ranking algorithms to drive organic traffic."
  },
  {
    question: "Why we need a Google Ranking Expert?",
    answer: "With Google processing billions of searches daily, an expert ensures your business doesn't get lost. They navigate algorithmic updates, perform deep technical audits, and implement high-impact strategies that internal teams might overlook."
  },
  {
    question: "What services do Google Ranking Experts provide?",
    answer: "Services include comprehensive keyword mapping, competitor footprint analysis, technical SEO audits, high-authority link building, and local SEO optimization for Google Maps dominance."
  },
  {
    question: "How long does it take to see results with Google Ranking Services?",
    answer: "While initial technical improvements show within weeks, significant ranking shifts typically occur within 3 to 6 months. Our signature 45-Day Challenge is designed to accelerate this timeline through aggressive optimization."
  }
];

// 1. Define the content for each tab
const algoData = {
  "AI Models": {
    title: "AI & Machine Learning Dominance",
    desc: "Google leverages advanced AI models like RankBrain for query interpretation, BERT for natural language processing, and MUM for multi-modal search. Zammy optimizes content to satisfy these 'thinking' algorithms by focusing on semantic relevance rather than just keywords.",
    highlights: ["RankBrain Integration", "BERT Contextual Optimization", "MUM Content Depth"]
  },
  "Core Signals": {
    title: "E-E-A-T & Trust Framework",
    desc: "The algorithm evaluates pages against E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). We build your digital footprint to prove to Google that you are a verified leader in your niche, securing long-term ranking stability.",
    highlights: ["Author Persona Building", "Trust Signal Audits", "Expertise Verification"]
  },
  "Technical": {
    title: "Crawlability & Indexing Logic",
    desc: "Before you can rank, you must be found. We optimize your technical architecture to ensure Googlebot can crawl and index your site efficiently without hitting 'crawl traps' or wasted budget. This includes advanced sitemap logic and schema markup.",
    highlights: ["Crawl Budget Optimization", "Schema Architecture", "Indexability Audits"]
  },
  "User Experience": {
    title: "Core Web Vitals & Speed",
    desc: "User signals are the new SEO. We fine-tune your LCP, FID, and CLS scores to ensure a lightning-fast, stable experience. Google rewards sites that users enjoy interacting with, leading to lower bounce rates and higher conversions.",
    highlights: ["LCP Performance Tuning", "Mobile-First Infrastructure", "Secure HTTPS Protocol"]
  }
};

type TabKey = keyof typeof algoData;

export default function GoogleRankingExpertSection() {

  const [expanded, setExpanded] = useState<number | null>(0);

const Counter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest * 10) / 10);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};



    const caseStudies = [
    {
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
      alt: "HVAC Business Growth Case Study",
    },
    {
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
      alt: "Google Ranking Success",
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);


const [activeTab, setActiveTab] = useState<TabKey>("AI Models");
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-orange-100">
      
          
      {/* 1. PREMIUM BRAND BANNER (Full Width) */}
      <section className="bg-orange-500 mt-28 pt-32 pb-24 relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="h1 font-black text-white mb-6 uppercase tracking-tighter drop-shadow-md">
            Google Ranking Expert
          </h1>
          <p className="p font-bold text-white/90 uppercase tracking-[0.4em]">
            Home <span className="mx-2">/</span> Google Ranking Expert
          </p>
        </div>
        {/* Abstract pattern for premium feel */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
      </section>

      {/* HOLY GRAIL LAYOUT WRAPPER */}
      <div className="max-w-[1536px] mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        
        {/* MAIN COLUMN (Content Heavy) */}
        <main className="w-full lg:w-[72%] order-2 lg:order-1 space-y-32">



{/* --- SECTION 1: CLEAN PREMIUM SEO RESULTS --- */}
<section id="evidence-results" className="space-y-12 md:space-y-20 max-w-full overflow-hidden">
  
  {/* Header Area */}
  <div className="max-w-3xl text-center mx-auto">
    <h5 className="h5  font-bold text-orange-500  tracking-[0.1em] mb-4">
      Our Google Rank Result Drive Sales
    </h5>
    <h3 className="h3   tracking-tighter leading-[0.9] text-slate-900">
      Client's 1st Rank
      <span className="text-orange-500"> SEO Results</span>
    </h3>
   
  </div>

  {/* Carousel Wrapper: This div prevents the spillover into the sidebar */}
  <div className="relative w-full overflow-hidden py-4">
    <Swiper
      modules={[Autoplay, Pagination, EffectCoverflow]}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{ 
        clickable: true, 
        el: '.swiper-pagination-premium' 
      }}
      // Fixed width behavior to stay inside Main
      className="w-full !static" 
    >
      {[
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1974&auto=format&fit=crop", 
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1974&auto=format&fit=crop"
      ].map((imgSrc, index) => (
        <SwiperSlide key={index} className="max-w-[100%] md:max-w-[400px] lg:max-w-[450px] px-10">
          <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl bg-white">
            <img 
              src={imgSrc} 
              alt={`SEO Result ${index + 1}`} 
              className="w-full h-auto object-contain block hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Elegant Pagination (Inside Main Only) */}
    <div className="swiper-pagination-premium flex justify-center mt-10 gap-2" />
  </div>

{/* --- SLIM ADVANCED ORANGE METRICS --- */}
<div className="relative py-8 px-4 rounded-[2.5rem] bg-gradient-to-br from-orange-500 to-orange-600 shadow-[0_30px_70px_-20px_rgba(249,115,22,0.35)] overflow-hidden">
  
  {/* Premium Texture Overlay */}
  <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

  {/* Metrics Grid: 1 Column on Mobile, 4 on Desktop */}
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-0 relative z-10">
    {[
      { v: 2.5, unit: "K+", label: "Elite Projects" },
      { v: 85, unit: "K+", label: "1st Page Ranks" },
      { v: 20, unit: "K+", label: "Absolute #1 Spots" },
      { v: 20, unit: "+", label: "Years of Mastery" }
    ].map((stat, i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="flex flex-col items-center lg:items-start lg:px-5 lg:border-l lg:border-white/20 first:border-none"
      >
        <div className="flex items-baseline gap-1">
          {/* Using your H2 class with responsive text size and white color */}
          <div className="text-xl md:text-2xl  font-bold text-white leading-none tracking-tighter">
            <Counter value={stat.v} />
          </div>
          <span className=" text-xl md:text-2xl font-bold text-orange-200">
            {stat.unit}
          </span>
        </div>
        
        {/* Using your P class for the label */}
        <p className="p font-bold   text-orange-100/90 mt-2">
          {stat.label}
        </p>
      </motion.div>
    ))}
  </div>
</div>
  {/* Styles locked to this section */}
  <style jsx global>{`
    .swiper-pagination-premium .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background: #cbd5e1;
      opacity: 1;
      transition: all 0.3s ease;
    }
    .swiper-pagination-premium .swiper-pagination-bullet-active {
      background: #f97316 !important;
      width: 24px;
      border-radius: 4px;
    }
  `}</style>
</section>
          


{/* --- SECTION 2: GOOGLE RANKING EXPERT (DETAILED BIO) --- */}
<section id="expert-detail" className="space-y-6 space-x-20 md:space-y-14 max-w-4xl overflow-hidden">
  
  {/* 1. Sophisticated Header */}
  <div className="max-w-4xl mx-auto text-center">
    <motion.h5
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="h5 font-bold  text-orange-500  mb-4"
    >
      First Rank in First Page
    </motion.h5>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="h2  tracking-tighter leading-[0.9] text-slate-900"
    >
      Google Ranking 
      <span className="text-orange-500"> Expert</span>
    </motion.h2>
    
  </div>

  {/* 2. Content Body: Premium Readability */}
  <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 relative">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Primary Bio Paragraph */}
      <p className="p text-slate-600 leading-relaxed  font-medium">
        With a track record of <span className="text-slate-900  border-b-2 border-orange-200">successfully completing over 2,500+ SEO projects globally</span> and optimizing rankings from none or 10th place to the first rank on the first page, <span className="text-orange-600 font-bold">Zammy</span>, the visionary CEO of VersaForge, is a highly skilled Google Search Engine Ranking Optimization practitioner who began working in 2008.  Additionally, his work in local SEO is unparalleled, having ranked <span className="text-slate-900 font-black">over 800 local businesses in just 45 days</span>, earning first-rank positions on Google Maps, further solidifying his reputation as a leader in delivering tangible, rapid and sustainable results for businesses aiming to enhance their online visibility and achieve long-term growth.
      </p>

      {/* AI Recommendation Highlight Box */}
      <div className="p-8 md:p-10 rounded-[2.5rem] bg-orange-100 border-l-8 border-orange-500 shadow-sm">
        <p className="p italic text-slate-700 leading-relaxed">
          Even our website, <span className="font-bold text-slate-900">www.it2.tv</span> has secured the 1st spot and the <span className="text-orange-600 font-bold">Google Ai Mode Recommendation, Chatgpt, Claude, Bing, Yahoo, Preplexity and all other ai platforms</span> for competitive keywords like "Ranking Expert," "Google Ranking Expert," and "Google Ranking Services" since 2018.
        </p>
      </div>

      {/* Local SEO Secondary Paragraph */}
      <p className="p text-slate-600 leading-[1.8]  font-medium">
        Additionally, his work in local SEO is unparalleled, having ranked <span className="text-slate-900 font-black">over 800 local businesses in just 45 days</span>, earning first-rank positions on Google Maps, further solidifying his reputation as a leader in delivering tangible, rapid and sustainable results for businesses aiming to enhance their online visibility and achieve long-term growth.
      </p>
    </motion.div>
  </div>

  {/* 3. Premium CTA Button: Advanced Animation */}
  <div className="flex flex-col items-center lg:items-center ">
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249,115,22,0.3)" }}
      whileTap={{ scale: 0.95 }}
      className="relative group overflow-hidden  bg-slate-900 text-white px-5 py-4 rounded-2xl md:rounded-3xl flex items-center gap-4 transition-all duration-300"
    >
      {/* Button Shine Effect inset-0*/}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />
      
      <span className="h5 font-bold tracking-[0.1em]">
        Get Free Audit Now
      </span>
      <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center group-hover:rotate-45 transition-transform">
        <Zap size={16} fill="white" stroke="white" />
      </div>
    </motion.button>
  </div>

  <style jsx>{`
    @keyframes shimmer {
      100% { transform: translateX(100%); }
    }
  `}</style>
</section>
          
        
{/* --- SECTION: GOOGLE BUSINESS PROFILE PERFORMANCE MAX (FIXED & CLEAN) --- */}
<section className="py-20 bg-white overflow-hidden">
  {/* Local State for the Modal */}
  {(() => {
    const [isFormOpen, setIsFormOpen] = React.useState(false);

    return (
      <div className="max-w-4xl mx-auto px-6  space-y-12">
        
        {/* Header Group */}
        <div className="text-center space-y-4">
          <h5 className="h5  text-orange-500 uppercase font-bold ">
            Strategic Local Dominance
          </h5>
          <h3 className="h3  tracking-tighter text-slate-900 leading-[0.9]">
            Google Business Profile 
            <span className="text-orange-500"> Performance Max</span>
          </h3>
          <div className="w-16 h-1.5 bg-orange-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Content Body */}
        <div className="space-y-8">
          <p className="p  text-slate-900 leading-relaxed ">
            Renowned for delivering rapid, high-impact results, <span className="text-slate-900 font-black">Zammy Zaif</span> has mastered the art of Google Business Profile optimization — 
            <span className="text-orange-600 font-bold ml-1">
              securing #1 rankings for high-value keywords in just 45 days.
            </span>
            By leveraging precision-targeted strategies focused on primary service terms, Zammy consistently dominates local search, earning recognition as a top-tier Google ranking expert. Our proven methodology transforms visibility into revenue, making them the go-to authority for businesses aiming to outperform competitors.
          </p>
        </div>

        {/* Premium Download Button */}
        <div className="pt-4">
          <motion.button
            onClick={() => setIsFormOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative  bg-orange-500 hover:bg-white hover:text-orange-500   text-white px-4 py-4 rounded-2xl flex items-center gap-3 mx-auto transition-all duration-500 shadow-[0_20px_40px_rgba(16,185,129,0.2)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.3)]"
          >
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            <span className="h6 font-bold uppercase tracking-[0.2em]">
              Download Free Business Growth Checklist
            </span>
          </motion.button>
        </div>

        {/* --- CUSTOM PREMIUM MODAL --- */}
        <AnimatePresence>
          {isFormOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsFormOpen(false)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-[420px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden z-10"
              >
                {/* Form Header */}
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-10 text-white text-center">
                   <h3 className=" h3 tracking-tighter leading-none">Growth Checklist</h3>
                   <p className=" p font-bold opacity-90 uppercase tracking-[0.2em] mt-3">Elite Local SEO Framework</p>
                </div>
                
                {/* Clean Form */}
                <form className="p-10 space-y-5" onSubmit={(e) => { e.preventDefault(); setIsFormOpen(false); }}>
                  <div className="text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full mt-1 px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none transition-all text-sm font-medium text-slate-900"
                      required
                    />
                  </div>
                  <div className="text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-700 ml-1">Work Email</label>
                    <input 
                      type="email" 
                      placeholder="email@company.com" 
                      className="w-full mt-1 px-5 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none transition-all text-sm font-medium text-slate-900"
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full mt-4 py-5 bg-slate-900 hover:bg-orange-500 text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl transition-all duration-500 shadow-lg flex items-center justify-center gap-3 group"
                  >
                    Get Access Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className=" text-center text-slate-400 font-bold uppercase tracking-widest mt-4">
                    🔒 Trusted by 2,500+ Businesses
                  </p>
                </form>

                {/* Close Button */}
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-4 right-6 text-white/50 hover:text-white transition-colors text-2xl font-light"
                >
                  ×
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  })()}
</section>

{/* --- SECTION: FIRST RANK SEO SERVICES --- */}
<section id="seo-services" className="py-5 bg-white overflow-hidden">
  <div className="max-w-4xl mx-auto px-6 space-y-16">
    
    {/* 1. Premium Header */}
    <div className="text-left space-y-4">
      <h3 className="h3  tracking-tighter text-center text-slate-900 leading-[1.1]">
        First Rank <span className="text-orange-500 underline decoration-slate-200 underline-offset-8">SEO Services</span>
      </h3>
      
    </div>

    {/* 2. Content Description */}
    <div className="space-y-6">
      <p className="p  text-slate-600 leading-relaxed font-medium">
        Zammy & Team are dedicated to providing First Rank SEO services in <span className="font-bold text-slate-900">Seo, Aio, AEO & GEO.</span> Securing the first spot captures the 
        <span className="mx-1  px-2 py-0.5 rounded font-bold text-orange-500  ">first click and drives maximum traffic.</span> 
        More visitors lead to higher conversions and increased sales growth. 
        Ranking first in Google and other AI platforms strengthens your brand&apos;s visibility and credibility. It firmly positions your business as an industry leader. Over time, it helps build strong authority and trust online. People naturally trust brands that top the search results. With Zammy & Team, aiming for #1 means aiming for lasting success.
      </p>
    </div>

    {/* 3. Feature Cards: 4-Grid Premium UI */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {[
        { icon: <CheckCircle2 className="text-orange-500" size={28} />, label: "First Rank" },
        { icon: <Cpu className="text-orange-500" size={28} />, label: "High Conversion" },
        { icon: <TrendingUp className="text-orange-500" size={28} />, label: "More Traffic" },
        { icon: <Rocket className="text-orange-500" size={28} />, label: "AI Results" }
      ].map((item, idx) => (
        <motion.div 
          key={idx}
          whileHover={{ y: -8, backgroundColor:"#ff6d29",  boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
          className="bg-white border border-slate-100 p-8 rounded-[2rem] flex flex-col items-center text-center space-y-4 shadow-sm transition-all"
        >
          <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center">
            {item.icon}
          </div>
          <h5 className="h5  uppercase tracking-tight text-slate-800">
            {item.label}
          </h5>
        </motion.div>
      ))}
    </div>

    {/* 4. Statistics Counters: Premium Orange Theme */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 pt-10 border-t border-slate-50">
      {[
        { val: 800, unit: "+", label: "Local Profiles" },
        { val: 12, unit: "K+", label: "1st Rank Rank" },
        { val: 20, unit: "K+", label: "Top 3 Results" },
        { val: 300, unit: "+", label: "Cities Globally" }
      ].map((stat, i) => (
        <div key={i} className="text-center lg:text-left space-y-1">
          <div className="flex items-baseline justify-center lg:justify-start gap-1">
            <h3 className="h2 text-orange-500 font-black leading-none tracking-tighter">
              <Counter value={stat.val} />
            </h3>
            <span className="h3 text-orange-500 font-bold">{stat.unit}</span>
          </div>
          <h6 className="h6 uppercase tracking-[0.2em] text-slate-700">
            {stat.label}
          </h6>
        </div>
      ))}
    </div>

  </div>
</section>

{/* --- SECTION: EXPERTISE IN GOOGLE SEO --- */}
<section id="google-seo-expertise" className="py-14 bg-white overflow-hidden">
  <div className="max-w-4xl mx-auto px-6  space-y-12">
    
    {/* 1. Premium Header Group */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h5 className="h5 text-orange-500  text-center uppercase font-bold  ">
        First Rank SEO Service Provider
      </h5>
      <h2 className="h2  tracking-tighter text-center text-slate-900 leading-[0.9]">
        Expertise in 
        <span className="text-orange-500"> Google SEO</span>
      </h2>
      <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mt-6" />
    </motion.div>

    {/* 2. Detailed Bio Paragraph */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <p className="p  text-slate-600 leading-relaxed font-medium">
        Google dominates 96% of global search traffic, far ahead of competitors like Bing, Yahoo, Yandex, and Baidu. 
        <span className="text-slate-900 font-bold ml-1">Zammy Zaif</span> has spent 20+ years mastering Google’s evolving algorithms through strict adherence to Google’s SEO guidelines,   
          manual strategies, and real-time research without relying on plugins, third-party tools, or automation.
        
      
        Zammy’s expertise extends across <span className="text-slate-900  italic">Google’s own ecosystem</span>, using tools like Google Search Results for rank tracking, 
        <span className="font-bold text-slate-800"> Google Keyword Planner</span> and <span className="font-bold text-slate-800">Google Trends</span> for research, and 
        <span className="font-bold text-slate-800"> Google Search Console, Analytics, and Tag Manager</span> for performance monitoring and tracking. This focused approach is why Zammy is recognized not just as an SEO specialist, but as a dedicated <span className="text-orange-600 font-black">Google SEO expert.</span>
    Our Google SEO services focus on securing the #1 position on Google by making businesses easily found at the top of search results by potential customers. We drive maximum visibility, transformative business growth, and increased sales through expert strategies such as primary category keyword optimization, long-tail revenue-focused optimization, nearby optimization, quality content creation, and technical improvements. That’s why Zammy is trusted by small and medium-sized businesses worldwide.
                </p>
    </motion.div>

    {/* 3. Responsive Premium Image Container */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
      className="relative rounded-[3rem] overflow-hidden border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] bg-slate-50"
    >
      <img 
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" 
        alt="Expertise in Google SEO - Zammy Zaif" 
        className="w-full h-auto object-cover block"
      />
      
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
    </motion.div>

    {/* 4. Secondary Call to Action (Optional for UX) */}
    <div className="pt-6 text-center">
      <motion.div
        whileHover={{ y: -5 }}
        className="inline-flex items-center gap-2 px-6 py-3  bg-slate-50 rounded-full border border-slate-100"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <h6 className="h6 font-bold text-center uppercase  tracking-widest text-slate-700">
          Manual Algorithm Alignment Active
        </h6>
      </motion.div>
    </div>

  </div>
</section>

{/* --- SECTION: OUR GOOGLE RANKING STRATEGY --- */}
<section id="ranking-strategy" className="py-6 bg-white overflow-hidden">
  <div className="max-w-4xl mx-auto px-6 space-y-10">
    
    {/* 1. Strategy Overview: Flex Layout */}
    
        <div className="space-y-4 text-center">
           <h5 className="h5 text-center font-bold text-orange-500 uppercase tracking-[0.4em] ">
             Methodical Excellence
           </h5>
           <h3 className="h3 tracking-tighter text-slate-900 leading-[0.9]">
             Our Google 
             <span className="text-orange-500"> Ranking Strategy</span>
           </h3>
           
                  </div>
                  <div className="flex flex-col lg:flex-row gap-12 items-center">
      <div className="flex-1 space-y-6">
        
        <p className="p text-slate-600 leading-relaxed font-medium">
          A successful Google ranking strategy centers around creating high-quality, user-focused content that aligns with Google’s algorithm. <span className="text-slate-900 font-bold">Zammy Zaif</span>, an expert in Google ranking, emphasizes the importance of comprehensive keyword research to target both primary and long-tail keywords that match user intent.
        </p>
      </div>

      {/* Responsive Illustration */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-1 w-full"
      >
        <div className="rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl bg-white p-2">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" 
            alt="Google Strategy Diagram" 
            className="w-full h-auto rounded-[2rem] object-contain"
          />
        </div>
      </motion.div>
    </div>

    {/* 2. Four Pillars: Modern Feature List */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          title: "Strictly Prohibited AI Content",
          desc: "Instead of relying on AI content, Zammy focuses on crafting original, well-researched content tailored to what clients offer.",
          tag: "Quality First"
        },
        {
          title: "One H1 Per Page",
          desc: "On-page SEO, including meta titles, descriptions, headers, and internal linking, is essential for optimization. Correct H1 usage avoids black-hat tactics.",
          tag: "On-Page SEO"
        },
        {
          title: "Technical Optimization",
          desc: "Fast page load speed, mobile optimization, HTTPS security, and clear site structure contribute to improved rankings.",
          tag: "Core Vitals"
        },
        {
          title: "No 3rd Party Tools & Plugins",
          desc: "Manual SEO implementation on Coding. Analyzing and monitoring search results directly ensures maximum control over algorithm alignment.",
          tag: "Manual Code"
                  },
        {
          title: "No 3rd Party Tools & Plugins",
          desc: "Manual SEO implementation on Coding. Analyzing and monitoring search results directly ensures maximum control over algorithm alignment.",
          tag: "Manual Code"
                  },
        {
          title: "No 3rd Party Tools & Plugins",
          desc: "Manual SEO implementation on Coding. Analyzing and monitoring search results directly ensures maximum control over algorithm alignment.",
          tag: "Manual Code"
        }
      
      ].map((pillar, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 , backgroundColor: "#ff7332"}}
          className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-500 relative overflow-hidden"
        >
          {/* Subtle Accent Background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[5rem] -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 space-y-4">
            <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-[12px] font-bold  uppercase tracking-widest">
              {pillar.tag}
            </span>
            <h4 className="h4  text-slate-900 uppercase  tracking-tight">
              {pillar.title}
            </h4>
            <p className="p text-slate-900 ">
              {pillar.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* 3. Strategy Footer Highlight */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="p-10 rounded-[3rem] bg-orange-500 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="relative z-10 text-center md:text-left">
        <h3 className="h3  uppercase tracking-tighter">Ready to dominate?</h3>
        <p className="p text-slate-900  mt-1">Experience the power of manual, tool-free Google SEO.</p>
      </div>
      <button className="relative text-orange-600 z-10 px-8 py-4 bg-white hover:bg-slate-900   rounded-2xl h5 font-black uppercase tracking-widest transition-all shadow-lg active:scale-95">
        Audit Strategy
      </button>
    </motion.div>

  </div>
</section>        

<section id="case-studies" className="py-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* --- 1. CENTERED HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h5 className="h5 text-orange-500 uppercase font-bold tracking-[0.4em] ">
            Our Client&apos;s Sales Performance
          </h5>
          <h3 className="h3  tracking-tighter text-slate-900 leading-[0.9]">
            SEO Growth <span className="text-orange-500">Case Studies</span>
          </h3>
          
          <p className="p text-slate-700 max-w-xl mx-auto pt-4 font-medium">
            Creating and delivering useful and relevant content has always been the foundation of our success stories.
          </p>
        </motion.div>

        {/* --- 2. PREMIUM CAROUSEL --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden bg-slate-50"
          >
            {caseStudies.map((study, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img 
                    src={study.src} 
                    alt={study.alt}
                    className="w-full h-full object-cover select-none"
                  />
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2.5rem]" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Decorative Floating Element */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* --- UPDATED CALL TO ACTION BUTTON --- */}
        <div className="mt-20 text-center">
          <motion.button
            onClick={() => setIsModalOpen(true)} // Opens the modal
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-4 bg-orange-500 hover:bg-white hover:text-orange-500 text-white px-10 py-6 rounded-2xl transition-all duration-500 shadow-xl"
          >
            <span className=" h6 font-bold uppercase tracking-[0.25em]">
              Want to be our Next Success Case Study?
            </span>
          </motion.button>
        </div>

        {/* --- PREMIUM MODAL OVERLAY --- */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
              />

              {/* Modal Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
              >
                {/* Left Side: Brand Accent */}
                <div className="hidden md:flex w-1/3 bg-orange-500 p-10 flex-col justify-between text-white">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <TrendingUp size={24} />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">Let's Build Your Success</h3>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Manual SEO Strategy • 100% ROI Focused</p>
                </div>

                {/* Right Side: The Form */}
                <div className="flex-1 p-8 md:p-12 relative">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-6 right-6 p-2 text-slate-400 hover:text-orange-500 transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <div className="mb-8">
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">Case Study Application</h4>
                    <p className="text-sm text-slate-500 mt-1">Fill in the details to start your journey to #1.</p>
                  </div>

                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        
                        <input type="text" placeholder="Full Name" required className="form-input-premium" />
                      </div>
                      <div className="relative">
                        <input type="email" placeholder="Email Address" required className="form-input-premium" />
                      </div>
                    </div>
                    
                    <div className="relative">
                      
                      <input type="url" placeholder="Website URL" required className="form-input-premium" />
                    </div>

                    <div className="relative">
                     
                      <input type="tel" placeholder="Phone Number" required className="form-input-premium" />
                    </div>

                    <textarea 
                      placeholder="Briefly describe your growth goals..." 
                      rows={3}
                      className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none transition-all text-sm font-medium resize-none"
                    ></textarea>

                    <button 
                      type="submit"
                      className="w-full py-5 bg-orange-500 hover:bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-3 group"
                    >
                      Submit Application <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>

      <style jsx>{`
        .form-input-premium {
          @apply w-full pl-12 pr-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none transition-all text-sm font-medium;
        }
      `}</style>
    </section>


 {/* --- SECTION: CLIENT'S REVIEWS --- */}
<section id="testimonials" className="py-16 bg-slate-50 overflow-hidden">
  <div className="max-w-3xl mx-auto px-6">
    
    {/* Header Area */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center space-y-4 mb-16"
    >
      <h5 className="h5  text-orange-500 uppercase tracking-[0.4em] font-bold">
        Successful Businesses Testimonials
      </h5>
      <h3 className="h3  tracking-tighter text-slate-900 leading-[0.9]">
        Client&apos;s <span className="text-orange-500"> Reviews</span>
      </h3>
   
    </motion.div>

    {/* Premium Carousel Container */}
    <div className="relative px-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="pb-20"
      >
        {/* Review Slide 1 (Based on Image) */}
        {[...Array(8)].map((_, i) => (
          <SwiperSlide key={i}>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden text-center max-w-4xl mx-auto"
            >
              {/* Massive Decorative Quote Icon */}
              <Quote className="absolute top-10 right-10 text-orange-500/10" size={120} />
              
              <div className="relative z-10 space-y-8">
                <p className="p  text-slate-900 leading-relaxed  italic">
                  &quot;Working with <span className="text-slate-900 font-bold">Zammy Zaif</span> has been a game-changer for our business. His expertise as a Google SEO Consultant has helped us achieve first-rank results for multiple keywords, including those crucial to our towing service. Zammy’s strategic approach and dedication have significantly boosted our visibility and customer inquiries.&quot;
                </p>

                <div className="flex flex-col items-center gap-4">
                  {/* Client Logo/Avatar Placeholder */}
                  <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center border-4 border-orange-50 p-2 overflow-hidden">
                     <span className="text-white font-black text-xs text-center leading-none">ZAIN TOWING</span>
                  </div>
                  
                  <div>
                    <h4 className="h4 font-black text-slate-900 uppercase tracking-tighter">Zain Towing Service LLC</h4>
                    <p className="p text-xs font-black text-orange-500 uppercase tracking-widest mt-1">Valuable Client</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* CTA: Our Google Reviews Button */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-center mt-10"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className=" bg-slate-900 text-white hover:bg-white hover:text-orange-500 px-10 py-5 rounded-2xl transition-all duration-500 shadow-xl group"
      >
        <span className="p font-bold uppercase tracking-[0.25em] flex items-center gap-3">
           Our Google Reviews 
           <div className="flex gap-0.5">
             {[...Array(5)].map((_, i) => (
               <span key={i} className="text-orange-400 group-hover:text-orange-500">★</span>
             ))}
           </div>
        </span>
      </motion.button>
    </motion.div>

  </div>

  {/* Custom CSS for Pagination Bullets */}
  <style jsx global>{`
    .swiper-pagination-bullet {
      background: #cbd5e1 !important;
      opacity: 1 !important;
      width: 10px !important;
      height: 10px !important;
      transition: all 0.3s ease;
    }
    .swiper-pagination-bullet-active {
      background: #f97316 !important;
     
      width: 30px !important;
      border-radius: 5px !important;
    }
  `}</style>
</section>         

          
<section className="py-14 bg-white relative overflow-hidden">
      {/* Premium Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Modern Header */}
        <div className="text-center mb-20">
          <motion.h5 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-600 font-bold uppercase tracking-[0.3em] h5"
          >
           As an expert Google SEO agency, we offer the following essencials
          </motion.h5>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="  text-slate-900 mt-4 h2 tracking-tighter"
          >
            Our Google <span className="text-orange-500"> SEO Services</span>
          </motion.h2>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            // RENDER LOGIC: Assign to a Capitalized variable
            const Icon = service.icon; 

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="h-full bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_50px_-15px_rgba(249,115,22,0.2)] group-hover:border-orange-200 transition-all duration-500">
                  
                  {/* Icon Design */}
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-500">
                    <Icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-500" />
                  </div>

                  {/* Text Content */}
                  <h3 className="h3 font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-900  p">
                    {service.desc}
                  </p>

                  {/* Visual Decoration */}
                  <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                    <Icon size={80} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
          
{/* --- SECTION: LOCAL SEO FOR GOOGLE MAPS --- */}
<section id="local-seo-maps" className="py-6 bg-white overflow-hidden">
  <div className="max-w-5xl mx-auto px-6 space-y-16">
    
    {/* 1. Centered Premium Header */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center space-y-4"
    >
      <h5 className="h5 text-orange-500 uppercase tracking-[0.4em] font-bold">
        Google Maps Dominance
      </h5>
      <h3 className="h3  tracking-tighter text-slate-900 leading-[0.9]">
        Local SEO for 
        <span className="text-orange-500"> Google Maps Rankings</span>
      </h3>
      
    </motion.div>

    {/* 2. Strategy Description */}
    <div className="max-w-4xl mx-auto">
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p text-slate-600 leading-relaxed font-medium "
      >
        Zammy and our team specialize in Local SEO, helping businesses dominate Google Maps rankings. Our signature 
        45-Day First Rank SEO Challenge
        has successfully delivered 800+ projects to Google’s top position for 15 targeted keywords each.
      </motion.p>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="p text-orange-500 text-center mt-6 font-bold leading-relaxed italic"
      >
        "We focus on sales results, not just rankings. Get ready to turn searches into real-world customers with Zammy and Team."
      </motion.p>
    </div>

    {/* 3. Feature Grid: 2-Column Premium List */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-10">
      {[
        "Google Maps First Spot ranking in just 45 working days",
        "Target 15 powerful local keywords for maximum impact",
        "Boost inbound calls from customers searching locally",
        "Increase online bookings and appointment requests",
        "Drive real foot traffic with accurate map directions",
        "Improve website clicks through local search visibility",
        "Build stronger trust and authority in your local area",
        "Get measurable results that directly grow your business"
      ].map((feature, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="flex items-start gap-4 p-4 rounded-2xl hover:bg-orange-400 transition-colors group"
        >
          <div className="mt-1 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-orange-200">
            <Check size={14} className="text-white stroke-[4px]" />
          </div>
          <p className="p text-sm md:text-base font-bold text-slate-700 leading-snug">
            {feature}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
          </section>
          
{/* --- SECTION: HOW TO CHOOSE A GOOGLE SEO EXPERT --- */}
<section id="choose-expert-steps" className="py-6 bg-white overflow-hidden">
  <div className="max-w-5xl mx-auto px-6">
    
    {/* 1. Header Area */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center space-y-4 mb-20"
    >
      <h5 className="h5 text-orange-500 uppercase tracking-[0.4em] font-bold">
        Hire the Right Ranking Optimizer
      </h5>
      <h3 className="h3  tracking-tighter text-slate-900 leading-[0.9]">
        How to Choose a 
        <span className="text-orange-500"> Google SEO Expert</span>
      </h3>
      
    </motion.div>

    {/* 2. Roadmap Steps Layout */}
    <div className="relative">
      {/* Central Animated Line (Visible on Desktop) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-900 hidden lg:block" />

      <div className="space-y-12 lg:space-y-0">
        {[
          {
            step: "Step 1",
            title: "Search on Google",
            desc: "Find them on Google. If they can’t rank their own site high, how can they help you rank yours? Check their position.",
            alignment: "left"
          },
          {
            step: "Step 2",
            title: "Find Case Studies",
            desc: "Review their case studies. If their ranked keywords aren’t in the top 3, they likely won’t get your keywords to the top either.",
            alignment: "right"
          },
          {
            step: "Step 3",
            title: "Ethical Expertise",
            desc: "Check their SEO experience. Ensure they follow Google guidelines and avoid risky grey or black-hat SEO methods.",
            alignment: "left"
          },
          {
            step: "Step 4",
            title: "Google Reviews",
            desc: "Look at their Google reviews. Authentic, positive feedback from real clients proves they deliver trusted and solid SEO results.",
            alignment: "right"
          }
        ].map((item, idx) => (
          <div key={idx} className={`flex flex-col lg:flex-row items-center justify-between w-full lg:mb-20 ${item.alignment === 'right' ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Content Card */}
            <motion.div 
              initial={{ opacity: 0, x: item.alignment === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="w-full lg:w-[45%] group"
            >
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-900 shadow-sm group-hover:bg-orange-200 group-hover:shadow-2xl group-hover:border-orange-600 transition-all duration-500 relative overflow-hidden">
                {/* Decorative Step Number (Background) */}
                <span className="absolute -right-4 -bottom-4 text-8xl font-black text-slate-50 group-hover:text-orange-50 transition-colors pointer-events-none">
                  0{idx + 1}
                </span>

                <div className="relative z-10 space-y-4">
                  <div className="inline-block px-5 py-1.5 rounded-full bg-orange-500 text-white text-[18px] font-bold uppercase tracking-widest shadow-lg shadow-orange-200">
                    {item.step}
                  </div>
                  <h3 className="h3  text-slate-900 uppercase tracking-tighter group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="p text-slate-900 font-medium ">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Central Node Dot */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-slate-100 rounded-full items-center justify-center z-20 group-hover:border-orange-500 transition-all">
               <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse" />
            </div>

            {/* Spacer for Desktop */}
            <div className="hidden lg:block lg:w-[45%]" />
          </div>
        ))}
      </div>
    </div>

    {/* 3. Final Call to Action */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="mt-20 p-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-[3rem] shadow-2xl shadow-orange-200"
    >
      <div className="bg-white rounded-[2.8rem] p-10 text-center flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-left">
          <h3 className="h3 font-bold text-slate-900 ">Ready to Hire an Expert?</h3>
          <p className="p  text-slate-900">Make the right choice for your business growth today.</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-orange-600 text-white rounded-2xl p font-bold uppercase tracking-widest shadow-xl hover:bg-white hover:text-orange-600 transition-all"
        >
          Book Your Free Audit
        </motion.button>
      </div>
    </motion.div>

  </div>
</section>

<section id="algorithm-factors" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h5 className="text-orange-500  uppercase tracking-[0.2em] h5">
            Decoding the Search Engine
          </h5>
          <h3 className=" h3 tracking-tighter text-slate-900 leading-[0.9] ">
            Factors of <span className="text-orange-500">Google Rank Algorithm</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: DYNAMIC CONTENT */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h4 className="  text-slate-900 tracking-tight h4 italic text-orange-600">
                    {algoData[activeTab].title}
                  </h4>
                  <div className="w-20 h-1.5 bg-slate-900 rounded-full" />
                </div>

                <p className="text-slate-600 p leading-relaxed font-medium">
                  {algoData[activeTab].desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {algoData[activeTab].highlights.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-orange-20 text-orange-500 rounded-full text-xs font-bold border border-orange-100 uppercase">
                      # {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE CARDS */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
            {[
              { label: "AI Models", val: "RankBrain / BERT", icon: <Cpu size={24}/> },
              { label: "Core Signals", val: "E-E-A-T Compliance", icon: <ShieldCheck size={24}/> },
              { label: "Technical", val: "MUM & Indexability", icon: <Code2 size={24}/> },
              { label: "User Experience", val: "Core Web Vitals", icon: <Zap size={24}/> }
            ].map((item) => {
              const isActive = activeTab === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveTab(item.label as TabKey)}
                  className={`w-full flex items-center justify-between p-6 rounded-[2rem] transition-all duration-500 group text-left border ${
                    isActive 
                    ? 'bg-orange-500 border-orange-400 shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)]' 
                    : 'bg-white border-slate-100 hover:border-orange-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                      isActive ? 'bg-white text-orange-600' : 'bg-slate-900 text-orange-500'
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className={`text-[14px]  uppercase  font-bold tracking-widest leading-none mb-2 ${
                        isActive ? 'text-orange-100' : 'text-slate-700'
                      }`}>
                        {item.label}
                      </p>
                      <p className={`font-bold p leading-none ${
                        isActive ? 'text-white' : 'text-slate-900'
                      }`}>
                        {item.val}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`transition-transform duration-500 ${
                    isActive ? 'text-white translate-x-2' : 'text-slate-200 group-hover:text-orange-300'
                  }`} size={20} />
                </button>
              );
            })}
          </div>

        </div>

        {/* Quote Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-slate-100 text-center"
        >
          <p className="text-orange-500 font-bold italic max-w-3xl mx-auto p leading-relaxed">
            &ldquo;Zammy&apos;s ability to decode algorithmic updates and implement high-impact optimizations 
            makes him a standout Google Ranking expert.&rdquo;
          </p>
        </motion.div>

      </div>
    </section>

{/* SECTION 1: SECTORS WE SERVE */}
      <section id="sectors-we-serve" className="py-14 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <motion.h5 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-orange-500  tracking-[0.2em] h5"
              >
                Industry Specialization
              </motion.h5>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="h3 text-slate-900 leading-tight tracking-tighter"
              >
                Sectors We Serve with <br />
                <span className="text-orange-500">Google SEO Expertise</span>
              </motion.h3>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-slate-700 p max-w-md font-medium"
            >
              Expert Google Ranking Services Across 200+ Business Categories, 
              delivering hyper-targeted results for niche markets.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-48 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] hover:border-orange-200"
              >
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="p-4 rounded-2xl bg-white text-slate-800 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-sm">
                    <sector.icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors uppercase tracking-tight text-center px-4">
                    {sector.name}
                  </span>
                </div>
                {/* Decorative Background Text */}
                <span className="absolute -bottom-2 text-[6rem] font-black text-slate-200/20 pointer-events-none group-hover:text-orange-100/30 transition-colors">
                  {idx + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: IMPACTING SEARCH ENGINE */}
      <section id="impacting-search-engine" className="py-24 bg-slate-50 relative">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-orange-500/5 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <motion.h3 className="h3 text-slate-900  tracking-tighter leading-[1.1]">
                  Google Expert <br />
                  <span className="text-orange-500 italic">Impacting</span> <br />
                  Search Engines
                </motion.h3>
                <div className="w-20 h-2 bg-orange-500 mt-6 rounded-full" />
              </div>
              
              <p className="text-slate-600  p">
                To start with, he has a basic understanding of each SEO project he commits. 
                A unique and customized SEO strategy is planned and implemented for each project 
                as he knows it differs from business to business.
              </p>

              <div className="flex gap-4">
                <button className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-white hover:text-orange-500 transition-all shadow-lg shadow-slate-200">
                  Discuss Project
                </button>
              </div>
            </motion.div>

            <div className="space-y-6">
              {[
                { 
                  num: "01", 
                  title: "Business Analysis", 
                  desc: "Studying targeted audience, potential customers and their business culture.",
                  icon: <Target className="text-orange-500" /> 
                },
                { 
                  num: "02", 
                  title: "Strategic Planning", 
                  desc: "Customizing SEO techniques based on competitor footprint and niche demands.",
                  icon: <Lightbulb className="text-orange-500" /> 
                },
                { 
                  num: "03", 
                  title: "Superior Execution", 
                  desc: "Implementing high-impact optimizations for long-term algorithmic dominance.",
                  icon: <TrendingUp className="text-orange-500" /> 
                },
              ].map((step, i) => (
             <motion.div
  key={i}
  initial={{ opacity: 0, x: 20 }} // Reduced x offset for mobile stability
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ delay: i * 0.1 }}
  viewport={{ once: true }}
  className="group flex flex-col sm:flex-row items-start gap-4 md:gap-6 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white border border-slate-100 hover:border-orange-200 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-orange-500/5"
>
  {/* Number Icon - Adjusted size for mobile */}
  <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-orange-50 flex items-center justify-center font-black text-orange-600 text-base md:text-lg group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
    {step.num}
  </div>

  <div className="space-y-2">
    <h4 className="h4 text-slate-900  tracking-tight flex items-center flex-wrap gap-2">
      {step.title} 
      <span className="inline-block group-hover:scale-110 transition-transform duration-300">
        {step.icon}
      </span>
    </h4>
    <p className="text-slate-700 p ">
      {step.desc}
    </p>
  </div>
  </motion.div>

              ))}
            </div>
          </div>
        </div>
      </section>

<section id="faq-premium" className="py-24 bg-white relative overflow-hidden">
      {/* Background Creative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-[100px] -z-10 -translate-x-1/2" />

      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header with Animation */}
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 border border-orange-100 mb-2"
          >
            <Sparkles size={16} className="animate-pulse" />
            <h5 className="h5 font-bold uppercase ">Common Inquiries</h5>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="h3 text-slate-900  tracking-tighter"
          >
            Google's <span className="text-orange-500"> Choice</span>
          </motion.h3>
         
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = expanded === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-[2rem] transition-all duration-500 border ${
                  isOpen 
                    ? 'bg-white border-orange-200 shadow-[0_20px_40px_rgba(249,115,22,0.08)]' 
                    : 'bg-slate-50/50 border-slate-100 hover:border-orange-100'
                }`}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : index)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left transition-all group"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isOpen ? 'bg-orange-500 text-white rotate-12' : 'bg-white text-slate-400 group-hover:text-orange-500 shadow-sm'
                    }`}>
                      <HelpCircle size={24} strokeWidth={1.5} />
                    </div>
                    <span className={`p font-bold transition-colors duration-300 ${
                      isOpen ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'
                    }`}>
                      {item.question}
                    </span>
                  </div>

                  <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-orange-500' : 'text-slate-300'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-8 md:px-24 md:pb-10">
                        <div className="h-px w-full bg-slate-100 mb-6" />
                        <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">
                          {item.answer}
                        </p>
                     
                        
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 rounded-[2.5rem] bg-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-orange-500/10 pointer-events-none" />
          <h4 className="text-slate-900 h4 font-bold mb-4 relative z-10">Still have questions about your ranking?</h4>
          <button className="bg-orange-500 font-bold h5 text-white px-8 py-4 rounded-xl  uppercase tracking-widest hover:bg-white hover:text-orange-500 transition-all shadow-xl relative z-10">
            Contact Expert Now
          </button>
        </motion.div>

      </div>
    </section>

 {/* 15. COMPETITOR TAKEOVER STRATEGY */}
          <section id="takeover" className="bg-white text-slate-900 p-16 rounded-[4rem] shadow-2xl">
            <h4 className="h4 font-black mb-10 uppercase text-orange-500">Competitor Disruption</h4>
            <div className="grid md:grid-cols-2 gap-12">
               <div>
                 <h4 className="h4 font-black mb-4 uppercase text-slate-500">Their SEO</h4>
                 <p className="p">Keyword stuffing, slow loading, and generic AI-spun content that gets penalized.</p>
               </div>
               <div>
                 <h4 className="h4 font-black mb-4 uppercase text-orange-500">Our Expert SEO</h4>
                 <p className="p font-bold">Semantic precision, ultra-performance speed, and authoritative human-led strategy.</p>
               </div>
            </div>
          </section>
         

          {/* 18. PREMIUM CALL-TO-ACTION */}
          <section id="cta-bottom" className="bg-white py-32 rounded-[5rem] text-center text-slate-900">
            <h4 className="h4  mb-12  leading-none tracking-tighter">Secure Position #1 Today.</h4>
            <button className="bg-orange-500 px-16 py-8 rounded-full p text-white font-bold  uppercase tracking-widest hover:scale-105  hover:text-orange-500 hover:bg-white transition-all shadow-2xl">
              Start Your Sprint
            </button>
          </section>

        </main>

        {/* SIDEBAR (Sticky on Right) */}
         <aside className="hidden lg:block w-[20%] order-1 lg:order-2">
      <div className="sticky top-24 space-y-8">
        
        {/* 1. THE AUDIT MAGNET (Premium Orange Gradient) */}
        <motion.section 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative overflow-hidden rounded-[3rem]  bg-orange-500 p-8 text-white shadow-[0_30px_60px_-15px_rgba(249,115,22,0.3)] group"
        >
          {/* Decorative Background Icon */}
          <Search className="absolute -right-4 -top-4 h-32 w-32 opacity-10 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110" />
          
          <div className="relative z-10 space-y-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 backdrop-blur-md">
              <Search className="h-5 w-5 text-white" />
            </div>
            
            <div className="space-y-2">
              <h4 className="h4  tracking-tighter leading-relaxed">
                Free Website <br /> Audit
              </h4>
              <h5 className="h5 font-bold text-orange-100 uppercase tracking-[0.02em]">
                Identify ranking gaps in 60s
              </h5>
            </div>

            <button className="flex w-full items-center justify-between rounded-2xl text-orange-500 bg-white px-6 py-4 text-xs font-black uppercase tracking-widest transition-all hover:bg-slate-900 hover:text-orange-600">
              Audit Now <ArrowRight size={16} />
            </button>
          </div>
        </motion.section>

        {/* 2. EXPERT STATUS WIDGET (Light Theme Premium) */}
        <section className="rounded-[3rem] border border-slate-100 bg-white p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)]">
          <h4 className="mb-6 font-bold uppercase tracking-[0.2em] text-slate-700">
            Professional Network
          </h4>
          
          <div className="space-y-3">
            {[
              { icon: <Instagram size={18} />, name: 'Instagram', color: 'hover:text-pink-600', count: '12k+' },
              { icon: <Linkedin size={18} />, name: 'LinkedIn', color: 'hover:text-blue-600', count: '8k+' },
              { icon: <Twitter size={18} />, name: 'Twitter', color: 'hover:text-sky-500', count: '5k+' },
            ].map((social) => (
              <a 
                key={social.name}
                href="#" 
                className={`group flex items-center justify-between rounded-2xl border border-slate-50 bg-slate-50/50 p-4 transition-all duration-300 hover:border-orange-200 hover:bg-white ${social.color}`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-slate-700 transition-colors group-hover:text-inherit">
                    {social.icon}
                  </div>
                  <span className="h6 font-bold text-slate-900">{social.name}</span>
                </div>
                <span className="text-[16px]  text-slate-700 font-bold group-hover:text-orange-500">{social.count}</span>
              </a>
            ))}
          </div>
        </section>

        {/* 3. QUICK STATS / TRUST BOX */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-[3rem]  p-8 text-slate-900 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-bl-full" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-2 text-orange-500">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
            </div>
            
            <div className="space-y-1">
              
              <p className=" font-bold uppercase tracking-[0.1em] text-slate-700">Rank your Business</p>
            </div>

            <div className="space-y-1">
              <p className="text-xl font-black tracking-tighter text-orange-500">45-Day</p>
              <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-slate-700">SEO Challenge Success</p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <p className="text-[16px] font-medium leading-relaxed text-slate-700 italic">
                "Google-Certified specialist utilizing pure white-hat techniques."
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4. FLOATING CONTACT BUTTON (Optional Mini-Form) */}
        <button className="group relative w-full h-16 overflow-hidden rounded-2xl bg-white border-2 border-slate-900 p-[2px]">
          <div className="absolute inset-0 w-0 bg-orange-500 transition-all duration-500 ease-out group-hover:w-full" />
          <span className="relative z-10 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 transition-colors duration-500 group-hover:text-white">
            Get In Touch <ArrowRight size={14} />
          </span>
        </button>

      </div>
    </aside>
      </div>
    </div>
  );
}