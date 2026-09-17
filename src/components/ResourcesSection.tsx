import React from 'react';
import { SectionPill } from './SectionPill';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 2v7M4 6l3 3 3-3M2 11h10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
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

export const ResourcesSection: React.FC = () => (
  <section style={{ background: '#F4EEE5', padding: '80px 80px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ marginBottom: 20 }}>
          <SectionPill innerBg="#F4EEE5">FREE RESOURCES</SectionPill>
        </div>
        <h2 style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#131313', lineHeight: 1.1, maxWidth: 580 }}>
          From <span style={{ color: '#C58F28' }}>curiosity</span> to clinic owner
        </h2>
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {RESOURCES.map((r) => (
          <div key={r.title} style={{ borderRadius: 20, overflow: 'hidden', background: '#fff', display: 'flex', flexDirection: 'column' }}>
            {/* Image */}
            <div style={{ height: 290, overflow: 'hidden' }}>
              <img src={r.img} alt={r.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            {/* Content */}
            <div style={{ padding: '24px 24px 28px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Category pill */}
              <div style={{ display: 'inline-flex', alignSelf: 'flex-start', background: '#F5C842', borderRadius: 6, padding: '3px 10px' }}>
                <span style={{ fontFamily: SF, fontSize: 11, fontWeight: 600, color: '#131313', letterSpacing: '0.04em' }}>{r.category}</span>
              </div>
              <h3 style={{ fontFamily: SF, fontSize: 18, fontWeight: 700, color: '#131313', lineHeight: 1.3 }}>{r.title}</h3>
              <p style={{ fontFamily: SF, fontSize: 14, color: '#666', lineHeight: 1.55, flex: 1 }}>{r.desc}</p>
              {/* Footer row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#131313', border: 'none', borderRadius: 6, padding: '8px 16px', cursor: 'pointer' }}>
                  <span style={{ fontFamily: SF, fontSize: 13, fontWeight: 600, color: '#fff' }}>DOWNLOAD</span>
                  <DownloadIcon />
                </button>
                <span style={{ fontFamily: SF, fontSize: 11, color: '#999' }}>{r.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
