<div align="center">

# 🇳🇵 Nepal — A Cinematic Tourism Experience

*An immersive, scroll-driven journey through the Himalayas, heritage, culture, and cuisine of Nepal.*

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)
![Three.js](https://img.shields.io/badge/Three.js-3D-000000?logo=threedotjs&logoColor=white&style=for-the-badge)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-0055FF?style=for-the-badge)

[Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [Project Structure](#-project-structure) · [Contributing](#-contributing)

</div>

---

## ✨ Overview

**Nepal Tourism Explorer** is a modern, cinematic single-page web experience that takes visitors on a curated journey through Nepal — from the summit of Sagarmāthā (Everest) to the jungles of Chitwan, from ancient Kathmandu Durbar Square to the flavors of a Newari kitchen.

Built with **React 19**, **TypeScript**, and **Vite**, and animated with **GSAP**, **Framer Motion**, and **Lenis** smooth scrolling, the site blends rich editorial content with interactive components — including a 3D Himalayan peak inspector, an interactive vector map of Nepal, a seasonal travel matrix, and an intelligent trip planner modal.

---

## 🌟 Features

### 🎬 A 17-Section Cinematic Journey

| # | Section | Component | Description |
|---|---------|-----------|-------------|
| 1 | **Cinematic Hero** | `CinematicHero` | Parallax-driven opening with dramatic Himalayan imagery |
| 2 | **Fact Sheet** | `FactSheetSection` | Geography & national quick facts |
| 3 | **History Timeline** | `HistoricalTimeline` | "A Journey Through Time" — eras, dynasties & key figures |
| 4 | **UNESCO Heritage** | `UnescoSection` | World Heritage Sites of Nepal |
| 5 | **Destinations** | `DestinationGallery` | Filterable discovery grid with galleries & coordinates |
| 6 | **Himalaya Inspector** | `MountainViewer` | 3D peak elevation explorer (Three.js) |
| 7 | **Trekking Guide** | `TrekkingGuide` | Alpine routes, permits, difficulty & altitude prep |
| 8 | **Culture & Arts** | `CultureSection` | Ethnic mosaic, crafts & architecture |
| 9 | **Festivals** | `FestivalTimeline` | Festival calendar, rituals & regional context |
| 10 | **Culinary Journey** | `FoodSection` | Nepalese cuisine — staples to festive dishes |
| 11 | **Wildlife** | `WildlifeSection` | Endangered species & conservation sanctuaries |
| 12 | **Interactive Map** | `InteractiveNepalMap` | Vector map of Nepal's regions |
| 13 | **Season Selector** | `SeasonSelector` | Seasonal travel activity matrix |
| 14 | **Practical Guide** | `TravelInfoSection` | Visas, safety & responsible tourism info |
| 15 | **Trip Planner** | `TravelPlannerModal` | Interactive itinerary generator (duration, style, season, budget) |
| 16 | **Navigation** | `Navbar` | Fixed sticky header with planner access |
| 17 | **Cinematic Footer** | `CinematicFooter` | Final cinematic closing section |

### 🧭 Highlights

- 🏔️ **3D Mountain Viewer** — inspect Himalayan peaks with elevation, first-ascent history, and difficulty ratings powered by Three.js & React Three Fiber
- 🗺️ **Interactive Vector Map** — explore Nepal's destinations geographically
- 📅 **Smart Trip Planner** — generates a personalized day-by-day itinerary based on duration, travel style, season, and budget
- 🎞️ **Cinematic Scrolling** — buttery-smooth navigation via Lenis with GSAP & Framer Motion choreography
- 🌦️ **Seasonal Matrix** — match activities and destinations to the best time of year
- 🦏 **Wildlife & Conservation** — endangered species profiles with national park data
- 🍜 **Culinary Database** — dishes with ingredients, flavor profiles & cultural context
- 📱 **Fully Responsive** — dark, cinematic design system built on Tailwind CSS v4

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [React 19](https://react.dev) |
| **Language** | [TypeScript 6](https://www.typescriptlang.org) |
| **Build Tool** | [Vite 8](https://vite.dev) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`) + `tailwind-merge` + `clsx` |
| **Animation** | [GSAP 3](https://gsap.com) · [Framer Motion 13](https://motion.dev) |
| **Smooth Scroll** | [Lenis](https://github.com/studio-freight/lenis) |
| **3D Graphics** | [Three.js](https://threejs.org) · [React Three Fiber](https://r3f.docs.pmnd.rs) · [Drei](https://github.com/pmndrs/drei) |
| **Icons** | [lucide-react](https://lucide.dev) |
| **Linting** | [Oxlint](https://oxc.rs) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20.x
- **npm** ≥ 10.x (bundled with Node)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/MaheshSyangtan/tourism.git
cd tourism

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** with hot module replacement.

### Production Build

```bash
# Type-check and build optimized production bundle
npm run build

# Preview the production build locally
npm run preview
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) then build for production |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint the codebase with Oxlint |

---

## 📁 Project Structure

```
├── index.html                  # Entry HTML
├── vite.config.ts              # Vite + React + Tailwind config
├── tsconfig*.json              # TypeScript configuration
├── public/                     # Static assets
└── src/
    ├── main.tsx                # App bootstrap
    ├── App.tsx                 # Section composition & planner state
    ├── components/             # Feature components (one folder per section)
    │   ├── hero/               #   CinematicHero
    │   ├── intro/              #   FactSheetSection
    │   ├── history/            #   HistoricalTimeline
    │   ├── heritage/           #   UnescoSection
    │   ├── destinations/       #   DestinationGallery
    │   ├── himalayas/          #   MountainViewer (3D)
    │   ├── trekking/           #   TrekkingGuide
    │   ├── culture/            #   CultureSection
    │   ├── festivals/          #   FestivalTimeline
    │   ├── food/               #   FoodSection
    │   ├── wildlife/           #   WildlifeSection
    │   ├── map/                #   InteractiveNepalMap
    │   ├── seasons/            #   SeasonSelector
    │   ├── practical/          #   TravelInfoSection
    │   ├── planner/            #   TravelPlannerModal
    │   ├── navigation/         #   Navbar
    │   └── footer/             #   CinematicFooter
    ├── data/                   # Typed content datasets
    │   ├── destinations.ts     #   Destinations & coordinates
    │   ├── mountains.ts        #   Peak elevations & ascents
    │   ├── treks.ts            #   Trek routes & permits
    │   ├── history.ts          #   Historical eras & figures
    │   ├── culture.ts          #   Communities & crafts
    │   ├── festivals.ts        #   Festival calendar
    │   ├── food.ts             #   Culinary database
    │   ├── wildlife.ts         #   Species & parks
    │   └── travelGuide.ts      #   Practical info & itineraries
    ├── types/                  # Shared TypeScript interfaces
    │   └── index.ts
    └── styles/                 # Global styles
```

---

## 🗃️ Data Layer

All content lives in **fully-typed TypeScript datasets** under `src/data/`, governed by interfaces in `src/types/index.ts` — including `Destination`, `Mountain`, `TrekRoute`, `Festival`, `FoodDish`, `WildlifeSpecies`, and `TravelItineraryResult`.

This makes the content easy to extend: add a new trek, festival, or destination by appending an object that satisfies the corresponding interface — the UI picks it up automatically.

---

## 🌐 Deployment

The project is a static site and can be deployed to any static host:

- **Vercel** — zero-config with the Vite preset
- **Netlify** — build command `npm run build`, publish directory `dist`
- **GitHub Pages** — push the `dist` output or use a Pages action

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository
2. **Create** a feature branch — `git checkout -b feature/amazing-feature`
3. **Commit** your changes — `git commit -m 'feat: add amazing feature'`
4. **Push** to the branch — `git push origin feature/amazing-feature`
5. **Open** a Pull Request

---

## 📄 License

This project is open source and available for educational purposes.

---

<div align="center">

**Built with ❤️ for Nepal** 🏔️

*From the Terai plains to the roof of the world.*

</div>
