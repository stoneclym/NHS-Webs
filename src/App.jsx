import { useState, useEffect } from 'react';
import { Nav, Footer } from './components/Nav';
import {
  TweaksPanel,
  TweakSection,
  TweakSelect,
  TweakRadio,
  TweakToggle,
  useTweaks,
} from './components/TweaksPanel';
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Volunteer from './pages/Volunteer';
import Meetings from './pages/Meetings';
import Contact from './pages/Contact';

const TWEAK_DEFAULTS = {
  colorTheme: 'Navy & Gold',
  density: 'Comfortable',
  showPillars: true,
  showMission: true,
  showQuickLinks: true,
  showGallery: true,
};

const THEMES = {
  'Navy & Gold': {
    '--navy': '#0e1a36',
    '--navy-deep': '#0a1228',
    '--navy-ink': '#0e1a36',
    '--light-blue': '#5aa4df',
    '--gold': '#a5915f',
    '--gold-bright': '#c4a875',
    '--paper': '#fdfbf6',
    '--parchment': '#faf7f0',
  },
  'Hoggard Blues': {
    '--navy': '#21386c',
    '--navy-deep': '#16264a',
    '--navy-ink': '#0e1a36',
    '--light-blue': '#5aa4df',
    '--gold': '#5aa4df',
    '--gold-bright': '#7cb8e6',
    '--paper': '#fdfdfd',
    '--parchment': '#f3f7fb',
  },
  'Editorial Ink': {
    '--navy': '#1a1a1a',
    '--navy-deep': '#0a0a0a',
    '--navy-ink': '#000000',
    '--light-blue': '#5aa4df',
    '--gold': '#a5915f',
    '--gold-bright': '#c4a875',
    '--paper': '#fbfaf6',
    '--parchment': '#f1ede0',
  },
  'Classic Crimson': {
    '--navy': '#7a1f1f',
    '--navy-deep': '#5a1414',
    '--navy-ink': '#3d0d0d',
    '--light-blue': '#5aa4df',
    '--gold': '#a5915f',
    '--gold-bright': '#c4a875',
    '--paper': '#fdfaf6',
    '--parchment': '#f7f0e7',
  },
};

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = useState('Home');

  useEffect(() => {
    const root = document.documentElement;
    const theme = THEMES[tweaks.colorTheme] || THEMES['Navy & Gold'];
    Object.entries(theme).forEach(([k, v]) => root.style.setProperty(k, v));
    root.style.setProperty('--density', tweaks.density === 'Compact' ? '0.85' : tweaks.density === 'Spacious' ? '1.15' : '1');
  }, [tweaks.colorTheme, tweaks.density]);

  const handleNavigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const sections = {
    pillars: tweaks.showPillars,
    mission: tweaks.showMission,
    quickLinks: tweaks.showQuickLinks,
    gallery: tweaks.showGallery,
  };

  return (
    <>
      <Nav active={page} onNavigate={handleNavigate} density={tweaks.density.toLowerCase()} />
      <div key={page}>
        {page === 'Home' && <Home onNavigate={handleNavigate} sections={sections} />}
        {page === 'About' && <About />}
        {page === 'Membership' && <Membership />}
        {page === 'Volunteer' && <Volunteer />}
        {page === 'Meetings' && <Meetings />}
        {page === 'Contact' && <Contact />}
      </div>
      <Footer onNavigate={handleNavigate} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Theme">
          <TweakSelect
            label="Color theme"
            value={tweaks.colorTheme}
            options={['Navy & Gold', 'Hoggard Blues', 'Editorial Ink', 'Classic Crimson']}
            onChange={(v) => setTweak('colorTheme', v)}
          />
          <TweakRadio
            label="Density"
            value={tweaks.density}
            options={['Compact', 'Comfortable', 'Spacious']}
            onChange={(v) => setTweak('density', v)}
          />
        </TweakSection>
        <TweakSection title="Home Page Sections">
          <TweakToggle label="Four Pillars" value={tweaks.showPillars} onChange={(v) => setTweak('showPillars', v)} />
          <TweakToggle label="Mission Quote" value={tweaks.showMission} onChange={(v) => setTweak('showMission', v)} />
          <TweakToggle label="Quick Links" value={tweaks.showQuickLinks} onChange={(v) => setTweak('showQuickLinks', v)} />
          <TweakToggle label="Photo Gallery" value={tweaks.showGallery} onChange={(v) => setTweak('showGallery', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

export default App;
