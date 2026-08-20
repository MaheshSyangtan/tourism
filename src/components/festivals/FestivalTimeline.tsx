import React, { useState } from 'react';
import { FESTIVALS } from '../../data/festivals';
import type { Festival } from '../../types';
import { Sparkles, Flame } from 'lucide-react';

export const FestivalTimeline: React.FC = () => {
  const [selectedFestival, setSelectedFestival] = useState<Festival>(FESTIVALS[0]);

  return (
    <section id="festivals" className="relative w-full py-28 bg-[#0F192C] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D98A2B]">
            <Sparkles className="w-4 h-4 text-[#E5B23A]" />
            <span>Section 09 • Celebrations & Rituals</span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-white tracking-tight">
            FESTIVALS OF <span className="text-[#D98A2B]">NEPAL</span>
          </h2>

          <p className="font-editorial italic text-xl text-slate-300">
            "It is said that in Nepal, there are more temples than houses and more festival days than days of the year."
          </p>
        </div>

        {/* Festival Selection Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {FESTIVALS.map((fest) => {
            const isSelected = fest.id === selectedFestival.id;
            return (
              <button
                key={fest.id}
                onClick={() => setSelectedFestival(fest)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between h-32 relative overflow-hidden group last:col-span-2 sm:last:col-span-1 ${
                  isSelected
                    ? 'bg-[#070C14] border-2 border-[#D98A2B] shadow-xl scale-102'
                    : 'bg-[#070C14]/60 border border-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D8C3A5] block">
                    {fest.approximateMonth}
                  </span>
                  <h4 className="font-cinzel text-sm font-bold text-white mt-1 group-hover:text-[#D98A2B]">
                    {fest.name}
                  </h4>
                </div>

                <div className="z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">{fest.nepaliName}</span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: fest.colorAccent }}></span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Festival Feature Display */}
        <div className="rounded-3xl bg-[#070C14] border border-[#D8C3A5]/30 overflow-hidden shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Festival Image */}
            <div className="lg:col-span-5 relative h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-slate-800">
              <img
                src={selectedFestival.image}
                alt={selectedFestival.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070C14] via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#070C14]/80 backdrop-blur-md border border-slate-700 text-xs font-bold text-white">
                📍 {selectedFestival.regionContext}
              </div>
            </div>

            {/* Festival Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#D98A2B] uppercase tracking-widest block mb-1">
                  {selectedFestival.approximateMonth} ({selectedFestival.nepaliName})
                </span>
                <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                  {selectedFestival.name}
                </h3>
              </div>

              <p className="font-editorial italic text-xl text-[#D8C3A5]">
                "{selectedFestival.significance}"
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {selectedFestival.description}
              </p>

              {/* Rituals List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Sacred Rituals & Festive Customs
                </span>
                <div className="space-y-2">
                  {selectedFestival.rituals.map((r, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#0F192C] border border-slate-800 text-xs text-slate-200">
                      <Flame className="w-4 h-4 text-[#D98A2B] shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
