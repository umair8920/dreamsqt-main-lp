import React, { useEffect, useState } from 'react';
import resource1 from '../assets/resource/resource1.png';
import resource2 from '../assets/resource/resource2.png';
import resource3 from '../assets/resource/resource3.png';
import planner12Pdf from '../assets/resource/12 Week Pre-Launch Planner.pdf?url';
import squatTemplatesPdf from '../assets/resource/The 100 Squat Build Templates.pdf?url';
import leaseWorksheetPdf from '../assets/resource/Lease Review Worksheet.pdf?url';

const SF = '"SF Pro Display","SF Pro",-apple-system,BlinkMacSystemFont,sans-serif';
const GOLD = '#925E02';
const CREAM = '#FCF6EF';
const FORM_TOKEN = 'fe385f7bb267a5d905b1b8ac0c3ed4816a66471cab75b24e7522975ac3f74427';
const FORM_ENDPOINT = 'https://app.flossly.ai/api/form/submit';

export const RESOURCES = [
  {
    img: resource1,
    category: 'CQC REGISTRATION PROCESS',
    title: '12 Week Pre-Launch Planner',
    file: planner12Pdf,
    desc: 'Download your free resource and fill your diary before you open, not after',
    date: 'Last updated: 24 Aug 2026',
  },
  {
    img: resource2,
    category: 'DENTAL CLINICS',
    title: 'The 100 Squat Build Templates',
    file: squatTemplatesPdf,
    desc: 'Owning a practice used to be the “final chapter” of a career.',
    date: 'Last updated: 24 Aug 2026',
  },
  {
    img: resource3,
    category: 'CQC REGISTRATION PROCESS',
    title: 'Lease Review Worksheet',
    file: leaseWorksheetPdf,
    desc: 'The seven clauses that decide whether you can ever sell',
    date: 'Last updated: 24 Aug 2026',
  },
];

const DownloadIcon = () => (
  <img src="/resource-download-icon.svg" alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
);

export const ResourceCard = ({
  img,
  category,
  title,
  desc,
  date,
  onDownload,
}: {
  img: string;
  category: string;
  title: string;
  desc: string;
  date: string;
  onDownload: () => void;
}) => (
  <div
    className="interactive-lift resources-card"
    style={{
      borderRadius: 20,
      overflow: 'hidden',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}
  >
    <div
      className="resources-card-media"
      style={{
        width: '100%',
        height: 237,
        overflow: 'hidden',
        borderRadius: '20px 20px 0 0',
        flexShrink: 0,
        position: 'relative',
      }}
    >
      <img
        className="resources-card-image"
        src={img}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />
    </div>

    <div className="resources-card-body interactive-text-parent" style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div
        className="resources-card-badge"
        style={{
          display: 'inline-flex',
          alignSelf: 'flex-start',
          background: 'rgba(224,194,83,0.54)',
          borderRadius: 30,
          padding: '4px 8px',
        }}
      >
        <span className="interactive-text" style={{ fontFamily: SF, fontSize: 12, color: '#131313', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
          {category}
        </span>
      </div>

      <h3 className="interactive-text resources-card-title" style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: '#131313', lineHeight: 1.3, margin: 0 }}>
        {title}
      </h3>

      <p className="interactive-text resources-card-desc" style={{ fontFamily: SF, fontSize: 16, color: '#131313', lineHeight: 1.55, flex: 1, margin: 0 }}>
        {desc}
      </p>

      <div className="resources-card-meta" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 12, marginTop: 4 }}>
        <button
          type="button"
          onClick={onDownload}
          className="interactive-button resources-card-button"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: '#131313',
            border: 'none',
            borderRadius: 30,
            padding: '4px 12px',
            cursor: 'pointer',
          }}
        >
          <span className="interactive-text" style={{ fontFamily: SF, fontSize: 12, fontWeight: 590, color: '#fff', textTransform: 'uppercase' }}>
            Download
          </span>
          <DownloadIcon />
        </button>
        <span className="interactive-text resources-card-date" style={{ fontFamily: SF, fontSize: 10, color: '#737373' }}>
          {date}
        </span>
      </div>
    </div>
  </div>
);

export type Resource = (typeof RESOURCES)[number];

const triggerDownload = (file: string, title: string) => {
  const a = document.createElement('a');
  a.href = file;
  a.download = `${title}.pdf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const fieldStyle: React.CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  height: 48,
  border: '1px solid #E2DCD2',
  borderRadius: 12,
  padding: '0 16px',
  fontFamily: SF,
  fontSize: 16,
  color: '#131313',
  background: '#fff',
  outline: 'none',
};
const labelStyle: React.CSSProperties = { fontFamily: SF, fontSize: 14, fontWeight: 600, color: '#131313', textAlign: 'left' };

export const DownloadModal = ({ resource, onClose }: { resource: Resource; onClose: () => void }) => {
  const [values, setValues] = useState({ name: '', email: '', telephone: '', comments: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      // Flossly sends no CORS headers, so use a "simple" request (text/plain, no-cors).
      // The reply is unreadable, but the request still reaches Flossly and creates the lead.
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify({ token: FORM_TOKEN, data: values, ...values }),
      });
      setStatus('done');
      triggerDownload(resource.file, resource.title);
    } catch {
      setStatus('error');
    }
  };

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0,0,0,0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Download ${resource.title}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          background: CREAM,
          borderRadius: 20,
          width: 622,
          height: 719,
          maxWidth: '100%',
          maxHeight: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          style={{ position: 'absolute', top: 16, right: 20, background: 'none', border: 'none', cursor: 'pointer', fontSize: 28, lineHeight: 1, color: '#131313', padding: 4 }}
        >
          ×
        </button>

        <div style={{ height: 134, flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, padding: '0 56px' }}>
          <h2 style={{ fontFamily: SF, fontSize: 40, fontWeight: 700, color: GOLD, margin: 0, lineHeight: 1, letterSpacing: 0 }}>Download</h2>
          <p style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: '#131313', margin: 0, lineHeight: 1, letterSpacing: 0 }}>{resource.title}</p>
        </div>

        <div style={{ width: 524, maxWidth: 'calc(100% - 32px)', height: 530, flexShrink: 0, background: '#fff', borderRadius: 20, overflowY: 'auto', boxSizing: 'border-box', padding: 24 }}>
          {status === 'done' ? (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
              <h3 style={{ fontFamily: SF, fontSize: 24, fontWeight: 700, color: '#131313', margin: 0 }}>Thank you!</h3>
              <p style={{ fontFamily: SF, fontSize: 16, color: '#737373', margin: 0, lineHeight: 1.5 }}>
                Your download has started. If nothing happened, use the button below.
              </p>
              <a
                href={resource.file}
                download={`${resource.title}.pdf`}
                className="interactive-button"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#131313', borderRadius: 30, padding: '8px 24px', fontFamily: SF, fontSize: 12, fontWeight: 590, color: '#fff', textTransform: 'uppercase', textDecoration: 'none' }}
              >
                Download again
                <DownloadIcon />
              </a>
            </div>
          ) : (
            <form id="resource-form" onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={labelStyle}>Name <span style={{ color: "#C0392B" }}>*</span></span>
                <input required style={fieldStyle} value={values.name} onChange={set('name')} autoComplete="name" />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={labelStyle}>Email <span style={{ color: "#C0392B" }}>*</span></span>
                <input required type="email" style={fieldStyle} value={values.email} onChange={set('email')} autoComplete="email" />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={labelStyle}>Phone number <span style={{ color: "#C0392B" }}>*</span></span>
                <input required type="tel" style={fieldStyle} value={values.telephone} onChange={set('telephone')} autoComplete="tel" />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={labelStyle}>Comments (optional)</span>
                <textarea style={{ ...fieldStyle, height: 96, padding: 16, resize: 'none' }} value={values.comments} onChange={set('comments')} />
              </label>
              {status === 'error' && (
                <p style={{ fontFamily: SF, fontSize: 14, color: '#C0392B', margin: 0 }}>Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="interactive-button"
                style={{ alignSelf: 'center', display: 'inline-flex', alignItems: 'center', gap: 8, background: '#131313', border: 'none', borderRadius: 30, padding: '8px 24px', fontFamily: SF, fontSize: 12, fontWeight: 590, color: '#fff', textTransform: 'uppercase', cursor: 'pointer', opacity: status === 'sending' ? 0.6 : 1 }}
              >
                {status === 'sending' ? 'Sending…' : 'Download'}
                <DownloadIcon />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
