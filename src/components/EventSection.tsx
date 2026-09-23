import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

interface EventSectionProps {
  onJoinClick?: () => void;
}

export const EventSection: React.FC<EventSectionProps> = ({ onJoinClick }) => (
  <section className="home-event-hero" style={{ position: 'relative', width: '100%', height: 869, overflow: 'hidden' }}>
    {/* Background */}
    <img
      src="/event-bg.png"
      alt=""
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
    />
    {/* Overlay */}
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,5,0,0.35)' }} />

    {/* Centered card */}
    <div className="home-event-wrap" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 80px' }}>
      <ScrollReveal variant="scale" style={{ width: 958, maxWidth: '100%' }}>
        <div style={{ position: 'relative', width: '100%', borderRadius: 32, boxShadow: '0px 10px 42.3px 0px #925E02' }}>
          {/* Gradient border only */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              padding: 1,
              borderRadius: 32,
              background: 'linear-gradient(148.08deg, #FFFFFF 2.12%, rgba(255,255,255,0.3) 49.85%, #FFFFFF 97.58%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              pointerEvents: 'none',
            }}
          />
          <div className="home-event-card interactive-lift" style={{
          position: 'relative',
          width: '100%',
          background: 'linear-gradient(163.91deg, rgba(0,0,0,0.3828) 11.19%, rgba(59,38,0,0.87) 99.68%)',
          backdropFilter: 'blur(23.7px)',
          WebkitBackdropFilter: 'blur(23.7px)',
          borderRadius: 32,
          overflow: 'hidden',
          padding: '56px 80px',
          textAlign: 'center',
        }}>
          {/* Date pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.45)', borderRadius: 20, padding: '6px 18px', marginBottom: 28 }}>
            <span style={{ fontFamily: SF, fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '0.07em' }}>25 SEPTEMBER 2026</span>
          </div>

          {/* Heading */}
          <h2 className="home-event-title" style={{ fontFamily: SF, fontSize: 56, fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: 24, maxWidth: 700, margin: '0 auto 24px' }}>
            One day in Manchester with everyone you need to open a practice, in the same room.
          </h2>

          {/* Location */}
          <p style={{ fontFamily: SF, fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 16 }}>
            The Midland, Manchester.
          </p>

          {/* Body */}
          <p className="home-event-body" style={{ fontFamily: SF, fontSize: 16, fontWeight: 400, color: '#FFFFFF', lineHeight: 1.6, maxWidth: 540, margin: '0 auto 36px' }}>
            Lenders, suppliers, compliance, marketing, and dentists who are twelve months ahead of you. Come with a question, leave with a plan and the contacts to execute it. Your ticket includes three months in the Dream Squat Club.
          </p>

          {/* CTA */}
          <button
            onClick={onJoinClick}
            className="interactive-button"
            style={{ fontFamily: SF, fontSize: 14, fontWeight: 600, color: '#fff', background: '#925E02', border: 'none', borderRadius: 8, padding: '14px 36px', cursor: 'pointer', letterSpacing: '0.04em' }}
          >
            Book a ticket →
          </button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
