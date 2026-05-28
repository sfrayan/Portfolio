# RayanOS — Design System

**RayanOS** is the brand & design system for the portfolio of **Rayan SAID FARAH** — a fullstack web developer / cybersecurity & networks student. The core idea: the portfolio is not a page, it's a **fictional experimental operating system in the browser**. A short boot sequence drops you onto a desktop where each facet of Rayan's profile is an "application" you open, drag and explore. One strong identity (a warm, riced-Linux OS) that *contains* two sub-aesthetics as apps: a real-time network **supervision** dashboard (NOC) and a **digital-twin blueprint**.

This folder gives a design agent everything needed to produce on-brand interfaces, slides, mocks and production code for Rayan.

---

## 1. Who & what

- **Person:** Rayan SAID FARAH — 3rd-year BUT *Réseaux & Télécommunications* (cybersecurity track), Université Sorbonne Paris Nord. Heading toward an engineering school, then network architect on critical infrastructure.
- **Domains:** fullstack web (Next.js / React / TypeScript), cybersecurity & pentesting, network administration & simulation, automation, IoT / connected homes (Home Assistant), AI agents, digital twins / MAPE-K, Linux & open source.
- **Personality (his own words):** *curieux, ambitieux, créatif* (curious, ambitious, creative).
- **Notable experience:** SFI **SmartOcean** research (Western Norway University, 2026 — subsea acoustic sensors → cloud), **Kolchy** internship (2025, Next.js client portal), Salvia Développement (2023).
- **30 skills across 8 categories**, 6+ projects (Quiz Master, FastFoodBike, Pentesting Suite, AI Agents Dashboard, ESP32 Digital Twin, SmartOcean).

### Sources (the reader may not have access — kept for reference)
- **GitHub repo:** https://github.com/sfrayan/Portfolio (branch `master`)
- **Live site (OLD design — being replaced):** https://sfrayan.github.io/Portfolio/
- The old site is a dark blue/red (`#0f3460` / `#e94560`) Font-Awesome + emoji portfolio. **RayanOS is a total, deliberate departure from it** — do not reuse the old palette or tropes.

---

## 2. Brief & decisions

Rayan asked for a *radical* redesign and 3 distinct art directions. Three were proposed (see `3 Directions Artistiques.html`): **01 Salle de Supervision (NOC)**, **02 RayanOS (experimental OS)**, **03 Jumeau Numérique (blueprint)**. The chosen direction is the **hybrid**: RayanOS as the shell, with NOC and Blueprint living inside as apps.

Locked-in preferences:
- **Bilingual FR / EN** with a live switch in the menubar (FR is default).
- **Easter eggs, fully embraced** — terminal commands (`neofetch`, `matrix`, `coffee`, `konami`, `sudo`, …) and a global Konami-code listener.
- Tone: **geek but sharp**. Boot → desktop. First impression target: *"this is a real OS, and this person clearly builds serious technical things."*

---

## 3. CONTENT FUNDAMENTALS — how copy is written

- **Voice:** first person, technical, confident but not boastful. Rayan describes systems precisely ("composants logiciels pour capteurs sous-marins acoustiques intégrés au cloud"), lists concrete stacks, avoids fluff.
- **Person & address:** content *about* Rayan is first person ("Je suis…", "I build…"). UI chrome and the OS speak *to* the visitor playfully ("Appuyez pour entrer", `rayan@rayanos:~$`). The terminal answers in first person + lowercase geek register ("rayan — curieux · ambitieux · créatif").
- **Casing:**
  - **App / file / command names are lowercase with extensions** — `about.app`, `supervision.app`, `jumeau.app`, `quiz-master.app`, `pentest-suite.sh`, `esp32-twin.ino`. This is the signature naming convention. Use it everywhere.
  - **Eyebrows / labels / data headers are UPPERCASE mono** with wide tracking — `MODULES DU SYSTÈME`, `BOUCLE D'AUTO-RÉGULATION · MAPE-K`, `SERVICES DÉPLOYÉS`.
  - **Display headings** use sentence case or Title Case in Sora ("Centre de supervision", "Jumeau Numérique").
- **Bilingual:** every user-facing string exists in both FR and EN (`shared.jsx → T`). FR is primary; EN must read just as naturally, never machine-literal. Keep technical terms identical across languages (Next.js, MAPE-K, pentesting).
- **Numbers & status:** factual, terse — `30 systèmes`, `99.9% disponibilité`, `● live` / `◐ wip`, `4 Technologies`. Status is framed in ops language (deployed / online / monitored), reinforcing the OS metaphor. Don't invent vanity stats.
- **Emoji:** essentially **none in the UI** (the old site overused them — avoid). The only sanctioned exceptions are *inside the terminal* as ASCII-art garnish / jokes (☕, 😏, ✦) and the macOS-style traffic-light affordance is drawn, not emoji. Prefer Lucide line icons everywhere else.
- **Punctuation flourish:** middot `·` as a separator, arrows `→ ← ↻ ◄──►` in technical/blueprint contexts, `$` and `~/` for terminal/file flavor.

---

## 4. VISUAL FOUNDATIONS

The full token set lives in **`colors_and_type.css`**. Summary of the language:

### Color
- **Mood:** dark, warm, "aubergine charcoal" — *not* the usual blue-black dev portfolio. Base `#15131C` over a deepest `#0F0E15` wallpaper. Surfaces step up `#1E1B28 → #262232 → #2F2A3D`, borders `#332E42`.
- **Primary accent:** **coral `#FF6B4A`** (hover `#FF8466`, press `#E85535`). This is the brand color — actions, the logo gradient, focus.
- **System semantics:** mint `#6EE7B7` (success / online), gold `#FBBF6B` (warning / highlight), alert `#FF5470` (danger).
- **App accent sets** (used *only* inside their app to give each a distinct world):
  - `supervision.app` (NOC): phosphor `#5BF2A8` + cyan `#38E1FF` + amber `#F5B544` on a near-black green-tinted ground `#08100C`, with faint CRT scanlines.
  - `jumeau.app` (blueprint): signal orange `#F0663F` + teal `#1FA89B` + blueprint-blue ink `#6FA8FF` on a deep navy `#0A1322` with a 20px blueprint grid.
- **Imagery vibe:** when photos/screenshots are used they sit *inside* window frames, never full-bleed behind text. Tech logos are kept on their own surface chips. Cool/technical, never warm-filtered or grainy stock.

### Type
- **Two families only.** `Sora` (display + UI, weights 400–800) and `JetBrains Mono` (terminal, data, labels, file names, window titles). **Sora** loads from Google Fonts CDN; **JetBrains Mono** is wired from the uploaded **Nerd Font** files in `fonts/` via `@font-face` (monospace variant, weights 400/500/600/700) — the Nerd Font adds the dev/glyph character that fits the OS terminal vibe.
- **Display** = Sora, bold/black, slightly tight tracking (`-0.02em`) for big headings. **Eyebrows / labels** = JetBrains Mono uppercase, wide tracking (`0.22em`). **Body** = Sora 400, line-height 1.6.
- Web-app density scale (12 → 60px), see `--text-*`. This is a screen UI, not a slide deck, so body sits around 15px.

### Space, radius, elevation
- **4px spacing grid** (`--space-*`).
- **Rounded OS surfaces:** windows `14px`, cards/dock items `10px`, chips/inputs/buttons `6px`, pills `999px`.
- **Shadows are cool, soft and large** (windows: `0 30px 80px rgba(0,0,0,.55)` + 1px hairline border). Plus coral/mint **glows** for accents (`--glow-coral`, `--glow-mint`). No harsh black drop shadows.
- **Glass:** the menubar and dock use `backdrop-filter: blur(18px) saturate(140%)` over a translucent `rgba(20,18,26,.72)`. Reserve blur for floating chrome (menubar, dock), not content panels.

### Backgrounds & texture
- Desktop wallpaper = deep base + two soft radial glows (coral top-right, mint bottom-left) + a faint 44px dot/line grid at ~5% opacity. Atmospheric, never busy.
- Per-app textures: scanlines (NOC), blueprint grid (jumeau). These are signatures — keep them subtle (opacity ≤ 0.6).

### Motion & states
- **Important constraint:** the live preview environment **freezes CSS `@keyframes` and `transition`-based reveals inconsistently** — windows animated with opacity keyframes got stuck invisible. **Do not gate visibility on a CSS animation/transition.** Render content at its final visible state; use JS-driven state changes for motion if needed, and always ensure the resting state is fully visible.
- Where motion is safe: hover transforms on dock items (`translateY(-8px) scale(1.08)`), the boot sequence (driven by `setInterval`, not CSS), the Konami flash (a one-shot box-shadow pulse).
- **Easing:** `--ease-out` (cubic-bezier(.16,1,.3,1)) for reveals, `--ease-snap` (overshoot) for playful dock/press.
- **Hover:** lighten surface + coral border + slight lift. **Press / active:** darker coral, no aggressive shrink.
- **Focus (windows):** focused window gets the big `--shadow-window`; unfocused drop to `--shadow-md`.

### Window chrome (signature component)
- macOS-style title bar: three traffic-light dots (`#FF5F57 / #FEBC2E / #28C840`) on the left, the red one closes; then a mono window title with the app's accent-colored Lucide icon and the lowercase `app.name` convention. Title bar is draggable. Body scrolls; window has a `maxHeight`.

---

## 5. ICONOGRAPHY

- **Primary icon system: [Lucide](https://lucide.dev)** — loaded via CDN (`https://unpkg.com/lucide@latest/dist/umd/lucide.js`), rendered as `<i data-lucide="name">` and hydrated with `lucide.createIcons()` in a `useEffect` that runs after each render. Consistent 2px stroke, rounded line style — matches the clean, technical OS feel. This is a **substitution / upgrade**: the original repo used **Font Awesome 6 + lots of emoji**; RayanOS deliberately replaces both with Lucide for coherence. *(Flagged: if Rayan prefers Font Awesome or a specific icon set, we swap — but Lucide is the recommendation.)*
- **Icon usage map:** `user-round` (about), `folder` / `folder-open` (projects), `radar` (supervision), `box` (jumeau), `square-terminal` (terminal), `send` (contact), `network` / `code-xml` / `database` / `container` / `terminal` / `route` / `shield-half` / `activity` (the 8 skill categories), `github` / `mail` / `linkedin` / `map-pin` (socials), `globe` / `cpu` / `brain-circuit` (project kinds).
- **Emoji:** avoided in UI (see Content Fundamentals). Only the terminal uses a few as deliberate ASCII-art garnish.
- **Unicode glyphs as micro-icons:** `●  ◐  ✦  ↻  →  ←  ◄──►  ·` appear in data/blueprint/terminal contexts — cheap, on-theme, intentional.
- **Logo / brand mark:** Rayan's monogram **"R"** in a coral→`#C9402A` gradient rounded square (the OS icon). The repo's animated `gifs/LOGO RSF.gif` exists but its first frame is blank — **not used**; the gradient "R" tile is the working mark. *(Flagged: if Rayan provides a clean static logo, drop it into `assets/` and replace the tile.)*

### Real assets copied into `assets/`
Imported from the GitHub repo (third-party tech logos are Rayan's own skill-stack references):
- **Schools:** `USPN.png`, `IUTV.jpg`, `Efrei.png`
- **Tech / tools:** `python.png`, `JavaScript.png`, `html5.png`, `Azure.png`, `arduino-logo-0.png`, `Cisco-Packet-Tracer.png`, `Wireshark.png`, `Metasploit.png`, `Nessus.png`, `Zabbix.png`, `Snort.png`, `Fail2ban.png`, `Scapy.png`
- `gifs/LOGO RSF.gif` (animated monogram, blank first frame — reference only)

---

## 6. INDEX — what's in this folder

| File | Purpose |
|---|---|
| `README.md` | This file — context, content & visual rules, iconography, index. |
| `colors_and_type.css` | All design tokens: color ramp, app accents, type scale, spacing, radii, shadows, motion. **Single source of truth.** |
| `SKILL.md` | Agent-Skill manifest so this system can be used as a Claude Code skill. |
| `3 Directions Artistiques.html` | The original 3-concept exploration (NOC / RayanOS / Blueprint), side-by-side on a canvas. |
| `preview/` | Small HTML cards that populate the Design System tab (colors, type, spacing, components, brand). |
| `assets/` (= `images/` + `gifs/`) | Real logos & tech icons imported from the repo. |
| `ui_kits/portfolio/` | **The RayanOS UI kit** — a clickable, hi-fi prototype of the whole portfolio-OS. See its own `README.md`. |

### UI kits
- **`ui_kits/portfolio/`** — RayanOS desktop: boot screen, menubar (FR/EN switch), dock, draggable windows, and six apps (`about`, `projects` file-explorer, `supervision` NOC dashboard, `jumeau` blueprint, `terminal` with easter eggs, `contact`). Entry point: `ui_kits/portfolio/index.html`.

---

## 7. Quick rules for building on-brand

1. Dark aubergine base, **coral** is the only "loud" brand color; mint/gold/alert are semantic; phosphor-cyan and signal-orange belong to their apps only.
2. **Sora + JetBrains Mono**, nothing else. Mono for anything data/label/terminal/file-like.
3. Name things like files & apps, lowercase with extensions. UPPERCASE mono for eyebrows.
4. Lucide icons, 2px stroke. No emoji outside the terminal. No Font Awesome.
5. Everything bilingual FR/EN.
6. Never depend on a CSS animation/transition for an element to *appear* — resting state must be visible.
7. Rounded windows, soft cool shadows + accent glows, glass only on floating chrome.
8. Keep it geek but sharp: precise copy, real stacks, ops-language status, a couple of easter eggs.
