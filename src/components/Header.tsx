import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TopBar } from './TopBar';
import { LOGIN_URL } from '../constants';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#925E02';

interface NavLink {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
}

const NAV_LINKS: NavLink[] = [
  { label: 'DS Network', to: '/ds-network', children: [{ label: 'DS Portal', to: '/portal' }] },
 /* { label: 'Our Services', children: [
    { label: 'Compliance Set-Up', to: '/services/squat-practice-compliance' },
    { label: 'Project Management & Build', to: '/services/squat-practice-project-management' },
    { label: 'Marketing & Lead Management', to: '/services/dental-marketing-lead-management' },
  ] }, */
  { label: 'Cost Calculator', to: '/cost-calculator' },
  { label: 'Event', to: '/event', children: [{ label: 'Booked', to: '/booked' }] },
  { label: 'Free Resources', to: '/resources' },
  { label: 'Blogs', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
];

interface HeaderProps {
  variant?: 'dark' | 'light';
  hideNav?: boolean;
}

const Chevron: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    aria-hidden="true"
    style={{
      flexShrink: 0,
      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      transform: open ? 'rotate(180deg)' : 'none',
    }}
  >
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Header: React.FC<HeaderProps> = ({ variant = 'dark', hideNav = false }) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#fff' : '#131313';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [stuck, setStuck] = useState(false);
  const [barHeight, setBarHeight] = useState(80);
  const location = useLocation();
  const topRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Keep the nav bar fixed: it starts below the announcement/top bars and
  // pins to the top of the viewport once those scroll out of view.
  useEffect(() => {
    const update = () => {
      const bar = barRef.current;
      const top = topRef.current;
      if (!bar || !top) return;
      const offset = Math.max(0, top.getBoundingClientRect().bottom);
      bar.style.top = `${offset}px`;
      setStuck(offset === 0 && window.scrollY > 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    const ro = typeof ResizeObserver !== 'undefined' && barRef.current
      ? new ResizeObserver(() => {
          if (barRef.current) setBarHeight(barRef.current.offsetHeight);
          update();
        })
      : null;
    if (ro && barRef.current) ro.observe(barRef.current);
    if (ro && topRef.current) ro.observe(topRef.current);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      ro?.disconnect();
    };
  }, []);

  const linkStyle: React.CSSProperties = {
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
  };

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const navItems = NAV_LINKS.map((link) => {
    if (!link.children) {
      return (
        <Link
          key={link.label}
          to={link.to!}
          className="interactive-text-parent header-nav-link"
          onClick={closeMenus}
          style={linkStyle}
        >
          <span className="interactive-text">{link.label}</span>
        </Link>
      );
    }
    const dropdownOpen = openDropdown === link.label;
    return (
      <div
        key={link.label}
        className="header-nav-item"
        style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
        onMouseEnter={() => setOpenDropdown(link.label)}
        onMouseLeave={() => setOpenDropdown((cur) => (cur === link.label ? null : cur))}
        onFocus={(e) => { if (e.target.matches(':focus-visible')) setOpenDropdown(link.label); }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenDropdown((cur) => (cur === link.label ? null : cur));
        }}
      >
        {link.to ? (
          <Link
            to={link.to}
            className="interactive-text-parent header-nav-link"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={closeMenus}
            style={{ ...linkStyle, gap: 6 }}
          >
            <span className="interactive-text">{link.label}</span>
            <Chevron open={dropdownOpen} />
          </Link>
        ) : (
          <button
            type="button"
            className="interactive-text-parent header-nav-link"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={() => setOpenDropdown((cur) => (cur === link.label ? null : link.label))}
            style={{ ...linkStyle, gap: 6, background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span className="interactive-text">{link.label}</span>
            <Chevron open={dropdownOpen} />
          </button>
        )}
        <div
          className="header-dropdown"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            paddingTop: 8,
            minWidth: 180,
            zIndex: 40,
            opacity: dropdownOpen ? 1 : 0,
            visibility: dropdownOpen ? 'visible' : 'hidden',
            transform: dropdownOpen ? 'translateY(0)' : 'translateY(-6px)',
            transition: 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.3s',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 8,
              borderRadius: 12,
              background: isDark ? 'rgba(19,19,19,0.98)' : '#fff',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(19,19,19,0.08)'}`,
              boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
            }}
          >
            {link.children.map((child) => (
              <Link
                key={child.label}
                to={child.to}
                onClick={closeMenus}
                className={`header-dropdown-link header-dropdown-link--${isDark ? 'dark' : 'light'}`}
                style={{
                  display: 'block',
                  padding: '10px 14px',
                  fontFamily: SF,
                  fontSize: 15,
                  fontWeight: 400,
                  textDecoration: 'none',
                  borderRadius: 8,
                  whiteSpace: 'nowrap',
                }}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  });

  const mobileItems = NAV_LINKS.map((link) => (
    <React.Fragment key={link.label}>
      {link.to ? (
        <Link
          to={link.to}
          className="interactive-text-parent header-nav-link"
          onClick={closeMenus}
          style={{ ...linkStyle, justifyContent: 'flex-start' }}
        >
          <span className="interactive-text">{link.label}</span>
        </Link>
      ) : (
        <div style={{ ...linkStyle, justifyContent: 'flex-start' }}>{link.label}</div>
      )}
      {link.children?.map((child) => (
        <Link
          key={child.label}
          to={child.to}
          className="interactive-text-parent header-nav-link"
          onClick={closeMenus}
          style={{
            ...linkStyle,
            justifyContent: 'flex-start',
            marginLeft: 14,
            paddingLeft: 16,
            fontSize: 14,
            borderLeft: `2px solid ${GOLD}`,
            borderRadius: 0,
          }}
        >
          <span className="interactive-text">{child.label}</span>
        </Link>
      ))}
    </React.Fragment>
  ));

  return (
    <header style={{
      position: isDark ? 'absolute' : 'relative',
      top: isDark ? 0 : 'auto',
      left: 0,
      right: 0,
      zIndex: 50,
    }}>

      {/* Top Bar (scrolls away with the page) */}
      <div ref={topRef}>
        <TopBar />
      </div>

      {/* Keeps layout space for the fixed nav bar */}
      <div aria-hidden="true" style={{ height: barHeight }} />

      <div
        ref={barRef}
        className="header-bar"
        style={{
          position: 'fixed',
          top: 40,
          left: 0,
          right: 0,
          zIndex: 50,
          background: stuck ? (isDark ? 'rgba(19,19,19,0.96)' : 'rgba(255,255,255,0.96)') : 'transparent',
          backdropFilter: stuck ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: stuck ? 'blur(12px)' : 'none',
          boxShadow: stuck ? '0 4px 24px rgba(0,0,0,0.12)' : 'none',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
        }}
      >
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
                maxWidth: 900,
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
          <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="header-login interactive-button page-load-reveal page-load-reveal--delay-4" style={{
            display: 'inline-block',
            textDecoration: 'none',
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
          </a>

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
              <div style={{ maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}>
                <nav style={{ display: 'flex', flexDirection: 'column', padding: 12 }}>
                  {mobileItems}
                </nav>
                <div style={{ padding: '0 12px 16px' }}>
                  <a
                    href={LOGIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive-button"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'block',
                      boxSizing: 'border-box',
                      textAlign: 'center',
                      textDecoration: 'none',
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
