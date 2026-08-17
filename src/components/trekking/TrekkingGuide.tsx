import React, { useState } from 'react';
import { TREK_ROUTES } from '../../data/treks';
import type { TrekRoute } from '../../types';
import { Footprints, Shield, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const TrekkingGuide: React.FC = () => {
  const [selectedTrek, setSelectedTrek] = useState<TrekRoute>(TREK_ROUTES[0]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case 'Moderate': return 'bg-sky-500/20 text-sky-400 border-sky-500/40';
      case 'Strenuous': return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
      case 'Challenging': return 'bg-[#B83227]/20 text-[#D8C3A5] border-[#B83227]/40';
      default: return 'bg-purple-500/20 text-purple-400 border-purple-500/40';
    }
  };

  return (
    <section id="treks" className="relative w-full py-28 bg-[#0F192C] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D98A2B]">
            <Footprints className="w-4 h-4 text-[#D98A2B]" />
            <span>Section 07 • Alpine Expeditions</span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-white tracking-tight">
            TREKKING & <span className="text-gradient-gold">HIMALAYAN TRAILS</span>
          </h2>

          <p className="font-editorial italic text-xl text-slate-300">
            "Walk through rhododendron forests, suspension bridges, high alpine passes, and legendary tea house hospitality."
          </p>
        </div>

        {/* Trek Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {TREK_ROUTES.map((trek) => {
            const isSelected = trek.id === selectedTrek.id;
            return (
              <div
                key={trek.id}
                onClick={() => setSelectedTrek(trek)}
                className={`group relative rounded-3xl overflow-hidden bg-[#070C14] border transition-all duration-500 cursor-pointer flex flex-col justify-between p-6 ${
                  isSelected
                    ? 'border-2 border-[#D98A2B] shadow-2xl shadow-[#D98A2B]/10 scale-102'
                    : 'border-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#D98A2B] uppercase tracking-wider">
                      {trek.region}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${getDifficultyColor(trek.difficulty)}`}>
                      {trek.difficulty}
                    </span>
                  </div>

                  {/* Title & Specs */}
                  <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[#D8C3A5] transition-colors">
                    {trek.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-slate-800/80">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Duration</span>
                      <span className="font-semibold text-slate-200">{trek.durationDays}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Max Elevation</span>
                      <span className="font-semibold text-white">{trek.maxElevationMeters} m</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {trek.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-semibold">
                  <span className={`${isSelected ? 'text-[#D98A2B]' : 'text-slate-400 group-hover:text-white'}`}>
                    {isSelected ? 'ACTIVE ROUTE' : 'SELECT ROUTE →'}
                  </span>
                  <span className="text-slate-500">{trek.startPoint}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Trek Comprehensive Specs Panel */}
        <div className="rounded-3xl bg-[#070C14] border border-[#D8C3A5]/30 p-6 sm:p-10 space-y-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-[#D98A2B] uppercase tracking-widest block mb-1">
                Detailed Route Breakdown
              </span>
              <h3 className="font-cinzel text-3xl font-bold text-white">
                {selectedTrek.name}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-xl bg-[#0F192C] border border-slate-800 text-center">
                <span className="text-[10px] uppercase text-slate-400 block font-bold">Start / End</span>
                <span className="text-xs font-bold text-white">{selectedTrek.startPoint}</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-[#0F192C] border border-slate-800 text-center">
                <span className="text-[10px] uppercase text-slate-400 block font-bold">Peak Altitude</span>
                <span className="text-xs font-bold text-[#D98A2B]">{selectedTrek.maxElevationMeters} m</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Highlights List */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#D8C3A5]">
                Trail Highlights & Landmarks
              </h4>
              <div className="space-y-2.5">
                {selectedTrek.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#0F192C] border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 leading-normal">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation & Permits */}
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-[#0F192C] border border-amber-500/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#D98A2B] uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-[#D98A2B]" />
                  <span>Altitude & Acclimatization Safety</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedTrek.altitudePreparation}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0F192C] border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#D8C3A5] uppercase tracking-wider">
                  <Shield className="w-4 h-4 text-[#D8C3A5]" />
                  <span>Permits Required</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedTrek.permitsRequired.map((permit) => (
                    <span key={permit} className="px-3 py-1 rounded bg-[#070C14] border border-slate-700 text-xs text-slate-200">
                      {permit}
                    </span>
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
