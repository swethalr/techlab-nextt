'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiGoogleads, SiWoo, SiShopify, SiSlack, 
  SiReact, SiMagento, SiZapier, SiElementor, 
  SiWordpress, SiNextdotjs 
} from 'react-icons/si';

interface TechConfig {
  icon: React.JSX.Element;
  color: string;
  x: number;
  y: number;
}

const techItems: TechConfig[] = [
  { icon: <SiGoogleads />, color: '#4285F4', x: 220, y: 150 },
  { icon: <SiWoo />, color: '#96588A', x: 370, y: 150 },
  { icon: <SiShopify />, color: '#7AB55C', x: 520, y: 150 },
  { icon: <SiSlack />, color: '#4A154B', x: 670, y: 150 },
  { icon: <SiReact />, color: '#61DAFB', x: 820, y: 150 },
  { icon: <SiMagento />, color: '#EE672F', x: 970, y: 150 },
  { icon: <SiZapier />, color: '#FF4F00', x: 320, y: 550 },
  { icon: <SiElementor />, color: '#92003B', x: 500, y: 550 },
  { icon: <SiWordpress />, color: '#21759B', x: 700, y: 550 },
  { icon: <SiNextdotjs />, color: '#000000', x: 880, y: 550 },
];

export default function Technologies() {
  const centerX = 600;
  const centerY = 350;

  return (
      <section className="relative w-full bg-white py-24 px-4 overflow-hidden">
          
           <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
          
        <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
          </div>
          

      <div className="max-w-6xl mx-auto text-center ">
        <h2 className=" h2 text-[#0f172a] mb-4 tracking-tight">
          Technologies We Work With
        </h2>
        <p className="text-slate-900 p max-w-5xl mx-auto leading-relaxed">
          We leverage cutting-edge tools and frameworks to craft scalable, 
          high-performing digital solutions effortlessly.
        </p>
      </div>

      <div className="relative w-full aspect-[12/7] hidden sm:block max-w-[1400px] mx-auto">
        <svg 
          viewBox="0 0 1200 700" 
          fill="none" 
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {techItems.map((tech, i) => {
            const isTop = tech.y < centerY;
            const cp1Y = isTop ? centerY - 100 : centerY + 100;
            const cp2Y = centerY;

            // Simplified the path string to ensure absolute compatibility
            const pathD = `M${centerX},${centerY}C${centerX},${cp1Y} ${tech.x},${cp2Y} ${tech.x},${tech.y}`;

            return (
              <g key={`path-${i}`}>
                <path
                  d={pathD}
                  stroke="#000000"
                  strokeWidth="1.1"
                  
                  fill="none"
                />
                
                <motion.circle
                  r="2.3"
                  fill="#ad0404"
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  transition={{
                    duration:2, // Synchronized timing: all reach boxes at the same time
                    repeat: Infinity,
                    ease:"easeOut" , // Linear ensures they move at the same relative speed
                    delay: 0 // Removed delay for simultaneous launch
                  }}
                  // Using style property with properly formatted path string
                  style={{ offsetPath: `path('${pathD}')` }}
                />
              </g>
            );
          })}
        </svg>

        <div 
          className="absolute z-30 bg-black text-white px-5 py-3 rounded-2xl font-bold h4 shadow-[0_20px_50px_rgba(0,0,0,0.45)] border-4 border-white/90 select-none"
          style={{ 
            left: `${(centerX / 1200) * 100}%`, 
            top: `${(centerY / 700) * 100}%`,
            transform: 'translate(-50%, -50%)' 
          }}
        >
          TECHNOLOGIES
        </div>

        {techItems.map((tech, i) => (
          <div
            key={`box-${i}`}
            className="absolute z-20 flex items-center justify-center w-[8%] aspect-square bg-white rounded-[2.5rem] shadow-[0_15px_45px_-15px_rgba(0,0,0,0.12)] border-2 transition-transform duration-300 hover:scale-110"
            style={{ 
              left: `${(tech.x / 1200) * 100}%`, 
              top: `${(tech.y / 700) * 100}%`,
              transform: 'translate(-50%, -50%)',
              borderColor: `${tech.color}90`,
            }}
          >
            <div className="text-2xl" style={{ color: tech.color }}>
              {tech.icon}
            </div>
          </div>
        ))}
      </div>

{/* MOBILE ONLY VIEW (Clean Grid) */}
      <div className="sm:hidden grid grid-cols-2 gap-4 mt-8">
        {techItems.map((tech, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            key={`mob-${i}`} 
            className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border-2" 
            style={{ borderColor: `${tech.color}25` }}
          >
            <div className="text-4xl mb-2" style={{ color: tech.color }}>{tech.icon}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}