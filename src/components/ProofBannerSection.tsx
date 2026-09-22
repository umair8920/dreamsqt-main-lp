import React from 'react';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

export const ProofBannerSection: React.FC = () => (
  <section className="home-proof-section" style={{ position: 'relative', width: '100%', height: 960, overflow: 'hidden' }}>
    <img src="/saba-clinic.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
    {/* Base tint */}
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(19,19,19,0.45)' }} />
    {/* Vignette */}
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 38% 32% at 50% 50%, transparent 0%, rgba(19,19,19,0.97) 100%)' }} />

    <div className="home-proof-content" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 200px' }}>
      <div style={{ marginBottom: 36 }}>
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
              padding: '6px 18px',
              borderRadius: 20,
              background: 'transparent',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ fontFamily: SF, fontSize: 12, fontWeight: 500, color: '#fff', letterSpacing: '0.09em' }}>PROOF THAT IT WORKS</span>
          </div>
        </div>
      </div>
      <p className="home-proof-text" style={{ fontFamily: SF, fontSize: 32, fontWeight: 400, color: 'rgba(255,255,255,0.85)', lineHeight: 1.45, fontStyle: 'italic', maxWidth: 820, marginBottom: 0 }}>
        Tired of working for someone else, being micromanaged and watching your hard work fund another dentist dream.{' '}
        <span style={{ color: '#ECD465', fontWeight: 700, fontStyle: 'normal' }}>
          Dream Squat helps you open your own private practice in 90 days
        </span>
        {' '}so you can finally be in control , set your own income and design the clinic you've always wanted
      </p>
    </div>
  </section>
);
