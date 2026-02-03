import React from 'react';
import {
  SiGoogleads, SiWoo, SiShopify, SiSlack, SiReact,
  SiMagento, SiZapier, SiElementor, SiWordpress, SiNextdotjs,
} from 'react-icons/si';

export const technologiesData = {
  title: "Technologies We Work With",
  description: "We leverage cutting-edge tools and frameworks to craft scalable, high-performing digital solutions effortlessly.",
  techItems: [
    { icon: React.createElement(SiGoogleads), color: '#4285F4', x: 220, y: 150 },
    { icon: React.createElement(SiWoo), color: '#96588A', x: 370, y: 150 },
    { icon: React.createElement(SiShopify), color: '#7AB55C', x: 520, y: 150 },
    { icon: React.createElement(SiSlack), color: '#4A154B', x: 670, y: 150 },
    { icon: React.createElement(SiReact), color: '#61DAFB', x: 820, y: 150 },
    { icon: React.createElement(SiMagento), color: '#EE672F', x: 970, y: 150 },
    { icon: React.createElement(SiZapier), color: '#FF4F00', x: 320, y: 550 },
    { icon: React.createElement(SiElementor), color: '#92003B', x: 500, y: 550 },
    { icon: React.createElement(SiWordpress), color: '#21759B', x: 700, y: 550 },
    { icon: React.createElement(SiNextdotjs), color: '#000000', x: 880, y: 550 },
  ]
};