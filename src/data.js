// Única fuente de datos del CV. Edita este fichero para cambiar el contenido.

export const cv = {
  meta: {
    lang: 'es',
    title: 'Daniel Barroso Urrutia · Software Engineer',
    description:
      'CV de Daniel Barroso Urrutia, Software Engineer. Desarrollo FullStack y móvil: React, Flutter, React Native, Node.js y Docker.',
  },

  profile: {
    name: 'Daniel Barroso Urrutia',
    // Salida de `$ whoami`
    alias: 'dbarroso',
    // Ruta del PDF del CV en public/ (relativa a la base)
    cvUrl: 'CV-DanielBarroso.pdf',
    // Texto que se escribe con el efecto typing
    role: 'Software Engineer',
    tagline:
      'Ingeniero informático especializado en desarrollo FullStack y DevOps: aplicaciones web y móviles multiplataforma, Linux y microservicios con Docker.',
    links: [
      { label: 'GitHub', url: 'https://github.com/byMagg' },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/daniel-barroso-urrutia/',
      },
      { label: 'Email', url: 'mailto:dbarrosourr@gmail.com' },
    ],
  },

  about: [
    'Ingeniero informático por la Universidad de Almería, con máster en Tecnologías y Aplicaciones en Ingeniería Informática y más de dos años de experiencia desarrollando aplicaciones web y móviles.',
    'Trabajo de punta a punta: frontend con React, Flutter y React Native, backend con Node.js y Laravel, y despliegue en la nube con Docker, AWS y Google Cloud.',
    'Me enfoco en el desarrollo FullStack y DevOps: me gusta entender el sistema completo, desde el píxel hasta la infraestructura, y automatizar todo lo repetible.',
    'Apasionado de la informática desde pequeño, me adapto rápido a nuevas tecnologías y me gusta construir productos multiplataforma que resuelvan problemas reales.',
  ],

  experience: [
    {
      role: 'Software Developer',
      company: 'PrimeIT España',
      location: 'Almería',
      period: '2024 — 2026',
      summary:
        'Desarrollo de software para clientes de la consultora: aplicaciones web y móviles multiplataforma en proyectos FullStack.',
      achievements: [
        'Participo en el desarrollo FullStack de aplicaciones para clientes, combinando frontend y backend en entornos ágiles.',
        'Contribuyo a desplegar y mantener servicios en contenedores Docker sobre infraestructura cloud.',
        'Colaboro en la definición técnica de nuevas funcionalidades con equipos multidisciplinares.',
      ],
    },
    {
      role: 'Desarrollador Full-Stack',
      company: 'AICOR Consultores Informáticos',
      location: 'Córdoba',
      period: 'Jul 2023 — May 2024',
      summary:
        'Desarrollo web de alto rendimiento y aplicaciones móviles multiplataforma para distintos clientes de la consultora.',
      achievements: [
        'Diseñé y gestioné aplicaciones web de alto rendimiento combinando React y Laravel, cuidando la experiencia de usuario.',
        'Encabecé el desarrollo de aplicaciones móviles con React Native y Expo para ampliar la accesibilidad en múltiples plataformas.',
        'Desarrollé y mantuve sitios web dinámicos y escalables con WordPress para el Kit Digital, reforzando la presencia online de la empresa.',
      ],
    },
    {
      role: 'Desarrollador Web',
      company: 'Realtrack Systems SL',
      location: 'Almería',
      period: 'Jul 2020 — Mar 2021',
      summary:
        'Desarrollo web y gestión de infraestructura en un equipo pequeño de producto centrado en reportes deportivos.',
      achievements: [
        'Desarrollé y mantuve aplicaciones web con Kotlin y JSF garantizando rendimiento y una experiencia fluida.',
        'Lideré un sistema de envío de notificaciones de reportes deportivos por email y Telegram con AWS Lambda y Node.js.',
        'Gestioné los servidores y utilicé Docker para optimizar el rendimiento y asegurar la escalabilidad de las aplicaciones.',
      ],
    },
  ],

  projects: [
    {
      name: 'Monitor de criptodivisas con Flutter',
      description:
        'Aplicación móvil para visualizar y monitorizar mercados de criptomonedas usando la API de Coinbase Pro. Trabajo de Fin de Grado.',
      stack: ['Flutter', 'Coinbase Pro API', 'Dart'],
      result:
        'Publicado en el repositorio de la Universidad de Almería; una primera toma de contacto real con apps multiplataforma y APIs financieras.',
    },
    {
      name: 'Spotify API + CI/CD',
      description:
        'Aplicación para buscar, insertar y valorar canciones desde la API de Spotify, con recomendaciones basadas en GPT-3.5.',
      stack: [
        'Ionic Angular',
        'Express.js',
        'Node.js',
        'MongoDB',
        'Firebase',
        'Docker',
        'Google Cloud',
        'GitHub Actions',
      ],
      result:
        'Desplegada en una instancia de Google Cloud con Docker y pipeline CI/CD con GitHub Actions que genera informes de calidad de código.',
    },
    {
      name: 'Sistema de notificaciones deportivas',
      description:
        'Herramienta de envío de notificaciones de reportes deportivos WIMU a usuarios por Telegram y email.',
      stack: ['Node.js', 'AWS Lambda', 'CloudWatch'],
      result:
        'Mejoró la comunicación con los usuarios y la difusión de información relevante mediante alertas automáticas y escalables.',
    },
  ],

  skills: [
    {
      category: 'Lenguajes',
      items: [
        'JavaScript',
        'TypeScript',
        'Java',
        'Kotlin',
        'Python',
        'SQL',
        'Dart',
      ],
    },
    {
      category: 'Frontend y Móvil',
      items: [
        'React',
        'React Native',
        'Flutter',
        'Angular (Ionic)',
        'HTML/CSS',
        'WordPress',
      ],
    },
    {
      category: 'Backend',
      items: [
        'Node.js',
        'Express',
        'Laravel',
        'REST APIs',
        'MongoDB',
        'Firebase',
      ],
    },
    {
      category: 'DevOps y Herramientas',
      items: [
        'Linux',
        'Docker',
        'AWS',
        'Google Cloud',
        'CI/CD (GitHub Actions)',
        'Git',
      ],
    },
  ],

  education: [
    {
      type: 'Máster',
      degree:
        'Tecnologías y Aplicaciones en Ingeniería Informática · TFM: periférico con infrarrojos',
      institution: 'Universidad de Almería',
      period: '2021 — 2025',
    },
    {
      type: 'Grado',
      degree:
        'Ingeniería Informática · TFG: visualización de mercados de criptodivisas con Flutter',
      institution: 'Universidad de Almería',
      period: '2016 — 2021',
    },
  ],
  certifications: [
    { name: 'AWS Certified Cloud Practitioner', year: '2026' },
    { name: 'AWS re/Start', year: '2026' },
    {
      name: 'Google Cloud · Essential Infrastructure (Coursera)',
      year: '2023',
    },
    { name: 'Introducción al Hacking Ético (Mastermind)', year: '2021' },
    { name: 'First Certificate in English (Cambridge)', year: '' },
  ],
}
