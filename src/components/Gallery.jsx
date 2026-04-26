import { useState } from 'react';

const galleryImages = [
  { label: 'Induction\nCeremony 2025', size: 'wide' },
  { label: 'Beach Cleanup\nWrightsville', size: 'tall' },
  { label: 'Paws 4 People\nDonation Drive' },
  { label: 'Tutoring\nMiddle Schoolers' },
  { label: 'Holiday\nFood Drive' },
  { label: 'Officer\nHeadshots', size: 'wide' },
  { label: 'Service\nDay 2025' },
  { label: 'Honor Code\nSigning' },
];

const Gallery = () => {
  const [open, setOpen] = useState(null);

  return (
    <>
      <div className="grid-gallery">
        {galleryImages.map((img, i) => {
          const span = img.size === 'wide' ? { gridColumn: 'span 2' } : img.size === 'tall' ? { gridRow: 'span 2' } : {};
          return (
            <div key={i}
              onClick={() => setOpen(i)}
              style={{ ...span, cursor: 'pointer', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s ease' }}
              className="placeholder"
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
              <div style={{ whiteSpace: 'pre-line', textAlign: 'center' }}>[ {img.label} ]</div>
            </div>
          );
        })}
      </div>

      {open !== null && (
        <div onClick={() => setOpen(null)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(14, 26, 54, 0.92)',
            zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
          }}>
          <div onClick={(e) => e.stopPropagation()}
            style={{ background: 'var(--paper)', maxWidth: 900, width: '100%', padding: 24 }}>
            <div className="placeholder" style={{ height: 400, marginBottom: 20 }}>
              <div style={{ whiteSpace: 'pre-line', textAlign: 'center', fontSize: 14 }}>
                [ {galleryImages[open].label} — full resolution ]
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <div>
                <div className="eyebrow">Photo {open + 1} of {galleryImages.length}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, marginTop: 6, whiteSpace: 'pre-line' }}>
                  {galleryImages[open].label}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-outline"
                  onClick={() => setOpen((open - 1 + galleryImages.length) % galleryImages.length)}>← Prev</button>
                <button className="btn btn-outline"
                  onClick={() => setOpen((open + 1) % galleryImages.length)}>Next →</button>
                <button className="btn btn-navy" onClick={() => setOpen(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
