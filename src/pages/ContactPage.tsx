import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SectionPill } from '../components/SectionPill';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const CREAM = '#FCF6EF';

export const ContactPage: React.FC = () => (
  <div style={{ background: CREAM }}>

    {/* ── Hero ── */}
    <section style={{ background: CREAM }}>
      <Header variant="light" />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px 80px' }}>
        {/* Top row: text left, form card right */}
        <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>

          {/* Left column */}
          <div style={{ flex: '0 0 579px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Pill + heading + subtext */}
            <div style={{ paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <SectionPill innerBg={CREAM}>Free resources</SectionPill>
              <h1 style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#231F20', lineHeight: 1.1, margin: 0 }}>
                Reach out to us
              </h1>
              <p style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: 0 }}>
                Always here to help.<br />
                Fill out the form below and you'll get a response within 48 hours.
              </p>
            </div>

            {/* Event photo */}
            <div style={{ borderRadius: 40, overflow: 'hidden', height: 674, flexShrink: 0 }}>
              <img
                src="/contact-event-photo.png"
                alt="Dream Squat event"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </div>
          </div>

          {/* Right column — form card */}
          <div style={{
            flex: 1,
            background: '#fff',
            borderRadius: 40,
            minHeight: 866,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <p style={{ fontFamily: SF, fontSize: 60, color: '#DCDCDC', fontWeight: 400, margin: 0 }}>
              Flossly Form here
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);
