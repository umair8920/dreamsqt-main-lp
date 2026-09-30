import React, { useState } from 'react';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#E8A317';
const EVENTBRITE_URL = 'https://bit.ly/4ihIO88';

const MESSAGE = 'BOOKED. on 14 November. London, £249, 5 hours CPD, "only 30 seats"';

export const AnnouncementBar: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const item = (
    <span className="announcement-bar-item" style={{ color: GOLD }}>
      {MESSAGE}
    </span>
  );

  return (
    <div
      className="announcement-bar"
      role="region"
      aria-label="Announcement"
      style={{
        position: 'relative',
        zIndex: 40,
        width: '100%',
        background: '#131313',
        fontFamily: SF,
        boxSizing: 'border-box',
      }}
    >
      <div
        className="announcement-bar-inner"
        style={{
          width: '100%',
          margin: '0 auto',
          height: 'clamp(48px, 3.4vw, 80px)',
          padding: '0 clamp(16px, 3vw, 80px)',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(12px, 1.7vw, 40px)',
          boxSizing: 'border-box',
        }}
      >
        <svg
          className="announcement-bar-arrow"
          width="40"
          height="10"
          viewBox="0 0 40 10"
          fill="none"
          aria-hidden="true"
          style={{ flexShrink: 0 }}
        >
          <path d="M0 5H38M34 1L38.5 5L34 9" stroke="#fff" strokeWidth="1" />
        </svg>

        <div className="announcement-bar-marquee" style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
          <div className="announcement-bar-track" aria-label={MESSAGE}>
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
          </div>
        </div>

        <a
          href={EVENTBRITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="announcement-bar-cta interactive-button"
          style={{
            flexShrink: 0,
            background: '#fff',
            color: '#131313',
            fontSize: 'clamp(13px, 0.95vw, 22px)',
            fontWeight: 500,
            padding: '0.6em 1.5em',
            borderRadius: 6,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Book your seat on Eventbrite →
        </a>

        <button
          type="button"
          aria-label="Close announcement"
          onClick={() => setVisible(false)}
          style={{
            flexShrink: 0,
            width: 28,
            height: 28,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};
