import type { HistoricalEvent } from '../types';

export const HISTORICAL_TIMELINE: HistoricalEvent[] = [
  {
    id: 'kirat-era',
    period: 'Ancient Foundations',
    era: 'c. 800 BCE – 300 CE',
    yearRange: '800 BCE',
    title: 'The Kirat Dynasty & Early Civilization',
    subtitle: 'The Dawn of Organized Settlement & Vedic Traditions',
    description: 'The Kirati people were among the earliest documented rulers of Kathmandu Valley. King Yalamber established the dynasty, mentioned in Hindu epics like the Mahabharata.',
    details: [
      'King Yalamber established Kathmandu Valley as a vital Himalayan trading center.',
      'Buddhism was introduced during King Sthunko’s reign, with Emperor Ashoka visiting Lumbini in 249 BCE.',
      'Early animist, Shaivite, and Buddhist traditions blended into Nepal’s unique religious syncretism.'
    ],
    significance: 'Laid the cultural, agricultural, and commercial bedrock for the Kathmandu Valley.',
    keyFigures: ['King Yalamber', 'Emperor Ashoka'],
    location: 'Kathmandu Valley & Eastern Hills',
    image: 'https://images.unsplash.com/photo-1588590484083-d5658763574c?q=80&w=1200',
    iconName: 'Crown'
  },
  {
    id: 'licchavi-golden-age',
    period: 'The Golden Era',
    era: 'c. 400 CE – 750 CE',
    yearRange: '400–750 CE',
    title: 'The Licchavi Golden Age of Art & Trade',
    subtitle: 'Master Stone Sculptures, Inscriptions & Trans-Himalayan Diplomacy',
    description: 'Originating from northern Bihar, the Licchavis ushered in a glorious era of stone carving, pagoda design, copper coinage, and diplomatic ties with Tibet and China.',
    details: [
      'King Manadeva erected Changu Narayan Temple (464 CE), home to Nepal’s oldest stone inscription.',
      'Princess Bhrikuti married Tibetan Emperor Songtsen Gampo, introducing Nepalese Buddhist art to Tibet.',
      'Pashupatinath Temple gained prominent patronage and royal endowments.'
    ],
    significance: 'Established Nepal as the artistic and spiritual bridge between India and Central Asia.',
    keyFigures: ['King Manadeva', 'Princess Bhrikuti', 'King Amshuverma'],
    location: 'Changu Narayan & Patan',
    image: 'https://images.unsplash.com/photo-1588590484083-d5658763574c?q=80&w=1200',
    iconName: 'Sparkles'
  },
  {
    id: 'malla-renaissance',
    period: 'Medieval Architectural Peak',
    era: '1200 CE – 1768 CE',
    yearRange: '1200–1768 CE',
    title: 'The Malla Renaissance & Royal Squares',
    subtitle: 'The Three Kingdoms: Kathmandu, Patan & Bhaktapur',
    description: 'Under Malla patronage, Newari architecture, multi-tiered pagodas, gilded roofs, intricate woodcarvings, and vibrant street festivals reached unmatched brilliance.',
    details: [
      'Kathmandu Valley split into three rival city-states: Kantipur, Lalitpur, and Bhadgaon.',
      'Construction of the famous Durbar Squares, Krishna Mandir, and Nyatapola 5-tier pagoda.',
      'Establishment of the Living Goddess (Kumari) tradition and Indra Jatra festival.'
    ],
    significance: 'Created the UNESCO World Heritage monuments that define Nepal’s architectural identity today.',
    keyFigures: ['King Jayasthiti Malla', 'King Pratap Malla', 'King Bhupatindra Malla'],
    location: 'Kathmandu, Patan & Bhaktapur Durbar Squares',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1200',
    iconName: 'Castle'
  },
  {
    id: 'unification-shah',
    period: 'Nation Unification',
    era: '1768 CE – 1846 CE',
    yearRange: '1768 CE',
    title: 'Unification of Nepal by Prithvi Narayan Shah',
    subtitle: 'Forging a Sovereign Nation "A Yam Between Two Boulders"',
    description: 'King Prithvi Narayan Shah of Gorkha conquered the fragmented hill kingdoms and Kathmandu Valley in 1768, founding modern unified Nepal.',
    details: [
      'Conquest of Kathmandu, Patan, and Bhaktapur during major festival celebrations.',
      'Promulgation of the "Divya Upadesh" strategic doctrine on sovereignty and foreign affairs.',
      'Establishment of Gorkhali military discipline and defense of independence against imperial forces.'
    ],
    significance: 'Created the unified nation-state of Nepal, safeguarding independence during colonial rule in Asia.',
    keyFigures: ['King Prithvi Narayan Shah', 'Bhakti Thapa', 'Amar Singh Thapa'],
    location: 'Gorkha Durbar & Basantpur Tower',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200',
    iconName: 'Shield'
  },
  {
    id: 'rana-regime',
    period: 'Autocratic Era & Neoclassical Architecture',
    era: '1846 CE – 1951 CE',
    yearRange: '1846–1951 CE',
    title: 'The Rana Dynasty & Neoclassical Palaces',
    subtitle: 'Hereditary Prime Ministers & Isolationist Policy',
    description: 'Following the Kot Massacre of 1846, Jung Bahadur Rana seized power, establishing a century of hereditary prime ministers while keeping Shah kings as figureheads.',
    details: [
      'Construction of grand European neoclassical stucco palaces such as Singha Durbar.',
      'Deployment of Gorkha soldiers in WWI and WWII, gaining international fame for bravery.',
      'Strict isolation policy kept Western influence out until popular revolt in 1951.'
    ],
    significance: 'Infused European neoclassical architecture into Kathmandu and set the stage for 20th-century democracy.',
    keyFigures: ['Jung Bahadur Rana', 'Chandra Shumsher'],
    location: 'Singha Durbar & Keshar Mahal',
    image: 'https://images.unsplash.com/photo-1588590484083-d5658763574c?q=80&w=1200',
    iconName: 'Landmark'
  },
  {
    id: 'modern-republic',
    period: 'Contemporary Federal Republic',
    era: '1951 CE – Present',
    yearRange: '2008 CE',
    title: 'Democracy Movement & Federal Democratic Republic',
    subtitle: 'A New Dawn of Governance, Global Tourism & Heritage Preservation',
    description: 'Following democratic uprisings in 1950, 1990, and the peaceful 2006 Jan Andolan II, Nepal abolished the monarchy in 2008 to become a Federal Democratic Republic.',
    details: [
      'Promulgation of the secular, inclusive Constitution of Nepal in 2015.',
      'Global recognition of Sagarmatha National Park and UNESCO restoration efforts.',
      'Evolution into a premier global hub for sustainable mountain tourism, conservation, and cultural diplomacy.'
    ],
    significance: 'Transformed Nepal into an inclusive federal republic celebrating rich multi-ethnic diversity.',
    keyFigures: ['King Tribhuvan', 'BP Koirala', 'Citizens of Nepal'],
    location: 'Kathmandu Parliament & All 7 Provinces',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200',
    iconName: 'Globe'
  }
];
