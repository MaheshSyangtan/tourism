import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import type { TravelItineraryResult } from '../../types';

interface TravelPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TravelPlannerModal: React.FC<TravelPlannerModalProps> = ({ isOpen, onClose }) => {
  const [duration, setDuration] = useState<number>(7);
  const [style, setStyle] = useState<string>('Cultural & Nature');
  const [season, setSeason] = useState<string>('Autumn');
  const [budget, setBudget] = useState<string>('Comfort');

  const [generatedItinerary, setGeneratedItinerary] = useState<TravelItineraryResult | null>(null);

  if (!isOpen) return null;

  const handleGenerate = () => {
    let title = '';
    let overview = '';
    let dailyPlan = [];

    if (duration === 7) {
      title = '7-Day Classic Golden Triangle of Nepal';
      overview = 'A popular week-long itinerary combining medieval UNESCO squares in Kathmandu, serene lakeside views in Pokhara, and jungle safaris in Chitwan National Park.';
      dailyPlan = [
        { day: 1, title: 'Arrival in Kathmandu', location: 'Kathmandu', description: 'Explore Thamel streets, welcome dinner with authentic Nepalese culture show.', activities: ['Thamel walk', 'Authentic Dal Bhat dinner'] },
        { day: 2, title: 'UNESCO Heritage Tour', location: 'Kathmandu Valley', description: 'Visit Swayambhunath (Monkey Temple), Patan Durbar Square & Boudhanath Stupa.', activities: ['Swayambhunath view', 'Patan museum', 'Boudhanath circumambulation'] },
        { day: 3, title: 'Scenic Flight/Drive to Pokhara', location: 'Pokhara', description: 'Arrive at lakeside, boat ride on Phewa Lake to Tal Barahi temple.', activities: ['Phewa lake boating', 'Lakeside dining'] },
        { day: 4, title: 'Sarangkot Sunrise & Pokhara Sights', location: 'Pokhara', description: 'Early morning Sarangkot view of Annapurna, Davis Falls & World Peace Pagoda.', activities: ['Sarangkot sunrise', 'World Peace Pagoda', 'Davis Falls'] },
        { day: 5, title: 'Drive to Chitwan National Park', location: 'Chitwan', description: 'Transfer to subtropical lowlands, Tharu village cultural stick dance.', activities: ['Tharu culture program', 'Sunset river view'] },
        { day: 6, title: 'Jungle Safari & Rhino Tracking', location: 'Chitwan', description: 'Jeep safari through national park, river canoe ride spotting Gharial crocodiles.', activities: ['Jeep safari', 'Rapti river canoeing'] },
        { day: 7, title: 'Return to Kathmandu & Departure', location: 'Kathmandu', description: 'Fly back to Kathmandu, souvenir shopping at Asan Bazaar before departure.', activities: ['Asan market tea & spice shopping', 'Departure'] },
      ];
    } else if (duration === 14) {
      title = '14-Day Himalayan Crest & Base Camp Expedition';
      overview = 'Comprehensive 2-week adventure traversing high mountain trails, Sherpa villages, Tengboche Monastery, and reaching Everest or Annapurna Base Camp.';
      dailyPlan = [
        { day: 1, title: 'Arrival & Permit Briefing', location: 'Kathmandu', description: 'Check equipment, process TIMS permits, gear fitting in Thamel.', activities: ['Briefing', 'Gear check'] },
        { day: 2, title: 'Flight to Lukla / Pokhara', location: 'Himalayan Gateway', description: 'Scenic mountain flight to trail starting point.', activities: ['Scenic flight', 'First trail leg'] },
        { day: 3, title: 'Ascent to Namche Bazaar / Ghandruk', location: 'High Trail', description: 'Trek along glacier-fed rivers and suspension bridges draped in prayer flags.', activities: ['Suspension bridge crossing', 'Teahouse stay'] },
        { day: 4, title: 'Acclimatization Day', location: 'Mountain Capital', description: 'Rest day with panorama hike to Everest View Hotel or Poon Hill.', activities: ['Acclimatization walk', 'Museum visit'] },
        { day: 5, title: 'Trek to Alpine Monasteries', location: 'High Elevation', description: 'Walk through pine forests facing Ama Dablam and Fishtail spires.', activities: ['Monastery evening chanting'] },
        { day: 6, title: 'Enter High Alpine Zone', location: 'Above Tree Line', description: 'Walk above 4,000 meters along glacial moraines.', activities: ['Alpine trail pacing'] },
        { day: 7, title: 'Reach Base Camp Milestone', location: 'Base Camp (5,364m / 4,130m)', description: 'Stand at the foot of world-famous 8,000m ice walls.', activities: ['Base Camp celebration', 'Glacier photography'] },
        { day: 8, title: 'Sunrise Viewpoint (Kala Patthar / Poon Hill)', location: 'Panorama Peak', description: '360° golden sunrise over Mount Everest and Dhaulagiri.', activities: ['Sunrise photography'] },
        { day: 9, title: 'Descent Trail Through Teahouse Villages', location: 'High Valley', description: 'Gradual descend celebrating successful summit views.', activities: ['Teahouse gathering'] },
        { day: 10, title: 'Return to Namche / Pokhara', location: 'Mountain Hub', description: 'Enjoy bakery treats and warm showers.', activities: ['Hot shower', 'Local bakery'] },
        { day: 11, title: 'Return Flight to Kathmandu', location: 'Kathmandu', description: 'Fly back to capital, spa massage for trekking legs.', activities: ['Ayurvedic massage'] },
        { day: 12, title: 'Bhaktapur & Changu Narayan', location: 'Bhaktapur', description: 'Medieval brick palace city & ancient stone inscriptions.', activities: ['Pottery square', 'Nyatapola pagoda'] },
        { day: 13, title: 'Pashupatinath & Free Day', location: 'Kathmandu', description: 'Evening Bagmati river Aarti fire ritual at Pashupatinath temple.', activities: ['Aarti ritual'] },
        { day: 14, title: 'Final Farewell Nepal', location: 'Kathmandu TIA', description: 'Transfer to airport with lifetime Himalayan memories.', activities: ['Departure'] }
      ];
    } else {
      title = '21-Day Ultimate Nepal Grand Traverse';
      overview = 'The ultimate 3-week journey spanning Upper Mustang Trans-Himalayan desert, Annapurna circuit, Chitwan wildlife, Lumbini Buddha birthplace, and Kathmandu Valley.';
      dailyPlan = [
        { day: 1, title: 'Grand Arrival & Preparation', location: 'Kathmandu', description: 'Full itinerary overview and dinner.', activities: ['Welcome dinner'] },
        { day: 2, title: 'Kathmandu Valley UNESCO Circuit', location: 'Kathmandu', description: 'Explore Boudhanath & Swayambhunath.', activities: ['Heritage tour'] },
        { day: 3, title: 'Scenic Drive to Bandipur', location: 'Bandipur', description: 'Preserved 18th-century Newari hilltop village.', activities: ['Cobblestone walk'] },
        { day: 4, title: 'Pokhara Lakeside & Peace Pagoda', location: 'Pokhara', description: 'Boat ride and mountain views.', activities: ['Lake boat ride'] },
        { day: 5, title: 'Flight to Jomsom & Upper Mustang Entry', location: 'Mustang', description: 'Enter rain-shadow Trans-Himalayan canyon.', activities: ['Jomsom walk'] },
        { day: 6, title: 'Explore Lo Manthang Walled City', location: 'Lo Manthang', description: '14th-century Buddhist monasteries and sky caves.', activities: ['Monastery tour'] },
        { day: 7, title: 'Muktinath Pilgrimage', location: 'Muktinath', description: '108 holy spouts Hindu & Buddhist sanctuary.', activities: ['Temple bath'] },
        { day: 8, title: 'Drive to Pokhara & Rest', location: 'Pokhara', description: 'Relax by Phewa Lake.', activities: ['Relaxation'] },
        { day: 9, title: 'Chitwan Jungle Safari', location: 'Chitwan', description: 'Rhino tracking and river safari.', activities: ['Jeep safari'] },
        { day: 10, title: 'Lumbini Buddha Birthplace', location: 'Lumbini', description: 'Maya Devi Temple & Monastic zone.', activities: ['Pilgrimage walk'] },
        { day: 11, title: 'Return to Kathmandu & Bhaktapur', location: 'Kathmandu Valley', description: 'Pottery square & evening feast.', activities: ['Bhaktapur feast'] },
        { day: 21, title: 'Final Farewell', location: 'Kathmandu TIA', description: 'Airport transfer.', activities: ['Departure'] }
      ];
    }

    setGeneratedItinerary({
      durationDays: duration,
      style,
      season,
      budget,
      title,
      overview,
      dailyPlan,
      essentialTips: [
        'Sample suggested itinerary; schedules can be tailored with licensed local agencies.',
        'Ensure travel insurance covers high-altitude rescue up to 6,000 meters.',
        'Carry sufficient Nepalese Rupee cash when traveling outside Kathmandu & Pokhara.'
      ]
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#070C14] border border-[#D8C3A5]/30 overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-[#0F192C]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#B83227] to-[#D98A2B] flex items-center justify-center text-white font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-xl font-bold text-white">Interactive Nepal Travel Planner</h3>
              <p className="text-xs text-slate-400">Build your customized suggested Himalayan itinerary</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-[#B83227] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Options Selection Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-2xl bg-[#0F192C] border border-slate-800">
            
            {/* Duration Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#D8C3A5] block">
                Trip Duration
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[7, 14, 21].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`py-2 rounded-lg text-xs font-bold transition-all ${
                      duration === d
                        ? 'bg-[#B83227] text-white'
                        : 'bg-[#070C14] text-slate-400 border border-slate-700 hover:text-white'
                    }`}
                  >
                    {d} Days
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Style */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#D8C3A5] block">
                Travel Style
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full py-2 px-3 rounded-lg bg-[#070C14] border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-[#D98A2B]"
              >
                <option value="Cultural & Nature">Cultural & Heritage</option>
                <option value="Alpine Trekking">Alpine Trekking & Hiking</option>
                <option value="Jungle & Wildlife">Jungle & Wildlife Safari</option>
                <option value="Grand Traverse">Grand Highlights Mix</option>
              </select>
            </div>

            {/* Travel Season */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#D8C3A5] block">
                Preferred Season
              </label>
              <select
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                className="w-full py-2 px-3 rounded-lg bg-[#070C14] border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-[#D98A2B]"
              >
                <option value="Autumn">Autumn (Sep–Nov)</option>
                <option value="Spring">Spring (Mar–May)</option>
                <option value="Winter">Winter (Dec–Feb)</option>
                <option value="Monsoon">Monsoon (Upper Mustang)</option>
              </select>
            </div>

            {/* Budget Comfort */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#D8C3A5] block">
                Travel Style Tier
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full py-2 px-3 rounded-lg bg-[#070C14] border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-[#D98A2B]"
              >
                <option value="Backpacker">Backpacker / Budget</option>
                <option value="Comfort">Comfort & Boutique</option>
                <option value="Luxury">Luxury Heritage & Heli</option>
              </select>
            </div>

          </div>

          <div className="flex justify-center">
            <button
              onClick={handleGenerate}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B83227] to-[#D98A2B] text-white font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-white" />
              Generate Suggested Itinerary
            </button>
          </div>

          {/* Generated Result Output */}
          {generatedItinerary && (
            <div className="space-y-6 pt-6 border-t border-slate-800 animate-fadeIn">
              <div className="p-6 rounded-2xl bg-[#0F192C] border border-[#D98A2B]/40 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D98A2B]">
                  Suggested {generatedItinerary.durationDays}-Day Itinerary
                </span>
                <h4 className="font-cinzel text-2xl font-bold text-white">
                  {generatedItinerary.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {generatedItinerary.overview}
                </p>
              </div>

              {/* Day by Day Cards */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Day-by-Day Journey Breakdown
                </h5>
                <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-2">
                  {generatedItinerary.dailyPlan.map((d) => (
                    <div key={d.day} className="p-4 rounded-xl bg-[#0F192C] border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#D98A2B] uppercase">
                          Day {d.day}: {d.title}
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold">{d.location}</span>
                      </div>
                      <p className="text-xs text-slate-300">{d.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-[11px] text-amber-200">
                ⚠️ Note: Suggested sample itinerary only. Flight timings and trek permits vary according to seasonal weather.
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
