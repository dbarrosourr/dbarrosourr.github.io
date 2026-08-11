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
      langLabel: 'Idioma',
    },
    skipLink: 'Saltar al contenido',
    hero: { contact: 'Enlaces de contacto' },
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
      langLabel: 'Language',
    },
    skipLink: 'Skip to content',
    hero: { contact: 'Contact links' },
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
