import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import featurecard1 from '../assets/homeicons/featurecard1.svg';
import featurecard2 from '../assets/homeicons/featurecard2.svg';
import featurecard3 from '../assets/homeicons/featurecard3.svg';


const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const IconSystem = () => (
  <img
        src={featurecard1}
        alt="Tired & Burnt Out"
        width={50}
        height={50}
      />
);

const IconHand = () => (
  <img
        src={featurecard2}
        alt="Tired & Burnt Out"
        width={50}
        height={50}
      />
);

const IconBulb = () => (
  <img
        src={featurecard3}
        alt="Tired & Burnt Out"
        width={50}
        height={50}
      />
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
  <div style={{ marginBottom: 20 }}>
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
        <span style={{ fontFamily: SF, fontSize: 12, fontWeight: 500, color: '#fff', letterSpacing: '0.09em' }}>IS THIS YOU?</span>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ Icon, title, desc }: { Icon: React.FC; title: string; desc: string }) => (
  <div className="interactive-lift" style={{ background: '#FFD073', borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden', boxSizing: 'border-box' }}>
    <Icon />
    <h3 style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: '#925E02' }}>{title}</h3>
    <p style={{ fontFamily: SF, fontSize: 18, fontWeight: 400, color: '#925E02', lineHeight: 1.6 }}>{desc}</p>
  </div>
);

export const FeatureCardsSection: React.FC = () => (
  <section className="home-feature-section" style={{ background: '#131313', padding: '80px 80px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>

      {/* Block 1 */}
      <ScrollReveal>
        <div style={{ marginBottom: 60 }}>
          <Pill />
          <h2 className="home-feature-title" style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#fff', lineHeight: 1.1, maxWidth: 700, marginBottom: 16 }}>
            Learn the exact system to{' '}
            <span style={{ color: '#925E02' }}>build your Dream Squat</span>
          </h2>
          <p style={{ fontFamily: SF, fontSize: 16, color: '#FFFFFF', maxWidth: 720, marginBottom: 40 }}>
            Designed for associates who want to own a clinic, create freedom, and grow a patient list from day one
          </p>
          <div className="home-feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {ROW1.map((c) => <FeatureCard key={c.title} Icon={c.Icon} title={c.title} desc={c.desc} />)}
          </div>
        </div>
      </ScrollReveal>

      {/* Block 2 */}
      <ScrollReveal variant="scale">
        <div>
          <Pill />
          <h2 className="home-feature-title" style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#fff', lineHeight: 1.1, maxWidth: 700, marginBottom: 16 }}>
            For associates who want more than{' '}
            <span style={{ color: '#925E02', fontStyle: 'italic' }}>a day rate</span>
          </h2>
          <p style={{ fontFamily: SF, fontSize: 16, color: '#FCF6EF', maxWidth: 720, marginBottom: 40 }}>
            If you're a dentist with a skill and a vision, Dream Squat shows you exactly how to turn it into your own associate‑led practice not "one day", but in the next 90 days.
          </p>
          <div className="home-feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {ROW2.map((c) => <FeatureCard key={c.title} Icon={c.Icon} title={c.title} desc={c.desc} />)}
          </div>
        </div>
      </ScrollReveal>

    </div>
  </section>
);
