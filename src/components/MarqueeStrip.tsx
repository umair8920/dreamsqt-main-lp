import React from 'react';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const ITEM = '★ Dream Squat Conference 2026';
const ITEMS = Array(12).fill(ITEM).join('   ');

export const MarqueeStrip: React.FC = () => (
  <div className="home-marquee" style={{ background: '#7B5214', height: 56, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
    <div className="marquee-track" style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', gap: 0 }}>
      <span className="home-marquee-text" style={{ fontFamily: SF, fontSize: 18, fontWeight: 500, color: '#FFF0D1', paddingRight: 48 }}>{ITEMS}</span>
      <span className="home-marquee-text" style={{ fontFamily: SF, fontSize: 18, fontWeight: 500, color: '#FFF0D1', paddingRight: 48 }}>{ITEMS}</span>
    </div>
  </div>
);
