import React from 'react';
import { PRACTICAL_INFO, RESPONSIBLE_TOURISM_PLEDGE } from '../../data/travelGuide';
import { FileText, CreditCard, ShieldCheck, Wifi, HeartPulse, Heart, Compass, CheckCircle2 } from 'lucide-react';

export const TravelInfoSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-5 h-5 text-[#D98A2B]" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5 text-[#B83227]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Wifi': return <Wifi className="w-5 h-5 text-sky-400" />;
      default: return <HeartPulse className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="guide" className="relative w-full py-28 bg-[#070C14] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* SECTION 15: PRACTICAL TRAVEL INFORMATION */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D98A2B]">
              <Compass className="w-4 h-4 text-[#D98A2B]" />
              <span>Essential Travel Guide</span>
            </div>

            <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-white tracking-tight">
              PRACTICAL <span className="text-[#D98A2B]">TRAVEL INFORMATION</span>
            </h2>

            <p className="font-editorial italic text-xl text-slate-300">
              "Essential visa, currency, permit, and altitude safety facts for planning your trip to Nepal."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICAL_INFO.map((info) => (
              <div key={info.category} className="rounded-3xl bg-[#0F192C] border border-slate-800 p-6 space-y-6 shadow-xl hover:border-[#D98A2B]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#070C14] border border-slate-700">
                    {getIcon(info.icon)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D98A2B]">
                      {info.category}
                    </span>
                    <h3 className="font-cinzel text-lg font-bold text-white">
                      {info.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800">
                  {info.items.map((item, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        {item.label}
                      </span>
                      <p className="text-xs text-white font-medium leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 16: RESPONSIBLE TOURISM */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0F192C] via-[#16243E] to-[#0F192C] border border-[#D8C3A5]/20 p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B83227]">
              <Heart className="w-4 h-4 text-[#B83227]" />
              <span>Responsible Tourism</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
              TRAVEL WITH <span className="text-[#D98A2B]">RESPECT</span>
            </h2>

            <p className="font-editorial italic text-xl text-[#D8C3A5]">
              "Leave only footprints, take only photographs, and support the indigenous communities of Nepal."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {RESPONSIBLE_TOURISM_PLEDGE.map((pledge, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#070C14]/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold font-cinzel text-[#D98A2B]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{pledge.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {pledge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
