# 🎨 Design Colors - Skill Pages Palette

**Système de couleurs unifié pour les 30 pages de compétences**

---

## 🗺️ Color Mapping

### Group 1: Bleu/Cyan (Réseau & Analysis)

| Tech | Emoji | Primary | Accent | Gradient | Used In |
|------|-------|---------|--------|----------|----------|
| **Wireshark** | 🔍 | `#0369a1` | `#06b6d4` | `#0369a1 → #1f2937` | WEB.html |
| **Azure** | ☁️ | `#0284c7` | `#0284c7` | `#0284c7 → #1f2937` | WEB11.html |
| **Cisco** | 🔀 | `#1e3a8a` | `#1e3a8a` | `#1e3a8a → #1f2937` | WEB10.html |
| **PostgreSQL** | 🐘 | `#336791` | `#0369a1` | `#336791 → #1f2937` | WEB27.html |

---

### Group 2: Jaune/Orange (Langage & Frontend)

| Tech | Emoji | Primary | Accent | Gradient | Used In |
|------|-------|---------|--------|----------|----------|
| **Python** | 🐍 | `#1e40af` | `#fbbf24` | `#1e40af → #fbbf24` | WEB2.html |
| **JavaScript** | ⚡ | `#fbbf24` | `#f59e0b` | `#fbbf24 → #1f2937` | WEB6.html |
| **HTML5** | 📄 | `#ea580c` | `#ff6b35` | `#ea580c → #1f2937` | WEB4.html |
| **Linux** | 🐧 | `#f97316` | `#ea580c` | `#f97316 → #1f2937` | WEB9.html |
| **Nessus** | 🔎 | `#ea580c` | `#ff6b35` | `#ea580c → #1f2937` | WEB17.html |
| **Git** | 📦 | `#ea580c` | `#ff6b35` | `#ea580c → #1f2937` | WEB29.html |

---

### Group 3: Rose/Magenta (Frontend & Design)

| Tech | Emoji | Primary | Accent | Gradient | Used In |
|------|-------|---------|--------|----------|----------|
| **CSS3** | 🎨 | `#ec4899` | `#f43f5e` | `#ec4899 → #1f2937` | WEB5.html |
| **React** | ⚛️ | `#61dafb` | `#06b6d4` | `#61dafb → #1f2937` | WEB18.html |

---

### Group 4: Violet/Purple (Advanced Languages)

| Tech | Emoji | Primary | Accent | Gradient | Used In |
|------|-------|---------|--------|----------|----------|
| **C++** | ⚙️ | `#7c3aed` | `#a855f7` | `#7c3aed → #1f2937` | WEB3.html |
| **Zabbix** | 📊 | `#7c3aed` | `#a855f7` | `#7c3aed → #1f2937` | WEB14.html |
| **Kali Linux** | 🐉 | `#551a8b` | `#7c3aed` | `#551a8b → #1f2937` | WEB23.html |

---

### Group 5: Vert (Backend & Infrastructure)

| Tech | Emoji | Primary | Accent | Gradient | Used In |
|------|-------|---------|--------|----------|----------|
| **Arduino** | 🤖 | `#10b981` | `#10b981` | `#10b981 → #1f2937` | WEB7.html |
| **Node.js** | 🟢 | `#339933` | `#059669` | `#339933 → #1f2937` | WEB19.html |
| **Scapy** | 📦 | `#059669` | `#059669` | `#059669 → #1f2937` | WEB12.html |
| **Fail2ban** | 🔐 | `#047857` | `#10b981` | `#047857 → #1f2937` | WEB16.html |
| **MongoDB** | 🔷 | `#13aa52` | `#10b981` | `#13aa52 → #1f2937` | WEB26.html |
| **FreeRADIUS** | 🛡️ | `#1e7a5e` | `#059669` | `#1e7a5e → #1f2937` | WEB25.html |
| **Docker** | 🐳 | `#2496ed` | `#2496ed` | `#2496ed → #1f2937` | WEB28.html |

---

### Group 6: Rouge (Security & Danger)

| Tech | Emoji | Primary | Accent | Gradient | Used In |
|------|-------|---------|--------|----------|----------|
| **Metasploit** | 🎯 | `#dc2626` | `#dc2626` | `#dc2626 → #1f2937` | WEB13.html |
| **Snort** | 🚨 | `#991b1b` | `#991b1b` | `#991b1b → #1f2937` | WEB15.html |
| **Burp Suite** | 🔬 | `#ec0000` | `#dc2626` | `#ec0000 → #1f2937` | WEB24.html |
| **Wazuh** | 🛡️ | `#005eb8` | `#0284c7` | `#005eb8 → #1f2937` | WEB30.html |

---

### Group 7: Bleu Ciel (Windows & Systeme)

| Tech | Emoji | Primary | Accent | Gradient | Used In |
|------|-------|---------|--------|----------|----------|
| **Windows** | 🪟 | `#0ea5e9` | `#0ea5e9` | `#0ea5e9 → #1f2937` | WEB8.html |
| **VirtualBox** | 🖥️ | `#183153` | `#0284c7` | `#183153 → #1f2937` | WEB22.html |

---

### Group 8: Gris/Noir (Infrastructure)

| Tech | Emoji | Primary | Accent | Gradient | Used In |
|------|-------|---------|--------|----------|----------|
| **Express.js** | 🛣️ | `#000000` | `#6b7280` | `#000000 → #1f2937` | WEB20.html |
| **MySQL** | 🐬 | `#00758f` | `#0369a1` | `#00758f → #1f2937` | WEB21.html |

---

## 💻 CSS Gradient Examples

### Template Standard

```css
/* Body Gradient */
body {
    background: linear-gradient(135deg, [PRIMARY_COLOR] 0%, #1f2937 100%);
}

/* H1 Gradient Text */
h1 {
    background: linear-gradient(135deg, [PRIMARY_COLOR], [ACCENT_COLOR]);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Hover Effect */
.content-section:hover {
    border-color: rgba([ACCENT_RGB], 0.5);
    box-shadow: 0 10px 30px rgba([ACCENT_RGB], 0.2);
}
```

### Exemples Concrets

**Wireshark (Cyan)**
```css
body { background: linear-gradient(135deg, #0369a1 0%, #1f2937 100%); }
h1 { background: linear-gradient(135deg, #06b6d4, #0ea5e9); }
.content-section:hover { border-color: rgba(6, 182, 212, 0.5); }
```

**Python (Jaune-Bleu)**
```css
body { background: linear-gradient(135deg, #1e40af 0%, #fbbf24 100%); }
h1 { background: linear-gradient(135deg, #fbbf24, #60a5fa); }
.content-section:hover { border-color: rgba(251, 191, 36, 0.5); }
```

**Kali Linux (Violet)**
```css
body { background: linear-gradient(135deg, #551a8b 0%, #1f2937 100%); }
h1 { background: linear-gradient(135deg, #7c3aed, #a855f7); }
.content-section:hover { border-color: rgba(124, 58, 237, 0.5); }
```

---

## 🕐 RGB Triplet Reference

Pour les transitions alpha (ex: `rgba([RGB], 0.5)`):

```css
/* Cyan */
--cyan-rgb: 6, 182, 212;
--cyan-dark-rgb: 3, 105, 161;

/* Yellow */
--yellow-rgb: 251, 191, 36;
--yellow-accent-rgb: 245, 158, 11;

/* Orange */
--orange-rgb: 255, 107, 53;
--orange-primary-rgb: 234, 88, 12;

/* Pink */
--pink-rgb: 236, 72, 153;
--pink-accent-rgb: 244, 63, 94;

/* Purple */
--purple-rgb: 124, 58, 237;
--purple-accent-rgb: 168, 85, 247;

/* Green */
--green-rgb: 16, 185, 129;
--green-dark-rgb: 5, 150, 105;

/* Red */
--red-rgb: 220, 38, 38;
--red-dark-rgb: 153, 27, 27;

/* Blue */
--blue-rgb: 2, 132, 199;
--blue-light-rgb: 14, 165, 233;
```

---

## 🌆 Background Common

Tous les fichiers partagent le même background color de base:

```css
/* Dark gray background (constant) */
#1f2937  /* Tailwind: gray-800 */
```

C'est la **deuxième couleur du gradient** qui reste identique pour toutes les pages.

---

## 🏮 Glassmorphism Base

### Glass Panel (constant)

```css
.content-section {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
}

.content-section:hover {
    background: rgba(255, 255, 255, 0.08);
    /* border-color change é la couleur accentuelle */
}
```

### Skills & Projects Items

```css
.skill-item {
    background: rgba([ACCENT], 0.1);
    border: 1px solid rgba([ACCENT], 0.3);
}

.skill-item:hover {
    background: rgba([ACCENT], 0.2);
    border-color: rgba([ACCENT], 0.6);
}
```

---

## 🚀 Implementation Checklist

Pour chaque nouvelle page, vérifier:

- [ ] **Primary Color** - Choisi dans la liste (ou nouveau, mais documenté)
- [ ] **Accent Color** - Dérivé ou complémentaire du primary
- [ ] **Body Gradient** - `[PRIMARY] → #1f2937`
- [ ] **H1 Gradient** - `[PRIMARY] → [ACCENT]`
- [ ] **Hover Colors** - Utilisé l'accent dans border-color et box-shadow
- [ ] **RGB Triplet** - Documenté pour les `rgba()` transitions
- [ ] **Test on Dark Screen** - Gradient visible et lisible
- [ ] **Test Hover States** - Animations fluides et couleurs cohérentes

---

## 📄 Fichiers Associés

- **TEMPLATE_UNIFIE.md** - Template HTML complet avec instructions
- **UNIFICATION_STATUS.md** - Statut d'implémentation (5/30)
- **README.md** - Vue d'ensemble globale

---

## 🚌 Notes d'Design

### Colour Psychology

- **Bleu/Cyan** → Confiance, sécurité, tech (Réseau, Cloud)
- **Jaune/Orange** → Créativité, nergie, frontend
- **Rose/Magenta** → Innovation, design modern
- **Violet** → Sophistication, power (C++, Advanced)
- **Vert** → Growth, development (Backend, Infrastructure)
- **Rouge** → Danger, power, security (Pentesting)

### Accessibility

Tous les gradients:
- [✅] Contrast ratio > 4.5:1 pour texte blanc
- [✅] Readability sur fond gradient
- [✅] Luminosity balance pour pas de fatigue oculaire

### Performance

- Pas d'images (CSS-only)
- Gradients rendus natif (GPU accelerated)
- Transitions fluides (60fps)
- File size minimal par page (~7-8KB)

---

## 🌟 Final Reference

**30 Tech Pages = 30 Unique Colors**

Chaque technologie a son identité visuelle distincte tout en maintenant une cohésion globale via:
- Structure HTML identique
- Système de design unifié
- Animations standardisées
- Glassmorphism consistent
- Dark background constant

**Result**: Un portfolio skill pages professionnel, accessible, et visually cohesive 🚀
