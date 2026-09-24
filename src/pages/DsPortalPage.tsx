import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SectionPill } from '../components/SectionPill';
import { ScrollReveal } from '../components/ScrollReveal';
import hero1 from '../assets/dsportal/hero.png'
import longArrow from '../assets/dsportal/long-arrow.svg'
import icon1 from '../assets/dsportal/icon1.svg'
import icon2 from '../assets/dsportal/icon2.svg'
import icon3 from '../assets/dsportal/icon3.svg'
import icon4 from '../assets/dsportal/icon4.svg'
import locationicon from '../assets/dsportal/locationicon.svg'
import cameraicon from '../assets/dsportal/cameraicon.svg'
import mybuildicon from '../assets/dsportal/mybuildicon.svg'
import calculatoricon from '../assets/dsportal/calculatoricon.svg'
import fileicon from '../assets/dsportal/fileicon.svg'
import suppliericon from '../assets/dsportal/suppliericon.svg'
import communityicon from '../assets/dsportal/communityicon.svg'
import builtimage1 from '../assets/dsportal/builtimage1.png'
import simplepricing from '../assets/dsportal/simplepricing.png'
import portal1 from '../assets/dsportal/portal1.png'
import portal2 from '../assets/dsportal/portal2.png'
import portal3 from '../assets/dsportal/portal3.png'
import portal4 from '../assets/dsportal/portal4.png'
import portal5 from '../assets/dsportal/portal5.png'
import portal6 from '../assets/dsportal/portal6.png'
import portal7 from '../assets/dsportal/portal7.png'
import practice1 from '../assets/dsportal/practice1.png'
import startbuilding from '../assets/dsportal/startbuilding.png'
import founder1 from '../assets/homeicons/founder 1.png'
import founder2 from '../assets/homeicons/founder 2.png'
import founder3 from '../assets/homeicons/founder 3.png'
import founder4 from '../assets/homeicons/founder 4.png'


const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#925E02';
const DARK = '#131313';
const CREAM = '#FCF6EF';
const CHIP = '#F4EEE5';
//onst CARD = '#FFD073';

/* ── shared local pieces ─────────────────────────────────────────── */

const CtaButton: React.FC<{ href?: string; onClick?: () => void; children: React.ReactNode; light?: boolean; className?: string; style?: React.CSSProperties }> = ({
  href,
  onClick,
  children,
  light = false,
  className = '',
  style: styleOverride,
}) => {
  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: light ? CREAM : GOLD,
    color: light ? DARK : '#fbfbfb',
    fontFamily: SF,
    fontSize: 14,
    fontWeight: 600,
    padding: '14px 32px',
    borderRadius: 8,
    border: 'none',
    textDecoration: 'none',
    cursor: 'pointer',
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap',
    ...styleOverride,
  };
  return href ? (
    <a href={href} className={`interactive-button ${className}`} style={style}>
      {children}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={`interactive-button ${className}`} style={style}>
      {children}
    </button>
  );
};

const CheckItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="interactive-lift" style={{ display: 'flex', alignItems: 'center', gap: 8, width: 'fit-content', background: CREAM, border: '1px solid #e3aa33', borderRadius: 8, padding: '8px 12px', overflow: 'hidden' }}>
    <img src="/event-check.svg" alt="" style={{ width: 20, height: 20, flexShrink: 0 }} />
    <p className="interactive-text-parent" style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: DARK, lineHeight: 1.4, margin: 0 }}>
      <span className="interactive-text">{text}</span>
    </p>
  </div>
);

const Tag: React.FC<{ text: string }> = ({ text }) => (
  <span style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: DARK, whiteSpace: 'nowrap', lineHeight: 1.3 }}>
    {text}
  </span>
);

const InfoCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="interactive-lift" style={{ background: DARK, borderRadius: 20, border: '1px solid #925E02', padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden' }}>
    <img src={icon} alt="" aria-hidden="true" style={{ display: 'block', width: 60, height: 60 }} />
    <h3 style={{ fontFamily: SF, fontSize: 20, fontWeight: 700, color: '#FFFFFF', margin: 0 }}>{title}</h3>
    <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: '#FFFFFF', lineHeight: 1.55, margin: 0 }}>{desc}</p>
  </div>
);

const RiskCard: React.FC<{ stat: string; desc: string }> = ({ stat, desc }) => (
  <div className="interactive-lift" style={{ background: GOLD, border: '1px solid #925E02', borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 12, height: 214, width:330, overflow: 'hidden' }}>
    <p style={{ fontFamily: SF, fontSize: 32, fontWeight: 700, color: '#FFFFFF', margin: 0, lineHeight: 1 }}>{stat}</p>
    <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: '#FFFFFF', lineHeight: 1.55, margin: 0 }}>{desc}</p>
  </div>
);

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

const AUTO_ROTATE_MS = 5000;
const IDLE_BEFORE_AUTO_MS = 6000;

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
                <img src={t.icon} alt="" aria-hidden="true" style={{ width: 18, height: 18, display: 'block', filter: isActive ? 'none' : 'brightness(0)' }} />
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

/* ── page ─────────────────────────────────────────────────────────── */

export const DsPortalPage: React.FC = () => (
  <div style={{ background: CREAM }}>
    {/* Hero */}
    <section className="portal-hero-section" style={{ background: CREAM, overflow: 'hidden' }}>
      <Header variant="light" />
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div className="portal-hero-inner">
          <div style={{ flex: '0 0 620px', paddingBottom: 80, paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <ScrollReveal variant="left">
              <SectionPill innerBg={CREAM}>
                <span className="page-load-reveal page-load-reveal--delay-1">DREAM SQUAT PORTAL</span>
              </SectionPill>
              <h1 className="section-text-reveal portal-h1" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: DARK, lineHeight: 1.1, marginTop: 20, marginBottom: 16 }}>
                <span className="page-load-reveal page-load-reveal--delay-1">
                  <span style={{ color: GOLD }}>Everything</span>{' '}
                  you need to open your squat dental practice.</span>
              </h1>
              <p className="section-text-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 24, fontWeight: 400, color: DARK, margin: '0 0 16px' }}>
                One place. One price. No guesswork.
              </p>
              <p className="section-text-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 16, color: DARK, fontWeight: 400, lineHeight: 1.65, margin: '0 0 28px', maxWidth: 560 }}>
                You've got the clinical skills. You've got the ambition. What you've been missing is a clear roadmap to turn your vision into a successful dental practice.
              </p>
              <div className="page-load-reveal page-load-reveal--delay-3">
                <CtaButton href="#pricing">JOIN FOR £19.99/MONTH →</CtaButton>
              </div>
            </ScrollReveal>
          </div>

          <div className="portal-hero-art interactive-lift page-load-reveal page-load-reveal--delay-2" style={{ flex: '1 1 0', minWidth: 0, height: 'auto' }}>
            <ScrollReveal variant="right">
              <img src={hero1} alt="Dream Squat portal dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    {/* Trust strip */}
    <section style={{ background: GOLD, padding: '18px 24px' }}>
      <p className="section-text-reveal" style={{ fontFamily: SF, fontSize: 14, fontWeight: 590, color: CREAM, textAlign: 'center', margin: 0 }}>
        Trusted by 70+ dentists who have opened their own practices across the UK
      </p>
    </section>

    {/* The Problem */}
    <section className="portal-section" style={{ background: CHIP, padding: '80px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="portal-problem-row" style={{ position: 'relative', display: 'flex', gap: 50, alignItems: 'flex-start' }}>
          <img className="portal-problem-arrow" src={longArrow} alt="" aria-hidden="true" style={{ position: 'absolute', left: 500, top: 393, width: 234, height: 166, pointerEvents: 'none', zIndex: 2 }} />
          <div style={{ flex: '0 0 580px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ScrollReveal variant="left">
              <SectionPill innerBg={CHIP}>THE PROBLEM</SectionPill>
              <h2 className="section-text-reveal portal-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: DARK, lineHeight: 1.15, marginTop: 20, marginBottom: 16 }}>
                Going squat shouldn't feel this 
                <span style={{ color: GOLD }}>{' '}complicated.</span>
              </h2>
              <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: DARK, lineHeight: 1.65, margin: '0 0 12px' }}>
                Most dentists who dream of opening their own practice never take the leap.
              </p>
              <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 700, color: DARK, lineHeight: 1.65, margin: '0 0 20px' }}>
                Not because they aren't capable but because finding the right information can feel impossible.
              </p>
              <div className="portal-tag-row" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  <div style={{ minHeight: 41, width: 'fit-content', border: '1px solid #E3AA33', background: '#FFF0D1', borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Tag text="Google searches." />
                  </div>
                  <div style={{ minHeight: 41, width: 'fit-content', border: '1px solid #E3AA33', background: '#FFF0D1', borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Tag text="Conflicting advice" />
                  </div>
                  <div style={{ minHeight: 41, width: 'fit-content', border: '1px solid #E3AA33', background: '#FFF0D1', borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Tag text="Endless decisions" />
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  <div style={{ minHeight: 41, width: 'fit-content', border: '1px solid #E3AA33', background: '#FFF0D1', borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Tag text="Months spent trying to work out" />
                  </div>
                  <div style={{ minHeight: 41, width: 'fit-content', border: '1px solid #E3AA33', background: '#FFF0D1', borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Tag text="what to do" />
                  </div>
                  <div style={{ minHeight: 41, width: 'fit-content', border: '1px solid #E3AA33', background: '#FFF0D1', borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Tag text="when to do it" />
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  <div style={{ minHeight: 41, width: 'fit-content', border: '1px solid #E3AA33', background: '#FFF0D1', borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Tag text="who to trust." />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="interactive-lift" style={{ flex: 1, maxWidth: 600, minHeight: 460, background: 'linear-gradient(90.45deg, #925E02 -9.6%, #C5A13B 48.65%, #E6CC60 93.96%, #F2DC6E 115.53%, #ECD465 130.63%, #DDBD4E 152.2%, #C49727 182.41%, #B07908 201.82%)', borderRadius: 20, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
            <ScrollReveal variant="right">
              <h3 style={{ fontFamily: SF, fontSize: 50, fontWeight: 700, color: '#fff', lineHeight: 1.2, margin: '0 0 28px' }}>
                You're a brilliant clinician being asked to become a business owner overnight.
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <CheckItem text="You don't need more information." />
                <CheckItem text="You need the right information, in the right order." />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    {/* Why we built Dream Squat */}
    <section className="portal-section" style={{ background: DARK, padding: '80px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 125, left: '50%', transform: 'translateX(-50%)', width: 1328, maxWidth: '100%', height: 500, background: 'radial-gradient(50% 50% at 50% 50%, #925E02 0%, rgba(227, 170, 51, 0) 100%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <ScrollReveal>
          <h2 className="section-text-reveal portal-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.15, textAlign: 'center', maxWidth: 820, margin: '0 auto 40px', position: 'relative', top: -24 }}>
            That's exactly why we<br />
            built <span style={{ color: GOLD }}>Dream Squat.</span>
          </h2>
        </ScrollReveal>

        <div style={{ position: 'relative' }}>
          <ScrollReveal variant="scale">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 64 }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: 691, aspectRatio: '1092 / 727', containerType: 'inline-size' }}>
                <div className="interactive-lift" style={{ height: '100%', borderRadius: 24, overflow: 'hidden' }}>
                  <img src={builtimage1} alt="Dream Squat build journey dashboard" style={{ height: '100%', width: '100%', display: 'block', objectFit: 'contain' }} />
                  <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '50%', background: 'linear-gradient(180deg, rgba(19, 19, 19, 0) 0%, #131313 84.16%)', pointerEvents: 'none' }} />
                </div>
                <img src={icon4} alt="" aria-hidden="true" style={{ position: 'absolute', left: '-6.5cqw', bottom: '100%', width: '9.26cqw', height: 'auto', transform: 'translateY(4.34cqw)', display: 'block', zIndex: 2 }} />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale">
            <div className="portal-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              <InfoCard icon={icon1} title="Information Overload" desc="Scattered advice and endless Google searches." />
              <InfoCard icon={icon2} title="Decision Paralysis" desc="Too many decisions. No clear path forward." />
              <InfoCard icon={icon3} title="No Dedicated Roadmap" desc="Nothing built specifically for dentists starting from scratch." />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Built from experience */}
    <section className="portal-section" style={{ background: CREAM, padding: '80px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <div className="portal-founder-top" style={{ display: 'flex', gap: 50, alignItems: 'stretch', marginBottom: 24 }}>
            <div className="interactive-lift portal-founder-photo" style={{ flex: '0 0 480px', position: 'relative', borderRadius: 20, overflow: 'hidden', background: '#ccc' }}>
              <img src="/saba.png" alt="Saba Arif" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            <div style={{ flex: 1, paddingTop: 8 }}>
              <div style={{ marginBottom: 20 }}><SectionPill innerBg={CHIP}>BUILT FROM EXPERIENCE</SectionPill></div>
              <h2 className="section-text-reveal portal-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: DARK, lineHeight: 1.15, marginBottom: 24 }}>
                Built by someone who's 
                done it.
                <span style={{ color: GOLD }}> {''}Three times.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p style={{ fontFamily: SF, fontSize: 24, fontWeight: 400, color: DARK, lineHeight: 1.65, margin: 0 }}>
                  <span style={{ fontWeight: 700 }}>Dream Squat</span>
                   was created by 
                   <span style={{ fontWeight: 700 }}>Saba Arif</span>, a dental clinic owner who has 
                   <span style={{ fontWeight: 700 }}>opened three squat practices from scratch.</span>
                </p>
                <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: DARK, lineHeight: 1.65, margin: 0 }}>
                  She has since mentored 70+ dentists through the process from finding the right location and securing finance to CQC registration, fit-out, equipment and marketing.
                </p>
                <div style={{ height: 1, background: '#E3AA33', marginTop: 10 }} />
                  <div style={{ textAlign: 'left', maxWidth: 640, margin: '5px 0 0' }}>
                    <h3 style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: GOLD, margin: '0 0 5px' }}>This isn't theory. It's experience.</h3>
                  </div>
                <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: DARK, lineHeight: 1.65, margin: 0 }}>
                  Saba didn't build Dream Squat from a textbook. 
                  <br /> She built it from real practices, real decisions, real mistakes and years of helping dentists make the leap.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <div className="portal-founder-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { img: founder1, text: "Everything she wished she'd had when she opened her first practice is now inside Dream Squat." },
              { img: founder2, value: '3', label: 'Practices opened' },
              { img: founder3, value: '70+', label: 'Dentists mentored' },
              { img: founder4, value: '1', label: 'Complete roadmap' },
            ].map((c, i) => (
              <div key={i} className="interactive-lift" style={{ borderRadius: 20, overflow: 'hidden', height: 391, position: 'relative', background: DARK }}>
                <img src={c.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180.09deg, rgba(121, 77, 0, 0) 38.64%, #000000 89.9%)' }} />
                <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
                  {c.text ? (
                    <p style={{ fontFamily: SF, fontWeight: 400, fontSize: 16, color: CREAM, lineHeight: 1.5, margin: 0 }}>{c.text}</p>
                  ) : (
                    <>
                      <p style={{ fontFamily: SF, fontSize: 48, fontWeight: 700, color: '#fff', lineHeight: 1, margin: 0 }}>{c.value}</p>
                      <p style={{ fontFamily: SF, fontSize: 15, fontWeight: 400, color: CREAM, marginTop: 6, marginBottom: 0 }}>{c.label}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* One Portal. Everything You Need. */}
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

    {/* Pricing */}
    <section id="pricing" className="portal-section" style={{ background: CREAM, padding: '80px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ marginBottom: 20 }}><SectionPill innerBg={CREAM}>SIMPLE PRICING</SectionPill></div>
            <h2 className="section-text-reveal portal-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: DARK, lineHeight: 1.15, margin: 0 }}>
              Everything included. 
              <br />
              <span style={{ color: GOLD }}>One simple price.</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <img src={simplepricing} alt="Dream Squat pricing" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </ScrollReveal>
      </div>
    </section>

    {/* Look at the bigger picture */}
    <section className="portal-section" style={{ background: CREAM, padding: '0 80px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ marginBottom: 20 }}><SectionPill innerBg={CREAM}>LOOK AT THE BIGGER PICTURE</SectionPill></div>
            <h2 className="section-text-reveal portal-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: DARK, lineHeight: 1.2, maxWidth: 760, margin: '0 auto' }}>
              <span style={{ color: GOLD }}>£19.99</span> is small 
              <br /> compared to the cost of 
              <br /> getting it wrong.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <div className="portal-risk-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 330px)', justifyContent: 'center', gap: 30, marginBottom: 40 }}>
            <RiskCard stat="£20,000+" desc="One bad lease clause could cost you thousands." />
            <RiskCard stat="4 MONTHS" desc="A missed CQC deadline could delay your opening while you're still paying rent." />
            <RiskCard stat="10+ YEARS" desc="The wrong location could shape the next decade of your career." />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, fontStyle: 'bold', color: DARK, textAlign: 'center', maxWidth: 680, margin: '0 auto 60px', lineHeight: 1.5 }}>
            Dream Squat isn't another monthly expense.{' '}
            <br />
            <span style={{ color: DARK, fontSize: 16, fontWeight: 400, fontStyle: 'normal' }}>It's a smarter way to protect the biggest business decision of your career.</span>
          </p>
        </ScrollReveal>

        {/* Mid-page CTA card */}
        <ScrollReveal variant="scale">
          <div className="interactive-lift portal-cta-card" style={{ position: 'relative', overflow: 'hidden', background: '#7B4E00', borderRadius: 28, padding: '48px calc(40% + 40px) 48px 56px' }}>
            <img className="portal-cta-art" src={practice1} alt="" aria-hidden="true" style={{ position: 'absolute', top: 10, right: 10, bottom: 10, width: '40%', height: 'calc(100% - 20px)', borderRadius: 20, objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none' }} />
            <div style={{ marginBottom: 20 }}><SectionPill innerBg="#7B4E00"><span style={{ color: CREAM }}>YOUR PRACTICE STARTS HERE</span></SectionPill></div>
            <h2 style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2, margin: '0 0 20px', maxWidth: 640 }}>
              Your practice is closer than you think.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
              <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 400,  color: '#FCF6EF', margin: 0 }}>→ The location is out there.</p>
              <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: '#FCF6EF', margin: 0 }}>→ The patients are waiting.</p>
              <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: '#FCF6EF', margin: 0 }}>→ And the practice you've imagined is entirely possible.</p>
            </div>
            <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: '#FCF6EF', lineHeight: 1.6, margin: '0 0 8px', maxWidth: 620 }}>
              What you need now is a plan, the right tools and guidance from people who've already walked the path.
            </p>
            <p style={{ fontFamily: SF, fontSize: 24, fontWeight: 400, color: '#FFFFFF', margin: '0 0 28px' }}>Dream Squat gives you all three.</p>
            <CtaButton href="#pricing" style={{ background: DARK, color: '#FBFBFB' }}>JOIN FOR £19.99/MONTH →</CtaButton>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Showcase */}
    <section className="portal-section" style={{ background: DARK, padding: '80px 80px', overflowX: 'clip' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="portal-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.15, margin: '0 0 12px' }}>
              Stop searching.
              <br /> 
              <span style={{ color: GOLD }}>Start building.</span>
            </h2>
            <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: '#FFFFFF', margin: 0 }}>
              The clearer path to opening the practice you've 
              <br /> always wanted.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <img src={startbuilding} alt="Dream Squat portal preview" style={{ display: 'block', width: '100vw', maxWidth: 'none', height: 'auto', marginLeft: 'calc(50% - 50vw)' }} />
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);
