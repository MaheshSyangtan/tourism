export interface Destination {
  id: string;
  name: string;
  nepaliName: string;
  region: string;
  elevation: string;
  tagline: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  bestSeason: string[];
  image: string;
  gallery: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  unesco?: boolean;
  category: 'cultural' | 'mountain' | 'wildlife' | 'spiritual' | 'nature';
}

export interface HistoricalEvent {
  id: string;
  period: string;
  era: string;
  yearRange: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  significance: string;
  keyFigures: string[];
  location: string;
  image: string;
  iconName: string;
}

export interface Mountain {
  id: string;
  name: string;
  nepaliName: string;
  meaning: string;
  elevationMeters: number;
  elevationFeet: number;
  rankWorld: number;
  range: string;
  firstAscent: string;
  firstClimbers: string;
  description: string;
  image: string;
  difficulty: 'Extreme' | 'Challenging' | 'Technical' | 'Iconic Trekking';
}

export interface TrekRoute {
  id: string;
  name: string;
  region: string;
  durationDays: string;
  maxElevationMeters: number;
  difficulty: 'Easy' | 'Moderate' | 'Strenuous' | 'Challenging' | 'Extreme';
  bestSeasons: string[];
  startPoint: string;
  endPoint: string;
  permitsRequired: string[];
  highlights: string[];
  description: string;
  altitudePreparation: string;
  image: string;
}

export interface CulturalCommunity {
  id: string;
  name: string;
  region: string;
  language: string;
  heritageHighlights: string[];
  traditionalCrafts: string[];
  architectureStyle: string;
  description: string;
  image: string;
}

export interface Festival {
  id: string;
  name: string;
  nepaliName: string;
  monthTiming: string;
  approximateMonth: string;
  significance: string;
  rituals: string[];
  regionContext: string;
  description: string;
  image: string;
  colorAccent: string;
}

export interface FoodDish {
  id: string;
  name: string;
  nepaliName: string;
  type: 'Staple' | 'Snack' | 'Festive' | 'Dessert' | 'Beverage';
  origin: string;
  ingredients: string[];
  flavorProfile: string;
  culturalContext: string;
  description: string;
  image: string;
}

export interface WildlifeSpecies {
  id: string;
  name: string;
  scientificName: string;
  status: 'Endangered' | 'Vulnerable' | 'Near Threatened' | 'Protected';
  habitat: string;
  parksFoundIn: string[];
  description: string;
  image: string;
}

export interface PracticalInfo {
  category: string;
  title: string;
  icon: string;
  items: {
    label: string;
    value: string;
    details?: string;
  }[];
}

export interface TravelItineraryResult {
  durationDays: number;
  style: string;
  season: string;
  budget: string;
  title: string;
  overview: string;
  dailyPlan: {
    day: number;
    title: string;
    location: string;
    description: string;
    activities: string[];
  }[];
  essentialTips: string[];
}
