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
    image: 'https://images.unsplash.com/photo-1588590484083-d5658763574c?q=80&w=1200'
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
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'  },
  {
    id: 'magar',
    name: 'Magar Community',
    region: 'Western Hills (Palpa, Syangja, Tanahun)',
    language: 'Magar (Kham, Kaike, Dhut)',
    heritageHighlights: [
      'Largest indigenous group in Nepal with rich martial history',
      'Maruni dance & Kauda folk traditions during festivals',
      'Ancient Bhume Naach nature worship ceremonies',
      'Pioneers of Gorkha regiments alongside Gurungs'
    ],
    traditionalCrafts: ['Bamboo basketry', 'Woolen blanket weaving', 'Traditional jewelry making'],
    architectureStyle: 'Stone and mud houses with thatched or slate roofs on terraced hillsides.',
    description: 'Nepal\'s largest indigenous ethnic group, renowned for their bravery in Gorkha regiments, vibrant folk dances, and deep connection to nature worship traditions.',
    image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b1db1?q=80&w=1200'
  },
  {
    id: 'rai',
    name: 'Rai Community (Kirat)',
    region: 'Eastern Hills (Khotang, Bhojpur, Solukhumbu)',
    language: 'Rai (Bantawa, Chamling, Kulung, Thulung)',
    heritageHighlights: [
      'Ancient Kirat civilization with Mundhum oral scriptures',
      'Sakela (Ubhauli/Udhauli) nature worship dance festivals',
      'Traditional Dhan Nach (paddy dance) and Chandi Naach',
      'Skilled archers and traditional bamboo bow makers'
    ],
    traditionalCrafts: ['Bamboo and cane weaving', 'Traditional archery bows', 'Dhaka textile weaving'],
    architectureStyle: 'Stone houses with wooden beams and thatched roofs on steep hill slopes.',
    description: 'Descendants of the ancient Kirat dynasty that ruled Kathmandu Valley, keepers of Mundhum spiritual traditions and vibrant agricultural festivals.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1200'
  },
  {
    id: 'limbu',
    name: 'Limbu Community (Yakthung)',
    region: 'Far Eastern Hills (Taplejung, Panchthar, Ilam)',
    language: 'Limbu (Yakthungpan) with Sirijanga script',
    heritageHighlights: [
      'Only indigenous Nepali group with own script (Sirijanga)',
      'Chasok Tangnam harvest festival & Yalang dance',
      'Traditional Tongba (millet beer) brewing culture',
      'Rich Mundhum oral tradition and animist beliefs'
    ],
    traditionalCrafts: ['Dhaka weaving (Limbu pattern)', 'Traditional jewelry', 'Bamboo craft'],
    architectureStyle: 'Wooden houses with thatched roofs, often built on stilts in traditional style.',
    description: 'Proud bearers of the unique Sirijanga script, Limbus maintain distinct Kirat identity with rich textile traditions and animist spiritual practices.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  {
    id: 'thakali',
    name: 'Thakali Community',
    region: 'Thak Khola Valley (Mustang District)',
    language: 'Thakali (Tibeto-Burman)',
    heritageHighlights: [
      'Masters of trans-Himalayan salt-grain trade routes',
      'Distinctive Thakali cuisine (dal-bhat-tarkari with jimbu)',
      'Lha Phewa festival honoring clan deities',
      'Skilled hoteliers and entrepreneurs across Nepal'
    ],
    traditionalCrafts: ['Woolen carpet weaving', 'Apple brandy distillation', 'Metalwork'],
    architectureStyle: 'Flat-roofed stone houses with wooden windows, adapted to arid trans-Himalayan climate.',
    description: 'Former salt traders of the Kali Gandaki corridor, now celebrated for their distinctive cuisine, entrepreneurial spirit, and unique Tibetan-influenced culture.',
    image: 'https://images.unsplash.com/photo-1596428643254-abb23df4f15c?q=80&w=1200'
  },
  {
    id: 'dolpo',
    name: 'Dolpo Community (Dolpo-pa)',
    region: 'Upper Dolpo (Dolpa District, Far West)',
    language: 'Dolpo (Tibetan dialect)',
    heritageHighlights: [
      'Ancient Bonpo and Nyingma Buddhist traditions',
      'Phoksundo Lake pilgrimage and crystal mountain worship',
      'Nomadic yak herding and high-altitude agriculture',
      'Preserved medieval Tibetan culture isolated by geography'
    ],
    traditionalCrafts: ['Tibetan carpet weaving', 'Thangka painting', 'Yak wool products'],
    architectureStyle: 'Whitewashed stone monasteries and flat-roofed mud-brick homes at 4000m+.',
    description: 'Inhabitants of Nepal\'s most remote trans-Himalayan valleys, preserving ancient Tibetan Buddhist and Bon traditions virtually unchanged for centuries.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200'
  },
  {
    id: 'loba',
    name: 'Loba Community (Mustang)',
    region: 'Upper Mustang (Lo Manthang)',
    language: 'Lowa (Tibetan dialect)',
    heritageHighlights: [
      'Last forbidden kingdom opened to outsiders in 1992',
      'Tiji Festival: three-day masked dance chasing demons',
      'Sky burial traditions and cave monastery heritage',
      'Medieval walled capital Lo Manthang at 3840m'
    ],
    traditionalCrafts: ['Tibetan metalwork', 'Thangka painting', 'Woolen textiles'],
    architectureStyle: 'Whitewashed mud-brick fortress city with monasteries, palaces, and cave dwellings.',
    description: 'Guardians of the ancient Kingdom of Lo, preserving a living medieval Tibetan Buddhist culture in a dramatic high-altitude desert landscape.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  {
    id: 'raut',
    name: 'Raute Community',
    region: 'Mid-Western Forests (Surkhet, Dailekh, Jajarkot)',
    language: 'Raute (Tibeto-Burman, unwritten)',
    heritageHighlights: [
      'Nepal\'s last nomadic hunter-gatherer tribe',
      'Monkey hunting and wild tuber foraging traditions',
      'Strict animist beliefs avoiding agriculture and settlement',
      'Portable tents moved every few weeks in forest camps'
    ],
    traditionalCrafts: ['Wooden bowl carving', 'Monkey trap making', 'Forest medicine knowledge'],
    architectureStyle: 'Temporary leaf-and-branch shelters (kuchha) moved with seasonal migration.',
    description: 'Nepal\'s only remaining nomadic hunter-gatherers, fiercely maintaining their ancient forest lifestyle and animist worldview despite modernization pressures.',
    image: 'https://images.unsplash.com/photo-1533871931286-68a26879c2d8?q=80&w=1200'
  },
  {
    id: 'chepang',
    name: 'Chepang Community (Praja)',
    region: 'Central Hills (Chitwan, Makwanpur, Dhading, Gorkha)',
    language: 'Chepang (Tibeto-Burman)',
    heritageHighlights: [
      'Traditional semi-nomadic shifting cultivation (khoriya)',
      'Wild yam (gittha) and forest food foraging expertise',
      'Unique Chhonam (Nwagi) festival celebrating harvest',
      'Deep ethnobotanical knowledge of medicinal plants'
    ],
    traditionalCrafts: ['Bamboo weaving', 'Wild fiber rope making', 'Traditional hunting tools'],
    architectureStyle: 'Simple bamboo and thatch huts on steep forested slopes.',
    description: 'One of Nepal\'s most marginalized indigenous groups, traditionally forest-dwelling shifting cultivators with profound knowledge of wild edibles and medicinal plants.',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200'  }
];
