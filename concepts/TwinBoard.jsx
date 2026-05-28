// Concept 3 — Jumeau Numérique // Atelier d'ingénierie
// Le portfolio comme blueprint vivant : télémétrie, schémas techniques, boucle MAPE-K.
function TwinBoard() {
  const C = {
    paper: '#ECEFF1', paper2: '#E2E7EB', ink: '#13315C', line: '#9FB3C8',
    signal: '#F0663F', teal: '#1FA89B', text: '#1A2A3A', dim: '#5E7388',
  };
  const disp = "'Archivo', sans-serif";
  const mono = "'IBM Plex Mono', monospace";

  const wrap = {
    width: '100%', minHeight: '100%', color: C.text, fontFamily: disp,
    background: `${C.paper}`,
    backgroundImage: `linear-gradient(${C.line}22 1px, transparent 1px), linear-gradient(90deg, ${C.line}22 1px, transparent 1px)`,
    backgroundSize: '22px 22px',
    position: 'relative', overflow: 'hidden',
  };
  const pad = { padding: '26px 28px' };
  const tick = { position: 'absolute', background: C.signal };

  return (
    <div style={wrap}>
      {/* corner crop marks */}
      <div style={{ ...tick, top: 14, left: 14, width: 18, height: 2 }} />
      <div style={{ ...tick, top: 14, left: 14, width: 2, height: 18 }} />
      <div style={{ ...tick, top: 14, right: 14, width: 18, height: 2 }} />
      <div style={{ ...tick, top: 14, right: 14, width: 2, height: 18 }} />

      {/* drawing title block */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 28px', borderBottom: `1.5px solid ${C.ink}`, fontFamily: mono, fontSize: 11, color: C.dim }}>
        <span style={{ letterSpacing: '0.12em' }}>RSF · DIGITAL-TWIN</span>
        <span>ÉCH. 1:1 · RÉV. 26</span>
      </div>

      {/* hero */}
      <div style={{ ...pad }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.3em', color: C.signal, marginBottom: 14 }}>CONCEPT 03</div>
        <div style={{ fontFamily: disp, fontWeight: 800, fontSize: 38, lineHeight: 1.0, color: C.ink, letterSpacing: '-0.01em' }}>JUMEAU<br/>NUMÉRIQUE</div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: C.dim, marginTop: 14, maxWidth: 450 }}>
          Le portfolio est un <span style={{ color: C.ink, fontWeight: 600 }}>plan technique vivant</span>. Schémas cotés, télémétrie de capteurs, boucle d'auto-régulation <span style={{ color: C.signal }}>MAPE-K</span>. Tes projets sont des modules d'un système connecté qu'on inspecte, mesure et fait tourner — clin d'œil à SmartOcean &amp; Home Assistant.
        </p>
      </div>

      {/* palette */}
      <div style={{ ...pad, paddingTop: 2 }}>
        <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.24em', color: C.dim, marginBottom: 12 }}>PALETTE</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 8 }}>
          {[['#ECEFF1', 'PAPER'], ['#13315C', 'INK'], ['#F0663F', 'SIGNAL'], ['#1FA89B', 'TEAL'], ['#9FB3C8', 'LINE'], ['#1A2A3A', 'TEXT']].map(([hex, n]) => (
            <div key={n}>
              <div style={{ height: 46, background: hex, borderRadius: 2, border: `1px solid ${C.line}` }} />
              <div style={{ fontFamily: mono, fontSize: 9, color: C.dim, marginTop: 5 }}>{n}</div>
              <div style={{ fontFamily: mono, fontSize: 8.5, color: C.dim, opacity: 0.7 }}>{hex}</div>
            </div>
          ))}
        </div>
      </div>

      {/* type */}
      <div style={{ ...pad, paddingTop: 14 }}>
        <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.24em', color: C.dim, marginBottom: 10 }}>TYPOGRAPHIE</div>
        <div style={{ display: 'flex', gap: 22, alignItems: 'baseline', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: disp, fontWeight: 800, fontSize: 26, color: C.ink }}>Archivo</div>
            <div style={{ fontFamily: mono, fontSize: 10, color: C.dim }}>Display · grotesque technique</div>
          </div>
          <div>
            <div style={{ fontFamily: mono, fontSize: 21, color: C.signal }}>IBM Plex Mono</div>
            <div style={{ fontFamily: mono, fontSize: 10, color: C.dim }}>Cotes · données</div>
          </div>
        </div>
      </div>

      {/* schematic mock */}
      <div style={{ ...pad, paddingTop: 14 }}>
        <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.24em', color: C.dim, marginBottom: 12 }}>APERÇU · SCHÉMA &amp; TÉLÉMÉTRIE</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {/* MAPE-K loop */}
          <div style={{ background: '#fff', border: `1.5px solid ${C.ink}`, borderRadius: 3, padding: 14, position: 'relative' }}>
            <div style={{ fontFamily: mono, fontSize: 9.5, color: C.dim, marginBottom: 12, letterSpacing: '0.1em' }}>BOUCLE MAPE-K</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
              {['MONITOR', 'ANALYZE', 'EXECUTE', 'PLAN'].map((s, i) => (
                <div key={s} style={{ border: `1.2px solid ${i === 0 ? C.signal : C.line}`, color: i === 0 ? C.signal : C.ink, borderRadius: 2, padding: '8px 4px', textAlign: 'center', fontFamily: mono, fontSize: 9.5, fontWeight: 600 }}>{s}</div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 9, fontFamily: mono, fontSize: 9, color: C.teal }}>↻ KNOWLEDGE</div>
          </div>
          {/* telemetry gauges */}
          <div style={{ background: '#fff', border: `1.5px solid ${C.ink}`, borderRadius: 3, padding: 14 }}>
            <div style={{ fontFamily: mono, fontSize: 9.5, color: C.dim, marginBottom: 12, letterSpacing: '0.1em' }}>CAPTEURS // SKILLS</div>
            {[['NEXT.JS', 92, C.signal], ['SÉCURITÉ', 88, C.teal], ['RÉSEAU', 90, C.ink]].map(([n, v, c]) => (
              <div key={n} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: mono, fontSize: 9.5, marginBottom: 4 }}>
                  <span>{n}</span><span style={{ color: c }}>{v}.0</span>
                </div>
                <div style={{ height: 5, background: C.paper2, borderRadius: 1 }}>
                  <div style={{ width: v + '%', height: '100%', background: c }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* cotes / module strip */}
        <div style={{ marginTop: 12, border: `1.5px solid ${C.ink}`, borderRadius: 3, background: '#fff', padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 9.5, color: C.dim }}>MODULE 04 · SMARTOCEAN</div>
            <div style={{ fontFamily: disp, fontWeight: 700, fontSize: 15, color: C.ink }}>Capteurs sous-marins → Cloud</div>
          </div>
          <div style={{ fontFamily: mono, fontSize: 9.5, color: C.signal, textAlign: 'right' }}>◄──── 2026 ────►</div>
        </div>
      </div>
    </div>
  );
}
window.TwinBoard = TwinBoard;
