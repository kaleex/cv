// English translations
export const en = {
  nav: {
    home: "Home",
    skills: "Skills",
    experience: "Experience",
    repos: "Projects",
    badges: "Certifications",
    blog: "Blog",
    contact: "Contact",
    card: "Card"
  },
  hero: {
    headline: "Data Platforms That Actually Work",
    typingWords: ["Reliable", "Scalable", "Governed", "Production-Ready"],
    subheadline: "Senior Data Engineer helping companies turn chaotic data into reliable, governed assets that drive real business decisions.",
    intro: [
      "4+ years building data platforms processing 2+ TB/day, serving 500+ daily business requests across telecom, insurance, and banking.",
      "From hours-long pipelines reduced to minutes, to event-driven architectures that scale — I combine data engineering with solid software practices.",
      "I don't just build pipelines. I build platforms that teams trust."
    ],
    downloadCV: "Download CV"
  },
  stats: {
    years: "Years Experience",
    industries: "Industries",
    daily: "Daily Processing",
    requests: "Daily Requests"
  },
  approach: {
    title: "How I Think",
    body: "Every data platform I build follows these principles:",
    principles: [
      { name: "Reliability First", description: "Data that stakeholders can't trust is worthless. Robust testing, monitoring, and quality gates at every layer." },
      { name: "Governed by Design", description: "Security and compliance aren't afterthoughts. Unity Catalog, row-level security, and audit trails from day one." },
      { name: "Data Contracts", description: "Explicit contracts over tribal knowledge. Validate early, fail fast. Schema enforcement before data moves downstream." },
      { name: "Built to Evolve", description: "Business needs change. Modular architectures that adapt without requiring rewrites." }
    ],
    closing: "This isn't just methodology — it's how I've delivered successful platforms for banking, insurance, and telecom clients."
  },
  lakehouse: {
    title: "Lakehouse Architecture",
    body: "The lakehouse paradigm combines the best of data lakes and data warehouses. Here's how I implement it:",
    bullets: [
      "Delta Lake as the foundation — ACID transactions, time travel, and schema evolution",
      "Unity Catalog for centralized governance across all data assets",
      "Medallion architecture (Bronze → Silver → Gold) for progressive data refinement",
      "Databricks SQL for performant analytics without data movement"
    ]
  },
  medallion: [
    {
      name: "Bronze Layer",
      subtitle: "Raw Ingestion",
      description: "Exact copy of source data with metadata. No transformations, full auditability.",
      characteristics: ["Schema-on-read", "Append-only", "Source system fidelity", "Ingestion timestamps"]
    },
    {
      name: "Silver Layer",
      subtitle: "Cleaned & Conformed",
      description: "Validated, deduplicated, and standardized data ready for analysis.",
      characteristics: ["Data quality rules applied", "Consistent data types", "Business keys established", "Slowly changing dimensions"]
    },
    {
      name: "Gold Layer",
      subtitle: "Business-Ready",
      description: "Aggregated, enriched datasets optimized for specific use cases.",
      characteristics: ["Pre-computed metrics", "Denormalized for performance", "Business terminology", "Optimized freshness"]
    }
  ],
  governance: {
    title: "Governance & Security",
    body: "Data governance isn't bureaucracy — it's the foundation of trust. My implementations include:",
    bullets: [
      "Unity Catalog for unified access control and data lineage",
      "Row-level and column-level security based on user attributes",
      "Automated PII detection and masking",
      "Data quality dashboards with automated alerting"
    ]
  },
  cicd: {
    title: "CI/CD & DataOps",
    body: "Modern data platforms require modern engineering practices:",
    bullets: [
      "Infrastructure as Code with Terraform (Databricks, Azure resources)",
      "Automated testing: unit tests, integration tests, data quality tests",
      "GitOps workflows with Azure DevOps / GitHub Actions",
      "Comprehensive monitoring with Azure Monitor and custom dashboards"
    ]
  },
  journey: {
    title: "My Journey",
    items: [
      { 
        company: "Knowmad Mood → WiZink", 
        period: "Jan 2025 - Present", 
        description: "Led refactoring of business-critical systems into modular, event-driven architectures. Increased daily business capacity from 400 to 500 requests (+25%) through improved algorithm fluidity. Delivered substantial execution time improvements and full end-to-end traceability." 
      },
      { 
        company: "Knowmad Mood → Generali", 
        period: "Apr 2023 - Dec 2024", 
        description: "Owned data platform in a regulated insurance environment. Reduced pipeline execution from hours to minutes with comprehensive validation frameworks. Designed analytical models based on facts and dimensions for business-critical reporting." 
      },
      { 
        company: "Capgemini → Telefónica", 
        period: "2020 - Apr 2023", 
        description: "Designed ingestion architecture processing ~2TB daily across 80+ tables. Automated datalake cleanup and maintenance workflows. Deployed multiple ML models to production weekly. Grew from junior to lead technical contributor owning Lakehouse architecture, CI/CD, and Terraform IaC." 
      }
    ]
  },
  whatIBring: {
    title: "What I Bring",
    bullets: [
      "Deep expertise in Azure data stack (Data Factory, Synapse, Databricks, ADLS)",
      "Production experience with Delta Lake, Unity Catalog, and medallion architectures",
      "Strong foundation in data modeling (dimensional, Data Vault)",
      "Infrastructure as Code (Terraform, ARM templates)",
      "Team leadership and mentoring experience",
      "Fluent communication with both technical teams and business stakeholders"
    ]
  },
  publications: {
    title: "Publications",
    viewOn: "View on Semantic Scholar →"
  },
  cta: {
    title: "Let's Build Something Reliable",
    text: "Building or evolving a data platform? Looking for someone to own its design and reliability? Let's talk."
  },
  skills: {
    title: "Technical Skills",
    subtitle: "A comprehensive overview of my technical expertise and competencies",
    levels: {
      expert: "Expert (90%+)",
      advanced: "Advanced (75-89%)",
      intermediate: "Intermediate (60-74%)"
    },
    proficiency: "Proficiency Levels"
  },
  roadmap: {
    title: "Learning Roadmap",
    inProgress: "In Progress",
    upcoming: "Upcoming"
  },
  repos: {
    title: "Personal Projects",
    subtitle: "Open source projects showcasing data engineering best practices and end-to-end implementations",
    highlightsLabel: "Highlights",
    viewOnGithub: "View on GitHub",
    comingSoon: "Coming Soon",
    ctaText: "Explore more projects on my GitHub profile",
    viewAllRepos: "View All Repositories",
    statusLabels: {
      completed: "Completed",
      inProgress: "In Progress",
      planned: "Planned"
    },
    projects: [
      {
        name: "Databricks E2E Data Platform",
        description: "Full end-to-end data platform demonstrating advanced Data Engineering, MLOps, Observability, Streaming, Testing, Security, and Microservices. A professional portfolio project showcasing production-ready patterns.",
        tech: ["Databricks", "Delta Lake", "PySpark", "Unity Catalog", "DLT", "DABs", "Terraform", "MLflow", "Structured Streaming", "FastAPI", "Docker", "Great Expectations", "Prometheus", "Grafana", "GitHub Actions"],
        status: "in-progress",
        url: "https://github.com/kaleex/portfolio",
        highlights: [
          "Medallion Architecture (Bronze → Silver → Gold)",
          "Dimensional modeling with star schema (facts & dimensions)",
          "Real-time processing with Structured Streaming & Auto Loader",
          "Data quality with Great Expectations at each layer",
          "MLflow tracking, Feature Store & Model Registry",
          "FastAPI model serving with Pydantic v2 & OpenAPI docs",
          "Full observability: Prometheus, Grafana, Data/Concept Drift",
          "CI/CD with GitHub Actions & Databricks Asset Bundles",
          "Unity Catalog governance & security"
        ]
      },
      {
        name: "Portfolio Website",
        description: "This very website! Built with React, TypeScript and Vite. Deployed on Cloudflare Workers with custom domain.",
        tech: ["React", "TypeScript", "Vite", "Cloudflare Workers"],
        status: "completed",
        url: "https://github.com/kaleex/portfolio",
        highlights: [
          "Responsive design",
          "i18n (EN/ES)",
          "SEO optimized",
          "RGPD compliant (no cookies)"
        ]
      }
    ]
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Feel free to reach out through any of the following channels",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadCV: "Download CV",
    downloadCVSub: "PDF Format"
  },
  blog: {
    title: "Tech Blog",
    subtitle: "Deep dives into data engineering, Lakehouse architecture, and lessons learned building production platforms",
    comingSoon: "Coming Soon",
    ctaText: "New articles coming as I build the Databricks E2E project",
    followText: "Follow along on LinkedIn for updates",
    posts: [
      {
        slug: "medallion-architecture-deep-dive",
        title: "Medallion Architecture: Beyond Bronze, Silver, Gold",
        excerpt: "A practical guide to implementing the medallion pattern with Delta Lake. When to use it, when not to, and the patterns that actually work in production.",
        date: "Coming Soon",
        tags: ["Databricks", "Delta Lake", "Architecture"],
        readTime: "~10 min",
        comingSoon: true
      },
      {
        slug: "dimensional-modeling-lakehouse",
        title: "Dimensional Modeling in the Lakehouse Era",
        excerpt: "Star schemas aren't dead. How to build fact and dimension tables with Delta Lake that serve both BI and ML workloads.",
        date: "Coming Soon",
        tags: ["Data Modeling", "Star Schema", "Delta Lake"],
        readTime: "~12 min",
        comingSoon: true
      },
      {
        slug: "dlt-production-patterns",
        title: "Delta Live Tables: Production Patterns & Pitfalls",
        excerpt: "Everything I learned deploying DLT pipelines to production. Expectations, error handling, and the gotchas nobody tells you about.",
        date: "Coming Soon",
        tags: ["DLT", "Data Quality", "Databricks"],
        readTime: "~15 min",
        comingSoon: true
      }
    ]
  },
  badges: {
    title: "Certifications & Badges",
    subtitle: "Professional certifications and credentials validating expertise in data engineering and cloud platforms",
    earnedTitle: "Earned Certifications",
    inProgressTitle: "In Progress",
    plannedTitle: "Planned",
    verifyCredential: "Verify Credential",
    ctaText: "Continuously learning and expanding expertise in data engineering and cloud technologies",
    statusLabels: {
      earned: "Earned",
      inProgress: "In Progress",
      planned: "Planned"
    },
    certifications: [
      {
        name: "Databricks Certified Data Engineer Associate",
        issuer: "Databricks",
        date: "Planned",
        image: "/badges/databricks-de-associate.png",
        status: "planned"
      },
      {
        name: "Databricks Certified Data Engineer Professional",
        issuer: "Databricks",
        date: "Planned",
        image: "/badges/databricks-de-professional.png",
        status: "planned"
      },
      {
        name: "Azure Data Engineer Associate (DP-203)",
        issuer: "Microsoft",
        date: "Planned 2026",
        image: "/badges/azure-data-engineer.png",
        status: "planned"
      }
    ]
  },
  experience: {
    title: "Experience",
    subtitle: "My professional journey building data platforms across industries",
    cta: "Looking for a data engineer who delivers? Let's talk!",
    timeline: [
      {
        company: "Knowmad Mood — WiZink",
        role: "Senior Data Engineer / Software Engineer",
        period: "Jan 2025 - Present",
        location: "Valencia, Spain",
        description: [
          "Led the refactor of a core decisioning engine into a clean, testable Python codebase with async and event-driven architecture",
          "Processing 500+ concurrent lending applications in seconds under production workloads",
          "Designing and implementing scalable microservices for real-time financial decision-making pipelines",
          "Applying software engineering best practices including comprehensive testing, code reviews, and CI/CD automation"
        ],
        technologies: ["Python", "Async/Await", "Event-Driven Architecture", "Microservices", "CI/CD", "Azure"]
      },
      {
        company: "Knowmad Mood — Generali",
        role: "Senior Data Engineer",
        period: "Apr 2023 - Dec 2024",
        location: "Valencia, Spain",
        description: [
          "Designing and maintaining fact and dimension tables to support efficient data modeling for analytics and reporting",
          "Leading data engineering solutions to optimize cloud-based systems and pipelines in a collaborative team environment",
          "Implementing scalable architectures using Azure Databricks for streamlined data transformation and integration",
          "Enhancing operational workflows and data reliability through extensive use of CI/CD pipelines and automation"
        ],
        technologies: ["Azure Databricks", "PySpark", "Delta Lake", "Azure DevOps", "CI/CD", "MLflow"]
      },
      {
        company: "Capgemini",
        role: "Machine Learning Engineer",
        period: "Feb 2021 - Apr 2023",
        location: "Valencia, Spain",
        description: [
          "Contributed to a large-scale data science platform, providing technical expertise and mentoring team members",
          "Implemented CI/CD pipelines and designed solutions for efficient data processing and transformation",
          "Transitioned into a Data Engineering role, focusing on designing scalable systems to handle terabytes of data",
          "Worked on innovative projects combining machine learning and data engineering methodologies"
        ],
        technologies: ["Python", "PySpark", "Azure", "Databricks", "Scikit-Learn", "Docker"]
      },
      {
        company: "Capgemini",
        role: "Innovation Engineer",
        period: "Oct 2020 - Feb 2021",
        location: "Valencia, Spain",
        description: [
          "Designed and implemented backend architectures to simplify new service integration on GCP",
          "Developed API integrations for seamless data access and workflow automation"
        ],
        technologies: ["GCP", "Python", "APIs", "Node.js", "Backend Architecture"]
      }
    ]
  },
  footer: {
    copyright: "©",
    rights: "All rights reserved.",
    ctaText: "Let's build something reliable"
  },
  card: {
    instruction: "Click to flip",
    tagline: "Data Platforms That Actually Work",
    flipBack: "Tap to flip back",
    downloadCV: "Download CV",
    copyEmail: "Copy Email",
    contact: "Contact"
  }
};

// Spanish translations
export const es = {
  nav: {
    home: "Inicio",
    skills: "Habilidades",
    experience: "Experiencia",
    repos: "Proyectos",
    badges: "Certificaciones",
    blog: "Blog",
    contact: "Contacto",
    card: "Tarjeta"
  },
  hero: {
    headline: "Plataformas de Datos que Funcionan",
    typingWords: ["Fiables", "Escalables", "Gobernadas", "Listas para Producción"],
    subheadline: "Senior Data Engineer ayudando a empresas a convertir datos caóticos en activos fiables y gobernados que impulsan decisiones de negocio reales.",
    intro: [
      "4+ años construyendo plataformas de datos procesando 2+ TB/día, sirviendo 500+ peticiones diarias en telecom, seguros y banca.",
      "De pipelines de horas reducidos a minutos, a arquitecturas event-driven que escalan — combino ingeniería de datos con prácticas sólidas de software.",
      "No solo construyo pipelines. Construyo plataformas en las que los equipos confían."
    ],
    downloadCV: "Descargar CV"
  },
  stats: {
    years: "Años Experiencia",
    industries: "Industrias",
    daily: "Procesamiento Diario",
    requests: "Peticiones Diarias"
  },
  approach: {
    title: "Cómo Pienso",
    body: "Cada plataforma de datos que construyo sigue estos principios:",
    principles: [
      { name: "Fiabilidad Primero", description: "Los datos en los que los stakeholders no pueden confiar no valen nada. Testing robusto, monitorización y quality gates en cada capa." },
      { name: "Gobernanza por Diseño", description: "La seguridad y el cumplimiento no son un afterthought. Unity Catalog, seguridad a nivel de fila y audit trails desde el día uno." },
      { name: "Contratos de Datos", description: "Contratos explícitos sobre conocimiento tribal. Validar pronto, fallar rápido. Enforcement de esquemas antes de que los datos se muevan downstream." },
      { name: "Construido para Evolucionar", description: "Las necesidades del negocio cambian. Arquitecturas modulares que se adaptan sin requerir reescrituras." }
    ],
    closing: "Esto no es solo metodología — es cómo he entregado plataformas exitosas para clientes de banca, seguros y telecom."
  },
  lakehouse: {
    title: "Arquitectura Lakehouse",
    body: "El paradigma lakehouse combina lo mejor de los data lakes y data warehouses. Así es como lo implemento:",
    bullets: [
      "Delta Lake como base — transacciones ACID, time travel y evolución de esquemas",
      "Unity Catalog para gobernanza centralizada de todos los activos de datos",
      "Arquitectura medallion (Bronze → Silver → Gold) para refinamiento progresivo",
      "Databricks SQL para analytics performante sin mover datos"
    ]
  },
  medallion: [
    {
      name: "Capa Bronze",
      subtitle: "Ingesta Raw",
      description: "Copia exacta de los datos origen con metadatos. Sin transformaciones, auditabilidad completa.",
      characteristics: ["Schema-on-read", "Solo append", "Fidelidad al sistema origen", "Timestamps de ingesta"]
    },
    {
      name: "Capa Silver",
      subtitle: "Limpia y Conformada",
      description: "Datos validados, deduplicados y estandarizados listos para análisis.",
      characteristics: ["Reglas de calidad aplicadas", "Tipos de datos consistentes", "Claves de negocio establecidas", "Dimensiones slowly changing"]
    },
    {
      name: "Capa Gold",
      subtitle: "Lista para Negocio",
      description: "Datasets agregados y enriquecidos optimizados para casos de uso específicos.",
      characteristics: ["Métricas pre-calculadas", "Desnormalizado para rendimiento", "Terminología de negocio", "Frescura optimizada"]
    }
  ],
  governance: {
    title: "Gobernanza y Seguridad",
    body: "La gobernanza de datos no es burocracia — es la base de la confianza. Mis implementaciones incluyen:",
    bullets: [
      "Unity Catalog para control de acceso unificado y linaje de datos",
      "Seguridad a nivel de fila y columna basada en atributos de usuario",
      "Detección y enmascaramiento automático de PII",
      "Dashboards de calidad de datos con alertas automatizadas"
    ]
  },
  cicd: {
    title: "CI/CD y DataOps",
    body: "Las plataformas de datos modernas requieren prácticas de ingeniería modernas:",
    bullets: [
      "Infrastructure as Code con Terraform (Databricks, recursos Azure)",
      "Testing automatizado: unit tests, integration tests, tests de calidad de datos",
      "Workflows GitOps con Azure DevOps / GitHub Actions",
      "Monitorización completa con Azure Monitor y dashboards custom"
    ]
  },
  journey: {
    title: "Mi Trayectoria",
    items: [
      { 
        company: "Knowmad Mood → WiZink", 
        period: "Ene 2025 - Presente", 
        description: "Lideré la refactorización de sistemas críticos de negocio hacia arquitecturas modulares y event-driven. Incrementé la capacidad de negocio diaria de 400 a 500 peticiones (+25%) mejorando la fluidez del algoritmo. Mejoras sustanciales en tiempo de ejecución y trazabilidad end-to-end." 
      },
      { 
        company: "Knowmad Mood → Generali", 
        period: "Abr 2023 - Dic 2024", 
        description: "Propietario de la plataforma de datos en un entorno de seguros regulado. Reduje la ejecución de pipelines de horas a minutos con frameworks de validación completos. Diseñé modelos analíticos basados en hechos y dimensiones para reporting crítico de negocio." 
      },
      { 
        company: "Capgemini → Telefónica", 
        period: "2020 - Abr 2023", 
        description: "Diseñé arquitectura de ingesta procesando ~2TB diarios en 80+ tablas. Automaticé workflows de limpieza y mantenimiento del datalake. Desplegué múltiples modelos ML a producción semanalmente. Crecí de junior a lead contributor técnico owneando arquitectura Lakehouse, CI/CD y Terraform IaC." 
      }
    ]
  },
  whatIBring: {
    title: "Lo que Aporto",
    bullets: [
      "Expertise profundo en el stack de datos Azure (Data Factory, Synapse, Databricks, ADLS)",
      "Experiencia en producción con Delta Lake, Unity Catalog y arquitecturas medallion",
      "Base sólida en modelado de datos (dimensional, Data Vault)",
      "Infrastructure as Code (Terraform, ARM templates)",
      "Experiencia en liderazgo técnico y mentoring",
      "Comunicación fluida tanto con equipos técnicos como stakeholders de negocio"
    ]
  },
  publications: {
    title: "Publicaciones",
    viewOn: "Ver en Semantic Scholar →"
  },
  cta: {
    title: "Construyamos Algo Fiable",
    text: "¿Construyendo o evolucionando una plataforma de datos? ¿Buscas a alguien que sea propietario de su diseño y fiabilidad? Hablemos."
  },
  skills: {
    title: "Habilidades Técnicas",
    subtitle: "Una visión completa de mi experiencia técnica y competencias",
    levels: {
      expert: "Experto (90%+)",
      advanced: "Avanzado (75-89%)",
      intermediate: "Intermedio (60-74%)"
    },
    proficiency: "Niveles de Competencia"
  },
  roadmap: {
    title: "Roadmap de Aprendizaje",
    inProgress: "En Progreso",
    upcoming: "Próximos"
  },
  repos: {
    title: "Proyectos Personales",
    subtitle: "Proyectos open source que demuestran buenas prácticas de data engineering e implementaciones end-to-end",
    highlightsLabel: "Destacados",
    viewOnGithub: "Ver en GitHub",
    comingSoon: "Próximamente",
    ctaText: "Explora más proyectos en mi perfil de GitHub",
    viewAllRepos: "Ver Todos los Repositorios",
    statusLabels: {
      completed: "Completado",
      inProgress: "En Progreso",
      planned: "Planificado"
    },
    projects: [
      {
        name: "Databricks E2E Data Platform",
        description: "Plataforma de datos end-to-end completa demostrando Data Engineering avanzado, MLOps, Observabilidad, Streaming, Testing, Seguridad y Microservicios. Un proyecto portfolio profesional con patrones production-ready.",
        tech: ["Databricks", "Delta Lake", "PySpark", "Unity Catalog", "DLT", "DABs", "Terraform", "MLflow", "Structured Streaming", "FastAPI", "Docker", "Great Expectations", "Prometheus", "Grafana", "GitHub Actions"],
        status: "in-progress",
        url: "https://github.com/kaleex/portfolio",
        highlights: [
          "Arquitectura Medallion (Bronze → Silver → Gold)",
          "Modelado dimensional con star schema (hechos y dimensiones)",
          "Procesamiento real-time con Structured Streaming & Auto Loader",
          "Calidad de datos con Great Expectations en cada capa",
          "MLflow tracking, Feature Store & Model Registry",
          "Model serving con FastAPI, Pydantic v2 & OpenAPI docs",
          "Observabilidad completa: Prometheus, Grafana, Data/Concept Drift",
          "CI/CD con GitHub Actions & Databricks Asset Bundles",
          "Gobernanza y seguridad con Unity Catalog"
        ]
      },
      {
        name: "Portfolio Website",
        description: "¡Esta misma web! Construida con React, TypeScript y Vite. Desplegada en Cloudflare Workers con dominio propio.",
        tech: ["React", "TypeScript", "Vite", "Cloudflare Workers"],
        status: "completed",
        url: "https://github.com/kaleex/portfolio",
        highlights: [
          "Diseño responsive",
          "i18n (EN/ES)",
          "SEO optimizado",
          "Cumple RGPD (sin cookies)"
        ]
      }
    ]
  },
  contact: {
    title: "Contacto",
    subtitle: "No dudes en contactarme a través de cualquiera de los siguientes canales",
    email: "Email",
    phone: "Teléfono",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadCV: "Descargar CV",
    downloadCVSub: "Formato PDF"
  },
  blog: {
    title: "Blog Técnico",
    subtitle: "Profundizando en data engineering, arquitectura Lakehouse y lecciones aprendidas construyendo plataformas en producción",
    comingSoon: "Próximamente",
    ctaText: "Nuevos artículos mientras construyo el proyecto Databricks E2E",
    followText: "Sígueme en LinkedIn para actualizaciones",
    posts: [
      {
        slug: "medallion-architecture-deep-dive",
        title: "Arquitectura Medallion: Más Allá de Bronze, Silver, Gold",
        excerpt: "Guía práctica para implementar el patrón medallion con Delta Lake. Cuándo usarlo, cuándo no, y los patrones que realmente funcionan en producción.",
        date: "Próximamente",
        tags: ["Databricks", "Delta Lake", "Arquitectura"],
        readTime: "~10 min",
        comingSoon: true
      },
      {
        slug: "dimensional-modeling-lakehouse",
        title: "Modelado Dimensional en la Era Lakehouse",
        excerpt: "Los star schemas no han muerto. Cómo construir tablas de hechos y dimensiones con Delta Lake que sirvan tanto BI como ML.",
        date: "Próximamente",
        tags: ["Data Modeling", "Star Schema", "Delta Lake"],
        readTime: "~12 min",
        comingSoon: true
      },
      {
        slug: "dlt-production-patterns",
        title: "Delta Live Tables: Patrones de Producción y Errores Comunes",
        excerpt: "Todo lo que aprendí desplegando pipelines DLT en producción. Expectations, manejo de errores, y los gotchas que nadie te cuenta.",
        date: "Próximamente",
        tags: ["DLT", "Data Quality", "Databricks"],
        readTime: "~15 min",
        comingSoon: true
      }
    ]
  },
  badges: {
    title: "Certificaciones y Badges",
    subtitle: "Certificaciones profesionales y credenciales que validan experiencia en data engineering y plataformas cloud",
    earnedTitle: "Certificaciones Obtenidas",
    inProgressTitle: "En Progreso",
    plannedTitle: "Planificadas",
    verifyCredential: "Verificar Credencial",
    ctaText: "Aprendiendo continuamente y expandiendo experiencia en data engineering y tecnologías cloud",
    statusLabels: {
      earned: "Obtenida",
      inProgress: "En Progreso",
      planned: "Planificada"
    },
    certifications: [
      {
        name: "Databricks Certified Data Engineer Associate",
        issuer: "Databricks",
        date: "Planificada",
        image: "/badges/databricks-de-associate.png",
        status: "planned"
      },
      {
        name: "Databricks Certified Data Engineer Professional",
        issuer: "Databricks",
        date: "Planificada",
        image: "/badges/databricks-de-professional.png",
        status: "planned"
      },
      {
        name: "Azure Data Engineer Associate (DP-203)",
        issuer: "Microsoft",
        date: "Planificada 2026",
        image: "/badges/azure-data-engineer.png",
        status: "planned"
      }
    ]
  },
  experience: {
    title: "Experiencia",
    subtitle: "Mi trayectoria profesional construyendo plataformas de datos en diferentes industrias",
    cta: "¿Buscas un data engineer que entregue resultados? ¡Hablemos!",
    timeline: [
      {
        company: "Knowmad Mood — WiZink",
        role: "Senior Data Engineer / Software Engineer",
        period: "Ene 2025 - Presente",
        location: "Valencia, España",
        description: [
          "Liderazgo en la refactorización de un motor de decisiones core hacia un código Python limpio y testeable con arquitectura async y event-driven",
          "Procesamiento de más de 500 solicitudes de préstamo concurrentes en segundos bajo cargas de producción",
          "Diseño e implementación de microservicios escalables para pipelines de toma de decisiones financieras en tiempo real",
          "Aplicación de mejores prácticas de ingeniería de software incluyendo testing exhaustivo, code reviews y automatización CI/CD"
        ],
        technologies: ["Python", "Async/Await", "Event-Driven Architecture", "Microservices", "CI/CD", "Azure"]
      },
      {
        company: "Knowmad Mood — Generali",
        role: "Senior Data Engineer",
        period: "Abr 2023 - Dic 2024",
        location: "Valencia, España",
        description: [
          "Diseño y mantenimiento de tablas de hechos y dimensiones para modelado de datos eficiente en analytics y reporting",
          "Liderando soluciones de data engineering para optimizar sistemas y pipelines cloud en equipo colaborativo",
          "Implementación de arquitecturas escalables usando Azure Databricks para transformación e integración de datos",
          "Mejora de workflows operacionales y fiabilidad de datos mediante uso extensivo de pipelines CI/CD y automatización"
        ],
        technologies: ["Azure Databricks", "PySpark", "Delta Lake", "Azure DevOps", "CI/CD", "MLflow"]
      },
      {
        company: "Capgemini",
        role: "Machine Learning Engineer",
        period: "Feb 2021 - Abr 2023",
        location: "Valencia, España",
        description: [
          "Contribución a plataforma de data science a gran escala, aportando expertise técnico y mentorizando al equipo",
          "Implementación de pipelines CI/CD y diseño de soluciones para procesamiento y transformación de datos eficiente",
          "Transición a rol de Data Engineering, enfocándome en diseñar sistemas escalables para manejar terabytes de datos",
          "Trabajo en proyectos innovadores combinando metodologías de machine learning y data engineering"
        ],
        technologies: ["Python", "PySpark", "Azure", "Databricks", "Scikit-Learn", "Docker"]
      },
      {
        company: "Capgemini",
        role: "Innovation Engineer",
        period: "Oct 2020 - Feb 2021",
        location: "Valencia, España",
        description: [
          "Diseño e implementación de arquitecturas backend para simplificar integración de nuevos servicios en GCP",
          "Desarrollo de integraciones API para acceso a datos fluido y automatización de workflows"
        ],
        technologies: ["GCP", "Python", "APIs", "Node.js", "Arquitectura Backend"]
      }
    ]
  },
  footer: {
    copyright: "©",
    rights: "Todos los derechos reservados.",
    ctaText: "Construyamos algo fiable"
  },
  card: {
    instruction: "Clic para girar",
    tagline: "Plataformas de Datos que Funcionan",
    flipBack: "Toca para volver",
    downloadCV: "Descargar CV",
    copyEmail: "Copiar Email",
    contact: "Contacto"
  }
};
