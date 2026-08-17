import { useState } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { CinematicHero } from './components/hero/CinematicHero';
import { FactSheetSection } from './components/intro/FactSheetSection';
import { HistoricalTimeline } from './components/history/HistoricalTimeline';
import { UnescoSection } from './components/heritage/UnescoSection';
import { DestinationGallery } from './components/destinations/DestinationGallery';
import { MountainViewer } from './components/himalayas/MountainViewer';
import { TrekkingGuide } from './components/trekking/TrekkingGuide';
import { CultureSection } from './components/culture/CultureSection';
import { FestivalTimeline } from './components/festivals/FestivalTimeline';
import { FoodSection } from './components/food/FoodSection';
import { WildlifeSection } from './components/wildlife/WildlifeSection';
import { InteractiveNepalMap } from './components/map/InteractiveNepalMap';
import { SeasonSelector } from './components/seasons/SeasonSelector';
import { TravelPlannerModal } from './components/planner/TravelPlannerModal';
import { TravelInfoSection } from './components/practical/TravelInfoSection';
import { CinematicFooter } from './components/footer/CinematicFooter';

export function App() {
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070C14] text-slate-100 font-sans selection:bg-[#B83227] selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Navbar onOpenPlanner={() => setPlannerOpen(true)} />

      {/* Main Interactive Sections Journey */}
      <main>
        {/* Section 1: Cinematic Parallax Hero */}
        <CinematicHero onOpenPlanner={() => setPlannerOpen(true)} />

        {/* Section 2: Fact Sheet & Geography Intro */}
        <FactSheetSection />

        {/* Section 3: History Timeline ("A Journey Through Time") */}
        <HistoricalTimeline />

        {/* Section 4: UNESCO World Heritage */}
        <UnescoSection />

        {/* Section 5: Destination Discovery Grid */}
        <DestinationGallery />

        {/* Section 6: Himalayas Peak Elevation Inspector */}
        <MountainViewer />

        {/* Section 7: Trekking & Alpine Routes */}
        <TrekkingGuide />

        {/* Section 8: Culture, Arts & Ethnic Mosaic */}
        <CultureSection />

        {/* Section 9: Festivals Calendar & Rituals */}
        <FestivalTimeline />

        {/* Section 10: Nepalese Culinary Journey */}
        <FoodSection />

        {/* Section 11: Wildlife & Conservation Sanctuaries */}
        <WildlifeSection />

        {/* Section 12: Interactive Vector Map */}
        <InteractiveNepalMap />

        {/* Section 13: Seasonal Travel Activity Matrix */}
        <SeasonSelector />

        {/* Section 15 & 16: Practical Guide & Responsible Tourism */}
        <TravelInfoSection />
      </main>

      {/* Section 17 & Footer: Final Cinematic Ending */}
      <CinematicFooter onOpenPlanner={() => setPlannerOpen(true)} />

      {/* Interactive Trip Planner Modal */}
      <TravelPlannerModal isOpen={plannerOpen} onClose={() => setPlannerOpen(false)} />
    </div>
  );
}

export default App;
