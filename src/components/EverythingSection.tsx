import React from 'react';
import { SectionPill } from './SectionPill';
import { ScrollReveal } from './ScrollReveal';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

export const EverythingSection: React.FC = () => (
  <section style={{ background: '#FEF3DC', padding: '80px 80px', overflow: 'hidden' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 50, alignItems: 'stretch' }}>
      {/* Left card */}
      <div style={{ flex: '0 0 630px', background: '#fff', borderRadius: 32, padding: '40px 40px 48px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <ScrollReveal variant="left">
          <SectionPill innerBg="#fff">THE PROBLEM</SectionPill>
          <h2 style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#131313', lineHeight: 1.1, marginTop: 24, marginBottom: 24 }}>
            Everything I used to build three practices, in one place, for{' '}
            <span style={{ color: '#C58F28' }}>£19.99 a month.</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p style={{ fontFamily: SF, fontSize: 15, fontWeight: 400, color: '#444', lineHeight: 1.65 }}>
              Most dentists do not fail at opening a practice. They stall. They open a spreadsheet, hit twelve unknowns, and shelve it for another year.
            </p>
            <p style={{ fontFamily: SF, fontSize: 15, fontWeight: 400, color: '#444', lineHeight: 1.65 }}>
              The Club removes those unknowns one at a time. Full build cost model, an AI location finder, 100 templates, a build diary to run your project in, video walkthroughs of the real builds, and a room full of dentists at every stage from thinking about it to open and trading.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Right card — image */}
      <div style={{ flex: 1, borderRadius: 32, overflow: 'hidden', height: 680 }}>
        <ScrollReveal variant="right" style={{ height: '100%' }}>
          <img
            src="/everything-img.png"
            alt="Person with laptop and Dream Squat dashboard"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
        </ScrollReveal>
      </div>
    </div>
  </section>
);
