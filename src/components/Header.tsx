import React from 'react';
import { Link } from 'react-router-dom';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#925E02';

const NAV_LINKS: { label: string; to: string }[] = [
  { label: 'DS Portal', to: '#' },
  { label: 'Cost Calculator', to: '/cost-calculator' },
  { label: 'DS Club', to: '#' },
  { label: 'Event', to: '/event' },
  { label: 'Free Resources', to: '/resources' },
  { label: 'Blogs', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
];

interface HeaderProps {
  variant?: 'dark' | 'light';
  hideNav?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ variant = 'dark', hideNav = false }) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#fff' : '#131313';

  return (
    <header style={{
      position: isDark ? 'absolute' : 'relative',
      top: isDark ? 40 : 0,
      left: 0,
      right: 0,
      zIndex: 20,
    }}>
      <div style={{
        maxWidth: 1440,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '13px 80px',
        height: 80,
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 60, height: 60 }}>
          <img src="/logo.svg" alt="Dream Squat" style={{ width: 44, height: 44 }} />
        </Link>

        {/* Nav */}
        {!hideNav && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {NAV_LINKS.map((link) =>
              link.to.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.to}
                  style={{ fontFamily: SF, fontSize: 15, fontWeight: 400, color: textColor, textDecoration: 'none', padding: '12px 14px', borderRadius: 8, whiteSpace: 'nowrap' }}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.to}
                  style={{ fontFamily: SF, fontSize: 15, fontWeight: 400, color: textColor, textDecoration: 'none', padding: '12px 14px', borderRadius: 8, whiteSpace: 'nowrap' }}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        )}

        {/* Login */}
        <button style={{
          fontFamily: SF,
          fontSize: 15,
          fontWeight: 500,
          color: '#fff',
          background: GOLD,
          border: 'none',
          borderRadius: 8,
          padding: '10px 28px',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}>
          Login
        </button>
      </div>
    </header>
  );
};
