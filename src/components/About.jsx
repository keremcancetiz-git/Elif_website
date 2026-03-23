import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {
    const sectionRef = useRef();
    
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set(".about-animate", { y: 30, opacity: 0 });
            gsap.to(".about-animate", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="relative py-32 px-8 md:px-24 bg-background text-dark overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square rounded-full border border-accent/10 animate-pulse"></div>
            </div>
            
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div className="about-animate space-y-12">
                        <div className="space-y-4">
                            <span className="text-accent text-xs font-mono uppercase tracking-[0.4em]">Manifesto</span>
                            <h2 className="font-serif italic text-6xl md:text-8xl tracking-tighter leading-none text-dark">The Human <br/>Perspective.</h2>
                        </div>
                        
                        <div className="space-y-6 text-dark/60 font-sans text-lg leading-relaxed max-w-xl">
                            <p className="text-dark italic text-2xl font-serif">"I see myself as a reflective thinker before a designer."</p>
                            <p>I'm interested in how data and research can inform design decisions and help uncover what people actually need. Reflection is an important part of my process. It helps me question assumptions, understand my values, and stay mindful of how my decisions influence the final product.</p>
                            <p>This curiosity and attention to detail is what draws me to research: the diary studies, in-context testing, and behavioural observations that reveal what's under the surface.</p>
                            <p>I also believe confidence comes from allowing yourself to be a beginner. Some of my best work has happened in the early, undefined stages of a project, where the problem isn't fully formed yet.</p>
                        </div>
                    </div>

                    <div className="about-animate space-y-12">
                        <div className="p-12 bg-dark/5 rounded-cinematic border border-dark/10 backdrop-blur-sm">
                            <h3 className="text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-12 border-b border-dark/10 pb-4">Specialized Toolkit</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-6 opacity-40 text-dark">Design & Research</h4>
                                    <ul className="space-y-3 text-sm font-sans text-dark/70">
                                        <li>Service Blueprinting</li>
                                        <li>User Journey Mapping</li>
                                        <li>User Research & Data Analysis</li>
                                        <li>Qualitative & Quantitative Research</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-6 opacity-40 text-dark">Tools & Prototyping</h4>
                                    <ul className="space-y-3 text-sm font-sans text-dark/70">
                                        <li>Figma, Solidworks, Fusion 360</li>
                                        <li>Adobe CC, Arduino IDE</li>
                                        <li>Processing & JavaScript</li>
                                        <li>Physical Prototyping</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 p-8 border border-dark/10 rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 cursor-help">
                             <img src="/assets/images/elif_profile.jpg" className="w-20 h-20 rounded-full object-cover border-2 border-accent" alt="Elif" />
                             <div>
                                <p className="font-serif italic text-xl text-dark">Elif Özyaşar</p>
                                <p className="text-[10px] font-mono uppercase tracking-widest text-dark/40">Eindhoven University of Technology</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
