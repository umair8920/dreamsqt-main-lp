import React from 'react';
import { SectionPill } from './SectionPill';
import { ScrollReveal } from './ScrollReveal';
import painpoint1 from '../assets/homeicons/painpoint1.svg';
import painpoint2 from '../assets/homeicons/painpoint2.svg';
import painpoint3 from '../assets/homeicons/painpoint3.svg';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const PAIN_CARDS = [
  {
    icon: (
      <img
        src={painpoint1}
        alt="Tired & Burnt Out"
        width={50}
        height={50}
      />
    ),
    title: 'Tired & Burnt Out',
    desc: "Frustrated, tired, and burnout working for another dentist's dream.",
  },
  {
    icon: (
      <img
        src={painpoint2}
        alt="No Work-Life Balance"
        width={50}
        height={50}
      />
    ),
    title: 'No Work-Life Balance',
    desc: 'Stressed with poor work life balance, and always working overtime.',
  },
  {
    icon: (
      <img
        src={painpoint3}
        alt="No Work-Life Balance"
        width={50}
        height={50}
      />
    ),
    title: 'Income Stuck',
    desc: 'Limited earning potentials, with no career progressions.',
  },
];

export const PainPointsSection: React.FC = () => (
  <section className="home-pain-section" style={{ background: '#FCF6EF', padding: '80px 80px 80px' }}>
    <div className="home-pain-row" style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 50, alignItems: 'flex-start' }}>
      {/* Left side */}
      <div className="home-pain-left" style={{ flex: '0 0 630px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <ScrollReveal variant="left">
          <SectionPill innerBg="#FCF6EF">PAIN POINTS</SectionPill>
          <h2 className="home-pain-title" style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#131313', lineHeight: 1.1, marginTop: 24, marginBottom: 24 }}>
            Still stuck being a Dental Associate
          </h2>
          <div className="home-pain-image home-card interactive-lift" style={{ borderRadius: 24, overflow: 'hidden', position: 'relative', height: 400, background: '#333' }}>
            <img
              src="/pain-img.png"
              alt="Frustrated dental associate"
              className="home-card-image"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, top: 0,
              background: 'linear-gradient(180.09deg, rgba(121, 77, 0, 0) 38.64%, #000000 89.9%)',
              display: 'flex', alignItems: 'flex-end',
              padding: '40px 24px 20px',
            }}>
              <p style={{ fontFamily: SF, fontSize: 14, fontWeight: 400, color: '#fff' }}>
                Exhausted from long hours, unpredictable pay, and starting from zero every month?
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Right side — pain point cards */}
      <div className="home-pain-right" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {PAIN_CARDS.map((card, idx) => (
          <ScrollReveal key={card.title} variant="right" delay={(100 * (idx + 1)) as 100 | 200 | 300}>
            <div className="interactive-lift" style={{ background: '#FFD073', borderRadius: 20, padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden', }}>
              {card.icon}
              <p style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: '#925E02' }}>{card.title}</p>
              <p style={{ fontFamily: SF, fontSize: 18, fontWeight: 400, color: '#131313', lineHeight: 1.55 }}>{card.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

