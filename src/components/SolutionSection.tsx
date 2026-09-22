import React from 'react';
import { SectionPill } from './SectionPill';
import { ScrollReveal } from './ScrollReveal';
import card1 from '../assets/homeicons/card1.svg';
import card2 from '../assets/homeicons/card2.svg';
import card3 from '../assets/homeicons/card3.svg';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const CARDS = [
  {
    icon: (
      <img
        src={card1}
        alt="Tired & Burnt Out"
        width={50}
        height={50}
      />
    ),
    title: 'Set Your Own Schedule',
    desc: 'Owning your own dental practice lets you control your own schedule',
  },
  {
    icon: (
      <img
        src={card2}
        alt="Tired & Burnt Out"
        width={50}
        height={50}
      />
    ),
    title: 'Create Something You Own',
    desc: 'Opening your own clinic gives you a chance to own a valuable asset',
  },
  {
    icon: (
      <img
        src={card3}
        alt="Tired & Burnt Out"
        width={50}
        height={50}
      />
    ),
    title: 'Design It Your Way',
    desc: 'Freedom to design your own clinic, protocol, systems without any pushbacks',
  },
];

export const SolutionSection: React.FC = () => (
  <section className="home-solution-section" style={{ background: '#FCF6EF', padding: '80px 80px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      {/* Header */}
      <ScrollReveal>
        <div style={{ marginBottom: 48 }}>
          <div style={{ marginBottom: 20 }}><SectionPill innerBg="#F4EEE5">THE PROBLEM</SectionPill></div>
          <h2 className="home-solution-title" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#925E02', lineHeight: 1.1, maxWidth: 640, marginBottom: 16 }}>
            Instead, build your own dream practice
          </h2>
          <p style={{ fontFamily: SF, fontSize: 16, color: '#131313', maxWidth: 630 }}>
            Turn your knowledge into products that sell on repeat without relying on your time.
          </p>
        </div>
      </ScrollReveal>

      {/* 3 Cards */}
      <ScrollReveal variant="scale">
        <div className="home-solution-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {CARDS.map((card) => (
            <div key={card.title} className="home-solution-card home-card interactive-lift" style={{ borderRadius: 20, overflow: 'hidden', height: 704, position: 'relative', background: '#e8dcc8' }}>
              <img src="/clinic-interior.png" alt="" className="home-card-image" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(179.52deg, #F4EEE5 29.13%, rgba(255, 240, 209, 0) 51.03%)' }} />
              <div style={{ position: 'relative', zIndex: 1, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {card.icon}
                <h3 style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: '#925E02', marginTop: 6 }}>{card.title}</h3>
                <p style={{ fontFamily: SF, fontSize: 18, fontWeight: 400, color: '#131313', lineHeight: 1.55 }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);
