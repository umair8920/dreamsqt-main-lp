import React, { useRef, useState } from 'react';
import heroBg from '../assets/hero-1.png';
import heroVideo from '../assets/saba-motivation-video.mp4';

const HERO_GUTTER = 'max(clamp(24px, 5.5vw, 80px), calc((100% - 1440px) / 2 + clamp(24px, 5.5vw, 80px)))';
const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

interface HeroSectionProps {
  onJoinClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onJoinClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  return (
  <section className="home-hero" style={{ position: 'relative', width: '100%', height: 850, overflow: 'hidden' }}>
    {/* Background image */}
    <img
      src={heroBg}
      alt=""
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left' }}
    />
    {/* Dark overlay */}
    <div style={{ position: 'absolute', inset: 0, background: '#271900CC' }} />

    {/* Content */}
    <div className="home-hero-content" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 48, textAlign: 'left', padding: `120px ${HERO_GUTTER} 60px`, background: 'rgba(0,0,0,0.20)' }}>
      <div className="home-hero-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: '1 1 auto', minWidth: 0 }}>
      {/* Pill */}
      <div className="page-load-reveal page-load-reveal--delay-1" style={{ marginBottom: 22 }}>
        <div style={{ position: 'relative', display: 'inline-block', borderRadius: 20, background: 'transparent', boxSizing: 'border-box' }}>
          {/* Gradient border only */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              padding: 1,
              borderRadius: 20,
              background:
                'linear-gradient(90deg, #925E02 2%, #C5A13B 29%, #E6CC60 50%, #F2DC6E 60%, #ECD465 67%, #DDBD4E 77%, #C49727 91%, #B07908 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              pointerEvents: 'none',
              boxSizing: 'border-box',
            }}
          />
          {/* Transparent center */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px 18px',
              borderRadius: 20,
              background: 'transparent',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ fontFamily: SF, fontSize: 13, fontWeight: 400, color: '#fff', letterSpacing: '0.08em' }}>DREAM SQUAT</span>
          </div>
        </div>
      </div>

      {/* Heading */}
      <h1 className="home-hero-title page-load-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#fff', lineHeight: 1.1, maxWidth: 760, marginBottom: 24 }}>
        Your Roadmap to a Profitable Dental Practice
      </h1>

      {/* Subtext */}
      <p className="home-hero-copy page-load-reveal page-load-reveal--delay-3" style={{ fontFamily: SF, fontSize: 24, fontWeight: 400, color: 'rgba(255,255,255,0.85)', maxWidth: 560, lineHeight: 1.55, marginBottom: 36 }}>
        A 90-day guided path to build a high-end, compliant, patient attracting clinic from scratch.
      </p>

      {/* CTA */}
      <button
        onClick={onJoinClick}
        className="home-hero-cta interactive-button page-load-reveal page-load-reveal--delay-4"
        style={{ fontFamily: SF, fontSize: 14, fontWeight: 600, color: '#fff', background: '#925E02', border: 'none', borderRadius: 8, padding: '14px 36px', cursor: 'pointer', letterSpacing: '0.04em' }}
      >
        JOIN FOR £19.99/MONTH →
      </button>
      </div>

      {/* Video */}
      <div className="home-hero-video page-load-reveal page-load-reveal--delay-3" style={{ flex: '0 0 auto', width: 'clamp(300px, 28.34vw, 408px)', aspectRatio: '408 / 580', borderRadius: 40, position: 'relative', overflow: 'hidden', background: '#000', boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}>
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '408', height: '580', objectFit: 'cover', display: 'block' }}
        />
        <button
          onClick={toggleMute}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          style={{ position: 'absolute', right: 16, bottom: 16, width: 44, height: 44, borderRadius: '50%', border: 'none', background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {muted ? '🔇' : '🔊'}
        </button>
      </div>
    </div>
  </section>
  );
};
