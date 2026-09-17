import React from 'react';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const ICON_MAIL = 'http://localhost:3845/assets/2fb4200a543c96908a625f1491b85ccd96d312eb.svg';
const ICON_PHONE = 'http://localhost:3845/assets/1f3fb76bcd0fc2e79bfe1829bc8ffa94f2f6ebf4.svg';
const ICON_WHATSAPP = 'http://localhost:3845/assets/432c6fdc32d485ca41f7166e3eb5dff6960a437b.svg';
const ICON_SOCIAL_1 = 'http://localhost:3845/assets/0c6dea70202dcb01742e37f50b8c9dc5c52956c9.svg';
const ICON_SOCIAL_2 = 'http://localhost:3845/assets/5bb8d4d0ca580f354b6d2c1c354f7bea6bc7c9a6.svg';
const ICON_SOCIAL_3 = 'http://localhost:3845/assets/846ae4ddb29b90a7ebb247aeded9396d2650a8e0.svg';

const CONTACTS = [
  { icon: ICON_MAIL, iconW: 17, iconH: 13, text: 'Email: cqcmedisolutions@gmail.com' },
  { icon: ICON_PHONE, iconW: 13, iconH: 13, text: 'Telephone: 0800 689 1061' },
  { icon: ICON_WHATSAPP, iconW: 16, iconH: 16, text: 'Whatssap us: 07956776114' },
];

const SOCIALS = [ICON_SOCIAL_1, ICON_SOCIAL_2, ICON_SOCIAL_3];

export const TopBar: React.FC = () => (
  <div style={{ background: '#FCF6EF', borderBottom: '1px solid #fff', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 80px' }}>
    <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
      {CONTACTS.map(({ icon, iconW, iconH, text }) => (
        <span key={text} style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: SF, fontSize: 13, color: '#131313', letterSpacing: '-0.26px', whiteSpace: 'nowrap' }}>
          <img src={icon} alt="" style={{ width: iconW, height: iconH, display: 'block' }} />
          {text}
        </span>
      ))}
    </div>
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {SOCIALS.map((src, i) => (
        <img key={i} src={src} alt="" style={{ width: 18, height: 18, display: 'block' }} />
      ))}
    </div>
  </div>
);
