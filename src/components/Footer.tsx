import React, { useLayoutEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import footerimage from '../assets/footer/footer-background.png';
import footerimage1 from '../assets/footer/footer-background1.png';
import linkedinicon from '../assets/TopBaricons/linkdin.svg';
import instagramicon from '../assets/TopBaricons/instagram.svg';
import youtbeicon from '../assets/TopBaricons/youtube.svg';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const NAV_LINKS = ['Home', 'Event', 'Free Resources', 'Contact Us', 'Comparison Calculator'];
const COMPANY_LINKS = ['Blog', 'Terms and Condition', 'Privacy Policy'];

/* Watermark sizing: 240px at the 1440px design width, scaled down so the text always fits the footer. */
const WM_MAX_SIZE = 240;
const WM_DESIGN_WIDTH = 1440;
const WM_GUTTER = 32;

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [watermarkSize, setWatermarkSize] = useState(WM_MAX_SIZE);
  const footerRef = useRef<HTMLElement>(null);
  const watermarkTextRef = useRef<HTMLSpanElement>(null);

  // Fit the watermark to the available width. The text width is measured (not hard-coded)
  // so it stays correct whichever font ends up rendering.
  useLayoutEffect(() => {
    const footer = footerRef.current;
    const text = watermarkTextRef.current;
    if (!footer || !text) return;

    const fit = () => {
      const footerWidth = footer.clientWidth;
      const currentSize = parseFloat(getComputedStyle(text).fontSize);
      const textWidth = text.getBoundingClientRect().width;
      if (!footerWidth || !currentSize || !textWidth) return;

      const available = Math.min(footerWidth, WM_DESIGN_WIDTH) - (footerWidth >= WM_DESIGN_WIDTH ? 0 : WM_GUTTER);
      const next = Math.min(WM_MAX_SIZE, Math.floor((available / (textWidth / currentSize)) * 10) / 10);
      setWatermarkSize(next);
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(footer);
    document.fonts?.ready.then(fit);
    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer
      ref={footerRef}
      className="footer-root"
      style={{
        position: 'relative', background: '#FFFFFF', overflow: 'hidden',
        // Reserve room below the panels for the (scaled) watermark: 250px at the 240px design size.
        padding: '91px 20px calc(var(--wm-size) * 0.96 + 20px)',
        '--wm-size': `${watermarkSize}px`,
      } as React.CSSProperties}
    >
      {/* Giant watermark — sits on the bottom edge, its lowest 4% clipped as in the design */}
      <div
        className="footer-watermark"
        aria-hidden="true"
        style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          bottom: 'calc(var(--wm-size) * -0.042)', width: `min(100%, ${WM_DESIGN_WIDTH}px)`,
          fontFamily: SF, fontSize: 'var(--wm-size)', fontWeight: 700, lineHeight: 1,
          whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none',
          textAlign: 'center', zIndex: 0,
        }}
      >
        <span ref={watermarkTextRef} style={{ display: 'inline-block' }}>Dream Squat</span>
      </div>

      <div className="footer-panels" style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 18 }}>

        {/* Left dark gradient card */}
        <div
          className="footer-left interactive-lift scroll-reveal-scale"
          style={{
          flex: '0 0 40.94%', borderRadius: 40, padding: '40px',
          backgroundImage: `url(${footerimage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
          minHeight: 528, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}
        >
          <img src="/logo-full.svg" alt="Dream Squat" className="page-load-reveal page-load-reveal--delay-1" style={{ height: 40, width: 'auto' }} />
          <div className="footer-left-content">
            <h3 className="page-load-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 40, fontWeight: 700, color: '#fff0d1', lineHeight: 1.2, marginBottom: 12 }}>
              Start. Build. Open.
            </h3>
            <p className="page-load-reveal page-load-reveal--delay-3" style={{ fontFamily: SF, fontSize: 18, color: '#a7a7a7', marginBottom: 32, lineHeight: 1.45 }}>
              The smarter way to start, build and open your dental practice.
            </p>
            <div className="footer-left-meta" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p className="page-load-reveal page-load-reveal--delay-4" style={{ fontFamily: SF, fontSize: 18, color: '#fff0d1', fontStyle: 'italic' }}>Stay in touch!</p>
              <div className="footer-social-row" style={{ display: 'flex', gap: 10, marginRight: 30 }}>
                {[
                  { src: linkedinicon, alt: 'LinkedIn' },
                  { src: instagramicon, alt: 'Instagram' },
                  { src: youtbeicon, alt: 'YouTube' },
                ].map((icon, i) => (
                  <button key={i} className="interactive-button" style={{ width: 32, height: 32, borderRadius: 8, background: '#FFF0D1', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <img src={icon.src} alt={icon.alt} style={{ width: 16, height: 16 }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right cream card */}
        <div className="footer-right interactive-lift scroll-reveal-scale" style={{ flex: 1, minWidth: 0, borderRadius: 40, background: '#fff0d1', padding: '40px 48px 32px', position: 'relative', overflow: 'visible', minHeight: 528 }}>
          {/* Floating rotated badge */}
          <div className="interactive-lift" style={{
            position: 'absolute', top: -36, right: 62, width: 152, height: 152,
            backgroundImage: `url(${footerimage1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transform: 'rotate(-19.65deg)',
          }}>
            
          </div>

          <div className="footer-right-inner" style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
            <div className="footer-right-top" style={{ display: 'flex', gap: 0, flex: 1 }}>
              {/* Nav columns */}
              <div className="footer-links" style={{ display: 'flex', gap: 80, flexShrink: 0 }}>
                <div className="footer-link-column">
                  <h4 className="section-text-reveal" style={{ fontFamily: SF, fontSize: 20, fontWeight: 600, color: '#131313', marginBottom: 12 }}>Navigation</h4>
                  {NAV_LINKS.map((l) => (
                    <div key={l} style={{ padding: '10px 0' }}>
                      <a href="#" className="interactive-text-parent" style={{ fontFamily: SF, fontSize: 16, color: '#131313', textDecoration: 'none' }}>
                        <span className="interactive-text">{l}</span>
                      </a>
                    </div>
                  ))}
                </div>
                <div className="footer-link-column">
                  <h4 className="section-text-reveal" style={{ fontFamily: SF, fontSize: 20, fontWeight: 600, color: '#131313', marginBottom: 12 }}>Company</h4>
                  {COMPANY_LINKS.map((l) => (
                    <div key={l} style={{ padding: '10px 0' }}>
                      <a href="#" className="interactive-text-parent" style={{ fontFamily: SF, fontSize: 16, color: '#131313', textDecoration: 'none' }}>
                        <span className="interactive-text">{l}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="footer-newsletter scroll-reveal-right" style={{ position: 'absolute', left: 324, top: 274, width: 329 }}>
                <h4 className="section-text-reveal" style={{ fontFamily: SF, fontSize: 16, fontWeight: 700, color: '#131313', marginBottom: 8, lineHeight: 1.2, maxWidth: 299 }}>
                  Join our newsletter to get regular updates
                </h4>
                <p className="section-text-reveal page-load-reveal--delay-1" style={{ fontFamily: SF, fontSize: 14, color: '#131313', marginBottom: 16, lineHeight: 1.3 }}>
                  Subscribe our news letter to get more free resources
                </p>
                {subscribed ? (
                  <div style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8, fontFamily: SF, fontSize: 14, color: '#131313' }}>
                    <CheckCircle size={16} /> You're subscribed!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="interactive-lift" style={{ display: 'flex', alignItems: 'center', gap: 8, width: 329, background: '#fff', border: '1px solid #fff', borderRadius: 12, padding: '6px 6px 6px 20px' }}>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      style={{ flex: 1, minWidth: 0, background: 'transparent', border: 'none', padding: '10px 0', fontFamily: SF, fontSize: 15, color: '#131313', outline: 'none' }}
                    />
                    <button type="submit" className="interactive-button" style={{ background: '#131313', color: '#fbfbfb', fontFamily: SF, fontWeight: 600, fontSize: 14, padding: '12px 16px', borderRadius: 8, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Copyright */}
            <p style={{ fontFamily: SF, fontSize: 14, color: '#8f8a8a', marginTop: 32, paddingTop: '16px' }}>
              © 2025 Dreamsquat. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
