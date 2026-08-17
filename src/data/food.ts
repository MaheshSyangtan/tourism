import type { FoodDish } from '../types';

export const FOOD_DISHES: FoodDish[] = [
  {
    id: 'dal-bhat',
    name: 'Dal Bhat Power 24 Hour',
    nepaliName: 'दाल भात तरकारी',
    type: 'Staple',
    origin: 'National Staple of Nepal',
    ingredients: ['Steamed Basmati/Marshi Rice', 'Lentil Soup (Yellow/Black Dal)', 'Seasonal Vegetable Tarkari', 'Fermented Mustard Green Pickles (Gundruk Achar)', ' Papad & Fresh Chutney'],
    flavorProfile: 'Savory, comforting, earthy, spiced with cumin, coriander, garlic & Jimbu herb.',
    culturalContext: 'Eaten twice daily by nearly every Nepalese household. Trekkers famously swear by "Dal Bhat Power 24 Hour!" due to sustained complex carb energy.',
    description: 'The undisputed national dish of Nepal — a nourishing, balanced thali plate featuring steaming rice, aromatic lentil soup, spiced organic vegetables, crisp papad, and tangy homemade pickles.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  {
    id: 'momo',
    name: 'Momo (Nepalese Dumplings)',
    nepaliName: 'ममः',
    type: 'Snack',
    origin: 'Kathmandu Valley & Himalayan Trade Route',
    ingredients: ['Thin Flour Wrapper', 'Minced Chicken / Buff / Vegetable filling', 'Spiced Garlic Ginger Soy paste', 'Sesame-Tomato-Szechuan Pepper Chutney (Golbheda ko Achar)'],
    flavorProfile: 'Juicy, savory, aromatic with a fiery sesame-tomato dip.',
    culturalContext: 'Nepal’s most beloved street food and social snack. Friends meet over steaming bamboo baskets of momo at every hour of the day.',
    description: 'Bite-sized dumplings filled with spiced meat or chopped vegetables, steamed to perfection and served with a lip-smacking roasted sesame-tomato chutney.',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1200'
  },
  {
    id: 'newari-khaja-set',
    name: 'Samay Baji (Newari Feast)',
    nepaliName: 'समय बजि',
    type: 'Festive',
    origin: 'Newar Community of Kathmandu Valley',
    ingredients: ['Beaten Rice (Baji / Chiura)', 'Barbecued Marinated Buff (Choila)', 'Black Eyed Peas (Bhatmas)', 'Boiled Fried Egg', 'Ginger & Garlic Slices', 'Aila Rice Liquor'],
    flavorProfile: 'Smoky, spicy, crunchy, robust with mustard oil and fenugreek.',
    culturalContext: 'Served during ceremonial rituals, worship, and major festivals as a blessing from deities.',
    description: 'An ancient ceremonial platter composed of flattened rice surrounded by smoky spicy choila, crispy soy beans, pickled ginger, and boiled egg.',
    image: 'https://images.unsplash.com/photo-1588590484083-d5658763574c?q=80&w=1200'
  },
  {
    id: 'thukpa',
    name: 'Thukpa (Himalayan Noodle Soup)',
    nepaliName: 'थुक्पा',
    type: 'Staple',
    origin: 'Sherpa & Tibetan Himalayan Region',
    ingredients: ['Hand-pulled Wheat Noodle', 'Rich Chicken/Vegetable Broth', 'Shredded Vegetables / Meat', 'Garam Masala & Green Chilies'],
    flavorProfile: 'Warming, hearty, spicy, comforting in sub-zero mountain weather.',
    culturalContext: 'Essential comfort food served in teahouses along the Everest Base Camp and Annapurna high-altitude trails.',
    description: 'A steaming bowl of thick hand-pulled noodles swimming in a fragrant spicy broth infused with Himalayan herbs and vegetables.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  {
    id: 'sel-roti',
    name: 'Sel Roti',
    nepaliName: 'सेल रोटी',
    type: 'Dessert',
    origin: 'Traditional Nepalese Heritage',
    ingredients: ['Coarse Rice Flour', 'Clarified Butter (Ghee)', 'Sugar', 'Cardamom & Cloves', 'Fried in pure ghee'],
    flavorProfile: 'Crispy outer ring, soft fluffy interior, subtly sweet with cardamom aroma.',
    culturalContext: 'Prepared in large quantities during Tihar and Dashain festivals as an offering and festive breakfast snack.',
    description: 'A ring-shaped traditional rice doughnut fried to a golden crisp in ghee, offering a delightful cardamom crunch.',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1200'
  },
  {
    id: 'yomari',
    name: 'Yomari',
    nepaliName: 'योमरी',
    type: 'Dessert',
    origin: 'Bhaktapur & Newari Community',
    ingredients: ['Rice Flour dough shell', 'Sweet Jaggery (Chaku)', 'Roasted Sesame Seeds', 'Condensed Milk (Khoya)'],
    flavorProfile: 'Steamed rice pouch bursting with warm molten sesame jaggery.',
    culturalContext: 'Celebrated during Yomari Punhi post-harvest festival in December to give warmth and thank the earth.',
    description: 'A fig-shaped steamed rice dumpling filled with gooey molten jaggery and roasted sesame seeds, symbolizing good fortune.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200'
  }
];
