// Portfolio data - Static content (no backend needed)

export const personalInfo = {
  name: "Alejandro Quilez Asensio",
  email: "alexquilezz@hotmail.com",
  phone: "+34 674 449 806",
  linkedin: "https://www.linkedin.com/in/alejandro-quílez-asensio-2799a5121",
  github: "https://github.com/kaleex"
};

export const hero = {
  headline: "Data Platforms That Actually Work",
  subheadline: "Senior Data Engineer helping companies turn chaotic data into reliable, governed assets that drive real business decisions.",
  intro: [
    "4+ years building data platforms processing 2+ TB/day, serving 500+ daily business requests across telecom, insurance, and banking.",
    "From hours-long pipelines reduced to minutes, to event-driven architectures that scale — I combine data engineering with solid software practices.",
    "I don't just build pipelines. I build platforms that teams trust."
  ]
};

export const approach = {
  title: "How I Think",
  body: "Every data platform I build follows these principles:",
  principles: [
    { name: "Reliability First", description: "Data that stakeholders can't trust is worthless. Robust testing, monitoring, and quality gates at every layer." },
    { name: "Governed by Design", description: "Security and compliance aren't afterthoughts. Unity Catalog, row-level security, and audit trails from day one." },
    { name: "Data Contracts", description: "Explicit contracts over tribal knowledge. Validate early, fail fast. Schema enforcement before data moves downstream." },
    { name: "Built to Evolve", description: "Business needs change. Modular architectures that adapt without requiring rewrites." }
  ],
  closing: "This isn't just methodology — it's how I've delivered successful platforms for banking, insurance, and telecom clients."
};

export const lakehouse = {
  title: "Lakehouse Architecture",
  body: "The lakehouse paradigm combines the best of data lakes and data warehouses. Here's how I implement it:",
  bullets: [
    "Delta Lake as the foundation — ACID transactions, time travel, and schema evolution",
    "Unity Catalog for centralized governance across all data assets",
    "Medallion architecture (Bronze → Silver → Gold) for progressive data refinement",
    "Databricks SQL for performant analytics without data movement"
  ]
};

export const medallion = [
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
];

export const governance = {
  title: "Governance & Security",
  body: "Data governance isn't bureaucracy — it's the foundation of trust. My implementations include:",
  bullets: [
    "Unity Catalog for unified access control and data lineage",
    "Row-level and column-level security based on user attributes",
    "Automated PII detection and masking",
    "Data quality dashboards with automated alerting"
  ]
};

export const cicd = {
  title: "CI/CD & DataOps",
  body: "Modern data platforms require modern engineering practices:",
  bullets: [
    "Infrastructure as Code with Terraform (Databricks, Azure resources)",
    "Automated testing: unit tests, integration tests, data quality tests",
    "GitOps workflows with Azure DevOps / GitHub Actions",
    "Blue-green deployments for zero-downtime releases",
    "Comprehensive monitoring with Azure Monitor and custom dashboards"
  ]
};

export const journey = {
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
};

export const whatIBring = {
  title: "What I Bring",
  bullets: [
    "Deep expertise in Azure data stack (Data Factory, Synapse, Databricks, ADLS)",
    "Production experience with Delta Lake, Unity Catalog, and medallion architectures",
    "Strong foundation in data modeling (dimensional, Data Vault)",
    "Infrastructure as Code (Terraform, ARM templates)",
    "Team leadership and mentoring experience",
    "Fluent communication with both technical teams and business stakeholders"
  ]
};

export const publications = {
  title: "Publications",
  items: [
    {
      title: "Innocampus Explora: Una aproximación a la monitorización ambiental",
      url: "https://www.semanticscholar.org/paper/Innocampus-Explora%3A-Una-aproximaci%C3%B3n-a-la-ambiental-Garro-Moros-Gregorio/21c9513c9cfbe2caa32588e45cf9a117157a4afb",
      type: "Academic Paper"
    }
  ]
};

export const cta = {
  title: "Let's Build Something Reliable",
  text: "Building or evolving a data platform? Looking for someone to own its design and reliability? Let's talk."
};

export const skills = [
  {
    category: "Cloud & Infrastructure",
    icon: "☁️",
    skills: [
      { name: "Azure (Data Factory, Synapse, Databricks)", level: 95 },
      { name: "Terraform / Infrastructure as Code", level: 90 },
      { name: "Docker & Kubernetes", level: 80 }
    ]
  },
  {
    category: "Data Platforms",
    icon: "🗄️",
    skills: [
      { name: "Databricks / Delta Lake", level: 95 },
      { name: "Apache Spark", level: 90 },
      { name: "Unity Catalog", level: 90 }
    ]
  },
  {
    category: "Programming",
    icon: "💻",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL (Advanced)", level: 95 },
      { name: "PySpark", level: 90 },
      { name: "Bash / PowerShell", level: 80 }
    ]
  },
  {
    category: "Data Engineering",
    icon: "⚙️",
    skills: [
      { name: "ETL/ELT Pipeline Design", level: 95 },
      { name: "Data Modeling (Dimensional, Data Vault)", level: 90 },
      { name: "Data Quality & Testing", level: 90 },
      { name: "Performance Optimization", level: 85 }
    ]
  },
  {
    category: "DevOps & MLOps",
    icon: "🔄",
    skills: [
      { name: "Azure DevOps / GitHub Actions", level: 90 },
      { name: "CI/CD for Data Pipelines", level: 90 },
      { name: "Git / Version Control", level: 95 },
      { name: "Monitoring & Observability", level: 85 }
    ]
  },
  {
    category: "Soft Skills",
    icon: "🤝",
    skills: [
      { name: "Technical Leadership", level: 85 },
      { name: "Architecture Design", level: 90 },
      { name: "Team Collaboration", level: 90 },
      { name: "Stakeholder Management", level: 85 },
      { name: "Documentation", level: 85 }
    ]
  }
];

export const roadmap = {
  title: "Learning Roadmap",
  inProgress: [
    { name: "AZ-305 Azure Solutions Architect Expert", target: "January 2026" }
  ],
  upcoming: [
    { name: "Databricks Certified Data Engineer Associate" },
    { name: "Databricks Certified Data Engineer Professional" },
    { name: "Databricks Certified Data Analyst Associate" },
    { name: "Apache Airflow & Orchestration" },
    { name: "dbt (Data Build Tool)" },
    { name: "Spark Structured Streaming" },
    { name: "LLMs & AI Engineering for Data" }
  ]
};
