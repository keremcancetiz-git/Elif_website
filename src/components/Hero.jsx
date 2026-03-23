import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { BRAND_PURPOSE } from '../data/projects.jsx';

const Hero = () => {
  const container = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-[100dvh] flex items-end p-8 md:p-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/assets/images/hero.jpg" className="w-full h-full object-cover grayscale brightness-[0.7]" alt="Hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
      </div>
      <div className="hero-content relative z-10 max-w-3xl">
        <p className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-6">Service Designer</p>
        <h1 className="flex flex-col leading-[0.85] mb-8">
          <span className="font-sans font-bold text-5xl md:text-7xl tracking-tighter uppercase whitespace-nowrap">Designing for the</span>
          <span className="font-serif italic text-7xl md:text-[9vw] text-accent mt-2">Human Experience.</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-dark/70 max-w-xl mb-10 leading-relaxed">
          {BRAND_PURPOSE}
        </p>
        <button className="btn-magnetic bg-accent text-background px-8 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] group">
          <span className="relative z-10 transition-colors">Start Discovery</span>
          <span className="bg-layer"></span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
