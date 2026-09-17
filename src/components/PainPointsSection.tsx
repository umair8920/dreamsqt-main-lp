import React from 'react';
import { SectionPill } from './SectionPill';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const PAIN_CARDS = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="8" fill="rgba(0,0,0,0.08)"/><path d="M18 8a5 5 0 1 1 0 10A5 5 0 0 1 18 8zm-8 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#131313" strokeWidth="2" strokeLinecap="round"/><path d="M24 20l3-3m0 0l3 3m-3-3v6" stroke="#131313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Tired & Burnt Out',
    desc: "Frustrated, tired, and burnout working for another dentist's dream.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="8" fill="rgba(0,0,0,0.08)"/><circle cx="18" cy="18" r="9" stroke="#131313" strokeWidth="2"/><path d="M18 13v5l3 3" stroke="#131313" strokeWidth="2" strokeLinecap="round"/><path d="M9 9l18 18" stroke="#131313" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
    title: 'No Work-Life Balance',
    desc: 'Stressed with poor work life balance, and always working overtime.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="8" fill="rgba(0,0,0,0.08)"/><circle cx="18" cy="18" r="9" stroke="#131313" strokeWidth="2"/><path d="M18 12v12M14 14l8 0M14 22l8 0" stroke="#131313" strokeWidth="1.8" strokeLinecap="round"/></svg>
    ),
    title: 'Income Stuck',
    desc: 'Limited earning potentials, with no career progressions.',
  },
];

export const PainPointsSection: React.FC = () => (
  <section style={{ background: '#FCF6EF', padding: '80px 80px 80px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 50, alignItems: 'flex-start' }}>
      {/* Left side */}
      <div style={{ flex: '0 0 630px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Pill */}
        <SectionPill innerBg="#FCF6EF">PAIN POINTS</SectionPill>

        {/* Heading */}
        <h2 style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#131313', lineHeight: 1.1 }}>
          Still stuck being a Dental Associate
        </h2>

        {/* Image */}
        <div style={{ borderRadius: 24, overflow: 'hidden', position: 'relative', height: 400, background: '#333' }}>
          <img
            src="/pain-img.png"
            alt="Frustrated dental associate"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
          {/* Caption overlay */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
            padding: '40px 24px 20px',
          }}>
            <p style={{ fontFamily: SF, fontSize: 14, fontWeight: 400, color: '#fff' }}>
              Exhausted from long hours, unpredictable pay, and starting from zero every month?
            </p>
          </div>
        </div>
      </div>

      {/* Right side — pain point cards */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 80 }}>
        {PAIN_CARDS.map((card) => (
          <div key={card.title} style={{ background: '#FFD073', borderRadius: 20, padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {card.icon}
            <p style={{ fontFamily: SF, fontSize: 18, fontWeight: 700, color: '#131313' }}>{card.title}</p>
            <p style={{ fontFamily: SF, fontSize: 15, fontWeight: 400, color: '#131313', lineHeight: 1.55 }}>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
