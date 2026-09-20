import React from 'react';
import { SectionPill } from './SectionPill';
import { ScrollReveal } from './ScrollReveal';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const IconSystem = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect width="44" height="44" rx="10" fill="rgba(0,0,0,0.1)"/>
    <path d="M22 12v4M16 14.5l2.8 2.8M12 22h4M14.5 28l2.8-2.8M22 32v-4M27.5 29.2l2.8 2.8M32 22h-4M29.5 15.8l-2.8 2.8" stroke="#131313" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="22" cy="22" r="4" stroke="#131313" strokeWidth="1.8"/>
  </svg>
);

const IconHand = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect width="44" height="44" rx="10" fill="rgba(0,0,0,0.1)"/>
    <path d="M14 26c0 4 3.6 7 8 7s8-3 8-7v-6h-4v-6a2 2 0 0 0-4 0v6h-4v6z" stroke="#131313" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M22 14v4" stroke="#131313" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconBulb = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect width="44" height="44" rx="10" fill="rgba(0,0,0,0.1)"/>
    <path d="M22 13a7 7 0 0 1 7 7c0 2.8-1.6 5.2-4 6.5V29h-6v-2.5c-2.4-1.3-4-3.7-4-6.5a7 7 0 0 1 7-7z" stroke="#131313" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M19 31h6" stroke="#131313" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const ROW1 = [
  { Icon: IconSystem, title: 'Build with a proven system', desc: 'Stop guessing and follow a clear roadmap for launching your dream squat successfully.' },
  { Icon: IconHand, title: 'Attract patients early', desc: 'Set up your marketing, brand, and website before launch so patients are ready when you open.' },
  { Icon: IconBulb, title: 'Own your future', desc: 'Become an associate-led practice owner and build a business that reflects your vision and values.' },
];

const ROW2 = [
  { Icon: IconSystem, title: 'Attract patients before you open', desc: 'Build your brand, launch your website, and collect enquiries—so you open with a warm list, not an empty diary.' },
  { Icon: IconHand, title: 'Work on your terms, in your own clinic', desc: 'Choose your hours, your fees, and your treatment mix without UDA pressure or someone else\'s targets.' },
  { Icon: IconBulb, title: 'Build a practice that runs without you', desc: 'Design systems, hire the right team, and build an associate-led practice that grows without you in surgery.' },
];

const Pill = () => (
  <div style={{ marginBottom: 20 }}><SectionPill innerBg="#FCF6EF">IS THIS YOU?</SectionPill></div>
);

const FeatureCard = ({ Icon, title, desc }: { Icon: React.FC; title: string; desc: string }) => (
  <div style={{ background: '#FFD073', borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
    <Icon />
    <h3 style={{ fontFamily: SF, fontSize: 18, fontWeight: 700, color: '#131313' }}>{title}</h3>
    <p style={{ fontFamily: SF, fontSize: 14, color: '#444', lineHeight: 1.6 }}>{desc}</p>
  </div>
);

export const FeatureCardsSection: React.FC = () => (
  <section style={{ background: '#131313', padding: '80px 80px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>

      {/* Block 1 */}
      <ScrollReveal>
        <div style={{ marginBottom: 60 }}>
          <Pill />
          <h2 style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#fff', lineHeight: 1.1, maxWidth: 700, marginBottom: 16 }}>
            Learn the exact system to{' '}
            <span style={{ color: '#C58F28' }}>build your Dream Squat</span>
          </h2>
          <p style={{ fontFamily: SF, fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 720, marginBottom: 40 }}>
            Designed for associates who want to own a clinic, create freedom, and grow a patient list from day one
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {ROW1.map((c) => <FeatureCard key={c.title} Icon={c.Icon} title={c.title} desc={c.desc} />)}
          </div>
        </div>
      </ScrollReveal>

      {/* Block 2 */}
      <ScrollReveal variant="scale">
        <div>
          <Pill />
          <h2 style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#fff', lineHeight: 1.1, maxWidth: 700, marginBottom: 16 }}>
            For associates who want more than{' '}
            <span style={{ color: '#C58F28', fontStyle: 'italic' }}>a day rate</span>
          </h2>
          <p style={{ fontFamily: SF, fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 720, marginBottom: 40 }}>
            If you're a dentist with a skill and a vision, Dream Squat shows you exactly how to turn it into your own associate‑led practice not "one day", but in the next 90 days.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {ROW2.map((c) => <FeatureCard key={c.title} Icon={c.Icon} title={c.title} desc={c.desc} />)}
          </div>
        </div>
      </ScrollReveal>

    </div>
  </section>
);
