import React, { useState } from 'react';
import { DESTINATIONS } from '../../data/destinations';
import { Award, Landmark, X, CheckCircle2 } from 'lucide-react';
import type { Destination } from '../../types';
import { useModalBehavior } from '../../hooks/useModalBehavior';

export const UnescoSection: React.FC = () => {
  const unescoSites = DESTINATIONS.filter((d) => d.unesco || d.category === 'cultural' || d.category === 'spiritual');
  const [selectedSite, setSelectedSite] = useState<Destination | null>(null);

  useModalBehavior(!!selectedSite, () => setSelectedSite(null));

  return (
    <section id="heritage" className="relative w-full py-28 bg-[#070C14] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D98A2B]">
              <Award className="w-4 h-4 text-[#D98A2B]" />
              <span>Section 04 • Living Heritage</span>
            </div>

            <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-white tracking-tight">
              UNESCO <span className="text-gradient-gold">WORLD HERITAGE</span>
            </h2>

            <p className="font-editorial italic text-xl text-slate-300">
              "Seven sacred sites packed within a 15-kilometer radius in Kathmandu Valley, alongside Sagarmatha and Chitwan national treasures."
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0F192C] border border-[#D8C3A5]/20 flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-[#B83227]/20 flex items-center justify-center text-[#B83227] font-bold">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold font-cinzel text-white">4 Monuments</span>
              <p className="text-xs text-slate-400">Cultural & Natural UNESCO Complexes</p>
            </div>
          </div>
        </div>

        {/* UNESCO Sites Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {unescoSites.map((site) => (
            <div
              key={site.id}
              onClick={() => setSelectedSite(site)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedSite(site);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${site.name}`}
              className="group relative rounded-2xl overflow-hidden bg-[#0F192C] border border-slate-800 hover:border-[#D98A2B]/50 transition-all duration-500 cursor-pointer flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-[#D98A2B]"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={site.image}
                  alt={site.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F192C] via-transparent to-transparent"></div>
                
                {/* UNESCO Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#070C14]/90 backdrop-blur-md border border-amber-500/40 text-[10px] font-bold uppercase tracking-widest text-[#D98A2B] flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-[#D98A2B]" />
                  <span>UNESCO Site</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-bold text-[#D8C3A5] uppercase tracking-wider block mb-1">
                    {site.region}
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[#D98A2B] transition-colors">
                    {site.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {site.description}
                </p>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#D98A2B] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Explore Details & History →
                  </span>
                  <span className="text-xs text-slate-500">{site.elevation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal Pop-up */}
      {selectedSite && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedSite(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedSite.name}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-3xl bg-[#070C14] border border-[#D8C3A5]/30 overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto animate-scaleIn"
          >
            {/* Modal Header Image */}
            <div className="relative h-72">
              <img
                src={selectedSite.image}
                alt={selectedSite.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070C14] via-[#070C14]/40 to-transparent"></div>
              
              <button
                onClick={() => setSelectedSite(null)}
                aria-label="Close site details"
                className="absolute top-4 right-4 p-2 rounded-full bg-[#070C14]/80 text-white hover:bg-[#B83227] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-[#D98A2B] text-black text-[10px] font-extrabold uppercase tracking-widest mb-2 inline-block">
                  {selectedSite.nepaliName}
                </span>
                <h3 className="font-cinzel text-3xl font-bold text-white">
                  {selectedSite.name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="font-editorial italic text-xl text-[#D8C3A5]">
                "{selectedSite.tagline}"
              </p>

              <div className="text-sm text-slate-200 leading-relaxed space-y-3">
                <p>{selectedSite.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#D98A2B] mb-3">
                  Key Cultural & Architectural Highlights
                </h4>
                <div className="space-y-2">
                  {selectedSite.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400">Best Seasons:</span>
                  <div className="flex gap-2">
                    {selectedSite.bestSeason.map((season) => (
                      <span key={season} className="px-2.5 py-1 rounded bg-[#0F192C] border border-slate-700 text-xs text-[#D8C3A5]">
                        {season}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedSite(null)}
                  className="px-6 py-2.5 rounded-full bg-[#B83227] hover:bg-[#a02a20] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Close Explorer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
