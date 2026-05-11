import { useState } from 'react';

const galleryImages = [
  { url: 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778535278/IMG_6778_-_Jake_Barrow_ilzr5v.jpg', label: 'Chapter Service', col: 'span 2' },
  { url: 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778535274/IMG_6072_-_Jaylin_Wilson_qfxyo3.jpg', label: 'Community Event', row: 'span 2' },
  { url: 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778534837/IMG_1241_slipim.jpg', label: 'Volunteer Day' },
  { url: 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778534838/IMG_1242_iahazo.jpg', label: 'Service Hours' },
  { url: 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778535278/IMG_0107_-_Simone_Wilt_jbnlr2.jpg', label: 'NHS Member' },
  { url: 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778534835/IMG_1239_ljcdnt.jpg', label: 'Chapter Event' },
  { url: 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778534834/IMG_1238_g2ir8k.jpg', label: 'Service Project', col: 'span 2' },
  { url: 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778534836/IMG_1240_lkfs91.jpg', label: 'Volunteer Work' },
  { url: 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778535277/IMG_0272_-_Laurel_Pittman_yt2s4q.jpg', label: 'NHS Member' },
];

const Gallery = () => {
  const [open, setOpen] = useState(null);

  return (
    <>
      <div className="grid-gallery">
        {galleryImages.map((img, i) => (
          <div key={i}
            onClick={() => setOpen(i)}
            style={{
              gridColumn: img.col || undefined,
              gridRow: img.row || undefined,
              cursor: 'pointer',
              overflow: 'hidden',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
            <img src={img.url} alt={img.label}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        ))}
      </div>

      {open !== null && (
        <div onClick={() => setOpen(null)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(14, 26, 54, 0.92)',
            zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
          }}>
          <div onClick={(e) => e.stopPropagation()}
            style={{ background: 'var(--paper)', maxWidth: 900, width: '100%', padding: 24 }}>
            <img src={galleryImages[open].url} alt={galleryImages[open].label}
              style={{ width: '100%', maxHeight: 500, objectFit: 'contain', display: 'block', marginBottom: 20 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <div>
                <div className="eyebrow">Photo {open + 1} of {galleryImages.length}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, marginTop: 6 }}>
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
