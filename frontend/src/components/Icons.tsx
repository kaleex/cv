import {
  SunIcon,
  MoonIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowRightIcon,
  ArrowLongRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  DocumentTextIcon,
  DocumentArrowDownIcon,
  MapPinIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  CloudIcon,
  CircleStackIcon,
  CommandLineIcon,
  CogIcon,
  ArrowPathIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  TrophyIcon,
  BookOpenIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  InboxIcon,
} from '@heroicons/react/24/outline'

import {
  SunIcon as SunIconSolid,
  MoonIcon as MoonIconSolid,
} from '@heroicons/react/24/solid'

// Re-export all icons for easy importing
export {
  SunIcon,
  MoonIcon,
  SunIconSolid,
  MoonIconSolid,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowRightIcon,
  ArrowLongRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  DocumentTextIcon,
  DocumentArrowDownIcon,
  MapPinIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  CloudIcon,
  CircleStackIcon,
  CommandLineIcon,
  CogIcon,
  ArrowPathIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  TrophyIcon,
  BookOpenIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  InboxIcon,
}

// GitHub SVG Icon (not in Heroicons)
export function GitHubIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

// LinkedIn SVG Icon (not in Heroicons)
export function LinkedInIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

// Skill category icon mapping
export const skillCategoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Cloud & Infrastructure': CloudIcon,
  'Data Platforms': CircleStackIcon,
  'Programming': CommandLineIcon,
  'Data Engineering': CogIcon,
  'DevOps & MLOps': ArrowPathIcon,
  'Soft Skills': UserGroupIcon,
}

// Cloud Architecture SVG Background - Data Pipeline Style
export function CloudArchitectureSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Connection lines */}
      <g className="connections" stroke="currentColor" strokeWidth="2" opacity="0.6">
        {/* Main data flow paths */}
        <path d="M100 150 L200 200 L350 180 L500 220 L650 180 L750 200" strokeDasharray="8 4" />
        <path d="M100 300 L250 280 L400 320 L550 280 L700 320" strokeDasharray="8 4" />
        <path d="M150 450 L300 420 L450 460 L600 420 L720 450" strokeDasharray="8 4" />

        {/* Cross connections */}
        <path d="M200 200 L250 280" strokeDasharray="4 4" />
        <path d="M350 180 L400 320" strokeDasharray="4 4" />
        <path d="M500 220 L550 280" strokeDasharray="4 4" />
        <path d="M250 280 L300 420" strokeDasharray="4 4" />
        <path d="M400 320 L450 460" strokeDasharray="4 4" />
        <path d="M550 280 L600 420" strokeDasharray="4 4" />
      </g>

      {/* Data source nodes - left */}
      <g className="nodes-source">
        <circle cx="100" cy="150" r="25" fill="currentColor" opacity="0.3" />
        <circle cx="100" cy="150" r="18" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.7" />
        <circle cx="100" cy="300" r="25" fill="currentColor" opacity="0.3" />
        <circle cx="100" cy="300" r="18" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.7" />
        <circle cx="150" cy="450" r="25" fill="currentColor" opacity="0.3" />
        <circle cx="150" cy="450" r="18" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.7" />
      </g>

      {/* Processing nodes - Bronze layer */}
      <g className="nodes-bronze">
        <rect x="175" y="175" width="50" height="50" rx="8" fill="currentColor" opacity="0.25" />
        <rect x="180" y="180" width="40" height="40" rx="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
        <rect x="225" y="255" width="50" height="50" rx="8" fill="currentColor" opacity="0.25" />
        <rect x="230" y="260" width="40" height="40" rx="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
        <rect x="275" y="395" width="50" height="50" rx="8" fill="currentColor" opacity="0.25" />
        <rect x="280" y="400" width="40" height="40" rx="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
      </g>

      {/* Processing nodes - Silver layer */}
      <g className="nodes-silver">
        <polygon points="350,155 380,180 380,205 350,230 320,205 320,180" fill="currentColor" opacity="0.25" />
        <polygon points="350,162 373,182 373,202 350,222 327,202 327,182" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
        <polygon points="400,295 430,320 430,345 400,370 370,345 370,320" fill="currentColor" opacity="0.25" />
        <polygon points="400,302 423,322 423,342 400,362 377,342 377,322" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
        <polygon points="450,435 480,460 480,485 450,510 420,485 420,460" fill="currentColor" opacity="0.25" />
        <polygon points="450,442 473,462 473,482 450,502 427,482 427,462" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
      </g>

      {/* Processing nodes - Gold layer */}
      <g className="nodes-gold">
        <circle cx="500" cy="220" r="30" fill="currentColor" opacity="0.3" />
        <circle cx="500" cy="220" r="22" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.7" />
        <circle cx="500" cy="220" r="12" fill="currentColor" opacity="0.4" />

        <circle cx="550" cy="280" r="30" fill="currentColor" opacity="0.3" />
        <circle cx="550" cy="280" r="22" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.7" />
        <circle cx="550" cy="280" r="12" fill="currentColor" opacity="0.4" />

        <circle cx="600" cy="420" r="30" fill="currentColor" opacity="0.3" />
        <circle cx="600" cy="420" r="22" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.7" />
        <circle cx="600" cy="420" r="12" fill="currentColor" opacity="0.4" />
      </g>

      {/* Output/Dashboard nodes - right */}
      <g className="nodes-output">
        <rect x="700" y="165" width="60" height="70" rx="10" fill="currentColor" opacity="0.2" />
        <rect x="708" y="173" width="44" height="54" rx="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
        <line x1="715" y1="185" x2="745" y2="185" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="715" y1="195" x2="740" y2="195" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="715" y1="205" x2="745" y2="205" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />

        <rect x="670" y="285" width="60" height="70" rx="10" fill="currentColor" opacity="0.2" />
        <rect x="678" y="293" width="44" height="54" rx="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
        <line x1="685" y1="305" x2="715" y2="305" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="685" y1="315" x2="710" y2="315" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="685" y1="325" x2="715" y2="325" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />

        <rect x="690" y="415" width="60" height="70" rx="10" fill="currentColor" opacity="0.2" />
        <rect x="698" y="423" width="44" height="54" rx="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
        <line x1="705" y1="435" x2="735" y2="435" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="705" y1="445" x2="730" y2="445" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="705" y1="455" x2="735" y2="455" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      </g>

      {/* Floating decorative elements */}
      <g className="decorations" opacity="0.4">
        <circle cx="50" cy="80" r="4" fill="currentColor" />
        <circle cx="750" cy="100" r="3" fill="currentColor" />
        <circle cx="80" cy="500" r="5" fill="currentColor" />
        <circle cx="720" cy="520" r="4" fill="currentColor" />
        <circle cx="400" cy="50" r="3" fill="currentColor" />
        <circle cx="600" cy="550" r="4" fill="currentColor" />
        <circle cx="200" cy="530" r="3" fill="currentColor" />
      </g>
    </svg>
  )
}

// Mobile-optimized vertical data pipeline SVG - organic/asymmetric layout
export function CloudArchitectureMobileSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Organic connection lines */}
      <g className="connections" stroke="currentColor" strokeWidth="2" opacity="0.5">
        {/* Main curved flow */}
        <path d="M120 60 Q180 120, 160 180 Q140 240, 220 300 Q300 360, 250 420 Q200 480, 280 540 Q360 600, 300 680 Q240 760, 180 750" strokeDasharray="8 4" fill="none" />
        {/* Secondary paths */}
        <path d="M320 100 Q280 160, 300 220" strokeDasharray="4 4" fill="none" />
        <path d="M60 280 Q120 320, 180 300" strokeDasharray="4 4" fill="none" />
        <path d="M340 380 Q300 440, 260 420" strokeDasharray="4 4" fill="none" />
        <path d="M80 500 Q140 540, 200 520" strokeDasharray="4 4" fill="none" />
        <path d="M100 650 Q160 680, 180 750" strokeDasharray="4 4" fill="none" />
      </g>

      {/* Scattered source nodes */}
      <g className="nodes-source">
        <circle cx="120" cy="60" r="28" fill="currentColor" opacity="0.25" />
        <circle cx="120" cy="60" r="20" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.7" />

        <circle cx="320" cy="100" r="22" fill="currentColor" opacity="0.2" />
        <circle cx="320" cy="100" r="15" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
      </g>

      {/* Processing nodes - varied positions */}
      <g className="nodes-processing">
        {/* Rectangles at irregular positions */}
        <rect x="140" y="160" width="45" height="45" rx="8" fill="currentColor" opacity="0.2" />
        <rect x="145" y="165" width="35" height="35" rx="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />

        <rect x="40" y="260" width="50" height="40" rx="6" fill="currentColor" opacity="0.2" />
        <rect x="45" y="265" width="40" height="30" rx="4" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />

        <rect x="280" y="200" width="40" height="50" rx="8" fill="currentColor" opacity="0.18" />
        <rect x="285" y="205" width="30" height="40" rx="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />
      </g>

      {/* Hexagon nodes - asymmetric positions */}
      <g className="nodes-hex">
        <polygon points="220,280 248,300 248,335 220,355 192,335 192,300" fill="currentColor" opacity="0.22" />
        <polygon points="220,290 240,305 240,330 220,345 200,330 200,305" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />

        <polygon points="320,400 342,415 342,440 320,455 298,440 298,415" fill="currentColor" opacity="0.18" />
        <polygon points="320,408 336,420 336,436 320,448 304,436 304,420" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />

        <polygon points="100,480 125,500 125,530 100,550 75,530 75,500" fill="currentColor" opacity="0.2" />
        <polygon points="100,490 118,505 118,525 100,540 82,525 82,505" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
      </g>

      {/* Circle nodes - scattered */}
      <g className="nodes-circles">
        <circle cx="260" cy="520" r="26" fill="currentColor" opacity="0.2" />
        <circle cx="260" cy="520" r="18" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="260" cy="520" r="8" fill="currentColor" opacity="0.3" />

        <circle cx="80" cy="620" r="20" fill="currentColor" opacity="0.18" />
        <circle cx="80" cy="620" r="14" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />

        <circle cx="340" cy="580" r="18" fill="currentColor" opacity="0.15" />
        <circle cx="340" cy="580" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      </g>

      {/* Output node - offset */}
      <g className="node-output">
        <rect x="140" y="710" width="65" height="55" rx="10" fill="currentColor" opacity="0.2" />
        <rect x="147" y="717" width="51" height="41" rx="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
        <line x1="155" y1="728" x2="190" y2="728" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <line x1="155" y1="738" x2="185" y2="738" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <line x1="155" y1="748" x2="192" y2="748" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

        <rect x="280" y="680" width="55" height="45" rx="8" fill="currentColor" opacity="0.15" />
        <rect x="286" y="686" width="43" height="33" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
        <line x1="292" y1="696" x2="323" y2="696" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <line x1="292" y1="705" x2="318" y2="705" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      </g>

      {/* Decorative dots - scattered */}
      <g className="decorations" opacity="0.35">
        <circle cx="30" cy="120" r="4" fill="currentColor" />
        <circle cx="370" cy="60" r="3" fill="currentColor" />
        <circle cx="60" cy="380" r="5" fill="currentColor" />
        <circle cx="350" cy="280" r="3" fill="currentColor" />
        <circle cx="25" cy="550" r="4" fill="currentColor" />
        <circle cx="375" cy="480" r="3" fill="currentColor" />
        <circle cx="220" cy="640" r="4" fill="currentColor" />
        <circle cx="50" cy="730" r="3" fill="currentColor" />
        <circle cx="360" cy="740" r="4" fill="currentColor" />
        <circle cx="180" cy="120" r="3" fill="currentColor" />
        <circle cx="300" cy="620" r="3" fill="currentColor" />
      </g>
    </svg>
  )
}
