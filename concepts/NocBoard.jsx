// Concept 1 — NOC // Salle de Supervision
// Le portfolio comme centre de supervision réseau en temps réel.
function NocBoard() {
  const C = {
    bg: '#07090D', panel: '#0E141E', panel2: '#121A26', line: '#1E2A3A',
    phos: '#5BF2A8', cyan: '#38E1FF', amber: '#F5B544', alert: '#FF5470',
    text: '#C7D2DF', dim: '#6B7A8D',
  };
  const mono = "'JetBrains Mono', monospace";
  const disp = "'Chakra Petch', sans-serif";

  const wrap = {
    width: '100%', minHeight: '100%', background: C.bg, color: C.text,
    fontFamily: mono, padding: '0', position: 'relative', overflow: 'hidden',
  };
  const scan = {
    position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5,
    backgroundImage: 'repeating-linear-gradient(to bottom, rgba(91,242,168,0.035) 0px, rgba(91,242,168,0.035) 1px, transparent 1px, transparent 3px)',
  };
  const pad = { padding: '26px 28px' };
  const led = (c) => ({ width: 7, height: 7, borderRadius: '50%', background: c, boxShadow: `0 0 8px ${c}` });

  return (
    <div style={wrap}>
      <div style={scan} />
      {/* top bar */}
      <div style={{ ...pad, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${C.line}`, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={led(C.phos)} />
          <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.18em', color: C.dim }}>RSF-NOC // ONLINE</span>
        </div>
        <span style={{ fontFamily: mono, fontSize: 12, color: C.cyan }}>UPTIME 04y · 30 SYS</span>
      </div>

      {/* hero */}
      <div style={{ ...pad, position: 'relative' }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.3em', color: C.phos, marginBottom: 14 }}>CONCEPT 01</div>
        <div style={{ fontFamily: disp, fontWeight: 700, fontSize: 38, lineHeight: 1.0, color: '#EAF2EC', letterSpacing: '0.01em' }}>SALLE DE<br/>SUPERVISION</div>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: C.dim, marginTop: 16, maxWidth: 440 }}>
          Le portfolio est un <span style={{ color: C.cyan }}>centre de supervision réseau</span> vivant. Chaque compétence est un système surveillé, chaque projet un service déployé, le parcours une trace de paquets. Phosphore vert, scanlines CRT, télémétrie temps réel.
        </p>
      </div>

      {/* palette */}
      <div style={{ ...pad, paddingTop: 4, position: 'relative' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.24em', color: C.dim, marginBottom: 12 }}>PALETTE</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 8 }}>
          {[['#07090D', 'BG'], ['#121A26', 'PANEL'], ['#5BF2A8', 'PHOS'], ['#38E1FF', 'CYAN'], ['#F5B544', 'AMBER'], ['#FF5470', 'ALERT']].map(([hex, n]) => (
            <div key={n}>
              <div style={{ height: 46, background: hex, borderRadius: 4, border: `1px solid ${C.line}` }} />
              <div style={{ fontSize: 9, color: C.dim, marginTop: 5 }}>{n}</div>
              <div style={{ fontSize: 8.5, color: C.dim, opacity: 0.6 }}>{hex}</div>
            </div>
          ))}
        </div>
      </div>

      {/* type */}
      <div style={{ ...pad, paddingTop: 14, position: 'relative' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.24em', color: C.dim, marginBottom: 10 }}>TYPOGRAPHIE</div>
        <div style={{ display: 'flex', gap: 22, alignItems: 'baseline', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: disp, fontWeight: 700, fontSize: 26, color: '#EAF2EC' }}>Chakra Petch</div>
            <div style={{ fontSize: 10, color: C.dim }}>Display · techno-grotesque</div>
          </div>
          <div>
            <div style={{ fontFamily: mono, fontSize: 22, color: C.phos }}>JetBrains Mono</div>
            <div style={{ fontSize: 10, color: C.dim }}>Données · télémétrie</div>
          </div>
        </div>
      </div>

      {/* mini dashboard mock */}
      <div style={{ ...pad, paddingTop: 14, position: 'relative' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.24em', color: C.dim, marginBottom: 12 }}>APERÇU · TABLEAU DE BORD</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 12 }}>
          {/* systems status */}
          <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 6, padding: 14 }}>
            <div style={{ fontSize: 10, color: C.dim, marginBottom: 12, letterSpacing: '0.1em' }}>SYSTÈMES // COMPÉTENCES</div>
            {[['React / Next.js', C.phos, '98%'], ['Cybersécurité', C.phos, '94%'], ['Réseau / Cisco', C.cyan, '91%'], ['IA / Agents', C.amber, '76%']].map(([n, c, v]) => (
              <div key={n} style={{ marginBottom: 11 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 4 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span style={led(c)} />{n}</span>
                  <span style={{ color: c }}>{v}</span>
                </div>
                <div style={{ height: 4, background: '#0A0F16', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ width: v, height: '100%', background: c, boxShadow: `0 0 6px ${c}` }} />
                </div>
              </div>
            ))}
          </div>
          {/* deployed services + topo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 6, padding: 14 }}>
              <div style={{ fontSize: 10, color: C.dim, marginBottom: 10, letterSpacing: '0.1em' }}>SERVICES DÉPLOYÉS</div>
              {[['quiz-master', C.phos], ['pentest-suite', C.amber], ['esp32-twin', C.cyan]].map(([n, c]) => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, marginBottom: 8 }}>
                  <span style={led(c)} /><span style={{ color: C.text }}>{n}</span>
                </div>
              ))}
            </div>
            <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 6, padding: 14, flex: 1 }}>
              <div style={{ fontSize: 10, color: C.dim, marginBottom: 8, letterSpacing: '0.1em' }}>TRACEROUTE // PARCOURS</div>
              <div style={{ fontFamily: mono, fontSize: 10, lineHeight: 1.9, color: C.cyan }}>
                <div>1 · bac-s <span style={{ color: C.dim }}>[2019]</span></div>
                <div>2 · but-r&amp;t <span style={{ color: C.dim }}>[2023]</span></div>
                <div>3 · smartocean <span style={{ color: C.phos }}>[2026]</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
window.NocBoard = NocBoard;
