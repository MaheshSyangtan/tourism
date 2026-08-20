import React from 'react';
import { Globe, Shield, Feather, Mountain } from 'lucide-react';

export const FactSheetSection: React.FC = () => {
  return (
    <section id="intro" className="relative w-full py-28 bg-[#070C14] border-b border-slate-800/60 overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A365D]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B83227]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column — Editorial Heading */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D98A2B]">
              <span className="w-8 h-[2px] bg-[#D98A2B]"></span>
              <span>Section 02 • Introduction</span>
            </div>

            <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              A SMALL COUNTRY WITH A <span className="text-gradient-crimson">HUGE STORY.</span>
            </h2>

            <p className="font-editorial italic text-2xl text-[#D8C3A5] font-light leading-relaxed">
              Nestled between the high Himalayan range and the plains of South Asia, Nepal spans just 147,516 km² — yet encapsulates the greatest topographical variation on Earth.
            </p>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed font-sans">
              <p>
                From the tropical lowlands of the Terai at 59 meters above sea level to the icy summit of Mount Everest at 8,848.86 meters, Nepal’s land mass rises sharply across a distance of barely 200 kilometers.
              </p>
              <p>
                Within this vertical sanctuary live over 125 distinct ethnic groups, speaking 123 languages, preserving medieval brick courtyards, living goddesses, and sacred Buddhist monasteries alongside wild Bengal tigers and snow leopards.
              </p>
            </div>

            {/* Quick Country Fact Pills */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0F192C] border border-slate-800 flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#D98A2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white">Location</h4>
                  <p className="text-xs text-slate-400">South Asia (Between India & China)</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F192C] border border-slate-800 flex items-start gap-3">
                <Mountain className="w-5 h-5 text-[#B83227] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white">Highest Point</h4>
                  <p className="text-xs text-slate-400">Mt. Everest (8,848.86 m)</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F192C] border border-slate-800 flex items-start gap-3">
                <Feather className="w-5 h-5 text-[#E5B23A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white">Capital</h4>
                  <p className="text-xs text-slate-400">Kathmandu (Pop. ~1.5 Million)</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F192C] border border-slate-800 flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white">Sovereignty</h4>
                  <p className="text-xs text-slate-400">Never Colonized in History</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Visual Imagery Card Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D8C3A5]/20 group">
                <img
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop"
                  alt="Kathmandu Durbar Square Temple Architecture"
                  loading="lazy"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070C14] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#070C14]/80 backdrop-blur-md border border-slate-700/60">
                  <span className="text-xs font-bold text-[#D98A2B] uppercase tracking-wider">Kathmandu Valley</span>
                  <h3 className="font-cinzel text-lg text-white font-bold">Living Pagoda Architecture</h3>
                  <p className="text-xs text-slate-300 mt-1">Carved wooden struts & ancient brick squares dating back to the Malla Kings.</p>
                </div>
              </div>

              {/* Floating Secondary Image Badge */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-48 sm:w-56 rounded-xl overflow-hidden shadow-2xl border border-[#D98A2B]/40 hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop"
                  alt="Pokhara Phewa Lake reflection"
                  loading="lazy"
                  className="w-full h-36 object-cover"
                />
                <div className="p-2.5 bg-[#070C14] text-[11px] font-semibold text-slate-200 text-center">
                  Pokhara & Annapurna Reflection
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
