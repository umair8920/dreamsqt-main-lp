import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { blogPosts, type BlogPost } from '../data/blogPosts';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const CARD_BG = '#F4EEE5';

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

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link to={`/blog/${post.slug}`} style={{
    color: 'inherit',
    textDecoration: 'none',
    borderRadius: 20,
    overflow: 'hidden',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: post.featured ? '0px 40px 50px 0px rgba(146,94,2,0.3)' : 'none',
    position: 'relative',
  }}>
    {/* Image */}
    <div style={{ height: 320, overflow: 'hidden', borderRadius: '20px 20px 0 0', flexShrink: 0, position: 'relative' }}>
      <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
      {post.badge && (
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
        <CategoryPill label={post.category} />
        <span style={{ fontFamily: SF, fontSize: 10, color: '#737373', whiteSpace: 'nowrap', flexShrink: 0 }}>{post.date}</span>
      </div>
      <h3 style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: '#131313', lineHeight: 1.3, margin: 0 }}>{post.title}</h3>
      <p style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.55, flex: 1, margin: 0 }}>{post.desc}</p>
    </div>
  </Link>
);

export const BlogPage: React.FC = () => (
  <div style={{ background: CARD_BG }}>

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
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);
