export interface CVData {
  personalInfo: {
    name: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    linkedin: string;
    twitter: string;
    website: string;
    profileImage: string;
    location: string;
    availability: string;
  };
  impactMetrics: { number: string; label: string }[];
  professionalSummary: string;
  avilaDevInfo: {
    name: string;
    role: string;
    description: string;
    services: string[];
    achievements: string[];
    website: string;
  };
  workExperience: any[];
  featuredProjects: any[];
  technicalSkills: any;
  education: any[];
  certifications: string[];
  softSkills: any[];
  languages: any[];
  sectionTitles: {
    profile: string;
    services: string;
    achievements: string;
    techStack: string;
    frontend: string;
    backend: string;
    mobile: string;
    databases: string;
    cloud: string;
    education: string;
    languages: string;
    certifications: string;
    projects: string;
    experience: string;
    competencies: string;
  };
}

// Spanish version
export const cvDataES: CVData = {
  personalInfo: {
    name: 'MARCEL ANDRÉS MARÍN MARTÍNEZ',
    title: 'Full Stack Developer & Tech Entrepreneur',
    subtitle: 'Founder @ AvilaDev | Angular • NestJS • Next.js • React Native',
    email: 'marcelmarin256@gmail.com',
    phone: '+58 414-306-5447',
    linkedin: 'https://www.linkedin.com/in/marcel-andres-m-661a32125/',
    twitter: '@MARCEL_MARIN',
    website: 'aviladev.com',
    profileImage: 'assets/images/marcel-profile.jpg',
    location: 'Caracas, Venezuela',
    availability: 'Remoto / Híbrido',
  },

  impactMetrics: [
    { number: '20+', label: 'Proyectos Entregados' },
    { number: '5+', label: 'Años de Experiencia' },
    { number: '5,000+', label: 'Usuarios en Plataformas' },
    { number: '4', label: 'Países' },
  ],

  professionalSummary: `Ingeniero en Informática y emprendedor tech con +5 años de experiencia. Fundador de AvilaDev, agencia de software con proyectos en 4 países. Especializado en desarrollo full stack (React, Next.js, Angular, NestJS), aplicaciones móviles (React Native, Flutter) y integración de IA con prompt engineering. He liderado plataformas e-learning con miles de usuarios y sistemas de facturación electrónica para Latinoamérica.`,

  avilaDevInfo: {
    name: 'AvilaDev',
    role: 'Founder & Lead Developer',
    description: 'Agencia de desarrollo de software con proyectos en Venezuela, Rep. Dominicana, El Salvador y Guatemala.',
    services: [
      'Software a Medida (ERPs, CRMs)',
      'Apps Móviles (Flutter, React Native)',
      'E-commerce & Tiendas Online',
      'Integración de IA & Chatbots',
      'Plataformas E-learning',
      'Cloud & DevOps',
    ],
    achievements: [
      '20+ proyectos entregados',
      'Clientes en 4 países de Latinoamérica',
      'Equipos de hasta 4 desarrolladores',
      'Integración de OpenAI y automatización',
    ],
    website: 'https://aviladev.com',
  },

  workExperience: [
    {
      company: 'AvilaDev',
      role: 'Founder & Lead Developer',
      period: '2024 - Presente',
      description:
        'Fundé y dirijo mi agencia de desarrollo de software. Además de liderar el desarrollo técnico, me encargo de la presentación de productos y servicios a clientes potenciales, logrando cerrar ventas y fidelizar clientes en 4 países.',
      achievements: [
        'Presentación y venta de servicios tecnológicos a clientes, logrando cerrar proyectos de alto valor',
        'Software a medida: ERPs, sistemas administrativos y plataformas web en Angular, React y Next.js',
        'Apps móviles: desarrollo con Flutter, React Native y Android nativo para iOS y Android',
        'Integración de IA: chatbots con OpenAI API, automatización y prompt engineering',
        'E-commerce: tiendas online con WooCommerce, Shopify y pasarelas de pago',
        'Cloud & DevOps: AWS, Google Cloud, Docker y CI/CD',
      ],
      technologies: ['React', 'Next.js', 'Angular', 'NestJS', 'React Native', 'Flutter', 'OpenAI API', 'AWS', 'Docker'],
    },
    {
      company: 'ICG Software',
      role: 'Desarrollador Java Full Stack',
      period: '2023 - Presente',
      description:
        'Inicié desarrollando un APK fiscal y diversas soluciones de facturación electrónica para República Dominicana, El Salvador y Guatemala, evolucionando a proyectos más complejos como sistemas de punto de venta y plataformas con sincronización en la nube.',
      achievements: [
        'Desarrollo integral en Java de aplicaciones fiscales y de punto de venta',
        'Implementación de soluciones con Parse Server, Back4App, Sentry',
        'Integración con sistemas como Hiopos y APK fiscal en Android',
        'Diseño de arquitecturas para escalabilidad, seguridad y rendimiento',
      ],
      technologies: ['Java', 'Android', 'Parse Server', 'Back4App', 'Sentry', 'Full Stack'],
    },
    {
      company: 'Fundación Capital',
      role: 'Desarrollador Full Stack Senior',
      period: '2022 - 2023',
      description:
        'Participé como desarrollador y consultor técnico en proyectos de e-learning de alto impacto con +5,000 usuarios.',
      achievements: [
        'Desarrollé dos plataformas de e-learning: Transforma.com y Elea.com',
        'Frontend con Angular y backend con NestJS, PostgreSQL',
        'Integré autenticación social (Google, Facebook)',
        'Módulos de administración para gestión de usuarios y cursos',
      ],
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'TypeScript', 'E-learning'],
    },
  ],

  featuredProjects: [
    {
      name: 'AvilaCare',
      type: 'VetTech',
      description: 'App web y móvil para veterinarios: gestión de mascotas, historiales clínicos, vacunas y citas con modo offline.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'PWA'],
      url: 'avilacare.app',
    },
    {
      name: 'AvilaCare Jornadas',
      type: 'Gestión',
      description: 'Plataforma para jornadas de esterilización: registro de mascotas, escaneo QR, comisiones y dashboard.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'QR'],
      url: 'jornadas.avilacare.app',
    },
    {
      name: 'Psicóloga Balery',
      type: 'Landing Page',
      description: 'Landing profesional con sistema de citas, múltiples métodos de pago y SEO optimizado.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'SEO'],
      url: 'psicologobalery.com',
    },
    {
      name: 'Transforma & Eleva',
      type: 'E-Learning',
      description: 'Plataformas educativas con +5,000 usuarios, cursos, quizzes y autenticación social.',
      technologies: ['Angular', 'NestJS', 'PostgreSQL'],
      url: null,
    },
    {
      name: 'APK Fiscal',
      type: 'Facturación',
      description: 'Facturación electrónica para Rep. Dominicana, El Salvador y Guatemala.',
      technologies: ['Java', 'Android', 'Parse Server'],
      url: null,
    },
    {
      name: 'Medificio',
      type: 'Condominios',
      description: 'Gestión de pagos de condominio con bot de Telegram integrado.',
      technologies: ['Angular', 'NestJS', 'Telegram API'],
      url: null,
    },
  ],

  technicalSkills: {
    frontend: ['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    backend: ['NestJS', 'Node.js', 'Python', 'Java', 'PHP'],
    mobile: ['React Native', 'Flutter', 'Android (Java/Kotlin)'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
    cloud: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes'],
    tools: ['Git', 'GitHub', 'Jira', 'Scrum', 'CI/CD'],
  },

  education: [
    {
      degree: 'Ingeniería en Informática',
      institution: 'Universidad Católica Andrés Bello',
      year: '2015 - 2020',
    },
    {
      degree: 'Inglés Nivel Avanzado Conversacional',
      institution: 'Certificación Internacional',
      year: '2020',
    },
  ],

  certifications: [
    'Scrum Master & Metodologías Ágiles',
    'Arquitectura de Software Escalable',
    'Angular Avanzado & Best Practices',
    'NestJS & Microservicios',
    'AWS Cloud Practitioner',
    'React & Next.js Profesional',
    'React Native & Desarrollo Móvil',
    'TypeScript Avanzado',
    'Docker & Kubernetes',
    'PostgreSQL & MongoDB',
    'OpenAI API & Prompt Engineering',
    'Git & GitHub Actions CI/CD',
    'Node.js Backend Development',
    'Flutter & Dart Fundamentals',
  ],

  softSkills: [
    { skill: 'Liderazgo de Equipos', description: 'Gestión de equipos de hasta 4 desarrolladores' },
    { skill: 'Visión de Producto', description: 'Product Owner en múltiples proyectos' },
    { skill: 'Ventas & Presentaciones', description: 'Explicación de productos y servicios para cerrar ventas' },
    { skill: 'Comunicación Efectiva', description: 'Puente entre stakeholders y equipos técnicos' },
    { skill: 'Mentalidad Emprendedora', description: 'Fundador de AvilaDev' },
  ],

  languages: [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'Avanzado (B2-C1)' },
  ],

  sectionTitles: {
    profile: 'Perfil Profesional',
    services: 'Servicios',
    achievements: 'Logros',
    techStack: 'Stack Tecnológico',
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    databases: 'Bases de Datos',
    cloud: 'Cloud & DevOps',
    education: 'Formación Académica',
    languages: 'Idiomas',
    certifications: 'Certificaciones',
    projects: 'Proyectos Destacados',
    experience: 'Experiencia Profesional',
    competencies: 'Competencias Clave',
  },
};

// English version
export const cvDataEN: CVData = {
  personalInfo: {
    name: 'MARCEL ANDRÉS MARÍN MARTÍNEZ',
    title: 'Full Stack Developer & Tech Entrepreneur',
    subtitle: 'Founder @ AvilaDev | Angular • NestJS • Next.js • React Native',
    email: 'marcelmarin256@gmail.com',
    phone: '+58 414-306-5447',
    linkedin: 'https://www.linkedin.com/in/marcel-andres-m-661a32125/',
    twitter: '@MARCEL_MARIN',
    website: 'aviladev.com',
    profileImage: 'assets/images/marcel-profile.jpg',
    location: 'Caracas, Venezuela',
    availability: 'Remote / Hybrid',
  },

  impactMetrics: [
    { number: '20+', label: 'Projects Delivered' },
    { number: '5+', label: 'Years of Experience' },
    { number: '5,000+', label: 'Platform Users' },
    { number: '4', label: 'Countries' },
  ],

  professionalSummary: `Software Engineer and tech entrepreneur with 5+ years of experience. Founder of AvilaDev, a software agency with projects across 4 countries. Specialized in full stack development (React, Next.js, Angular, NestJS), mobile applications (React Native, Flutter), and AI integration with prompt engineering. Led e-learning platforms with thousands of users and electronic invoicing systems for Latin America.`,

  avilaDevInfo: {
    name: 'AvilaDev',
    role: 'Founder & Lead Developer',
    description: 'Software development agency with projects in Venezuela, Dominican Republic, El Salvador, and Guatemala.',
    services: [
      'Custom Software (ERPs, CRMs)',
      'Mobile Apps (Flutter, React Native)',
      'E-commerce & Online Stores',
      'AI Integration & Chatbots',
      'E-learning Platforms',
      'Cloud & DevOps',
    ],
    achievements: [
      '20+ projects delivered',
      'Clients in 4 Latin American countries',
      'Teams of up to 4 developers',
      'OpenAI integration and automation',
    ],
    website: 'https://aviladev.com',
  },

  workExperience: [
    {
      company: 'AvilaDev',
      role: 'Founder & Lead Developer',
      period: '2024 - Present',
      description:
        'Founded and lead my software development agency. Beyond leading technical development, I handle product and service presentations to potential clients, successfully closing deals and retaining clients across 4 countries.',
      achievements: [
        'Technical sales presentations to clients, closing high-value projects',
        'Custom software: ERPs, admin systems, and web platforms in Angular, React, and Next.js',
        'Mobile apps: development with Flutter, React Native, and native Android for iOS and Android',
        'AI integration: chatbots with OpenAI API, automation, and prompt engineering',
        'E-commerce: online stores with WooCommerce, Shopify, and payment gateways',
        'Cloud & DevOps: AWS, Google Cloud, Docker, and CI/CD',
      ],
      technologies: ['React', 'Next.js', 'Angular', 'NestJS', 'React Native', 'Flutter', 'OpenAI API', 'AWS', 'Docker'],
    },
    {
      company: 'ICG Software',
      role: 'Java Full Stack Developer',
      period: '2023 - Present',
      description:
        'Started developing a fiscal APK and various electronic invoicing solutions for Dominican Republic, El Salvador, and Guatemala, evolving to more complex projects like POS systems and cloud-synced platforms.',
      achievements: [
        'Full-stack Java development for fiscal and POS applications',
        'Implementation with Parse Server, Back4App, Sentry',
        'Integration with Hiopos systems and fiscal APK on Android',
        'Architecture design for scalability, security, and performance',
      ],
      technologies: ['Java', 'Android', 'Parse Server', 'Back4App', 'Sentry', 'Full Stack'],
    },
    {
      company: 'Fundación Capital',
      role: 'Senior Full Stack Developer',
      period: '2022 - 2023',
      description:
        'Participated as developer and technical consultant in high-impact e-learning projects with 5,000+ users.',
      achievements: [
        'Developed two e-learning platforms: Transforma.com and Elea.com',
        'Frontend with Angular and backend with NestJS, PostgreSQL',
        'Integrated social authentication (Google, Facebook)',
        'Admin modules for user and course management',
      ],
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'TypeScript', 'E-learning'],
    },
  ],

  featuredProjects: [
    {
      name: 'AvilaCare',
      type: 'VetTech',
      description: 'Web and mobile app for veterinarians: pet management, medical records, vaccines, and appointments with offline mode.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'PWA'],
      url: 'avilacare.app',
    },
    {
      name: 'AvilaCare Jornadas',
      type: 'Management',
      description: 'Platform for sterilization events: pet registration, QR scanning, commissions, and dashboard.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'QR'],
      url: 'jornadas.avilacare.app',
    },
    {
      name: 'Psychologist Balery',
      type: 'Landing Page',
      description: 'Professional landing with appointment system, multiple payment methods, and optimized SEO.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'SEO'],
      url: 'psicologobalery.com',
    },
    {
      name: 'Transforma & Eleva',
      type: 'E-Learning',
      description: 'Educational platforms with 5,000+ users, courses, quizzes, and social authentication.',
      technologies: ['Angular', 'NestJS', 'PostgreSQL'],
      url: null,
    },
    {
      name: 'Fiscal APK',
      type: 'Invoicing',
      description: 'Electronic invoicing for Dominican Republic, El Salvador, and Guatemala.',
      technologies: ['Java', 'Android', 'Parse Server'],
      url: null,
    },
    {
      name: 'Medificio',
      type: 'Condos',
      description: 'Condo payment management with integrated Telegram bot.',
      technologies: ['Angular', 'NestJS', 'Telegram API'],
      url: null,
    },
  ],

  technicalSkills: {
    frontend: ['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    backend: ['NestJS', 'Node.js', 'Python', 'Java', 'PHP'],
    mobile: ['React Native', 'Flutter', 'Android (Java/Kotlin)'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
    cloud: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes'],
    tools: ['Git', 'GitHub', 'Jira', 'Scrum', 'CI/CD'],
  },

  education: [
    {
      degree: 'Computer Engineering',
      institution: 'Universidad Católica Andrés Bello',
      year: '2015 - 2020',
    },
    {
      degree: 'Advanced Conversational English',
      institution: 'International Certification',
      year: '2020',
    },
  ],

  certifications: [
    'Scrum Master & Agile Methodologies',
    'Scalable Software Architecture',
    'Advanced Angular & Best Practices',
    'NestJS & Microservices',
    'AWS Cloud Practitioner',
    'React & Next.js Professional',
    'React Native & Mobile Development',
    'Advanced TypeScript',
    'Docker & Kubernetes',
    'PostgreSQL & MongoDB',
    'OpenAI API & Prompt Engineering',
    'Git & GitHub Actions CI/CD',
    'Node.js Backend Development',
    'Flutter & Dart Fundamentals',
  ],

  softSkills: [
    { skill: 'Team Leadership', description: 'Managing teams of up to 4 developers' },
    { skill: 'Product Vision', description: 'Product Owner in multiple projects' },
    { skill: 'Sales & Presentations', description: 'Explaining products and services to close deals' },
    { skill: 'Effective Communication', description: 'Bridge between stakeholders and technical teams' },
    { skill: 'Entrepreneurial Mindset', description: 'Founder of AvilaDev' },
  ],

  languages: [
    { language: 'Spanish', level: 'Native' },
    { language: 'English', level: 'Advanced (B2-C1)' },
  ],

  sectionTitles: {
    profile: 'Professional Profile',
    services: 'Services',
    achievements: 'Achievements',
    techStack: 'Tech Stack',
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    databases: 'Databases',
    cloud: 'Cloud & DevOps',
    education: 'Education',
    languages: 'Languages',
    certifications: 'Certifications',
    projects: 'Featured Projects',
    experience: 'Professional Experience',
    competencies: 'Key Competencies',
  },
};
