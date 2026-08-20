import React, { useState } from 'react';
import { FOOD_DISHES } from '../../data/food';
import type { FoodDish } from '../../types';
import { Utensils, Check } from 'lucide-react';

export const FoodSection: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<FoodDish>(FOOD_DISHES[0]);

  return (
    <section id="food" className="relative w-full py-28 bg-[#070C14] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D98A2B]">
            <Utensils className="w-4 h-4 text-[#D98A2B]" />
            <span>Section 10 • Gastronomic Heritage</span>
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-white tracking-tight">
            NEPALESE FLAVORS & <span className="text-gradient-gold">CUISINE</span>
          </h2>

          <p className="font-editorial italic text-xl text-slate-300">
            "From mountain teahouse fuel to medieval Newari feast platters — taste the authentic spices of Nepal."
          </p>
        </div>

        {/* Dish Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FOOD_DISHES.map((dish) => {
            const isSelected = dish.id === selectedDish.id;
            return (
              <div
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className={`group relative rounded-3xl overflow-hidden bg-[#0F192C] border transition-all duration-500 cursor-pointer flex flex-col justify-between h-96 ${
                  isSelected
                    ? 'border-2 border-[#D98A2B] shadow-2xl shadow-[#D98A2B]/20 scale-102'
                    : 'border-slate-800 hover:border-slate-600'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F192C] via-[#0F192C]/60 to-transparent"></div>
                </div>

                {/* Top Badge */}
                <div className="relative z-10 p-5 flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-[#070C14]/80 backdrop-blur-md border border-slate-700 text-[10px] font-bold uppercase tracking-widest text-[#D98A2B]">
                    {dish.type}
                  </span>
                  <span className="text-xs font-bold font-mono text-slate-300 bg-[#070C14]/80 px-2.5 py-1 rounded-full">
                    {dish.nepaliName}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="relative z-10 p-6 space-y-2">
                  <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[#D8C3A5]">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                  <div className="pt-2 text-[11px] font-semibold text-[#D98A2B] flex items-center gap-1">
                    <span>{isSelected ? 'VIEWING INGREDIENTS' : 'EXPLORE DISH →'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Dish Deep Dive Recipe Panel */}
        <div className="rounded-3xl bg-[#0F192C] border border-[#D8C3A5]/30 p-6 sm:p-10 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-[#D98A2B] uppercase tracking-widest block mb-1">
                Selected Culinary Feature ({selectedDish.type})
              </span>
              <h3 className="font-cinzel text-3xl font-bold text-white">
                {selectedDish.name} ({selectedDish.nepaliName})
              </h3>
            </div>
            <span className="px-4 py-2 rounded-xl bg-[#070C14] border border-slate-700 text-xs font-bold text-slate-200">
              Origin: {selectedDish.origin}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#D8C3A5]">
                Key Ingredients & Spices
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedDish.ingredients.map((ing, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-[#070C14] border border-slate-700 text-xs text-slate-200 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{ing}</span>
                  </span>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#070C14] border border-slate-800 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">Flavor Profile</span>
                <p className="text-xs text-[#D8C3A5] italic">{selectedDish.flavorProfile}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#D8C3A5]">
                Cultural Context & Teahouse Story
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed p-4 rounded-xl bg-[#070C14] border border-slate-800">
                {selectedDish.culturalContext}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
