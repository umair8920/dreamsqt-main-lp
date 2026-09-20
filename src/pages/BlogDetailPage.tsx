import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { getBlogPost, getRelatedBlogPosts, type BlogPost } from '../data/blogPosts';
import heroImage from '../assets/blog/Rectangle 34624763.png';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const PAGE_BG = '#FCF6EF';

const CategoryPill = ({ label }: { label: string }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      alignSelf: 'flex-start',
      background: 'rgba(224,194,83,0.54)',
      borderRadius: 30,
      padding: '4px 8px',
      fontFamily: SF,
      fontSize: 12,
      lineHeight: 1.3,
      color: '#131313',
      textTransform: 'uppercase',
    }}
  >
    {label}
  </span>
);

const renderInlineMarkdown = (text: string) => {
  const segments = text.split(/(\*\*.*?\*\*|_.*?_)/g).filter(Boolean);

  return segments.map((segment, index) => {
    if (segment.startsWith('**') && segment.endsWith('**')) {
      return <strong key={index}>{segment.slice(2, -2)}</strong>;
    }

    if (segment.startsWith('_') && segment.endsWith('_')) {
      return <em key={index}>{segment.slice(1, -1)}</em>;
    }

    return <React.Fragment key={index}>{segment}</React.Fragment>;
  });
};

const isStandaloneHeading = (block: string) => block.startsWith('**') && block.endsWith('**') && block.indexOf('**', 2) === block.length - 2;

const ArticleBlock = ({ block }: { block: string }) => {
  if (isStandaloneHeading(block)) {
    const text = block.slice(2, -2);
    const isSubheading = /^\d+\./.test(text) || /^Weeks? /.test(text) || /^Mistake \d/.test(text);

    return isSubheading ? (
      <h3 className="blog-detail-h3">{text}</h3>
    ) : (
      <h2 className="blog-detail-h2">{text}</h2>
    );
  }

  return <p className="blog-detail-p">{renderInlineMarkdown(block)}</p>;
};

const RelatedCard = ({ post }: { post: BlogPost }) => (
  <Link
    to={`/blog/${post.slug}`}
    style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
      overflow: 'hidden',
      borderRadius: 20,
      background: '#fff',
      color: 'inherit',
      textDecoration: 'none',
    }}
  >
    <div style={{ height: 320, overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
      <img
        src={post.img}
        alt={post.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
      />
    </div>
    <div style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <CategoryPill label={post.category} />
        <span style={{ fontFamily: SF, fontSize: 10, color: '#737373', lineHeight: 1.3 }}>{post.date}</span>
      </div>
      <h3 style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: '#131313', lineHeight: 1.3, margin: 0 }}>
        {post.title}
      </h3>
      <p style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.55, margin: 0 }}>
        {post.desc}
      </p>
    </div>
  </Link>
);

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = getRelatedBlogPosts(post.slug, 2);

  return (
    <div style={{ background: PAGE_BG, minHeight: '100vh' }}>
      <section className="blog-detail-hero">
        <Header variant="dark" />
        <img src={heroImage} alt="" className="blog-detail-hero-image" />
        <div className="blog-detail-hero-overlay" />
        <div className="blog-detail-hero-content">
          <h1 className="blog-detail-title">{post.title}</h1>
          <p className="blog-detail-description">{post.desc}</p>
        </div>
      </section>

      <main>
        <article className="blog-detail-article">

          {post.body.map((block, index) => (
            <ArticleBlock key={`${post.slug}-${index}`} block={block} />
          ))}

          <Link to={post.ctaTo} className="blog-detail-cta">
            {post.ctaLabel} →
          </Link>
        </article>

        <section className="blog-detail-related">
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <h2 className="blog-detail-related-title">Read more blogs</h2>
            <div className="blog-detail-related-grid">
              {relatedPosts.map((relatedPost) => (
                <RelatedCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
