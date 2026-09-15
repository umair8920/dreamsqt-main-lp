import React from 'react';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

export const TopBar: React.FC = () => (
  <div style={{ background: '#131313', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 80px' }}>
    <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
      {[
        { icon: '✉', text: 'Email: info@smartdentalcompliance.com' },
        { icon: '📞', text: 'Telephone: 0800 689 1061' },
        { icon: '💬', text: 'Whatsapp us: 07956776114' },
      ].map(({ icon, text }) => (
        <span key={text} style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#fff', fontFamily: SF, fontSize: 12 }}>
          <span style={{ opacity: 0.8 }}>{icon}</span>{text}
        </span>
      ))}
    </div>
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      {['f', 'yt', 'ig'].map((s) => (
        <div key={s} style={{ width: 18, height: 18, borderRadius: 4, background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
      ))}
    </div>
  </div>
);
