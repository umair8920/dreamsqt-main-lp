import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TopBar } from './TopBar';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#925E02';

const NAV_LINKS: { label: string; to: string }[] = [
  { label: 'DS Portal', to: '/ds-portal' },
  { label: 'Cost Calculator', to: '/cost-calculator' },
  { label: 'DS Club', to: '/ds-club' },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = NAV_LINKS.map((link) =>
    link.to.startsWith('/') ? (
      <Link
        key={link.label}
        to={link.to}
        className="interactive-text-parent header-nav-link"
        onClick={() => setMobileMenuOpen(false)}
        style={{
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
        <span className="interactive-text">{link.label}</span>
      </Link>
    ) : (
      <a
        key={link.label}
        href={link.to}
        target="_blank"
        rel="noopener noreferrer"
        className="interactive-text-parent header-nav-link"
        onClick={() => setMobileMenuOpen(false)}
        style={{
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
        <span className="interactive-text">{link.label}</span>
      </a>
    )
  );

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

      <div
        className="header-inner"
        style={{
        width: '100%',
        maxWidth: 1440,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        padding: '13px clamp(24px, 5.5vw, 80px)',
        height: 80,
        boxSizing: 'border-box',
      }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="page-load-reveal page-load-reveal--delay-2 header-logo"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 60, height: 60, flexShrink: 0 }}
        >
          <img className="header-logo-image" src="/logo.svg" alt="Dream Squat" />
        </Link>

        {/* Nav */}
        {!hideNav && (
          <nav
            className="header-nav page-load-reveal page-load-reveal--delay-3"
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
            {navItems}
          </nav>
        )}


        {/* Login */}
        <button className="header-login interactive-button page-load-reveal page-load-reveal--delay-4" style={{
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

        {!hideNav && (
          <button
            type="button"
            className="header-menu-button interactive-button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            style={{
              marginLeft: 12,
              width: 44,
              height: 44,
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.18)',
              background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
              color: textColor,
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ width: 18, height: 2, borderRadius: 999, background: textColor, display: 'block' }} />
              <span style={{ width: 18, height: 2, borderRadius: 999, background: textColor, display: 'block' }} />
              <span style={{ width: 18, height: 2, borderRadius: 999, background: textColor, display: 'block' }} />
            </span>
          </button>
        )}
      </div>

      {!hideNav && mobileMenuOpen && (
        <div
          className="header-mobile-panel"
          id="mobile-navigation"
          style={{
            display: 'none',
            position: 'absolute',
            left: 0,
            right: 0,
            top: '100%',
            padding: '0 16px 18px',
            zIndex: 30,
          }}
        >
          <div
            style={{
              maxWidth: 1440,
              margin: '0 auto',
              background: isDark ? 'rgba(19,19,19,0.98)' : '#fff',
              borderRadius: 20,
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(19,19,19,0.08)'}`,
              boxShadow: '0 24px 60px rgba(0,0,0,0.2)',
              overflow: 'hidden',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', padding: 12 }}>
              {navItems}
            </nav>
            <div style={{ padding: '0 12px 16px' }}>
              <button
                className="interactive-button"
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  width: '100%',
                  fontFamily: SF,
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#fff',
                  background: GOLD,
                  border: 'none',
                  borderRadius: 10,
                  padding: '12px 18px',
                  cursor: 'pointer',
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
