import React from 'react';
import {
  MapPin,
  GraduationCap,
  BookOpen,
  Calculator,
  Users,
  ShieldCheck,
  Route,
  Search,
  Sparkles,
  Target,
  CheckCircle2,
  Layers,
  HelpCircle,
  Compass,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SectionPill } from '../components/SectionPill';
import { ScrollReveal } from '../components/ScrollReveal';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#925E02';
const DARK = '#131313';
const CREAM = '#FCF6EF';
const CHIP = '#F4EEE5';
const CARD = '#FFD073';

/* ── shared local pieces ─────────────────────────────────────────── */

const CtaButton: React.FC<{ href?: string; onClick?: () => void; children: React.ReactNode; light?: boolean; className?: string }> = ({
  href,
  onClick,
  children,
  light = false,
  className = '',
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
  <div className="interactive-lift" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: '#fff', border: '1px solid #e3aa33', borderRadius: 10, padding: 12 }}>
    <img src="/event-check.svg" alt="" style={{ width: 22, height: 22, flexShrink: 0, marginTop: 1 }} />
    <p className="interactive-text-parent" style={{ fontFamily: SF, fontSize: 15, color: DARK, lineHeight: 1.5, margin: 0 }}>
      <span className="interactive-text">{text}</span>
    </p>
  </div>
);

const Tag: React.FC<{ text: string }> = ({ text }) => (
  <span style={{ fontFamily: SF, fontSize: 13, fontWeight: 400, color: DARK, background: CHIP, border: '1px solid rgba(19,19,19,0.1)', borderRadius: 999, padding: '6px 14px', whiteSpace: 'nowrap' }}>
    {text}
  </span>
);

const InfoCard: React.FC<{ Icon: React.FC<{ size?: number; color?: string }>; title: string; desc: string }> = ({ Icon, title, desc }) => (
  <div className="interactive-lift" style={{ background: CARD, borderRadius: 20, padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: 12 }}>
    <Icon size={36} color={GOLD} />
    <h3 style={{ fontFamily: SF, fontSize: 22, fontWeight: 700, color: GOLD, margin: 0 }}>{title}</h3>
    <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: DARK, lineHeight: 1.55, margin: 0 }}>{desc}</p>
  </div>
);

const RiskCard: React.FC<{ stat: string; desc: string }> = ({ stat, desc }) => (
  <div className="interactive-lift" style={{ background: CHIP, border: `1px solid ${GOLD}33`, borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
    <p style={{ fontFamily: SF, fontSize: 42, fontWeight: 700, color: GOLD, margin: 0, lineHeight: 1 }}>{stat}</p>
    <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: DARK, lineHeight: 1.55, margin: 0 }}>{desc}</p>
  </div>
);

const FeatureChip: React.FC<{ Icon: React.FC<{ size?: number; color?: string }>; label: string }> = ({ Icon, label }) => (
  <div className="interactive-lift portal-feature-chip" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, width: 150 }}>
    <div style={{ width: 64, height: 64, borderRadius: '50%', background: CHIP, border: `1px solid ${GOLD}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={26} color={GOLD} />
    </div>
    <p style={{ fontFamily: SF, fontSize: 14, fontWeight: 600, color: DARK, textAlign: 'center', margin: 0, lineHeight: 1.3 }}>{label}</p>
  </div>
);

const StepItem: React.FC<{ Icon: React.FC<{ size?: number; color?: string }>; index: number; text: string }> = ({ Icon, index, text }) => (
  <div className="interactive-lift" style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#fff', borderRadius: 14, padding: '14px 18px' }}>
    <div style={{ width: 40, height: 40, borderRadius: 10, background: CHIP, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={20} color={GOLD} />
    </div>
    <p style={{ fontFamily: SF, fontSize: 15, fontWeight: 600, color: DARK, margin: 0 }}>
      <span style={{ color: GOLD, marginRight: 6 }}>{index}.</span>
      {text}
    </p>
  </div>
);

const BENEFITS = [
  'Full portal access',
  'AI Location Finder',
  '5-module course',
  'Build Journey',
  'Cost Calculator',
  '100+ resources',
  'Vetted supplier directory',
  'Private community',
];

const FEATURE_ROW = [
  { Icon: MapPin, label: 'AI Location Finder' },
  { Icon: GraduationCap, label: 'Courses' },
  { Icon: BookOpen, label: 'Resources' },
  { Icon: Calculator, label: 'Cost Calculator' },
  { Icon: Users, label: 'Community' },
  { Icon: ShieldCheck, label: 'Supplier Vetting' },
  { Icon: Route, label: 'My Build Journey' },
];

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
              <h1 className="section-text-reveal portal-h1" style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: DARK, lineHeight: 1.1, marginTop: 20, marginBottom: 16 }}>
                <span className="page-load-reveal page-load-reveal--delay-1">Everything you need to open your squat dental practice.</span>
              </h1>
              <p className="section-text-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 20, fontWeight: 600, color: GOLD, margin: '0 0 16px' }}>
                One place. One price. No guesswork.
              </p>
              <p className="section-text-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 16, color: DARK, lineHeight: 1.65, margin: '0 0 28px', maxWidth: 560 }}>
                You've got the clinical skills. You've got the ambition. What you've been missing is a clear roadmap to turn your vision into a successful dental practice.
              </p>
              <div className="page-load-reveal page-load-reveal--delay-3">
                <CtaButton href="#pricing">JOIN FOR £19.99/MONTH →</CtaButton>
              </div>
            </ScrollReveal>
          </div>

          <div className="portal-hero-art interactive-lift page-load-reveal page-load-reveal--delay-2" style={{ flex: 1, height: 600, overflow: 'hidden', flexShrink: 0, borderRadius: 24, background: '#fff' }}>
            <ScrollReveal variant="right" style={{ height: '100%' }}>
              <img src="/calc-dashboard.png" alt="Dream Squat portal dashboard" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center', display: 'block' }} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    {/* Trust strip */}
    <section style={{ background: GOLD, padding: '18px 24px' }}>
      <p className="section-text-reveal" style={{ fontFamily: SF, fontSize: 15, fontWeight: 500, color: '#fff', textAlign: 'center', margin: 0 }}>
        Trusted by 70+ dentists who have opened their own practices across the UK
      </p>
    </section>

    {/* The Problem */}
    <section className="portal-section" style={{ background: CHIP, padding: '80px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="portal-problem-row" style={{ display: 'flex', gap: 50, alignItems: 'flex-start' }}>
          <div style={{ flex: '0 0 580px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ScrollReveal variant="left">
              <SectionPill innerBg={CHIP}>THE PROBLEM</SectionPill>
              <h2 className="section-text-reveal portal-h2" style={{ fontFamily: SF, fontSize: 48, fontWeight: 700, color: DARK, lineHeight: 1.15, marginTop: 20, marginBottom: 16 }}>
                Going squat shouldn't feel this complicated.
              </h2>
              <p style={{ fontFamily: SF, fontSize: 16, color: DARK, lineHeight: 1.65, margin: '0 0 12px' }}>
                Most dentists who dream of opening their own practice never take the leap.
              </p>
              <p style={{ fontFamily: SF, fontSize: 16, color: DARK, lineHeight: 1.65, margin: '0 0 20px' }}>
                Not because they aren't capable but because finding the right information can feel impossible.
              </p>
              <div className="portal-tag-row" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                <Tag text="Google searches." />
                <Tag text="Conflicting advice" />
                <Tag text="Endless decisions" />
                <Tag text="Months spent trying to work out" />
                <Tag text="what to do" />
                <Tag text="when to do it" />
                <Tag text="who to trust." />
              </div>
            </ScrollReveal>
          </div>

          <div className="interactive-lift" style={{ flex: 1, background: '#fff', border: `1px solid ${GOLD}33`, borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ScrollReveal variant="right">
              <h3 style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: GOLD, lineHeight: 1.3, margin: '0 0 16px' }}>
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
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 46% 36% at 50% 24%, ${GOLD}26 0%, transparent 100%)`, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <ScrollReveal>
          <h2 className="section-text-reveal portal-h2" style={{ fontFamily: SF, fontSize: 48, fontWeight: 700, color: '#fff', lineHeight: 1.15, textAlign: 'center', maxWidth: 820, margin: '0 auto 40px' }}>
            That's exactly why we built Dream Squat.
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
            <div className="interactive-lift" style={{ height: 460, width: 'fit-content', borderRadius: 24, overflow: 'hidden', background: '#fff' }}>
              <img src="/calc-dashboard.png" alt="Dream Squat build journey dashboard" style={{ height: '100%', width: 'auto', display: 'block', objectFit: 'contain' }} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <div className="portal-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            <InfoCard Icon={Layers} title="Information Overload" desc="Scattered advice and endless Google searches." />
            <InfoCard Icon={HelpCircle} title="Decision Paralysis" desc="Too many decisions. No clear path forward." />
            <InfoCard Icon={Compass} title="No Dedicated Roadmap" desc="Nothing built specifically for dentists starting from scratch." />
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Built from experience */}
    <section className="portal-section" style={{ background: CREAM, padding: '80px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <div className="portal-founder-top" style={{ display: 'flex', gap: 50, alignItems: 'flex-start', marginBottom: 24 }}>
            <div className="interactive-lift portal-founder-photo" style={{ flex: '0 0 480px', height: 460, borderRadius: 20, overflow: 'hidden', background: '#ccc' }}>
              <img src="/saba.png" alt="Saba Arif" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            <div style={{ flex: 1, paddingTop: 8 }}>
              <div style={{ marginBottom: 20 }}><SectionPill innerBg={CHIP}>BUILT FROM EXPERIENCE</SectionPill></div>
              <h2 className="section-text-reveal portal-h2" style={{ fontFamily: SF, fontSize: 44, fontWeight: 700, color: DARK, lineHeight: 1.15, marginBottom: 24 }}>
                Built by someone who's done it. Three times.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <p style={{ fontFamily: SF, fontSize: 16, color: DARK, lineHeight: 1.65, margin: 0 }}>
                  Dream Squat was created by Saba Arif, a dental clinic owner who has opened three squat practices from scratch.
                </p>
                <p style={{ fontFamily: SF, fontSize: 16, color: DARK, lineHeight: 1.65, margin: 0 }}>
                  She has since mentored 70+ dentists through the process from finding the right location and securing finance to CQC registration, fit-out, equipment and marketing.
                </p>
                <p style={{ fontFamily: SF, fontSize: 16, color: DARK, lineHeight: 1.65, margin: 0 }}>
                  Saba didn't build Dream Squat from a textbook. She built it from real practices, real decisions, real mistakes and years of helping dentists make the leap.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <div className="portal-founder-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            <div className="interactive-lift" style={{ borderRadius: 20, overflow: 'hidden', height: 260, position: 'relative', background: DARK }}>
              <img src="/practices-clinic.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180.09deg, rgba(121,77,0,0) 38.64%, #000000 89.9%)' }} />
              <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
                <p style={{ fontFamily: SF, fontWeight: 400, fontSize: 16, color: CREAM, lineHeight: 1.5, margin: 0 }}>
                  Everything she wished she'd had when she opened her first practice is now inside Dream Squat.
                </p>
              </div>
            </div>
            {[
              { value: '3', label: 'Practices opened' },
              { value: '70+', label: 'Dentists mentored' },
              { value: '1', label: 'Complete roadmap' },
            ].map((s) => (
              <div key={s.label} className="interactive-lift" style={{ borderRadius: 20, height: 260, background: CHIP, border: `1px solid ${GOLD}33`, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 20 }}>
                <p style={{ fontFamily: SF, fontSize: 48, fontWeight: 700, color: GOLD, lineHeight: 1, margin: 0 }}>{s.value}</p>
                <p style={{ fontFamily: SF, fontSize: 15, fontWeight: 400, color: DARK, marginTop: 6, marginBottom: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '40px auto 0' }}>
            <h3 style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: GOLD, margin: '0 0 10px' }}>This isn't theory. It's experience.</h3>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* One Portal. Everything You Need. */}
    <section className="portal-section" style={{ background: '#FFF0D1', padding: '80px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ marginBottom: 40, textAlign: 'center' }}>
            <div style={{ marginBottom: 20 }}><SectionPill innerBg="#FFF0D1">ONE PORTAL. EVERYTHING YOU NEED.</SectionPill></div>
            <h2 className="section-text-reveal portal-h2" style={{ fontFamily: SF, fontSize: 44, fontWeight: 700, color: DARK, lineHeight: 1.15, maxWidth: 760, margin: '0 auto 16px' }}>
              From "Where do I start?" to "We're open."
            </h2>
            <p style={{ fontFamily: SF, fontSize: 16, color: DARK, maxWidth: 640, margin: '0 auto' }}>
              Dream Squat brings the tools, education, resources and support you need to build your practice all in one place.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <div className="portal-feature-row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24, marginBottom: 56 }}>
            {FEATURE_ROW.map((f) => (
              <FeatureChip key={f.label} Icon={f.Icon} label={f.label} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <div className="portal-ai-row" style={{ display: 'flex', gap: 50, alignItems: 'center', background: '#fff', borderRadius: 24, padding: 40 }}>
            <div style={{ flex: '0 0 440px' }}>
              <SectionPill innerBg="#fff">AI LOCATION FINDER</SectionPill>
              <h3 style={{ fontFamily: SF, fontSize: 32, fontWeight: 700, color: DARK, lineHeight: 1.2, margin: '20px 0 16px' }}>
                Find the right location before you commit.
              </h3>
              <p style={{ fontFamily: SF, fontSize: 15, color: DARK, lineHeight: 1.6, margin: '0 0 24px' }}>
                Dream Squat analyses local demographics, competition, NHS capacity, deprivation data and growth signals then uses AI to help you understand whether the location is worth pursuing and whether a private or mixed model makes sense.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <StepItem Icon={Search} index={1} text="Postcode search" />
                <StepItem Icon={MapPin} index={2} text="Map" />
                <StepItem Icon={Sparkles} index={3} text="AI analysis" />
                <StepItem Icon={Target} index={4} text="Recommendation" />
              </div>
            </div>
            <div className="interactive-lift portal-ai-art" style={{ flex: 1, height: 420, borderRadius: 20, overflow: 'hidden', background: CHIP }}>
              <img src="/everything-img.png" alt="AI Location Finder preview" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Pricing */}
    <section id="pricing" className="portal-section" style={{ background: CREAM, padding: '80px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ marginBottom: 20 }}><SectionPill innerBg={CREAM}>SIMPLE PRICING</SectionPill></div>
            <h2 className="section-text-reveal portal-h2" style={{ fontFamily: SF, fontSize: 44, fontWeight: 700, color: DARK, lineHeight: 1.15, margin: 0 }}>
              Everything included. One simple price.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <div className="interactive-lift portal-pricing-card" style={{ display: 'flex', gap: 50, alignItems: 'stretch', background: '#fff', borderRadius: 28, padding: 40, border: `1px solid ${GOLD}33` }}>
            <div className="portal-pricing-art" style={{ flex: '0 0 460px', borderRadius: 20, overflow: 'hidden', background: CHIP }}>
              <img src="/calc-dashboard.png" alt="Dream Squat portal dashboard" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontFamily: SF, fontSize: 14, fontWeight: 600, color: GOLD, letterSpacing: '0.08em', margin: '0 0 8px' }}>PRICE</p>
              <p style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: DARK, lineHeight: 1, margin: 0 }}>
                £19.99 <span style={{ fontSize: 20, fontWeight: 400, color: '#6b6b6b' }}>/ month</span>
              </p>
              <p style={{ fontFamily: SF, fontSize: 15, color: DARK, margin: '12px 0 24px' }}>
                Everything inside Dream Squat is included from day one.
              </p>

              <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 700, color: DARK, margin: '0 0 14px' }}>Benefits</p>
              <div className="portal-pricing-benefits" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px 20px', marginBottom: 24 }}>
                {BENEFITS.map((b) => (
                  <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <CheckCircle2 size={18} color={GOLD} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: SF, fontSize: 14, color: DARK }}>{b}</span>
                  </div>
                ))}
              </div>

              <div style={{ height: 1, background: 'rgba(0,0,0,0.1)', margin: '0 0 20px' }} />

              <p style={{ fontFamily: SF, fontSize: 13, color: '#6b6b6b', lineHeight: 1.5, margin: '0 0 8px' }}>
                No hidden fees. No complicated packages. No premium tier hiding the good stuff.
              </p>
              <p style={{ fontFamily: SF, fontSize: 14, fontWeight: 600, color: DARK, margin: '0 0 24px' }}>
                Cancel anytime. No contract. Instant access.
              </p>

              <div>
                <CtaButton href="#pricing">Start for £19.99/month →</CtaButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Look at the bigger picture */}
    <section className="portal-section" style={{ background: CREAM, padding: '0 80px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ marginBottom: 20 }}><SectionPill innerBg={CREAM}>LOOK AT THE BIGGER PICTURE</SectionPill></div>
            <h2 className="section-text-reveal portal-h2" style={{ fontFamily: SF, fontSize: 40, fontWeight: 700, color: DARK, lineHeight: 1.2, maxWidth: 760, margin: '0 auto' }}>
              £19.99 is small compared to the cost of getting it wrong.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <div className="portal-risk-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 40 }}>
            <RiskCard stat="£20,000+" desc="One bad lease clause could cost you thousands." />
            <RiskCard stat="4 MONTHS" desc="A missed CQC deadline could delay your opening while you're still paying rent." />
            <RiskCard stat="10+ YEARS" desc="The wrong location could shape the next decade of your career." />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p style={{ fontFamily: SF, fontSize: 20, fontWeight: 400, fontStyle: 'italic', color: DARK, textAlign: 'center', maxWidth: 680, margin: '0 auto 60px', lineHeight: 1.5 }}>
            Dream Squat isn't another monthly expense.{' '}
            <span style={{ color: GOLD, fontWeight: 700, fontStyle: 'normal' }}>It's a smarter way to protect the biggest business decision of your career.</span>
          </p>
        </ScrollReveal>

        {/* Mid-page CTA card */}
        <ScrollReveal variant="scale">
          <div className="interactive-lift portal-cta-card" style={{ background: '#7B4E00', borderRadius: 28, padding: '48px 56px' }}>
            <div style={{ marginBottom: 20 }}><SectionPill innerBg="#7B4E00"><span style={{ color: CREAM }}>YOUR PRACTICE STARTS HERE</span></SectionPill></div>
            <h2 style={{ fontFamily: SF, fontSize: 36, fontWeight: 700, color: CREAM, lineHeight: 1.2, margin: '0 0 20px', maxWidth: 640 }}>
              Your practice is closer than you think.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
              <p style={{ fontFamily: SF, fontSize: 16, color: '#FFF0D1', margin: 0 }}>→ The location is out there.</p>
              <p style={{ fontFamily: SF, fontSize: 16, color: '#FFF0D1', margin: 0 }}>→ The patients are waiting.</p>
              <p style={{ fontFamily: SF, fontSize: 16, color: '#FFF0D1', margin: 0 }}>→ And the practice you've imagined is entirely possible.</p>
            </div>
            <p style={{ fontFamily: SF, fontSize: 16, color: '#FFF0D1', lineHeight: 1.6, margin: '0 0 8px', maxWidth: 620 }}>
              What you need now is a plan, the right tools and guidance from people who've already walked the path.
            </p>
            <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 700, color: CREAM, margin: '0 0 28px' }}>Dream Squat gives you all three.</p>
            <CtaButton href="#pricing" light>JOIN FOR £19.99/MONTH →</CtaButton>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Showcase */}
    <section className="portal-section" style={{ background: DARK, padding: '80px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="portal-h2" style={{ fontFamily: SF, fontSize: 44, fontWeight: 700, color: '#fff', lineHeight: 1.15, margin: '0 0 12px' }}>
              Stop searching. Start building.
            </h2>
            <p style={{ fontFamily: SF, fontSize: 18, color: 'rgba(255,255,255,0.75)', margin: 0 }}>
              The clearer path to opening the practice you've always wanted.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <div className="portal-showcase-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {['/calc-dashboard.png', '/everything-img.png', '/practices-clinic.png'].map((src) => (
              <div key={src} className="interactive-lift" style={{ height: 320, borderRadius: 20, overflow: 'hidden', background: '#232323' }}>
                <img src={src} alt="Dream Squat portal preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);
