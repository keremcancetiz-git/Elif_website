import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronRight } from 'lucide-react';
import { VALUE_PROPS } from '../data/projects.jsx';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="font-mono text-[10px] text-accent mt-4 h-4">
      {displayedText}<span className="animate-pulse">_</span>
    </div>
  );
};

const Shuffler = ({ items }) => {
  const [list, setList] = useState(items);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setList(prev => {
        const newList = [...prev];
        const last = newList.pop();
        newList.unshift(last);
        return newList;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-24 w-full mt-4 overflow-hidden">
      {list.map((item, i) => (
        <div 
          key={item}
          className="absolute w-full p-3 bg-dark/5 rounded-xl border border-dark/10 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{ 
            transform: `translateY(${i * 40}px) scale(${1 - i * 0.05})`,
            opacity: 1 - i * 0.3,
            zIndex: 10 - i
          }}
        >
          <span className="text-[10px] font-mono whitespace-nowrap">{item}</span>
        </div>
      ))}
    </div>
  );
};

const Scheduler = () => {
    return (
        <div className="mt-4 grid grid-cols-7 gap-1">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                <div key={i} className={`aspect-square rounded-md border border-dark/10 flex items-center justify-center text-[8px] font-mono
                    ${i === 3 ? 'bg-accent text-background border-accent animate-pulse' : 'bg-transparent'}`}>
                    {day}
                </div>
            ))}
        </div>
    );
};

const FeatureCard = ({ title, desc, icon, index }) => {
  return (
    <div className={`feature-card opacity-0 group bg-background border border-dark/10 p-10 rounded-cinematic flex flex-col items-start transition-all duration-500 hover:shadow-2xl hover:border-accent/20
      ${index === 1 ? 'md:-translate-y-8' : ''}`}>
      <div className="mb-6 p-4 rounded-2xl bg-dark/5 group-hover:bg-accent/10 transition-colors">
        {icon}
      </div>
      <h3 className="font-sans font-bold text-2xl mb-4 tracking-tight uppercase text-dark">{title}</h3>
      <p className="text-dark/70 leading-relaxed font-sans text-sm">{desc}</p>
      
      {index === 0 && <Shuffler items={["User Interviews", "Diary Studies", "Usability Testing", "Ethnography"]} />}
      {index === 1 && <Typewriter text="Mapping complex service ecosystems..." />}
      {index === 2 && <Scheduler />}

      <div className="mt-8 pt-6 border-t border-dark/10 w-full flex justify-between items-center group-hover:border-accent/20 transition-colors">
        <span className="text-[10px] font-mono uppercase tracking-widest opacity-40 text-dark">Methodology 0{index + 1}</span>
        <ChevronRight className="w-4 h-4 text-accent translate-x-0 group-hover:translate-x-2 transition-transform" />
      </div>
    </div>
  );
};

const Features = () => {
  console.log("Features Rendering");
  const container = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".feature-card", { y: 60, opacity: 0 });
      gsap.to(".feature-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
        },
        y: (i) => (i === 1 ? -32 : 0),
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="work" className="py-24 px-8 md:px-24 bg-background border-y border-dark/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif italic text-6xl text-dark mb-6 tracking-tight">Core Pillars</h2>
            <p className="text-dark/60 text-lg leading-relaxed">
              My approach is built on understanding the complex intersection of human needs and systemic possibilities.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="w-12 h-[1px] bg-dark/20 self-center"></div>
             <span className="text-xs font-mono uppercase tracking-widest opacity-40">Approach</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop, i) => (
            <FeatureCard key={i} {...prop} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
