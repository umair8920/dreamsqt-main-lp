import React from 'react';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

export const ProofBannerSection: React.FC = () => (
  <section style={{ position: 'relative', width: '100%', height: 960, overflow: 'hidden' }}>
    <img src="/saba-clinic.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
    {/* Base tint */}
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(19,19,19,0.45)' }} />
    {/* Vignette */}
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 38% 32% at 50% 50%, transparent 0%, rgba(19,19,19,0.97) 100%)' }} />

    <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 200px' }}>
      <div style={{ display: 'inline-flex', border: '1px solid rgba(255,255,255,0.45)', borderRadius: 20, padding: '6px 18px', marginBottom: 36 }}>
        <span style={{ fontFamily: SF, fontSize: 12, fontWeight: 500, color: '#fff', letterSpacing: '0.09em' }}>PROOF THAT IT WORKS</span>
      </div>
      <p style={{ fontFamily: SF, fontSize: 32, fontWeight: 400, color: 'rgba(255,255,255,0.85)', lineHeight: 1.45, fontStyle: 'italic', maxWidth: 820, marginBottom: 0 }}>
        Tired of working for someone else, being micromanaged and watching your hard work fund another dentist dream.{' '}
        <span style={{ color: '#F5C842', fontWeight: 700, fontStyle: 'normal' }}>
          Dream Squat helps you open your own private practice in 90 days
        </span>
        {' '}so you can finally be in control , set your own income and design the clinic you've always wanted
      </p>
    </div>
  </section>
);
