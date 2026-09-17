import React from 'react';
import { TopBar } from '../components/TopBar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SectionPill } from '../components/SectionPill';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#925E02';

/* ── Feature card ── */
const FeatureCard = ({ icon, text }: { icon: string; text: string }) => (
  <div style={{ flex: 1, border: `1px solid ${GOLD}`, borderRadius: 20, background: '#F4EEE5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 28px', gap: 24, minHeight: 220 }}>
    <img src={icon} alt="" style={{ width: 50, height: 50 }} />
    <p style={{ fontFamily: SF, fontSize: 15, color: '#131313', textAlign: 'center', lineHeight: 1.55, margin: 0 }}>{text}</p>
  </div>
);

export const CostCalculatorPage: React.FC = () => (
  <div style={{ background: '#F4EEE5' }}>
    {/* Top bar */}
    <TopBar />

    {/* Hero section — #FCF6EF */}
    <section style={{ background: '#FCF6EF', overflow: 'hidden' }}>
      <Header variant="light" />

      {/* Hero content */}
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', padding: '96px 80px 0', gap: 71 }}>
        {/* Left */}
        <div style={{ flex: '0 0 643px', paddingBottom: 80, paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Pill */}
          <SectionPill innerBg="#FCF6EF">DREAM SQUAT PORTAL</SectionPill>
          {/* Heading */}
          <h1 style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#131313', lineHeight: 1.1, margin: 0 }}>
            What does it actually{' '}
            <span style={{ color: GOLD }}>cost to open</span>{' '}
            a dental practice?
          </h1>
          {/* Body */}
          <p style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: 0, maxWidth: 643 }}>
            Four minutes, six questions, and a realistic range for your build. Fit-out, equipment, working capital, CQC, marketing and contingency. This is the same model I ran before I signed the lease on Dentozen London.
          </p>
          {/* CTA */}
          <div>
            <a href="#calculator" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: GOLD, color: '#fbfbfb', fontFamily: SF, fontSize: 14, fontWeight: 590, padding: '12px 30px', borderRadius: 8, textDecoration: 'none' }}>
              Start the calculator →
            </a>
          </div>
        </div>

        {/* Right — calculator screenshot card (rounded top corners only) */}
        <div style={{ flex: 1, height: 634, borderRadius: '40px 40px 0 0', overflow: 'hidden', background: GOLD, flexShrink: 0, maxWidth: 573 }}>
          <img src="/calc-dashboard.png" alt="Dental Practice Setup Cost Estimator" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
        </div>
      </div>
      </div>
    </section>

    {/* Middle section — #F4EEE5 */}
    <section style={{ background: '#F4EEE5' }}>
    <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>

      {/* Why numbers wrong */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '80px 0 60px' }}>
        <img src="/icon-warning.svg" alt="" style={{ width: 100, height: 100, marginBottom: 32 }} />
        <h2 style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#131313', lineHeight: 1.1, marginBottom: 24, maxWidth: 830 }}>
          Why the numbers you have{' '}
          <span style={{ color: GOLD }}>heard are wrong</span>
        </h2>
        <p style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: '0 0 16px', maxWidth: 670 }}>
          Ask ten people what a squat costs and you will get answers from £120k to £600k. Both are true, for different practices, and neither helps you.
        </p>
        <p style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: 0, maxWidth: 670 }}>
          The number that matters is yours: your surgery count, your specification, your area, your treatment mix. That is what this works out.
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'rgba(0,0,0,0.12)' }} />

      {/* What you get */}
      <div style={{ padding: '60px 0 60px' }}>
        <h2 style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#131313', lineHeight: 1.1, textAlign: 'center', marginBottom: 48 }}>
          What you <span style={{ color: GOLD }}>get</span>
        </h2>
        <div style={{ display: 'flex', gap: 20 }}>
          <FeatureCard icon="/icon-code.svg" text="A realistic total range for your build" />
          <FeatureCard icon="/icon-breakdown.svg" text="The breakdown by category, so you can see what is fixed and what is a choice" />
          <FeatureCard icon="/icon-capital.svg" text="Working capital, which is the line almost everyone forgets and the one that kills practices in month four" />
          <FeatureCard icon="/icon-compare.svg" text="What the same money buys if you bought an existing practice instead" />
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'rgba(0,0,0,0.12)' }} />

      {/* What it will not do */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '80px 0 100px' }}>
        <img src="/icon-notdo.svg" alt="" style={{ width: 100, height: 100, marginBottom: 32 }} />
        <h2 style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#131313', lineHeight: 1.1, marginBottom: 28, maxWidth: 830 }}>
          What it will <span style={{ color: GOLD }}>not do</span>
        </h2>
        <p style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: '0 0 16px', maxWidth: 670 }}>
          It will not replace a proper financial model, and it will not tell you whether your site works. Those live inside the Club. This tells you whether you are in the right postcode financially, which is enough to decide whether to keep going.
        </p>
        <p style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: 0, maxWidth: 670 }}>
          <strong>Email gate copy:</strong> Where should I send your breakdown? Your full breakdown lands in your inbox in under a minute. No sales call unless you ask for one.
        </p>
      </div>
    </div>
    </section>

    {/* Footer — same as main LP */}
    <Footer />
  </div>
);
