import React, { useState } from 'react';
import { HISTORICAL_TIMELINE } from '../../data/history';
import { Crown, Sparkles, Castle, Shield, Landmark, Globe, MapPin } from 'lucide-react';

export const HistoricalTimeline: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(HISTORICAL_TIMELINE[0].id);

  const activeEvent = HISTORICAL_TIMELINE.find((e) => e.id === activeId) || HISTORICAL_TIMELINE[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown': return <Crown className="w-5 h-5 text-[#D98A2B]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#E5B23A]" />;
      case 'Castle': return <Castle className="w-5 h-5 text-[#B83227]" />;
      case 'Shield': return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-indigo-400" />;
      default: return <Globe className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="history" className="relative w-full py-28 bg-[#0F192C] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D98A2B]">
            <span className="w-8 h-[2px] bg-[#D98A2B]"></span>
            <span>Section 03 • Chronicles of Nepal</span>
            <span className="w-8 h-[2px] bg-[#D98A2B]"></span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-white tracking-tight">
            A JOURNEY <span className="text-[#D98A2B]">THROUGH TIME</span>
          </h2>

          <p className="font-editorial italic text-xl text-slate-300">
            "Trace three millennia of kings, stone artisans, high mountain traders, and peaceful democratic movements."
          </p>
        </div>

        {/* Interactive Timeline Controls Bar */}
        <div className="relative mb-12">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-800 transform -translate-y-1/2 z-0 hidden md:block"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 relative z-10">
            {HISTORICAL_TIMELINE.map((event) => {
              const isActive = event.id === activeId;
              return (
                <button
                  key={event.id}
                  onClick={() => setActiveId(event.id)}
                  className={`group relative p-4 rounded-xl text-left transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#070C14] border-2 border-[#D98A2B] shadow-xl shadow-[#D98A2B]/10 scale-105'
                      : 'bg-[#070C14]/60 border border-slate-800 hover:border-slate-600 hover:bg-[#070C14]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${isActive ? 'text-[#D98A2B]' : 'text-slate-400'}`}>
                      {event.yearRange}
                    </span>
                    <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#D98A2B]/20' : 'bg-slate-900'}`}>
                      {getIcon(event.iconName)}
                    </div>
                  </div>
                  
                  <h4 className={`font-cinzel text-xs font-bold line-clamp-1 ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {event.period}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Timeline Feature Showcase */}
        <div className="rounded-3xl bg-[#070C14] border border-[#D8C3A5]/20 overflow-hidden shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Image Side */}
            <div className="lg:col-span-5 relative h-72 lg:h-auto min-h-[350px]">
              <img
                src={activeEvent.image}
                alt={activeEvent.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070C14] via-[#070C14]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#070C14]"></div>
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#070C14]/80 backdrop-blur-md border border-slate-700 text-xs font-bold text-[#D8C3A5]">
                <MapPin className="w-3.5 h-3.5 text-[#B83227]" />
                <span>{activeEvent.location}</span>
              </div>
            </div>

            {/* Right Details Side */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-[#B83227]/20 border border-[#B83227]/40 text-[#D8C3A5] font-mono text-xs font-bold">
                    {activeEvent.era}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#D98A2B] font-semibold">
                    {activeEvent.period}
                  </span>
                </div>

                <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {activeEvent.title}
                </h3>

                <p className="font-editorial italic text-xl text-[#D8C3A5] font-light">
                  {activeEvent.subtitle}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {activeEvent.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-2.5 pt-2">
                  {activeEvent.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D98A2B] mt-2 shrink-0"></div>
                      <span className="text-xs text-slate-300 leading-normal">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metadata Bar */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Historical Significance
                  </span>
                  <p className="text-xs text-[#D8C3A5] italic">{activeEvent.significance}</p>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Key Rulers / Figures
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeEvent.keyFigures.map((figure) => (
                      <span key={figure} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                        {figure}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
