// Concept 2 — RayanOS // OS expérimental
// Le portfolio comme système d'exploitation / window manager Linux ricé.
function RayanOsBoard() {
  const C = {
    bg: '#15131C', surface: '#1E1B28', surface2: '#262232', line: '#332E42',
    coral: '#FF6B4A', mint: '#6EE7B7', gold: '#FBBF6B', text: '#E9E4F2', dim: '#8E869F',
  };
  const disp = "'Sora', sans-serif";
  const mono = "'JetBrains Mono', monospace";

  const wrap = {
    width: '100%', minHeight: '100%', color: C.text, fontFamily: disp,
    background: `radial-gradient(120% 80% at 80% -10%, rgba(255,107,74,0.10), transparent 60%), ${C.bg}`,
    position: 'relative', overflow: 'hidden',
  };
  const pad = { padding: '26px 28px' };
  const dot = (c) => ({ width: 9, height: 9, borderRadius: '50%', background: c });

  return (
    <div style={wrap}>
      {/* top menubar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 18px', background: 'rgba(20,18,26,0.7)', borderBottom: `1px solid ${C.line}`, fontFamily: mono, fontSize: 11.5 }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', color: C.dim }}>
          <span style={{ color: C.coral, fontWeight: 700 }}>◆ rayan</span>
          <span style={{ color: C.text }}>1</span><span>2</span><span>3</span>
        </div>
        <div style={{ display: 'flex', gap: 14, color: C.dim }}><span>♪</span><span>↯ 87%</span><span style={{ color: C.mint }}>21:04</span></div>
      </div>

      {/* hero */}
      <div style={{ ...pad }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.3em', color: C.coral, marginBottom: 14 }}>CONCEPT 02</div>
        <div style={{ fontFamily: disp, fontWeight: 800, fontSize: 44, lineHeight: 0.98, letterSpacing: '-0.02em' }}>Rayan<span style={{ color: C.coral }}>OS</span></div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: C.dim, marginTop: 14, maxWidth: 440 }}>
          Le portfolio <span style={{ color: C.mint }}>est</span> un système d'exploitation. Window manager en mosaïque, terminal, dock, gestionnaire de fichiers. On <span style={{ color: C.text }}>navigue</span> ses projets comme des apps, on installe ses compétences au <code style={{ fontFamily: mono, color: C.gold }}>pacman&nbsp;-S</code>. Esprit Linux ricé, chaud et soigné.
        </p>
      </div>

      {/* palette */}
      <div style={{ ...pad, paddingTop: 4 }}>
        <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.24em', color: C.dim, marginBottom: 12 }}>PALETTE</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 8 }}>
          {[['#15131C', 'BASE'], ['#262232', 'SURF'], ['#FF6B4A', 'CORAL'], ['#6EE7B7', 'MINT'], ['#FBBF6B', 'GOLD'], ['#E9E4F2', 'TEXT']].map(([hex, n]) => (
            <div key={n}>
              <div style={{ height: 46, background: hex, borderRadius: 8, border: `1px solid ${C.line}` }} />
              <div style={{ fontFamily: mono, fontSize: 9, color: C.dim, marginTop: 5 }}>{n}</div>
              <div style={{ fontFamily: mono, fontSize: 8.5, color: C.dim, opacity: 0.6 }}>{hex}</div>
            </div>
          ))}
        </div>
      </div>

      {/* type */}
      <div style={{ ...pad, paddingTop: 14 }}>
        <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.24em', color: C.dim, marginBottom: 10 }}>TYPOGRAPHIE</div>
        <div style={{ display: 'flex', gap: 22, alignItems: 'baseline', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: disp, fontWeight: 800, fontSize: 26 }}>Sora</div>
            <div style={{ fontFamily: mono, fontSize: 10, color: C.dim }}>Display · interface</div>
          </div>
          <div>
            <div style={{ fontFamily: mono, fontSize: 22, color: C.mint }}>JetBrains Mono</div>
            <div style={{ fontFamily: mono, fontSize: 10, color: C.dim }}>Terminal · code</div>
          </div>
        </div>
      </div>

      {/* tiled windows mock */}
      <div style={{ ...pad, paddingTop: 14 }}>
        <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.24em', color: C.dim, marginBottom: 12 }}>APERÇU · BUREAU EN MOSAÏQUE</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {/* terminal window */}
          <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 10, overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: 6, padding: '9px 12px', background: C.surface2, alignItems: 'center' }}>
              <span style={dot(C.coral)} /><span style={dot(C.gold)} /><span style={dot(C.mint)} />
              <span style={{ fontFamily: mono, fontSize: 10, color: C.dim, marginLeft: 6 }}>~/whoami</span>
            </div>
            <div style={{ fontFamily: mono, fontSize: 10.5, lineHeight: 1.8, padding: 13, color: C.text }}>
              <div><span style={{ color: C.coral }}>$</span> whoami</div>
              <div style={{ color: C.mint }}>curieux · ambitieux · créatif</div>
              <div style={{ marginTop: 6 }}><span style={{ color: C.coral }}>$</span> pacman -S</div>
              <div style={{ color: C.gold }}>react next ts linux ▮</div>
            </div>
          </div>
          {/* file explorer window */}
          <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 10, overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: 6, padding: '9px 12px', background: C.surface2, alignItems: 'center' }}>
              <span style={dot(C.coral)} /><span style={dot(C.gold)} /><span style={dot(C.mint)} />
              <span style={{ fontFamily: mono, fontSize: 10, color: C.dim, marginLeft: 6 }}>~/Projets</span>
            </div>
            <div style={{ padding: 12 }}>
              {[['📁', 'quiz-master'], ['📁', 'pentest-suite'], ['📁', 'fastfoodbike'], ['📄', 'esp32-twin.ino']].map(([i, n]) => (
                <div key={n} style={{ display: 'flex', gap: 9, alignItems: 'center', fontFamily: mono, fontSize: 11, padding: '4px 6px', borderRadius: 5, color: C.text }}>
                  <span>{i}</span><span>{n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* dock */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 14, padding: '10px 0' }}>
          {[C.coral, C.mint, C.gold, C.text, C.dim].map((c, i) => (
            <div key={i} style={{ width: 34, height: 34, borderRadius: 10, background: C.surface2, border: `1px solid ${C.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ width: 14, height: 14, borderRadius: 4, background: c }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
window.RayanOsBoard = RayanOsBoard;
