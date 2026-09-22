import React from 'react';
import { SectionPill } from './SectionPill';
import { ScrollReveal } from './ScrollReveal';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const DownloadIcon = () => (
  <img src="/resource-download-icon.svg" alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
);

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

const ResourceCard = ({
  img,
  category,
  title,
  desc,
  date,
}: {
  img: string;
  category: string;
  title: string;
  desc: string;
  date: string;
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

export const ResourcesSection: React.FC = () => (
  <section className="resources-grid-section" style={{ background: '#F4EEE5', padding: '80px 80px' }}>
    <div className="resources-grid-shell" style={{ maxWidth: 1280, margin: '0 auto' }}>
      {/* Header */}
      <ScrollReveal>
        <div style={{ marginBottom: 48 }}>
          <div style={{ marginBottom: 20 }}>
            <SectionPill innerBg="#F4EEE5">FREE RESOURCES</SectionPill>
          </div>
          <h2 style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#131313', lineHeight: 1.1, maxWidth: 580 }}>
            From <span style={{ color: '#925E02' }}>curiosity</span> to clinic owner
          </h2>
        </div>
      </ScrollReveal>

      {/* Cards */}
      <div className="resources-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 24 }}>
        {RESOURCES.map((r, i) => (
          <ScrollReveal key={r.title} variant="scale" delay={([100, 200, 300][i % 3]) as 100 | 200 | 300}>
            <ResourceCard {...r} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
