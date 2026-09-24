import React, { useState } from 'react';
import { SectionPill } from './SectionPill';
import { ScrollReveal } from './ScrollReveal';
import { RESOURCES, ResourceCard, DownloadModal, type Resource } from './ResourceCards';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

export const ResourcesSection: React.FC = () => {
  const [active, setActive] = useState<Resource | null>(null);
  return (
  <section className="resources-grid-section" style={{ background: '#F4EEE5', padding: '80px 80px' }}>
    <div className="resources-grid-shell" style={{ maxWidth: 1280, margin: '0 auto' }}>
      {/* Header */}
      <ScrollReveal>
        <div style={{ marginBottom: 48 }}>
          <div style={{ marginBottom: 20 }}>
            <SectionPill innerBg="#F4EEE5">FREE RESOURCES</SectionPill>
          </div>
          <h2 style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#131313', lineHeight: 1.1, maxWidth: 580 }}>
            From <span style={{ color: '#925E02' }}>curiosity</span> to clinic owner
          </h2>
        </div>
      </ScrollReveal>

      {/* Cards */}
      <div className="resources-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 24 }}>
        {RESOURCES.map((r, i) => (
          <ScrollReveal key={r.title} variant="scale" delay={([100, 200, 300][i % 3]) as 100 | 200 | 300}>
            <ResourceCard {...r} onDownload={() => setActive(r)} />
          </ScrollReveal>
        ))}
      </div>
    </div>
    {active && <DownloadModal resource={active} onClose={() => setActive(null)} />}
  </section>
  );
};
