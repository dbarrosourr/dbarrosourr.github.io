// Única fuente de datos del CV en inglés. Edita este fichero para cambiar el contenido.

export const cv = {
  meta: {
    lang: 'en',
    title: 'Daniel Barroso Urrutia · Software Engineer',
    description:
      'CV of Daniel Barroso Urrutia, Software Engineer. FullStack and mobile development: React, Flutter, React Native, Node.js and Docker.',
  },

  // Navigation labels and section titles, localized
  sections: {
    hero: { nav: 'Home', title: 'Home' },
    about: { nav: 'About', title: 'About' },
    experience: { nav: 'Experience', title: 'Experience' },
    projects: { nav: 'Projects', title: 'Featured projects' },
    skills: { nav: 'Skills', title: 'Skills' },
    education: { nav: 'Education', title: 'Education' },
    certifications: { nav: 'Certifications', title: 'Certifications' },
  },

  profile: {
    name: 'Daniel Barroso Urrutia',
    // Output of `$ whoami`
    alias: 'dbarroso',
    // CV PDF path under public/ (relative to the base)
    cvUrl: 'en/CV-DanielBarroso.pdf',
    // Text rendered with the typing effect
    role: 'Software Engineer',
    location: '04720 Almería, Spain',
    tagline:
      'My professional focus is on FullStack development and DevOps, leveraging my deep knowledge of Linux, Docker microservices and infrastructure as code.',
    links: [
      { label: 'Phone', url: 'tel:+34626631587' },
      { label: 'GitHub', url: 'https://github.com/byMagg' },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/daniel-barroso-urrutia/',
      },
      { label: 'Email', url: 'mailto:dbarrosourr@gmail.com' },
    ],
  },

  about: [
    'My professional focus is on FullStack development and DevOps: I leverage my deep knowledge of Linux, Docker microservices and infrastructure as code to work end to end.',
    'Computer engineer from the University of Almería, with a master\'s degree in Technologies and Applications in Computer Engineering and three years of experience developing web and mobile applications.',
    'I work end to end: frontend with React, Flutter and React Native, backend with Node.js and Laravel, and cloud deployment with Docker, AWS and Google Cloud.',
    'I like to understand the whole system, from the pixel to the infrastructure, and automate everything that is repeatable.',
    'Passionate about computing since I was young, I adapt quickly to new technologies and enjoy building cross-platform products that solve real problems.',
  ],

  experience: [
    {
      role: 'Software developer',
      company: 'PrimeIT España',
      location: 'Remote',
      period: '2024 — 2026',
      summary:
        'Software development for the consultancy\'s clients: complex web applications and database management in agile environments.',
      achievements: [
        'Developed and maintained complex web applications using JavaScript.',
        'Implemented and managed MongoDB databases.',
        'Worked closely with multidisciplinary teams to ship new features.',
      ],
    },
    {
      role: 'Fullstack developer',
      company: 'Aicor Consultores S.L.',
      location: 'Remote',
      period: '2023 — 2024',
      summary:
        'Design and management of high-performance web applications and cross-platform mobile development projects for different clients of the consultancy.',
      achievements: [
        'Designed and managed high-performance web applications, taking care of the user experience.',
        'Successfully delivered cross-platform mobile application development projects.',
        'Built and maintained dynamic, scalable WordPress websites for the Kit Digital programme, strengthening the company\'s online presence.',
      ],
    },
    {
      role: 'Web developer',
      company: 'Realtrack Systems S.L.',
      location: 'Almería',
      period: '2020 — 2021',
      summary:
        'Web development and infrastructure management in a small product team focused on sports reports.',
      achievements: [
        'Developed and maintained web applications with Kotlin and JSF, ensuring performance and a smooth experience.',
        'Led a sports report notification system by email and Telegram using AWS Lambda and Node.js.',
        'Managed the servers and used Docker to optimise performance and ensure the scalability of the applications.',
      ],
    },
  ],

  projects: [
    {
      name: 'Cryptocurrency monitor with Flutter',
      images: ['img/tradingbot_1.jpg', 'img/tradingbot_2.jpg'],
      description:
        'Mobile application to visualise and monitor cryptocurrency markets using the Coinbase Pro API. Bachelor\'s thesis.',
      stack: ['Flutter', 'Coinbase Pro API', 'Dart'],
      result:
        'Published in the University of Almería repository; a first real contact with cross-platform apps and financial APIs.',
    },
    {
      name: 'Spotify API + CI/CD',
      images: ['img/hightracks.jpg'],
      description:
        'Application to search, add and rate songs from the Spotify API, with recommendations based on GPT-3.5.',
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
        'Deployed on a Google Cloud instance with Docker and a CI/CD pipeline with GitHub Actions that generates code quality reports.',
    },
    {
      name: 'Sports notification system',
      description:
        'Tool to send WIMU sports report notifications to users by Telegram and email.',
      stack: ['Node.js', 'AWS Lambda', 'CloudWatch'],
      result:
        'Improved communication with users and the distribution of relevant information through automatic, scalable alerts.',
    },
    {
      name: 'Personal portfolio with Astro',
      images: ['img/portfolio.jpg'],
      description:
        'Single-page CV with a terminal/code-editor aesthetic, statically generated with Astro and without third-party frontend dependencies.',
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
        'Fast, accessible site with dark mode, developed in tandem with the OpenCode AI as a programming assistant: greater productivity, best practices and a modern workflow, without external calls or third-party dependencies.',
    },
  ],

  skills: [
    {
      category: 'Programming Languages',
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
      category: 'Infrastructure',
      items: [
        'Linux',
        'Amazon Web Services (AWS)',
        'Google Cloud Platform (GCP)',
        'Terraform',
        'GitHub Actions',
        'Docker',
        'CI/CD',
        'Microservices',
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
        'REST API',
        'SpringBoot',
        'Firebase',
        'Laravel',
      ],
    },
    {
      category: 'Databases',
      items: ['SQL', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Languages',
      items: ['English B2 Cambridge — Working professional proficiency'],
    },
    {
      category: 'Soft Skills',
      items: ['Analytical skills', 'Effective organisation', 'Emotional intelligence'],
    },
    {
      category: 'AI',
      items: ['ClaudeCode', 'OpenCode', 'ChatGPT'],
    },
  ],

  education: [
    {
      type: 'Programme',
      degree: 'Cloud Computing AWS (565 hours + Certification)',
      institution:
        'Fundación Generation Spain · Escuela de Organización Industrial (EOI)',
      period: '2026',
    },
    {
      type: "Master's",
      degree:
        'Technologies and Applications in Computer Engineering, Web/Mobile Development',
      institution: 'University of Almería',
      period: '2021 — 2023',
    },
    {
      type: 'Bachelor\'s degree',
      degree: 'Computer Engineering',
      institution: 'University of Almería',
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
      name: 'Introduction to Ethical Hacking (Mastermind)',
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
