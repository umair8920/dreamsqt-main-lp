import React, { useEffect, useRef, useState } from 'react';
import { TopBar } from '../components/TopBar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import appleIcon from '../assets/ourservicesicons/Apple.svg';
import playStoreIcon from '../assets/ourservicesicons/Playstore.svg';
import stepSite from '../assets/ourservicesicons/pm-step-site.svg';
import stepDesign from '../assets/ourservicesicons/pm-step-design.svg';
import stepApprovals from '../assets/ourservicesicons/pm-step-approvals.svg';
import stepBuild from '../assets/ourservicesicons/pm-step-build.svg';
import stepEquipment from '../assets/ourservicesicons/pm-step-equipment.svg';
import rolesCheck from '../assets/ourservicesicons/roles-check.svg';
import toothMatchImg from '../assets/ourservicesicons/toothmatchapp.png';
import carouselNext from '../assets/ourservicesicons/carousel-next-dark.svg';
import carouselPrev from '../assets/ourservicesicons/carousel-prev-dark.svg';
import {
  AutoPlayFrame,
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

const HERO_VIDEO_ID = 'nfB-DTEDmyo';
const INTRO_VIDEO_ID = 'FHOPj5WBbAE';
const REEL_IDS = ['LhiP_6ugGeA', '3rWamBzAVc4', 'ULovRo6RUUY', 'FHOPj5WBbAE'];

const ROLES = [
  'Associate dentists and locum dentists',
  'Dental nurses',
  'Dental hygienists and therapists',
  'Specialist dental professionals',
  'Practice managers and reception team',
];

const HOW_STEPS = [
  { n: '01', text: 'Download the TwothMatch app and create your practice profile.' },
  { n: '02', text: 'Post your role with requirements, location, pay and hours.' },
  { n: '03', text: 'Review matched candidates and chat with them in the app.' },
  { n: '04', text: 'Book interviews or shifts, and build your team.' },
];

// Only the first answer is shown in the design; the other two are collapsed there.
const FAQS = [
  { q: 'Is TwothMatch only for dental practices?',
    a: "Yes. It's purpose-built for UK dental practices and dental professionals." },
  { q: 'Can I hire for more than one site?',
    a: 'Yes. You can advertise and manage multiple vacancies across locations from one account.' },
  { q: 'Can I hire locums as well as permanent staff?',
    a: 'Yes. TwothMatch supports immediate, temporary and long-term hiring.' },
];

const DIARY_STEPS = [
  { icon: stepSite, title: 'Built only for dental:', body: 'no sifting through applicants from unrelated industries.' },
  { icon: stepDesign, title: 'Smart AI matching', body: 'candidates matched on location, skills and pay, so you only see relevant people.' },
  { icon: stepApprovals, title: 'Verified profiles', body: 'detailed candidate profiles with credentials and experience.' },
  { icon: stepBuild, title: 'Permanent and locum', body: 'fill a long-term role or an urgent shift from the same app.' },
  { icon: stepEquipment, title: 'Everything in one place', body: 'In-app chat, alerts and a shift calendar to manage bookings.' },
];

// TODO: swap for the real store URLs once provided.
const APP_STORE_URL = 'https://apps.apple.com/pk/app/twoth-match/id6756213665';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.medical.dental.twoth.match';

const StoreBadge: React.FC<{ href: string; small: string; big: string; children: React.ReactNode }> = ({ href, small, big, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${small} ${big}`}
    className="interactive-button"
    style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 50, padding: '0 16px', background: '#fff', borderRadius: 8, color: '#131313', textDecoration: 'none', boxSizing: 'border-box' }}
  >
    {children}
    <span style={{ display: 'flex', flexDirection: 'column', fontFamily: SF, lineHeight: 1.1, textAlign: 'left' }}>
      <span style={{ fontSize: 10 }}>{small}</span>
      <span style={{ fontSize: 18, fontWeight: 600 }}>{big}</span>
    </span>
  </a>
);

export const RecruitmentPage: React.FC = () => {
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
        <div className="cs-hero-video" aria-hidden="true">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`}
            title="Dental recruitment background video"
            allow="autoplay; encrypted-media; picture-in-picture"
            tabIndex={-1}
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #131313 10.6%, rgba(39,25,0,0.71) 52.9%, #131313 100%)' }} />
        <Header variant="dark" />

        <div className="cs-hero-content" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: 40 }}>
          <div className="page-load-reveal page-load-reveal--delay-1" style={{ marginBottom: 24 }}>
            <Pill light>TwothMatch App</Pill>
          </div>
          <h1 className="cs-hero-title page-load-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.2, margin: '0 0 24px', maxWidth: 775 }}>
            <span>Dental</span>
            <span style={{ color: '#f2dc6e' }}> Recruitment</span>
            <span> for New Squat Practices</span>
          </h1>
          <p className="cs-hero-copy page-load-reveal page-load-reveal--delay-3" style={{ fontFamily: SF, fontSize: 24, color: '#fff', lineHeight: 1.5, margin: '0 0 36px', maxWidth: 643 }}>
            Hire dental nurses, hygienists, associates and practice managers for your new practice. Download TwothMatch, the UK&apos;s first AI-powered dental recruitment app.
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
              <AutoPlayFrame id={INTRO_VIDEO_ID} title="Dental recruitment video" />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" className="cs-intro-copy-wrap">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
              <h2 className="cs-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.2, margin: 0 }}>
                Find the Right Hire for Your Squat Practice
              </h2>
              <p style={{ fontFamily: SF, fontSize: 16, color: '#fff', lineHeight: 1.3, margin: 0 }}>
                Your team shapes every patient&apos;s experience, from the first phone call to the final check-up. For a new practice, getting those first hires right matters more than ever. TwothMatch, the UK&apos;s first AI-powered dental recruitment app, matches your practice with qualified, verified dental professionals near you, for permanent roles and locum shifts.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <StoreBadge href={APP_STORE_URL} small="Download on the" big="App Store">
                  <img src={appleIcon} alt="" width={23} height={28} />
                </StoreBadge>
                <StoreBadge href={GOOGLE_PLAY_URL} small="GET IT ON" big="Google Play">
                  <img src={playStoreIcon} alt="" width={25} height={28} />
                </StoreBadge>
              </div>
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
          <div className="rc-steps">
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

      {/* Roles you can hire */}
      <section className="cs-section" style={{ background: CREAM, paddingBottom: 0, overflow: 'hidden' }}>
        <div className="event-container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
              <h2 className="cs-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: INK, lineHeight: 1.2, margin: 0, textAlign: 'center' }}>
                Roles you can hire
              </h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 420 }}>
                {ROLES.map((r) => (
                  <li key={r} className="interactive-lift" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', background: PEACH, border: `1px solid ${GOLD}`, borderRadius: 8, boxSizing: 'border-box', fontFamily: SF, fontSize: 16, color: INK, lineHeight: 1.3 }}>
                    <img src={rolesCheck} alt="" width={20} height={20} style={{ flexShrink: 0 }} />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="scale">
            <img src={toothMatchImg} alt="TwothMatch app showing candidate profiles and shifts" width={1428} height={698} style={{ display: 'block', width: '100%', maxWidth: 1428, height: 'auto', margin: '56px auto 0' }} />
          </ScrollReveal>
        </div>
      </section>

      {/* Dark: how it works + FAQ */}
      <section style={{ background: INK }}>
        <div className="cs-section">
          <div className="event-container">
            <ScrollReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start', marginBottom: 56 }}>
                <Pill light>Is this you?</Pill>
                <h2 className="cs-h2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.2, margin: 0 }}>How it works</h2>
                <p style={{ fontFamily: SF, fontSize: 16, color: '#fff', lineHeight: 1.3, margin: 0 }}>
                  Designed for associates who want to own a clinic, create freedom, and grow a patient list from day one
                </p>
              </div>
            </ScrollReveal>
            <div className="rc-how">
              {HOW_STEPS.map((h, i) => (
                <ScrollReveal key={h.n} variant="scale" delay={([100, 200, 300, 400] as const)[i]}>
                  <div className="interactive-lift rc-how-card">
                    <span style={{ fontFamily: SF, fontSize: 32, fontWeight: 600, color: INK, lineHeight: 1.2 }}>{h.n}</span>
                    <p style={{ fontFamily: SF, fontSize: 20, fontWeight: 700, color: GOLD, lineHeight: 1.3, margin: 0 }}>{h.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
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
                  <ReelCard key={`${id}-${i}`} id={id} index={i} />
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
