import PageHero from '../components/PageHero';

const ContactRow = ({ label, value, link }) => (
  <div style={{ padding: '16px 0', borderBottom: '1px solid var(--rule)', display: 'grid', gridTemplateColumns: '100px 1fr', gap: 16, alignItems: 'baseline' }}>
    <div className="eyebrow" style={{ fontSize: 10 }}>{label}</div>
    {link ? (
      <a href={link} style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: 'var(--navy-ink)', textDecoration: 'none', whiteSpace: 'pre-line' }}>{value}</a>
    ) : (
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: 'var(--navy-ink)', whiteSpace: 'pre-line' }}>{value}</div>
    )}
  </div>
);

const Contact = () => {
  const subjects = [
    { kicker: 'Membership', label: 'Application or membership questions', subj: 'Membership Question' },
    { kicker: 'Service Hours', label: 'Hours, validation, or events', subj: 'Service Hours Question' },
    { kicker: 'Community Partner', label: 'Looking for NHS volunteers', subj: 'Community Partnership' },
    { kicker: 'Other', label: 'Anything else', subj: 'General Inquiry' },
  ];

  const mailto = (subj) => `mailto:jthhonorsociety@gmail.com?subject=${encodeURIComponent('[Hoggard NHS] ' + subj)}`;

  return (
    <main>
      <PageHero eyebrow="Contact" title="Reach the chapter."
        lede="Questions about membership, hours, partnerships, or volunteer opportunities? Email the chapter directly — your message will be read by the officer team the same day." />

      <section className="pad-contact">
        <div className="grid-contact" style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Sidebar: chapter email first, adviser below */}
          <div>
            <div className="eyebrow">Direct Contact</div>
            <h2 style={{ fontSize: 'clamp(24px, 2.5vw, 30px)', marginTop: 12, marginBottom: 16 }}>Chapter contact</h2>
            <hr className="gold-rule" />

            <div style={{ padding: '20px 0', borderBottom: '1px solid var(--rule)' }}>
              <div className="eyebrow" style={{ fontSize: 10, marginBottom: 6 }}>Chapter Email</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: 'var(--navy-ink)', marginBottom: 4 }}>Viking Chapter NHS</div>
              <a href="mailto:jthhonorsociety@gmail.com" style={{ fontFamily: "'Source Serif Pro', serif", fontSize: 15, color: 'var(--navy)' }}>jthhonorsociety@gmail.com</a>
            </div>

            <div style={{ padding: '20px 0', borderBottom: '1px solid var(--rule)' }}>
              <div className="eyebrow" style={{ fontSize: 10, marginBottom: 6 }}>Faculty Adviser</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: 'var(--navy-ink)', marginBottom: 4 }}>Hunter Moody</div>
              <a href="mailto:hunter.moody@nhcs.net" style={{ fontFamily: "'Source Serif Pro', serif", fontSize: 15, color: 'var(--navy)' }}>hunter.moody@nhcs.net</a>
            </div>

            <ContactRow label="School" value="John T. Hoggard High School" link="https://hoggard.nhcs.net" />
            <ContactRow label="Address" value={'4305 Shipyard Boulevard\nWilmington, NC 28403'} />
            <ContactRow label="Updates" value="Check email for meeting dates" />

            <div style={{ marginTop: 28, padding: '24px 20px', background: 'var(--parchment)', border: '1px solid var(--rule)' }}>
              <div className="eyebrow">For Community Partners</div>
              <h3 style={{ fontSize: 20, marginTop: 8, marginBottom: 10 }}>Looking for volunteers?</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
                Non-profits and community organizations seeking NHS volunteers should email the chapter directly. Please include a short description, the date(s), and the number of volunteers needed.
              </p>
            </div>
          </div>

          {/* Right: email CTAs */}
          <div>
            <div className="eyebrow">Email the Chapter</div>
            <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', marginTop: 12, marginBottom: 16 }}>Send a message from your inbox</h2>
            <hr className="gold-rule" />
            <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28 }}>
              Choose a topic below to open a pre-formatted email in your default mail app, addressed to the chapter email.
            </p>

            <div className="grid-email-cards">
              {subjects.map((s) => (
                <a key={s.subj} href={mailto(s.subj)}
                  style={{ textDecoration: 'none', background: 'var(--paper)', border: '1px solid var(--rule)', padding: '24px 20px', display: 'block', transition: 'all 0.2s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'var(--parchment)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'var(--paper)'; }}>
                  <div className="eyebrow">{s.kicker}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: 'var(--navy-ink)', marginTop: 8, marginBottom: 12, lineHeight: 1.3 }}>{s.label}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--navy)' }}>Open in mail app →</div>
                </a>
              ))}
            </div>

            <div style={{ marginTop: 28, padding: '20px', background: 'var(--parchment)', borderLeft: '3px solid var(--gold)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>
              Prefer to copy the address? Email <a href="mailto:jthhonorsociety@gmail.com" style={{ color: 'var(--navy-ink)', fontWeight: 600 }}>jthhonorsociety@gmail.com</a> directly.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
