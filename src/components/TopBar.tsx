import React from 'react';

import ICON_MAIL from '../assets/TopBaricons/mail.svg'; 
import ICON_PHONE from '../assets/TopBaricons/phone.svg'; 
import ICON_WHATSAPP from '../assets/TopBaricons/whatsapp.svg'; 
import ICON_SOCIAL_1 from '../assets/TopBaricons/linkdin.svg'; 
import ICON_SOCIAL_2 from '../assets/TopBaricons/youtube.svg'; 
import ICON_SOCIAL_3 from '../assets/TopBaricons/instagram.svg';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const CONTACTS = [
  { icon: ICON_MAIL, iconW: 17, iconH: 13, text: 'Email: cqcmedisolutions@gmail.com' },
  { icon: ICON_PHONE, iconW: 13, iconH: 13, text: 'Telephone: 0800 689 1061' },
  { icon: ICON_WHATSAPP, iconW: 16, iconH: 16, text: 'Whatssap us: 07956776114' },
];

const SOCIALS = [ICON_SOCIAL_1, ICON_SOCIAL_2, ICON_SOCIAL_3];

export const TopBar: React.FC = () => (
  <div style={{ background: '#FCF6EF', borderBottom: '1px solid #FFFFFF', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 90px' }}>
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
