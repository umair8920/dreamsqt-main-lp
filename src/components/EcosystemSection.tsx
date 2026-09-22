import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import product1 from '../assets/homeicons/product1.png';
import product2 from '../assets/homeicons/product2.png';
import product3 from '../assets/homeicons/product3.png';
import product4 from '../assets/homeicons/product4.png';
import arrowicon from '../assets/homeicons/arrow.svg';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';

const ArrowIcon = () => (
  <img
        src={arrowicon}
        alt="Tired & Burnt Out"
        width={34}
        height={34}
      />
);

const PRODUCTS = [
  {
    img: product1,
    name: 'Flossly',
    desc: 'The practice CRM and operating system my clinics run on. Enquiries, treatment plans, recalls, reporting.',
  },
  {
    img: product2,
    name: 'TwothMatch',
    desc: 'Dental recruitment, so hiring your associate and nurses is not a job ad and a prayer.',
  },
  {
    img: product3,
    name: 'CQC MediSolutions',
    desc: 'Registration, policies, mock inspections and registered manager prep, run by a team that submits registrations every week.',
  },
  {
    img: product4,
    name: 'Smart Dental Compliance and Training',
    desc: 'Ongoing CPD and compliance that keeps you inspection ready every year after.',
  },
];

export const EcosystemSection: React.FC = () => (
  <section className="home-ecosystem-section" style={{ background: '#FCF6EF', padding: '0 80px 80px' }}>
    <ScrollReveal variant="scale">
      <div className="home-ecosystem-card" style={{ maxWidth: 1280, margin: '0 auto', background: '#7B4E00', borderRadius: 28, padding: '56px 60px' }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ marginBottom: 20 }}>
            <div style={{ position: 'relative', display: 'inline-block', borderRadius: 20, background: 'transparent', boxSizing: 'border-box' }}>
              {/* Gradient border only */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  padding: 1,
                  borderRadius: 20,
                  background:
                    'linear-gradient(90deg, #925E02 2%, #C5A13B 29%, #E6CC60 50%, #F2DC6E 60%, #ECD465 67%, #DDBD4E 77%, #C49727 91%, #B07908 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none',
                  boxSizing: 'border-box',
                }}
              />
              {/* Transparent center */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '5px 14px',
                  borderRadius: 20,
                  background: 'transparent',
                  boxSizing: 'border-box',
                }}
              >
                <span style={{ fontFamily: SF, fontSize: 12, fontWeight: 500, color: '#FCF6EF', letterSpacing: '0.08em' }}>WHAT HAPPENS AFTER DAY 90</span>
              </div>
            </div>
          </div>
          <h2 className="home-ecosystem-title" style={{ fontFamily: SF, fontSize: 60, fontWeight: 700, color: '#FCF6EF', lineHeight: 1.12, maxWidth: 860, marginBottom: 16 }}>
            Everyone else stops when the course ends. My businesses are the ones you use on day 91.
          </h2>
          <p style={{ fontFamily: SF, fontWeight: 400, fontSize: 16, color: '#FCF6EF', maxWidth: 680 }}>
            Most people teaching squats hand you a workbook and wish you luck. I built the infrastructure instead, because I needed it for my own practices first.
          </p>
        </div>

        {/* 2x2 product grid */}
        <div className="home-ecosystem-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {PRODUCTS.map((p) => (
            <div key={p.name} className="home-card interactive-lift" style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', height: 360 }}>
              <img src={p.img} alt={p.name} className="home-card-image" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(181.87deg, rgba(19, 19, 19, 0) 42.46%, #131313 98.42%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
                <div>
                  <h3 style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: '#FCF6EF', marginBottom: 6 }}>{p.name}</h3>
                  <p style={{ fontFamily: SF, fontSize: 14, fontWeight: 400, color: '#FCF6EF', lineHeight: 1.5, maxWidth: 380 }}>{p.desc}</p>
                </div>
                <div className="home-card-arrow" style={{ flexShrink: 0 }}>
                  <ArrowIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </section>
);
