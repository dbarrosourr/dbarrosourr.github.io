// Textos de interfaz y helpers de localización.
import { cv as cvEs } from '../data/es.js';
import { cv as cvEn } from '../data/en.js';

export const locales = ['es', 'en'];
export const defaultLocale = 'es';

const data = { es: cvEs, en: cvEn };
const ui = {
  es: {
    topbar: {
      title: 'CV',
      theme: 'Tema',
      download: 'Descargar CV',
      search: 'Buscar',
      live: 'Homelab en vivo',
      langLabel: 'Idioma',
    },
    skipLink: 'Saltar al contenido',
    hero: {
      contact: 'Enlaces de contacto',
      liveTitle: 'Homelab en vivo',
      liveSub: 'cluster, GitOps, backups y alertas en tiempo real',
    },
    footer: { thanks: 'gracias por leer' },
    projects: { stack: 'Stack tecnológico', result: 'Resultado' },
    palette: {
      placeholder: 'Escribe para filtrar…',
      searchLabel: 'Buscar sección o acción',
      resultsLabel: 'Resultados de búsqueda',
      empty: 'Sin resultados',
      section: 'sección',
      action: 'acción',
      downloadCv: 'Descargar CV (PDF)',
      toggleTheme: 'Alternar tema',
    },
  },
  en: {
    topbar: {
      title: 'Resume',
      theme: 'Theme',
      download: 'Download CV',
      search: 'Search',
      live: 'Live homelab',
      langLabel: 'Language',
    },
    skipLink: 'Skip to content',
    hero: {
      contact: 'Contact links',
      liveTitle: 'Live homelab',
      liveSub: 'cluster, GitOps, backups and alerts in real time',
    },
    footer: { thanks: 'thanks for reading' },
    projects: { stack: 'Tech stack', result: 'Result' },
    palette: {
      placeholder: 'Type to filter…',
      searchLabel: 'Search section or action',
      resultsLabel: 'Search results',
      empty: 'No results',
      section: 'section',
      action: 'action',
      downloadCv: 'Download CV (PDF)',
      toggleTheme: 'Toggle theme',
    },
  },
};

export const getCv = (locale) => data[locale] ?? data[defaultLocale];

export const getUi = (locale) => ui[locale] ?? ui[defaultLocale];
