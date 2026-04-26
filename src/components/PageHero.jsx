const PageHero = ({ eyebrow, title, lede }) => (
  <section style={{
    background: 'var(--navy-ink)',
    color: 'white',
    padding: '72px 32px 64px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(165,145,95,0.14) 0%, transparent 50%)',
    }} />
    <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
      <div className="eyebrow on-dark">{eyebrow}</div>
      <h1 style={{ color: 'white', fontSize: 'clamp(40px, 5vw, 64px)', marginTop: 12, marginBottom: 20 }}>
        {title}
      </h1>
      <hr className="gold-rule" style={{ width: 60, height: 2, background: 'var(--gold-bright)' }} />
      {lede && (
        <p style={{ fontSize: 19, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)', maxWidth: 720, marginTop: 8 }}>
          {lede}
        </p>
      )}
    </div>
  </section>
);

export default PageHero;
