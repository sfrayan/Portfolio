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
