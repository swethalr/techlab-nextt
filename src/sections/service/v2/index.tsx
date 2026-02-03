'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import Image from 'next/image';

// --- IMPORT DATA ---
import { servicesData } from '@/data/homepage-services'; 

// Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(#ff6a00 1px, transparent 1px), linear-gradient(90deg, #3cb878 1px, transparent 1px)`,
            backgroundSize: '45px 45px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-12 max-w-[600px] text-center">
          <div className="mb-3 mt-8 flex items-center justify-center gap-2">
            <span className="mt-4 h-[2px] w-8 bg-[#3cb878]" />
            <h5 className="h5 mt-4 uppercase tracking-[0.4em] text-[#3cb878]">
              Our Services
            </h5>
            <span className="mt-4 h-[2px] w-8 bg-[#3cb878]" />
          </div>
          <h3 className="h3 font-black leading-tight text-[#1A112E]">
            Services We’re{' '}
            <span className="italic text-[#3cb878]">Providing</span>
          </h3>
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
            {servicesData.map((service, index) => (
              <SwiperSlide key={index} className="h-auto py-2">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-b-[40px] rounded-t-[160px]  bg-gradient-to-b from-[#D4FFE9] to-[#CFFFE6]  shadow-xl transition-all duration-700">
                  <div className="relative z-10 h-[220px] w-full">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 right-8 z-20 flex h-16 w-16 translate-y-1/2 items-center justify-center rounded-full border-[5px] border-[#cfffe6] bg-[#3cb878] text-2xl text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:border-[#3cb878]">
                      {service.icon}
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-grow flex-col p-8 pt-12">
                    <h4 className="h4 mb-3 font-bold text-black transition-colors duration-500">
                      {service.title}
                    </h4>
                    <p className="p mb-6 leading-relaxed text-slate-800 transition-colors duration-500 group-hover:text-white/90">
                      {service.desc}
                    </p>

                    <ul className="mb-8 space-y-3">
                      {service.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="p flex items-center gap-3 font-semibold text-[#3cb878] group-hover:text-black"
                        >
                          <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded bg-[#3cb878] text-[8px]  text-white transition-colors duration-500 group-hover:bg-white group-hover:text-[#3cb878]">
                            <FaArrowRight />
                          </div>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="h6  uppercase tracking-[0.2em] text-black">
                        Discover More
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-black transition-all duration-500 group-hover:translate-x-2 group-hover:bg-white group-hover:text-[#3cb878]">
                        <FaArrowRight size={12} />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-[-10%] right-[-10%] z-0 h-0 w-0 rounded-tl-[1000px] bg-[#3cb878] opacity-0 transition-all duration-1000 ease-in-out group-hover:h-[150%] group-hover:w-[150%] group-hover:opacity-100" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-prev-onicx absolute left-[-15px] top-[45%] z-30 hidden h-12 w-12 items-center justify-center rounded-full bg-white text-[#3cb878] shadow-xl transition-all duration-300 hover:bg-[#3cb878] hover:text-white md:flex">
            <FaChevronLeft size={18} />
          </button>

          <button className="swiper-next-onicx absolute right-[-15px] top-[45%] z-30 hidden h-12 w-12 items-center justify-center rounded-full bg-white text-[#3cb878] shadow-xl transition-all duration-300 hover:bg-[#3cb878] hover:text-white md:flex">
            <FaChevronRight size={18} />
          </button>
        </div>

        <div className="onicx-pagination mt-4 flex justify-center gap-3" />
      </div>

      <style jsx global>{`
        .onicx-pagination .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #3cb878 !important;
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