import type { Festival } from '../types';

export const FESTIVALS: Festival[] = [
  {
    id: 'dashain',
    name: 'Dashain (Bada Dashain)',
    nepaliName: 'बडा दशैं',
    monthTiming: 'Ashwin / Kartik',
    approximateMonth: 'September – October (15 Days)',
    significance: 'The biggest national festival celebrating the victory of Good over Evil (Goddess Durga defeating Mahishasura). Families reunite across Nepal.',
    rituals: [
      'Ghatasthapana — Planting sacred barley grass (Jamara)',
      'Fulpati & Maha Navami traditional royal weapons worship',
      'Vijaya Dashami — Elders bestow red Tika & golden Jamara with blessings',
      'Flying colorful paper kites & soaring high on bamboo swings (Linge Ping)'
    ],
    regionContext: 'Celebrated nationwide across all villages and cities in Nepal.',
    description: 'Nepal’s longest and most joyful festival. Families travel across mountains to gather, receive elder blessings, feast on mountain goat curry, and fly kites in blue autumn skies.',
    image: 'https://images.unsplash.com/photo-1588590484083-d5658763574c?q=80&w=1200',
    colorAccent: '#B83227'
  },
  {
    id: 'tihar',
    name: 'Tihar (Deepawali)',
    nepaliName: 'तिहार / दीपवली',
    monthTiming: 'Kartik',
    approximateMonth: 'October – November (5 Days)',
    significance: 'The Festival of Lights honoring animals (crows, dogs, cows, oxen) and Goddess Laxmi (Wealth & Prosperity), celebrating sibling bonds on Bhai Tika.',
    rituals: [
      'Kaag Tihar & Kukur Tihar — Garlanded dogs and birds worshipped with red Tika',
      'Gai Tihar & Laxmi Puja — Homes illuminated with oil lamps (Diyo) and Rangoli',
      'Deusi-Bhailo — Musical door-to-door carol singing troupes',
      'Bhai Tika — Sisters place seven-colored Tika on brothers’ foreheads for longevity'
    ],
    regionContext: 'Celebrated with glittering lights nationwide.',
    description: 'Transforming Nepal into a fairy-tale wonderland of glowing marigold garlands, oil lamps, colorful peacock rangolis, and heartfelt sibling tributes.',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1200',
    colorAccent: '#D98A2B'
  },
  {
    id: 'indra-jatra',
    name: 'Indra Jatra (Yenya)',
    nepaliName: 'इन्द्र जात्रा (यंयाः)',
    monthTiming: 'Bhadra / Ashwin',
    approximateMonth: 'September (8 Days)',
    significance: 'Kathmandu’s grandest street festival invoking Rain God Indra and featuring public appearances of Living Goddess Kumari.',
    rituals: [
      'Erection of the Yaasin sacred pole in Kathmandu Durbar Square',
      'Chariot procession of Living Goddess Kumari, Lord Ganesha & Bhairava',
      'Fierce roaring Lakhey masked demon dances through old city alleys',
      'Sampling traditional Samay Baji sacred feast'
    ],
    regionContext: 'Kathmandu Durbar Square & Old City',
    description: 'An unforgettable 8-day spectacle of thundering drums, giant wooden chariots, flame torches, and masked spirit dancers roaming medieval courtyards.',
    image: 'https://images.unsplash.com/photo-1588590484083-d5658763574c?q=80&w=1200',
    colorAccent: '#E5B23A'
  },
  {
    id: 'holi',
    name: 'Holi (Fagu Purnima)',
    nepaliName: 'फागु पूर्णिमा (होली)',
    monthTiming: 'Phalgun',
    approximateMonth: 'March (1 Day)',
    significance: 'The Festival of Colors welcoming spring, warmth, and joyful community play.',
    rituals: [
      'Splashing organic red, yellow, pink, and green powders (Abir)',
      'Water balloon fights & cheerful outdoor music concerts',
      'Sharing sweet treats like Gujia and refreshing Lassi drinks'
    ],
    regionContext: 'Hills on Day 1, Terai lowlands on Day 2.',
    description: 'An exuberant nation-wide street party where strangers become friends under clouds of vibrant colored powders, music, and laughter.',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200',
    colorAccent: '#B83227'
  },
  {
    id: 'losar',
    name: 'Losar (Tibetan & Himalayan New Year)',
    nepaliName: 'लोसार',
    monthTiming: 'Magh / Phalgun',
    approximateMonth: 'February – March (3 Days)',
    significance: 'Himalayan New Year celebrated by Sherpa (Gyalpo Losar), Tamang (Sonam Losar), and Gurung (Tamu Losar) communities.',
    rituals: [
      'Hoisting fresh prayer flags atop stupas and high mountain passes',
      'Chanting monk prayers & traditional masked Cham dances at monasteries',
      'Feasting on Khapse pastries and Guthuk ceremonial soup'
    ],
    regionContext: 'Boudhanath, Swayambhunath, Solukhumbu, Mustang, Manang',
    description: 'Himalayan communities welcome the New Year with glowing butter lamps, incense fires, spinning prayer wheels, and sacred monastic horn music.',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200',
    colorAccent: '#1A365D'
  }
];
