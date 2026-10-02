import React, { useEffect, useRef, useState } from 'react';
import { TopBar } from '../components/TopBar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  AutoPlayFrame,
  CtaButton,
  FaqToggle,
  Pill,
  ReelCard,
  CREAM,
  GOLD,
  INK,
  INTRO_VIDEO_ID,
  QUICKSAND,
  REEL_IDS,
  SAND,
  SF,
} from './ComplianceSetUpPage';
import faqImg from '../assets/ourservicesicons/Faqimage.png';
import carouselNext from '../assets/ourservicesicons/carousel-next-dark.svg';
import carouselPrev from '../assets/ourservicesicons/carousel-prev-dark.svg';
import flosslyCrmImg from '../assets/ourservicesicons/flosslycrmimage.png';
import stepSite from '../assets/ourservicesicons/pm-step-site.svg';
import stepDesign from '../assets/ourservicesicons/pm-step-design.svg';
import stepApprovals from '../assets/ourservicesicons/pm-step-approvals.svg';
import stepBuild from '../assets/ourservicesicons/pm-step-build.svg';
import stepEquipment from '../assets/ourservicesicons/pm-step-equipment.svg';
import stepHandover from '../assets/ourservicesicons/pm-step-handover.svg';

const DIARY_STEPS = [
  { icon: stepSite, title: 'Launch campaigns', body: 'Opening campaigns across social media and Google, set up and managed to build your patient list before and after you open.' },
  { icon: stepDesign, title: 'Every enquiry in one place.', body: 'Leads from Meta, Google, WhatsApp and your website are captured automatically in a CRM built for dental booking workflows, not a generic sales tool.' },
  { icon: stepApprovals, title: 'Instant, automated follow-up.', body: "Speed-to-lead alerts and personalised WhatsApp and SMS follow-ups, timed by AI around each patient's engagement." },
  { icon: stepBuild, title: 'Proven conversion scripts.', body: 'Tried-and-tested dental scripts that the AI refines for your practice, with every conversation tracked and prioritised.' },
  { icon: stepEquipment, title: 'Finance and deposits built in.', body: 'Patient finance checks, deposit payment links and call logging help turn consultations into committed treatment plans.' },
  { icon: stepHandover, title: "Know what's working.", body: 'Clear reporting on which channels bring enquiries, which convert, and where patients get stuck, so your budget goes where it pays back.' },
];

// Only the first answer is shown in the Figma frame; the other two are collapsed there.
const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: 'What is FlosslyCRM?',
    a: "It's a dental lead management and patient journey platform. It captures enquiries from Meta, Google, WhatsApp and your website, follows them up automatically, and shows you how every channel is performing.",
  },
  { q: 'Do I need to change my practice management software?',
    a: 'No. FlosslyCRM handles the enquiry-to-booking journey alongside the software you already use.' },
  {
    q: 'Can I try FlosslyCRM first?',
    a: (
      <>
        Yes. FlosslyLite, the UK&apos;s first free dental CRM, lets you see how it works before you commit. Visit{' '}
        <a href="https://flossly.ai/" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, textDecoration: 'underline' }}>flossly.ai</a>.
      </>
    ),
  },
];

export const MarketingLeadManagementPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const reelRef = useRef<HTMLDivElement>(null);
  const [reelEdge, setReelEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = reelRef.current;
    if (el) setReelEdge({ start: true, end: el.scrollWidth <= el.clientWidth + 4 });
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
      <section className="cs-hero" style={{ position: 'relative', width: '100%', height: 850, overflow: 'hidden', background: GOLD }}>
        <TopBar />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #131313 10.6%, rgba(39,25,0,0.71) 52.9%, #131313 100%)' }} />
        <Header variant="dark" />

        <div className="cs-hero-content" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: 40 }}>
          <div className="page-load-reveal page-load-reveal--delay-1" style={{ marginBottom: 24 }}>
            <Pill light>FlosslyCRM</Pill>
          </div>
          <h1 className="cs-hero-title page-load-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.2, margin: '0 0 24px', maxWidth: 775 }}>
            <span>Dental</span>
            <span style={{ color: '#f2dc6e' }}> Marketing &amp; Lead Management</span>
            <span> for New Practices</span>
          </h1>
          <p className="cs-hero-copy page-load-reveal page-load-reveal--delay-3" style={{ fontFamily: SF, fontSize: 24, color: '#fff', lineHeight: 1.5, margin: '0 0 36px', maxWidth: 643 }}>
            Launch your squat practice with a full diary. We run your marketing and convert your first 100 patients using FlosslyCRM, with instant lead follow-up across WhatsApp, Meta, Google and your website.
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
              <AutoPlayFrame id={INTRO_VIDEO_ID} title="Marketing and lead management video" />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" className="cs-intro-copy-wrap">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
              <h2 className="cs-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.2, margin: 0 }}>
                We run and convert your first 100 patients for you.
              </h2>
              <p style={{ fontFamily: SF, fontSize: 16, color: '#fff', lineHeight: 1.3, margin: 0 }}>
                A new practice lives or dies by how quickly it fills its diary. We run your launch marketing and manage every enquiry through FlosslyCRM, the dental CRM built by a practice owner who has opened three squat practices herself.
              </p>
              <CtaButton to="/contact" background={INK}>Book your launch marketing call →</CtaButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FlosslyCRM image + follow-up problem */}
      <section style={{ background: CREAM, overflow: 'hidden', paddingTop: 'clamp(24px, 5vw, 64px)' }}>
        <ScrollReveal variant="scale">
          <img src={flosslyCrmImg} alt="FlosslyCRM dashboard" width={1440} height={688} style={{ display: 'block', width: '100%', maxWidth: 'none', height: 'auto' }} />
        </ScrollReveal>
        <div className="event-container cs-section" style={{ paddingTop: 0 }}>
          <ScrollReveal>
            <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, textAlign: 'center' }}>
              <h2 className="cs-h2" style={{ fontFamily: SF, fontSize: 48, fontWeight: 700, color: INK, lineHeight: 1.2, margin: 0 }}>
                <span>Most new practices don&apos;t have a lead problem.</span>
                <span style={{ color: GOLD }}> They have a follow-up problem.</span>
              </h2>
              <p style={{ fontFamily: SF, fontSize: 16, color: INK, lineHeight: 1.3, margin: 0 }}>
                Enquiries arrive at 11pm on Instagram, at lunchtime through your website and on WhatsApp while you&apos;re chairside. If nobody replies within minutes, that patient books somewhere else. Many practices pay agencies for leads, then lose them because nobody calls back fast enough. We fix the whole journey, from first click to booked appointment.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How we fill your diary */}
      <section className="cs-section" style={{ background: CREAM }}>
        <div className="event-container">
          <ScrollReveal>
            <h2 className="cs-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: GOLD, lineHeight: 1.2, margin: '0 0 56px', maxWidth: 630 }}>
              How we fill your diary
            </h2>
          </ScrollReveal>
          <div className="pm-steps">
            {DIARY_STEPS.map((s, i) => (
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

      {/* Dark: what you get, FAQ, reels */}
      <section style={{ background: INK }}>
        <div className="event-container cs-section">
          <ScrollReveal variant="scale">
            <img src={faqImg} alt="What you get with Dream Squat marketing and lead management" width={898} height={540} style={{ display: 'block', width: '100%', maxWidth: 898, height: 'auto', margin: '0 auto' }} />
          </ScrollReveal>
        </div>

        <div className="cs-section cs-dark" style={{ paddingTop: 0 }}>
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
