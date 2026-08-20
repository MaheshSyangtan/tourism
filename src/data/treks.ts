import type { TrekRoute } from '../types';

export const TREK_ROUTES: TrekRoute[] = [
  {
    id: 'ebc',
    name: 'Everest Base Camp Trek',
    region: 'Khumbu / Sagarmatha',
    durationDays: '12 – 14 Days',
    maxElevationMeters: 5545, // Kala Patthar
    difficulty: 'Strenuous',
    bestSeasons: ['Spring (Mar–May)', 'Autumn (Sep–Nov)'],
    startPoint: 'Lukla Airport (2,860 m)',
    endPoint: 'Lukla Airport',
    permitsRequired: ['Sagarmatha National Park Entry Permit', 'Khumbu Pasang Lhamu Rural Permit'],
    highlights: [
      'Standing at Everest Base Camp (5,364 m) below Khumbu Icefall',
      'Panoramic 360° sunrise from Kala Patthar (5,545 m)',
      'Namche Bazaar mountain amphitheater & Sherpa museum',
      'Tengboche Monastery evening chanting ritual',
      'Suspension bridge crossings draped in prayer flags'
    ],
    description: 'The ultimate bucket-list Himalayan trek, following footsteps of legendary mountaineers through Sherpa villages, ancient pine forests, and high alpine glacial moraines.',
    altitudePreparation: 'Requires gradual acclimatization days at Namche Bazaar (3,440m) and Dingboche (4,410m). Hydration (3-4L daily) and slow pacing are critical.',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200'
  },
  {
    id: 'annapurna-circuit',
    name: 'Annapurna Circuit Trek',
    region: 'Annapurna Conservation Area',
    durationDays: '14 – 18 Days',
    maxElevationMeters: 5416, // Thorong La Pass
    difficulty: 'Strenuous',
    bestSeasons: ['Autumn (Oct–Nov)', 'Spring (Mar–May)'],
    startPoint: 'Besisahar / Dharapani',
    endPoint: 'Jomsom / Pokhara',
    permitsRequired: ['ACAP Permit', 'TIMS Card'],
    highlights: [
      'Crossing Thorong La Pass (5,416 m) under fluttering prayer flags',
      'Transitioning from subtropical jungle to arid Trans-Himalayan Tibetan plateau',
      'Visiting sacred Muktinath Temple with 108 water spouts',
      'Deepest gorge in the world (Kali Gandaki Gorge)',
      'Natural hot springs at Tatopani'
    ],
    description: 'A classic trek circling the Annapurna massif, offering dramatic landscape shifts from lush paddy fields and apple orchards to desert canyons and snow passes.',
    altitudePreparation: 'Acclimatization overnight rest at Manang village (3,540m) before ascending to Thorong Phedi.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200'
  },
  {
    id: 'abc',
    name: 'Annapurna Base Camp (ABC)',
    region: 'Annapurna Sanctuary',
    durationDays: '7 – 10 Days',
    maxElevationMeters: 4130,
    difficulty: 'Moderate',
    bestSeasons: ['Spring (Mar–May)', 'Autumn (Sep–Nov)'],
    startPoint: 'Nayapul / Ghandruk',
    endPoint: 'Nayapul / Pokhara',
    permitsRequired: ['ACAP Permit', 'TIMS Card'],
    highlights: [
      'Standing inside the 360° natural mountain sanctuary of Annapurna I, Hiunchuli & Machhapuchhre',
      'Walking through blooming red and pink rhododendron forests',
      'Ghandruk stone-paved Gurung heritage village',
      'Relaxing in natural hot springs at Jhinu Danda'
    ],
    description: 'An immersive journey deep into the heart of the Annapurna mountain amphitheater, accessible for trekkers with moderate fitness seeking breathtaking 8,000-meter wall views.',
    altitudePreparation: 'Steep stair steps require leg endurance. Modest high-altitude risk compared to 5,000m passes.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200'
  },
  {
    id: 'langtang-valley',
    name: 'Langtang Valley Trek',
    region: 'Langtang National Park',
    durationDays: '7 – 9 Days',
    maxElevationMeters: 4773, // Kyanjin Ri
    difficulty: 'Moderate',
    bestSeasons: ['Spring (Mar–May)', 'Autumn (Sep–Nov)'],
    startPoint: 'Syabrubesi',
    endPoint: 'Syabrubesi',
    permitsRequired: ['Langtang National Park Permit', 'TIMS Card'],
    highlights: [
      'Exploring Kyanjin Gompa and sampling fresh yak cheese',
      '360° summit views from Kyanjin Ri (4,773 m) or Tserko Ri (4,984 m)',
      'Rich Tamang heritage and stone-hewn villages',
      'Spotted red panda habitats in bamboo forests'
    ],
    description: 'Known as "The Valley of Glaciers", Langtang lies close to Kathmandu yet offers peaceful trails, dramatic ice walls, and resilient Tamang cultural encounters.',
    altitudePreparation: 'Paced ascent up Langtang valley gives natural acclimatization up to Kyanjin Gompa (3,870m).',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  {
    id: 'manaslu-circuit',
    name: 'Manaslu Circuit Trek',
    region: 'Manaslu Conservation Area',
    durationDays: '13 – 16 Days',
    maxElevationMeters: 5106, // Larkya La Pass
    difficulty: 'Challenging',
    bestSeasons: ['Autumn (Sep–Nov)', 'Spring (Mar–May)'],
    startPoint: 'Soti Khola / Machha Khola',
    endPoint: 'Dharapani / Besisahar',
    permitsRequired: ['Manaslu Restricted Area Permit', 'MCAP Permit', 'ACAP Permit'],
    highlights: [
      'Crossing challenging Larkya La Pass (5,106 m) facing Himlung and Cheo Himal',
      'Uncrowded wilderness trail around the world’s 8th highest mountain',
      'Authentic Tibetan-Buddhist villages (Samagaon & Samdo)',
      'Ancient monasteries, mani walls, and chortens'
    ],
    description: 'An off-the-beaten-path alternative to the Annapurna Circuit, delivering raw mountain wilderness, pristine Buddhist heritage, and spectacular pass crossings.',
    altitudePreparation: 'Must spend extra acclimatization day in Samagaon (3,530m) visiting Birendra Lake.',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1200'
  },
  {
    id: 'poon-hill',
    name: 'Ghorepani Poon Hill Trek',
    region: 'Annapurna Foothills',
    durationDays: '4 – 5 Days',
    maxElevationMeters: 3210, // Poon Hill Viewpoint
    difficulty: 'Easy',
    bestSeasons: ['Spring (Mar–May)', 'Autumn (Sep–Nov)', 'Winter (Dec–Feb)'],
    startPoint: 'Nayapul / Birethanti',
    endPoint: 'Nayapul / Pokhara',
    permitsRequired: ['ACAP Permit', 'TIMS Card'],
    highlights: [
      'Spectacular golden sunrise over Dhaulagiri, Annapurna I & Fishtail',
      'Dense rhododendron forest walking trails',
      'Gurung hospitality in Ghorepani & Ghandruk villages',
      'Short duration ideal for families and short visits'
    ],
    description: 'Nepal’s premier introductory trek. Short, highly rewarding, and featuring one of the most celebrated sunrise mountain panoramas on earth.',
    altitudePreparation: 'Low risk of altitude sickness; manageable climbing via traditional stone steps.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200'
  }
];
