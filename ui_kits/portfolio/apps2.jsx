// ============================================================
// RayanOS — apps2.jsx (part 2)
// SupervisionApp (NOC) · JumeauApp (blueprint) · TerminalApp
// ============================================================

// ---- supervision.app : NOC dashboard -------------------------
const NOC_ACCENT = { phosphor: 'var(--noc-phosphor)', cyan: 'var(--noc-cyan)', amber: 'var(--noc-amber)' };

function SupervisionApp({ lang }) {
  const t = T[lang];
  const scan = {
    position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.6, borderRadius: 'inherit',
    backgroundImage: 'repeating-linear-gradient(to bottom, rgba(91,242,168,0.03) 0px, rgba(91,242,168,0.03) 1px, transparent 1px, transparent 3px)',
  };
  return (
    <div style={{ position: 'relative', background: '#08100C', padding: '20px 22px', fontFamily: 'var(--font-mono)', minHeight: 460 }}>
      <div style={scan} />
      {/* header */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'var(--noc-phosphor)', fontSize: 12, letterSpacing: '0.16em' }}>
            <StatusDot color="var(--noc-phosphor)" /> RSF-NOC // {t.online}
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: '#EAF2EC', marginTop: 6 }}>{t.supervision_title}</div>
          <div style={{ fontSize: 12, color: '#5C7565' }}>{t.supervision_sub}</div>
        </div>
        <div style={{ display: 'flex', gap: 22, textAlign: 'right' }}>
          <div><div style={{ fontSize: 22, color: 'var(--noc-cyan)', fontWeight: 700 }}>30</div><div style={{ fontSize: 10, color: '#5C7565' }}>{t.systems}</div></div>
          <div><div style={{ fontSize: 22, color: 'var(--noc-phosphor)', fontWeight: 700 }}>99.9%</div><div style={{ fontSize: 10, color: '#5C7565' }}>{t.uptime}</div></div>
        </div>
      </div>
      {/* subsystem grid */}
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {SKILL_CATEGORIES.map(cat => {
          const ac = NOC_ACCENT[cat.accent];
          return (
            <div key={cat.id} style={{ background: 'rgba(12,26,18,0.7)', border: '1px solid #16301F', borderRadius: 8, padding: 13 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 11 }}>
                <Icon name={cat.icon} size={14} color={ac} />
                <span style={{ fontSize: 11.5, color: '#A9C4B2', letterSpacing: '0.06em', flex: 1 }}>{cat[lang]}</span>
                <span style={{ fontSize: 10, color: ac }}>{cat.skills.length} {t.techs}</span>
              </div>
              {cat.skills.map(([name, val]) => (
                <div key={name} style={{ marginBottom: 7 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 3 }}>
                    <span style={{ color: '#8FB09C' }}>{name}</span>
                    <span style={{ color: ac }}>{val}%</span>
                  </div>
                  <div style={{ height: 3, background: '#0B1B12', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{ width: val + '%', height: '100%', background: ac, boxShadow: `0 0 6px ${ac}` }} />
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---- jumeau.app : living blueprint ---------------------------
function JumeauApp({ lang }) {
  const t = T[lang];
  const ink = 'var(--twin-blue)', sig = 'var(--twin-signal)', teal = 'var(--twin-teal)';
  const grid = {
    position: 'absolute', inset: 0, opacity: 0.5,
    backgroundImage: 'linear-gradient(rgba(111,168,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(111,168,255,0.08) 1px, transparent 1px)',
    backgroundSize: '20px 20px', pointerEvents: 'none',
  };
  const mape = ['MONITOR', 'ANALYZE', 'PLAN', 'EXECUTE'];
  const modules = PROJECTS.filter(p => p.kind === 'iot' || p.featured).slice(0, 3);
  return (
    <div style={{ position: 'relative', background: '#0A1322', padding: '20px 22px', fontFamily: 'var(--font-mono)', minHeight: 460 }}>
      <div style={grid} />
      {/* title block */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: `1.5px solid ${ink}`, paddingBottom: 12, marginBottom: 18 }}>
        <div>
          <div style={{ color: sig, fontSize: 11, letterSpacing: '0.22em' }}>RSF · DIGITAL-TWIN</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: '#DCE8FA', marginTop: 5 }}>{t.jumeau_title}</div>
          <div style={{ fontSize: 12, color: '#6E86A8' }}>{t.jumeau_sub}</div>
        </div>
        <div style={{ fontSize: 11, color: '#6E86A8', textAlign: 'right' }}>ÉCH. 1:1<br/>RÉV. 26</div>
      </div>

      {/* MAPE-K loop */}
      <div style={{ position: 'relative', marginBottom: 18 }}>
        <div style={{ fontSize: 10.5, color: '#6E86A8', letterSpacing: '0.16em', marginBottom: 10 }}>BOUCLE D'AUTO-RÉGULATION · MAPE-K</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          {mape.map((m, i) => (
            <React.Fragment key={m}>
              <div style={{ border: `1.4px solid ${i === 0 ? sig : ink}`, color: i === 0 ? sig : '#BFD2EE', borderRadius: 3, padding: '9px 12px', fontSize: 11, fontWeight: 600, background: 'rgba(13,28,48,0.6)' }}>{m}</div>
              {i < 3 && <Icon name="arrow-right" size={15} color={teal} />}
            </React.Fragment>
          ))}
          <Icon name="rotate-ccw" size={15} color={teal} />
          <span style={{ fontSize: 10.5, color: teal }}>KNOWLEDGE</span>
        </div>
      </div>

      {/* module schematics */}
      <div style={{ position: 'relative', fontSize: 10.5, color: '#6E86A8', letterSpacing: '0.16em', marginBottom: 10 }}>MODULES DU SYSTÈME</div>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        {modules.map((m, i) => (
          <div key={m.id} style={{ border: `1.5px solid ${ink}`, borderRadius: 3, background: 'rgba(13,28,48,0.55)', padding: 13, position: 'relative' }}>
            <div style={{ position: 'absolute', top: -1, left: -1, width: 12, height: 12, borderTop: `2px solid ${sig}`, borderLeft: `2px solid ${sig}` }} />
            <div style={{ fontSize: 9.5, color: '#6E86A8' }}>MOD.0{i + 1}</div>
            <Icon name={KIND_META[m.kind].icon} size={22} color={teal} style={{ margin: '8px 0' }} />
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#DCE8FA', lineHeight: 1.2 }}>{m.name}</div>
            <div style={{ fontSize: 10.5, color: '#7E96B8', marginTop: 5, lineHeight: 1.45 }}>{m[lang].slice(0, 64)}…</div>
            <div style={{ marginTop: 9, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${ink}`, paddingTop: 7 }}>
              <span style={{ fontSize: 9.5, color: sig }}>◄── {m.stack[0]} ──►</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Terminal with easter eggs -------------------------------
function TerminalApp({ lang, onKonami }) {
  const t = T[lang];
  const [history, setHistory] = useState([
    { type: 'sys', text: 'RayanOS terminal — bash 5.2' },
    { type: 'sys', text: t.terminal_hint },
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => { if (endRef.current) endRef.current.scrollTop = endRef.current.scrollHeight; }, [history]);

  const COMMANDS = {
    help: () => ['Commandes : help · whoami · ls · skills · projects · contact · neofetch · matrix · konami · coffee · sudo · clear'],
    whoami: () => ['rayan — curieux · ambitieux · créatif', 'Fullstack dev · cybersécurité · IA · Linux enjoyer'],
    ls: () => ['about.app  projets/  supervision.app  jumeau.app  contact.app  secrets/.hidden'],
    skills: () => SKILL_CATEGORIES.map(c => `${c[lang].padEnd(30)} ${c.skills.length} techs`),
    projects: () => PROJECTS.map(p => `${(p.id + '.' + p.ext).padEnd(22)} ${p.status === 'live' ? '● live' : '◐ wip'}`),
    contact: () => SOCIALS.map(s => `${s.label.padEnd(13)} ${s.handle}`),
    date: () => [new Date().toString()],
    sudo: () => ['[sudo] password for rayan: ', 'nice try 😏 — accès refusé. Va voir le terminal, pas root.'],
    coffee: () => ['      ( (', '       ) )', '    ........', "    |      |]   ☕  brewing... 100% caféine, 0% bug.", '    \\      /', "     `----'"],
    neofetch: () => [
      'rayan@rayanos',
      '─────────────',
      'OS:      RayanOS 3.0 (web)',
      'Host:    Portfolio / Sorbonne Paris Nord',
      'Kernel:  curiosity-6.0-ambitious',
      'Shell:   bash (geek mode)',
      'Skills:  30 units / 8 categories',
      'Stack:   Next.js · React · TS · Python · Linux',
      'Now:     SmartOcean Research · Norway',
    ],
    matrix: () => Array.from({ length: 5 }, () =>
      Array.from({ length: 46 }, () => '01ｱｲｳｴｵｶｷ7#%&'[Math.floor(Math.random() * 14)]).join('')),
    konami: () => { if (onKonami) onKonami(); return ['↑↑↓↓←→←→ B A — easter egg unlocked ✦ welcome, player one.']; },
    clear: () => '__CLEAR__',
  };

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase();
    const out = [{ type: 'cmd', text: raw }];
    if (cmd === '') { setHistory(h => [...h, ...out]); return; }
    const fn = COMMANDS[cmd];
    if (fn) {
      const res = fn();
      if (res === '__CLEAR__') { setHistory([]); return; }
      res.forEach(line => out.push({ type: 'out', text: line }));
    } else {
      out.push({ type: 'err', text: `command not found: ${cmd} — tape 'help'` });
    }
    setHistory(h => [...h, ...out]);
  };

  const onKey = (e) => { if (e.key === 'Enter') { run(input); setInput(''); } };

  return (
    <div onClick={() => inputRef.current && inputRef.current.focus()} style={{ background: '#0C0A12', minHeight: 380, fontFamily: 'var(--font-mono)', cursor: 'text' }}>
      <div ref={endRef} style={{ padding: '16px 18px', maxHeight: 420, overflow: 'auto', fontSize: 12.5, lineHeight: 1.7 }}>
        {history.map((l, i) => (
          <div key={i} style={{
            color: l.type === 'cmd' ? 'var(--fg-1)' : l.type === 'err' ? 'var(--alert)' : l.type === 'sys' ? 'var(--fg-3)' : 'var(--mint)',
            whiteSpace: 'pre-wrap', wordBreak: 'break-word',
          }}>
            {l.type === 'cmd' && <span style={{ color: 'var(--coral)' }}>rayan@rayanos:~$ </span>}
            {l.text}
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: 'var(--coral)' }}>rayan@rayanos:~$&nbsp;</span>
          <input ref={inputRef} value={input} onChange={e => setInput(e.target.value)} onKeyDown={onKey} autoFocus spellCheck={false}
            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--fg-1)', fontFamily: 'var(--font-mono)', fontSize: 12.5, caretColor: 'var(--mint)' }} />
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SupervisionApp, JumeauApp, TerminalApp });
