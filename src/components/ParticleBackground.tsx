'use client';

import { useEffect, useState, useId } from 'react';
// @ts-ignore
import Particles, { initParticlesEngine } from '@tsparticles/react';
// @ts-ignore
import { loadSlim } from '@tsparticles/slim';

export const ParticleBackground = () => {
  const [init, setInit] = useState(false);
  const id = useId();

  useEffect(() => {
    // Explicitly typing 'engine' as 'any' to fix ts(7006) 
    // and removing the Engine import to fix ts(6133) & ts(2307)
    initParticlesEngine(async (engine: any) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
      <Particles
        id={id}
        className="h-full w-full"
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          responsive: [
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: { value: 40 },
                  size: { value: 3 },
                  links: {
                    distance: 100,
                    opacity: 0.8,
                    width: 0.9,
                  },
                },
                interactivity: {
                  events: {
                    onHover: { enable: true, mode: 'grab' },
                    resize: { enable: true },
                  },
                  modes: {
                    grab: {
                      distance: 260,
                      links: { opacity: 0.6, color: '#ff3300' },
                    },
                  },
                },
              },
            },
          ],
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'grab' },
              resize: { enable: true },
            },
            modes: {
              grab: {
                distance: 260,
                links: { opacity: 0.6, color: '#ff3300' },
              },
            },
          },
          particles: {
            color: { value: '#ff5100' },
            links: {
              color: '#fd4800',
              distance: 200,
              enable: true,
              opacity: 0.4,
              width: 0.8,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              outModes: { default: 'out' },
            },
            number: {
              value: 40,
              density: {
                enable: true,
                width: 1200,
                height: 1200,
              },
            },
            size: { value: 4 },
            opacity: {
              value: { min: 0.3, max: 0.8 },
              animation: {
                enable: true,
                speed: 0.5,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};