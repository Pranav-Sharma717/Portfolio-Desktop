import { useEffect, useRef } from 'react';
import DesktopIcon from './DesktopIcon';
// @ts-expect-error - Vanta has no official TS types
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

//This might not be it.

const Desktop = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    vantaEffect.current = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 0.25,
      scaleMobile: 0.25,
      color: 0x3fffe4,
      backgroundColor: 0x0b1020,
    });

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full fixed inset-0 pb-12 overflow-hidden">
      {/* Vanta background layer with 50% opacity overlay */}
      <div className="absolute inset-0 -z-20">
        <div ref={vantaRef} className="w-full h-full absolute inset-0" />
        <div className="absolute inset-0 bg-[#0b1020]/50" /> {/* 50% overlay */}
      </div>

      {/* Centered Headings */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pb-20 pointer-events-none">
        <h1 className="text-reveal-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-2 sm:mb-4 text-center px-2 sm:px-4 max-w-4xl">
          Hey! I'm Pranav and I love to build
        </h1>
        <h2 className="text-reveal-motto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-300 text-center px-2 sm:px-4">
          Learn. Innovate. Evolve.
        </h2>
      </div>

      {/* Desktop Icons - Draggable */}
      <div className="relative z-10 w-full h-full">
        <DesktopIcon id="about" label="About Me" icon="👤" />
        <DesktopIcon id="projects" label="Projects" icon="💼" />
        <DesktopIcon id="resume" label="Resume" icon="📄" />
        <DesktopIcon id="contact" label="Contact" icon="✉️" />
        <DesktopIcon id="terminal" label="Terminal" icon="💻" />
        <DesktopIcon id="blogs" label="Blogs" icon="📝" externalLink="https://your-blog-url.com" />
        {/* <DesktopIcon id="portfolio" label="Portfolio" icon="🌐" externalLink="https://your-portfolio-url.com" /> */}
      </div>
    </div>
  );
};

export default Desktop;
