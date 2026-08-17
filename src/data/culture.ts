import type { CulturalCommunity } from '../types';

export const CULTURAL_COMMUNITIES: CulturalCommunity[] = [
  {
    id: 'newar',
    name: 'Newar Community',
    region: 'Kathmandu Valley',
    language: 'Nepal Bhasa (Newari)',
    heritageHighlights: [
      'Inventors of multi-tiered pagoda architecture & gilded brass statuary',
      'Intricate woodcarvings (Peacock Windows, Toranas, Carved Struts)',
      'Rich culinary traditions featuring over 80 distinct Newari dishes',
      'Living Goddess (Kumari) reverence and masked Lakhey dances'
    ],
    traditionalCrafts: ['Metal sculpture casting', 'Woodcarving', 'Pottery (Bhaktapur)', 'Paubha paintings'],
    architectureStyle: 'Brick multi-tiered pagodas with carved wooden struts and copper roofs.',
    description: 'The indigenous inhabitants of Kathmandu Valley, celebrated for constructing Nepal’s royal Durbar squares, bronze statues, unique stone fountains, and festive rituals.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  {
    id: 'sherpa',
    name: 'Sherpa Community',
    region: 'Khumbu & High Himalayas',
    language: 'Sherpa (Tibetan branch)',
    heritageHighlights: [
      'World-famous alpine mountaineering expertise & mountain navigation',
      'Devout Tibetan Buddhist heritage centered around ancient monasteries',
      'Mani stone carvers & prayer flag ritual traditions',
      'Dumji and Mani Rimdu sacred masked dance festivals'
    ],
    traditionalCrafts: ['Woolen carpets', 'Tibetan woodcarving', 'Mani stone carving', 'Silverware'],
    architectureStyle: 'Sturdily hewn stone alpine houses with wooden shingle roofs and prayer flag courtyards.',
    description: 'Originating from eastern Tibet centuries ago ("People from the East"), Sherpas are globally revered mountaineering pioneers and custodians of high-altitude Himalayan Buddhism.',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200'
  },
  {
    id: 'tharu',
    name: 'Tharu Community',
    region: 'Terai Lowlands (Chitwan, Bardia, Dang)',
    language: 'Tharu',
    heritageHighlights: [
      'Natural genetic immunity to malaria in Terai jungle history',
      'Vibrant wall paintings (Mithila & Tharu house mud art)',
      'Tharu Stick Dance (Lathi Naach) & Maghi New Year festival',
      'Deep ecological knowledge of jungle wildlife and medicinal plants'
    ],
    traditionalCrafts: ['Handmade clay pottery', 'Reed grass weaving', 'Mud wall mural painting', 'Bamboo baskets'],
    architectureStyle: 'Longhouses built with elephant-grass thatch, mud plaster, and bamboo frames.',
    description: 'The indigenous guardians of Nepal’s southern Terai forests, boasting vibrant folk dances, distinctive clay architecture, and rich wildlife conservation harmony.',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1200'
  },
  {
    id: 'gurung',
    name: 'Gurung Community (Tamu)',
    region: 'Annapurna & Lamjung Foothills',
    language: 'Tamu Kyi',
    heritageHighlights: [
      'Famous contributions to world-renowned Gorkha military regiments',
      'Tamu Lhosar (New Year) celebrations with traditional costumes',
      'Ancient Rodhi Ghar cultural youth gathering traditions',
      'Honey hunting on vertical cliff walls using handmade rope ladders'
    ],
    traditionalCrafts: ['Hand-woven woolen blankets (Rari)', 'Bamboo basketry', 'Nettle fiber weaving'],
    architectureStyle: 'Slated-roof oval stone houses nestled against terraced mountain slopes.',
    description: 'Renowned hill inhabitants of the Annapurna region, famed for warm hospitality in villages like Ghandruk, rich musical storytelling, and courage.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200'
  },
  {
    id: 'tamang',
    name: 'Tamang Community',
    region: 'Langtang & Central Hills',
    language: 'Tamang',
    heritageHighlights: [
      'Lamaism Buddhist rituals & sacred Thangka scroll art masters',
      'Damphu drum music & Tamang Selo folk dance tradition',
      'Sonam Lhosar celebration welcoming spring',
      'Deep reverence for mountain spirits and sacred lakes'
    ],
    traditionalCrafts: ['Thangka painting', 'Damphu drum crafting', 'Woolen cap and jacket weaving'],
    architectureStyle: 'Double-storied stone houses with timber framework and colorful prayer banners.',
    description: 'One of Nepal’s largest indigenous ethnic groups, keepers of sacred Buddhist Thangka painting and rich musical heritage across the central hills.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  }
];
