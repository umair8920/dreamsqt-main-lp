import React from 'react';
import { SectionPill } from './SectionPill';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const CARDS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="rgba(146,94,2,0.12)"/>
        <path d="M16 8v4M12 10.5l2.8 2.8M8 16h4M10.5 20l2.8-2.8M16 24v-4M19.5 21.2l2.8 2.8M24 16h-4M21.5 11.8l-2.8 2.8" stroke="#925E02" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="3" stroke="#925E02" strokeWidth="1.8"/>
      </svg>
    ),
    title: 'Set Your Own Schedule',
    desc: 'Owning your own dental practice lets you control your own schedule',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="rgba(146,94,2,0.12)"/>
        <path d="M11 21c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#925E02" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="16" cy="13" r="3" stroke="#925E02" strokeWidth="1.8"/>
        <path d="M19 19l4 2-1 4H10l-1-4 4-2" stroke="#925E02" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Create Something You Own',
    desc: 'Opening your own clinic gives you a chance to own a valuable asset',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="rgba(146,94,2,0.12)"/>
        <path d="M16 9a5 5 0 0 1 5 5c0 2-1.2 3.7-3 4.6V21h-4v-2.4C12.2 17.7 11 16 11 14a5 5 0 0 1 5-5z" stroke="#925E02" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M13 23h6" stroke="#925E02" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Design It Your Way',
    desc: 'Freedom to design your own clinic, protocol, systems without any pushbacks',
  },
];

export const SolutionSection: React.FC = () => (
  <section style={{ background: '#FCF6EF', padding: '80px 80px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ marginBottom: 20 }}><SectionPill innerBg="#F4EEE5">THE PROBLEM</SectionPill></div>
        <h2 style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#131313', lineHeight: 1.1, maxWidth: 640, marginBottom: 16 }}>
          Instead, build your own dream practice
        </h2>
        <p style={{ fontFamily: SF, fontSize: 16, color: '#666', maxWidth: 630 }}>
          Turn your knowledge into products that sell on repeat without relying on your time.
        </p>
      </div>

      {/* 3 Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
        {CARDS.map((card) => (
          <div key={card.title} style={{ borderRadius: 20, overflow: 'hidden', height: 704, position: 'relative', background: '#e8dcc8' }}>
            {/* Background image */}
            <img src="/clinic-interior.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
            {/* Top gradient overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #F4EEE5 32%, rgba(244,238,229,0) 52%)' }} />
            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {card.icon}
              <h3 style={{ fontFamily: SF, fontSize: 20, fontWeight: 700, color: '#C58F28', marginTop: 6 }}>{card.title}</h3>
              <p style={{ fontFamily: SF, fontSize: 14, color: '#555', lineHeight: 1.55 }}>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
