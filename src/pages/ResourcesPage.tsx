import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SectionPill } from '../components/SectionPill';
import { ScrollReveal } from '../components/ScrollReveal';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#925E02';
const CREAM = '#FCF6EF';
const CARD_BG = '#F4EEE5';

const RESOURCES = [
  {
    img: '/resource-1.png',
    category: 'CQC REGISTRATION PROCESS',
    title: 'Guidance for Dentists for the New CQC Registration Process',
    desc: 'The Care Quality Commission (CQC) is the independent health regulator for England.',
    date: 'Last updated: 24 Aug 2026',
  },
  {
    img: '/resource-2.png',
    category: 'DENTAL CLINICS',
    title: 'The 2026 Roadmap to Your Dream Dental Squat',
    desc: 'Owning a practice used to be the "final chapter" of a career.',
    date: 'Last updated: 24 Aug 2026',
  },
  {
    img: '/resource-3.png',
    category: 'CQC REGISTRATION PROCESS',
    title: 'The Squat Practice Budget Calculator',
    desc: 'The exact cost breakdown for opening a private squat dental practice based on 3 real builds.',
    date: 'Last updated: 24 Aug 2026',
  },
];

const ALL_RESOURCES = [...RESOURCES, ...RESOURCES, ...RESOURCES];

const DownloadIcon = () => (
  <img src="/resource-download-icon.svg" alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
);

const ResourceCard = ({
  img,
  category,
  title,
  desc,
  date,
  featured = false,
}: {
  img: string;
  category: string;
  title: string;
  desc: string;
  date: string;
  featured?: boolean;
}) => (
  <div
    className="interactive-lift resources-card"
    style={{
      borderRadius: 20,
      overflow: 'hidden',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxShadow: featured ? '0px 40px 50px 0px rgba(146,94,2,0.3)' : 'none',
    }}
  >
    <div
      className="resources-card-media"
      style={{
        width: '100%',
        height: 290,
        overflow: 'hidden',
        borderRadius: '20px 20px 0 0',
        flexShrink: 0,
        position: 'relative',
      }}
    >
      <img
        className="resources-card-image"
        src={img}
        alt={title}
        style={{
          width: '100%',
          height: 'auto',
          position: 'absolute',
          top: '50%',
          left: 0,
          display: 'block',
        }}
      />
    </div>

    <div className="resources-card-body interactive-text-parent" style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div
        className="resources-card-badge"
        style={{
          display: 'inline-flex',
          alignSelf: 'flex-start',
          background: 'rgba(224,194,83,0.54)',
          borderRadius: 30,
          padding: '4px 8px',
        }}
      >
        <span className="interactive-text" style={{ fontFamily: SF, fontSize: 12, color: '#131313', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
          {category}
        </span>
      </div>

      <h3 className="interactive-text resources-card-title" style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: '#131313', lineHeight: 1.3, margin: 0 }}>
        {title}
      </h3>

      <p className="interactive-text resources-card-desc" style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.55, flex: 1, margin: 0 }}>
        {desc}
      </p>

      <div className="resources-card-meta" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 12, marginTop: 4 }}>
        <button
          className="interactive-button resources-card-button"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: '#131313',
            border: 'none',
            borderRadius: 30,
            padding: '4px 12px',
            cursor: 'pointer',
          }}
        >
          <span className="interactive-text" style={{ fontFamily: SF, fontSize: 12, fontWeight: 590, color: '#fff', textTransform: 'uppercase' }}>
            Download
          </span>
          <DownloadIcon />
        </button>
        <span className="interactive-text resources-card-date" style={{ fontFamily: SF, fontSize: 10, color: '#737373' }}>
          {date}
        </span>
      </div>
    </div>
  </div>
);

export const ResourcesPage: React.FC = () => (
  <div className="resources-page" style={{ background: CREAM }}>
    <section className="resources-hero" style={{ background: CREAM, overflow: 'hidden' }}>
      <Header variant="light" />

      <div className="resources-hero-inner" style={{ maxWidth: 1440, margin: '0 auto', padding: '80px 80px 0', display: 'flex', alignItems: 'flex-start', gap: 60, minHeight: 520 }}>
        <div className="resources-hero-copy" style={{ flex: '0 0 643px', display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 24, paddingBottom: 80 }}>
          <ScrollReveal variant="left" className="resources-hero-copy-reveal">
            <div className="page-load-reveal page-load-reveal--delay-1" style={{ display: 'inline-flex' }}>
              <SectionPill innerBg={CREAM}>Free resources</SectionPill>
            </div>
            <h1 className="page-load-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#231F20', lineHeight: 1.1, margin: '20px 0 0' }}>
              {'Insights that '}
              <span style={{ color: GOLD }}>build freedom</span>
            </h1>
            <p className="page-load-reveal page-load-reveal--delay-3" style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: '20px 0 0' }}>
              Actionable insights on turning your ideas into digital products, income, and long-term freedom.
            </p>
          </ScrollReveal>
        </div>

        <div className="resources-hero-visual interactive-lift" style={{ flex: 1, height: 440, position: 'relative', overflow: 'hidden' }}>
          <ScrollReveal variant="right" style={{ height: '100%' }}>
            <img className="resources-hero-image" src="/resources-hero.png" alt="Free resources" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center' }} />
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section className="resources-grid-section" style={{ background: CARD_BG, padding: '80px 0 120px' }}>
      <div className="resources-grid-shell" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
        <div className="resources-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 24 }}>
          {ALL_RESOURCES.map((r, i) => (
            <ScrollReveal key={`${r.title}-${i}`} variant="scale" delay={([100, 200, 300, 400][i % 4]) as 100 | 200 | 300 | 400}>
              <ResourceCard {...r} featured={i === 1} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);
