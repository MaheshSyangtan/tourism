import React, { useState } from 'react';
import { Sun, CloudRain, Wind, Snowflake, Camera, Mountain, Compass, Heart } from 'lucide-react';

export const SeasonSelector: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>('TREKKING');

  const seasons = [
    {
      id: 'spring',
      name: 'Spring (March – May)',
      tagline: 'Rhododendron Blooms & Mountain Visibility',
      icon: Sun,
      color: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
      description: 'Temperatures warm up, rhododendron forests bloom in vibrant red and pinks across mountain slopes. Ideal for high-altitude trekking.',
      recommendedActivities: ['TREKKING', 'MOUNTAINS', 'PHOTOGRAPHY', 'CULTURE'],
      bestRegions: ['Annapurna Conservation Area', 'Everest Base Camp', 'Langtang Valley', 'Ilam Tea Gardens']
    },
    {
      id: 'autumn',
      name: 'Autumn (September – November)',
      tagline: 'Peak Season: Crisp Skies & Festive Energy',
      icon: Wind,
      color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
      description: 'Clear blue post-monsoon skies offer panoramic mountain views. Nepal celebrates its biggest festivals (Dashain & Tihar).',
      recommendedActivities: ['TREKKING', 'CULTURE', 'WILDLIFE', 'MOUNTAINS', 'PHOTOGRAPHY'],
      bestRegions: ['Everest Base Camp', 'Annapurna Circuit', 'Kathmandu Durbar Square', 'Chitwan Safaris']
    },
    {
      id: 'winter',
      name: 'Winter (December – February)',
      tagline: 'Clear Lowland Skies & Snow Peaks',
      icon: Snowflake,
      color: 'text-sky-400 border-sky-500/40 bg-sky-500/10',
      description: 'Sub-zero temperatures in high mountains, but clear sunny days in Kathmandu and Pokhara. Excellent for jungle safaris and low hill treks.',
      recommendedActivities: ['WILDLIFE', 'CULTURE', 'PHOTOGRAPHY'],
      bestRegions: ['Chitwan National Park', 'Bandipur', 'Pokhara Lakeside', 'Kathmandu Valley', 'Ghorepani Poon Hill']
    },
    {
      id: 'monsoon',
      name: 'Monsoon / Summer (June – August)',
      tagline: 'Lush Terraces & Trans-Himalayan Deserts',
      icon: CloudRain,
      color: 'text-[#B83227] border-[#B83227]/40 bg-[#B83227]/10',
      description: 'Heavy rain in main hills, but rain-shadow desert regions like Upper Mustang and Manang remain dry and ideal for Tibetan culture exploration.',
      recommendedActivities: ['CULTURE', 'PHOTOGRAPHY'],
      bestRegions: ['Upper Mustang', 'Manang Valley', 'Lumbini Sacred Zone']
    }
  ];

  const activities = [
    { id: 'TREKKING', label: 'Trekking & Hiking', icon: Mountain },
    { id: 'CULTURE', label: 'Culture & Heritage', icon: Heart },
    { id: 'WILDLIFE', label: 'Jungle Safaris', icon: Compass },
    { id: 'MOUNTAINS', label: 'Peak Viewing', icon: Sun },
    { id: 'PHOTOGRAPHY', label: 'Photography', icon: Camera },
  ];

  return (
    <section id="seasons" className="relative w-full py-28 bg-[#0F192C] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D98A2B]">
            <Sun className="w-4 h-4 text-[#D98A2B]" />
            <span>Seasonal Travel Matrix</span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-white tracking-tight">
            BEST TIME TO <span className="text-[#D98A2B]">VISIT NEPAL</span>
          </h2>

          <p className="font-editorial italic text-xl text-slate-300">
            "Select your primary travel interest to see recommended seasons and regions."
          </p>
        </div>

        {/* Activity Interest Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {activities.map((act) => {
            const Icon = act.icon;
            const isSelected = selectedActivity === act.id;
            return (
              <button
                key={act.id}
                onClick={() => setSelectedActivity(act.id)}
                className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#B83227] to-[#D98A2B] text-white shadow-xl scale-105'
                    : 'bg-[#070C14] text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{act.label}</span>
              </button>
            );
          })}
        </div>

        {/* Seasons Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {seasons.map((season) => {
            const Icon = season.icon;
            const isRecommended = season.recommendedActivities.includes(selectedActivity);

            return (
              <div
                key={season.id}
                className={`rounded-3xl p-8 border transition-all duration-500 flex flex-col justify-between ${
                  isRecommended
                    ? 'bg-[#070C14] border-2 border-[#D98A2B] shadow-2xl shadow-[#D98A2B]/10'
                    : 'bg-[#070C14]/60 border-slate-800 opacity-80'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl border ${season.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-cinzel text-xl font-bold text-white">
                          {season.name}
                        </h3>
                        <p className="text-xs text-[#D8C3A5] italic">{season.tagline}</p>
                      </div>
                    </div>

                    {isRecommended && (
                      <span className="px-3 py-1 rounded-full bg-[#B83227] text-white text-[10px] font-extrabold uppercase tracking-widest animate-pulse">
                        RECOMMENDED
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {season.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80 mt-6 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D98A2B] block">
                    Ideal Regions to Visit
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {season.bestRegions.map((region) => (
                      <span key={region} className="px-3 py-1 rounded-lg bg-[#0F192C] border border-slate-800 text-xs text-slate-200">
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
