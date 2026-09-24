import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SectionPill } from '../components/SectionPill';
import { ScrollReveal } from '../components/ScrollReveal';
import { RESOURCES, ResourceCard, DownloadModal, type Resource } from '../components/ResourceCards';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#925E02';
const CREAM = '#FCF6EF';
const CARD_BG = '#F4EEE5';

export const ResourcesPage: React.FC = () => {
  const [active, setActive] = useState<Resource | null>(null);
  return (
  <div className="resources-page" style={{ background: CREAM }}>
    <section className="resources-hero" style={{ background: CREAM, overflow: 'hidden' }}>
      <Header variant="light" />

      <div className="resources-hero-inner" style={{ maxWidth: 1440, margin: '0 auto', padding: '80px 80px 0', display: 'flex', alignItems: 'flex-start', gap: 60, minHeight: 520 }}>
        <div className="resources-hero-copy" style={{ flex: '0 0 643px', display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 24, paddingBottom: 80 }}>
          <ScrollReveal variant="left" className="resources-hero-copy-reveal">
            <div className="page-load-reveal page-load-reveal--delay-1" style={{ display: 'inline-flex' }}>
              <SectionPill innerBg={CREAM}>Free resources</SectionPill>
            </div>
            <h1 className="page-load-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#231F20', lineHeight: 1.1, margin: '20px 0 0' }}>
              {'Insights that '}
              <span style={{ color: GOLD }}>build freedom</span>
            </h1>
            <p className="page-load-reveal page-load-reveal--delay-3" style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.65, margin: '20px 0 0' }}>
              Actionable insights on turning your ideas into digital products, income, and long-term freedom.
            </p>
          </ScrollReveal>
        </div>

        <div className="resources-hero-visual" style={{ flex: 1, height: 440, position: 'relative', overflow: 'hidden' }}>
          <img className="resources-hero-image" src="/resources-hero.png" alt="Free resources" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center' }} />
        </div>
      </div>
    </section>

    <section className="resources-grid-section" style={{ background: CARD_BG, padding: '80px 0 120px' }}>
      <div className="resources-grid-shell" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
        <div className="resources-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 24 }}>
          {RESOURCES.map((r, i) => (
            <ScrollReveal key={`${r.title}-${i}`} variant="scale" delay={([100, 200, 300, 400][i % 4]) as 100 | 200 | 300 | 400}>
              <ResourceCard {...r} onDownload={() => setActive(r)} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <Footer />
    {active && <DownloadModal resource={active} onClose={() => setActive(null)} />}
  </div>
  );
};
