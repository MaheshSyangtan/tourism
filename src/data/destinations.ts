import type { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'kathmandu',
    name: 'Kathmandu Valley',
    nepaliName: 'काठमाडौँ उपत्यका',
    region: 'Central Nepal',
    elevation: '1,400 m (4,593 ft)',
    tagline: 'The Living Museum of Ancient Temples & Royal Squares',
    description: 'A vibrant metropolis where medieval brick alleys lead to stupas adorned with Buddha’s watchful eyes and sacred temple courtyards.',
    fullDescription: 'Kathmandu Valley comprises three ancient royal cities: Kathmandu, Patan, and Bhaktapur. Together they host seven individual UNESCO World Heritage sites, including sacred Hindu shrine Pashupatinath and the colossal Buddhist stupa of Boudhanath.',
    highlights: [
      'Kathmandu Durbar Square & Kumari Ghar (Living Goddess)',
      'Boudhanath Stupa — Heart of Tibetan Buddhism',
      'Swayambhunath (Monkey Temple) panoramic views',
      'Pashupatinath Temple on the banks of Bagmati River',
      'Bustling Thamel streets & artisan workshops'
    ],
    bestSeason: ['Autumn (Sep–Nov)', 'Spring (Mar–May)'],
    image: 'https://images.unsplash.com/photo-1588590484083-d5658763574c?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1588590484083-d5658763574c?q=80&w=1200',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200',
      'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1200'
    ],
    coordinates: { lat: 27.7172, lng: 85.3240 },
    unesco: true,
    category: 'cultural'
  },
  {
    id: 'pokhara',
    name: 'Pokhara',
    nepaliName: 'पोखरा',
    region: 'Gandaki Province',
    elevation: '822 m (2,697 ft)',
    tagline: 'Lakeside Serenity Against the Annapurna Reflection',
    description: 'Nepal’s adventure capital, offering serene reflections of Machhapuchhre (Fishtail Peak) on Phewa Lake and the gateway to the Annapurna Sanctuary.',
    fullDescription: 'Surrounded by snow-capped Himalayan peaks, Pokhara provides a relaxing climate contrasted with high-octane adventure: paragliding off Sarangkot, ultra-light flights, kayaking, and starting point for world-renowned treks.',
    highlights: [
      'Sunrise over Annapurna range from Sarangkot',
      'Wooden boat rides on calm Phewa Lake to Tal Barahi',
      'World Peace Pagoda atop Anadu Hill',
      'Davis Falls (Patale Chhango) & Gupteshwor Cave',
      'International Mountain Museum'
    ],
    bestSeason: ['Autumn (Sep–Nov)', 'Spring (Mar–May)'],
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1200',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200'
    ],
    coordinates: { lat: 28.2096, lng: 83.9856 },
    unesco: false,
    category: 'nature'
  },
  {
    id: 'everest-region',
    name: 'Everest Region (Khumbu)',
    nepaliName: 'सोलुखुम्बु / सगरमाथा',
    region: 'Eastern Himalayas',
    elevation: '2,800 m – 8,848.86 m',
    tagline: 'Home to Mt. Everest & Sherpa Alpine Culture',
    description: 'The roof of the world, where ancient Buddhist monasteries cling to cliff faces and prayer flags wave along high alpine mountain passes.',
    fullDescription: 'Located within Sagarmatha National Park, the Khumbu region is world-renowned for iconic high-altitude trails, Namche Bazaar Sherpa capital, Tengboche Monastery, Kala Patthar viewpoint, and Everest Base Camp.',
    highlights: [
      'Everest Base Camp (5,364 m) & Kala Patthar (5,545 m)',
      'Namche Bazaar — Sherpa capital hub',
      'Tengboche Monastery with Everest backdrop',
      'Gokyo Lakes & Gokyo Ri panoramic views',
      'Suspension bridges over Dudh Koshi River'
    ],
    bestSeason: ['Spring (Mar–May)', 'Autumn (Oct–Nov)'],
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
    ],
    coordinates: { lat: 27.9881, lng: 86.9250 },
    unesco: true,
    category: 'mountain'
  },
  {
    id: 'annapurna-region',
    name: 'Annapurna Sanctuary',
    nepaliName: 'अन्नपूर्ण संरक्षण क्षेत्र',
    region: 'Central Himalayas',
    elevation: '1,000 m – 8,091 m',
    tagline: 'Diverse Eco-Zones from Subtropical Valleys to Ice Glaciers',
    description: 'One of the world’s most versatile trekking zones, winding through terraced green hills, rhododendron forests, and amphitheaters of 8,000-meter giants.',
    fullDescription: 'Protected under the Annapurna Conservation Area Project (ACAP), this region ranges from lush bamboo ravines to Thorong La Pass at 5,416m, providing rich encounters with Gurung, Magar, and Manangi mountain communities.',
    highlights: [
      'Annapurna Base Camp (4,130 m) 360° mountain cirque',
      'Poon Hill sunrise panorama over Dhaulagiri & Annapurna',
      'Jhinu Danda natural riverside hot springs',
      'Thorong La Pass (5,416 m) high altitude crossing',
      'Blooming crimson rhododendron forests in April'
    ],
    bestSeason: ['Autumn (Sep–Nov)', 'Spring (Mar–May)'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200'
    ],
    coordinates: { lat: 28.5355, lng: 83.8780 },
    unesco: false,
    category: 'mountain'
  },
  {
    id: 'mustang',
    name: 'Upper Mustang',
    nepaliName: 'मुस्ताङ / लो मन्थाङ',
    region: 'Trans-Himalayan Plateau',
    elevation: '2,800 m – 3,840 m',
    tagline: 'The Last Forbidden Kingdom of Ancient Tibetan Culture',
    description: 'A rain-shadow desert landscape featuring wind-carved red clay canyons, sky caves, medieval walled city Lo Manthang, and Tibetan Buddhist traditions.',
    fullDescription: 'Preserved from outside influence for centuries, Mustang feels like another planet. Visitors explore 14th-century Buddhist monasteries, Muktinath pilgrimage site, white-washed villages, and stark Himalayan desert canyons.',
    highlights: [
      'Lo Manthang — medieval walled capital',
      'Muktinath Temple — sacred Hindu & Buddhist site',
      'Chhoser Sky Caves carved into vertical cliffs',
      'Distinctive red rock canyons & wind-blown valleys',
      'Tiji Festival masked dance celebrations'
    ],
    bestSeason: ['Spring (Mar–May)', 'Summer/Monsoon (Jun–Sep)', 'Autumn (Oct–Nov)'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200',
      'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1200'
    ],
    coordinates: { lat: 29.1813, lng: 83.9575 },
    unesco: false,
    category: 'cultural'
  },
  {
    id: 'chitwan',
    name: 'Chitwan National Park',
    nepaliName: 'चितवन राष्ट्रिय निकुञ्ज',
    region: 'Southern Terai Plains',
    elevation: '150 m – 815 m',
    tagline: 'Subtropical Jungle Safari & Wildlife Sanctuary',
    description: 'A sprawling UNESCO World Heritage jungle ecosystem where Greater One-horned Rhinos, Bengal Tigers, and gharial crocodiles roam free.',
    fullDescription: 'Located in the fertile Terai lowlands, Chitwan showcases Nepal’s tropical wildlife biodiversity. Guests experience jungle walks, canoe rides along Rapti River, birdwatching, and authentic Tharu cultural hospitality.',
    highlights: [
      'Jeep and walking safari encounters with One-Horned Rhinos',
      'Canoe ride along Rapti River for Gharial crocodiles & birds',
      'Royal Bengal Tiger tracking with expert naturalists',
      'Tharu cultural stick dance & village homestays',
      'Elephant Breeding Center & conservation awareness'
    ],
    bestSeason: ['Winter (Oct–Mar) — Best wildlife visibility'],
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200',
      'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1200'
    ],
    coordinates: { lat: 27.5341, lng: 84.4525 },
    unesco: true,
    category: 'wildlife'
  },
  {
    id: 'lumbini',
    name: 'Lumbini',
    nepaliName: 'लुम्बिनी',
    region: 'Rupandehi District',
    elevation: '150 m',
    tagline: 'The Sacred Birthplace of Lord Buddha (623 BCE)',
    description: 'One of the world’s four most holy Buddhist pilgrimage sites, marked by the ancient Maya Devi Temple, Ashoka Pillar, and global monastic garden.',
    fullDescription: 'Lumbini is where Prince Siddhartha Gautama was born in 623 BCE. Today it features a tranquil 3-mile Monastic Zone showcasing architectural temples constructed by Buddhist nations across Asia and Europe.',
    highlights: [
      'Maya Devi Temple & Sacred Pushkarini Pond',
      '2,200-year-old Emperor Ashoka Pillar inscription',
      'World Peace Pagoda & Eternal Peace Flame',
      'International Monastic Zone (Thailand, Myanmar, German temples)',
      'Lumbini Crane Sanctuary & quiet meditation gardens'
    ],
    bestSeason: ['Autumn (Oct–Nov)', 'Winter (Dec–Feb)'],
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
    ],
    coordinates: { lat: 27.4712, lng: 83.2755 },
    unesco: true,
    category: 'spiritual'
  },
  {
    id: 'rara-lake',
    name: 'Rara Lake',
    nepaliName: 'रारा ताल',
    region: 'Remote Far-Western Nepal',
    elevation: '2,990 m (9,810 ft)',
    tagline: 'The Queen of Lakes in Unspoiled Himalayan Wilderness',
    description: 'Nepal’s largest and deepest freshwater lake, shimmering in vivid azure hues surrounded by pine, spruce, and alpine juniper forests.',
    fullDescription: 'Located within Rara National Park in the remote Mugu district, Rara Lake remains an untouched wilderness jewel. The lake reflects snow-clad peaks, while Himalayan black bears and musk deer inhabit surrounding woods.',
    highlights: [
      'Prismatic water color shifts from deep cobalt to turquoise',
      'Horseback riding and hiking along Murma Top viewpoint',
      'Campfire stargazing beneath zero-light pollution skies',
      'Spotting rare endemic snow trout and migratory waterbirds',
      'Experiencing authentic Western Nepalese mountain villages'
    ],
    bestSeason: ['Spring (Apr–May)', 'Autumn (Sep–Nov)'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
    ],
    coordinates: { lat: 29.5375, lng: 82.0833 },
    unesco: false,
    category: 'nature'
  },
  {
    id: 'ilam',
    name: 'Ilam',
    nepaliName: 'इलाम',
    region: 'Eastern Nepal',
    elevation: '1,200 m – 3,636 m',
    tagline: 'Rolling Tea Gardens & Sunrise Mist Hills',
    description: 'The tea garden capital of Nepal, renowned for organic orthodox tea plantations, mist-covered green slopes, and views of Mount Kanchenjunga.',
    fullDescription: 'Situated in the lush eastern foot-hills near Sikkim, Ilam offers peaceful rural tourism, tea factory tastings, sacred temple sites like Mai Pokhari, and rich Limbu-Kirat cultural traditions.',
    highlights: [
      'Kanyam & Antu Danda rolling organic tea gardens',
      'Antu Danda sunrise viewpoint over Mt. Kanchenjunga',
      'Mai Pokhari sacred wetland lake & botanical flora',
      'Traditional tea processing factory tours',
      'Unique eastern Kirat culture & Chandi dance'
    ],
    bestSeason: ['Spring (Mar–May)', 'Autumn (Oct–Dec)'],
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1200',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200'
    ],
    coordinates: { lat: 26.9103, lng: 87.9272 },
    unesco: false,
    category: 'nature'
  },
  {
    id: 'bandipur',
    name: 'Bandipur',
    nepaliName: 'बन्दीपुर',
    region: 'Tanahun District',
    elevation: '1,030 m (3,379 ft)',
    tagline: 'Preserved 18th-Century Newari Living Heritage Town',
    description: 'A hilltop Newari settlement preserved in time, featuring car-free cobblestone streets, slate-roofed traditional mansions, and mountain vistas.',
    fullDescription: 'Perched high on a ridge above the Marshyangdi valley between Kathmandu and Pokhara, Bandipur was once a key stop on the India-Tibet trade route. Today it offers authentic homestays, cave exploration, and 18th-century architecture.',
    highlights: [
      'Car-free cobblestone main bazaar with traditional wooden facades',
      'Siddha Cave — one of the largest limestone caves in South Asia',
      'Thani Mai Temple ridge for 360° sunrise mountain views',
      'Silk farm and orange orchard walking trails',
      'Authentic Newari hospitality and traditional dining'
    ],
    bestSeason: ['Autumn (Sep–Nov)', 'Spring (Mar–May)', 'Winter (Dec–Feb)'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200',
      'https://images.unsplash.com/photo-1588590484083-d5658763574c?q=80&w=1200'
    ],
    coordinates: { lat: 27.9392, lng: 84.4172 },
    unesco: false,
    category: 'cultural'
  }
];
