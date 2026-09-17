import React from 'react';
import { TopBar } from '../components/TopBar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
// const GOLD = '#925E02'; // unused
const CARD_BG = '#F4EEE5';

const POSTS = [
  {
    img: '/blog-card-1.png',
    category: 'SQUAT DENTAL PRACTICE COST UK',
    title: 'What a squat dental practice actually costs in 2026, line by line',
    desc: 'A real, line by line breakdown of what it costs to open a squat dental practice in 2026, from someone who has built three. Including the line most people forget.',
    date: 'Last updated: 24 Aug 2026',
    featured: true,
    badge: true,
  },
  {
    img: '/blog-card-2.png',
    category: 'DENTAL PRACTICE LEASE CLAUSES UK',
    title: 'The seven lease clauses that cost dentists their practice',
    desc: 'Seven commercial lease clauses that quietly destroy the value of a dental practice, from someone who has negotiated three squat leases and sold one practice.',
    date: 'Last updated: 24 Aug 2026',
    featured: false,
  },
  {
    img: '/blog-card-3.png',
    category: 'CQC REGISTRATION NEW DENTAL PRACTICE',
    title: 'CQC registration for a new dental practice: the timeline nobody tells you',
    desc: 'How long CQC registration really takes for a new dental practice, what causes delays, and the timing mistake that costs squat practices three months of trading.',
    date: 'Last updated: 24 Aug 2026',
    featured: false,
  },
  {
    img: '/blog-card-4.png',
    category: 'SQUAT PRACTICE VS BUYING DENTAL PRACTICE',
    title: 'Squat or buy? The honest comparison, including the part your bank cares about',
    desc: 'An honest comparison of building a squat dental practice versus buying an existing one, including the lending difference that decides it for most dentists.',
    date: 'Last updated: 24 Aug 2026',
    featured: false,
  },
  {
    img: '/blog-card-5.png',
    category: 'NEW DENTAL PRACTICE MARKETING BEFORE OPENING',
    title: 'How to fill your diary before you open',
    desc: 'Most squat practices open with an empty diary and spend six months recovering. Here is the pre-launch marketing sequence that means month one is booking, not begging.',
    date: 'Last updated: 24 Aug 2026',
    featured: false,
  },
  {
    img: '/blog-card-4.png',
    category: 'DENTAL SQUAT PRACTICE MISTAKES',
    title: 'What I got wrong building three dental practices, and what each mistake cost',
    desc: 'Three expensive mistakes from three squat dental practice builds, with the numbers attached. The case studies nobody publishes.',
    date: 'Last updated: 24 Aug 2026',
    featured: false,
  },
];

const CategoryPill = ({ label }: { label: string }) => (
  <div style={{
    display: 'inline-flex',
    alignSelf: 'flex-start',
    background: 'rgba(224,194,83,0.54)',
    borderRadius: 30,
    padding: '4px 8px',
  }}>
    <span style={{ fontFamily: SF, fontSize: 12, color: '#131313', textTransform: 'uppercase' }}>{label}</span>
  </div>
);

const BlogCard = ({ img, category, title, desc, date, featured = false, badge = false }: {
  img: string; category: string; title: string; desc: string; date: string; featured?: boolean; badge?: boolean;
}) => (
  <div style={{
    borderRadius: 20,
    overflow: 'hidden',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: featured ? '0px 40px 50px 0px rgba(146,94,2,0.3)' : 'none',
    position: 'relative',
  }}>
    {/* Image */}
    <div style={{ height: 320, overflow: 'hidden', borderRadius: '20px 20px 0 0', flexShrink: 0, position: 'relative' }}>
      <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
      {badge && (
        <img
          src="/blog-card-badge.svg"
          alt=""
          style={{ position: 'absolute', right: 20, bottom: -37, width: 74, height: 74, zIndex: 2 }}
        />
      )}
    </div>
    {/* Content */}
    <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <CategoryPill label={category} />
        <span style={{ fontFamily: SF, fontSize: 10, color: '#737373', whiteSpace: 'nowrap', flexShrink: 0 }}>{date}</span>
      </div>
      <h3 style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: '#131313', lineHeight: 1.3, margin: 0 }}>{title}</h3>
      <p style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.55, flex: 1, margin: 0 }}>{desc}</p>
    </div>
  </div>
);

export const BlogPage: React.FC = () => (
  <div style={{ background: CARD_BG }}>
    <TopBar />

    {/* ── Hero ── */}
    <section style={{ position: 'relative', height: 810, overflow: 'hidden' }}>
      <Header variant="dark" />
      {/* Background image */}
      <img
        src="/blog-hero-bg.png"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none' }}
      />
      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(154,94,26,0.46)' }} />

      {/* Centered content */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, paddingTop: 40 }}>
        {/* Pill */}
        <div style={{ border: '1px solid #C5A13B', borderRadius: 999, padding: '8px 20px' }}>
          <span style={{ fontFamily: SF, fontSize: 14, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em' }}>THE DREAM SQUAT JOURNAL</span>
        </div>
        {/* Heading */}
        <h1 style={{ fontFamily: SF, fontWeight: 700, lineHeight: 1.15, textAlign: 'center', margin: 0, width: 831 }}>
          <span style={{ fontSize: 60, color: '#F2DC6E', display: 'block' }}>Build Smarter.</span>
          <span style={{ fontSize: 60, color: '#fff', display: 'block' }}>Open Stronger.</span>
        </h1>
        {/* Subtext */}
        <p style={{ fontFamily: SF, fontSize: 24, color: '#fff', textAlign: 'center', lineHeight: 1.45, margin: 0, maxWidth: 643 }}>
          Practical advice, real numbers and hard-earned lessons to help you plan, build and launch your dental practice with confidence.
        </p>
        {/* CTA */}
        <button style={{ background: '#F4EEE5', border: 'none', borderRadius: 8, padding: '12px 30px', fontFamily: SF, fontSize: 14, fontWeight: 590, color: '#131313', cursor: 'pointer' }}>
          Book my seat →
        </button>
      </div>
    </section>

    {/* ── Blog grid ── */}
    <section style={{ padding: '80px 0 100px' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {POSTS.map((p, i) => (
            <BlogCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);
