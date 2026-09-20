import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SectionPill } from '../components/SectionPill';

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

/* 3 rows × 3 columns = 9 cards */
const ALL_RESOURCES = [...RESOURCES, ...RESOURCES, ...RESOURCES];

const DownloadIcon = () => (
  <img src="/resource-download-icon.svg" alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
);

const ResourceCard = ({ img, category, title, desc, date, featured = false }: {
  img: string; category: string; title: string; desc: string; date: string; featured?: boolean;
}) => (
  <div style={{
    borderRadius: 20,
    overflow: 'hidden',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: featured ? '0px 40px 50px 0px rgba(146,94,2,0.3)' : 'none',
  }}>
    {/* Image */}
    <div style={{ width: '100%', height: 290, overflow: 'hidden', borderRadius: '20px 20px 0 0', flexShrink: 0, position: 'relative' }}>
      <img src={img} alt={title} style={{ width: '100%', height: 'auto', position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', display: 'block' }} />
    </div>
    {/* Content */}
    <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {/* Category pill */}
      <div style={{ display: 'inline-flex', alignSelf: 'flex-start', background: 'rgba(224,194,83,0.54)', borderRadius: 30, padding: '4px 8px' }}>
        <span style={{ fontFamily: SF, fontSize: 12, color: '#131313', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{category}</span>
      </div>
      <h3 style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: '#131313', lineHeight: 1.3, margin: 0 }}>{title}</h3>
      <p style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.55, flex: 1, margin: 0 }}>{desc}</p>
      {/* Footer row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 12, marginTop: 4 }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#131313', border: 'none', borderRadius: 30, padding: '4px 12px', cursor: 'pointer' }}>
          <span style={{ fontFamily: SF, fontSize: 12, fontWeight: 590, color: '#fff', textTransform: 'uppercase' }}>Download</span>
          <DownloadIcon />
        </button>
        <span style={{ fontFamily: SF, fontSize: 10, color: '#737373' }}>{date}</span>
      </div>
    </div>
  </div>
);

export const ResourcesPage: React.FC = () => (
  <div style={{ background: CREAM }}>

    {/* ── Hero ── */}
    <section style={{ background: CREAM, overflow: 'hidden' }}>
      <Header variant="light" />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '80px 80px 0', display: 'flex', alignItems: 'flex-start', gap: 60, minHeight: 520 }}>
        {/* Left — text */}
        <div style={{ flex: '0 0 643px', display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 24, paddingBottom: 80 }}>
          {/* Pill */}
          <SectionPill innerBg={CREAM}>Free resources</SectionPill>
          {/* Heading */}
          <h1 style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#231F20', lineHeight: 1.1, margin: 0 }}>
            {'Insights that '}
            <span style={{ color: GOLD }}>build freedom</span>
          </h1>
          {/* Body */}
          <p style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: 0 }}>
            Actionable insights on turning your ideas into digital products, income, and long-term freedom.
          </p>
        </div>

        {/* Right — hero image (two tilted book covers) */}
        <div style={{ flex: 1, position: 'relative', width: '100%', maxWidth: 611, height: 'clamp(380px, 33.45vw, 482px)', minHeight: 380, margin: '0 auto' }}>
          <img
            src="/resources-book-1.png"
            alt=""
            style={{ position: 'absolute', width: '49.7%', height: 'auto', left: '6%', top: '0%', transform: 'rotate(-11.47deg)', transformOrigin: 'center center', boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)', borderRadius: 4, zIndex: 2, }}
          />
          <img
            src="/resources-book-2.png"
            alt=""
            style={{ position: 'absolute', width: '45.9%', height: 'auto', right: '6%', top: '3.9%', transform: 'rotate(11.47deg)', transformOrigin: 'center center', boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)', borderRadius: 4, zIndex: 1, }}
          />
        </div>
      </div>
    </section>

    {/* ── Resources Grid ── */}
    <section style={{ background: CARD_BG, padding: '80px 0' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {ALL_RESOURCES.map((r, i) => (
            <ResourceCard key={i} {...r} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);
