import React, { useState } from 'react';
import { DESTINATIONS } from '../../data/destinations';
import type { Destination } from '../../types';
import { MapPin, Navigation } from 'lucide-react';

export const InteractiveNepalMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Destination>(DESTINATIONS[0]);

  // Coordinates normalized for custom vector map layout SVG
  const mapMarkers = [
    { id: 'kathmandu', x: 55, y: 55, name: 'Kathmandu' },
    { id: 'pokhara', x: 42, y: 48, name: 'Pokhara' },
    { id: 'everest-region', x: 72, y: 44, name: 'Everest (Khumbu)' },
    { id: 'annapurna-region', x: 38, y: 40, name: 'Annapurna' },
    { id: 'mustang', x: 34, y: 30, name: 'Upper Mustang' },
    { id: 'chitwan', x: 48, y: 65, name: 'Chitwan' },
    { id: 'lumbini', x: 32, y: 68, name: 'Lumbini' },
    { id: 'rara-lake', x: 18, y: 28, name: 'Rara Lake' },
    { id: 'ilam', x: 88, y: 62, name: 'Ilam' },
    { id: 'bandipur', x: 46, y: 52, name: 'Bandipur' },
  ];

  return (
    <section id="map" className="relative w-full py-28 bg-[#070C14] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D98A2B]">
            <Navigation className="w-4 h-4 text-[#D98A2B]" />
            <span>Section 12 • Geographic Explorer</span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-white tracking-tight">
            INTERACTIVE MAP OF <span className="text-[#D98A2B]">NEPAL</span>
          </h2>

          <p className="font-editorial italic text-xl text-slate-300">
            "Select any regional hotspot across Nepal’s topography to preview destinations, elevations, and best seasons."
          </p>
        </div>

        {/* Map & Preview Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Vector Map Canvas Box */}
          <div className="lg:col-span-7 relative rounded-3xl bg-[#0F192C] border border-[#D8C3A5]/20 p-6 sm:p-10 shadow-2xl min-h-[420px] flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between mb-4 z-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D8C3A5]">
                <MapPin className="w-4 h-4 text-[#B83227]" />
                <span>Nepal Regional Map (Hover or Tap Pin)</span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono">28.3949° N, 84.1240° E</span>
            </div>

            {/* Interactive Custom SVG Nepal Outline Map Container */}
            <div className="relative w-full h-[320px] my-auto flex items-center justify-center">
              
              {/* Abstract Map Background Silhouette SVG */}
              <svg viewBox="0 0 100 60" className="w-full h-full text-slate-800/40 fill-current filter drop-shadow-lg">
                <path d="M 5,25 Q 15,10 35,15 Q 55,8 75,20 Q 95,25 95,45 Q 85,58 65,55 Q 45,58 25,52 Q 10,50 5,25 Z" />
              </svg>

              {/* Topographical Himalayan Ridge Overlay Lines */}
              <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
                <div className="w-full h-full border-t-2 border-dashed border-[#D98A2B]"></div>
              </div>

              {/* Map Location Pins */}
              {mapMarkers.map((marker) => {
                const destData = DESTINATIONS.find((d) => d.id === marker.id) || DESTINATIONS[0];
                const isSelected = selectedLocation.id === marker.id;

                return (
                  <button
                    key={marker.id}
                    type="button"
                    style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                    onClick={() => setSelectedLocation(destData)}
                    aria-label={`Select ${marker.name} on map`}
                    aria-pressed={isSelected}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group p-1 -m-1"
                  >
                    {/* Ping Ring */}
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-full bg-[#B83227] opacity-75 animate-ping"></span>
                    )}

                    {/* Pin Button */}
                    <div className={`relative p-2.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                      isSelected
                        ? 'bg-[#B83227] text-white scale-125 shadow-lg shadow-[#B83227]/50'
                        : 'bg-[#070C14] text-[#D98A2B] border border-slate-700 hover:scale-110 hover:border-[#D98A2B]'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>

                    {/* Pin Label Tooltip */}
                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                      isSelected
                        ? 'bg-[#070C14] text-[#D98A2B] border border-[#D98A2B] opacity-100'
                        : 'bg-[#070C14]/80 text-slate-300 opacity-0 group-hover:opacity-100'
                    }`}>
                      {marker.name}
                    </div>
                  </button>
                );
              })}

            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-4 border-t border-slate-800">
              <span>Himalayan High Passes</span>
              <span>Subtropical Terai Lowlands</span>
            </div>
          </div>

          {/* Selected Location Information Drawer */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#070C14] border border-[#D8C3A5]/30 overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
              
              <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-800">
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070C14] via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D98A2B]">
                    {selectedLocation.region}
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-white">
                    {selectedLocation.name}
                  </h3>
                </div>
              </div>

              <p className="font-editorial italic text-lg text-[#D8C3A5]">
                "{selectedLocation.tagline}"
              </p>

              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {selectedLocation.description}
              </p>

              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                  Top Things to Do Here
                </span>
                <div className="space-y-1.5">
                  {selectedLocation.highlights.slice(0, 3).map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B83227]"></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-slate-500 block font-bold">Best Season</span>
                  <span className="text-xs font-semibold text-[#D98A2B]">{selectedLocation.bestSeason[0]}</span>
                </div>

                <a
                  href="#destinations"
                  className="px-5 py-2 rounded-full bg-[#B83227] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#a02a20] transition-colors"
                >
                  Explore Region →
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
