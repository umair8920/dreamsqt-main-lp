import React, { useEffect, useRef, useState } from 'react';
import { TopBar } from '../components/TopBar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  CtaButton,
  FaqToggle,
  Pill,
  ReelCard,
  CREAM,
  GOLD,
  INK,
  PEACH,
  SAND,
  SF,
} from './ComplianceSetUpPage';
import hvacImg from '../assets/ourservicesicons/pm-hvac.png';
import deconImg from '../assets/ourservicesicons/pm-decon.png';
import plumbingImg from '../assets/ourservicesicons/pm-plumbing.png';
import surgeryImg from '../assets/ourservicesicons/pm-surgery.png';
import planningImg from '../assets/ourservicesicons/pm-planning.png';
import heroVideo from '../assets/pm-hero.mp4';
import introVideo from '../assets/pm-intro.mp4';
import xrayImg from '../assets/ourservicesicons/pm-xrayImg.png';
import savingsBg from '../assets/ourservicesicons/pm-savings-bg.png';
import managerImg from '../assets/ourservicesicons/pm-manager.jpg';
import stepSite from '../assets/ourservicesicons/pm-step-site.svg';
import stepDesign from '../assets/ourservicesicons/pm-step-design.svg';
import stepApprovals from '../assets/ourservicesicons/pm-step-approvals.svg';
import stepBuild from '../assets/ourservicesicons/pm-step-build.svg';
import stepEquipment from '../assets/ourservicesicons/pm-step-equipment.svg';
import stepHandover from '../assets/ourservicesicons/pm-step-handover.svg';
import pmCheck from '../assets/ourservicesicons/pm-check.svg';
import carouselNext from '../assets/ourservicesicons/carousel-next-dark.svg';
import carouselPrev from '../assets/ourservicesicons/carousel-prev-dark.svg';

const AutoVideo: React.FC<{ src: string; className?: string }> = ({ src, className }) => (
  <video className={className} src={src} autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
);

// Autoplays muted (browser rule); the button lets the visitor turn sound on.
const SoundVideo: React.FC<{ src: string; className?: string }> = ({ src, className }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted && v.paused) v.play().catch(() => {});
  };
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <video ref={ref} className={className} src={src} autoPlay muted loop playsInline preload="auto" />
      <button
        type="button"
        onClick={toggle}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        aria-pressed={!muted}
        className="interactive-button"
        style={{ position: 'absolute', right: 16, bottom: 16, width: 44, height: 44, borderRadius: '50%', border: 'none', background: 'rgba(19,19,19,0.7)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#fff" />
          {muted ? <path d="M23 9l-6 6M17 9l6 6" /> : <path d="M15.5 8.5a5 5 0 010 7M19 5a10 10 0 010 14" />}
        </svg>
      </button>
    </div>
  );
};

const REEL_IDS = ['lishNutZ__I', 'LcQQga0tezA', 'ZHHUHwqD3mA', 'M3pLSvX1nBs'];

// Order follows the Figma frame (left to right); the surgery card has no photo in the design.
const BUILD_CARDS = [
  {
    img: hvacImg,
    title: 'Air conditioning and HVAC.',
    body: 'Ventilation and HVAC units specified and installed to meet CQC and infection-control expectations, including the right air changes in surgeries and the decontamination room.',
  },
  {
    img: deconImg,
    title: 'Decontamination room set-up (HTM 01-05).',
    body: 'Clean-to-dirty zoning, instrument workflow, airflow and cabinetry laid out to HTM 01-05 guidance, ready for validation and audit.',
  },
  {
    img: surgeryImg,
    title: 'Surgery set-up to CQC standards.',
    body: 'Surgery layouts planned around chair orientation, natural light, clinical hand-wash sinks, storage and chaperone space.',
  },
  {
    img: plumbingImg,
    title: 'Plumbing for dental chairs.',
    body: 'Water, drainage, power, compressed air and suction routed to every chair position, with compressor and suction plant housed correctly and quietly.',
  },
  {
    img: xrayImg,
    title: 'X-ray and radiation safety.',
    body: 'Room shielding and X-ray and OPG positioning coordinated with your Radiation Protection Adviser.',
  },
  {
    img: planningImg,
    title: 'Planning, building control and fire safety.',
    body: 'Change of use, building regulations, fire safety and disabled access managed alongside the build, so nothing holds up registration.',
  },
];

const STEPS = [
  { icon: stepSite, title: 'Site assessment:', body: 'We survey your unit and confirm it can become a compliant dental practice.' },
  { icon: stepDesign, title: 'Design and budget:', body: 'Dental layout, services drawings and a realistic cost plan.' },
  { icon: stepApprovals, title: 'Approvals:', body: 'Planning, building control and landlord consents.' },
  { icon: stepBuild, title: 'Build and fit-out:', body: 'Trades coordinated, regular site visits and weekly progress updates.' },
  { icon: stepEquipment, title: 'Equipment installation:', body: 'Chairs, decontamination, X-ray, compressor and suction installed and commissioned.' },
  { icon: stepHandover, title: 'CQC-ready handover:', body: 'Snagging completed, certificates collected and evidence ready for your registration.' },
];

const MANAGER_POINTS = ['5+ years building squat dental practices', 'Qualified risk assessor'];

const FAQS = [
  {
    q: 'Can you manage my build if I use my own builder?',
    a: 'Yes. We project manage dental and non-dental builders alike, giving them the specifications they need for HVAC, decontamination, plumbing and surgery set-up.',
  },
  { q: 'What is HTM 01-05?',
    a: "It's the national guidance on decontamination in primary care dental practices. It shapes how your decon room is laid out, ventilated and run, and we design to it from the start." },
  { q: 'Do you help find a suitable property?',
    a: 'We can assess a unit before you commit, so you know whether it can work as a compliant dental practice.' },
];

export const ProjectManagementPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const reelRef = useRef<HTMLDivElement>(null);
  const [reelEdge, setReelEdge] = useState({ start: true, end: false });
  const buildRef = useRef<HTMLDivElement>(null);
  const [buildEdge, setBuildEdge] = useState({ start: true, end: false });

  const updateBuildEdge = () => {
    const el = buildRef.current;
    if (!el) return;
    setBuildEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  };

  const scrollBuild = (dir: 1 | -1) => {
    const el = buildRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = reelRef.current;
    if (el) setReelEdge({ start: true, end: el.scrollWidth <= el.clientWidth + 4 });
    updateBuildEdge();
    window.addEventListener('resize', updateBuildEdge);
    return () => window.removeEventListener('resize', updateBuildEdge);
  }, []);

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
      <section className="cs-hero" style={{ position: 'relative', width: '100%', height: 1100, overflow: 'hidden', background: GOLD }}>
        <TopBar />
        <AutoVideo src={heroVideo} className="pm-hero-video" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #131313 10.6%, rgba(39,25,0,0.71) 52.9%, #131313 100%)' }} />
        <Header variant="dark" />

        <div className="cs-hero-content" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: 40 }}>
          <div className="page-load-reveal page-load-reveal--delay-1" style={{ marginBottom: 24 }}>
            <Pill light>Dream SQUAT</Pill>
          </div>
          <h1 className="cs-hero-title page-load-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.2, margin: '0 0 24px', maxWidth: 775 }}>
            <span>Squat Dental Practice Project Management</span>
            <span style={{ color: '#f2dc6e' }}> &amp; Turnkey Fit-Out</span>
          </h1>
          <p className="cs-hero-copy page-load-reveal page-load-reveal--delay-3" style={{ fontFamily: SF, fontSize: 24, color: '#fff', lineHeight: 1.5, margin: '0 0 36px', maxWidth: 643 }}>
            Full project management and turnkey build for new dental practices. CQC-compliant HVAC, HTM 01-05 decontamination rooms, surgery set-up and dental chair plumbing, managed end to end.
          </p>
          <CtaButton to="/contact" background={GOLD} className="page-load-reveal page-load-reveal--delay-4">
            Book a free build consultation →
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
              <SoundVideo src={introVideo} className="pm-intro-video" />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" className="cs-intro-copy-wrap">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
              <h2 className="cs-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.2, margin: 0 }}>
                Turnkey Project Management for Your Squat Dental Practice
              </h2>
              <p style={{ fontFamily: SF, fontSize: 16, color: '#fff', lineHeight: 1.3, margin: 0 }}>
                We provide full project management and a turnkey solution for your dental practice build, from the first site visit to handing you the keys of a CQC-compliant practice. One team coordinates the design, trades, equipment and sign-offs, so you&apos;re not left juggling contractors while still working as an associate.
              </p>
              <CtaButton to="/contact" background={INK}>Book a free compliance consultation →</CtaButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Existing builder + CQC compliant */}
      <section className="cs-section" style={{ background: PEACH }}>
        <div className="event-container">
          <ScrollReveal>
            <div style={{ maxWidth: 767, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h2 className="cs-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: INK, lineHeight: 1.2, margin: 0 }}>
                Already have a builder? Don&apos;t worry
              </h2>
              <p style={{ fontFamily: SF, fontSize: 16, letterSpacing: '-0.02em', color: INK, lineHeight: 1.3, margin: 0 }}>
                Whether your builder is a dental specialist or a general contractor, we&apos;ll project manage the whole build. We turn dental and CQC requirements into clear specifications your builder can follow, check the work at every stage, and make sure nothing is missed before handover.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ fontFamily: SF, fontSize: 28, letterSpacing: '-0.02em', color: INK, lineHeight: 1.3, margin: 0 }}>
                  Fully CQC compliant: we know the regulations
                </p>
                <p style={{ fontFamily: SF, fontSize: 16, letterSpacing: '-0.02em', color: INK, lineHeight: 1.3, margin: 0 }}>
                  A dental practice isn&apos;t an ordinary fit-out. Get the ventilation, plumbing or decontamination layout wrong and you risk delays to your CQC registration, or expensive rework. We design and build to the rules from day one.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale">
            <div className="pm-build-controls">
              <button type="button" aria-label="Previous cards" onClick={() => scrollBuild(-1)} disabled={buildEdge.start} className="interactive-button pm-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
              </button>
              <button type="button" aria-label="Next cards" onClick={() => scrollBuild(1)} disabled={buildEdge.end} className="interactive-button pm-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            <div ref={buildRef} className="pm-build-track" onScroll={updateBuildEdge}>
              {BUILD_CARDS.map((c) => (
                <div
                  key={c.title}
                  className="interactive-lift pm-build-card"
                  style={{ overflow: 'hidden', background: PEACH, border: `1px solid ${GOLD}`, borderRadius: 20, boxSizing: 'border-box', padding: 10, display: 'flex', flexDirection: 'column', gap: 16 }}
                >
                  {c.img ? (
                    <img src={c.img} alt="" className="pm-card-img" />
                  ) : (
                    <div className="pm-card-img" style={{ background: '#fff' }} />
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '0 10px 10px' }}>
                    <h3 style={{ fontFamily: SF, fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: INK, lineHeight: 1.2, margin: 0 }}>{c.title}</h3>
                    <p style={{ fontFamily: SF, fontSize: 16, letterSpacing: '-0.02em', color: INK, lineHeight: 1.3, margin: 0 }}>{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How we deliver */}
      <section className="cs-section" style={{ background: CREAM }}>
        <div className="event-container">
          <ScrollReveal>
            <h2 className="cs-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: GOLD, lineHeight: 1.2, margin: '0 0 56px', maxWidth: 630 }}>
              How we deliver your build
            </h2>
          </ScrollReveal>
          <div className="pm-steps">
            {STEPS.map((s, i) => (
              <ScrollReveal key={s.title} variant="scale" delay={([100, 200, 300] as const)[i % 3]}>
                <div className="interactive-lift pm-step" style={{ background: SAND }}>
                  <img src={s.icon} alt="" width={50} height={50} style={{ flexShrink: 0 }} />
                  <h3 style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: GOLD, lineHeight: 1.2, margin: 0 }}>{s.title}</h3>
                  <p style={{ fontFamily: SF, fontSize: 16, color: INK, lineHeight: 1.3, margin: 0 }}>{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark: savings, project manager, FAQ, reels */}
      <section style={{ background: INK }}>
        <div className="pm-savings" style={{ backgroundImage: `url(${savingsBg})` }}>
          <div className="pm-savings-shade" />
          <ScrollReveal className="pm-savings-inner">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, textAlign: 'center' }}>
              <Pill light>Why a project manager saves you money</Pill>
              <p className="pm-savings-text" style={{ fontFamily: SF, fontSize: 40, fontWeight: 700, lineHeight: 1.2, color: '#fff', margin: 0, maxWidth: 978 }}>
                Most delays and overspends on squat builds come from poor coordination between the designer, builder, equipment supplier and compliance requirements.{' '}
                <span style={{ color: '#ecd465' }}>A dedicated project manager keeps every party working to one plan, one budget and one opening date.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="event-container pm-manager">
          <ScrollReveal variant="left" className="pm-manager-img-wrap">
            <img src={managerImg} alt="Saba Arif, project manager" className="interactive-lift pm-manager-img" />
          </ScrollReveal>
          <ScrollReveal variant="right" className="pm-manager-copy-wrap">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
                <Pill light>Meet our project manager</Pill>
                <h2 className="cs-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.2, margin: 0 }}>Saba Arif</h2>
              </div>
              <p style={{ fontFamily: SF, fontSize: 16, color: '#fff', lineHeight: 1.3, margin: 0 }}>
                Subhan has more than five years&apos; experience building squat dental practices from empty shell to opening day. An aeronautical engineer by training and a qualified risk assessor, he brings engineering precision to every project, from HVAC and decontamination workflows to site safety and final snagging.
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {MANAGER_POINTS.map((p) => (
                  <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontFamily: SF, fontSize: 16, lineHeight: 1.3, color: '#fff' }}>
                    <img src={pmCheck} alt="" width={16} height={16} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <CtaButton to="/contact" background={GOLD}>Talk to Subhan about your build</CtaButton>
            </div>
          </ScrollReveal>
        </div>

        <div className="cs-section cs-dark">
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
                        <span className="interactive-text" style={{ fontFamily: SF, fontSize: 18, fontWeight: 700, color: '#000', lineHeight: 1.3 }}>{f.q}</span>
                        <FaqToggle open={open} />
                      </button>
                      {f.a && (
                        <div style={{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr', transition: 'grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                          <div style={{ overflow: 'hidden' }}>
                            <p style={{ fontFamily: SF, fontSize: 14, color: '#000', lineHeight: 1.3, margin: 0, padding: '0 20px 18px', maxWidth: 740 }}>{f.a}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Reels */}
      <section style={{ background: CREAM }}>
        <div className="cs-section cs-dark">
          <div className="event-container">
            <ScrollReveal>
              <div className="cs-reel-controls" style={{ marginTop: 0 }}>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};
