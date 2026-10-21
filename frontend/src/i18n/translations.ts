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
    typingWords: ["Reliable", "Scalable", "Event-Driven", "Hexagonal", "Well-Architected", "Production-Ready"],
    subheadline: "Architecture, delivery, and governance for Azure data platforms in banking, insurance, and telecom.",
    intro: [
      "I help teams design and evolve data platforms that need to be reliable, governed, and production-ready from day one.",
      "That means landing zones, security, Databricks delivery, Terraform automation, domain-oriented data products, and software design patterns that keep the platform maintainable.",
      "Best fit: regulated or high-volume environments where architecture has to survive contact with reality."
    ],
    proofPoints: ["AZ-305 Certified", "WAF + CAF", "Data Mesh", "Databricks + Spark", "Terraform + IaC", "Claude · Codex · MCP", "Banking · Insurance · Telecom"],
    downloadCV: "Download CV"
  },
  stats: {
    years: "Years Experience",
    industries: "Industries",
    daily: "Daily Processing",
    requests: "Daily Requests"
  },
  approach: {
    title: "How I Work",
    body: "How I usually approach platform engagements:",
    principles: [
      { name: "Discovery & Alignment", description: "Clarify target state, constraints, stakeholders, and operating model before tools start driving the conversation." },
      { name: "Architecture & Guardrails", description: "Landing zones, security, governance, and data contracts are defined early so delivery does not create expensive rework." },
      { name: "Delivery in Production", description: "Incremental rollout, testing, observability, and infrastructure as code keep the platform useful beyond the architecture deck." },
      { name: "AI-Assisted Execution", description: "I use Claude, Codex, and MCP-connected workflows when they improve discovery, documentation, prototyping, and implementation speed without weakening engineering judgment." },
      { name: "Enablement & Handover", description: "Documentation, standards, mentoring, and clear ownership make the platform operable by the team that will live with it." }
    ],
    closing: "The goal is not just a good architecture deck. The goal is a platform teams can operate with confidence."
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
        company: "Knowmad Mood",
        sector: "Banking",
        period: "Jan 2025 - Present",
        description: "Led refactoring of business-critical systems into modular, event-driven architectures. Increased daily business capacity from 400 to 500 requests (+25%) through improved algorithm fluidity. Delivered substantial execution time improvements and full end-to-end traceability."
      },
      {
        company: "Knowmad Mood",
        sector: "Insurance",
        period: "Apr 2023 - Dec 2024",
        description: "Owned data platform in a regulated insurance environment. Reduced pipeline execution from hours to minutes with comprehensive validation frameworks. Designed analytical models based on facts and dimensions for business-critical reporting."
      },
      {
        company: "Capgemini",
        sector: "Telecom",
        period: "2020 - Apr 2023",
        description: "Designed ingestion architecture processing ~2TB daily across 80+ tables. Automated datalake cleanup and maintenance workflows. Deployed multiple ML models to production weekly. Grew from junior to lead technical contributor owning Lakehouse architecture, CI/CD, and Terraform IaC."
      }
    ]
  },
  whatIBring: {
    title: "What You Get",
    items: [
      {
        title: "Enterprise Azure Design",
        proof: "AZ-305, WAF, CAF, landing zones, governance by design."
      },
      {
        title: "Production Databricks Delivery",
        proof: "Databricks, Spark, Delta Lake, Unity Catalog, DLT in real platform contexts."
      },
      {
        title: "Software Design Depth",
        proof: "Hexagonal, DDD, SOLID, and event-driven patterns applied to data workloads."
      },
      {
        title: "Data Mesh Thinking",
        proof: "Domain-oriented data products, clear ownership boundaries, and federated governance on a shared platform."
      },
      {
        title: "Infrastructure as Code",
        proof: "Terraform, CI/CD, and repeatable environments without manual config drift."
      },
      {
        title: "AI-Assisted Delivery",
        proof: "Claude, Codex, and MCP-connected workflows used for faster discovery, documentation, prototyping, and implementation support."
      },
      {
        title: "Stakeholder-Ready Execution",
        proof: "Comfortable with engineering teams, business stakeholders, and technical leadership."
      }
    ]
  },
  pillars: [
    {
      title: "Software Design",
      keywords: [
        "Hexagonal Architecture",
        "Domain-Driven Design",
        "SOLID",
        "Event-Driven",
        "Async · Functional",
        "Fire & Forget"
      ]
    },
    {
      title: "Cloud Architecture",
      keywords: [
        "AZ-305 Certified",
        "Azure Well-Architected",
        "CAF Landing Zones",
        "Hub-Spoke Topology",
        "IaC · Terraform",
        "Zero-Trust Security"
      ]
    },
    {
      title: "Data Engineering",
      keywords: [
        "Databricks · Spark",
        "Delta Lake · DLT",
        "Unity Catalog",
        "Medallion Architecture",
        "Data Mesh · Data Products",
        "Structured Streaming"
      ]
    }
  ],
  softwareDesign: {
    title: "Software Design",
    patterns: [
      {
        name: "Hexagonal Architecture",
        description: "Ports as ingestion/serving interfaces. Swappable adapters per source (REST, Event Hub, JDBC) without touching business logic."
      },
      {
        name: "Domain-Driven Design",
        description: "Bounded contexts mapped to data domains. Ubiquitous language, ownership boundaries, and data products aligned with business domains."
      },
      {
        name: "Event-Driven + Fire & Forget",
        description: "Decoupled pipelines via events. Structured Streaming with backpressure and exactly-once semantics."
      },
      {
        name: "SOLID in Python",
        description: "Single responsibility on PySpark transformations. Dependency injection for pipeline testability."
      },
      {
        name: "Functional + Async",
        description: "Pure transformations without side-effects. Async orchestration for controlled parallelism."
      }
    ]
  },
  platformStack: {
    title: "Platform Stack",
    blocks: [
      {
        title: "Lakehouse",
        bullets: [
          "Delta Lake — ACID transactions, time travel, schema evolution",
          "Unity Catalog — centralized governance across all assets",
          "Medallion (Bronze → Silver → Gold) — progressive data refinement",
          "Databricks SQL — performant analytics without data movement"
        ]
      },
      {
        title: "Medallion",
        bullets: [
          "Bronze: raw ingestion, append-only, full auditability",
          "Silver: validated, deduplicated, standardized",
          "Gold: aggregated, business-ready, optimized freshness",
          "SCD Type 2 for slowly changing dimensions"
        ]
      },
      {
        title: "Governance",
        bullets: [
          "Unity Catalog — unified access control and data lineage",
          "Federated governance for domain-aligned data products",
          "Row-level and column-level security by user attributes",
          "Automated PII detection and masking",
          "Data quality dashboards with automated alerting"
        ]
      },
      {
        title: "CI/CD & IaC",
        bullets: [
          "Terraform for Databricks and Azure resources",
          "Unit, integration, and data quality tests",
          "GitOps with Azure DevOps / GitHub Actions",
          "Claude, Codex, and MCP-connected tooling for architecture notes, technical documentation, and implementation support",
          "Databricks Asset Bundles (DABs) for deployment"
        ]
      }
    ]
  },
  publications: {
    title: "Publications",
    viewOn: "View on Semantic Scholar →"
  },
  cta: {
    title: "Need Architecture and Delivery?",
    text: "If you're designing, modernizing, or scaling a data platform and need someone who can own both the architecture and its delivery, let's talk."
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
    completed: "Completed",
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
    subtitle: "Best for platform architecture, Azure or Databricks delivery, and technical leadership conversations.",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    linkedinSub: "Profile & updates",
    github: "GitHub",
    githubSub: "Projects & code",
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
    subtitle: "My professional journey designing and building data platforms across industries",
    cta: "Looking for a data platform architect who delivers? Let's talk!",
    timeline: [
      {
        company: "Knowmad Mood",
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
        company: "Knowmad Mood",
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
    ctaText: "Architecture, delivery, and platform advisory",
    role: "Data Platform Architect"
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
    typingWords: ["Fiables", "Escalables", "Event-Driven", "Hexagonal", "Well-Architected", "Listas para Producción"],
    subheadline: "Arquitectura, delivery y gobernanza para plataformas de datos Azure en banca, seguros y telecom.",
    intro: [
      "Ayudo a equipos a diseñar y evolucionar plataformas de datos que necesitan ser fiables, gobernadas y listas para producción desde el día uno.",
      "Eso implica landing zones, seguridad, delivery con Databricks, automatización con Terraform, data products orientados a dominio y patrones de software que mantienen la plataforma sostenible.",
      "Mi mejor encaje: entornos regulados o de alto volumen donde la arquitectura tiene que sobrevivir al mundo real."
    ],
    proofPoints: ["AZ-305 Certificado", "WAF + CAF", "Data Mesh", "Databricks + Spark", "Terraform + IaC", "Claude · Codex · MCP", "Banca · Seguros · Telecom"],
    downloadCV: "Descargar CV"
  },
  stats: {
    years: "Años Experiencia",
    industries: "Industrias",
    daily: "Procesamiento Diario",
    requests: "Peticiones Diarias"
  },
  approach: {
    title: "Cómo Trabajo",
    body: "Cómo suelo abordar proyectos de plataforma:",
    principles: [
      { name: "Discovery y Alineamiento", description: "Aclaro estado objetivo, restricciones, stakeholders y modelo operativo antes de que las herramientas empiecen a dictar la conversación." },
      { name: "Arquitectura y Guardrails", description: "Landing zones, seguridad, gobernanza y contratos de datos se definen pronto para que el delivery no genere retrabajo caro." },
      { name: "Delivery en Producción", description: "Despliegue incremental, testing, observabilidad e infraestructura como código mantienen la plataforma útil más allá del deck de arquitectura." },
      { name: "Ejecución Asistida por IA", description: "Uso Claude, Codex y workflows conectados por MCP cuando mejoran discovery, documentación, prototipado y velocidad de implementación sin debilitar el criterio de ingeniería." },
      { name: "Enablement y Handover", description: "Documentación, estándares, mentoría y ownership claro hacen que el equipo pueda operar la plataforma con confianza." }
    ],
    closing: "El objetivo no es solo un buen deck de arquitectura. El objetivo es una plataforma que el equipo pueda operar con confianza."
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
        company: "Knowmad Mood",
        sector: "Banca",
        period: "Ene 2025 - Presente",
        description: "Lideré la refactorización de sistemas críticos de negocio hacia arquitecturas modulares y event-driven. Incrementé la capacidad de negocio diaria de 400 a 500 peticiones (+25%) mejorando la fluidez del algoritmo. Mejoras sustanciales en tiempo de ejecución y trazabilidad end-to-end."
      },
      {
        company: "Knowmad Mood",
        sector: "Seguros",
        period: "Abr 2023 - Dic 2024",
        description: "Propietario de la plataforma de datos en un entorno de seguros regulado. Reduje la ejecución de pipelines de horas a minutos con frameworks de validación completos. Diseñé modelos analíticos basados en hechos y dimensiones para reporting crítico de negocio."
      },
      {
        company: "Capgemini",
        sector: "Telecom",
        period: "2020 - Abr 2023",
        description: "Diseñé arquitectura de ingesta procesando ~2TB diarios en 80+ tablas. Automaticé workflows de limpieza y mantenimiento del datalake. Desplegué múltiples modelos ML a producción semanalmente. Crecí de junior a lead contributor técnico owneando arquitectura Lakehouse, CI/CD y Terraform IaC."
      }
    ]
  },
  whatIBring: {
    title: "Lo Que Obtienes",
    items: [
      {
        title: "Diseño Azure Enterprise",
        proof: "AZ-305, WAF, CAF, landing zones y gobernanza por diseño."
      },
      {
        title: "Delivery Databricks en Producción",
        proof: "Databricks, Spark, Delta Lake, Unity Catalog y DLT en plataformas reales."
      },
      {
        title: "Profundidad en Software Design",
        proof: "Hexagonal, DDD, SOLID y patrones event-driven aplicados a cargas de datos."
      },
      {
        title: "Mentalidad Data Mesh",
        proof: "Data products orientados a dominio, ownership claro y gobernanza federada sobre una plataforma compartida."
      },
      {
        title: "Infraestructura como Código",
        proof: "Terraform, CI/CD y entornos repetibles sin deriva de configuración manual."
      },
      {
        title: "Delivery Asistido por IA",
        proof: "Claude, Codex y workflows conectados por MCP para acelerar discovery, documentación, prototipado y soporte a la implementación."
      },
      {
        title: "Ejecución con Stakeholders",
        proof: "Cómodo con equipos de ingeniería, stakeholders de negocio y liderazgo técnico."
      }
    ]
  },
  pillars: [
    {
      title: "Diseño de Software",
      keywords: [
        "Arquitectura Hexagonal",
        "Domain-Driven Design",
        "SOLID · Clean Code",
        "Event-Driven · Async",
        "Fire & Forget",
        "Patrones Funcionales"
      ]
    },
    {
      title: "Arquitectura Cloud",
      keywords: [
        "AZ-305 Certificado",
        "Azure Well-Architected",
        "CAF Landing Zones",
        "Topología Hub-Spoke",
        "Zero-Trust Security",
        "IaC · Terraform"
      ]
    },
    {
      title: "Ingeniería de Datos",
      keywords: [
        "Databricks · Spark",
        "Delta Lake · DLT",
        "Unity Catalog",
        "Arquitectura Medallion",
        "Data Mesh · Data Products",
        "Structured Streaming"
      ]
    }
  ],
  softwareDesign: {
    title: "Diseño de Software",
    patterns: [
      {
        name: "Arquitectura Hexagonal",
        description: "Ports como interfaces de ingesta/serving. Adapters intercambiables por fuente (REST, Event Hub, JDBC) sin tocar lógica de negocio."
      },
      {
        name: "Domain-Driven Design",
        description: "Bounded contexts mapeados a dominios de datos. Lenguaje ubicuo, ownership claro y data products alineados con dominios de negocio."
      },
      {
        name: "Event-Driven + Fire & Forget",
        description: "Pipelines desacoplados mediante eventos. Structured Streaming con backpressure y exactly-once semantics."
      },
      {
        name: "SOLID en Python",
        description: "Single responsibility en transformaciones PySpark. Dependency injection para testabilidad de pipelines."
      },
      {
        name: "Funcional + Async",
        description: "Transformaciones puras sin side-effects. Orquestación async para paralelismo controlado."
      }
    ]
  },
  platformStack: {
    title: "Stack de Plataforma",
    blocks: [
      {
        title: "Lakehouse",
        bullets: [
          "Delta Lake — transacciones ACID, time travel, evolución de esquemas",
          "Unity Catalog — gobernanza centralizada de todos los activos",
          "Medallion (Bronze → Silver → Gold) — refinamiento progresivo",
          "Databricks SQL — analytics performante sin mover datos"
        ]
      },
      {
        title: "Medallion",
        bullets: [
          "Bronze: ingesta raw, append-only, auditabilidad completa",
          "Silver: validado, deduplicado, estandarizado",
          "Gold: agregado, listo para negocio, frescura optimizada",
          "SCD Tipo 2 para dimensiones slowly changing"
        ]
      },
      {
        title: "Gobernanza",
        bullets: [
          "Unity Catalog — control de acceso unificado y linaje de datos",
          "Gobernanza federada para data products alineados por dominio",
          "Seguridad a nivel de fila y columna por atributos de usuario",
          "Detección y enmascaramiento automático de PII",
          "Dashboards de calidad con alertas automatizadas"
        ]
      },
      {
        title: "CI/CD & IaC",
        bullets: [
          "Terraform para Databricks y recursos Azure",
          "Tests unitarios, de integración y de calidad de datos",
          "GitOps con Azure DevOps / GitHub Actions",
          "Claude, Codex y tooling conectado por MCP para notas de arquitectura, documentación técnica y soporte a la implementación",
          "Databricks Asset Bundles (DABs) para deployment"
        ]
      }
    ]
  },
  publications: {
    title: "Publicaciones",
    viewOn: "Ver en Semantic Scholar →"
  },
  cta: {
    title: "¿Necesitas Arquitectura y Delivery?",
    text: "Si estás diseñando, modernizando o escalando una plataforma de datos y necesitas a alguien que pueda responsabilizarse tanto de la arquitectura como de su entrega, hablemos."
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
    completed: "Completado",
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
    subtitle: "Ideal para conversaciones sobre arquitectura de plataforma, delivery con Azure o Databricks y liderazgo técnico.",
    email: "Email",
    phone: "Teléfono",
    linkedin: "LinkedIn",
    linkedinSub: "Perfil y actividad",
    github: "GitHub",
    githubSub: "Proyectos y código",
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
    subtitle: "Mi trayectoria profesional diseñando y construyendo plataformas de datos en diferentes industrias",
    cta: "¿Buscas un arquitecto de plataformas de datos que entregue resultados? ¡Hablemos!",
    timeline: [
      {
        company: "Knowmad Mood",
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
        company: "Knowmad Mood",
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
    ctaText: "Arquitectura, delivery y advisory de plataforma",
    role: "Arquitecto de Plataformas de Datos"
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
