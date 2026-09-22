import React from 'react';
import { SectionPill } from './SectionPill';
import { ScrollReveal } from './ScrollReveal';
import founder1 from '../assets/homeicons/founder 1.png' ;
import founder2 from '../assets/homeicons/founder 2.png';
import founder3 from '../assets/homeicons/founder 3.png';
import founder4 from '../assets/homeicons/founder 4.png';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const STATS = [
  { value: '3', label: 'Practices opened', img: founder2 },
  { value: '70+', label: 'Dentists mentored', img: founder3 },
  { value: '1', label: 'Complete roadmap', img: founder4 },
];

export const FounderSection: React.FC = () => (
  <section className="home-founder-section" style={{ background: '#FCF6EF', padding: '80px 80px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>

      {/* Top: photo + bio */}
      <ScrollReveal>
        <div className="home-founder-top" style={{ display: 'flex', gap: 50, alignItems: 'flex-start', marginBottom: 24 }}>
          {/* Photo */}
          <div className="home-founder-photo home-card interactive-lift" style={{ flex: '0 0 579px', height: 535, borderRadius: 20, overflow: 'hidden', background: '#ccc' }}>
            <img src="/saba.png" alt="Saba" className="home-card-image" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} />
          </div>

          {/* Bio */}
          <div className="home-founder-bio" style={{ flex: 1, paddingTop: 16 }}>
            <div style={{ marginBottom: 20 }}><SectionPill innerBg="#F4EEE5">INSTRUCTOR</SectionPill></div>
            <h2 className="home-founder-title" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#131313', lineHeight: 1.1, marginBottom: 28 }}>
              Hey, I'm Saba.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65 }}>
                I knew early on the traditional path wasn't for me. I wasn't a dentist, but I was determined to build in dentistry. I started in dental operations, studying what made clinics thrive or fail. Again and again, I saw talented associates stuck earning a day rate with no roadmap to ownership.
              </p>
              <p style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65 }}>
                So I built my own clinics then built more. Dentozen London, Dentozen Leeds, and Dentozen Harrogate: three fully private, associate-led squat practices created from scratch using a repeatable, proven system. No dental degree — just clear processes, the right people, and disciplined execution.
              </p>
              <p style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65 }}>
                Now, through Dream Squat, I help dentists move from associate to owner without costly mistakes, confusion, or years of trial and error. I've already made the mistakes so you don't have to. If you're serious about opening your own private practice, I'll show you exactly how.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Stats row */}
      <ScrollReveal variant="scale">
        <div className="home-founder-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 8 }}>
          {/* Card 1 — image with text overlay */}
          <div className="home-card interactive-lift" style={{ borderRadius: 20, overflow: 'hidden', height: 391, position: 'relative' }}>
            <img src={founder1} alt="" className="home-card-image" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180.09deg, rgba(121, 77, 0, 0) 38.64%, #000000 89.9%)' }} />
            <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
              <p style={{ fontFamily: SF, fontWeight: 400, fontSize: 18, color: '#FCF6EF', lineHeight: 1.55 }}>
                Everything she wished she'd had when she opened her first practice is now inside Dream Squat.
              </p>
            </div>
          </div>

          {/* Stat cards 2-4 */}
          {STATS.map((s) => (
            <div key={s.label} className="home-card interactive-lift" style={{ borderRadius: 20, overflow: 'hidden', height: 391, position: 'relative' }}>
              <img src={s.img} alt="" className="home-card-image" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180.09deg, rgba(121, 77, 0, 0) 38.64%, #000000 89.9%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                <p style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#FCF6EF', lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: '#FCF6EF', marginTop: 4 }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

    </div>
  </section>
);
