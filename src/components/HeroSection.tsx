import React from 'react';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

interface HeroSectionProps {
  onJoinClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onJoinClick }) => (
  <section style={{ position: 'relative', width: '100%', height: 850, overflow: 'hidden' }}>
    {/* Background image */}
    <img
      src="/hero-bg.png"
      alt=""
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
    />
    {/* Dark overlay */}
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,10,0,0.42)' }} />

    {/* Content */}
    <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 80px 60px', background: 'rgba(0,0,0,0.20)' }}>
      {/* Pill */}
      <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.6)', borderRadius: 20, padding: '8px 18px', marginBottom: 22 }}>
        <span style={{ fontFamily: SF, fontSize: 13, fontWeight: 400, color: '#fff', letterSpacing: '0.08em' }}>DREAM SQUAT</span>
      </div>

      {/* Heading */}
      <h1 style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.1, maxWidth: 760, marginBottom: 24 }}>
        Your Roadmap to a Profitable Dental Practice
      </h1>

      {/* Subtext */}
      <p style={{ fontFamily: SF, fontSize: 24, fontWeight: 400, color: 'rgba(255,255,255,0.85)', maxWidth: 560, lineHeight: 1.55, marginBottom: 36 }}>
        A 90-day guided path to build a high-end, compliant, patient attracting clinic from scratch.
      </p>

      {/* CTA */}
      <button
        onClick={onJoinClick}
        style={{ fontFamily: SF, fontSize: 14, fontWeight: 600, color: '#fff', background: '#925E02', border: 'none', borderRadius: 8, padding: '14px 36px', cursor: 'pointer', letterSpacing: '0.04em' }}
      >
        JOIN FOR £19.99/MONTH →
      </button>
    </div>
  </section>
);
