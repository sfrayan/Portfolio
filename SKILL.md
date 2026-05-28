---
name: rayanos-design
description: Use this skill to generate well-branded interfaces and assets for RayanOS — the experimental-OS portfolio of Rayan SAID FARAH (fullstack dev · cybersecurity · networks · AI) — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and the RayanOS UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast orientation
- **`README.md`** — full brand context, content fundamentals, visual foundations, iconography, file index. Read first.
- **`colors_and_type.css`** — all design tokens (color ramp, app accents, type scale, spacing, radii, shadows, motion). Link or copy this; it's the single source of truth.
- **`ui_kits/portfolio/`** — the RayanOS UI kit (boot, menubar, dock, draggable windows, 6 apps). Reuse `shared.jsx` / `chrome.jsx` / `apps*.jsx` components; see its README.
- **`preview/`** — small token/component reference cards.
- **`assets/`** — real logos & tech icons from Rayan's repo.

## Non-negotiables
1. Dark aubergine base (`#15131C`), **coral `#FF6B4A`** is the only loud brand color; mint/gold/alert are semantic; phosphor-cyan (NOC) and signal-orange (blueprint) are scoped to their apps.
2. **Sora** (display/UI) + **JetBrains Mono** (data/labels/terminal/file names) — nothing else.
3. Name things like apps/files, lowercase with extensions (`about.app`, `esp32-twin.ino`); UPPERCASE mono eyebrows.
4. **Lucide** icons (2px stroke), no emoji outside the terminal, no Font Awesome.
5. Everything **bilingual FR/EN** (FR default).
6. Never gate an element's visibility on a CSS animation/transition — resting state must be visible.
7. Geek but sharp: precise copy, real stacks, ops-language status, a couple of easter eggs.
