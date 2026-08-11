# AGENTS.md

## Project

Bilingual single-page CV (Spanish + English) for Daniel Barroso Urrutia with a terminal/code-editor aesthetic. Static Astro SSG site; no third-party frontend dependencies and no external API calls. There are no test, lint, or typecheck scripts — verification is `npm run build` and inspecting `dist/`.

## Commands

- Node is not on `PATH`; use `$HOME/.local/nodejs/bin` (e.g. `export PATH="$HOME/.local/nodejs/bin:$PATH"`). `package.json` requires Node `>=22.12.0`.
- `npm run dev` → dev server at `http://localhost:4321`; `npm run build` → static site in `dist/`; `npm run preview` → serve the build.

## Architecture

- **All CV content lives in one file per language**: `src/data/es.js` and `src/data/en.js`, each exporting a `cv` object. Changing the CV means editing only the file of the language being edited; nothing else should be touched for content edits.
- Multilingual support uses Astro's built-in i18n (`astro.config.mjs`): `es` is the default locale served at `/es/`, `en` is served at `/en/`, and the bare `/` is a static redirect to `/es/` (`prefixDefaultLocale: true` + `redirectToDefaultLocale: true`). Components resolve the current language with `Astro.currentLocale` and the helpers in `src/i18n/index.js` (`getCv(locale)`, `getUi(locale)`).
- `src/i18n/index.js` also holds the `ui` dict of interface strings per locale (skip-link, TopBar, Footer, aria-labels, palette strings). `cv.sections` in each data file provides localized section titles and `data-nav` labels.
- `src/pages/es/index.astro` and `src/pages/en/index.astro` mount the section components inside `src/layouts/BaseLayout.astro`, which provides `<head>`, `hreflang` alternates, the no-flash theme preload, skip-link, and the scroll-reveal script. `src/pages/index.astro` is the required root page that Astro redirects to `/es/`.
- One component per section in `src/components/`: `Hero`, `About`, `Experience`, `Projects`, `Skills`, `Education`, `Certifications`, plus `TopBar`, `Footer`, `CommandPalette`, and `Section` (a wrapper that adds `id`, `data-nav`, and `tabindex="-1"`).
- The only `.js` files in `src/` are the per-locale data files in `src/data/` and `src/i18n/index.js`. All other JS is colocated `<script>` inside `.astro` components (Astro bundles them per component). The single `is:inline` script is the theme preload in `BaseLayout`'s `<head>` — keep it inline to avoid a theme flash.

## Conventions and gotchas

- `.astro` files use **tabs** for indentation; `src/data/*.js` and `src/i18n/index.js` use **2 spaces**. Match the existing style per file.
- UI strings and `aria-label`s are translated per locale in `src/i18n/index.js`; code comments are in **Spanish**.
- Theme is set via the `data-theme` attribute on `<html>` and persisted under the localStorage key `theme`. The toggle lives in `TopBar`.
- The command palette is generated dynamically from `[data-nav]` sections plus action items, and references the IDs `#theme-toggle`, `#print-btn`, `#palette-btn`. Its localized strings (placeholder, empty state, action labels) are injected as `data-*` attributes on the `<dialog>` and read from `dialog.dataset` in the colocated script. Renaming section `data-nav` labels, those IDs, or those `data-*` attributes silently breaks it.
- `#print-btn` is a download anchor for the CV PDF; the per-locale file comes from `profile.cvUrl` in each `src/data/*.js` and the actual PDF must live at `public/<cvUrl>` (e.g. `public/es/CV-DanielBarroso.pdf` served from `/es/CV-DanielBarroso.pdf`, and `public/en/CV-DanielBarroso.pdf` for the English one). The `download` attribute keeps the canonical name `CV-DanielBarroso.pdf` for all languages. Its href uses `import.meta.env.BASE_URL` so it keeps working if a `base` is set (e.g. GitHub Pages subpath).
- The language switcher in `TopBar` links between `/es/` and `/en/` (reload-based). To add a new language: add a locale to `astro.config.mjs` `i18n.locales`, create `src/pages/<locale>/index.astro`, create `src/data/<locale>.js`, add its `ui` dict in `src/i18n/index.js`, add a link in `TopBar`, and add the per-locale PDF in `public/<locale>/`.
- Scroll reveal: mark elements with `data-reveal`; `BaseLayout`'s IntersectionObserver adds the `in-view` class (and respects `prefers-reduced-motion` by showing everything immediately).
- Accessibility is a hard requirement and must be preserved when editing: skip-link, semantic sections with `data-nav` + `tabindex="-1"` (needed for palette focus), and WCAG AA contrast.
