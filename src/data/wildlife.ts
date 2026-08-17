import type { WildlifeSpecies } from '../types';

export const WILDLIFE_SPECIES: WildlifeSpecies[] = [
  {
    id: 'rhino',
    name: 'Greater One-Horned Rhinoceros',
    scientificName: 'Rhinoceros unicornis',
    status: 'Vulnerable',
    habitat: 'Riverine grasslands & subtropical Terai marshes',
    parksFoundIn: ['Chitwan National Park', 'Bardia National Park', 'Shuklaphanta National Park'],
    description: 'Nepal is a global anti-poaching success story, home to over 750 One-Horned Rhinos protected by community patrols and the Nepalese Army.',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1200'
  },
  {
    id: 'bengal-tiger',
    name: 'Royal Bengal Tiger',
    scientificName: 'Panthera tigris tigris',
    status: 'Endangered',
    habitat: 'Subtropical floodplain tall grasslands & sal forests',
    parksFoundIn: ['Bardia National Park', 'Chitwan National Park', 'Banke National Park'],
    description: 'Nepal nearly tripled its tiger population between 2010 and 2022, counting over 355 wild Bengal Tigers roaming protected conservation corridors.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  {
    id: 'snow-leopard',
    name: 'Snow Leopard (Ghost of the Mountain)',
    scientificName: 'Panthera uncia',
    status: 'Vulnerable',
    habitat: 'High alpine cliff rock terrain above tree line (3,000m – 5,500m)',
    parksFoundIn: ['Shey Phoksundo National Park', 'Annapurna Conservation Area', 'Sagarmatha National Park', 'Kanchenjunga'],
    description: 'Elusive apex predator of the high Himalayas, camouflage-blended into granite cliffs and preyed on blue sheep (Bharal).',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200'
  },
  {
    id: 'red-panda',
    name: 'Red Panda (Habre)',
    scientificName: 'Ailurus fulgens',
    status: 'Endangered',
    habitat: 'Temperate bamboo forests & oak woodlands (2,200m – 4,800m)',
    parksFoundIn: ['Langtang National Park', 'Makalu Barun', 'Rara National Park', 'Kanchenjunga'],
    description: 'A gentle tree-dwelling mammal with dense reddish-brown fur, feeding almost exclusively on tender bamboo shoots in cloud forests.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200'
  },
  {
    id: 'himalayan-monal',
    name: 'Himalayan Monal (Danphe)',
    scientificName: 'Lophophorus impejanus',
    status: 'Protected',
    habitat: 'High altitude alpine meadows & oak rhododendron woods',
    parksFoundIn: ['Sagarmatha National Park', 'Langtang', 'Annapurna Conservation Area'],
    description: 'The National Bird of Nepal, renowned for the male bird’s shimmering iridescent rainbow plumage displaying emerald, peacock blue, and crimson.',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1200'
  }
];
