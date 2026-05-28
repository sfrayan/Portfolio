# RayanOS — UI Kit (portfolio)

A high-fidelity, clickable recreation of **RayanOS**: the experimental-OS portfolio of Rayan SAID FARAH. This is the product surface of the design system — open `index.html` and you get a working desktop, not a storybook.

## What it is

The portfolio reimagined as a browser operating system. Boot sequence → desktop → drag/open "apps". Each app surfaces one facet of Rayan's profile, two of them in their own sub-aesthetic.

## Run it

Open **`index.html`**. It loads `../../colors_and_type.css` (design tokens), React 18 + Babel (inline JSX), and Lucide icons from CDN. No build step.

Flow: a short **boot screen** (`setInterval`-driven log) → click **Log in / Se connecter** → the **desktop** with the about window open. Open more apps from the **dock** (bottom) or the **desktop icons** (top-left). Drag windows by their title bar; the red traffic-light closes. Switch **FR ⇄ EN** from the menubar. Live clock, top-right.

## Files

| File | Role |
|---|---|
| `index.html` | App shell: window manager (open / focus / close / drag), boot gate, language state, Konami listener, app registry. |
| `shared.jsx` | `T` (FR/EN strings), real portfolio **data** (skill categories, projects, journey, socials), the `Icon` Lucide wrapper, and UI atoms (`StatusDot`, `Pill`). |
| `chrome.jsx` | `Wallpaper`, `Boot`, `MenuBar` (+ self-contained `Clock`), `Dock`, draggable `Window`. |
| `apps.jsx` | `AboutApp` (whoami + journey timeline), `ProjectsApp` (file-explorer), `ContactApp`. |
| `apps2.jsx` | `SupervisionApp` (NOC dashboard — skills as live telemetry), `JumeauApp` (blueprint — MAPE-K loop + project modules), `TerminalApp` (easter eggs). |

## The six apps

- **`about.app`** — whoami header, traits, lead/goal copy, a connected journey timeline (school vs work, current node glows coral), "now" status.
- **`projets`** — two-pane file explorer; project files (`quiz-master.app`, `pentest-suite.sh`, `ai-agents.tsx`, `esp32-twin.ino`, `fastfoodbike.app`, `smartocean.cloud`) → detail with status, stack pills, repo link.
- **`supervision.app`** *(NOC)* — near-black green ground + scanlines; 8 skill categories as monitored "subsystems", each skill a phosphor/cyan/amber telemetry bar; uptime + system count header.
- **`jumeau.app`** *(blueprint)* — navy blueprint grid; the MAPE-K self-regulation loop; IoT/featured projects drawn as dimensioned schematic modules. Signal-orange + teal.
- **`terminal`** — `rayan@rayanos:~$`. Commands: `help whoami ls skills projects contact date neofetch matrix konami coffee sudo clear`. Easter eggs included; `konami` (or the ↑↑↓↓←→←→BA key sequence anywhere) triggers a coral screen flash.
- **`contact.app`** — socials (GitHub `sfrayan`, email, LinkedIn, location) as connection tiles.

## Conventions used (match these when extending)

- **Window manager**: `wins` is an array of `{id,x,y,z,w,h,title,icon,accent}`. Focus = bump `z` to `max(z)+1`; open = push or re-focus; no separate z counter (avoids stale-closure bugs).
- **Icons**: render `<Icon name="lucide-name"/>`; `App` calls `lucide.createIcons()` in a `useEffect` after every render to hydrate `<i data-lucide>` → `<svg>`.
- **Style objects** are inline; no shared global `styles` object (avoids babel cross-file collisions). Components export to `window` via `Object.assign`.
- **⚠️ Motion caveat**: do **not** reveal windows with a CSS `@keyframes`/`transition` on opacity — the preview environment freezes them and elements stay invisible. Windows render at their final visible state. Hover transforms and the JS boot loop are fine.
- **Bilingual**: every string flows through `T[lang]`; data objects carry `fr`/`en` keys. Default `fr`.

## Known gaps / on purpose

- Forms (contact) are visual; links point to real GitHub where known, `#` otherwise.
- Project detail copy is concise; expand from the repo's per-project pages if needed.
- Window resizing/minimize/maximize are not implemented (close + drag + focus only) — intentional scope cut for a kit.
