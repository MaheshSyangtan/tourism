import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenPlanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlanner }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll + close drawer on Escape when mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [mobileMenuOpen]);

  const toggleAudio = () => {
    if (!audioRef) {
      // Create subtle wind / ambient flute sound using Web Audio API or audio URL
      const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=wind-breeze-112836.mp3');
      audio.loop = true;
      audio.volume = 0.3;
      audio.play().then(() => {
        setIsAudioPlaying(true);
      }).catch(err => console.log('Audio autoplay blocked', err));
      setAudioRef(audio);
    } else {
      if (isAudioPlaying) {
        audioRef.pause();
        setIsAudioPlaying(false);
      } else {
        audioRef.play();
        setIsAudioPlaying(true);
      }
    }
  };

  const navLinks = [
    { label: 'History', href: '#history' },
    { label: 'Heritage', href: '#heritage' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Himalayas', href: '#himalayas' },
    { label: 'Treks', href: '#treks' },
    { label: 'Culture', href: '#culture' },
    { label: 'Festivals', href: '#festivals' },
    { label: 'Map', href: '#map' },
    { label: 'Guide', href: '#guide' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#070C14]/90 backdrop-blur-md border-b border-[#D8C3A5]/15 shadow-2xl shadow-black/50'
          : 'py-6 bg-gradient-to-b from-[#070C14]/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#B83227] via-[#D98A2B] to-[#1A365D] p-[1.5px] transition-transform duration-500 group-hover:rotate-45">
            <div className="w-full h-full bg-[#070C14] rounded-full flex items-center justify-center">
              <span className="font-cinzel text-lg text-[#D8C3A5] font-bold">🇳🇵</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel font-bold text-lg tracking-wider text-white group-hover:text-[#D98A2B] transition-colors">
              NEPAL
            </span>
            <span className="text-[10px] tracking-widest text-[#D8C3A5]/70 uppercase -mt-1 font-sans">
              Discover Himalayas
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-slate-300 hover:text-[#D98A2B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B83227] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Audio Toggle + Trip Planner CTA) */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleAudio}
            title={isAudioPlaying ? 'Mute ambient sound' : 'Play ambient wind sound'}
            className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700/50 text-slate-300 hover:text-white hover:border-[#D98A2B] transition-all flex items-center gap-2 group"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-[#D98A2B] animate-pulse" />
                <span className="text-[11px] text-[#D8C3A5] hidden md:inline pr-1">Atmosphere</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-[#D98A2B]" />
                <span className="text-[11px] text-slate-400 group-hover:text-white hidden md:inline pr-1">Audio</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenPlanner}
            className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs tracking-wider uppercase focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#B83227] via-[#D98A2B] to-[#1A365D] group-hover:opacity-90 transition-opacity"></span>
            <span className="relative px-5 py-2.5 rounded-full bg-[#070C14] flex items-center gap-2 text-white group-hover:bg-transparent transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-[#D98A2B]" />
              Plan Journey
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleAudio}
            aria-label={isAudioPlaying ? 'Mute ambient sound' : 'Play ambient sound'}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            {isAudioPlaying ? <Volume2 className="w-4 h-4 text-[#D98A2B]" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-700/60 text-slate-200"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#B83227]" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#070C14]/95 backdrop-blur-xl border-b border-[#D8C3A5]/20 px-6 py-6 animate-slideDown max-h-[calc(100dvh-64px)] overflow-y-auto safe-x"
        >
          <nav className="grid grid-cols-2 gap-x-4 gap-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-widest text-slate-200 hover:text-[#D98A2B] py-3 border-b border-slate-800/60 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#D8C3A5]/50">→</span>
              </a>
            ))}
          </nav>
            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#B83227] to-[#D98A2B] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Build Custom Itinerary
              </button>
            </div>
        </div>
      )}
    </header>
  );
};
