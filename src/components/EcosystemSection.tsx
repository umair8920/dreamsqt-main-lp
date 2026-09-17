import React from 'react';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const ArrowIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
    <path d="M10 18l8-8M14 10h4v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PRODUCTS = [
  {
    img: '/flossly.png',
    name: 'Flossly',
    desc: 'The practice CRM and operating system my clinics run on. Enquiries, treatment plans, recalls, reporting.',
  },
  {
    img: '/twothmatch.png',
    name: 'TwothMatch',
    desc: 'Dental recruitment, so hiring your associate and nurses is not a job ad and a prayer.',
  },
  {
    img: '/cqc-medi.png',
    name: 'CQC MediSolutions',
    desc: 'Registration, policies, mock inspections and registered manager prep, run by a team that submits registrations every week.',
  },
  {
    img: '/smart-dental.png',
    name: 'Smart Dental Compliance and Training',
    desc: 'Ongoing CPD and compliance that keeps you inspection ready every year after.',
  },
];

export const EcosystemSection: React.FC = () => (
  <section style={{ background: '#FCF6EF', padding: '0 80px 80px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', background: '#7B4E00', borderRadius: 28, padding: '56px 60px' }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'inline-flex', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, padding: '5px 14px', marginBottom: 20 }}>
          <span style={{ fontFamily: SF, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.08em' }}>WHAT HAPPENS AFTER DAY 90</span>
        </div>
        <h2 style={{ fontFamily: SF, fontSize: 52, fontWeight: 700, color: '#fff', lineHeight: 1.12, maxWidth: 860, marginBottom: 16 }}>
          Everyone else stops when the course ends. My businesses are the ones you use on day 91.
        </h2>
        <p style={{ fontFamily: SF, fontSize: 15, color: 'rgba(255,255,255,0.7)', maxWidth: 680 }}>
          Most people teaching squats hand you a workbook and wish you luck. I built the infrastructure instead, because I needed it for my own practices first.
        </p>
      </div>

      {/* 2x2 product grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {PRODUCTS.map((p) => (
          <div key={p.name} style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', height: 360 }}>
            <img src={p.img} alt={p.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%)' }} />
            <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
              <div>
                <h3 style={{ fontFamily: SF, fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{p.name}</h3>
                <p style={{ fontFamily: SF, fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, maxWidth: 380 }}>{p.desc}</p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <ArrowIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
