import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../data/projects.jsx';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[95%] max-w-4xl rounded-full px-6 py-3 flex items-center justify-between
      ${scrolled ? 'bg-background/60 backdrop-blur-xl border border-dark/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="flex flex-col">
        <span className="font-serif font-bold text-lg leading-none tracking-tight">{BRAND_NAME}</span>
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-60">Service Design Portfolio</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {['Work', 'About', 'Contact'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold hover:text-accent transition-colors relative group">
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
          </a>
        ))}
        <button className="btn-magnetic bg-dark text-background px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest overflow-hidden group">
          <span className="relative z-10 transition-colors group-hover:text-background">CV</span>
          <span className="bg-layer"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
