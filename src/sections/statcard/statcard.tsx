'use client';
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, MotionValue } from 'framer-motion';
import { Globe, Users, TrendingUp, Zap } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: 'Visitor Monthly',
    value: '200K',
    icon: <Zap />,
    color: '#FF6A00',
  },
  {
    id: 2,
    label: 'Growth Monthly',
    value: '50%',
    icon: <TrendingUp />,
    color: '#3B82F6',
  },
  {
    id: 3,
    label: 'Happy Clients',
    value: '1M+',
    icon: <Users />,
    color: '#10B981',
  },
  {
    id: 4,
    label: 'Countries',
    value: '30+',
    icon: <Globe />,
    color: '#8B5CF6',
  },
];

export default function Stats() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050505] py-20">
      <div className="z-10 mb-16 px-4 text-center">
        <h2 className="h2 font-black uppercase italic tracking-tighter text-white">
          First Rank <span className="text-[#FF6A00]">SEO</span>
        </h2>
        <h6 className="h6 mt-2 font-bold uppercase italic tracking-[0.5em] text-white/40">
          Auto-rotating modules • Grab to override
        </h6>
      </div>

      <div className="flex flex-col gap-10 [perspective:2000px]">
        {stats.map((s, i) => (
          <SquareCube key={s.id} s={s} index={i} />
        ))}
      </div>
    </section>
  );
}

function SquareCube({ s, index }: { s: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const x: MotionValue<number> = useMotionValue(index * 90); // Start at different angles
  const rotateY = useSpring(x, { stiffness: 50, damping: 20 });

  // 1. AUTOMATIC ROTATION LOGIC
  useEffect(() => {
    let controls: any;
    if (!isHovered) {
      controls = setInterval(() => {
        x.set(x.get() + 0.5); // Speed of auto-spin
      }, 30);
    }
    return () => clearInterval(controls);
  }, [isHovered, x]);

  // 2. SQUARE GEOMETRY (Width = Height)
  const size = 280; // Perfectly square
  const depth = size / 2; // Close the 3D box

  return (
    <div
      className="relative cursor-grab select-none active:cursor-grabbing"
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interaction Surface */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={() => setIsHovered(true)}
        onDragEnd={() => setIsHovered(false)}
        onDrag={(_, info) => x.set(x.get() + info.delta.x)}
        className="absolute inset-0 z-50"
      />

      <motion.div
        style={{ rotateY, transformStyle: 'preserve-3d' }}
        className="pointer-events-none relative h-full w-full"
      >
        {/* FRONT FACE */}
        <div
          style={{
            transform: `rotateY(0deg) translateZ(${depth}px)`,
            backgroundColor: s.color,
          }}
          className="backface-hidden absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-white/20 shadow-2xl"
        >
          <div className="mb-4 rounded-2xl bg-black/20 p-4">
            {React.cloneElement(s.icon, { size: 40, className: 'text-white' })}
          </div>
          <span className="text-6xl font-black tracking-tighter text-white">
            {s.value}
          </span>
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/70">
            {s.label}
          </p>
        </div>

        {/* RIGHT FACE (Metal Texture) */}
        <div
          style={{ transform: `rotateY(90deg) translateZ(${depth}px)` }}
          className="backface-hidden absolute inset-0 flex items-center justify-center rounded-xl border border-white/10 bg-neutral-900"
        >
          <span className="text-[10rem] font-black italic text-white/5">
            {index + 1}
          </span>
        </div>

        {/* BACK FACE (Logo/Brand) */}
        <div
          style={{
            transform: `rotateY(180deg) translateZ(${depth}px)`,
            backgroundColor: s.color,
          }}
          className="backface-hidden absolute inset-0 flex items-center justify-center rounded-xl border border-white/20 opacity-90"
        >
          <span className="h3 uppercase  text-white "> Zammy Zaif</span>
        </div>

        {/* LEFT FACE (Industrial Detail) */}
        <div
          style={{ transform: `rotateY(-90deg) translateZ(${depth}px)` }}
          className="backface-hidden absolute inset-0 flex items-center justify-center rounded-xl border border-white/10 bg-[#111]"
        >
          <div className="h-1/2 w-2 rounded-full bg-[#FF6A00]/20 blur-sm" />
          <span className="h3 justify-center uppercase text-white ">
            {' '}
            Google Ranking Expert
          </span>
        </div>
      </motion.div>
    </div>
  );
}