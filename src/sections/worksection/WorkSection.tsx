'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Correct Swiper 12 Module Imports
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper/modules';
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6';
import Image from 'next/image';

// --- DATA IMPORT ---
import { results, workSectionContent } from '@/data/work-section';

// Swiper 12 Essential Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function WorkSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24">
      {/* 1. THE MAGIC BACKGROUND (Grid & Aura) #1A112E*/}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(#ff6a00 1px, transparent 1px), linear-gradient(90deg, #978c9e 1px, transparent 1px)`,
            backgroundSize: '45px 45px',
          }}
        />
      </div>

      {/* Background Texture Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/topography.png')] opacity-10" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center md:mb-16">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="h6 font-semibold uppercase tracking-widest text-primary ">
              {workSectionContent.subtitle}
            </span>
          </div>
          <h3 className="h3 font-bold leading-tight text-black">
            {workSectionContent.titlePart1}{' '}
            <span className="italic text-[#3cb878]/80">{workSectionContent.titleHighlight}</span>
          </h3>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative px-0 md:px-10 lg:px-20">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            // RESPONSIVE BREAKPOINTS
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 10 },
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              1024: { slidesPerView: 2.5, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 40 },
              1440: { slidesPerView: 4.5, spaceBetween: 40 },
            }}
            navigation={{
              nextEl: '.work-next',
              prevEl: '.work-prev',
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
            className="!overflow-visible !pb-14"
          >
            {results.map((item, index) => (
              <SwiperSlide key={index} className="transition-all duration-500">
                {({ isActive }) => (
                  <div
                    className={`group relative h-[350px] overflow-hidden rounded-[30px]  bg-[#3cb878] transition-all duration-700 md:h-[600px] md:rounded-[40px] ${!isActive ? 'scale-90 opacity-100 ' : 'scale-100 opacity-100 shadow-2xl shadow-orange-500/20'}`}
                  >
                    {/* Image */}
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A112E] via-transparent to-transparent opacity-90" />

                    {/* Content */}
                    <div
                      className={`absolute bottom-0 left-0 w-full p-6 transition-all duration-500 md:p-8 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    >
                      <span className="mb-3 inline-block rounded-md bg-[#3cb878] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        {item.category}
                      </span>
                      <h4 className="text-lg font-bold leading-tight text-white md:text-2xl">
                        {item.title}
                      </h4>
                    </div>

                    {/* Arched Orange Button (Top Right) */}
                    <button
                      className={`absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl bg-[#3cb878] text-white shadow-lg transition-all duration-500 hover:scale-110 md:h-12 md:w-12 md:rounded-2xl ${isActive ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
                    >
                      <FaArrowUpRightFromSquare size={16} />
                    </button>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="work-prev border-[#3cb878] absolute left-0 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-[#3cb878] text-white transition-all hover:border-[#FF6A00] hover:bg-white hover:text-orange-600 md:flex md:h-12 md:w-12 lg:-left-4">
            <FaChevronLeft size={16} />
          </button>
          <button className="work-next absolute right-0 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#3cb878] text-white transition-all hover:border-[#FF6A00] hover:bg-white hover:text-orange-600 md:flex md:h-12 md:w-12 lg:-right-4">
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #3cb878 !important;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 20px;
          border-radius: 5px;
          transition: all 0.3s;
        }
      `}</style>
    </section>
  );
}