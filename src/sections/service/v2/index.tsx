'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// --- FIXED IMPORTS FOR NEWER SWIPER VERSIONS ---
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 
// In Swiper 9+, modules must come from 'swiper/modules', not 'swiper'
// -----------------------------------------------

import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaHandshake,
  FaBriefcase,
  FaFaceSmile,
} from 'react-icons/fa6';

import { MdMonitor, MdCampaign, MdSearch } from 'react-icons/md';
import Image from 'next/image';

// Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const stats = [
  { label: 'Customers', value: '170+', icon: <FaUsers /> },
  { label: 'Years of Service', value: '12%', icon: <FaHandshake /> },
  { label: 'Results', value: '2k+', icon: <FaBriefcase /> },
  { label: 'Satisfied Clients', value: '99%', icon: <FaFaceSmile /> },
];

const services = [
  {
    title: 'Web Development',
    desc: 'Custom coded solutions tailored for high-performance and business growth.',
    icon: <MdMonitor />,
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    features: [
      'Fully Responsive',
      'Creativity in Designs',
      'SEO Optimized Content',
    ],
  },
  {
    title: 'SEO Strategy',
    desc: 'Dominate search results with data-driven organic SEO and growth hacks.',
    icon: <MdSearch />,
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    features: ['Keyword Analysis', 'On-Page SEO', 'Backlink Strategy'],
  },
  {
    title: 'Digital Marketing',
    desc: 'Reach your target audience with high-conversion marketing campaigns.',
    icon: <MdCampaign />,
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
    features: ['Paid Media', 'Social Growth', 'Lead Generation'],
  },
];

export default function OnicxServiceSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="font-sans relative overflow-hidden bg-white py-16 md:py-20">
      {/* 1. THE MAGIC BACKGROUND (Grid & Aura) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#ff6a00]/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(#ff6a00 1px, transparent 1px), linear-gradient(90deg, #ff6a00 1px, transparent 1px)`,
            backgroundSize: '45px 45px',
          }}
        />
      </div>

      {/* 1. TOP STATS BAR - FIXED POSITIONING */}
      <div className="relative z-40 mx-auto max-w-[1240px] px-4">
        <div
          className="-mb-8 flex -translate-y-8 flex-wrap items-center justify-between gap-8 rounded-[30px] bg-[#FF6A00] p-8 shadow-2xl md:-mb-10 
    md:-translate-y-1/2 md:p-12"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex min-w-[150px] flex-1 items-center justify-center gap-4 border-r border-white/20 text-white last:border-0 md:justify-start"
            >
              <div className="text-2xl opacity-80">{stat.icon}</div>
              <div>
                <div className="text-2xl font-bold leading-none">{stat.value}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider opacity-90 md:text-xs">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-12 max-w-[600px] text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-[2px] w-8 bg-[#FF6A00]" />
            <span className="text-xs uppercase tracking-[0.4em] text-[#FF6A00]">
              Our Services
            </span>
            <span className="h-[2px] w-8 bg-[#FF6A00]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-[#1A112E]">
            Services We’re{' '}
            <span className="italic text-[#FF6A00]">Providing</span>
          </h2>
        </div>

        <div className="group/slider relative px-0 md:px-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-next-onicx',
              prevEl: '.swiper-prev-onicx',
            }}
            pagination={{ clickable: true, el: '.onicx-pagination' }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="relative !pb-16"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-auto py-2">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-b-[40px] rounded-t-[160px] bg-[#1A112E] shadow-xl transition-all duration-700">
                  <div className="relative z-10 h-[220px] w-full">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 right-8 z-20 flex h-16 w-16 translate-y-1/2 items-center justify-center rounded-full border-[5px] border-[#1A112E] bg-[#FF6A00] text-2xl text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:border-[#FF6A00]">
                      {service.icon}
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-grow flex-col p-8 pt-12">
                    <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-slate-400 transition-colors duration-500 group-hover:text-white/90">
                      {service.desc}
                    </p>

                    <ul className="mb-8 space-y-3">
                      {service.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-xs font-semibold text-white"
                        >
                          <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded bg-[#FF6A00] text-[8px] transition-colors duration-500 group-hover:bg-white group-hover:text-[#FF6A00]">
                            <FaArrowRight />
                          </div>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                        Discover More
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-500 group-hover:translate-x-2 group-hover:bg-white group-hover:text-[#FF6A00]">
                        <FaArrowRight size={12} />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-[-10%] right-[-10%] z-0 h-0 w-0 rounded-tl-[1000px] bg-[#FF6A00] opacity-0 transition-all duration-1000 ease-in-out group-hover:h-[150%] group-hover:w-[150%] group-hover:opacity-100" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-prev-onicx absolute left-[-15px] top-[45%] z-30 hidden h-12 w-12 items-center justify-center rounded-full bg-white text-[#1A112E] shadow-xl transition-all duration-300 hover:bg-[#FF6A00] hover:text-white md:flex">
            <FaChevronLeft size={18} />
          </button>

          <button className="swiper-next-onicx absolute right-[-15px] top-[45%] z-30 hidden h-12 w-12 items-center justify-center rounded-full bg-white text-[#1A112E] shadow-xl transition-all duration-300 hover:bg-[#FF6A00] hover:text-white md:flex">
            <FaChevronRight size={18} />
          </button>
        </div>

        <div className="onicx-pagination mt-4 flex justify-center gap-3" />
      </div>

      <style jsx global>{`
        .onicx-pagination .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #ff6a00 !important;
          opacity: 0.2 !important;
          border-radius: 50% !important;
          transition: all 0.4s ease !important;
          display: inline-block !important;
          margin: 0 4px !important;
        }
        .onicx-pagination .swiper-pagination-bullet-active {
          width: 30px !important;
          border-radius: 12px !important;
          opacity: 1 !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
}