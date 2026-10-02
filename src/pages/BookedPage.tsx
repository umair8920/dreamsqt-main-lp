import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import frontHouseImg from '../assets/bookedicons/fronthouse1.jpeg';
import speaker1 from '../assets/bookedicons/booked-gemma-seddon.jpeg';
import speaker2 from '../assets/bookedicons/booked-samantha-knowles.jpeg';
import speaker3 from '../assets/bookedicons/booked-saba-arif.jpeg';


const SERIF = "'Playfair Display',Georgia,'Times New Roman',serif";
const SANS = "Montserrat,'Helvetica Neue',Arial,sans-serif";
const GOLD = '#B99552';
const BG = '#100F0C';
const PANEL = '#171511';
const CREAM = '#F2EDE2';
const MUTED = '#A8A399';
const LINE = 'rgba(185,149,82,0.25)';
const HERO_VIDEO_ID = 'XqYujwxsdbI';
const TICKET_URL = 'https://bit.ly/4ihIO88';

const LEAKS = [
  { title: 'The 7:43 PM enquiry', text: 'A patient asks about implants after hours. Nobody replies until Tuesday. By then they have booked elsewhere.' },
  { title: 'The one-call follow-up', text: 'One voicemail is not follow-up. Most enquiries need five to seven touches before they book, and almost nobody gets them.' },
  { title: 'The full but broken diary', text: 'Every slot filled, the wrong appointments in the wrong places, clinicians overrunning and high-value patients squeezed out.' },
];

const JOURNEY = ['First Impression', 'Conversation', 'Diary', 'Follow-Up', 'System'];

const SPEAKERS = [
  { session: 'Session One', name: 'Gemma Seddon', topic: 'First Impressions That Last', photo: speaker1, text: 'The patient experience that converts: the first call, the tone, the welcome and the small touches patients remember.' },
  { session: 'Session Two', name: 'Samantha Knowles', topic: 'The Commercial Power of Front of House', photo: speaker2, text: 'Why every enquiry is a commercial moment, and how to build a diary that works for the patient, the clinician and the business.' },
  { session: 'Session Three', name: 'Saba Arif', topic: 'From Lead to BOOKED.', photo: speaker3, text: 'Speed-to-lead, follow-up systems, CRM and automation. The systems that make conversion consistent, not lucky.' },
];

const AGENDA: { time: string; title: string; text?: string }[] = [
  { time: '9:00', title: 'Registration, Coffee & Networking' },
  { time: '9:30', title: 'Welcome to BOOKED.', text: 'Why your practice may not need more leads. It needs to convert more of the ones it already has.' },
  { time: '9:40', title: 'Gemma Seddon · First Impressions That Last', text: 'Master the small touches, conversations and patient experiences that build trust from the first hello.' },
  { time: '11:25', title: 'Samantha Knowles · The Commercial Power of Front of House', text: 'How front of house drives revenue and retention, plus smarter diary management: not all appointments are equal.' },
  { time: '13:00', title: 'Lunch & Networking' },
  { time: '13:45', title: 'Saba Arif · From Lead to BOOKED.', text: 'Speed-to-lead, follow-up systems, CRM, automation and lead reactivation without creating more work.' },
  { time: '14:45', title: 'The BOOKED. Conversion Lab', text: 'One patient. One enquiry. Three experts. Follow the journey from first contact to booked treatment.' },
  { time: '15:30', title: 'Build Your BOOKED. Playbook', text: 'Create your own 90-day patient conversion action plan.' },
  { time: '16:00', title: 'Live Speaker Panel & Q&A' },
  { time: '16:45', title: 'Finish' },
];

const TAKEAWAYS = [
  { title: 'The BOOKED. Workbook', text: 'Scripts, workflows and checklists you fill in through the day and take straight back to the desk.' },
  { title: 'Your 90-day Playbook', text: 'Nine changes you commit to, one number you will move: your enquiry-to-booking conversion rate.' },
  { title: 'The Conversion Lab', text: 'All three speakers work one real enquiry live, from 7:43 PM to the chair.' },
  { title: '5 hours verifiable CPD', text: 'A CPD certificate for every attendee.' },
];

const FAQS = [
  { q: 'Who is BOOKED. for?', a: 'Dental receptionists, treatment coordinators, practice managers and practice owners who want their front desk to convert more of the enquiries it already receives.' },
  { q: 'Is it a sales course?', a: 'No. It is a patient-experience, diary and systems day. Nothing in it turns your reception into a hard sell.' },
  { q: 'Can I bring my whole team?', a: 'Yes, and it works best that way. Book one ticket per person on Eventbrite.' },
  { q: 'Is it CPD certified?', a: 'Yes. Five hours of verifiable CPD, with a certificate issued after the event.' },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase', color: GOLD }}>{children}</div>
);

const H2 = ({ children, balance = true }: { children: React.ReactNode; balance?: boolean }) => (
  <h2 className="booked-h2" style={{ margin: 0, fontFamily: SERIF, fontWeight: 700, fontSize: 48, lineHeight: 1.1, color: CREAM, textWrap: balance ? 'balance' : undefined }}>{children}</h2>
);

const Lead = ({ children }: { children: React.ReactNode }) => (
  <p style={{ margin: 0, fontFamily: SANS, fontWeight: 300, fontSize: 17, lineHeight: 1.65, color: MUTED, textWrap: 'pretty' }}>{children}</p>
);

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
);

const Cta = ({ children }: { children: React.ReactNode }) => (
  <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="booked-cta interactive-button">
    {children}<Arrow />
  </a>
);

const Section = ({ children, bg = BG, id, narrow }: { children: React.ReactNode; bg?: string; id?: string; narrow?: boolean }) => (
  <section id={id} style={{ padding: '96px 0', background: bg, borderTop: bg === PANEL ? `1px solid ${LINE}` : undefined, scrollMarginTop: 24 }}>
    <div className="booked-wrap" style={{ display: 'flex', flexDirection: 'column', gap: 48, maxWidth: narrow ? 820 : undefined }}>{children}</div>
  </section>
);

const Intro = ({ eyebrow, title, text, center, wide }: { eyebrow: string; title: string; text?: string; center?: boolean; wide?: boolean }) => (
  <ScrollReveal>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: center || wide ? undefined : 760, alignItems: center ? 'center' : undefined, textAlign: center ? 'center' : undefined }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <H2 balance={!wide}>{title}</H2>
      {text && <Lead>{text}</Lead>}
    </div>
  </ScrollReveal>
);

const STAGGER = [100, 200, 300] as const;

export const BookedPage: React.FC = () => (
  <div style={{ background: BG, color: CREAM }}>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Montserrat:wght@300;400;600;700&display=swap');
      .booked-wrap { width: 100%; max-width: 1120px; margin: 0 auto; padding: 0 32px; box-sizing: border-box; }
      .booked-g3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
      .booked-g2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px 48px; }
      .booked-hero-title { font-size: 148px; }
      .booked-hero-video { position: absolute; inset: 0; overflow: hidden; container-type: size; pointer-events: none; background: #131313; }
      .booked-hero-video iframe { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(1.25); width: max(100cqw, 56.25cqh); height: max(100cqh, 177.78cqw); border: 0; opacity: 0; animation: booked-video-in 1.2s ease 3s forwards; }
      @keyframes booked-video-in { to { opacity: 1; } }
      .booked-hero-shade { position: absolute; inset: 0; background: linear-gradient(180deg, #131313 10.58%, rgba(39, 25, 0, 0.71) 52.88%, #131313 100%); pointer-events: none; }
      .booked-leaks { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; align-items: stretch; }
      .booked-leaks-cards { display: flex; flex-direction: column; gap: 24px; }
      .booked-leaks-cards > * { display: flex; flex-direction: column; }
      .booked-leaks-cards > * > * { flex: 1; }
      .booked-leaks-img { position: relative; height: 100%; min-height: 320px; overflow: hidden; background: ${BG}; }
      .booked-leaks-img img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
      .booked-leaks-shade { position: absolute; inset: 0; background: linear-gradient(180.09deg, rgba(121, 77, 0, 0) 38.64%, #000000 89.9%); pointer-events: none; }
      @media (max-width: 960px) {
        .booked-leaks { grid-template-columns: minmax(0, 1fr); }
        .booked-leaks-img { height: auto; min-height: 0; aspect-ratio: 4 / 3; }
      }
      .booked-journey { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 20px; }
      .booked-cta { display: inline-flex; align-items: center; gap: 12px; min-height: 52px; padding: 0 28px; background: ${GOLD}; color: ${BG}; border: 1px solid ${GOLD}; font-family: ${SANS}; font-weight: 700; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; transition: background .3s, border-color .3s; }
      .booked-cta:hover { background: ${CREAM}; border-color: ${CREAM}; color: ${BG}; }
      .booked-cta2 { display: inline-flex; align-items: center; min-height: 52px; padding: 0 28px; border: 1px solid ${LINE}; color: ${CREAM}; font-family: ${SANS}; font-weight: 600; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; transition: border-color .3s, color .3s; }
      .booked-cta2:hover { border-color: ${GOLD}; color: ${GOLD}; }
      .booked-arow { display: grid; grid-template-columns: 96px minmax(0, 1fr); gap: 24px; align-items: baseline; padding: 20px 0; border-top: 1px solid ${LINE}; }
      .booked-ticket { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 48px; align-items: center; padding: 56px; border: 1px solid ${GOLD}; background: ${BG}; position: relative; }
      @media (max-width: 760px) {
        .booked-g3, .booked-g2, .booked-ticket { grid-template-columns: minmax(0, 1fr); }
        .booked-hero-title { font-size: 76px; }
        .booked-wrap { padding: 0 20px; }
        .booked-arow { grid-template-columns: 64px minmax(0, 1fr); gap: 14px; }
        .booked-ticket { padding: 40px 24px; gap: 32px; }
        .booked-h2 { font-size: 34px !important; }
      }
    `}</style>

    {/* Hero */}
    <section style={{ position: 'relative', padding: '220px 0 96px', overflow: 'hidden', background: BG }}>
      <div className="booked-hero-video" aria-hidden="true">
        <iframe
          src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?start=2&autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&playsinline=1&rel=0&modestbranding=1&disablekb=1&iv_load_policy=3&fs=0`}
          title="BOOKED. background video"
          allow="autoplay; encrypted-media"
          tabIndex={-1}
        />
      </div>
      <div className="booked-hero-shade" />
      <Header variant="dark" />
      <div className="booked-wrap" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, textAlign: 'center' }}>
        <div className="page-load-reveal page-load-reveal--delay-1"><Eyebrow>One Day · London · Saturday 14 November</Eyebrow></div>
        <h1 className="booked-hero-title page-load-reveal page-load-reveal--delay-2" style={{ margin: 0, fontFamily: SERIF, fontWeight: 900, lineHeight: 0.95, letterSpacing: '0.01em', color: CREAM }}>BOOKED<span style={{ color: GOLD }}>.</span></h1>
        <div className="page-load-reveal page-load-reveal--delay-3" style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 30, color: GOLD }}>From Enquiry to Chair</div>
        <div className="page-load-reveal page-load-reveal--delay-3" style={{ width: 72, height: 2, background: GOLD }} />
        <p className="page-load-reveal page-load-reveal--delay-4" style={{ margin: 0, maxWidth: 720, fontFamily: SANS, fontWeight: 300, fontSize: 20, lineHeight: 1.6, color: CREAM, textWrap: 'balance' }}>
          The one-day conversion intensive for dental receptionists, treatment coordinators and practice managers. Your practice doesn't need more leads. It needs to convert more of the ones it already has.
        </p>
        <div className="page-load-reveal page-load-reveal--delay-4" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginTop: 8 }}>
          <Cta>Book your seat on Eventbrite</Cta>
          <a href="#agenda" className="booked-cta2 interactive-button">See the agenda</a>
        </div>
        <div className="page-load-reveal page-load-reveal--delay-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 32px', justifyContent: 'center', marginTop: 24, fontFamily: SANS, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: MUTED }}>
          <span>5 Hours CPD</span><span>Three Experts</span><span>30 Seats Only</span><span>£249 per person</span>
        </div>
      </div>
    </section>

    {/* Where the money leaks */}
    <Section bg={PANEL}>
      <Intro wide eyebrow="Why front of house" title="Thousands of pounds of treatment quietly disappear between the enquiry and the chair." text="Practices spend on Meta ads, Google and websites, then lose the patient in the twenty minutes after they get in touch. Not because the team is lazy. Because nobody gave them the skills or the system." />
      <div className="booked-leaks">
        <ScrollReveal variant="scale" delay={200} style={{ height: '100%' }}>
          <div className="booked-leaks-img">
            <img src={frontHouseImg} alt="Dental front of house team welcoming a patient" loading="lazy" />
            <div className="booked-leaks-shade" />
          </div>
        </ScrollReveal>
        <div className="booked-leaks-cards">
          {LEAKS.map((l, i) => (
            <ScrollReveal key={l.title} delay={STAGGER[i]} style={{ flex: 1 }}>
              <div className="interactive-lift" style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '32px 28px', borderTop: `2px solid ${GOLD}`, background: BG, height: '100%', boxSizing: 'border-box', overflow: 'hidden' }}>
                <div style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 24, lineHeight: 1.15, color: CREAM }}>{l.title}</div>
                <p style={{ margin: 0, fontFamily: SANS, fontWeight: 300, fontSize: 15, lineHeight: 1.65, color: MUTED, textWrap: 'pretty' }}>{l.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>

    {/* Journey */}
    <Section>
      <Intro center eyebrow="One day. Three experts. One patient journey." title="Learn why it matters. Learn how to convert. Build the system that does it every day." />
      <ScrollReveal delay={200}>
        <div className="booked-journey" style={{ fontFamily: SERIF, fontSize: 22, color: CREAM }}>
          {JOURNEY.map((step) => (
            <React.Fragment key={step}>
              <span>{step}</span><span style={{ color: GOLD }}>→</span>
            </React.Fragment>
          ))}
          <span style={{ fontWeight: 900, color: GOLD }}>BOOKED.</span>
        </div>
      </ScrollReveal>
    </Section>

    {/* Speakers */}
    <Section id="speakers" bg={PANEL}>
      <Intro eyebrow="Your speakers" title="Three people who have lived the front desk, the diary and the systems." />
      <div className="booked-g3">
        {SPEAKERS.map((s, i) => (
          <ScrollReveal key={s.name} variant="scale" delay={STAGGER[i]} style={{ height: '100%' }}>
            <div className="interactive-lift" style={{ display: 'flex', flexDirection: 'column', gap: 18, background: BG, border: `1px solid ${LINE}`, height: '100%', overflow: 'hidden' }}>
              <div style={{ aspectRatio: '4 / 4.6', overflow: 'hidden' }}>
                <img src={s.photo} alt={s.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
              </div>
              <div style={{ padding: '0 24px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD }}>{s.session}</div>
                <div style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 28, lineHeight: 1.1, color: CREAM }}>{s.name}</div>
                <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 18, color: GOLD }}>{s.topic}</div>
                <p style={{ margin: 0, fontFamily: SANS, fontWeight: 300, fontSize: 15, lineHeight: 1.65, color: MUTED, textWrap: 'pretty' }}>{s.text}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>

    {/* Agenda */}
    <Section id="agenda">
      <Intro eyebrow="Full day agenda · 14 November" title="From 9:00 to BOOKED." />
      <div style={{ display: 'flex', flexDirection: 'column', borderBottom: `1px solid ${LINE}` }}>
        {AGENDA.map((a) => (
          <ScrollReveal key={a.time}>
            <div className="booked-arow">
              <div style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 26, color: GOLD }}>{a.time}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 20, color: CREAM }}>{a.title}</div>
                {a.text && <p style={{ margin: 0, fontFamily: SANS, fontWeight: 300, fontSize: 15, lineHeight: 1.65, color: MUTED }}>{a.text}</p>}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <div><Cta>Book your seat on Eventbrite</Cta></div>
    </Section>

    {/* Takeaways */}
    <Section bg={PANEL}>
      <Intro eyebrow="What you leave with" title="A plan, not pages of notes." />
      <div className="booked-g2">
        {TAKEAWAYS.map((t, i) => (
          <ScrollReveal key={t.title} variant={i % 2 ? 'right' : 'left'}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <svg style={{ flexShrink: 0, marginTop: 4 }} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 22, color: CREAM }}>{t.title}</div>
                <p style={{ margin: 0, fontFamily: SANS, fontWeight: 300, fontSize: 15, lineHeight: 1.65, color: MUTED }}>{t.text}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>

    {/* Tickets */}
    <Section id="tickets">
      <ScrollReveal variant="scale">
        <div className="booked-ticket">
          <div style={{ position: 'absolute', inset: 8, border: '1px solid rgba(185,149,82,0.3)', pointerEvents: 'none' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Eyebrow>Tickets</Eyebrow>
            <H2>Secure your seat.</H2>
            <Lead>30 seats. One room. Every attendee leaves with the BOOKED. Workbook, their 90-day Playbook and a CPD certificate. Tickets are live on Eventbrite under Dream Squat.</Lead>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: SANS, fontSize: 14, color: CREAM }}>
              {['Saturday 14 November · 9:00 to 16:45', 'London · Venue details on Eventbrite', '5 hours verifiable CPD'].map((d) => (
                <div key={d} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ width: 6, height: 6, background: GOLD, borderRadius: '50%', flexShrink: 0 }} />{d}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase', color: MUTED }}>Per person</div>
            <div style={{ fontFamily: SERIF, fontWeight: 900, fontSize: 88, lineHeight: 1, color: GOLD }}>£249</div>
            <p style={{ margin: 0, fontFamily: SANS, fontWeight: 300, fontSize: 15, lineHeight: 1.6, color: MUTED }}>Bring the whole front-of-house team. One ticket per person.</p>
            <Cta>Book on Eventbrite</Cta>
            <div style={{ fontFamily: SANS, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: MUTED }}>Limited to 30 seats</div>
          </div>
        </div>
      </ScrollReveal>
    </Section>

    {/* FAQ */}
    <Section bg={PANEL} narrow>
      <ScrollReveal><Eyebrow>Questions</Eyebrow></ScrollReveal>
      <div style={{ display: 'flex', flexDirection: 'column', borderBottom: `1px solid ${LINE}`, marginTop: -16 }}>
        {FAQS.map((f) => (
          <ScrollReveal key={f.q}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '22px 0', borderTop: `1px solid ${LINE}` }}>
              <div style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 20, color: CREAM }}>{f.q}</div>
              <p style={{ margin: 0, fontFamily: SANS, fontWeight: 300, fontSize: 15, lineHeight: 1.65, color: MUTED, textWrap: 'pretty' }}>{f.a}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>

    {/* Closing */}
    <Section>
      <ScrollReveal>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, textAlign: 'center' }}>
          <div style={{ maxWidth: 820, fontFamily: SERIF, fontStyle: 'italic', fontSize: 40, lineHeight: 1.2, color: CREAM, textWrap: 'balance' }}>Answer better. Follow up smarter. Convert more. Fill the diary.</div>
          <div style={{ width: 72, height: 2, background: GOLD }} />
          <Cta>Book your seat on Eventbrite</Cta>
        </div>
      </ScrollReveal>
    </Section>

    <Footer />
  </div>
);
