'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { heroSectionData } from '@/data/hero/v2';
import { WorldGlobe } from '@/src/components/world-globe/WorldGlobe';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { Counter } from '@/src/components/counter';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { ParticleBackground } from '@/src/components/ParticleBackground';


import 'swiper/css';
import 'swiper/css/effect-fade';





export function HeroSection({ className }: { className?: string }) {
  const swiperRef = useRef<SwiperType>();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { customers, statisticsCounterInfo, ctaButton, carouselItems } = heroSectionData;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const bgTextX = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <section
      ref={containerRef}
      className={cn(
        'relative z-1 h-auto min-h-screen overflow-y-hidden overflow-x-hidden bg-white lg:h-[110vh]',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />

<div className="relative top-0 flex min-h-screen w-full flex-col items-center justify-start pt-20 pb-12 overflow-visible lg:sticky lg:justify-center lg:pt-5 lg:pb-0">
        <motion.div
          style={{ x: bgTextX }}
          className="pointer-events-none absolute left-0 top-[25%] z-0 hidden select-none whitespace-nowrap opacity-[0.9] lg:block" 
        >
          <span className="pointer-events-none block select-none text-[15vw] font-bold uppercase leading-[1.25] text-slate-200">
            Zammy Zaif
          </span>
        </motion.div>

        <ParticleBackground />

        <div className="relative z-10 w-full">
          <Container className="w-full">
            <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-12 lg:gap-[40px]">
              {/* TEXT CONTENT */}
              <motion.div className="order-1 w-full lg:col-span-6 lg:text-left xl:col-span-5">
                <div className="relative mb-1  flex  w-full flex-col justify-center   lg:justify-start">
                  <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    loop={true}
                    speed={1000}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    className="h-full w-full !overflow-visible"
                  >
                    {carouselItems.map((item, index) => (
                      <SwiperSlide key={index} className="!bg-transparent">
                        <div
                          className={cn(
                            'flex w-full flex-col items-center px-2 transition-all duration-700 ease-in-out lg:items-start',
                            activeIndex === index
                              ? 'visible translate-y-0 opacity-100'
                              : 'pointer-events-none invisible translate-y-4 opacity-0'
                          )}
                        >
                          <h5 className="mb-2 block text-[15px] font-bold uppercase tracking-[0.3em] text-orange-600 md:text-xs lg:text-[20px]">
                            {item.subtitle}
                          </h5>
                          <h1 className="mb-4 text-center text-[40px] font-black uppercase leading-[1.1]  text-slate-900 sm:text-[62px] md:text-[68px] lg:text-left lg:text-[62px]">
                            {item.title}
                          </h1>
                          <p className="mx-auto max-w-[440px] text-center text-[13px] font-medium leading-relaxed text-slate-600 md:text-base lg:mx-0 lg:text-left">
                            {item.para}
                          </p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* PAGINATION */}
                <div className="mb-2 flex items-center justify-center gap-4 lg:mb-2 lg:justify-start">
                  {carouselItems.map((_, i) => ( 
                    <div
                      key={i}
                      onClick={() => swiperRef.current?.slideToLoop(i)}
                      className="group cursor-pointer py-3"
                    >
                      <div
                        className={cn(
                          'h-[2px] rounded-full transition-all duration-700 ease-in-out',
                          activeIndex === i
                            ? 'w-12 bg-orange-600 lg:w-20'
                            : 'w-4 bg-slate-200 group-hover:bg-slate-400 lg:w-6'
                        )}
                      />
                    </div>
                  ))}
                </div>

                {/* STATS & BUTTON */}
                <div className="flex flex-col items-center gap-4 lg:items-start">
                  <div className="group relative origin-center  md:scale-90 lg:origin-left ">
                    <div className="relative flex items-center gap-4 rounded-[50px] border border-white/60 bg-[#FC5F00] p-2 shadow-xl backdrop-blur-md lg:gap-1 lg:p-3">
                      <div className="flex items-center -space-x-4">
                        {customers.slice(0, 4).map((customer: any, index: number) => (
                          <div key={index} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-lg lg:h-10 lg:w-10">
                            <Image src={customer.src} alt={customer.alt} fill className="object-cover" />
                          </div>
                        ))}
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-slate-900 leading-none">
                          <Counter end={statisticsCounterInfo?.count ?? 0} suffix={statisticsCounterInfo?.suffix ?? ''} />
                        </h3>
                        <h6 className="text-[15px] font-bold  text-white tracking-[0.2em] ">
                          {statisticsCounterInfo?.about ?? 'Satisfied Clients'}
                        </h6>
                      </div>
                    </div>
                  </div>

                  {ctaButton && (
                    <Button asChild className="h-[42px] rounded-full bg-slate-900 px-2  text-white transition-all hover:bg-orange-600">
                      <CustomLink href={ctaButton.href} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em]">
                        {ctaButton.label} <FaArrowRight />
                      </CustomLink>
                    </Button>
                  )}
                </div>
              </motion.div>

              {/* WORLD GLOBE AREA - RESTORED TO FULL SIZE */}
              <div className="order-2 flex w-full items-center justify-center  lg:col-span-6 lg:justify-end xl:col-span-7 overflow-hidden">
                <div className="pointer-events-none absolute right-[-5%] z-0 h-[60%] w-[60%] rounded-full bg-orange-100/50 blur-[100px]" />
                <div className="relative z-1 flex aspect-square h-[100vw] w-[100vw] items-center justify-center overflow-visible sm:h-[80vw] sm:w-[80vw] lg:h-[750px] lg:w-[750px] lg:mr-[-60px] xl:mr-[-100px]">
                  <WorldGlobe />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}