import React from 'react';
import { SectionPill } from './SectionPill';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const STATS = [
  { value: '3', label: 'Practices opened', img: '/saba-clinic.png' },
  { value: '70+', label: 'Dentists mentored', img: '/saba-clinic.png' },
  { value: '1', label: 'Complete roadmap', img: '/saba-clinic.png' },
];

export const FounderSection: React.FC = () => (
  <section style={{ background: '#FCF6EF', padding: '80px 80px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>

      {/* Top: photo + bio */}
      <div style={{ display: 'flex', gap: 50, alignItems: 'flex-start', marginBottom: 24 }}>
        {/* Photo */}
        <div style={{ flex: '0 0 579px', height: 535, borderRadius: 20, overflow: 'hidden', background: '#ccc' }}>
          <img src="/saba.png" alt="Saba" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} />
        </div>

        {/* Bio */}
        <div style={{ flex: 1, paddingTop: 16 }}>
          <div style={{ marginBottom: 20 }}><SectionPill innerBg="#F4EEE5">INSTRUCTOR</SectionPill></div>
          <h2 style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#131313', lineHeight: 1.1, marginBottom: 28 }}>
            Hey, I'm Saba.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontFamily: SF, fontSize: 15, color: '#555', lineHeight: 1.65 }}>
              I knew early on the traditional path wasn't for me. I wasn't a dentist, but I was determined to build in dentistry. I started in dental operations, studying what made clinics thrive or fail. Again and again, I saw talented associates stuck earning a day rate with no roadmap to ownership.
            </p>
            <p style={{ fontFamily: SF, fontSize: 15, color: '#555', lineHeight: 1.65 }}>
              So I built my own clinics then built more. Dentozen London, Dentozen Leeds, and Dentozen Harrogate: three fully private, associate-led squat practices created from scratch using a repeatable, proven system. No dental degree — just clear processes, the right people, and disciplined execution.
            </p>
            <p style={{ fontFamily: SF, fontSize: 15, color: '#555', lineHeight: 1.65 }}>
              Now, through Dream Squat, I help dentists move from associate to owner without costly mistakes, confusion, or years of trial and error. I've already made the mistakes so you don't have to. If you're serious about opening your own private practice, I'll show you exactly how.
            </p>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 8 }}>
        {/* Card 1 — image with text overlay */}
        <div style={{ borderRadius: 20, overflow: 'hidden', height: 391, position: 'relative' }}>
          <img src="/saba-clinic.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,5,0,0.55)' }} />
          <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
            <p style={{ fontFamily: SF, fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.55 }}>
              Everything she wished she'd had when she opened her first practice is now inside Dream Squat.
            </p>
          </div>
        </div>

        {/* Stat cards 2-4 */}
        {STATS.map((s) => (
          <div key={s.label} style={{ borderRadius: 20, overflow: 'hidden', height: 391, position: 'relative' }}>
            <img src={s.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,5,0,0.6)' }} />
            <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
              <p style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontFamily: SF, fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);
