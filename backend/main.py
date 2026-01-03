from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime, date
import json
import os
from collections import defaultdict
import hashlib

app = FastAPI(title="Portfolio API", version="1.0.0")

# CORS configuration for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174", "http://localhost:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data models
class Hero(BaseModel):
    headline: str
    subheadline: str
    intro: List[str]

class Principle(BaseModel):
    name: str
    description: str

class Approach(BaseModel):
    title: str
    body: str
    principles: List[Principle]
    closing: str

class LakehouseArchitecture(BaseModel):
    title: str
    body: str
    bullets: List[str]

class MedallionLayer(BaseModel):
    name: str
    subtitle: str
    description: str
    characteristics: List[str]

class GovernanceSecurity(BaseModel):
    title: str
    body: str
    bullets: List[str]

class CICD(BaseModel):
    title: str
    body: str
    bullets: List[str]

class JourneyItem(BaseModel):
    company: str
    period: str
    description: str

class Journey(BaseModel):
    title: str
    items: List[JourneyItem]

class WhatIBring(BaseModel):
    title: str
    bullets: List[str]

class CTA(BaseModel):
    title: str
    text: str

class PersonalInfo(BaseModel):
    name: str
    email: str
    phone: str
    linkedin: str
    github: str

class SkillItem(BaseModel):
    name: str
    level: int  # 1-100

class SkillCategory(BaseModel):
    category: str
    icon: str
    skills: List[SkillItem]

class PortfolioData(BaseModel):
    personal_info: PersonalInfo
    hero: Hero
    approach: Approach
    lakehouse: LakehouseArchitecture
    medallion: List[MedallionLayer]
    governance: GovernanceSecurity
    cicd: CICD
    journey: Journey
    what_i_bring: WhatIBring
    cta: CTA

# Portfolio data
portfolio_data = PortfolioData(
    personal_info=PersonalInfo(
        name="Alejandro Quilez Asensio",
        email="alexquilezz@hotmail.com",
        phone="+34 674 449 806",
        linkedin="https://www.linkedin.com/in/alejandro-quílez-asensio-2799a5121",
        github="https://github.com/kaleex"
    ),
    hero=Hero(
        headline="Designing Governed Data Platforms on Azure with Databricks",
        subheadline="Senior Data Engineer with 4+ years of experience designing, operating, and evolving data platforms on Azure and Databricks. I have worked across telecom, insurance, and banking environments, building Lakehouse architectures that balance scalability, governance, and real-world operability.",
        intro=[
            "My background combines platform architecture, data engineering, and software engineering — allowing me to design systems that are reliable, maintainable, and ready for production.",
            "I focus on building data infrastructure that teams can trust, scale, and operate safely. Not just pipelines, but platforms.",
            "I don't build isolated pipelines — I design systems that teams can trust, scale, and govern."
        ]
    ),
    approach=Approach(
        title="My Architectural Approach",
        body="Good data platforms share common foundations. When I design a system, I focus on three principles that determine whether it will succeed long-term:",
        principles=[
            Principle(name="Reliability", description="data must be traceable, reproducible, and auditable — so teams can trust it for critical decisions."),
            Principle(name="Governance", description="access, lineage, and ownership are built-in from day one — reducing compliance risk and enabling collaboration."),
            Principle(name="Sustainability", description="platforms must be maintainable by teams, not dependent on individual heroes — ensuring long-term operational health.")
        ],
        closing="This approach comes from hands-on experience in large enterprises, regulated industries, and business-critical systems where failure has real consequences."
    ),
    lakehouse=LakehouseArchitecture(
        title="End-to-End Lakehouse Architecture",
        body="I design Lakehouse platforms that unify data storage, processing, and governance in a single system. This reduces complexity, lowers costs, and accelerates time-to-insight compared to traditional data warehouse approaches. The architecture uses Azure and Databricks as the core stack, following the Medallion pattern with enterprise-grade CI/CD and security.",
        bullets=[
            "Multiple data sources (databases, APIs, files, streaming)",
            "Databricks as the processing and orchestration engine",
            "Delta Lake as the storage and transaction layer",
            "Unified governance and security model"
        ]
    ),
    medallion=[
        MedallionLayer(
            name="Bronze Layer",
            subtitle="Reliable Ingestion",
            description="The Bronze layer acts as an immutable landing zone for raw data. This ensures that every piece of data can be traced back to its source and reprocessed if needed — critical for audits and debugging.",
            characteristics=[
                "Raw, immutable data",
                "Batch and streaming ingestion",
                "No business logic applied",
                "Full ingestion metadata (run id, timestamps, source)"
            ]
        ),
        MedallionLayer(
            name="Silver Layer",
            subtitle="Quality & Consistency",
            description="The Silver layer is where data becomes trustworthy. By enforcing schemas, validating quality, and handling duplicates, this layer ensures that downstream teams can rely on the data without second-guessing it.",
            characteristics=[
                "Schema enforcement and normalization",
                "Deduplication and consistency checks",
                "Data quality validation rules",
                "Controlled handling of invalid records"
            ]
        ),
        MedallionLayer(
            name="Gold Layer",
            subtitle="Business Consumption",
            description="The Gold layer is designed for business users, not engineers. It exposes clean, well-documented datasets optimized for analytics, reporting, and machine learning — ready to drive decisions.",
            characteristics=[
                "Fact and dimension models",
                "Performance-optimized Delta tables",
                "BI and analytics-ready datasets",
                "Clear ownership and business semantics"
            ]
        )
    ],
    governance=GovernanceSecurity(
        title="Governance and Security by Design",
        body="A data platform without governance becomes a liability. I design security and compliance controls as core features of the platform — not bolted on later. This protects sensitive data, simplifies audits, and enables safe collaboration across teams.",
        bullets=[
            "Centralized governance using Unity Catalog",
            "Fine-grained access control (catalog, schema, table level)",
            "Built-in data lineage and audit trails",
            "Integration with enterprise catalogs (e.g., Microsoft Purview)",
            "Secure secrets management via Azure Key Vault",
            "Least-privilege access using managed identities"
        ]
    ),
    cicd=CICD(
        title="CI/CD, Deployment, and Operability",
        body="Modern data platforms require the same engineering discipline as software systems. Automated testing, version control, and reliable deployments reduce errors, speed up delivery, and make the platform easier to maintain over time.",
        bullets=[
            "Git-based development workflows",
            "Declarative deployments using Databricks Asset Bundles",
            "Environment promotion (dev → staging → prod)",
            "Automated testing and controlled releases",
            "Operational monitoring and structured logging",
            "Cost awareness and FinOps practices"
        ]
    ),
    journey=Journey(
        title="My Professional Journey",
        items=[
            JourneyItem(
                company="Capgemini / Telefónica",
                period="2021 — 2023",
                description="Built and operated large-scale Azure and Databricks platforms for one of Europe's largest telecom providers. Covered infrastructure, data engineering, MLOps, and CI/CD — gaining a complete view of how enterprise data platforms work end to end."
            ),
            JourneyItem(
                company="Generali",
                period="2023 — 2024",
                description="Worked in a regulated insurance environment, designing data pipelines, integrating legacy systems, and supporting analytical models. Developed strong instincts for working within real-world constraints and compliance requirements."
            ),
            JourneyItem(
                company="WiZink",
                period="2025 — Present",
                description="Refactoring core business systems into modular, event-driven architectures in the banking sector. Strengthened software engineering practices and reinforced the importance of maintainability and clean system design."
            )
        ]
    ),
    what_i_bring=WhatIBring(
        title="What I Bring to a Team",
        bullets=[
            "Platform-level thinking — I design systems, not just pipelines",
            "Deep expertise in Databricks and Azure ecosystems",
            "Experience in regulated industries (insurance, banking, telecom)",
            "Software engineering discipline applied to data infrastructure",
            "Clear communication between technical and business stakeholders"
        ]
    ),
    cta=CTA(
        title="Let's Build Data Platforms That Last",
        text="Looking for someone who understands data platforms beyond code — from governance and security to deployment and daily operations? I'd be happy to talk."
    )
)

# Skills data
skills_data = [
    SkillCategory(
        category="Cloud & Infrastructure",
        icon="☁️",
        skills=[
            SkillItem(name="Microsoft Azure", level=95),
            SkillItem(name="Azure Data Factory", level=90),
            SkillItem(name="Azure DevOps", level=85),
            SkillItem(name="Terraform", level=75),
            SkillItem(name="Docker", level=70),
        ]
    ),
    SkillCategory(
        category="Data Platforms",
        icon="🗄️",
        skills=[
            SkillItem(name="Databricks", level=95),
            SkillItem(name="Delta Lake", level=90),
            SkillItem(name="Apache Spark", level=85),
            SkillItem(name="Unity Catalog", level=85),
            SkillItem(name="SQL / T-SQL", level=90),
        ]
    ),
    SkillCategory(
        category="Programming",
        icon="💻",
        skills=[
            SkillItem(name="Python", level=90),
            SkillItem(name="PySpark", level=85),
            SkillItem(name="SQL", level=90),
            SkillItem(name="Scala", level=60),
            SkillItem(name="Bash / PowerShell", level=70),
        ]
    ),
    SkillCategory(
        category="Data Engineering",
        icon="⚙️",
        skills=[
            SkillItem(name="ETL / ELT Pipelines", level=95),
            SkillItem(name="Data Modeling", level=85),
            SkillItem(name="Data Quality", level=90),
            SkillItem(name="Stream Processing", level=75),
            SkillItem(name="Data Governance", level=90),
        ]
    ),
    SkillCategory(
        category="DevOps & MLOps",
        icon="🔄",
        skills=[
            SkillItem(name="CI/CD Pipelines", level=85),
            SkillItem(name="Git / GitHub", level=90),
            SkillItem(name="Databricks Asset Bundles", level=80),
            SkillItem(name="MLflow", level=70),
            SkillItem(name="Monitoring & Logging", level=80),
        ]
    ),
    SkillCategory(
        category="Soft Skills",
        icon="🤝",
        skills=[
            SkillItem(name="Technical Communication", level=90),
            SkillItem(name="Problem Solving", level=95),
            SkillItem(name="Team Collaboration", level=90),
            SkillItem(name="Stakeholder Management", level=85),
            SkillItem(name="Documentation", level=85),
        ]
    ),
]

# ============================================
# PRIVACY-FIRST ANALYTICS (No cookies, RGPD compliant)
# ============================================

ANALYTICS_FILE = "analytics_data.json"

class AnalyticsEvent(BaseModel):
    event_type: str  # pageview, click, scroll
    event_name: str  # page path or event name
    event_data: Optional[dict] = None
    timestamp: Optional[str] = None

class AnalyticsData:
    def __init__(self):
        self.data = self._load_data()
    
    def _load_data(self) -> dict:
        if os.path.exists(ANALYTICS_FILE):
            try:
                with open(ANALYTICS_FILE, 'r') as f:
                    return json.load(f)
            except:
                pass
        return {
            "total_visits": 0,
            "unique_visitors": 0,
            "visitor_hashes": [],
            "daily_visits": {},
            "page_views": {},
            "events": {},
            "countries": {},
            "referrers": {},
            "devices": {},
            "scroll_depth": {"25": 0, "50": 0, "75": 0, "90": 0, "100": 0}
        }
    
    def _save_data(self):
        with open(ANALYTICS_FILE, 'w') as f:
            json.dump(self.data, f, indent=2)
    
    def _get_visitor_hash(self, request: Request) -> str:
        """Create anonymous visitor hash from IP + User-Agent (no PII stored)"""
        ip = request.client.host if request.client else "unknown"
        ua = request.headers.get("user-agent", "unknown")
        # Hash to anonymize - cannot be reversed to identify user
        raw = f"{ip}-{ua}-{date.today().isoformat()}"
        return hashlib.sha256(raw.encode()).hexdigest()[:16]
    
    def _get_country_from_request(self, request: Request) -> str:
        """Get country from headers (set by CDN/proxy) or return Unknown"""
        # Common headers set by CDNs like Cloudflare, Vercel, etc.
        country = request.headers.get("cf-ipcountry")  # Cloudflare
        if not country:
            country = request.headers.get("x-vercel-ip-country")  # Vercel
        if not country:
            country = request.headers.get("x-country")  # Generic
        return country or "Unknown"
    
    def _get_device_type(self, request: Request) -> str:
        """Simple device detection from User-Agent"""
        ua = request.headers.get("user-agent", "").lower()
        if "mobile" in ua or "android" in ua or "iphone" in ua:
            return "mobile"
        elif "tablet" in ua or "ipad" in ua:
            return "tablet"
        return "desktop"
    
    def track_event(self, request: Request, event: AnalyticsEvent):
        today = date.today().isoformat()
        visitor_hash = self._get_visitor_hash(request)
        
        # Track unique visitors (daily)
        if visitor_hash not in self.data["visitor_hashes"]:
            self.data["visitor_hashes"].append(visitor_hash)
            self.data["unique_visitors"] += 1
            # Keep only last 30 days of hashes to save space
            if len(self.data["visitor_hashes"]) > 10000:
                self.data["visitor_hashes"] = self.data["visitor_hashes"][-5000:]
        
        # Track page views
        if event.event_type == "pageview":
            self.data["total_visits"] += 1
            
            # Daily visits
            self.data["daily_visits"][today] = self.data["daily_visits"].get(today, 0) + 1
            
            # Page views by path
            page = event.event_name
            self.data["page_views"][page] = self.data["page_views"].get(page, 0) + 1
            
            # Country
            country = self._get_country_from_request(request)
            self.data["countries"][country] = self.data["countries"].get(country, 0) + 1
            
            # Device
            device = self._get_device_type(request)
            self.data["devices"][device] = self.data["devices"].get(device, 0) + 1
            
            # Referrer
            referrer = request.headers.get("referer", "direct")
            if referrer != "direct":
                # Extract domain only
                try:
                    from urllib.parse import urlparse
                    referrer = urlparse(referrer).netloc or "direct"
                except:
                    referrer = "direct"
            self.data["referrers"][referrer] = self.data["referrers"].get(referrer, 0) + 1
        
        # Track clicks and other events
        elif event.event_type == "click":
            event_key = f"{event.event_name}"
            self.data["events"][event_key] = self.data["events"].get(event_key, 0) + 1
        
        # Track scroll depth
        elif event.event_type == "scroll":
            depth = event.event_name  # "25", "50", "75", "90", "100"
            if depth in self.data["scroll_depth"]:
                self.data["scroll_depth"][depth] += 1
        
        self._save_data()
    
    def get_stats(self) -> dict:
        # Clean up old daily data (keep last 30 days)
        today = date.today()
        cutoff = (today.replace(day=1) if today.day > 1 else today).isoformat()
        
        return {
            "total_visits": self.data["total_visits"],
            "unique_visitors": self.data["unique_visitors"],
            "today_visits": self.data["daily_visits"].get(date.today().isoformat(), 0),
            "page_views": dict(sorted(self.data["page_views"].items(), key=lambda x: x[1], reverse=True)[:10]),
            "top_events": dict(sorted(self.data["events"].items(), key=lambda x: x[1], reverse=True)[:10]),
            "countries": dict(sorted(self.data["countries"].items(), key=lambda x: x[1], reverse=True)[:10]),
            "devices": self.data["devices"],
            "referrers": dict(sorted(self.data["referrers"].items(), key=lambda x: x[1], reverse=True)[:5]),
            "scroll_depth": self.data["scroll_depth"],
            "daily_visits": dict(sorted(self.data["daily_visits"].items(), reverse=True)[:7])
        }

# Initialize analytics
analytics = AnalyticsData()

@app.get("/")
async def root():
    return {"message": "Portfolio API", "version": "1.0.0"}

@app.get("/api/portfolio", response_model=PortfolioData)
async def get_portfolio():
    return portfolio_data

@app.get("/api/skills", response_model=List[SkillCategory])
async def get_skills():
    return skills_data

@app.post("/api/analytics/track")
async def track_analytics(event: AnalyticsEvent, request: Request):
    """Track analytics event - RGPD compliant, no cookies, no PII"""
    analytics.track_event(request, event)
    return {"status": "ok"}

@app.get("/api/analytics/stats")
async def get_analytics_stats():
    """Get analytics dashboard data"""
    return analytics.get_stats()
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

