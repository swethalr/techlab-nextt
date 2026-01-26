'use client';

import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { cn } from '@/src/utils/shadcn';

// --- Types ---
interface MarkerProps {
  position: [number, number, number];
  country: string;
  isActive: boolean;
  globeRef: React.RefObject<THREE.Mesh>;
}

const MARKER_DATA = [
  { name: 'India', lat: 20.59, lng: 78.96 },
  { name: 'USA', lat: 37.09, lng: -95.71 },
  { name: 'UK', lat: 55.37, lng: -3.43 },
  { name: 'UAE', lat: 23.42, lng: 53.84 },
  { name: 'Australia', lat: -25.27, lng: 133.77 },
  { name: 'Germany', lat: 51.16, lng: 10.45 },
  { name: 'Japan', lat: 36.2, lng: 138.25 },
  { name: 'Singapore', lat: 1.35, lng: 103.81 },
];

const getCoords = (lat: number, lng: number, radius: number): [number, number, number] => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return [
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
};

const Marker = ({ position, country, isActive, globeRef }: MarkerProps) => {
  return (
    <Html
      position={position}
      center
      distanceFactor={10}
      occlude={[globeRef]}
      zIndexRange={[100, 0]}
    >
      <div className="pointer-events-none relative flex h-1 w-1 flex-col items-center">
        {/* Pulsing Anchor */}
        <div className={cn(
          "absolute h-1 w-2 animate-ping rounded-full bg-orange-500 transition-opacity duration-500",
          isActive ? 'opacity-100' : 'opacity-0'
        )} />
        <div className="h-1 w-2 rounded-full bg-orange-600 shadow-[0_0_8px_#f97316]" />

        {/* Floating Popup */}
        <div className={cn(
          "absolute bottom-4 flex flex-col items-center transition-all duration-500",
          isActive ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-2 scale-90 opacity-0'
        )}>
          <h6 className="mb-0.5 whitespace-nowrap text-[6px] font-bold uppercase text-orange-600 lg:text-[10px]">
            {country}
          </h6>

          <div className="flex h-[18px] min-w-[90px] items-center rounded-full border border-gray-200 bg-white px-1.5 py-0 shadow-xl">
            <div className="mr-1 flex shrink-0 items-center border-r border-gray-100 pr-1">
              <svg viewBox="0 0 24 24" className="h-2.5 w-2.5">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>

            <div className="flex flex-grow items-center overflow-hidden">
              <p className="animate-typing-effect whitespace-nowrap border-r-[1px] border-blue-500 text-[7px] font-bold text-slate-700">
                Google ranking Expert
              </p>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
};

const GlobeModel = () => {
  const globeRef = useRef<THREE.Mesh>(null!);
  const cloudRef = useRef<THREE.Mesh>(null!);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const radius = 2.2;

  // Ensure these paths match your /public folder exactly
  const [dayMap, cloudMap] = useTexture([
    '/assets/images/world/earth-blue.jpeg', 
    '/assets/images/world/clouds.png',
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % MARKER_DATA.length);
    }, 2500);
    return () => clearInterval(interval);
  }, 
    []);

  useEffect(() => {
    // When the finger is over the globe, we stop the page from scrolling
    // When it's not, the page scrolls freely
    document.body.style.overflow = hovered ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [hovered]);
  
  useFrame((state, delta) => {
    if (globeRef.current) globeRef.current.rotation.y += delta * 0.15;
    if (cloudRef.current) cloudRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group>
      <mesh ref={globeRef} rotation={[0, -Math.PI / 1.1, 0]} 
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onPointerDown={() => setHovered(true)}
        onPointerUp={() => setHovered(false)}>
        
       


        <sphereGeometry args={[radius, 64, 64]} />
        <meshPhongMaterial
          map={dayMap}
          shininess={10}
          specular={new THREE.Color('#444')}
          emissive={new THREE.Color('#000b1a')}
          emissiveIntensity={0.2}
        />
        {MARKER_DATA.map((marker, index) => (
          <Marker
            key={marker.name}
            position={getCoords(marker.lat, marker.lng, radius)}
            country={marker.name}
            isActive={index === activeIndex}
            globeRef={globeRef}
          />
        ))}
      </mesh>

      <mesh ref={cloudRef} scale={[1.03, 1.03, 1.03]}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          map={cloudMap}
          transparent
          opacity={0.4}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 5]} intensity={3.5} color="#59cbf8ff" />
    </group>
  );
};

export const WorldGlobe = ({ className }: { className?: string }) => {
  return (
    <div className={cn('relative flex h-full w-full items-center justify-center', className)}>
      <div className="relative h-full w-full" style={{  // Only the center 35% radius is interactive
          touchAction: 'none',}}>
        <Canvas 
          camera={{ position: [0, 0, 12], fov: 40 }} 
          dpr={[1, 2]}
          style={{ pointerEvents: 'auto' }} 
          gl={{ antialias: true }}
          className="!absolute !inset-[-25%] !h-[150%] !w-[150%] lg:!inset-0 lg:!h-full lg:!w-full"
        >
          <Suspense fallback={null}>
            <GlobeModel />
            <OrbitControls 
               enableZoom={false} 
               enablePan={false} 
               rotateSpeed={0.5} 
               autoRotate={false} 
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};