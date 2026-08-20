import React, { useState } from 'react';
import { CULTURAL_COMMUNITIES } from '../../data/culture';
import type { CulturalCommunity } from '../../types';
import { Heart, Landmark } from 'lucide-react';

export const CultureSection: React.FC = () => {
  const [activeCommunity, setActiveCommunity] = useState<CulturalCommunity>(CULTURAL_COMMUNITIES[0]);

  return (
    <section id="culture" className="relative w-full py-28 bg-[#070C14] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D98A2B]">
            <Heart className="w-4 h-4 text-[#B83227]" />
            <span>Multi-Ethnic Mosaic</span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-white tracking-tight">
            CULTURE, ARTS & <span className="text-[#D98A2B]">HERITAGE</span>
          </h2>

          <p className="font-editorial italic text-xl text-slate-300">
            "Over 125 ethnic communities woven together by shared reverence for living goddesses, sacred mountains, and architectural harmony."
          </p>
        </div>

        {/* Ethnic Community Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CULTURAL_COMMUNITIES.map((c) => {
            const isActive = c.id === activeCommunity.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCommunity(c)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-[#B83227] text-white shadow-lg shadow-[#B83227]/30 scale-105'
                    : 'bg-[#0F192C] text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-white'
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>

        {/* Community Showcase Showcase Box */}
        <div className="rounded-3xl bg-[#0F192C] border border-[#D8C3A5]/20 overflow-hidden shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-md bg-[#070C14] border border-slate-700 text-xs font-bold text-[#D98A2B]">
                    Region: {activeCommunity.region}
                  </span>
                  <span className="text-xs text-slate-400">
                    Language: <strong className="text-white">{activeCommunity.language}</strong>
                  </span>
                </div>

                <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                  {activeCommunity.name}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {activeCommunity.description}
              </p>

              {/* Architecture Style */}
              <div className="p-4 rounded-xl bg-[#070C14] border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#D8C3A5] uppercase tracking-wider">
                  <Landmark className="w-4 h-4 text-[#D8C3A5]" />
                  <span>Architecture & Settlement Style</span>
                </div>
                <p className="text-xs text-slate-200">{activeCommunity.architectureStyle}</p>
              </div>

              {/* Heritage Highlights */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D98A2B] block">
                  Heritage Highlights & Traditions
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCommunity.heritageHighlights.map((h, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#070C14] border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B83227] mt-1 shrink-0"></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traditional Crafts */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Renowned Master Crafts
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCommunity.traditionalCrafts.map((craft) => (
                    <span key={craft} className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-[#D8C3A5]">
                      🎨 {craft}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 relative h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <img
                src={activeCommunity.image}
                alt={activeCommunity.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F192C] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#070C14]/80 backdrop-blur-md border border-slate-700">
                <span className="text-xs font-bold text-[#D98A2B] uppercase tracking-wider">Living Traditions</span>
                <h4 className="font-cinzel text-base text-white font-bold">{activeCommunity.name} Heritage</h4>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
