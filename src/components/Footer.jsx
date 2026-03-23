import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { BRAND_NAME } from '../data/projects.jsx';

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-background pt-32 pb-12 px-8 md:px-24">
       <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-24 items-center">
             <div>
                <h2 className="font-serif italic text-7xl md:text-9xl mb-12 tracking-tighter">Stay in touch.</h2>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:elifozyasar@gmail.com" className="btn-magnetic bg-background text-dark px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                    <Mail className="w-4 h-4" /> Get in touch
                  </a>
                  <a href="#" className="btn-magnetic border border-white/20 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
             </div>
             <div className="flex flex-col gap-8 md:items-end">
                <div className="text-right">
                  <p className="text-background/40 font-mono text-[10px] uppercase tracking-widest mb-2">Location</p>
                  <p className="text-xl font-sans font-bold">Eindhoven, NL</p>
                </div>
                <div className="flex items-center gap-3 bg-white/5 py-4 px-6 rounded-2xl border border-white/10">
                   <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                   <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-background/60">System Operational — Available for projects</span>
                </div>
             </div>
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex flex-col">
               <span className="font-serif font-bold text-xl">{BRAND_NAME}</span>
               <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-40">© 2026 Eindhoven, The Netherlands</span>
             </div>
             <div className="flex gap-8">
               {['Instagram', 'Twitter', 'Dribbble'].map(s => (
                 <a key={s} href="#" className="text-[10px] font-mono uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">{s}</a>
               ))}
             </div>
          </div>
       </div>
    </footer>
  );
};

export default Footer;
