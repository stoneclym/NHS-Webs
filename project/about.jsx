// Reusable page header
const PageHero = ({ eyebrow, title, lede }) =>
<section style={{
  background: 'var(--navy-ink)',
  color: 'white',
  padding: '72px 32px 64px',
  position: 'relative',
  overflow: 'hidden'
}}>
    <div style={{
    position: 'absolute',
    inset: 0,
    backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(165,145,95,0.14) 0%, transparent 50%)'
  }} />
    <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
      <div className="eyebrow on-dark">{eyebrow}</div>
      <h1 style={{ color: 'white', fontSize: 'clamp(40px, 5vw, 64px)', marginTop: 12, marginBottom: 20 }}>
        {title}
      </h1>
      <hr className="gold-rule" style={{ width: 60, height: 2, background: 'var(--gold-bright)' }} />
      {lede &&
    <p style={{ fontSize: 19, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)', maxWidth: 720, marginTop: 8 }}>
          {lede}
        </p>
    }
    </div>
  </section>;


window.PageHero = PageHero;

// ────────────────────────────────────────────────────────
const About = () =>
<main>
    <PageHero
    eyebrow="About the Chapter"
    title="A tradition of leadership at Hoggard."
    lede="Founded as the Viking Chapter of the National Honor Society, our chapter recognizes Hoggard students who demonstrate the four pillars — and equips them to lead in school and across Wilmington." />
  
    <section style={{ padding: '80px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64 }}>
        <div>
          <div className="placeholder" style={{ height: 420 }}>
            [ chapter history<br />group photo ]
          </div>
        </div>
        <div>
          <div className="eyebrow">Our Story</div>
          <h2 style={{ fontSize: 36, marginTop: 12, marginBottom: 18 }}>What we are, and what we do.</h2>
          <hr className="gold-rule" />
          <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 20 }}>
            The National Honor Society was founded in 1921 to recognize outstanding high school students. The Viking Chapter at John T. Hoggard High School carries that mission forward in Wilmington, North Carolina and selects students who have demonstrated excellence in <em>Scholarship, Service, Leadership,</em> and <em>Character</em>.
          </p>
          <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28 }}>Members commit to a higher standard. They tutor younger students, raise funds for community partners, organize cleanups, and lead service projects of their own design. Membership is not an honor accepted lightly, it is a year-long commitment to the chapter and to the community.

        </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
            <Stat n="118" label="Active members" />
            <Stat n="3,400+" label="Service hours / yr" />
            <Stat n="20+" label="Partner organizations" />
          </div>
        </div>
      </div>
    </section>

    {/* Officers */}
    <section style={{ padding: '64px 32px', background: 'var(--parchment)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="eyebrow">2025–2026 Officers</div>
          <h2 style={{ fontSize: 36, marginTop: 12 }}>Chapter leadership</h2>
          <hr className="gold-rule center" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
        { role: 'President', name: 'Lillie Nichols' },
        { role: 'Vice President', name: 'Vivian Skiba' },
        { role: 'Treasurer', name: 'Lawson Kievit' },
        { role: 'Induction Coordinator', name: 'Jaylin Wilson' },
        { role: 'Service Hours Coordinator', name: 'Camille Walker' },
        { role: 'Communications Team', name: 'Greyson Clymer & Hutton Badrock' }].
        map((o) =>
        <OfficerCard key={o.role} {...o} />
        )}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32, fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'var(--muted)', letterSpacing: '0.08em' }}>
          Faculty Adviser: <strong style={{ color: 'var(--navy-ink)' }}>— Hunter Moody —</strong>  · hunter.moody@nhcs.net
        </div>
      </div>
    </section>

    {/* Pillars detail */}
    <section style={{ padding: '88px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="eyebrow">
</div>
        <h2 style={{ fontSize: 36, marginTop: 12, marginBottom: 36 }}>The Four Pillars</h2>
        <hr className="gold-rule" />
        <div style={{ display: 'grid', gap: 0, marginTop: 16 }}>
          {[{ roman: 'I.', title: 'Scholarship', body: 'A minimum unweighted GPA of 3.6 is required for selection and continued membership. Grades are reviewed each grading period.' },
        { roman: 'II.', title: 'Service', body: 'Members complete a minimum of 20 service hours per year (5 minimum per semester) through chapter and individually-organized events.' },
        { roman: 'III.', title: 'Leadership', body: 'Initiative shown in school clubs, athletics, performing arts, student government, and self-organized Individual Service Projects.' },
        { roman: 'IV.', title: 'Character', body: 'Members are expected to model integrity, responsibility, and respect — on campus and off. The Honor Code is signed at induction.' }].
        map((p, i) =>
        <div key={p.title} style={{
          display: 'grid',
          gridTemplateColumns: '80px 200px 1fr',
          gap: 32,
          padding: '28px 0',
          borderTop: i === 0 ? 'none' : '1px solid var(--rule)',
          alignItems: 'baseline'
        }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 28, color: 'var(--gold)' }}>{p.roman}</div>
              <h3 style={{ fontSize: 26 }}>{p.title}</h3>
              <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.65 }}>{p.body}</p>
            </div>
        )}
        </div>
      </div>
    </section>
  </main>;


const Stat = ({ n, label }) =>
<div style={{ borderTop: '2px solid var(--gold)', paddingTop: 14 }}>
    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 700, color: 'var(--navy-ink)', lineHeight: 1 }}>{n}</div>
    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 8 }}>{label}</div>
  </div>;


const OfficerCard = ({ role, name }) =>
<div style={{ background: 'var(--paper)', border: '1px solid var(--rule)' }}>
    <div className="placeholder" style={{ height: 220 }}>[ headshot ]</div>
    <div style={{ padding: '20px 18px', textAlign: 'center' }}>
      <div className="eyebrow">{role}</div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, marginTop: 6, color: 'var(--navy-ink)' }}>{name}</div>
    </div>
  </div>;


window.About = About;
window.Stat = Stat;
window.OfficerCard = OfficerCard;