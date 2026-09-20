import React, { useRef, useEffect, useState } from 'react';
import { Header } from '../components/Header';

import { Footer } from '../components/Footer';
import { SectionPill } from '../components/SectionPill';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#925E02';
const YELLOW = '#FFD073';
const DARK = '#131313';
const CREAM = '#FCF6EF';

/* ── Problem card (yellow) ── */
const ProblemCard = ({ text }: { text: string }) => (
  <div style={{ background: YELLOW, borderRadius: 16, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
    <img src="/summit-warning-icon.svg" alt="" style={{ width: 50, height: 50 }} />
    <p style={{ fontFamily: SF, fontSize: 15, color: DARK, lineHeight: 1.55, margin: 0 }}>{text}</p>
  </div>
);

/* ── Solution card (white) ── */
const SolutionCard = () => (
  <div style={{ background: '#fff', borderRadius: 16, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke={GOLD} strokeWidth={1.5}/><path d="M6 10l3 3 5-5" stroke={GOLD} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      <p style={{ fontFamily: SF, fontSize: 15, fontWeight: 600, color: DARK, margin: 0 }}>You don't have a skills problem.</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke={GOLD} strokeWidth={1.5}/><path d="M6 10l3 3 5-5" stroke={GOLD} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      <p style={{ fontFamily: SF, fontSize: 15, fontWeight: 600, color: DARK, margin: 0 }}>You have a marketing problem.</p>
    </div>
    <p style={{ fontFamily: SF, fontSize: 15, fontWeight: 700, color: GOLD, margin: '8px 0 0', lineHeight: 1.4 }}>And this summit is the solution.</p>
  </div>
);

/* ── Video card — YouTube embed (portrait) ── */
const VideoCard = ({ videoId }: { videoId: string }) => (
  <div style={{ flexShrink: 0, width: 400, height: 700, borderRadius: 20, overflow: 'hidden', background: '#000' }}>
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0&playsinline=1`}
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
      style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
    />
  </div>
);

/* ── Session card ── */
const SessionCard = ({ logo, logoAlt, title, description }: {
  logo: string; logoAlt?: string; title: string; description: string;
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', borderRadius: 20, overflow: 'hidden' }}>
    <div style={{ height: 290, overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
      <img src={logo} alt={logoAlt || ''} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
    <div style={{ background: '#fff', padding: '20px 20px 24px', flex: 1 }}>
      <h4 style={{ fontFamily: SF, fontSize: 18, fontWeight: 700, color: DARK, lineHeight: 1.35, margin: '0 0 8px' }}>{title}</h4>
      <p style={{ fontFamily: SF, fontSize: 14, color: DARK, lineHeight: 1.55, margin: 0, opacity: 0.7 }}>{description}</p>
    </div>
  </div>
);



/* ── Speaker card ── */
const SpeakerCard = ({ name, designation, photo }: { name: string; designation: string; photo: string }) => (
  <div style={{ flexShrink: 0, width: 400, borderRadius: 20, overflow: 'hidden', background: '#3a3a3a' }}>
    <div style={{ height: 406, overflow: 'hidden' }}>
      <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
    </div>
    <div style={{ padding: '18px 28px 24px' }}>
      <p style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>{name}</p>
      <p style={{ fontFamily: SF, fontSize: 16, color: 'rgba(255,255,255,0.6)', margin: 0 }}>{designation}</p>
    </div>
  </div>
);

/* ── Autoplay-on-view YouTube embed ── */
const AutoplayVideo = ({ videoId }: { videoId: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState(`https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1`);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSrc(`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&playsinline=1`);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [videoId]);

  return (
    <div ref={containerRef} style={{ borderRadius: 20, overflow: 'hidden', background: DARK, position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
      />
    </div>
  );
};

const NavArrow = ({ dir, onClick, bg = DARK, invertIcon = false }: { dir: 'left' | 'right'; onClick?: () => void; bg?: string; invertIcon?: boolean }) => (
  <button onClick={onClick} style={{ width: 44, height: 44, borderRadius: '50%', border: 'none', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, padding: 0 }}>
    <img
      src="/summit-arrow-left.svg"
      alt={dir}
      style={{ width: 24, height: 24, transform: dir === 'left' ? 'scaleX(-1)' : 'none', filter: invertIcon ? 'invert(1)' : 'none' }}
    />
  </button>
);

export const SummitPage: React.FC = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const speakerRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, amount: number) => {
    ref.current?.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div style={{ background: CREAM }}>
      {/* ── Hero ── */}
      <section style={{ position: 'relative', width: '100%', height: 850, overflow: 'hidden' }}>
        <img src="/event-hero.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #131313 10.58%, rgba(39,25,0,0.71) 52.88%, #131313 100%)' }} />
        <Header variant="dark" hideNav />
        <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: 40 }}>
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                borderRadius: 20,
                background: 'transparent',
                boxSizing: 'border-box',
              }}
            >
              {/* Gradient border only */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  padding: 1,
                  borderRadius: 20,
                  background:
                    'linear-gradient(90deg, #925E02 2%, #C5A13B 29%, #E6CC60 50%, #F2DC6E 60%, #ECD465 67%, #DDBD4E 77%, #C49727 91%, #B07908 100%)',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none',
                  boxSizing: 'border-box',
                }}
              />

              {/* Transparent center */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  height: 35,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px 10px',
                  borderRadius: 20,
                  background: 'transparent',
                  color: '#fff',
                  fontFamily: SF,
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  whiteSpace: 'nowrap',
                  boxSizing: 'border-box',
                }}
              >
                <span
                  style={{
                    color: '#fff',
                    background: 'transparent',
                  }}
                >
                  The Dream Squat Marketing & Branding Summit 2026
                </span>
              </div>
            </div>
          </div>
          <h1 style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 24, maxWidth: 831, textAlign: 'center' }}>
            <span style={{ color: '#f2dc6e' }}>11 July 2026</span>
            {', Kings Cross, London'}
          </h1>
          <p style={{ fontFamily: SF, fontSize: 24, color: '#fff', lineHeight: 1.5, marginBottom: 36, maxWidth: 643, textAlign: 'center' }}>
            One day. Eight marketing experts. Every strategy, system, and tool you need to fill your chair and grow your clinic.
          </p>
          <a href="#book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: GOLD, color: '#fbfbfb', fontFamily: SF, fontSize: 14, fontWeight: 590, padding: '12px 30px', borderRadius: 8, textDecoration: 'none' }}>
            Grab your ticket →
          </a>
        </div>
      </section>

      {/* ── "Still invisible" dark section ── */}
      <section style={{ background: DARK, padding: '80px 0' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
          <h2 style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 16, maxWidth: 680 }}>
            You're doing everything right and{' '}
            <span style={{ color: GOLD }}>still invisible.</span>
          </h2>
          <p style={{ fontFamily: SF, fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, marginBottom: 48, maxWidth: 500 }}>
            You're not alone. These are the patterns we see again and again with brilliant practitioners who just can't get found.
          </p>
          {/* 2×3 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            <ProblemCard text="Posting consistently on Instagram, but hearing nothing back" />
            <ProblemCard text="A website that looks great but never converts to appointments" />
            <ProblemCard text="Competitors showing up on Google while you remain invisible" />
            <ProblemCard text="The best-kept secret in your town, for all the wrong reasons" />
            <ProblemCard text="Patients enquire, then disappear before booking" />
            <SolutionCard />
          </div>
        </div>
      </section>

      {/* ── "A Conference Experience Like No Other" ── */}
      <section style={{ background: CREAM, padding: '80px 0' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 40 }}>
            <div>
              <div style={{ marginBottom: 16 }}><SectionPill innerBg={CREAM}>VIDEOS</SectionPill></div>
              <h2 style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: DARK, lineHeight: 1.2, margin: '0 0 16px' }}>
                A Conference Experience<br />
                <span style={{ color: GOLD }}>Like No Other</span>
              </h2>
              <p style={{ fontFamily: SF, fontSize: 16, color: DARK, lineHeight: 1.65, margin: 0, maxWidth: 460 }}>
                From inspiring keynotes to hands-on workshops and networking, every moment sparks ideas and opportunities.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, paddingTop: 190, flexShrink: 0 }}>
              <NavArrow dir="left" onClick={() => scroll(videoRef, -420)} />
              <NavArrow dir="right" onClick={() => scroll(videoRef, 420)} />
            </div>
          </div>
          {/* Horizontal scroll */}
          <div ref={videoRef} style={{ display: 'flex', gap: 20, overflowX: 'auto', scrollBehavior: 'smooth', paddingBottom: 8 }}>
            {['BlZFR9VAlXo', 'BqqZflyb4rc', 'mMxENzPapm8', 'lishNutZ__I', 'BlZFR9VAlXo', 'BlZFR9VAlXo', 'BlZFR9VAlXo'].map((id, i) => (
              <VideoCard key={i} videoId={id} />
            ))}
          </div>
        </div>
      </section>

      {/* ── "One Day. Eight Experts." ── */}
      <section style={{ background: '#F4EEE5', padding: '80px 0' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
          <div style={{ marginBottom: 20 }}><SectionPill innerBg={CREAM}>ABOUT SUMMIT</SectionPill></div>
          <h2 style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, lineHeight: 1.15, margin: '0 0 20px', maxWidth: 780 }}>
            <span style={{ color: GOLD }}>One Day. Eight Experts.</span>
            <br />
            <span style={{ color: DARK }}>Every Answer You've Been Looking For.</span>
          </h2>
          <p style={{ fontFamily: SF, fontSize: 16, color: DARK, lineHeight: 1.65, margin: '0 0 40px', maxWidth: 700 }}>
            The Summer Marketing & Branding Summit is a full-day live event built exclusively for dental and aesthetic clinic owners who are done guessing and ready to grow. No fluff. No theory. No watered-down advice. Just the exact strategies, systems and tools that are filling diaries across the UK — taught by the people doing it. Whether you're just getting started or already running a busy clinic, you'll leave with a complete marketing playbook you can implement from Monday morning.
          </p>

          {/* Full-width video — 16:9, autoplays on scroll into view */}
          <AutoplayVideo videoId="Pyi74-oXYt8" />
          </div>
      </section>

      {/* ── "What You'll Learn" ── */}


      <section style={{ background: '#FFF0D1', padding: '80px 0' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
          <div style={{ marginBottom: 16 }}><SectionPill innerBg="#FFF0D1">VIDEOS</SectionPill></div>
          <h2 style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: DARK, lineHeight: 1.2, marginBottom: 48, maxWidth: 780 }}>
            What You'll Learn Eight sessions.{' '}
            <span style={{ color: GOLD }}>Eight game-changers.</span>
          </h2>
          {/* 3-column grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            <SessionCard
              logo="/session-card-dreamsquat.png"
              logoAlt="Dream Squat"
              title="Introduction & Ice Breaker"
              description="Welcome to our September 2026 Dream Squat Conference"
            />
            <SessionCard
              logo="/session-card-medifinance.png"
              logoAlt="Medifinance"
              title="Location & Finance – Medifinance"
              description="Picking the postcode that pays you back with Nigel Crossman"
            />
            <SessionCard
              logo="/session-card-blackmont.png"
              logoAlt="Blackmont Legal"
              title="Lawyers & Lease – Blackmont Legal"
              description="The lease clauses that make or break your practice with Zohaib Hashim"
            />
            <SessionCard
              logo="/session-card-braemar.png"
              logoAlt="Braemar Finance"
              title="Securing Your Funding – Braemar Finance"
              description="What lenders really want to see — with Courtenay Rush"
            />
            <SessionCard
              logo="/session-card-excel.png"
              logoAlt="Excel Building Contractors"
              title="Building Your Practice – Excel Building Contractors"
              description="From shell to surgery, done right — with Sharaz Mir"
            />
            <SessionCard
              logo="/session-card-smartdental.png"
              logoAlt="Smart Dental Compliance"
              title="CQC & Compliance – Smart Dental Compliance"
              description="Pass first time: cracking the registration code — with Victoria Yannagas"
            />
            <SessionCard
              logo="/session-card-flossly.png"
              logoAlt="Flossly.OS & Twoth Match"
              title="Systemise Your Practice – Flossly.OS & Twoth Match"
              description="Building the back-office that runs itself — with Sabah Arif"
            />
            <SessionCard
              logo="/session-card-reginamartin.png"
              logoAlt="Regina Martin"
              title="Your Online Presence – Regina Martin"
              description="How SEO, branding and websites attract patients from day one (Marketing)"
            />
            <SessionCard
              logo="/session-card-creative.png"
              logoAlt="The Creative Composite"
              title="Fill Your Chair – The Creative Composite"
              description="The patient acquisition playbook (Marketing) – with Hassan Mushaid"
            />
          </div>
          {/* Last row: centered single card */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 16 }}>
            <div />
            <SessionCard
              logo="/session-card-reginamartin.png"
              logoAlt="VoIP Shop"
              title="Never Miss Another Patient Call – VoIP Shop"
              description="Building a communication system that grows with your practice – with Kully Singh Hothi"
            />
            <div />
          </div>
        </div>
      </section>

      {/* ── "This Isn't Another Dental Conference" ── */}
      <section style={{ background: DARK, padding: '80px 0' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
          {/* Big card with gold border */}
          <div style={{ borderRadius: 40, border: '1px solid #ECD465', overflow: 'hidden', display: 'flex', position: 'relative', background: DARK, minHeight: 660 }}>

            {/* Left: dark bg, pill + heading */}
            <div style={{ flex: '0 0 50%', padding: '60px 80px 60px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28 }}>
              <div>
                <SectionPill innerBg={DARK}><span style={{ color: '#D9D9D9' }}>WHY ATTEND</span></SectionPill>
              </div>
              <h2 style={{ fontFamily: SF, fontSize: 55, fontWeight: 700, color: '#fff', lineHeight: 1.2, margin: 0 }}>
                This Isn't Another{' '}
                <span style={{ color: '#ECD465' }}>Dental Conference.</span>
                <br />
                Most events give you{' '}
                <span style={{ color: '#ECD465' }}>inspiration.</span>
                <br />
                This one gives you{' '}
                <span style={{ color: '#ECD465' }}>implementation.</span>
              </h2>
            </div>

            {/* Dream Squat logo badge — sits on the divider */}
            <div style={{ position: 'absolute', left: 'calc(50% - 44px)', top: '50%', transform: 'translateY(-50%)', width: 88, height: 88, borderRadius: 20, border: '8px solid #fff', background: 'linear-gradient(90deg, #925E02 2%, #C5A13B 29%, #E6CC60 50%, #F2DC6E 60%, #ECD465 67%, #DDBD4E 77%, #C49727 91%, #B07908 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.25)' }}>
              <img src="/summit-logo-mark.svg" alt="" style={{ width: 50, height: 50 }} />
            </div>

            {/* Right: yellow panel */}
            <div style={{ flex: 1, background: '#FFD073', borderRadius: 28, margin: 12, padding: '40px 40px 40px 60px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <h3 style={{ fontFamily: SF, fontSize: 40, fontWeight: 700, color: DARK, margin: '0 0 6px' }}>You'll walk away with:</h3>
              {[
                'A complete patient acquisition system ready to launch',
                'A Google and SEO strategy tailored to your clinic',
                'An Instagram content plan for the next 90 days',
                'A high-converting website audit checklist',
                'A personal brand roadmap',
                'Funnel templates you can plug in immediately',
                'Sales frameworks that increase treatment acceptance',
                'A network of the most growth focused clinic owners in the UK',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', border: '1px solid #E3AA33', borderRadius: 8, padding: 10 }}>
                  <img src="/summit-check-icon.svg" alt="" style={{ width: 24, height: 24, flexShrink: 0 }} />
                  <p style={{ fontFamily: SF, fontSize: 16, color: DARK, lineHeight: 1.5, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── "The Speakers" ── */}
      <section style={{ background: DARK, padding: '0 0 80px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40 }}>
            <div>
              <h2 style={{ fontFamily: SF, fontSize: 48, fontWeight: 700, color: '#fff', lineHeight: 1.2, margin: '0 0 12px' }}>The Speakers</h2>
              <p style={{ fontFamily: SF, fontSize: 16, color: 'rgba(255,255,255,0.6)', margin: 0, maxWidth: 400 }}>
                Meet the experts behind the UK's fastest-growing dental and aesthetic clinics.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
              <NavArrow dir="left" onClick={() => scroll(speakerRef, -416)} bg={YELLOW} invertIcon />
              <NavArrow dir="right" onClick={() => scroll(speakerRef, 416)} bg={YELLOW} invertIcon />
            </div>
          </div>
          {/* Horizontal scroll */}
          <div ref={speakerRef} className="hide-scrollbar" style={{ display: 'flex', gap: 16, overflowX: 'auto', scrollBehavior: 'smooth', paddingBottom: 4 }}>
            <SpeakerCard name="Zohaib Hashim" designation="Dental Lawyer – Blackmont Legal" photo="/speaker-zohaib.png" />
            <SpeakerCard name="Courtenay Rush" designation="Finance Specialist – Braemar Finance" photo="/speaker-courtenay.png" />
            <SpeakerCard name="Hassan Mushaid" designation="Marketing – The Creative Composite" photo="/speaker-hassan.png" />
            <SpeakerCard name="Nigel Crossman" designation="Location & Finance – Medifinance" photo="/speaker-nigel.png" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
