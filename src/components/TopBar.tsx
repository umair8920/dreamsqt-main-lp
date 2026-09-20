import React from 'react';

import ICON_MAIL from '../assets/TopBaricons/mail.svg';
import ICON_PHONE from '../assets/TopBaricons/phone.svg';
import ICON_WHATSAPP from '../assets/TopBaricons/whatsapp.svg';
import ICON_SOCIAL_1 from '../assets/TopBaricons/linkdin.svg';
import ICON_SOCIAL_2 from '../assets/TopBaricons/youtube.svg';
import ICON_SOCIAL_3 from '../assets/TopBaricons/instagram.svg';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const CONTACTS = [
  {
    icon: ICON_MAIL,
    iconW: 17,
    iconH: 13,
    text: 'Email: cqcmedisolutions@gmail.com',
  },
  {
    icon: ICON_PHONE,
    iconW: 13,
    iconH: 13,
    text: 'Telephone: 0800 689 1061',
  },
  {
    icon: ICON_WHATSAPP,
    iconW: 16,
    iconH: 16,
    text: 'Whatssap us: 07956776114',
  },
];

const SOCIALS = [
  ICON_SOCIAL_1,
  ICON_SOCIAL_2,
  ICON_SOCIAL_3,
];

export const TopBar: React.FC = () => (
  <div
    className="topbar-shell page-load-reveal page-load-reveal--delay-1"
    style={{
      width: '100%',
      height: 40,
      background: '#FCF6EF',
      borderBottom: '1px solid #FFFFFF',
      boxSizing: 'border-box',
    }}
  >
    <div
      className="topbar-inner"
      style={{
        width: '100%',
        maxWidth: 1440,
        height: '100%',
        margin: '0 auto',
        padding: '0 clamp(24px, 5.5vw, 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      }}
    >
      {/* Contact Information */}
      <div
        className="topbar-contacts"
        style={{
          display: 'flex',
          gap: 32,
          alignItems: 'center',
          minWidth: 0,
          overflow: 'hidden',
        }}
      >
        {CONTACTS.map(({ icon, iconW, iconH, text }) => (
          <span
            className="topbar-contact interactive-text-parent"
            key={text}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: SF,
              fontSize: 13,
              color: '#131313',
              letterSpacing: '-0.26px',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
              <img
                src={icon}
                alt=""
                className="interactive-text"
                style={{
                  width: iconW,
                  height: iconH,
                display: 'block',
                flexShrink: 0,
              }}
            />
            {text}
          </span>
        ))}
      </div>

      {/* Social Icons */}
      <div
        className="topbar-socials"
        style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center',
          flexShrink: 0,
          marginLeft: 24,
        }}
      >
        {SOCIALS.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="interactive-lift"
            style={{
              width: 18,
              height: 18,
              display: 'block',
            }}
          />
        ))}
      </div>
    </div>
  </div>
);
