import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SectionPill } from './SectionPill';
import { ScrollReveal } from './ScrollReveal';
import founder1 from '../assets/homeicons/founder 1.png' ;
import founder2 from '../assets/homeicons/founder 2.png';
import founder3 from '../assets/homeicons/founder 3.png';
import founder4 from '../assets/homeicons/founder 4.png';
import portal1 from '../assets/dsportal/portal1.png'
import portal2 from '../assets/dsportal/portal2.png'
import portal3 from '../assets/dsportal/portal3.png'
import portal4 from '../assets/dsportal/portal4.png'
import portal5 from '../assets/dsportal/portal5.png'
import portal6 from '../assets/dsportal/portal6.png'
import portal7 from '../assets/dsportal/portal7.png'
import locationicon from '../assets/dsportal/locationicon.svg'
import cameraicon from '../assets/dsportal/cameraicon.svg'
import mybuildicon from '../assets/dsportal/mybuildicon.svg'
import calculatoricon from '../assets/dsportal/calculatoricon.svg'
import fileicon from '../assets/dsportal/fileicon.svg'
import suppliericon from '../assets/dsportal/suppliericon.svg'
import communityicon from '../assets/dsportal/communityicon.svg'

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#925E02';
const DARK = '#131313';
const CREAM = '#FCF6EF';
const CHIP = '#F4EEE5';

const STATS = [
  { value: '3', label: 'Practices opened', img: founder2 },
  { value: '70+', label: 'Dentists mentored', img: founder3 },
  { value: '1', label: 'Complete roadmap', img: founder4 },
];

const AUTO_ROTATE_MS = 5000;
const IDLE_BEFORE_AUTO_MS = 6000;

type ExplorerPoint = { n?: string; text: string };
type ExplorerTab = {
  key: string;
  label: string;
  icon: string;
  pill: string;
  heading: string;
  paragraphs: string[];
  listTitle?: string;
  bullets?: boolean;
  points?: ExplorerPoint[];
  closing?: string;
  image: string;
};

const EXPLORER_TABS: ExplorerTab[] = [
  {
    key: 'location',
    label: 'AI Location Finder',
    icon: locationicon,
    pill: 'AI LOCATION FINDER',
    heading: 'Find the right location before you commit.',
    paragraphs: [
      'Dream Squat analyses local demographics, competition, NHS capacity, deprivation data and growth signals then uses AI to help you understand whether the location is worth pursuing and whether a private or mixed model makes sense.',
    ],
    points: [{ text: 'Postcode search' }, { text: 'Map' }, { text: 'AI analysis' }, { text: 'Recommendation' }],
    image: portal1,
  },
  {
    key: 'courses',
    label: 'Courses',
    icon: cameraicon,
    pill: '5-MODULE COURSE',
    heading: 'A clear roadmap from zero to open.',
    paragraphs: [
      'Five practical modules, filmed by Saba and built around the exact framework she uses when mentoring dentists.',
      'Short, focused lessons. Real examples. Real case studies. No unnecessary theory.',
    ],
    listTitle: 'The 5 Modules',
    points: [
      { n: '01', text: 'Finding the Right Location' },
      { n: '02', text: 'Business Planning & Fundamentals' },
      { n: '03', text: 'CQC Registration' },
      { n: '04', text: 'Fit-Out & Equipment' },
      { n: '05', text: 'Social Media & Marketing' },
    ],
    closing: "Learn what matters. Skip what doesn't.",
    image: portal2,
  },
  {
    key: 'journey',
    label: 'My Build Journey',
    icon: mybuildicon,
    pill: 'BUILD JOURNEY',
    heading: 'Build your practice. Document the journey.',
    paragraphs: [
      "Your squat isn't just a project. It's something you'll want to remember.",
      'The Build Journey lets you track milestones, record decisions, manage your budget and document your progress from day one.',
    ],
    closing: "One day, you'll look back and see exactly how you built something from nothing.",
    image: portal3,
  },
  {
    key: 'calculator',
    label: 'Cost Calculator',
    icon: calculatoricon,
    pill: 'COST CALCULATOR',
    heading: 'Know your numbers before you commit.',
    paragraphs: [
      'Model your startup costs, revenue projections and break-even point based on your practice size, location and fee structure.',
    ],
    closing: 'Make the numbers work before you spend the money.',
    image: portal4,
  },
  {
    key: 'resources',
    label: 'Resources',
    icon: fileicon,
    pill: 'RESOURCE LIBRARY',
    heading: 'Stop searching. Start using.',
    paragraphs: ['Get instant access to 100+ professionally prepared resources designed specifically for squat practice owners.'],
    listTitle: 'Resource examples',
    bullets: true,
    points: [
      { text: 'Lease negotiation checklists' },
      { text: 'CQC registration timelines' },
      { text: 'HTM 01-05 guides' },
      { text: 'Business plan templates' },
      { text: 'Supplier briefing documents' },
      { text: 'Equipment specifications' },
      { text: 'Practice setup checklists' },
    ],
    closing: 'Everything you need. Ready when you need it.',
    image: portal5,
  },
  {
    key: 'suppliers',
    label: 'Supplier Vetting',
    icon: suppliericon,
    pill: 'VETTED SUPPLIERS',
    heading: 'Find people you can actually trust.',
    paragraphs: [
      'Skip the cold searches and endless supplier comparisons.',
      'Discover fit-out companies, equipment suppliers, finance providers, architects and compliance specialists who have been reviewed and used by real squat practice owners.',
    ],
    closing: 'Less searching. Fewer wrong turns. Better decisions.',
    image: portal6,
  },
  {
    key: 'community',
    label: 'Community',
    icon: communityicon,
    pill: 'COMMUNITY',
    heading: "You don't have to build your practice alone.",
    paragraphs: [
      'Join a private community of dentists at every stage of the squat journey.',
      'Connect with people who have already opened their practices, dentists currently building theirs, and others who are standing exactly where you are today.',
    ],
    closing: "Ask questions. Share progress. Learn from people who've done it.",
    image: portal7,
  },
];

const PortalExplorer: React.FC = () => {
  const [active, setActive] = useState(0);
  const tab = EXPLORER_TABS[active];

  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useRef(false);
  const hovering = useRef(false);
  const lastInteraction = useRef(0);

  const select = (i: number) => {
    lastInteraction.current = Date.now();
    setActive(i);
  };

  // While the visitor is just scrolling past (not hovering / clicking), swap the section on its own.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
      },
      { threshold: 0.35 }
    );
    observer.observe(el);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = reduceMotion
      ? undefined
      : window.setInterval(() => {
          if (!inView.current || hovering.current) return;
          if (Date.now() - lastInteraction.current < IDLE_BEFORE_AUTO_MS) return;
          setActive((prev) => {
            const others = EXPLORER_TABS.map((_, i) => i).filter((i) => i !== prev);
            return others[Math.floor(Math.random() * others.length)];
          });
        }, AUTO_ROTATE_MS);

    return () => {
      observer.disconnect();
      if (timer) window.clearInterval(timer);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => {
        hovering.current = true;
      }}
      onMouseLeave={() => {
        hovering.current = false;
        lastInteraction.current = Date.now();
      }}
    >
      <ScrollReveal>
        <div className="portal-feature-row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 10, marginBottom: 40 }}>
          {EXPLORER_TABS.map((t, i) => {
            const isActive = i === active;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => select(i)}
                onMouseEnter={() => select(i)}
                onFocus={() => select(i)}
                aria-pressed={isActive}
                className="interactive-button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '9px 16px',
                  borderRadius: 8,
                  border: `1px solid ${isActive ? DARK : '#E3AA33'}`,
                  background: isActive ? DARK : 'transparent',
                  color: isActive ? '#FFFFFF' : DARK,
                  fontFamily: SF,
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <img src={t.icon} alt="" aria-hidden="true" style={{ width: 18, height: 18, display: 'block', filter: isActive ? 'brightness(0) invert(1)' : 'brightness(0)', transition: 'filter 0.25s ease' }} />
                {t.label}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      <div className="portal-ai-row" style={{ display: 'flex', gap: 20, alignItems: 'stretch' }}>
        <ScrollReveal variant="left" style={{ flex: '524 1 0', minWidth: 0, display: 'flex' }}>
          <div
            className="interactive-lift portal-ai-text"
            style={{ flex: 1, minWidth: 0, minHeight: 695, background: GOLD, borderRadius: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <div key={tab.key} className="portal-swap" style={{ padding: 40 }}>
              <div style={{ marginBottom: 20 }}>
                <SectionPill innerBg={GOLD}>
                  <span style={{ color: CREAM }}>{tab.pill}</span>
                </SectionPill>
              </div>
              <h3 className="portal-h2" style={{ fontFamily: SF, fontSize: 44, fontWeight: 700, color: '#FCF6EF', lineHeight: 1.15, margin: '0 0 16px' }}>{tab.heading}</h3>
              {tab.paragraphs.map((para) => (
                <p key={para} style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: '#FCF6EF', lineHeight: 1.6, margin: '0 0 12px' }}>{para}</p>
              ))}
              {tab.listTitle && (
                <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.6, margin: '8px 0 10px' }}>{tab.listTitle}</p>
              )}
              {tab.points && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: tab.listTitle ? 0 : 8 }}>
                  {tab.points.map((pt) => (
                    <div key={pt.text} className="interactive-text-parent" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      {pt.n ? (
                        <span style={{ fontFamily: SF, fontSize: 14, fontWeight: 700, color: '#FFFFFF', minWidth: 22 }}>{pt.n}</span>
                      ) : tab.bullets ? (
                        <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: '50%', background: '#FCF6EF', flexShrink: 0, margin: '0 5px' }} />
                      ) : (
                        <CheckCircle2 size={16} color="#FCF6EF" style={{ flexShrink: 0 }} />
                      )}
                      <span className="interactive-text" style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: '#FCF6EF' }}>{pt.text}</span>
                    </div>
                  ))}
                </div>
              )}
              {tab.closing && (
                <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.6, margin: '20px 0 0' }}>{tab.closing}</p>
              )}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" style={{ flex: '736 1 0', minWidth: 0, display: 'flex' }}>
          <div
            className="interactive-lift portal-ai-art"
            style={{ flex: 1, minWidth: 0, minHeight: 695, position: 'relative', borderRadius: 24, overflow: 'hidden', background: CHIP }}
          >
            <img
              key={tab.key}
              className="portal-explorer-img"
              src={tab.image}
              alt={`${tab.label} preview`}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export const FounderSection: React.FC = () => (
  <>
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

  {/* One Portal. Everything You Need. (full-bleed, separate from the founder container) */}
    <section className="portal-section" style={{ background: '#FFF0D1', padding: '80px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ marginBottom: 40, textAlign: 'left' }}>
            <div style={{ marginBottom: 20 }}><SectionPill innerBg="#FFF0D1">ONE PORTAL. EVERYTHING YOU NEED.</SectionPill></div>
            <h2 className="section-text-reveal portal-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: DARK, lineHeight: 1.15, margin: '0 0 16px' }}>
              From “Where do I start?”
              <br />
              to <span style={{ color: GOLD }}>“We're open.”</span>
            </h2>
            <p style={{ fontFamily: SF, fontSize: 14, color: DARK, maxWidth: 640, margin: 0 }}>
              Dream Squat brings the tools, education, resources and support you need to build your practice <strong>all in one place.</strong>
            </p>
          </div>
        </ScrollReveal>

        <PortalExplorer />
      </div>
    </section>
  </>
);
