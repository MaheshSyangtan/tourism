import React, { useState } from 'react';
import { DESTINATIONS } from '../../data/destinations';
import type { Destination } from '../../types';
import { Compass, ArrowRight } from 'lucide-react';
import { useModalBehavior } from '../../hooks/useModalBehavior';

export const DestinationGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  useModalBehavior(!!selectedDestination, () => setSelectedDestination(null));

  const categories = [
    { id: 'all', label: 'All Destinations' },
    { id: 'mountain', label: 'Himalayan Peaks' },
    { id: 'cultural', label: 'Cultural & Heritage' },
    { id: 'wildlife', label: 'Jungle & Wildlife' },
    { id: 'spiritual', label: 'Spiritual Sacred' },
    { id: 'nature', label: 'Lakes & Tea Gardens' },
  ];

  const filteredDestinations = activeCategory === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.category === activeCategory);

  return (
    <section id="destinations" className="relative w-full py-28 bg-[#0F192C] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D98A2B]">
            <Compass className="w-4 h-4 text-[#D98A2B]" />
            <span>Iconic Destinations</span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-white tracking-tight">
            BEAUTIFUL PLACES OF <span className="text-[#D98A2B]">NEPAL</span>
          </h2>

          <p className="font-editorial italic text-xl text-slate-300">
            "From ancient medieval courtyards to alpine glacial lakes and tea mist hills — discover the extraordinary landscapes of Nepal."
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-linear-to-r from-[#B83227] to-[#D98A2B] text-white shadow-lg shadow-[#B83227]/20 scale-105'
                  : 'bg-[#070C14] text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => setSelectedDestination(dest)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedDestination(dest);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Explore ${dest.name}`}
              className="group relative rounded-3xl overflow-hidden bg-[#070C14] border border-[#D8C3A5]/15 hover:border-[#D98A2B]/60 transition-all duration-700 cursor-pointer flex flex-col justify-between h-120 shadow-xl hover:shadow-2xl hover:shadow-[#B83227]/20 focus-visible:outline-2 focus-visible:outline-[#D98A2B]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#070C14] via-[#070C14]/50 to-black/30 group-hover:via-[#070C14]/70 transition-all duration-500"></div>
              </div>

              {/* Top Card Badge */}
              <div className="relative z-10 p-6 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-[#070C14]/80 backdrop-blur-md border border-slate-700 text-[10px] font-bold uppercase tracking-widest text-[#D8C3A5]">
                  {dest.region}
                </span>

                <div className="w-10 h-10 rounded-full bg-[#070C14]/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-[#D98A2B] group-hover:border-[#D98A2B] transition-all">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Bottom Card Info Overlay */}
              <div className="relative z-10 p-6 space-y-3 transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="text-xs font-bold text-[#D98A2B] tracking-wider uppercase block">
                  {dest.nepaliName}
                </span>

                <h3 className="font-cinzel text-2xl font-bold text-white group-hover:text-[#D8C3A5] transition-colors">
                  {dest.name}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-light">
                  {dest.description}
                </p>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Elevation: {dest.elevation}</span>
                  <span className="text-[#D98A2B] font-semibold">EXPLORE →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Destination Modal Detail */}
      {selectedDestination && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedDestination(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedDestination.name}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-3xl bg-[#070C14] border border-[#D8C3A5]/30 overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto animate-scaleIn"
          >
            <div className="relative h-64 sm:h-80">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#070C14] via-[#070C14]/40 to-transparent"></div>
              
              <button
                onClick={() => setSelectedDestination(null)}
                aria-label="Close destination details"
                className="absolute top-4 right-4 px-4 py-2 rounded-full bg-[#070C14]/80 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#B83227] transition-colors"
              >
                Close ✕
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-[#D98A2B] text-black text-[10px] font-extrabold uppercase tracking-widest mb-2 inline-block">
                  {selectedDestination.region}
                </span>
                <h3 className="font-cinzel text-4xl font-bold text-white">
                  {selectedDestination.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="font-editorial italic text-xl sm:text-2xl text-[#D8C3A5]">
                "{selectedDestination.tagline}"
              </p>

              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedDestination.fullDescription}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#D98A2B] mb-3">
                  Top Experiences & Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedDestination.highlights.map((h, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#0F192C] border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B83227]"></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  <span className="font-bold text-white">Coordinates: </span>
                  {selectedDestination.coordinates.lat}° N, {selectedDestination.coordinates.lng}° E
                </div>

                <button
                  onClick={() => setSelectedDestination(null)}
                  className="px-6 py-2.5 rounded-full bg-[#B83227] text-white text-xs font-bold uppercase tracking-widest"
                >
                  Return to Exploration
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
