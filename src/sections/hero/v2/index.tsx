'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
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

// Define the shape of the data the hero needs
interface HeroSectionProps {
  data: {
    bgText?: string; // New: added to make the background text dynamic
    customers: { src: string; alt: string }[];
    statisticsCounterInfo: { count: number; about: string; suffix: string };
    ctaButton: { href: string; label: string };
    carouselItems: { subtitle: string; title: string; para: string }[];
  };
  className?: string;
}

export function HeroSection({ data, className }: HeroSectionProps) {
  const swiperRef = useRef<SwiperType>();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Destructure from props instead of importing from a fixed file
  const { 
    customers, 
    statisticsCounterInfo, 
    ctaButton, 
    carouselItems, 
    bgText = "Zammy Zaif" 
  } = data;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const bgTextX = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <section
      ref={containerRef}
      className={cn(
        'relative z-1 h-auto min-h-screen overflow-x-hidden overflow-y-hidden bg-white lg:h-[110vh]',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative top-0 flex min-h-screen w-full flex-col items-center justify-start overflow-visible pb-12 pt-20 lg:sticky lg:justify-center lg:pb-0 lg:pt-5">
        <motion.div
          style={{ x: bgTextX }}
          className="pointer-events-none absolute left-0 top-[25%] z-0 hidden select-none whitespace-nowrap opacity-[0.9] lg:block"
        >
          <span className="pointer-events-none block select-none text-[15vw] font-bold uppercase leading-[1.25] text-slate-100">
            {bgText}
          </span>
        </motion.div>
        
        <div className="absolute right-[10%] top-[20%] h-[60%] w-[35%] animate-pulse rounded-full bg-[#3cb878] blur-[100px]" />
        <ParticleBackground />

        <div className="relative z-10 w-full">
          <Container className="w-full">
            <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-12 lg:gap-[40px]">
              {/* TEXT CONTENT */}
              <motion.div className="order-1 w-full lg:col-span-7 lg:text-left xl:col-span-7">
                <div className="relative mb-1 flex w-full flex-col justify-center lg:justify-start">
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
                          <h5 className="h5 mb-2 block font-bold uppercase tracking-[0.3em] text-[#3cb878] md:text-xs lg:text-[20px]">
                            {item.subtitle}
                          </h5>
                          <h1 className="h1 mb-4 text-center uppercase leading-[1.1] text-slate-900 lg:text-left">
                            {item.title}
                          </h1>
                          <p className="p mx-auto max-w-[440px] text-center font-medium leading-relaxed text-slate-700 md:text-base lg:mx-0 lg:text-left">
                            {item.para}
                          </p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* PAGINATION */}
                <div className="mb-2 flex items-center justify-center gap-4 lg:mb-2 lg:mt-2 lg:justify-start">
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
                            ? 'w-12 bg-[#3cb878] lg:w-20'
                            : 'w-4 bg-slate-200 group-hover:bg-slate-400 lg:w-6'
                        )}
                      />
                    </div>
                  ))}
                </div>

                {/* STATS & BUTTON */}
                <div className="flex flex-col items-center gap-4 lg:items-start">
                  <div className="group relative origin-center md:scale-90 lg:origin-left ">
                    <div className="relative flex items-center gap-2 rounded-[50px] border border-white/60 bg-[#3cb878] p-4 shadow-xl backdrop-blur-md lg:gap-4 lg:p-10">
                      <div className="flex items-center -space-x-4">
                        {customers.slice(0, 4).map((customer, index) => (
                          <div
                            key={index}
                            className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-lg"
                          >
                            <Image src={customer.src} alt={customer.alt} fill className="object-cover" />
                          </div>
                        ))}
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold leading-none text-slate-900">
                          <Counter end={statisticsCounterInfo.count} suffix={statisticsCounterInfo.suffix} />
                        </h3>
                        <h6 className="h5 font-bold tracking-[0.1em] text-white">
                          {statisticsCounterInfo.about}
                        </h6>
                      </div>
                    </div>
                  </div>

                  {ctaButton && (
                    <Button asChild className="h-[42px] rounded-[50px] bg-slate-900 px-6 text-white transition-all hover:bg-[#3cb878]">
                      <CustomLink href={ctaButton.href} className="h6 flex items-center gap-2 font-bold uppercase tracking-[0.15em]">
                        {ctaButton.label} <FaArrowRight />
                      </CustomLink>
                    </Button>
                  )}
                </div>
              </motion.div>

              {/* WORLD GLOBE AREA */}
              <div className="order-2 flex w-full items-center justify-center overflow-hidden lg:col-span-6 lg:justify-end xl:col-span-5">
                <div className="pointer-events-none absolute right-[-5%] z-0 h-[60%] w-[60%] rounded-full bg-orange-100/50 blur-[100px]" />
                <div className="relative z-1 flex aspect-square h-[100vw] w-[100vw] items-center justify-center overflow-visible sm:h-[80vw] sm:w-[80vw] lg:mr-[-60px] lg:h-[750px] lg:w-[750px] xl:mr-[-100px]">
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