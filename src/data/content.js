// ============================================================
// RayanOS — content.js
// Single source of truth for portfolio DATA (no UI here).
// Add a project / skill / archive by appending one entry below.
// All user-facing strings are bilingual (fr / en).
// ============================================================

// ---- Skill categories (30 techs / 8 categories) -------------
export const SKILL_CATEGORIES = [
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

// ---- Showcase projects (curated) ----------------------------
export const PROJECTS = [
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

// ---- Journey / timeline -------------------------------------
export const JOURNEY = [
  { year: '2019', fr: 'Baccalauréat Scientifique', en: 'Scientific Baccalaureate', sub: 'Physique-Chimie', type: 'edu' },
  { year: '2023', fr: 'DU Technicien Admin Réseaux', en: 'Network Admin Technician Degree', sub: 'IUTV', type: 'edu' },
  { year: '2023', fr: 'Stage — Salvia Développement', en: 'Internship — Salvia Développement', sub: 'Parc informatique', type: 'work' },
  { year: '2023–26', fr: 'BUT Réseaux & Télécoms', en: 'BUT Networks & Telecom', sub: 'Parcours Cybersécurité · USPN', type: 'edu' },
  { year: '2025', fr: 'Stage — Kolchy, Paris', en: 'Internship — Kolchy, Paris', sub: 'Espace client Next.js', type: 'work' },
  { year: '2026', fr: 'SmartOcean Research', en: 'SmartOcean Research', sub: 'Western Norway Univ.', type: 'work', current: true },
];

// ---- Socials / contact --------------------------------------
export const SOCIALS = [
  { id: 'github', label: 'GitHub', handle: 'sfrayan', icon: 'github', url: 'https://github.com/sfrayan' },
  { id: 'mail', label: 'Email', handle: 'rsaidfarah@gmail.com', icon: 'mail', url: 'mailto:rsaidfarah@gmail.com' },
  // TODO: remplacer '#' par l'URL LinkedIn réelle quand fournie
  { id: 'linkedin', label: 'LinkedIn', handle: 'Rayan Said Farah', icon: 'linkedin', url: '#' },
  { id: 'location', label: 'Localisation', handle: 'Paris, France', icon: 'map-pin', url: '#' },
];

// ---- Archives : academic PDF reports ------------------------
// file = name under public/projets/pdf/. cat → ARCHIVE_META in apps2.
// Add a document = append one line here.
export const ARCHIVES = [
  { id: 'sae-23', file: 'SAE_23.pdf', cat: 'net',
    fr: 'SAE 23 — Infrastructure d\'entreprise', en: 'SAE 23 — Enterprise infrastructure',
    dfr: 'Conception et déploiement d\'une infrastructure réseau d\'entreprise (VLAN, routage, services).',
    den: 'Design and deployment of an enterprise network infrastructure (VLANs, routing, services).' },
  { id: 'sae-24', file: 'SAE_24.pdf', cat: 'sec',
    fr: 'SAE 24 — Attaques MITM', en: 'SAE 24 — MITM attacks',
    dfr: 'Mise en œuvre et analyse d\'attaques Man-in-the-Middle sur un réseau local, et contre-mesures.',
    den: 'Implementation and analysis of Man-in-the-Middle attacks on a LAN, with countermeasures.' },
  { id: 'sae-303', file: 'SAE_303.pdf', cat: 'net',
    fr: 'SAE 303 — Appel d\'offres', en: 'SAE 303 — Request for proposals',
    dfr: 'Réponse à un appel d\'offres : dimensionnement, choix techniques et chiffrage d\'une solution réseau.',
    den: 'Answering an RFP: sizing, technical choices and costing of a network solution.' },
  { id: 'sae-pentest', file: 'SAE_Pentesting.pdf', cat: 'sec',
    fr: 'SAE Pentesting — Découverte du pentesting', en: 'SAE Pentesting — Intro to pentesting',
    dfr: 'Démarche de test d\'intrusion : reconnaissance, scan, exploitation et rapport.',
    den: 'Penetration-testing workflow: recon, scanning, exploitation and reporting.' },
  { id: 'r401', file: 'R401.pdf', cat: 'net',
    fr: 'R401 — Infrastructures de sécurité', en: 'R401 — Security infrastructures',
    dfr: 'Mise en place d\'infrastructures de sécurité réseau (pare-feu, segmentation, durcissement).',
    den: 'Deploying network security infrastructures (firewalls, segmentation, hardening).' },
  { id: 'r410', file: 'R410.pdf', cat: 'sec',
    fr: 'R410 — Sécurité des réseaux', en: 'R410 — Network security',
    dfr: 'Étude des mécanismes de sécurité réseau : chiffrement, authentification, détection d\'intrusion.',
    den: 'Study of network security mechanisms: encryption, authentication, intrusion detection.' },
  { id: 'conforama', file: 'rapportcyberattaquev4.0.pdf', cat: 'sec',
    fr: 'Conforama — Analyse de cyberattaque', en: 'Conforama — Cyberattack analysis',
    dfr: 'Analyse post-incident d\'une cyberattaque : chronologie, vecteurs, impact et recommandations.',
    den: 'Post-incident analysis of a cyberattack: timeline, vectors, impact and recommendations.' },
  { id: 'azure', file: 'Azure.pdf', cat: 'cloud',
    fr: 'Azure AD — Service d\'annuaire', en: 'Azure AD — Directory service',
    dfr: 'Mise en œuvre d\'un annuaire Azure AD : utilisateurs, stratégies et intégration cloud.',
    den: 'Setting up an Azure AD directory: users, policies and cloud integration.' },
  { id: 'esp32', file: 'SAE13_GR3_SAID_FARAH_RAYAN.pdf', cat: 'iot',
    fr: 'SAE 13 — Programmation ESP32', en: 'SAE 13 — ESP32 programming',
    dfr: 'Programmation d\'un microcontrôleur ESP32 : capteurs, acquisition et communication.',
    den: 'Programming an ESP32 microcontroller: sensors, acquisition and communication.' },
  { id: 'infinite-think', file: 'InfinityThink.pdf', cat: 'ai',
    fr: 'Infinite Think — Rapport sur l\'IA', en: 'Infinite Think — AI report',
    dfr: 'Rapport d\'étude sur l\'intelligence artificielle : enjeux, usages et perspectives.',
    den: 'Study report on artificial intelligence: stakes, uses and outlook.' },
  { id: 'rj45', file: 'PROTOCOLE_RJ45.pdf', cat: 'net',
    fr: 'RJ45 — Réalisation d\'un câble', en: 'RJ45 — Cable crafting',
    dfr: 'Protocole de fabrication et de test d\'un câble réseau RJ45 (norme T568).',
    den: 'Procedure to build and test an RJ45 network cable (T568 standard).' },
];
