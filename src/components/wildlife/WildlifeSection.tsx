import React, { useState } from 'react';
import { WILDLIFE_SPECIES } from '../../data/wildlife';
import type { WildlifeSpecies } from '../../types';
import { Trees, MapPin } from 'lucide-react';

export const WildlifeSection: React.FC = () => {
  const [selectedSpecies, setSelectedSpecies] = useState<WildlifeSpecies>(WILDLIFE_SPECIES[0]);

  return (
    <section id="wildlife" className="relative w-full py-28 bg-[#0F192C] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
            <Trees className="w-4 h-4 text-emerald-400" />
            <span>Section 11 • Wild Sanctuaries</span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-white tracking-tight">
            WILDLIFE & <span className="text-gradient-gold">ECOLOGICAL DIVERSITY</span>
          </h2>

          <p className="font-editorial italic text-xl text-slate-300">
            "From dense subtropical jungles of the Terai to snowbound alpine crags — meet Nepal’s protected wildlife species."
          </p>
        </div>

        {/* Species Selector Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-12">
          {WILDLIFE_SPECIES.map((sp) => {
            const isSelected = sp.id === selectedSpecies.id;
            return (
              <button
                key={sp.id}
                onClick={() => setSelectedSpecies(sp)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between h-36 relative overflow-hidden group last:col-span-2 sm:last:col-span-1 ${
                  isSelected
                    ? 'bg-[#070C14] border-2 border-emerald-500 shadow-xl scale-102'
                    : 'bg-[#070C14]/60 border border-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="z-10">
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-[9px] font-bold text-emerald-400 uppercase tracking-widest inline-block mb-1">
                    {sp.status}
                  </span>
                  <h4 className="font-cinzel text-xs font-bold text-white group-hover:text-emerald-400 line-clamp-1">
                    {sp.name}
                  </h4>
                </div>

                <div className="z-10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="italic font-serif line-clamp-1">{sp.scientificName}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Species Feature Card */}
        <div className="rounded-3xl bg-[#070C14] border border-[#D8C3A5]/30 overflow-hidden shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 relative h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-slate-800">
              <img
                src={selectedSpecies.image}
                alt={selectedSpecies.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070C14] via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-700 text-xs font-bold text-emerald-400">
                Conservation Status: {selectedSpecies.status}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 italic block mb-1">
                  {selectedSpecies.scientificName}
                </span>
                <h3 className="font-cinzel text-3xl font-bold text-white">
                  {selectedSpecies.name}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-[#0F192C] border border-slate-800 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Habitat</span>
                <p className="text-xs text-white">{selectedSpecies.habitat}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {selectedSpecies.description}
              </p>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Protected Parks & Sanctuaries
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedSpecies.parksFoundIn.map((park) => (
                    <span key={park} className="px-3 py-1 rounded-lg bg-[#0F192C] border border-slate-800 text-xs text-emerald-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{park}</span>
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
