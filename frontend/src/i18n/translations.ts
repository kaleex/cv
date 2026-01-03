// English translations
export const en = {
  nav: {
    home: "Home",
    skills: "Skills",
    repos: "Projects",
    contact: "Contact"
  },
  hero: {
    headline: "Data Platforms That Actually Work",
    subheadline: "Senior Data Engineer helping companies turn chaotic data into reliable, governed assets that drive real business decisions.",
    intro: [
      "4+ years building data platforms processing 2+ TB/day, serving 500+ daily business requests across telecom, insurance, and banking.",
      "From hours-long pipelines reduced to minutes, to event-driven architectures that scale — I combine data engineering with solid software practices.",
      "I don't just build pipelines. I build platforms that teams trust."
    ],
    downloadCV: "📄 Download CV"
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
      "Blue-green deployments for zero-downtime releases",
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
        name: "Databricks E2E Lakehouse",
        description: "Complete end-to-end data platform implementation using Databricks. From raw ingestion to dimensional modeling with facts and dimensions, following Medallion architecture.",
        tech: ["Databricks", "Delta Lake", "PySpark", "Unity Catalog", "DLT", "DABs", "Terraform", "MLflow", "SQL"],
        status: "in-progress",
        highlights: [
          "Medallion Architecture (Bronze → Silver → Gold)",
          "Dimensional modeling with star schema",
          "Delta Live Tables for orchestration",
          "Unity Catalog governance",
          "Data quality with expectations",
          "CI/CD with Databricks Asset Bundles"
        ]
      },
      {
        name: "Portfolio Website",
        description: "This very website! Built with React, TypeScript and Vite. Deployed on Cloudflare Workers with custom domain.",
        tech: ["React", "TypeScript", "Vite", "Cloudflare Workers"],
        status: "completed",
        url: "https://github.com/Killex94/portfolio",
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
    github: "GitHub"
  },
  footer: {
    copyright: "©"
  }
};

// Spanish translations
export const es = {
  nav: {
    home: "Inicio",
    skills: "Habilidades",
    repos: "Proyectos",
    contact: "Contacto"
  },
  hero: {
    headline: "Plataformas de Datos que Funcionan",
    subheadline: "Senior Data Engineer ayudando a empresas a convertir datos caóticos en activos fiables y gobernados que impulsan decisiones de negocio reales.",
    intro: [
      "4+ años construyendo plataformas de datos procesando 2+ TB/día, sirviendo 500+ peticiones diarias en telecom, seguros y banca.",
      "De pipelines de horas reducidos a minutos, a arquitecturas event-driven que escalan — combino ingeniería de datos con prácticas sólidas de software.",
      "No solo construyo pipelines. Construyo plataformas en las que los equipos confían."
    ],
    downloadCV: "📄 Descargar CV"
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
      "Despliegues blue-green para releases sin downtime",
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
        name: "Databricks E2E Lakehouse",
        description: "Implementación completa end-to-end de plataforma de datos usando Databricks. Desde ingesta raw hasta modelado dimensional con hechos y dimensiones, siguiendo arquitectura Medallion.",
        tech: ["Databricks", "Delta Lake", "PySpark", "Unity Catalog", "DLT", "DABs", "Terraform", "MLflow", "SQL"],
        status: "in-progress",
        highlights: [
          "Arquitectura Medallion (Bronze → Silver → Gold)",
          "Modelado dimensional con star schema",
          "Delta Live Tables para orquestación",
          "Gobernanza con Unity Catalog",
          "Calidad de datos con expectations",
          "CI/CD con Databricks Asset Bundles"
        ]
      },
      {
        name: "Portfolio Website",
        description: "¡Esta misma web! Construida con React, TypeScript y Vite. Desplegada en Cloudflare Workers con dominio propio.",
        tech: ["React", "TypeScript", "Vite", "Cloudflare Workers"],
        status: "completed",
        url: "https://github.com/Killex94/portfolio",
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
    github: "GitHub"
  },
  footer: {
    copyright: "©"
  }
};
