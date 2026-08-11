// Única fuente de datos del CV. Edita este fichero para cambiar el contenido.

export const cv = {
  meta: {
    lang: 'es',
    title: 'Daniel Barroso Urrutia · Software Engineer',
    description:
      'CV de Daniel Barroso Urrutia, Software Engineer. Desarrollo FullStack y móvil: React, Flutter, React Native, Node.js y Docker.',
  },

  // Etiquetas de navegación y títulos de sección, localizados
  sections: {
    hero: { nav: 'Inicio', title: 'Inicio' },
    about: { nav: 'Sobre mí', title: 'Sobre mí' },
    experience: { nav: 'Experiencia', title: 'Experiencia' },
    projects: { nav: 'Proyectos', title: 'Proyectos destacados' },
    skills: { nav: 'Skills', title: 'Skills' },
    education: { nav: 'Educación', title: 'Educación' },
    certifications: { nav: 'Certificaciones', title: 'Certificaciones' },
  },

  profile: {
    name: 'Daniel Barroso Urrutia',
    // Salida de `$ whoami`
    alias: 'dbarroso',
    // Ruta del PDF del CV en public/ (relativa a la base)
    cvUrl: 'es/CV-DanielBarroso.pdf',
    // Texto que se escribe con el efecto typing
    role: 'Ingeniero de Software',
    location: '04720 Almería, España',
    tagline:
      'Mi enfoque profesional se centra en el Desarrollo FullStack y DevOps, aprovechando mi amplio conocimiento en Linux, microservicios Docker e infraestructura como código.',
    links: [
      { label: 'Teléfono', url: 'tel:+34626631587' },
      { label: 'GitHub', url: 'https://github.com/byMagg' },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/daniel-barroso-urrutia/',
      },
      { label: 'Email', url: 'mailto:dbarrosourr@gmail.com' },
    ],
  },

  about: [
    'Mi enfoque profesional se centra en el Desarrollo FullStack y DevOps: aprovecho mi amplio conocimiento en Linux, microservicios Docker e infraestructura como código para trabajar de punta a punta.',
    'Ingeniero informático por la Universidad de Almería, con máster en Tecnologías y Aplicaciones en Ingeniería Informática y tres años de experiencia desarrollando aplicaciones web y móviles.',
    'Trabajo de punta a punta: frontend con React, Flutter y React Native, backend con Node.js y Laravel, y despliegue en la nube con Docker, AWS y Google Cloud.',
    'Me gusta entender el sistema completo, desde el píxel hasta la infraestructura, y automatizar todo lo repetible.',
    'Apasionado de la informática desde pequeño, me adapto rápido a nuevas tecnologías y me gusta construir productos multiplataforma que resuelvan problemas reales.',
  ],

  experience: [
    {
      role: 'Desarrollador de software',
      company: 'PrimeIT España',
      location: 'Remoto',
      period: '2024 — 2026',
      summary:
        'Desarrollo de software para clientes de la consultora: aplicaciones web complejas y gestión de bases de datos en entornos ágiles.',
      achievements: [
        'Desarrollo y mantenimiento de aplicaciones web complejas utilizando JavaScript.',
        'Implementación y gestión de bases de datos MongoDB.',
        'Colaboración estrecha con equipos multidisciplinares para implementar nuevas funcionalidades.',
      ],
    },
    {
      role: 'Desarrollador fullstack',
      company: 'Aicor Consultores S.L.',
      location: 'Remoto',
      period: '2023 — 2024',
      summary:
        'Diseño y gestión de aplicaciones web de alto rendimiento y proyectos de desarrollo móvil multiplataforma para distintos clientes de la consultora.',
      achievements: [
        'Diseño y gestión de aplicaciones web de alto rendimiento, cuidando la experiencia de usuario.',
        'Ejecución exitosa de proyectos de desarrollo de aplicaciones móviles.',
        'Desarrollé y mantuve sitios web dinámicos y escalables con WordPress para el Kit Digital, reforzando la presencia online de la empresa.',
      ],
    },
    {
      role: 'Desarrollador web',
      company: 'Realtrack Systems S.L.',
      location: 'Almería',
      period: '2020 — 2021',
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
      images: ['img/tradingbot_1.jpg', 'img/tradingbot_2.jpg'],
      description:
        'Aplicación móvil para visualizar y monitorizar mercados de criptomonedas usando la API de Coinbase Pro. Trabajo de Fin de Grado.',
      stack: ['Flutter', 'Coinbase Pro API', 'Dart'],
      result:
        'Publicado en el repositorio de la Universidad de Almería; una primera toma de contacto real con apps multiplataforma y APIs financieras.',
    },
    {
      name: 'Spotify API + CI/CD',
      images: ['img/hightracks.jpg'],
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
    {
      name: 'Portfolio personal con Astro',
      images: ['img/portfolio.jpg'],
      description:
        'CV de una sola página con estética de terminal/editor de código, generado estáticamente con Astro y sin dependencias frontend de terceros.',
      stack: [
        'Astro',
        'JavaScript',
        'CSS',
        'HTML',
        'GitHub Actions',
        'GitHub Pages',
        'OpenCode',
      ],
      result:
        'Sitio rápido, accesible y con modo oscuro, desarrollado en pareja con la IA de OpenCode como asistente de programación: mayor productividad, mejores prácticas y flujo de trabajo moderno, sin llamadas externas ni dependencias de terceros.',
    },
  ],

  skills: [
    {
      category: 'Lenguajes de Programación',
      items: [
        'Java',
        'Kotlin',
        'JavaScript',
        'TypeScript',
        'Python',
        'MySQL',
        'PHP',
        'SQL',
        'Dart',
      ],
    },
    {
      category: 'Infraestructura',
      items: [
        'Linux',
        'Amazon Web Services (AWS)',
        'Google Cloud Platform (GCP)',
        'Terraform',
        'GitHub Actions',
        'Docker',
        'CI/CD',
        'Microservicios',
        'Kubernetes',
        'Swagger',
        'Jenkins',
        'Cypress.io',
        'OpenStack',
        'Git',
      ],
    },
    {
      category: 'Frontend',
      items: [
        'React',
        'HTML',
        'CSS',
        'Angular',
        'Ionic',
        'React Native',
        'Astro.js',
        'Flutter',
        'WordPress',
      ],
    },
    {
      category: 'Backend',
      items: [
        'Node.js',
        'Express',
        'Websockets',
        'API REST',
        'SpringBoot',
        'Firebase',
        'Laravel',
      ],
    },
    {
      category: 'Bases de Datos',
      items: ['SQL', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Idiomas',
      items: ['Inglés B2 Cambridge — Competencia profesional de trabajo'],
    },
    {
      category: 'Aptitudes',
      items: [
        'Capacidad de análisis',
        'Organización eficaz',
        'Inteligencia emocional',
      ],
    },
    {
      category: 'IA',
      items: ['ClaudeCode', 'OpenCode', 'ChatGPT'],
    },
  ],

  education: [
    {
      type: 'Programa',
      degree: 'Cloud Computing AWS (565 horas + Certificación)',
      institution:
        'Fundación Generation Spain · Escuela de Organización Industrial (EOI)',
      period: '2026',
    },
    {
      type: 'Máster',
      degree:
        'Tecnologías y Aplicaciones en Ingeniería Informática, Desarrollo Web/Móvil',
      institution: 'Universidad de Almería',
      period: '2021 — 2023',
    },
    {
      type: 'Grado',
      degree: 'Ingeniería Informática',
      institution: 'Universidad de Almería',
      period: '2016 — 2020',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner (CLF-C02)',
      year: '2026',
      logo: 'logos/aws.jpg',
      url: 'https://www.credly.com/badges/e14d8037-86da-4230-aacc-ddb0fd78104d/linked_in_profile',
    },
    {
      name: 'AWS re/Start',
      year: '2026',
      logo: 'logos/aws.jpg',
      url: 'https://www.credly.com/badges/f35d26fd-ee2d-4305-8ee6-faf2902afe89/linked_in_profile',
    },
    {
      name: 'Google Cloud · Essential Infrastructure',
      year: '2023',
      logo: 'logos/coursera.jpg',
      url: 'https://www.coursera.org/account/accomplishments/verify/DLV5C3LNPTEV',
    },
    {
      name: 'Introducción al Hacking Ético (Mastermind)',
      year: '2021',
      logo: 'logos/mastermind.jpg',
      url: '',
    },
    {
      name: 'First Certificate in English (Cambridge)',
      year: '',
      logo: 'logos/cambridge.jpg',
      url: '',
    },
  ],
}
