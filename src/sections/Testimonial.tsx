'use client';
import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Abishek Anand',
    role: 'Faroz CEO',
    image: '/assets/images/clients/abishek.jpeg',
    text: 'Our salon visibility skyrocketed! Clients now discover us easily on Google. Traffic and appointment bookings have improved thanks to Versa Forge’s local SEO magic.',
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 2,
    name: 'Rajal Rai Durai',
    role: ' Dentist',
    image: '/assets/images/clients/abishek.jpeg',
    text: 'Versa Forge laid a strong SEO foundation for my practice. Though it’s early, I already see better visibility and structured improvements across digital platforms.',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 3,
    name: 'Mrs. Fathima M.P.T',
    role: 'Physiotherapist',
    image: '/assets/images/clients/abishek.jpeg',
    text: 'From near-invisible to page one! Versa Forge’s SEO helped new patients easily discover us, significantly boosting walk-ins, visibility, and trust in our physiotherapy clinic.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 4,
    name: 'Mike R.',
    role: 'Travel Agency Owner',
    image: '/assets/images/clients/abishek.jpeg',
    text: 'Their SEO gave our travel agency solid traction. We are getting more website visits and inquiries for international packages. Highly effective and super professional team.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 5,
    name: 'Elena G.',
    role: 'Salon Owner',
    image: '/assets/images/clients/abishek.jpeg',
    text: 'Our salon visibility skyrocketed! Clients now discover us easily on Google. Traffic and appointment bookings have improved thanks to Versa Forge’s local SEO magic.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 6,
    name: 'James L.',
    role: 'Restaurant Manager',
    image: '/assets/images/clients/abishek.jpeg',
    text: 'Our salon visibility skyrocketed! Clients now discover us easily on Google. Traffic and appointment bookings have improved thanks to Versa Forge’s local SEO magic.',
    color: 'from-yellow-400 to-orange-500',
  },
];

export default function TitanTestimonials() {
  const rotateValue = useMotionValue(0);
  // Damping: 40 and Stiffness: 150 makes it feel "Expensive" and heavy
  const rotateSpring = useSpring(rotateValue, { stiffness: 150, damping: 40 });
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotation logic - Only runs when NOT being touched
  useEffect(() => {
    let controls: any;
    if (!isPaused) {
      controls = setInterval(() => {
        // Very slow increment for readability (0.1 instead of 0.5)
        rotateValue.set(rotateValue.get() + 0.15);
      }, 20);
    }
    return () => clearInterval(controls);
  }, [isPaused, rotateValue]);

  const handleDrag = (_: any, info: any) => {
    // 0.2 multiplier makes the drag slow and readable
    const sensitivity = 0.2;
    rotateValue.set(rotateValue.get() + info.delta.x * sensitivity);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505]">
      {/* BACKGROUND DECOR bg-[#050505]*/}
      <div className="opacity-2 pointer-events-none absolute top-1 w-full text-center">
        <h2 className=" h2  mt-8 font-bold uppercase text-white">
          Testimonials
        </h2>
        <h5 className=" h5 mt-4 font-primary uppercase tracking-wider  text-primary">
          {' '}
          What Our Clients Say
        </h5>
      </div>

      <div className="relative flex h-[950px] w-full items-center justify-center [perspective:2000px]">
        {/* INTERACTIVE OVERLAY: This controls the pause and the spin */}
        <motion.div
          drag="x"
          onDragStart={() => setIsPaused(true)}
          onDrag={handleDrag}
          onDragEnd={() => setIsPaused(false)}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
        />

        {/* THE CORE CAROUSEL */}
        <motion.div
          style={{
            rotateY: rotateSpring,
            transformStyle: 'preserve-3d',
          }}
          className="pointer-events-none relative flex h-[450px] w-[300px] items-center justify-center"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.id}
              t={t}
              index={i}
              total={testimonials.length}
            />
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .reflection-card {
          -webkit-box-reflect: below 4px
            linear-gradient(
              transparent,
              rgba(0, 0, 0, 0) 40%,
              rgba(255, 255, 255, 0.1)
            );
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ t, index, total }: any) {
  const angle = (360 / total) * index;
  const radius =
    typeof window !== 'undefined' && window.innerWidth < 768 ? 260 : 480;

  return (
    <motion.div
      style={{
        transformStyle: 'preserve-3d',
        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
      }}
      className="reflection-card absolute h-[400px] w-[280px] md:h-[460px] md:w-[340px]"
    >
      <div
        className={`h-full w-full rounded-[40px] bg-gradient-to-br ${t.color} flex flex-col justify-between border border-white/20 p-10 shadow-2xl`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-inner backdrop-blur-md">
          <span className="text-xs font-black text-white">ZZ</span>
        </div>

        <p className="p p font-bold italic leading-tight tracking-tight text-white">
          "{t.text}"
        </p>

        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white/20 bg-black/20 shadow-lg">
            {t.image ? (
              <img
                src={t.image}
                alt={t.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-bold text-white">
                {t.name[0]}
              </div>
            )}
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white">
              {t.name}
            </h4>
            <p className="text-[8px] font-black uppercase tracking-widest text-white/40">
              {t.role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
