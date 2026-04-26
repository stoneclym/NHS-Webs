// Top navigation — serif wordmark + gold rule under header
const Nav = ({ active, onNavigate, density = 'comfortable' }) => {
  const tabs = ['Home', 'About', 'Membership', 'Volunteer', 'Meetings', 'Contact'];
  const padY = density === 'compact' ? 14 : 22;

  return (
    <header style={{
      background: 'var(--paper)',
      borderBottom: '1px solid var(--rule)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      {/* Top utility strip removed per chapter request — Est. date now lives in the footer */}

      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: `${padY}px 32px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 32,
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('Home'); }}
          style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: 'var(--navy-ink)' }}>
          <Crest size={42} color="var(--navy)" accent="var(--gold)" />
          <div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 19,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.01em',
            }}>Viking Chapter</div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 9.5,
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginTop: 4,
            }}>National Honor Society</div>
          </div>
        </a>

        <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {tabs.map((t) => {
            const isActive = active === t;
            return (
              <a key={t} href="#" onClick={(e) => { e.preventDefault(); onNavigate(t); }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: isActive ? 'var(--navy-ink)' : 'var(--muted)',
                  padding: '10px 16px',
                  borderBottom: isActive ? '2px solid var(--gold)' : '2px solid transparent',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => { if (!isActive) e.target.style.color = 'var(--navy)'; }}
                onMouseLeave={(e) => { if (!isActive) e.target.style.color = 'var(--muted)'; }}
              >{t}</a>
            );
          })}
          <a href="https://www.signupgenius.com/go/10C094BACAD2CA3F9CF8-50931733-nhsservice#/"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ marginLeft: 16, padding: '10px 18px', fontSize: 11 }}>
            Sign Up to Serve
          </a>
        </nav>
      </div>
    </header>
  );
};

const Footer = ({ onNavigate }) => (
  <footer style={{
    background: 'var(--navy-ink)',
    color: 'rgba(255,255,255,0.78)',
    padding: '64px 32px 32px',
    marginTop: 80,
  }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: 48,
        paddingBottom: 48,
        borderBottom: '1px solid rgba(255,255,255,0.12)',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <Crest size={48} color="white" accent="var(--gold-bright)" />
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: 'white', fontWeight: 700 }}>
                Viking Chapter
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-bright)', marginTop: 4 }}>
                National Honor Society
              </div>
            </div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 380, color: 'rgba(255,255,255,0.65)' }}>
            Recognizing and cultivating scholarship, service, leadership, and character among the students of John T. Hoggard High School.
          </p>
        </div>

        <FooterCol title="Chapter" links={[
          { label: 'Home' },
          { label: 'About' },
          { label: 'Membership' },
          { label: 'Volunteer' },
          { label: 'Meetings' },
          { label: 'Contact' }
        ]} onNavigate={onNavigate} />
        <FooterCol title="Resources" links={[
          { label: 'New Member Application', href: 'https://docs.google.com/forms/d/e/1FAIpQLSdKP4upRu9vt9dAIlTWX7mMUwR_GlhCT8rmG9WxK411pRIIBw/closedform?pli=1' },
          { label: 'Validation Form', href: 'https://docs.google.com/forms/d/e/1FAIpQLSefh5iEXfOMzuLLUAtlXQNIAgr6fRRTHN10nE8XH--9eA9v7w/viewform' },
          { label: 'Unsponsored Hours Form', href: 'https://docs.google.com/forms/d/e/1FAIpQLSdSLh8WSBPCpgwEx9ix2_SA_XXSWirfh_YH6AK1xolAACK3Cw/viewform' },
          { label: 'Individual Project Form', href: 'https://docs.google.com/forms/d/e/1FAIpQLSeRm56JFBzJg-mvex7Ew-8ATsjKdGh87_9Rxygd3UMz52u6FQ/viewform' },
          { label: 'Hoggard NHS Bylaws', href: 'https://docs.google.com/document/d/1vhIGKKLhcIoc7pW50SB5KiyrXypEz_BXvfccOZEg8M4/edit?usp=sharing' }
        ]} />
        <FooterCol title="School & National" links={[
          { label: 'Hoggard High School', href: 'https://hoggard.nhcs.net' },
          { label: 'NHS National', href: 'https://www.nationalhonorsociety.org' },
          { label: 'jthhonorsociety@gmail.com', href: 'mailto:jthhonorsociety@gmail.com' },
          { label: 'hunter.moody@nhcs.net', href: 'mailto:hunter.moody@nhcs.net' }
        ]} />
      </div>
      <div style={{
        paddingTop: 28,
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: "'Inter', sans-serif",
        fontSize: 11,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.45)',
      }}>
        <span>© 2026 Hoggard NHS · Viking Chapter · John T. Hoggard High School, Wilmington NC · Est. 1921</span>
        <span>Scholarship · Service · Leadership · Character</span>
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links, onNavigate }) => (
  <div>
    <div style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--gold-bright)',
      marginBottom: 18,
    }}>{title}</div>
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {links.map((l) => {
        const linkStyle = { color: 'rgba(255,255,255,0.78)', textDecoration: 'none', fontSize: 13, transition: 'color 0.15s' };
        const onEnter = (e) => { e.target.style.color = 'var(--gold-bright)'; };
        const onLeave = (e) => { e.target.style.color = 'rgba(255,255,255,0.78)'; };
        if (l.href) {
          const isMail = l.href.startsWith('mailto:');
          return (
            <li key={l.label}>
              <a href={l.href} target={isMail ? undefined : '_blank'} rel="noopener noreferrer"
                style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                {l.label}
              </a>
            </li>
          );
        }
        return (
          <li key={l.label}>
            <a href="#"
              onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(l.label); }}
              style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
              {l.label}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

window.Nav = Nav;
window.Footer = Footer;
window.FooterCol = FooterCol;
