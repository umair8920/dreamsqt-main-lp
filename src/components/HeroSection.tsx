import React from 'react';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

interface HeroSectionProps {
  onJoinClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onJoinClick }) => (
  <section className="home-hero" style={{ position: 'relative', width: '100%', height: 850, overflow: 'hidden' }}>
    {/* Background image */}
    <img
      src="/hero-bg.png"
      alt=""
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
    />
    {/* Dark overlay */}
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,10,0,0.42)' }} />

    {/* Content */}
    <div className="home-hero-content" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 80px 60px', background: 'rgba(0,0,0,0.20)' }}>
      {/* Pill */}
      <div className="page-load-reveal page-load-reveal--delay-1" style={{ marginBottom: 22 }}>
        <div style={{ position: 'relative', display: 'inline-block', borderRadius: 20, background: 'transparent', boxSizing: 'border-box' }}>
          {/* Gradient border only */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              padding: 1,
              borderRadius: 20,
              background:
                'linear-gradient(90deg, #925E02 2%, #C5A13B 29%, #E6CC60 50%, #F2DC6E 60%, #ECD465 67%, #DDBD4E 77%, #C49727 91%, #B07908 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              pointerEvents: 'none',
              boxSizing: 'border-box',
            }}
          />
          {/* Transparent center */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px 18px',
              borderRadius: 20,
              background: 'transparent',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ fontFamily: SF, fontSize: 13, fontWeight: 400, color: '#fff', letterSpacing: '0.08em' }}>DREAM SQUAT</span>
          </div>
        </div>
      </div>

      {/* Heading */}
      <h1 className="home-hero-title page-load-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.1, maxWidth: 760, marginBottom: 24 }}>
        Your Roadmap to a Profitable Dental Practice
      </h1>

      {/* Subtext */}
      <p className="home-hero-copy page-load-reveal page-load-reveal--delay-3" style={{ fontFamily: SF, fontSize: 24, fontWeight: 400, color: 'rgba(255,255,255,0.85)', maxWidth: 560, lineHeight: 1.55, marginBottom: 36 }}>
        A 90-day guided path to build a high-end, compliant, patient attracting clinic from scratch.
      </p>

      {/* CTA */}
      <button
        onClick={onJoinClick}
        className="home-hero-cta interactive-button page-load-reveal page-load-reveal--delay-4"
        style={{ fontFamily: SF, fontSize: 14, fontWeight: 600, color: '#fff', background: '#925E02', border: 'none', borderRadius: 8, padding: '14px 36px', cursor: 'pointer', letterSpacing: '0.04em' }}
      >
        JOIN FOR £19.99/MONTH →
      </button>
    </div>
  </section>
);
