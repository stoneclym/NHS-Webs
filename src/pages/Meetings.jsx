import PageHero from '../components/PageHero';

const slideshows = [
  { date: 'October 2025', title: 'Service Hour Kickoff', summary: 'Logistics for the year, validation form walkthrough, and fall service opportunities.', href: '#' },
  { date: 'September 2025', title: 'Welcome Back & Officer Elections', summary: 'Introduction to the 2025–26 chapter, officer elections, and bylaw review.', href: '#' },
  { date: 'May 2025', title: 'Spring Induction Prep', summary: 'Induction ceremony walkthrough, dues information, and end-of-year service push.', href: '#' },
  { date: 'March 2025', title: 'Application Window Opens', summary: 'Application timeline for sophomores and juniors, reference form expectations.', href: '#' },
  { date: 'February 2025', title: 'Individual Service Projects', summary: "How to plan, propose, and lead an ISP — the 12 W's template explained.", href: '#' },
  { date: 'January 2025', title: 'New Semester, New Hours', summary: 'Spring semester service goals, partner highlights, and SignUpGenius refresh.', href: '#' },
];

const Meetings = () => (
  <main>
    <PageHero eyebrow="Meeting Archive" title="Past meeting slideshows."
      lede="Missed a meeting? Browse the archive of past chapter meeting presentations. Each slideshow links to the original deck." />

    <section className="pad-lg">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="grid-meetings">
          {slideshows.map((s) => (
            <a key={s.date + s.title} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: 'none', background: 'var(--parchment)', border: '1px solid var(--rule)', padding: '28px 24px', display: 'block', transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div className="eyebrow">{s.date}</div>
                <div style={{ flex: 1, height: 1, background: 'var(--rule)' }} />
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: 'var(--navy)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>Slides ↗</div>
              </div>
              <h3 style={{ fontSize: 22, marginBottom: 10, color: 'var(--navy-ink)' }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{s.summary}</p>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 48, padding: '24px 28px', background: 'var(--parchment)', borderLeft: '3px solid var(--gold)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, fontStyle: 'italic' }}>
          New slideshows are added after each chapter meeting. If a deck is missing or you need a copy, email the adviser at <a href="mailto:hunter.moody@nhcs.net" style={{ color: 'var(--navy)' }}>hunter.moody@nhcs.net</a>.
        </div>
      </div>
    </section>
  </main>
);

export default Meetings;
