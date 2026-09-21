import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SectionPill } from '../components/SectionPill';
import { ScrollReveal } from '../components/ScrollReveal';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#925E02';

const FeatureCard = ({ icon, text }: { icon: string; text: string }) => (
  <div
    className="interactive-lift cost-feature-card page-load-reveal page-load-reveal--delay-2"
    style={{
      flex: 1,
      border: `1px solid ${GOLD}`,
      borderRadius: 20,
      background: '#F4EEE5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 28px',
      gap: 24,
      minHeight: 220,
    }}
  >
    <img src={icon} alt="" className="interactive-lift cost-feature-icon" style={{ width: 50, height: 50 }} />
    <p className="page-load-reveal page-load-reveal--delay-3 interactive-text-parent" style={{ fontFamily: SF, fontSize: 15, color: '#131313', textAlign: 'center', lineHeight: 1.55, margin: 0 }}>
      <span className="interactive-text">{text}</span>
    </p>
  </div>
);

export const CostCalculatorPage: React.FC = () => (
  <div style={{ background: '#F4EEE5' }}>
    <section className="cost-hero" style={{ background: '#FCF6EF', overflow: 'hidden' }}>
      <Header variant="light" />

      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div className="cost-hero-inner">
          <div style={{ flex: '0 0 643px', paddingBottom: 80, paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <ScrollReveal variant="left">
              <SectionPill innerBg="#FCF6EF">
                <span className="page-load-reveal page-load-reveal--delay-1">DREAM SQUAT PORTAL</span>
              </SectionPill>
              <h1 className="section-text-reveal cost-h1" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#131313', lineHeight: 1.1, marginTop: 20, marginBottom: 20 }}>
                <span className="page-load-reveal page-load-reveal--delay-1">What does it actually</span>{' '}
                <span className="page-load-reveal page-load-reveal--delay-2" style={{ color: GOLD }}>cost to open</span>{' '}
                <span className="page-load-reveal page-load-reveal--delay-3">a dental practice?</span>
              </h1>
              <p className="section-text-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: 0, maxWidth: 643, marginBottom: 20 }}>
                Four minutes, six questions, and a realistic range for your build. Fit-out, equipment, working capital, CQC, marketing and contingency. This is the same model I ran before I signed the lease on Dentozen London.
              </p>
              <div>
                <a
                  href="https://dreamsquat-practice-cost.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-button page-load-reveal page-load-reveal--delay-3"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: GOLD,
                    color: '#fbfbfb',
                    fontFamily: SF,
                    fontSize: 14,
                    fontWeight: 590,
                    padding: '12px 30px',
                    borderRadius: 8,
                    textDecoration: 'none',
                  }}
                >
                  Start the calculator →
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="cost-hero-art interactive-lift page-load-reveal page-load-reveal--delay-2" style={{ flex: 1, height: 634, overflow: 'hidden', flexShrink: 0, maxWidth: 573 }}>
            <ScrollReveal variant="right" style={{ height: '100%' }}>
              <img src="/calc-dashboard.png" alt="Dental Practice Setup Cost Estimator" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center', display: 'block' }} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    <section className="cost-body" style={{ background: '#F4EEE5' }}>
      <div className="cost-container">
        <ScrollReveal>
          <div className="cost-block-intro" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src="/icon-warning.svg" alt="" className="interactive-lift cost-block-icon" />
            <h2 className="section-text-reveal cost-h2" style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#131313', lineHeight: 1.1, marginBottom: 24, maxWidth: 830 }}>
              <span className="page-load-reveal page-load-reveal--delay-1">Why the numbers you have</span>{' '}
              <span className="page-load-reveal page-load-reveal--delay-2" style={{ color: GOLD }}>heard are wrong</span>
            </h2>
            <p className="section-text-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: '0 0 16px', maxWidth: 670 }}>
              Ask ten people what a squat costs and you will get answers from £120k to £600k. Both are true, for different practices, and neither helps you.
            </p>
            <p className="section-text-reveal page-load-reveal--delay-3" style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: 0, maxWidth: 670 }}>
              The number that matters is yours: your surgery count, your specification, your area, your treatment mix. That is what this works out.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ height: 1, background: 'rgba(0,0,0,0.12)' }} />

        <ScrollReveal variant="scale">
          <div className="cost-block-features">
            <h2 className="section-text-reveal cost-h2" style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#131313', lineHeight: 1.1, textAlign: 'center', marginBottom: 48 }}>
              <span className="page-load-reveal page-load-reveal--delay-1">What you</span>{' '}
              <span className="page-load-reveal page-load-reveal--delay-2" style={{ color: GOLD }}>get</span>
            </h2>
            <div className="cost-feature-grid">
              <FeatureCard icon="/icon-code.svg" text="A realistic total range for your build" />
              <FeatureCard icon="/icon-breakdown.svg" text="The breakdown by category, so you can see what is fixed and what is a choice" />
              <FeatureCard icon="/icon-capital.svg" text="Working capital, which is the line almost everyone forgets and the one that kills practices in month four" />
              <FeatureCard icon="/icon-compare.svg" text="What the same money buys if you bought an existing practice instead" />
            </div>
          </div>
        </ScrollReveal>

        <div style={{ height: 1, background: 'rgba(0,0,0,0.12)' }} />

        <ScrollReveal>
          <div className="cost-block-outro" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src="/icon-notdo.svg" alt="" className="interactive-lift cost-block-icon" />
            <h2 className="section-text-reveal cost-h2" style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#131313', lineHeight: 1.1, marginBottom: 28, maxWidth: 830 }}>
              <span className="page-load-reveal page-load-reveal--delay-1">What it will</span>{' '}
              <span className="page-load-reveal page-load-reveal--delay-2" style={{ color: GOLD }}>not do</span>
            </h2>
            <p className="section-text-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: '0 0 16px', maxWidth: 670 }}>
              It will not replace a proper financial model, and it will not tell you whether your site works. Those live inside the Club. This tells you whether you are in the right postcode financially, which is enough to decide whether to keep going.
            </p>
            <p className="section-text-reveal page-load-reveal--delay-3" style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: 0, maxWidth: 670 }}>
              <strong>Email gate copy:</strong> Where should I send your breakdown? Your full breakdown lands in your inbox in under a minute. No sales call unless you ask for one.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);
