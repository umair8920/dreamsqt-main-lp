import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface EventSectionProps {
  onJoinClick?: () => void;
}

export const EventSection: React.FC<EventSectionProps> = () => (
  <section className="home-event-hero" style={{ position: 'relative', width: '100%', height: 869, overflow: 'hidden' }}>
    {/* Background */}
    <img
      src="/event-bg.png"
      alt=""
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
    />
    {/* Overlay */}
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,5,0,0.35)' }} />

    {/* Centered video */}
    <div className="home-event-wrap" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 80px' }}>
      <ScrollReveal variant="scale" style={{ width: 958, maxWidth: '100%' }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', borderRadius: 32, overflow: 'hidden', boxShadow: '0px 10px 42.3px 0px #925E02', border: '1px solid rgba(255,255,255,0.6)', background: '#000' }}>
          <iframe
            src="https://www.youtube.com/embed/t1jVSQKzgHw?start=23&autoplay=1&mute=1&playsinline=1&rel=0"
            title="Dream Squat video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
);
