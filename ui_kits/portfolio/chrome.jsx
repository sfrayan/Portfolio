// ============================================================
// RayanOS — chrome.jsx
// Boot screen, wallpaper, top menubar, dock, draggable window.
// ============================================================
const { useState, useEffect, useRef, useCallback } = React;

// ---- Wallpaper: aubergine gradient + grid + glow -------------
function Wallpaper() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--os-bg-deep)' }} />
      <div style={{ position: 'absolute', inset: 0, background:
        'radial-gradient(110% 80% at 78% -8%, rgba(255,107,74,0.16), transparent 55%),' +
        'radial-gradient(90% 70% at 12% 108%, rgba(110,231,183,0.10), transparent 55%)' }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.5, backgroundImage:
        'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '44px 44px' }} />
    </div>
  );
}

// ---- Boot / login screen -------------------------------------
function Boot({ lang, onEnter }) {
  const t = T[lang];
  const [lines, setLines] = useState([]);
  const [ready, setReady] = useState(false);
  const seq = [
    'RayanOS v3.0 — booting…',
    '[ ok ] mounting /home/rayan',
    '[ ok ] starting network stack · eth0 up',
    '[ ok ] loading skills.service (30 units)',
    '[ ok ] supervision.app · jumeau.app ready',
    '[ ok ] welcome.',
  ];
  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setLines(seq.slice(0, i));
      if (i >= seq.length) { clearInterval(iv); setTimeout(() => setReady(true), 350); }
    }, 230);
    return () => clearInterval(iv);
  }, []);
  return (
    <div onClick={() => ready && onEnter()} style={{
      position: 'absolute', inset: 0, zIndex: 100, background: 'var(--os-bg-deep)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      cursor: ready ? 'pointer' : 'default', fontFamily: 'var(--font-mono)',
    }}>
      <Wallpaper />
      <div style={{ position: 'relative', width: 420, maxWidth: '86vw' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: 'linear-gradient(135deg, var(--coral), #C9402A)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--glow-coral)',
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: '#fff' }}>R</div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--fg-1)', letterSpacing: '-0.02em' }}>Rayan<span style={{ color: 'var(--coral)' }}>OS</span></div>
            <div style={{ fontSize: 12, color: 'var(--fg-3)' }}>{t.boot_subtitle}</div>
          </div>
        </div>
        <div style={{ fontSize: 12.5, lineHeight: 1.9, color: 'var(--fg-3)', minHeight: 150 }}>
          {lines.map((l, i) => (
            <div key={i} style={{ color: l.includes('[ ok ]') ? 'var(--fg-2)' : 'var(--mint)' }}>
              {l.includes('[ ok ]')
                ? <><span style={{ color: 'var(--mint)' }}>[ ok ]</span>{l.replace('[ ok ]', '')}</>
                : l}
            </div>
          ))}
        </div>
        <div style={{ height: 44, marginTop: 18 }}>
          {ready && (
            <button onClick={onEnter} style={{
              fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--os-bg-deep)', fontWeight: 600,
              background: 'var(--coral)', border: 'none', borderRadius: 'var(--radius-sm)',
              padding: '11px 22px', cursor: 'pointer', boxShadow: 'var(--glow-coral)',
              display: 'inline-flex', alignItems: 'center', gap: 8, animation: 'rosFade 0.5s var(--ease-out)',
            }}>
              <Icon name="log-in" size={15} /> {t.login} → rayan
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ---- Self-contained clock (keeps re-renders out of App) ------
function Clock({ lang }) {
  const [clock, setClock] = useState('');
  useEffect(() => {
    const tick = () => setClock(new Date().toLocaleTimeString(lang === 'fr' ? 'fr-FR' : 'en-US', { hour: '2-digit', minute: '2-digit' }));
    tick(); const iv = setInterval(tick, 1000); return () => clearInterval(iv);
  }, [lang]);
  return <span style={{ color: 'var(--fg-1)', minWidth: 44, textAlign: 'right' }}>{clock}</span>;
}

// ---- Top menubar ---------------------------------------------
function MenuBar({ lang, setLang, activeApp, onOpenAbout }) {
  const t = T[lang];
  return (
    <div style={{
      position: 'relative', zIndex: 60, height: 38, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 14px', background: 'var(--glass-bg)',
      backdropFilter: 'var(--blur-glass)', WebkitBackdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--os-line)', fontFamily: 'var(--font-mono)', fontSize: 12.5,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span onClick={onOpenAbout} style={{ display: 'flex', alignItems: 'center', gap: 7, cursor: 'pointer', color: 'var(--coral)', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
          <Icon name="hexagon" size={15} /> RayanOS
        </span>
        <span style={{ color: 'var(--fg-1)', fontWeight: 600 }}>{activeApp || t.menu_about}</span>
        <span onClick={onOpenAbout} style={{ color: 'var(--fg-3)', cursor: 'pointer' }}>{t.menu_help}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--fg-2)' }}>
        <button onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} title="FR / EN" style={{
          fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-1)', background: 'var(--os-surface-2)',
          border: '1px solid var(--os-line)', borderRadius: 'var(--radius-pill)', padding: '3px 10px',
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="languages" size={13} /> {lang.toUpperCase()}
        </button>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><StatusDot color="var(--mint)" size={7} /> {t.online}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Icon name="wifi" size={14} /></span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Icon name="battery-medium" size={15} /> 87%</span>
        <Clock lang={lang} />
      </div>
    </div>
  );
}

// ---- Dock ----------------------------------------------------
function Dock({ lang, apps, openIds, onOpen }) {
  return (
    <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', zIndex: 60 }}>
      <div style={{
        display: 'flex', gap: 8, padding: '9px 12px', background: 'var(--glass-bg)',
        backdropFilter: 'var(--blur-glass)', WebkitBackdropFilter: 'var(--blur-glass)',
        border: '1px solid var(--os-line)', borderRadius: 18, boxShadow: 'var(--shadow-lg)',
      }}>
        {apps.map(a => (
          <button key={a.id} onClick={() => onOpen(a.id)} title={a.label[lang]} className="ros-dock-item" style={{
            width: 46, height: 46, borderRadius: 13, border: '1px solid var(--os-line)',
            background: a.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', position: 'relative', color: a.fg, transition: 'transform var(--dur-base) var(--ease-snap)',
          }}>
            <Icon name={a.icon} size={21} stroke={2} />
            {openIds.includes(a.id) && <span style={{ position: 'absolute', bottom: -5, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: '50%', background: 'var(--fg-2)' }} />}
          </button>
        ))}
      </div>
    </div>
  );
}

// ---- Draggable window ----------------------------------------
function Window({ win, focused, onFocus, onClose, lang, children }) {
  const [pos, setPos] = useState({ x: win.x, y: win.y });
  const drag = useRef(null);

  const onDown = (e) => {
    onFocus(win.id);
    const startX = e.clientX, startY = e.clientY, ox = pos.x, oy = pos.y;
    drag.current = { startX, startY, ox, oy };
    const move = (ev) => {
      const d = drag.current; if (!d) return;
      setPos({ x: Math.max(0, d.ox + ev.clientX - d.startX), y: Math.max(0, d.oy + ev.clientY - d.startY) });
    };
    const up = () => { drag.current = null; window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up); };
    window.addEventListener('mousemove', move); window.addEventListener('mouseup', up);
  };

  return (
    <div onMouseDown={() => onFocus(win.id)} className="ros-window" style={{
      position: 'absolute', left: pos.x, top: pos.y, width: win.w, zIndex: win.z,
      background: 'var(--os-surface)', border: '1px solid var(--os-line)', borderRadius: 'var(--radius-lg)',
      boxShadow: focused ? 'var(--shadow-window)' : 'var(--shadow-md)', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      maxHeight: win.h || 560,
    }}>
      {/* title bar */}
      <div onMouseDown={onDown} style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px', height: 40, cursor: 'grab',
        background: 'var(--os-surface-2)', borderBottom: '1px solid var(--os-line)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', gap: 7 }}>
          <button onClick={(e) => { e.stopPropagation(); onClose(win.id); }} className="ros-tl" style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57', border: 'none', cursor: 'pointer' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)', marginLeft: 6, display: 'flex', alignItems: 'center', gap: 7 }}>
          <Icon name={win.icon} size={13} color={win.accent} /> {win.title[lang]}
        </span>
      </div>
      {/* body */}
      <div style={{ overflow: 'auto', flex: 1 }}>{children}</div>
    </div>
  );
}

Object.assign(window, { Wallpaper, Boot, MenuBar, Dock, Window });
