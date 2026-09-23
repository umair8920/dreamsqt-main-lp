import React, { useEffect, useRef, useState } from 'react';
import { SectionPill } from './SectionPill';
import { ScrollReveal } from './ScrollReveal';
import practicesImage1 from '../assets/homeicons/successstory1.png';
import practicesImage2 from '../assets/homeicons/successstory2.png';
import practicesImage3 from '../assets/homeicons/successstory3.png';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const AUTO_ADVANCE_MS = 3000;
const OUT_MS = 220;

const PRACTICES = [
  {
    num: '01',
    name: 'Dentozen London',
    desc: 'From first idea to first patient in just 90 days, building a thriving private squat from the ground up.',
    image: practicesImage1,
    story: 'Before Dentozen London, many associates I met wanted their own clinic but felt stuck with leases, finance, CQC, and not knowing where to start. Using my experience in dental operations and compliance, I built it from scratch handling the site, funding, lease, CQC, branding, interiors, and full marketing and tech setup. Today, it runs as a fully private, associate-led clinic with strong patient flow and a team focused on dentistry while I focus on growth.',
    stats: [
      { label: 'First‑year revenue', value: '£689k+' },
      { label: 'Time to first patient', value: '90 days' },
    ],
  },
  {
    num: '02',
    name: 'Dentozen Leeds',
    desc: 'The same proven Dream Squat system, successfully replicated to launch a second private dental practice.',
    image: practicesImage2,
    story: 'After building Dentozen London, I took the exact same system and opened Dentozen Leeds — a second fully private squat practice, built faster, leaner, and smarter the second time around. Same process: location, lease, finance, CQC, brand, marketing, and tech stack. Proof that the Dream Squat system is repeatable.',
    stats: [
      { label: 'Built using the same system', value: '2nd location' },
      { label: 'From concept to first patient', value: '90 days' },
    ],
  },
  {
    num: '03',
    name: 'Dentozen Harrogate',
    desc: 'A third location built on a repeatable model, turning the Dream Squat approach into a scalable practice.',
    image: practicesImage3,
    story: 'Dentozen Harrogate is our third squat practice and proof that with the right system, opening a private dental clinic becomes a repeatable, scalable process. A new market, a new location, but the same blueprint: finding the right site, negotiating the lease, raising finance, achieving CQC registration, and launching with a full brand and patient attraction strategy already in place.',
    stats: [
      { label: 'Built using the same system', value: '3rd location' },
      { label: 'Associate‑led from day one', value: 'Fully private' },
    ],
  },
];

export const SuccessStoriesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [anim, setAnim] = useState<'idle' | 'out' | 'in'>('idle');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const outTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inFrameRef = useRef<number | null>(null);
  const pendingIndexRef = useRef(0);

  const goTo = (i: number) => {
    if (i === activeIndex) return;
    pendingIndexRef.current = i;
    setAnim('out');
    if (outTimeoutRef.current) clearTimeout(outTimeoutRef.current);
    outTimeoutRef.current = setTimeout(() => {
      setActiveIndex(pendingIndexRef.current);
      setAnim('in');
      if (inFrameRef.current) cancelAnimationFrame(inFrameRef.current);
      inFrameRef.current = requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnim('idle'));
      });
    }, OUT_MS);
  };

  const restartTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      goTo((pendingIndexRef.current + 1) % PRACTICES.length);
    }, AUTO_ADVANCE_MS);
  };

  useEffect(() => {
    restartTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (outTimeoutRef.current) clearTimeout(outTimeoutRef.current);
      if (inFrameRef.current) cancelAnimationFrame(inFrameRef.current);
    };
  }, []);

  const active = PRACTICES[activeIndex];

  const handleSelect = (i: number) => {
    goTo(i);
    restartTimer();
  };

  return (
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
              {PRACTICES.map((p, i) => {
                const isActive = i === activeIndex;
                return (
                  <div key={p.num}>
                    <div
                      className="home-timeline-row"
                      onMouseEnter={() => handleSelect(i)}
                      style={{ display: 'flex', gap: 24, alignItems: 'flex-start', padding: '24px 0', cursor: 'pointer', transition: 'opacity 0.3s ease', opacity: isActive ? 1 : 0.55 }}
                    >
                      <span style={{ fontFamily: SF, fontSize: 48, fontWeight: 700, color: '#925E02', lineHeight: 1, minWidth: 70, transition: 'color 0.3s ease' }}>{p.num}</span>
                      <div style={{ borderLeft: `2px solid #925E02`, alignSelf: 'stretch', margin: '4px 0', opacity: isActive ? 1 : 0.4, transition: 'opacity 0.3s ease' }} />
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontFamily: SF, fontSize: 20, fontWeight: 700, color: '#131313', marginBottom: 8 }}>{p.name}</h3>
                        <p style={{ fontFamily: SF, fontSize: 14, color: '#666', lineHeight: 1.55 }}>{p.desc}</p>
                      </div>
                    </div>
                    {i < PRACTICES.length - 1 && <div style={{ height: 1, background: 'rgba(0,0,0,0.1)' }} />}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Right — card */}
        <div className="home-stories-right home-card interactive-lift" style={{ flex: 1, display: 'flex', flexDirection: 'column', height: 664, borderTopLeftRadius: 40, borderTopRightRadius: 40, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)' }}>
          <ScrollReveal variant="right" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className={`home-story-content${anim !== 'idle' ? ` is-${anim}` : ''}`} style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
              {/* Image */}
              <div className="home-card-media" style={{ height: 358, flexShrink: 0, position: 'relative', background: '#ccc' }}>
                <img src={active.image} alt={active.name} className="home-card-image" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              {/* Text + stats */}
              <div style={{ padding: '32px 36px', flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                <p
                  style={{
                    fontFamily: SF,
                    fontSize: 14,
                    color: '#131313',
                    lineHeight: 1.65,
                    marginBottom: 28,
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 5,
                    overflow: 'hidden',
                  }}
                >
                  {active.story}
                </p>
                <div className="home-stories-stats" style={{ display: 'flex', gap: 40, marginTop: 'auto' }}>
                  {active.stats.map((stat) => (
                    <div key={stat.label}>
                      <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 40, color: '#131313', marginBottom: 4 }}>{stat.label}</p>
                      <p style={{ fontFamily: SF, fontSize: 44, fontWeight: 510, color: '#131313' }}>{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
