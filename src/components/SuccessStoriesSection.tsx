import React from 'react';
import { SectionPill } from './SectionPill';
import { ScrollReveal } from './ScrollReveal';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const PRACTICES = [
  { num: '01', name: 'Dentozen London', desc: 'From first idea to first patient in just 90 days, building a thriving private squat from the ground up.' },
  { num: '02', name: 'Dentozen Leeds', desc: 'The same proven Dream Squat system, successfully replicated to launch a second private dental practice.' },
  { num: '03', name: 'Dentozen Harrogate', desc: 'A third location built on a repeatable model, turning the Dream Squat approach into a scalable practice.' },
];

export const SuccessStoriesSection: React.FC = () => (
  <section className="home-stories-section" style={{ background: '#FCF6EF', padding: '80px 80px' }}>
    <div className="home-stories-row" style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 50, alignItems: 'flex-start' }}>

      {/* Left */}
      <div className="home-stories-left" style={{ flex: '0 0 580px' }}>
        <ScrollReveal variant="left">
          <div style={{ marginBottom: 20 }}><SectionPill innerBg="#FCF6EF">CUSTOMER SUCCESS STORIES</SectionPill></div>
          <h2 className="home-stories-title" style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, lineHeight: 1.1, marginBottom: 20 }}>
            <span style={{ color: '#131313' }}>Three practices.</span><br />
            <span style={{ color: '#925E02' }}>One proven system.</span>
          </h2>
          <p style={{ fontFamily: SF, fontSize: 15, color: '#666', lineHeight: 1.6, marginBottom: 48, maxWidth: 560 }}>
            See how the Dream Squat system helped turn an idea into three successful private dental practices, from London to Leeds and Harrogate.
          </p>

          {/* Timeline items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PRACTICES.map((p, i) => (
              <div key={p.num}>
                <div className="home-timeline-row" style={{ display: 'flex', gap: 24, alignItems: 'flex-start', padding: '24px 0' }}>
                  <span style={{ fontFamily: SF, fontSize: 48, fontWeight: 700, color: '#925E02', lineHeight: 1, minWidth: 70 }}>{p.num}</span>
                  <div style={{ borderLeft: '2px solid #925E02', alignSelf: 'stretch', margin: '4px 0', opacity: 0.4,}} />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: SF, fontSize: 20, fontWeight: 700, color: '#131313', marginBottom: 8 }}>{p.name}</h3>
                    <p style={{ fontFamily: SF, fontSize: 14, color: '#666', lineHeight: 1.55 }}>{p.desc}</p>
                  </div>
                </div>
                {i < PRACTICES.length - 1 && <div style={{ height: 1, background: 'rgba(0,0,0,0.1)' }} />}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Right — card */}
      <div className="home-stories-right home-card interactive-lift" style={{ flex: 1, display: 'flex', flexDirection: 'column', borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)' }}>
        <ScrollReveal variant="right" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Image */}
          <div className="home-card-media" style={{ height: 358, position: 'relative', background: '#ccc' }}>
            <img src="/practices-clinic.png" alt="Dentozen dental clinic" className="home-card-image" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          {/* Text + stats */}
          <div style={{ padding: '32px 36px', flex: 1 }}>
            <p style={{ fontFamily: SF, fontSize: 14, color: '#131313', lineHeight: 1.65, marginBottom: 28 }}>
              Before Dentozen London, many associates I met wanted their own clinic but felt stuck with leases, finance, CQC, and not knowing where to start. Using my experience in dental operations and compliance, I built it from scratch handling the site, funding, lease, CQC, branding, interiors, and full marketing and tech setup. Today, it runs as a fully private, associate-led clinic with strong patient flow and a team focused on dentistry while I focus on growth.
            </p>
            <div className="home-stories-stats" style={{ display: 'flex', gap: 40 }}>
              <div>
                <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 40, color: '#131313', marginBottom: 4 }}>First‑year revenue</p>
                <p style={{ fontFamily: SF, fontSize: 44, fontWeight: 510, color: '#131313' }}>£689k+</p>
              </div>
              <div>
                <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 40, color: '#131313', marginBottom: 4 }}>First‑year revenue</p>
                <p style={{ fontFamily: SF, fontSize: 44, fontWeight: 510, color: '#131313' }}>90 days</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

    </div>
  </section>
);
