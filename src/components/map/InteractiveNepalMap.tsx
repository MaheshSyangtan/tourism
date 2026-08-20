import React, { useState, useMemo } from 'react';
import { DESTINATIONS } from '../../data/destinations';
import type { Destination } from '../../types';
import { MapPin, Navigation } from 'lucide-react';

// Simplified Nepal border outline as [lng, lat] pairs (clockwise from western tip).
// Derived from public-domain boundary data, reduced to ~35 vertices.
const NEPAL_BORDER: [number, number][] = [
  [80.06, 29.55], [80.40, 29.90], [80.90, 30.20], [81.30, 30.35],
  [81.90, 30.40], [82.40, 30.10], [82.90, 29.70], [83.40, 29.40],
  [83.90, 29.20], [84.40, 28.90], [84.90, 28.70], [85.40, 28.60],
  [85.90, 28.40], [86.40, 28.10], [86.90, 27.90], [87.40, 27.70],
  [87.90, 27.40], [88.20, 27.10], [88.15, 26.80], [88.00, 26.55],
  [87.60, 26.40], [87.10, 26.50], [86.50, 26.60], [85.90, 26.70],
  [85.30, 26.80], [84.70, 27.00], [84.10, 27.20], [83.50, 27.40],
  [82.90, 27.60], [82.30, 27.80], [81.70, 28.10], [81.10, 28.40],
  [80.60, 28.80], [80.20, 29.20],
];

// Nepal bounding box used for projection
const LNG_MIN = 80.0, LNG_MAX = 88.2, LAT_MIN = 26.3, LAT_MAX = 30.5;

// Project real lat/lng into percentage coordinates within the map container
const project = (lat: number, lng: number) => ({
  x: ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * 100,
  y: ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * 100,
});

export const InteractiveNepalMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Destination>(DESTINATIONS[0]);

  // Build the SVG outline path from real border coordinates
  const outlinePath = useMemo(() => {
    const pts = NEPAL_BORDER.map(([lng, lat]) => {
      const { x, y } = project(lat, lng);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    return `M ${pts.join(' L ')} Z`;
  }, []);

  // Pin positions derived from actual destination coordinates
  const mapMarkers = useMemo(() => {
    return DESTINATIONS.map((dest) => {
      const { x, y } = project(dest.coordinates.lat, dest.coordinates.lng);
      return { id: dest.id, x, y, name: dest.name };
    });
  }, []);

  return (
    <section id="map" className="relative w-full py-28 bg-[#070C14] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D98A2B]">
            <Navigation className="w-4 h-4 text-[#D98A2B]" />
            <span>Geographic Explorer</span>
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

            {/* Interactive SVG Nepal Outline Map Container */}
            <div className="relative w-full h-[320px] my-auto flex items-center justify-center">
              
              {/* Nepal country outline projected from real border coordinates */}
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
                <path
                  d={outlinePath}
                  className="fill-[#1A365D]/25 stroke-[#D8C3A5]/40"
                  strokeWidth="0.4"
                  strokeLinejoin="round"
                />
              </svg>

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
