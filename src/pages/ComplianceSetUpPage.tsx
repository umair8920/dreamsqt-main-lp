import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TopBar } from '../components/TopBar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import officeImg from '../assets/ourservicesicons/compliance-office.png';
import officeImg2 from '../assets/ourservicesicons/compliance-office1.png';
import officeImg3 from '../assets/ourservicesicons/compliance-office2.png';
import cardApplication from '../assets/ourservicesicons/card-application.svg';
import cardManager from '../assets/ourservicesicons/card-manager.svg';
import cardStatement from '../assets/ourservicesicons/card-statement.svg';
import cardPolicies from '../assets/ourservicesicons/card-policies.svg';
import policyArrow from '../assets/ourservicesicons/policy-arrow.svg';
import packageCheck from '../assets/ourservicesicons/package-check.svg';
import faqOpenCircle from '../assets/ourservicesicons/faq-open-circle.svg';
import faqOpenGlyph from '../assets/ourservicesicons/faq-open-glyph.svg';
import faqClosedCircle from '../assets/ourservicesicons/faq-closed-circle.svg';
import faqClosedGlyph from '../assets/ourservicesicons/faq-closed-glyph.svg';
import carouselNext from '../assets/ourservicesicons/carousel-next.svg';
import carouselPrev from '../assets/ourservicesicons/carousel-prev.svg';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const QUICKSAND = 'Quicksand,"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#925E02';
const CREAM = '#FCF6EF';
const SAND = '#F4EEE5';
const PEACH = '#FFF0D1';
const INK = '#131313';

const PREPARE_CARDS = [
  { icon: cardApplication, text: 'CQC application and supporting evidence' },
  { icon: cardManager, text: 'Registered Manager support and interview preparation' },
  { icon: cardStatement, text: 'Statement of Purpose' },
  { icon: cardPolicies, text: 'Full dental policies and procedures pack' },
  { icon: cardApplication, text: 'Radiation Protection Adviser (RPA) appointment and service' },
  { icon: cardManager, text: 'Fire, Legionella, Health & Safety and disability access risk assessments' },
  { icon: cardStatement, text: 'Staff training, including BLS, ILS and cross-infection control' },
  { icon: cardPolicies, text: 'Equipment testing, including PAT and pressure vessel (PVI) inspections' },
];

const POLICY_IMAGES = [officeImg, officeImg2, officeImg3];

const POLICY_ITEMS = [
  {
    title: 'Policy management',
    body: "You get a complete library of dental-specific policies and SOPs written for your practice, not a generic template. We keep them reviewed, version-controlled and aligned with the CQC's five key questions: is your practice safe, effective, caring, responsive and well-led?",
  },
  { title: 'Ongoing compliance support',
    body: "Registration is only the start. Our Smart Managed Service keeps your audits, certificates, training records and risk assessments up to date after you open. When your first CQC inspection comes round, you're ready, not scrambling.",
   },
  { title: 'CQC application rejected? We can help you turn it around' ,
    body: "If your application has been refused, don't panic. We review the CQC's reasons, fix the shortfalls and help you appeal or re-apply, so your opening date slips as little as possible.",
  },
];

const REGISTRATION_FEATURES = [
  'CQC application and evidence',
  'Statement of Purpose',
  'Registered Manager support',
  'Appeal help if refused',
];

const LAUNCH_FEATURES = [
  'RPA service',
  'Fire risk assessments',
  'Legionella risk assessment',
  'Health and safety risk assessment',
  'Disability risk assessment',
  'Team training',
  'Registered Manager interview preparation',
  'Mock Site Visit Set Up',
];

const MANAGED_FEATURES = [
  'Policy reviews and updates',
  'Audit and certificate tracking',
  'Annual training renewals',
  'Inspection preparation',
];

const PACKAGES = [
  { price: '£750', name: 'CQC Registration', features: REGISTRATION_FEATURES, featured: false, intro: '' },
  {
    price: '£2999',
    name: 'Squat Launch Pack',
    features: LAUNCH_FEATURES,
    featured: true,
    intro: 'Everything in CQC Registration, plus full policies and procedures pack,',
  },
  { price: '£299 / month', name: 'Smart Managed Service', features: MANAGED_FEATURES, featured: false, intro: '' },
];

const WHY_CARDS = [
  { n: '01', title: 'Dental-specific expertise', body: 'we only work with dental practices.' },
  { n: '02', title: 'One point of contact', body: 'From application to inspection.' },
  { n: '03', title: 'Joined-up with your build', body: 'Compliance planned alongside your fit-out, not after it.' },
];

const FAQS = [
  {
    q: 'How long does CQC registration take for a new dental practice?',
    a: 'Timelines vary, so we start your application alongside the build. That way the paperwork and the premises are ready together.',
  },
  { q: 'Do I need a Registered Manager?',
    a: "Yes, every CQC-registered dental provider needs one. Often it's the principal dentist, and we prepare them for the registration interview.",
   },
  { q: 'Can you help after I open?' ,
    a: 'Yes. Our Smart Managed Service keeps your practice compliant month after month.',
  },
];

const HERO_VIDEO_ID = 'dO55E7nvzi8';
const INTRO_VIDEO_ID = 'x5PRUz5Seo4';
const REEL_IDS = ['rU60QTdrIeE', 'xabMX6nK5ck', 'w_ofCd5RGIo', '12arq8alwX0'];

// Muted autoplay (browsers only allow muted) that plays while the video is
// mostly in view and pauses when it scrolls out, so players never all run at once.
const AutoPlayFrame: React.FC<{ id: string; title: string }> = ({ id, title }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const visible = useRef(false);
  const ready = useRef(false);

  const command = (func: 'playVideo' | 'pauseVideo') => {
    if (!ready.current) return;
    frameRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args: [] }), '*');
  };

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting;
        command(entry.isIntersecting ? 'playVideo' : 'pauseVideo');
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} style={{ width: '100%', height: '100%', background: '#000' }}>
      <iframe
        ref={frameRef}
        src={`https://www.youtube-nocookie.com/embed/${id}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${id}&playsinline=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        onLoad={() => {
          ready.current = true;
          // The embed starts itself (autoplay=1); pause it again if it loaded off-screen.
          window.setTimeout(() => command(visible.current ? 'playVideo' : 'pauseVideo'), 600);
        }}
        style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
      />
    </div>
  );
};

const ReelCard: React.FC<{ id: string; index: number }> = ({ id, index }) => (
  <div className="interactive-lift cs-reel">
    <AutoPlayFrame id={id} title={`Compliance video ${index + 1}`} />
  </div>
);

const Pill: React.FC<{ children: React.ReactNode; light?: boolean }> = ({ children, light }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px 10px',
      border: `1px solid ${GOLD}`,
      borderRadius: 20,
      fontFamily: SF,
      fontSize: 14,
      fontWeight: 400,
      textTransform: 'uppercase',
      color: light ? '#fff' : INK,
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </div>
);

const CtaButton: React.FC<{ to: string; background: string; children: React.ReactNode; className?: string }> = ({ to, background, children, className = '' }) => (
  <Link
    to={to}
    className={`interactive-button ${className}`}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background,
      color: '#fbfbfb',
      fontFamily: SF,
      fontSize: 14,
      fontWeight: 590,
      padding: '12px 30px',
      borderRadius: 8,
      textDecoration: 'none',
      textAlign: 'center',
    }}
  >
    {children}
  </Link>
);

const PackageFeature: React.FC<{ text: string }> = ({ text }) => (
  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontFamily: SF, fontSize: 16, lineHeight: 1.3, color: '#fff' }}>
    <img src={packageCheck} alt="" width={16} height={16} style={{ flexShrink: 0, marginTop: 2 }} />
    <span>{text}</span>
  </li>
);

const FaqToggle: React.FC<{ open: boolean }> = ({ open }) => (
  <span aria-hidden="true" style={{ position: 'relative', width: 24, height: 24, flexShrink: 0, display: 'inline-block' }}>
    <img src={open ? faqOpenCircle : faqClosedCircle} alt="" width={24} height={24} style={{ position: 'absolute', inset: 0 }} />
    <img
      src={open ? faqOpenGlyph : faqClosedGlyph}
      alt=""
      width={14}
      height={14}
      style={{ position: 'absolute', left: 5, top: 5, transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
    />
  </span>
);

export const ComplianceSetUpPage: React.FC = () => {
  const [openPolicy, setOpenPolicy] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const reelRef = useRef<HTMLDivElement>(null);
  const [reelEdge, setReelEdge] = useState({ start: true, end: false });
  const lastPointer = useRef({ x: -1, y: -1 });
  const hoverTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(hoverTimer.current), []);

  // Open on hover only when the pointer really moved. When one row collapses
  // the rows below slide under a stationary cursor; the browser then fires
  // synthetic enter events that must not trigger another open/close cycle.
  const hoverPolicy = (i: number) => (e: React.MouseEvent) => {
    const { x, y } = lastPointer.current;
    if (e.clientX === x && e.clientY === y) return;
    lastPointer.current = { x: e.clientX, y: e.clientY };
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpenPolicy(i), 90);
  };

  const updateReelEdge = () => {
    const el = reelRef.current;
    if (!el) return;
    setReelEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  };

  const scrollReels = (dir: 1 | -1) => {
    const el = reelRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 22 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="cs-hero" style={{ position: 'relative', width: '100%', height: 850, overflow: 'hidden', background: GOLD }}>
        <TopBar />
        <div className="cs-hero-video" aria-hidden="true">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`}
            title="Dream Squat background video"
            allow="autoplay; encrypted-media; picture-in-picture"
            tabIndex={-1}
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #131313 10.6%, rgba(39,25,0,0.71) 52.9%, #131313 100%)' }} />
        <Header variant="dark" />

        <div className="cs-hero-content" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: 40 }}>
          <div className="page-load-reveal page-load-reveal--delay-1" style={{ marginBottom: 24 }}>
            <Pill light>Dream SQUAT</Pill>
          </div>
          <h1 className="cs-hero-title page-load-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.2, margin: '0 0 24px', maxWidth: 831 }}>
            <span style={{ color: '#f2dc6e' }}>CQC Registration &amp; Compliance </span>
            <span>for Squat Dental Practices</span>
          </h1>
          <p className="cs-hero-copy page-load-reveal page-load-reveal--delay-3" style={{ fontFamily: SF, fontSize: 24, color: '#fff', lineHeight: 1.5, margin: '0 0 36px', maxWidth: 643 }}>
            Opening a new dental practice? We handle CQC registration, policies, RPA, risk assessments and ongoing compliance so your squat practice opens compliant from day one.
          </p>
          <CtaButton to="/contact" background={GOLD} className="page-load-reveal page-load-reveal--delay-4">
            Register your interest →
          </CtaButton>
        </div>
      </section>

      {/* Video + intro */}
      <section style={{ background: GOLD }}>
        <div className="event-container cs-intro">
          <ScrollReveal variant="left" className="cs-intro-video-wrap">
            <div
              className="interactive-lift cs-intro-video"
              style={{ overflow: 'hidden', background: '#d9d9d9', borderRadius: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <AutoPlayFrame id={INTRO_VIDEO_ID} title="CQC compliance set-up video" />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" className="cs-intro-copy-wrap">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
              <h2 className="cs-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.2, margin: 0 }}>
                CQC Compliance Set-Up for Squat Dental Practices
              </h2>
              <div style={{ fontFamily: SF, fontSize: 16, color: '#fff', lineHeight: 1.3, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={{ margin: 0 }}>
                  Registering a brand-new dental clinic with the Care Quality Commission is one of the biggest hurdles between you and opening day. Our dental compliance specialists prepare every document, support your Registered Manager and put the right systems in place, so your squat practice is CQC-registered and inspection-ready from day one.
                </p>
                <p style={{ margin: 0 }}>
                  Whether you&apos;re a first-time owner or an experienced principal opening another site, you get one point of contact who understands dental regulation inside out.
                </p>
              </div>
              <CtaButton to="/contact" background={INK}>Book a free compliance consultation →</CtaButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Building a new clinic */}
      <section className="cs-section" style={{ background: PEACH }}>
        <div className="event-container">
          <ScrollReveal>
            <div style={{ maxWidth: 767, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h2 className="cs-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: INK, lineHeight: 1.2, margin: 0 }}>
                Building a new dental clinic from the ground up?
              </h2>
              <p style={{ fontFamily: SF, fontSize: 16, letterSpacing: '-0.02em', color: INK, lineHeight: 1.3, margin: 0 }}>
                A squat practice is a brand-new clinic set up from scratch, with no existing policies, records or systems to inherit. That&apos;s exactly where we come in. We build your compliance framework alongside your fit-out, so the paperwork and the premises are ready at the same time.
              </p>
              <p style={{ fontFamily: SF, fontSize: 28, letterSpacing: '-0.02em', color: INK, lineHeight: 1.3, margin: 0 }}>
                What we prepare for your CQC application
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale">
            <div className="cs-card-grid">
              {PREPARE_CARDS.map((c, i) => (
                <div
                  key={i}
                  className="interactive-lift"
                  style={{ overflow: 'hidden', background: PEACH, border: `1px solid ${GOLD}`, borderRadius: 20, minHeight: 198, boxSizing: 'border-box', padding: '40px 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, textAlign: 'center' }}
                >
                  <img src={c.icon} alt="" width={50} height={50} style={{ flexShrink: 0 }} />
                  <p style={{ fontFamily: SF, fontSize: 16, color: '#000', lineHeight: 1.3, margin: 0 }}>{c.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Policy accordion + image */}
      <section className="cs-section" style={{ background: CREAM }}>
        <div className="event-container cs-policy">
          <ScrollReveal variant="left" className="cs-policy-list-wrap">
            <div style={{ background: SAND, overflow: 'hidden' }}>
              {POLICY_ITEMS.map((item, i) => {
                const open = openPolicy === i;
                const last = i === POLICY_ITEMS.length - 1;
                return (
                  <div
                    key={item.title}
                    onMouseMove={hoverPolicy(i)}
                    onMouseLeave={() => window.clearTimeout(hoverTimer.current)}
                    style={{ borderBottom: last ? 'none' : `1px solid ${GOLD}` }}
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => { window.clearTimeout(hoverTimer.current); setOpenPolicy(i); }}
                      onFocus={() => setOpenPolicy(i)}
                      className="interactive-text-parent"
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '40px 40px 0', paddingBottom: open && item.body ? 0 : 40, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                    >
                      <span className="interactive-text" style={{ fontFamily: SF, fontSize: 32, fontWeight: 700, color: INK, lineHeight: 1.2 }}>{item.title}</span>
                      <img
                        src={policyArrow}
                        alt=""
                        width={24}
                        height={24}
                        style={{ flexShrink: 0, transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)', transform: open ? 'rotate(180deg)' : 'none' }}
                      />
                    </button>
                    {item.body && (
                      <div style={{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr', transition: 'grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                        <div style={{ overflow: 'hidden' }}>
                          <p style={{ fontFamily: SF, fontSize: 16, color: INK, lineHeight: 1.3, margin: 0, padding: '8px 80px 40px 40px' }}>{item.body}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" className="cs-policy-img-wrap">
            <div className="interactive-lift cs-policy-img" style={{ position: 'relative', borderRadius: 20, overflow: 'hidden' }}>
              {POLICY_IMAGES.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={i === openPolicy ? POLICY_ITEMS[i].title : ''}
                  aria-hidden={i !== openPolicy}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    opacity: i === openPolicy ? 1 : 0,
                    transform: i === openPolicy ? 'scale(1)' : 'scale(1.06)',
                    transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Packages */}
      <section className="cs-section" style={{ background: CREAM, paddingTop: 0 }}>
        <div className="event-container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, textAlign: 'center', marginBottom: 56 }}>
              <Pill>Prices</Pill>
              <h2 className="cs-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: GOLD, lineHeight: 1.2, margin: 0 }}>Service packages</h2>
            </div>
          </ScrollReveal>

          <div className="cs-packages">
            {PACKAGES.map((pkg, i) => (
              <ScrollReveal
                key={pkg.name}
                variant="scale"
                delay={([100, 200, 300] as const)[i]}
                className={`cs-package-wrap${pkg.featured ? ' cs-package-wrap--featured' : ''}`}
              >
                <div
                  className={`interactive-lift cs-package${pkg.featured ? ' cs-package--featured' : ''}`}
                  style={{ background: pkg.featured ? '#000' : GOLD, border: `1px solid ${GOLD}` }}
                >
                  <p className="cs-price">{pkg.price}</p>
                  <p className="cs-package-name">{pkg.name}</p>
                  {pkg.intro && (
                    <p style={{ fontFamily: SF, fontSize: 16, color: '#fff', lineHeight: 1.3, margin: 0 }}>{pkg.intro}</p>
                  )}
                  <ul className="cs-package-list">
                    {pkg.features.map((f) => <PackageFeature key={f} text={f} />)}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dream Squat */}
      <section className="cs-section" style={{ background: SAND }}>
        <div className="event-container">
          <ScrollReveal>
            <h2 className="cs-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: GOLD, lineHeight: 1.2, margin: '0 0 56px', maxWidth: 526 }}>
              Why start with Dream Squat
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="scale">
            <div className="cs-why-grid">
              {WHY_CARDS.map((c) => (
                <div key={c.n} className="interactive-lift" style={{ overflow: 'hidden', background: '#fff', borderRadius: 20, minHeight: 221, boxSizing: 'border-box', padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
                  <span style={{ fontFamily: SF, fontSize: 44, fontWeight: 700, color: GOLD, lineHeight: 1.2 }}>{c.n}</span>
                  <h3 style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: '#000', lineHeight: 1.2, margin: '8px 0 0' }}>{c.title}</h3>
                  <p style={{ fontFamily: SF, fontSize: 16, color: INK, lineHeight: 1.3, margin: 0 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ + reels */}
      <section className="cs-section cs-dark" style={{ background: INK }}>
        <div className="event-container">
          <ScrollReveal>
            <h2 className="cs-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: CREAM, lineHeight: 1.2, margin: '0 0 56px', textAlign: 'center' }}>FAQ’s</h2>
          </ScrollReveal>
          <ScrollReveal variant="scale">
            <div style={{ maxWidth: 929, margin: '0 auto', background: '#f2dc6e', borderRadius: 16, overflow: 'hidden', padding: 4, display: 'flex', flexDirection: 'column', gap: 4, boxSizing: 'border-box' }}>
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} style={{ background: '#fff', borderRadius: 12, overflow: 'hidden' }}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      className="interactive-text-parent"
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, minHeight: 60, padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', boxSizing: 'border-box' }}
                    >
                      <span className="interactive-text" style={{ fontFamily: QUICKSAND, fontSize: 18, fontWeight: 700, color: '#000', lineHeight: 1.3 }}>{f.q}</span>
                      <FaqToggle open={open} />
                    </button>
                    {f.a && (
                      <div style={{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr', transition: 'grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                        <div style={{ overflow: 'hidden' }}>
                          <p style={{ fontFamily: QUICKSAND, fontSize: 14, color: '#000', lineHeight: 1.3, margin: 0, padding: '0 20px 18px', maxWidth: 740 }}>{f.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-reel-controls">
              <button type="button" aria-label="Previous video" onClick={() => scrollReels(-1)} disabled={reelEdge.start} className="interactive-button cs-reel-arrow">
                <img src={carouselPrev} alt="" width={40} height={40} />
              </button>
              <button type="button" aria-label="Next video" onClick={() => scrollReels(1)} disabled={reelEdge.end} className="interactive-button cs-reel-arrow">
                <img src={carouselNext} alt="" width={40} height={40} />
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale">
            <div ref={reelRef} className="cs-reels" onScroll={updateReelEdge}>
              {REEL_IDS.map((id, i) => (
                <ReelCard key={id} id={id} index={i} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};
