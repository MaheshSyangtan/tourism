import React, { useState } from 'react';
import { MOUNTAINS } from '../../data/mountains';
import type { Mountain } from '../../types';
import { Mountain as MountainIcon, Calendar, Users, ShieldAlert } from 'lucide-react';

export const MountainViewer: React.FC = () => {
  const [selectedMountain, setSelectedMountain] = useState<Mountain>(MOUNTAINS[0]);

  return (
    <section id="himalayas" className="relative w-full py-28 bg-[#070C14] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D98A2B]">
            <MountainIcon className="w-4 h-4 text-[#D98A2B]" />
            <span>Section 06 • The Roof of the World</span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-white tracking-tight">
            THE EIGHT-THOUSANDERS <span className="text-[#D98A2B]">& SACRED PEAKS</span>
          </h2>

          <p className="font-editorial italic text-xl text-slate-300">
            "Nepal contains eight of the fourteen highest 8,000-meter peaks on Planet Earth. Explore their elevation, history, and summits."
          </p>
        </div>

        {/* Mountain Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column — Mountain Selector List (horizontal snap scroller on mobile) */}
          <div className="lg:col-span-5">
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:overflow-x-visible lg:max-h-[600px] lg:pr-2 pb-2 lg:pb-0 no-scrollbar snap-x snap-mandatory lg:snap-none -mx-4 px-4 lg:mx-0 lg:px-0">
            {MOUNTAINS.map((m) => {
              const isSelected = m.id === selectedMountain.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMountain(m)}
                  className={`w-64 lg:w-full shrink-0 lg:shrink snap-start p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#0F192C] border-2 border-[#D98A2B] shadow-xl'
                      : 'bg-[#070C14]/80 border border-slate-800 hover:border-slate-600 hover:bg-[#0F192C]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-cinzel font-bold text-xs ${
                      m.rankWorld > 0 ? 'bg-[#B83227]/20 text-[#D8C3A5]' : 'bg-amber-500/20 text-[#D98A2B]'
                    }`}>
                      {m.rankWorld > 0 ? `#${m.rankWorld}` : '🔒'}
                    </div>

                    <div>
                      <h4 className={`font-cinzel text-sm font-bold ${isSelected ? 'text-[#D98A2B]' : 'text-white group-hover:text-[#D8C3A5]'}`}>
                        {m.name}
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        {m.elevationMeters.toLocaleString()} m ({m.elevationFeet.toLocaleString()} ft)
                      </p>
                    </div>
                  </div>

                  <span className={`text-xs font-semibold ${isSelected ? 'text-[#D98A2B]' : 'text-slate-500 group-hover:text-slate-300'}`}>
                    {isSelected ? 'ACTIVE' : 'VIEW →'}
                  </span>
                </button>
              );
            })}
            </div>
          </div>

          {/* Right Column — Active Mountain Detail Showcase Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0F192C] border border-[#D8C3A5]/20 overflow-hidden shadow-2xl space-y-6 p-6 sm:p-8">
              
              {/* Image Banner with Badge */}
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg border border-slate-800">
                <img
                  src={selectedMountain.image}
                  alt={selectedMountain.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F192C] via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#070C14]/90 backdrop-blur-md border border-slate-700 text-xs font-bold text-[#D98A2B]">
                    {selectedMountain.range}
                  </span>
                  {selectedMountain.rankWorld > 0 ? (
                    <span className="px-3 py-1 rounded-full bg-[#B83227] text-white text-xs font-extrabold uppercase tracking-wider">
                      Rank #{selectedMountain.rankWorld} World
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-extrabold uppercase tracking-wider flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      Sacred Forbidden Peak
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-semibold text-[#D8C3A5] uppercase tracking-widest block">
                    {selectedMountain.nepaliName}
                  </span>
                  <h3 className="font-cinzel text-3xl font-bold text-white">
                    {selectedMountain.name}
                  </h3>
                </div>
              </div>

              {/* Elevation Meter Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-[#D8C3A5]">Summit Elevation Bar</span>
                  <span className="text-white">{selectedMountain.elevationMeters} m / 8,848.86 m</span>
                </div>
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-[#1A365D] via-[#D98A2B] to-[#B83227] rounded-full transition-all duration-1000"
                    style={{ width: `${(selectedMountain.elevationMeters / 8848.86) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Details & Meaning */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#070C14] border border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#D98A2B] block mb-1">
                    Name Meaning
                  </span>
                  <p className="font-editorial italic text-lg text-white">
                    "{selectedMountain.meaning}"
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedMountain.description}
                </p>
              </div>

              {/* Mountaineering Fact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="p-4 rounded-xl bg-[#070C14] border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D98A2B] uppercase tracking-wider">
                    <Calendar className="w-4 h-4 text-[#D98A2B]" />
                    <span>First Ascent Date</span>
                  </div>
                  <p className="text-xs text-white font-semibold">{selectedMountain.firstAscent}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#070C14] border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#B83227] uppercase tracking-wider">
                    <Users className="w-4 h-4 text-[#B83227]" />
                    <span>Pioneer Climbers</span>
                  </div>
                  <p className="text-xs text-white font-semibold">{selectedMountain.firstClimbers}</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
