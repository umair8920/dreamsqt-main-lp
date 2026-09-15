import React from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeStrip } from './components/MarqueeStrip';
import { EventSection } from './components/EventSection';
import { EverythingSection } from './components/EverythingSection';
import { PainPointsSection } from './components/PainPointsSection';
import './index.css';

export default function App() {
  return (
    <div>
      {/* Hero block: TopBar + Header + Hero share the same bg image */}
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 30 }}>
          <TopBar />
        </div>
        <Header />
        <HeroSection />
      </div>

      <MarqueeStrip />

      <EventSection />

      <EverythingSection />

      <PainPointsSection />
    </div>
  );
}
