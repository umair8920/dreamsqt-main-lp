import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import footerimage from '../assets/footer/footer-background.png';
import footerimage1 from '../assets/footer/footer-background1.png';
import linkedinicon from '../assets/TopBaricons/linkdin.svg';
import instagramicon from '../assets/TopBaricons/instagram.svg';
import youtbeicon from '../assets/TopBaricons/youtube.svg';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const NAV_LINKS = ['Home', 'Event', 'Free Resources', 'Contact Us', 'Comparison Calculator'];
const COMPANY_LINKS = ['Blog', 'Terms and Condition', 'Privacy Policy'];

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer className="footer-root" style={{ position: 'relative', background: '#FFFFFF', overflow: 'hidden', padding: '91px 20px 250px', minHeight: 870 }}>
      {/* Giant watermark */}
      <div
        className="footer-watermark"
        style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        top: 640, width: 1440, fontFamily: SF, fontSize: 240, fontWeight: 700, lineHeight: 1,
        opacity: 0.03, color: '#131313', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none',
        textAlign: 'center', zIndex: 0,
      }}
      >
        Dream Squat
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
          <div>
            <h3 className="page-load-reveal page-load-reveal--delay-2" style={{ fontFamily: SF, fontSize: 40, fontWeight: 700, color: '#fff0d1', lineHeight: 1.2, marginBottom: 12 }}>
              Start. Build. Open.
            </h3>
            <p className="page-load-reveal page-load-reveal--delay-3" style={{ fontFamily: SF, fontSize: 18, color: '#a7a7a7', marginBottom: 32, lineHeight: 1.45 }}>
              The smarter way to start, build and open your dental practice.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p className="page-load-reveal page-load-reveal--delay-4" style={{ fontFamily: SF, fontSize: 18, color: '#fff0d1', fontStyle: 'italic' }}>Stay in touch!</p>
              <div style={{ display: 'flex', gap: 10, marginRight: 30 }}>
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

          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
            <div style={{ display: 'flex', gap: 0, flex: 1 }}>
              {/* Nav columns */}
              <div style={{ display: 'flex', gap: 80, flexShrink: 0 }}>
                <div>
                  <h4 className="section-text-reveal" style={{ fontFamily: SF, fontSize: 20, fontWeight: 600, color: '#131313', marginBottom: 12 }}>Navigation</h4>
                  {NAV_LINKS.map((l) => (
                    <div key={l} style={{ padding: '10px 0' }}>
                      <a href="#" className="interactive-text-parent" style={{ fontFamily: SF, fontSize: 16, color: '#131313', textDecoration: 'none' }}>
                        <span className="interactive-text">{l}</span>
                      </a>
                    </div>
                  ))}
                </div>
                <div>
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
              <div className="scroll-reveal-right" style={{ position: 'absolute', left: 324, top: 274, width: 329 }}>
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
