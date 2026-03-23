import React from 'react';
import { X, Zap, Layers, ChevronLeft } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  
  return (
    <div className="fixed inset-0 z-[200] bg-background overflow-y-auto animate-in">
      <nav className="sticky top-0 bg-background/90 backdrop-blur-md border-bottom border-dark/5 z-50 py-6 px-8 md:px-24 flex justify-between items-center">
        <button onClick={onClose} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Works
        </button>
        <span className="font-serif italic text-xl hidden md:block">{project.title}</span>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-dark/5 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </nav>
      
      <div className="max-w-5xl mx-auto py-20 px-8">
        <header className="mb-20">
          <h1 className="font-serif italic text-6xl md:text-8xl mb-8 tracking-tighter leading-none">{project.title}</h1>
          <div className="flex flex-wrap gap-8 items-center mb-12">
            <div>
              <p className="text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-1">My Role</p>
              <p className="text-xs font-bold uppercase tracking-widest">{project.role}</p>
            </div>
            <div className="w-px h-8 bg-dark/10 hidden md:block" />
            <div>
              <p className="text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-1">Timeline</p>
              <p className="text-xs font-bold uppercase tracking-widest">{project.date}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-dark/10 pt-12">
            <div className="col-span-2">
              <h2 className="font-sans font-bold text-xl uppercase mb-6">Overview</h2>
              <p className="text-dark/70 text-lg leading-relaxed">{project.overview}</p>
              
              <div className="mt-12 bg-accent/5 border-l-4 border-accent p-8 rounded-r-2xl">
                <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs mb-4">
                  <Zap className="w-3 h-3" /> The Goal
                </div>
                <p className="font-serif italic text-2xl text-dark leading-snug">{project.goal}</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-widest text-dark/40 mb-3">Methods</h3>
                <div className="flex flex-wrap gap-2">
                  {project.methods.map(m => <span key={m} className="text-xs font-semibold px-3 py-1 bg-dark/5 rounded-full">{m}</span>)}
                </div>
              </div>
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-widest text-dark/40 mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(t => <span key={t} className="text-xs font-semibold px-3 py-1 bg-dark/5 rounded-full">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-32">
           <img src={project.image} className="w-full aspect-video object-cover rounded-cinematic shadow-2xl" alt={project.title} />
        </section>

         <section className="mb-32">
            <h2 className="font-sans font-bold text-xl uppercase mb-12 flex items-center gap-4">
              Design Journey 
              <span className="h-px bg-dark/10 grow" />
            </h2>
            <div className="space-y-40">
              {project.journey?.map((step, idx) => (
                <div key={idx} className={`grid grid-cols-1 md:grid-cols-2 gap-20 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                    <span className="font-mono text-xs text-accent mb-4 block">Step 0{idx + 1}</span>
                    <h3 className="font-serif italic text-4xl mb-6">{step.title}</h3>
                    <p className="text-dark/70 leading-relaxed text-lg">{step.desc}</p>
                  </div>
                  <div className={`grid gap-4 ${step.imgs.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                    {step.imgs.map((img, i) => (
                      <div key={i} className="rounded-2xl overflow-hidden border border-dark/5 bg-dark/5 shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                        <img src={img} className="w-full aspect-[4/3] object-cover" alt={`${step.title} figure ${i+1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
         </section>

         <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-20">
           <div>
              <h2 className="font-sans font-bold text-xl uppercase mb-8 border-b border-dark/10 pb-4">Outcomes</h2>
              <ul className="space-y-6">
                {project.outcomes.map((o, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 text-[10px] font-bold font-mono">{i+1}</span>
                    <p className="text-dark/70 leading-relaxed pt-1">{o}</p>
                  </li>
                ))}
              </ul>
           </div>
           <div>
              <h2 className="font-sans font-bold text-xl uppercase mb-8 border-b border-dark/10 pb-4">Logic & Strategy</h2>
              <p className="text-dark/70 leading-relaxed mb-8">{project.logicSummary}</p>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-dark/5 bg-dark/5 group cursor-zoom-in">
                 <img src={project.logicMap} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Logic Map" />
                 <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Layers className="text-background w-8 h-8" />
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectModal;
