import React from 'react';
import { Compass, Sparkles, ArrowUp, Heart } from 'lucide-react';

interface CinematicFooterProps {
  onOpenPlanner: () => void;
}

export const CinematicFooter: React.FC<CinematicFooterProps> = ({ onOpenPlanner }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#070C14] text-white pt-24 pb-12 overflow-hidden border-t border-slate-800/80">
      
      {/* SECTION 17: FINAL CINEMATIC HERO ENDING */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative rounded-3xl overflow-hidden min-h-[480px] flex items-center justify-center p-8 text-center border border-[#D8C3A5]/30 shadow-2xl">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1600&auto=format&fit=crop"
            alt="Annapurna Range Reflection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070C14] via-[#070C14]/70 to-[#070C14]/50"></div>

          {/* Cinematic Overlay Text */}
          <div className="relative z-10 max-w-3xl space-y-8">
            <h2 className="font-cinzel text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              YOUR JOURNEY <br />
              <span className="text-gradient-gold">STARTS HERE.</span>
            </h2>

            <p className="font-editorial italic text-2xl text-slate-200 font-light">
              "Nepal is ancient. Nepal is diverse. Nepal is adventurous. Nepal is alive."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#destinations"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#B83227] hover:bg-[#a02a20] text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#D98A2B]" />
                Explore Destinations
              </a>

              <button
                onClick={onOpenPlanner}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#070C14]/90 border border-[#D8C3A5]/40 hover:border-[#D98A2B] text-white font-bold text-xs uppercase tracking-widest backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#D98A2B]" />
                Plan Your Journey
              </button>
            </div>

            {/* Giant Faded NEPAL watermark */}
            <div className="pt-6 font-cinzel text-6xl sm:text-9xl font-black text-white/10 tracking-widest select-none">
              NEPAL
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-cinzel text-2xl font-bold text-white">DISCOVER NEPAL</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              An interactive digital travel & cultural storytelling platform dedicated to showcasing Nepal’s history, Himalayas, heritage, wildlife, and living traditions.
            </p>
            <div className="text-xs text-[#D8C3A5]">
              Published with verified tourism and historical research.
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D98A2B] mb-4">
                Exploration
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#history" className="hover:text-white transition-colors">History Timeline</a></li>
                <li><a href="#heritage" className="hover:text-white transition-colors">UNESCO Sites</a></li>
                <li><a href="#destinations" className="hover:text-white transition-colors">Destinations</a></li>
                <li><a href="#himalayas" className="hover:text-white transition-colors">Himalayan Peaks</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D98A2B] mb-4">
                Activities
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#treks" className="hover:text-white transition-colors">Trekking Routes</a></li>
                <li><a href="#culture" className="hover:text-white transition-colors">Ethnic Culture</a></li>
                <li><a href="#festivals" className="hover:text-white transition-colors">Festivals Calendar</a></li>
                <li><a href="#food" className="hover:text-white transition-colors">Cuisine & Flavors</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D98A2B] mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#map" className="hover:text-white transition-colors">Interactive Map</a></li>
                <li><a href="#seasons" className="hover:text-white transition-colors">Best Time to Visit</a></li>
                <li><a href="#guide" className="hover:text-white transition-colors">Visa & Permits</a></li>
                <li><button onClick={onOpenPlanner} className="hover:text-[#D98A2B] transition-colors text-left">Itinerary Builder</button></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Discover Nepal Interactive. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#B83227] fill-current" />
            <span>for global travelers & mountain seekers.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-[#D8C3A5] hover:text-white transition-colors"
          >
            <span>Back to Summit</span>
            <div className="p-2 rounded-full bg-slate-900 border border-slate-800">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

    </footer>
  );
};
