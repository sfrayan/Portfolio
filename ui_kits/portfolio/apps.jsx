// ============================================================
// RayanOS — apps.jsx (part 1)
// AboutApp · ProjectsApp · ContactApp
// ============================================================

// ---- À propos / whoami ---------------------------------------
function AboutApp({ lang }) {
  const t = T[lang];
  return (
    <div style={{ padding: '24px 26px', fontFamily: 'var(--font-display)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
        <div style={{ width: 62, height: 62, borderRadius: 16, background: 'linear-gradient(135deg, var(--coral), #C9402A)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--glow-coral)',
          fontWeight: 800, fontSize: 27, color: '#fff', flexShrink: 0 }}>R</div>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--mint)' }}>$ {t.about_title}</div>
          <div style={{ fontWeight: 800, fontSize: 24, color: 'var(--fg-1)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Rayan SAID FARAH</div>
          <div style={{ fontSize: 13, color: 'var(--fg-2)', marginTop: 2 }}>{t.about_role}</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
        {t.about_traits.map(tr => <Pill key={tr} accent="var(--coral)">{tr}</Pill>)}
      </div>

      <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--fg-2)', marginBottom: 14 }}>{t.about_lead}</p>
      <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--fg-2)', marginBottom: 22 }}>{t.about_goal}</p>

      {/* now status */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: 'var(--os-surface-2)',
        border: '1px solid var(--os-line)', borderRadius: 'var(--radius-md)', marginBottom: 24 }}>
        <StatusDot color="var(--mint)" />
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.18em' }}>{t.about_now}</div>
          <div style={{ fontSize: 14, color: 'var(--fg-1)', fontWeight: 600 }}>{t.about_now_val}</div>
        </div>
      </div>

      {/* journey timeline */}
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 14 }}>{t.parcours}</div>
      <div style={{ position: 'relative', paddingLeft: 22 }}>
        <div style={{ position: 'absolute', left: 5, top: 4, bottom: 4, width: 2, background: 'var(--os-line)' }} />
        {JOURNEY.map((j, i) => (
          <div key={i} style={{ position: 'relative', marginBottom: 16 }}>
            <span style={{ position: 'absolute', left: -21, top: 4, width: 12, height: 12, borderRadius: '50%',
              background: j.current ? 'var(--coral)' : j.type === 'work' ? 'var(--mint)' : 'var(--os-surface-3)',
              border: '2px solid var(--os-surface)', boxShadow: j.current ? 'var(--glow-coral)' : 'none' }} />
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: j.current ? 'var(--coral)' : 'var(--fg-3)', minWidth: 58 }}>{j.year}</span>
              <div>
                <div style={{ fontSize: 14, color: 'var(--fg-1)', fontWeight: 600 }}>{j[lang]}</div>
                <div style={{ fontSize: 12.5, color: 'var(--fg-3)' }}>{j.sub}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Projets / file explorer ---------------------------------
const KIND_META = {
  web: { icon: 'globe', color: 'var(--noc-phosphor)' },
  sec: { icon: 'shield-half', color: 'var(--noc-amber)' },
  ai:  { icon: 'brain-circuit', color: 'var(--coral)' },
  iot: { icon: 'cpu', color: 'var(--noc-cyan)' },
};

function ProjectsApp({ lang }) {
  const t = T[lang];
  const [sel, setSel] = useState(PROJECTS[0].id);
  const p = PROJECTS.find(x => x.id === sel);
  const meta = KIND_META[p.kind];
  return (
    <div style={{ display: 'flex', height: 460, fontFamily: 'var(--font-display)' }}>
      {/* file list */}
      <div style={{ width: 234, borderRight: '1px solid var(--os-line)', background: 'var(--os-bg)', flexShrink: 0, overflow: 'auto' }}>
        <div style={{ padding: '12px 14px', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', borderBottom: '1px solid var(--os-line-soft)', display: 'flex', alignItems: 'center', gap: 7 }}>
          <Icon name="folder-open" size={14} color="var(--gold)" /> ~/projets
        </div>
        {PROJECTS.map(pr => {
          const m = KIND_META[pr.kind];
          const active = pr.id === sel;
          return (
            <button key={pr.id} onClick={() => setSel(pr.id)} style={{
              width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 10,
              padding: '9px 14px', background: active ? 'var(--coral-dim)' : 'transparent',
              borderLeft: active ? '2px solid var(--coral)' : '2px solid transparent', border: 'none',
              borderBottom: '1px solid var(--os-line-soft)', cursor: 'pointer', color: 'var(--fg-1)',
            }}>
              <Icon name={m.icon} size={16} color={m.color} />
              <span style={{ flex: 1 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: active ? 'var(--fg-1)' : 'var(--fg-2)' }}>{pr.id}.{pr.ext}</span>
              </span>
              {pr.featured && <Icon name="star" size={12} color="var(--gold)" />}
            </button>
          );
        })}
      </div>
      {/* detail */}
      <div style={{ flex: 1, padding: '22px 24px', overflow: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 42, height: 42, borderRadius: 11, background: 'var(--os-surface-2)', border: '1px solid var(--os-line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={meta.icon} size={22} color={meta.color} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 20, color: 'var(--fg-1)' }}>{p.name}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--fg-3)' }}>{p.id}.{p.ext}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <StatusDot color={p.status === 'live' ? 'var(--mint)' : 'var(--gold)'} size={7} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: p.status === 'live' ? 'var(--mint)' : 'var(--gold)' }}>
            {p.status === 'live' ? 'DÉPLOYÉ / LIVE' : 'EN COURS / WIP'}
          </span>
        </div>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--fg-2)', marginBottom: 18 }}>{p[lang]}</p>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 10 }}>{t.stack}</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
          {p.stack.map(s => <Pill key={s} accent="var(--fg-1)">{s}</Pill>)}
        </div>
        {p.repo && (
          <a href={p.repo} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 12.5,
            color: 'var(--os-bg-deep)', background: 'var(--coral)', padding: '9px 16px', borderRadius: 'var(--radius-sm)',
            textDecoration: 'none', fontWeight: 600 }}>
            <Icon name="github" size={15} /> {t.view_repo}
          </a>
        )}
      </div>
    </div>
  );
}

// ---- Contact -------------------------------------------------
function ContactApp({ lang }) {
  const t = T[lang];
  return (
    <div style={{ padding: '24px 26px', fontFamily: 'var(--font-display)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--mint)', marginBottom: 4 }}>$ ./connect.sh</div>
      <div style={{ fontWeight: 700, fontSize: 21, color: 'var(--fg-1)', marginBottom: 4 }}>{t.contact_title}</div>
      <div style={{ fontSize: 13, color: 'var(--fg-3)', marginBottom: 22 }}>{t.contact_sub}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {SOCIALS.map(s => (
          <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="ros-contact" style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', textDecoration: 'none',
            background: 'var(--os-surface-2)', border: '1px solid var(--os-line)', borderRadius: 'var(--radius-md)',
            transition: 'all var(--dur-base) var(--ease-out)',
          }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--os-surface-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name={s.icon} size={19} color="var(--coral)" />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>{s.label}</div>
              <div style={{ fontSize: 13.5, color: 'var(--fg-1)', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.handle}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { AboutApp, ProjectsApp, ContactApp, KIND_META });
