import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import footerimage from '../assets/footer/footer-background.png';
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
    <footer style={{ position: 'relative', background: '#FAF7F2', overflow: 'hidden', padding: '80px 20px' }}>
      {/* Giant watermark */}
      <div style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        bottom: -60, fontFamily: SF, fontSize: 240, fontWeight: 700, lineHeight: 1,
        opacity: 0.03, color: '#131313', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none',
      }}>
        Dream Squat
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1300, margin: '0 auto', display: 'flex', gap: 16 }}>

        {/* Left dark gradient card */}
        <div style={{
          flexShrink: 0, width: '38%', borderRadius: 40, padding: '40px',
          backgroundImage: `url(${footerimage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
          minHeight: 460, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <img src="/logo-full.svg" alt="Dream Squat" style={{ height: 40, width: 'auto' }} />
          <div>
            <h3 style={{ fontFamily: SF, fontSize: 40, fontWeight: 700, color: '#fff0d1', lineHeight: 1.2, marginBottom: 12 }}>
              Start. Build. Open.
            </h3>
            <p style={{ fontFamily: SF, fontSize: 18, color: '#a7a7a7', marginBottom: 32, lineHeight: 1.45 }}>
              The smarter way to start, build and open your dental practice.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ fontFamily: SF, fontSize: 18, color: '#fff0d1', fontStyle: 'italic' }}>Stay in touch!</p>
              <div style={{ display: 'flex', gap: 10, marginRight: 30 }}>
                {[
                  { src: linkedinicon, alt: 'LinkedIn' },
                  { src: instagramicon, alt: 'Instagram' },
                  { src: youtbeicon, alt: 'YouTube' },
                ].map((icon, i) => (
                  <button key={i} style={{ width: 32, height: 32, borderRadius: 8, background: '#FFF0D1', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <img src={icon.src} alt={icon.alt} style={{ width: 16, height: 16 }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right cream card */}
        <div style={{ flex: 1, borderRadius: 40, background: '#fff0d1', padding: '40px 48px 32px', position: 'relative', overflow: 'visible' }}>
          {/* Floating rotated badge */}
          <div style={{
            position: 'absolute', top: -36, right: 62, width: 140, height: 140,
            backgroundImage: `url(${footerimage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            borderRadius: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 20px 30px rgba(0,0,0,0.29)', transform: 'rotate(-19.65deg)',
          }}>
            <img src="/logo.svg" alt="DS" style={{ width: 80, height: 80 }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', gap: 0, flex: 1 }}>
              {/* Nav columns */}
              <div style={{ display: 'flex', gap: 80, flexShrink: 0 }}>
                <div>
                  <h4 style={{ fontFamily: SF, fontSize: 20, fontWeight: 600, color: '#131313', marginBottom: 12 }}>Navigation</h4>
                  {NAV_LINKS.map((l) => (
                    <div key={l} style={{ padding: '10px 0' }}>
                      <a href="#" style={{ fontFamily: SF, fontSize: 16, color: '#131313', textDecoration: 'none' }}>{l}</a>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 style={{ fontFamily: SF, fontSize: 20, fontWeight: 600, color: '#131313', marginBottom: 12 }}>Company</h4>
                  {COMPANY_LINKS.map((l) => (
                    <div key={l} style={{ padding: '10px 0' }}>
                      <a href="#" style={{ fontFamily: SF, fontSize: 16, color: '#131313', textDecoration: 'none' }}>{l}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div style={{ marginLeft: 'auto', alignSelf: 'flex-end', maxWidth: 360, position: 'relative', top: 40, }}>
                <h4 style={{ fontFamily: SF, fontSize: 16, fontWeight: 700, color: '#131313', marginBottom: 8, lineHeight: 1.4 }}>
                  Join our newsletter to get regular updates
                </h4>
                <p style={{ fontFamily: SF, fontSize: 14, color: '#131313', marginBottom: 16, lineHeight: 1.55 }}>
                  Subscribe our news letter to get more free resources
                </p>
                {subscribed ? (
                  <div style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8, fontFamily: SF, fontSize: 14, color: '#131313' }}>
                    <CheckCircle size={16} /> You're subscribed!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: 8 }}>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      style={{ flex: 1, minWidth: 0, background: '#fff', border: '1px solid #fff', borderRadius: 12, padding: '14px 16px', fontFamily: SF, fontSize: 15, color: '#131313', outline: 'none' }}
                    />
                    <button type="submit" style={{ background: '#131313', color: '#fbfbfb', fontFamily: SF, fontWeight: 600, fontSize: 14, padding: '12px 16px', borderRadius: 8, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
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
