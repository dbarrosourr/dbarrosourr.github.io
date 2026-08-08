# CV — Daniel Barroso Urrutia

## Concepto

Un CV de una sola página con estética de terminal/editor de código: se navega como si fuera una consola, con un toque de personalidad pero profesional. El gancho es que "se siente hecho por y para programadores", no una plantilla genérica.

## Stack y restricciones (IMPORTANTES)

Sin dependencias de terceros en el frontend (solo Astro y lo mínimo del ecosistema para dev).
CERO dependencias de terceros y CERO llamadas a APIs externas. Todos los datos
van en un único fichero `data.js`.
Renderizado principalmente estático (SSG): `npm run build` genera un `dist/` estático funcional.
Debe funcionar abriendo el sitio sin backend ni build de producción complejo.
Accesible: HTML semántico, navegable por teclado, contraste correcto (WCAG AA).
Responsive de verdad: impecable en móvil y en escritorio.

## Datos (contenido real del perfil)

Los datos son los del perfil real de LinkedIn de Daniel Barroso Urrutia
(https://www.linkedin.com/in/daniel-barroso-urrutia/), con este criterio:

- **Cabecera**: nombre, rol (`Software Engineer`), una línea de propuesta de valor,
  enlaces (GitHub y email con placeholder, LinkedIn real).
- **Sobre mí**: 4 frases.
- **Experiencia**: 3 puestos (PrimeIT 2024→, AICOR jul 2023–may 2024, Realtrack jul 2020–mar 2021).
  Los logros son **cualitativos** (no inventar métricas que no aparecen en LinkedIn).
- **Proyectos destacados**: 3, con stack usado y un resultado concreto (Monitor de
  criptodivisas con Flutter/TFG, Spotify API + CI/CD, Sistema de notificaciones deportivas).
- **Skills**: agrupadas por categoría (Lenguajes, Frontend y Móvil, Backend, DevOps y Herramientas).
- **Educación / certificaciones**: Grado y Máster por la Universidad de Almería; certificaciones
  AWS Certified Cloud Practitioner y AWS re/Start (2026), Google Cloud (Coursera 2023),
  Introducción al Hacking Ético (2021) y FCE (Cambridge).

Cambiar el CV = editar solo `src/data.js`.

## Lo que lo hace diferente

- Tema oscuro/claro con conmutador que respeta `prefers-color-scheme`.
- Command palette al estilo editor (`Ctrl/Cmd + K`) que salta entre secciones.
- Micro-interacciones sobrias: aparición al hacer scroll y efecto de typing solo en el titular.
- Botón de "imprimir / PDF" con estilos `@media print` cuidados (impreso queda como un CV clásico y limpio).
- Toque de identidad de dev: el rol se muestra como salida de un comando (`$ whoami` → `dbarroso`, `$ cat role.txt`).

## Estructura del proyecto (proyecto Astro real)

Proyecto Astro en modo SSG, con estructura de layouts, componentes y páginas.
JS minimizado: en la fuente, el único fichero `.js` es `data.js`; cada componente
co-ubica su `<script>` (buena práctica de Astro) y el único `is:inline` es el preload
del tema en `<head>` para evitar parpadeo.

```
src/
├── layouts/
│   └── BaseLayout.astro      # <html>/<head>, theme preload, skip-link, slot, reveal
├── components/
│   ├── TopBar.astro          # barra de editor + tema/imprimir/buscar (script propio)
│   ├── Hero.astro            # $ whoami, nombre, typing del rol, enlaces (script propio)
│   ├── Section.astro         # wrapper reutilizable (id, data-nav, h2 con //)
│   ├── About.astro
│   ├── Experience.astro
│   ├── Projects.astro
│   ├── Skills.astro
│   ├── Education.astro
│   ├── Footer.astro
│   └── CommandPalette.astro  # <dialog> + palette (script propio)
├── pages/
│   ├── index.astro           # monta las secciones
│   └── 404.astro
├── data.js                   # única fuente de datos
├── styles.css                # tema claro/oscuro, layout, responsive
└── print.css                 # @media print
```

## Criterios de aceptación

- `npm create astro` + `npm run dev` sin errores.
- Cambiar un dato en `data.js` se refleja en la página sin tocar nada más.
- El modo impresión genera un PDF legible y profesional.
- `npm run build` genera un sitio estático funcional.
- Funciona con teclado y pasa una revisión básica de accesibilidad.
