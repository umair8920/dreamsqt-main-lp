import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#131313" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#131313" stroke="none"/>
  </svg>
);

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
          background: 'linear-gradient(140.13deg, #131313 5.23%, #707070 95.42%)',
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
                {[LinkedinIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
                  <button key={i} style={{ width: 40, height: 40, borderRadius: 8, background: '#fff0d1', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <Icon />
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
            background: 'linear-gradient(180deg, #131313 0%, #4B4B4B 100%)',
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
              <div style={{ marginLeft: 'auto', alignSelf: 'flex-end', maxWidth: 360 }}>
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
            <p style={{ fontFamily: SF, fontSize: 14, color: '#8f8a8a', marginTop: 32, paddingTop: 16, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              © 2025 Dreamsquat. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
