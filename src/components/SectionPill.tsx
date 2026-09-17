import React from 'react';

const GOLD_GRADIENT = 'linear-gradient(90deg, #925E02 2%, #C5A13B 29%, #E6CC60 50%, #F2DC6E 60%, #ECD465 67%, #DDBD4E 77%, #C49727 91%, #B07908 100%)';
const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

interface SectionPillProps {
  children: React.ReactNode;
  innerBg?: string;
}

export const SectionPill: React.FC<SectionPillProps> = ({ children, innerBg = '#FAF7F2' }) => (
  <div style={{ display: 'inline-block', alignSelf: 'flex-start', background: GOLD_GRADIENT, padding: 1, borderRadius: 999 }}>
    <div style={{
      background: innerBg,
      color: '#1a1a1a',
      borderRadius: 999,
      padding: '6px 16px',
      fontFamily: SF,
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.05em',
      whiteSpace: 'nowrap',
    }}>
      {children}
    </div>
  </div>
);
