import React from 'react';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

interface EventSectionProps {
  onJoinClick?: () => void;
}

export const EventSection: React.FC<EventSectionProps> = ({ onJoinClick }) => (
  <section style={{ position: 'relative', width: '100%', height: 869, overflow: 'hidden' }}>
    {/* Background */}
    <img
      src="/event-bg.png"
      alt=""
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
    />
    {/* Overlay */}
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,5,0,0.35)' }} />

    {/* Centered card */}
    <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 80px' }}>
      <div style={{
        width: 958,
        maxWidth: '100%',
        background: 'rgba(30,18,4,0.55)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: 32,
        border: '1px solid rgba(255,255,255,0.12)',
        padding: '56px 80px',
        textAlign: 'center',
      }}>
        {/* Date pill */}
        <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.45)', borderRadius: 20, padding: '6px 18px', marginBottom: 28 }}>
          <span style={{ fontFamily: SF, fontSize: 13, fontWeight: 500, color: '#fff', letterSpacing: '0.07em' }}>25 SEPTEMBER 2026</span>
        </div>

        {/* Heading */}
        <h2 style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: 24, maxWidth: 700, margin: '0 auto 24px' }}>
          One day in Manchester with everyone you need to open a practice, in the same room.
        </h2>

        {/* Location */}
        <p style={{ fontFamily: SF, fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 16 }}>
          The Midland, Manchester.
        </p>

        {/* Body */}
        <p style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, maxWidth: 540, margin: '0 auto 36px' }}>
          Lenders, suppliers, compliance, marketing, and dentists who are twelve months ahead of you. Come with a question, leave with a plan and the contacts to execute it. Your ticket includes three months in the Dream Squat Club.
        </p>

        {/* CTA */}
        <button
          onClick={onJoinClick}
          style={{ fontFamily: SF, fontSize: 14, fontWeight: 600, color: '#fff', background: '#925E02', border: 'none', borderRadius: 8, padding: '14px 36px', cursor: 'pointer', letterSpacing: '0.04em' }}
        >
          JOIN FOR £19.99/MONTH →
        </button>
      </div>
    </div>
  </section>
);
