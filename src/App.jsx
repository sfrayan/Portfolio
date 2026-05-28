import React, { useState, useEffect, useRef, useCallback } from 'react';

// ==== shared.jsx ====
// ============================================================
// RayanOS — shared.jsx
// i18n strings, real portfolio data, icon helper, UI atoms.
// Exposes everything to window for the other babel scripts.
// ============================================================

// ---- Lucide icon wrapper -------------------------------------
// Renders <i data-lucide="name">; App calls lucide.createIcons()
// in a useEffect after every render to swap them to <svg>.
function Icon({ name, size = 16, color, stroke = 2, style = {} }) {
  return (
    <i
      data-lucide={name}
      style={{ width: size, height: size, display: 'inline-flex', color, ['--lucide-stroke']: stroke, ...style }}
    />
  );
}

// ---- i18n ----------------------------------------------------
const T = {
  fr: {
    boot_press: 'Appuyez pour entrer',
    boot_user: 'rayan',
    boot_subtitle: 'Développeur fullstack · Cybersécurité · IA',
    login: 'Se connecter',
    menu_about: 'À propos', menu_help: 'Aide', menu_lang: 'FR',
    dock_about: 'À propos', dock_projects: 'Projets', dock_supervision: 'Supervision',
    dock_jumeau: 'Jumeau Numérique', dock_terminal: 'Terminal', dock_contact: 'Contact',
    about_title: 'whoami',
    about_role: 'Développeur web fullstack · Cybersécurité · IA',
    about_lead: "Étudiant en 3ᵉ année de BUT Réseaux & Télécommunications, parcours cybersécurité, à l'Université Sorbonne Paris Nord. Je conçois des applications web modernes, des systèmes connectés et des outils intelligents — du frontend Next.js jusqu'à l'infrastructure réseau.",
    about_goal: "Objectif : intégrer une école d'ingénieur, me spécialiser en administration réseau et cybersécurité, puis évoluer vers architecte réseau sur des infrastructures critiques.",
    about_traits: ['Curieux', 'Ambitieux', 'Créatif'],
    about_now: 'En ce moment',
    about_now_val: 'SmartOcean Research · Norvège',
    projects_title: 'Projets',
    projects_sub: 'Explorateur de fichiers · ~/projets',
    supervision_title: 'Centre de supervision',
    supervision_sub: 'Compétences surveillées en temps réel',
    uptime: 'Disponibilité', systems: 'systèmes', online: 'EN LIGNE',
    jumeau_title: 'Jumeau Numérique',
    jumeau_sub: 'Plan technique vivant · MAPE-K',
    terminal_hint: "Tapez 'help' puis Entrée. Essayez aussi : neofetch, matrix, konami, coffee.",
    contact_title: 'Contact',
    contact_sub: 'Établir une connexion',
    open: 'Ouvrir', close: 'Fermer', back: 'Retour',
    parcours: 'Parcours', skills_cat: 'Catégories', techs: 'Technologies',
    view_repo: 'Voir le dépôt', stack: 'Stack', status: 'Statut',
  },
  en: {
    boot_press: 'Press to enter',
    boot_user: 'rayan',
    boot_subtitle: 'Fullstack developer · Cybersecurity · AI',
    login: 'Log in',
    menu_about: 'About', menu_help: 'Help', menu_lang: 'EN',
    dock_about: 'About', dock_projects: 'Projects', dock_supervision: 'Monitoring',
    dock_jumeau: 'Digital Twin', dock_terminal: 'Terminal', dock_contact: 'Contact',
    about_title: 'whoami',
    about_role: 'Fullstack web developer · Cybersecurity · AI',
    about_lead: "Third-year student in Networks & Telecommunications (cybersecurity track) at Université Sorbonne Paris Nord. I build modern web apps, connected systems and intelligent tools — from Next.js frontends all the way down to network infrastructure.",
    about_goal: "Goal: join an engineering school, specialize in network administration and cybersecurity, then grow into a network architect role on critical infrastructure.",
    about_traits: ['Curious', 'Ambitious', 'Creative'],
    about_now: 'Right now',
    about_now_val: 'SmartOcean Research · Norway',
    projects_title: 'Projects',
    projects_sub: 'File explorer · ~/projects',
    supervision_title: 'Operations center',
    supervision_sub: 'Skills monitored in real time',
    uptime: 'Uptime', systems: 'systems', online: 'ONLINE',
    jumeau_title: 'Digital Twin',
    jumeau_sub: 'Living technical blueprint · MAPE-K',
    terminal_hint: "Type 'help' then Enter. Also try: neofetch, matrix, konami, coffee.",
    contact_title: 'Contact',
    contact_sub: 'Establish a connection',
    open: 'Open', close: 'Close', back: 'Back',
    parcours: 'Journey', skills_cat: 'Categories', techs: 'Technologies',
    view_repo: 'View repo', stack: 'Stack', status: 'Status',
  },
};

// ---- DATA ----------------------------------------------------
// Skill categories (30 techs / 9 categories) — from the real repo.
const SKILL_CATEGORIES = [
  { id: 'net', fr: 'Administration Réseaux', en: 'Network Administration', icon: 'network', accent: 'cyan',
    skills: [['Wireshark', 96], ['FreeRADIUS', 88], ['Azure', 84], ['DHCP / DNS', 90]] },
  { id: 'web', fr: 'Développement Web & Backend', en: 'Web & Backend Dev', icon: 'code-xml', accent: 'phosphor',
    skills: [['React', 92], ['Next.js', 90], ['TypeScript', 86], ['Node.js / Express', 88], ['Python', 90], ['JavaScript', 94], ['C++', 78]] },
  { id: 'db', fr: 'Bases de Données', en: 'Databases', icon: 'database', accent: 'cyan',
    skills: [['PostgreSQL', 84], ['MongoDB', 82], ['MySQL', 86]] },
  { id: 'devops', fr: 'DevOps & Infrastructure', en: 'DevOps & Infra', icon: 'container', accent: 'phosphor',
    skills: [['Docker', 84], ['Git', 92], ['Arduino / ESP32', 86]] },
  { id: 'os', fr: "Systèmes d'Exploitation", en: 'Operating Systems', icon: 'terminal', accent: 'phosphor',
    skills: [['Linux', 92], ['Windows / AD', 86], ['Bash', 88], ['PowerShell', 80]] },
  { id: 'sim', fr: 'Simulation Réseau', en: 'Network Simulation', icon: 'route', accent: 'cyan',
    skills: [['Cisco Packet Tracer', 88]] },
  { id: 'sec', fr: 'Cybersécurité & Pentesting', en: 'Cybersecurity & Pentest', icon: 'shield-half', accent: 'amber',
    skills: [['Scapy', 84], ['Metasploit', 80], ['Nessus', 82], ['OpenSSL', 78]] },
  { id: 'mon', fr: 'Monitoring & Détection', en: 'Monitoring & Detection', icon: 'activity', accent: 'amber',
    skills: [['Zabbix', 86], ['Snort', 82], ['Fail2ban', 84], ['Wazuh', 80]] },
];

const PROJECTS = [
  { id: 'quiz-master', name: 'Quiz Master', ext: 'app', kind: 'web', repo: 'https://github.com/sfrayan/Quiz-Master',
    fr: 'Application de quiz multijoueur (Solo / Duel), catégories, niveaux de difficulté et classement en temps réel.',
    en: 'Multiplayer quiz app (Solo / Duel) with categories, difficulty levels and a real-time leaderboard.',
    stack: ['Vanilla JS', 'HTML5', 'CSS3', 'localStorage'], status: 'live' },
  { id: 'pentest-suite', name: 'Pentesting Suite', ext: 'sh', kind: 'sec',
    fr: 'Boîte à outils de tests d\'intrusion : reconnaissance, scan de vulnérabilités et exploitation guidée.',
    en: 'Penetration-testing toolkit: recon, vulnerability scanning and guided exploitation.',
    stack: ['Python', 'Scapy', 'Metasploit', 'Nessus'], status: 'live' },
  { id: 'ai-agents', name: 'AI Agents Dashboard', ext: 'tsx', kind: 'ai',
    fr: 'Tableau de bord pour orchestrer et superviser des agents IA autonomes.',
    en: 'Dashboard to orchestrate and supervise autonomous AI agents.',
    stack: ['Next.js', 'TypeScript', 'React'], status: 'wip' },
  { id: 'esp32-twin', name: 'ESP32 Digital Twin', ext: 'ino', kind: 'iot',
    fr: 'Jumeau numérique d\'un objet connecté ESP32 : capteurs, télémétrie et boucle de contrôle MAPE-K.',
    en: 'Digital twin of an ESP32 connected device: sensors, telemetry and a MAPE-K control loop.',
    stack: ['C++', 'Arduino', 'MQTT', 'Home Assistant'], status: 'wip' },
  { id: 'fastfoodbike', name: 'FastFoodBike', ext: 'app', kind: 'web',
    fr: 'Plateforme de commande et livraison à vélo : panier, suivi et back-office.',
    en: 'Order & bike-delivery platform: cart, tracking and back-office.',
    stack: ['React', 'Node.js', 'PostgreSQL'], status: 'live' },
  { id: 'smartocean', name: 'SmartOcean', ext: 'cloud', kind: 'iot', featured: true,
    fr: 'Composants logiciels pour capteurs sous-marins acoustiques intégrés au cloud — projet de recherche en Norvège.',
    en: 'Software components for acoustic subsea sensors integrated with the cloud — research project in Norway.',
    stack: ['Cloud', 'Time-series', 'Acoustic comms'], status: 'live' },
];

const JOURNEY = [
  { year: '2019', fr: 'Baccalauréat Scientifique', en: 'Scientific Baccalaureate', sub: 'Physique-Chimie', type: 'edu' },
  { year: '2023', fr: 'DU Technicien Admin Réseaux', en: 'Network Admin Technician Degree', sub: 'IUTV', type: 'edu' },
  { year: '2023', fr: 'Stage — Salvia Développement', en: 'Internship — Salvia Développement', sub: 'Parc informatique', type: 'work' },
  { year: '2023–26', fr: 'BUT Réseaux & Télécoms', en: 'BUT Networks & Telecom', sub: 'Parcours Cybersécurité · USPN', type: 'edu' },
  { year: '2025', fr: 'Stage — Kolchy, Paris', en: 'Internship — Kolchy, Paris', sub: 'Espace client Next.js', type: 'work' },
  { year: '2026', fr: 'SmartOcean Research', en: 'SmartOcean Research', sub: 'Western Norway Univ.', type: 'work', current: true },
];

const SOCIALS = [
  { id: 'github', label: 'GitHub', handle: 'sfrayan', icon: 'github', url: 'https://github.com/sfrayan' },
  { id: 'mail', label: 'Email', handle: 'rayan.saidfarah', icon: 'mail', url: '#' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'Rayan Said Farah', icon: 'linkedin', url: '#' },
  { id: 'location', label: 'Localisation', handle: 'Paris, France', icon: 'map-pin', url: '#' },
];

// ---- UI atoms ------------------------------------------------
function StatusDot({ color = 'var(--mint)', size = 8, glow = true }) {
  return <span style={{ width: size, height: size, borderRadius: '50%', background: color, boxShadow: glow ? `0 0 8px ${color}` : 'none', display: 'inline-block', flexShrink: 0 }} />;
}

function Pill({ children, accent }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)', fontSize: 11.5, padding: '3px 9px',
      borderRadius: 'var(--radius-pill)', border: '1px solid var(--os-line)',
      color: accent || 'var(--fg-2)', background: 'var(--os-surface-2)',
      letterSpacing: '0.02em', whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}

Object.assign(window, {
  Icon, T, SKILL_CATEGORIES, PROJECTS, JOURNEY, SOCIALS, StatusDot, Pill,
});

// ==== chrome.jsx ====
// ============================================================
// RayanOS — chrome.jsx
// Boot screen, wallpaper, top menubar, dock, draggable window.
// ============================================================

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

// ==== apps.jsx ====
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

// ==== apps2.jsx ====
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

// ==== App (from ui_kits/portfolio/index.html inline script) ====

function App() {
  const [lang, setLang] = useState('fr');
  const [booted, setBooted] = useState(false);
  const [wins, setWins] = useState([]);
  const [flash, setFlash] = useState(false);
  const konamiBuf = useRef([]);

  // app registry
  const APPS = [
    { id: 'about', icon: 'user-round', bg: 'linear-gradient(135deg,#FF6B4A,#C9402A)', fg: '#fff',
      label: { fr: 'À propos', en: 'About' }, title: { fr: 'about.app — whoami', en: 'about.app — whoami' },
      accent: 'var(--coral)', w: 400, h: 600, render: (l) => <AboutApp lang={l} /> },
    { id: 'projects', icon: 'folder', bg: 'var(--os-surface-2)', fg: 'var(--gold)',
      label: { fr: 'Projets', en: 'Projects' }, title: { fr: 'projets — explorateur', en: 'projects — explorer' },
      accent: 'var(--gold)', w: 580, h: 500, render: (l) => <ProjectsApp lang={l} /> },
    { id: 'supervision', icon: 'radar', bg: '#08100C', fg: 'var(--noc-phosphor)',
      label: { fr: 'Supervision', en: 'Monitoring' }, title: { fr: 'supervision.app', en: 'supervision.app' },
      accent: 'var(--noc-phosphor)', w: 640, h: 540, render: (l) => <SupervisionApp lang={l} /> },
    { id: 'jumeau', icon: 'box', bg: '#0A1322', fg: 'var(--twin-signal)',
      label: { fr: 'Jumeau Numérique', en: 'Digital Twin' }, title: { fr: 'jumeau.app — blueprint', en: 'jumeau.app — blueprint' },
      accent: 'var(--twin-signal)', w: 640, h: 540, render: (l) => <JumeauApp lang={l} /> },
    { id: 'terminal', icon: 'square-terminal', bg: '#0C0A12', fg: 'var(--mint)',
      label: { fr: 'Terminal', en: 'Terminal' }, title: { fr: 'terminal — bash', en: 'terminal — bash' },
      accent: 'var(--mint)', w: 540, h: 440, render: (l) => <TerminalApp lang={l} onKonami={triggerKonami} /> },
    { id: 'contact', icon: 'send', bg: 'var(--os-surface-2)', fg: 'var(--coral)',
      label: { fr: 'Contact', en: 'Contact' }, title: { fr: 'contact.app', en: 'contact.app' },
      accent: 'var(--coral)', w: 480, h: 360, render: (l) => <ContactApp lang={l} /> },
  ];
  const appById = (id) => APPS.find(a => a.id === id);

  // lucide: re-render icons after every paint
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  const triggerKonami = useCallback(() => {
    setFlash(true); setTimeout(() => setFlash(false), 700);
  }, []);

  // konami code listener
  useEffect(() => {
    const code = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    const onKey = (e) => {
      konamiBuf.current.push(e.key);
      konamiBuf.current = konamiBuf.current.slice(-code.length);
      if (code.every((k, i) => (konamiBuf.current[i] || '').toLowerCase() === k.toLowerCase())) {
        triggerKonami(); openApp('terminal');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const focus = (id) => {
    setWins(ws => {
      const maxZ = Math.max(10, ...ws.map(w => w.z));
      return ws.map(w => w.id === id ? { ...w, z: maxZ + 1 } : w);
    });
  };

  const openApp = (id) => {
    const a = appById(id); if (!a) return;
    setWins(ws => {
      const maxZ = Math.max(10, ...ws.map(w => w.z));
      if (ws.find(w => w.id === id)) return ws.map(w => w.id === id ? { ...w, z: maxZ + 1 } : w);
      const n = ws.length;
      const x = 70 + n * 38 + (window.innerWidth > 1100 ? 90 : 0);
      const y = 64 + n * 32;
      return [...ws, { id, x: Math.min(x, Math.max(20, window.innerWidth - a.w - 30)), y, z: maxZ + 1, w: a.w, h: a.h,
        title: a.title, icon: a.icon, accent: a.accent }];
    });
  };
  const closeApp = (id) => setWins(ws => ws.filter(w => w.id !== id));

  const enter = () => { setBooted(true); setTimeout(() => { openApp('about'); }, 250); };

  const activeApp = wins.length ? appById([...wins].sort((a, b) => b.z - a.z)[0].id)?.label[lang] : null;
  const deskIcons = ['about', 'projects', 'supervision', 'jumeau'];

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden',
      animation: flash ? 'rosKonami 0.7s var(--ease-out)' : 'none' }}>
      <Wallpaper />
      {!booted && <Boot lang={lang} onEnter={enter} />}
      {booted && <>
        <MenuBar lang={lang} setLang={setLang} activeApp={activeApp} onOpenAbout={() => openApp('about')} />

        {/* desktop launcher icons (top-left) */}
        <div style={{ position: 'absolute', top: 54, left: 18, zIndex: 5, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {deskIcons.map(id => { const a = appById(id); return (
            <button key={id} onDoubleClick={() => openApp(id)} onClick={() => openApp(id)} className="ros-desk-icon" style={{
              width: 78, padding: '10px 6px', background: 'transparent', border: 'none', borderRadius: 10,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              <span style={{ width: 44, height: 44, borderRadius: 12, background: a.bg, border: '1px solid var(--os-line)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: a.fg, boxShadow: 'var(--shadow-sm)' }}>
                <Icon name={a.icon} size={21} />
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-2)', textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>{a.label[lang]}</span>
            </button>
          ); })}
        </div>

        {/* windows */}
        {wins.map(w => {
          const a = appById(w.id);
          const focused = [...wins].sort((x, y) => y.z - x.z)[0].id === w.id;
          return (
            <Window key={w.id} win={w} focused={focused} onFocus={focus} onClose={closeApp} lang={lang}>
              {a.render(lang)}
            </Window>
          );
        })}

        <Dock lang={lang} apps={APPS} openIds={wins.map(w => w.id)} onOpen={openApp} />
      </>}
      {flash && <div style={{ position: 'absolute', bottom: 90, left: '50%', transform: 'translateX(-50%)', zIndex: 200,
        fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--os-bg-deep)', background: 'var(--coral)',
        padding: '10px 18px', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--glow-coral)' }}>
        ✦ KONAMI · easter egg unlocked</div>}
    </div>
  );
}


export default App;
