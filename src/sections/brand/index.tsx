'use client';

import { brandMarqueeData } from '@/data/brand-cta';
import React from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion';

interface ParallaxProps {
  items: string[];
  baseVelocity: number;
  variant: 'accent' | 'filled' | 'white';
}

const ParallaxRow = ({ items, baseVelocity = 100, variant }: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const skewVelocity = useTransform(smoothVelocity, [-1000, 1000], [-12, 12]);

  const x = useTransform(baseX, (v) => {
    const min = -45;
    const max = -20;
    const range = max - min;
    const wrappedValue = ((((v - min) % range) + range) % range) + min;
    return `${wrappedValue}%`;
  });

  useAnimationFrame((_, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    moveBy += moveBy * (Math.abs(smoothVelocity.get()) / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex select-none flex-nowrap overflow-hidden whitespace-nowrap py-3">
      <motion.h3
        className="h3 flex gap-10 whitespace-nowrap font-black uppercase italic tracking-tight md:gap-20 "
        style={{ x, skew: skewVelocity }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="flex items-center gap-10 md:gap-20">
            {items.map((text, idx) => (
              <span
                key={idx}
                className={`transition-all duration-700 ${
                  variant === 'accent'
                    ? 'text-orange-600'
                    : variant === 'white'
                      ? 'marquee-stroke-thin text-transparent '
                      : 'text-slate-900'
                }`}
              >
                {text}
                {variant === 'accent' && (
                  <span className="ml-10 inline-block h-3 w-3 rounded-full bg-slate-900 opacity-10 md:ml-20" />
                )}
              </span>
            ))}
          </span>
        ))}
      </motion.h3>
    </div>
  );
};

export function BrandMarquee() {
  const { aiResults, brands } = brandMarqueeData;
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-20">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute bottom-[5%] right-[-5%] h-[50%] w-[95%] rounded-full bg-orange-600/10 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#ff6a00_1px,transparent_1px),linear-gradient(90deg,#ff6a00_1px,transparent_1px)] [background-size:45px_45px]" />
      </div>

      <div className="relative z-10 flex flex-col gap-2">
        <ParallaxRow items={aiResults} baseVelocity={-0.8} variant="accent" />
        <ParallaxRow items={brands} baseVelocity={0.8} variant="filled" />
        <ParallaxRow items={aiResults} baseVelocity={-1.2} variant="white" />
      </div>

      <style jsx global>{`
        .marquee-stroke-thin {
          -webkit-text-stroke: 1px #ff1e00;
        }
        @media (min-width: 768px) {
          .marquee-stroke-thin {
            -webkit-text-stroke: 2.5px #ff6600;
          }
        }
      `}</style>
    </section>
  );
}
