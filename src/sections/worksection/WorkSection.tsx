'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Correct Swiper 12 Module Imports
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6';
import Image from 'next/image';

// Swiper 12 Essential Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const results = [
  {
    title: 'Future Management Development',
    category: 'Marketing',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800',
    },
  {
    title: 'E-commerce Optimization',
    category: 'Dev',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
    },
  {
    title: 'E-commerce Optimization',
    category: 'Dev',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
  },
  {
    title: 'Digital Brand Strategy',
    category: 'SEO',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800',
    },
  {
    title: 'E-commerce Optimization',
    category: 'Dev',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
  },
  {
    title: 'Content Growth Analysis',
    category: 'Ads',
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800',
  },
  {
    title: 'E-commerce Optimization',
    category: 'Dev',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
    },
   {
    title: 'Digital Brand Strategy',
    category: 'SEO',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800',
    },
    {
    title: 'Digital Brand Strategy',
    category: 'SEO',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800',
    },
];

export default function WorkSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24">
      {/* 1. THE MAGIC BACKGROUND (Grid & Aura) #1A112E*/}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#ff6a00]/10 blur-[190px]" />
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
              Our Work
            </span>
          </div>
          <h2 className="h2 font-bold leading-tight text-black">
            Our Recent Client{' '}
            <span className="italic text-primary/80">Results</span>
          </h2>
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
            // RESPONSIVE BREAKPOINTS - Same as your original
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
                    className={`group relative h-[350px] overflow-hidden rounded-[30px]  bg-[#251A3D] transition-all duration-700 md:h-[600px] md:rounded-[40px] ${!isActive ? 'scale-90 opacity-100 ' : 'scale-100 opacity-100 shadow-2xl shadow-orange-500/20'}`}
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
                      <span className="mb-3 inline-block rounded-md bg-orange-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold leading-tight text-white md:text-2xl">
                        {item.title}
                      </h3>
                    </div>

                    {/* Arched Orange Button (Top Right) */}
                    <button
                      className={`absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6A00] text-white shadow-lg transition-all duration-500 hover:scale-110 md:h-12 md:w-12 md:rounded-2xl ${isActive ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
                    >
                      <FaArrowUpRightFromSquare size={16} />
                    </button>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows #8b5cf6*/}
          <button className="work-prev absolute left-0 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 bg-orange-600 items-center justify-center rounded-full border border-orange/600 text-white transition-all hover:border-[#FF6A00] hover:bg-white hover:text-orange-600 md:flex md:h-12 md:w-12 lg:-left-4">
            <FaChevronLeft size={16} />
          </button>
          <button className="work-next absolute right-0 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 bg-orange-600 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[#FF6A00] hover:bg-white hover:text-orange-600 md:flex md:h-12 md:w-12 lg:-right-4">
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #ff4800 !important;
          
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