import React from 'react';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const NAV_LINKS = ['DS Portal', 'Cost Calculator', 'DS Club', 'Event', 'Free Resources', 'Blogs', 'Contact Us'];

export const Header: React.FC = () => (
  <header style={{ position: 'absolute', top: 40, left: 0, right: 0, zIndex: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 80px', height: 80 }}>
    {/* Logo */}
    <div style={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src="/logo.svg" alt="Dream Squat" style={{ width: 44, height: 44 }} />
    </div>

    {/* Nav */}
    <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {NAV_LINKS.map((link) => (
        <a key={link} href="#" style={{ fontFamily: SF, fontSize: 15, fontWeight: 400, color: '#fff', textDecoration: 'none', padding: '12px 14px', borderRadius: 8, whiteSpace: 'nowrap' }}>
          {link}
        </a>
      ))}
    </nav>

    {/* Login */}
    <button style={{ fontFamily: SF, fontSize: 15, fontWeight: 500, color: '#fff', background: 'transparent', border: '1.5px solid #C58F28', borderRadius: 8, padding: '10px 28px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
      Login
    </button>
  </header>
);
