import React from 'react';
import { TopBar } from '../components/TopBar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SectionPill } from '../components/SectionPill';
import { ScrollReveal } from '../components/ScrollReveal';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#925E02';

const CheckItem = ({ text }: { text: string }) => (
  <div className="interactive-lift page-load-reveal page-load-reveal--delay-2" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: '#fff0d1', border: '1px solid #e3aa33', borderRadius: 8, padding: 10 }}>
    <img src="/event-check.svg" alt="" className="interactive-lift event-check-icon" style={{ width: 24, height: 24, flexShrink: 0 }} />
    <p className="interactive-text-parent page-load-reveal page-load-reveal--delay-3" style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.5, margin: 0 }}>
      <span className="interactive-text">{text}</span>
    </p>
  </div>
);

const AgendaCard = ({ icon, title, body }: { icon: string; title: string; body: string }) => (
  <div className="interactive-lift event-agenda-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
    <div style={{ height: 280, borderRadius: '20px 20px 0 0', overflow: 'hidden' }}>
      <img src="/event-agenda.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
    <div style={{ background: '#F4EEE5', borderRadius: '0 0 20px 20px', padding: '20px 20px 32px', flex: 1 }}>
      <img src={icon} alt="" className="interactive-lift event-agenda-icon" style={{ width: 50, height: 50, marginBottom: 12 }} />
      <h3 className="interactive-text-parent page-load-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: GOLD, lineHeight: 1.3, marginBottom: 12 }}>
        <span className="interactive-text">{title}</span>
      </h3>
      <p className="interactive-text-parent page-load-reveal page-load-reveal--delay-3" style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.6, margin: 0 }}>
        <span className="interactive-text">{body}</span>
      </p>
    </div>
  </div>
);

export const DsClub: React.FC = () => (
  <div>
    <section className="event-hero" style={{ position: 'relative', width: '100%', height: 850, overflow: 'hidden' }}>
      <TopBar />
      <img src="/event-hero.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #131313 10.6%, rgba(39,25,0,0.71) 52.9%, #131313 100%)' }} />
      <Header variant="dark" />

      <div className="event-hero-content" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: 40 }}>
        <div className="page-load-reveal page-load-reveal--delay-1" style={{ marginBottom: 24 }}>
          <div style={{ position: 'relative', display: 'inline-block', borderRadius: 20, background: 'transparent', boxSizing: 'border-box' }}>
            <div
              className="page-load-reveal page-load-reveal--delay-2"
              style={{
                position: 'absolute',
                inset: 0,
                padding: 1,
                borderRadius: 20,
                background: 'linear-gradient(90deg, #925E02 2%, #C5A13B 29%, #E6CC60 50%, #F2DC6E 60%, #ECD465 67%, #DDBD4E 77%, #C49727 91%, #B07908 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                pointerEvents: 'none',
                boxSizing: 'border-box',
              }}
            />
            <div
              className="page-load-reveal page-load-reveal--delay-3"
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
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
              }}
            >
              <span style={{ color: '#fff', background: 'transparent' }}>The Dream Squat Conference 2026</span>
            </div>
          </div>
        </div>

        <h1 className="event-hero-title page-load-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 24, maxWidth: 831, textAlign: 'center' }}>
          <span className="page-load-reveal page-load-reveal--delay-2" style={{ color: '#f2dc6e' }}>25 September 2026</span>
          <span className="page-load-reveal page-load-reveal--delay-3">{', The Midland, Manchester'}</span>
        </h1>
        <p className="event-hero-copy page-load-reveal page-load-reveal--delay-3" style={{ fontFamily: SF, fontSize: 24, color: '#fff', lineHeight: 1.5, marginBottom: 36, maxWidth: 643, textAlign: 'center' }}>
          One day. Everyone you need to open a practice, in the same room. Lenders, suppliers, compliance, marketing, and dentists who are twelve months ahead of you.
        </p>
        <a href="#book" className="interactive-button event-hero-cta page-load-reveal page-load-reveal--delay-4" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: GOLD, color: '#fbfbfb', fontFamily: SF, fontSize: 14, fontWeight: 590, padding: '12px 30px', borderRadius: 8, textDecoration: 'none' }}>
          Book my seat →
        </a>
      </div>
    </section>

    <section className="event-section" style={{ background: '#FCF6EF', padding: '80px 0' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
        <ScrollReveal variant="scale">
          <div className="event-problem-panel" style={{ display: 'flex', minHeight: 540 }}>
            <div className="page-load-reveal page-load-reveal--delay-1" style={{ flex: '0 0 560px', padding: '80px 56px 80px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24, background: '#F4EEE5', borderRadius: '20px 0 0 20px' }}>
              <SectionPill innerBg="#F4EEE5">
                <span className="page-load-reveal page-load-reveal--delay-1">The Problem</span>
              </SectionPill>
              <h2 className="section-text-reveal" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#131313', lineHeight: 1.1, margin: 0 }}>
                <span className="page-load-reveal page-load-reveal--delay-1">Why a room beats a</span>{' '}
                <span className="page-load-reveal page-load-reveal--delay-2" style={{ color: GOLD }}>webinar</span>
              </h2>
              <p className="section-text-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: 0 }}>
                You can learn the theory of a squat online in a weekend. What you cannot do online is meet the lender who will fund it, the compliance team who will register it, and three dentists who signed their lease last year and will tell you honestly what they wish they had known.
              </p>
            </div>

            <div className="interactive-lift event-right-panel page-load-reveal page-load-reveal--delay-2" style={{ flex: 1, position: 'relative', minHeight: 540, borderRadius: 20, overflow: 'hidden' }}>
              <img src="/event-clinic.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90.5deg, rgba(146,94,2,0.72) 9.6%, rgba(197,161,59,0.72) 48.7%, rgba(230,204,96,0.72) 94.0%, rgba(242,220,110,0.72) 115.5%, rgba(196,151,39,0.72) 182.4%, rgba(176,121,8,0.72) 201.8%)' }} />
              <div style={{ position: 'relative', zIndex: 10, padding: '56px 40px', display: 'flex', flexDirection: 'column', gap: 16, height: '100%', boxSizing: 'border-box' }}>
                <h2 className="section-text-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 50, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 8 }}>What you leave with</h2>
                <CheckItem text="A realistic cost and timeline for your own build" />
                <CheckItem text="The contacts to actually start: finance, property, compliance, equipment, marketing" />
                <CheckItem text="A clear read on whether the next twelve months are your window or not" />
                <CheckItem text="Three months in the Dream Squat Club so the momentum does not die on the train home" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="event-section" style={{ background: '#FCF6EF', padding: '0 0 80px' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
        <ScrollReveal>
          <div style={{ marginBottom: 40 }}>
            <div className="page-load-reveal page-load-reveal--delay-1" style={{ marginBottom: 16 }}><SectionPill innerBg="#FCF6EF">Event</SectionPill></div>
            <h2 className="section-text-reveal" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: GOLD, lineHeight: 1.2, margin: 0 }}>The agenda</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <div className="event-agenda-grid" style={{ display: 'flex', gap: 20 }}>
            <AgendaCard
              icon="/event-icon-morning1.svg"
              title="Morning The numbers session"
              body="What three builds actually cost, line by line, including what went over and why. Finding and securing the site. Demand, competition and the lease clauses that cost people their practice. Funding, live. What lenders say yes to, from someone who has assembled the packs."
            />
            <AgendaCard
              icon="/event-icon-afternoon.svg"
              title="Afternoon CQC without losing three months."
              body="Registration, registered manager interviews, and the mistakes that trigger a rejection. Filling the diary before you open. Brand, website and pre-launch marketing. The owners' panel. Dentists who have opened, taking your questions."
            />
            <AgendaCard
              icon="/event-icon-morning2.svg"
              title="Morning"
              body="Suppliers, lenders and partners in the room."
            />
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="event-room-section" style={{ width: '100%', height: 689, display: 'flex', overflow: 'hidden' }}>
      <div style={{ flex: 1, background: GOLD, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 80px' }}>
        <ScrollReveal variant="left">
          <div style={{ maxWidth: 540 }}>
            <div style={{ marginBottom: 24 }}>
              <SectionPill innerBg={GOLD}>
                <span className="page-load-reveal page-load-reveal--delay-1" style={{ color: '#fff' }}>The Problem</span>
              </SectionPill>
            </div>
            <h2 className="section-text-reveal" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 24 }}>
              Who is in the room
            </h2>
            <p className="section-text-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 16, color: '#fff', lineHeight: 1.65, margin: 0 }}>
              Dental associates planning their first practice, existing owners planning a second site, and the suppliers, lenders and advisers who work on squats every week.
            </p>
          </div>
        </ScrollReveal>
      </div>
      <div className="interactive-lift" style={{ flex: 1, overflow: 'hidden' }}>
        <ScrollReveal variant="right" style={{ height: '100%' }}>
          <img src="/event-room.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);
