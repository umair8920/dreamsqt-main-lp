import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SectionPill } from '../components/SectionPill';
import { ScrollReveal } from '../components/ScrollReveal';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const CREAM = '#FCF6EF';

export const ContactPage: React.FC = () => (
  <div className="contact-page" style={{ background: CREAM }}>
    <section className="contact-hero" style={{ background: CREAM }}>
      <Header variant="light" />

      <div className="contact-hero-inner" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px 80px' }}>
        <div className="contact-layout" style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
          <div className="contact-left-column" style={{ flex: '0 0 579px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <ScrollReveal variant="left" className="contact-left-reveal">
              <div className="contact-copy" style={{ paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="page-load-reveal page-load-reveal--delay-1" style={{ display: 'inline-flex' }}>
                  <SectionPill innerBg={CREAM}>Free resources</SectionPill>
                </div>
                <h1 className="page-load-reveal page-load-reveal--delay-2 contact-title" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#231F20', lineHeight: 1.1, margin: 0 }}>
                  Reach out to us
                </h1>
                <p className="page-load-reveal page-load-reveal--delay-3 contact-copy-text" style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: 0 }}>
                  Always here to help.<br />
                  Fill out the form below and you'll get a response within 48 hours.
                </p>
              </div>

              <div className="interactive-lift contact-photo-wrap" style={{ borderRadius: 40, overflow: 'hidden', height: 674, flexShrink: 0, marginTop: 20 }}>
                <img
                  className="contact-photo"
                  src="/contact-event-photo.png"
                  alt="Dream Squat event"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="contact-right-column" style={{ flex: 1, minHeight: 866 }}>
            <ScrollReveal variant="right" style={{ height: '100%' }}>
              <div className="contact-form-card" style={{
                background: '#fff',
                borderRadius: 40,
                minHeight: 866,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                padding: 24,
                boxSizing: 'border-box',
              }}>
                <iframe
                  title="Contact form"
                  src="https://app.flossly.ai/lead-form/a7cbcd6c5f7d73e961dd4bc874f0e9d6b6caa85ec48886221b5dec0c626d7f9a"
                  width="100%"
                  style={{ border: 'none', borderRadius: 12, display: 'block', flex: 1, minHeight: 0, width: '100%' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);
