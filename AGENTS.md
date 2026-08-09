# AGENTS.md

## Project

Single-page CV (in Spanish) for Daniel Barroso Urrutia with a terminal/code-editor aesthetic. Static Astro SSG site; no third-party frontend dependencies and no external API calls. There are no test, lint, or typecheck scripts — verification is `npm run build` and inspecting `dist/`.

## Commands

- Node is not on `PATH`; use `$HOME/.local/nodejs/bin` (e.g. `export PATH="$HOME/.local/nodejs/bin:$PATH"`). `package.json` requires Node `>=22.12.0`.
- `npm run dev` → dev server at `http://localhost:4321`; `npm run build` → static site in `dist/`; `npm run preview` → serve the build.

## Architecture

- **All CV content lives in `src/data.js`** (exported `cv` object). Changing the CV means editing only that file; nothing else should be touched for content edits.
- `src/pages/index.astro` mounts the section components inside `src/layouts/BaseLayout.astro`, which provides `<head>`, the no-flash theme preload, skip-link, and the scroll-reveal script.
- One component per section in `src/components/`: `Hero`, `About`, `Experience`, `Projects`, `Skills`, `Education`, plus `TopBar`, `Footer`, `CommandPalette`, and `Section` (a wrapper that adds `id`, `data-nav`, and `tabindex="-1"`).
- The only `.js` file in `src/` is `data.js`. All other JS is colocated `<script>` inside `.astro` components (Astro bundles them per component). The single `is:inline` script is the theme preload in `BaseLayout`'s `<head>` — keep it inline to avoid a theme flash.

## Conventions and gotchas

- `.astro` files use **tabs** for indentation; `src/data.js` uses **2 spaces**. Match the existing style per file.
- UI strings, `aria-label`s, and code comments are in **Spanish**.
- Theme is set via the `data-theme` attribute on `<html>` and persisted under the localStorage key `theme`. The toggle lives in `TopBar`.
- The command palette is generated dynamically from `[data-nav]` sections plus hardcoded actions, and references the IDs `#theme-toggle`, `#print-btn`, `#palette-btn`. Renaming section `data-nav` labels or those IDs silently breaks it.
- `#print-btn` is a download anchor for the CV PDF; the filename comes from `profile.cvUrl` in `src/data.js` and the actual PDF must live at `public/<filename>` (e.g. `public/CV-DanielBarroso.pdf`, served from `/<filename>`). Its href uses `import.meta.env.BASE_URL` so it keeps working if a `base` is set (e.g. GitHub Pages subpath).
- Scroll reveal: mark elements with `data-reveal`; `BaseLayout`'s IntersectionObserver adds the `in-view` class (and respects `prefers-reduced-motion` by showing everything immediately).
- Accessibility is a hard requirement and must be preserved when editing: skip-link, semantic sections with `data-nav` + `tabindex="-1"` (needed for palette focus), and WCAG AA contrast.
