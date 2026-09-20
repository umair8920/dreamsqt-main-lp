import React from 'react';
import { Link } from 'react-router-dom';
import { TopBar } from './TopBar';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#925E02';

const NAV_LINKS: { label: string; to: string }[] = [
  { label: 'DS Portal', to: '/' },
  { label: 'Cost Calculator', to: '/cost-calculator' },
  { label: 'Event', to: '/event' },
  { label: 'Free Resources', to: '/resources' },
  { label: 'Blogs', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
];

interface HeaderProps {
  variant?: 'dark' | 'light';
  hideNav?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ variant = 'dark' }) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#fff' : '#131313';

  return (
    <header style={{
      position: isDark ? 'absolute' : 'relative',
      top: isDark ? 0 : 'auto',
      left: 0,
      right: 0,
      zIndex: 20,
    }}>

      {/* Top Bar */}
      <TopBar />

      <div style={{
        width: '100%',
        maxWidth: 1440,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        padding: '13px clamp(24px, 5.5vw, 80px)',
        height: 80,
        boxSizing: 'border-box',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 60, height: 60, flexShrink: 0 }}>
          <img src="/logo.svg" alt="Dream Squat" />
        </Link>

        {/* Nav */}
        <nav
          style={{
            flex: 1,
            maxWidth: 734,
            height: 41,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginLeft: 40,
            minWidth: 0,
          }}
        >
          {NAV_LINKS.map((link) =>
            link.to.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.to}
                style={{
                  height: 41,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 14px',
                  gap: 8,
                  fontFamily: SF,
                  fontSize: 15,
                  fontWeight: 400,
                  color: textColor,
                  textDecoration: 'none',
                  borderRadius: 8,
                  whiteSpace: 'nowrap',
                  boxSizing: 'border-box',
                }}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.to}
                style={{
                  height: 41,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 14px',
                  gap: 8,
                  fontFamily: SF,
                  fontSize: 15,
                  fontWeight: 400,
                  color: textColor,
                  textDecoration: 'none',
                  borderRadius: 8,
                  whiteSpace: 'nowrap',
                  boxSizing: 'border-box',
                }}
              >
                {link.label}
              </a>
            )
          )}
        </nav>


        {/* Login */}
        <button style={{
          marginLeft: 'auto',
          flexShrink: 0,
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
