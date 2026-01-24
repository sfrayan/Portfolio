# Template Unifié - Système de Compétences

## Vue d'ensemble

Ce document décrit le système unifié pour toutes les pages de compétences avec:
- **Gradients adaptés par technologie**
- **Emojis/Logos pour chaque compétence**
- **Structure cohérente**: Description + Compétences + Projets
- **Design moderne**: Glassmorphism + Animations

---

## Mapping Compétences-Technos

| Fichier | Technologie | Emoji | Gradient Principal | Gradient Accent | Projets Associés |
|---------|-------------|-------|-------------------|-----------------|-------------------|
| WEB.html | **Wireshark** | 🔍 | `#0369a1 → #1f2937` | Cyan `#06b6d4` | SAE_Pentesting, SAE_24, SAE_23 |
| WEB2.html | **Python** | 🐍 | `#1e40af → #fbbf24` | Jaune `#fbbf24` | Tirelire, FastFoodBike, AI Dashboard |
| WEB3.html | **C++** | ⚙️ | `#7c3aed → #1f2937` | Violet `#a855f7` | Embedded Systems, Competitive Programming |
| WEB4.html | **HTML5** | 📄 | `#ea580c → #1f2937` | Orange `#ff6b35` | Quiz Master, Web Projects |
| WEB5.html | **CSS3** | 🎨 | `#ec4899 → #1f2937` | Rose `#ec4899` | Quiz Master, Tirelire, Web Design |
| WEB6.html | **JavaScript** | ⚡ | `#fbbf24 → #1f2937` | Jaune `#fbbf24` | Quiz Master, FastFoodBike, Apps |
| WEB7.html | **Arduino** | 🤖 | `#10b981 → #1f2937` | Vert `#10b981` | IoT Projects, Smart Home |
| WEB8.html | **Windows** | 🪟 | `#0ea5e9 → #1f2937` | Bleu Ciel `#0ea5e9` | SAE_23, Infrastructure, Domain |
| WEB9.html | **Linux** | 🐧 | `#f97316 → #1f2937` | Orange `#ea580c` | SAE_501, SAE_23, Pentesting |
| WEB10.html | **Cisco Packet Tracer** | 🔀 | `#1e3a8a → #1f2937` | Bleu Foncé `#1e3a8a` | SAE_R502, Network Architecture |
| WEB11.html | **Azure** | ☁️ | `#0284c7 → #1f2937` | Bleu Azure `#0284c7` | Cloud Services, Deployment |
| WEB12.html | **Scapy** | 📦 | `#059669 → #1f2937` | Vert Foncé `#059669` | Pentesting, Network Analysis |
| WEB13.html | **Metasploit** | 🎯 | `#dc2626 → #1f2937` | Rouge `#dc2626` | Pentesting Suite, Security Tests |
| WEB14.html | **Zabbix** | 📊 | `#7c3aed → #1f2937` | Violet `#a855f7` | Monitoring, Infrastructure |
| WEB15.html | **Snort** | 🚨 | `#991b1b → #1f2937` | Rouge Foncé `#991b1b` | IDS, SAE_501 |
| WEB16.html | **Fail2ban** | 🔐 | `#047857 → #1f2937` | Vert `#10b981` | Security, Server Protection |
| WEB17.html | **Nessus** | 🔎 | `#ea580c → #1f2937` | Orange `#ff6b35` | Vulnerability Assessment |
| WEB18.html | **React** | ⚛️ | `#61dafb → #1f2937` | Cyan `#06b6d4` | Web Applications, SPAs |
| WEB19.html | **Node.js** | 🟢 | `#339933 → #1f2937` | Vert `#059669` | Backend APIs, Full Stack |
| WEB20.html | **Express.js** | 🛣️ | `#000000 → #1f2937` | Noir/Gris `#6b7280` | APIs, Middleware |
| WEB21.html | **MySQL** | 🐬 | `#00758f → #1f2937` | Bleu Foncé `#0369a1` | Databases, Data Management |
| WEB22.html | **VirtualBox** | 🖥️ | `#183153 → #1f2937` | Bleu `#0284c7` | Virtualization, Lab Setup |
| WEB23.html | **Kali Linux** | 🐉 | `#551a8b → #1f2937` | Violet `#7c3aed` | Pentesting, Security Tools |
| WEB24.html | **Burp Suite** | 🔬 | `#ec0000 → #1f2937` | Rouge `#dc2626` | Web Security, Testing |
| WEB25.html | **FreeRADIUS** | 🛡️ | `#1e7a5e → #1f2937` | Vert Foncé `#059669` | SAE_501, Authentication |
| WEB26.html | **MongoDB** | 🔷 | `#13aa52 → #1f2937` | Vert `#10b981` | NoSQL, FastFoodBike |
| WEB27.html | **PostgreSQL** | 🐘 | `#336791 → #1f2937` | Bleu `#0369a1` | Databases, Tirelire |
| WEB28.html | **Docker** | 🐳 | `#2496ed → #1f2937` | Bleu Docker `#2496ed` | Containerization |
| WEB29.html | **Git** | 📦 | `#ea580c → #1f2937` | Orange `#ff6b35` | Version Control, All Projects |
| WEB30.html | **Wazuh** | 🛡️ | `#005eb8 → #1f2937` | Bleu `#0284c7` | SAE_501, Threat Detection |

---

## Template HTML Standard

Tous les fichiers suivent cette structure:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>[TECH_NAME]</title>
    <meta name="description" content="Compétence en [TECH_NAME] - [DESCRIPTION]">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body { 
            background: linear-gradient(135deg, [COLOR_PRIMARY] 0%, #1f2937 100%);
            color: #fff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
            padding: 40px 20px;
        }
        
        .container { max-width: 1000px; margin: 0 auto; }
        
        .header { 
            text-align: center; 
            margin-bottom: 50px; 
            animation: fadeInDown 0.6s ease;
        }
        
        .logo { 
            font-size: 80px; 
            margin-bottom: 20px; 
            display: inline-block; 
            animation: bounceIn 0.8s ease;
        }
        
        h1 { 
            font-size: 3rem; 
            background: linear-gradient(135deg, [COLOR_PRIMARY], [COLOR_ACCENT]);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
        }
        
        .subtitle { 
            font-size: 1.2rem; 
            color: rgba(255, 255, 255, 0.8); 
            margin-bottom: 30px; 
        }
        
        .content-section { 
            background: rgba(255, 255, 255, 0.05); 
            backdrop-filter: blur(10px); 
            border: 1px solid rgba(255, 255, 255, 0.1); 
            border-radius: 15px; 
            padding: 40px; 
            margin-bottom: 30px; 
            transition: all 0.3s ease; 
            animation: fadeInUp 0.6s ease;
        }
        
        .content-section:hover { 
            background: rgba(255, 255, 255, 0.08); 
            border-color: rgba([RGB_ACCENT], 0.5); 
            transform: translateY(-5px); 
            box-shadow: 0 10px 30px rgba([RGB_ACCENT], 0.2);
        }
        
        h2 { 
            font-size: 1.8rem; 
            margin-bottom: 20px; 
            color: [COLOR_ACCENT]; 
            display: flex; 
            align-items: center; 
            gap: 15px; 
        }
        
        /* Sections suivantes: h3, p, projets, skills... */
        
        @keyframes fadeInDown { ... }
        @keyframes fadeInUp { ... }
        @keyframes bounceIn { ... }
        
        @media (max-width: 768px) { ... }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">[EMOJI]</div>
            <h1>[TECH_NAME]</h1>
            <p class="subtitle">[DESCRIPTION_COURTE]</p>
        </div>
        
        <div class="content-section">
            <h2>📋 Description</h2>
            <p>[DESCRIPTION_LONGUE]</p>
        </div>
        
        <div class="content-section">
            <h2>🏆 Compétences Associées</h2>
            <div class="skills-list">
                <div class="skill-item">[SKILL_1]</div>
                <div class="skill-item">[SKILL_2]</div>
                <!-- ... -->
            </div>
        </div>
        
        <div class="content-section">
            <h2>📚 Projets & Ressources</h2>
            <p>Projets mettant en avant cette compétence :</p>
            <div class="projets-container">
                <div class="project-card">
                    <div class="project-image">[PROJECT_EMOJI]</div>
                    <div class="project-content">
                        <div class="project-name">[PROJECT_NAME]</div>
                        <div class="project-type">[PROJECT_TYPE]</div>
                    </div>
                </div>
                <!-- ... -->
            </div>
        </div>
        
        <div class="content-section">
            <h3>Niveaux de Maîtrise</h3>
            <p><strong>Avancé :</strong> [MASTERY_DESCRIPTION]</p>
        </div>
    </div>
</body>
</html>
```

---

## Couleurs & Gradients

### Système de Couleurs Utilisées

```css
/* Techniques Bleu/Cyan */
--color-wireshark: #0369a1 → #06b6d4
--color-python: #1e40af → #fbbf24
--color-azure: #0284c7 → #0284c7
--color-scapy: #059669 → #059669

/* Techniques Orange/Jaune */
--color-html5: #ea580c → #ff6b35
--color-linux: #f97316 → #ea580c
--color-nessus: #ea580c → #ff6b35

/* Techniques Rose/Violet */
--color-css3: #ec4899 → #ec4899
--color-cpp: #7c3aed → #a855f7
--color-zabbix: #7c3aed → #a855f7

/* Techniques Vert */
--color-arduino: #10b981 → #10b981
--color-mongodb: #13aa52 → #10b981
--color-freradius: #1e7a5e → #059669

/* Techniques Rouge/Noir */
--color-metasploit: #dc2626 → #dc2626
--color-snort: #991b1b → #991b1b
--color-burpsuite: #ec0000 → #dc2626
```

---

## Animations & Interactions

Tous les fichiers incluent:

1. **fadeInDown** - Header slides in from top
2. **bounceIn** - Logo bounces slightly
3. **fadeInUp** - Sections slide up
4. **Hover Effects** - Cards lift and glow
5. **Responsive Design** - Mobile-first approach

---

## Contenu Personnalisé par Technologie

### Example: Wireshark
**Description**: Outil de capture et d'analyse de paquets réseau
**Skills**: Capture de Paquets, Analyse de Protocoles, Diagnostic Réseau, Filtrage Avancé, Dépannage Réseau, Statistiques Réseau
**Projects**: Analyse MITM, Pentesting Suite, Infrastructure Sécurisée

### Example: Python
**Description**: Langage haute niveau pour scripting et automation
**Skills**: Scripting & Automation, Web Development, Data Analysis, Machine Learning, FastAPI & Flask, Cybersecurity Tools
**Projects**: Tirelire, FastFoodBike, AI Agents Dashboard

---

## Instructions de Déploiement

### Pour créer un nouveau fichier WEB[N].html:

1. **Copier le template standard** ↑
2. **Remplacer les variables**:
   - `[TECH_NAME]` → Nom de la technologie
   - `[EMOJI]` → Emoji correspondant
   - `[COLOR_PRIMARY]` → Couleur principale (premier gradient)
   - `[COLOR_ACCENT]` → Couleur d'accent (texte, hover)
   - `[RGB_ACCENT]` → Version RGB sans alpha (ex: `255, 107, 53`)
   - `[DESCRIPTION_COURTE/LONGUE]` → Descriptions
   - `[SKILL_1-6]` → Skills associées
   - `[PROJECT_*]` → Projets associés

3. **Vérifier**:
   - Tous les gradients appliqués
   - Emojis affichés correctement
   - Projets correspondent à la technologie
   - Mobile responsive

---

## Améliorations Futures

- [ ] Animation au scroll (Intersection Observer)
- [ ] Dark mode toggle
- [ ] Search/Filter de compétences
- [ ] Timeline d'apprentissage
- [ ] Certificats/Badges
- [ ] Intégration avec API GitHub
- [ ] Stats de maîtrise (barre de progression)

---

## Notes de Maintenance

- Tous les fichiers partagent **la même structure CSS**
- Seules les **couleurs et contenus** changent
- Utiliser des **noms de couleurs cohérents**
- Maintenir l'**order des sections** identique
- Tester sur **mobile et desktop**
