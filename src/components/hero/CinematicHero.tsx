import React from 'react';
import { Compass, Mountain, Sparkles } from 'lucide-react';

interface CinematicHeroProps {
  onOpenPlanner: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ onOpenPlanner }) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#070C14] pt-20">
      {/* Background Image with Layered Parallax Feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2000&auto=format&fit=crop"
          alt="Everest Himalayan Peak Sunrise"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Dark Editorial Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070C14] via-[#070C14]/60 to-[#070C14]/40"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#070C14]/30 to-[#070C14]/90"></div>
      </div>

      {/* Floating Animated Himalayan Mist Layer */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-40 animate-mist">
        <div className="w-[150%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl transform -rotate-6"></div>
      </div>

      {/* Prayer Flags Banner Overlay at top */}
      <div className="absolute top-20 right-0 left-0 z-10 pointer-events-none overflow-hidden flex justify-center opacity-85">
        <div className="flex gap-1 animate-flag transform -rotate-1 origin-top-left">
          {['bg-blue-600', 'bg-slate-100', 'bg-red-600', 'bg-amber-400', 'bg-emerald-600'].map((color, idx) => (
            <div
              key={idx}
              className={`w-8 h-10 ${color} opacity-90 shadow-md shadow-black/40 rounded-b-sm border-t border-amber-900/30 transform origin-top hover:scale-105 transition-transform`}
            ></div>
          ))}
          {['bg-blue-600', 'bg-slate-100', 'bg-red-600', 'bg-amber-400', 'bg-emerald-600'].map((color, idx) => (
            <div
              key={`flag-2-${idx}`}
              className={`w-8 h-10 ${color} opacity-90 shadow-md shadow-black/40 rounded-b-sm border-t border-amber-900/30 transform origin-top hover:scale-105 transition-transform`}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center my-auto">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-[#D8C3A5]/30 backdrop-blur-md mb-8 text-xs font-semibold uppercase tracking-widest text-[#D8C3A5] shadow-lg">
          <Mountain className="w-3.5 h-3.5 text-[#D98A2B]" />
          <span>8,848.86m Above Sea Level</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B83227] animate-ping"></span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-tight mb-6 text-shadow-xl">
          DISCOVER <span className="text-gradient-gold">NEPAL</span>
        </h1>

        {/* Editorial Subheading */}
        <p className="font-editorial italic text-xl sm:text-2xl md:text-3xl text-slate-200 max-w-3xl leading-relaxed mb-10 font-normal">
          "Where ancient civilizations, sacred pagodas, and living gods meet the highest mountain peaks on earth."
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <a
            href="#intro"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#B83227] hover:bg-[#a02a20] text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#B83227]/30 hover:shadow-[#B83227]/50 transition-all flex items-center justify-center gap-3 group"
          >
            <Compass className="w-4 h-4 text-[#D98A2B] group-hover:rotate-180 transition-transform duration-700" />
            <span>Explore Nepal</span>
          </a>

          <button
            onClick={onOpenPlanner}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/90 border border-[#D8C3A5]/40 hover:border-[#D98A2B] text-slate-200 hover:text-white font-bold text-xs uppercase tracking-widest backdrop-blur-md transition-all flex items-center justify-center gap-3 group"
          >
            <Sparkles className="w-4 h-4 text-[#D98A2B]" />
            <span>Begin the Journey</span>
          </button>
        </div>

        {/* Quick Highlights Counter Ticker Preview */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl pt-8 border-t border-slate-800/80">
          <div className="flex flex-col items-center">
            <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#D8C3A5]">8 / 14</span>
            <span className="text-[11px] uppercase tracking-wider text-slate-400">8,000m Peaks</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#D98A2B]">7</span>
            <span className="text-[11px] uppercase tracking-wider text-slate-400">UNESCO World Heritage</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#B83227]">125+</span>
            <span className="text-[11px] uppercase tracking-wider text-slate-400">Ethnic Groups</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-200">623 BCE</span>
            <span className="text-[11px] uppercase tracking-wider text-slate-400">Birth of Buddha</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#intro"
        className="absolute bottom-8 z-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-[#D98A2B] transition-colors group"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll to Discover</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-600 group-hover:border-[#D98A2B] flex justify-center p-1">
          <div className="w-1 h-2 bg-[#D98A2B] rounded-full animate-bounce"></div>
        </div>
      </a>
    </section>
  );
};
