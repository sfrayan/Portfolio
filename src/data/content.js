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
  { id: 'esp32-twin', name: 'ESP32 Digital Twin', ext: 'ino', kind: 'iot', doc: 'SAE13_GR3_SAID_FARAH_RAYAN.pdf',
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
  { id: 'linkedin', label: 'LinkedIn', handle: 'Rayan Said Farah', icon: 'linkedin', url: 'https://www.linkedin.com/in/rayan-said-farah/' },
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

// ---- Extra projects : legacy projects without a PDF ---------
// Surfaced in archives.app under "Projets". cat → ARCHIVE_META.
export const PROJECTS_EXTRA = [
  { id: 'tirelire', cat: 'web', fr: 'Tirelire — Partage de dépenses', en: 'Tirelire — Expense sharing',
    dfr: 'Application web progressive (PWA) et mobile de partage de dépenses de groupe — sans création de compte, en temps réel, multi-devises et partage de reçus.',
    den: 'Progressive web app (PWA) and mobile group expense-sharing app — no account needed, real-time, multi-currency with receipt split.',
    techs: ['JavaScript', 'PWA', 'Capacitor', 'localStorage'] },
  { id: 'fizzbuzz', cat: 'web', fr: 'FizzBuzz — Kata algorithmique', en: 'FizzBuzz — Algorithmic kata',
    dfr: 'Kata de programmation classique implémenté en plusieurs langages : bonnes pratiques, patterns de conception et approches algorithmiques.',
    den: 'Classic programming kata implemented in several languages: clean code, design patterns and algorithmic approaches.',
    techs: ['Python', 'JavaScript', 'C++'] },
  { id: 'phishing', cat: 'sec', fr: 'Phishing — Vidéo de sensibilisation', en: 'Phishing — Awareness video',
    dfr: 'Vidéo de sensibilisation informative et divertissante sur les attaques de phishing : dangers associés et solutions de sécurité, avec une touche d\'humour.',
    den: 'An informative, light-hearted awareness video on phishing attacks: the risks involved and how to protect against them.',
    techs: ['Cybersécurité', 'Vidéo', 'Sensibilisation'] },
  { id: 'sae-r502', cat: 'net', fr: 'SAE R502 — Architecture réseau complète', en: 'SAE R502 — Full network architecture',
    dfr: 'Conception et simulation d\'une architecture réseau complète sous Cisco Packet Tracer (BUT3 Réseaux & Télécoms).',
    den: 'Design and simulation of a complete network architecture with Cisco Packet Tracer (BUT3 Networks & Telecom).',
    techs: ['Cisco Packet Tracer', 'Routage', 'VLAN'] },
  { id: 'sae501', cat: 'sec', fr: 'SAE501 — Architecture Wi-Fi sécurisée', en: 'SAE501 — Secure Wi-Fi architecture',
    dfr: 'Infrastructure d\'authentification Wi-Fi sécurisée pour une chaîne de salles de sport multi-sites : FreeRADIUS, PEAP-MSCHAPv2, gestion centralisée et monitoring temps réel.',
    den: 'Secure Wi-Fi authentication infrastructure for a multi-site gym chain: FreeRADIUS, PEAP-MSCHAPv2, centralized user management and real-time monitoring.',
    techs: ['FreeRADIUS', 'PEAP-MSCHAPv2', '802.1X', 'Wi-Fi'] },
];

// ---- Skill descriptions (resurfaced from legacy/Compétences) -
// Keyed by the skill label used in SKILL_CATEGORIES. `fr` is the
// real text from the old portfolio; `en` is optional (falls back to fr).
// Add a translation by appending an `en:` key to any entry.
export const SKILL_INFO = {
  "Wireshark": {
    fr: "Wireshark est un outil puissant de capture et d'analyse de paquets réseau, permettant de surveiller et diagnostiquer le trafic sur divers types de réseaux (Ethernet, Wi-Fi, etc.). Il supporte une vaste gamme de protocoles et offre des fonctionnalités avancées de filtrage. Grâce à son interface intuitive, il visualise les données captées sous forme de graphiques et statistiques, facilitant l'identification des anomalies.",
    en: "Wireshark is a powerful network packet capture and analysis tool for monitoring and troubleshooting traffic across network types (Ethernet, Wi-Fi, etc.). It supports a wide range of protocols with advanced filtering, and its intuitive interface visualises captured data as graphs and statistics to spot anomalies." },
  "FreeRADIUS": {
    fr: "FreeRADIUS est un serveur d'authentification open-source implémentant le protocole RADIUS. Il est utilisé pour l'authentification centralisée dans les réseaux d'entreprise, notamment pour le WiFi 802.1X et les VPN.",
    en: "FreeRADIUS is an open-source authentication server implementing the RADIUS protocol. It provides centralised authentication for enterprise networks, notably for 802.1X Wi-Fi and VPNs." },
  "Azure": {
    fr: "Microsoft Azure est une plateforme cloud complète offrant compute, stockage, networking et services IA. Particulièrement utile pour les organisations Microsoft avec Active Directory intégré.",
    en: "Microsoft Azure is a comprehensive cloud platform offering compute, storage, networking and AI services. Especially valuable for Microsoft-centric organisations with integrated Active Directory." },
  "DHCP / DNS": {
    fr: "Configuration et administration des services DHCP (Dynamic Host Configuration Protocol) et DNS (Domain Name System), essentiels au fonctionnement des réseaux modernes.",
    en: "Configuration and administration of DHCP (Dynamic Host Configuration Protocol) and DNS (Domain Name System) services, core to how modern networks operate." },
  "React": {
    fr: "React est une bibliothèque JavaScript pour construire des interfaces avec des composants réutilisables. Il utilise le Virtual DOM pour optimiser les performances et JSX pour une syntaxe déclarative. Maîtriser React, c'est comprendre les hooks, le state management, le routing et l'intégration d'APIs.",
    en: "React is a JavaScript library for building interfaces from reusable components. It uses the Virtual DOM for performance and JSX for declarative syntax. Mastering React means hooks, state management, routing and API integration." },
  "Next.js": {
    fr: "Next.js est un framework React de production : rendu hybride (SSR/SSG), routing par fichiers, API routes et optimisations intégrées. Je l'utilise pour des espaces clients et des applications web performantes et bien référencées.",
    en: "Next.js is a production React framework: hybrid rendering (SSR/SSG), file-based routing, API routes and built-in optimisations. I use it for client portals and fast, SEO-friendly web apps." },
  "TypeScript": {
    fr: "TypeScript ajoute un typage statique à JavaScript, réduisant les bugs et améliorant la maintenabilité sur les gros projets. Je l'utilise avec React/Next.js et côté backend Node.",
    en: "TypeScript adds static typing to JavaScript, reducing bugs and improving maintainability on large projects. I use it with React/Next.js and on the Node backend." },
  "Node.js / Express": {
    fr: "Node.js est un runtime JavaScript côté serveur pour des backends haute performance ; Express est un framework web léger et flexible. Ensemble ils permettent de créer des API REST complètes et des applications full-stack JavaScript (async/await, middleware, authentification).",
    en: "Node.js is a server-side JavaScript runtime for high-performance backends; Express is a lightweight, flexible web framework. Together they power complete REST APIs and full-stack JavaScript apps (async/await, middleware, authentication)." },
  "Python": {
    fr: "Python est un langage versatile pour le scripting, l'automation et la data science. Sa syntaxe simple le rend idéal pour débuter tout en offrant des capacités avancées. Très utilisé en cybersécurité, DevOps et développement backend.",
    en: "Python is a versatile language for scripting, automation and data science. Its simple syntax suits beginners while offering advanced power. Widely used in cybersecurity, DevOps and backend development." },
  "JavaScript": {
    fr: "JavaScript est le langage du web moderne : interfaces interactives, manipulation du DOM et expériences dynamiques. ES6+ apporte classes, promises, async/await et modules. Maîtriser JS, c'est comprendre la programmation asynchrone et les bonnes pratiques web.",
    en: "JavaScript is the language of the modern web: interactive interfaces, DOM manipulation and dynamic experiences. ES6+ brings classes, promises, async/await and modules. Mastering JS means async programming and web best practices." },
  "C++": {
    fr: "C++ permet de créer des applications performantes et proches de la machine. Je l'utilise pour les tâches critiques en performance et la programmation système / embarquée.",
    en: "C++ enables high-performance, close-to-the-metal applications. I use it for performance-critical tasks and systems / embedded programming." },
  "PostgreSQL": {
    fr: "PostgreSQL est une base SQL open-source puissante et fiable : transactions ACID, triggers, procédures stockées et support JSON. Largement utilisée en production pour les applications critiques.",
    en: "PostgreSQL is a powerful, reliable open-source SQL database: ACID transactions, triggers, stored procedures and JSON support. Widely used in production for critical applications." },
  "MongoDB": {
    fr: "MongoDB est une base NoSQL orientée documents qui stocke les données en JSON flexible. Idéale pour les structures de données variables et évolutives (collections, requêtes, agrégations, indexation).",
    en: "MongoDB is a document-oriented NoSQL database storing data as flexible JSON. Ideal for variable, evolving data structures (collections, queries, aggregations, indexing)." },
  "MySQL": {
    fr: "MySQL est une base SQL relationnelle open-source très utilisée pour le web. Bonne performance, fiabilité et simplicité, populaire dans les stacks LAMP/LEMP.",
    en: "MySQL is a widely used open-source relational SQL database for the web. Solid performance, reliability and simplicity, popular in LAMP/LEMP stacks." },
  "Docker": {
    fr: "Docker est une plateforme de containerisation qui package les applications avec leurs dépendances. Les conteneurs offrent isolation, portabilité et efficacité face aux VM (images, conteneurs, volumes, orchestration).",
    en: "Docker is a containerisation platform that packages applications with their dependencies. Containers offer isolation, portability and efficiency over VMs (images, containers, volumes, orchestration)." },
  "Git": {
    fr: "Git est un système de contrôle de version distribué pour la gestion du code source. Il permet collaboration, traçabilité et gestion de branches (commits, merging, résolution de conflits).",
    en: "Git is a distributed version control system for source code. It enables collaboration, traceability and branch management (commits, merging, conflict resolution)." },
  "Arduino / ESP32": {
    fr: "Arduino/ESP32 sont des plateformes de prototypage électronique open-source. Elles permettent de créer des projets IoT, capteurs intelligents et domotique — microcontrôleurs, capteurs et systèmes embarqués interactifs.",
    en: "Arduino/ESP32 are open-source electronics prototyping platforms. They power IoT projects, smart sensors and home automation — microcontrollers, sensors and interactive embedded systems." },
  "Linux": {
    fr: "Linux est un système d'exploitation open-source puissant et flexible, central pour les serveurs, le DevOps et l'infrastructure cloud (shell, permissions, services, configuration système).",
    en: "Linux is a powerful, flexible open-source operating system, central to servers, DevOps and cloud infrastructure (shell, permissions, services, system configuration)." },
  "Windows / AD": {
    fr: "Administration Windows en entreprise : gestion des serveurs, Active Directory, services réseau et sécurité (PowerShell, Group Policy, gestion des utilisateurs).",
    en: "Enterprise Windows administration: server management, Active Directory, network services and security (PowerShell, Group Policy, user management)." },
  "Bash": {
    fr: "Bash est le shell Linux/Unix par défaut. Le scripting Bash permet d'automatiser des tâches système et de créer des outils en ligne de commande pour l'administration réseau et le DevOps.",
    en: "Bash is the default Linux/Unix shell. Bash scripting automates system tasks and builds command-line tools for network administration and DevOps." },
  "PowerShell": {
    fr: "PowerShell est le framework d'automation Windows moderne : gestion avancée d'Active Directory, Windows Server et Azure, combinant le scripting shell avec la puissance de .NET.",
    en: "PowerShell is the modern Windows automation framework: advanced management of Active Directory, Windows Server and Azure, combining shell scripting with the power of .NET." },
  "Cisco Packet Tracer": {
    fr: "Cisco Packet Tracer est un simulateur réseau pour l'apprentissage et la certification CCNA. Il permet de concevoir, configurer et déboguer des architectures réseau sans matériel physique.",
    en: "Cisco Packet Tracer is a network simulator for learning and CCNA certification. It lets you design, configure and debug network architectures without physical hardware." },
  "Scapy": {
    fr: "Scapy est une bibliothèque Python puissante pour créer, analyser et manipuler des paquets réseau. Elle permet la création de protocoles personnalisés et des tests de sécurité réseau avancés.",
    en: "Scapy is a powerful Python library to craft, analyse and manipulate network packets. It enables custom protocols and advanced network security testing." },
  "Metasploit": {
    fr: "Metasploit est le framework de pentesting le plus populaire pour identifier et exploiter les vulnérabilités : reconnaissance, exploitation et post-exploitation.",
    en: "Metasploit is the most popular pentesting framework for identifying and exploiting vulnerabilities: reconnaissance, exploitation and post-exploitation." },
  "Nessus": {
    fr: "Nessus est un scanner de vulnérabilités professionnel qui identifie les faiblesses de sécurité des réseaux et systèmes, avec rapports détaillés et recommandations de remédiation.",
    en: "Nessus is a professional vulnerability scanner that identifies security weaknesses across networks and systems, with detailed reports and remediation guidance." },
  "OpenSSL": {
    fr: "OpenSSL est une bibliothèque open-source de cryptographie et de gestion de certificats SSL/TLS : création, gestion et validation de certificats numériques.",
    en: "OpenSSL is an open-source cryptography and SSL/TLS certificate library: creating, managing and validating digital certificates." },
  "Zabbix": {
    fr: "Zabbix est une plateforme de monitoring et d'alerting open-source pour surveiller les infrastructures IT : collecte de métriques, visualisation et alertes automatiques.",
    en: "Zabbix is an open-source monitoring and alerting platform for IT infrastructure: metric collection, visualisation and automatic alerts." },
  "Snort": {
    fr: "Snort est un système de détection d'intrusions (IDS) open-source qui analyse le trafic réseau en temps réel selon des règles pour détecter les activités malveillantes.",
    en: "Snort is an open-source intrusion detection system (IDS) that analyses network traffic in real time against rules to detect malicious activity." },
  "Fail2ban": {
    fr: "Fail2ban protège les serveurs contre les attaques par brute force : il analyse les logs et bannit automatiquement les adresses IP malveillantes.",
    en: "Fail2ban protects servers against brute-force attacks: it parses logs and automatically bans malicious IP addresses." },
  "Wazuh": {
    fr: "Wazuh est une plateforme XDR open-source pour la détection de menaces et la réponse aux incidents, combinant SIEM, IDS et EDR en une solution unifiée.",
    en: "Wazuh is an open-source XDR platform for threat detection and incident response, combining SIEM, IDS and EDR in a unified solution." },
};
