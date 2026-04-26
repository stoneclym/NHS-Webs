import { useState } from 'react';
import PageHero from '../components/PageHero';

const TabBlock = ({ title, body, items, steps, warning, cta }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64 }}>
    <div>
      <h2 style={{ fontSize: 30, marginBottom: 14 }}>{title}</h2>
      <hr className="gold-rule" />
      <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.65 }}>{body}</p>
      {warning && (
        <div style={{
          marginTop: 24,
          padding: '14px 18px',
          background: 'rgba(165, 145, 95, 0.12)',
          borderLeft: '3px solid var(--gold)',
          fontSize: 13,
          color: 'var(--navy-ink)',
          lineHeight: 1.55,
          fontStyle: 'italic',
        }}>{warning}</div>
      )}
      {cta && (
        <a href={cta.href} target="_blank" rel="noopener noreferrer" className="btn btn-navy" style={{ marginTop: 24 }}>
          {cta.label}
        </a>
      )}
    </div>
    <div>
      {items && (
        <div>
          {items.map((it, i) => (
            <div key={i} style={{
              padding: '20px 0',
              borderTop: i === 0 ? '1px solid var(--rule)' : 'none',
              borderBottom: '1px solid var(--rule)',
              display: 'grid',
              gridTemplateColumns: '120px 1fr',
              gap: 24,
              alignItems: 'baseline',
            }}>
              <div className="eyebrow">{it.kicker}</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: 'var(--navy-ink)' }}>{it.title}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>{it.meta}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {steps && (
        <ol style={{ listStyle: 'none', counterReset: 'step', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {steps.map((s, i) => (
            <li key={i} style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr',
              gap: 20,
              padding: '20px 0',
              borderBottom: '1px solid var(--rule)',
              alignItems: 'baseline',
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 28, color: 'var(--gold)' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ fontSize: 16, color: 'var(--navy-ink)', lineHeight: 1.6 }}>{s}</div>
            </li>
          ))}
        </ol>
      )}
    </div>
  </div>
);

const Volunteer = () => {
  const [tab, setTab] = useState('Sponsored');

  return (
    <main>
      <PageHero
        eyebrow="Volunteer & Service"
        title="Earn your hours."
        lede="Members must complete a minimum of 20 service hours per year. Hours can be earned through chapter-sponsored events, approved unsponsored events, and your own Individual Service Project." />

      {/* Big CTA card */}
      <section style={{ padding: '40px 32px 0' }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          background: 'var(--navy)',
          color: 'white',
          padding: '40px 48px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 32,
          alignItems: 'center',
          backgroundColor: 'rgb(14, 26, 54)',
        }}>
          <div>
            <div className="eyebrow on-dark">Now Open</div>
            <h2 style={{ color: 'white', fontSize: 32, marginTop: 8 }}>Chapter-Sponsored Events</h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', marginTop: 8, fontSize: 15 }}>
              Browse and reserve your spot for upcoming chapter events. Sponsored hours are pre-approved.
            </p>
          </div>
          <a href="https://www.signupgenius.com/go/10C094BACAD2CA3F9CF8-50931733-nhsservice#/"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-gold" style={{ padding: '16px 32px' }}>
            Open SignUpGenius →
          </a>
        </div>
      </section>

      {/* Tabbed sections */}
      <section style={{ padding: '64px 32px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--rule)', marginBottom: 40 }}>
            {['Sponsored', 'Unsponsored', 'Individual Project', 'Validation'].map((t) => (
              <button key={t} onClick={() => setTab(t)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: '14px 24px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  color: tab === t ? 'var(--navy-ink)' : 'var(--muted)',
                  borderBottom: tab === t ? '2px solid var(--gold)' : '2px solid transparent',
                  marginBottom: -1,
                }}>{t}</button>
            ))}
          </div>

          {tab === 'Sponsored' && (
            <TabBlock
              title="Chapter-Sponsored Service"
              body="Sponsored events are organized by the chapter and are pre-approved for service hours. The full list of upcoming events lives on SignUpGenius — sign up early, as popular events fill quickly."
              steps={[
                'Open the chapter SignUpGenius to view all currently open events.',
                'Reserve your spot for any event that fits your schedule — sponsored hours are pre-approved.',
                'Attend the event and take a clear photograph of yourself participating.',
                'Submit the electronic Validation Form within 48 hours of completion.',
              ]}
              warning="You must still submit a validation form for every sponsored event you attend — sign-up alone does not log your hours." />
          )}

          {tab === 'Unsponsored' && (
            <TabBlock
              title="Unsponsored Service Opportunities"
              body="Unsponsored events are service activities you find on your own — through other organizations, churches, community groups, or family connections. They must be approved in advance to count toward your hours."
              steps={[
                'Submit the Unsponsored Approval Form at least 48 hours before the event takes place.',
                'Wait for an approval email from jthhonorsociety@gmail.com confirming the event is eligible for hours.',
                'Attend the event and take a clear photograph of yourself participating.',
                'Submit the electronic Validation Form within 48 hours of completion.',
              ]}
              warning="Hours from unapproved events will not be accepted — no exceptions."
              cta={{ href: 'https://docs.google.com/forms/d/e/1FAIpQLSdSLh8WSBPCpgwEx9ix2_SA_XXSWirfh_YH6AK1xolAACK3Cw/viewform', label: 'Open Unsponsored Approval Form ↗' }} />
          )}

          {tab === 'Individual Project' && (
            <TabBlock
              title="Individual Service Project"
              body="The Individual Service Project (ISP) must be your own original idea — not run through another club, organization, or non-profit. ISPs must also be group projects, accessible to all NHS members."
              steps={[
                "Develop your project idea using the Individual Service Project 12 W's template.",
                'If your project involves an outside organization, the organization must email the adviser directly.',
                'Confirm the organization needs volunteers before the project is approved.',
                'Submit the project proposal to the executive committee for review.',
                'Lead the event — and earn additional hours for organizing, where justifiable.',
              ]}
              cta={{ href: 'https://docs.google.com/forms/d/e/1FAIpQLSeRm56JFBzJg-mvex7Ew-8ATsjKdGh87_9Rxygd3UMz52u6FQ/viewform', label: 'Open Individual Service Project Form ↗' }} />
          )}

          {tab === 'Validation' && (
            <TabBlock
              title="Submitting Your Hours"
              body="This year, all hour validation has moved to electronic forms. Each completed event requires its own validation form, submitted within 48 hours."
              items={[
                { kicker: 'Required', title: 'Electronic Validation Form', meta: 'One submission per event — no exceptions' },
                { kicker: 'Required', title: 'Photo Evidence', meta: 'A clear photo of you at the event' },
                { kicker: 'Recommended', title: 'Digital Backup', meta: 'Take a screenshot of every form submission' },
              ]}
              warning="If a form is lost and you do not have a digital record, your service hours will not be accepted. It is your responsibility to keep records."
              cta={{ href: 'https://docs.google.com/forms/d/e/1FAIpQLSefh5iEXfOMzuLLUAtlXQNIAgr6fRRTHN10nE8XH--9eA9v7w/viewform', label: 'Open Validation Form ↗' }} />
          )}
        </div>
      </section>

      {/* Hour reminder */}
      <section style={{ padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', background: 'var(--parchment)', border: '1px solid var(--rule)', padding: '32px 40px' }}>
          <div className="eyebrow">A Reminder</div>
          <h3 style={{ fontSize: 22, marginTop: 8, marginBottom: 14 }}>No double-dipping.</h3>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.65, maxWidth: 760 }}>
            Service hours earned for NHS may not be shared with another club, organization, or honor society. Hours used to fulfill another group's requirement cannot be counted toward your 20-hour annual NHS minimum.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Volunteer;
