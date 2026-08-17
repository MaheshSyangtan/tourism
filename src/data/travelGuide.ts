import type { PracticalInfo } from '../types';

export const PRACTICAL_INFO: PracticalInfo[] = [
  {
    category: 'Visa & Entry Requirements',
    title: 'On-Arrival Tourist Visa',
    icon: 'FileText',
    items: [
      { label: 'Visa on Arrival', value: 'Available at Tribhuvan International Airport (TIA) & land borders.' },
      { label: '15-Day Visa Fee', value: '$30 USD' },
      { label: '30-Day Visa Fee', value: '$50 USD' },
      { label: '90-Day Visa Fee', value: '$125 USD' },
      { label: 'Passport Requirement', value: 'Must be valid for at least 6 months with 2 blank pages.' }
    ]
  },
  {
    category: 'Currency & Banking',
    title: 'Nepalese Rupee (NPR / Rs.)',
    icon: 'CreditCard',
    items: [
      { label: 'Official Currency', value: 'Nepalese Rupee (NPR)' },
      { label: 'Exchange Rate approx.', value: '1 USD ≈ 133–135 NPR' },
      { label: 'ATMs & Cards', value: 'ATMs widely available in Kathmandu & Pokhara. Cash essential on treks.' },
      { label: 'Trekking Cash Tip', value: 'Carry sufficient cash NPR into mountains as ATMs do not exist above Namche/Jomsom.' }
    ]
  },
  {
    category: 'Trekking Permits & TIMS',
    title: 'Required Trail Documentation',
    icon: 'ShieldCheck',
    items: [
      { label: 'TIMS Card', value: 'Trekkers’ Information Management System required for most non-restricted routes.' },
      { label: 'National Park Permits', value: 'Sagarmatha, Langtang, ACAP entries payable in Kathmandu or trailhead.' },
      { label: 'Restricted Area Permits', value: 'Must be arranged through registered agency for Mustang, Manaslu, Upper Dolpo.' },
      { label: 'Mandatory Guide Rule', value: 'Authorized local guide required for safety on major trekking trails.' }
    ]
  },
  {
    category: 'Connectivity & eSIM',
    title: 'Stay Connected in Nepal',
    icon: 'Wifi',
    items: [
      { label: 'Local SIM Cards', value: 'Ncell or Nepal Telecom (NTC) available at Kathmandu airport arrival.' },
      { label: 'eSIM Services', value: 'Airalo / Maya Mobile offer instant data packages before landing.' },
      { label: 'Teahouse WiFi', value: 'Everest Link prepaid card available across Khumbu; small fee at teahouses.' }
    ]
  },
  {
    category: 'Health & Altitude Safety',
    title: 'Acute Mountain Sickness (AMS)',
    icon: 'HeartPulse',
    items: [
      { label: 'Golden Rule', value: 'Climb high, sleep low. Never ascend more than 300-500m net per day above 3,000m.' },
      { label: 'Hydration', value: 'Drink 3–4 liters of purified water daily on mountain trails.' },
      { label: 'Travel Insurance', value: 'Must include high-altitude emergency helicopter evacuation coverage up to 6,000m.' }
    ]
  }
];

export const RESPONSIBLE_TOURISM_PLEDGE = [
  {
    title: 'Respect Sacred Traditions',
    description: 'Walk clockwise around chortens, stupas, and mani stone walls. Remove shoes before entering temple interiors, and ask permission before photographing individuals.'
  },
  {
    title: 'Leave No Trace in the Himalayas',
    description: 'Carry back all non-biodegradable waste. Use refillable water bottles with purification tablets instead of single-use plastic water bottles in mountain regions.'
  },
  {
    title: 'Empower Local Mountain Economies',
    description: 'Stay in locally-owned family teahouses, hire certified local Sherpa/Gurung guides and porters, and purchase genuine indigenous handicrafts directly from artisans.'
  },
  {
    title: 'Protect Wildlife & Nature',
    description: 'Keep a respectful distance from wildlife during safari and trek encounters. Never purchase products made from protected species or endangered timber.'
  }
];
