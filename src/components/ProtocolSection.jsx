import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { PROJECTS } from '../data/projects.jsx';

const ProtocolSection = ({ onProjectClick }) => {
  const horizontalSection = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const inner = horizontalSection.current.querySelector('.horizontal-inner');
      gsap.to(inner, {
        xPercent: -75,
        ease: "none",
        scrollTrigger: {
          trigger: horizontalSection.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
          end: () => "+=" + (window.innerWidth * 4)
        }
      });
    }, horizontalSection);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={horizontalSection} id="work" className="relative z-10 bg-background text-dark overflow-hidden">
      <div className="horizontal-inner flex w-[400vw] h-screen">
        {/* Title Panel */}
        <div className="project-panel w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center p-24 bg-background border-r border-dark/5">
          <div className="max-w-4xl text-center">
            <span className="text-xs font-mono uppercase tracking-[0.5em] mb-12 block opacity-40">Portfolio Archive</span>
            <h2 className="font-serif italic text-8xl md:text-[10vw] leading-none mb-12">Selected <br/>Works.</h2>
            <div className="w-24 h-px bg-dark/30 mx-auto"></div>
          </div>
        </div>
        
        {/* Project Panels */}
        {PROJECTS.map((project, i) => (
          <div key={project.id} className="project-panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-background border-r border-dark/5">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-24 items-center px-12">
              <div className="relative aspect-[4/5] overflow-hidden group border border-dark/5 rounded-cinematic shadow-xl">
                <img src={project.image} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" alt={project.title} />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity opacity-40 group-hover:opacity-0"></div>
              </div>
              <div className="space-y-12">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] mb-6 block opacity-40">Dossier 0{i+1} / 03</span>
                  <h3 className="font-serif italic text-7xl md:text-8xl leading-none tracking-tighter">{project.title}</h3>
                </div>
                <p className="font-sans font-light text-xl text-dark/60 leading-relaxed max-w-md">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-widest border border-dark/10 px-4 py-2 rounded-full">{tag}</span>
                  ))}
                </div>
                <button 
                  className="btn-magnetic border border-dark text-dark px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] group"
                  onClick={() => onProjectClick(project)}
                >
                   <span className="relative z-10 transition-colors group-hover:text-background font-black">Open Archive</span>
                   <span className="bg-layer !bg-dark"></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProtocolSection;
