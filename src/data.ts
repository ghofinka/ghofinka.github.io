import { Project, TechCategory, OpenSourceContribution, ExperienceHighlight } from "./types";

export const DEV_NAME = "Inka Putri";
export const DEV_TITLE = "Backend Engineer";
export const DEV_LOCATION = "Jakarta, ID (Remote Friendly)";
export const DEV_EMAIL = "ghofinka@gmail.com";

export const SOCIAL_LINKS = {
  github: "https://github.com/ghofinka",
  linkedin: "https://linkedin.com/in/ghofinka",
  email: "ghofinka@gmail.com",
};

export const DEV_BIO =
  "I specialize in backend engineering, designing APIs, business services, and system integrations that power enterprise applications. Beyond backend development, I've worked on frontend features, data processing pipelines, and large-scale ETL workflows involving data cleansing, normalization, and transformation to ensure reliable and consistent information across systems.";

export const ABOUT_ME_DETAILED = {
  introduction: "Hi, I'm Inka. Backend Engineer with 10+ years of experience in building scalable enterprise systems across financial and insurance services. Recently, I've been combining backend engineering with AI to build more intelligent applications. I'm continuously learning new technologies to stay ahead of the rapidly evolving software engineering landscape. Connect with me on LinkedIn or shoot me an email if you’d like to chat about engineering, AI, or potential collaborations.",
  philosophy: "Great software isn't defined by the interface alone. It's built on reliable systems underneath. I enjoy designing the backend that quietly handles complexity, keeps data consistent, and scales as products evolve. Like a building's foundation, the best engineering is often the part users never see.",
  currentFocus: "Currently, I'm focused on building and maintaining scalable backend services, improving application performance, designing clean APIs, and collaborating across teams to deliver reliable software that solves real business problems."
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "omnibroker",
    name: "OmniBroker API Gateway",
    description: "A bare-metal high-throughput reverse proxy routing engine that maps dynamic client payloads directly to internal services with active circuit-breakers and adaptive rate-limiting.",
    role: "Lead Architect & Go Core Developer",
    techStack: ["Go", "gRPC", "eBPF", "Redis", "Docker", "Kubernetes"],
    interestingFeatures: [
      "Translates public HTTP REST endpoints into lightning fast internal gRPC requests on-the-fly",
      "Dynamic routing tables fetched reactively from a Redis Pub/Sub backplane",
      "Robust sliding-window token-bucket IP rate limit protection built on distributed lock sets",
      "Zero-allocation custom JSON byte parsing yielding zero memory allocations per routing turn"
    ],
    challengesSolved: "Faced major routing latency spikes (p99 > 85ms) during flash traffic surges. Resolved this by replacing the standard router with an active eBPF map routing system, routing requests directly inside the kernel network stack, which successfully dropped the p99 latency back down to 1.2ms under 250k QPS."
  },
  {
    id: "chronos",
    name: "Chronos Timeseries Engine",
    description: "A high-density chunked timeseries partition database adapter designed to compress and store granular infrastructure logs and hardware metric indicators.",
    role: "Core Systems Engineer (Rust)",
    techStack: ["Rust", "Cassandra", "Prometheus", "eBPF", "gRPC"],
    interestingFeatures: [
      "Custom double-delta timestamp compression algorithm inspired by Gorilla paper to minimize disk footprint",
      "In-memory dynamic ring-buffering system protecting SSD lifespans by batching disk flushes",
      "ScyllaDB-compatible eventual partitioning adapter avoiding node-hotspotting in distributed clusters",
      "Asynchronous lock-free ring-buffer writes allowing ultra-low write latency lock structures"
    ],
    challengesSolved: "Uncontrolled memory consumption and locks was causing node daemon evictions. Completely refactored the heap allocations by utilizing thread-local arena allocation schemes and introduced a threadpool execution queue, capping the memory foot-print to less than 256MB per instance while maintaining a sustained write speed of 1.2M logs/sec."
  },
  {
    id: "eventstream",
    name: "EventStream Ledger Coordinator",
    description: "A secure, double-entry transactional financial routing engine implementing the Saga pattern to coordinate balance reserves and settlement releases safely.",
    role: "Senior Backend Developer",
    techStack: ["Kotlin", "Apache Kafka", "PostgreSQL", "Redis", "Terraform"],
    interestingFeatures: [
      "Native JVM-fiber non-blocking coroutines managing thousands of concurrent distributed calculations",
      "Saga Pattern engine managing coordinated rollbacks on payment settlement failures",
      "Distributed mutex lock protection using Redlock to completely prevent multi-spend fraud attempts",
      "Rigid Ledger-certified double-entry entry schema verifying zero fractional balances"
    ],
    challengesSolved: "Network hiccups and client timeouts occasionally triggered duplicate transaction runs. Implemented a Redis-based idempotent gatekeeper checking transaction keys with sub-millisecond locks. Combined with Kafka double-producer semantics, this strictly guaranteed exactly-once processing with zero accounting discrepancies."
  }
];

export const TECH_STACK_DATA: TechCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "Go", level: "Expert" },
      { name: "PHP", level: "Expert" },
      { name: "Java", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Python", level: "Familiar" }
    ]
  },
  {
    category: "Databases & Messaging",
    items: [
      { name: "MySQL", level: "Expert" },
      { name: "PostgreSQL", level: "Expert" },
      { name: "MongoDB", level: "Proficient" },
      { name: "Kafka", level: "Proficient" },
      { name: "NSQ", level: "Expert" }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Docker", level: "Expert" },
      { name: "Kubernetes", level: "Proficient" },
      { name: "AWS", level: "Proficient" },
      { name: "Github Actions", level: "Proficient" },
      { name: "BigData", level: "Proficient" }
    ]
  },
  {
    category: "Frameworks & Tooling",
    items: [
      { name: "RESTful API", level: "Expert" },
      { name: "GraphQL", level: "Expert" },
      { name: "Prometheus & Grafana", level: "Expert" },
      { name: "OpenAPI", level: "Proficient" },
      { name: "Flyway", level: "Proficient" }
    ]
  }
];

export const OS_CONTRIBUTIONS: OpenSourceContribution[] = [
  {
    repo: "envoyproxy/envoy",
    url: "https://github.com/envoyproxy/envoy",
    description: "Patched the upstream connection-pooling thread allocation rules to reduce thread-contention under intensive gRPC multiplexing connection patterns.",
    role: "Contributor (C++)",
    impact: "Over 20k users benefited from 14% p99 latency reductions in highly containerized deployment meshes.",
    stars: 24500
  },
  {
    repo: "tokio-rs/tokio",
    url: "https://github.com/tokio-rs/tokio",
    description: "Contributed an optimization to thread-stealing routines inside the Tokio runtime scheduler to avoid scheduler imbalance on uneven tasks.",
    role: "Contributor (Rust)",
    impact: "Improved average CPU allocation balance under bursty raw-socket telemetry loads by up to 8.5%.",
    stars: 22800
  },
  {
    repo: "redis/go-redis",
    url: "https://github.com/redis/go-redis",
    description: "Implemented custom memory pipeline optimizations during dynamic mass transaction writes.",
    role: "Contributor (Go)",
    impact: "Reduced local client allocations by 18MB/s during cluster-wide state transfers.",
    stars: 18200
  }
];

export const EXPERIENCE_HIGHLIGHTS: ExperienceHighlight[] = [
  {
    company: "Indonesia Financial Group (IFG)",
    role: "Backend Developer",
    period: "2026 - Present",
    achievements: [
      "Designed and implemented core backend services for a General Insurance platform, providing a common foundation that supports multiple insurance companies across the organization.",
      "Reviewed pull requests to ensure code quality and best practices",
      "Contributed to architecture discussions on scalability and system design"
    ]
  },
  {
    company: "Edufund",
    role: "Backend Lead",
    period: "2021 - 2025",
    achievements: [
      "Led the design and implementation of backend services supporting lender, borrower, and internal operational platforms.",
      "Defined technical specifications and system designs for new features, balancing business requirements with long-term maintainability.",
      "Integrated payment gateways, digital signature providers, and external partner APIs into core business workflows.",
      "Built automated reporting services for internal stakeholders and regulatory compliance, improving data accuracy and operational efficiency.",
      "Mentored backend engineers through code reviews, architecture discussions, and engineering best practices to foster a collaborative development culture."
    ]
  },
  {
    company: "Spacestock",
    role: "Backend Developer",
    period: "2019 - 2021",
    achievements: [
      "Designed and developed APIs for the agent mobile application",
      "Implemented and enhanced functionalities for internal back-office systems",
      "Managed and maintained services for product listing operations"
    ]
  },
  {
    company: "Popbox",
    role: "Backend Developer",
    period: "2019",
    achievements: [
      "Build API to control and manage locker door systems",
      "Build & maintain some landing pages for company and their subsidiary",
      "Create dashboard for internal and merchant",
      "Performed data extraction and delivered visual insights for executive (BOD) reporting"
    ]
  },
  {
    company: "Lembaga Ilmu Pengetahuan Indonesia (Now Known as BRIN)",
    role: "IT Developer",
    period: "2017 - 2019",
    achievements: [
      "Create vehicle and meeting rooms scheduling application",
      "Maintain procurement application",
      "Create application for submission of study assignments and overseas business trips",
      "Create e-kinerja application to track employee KPI",
      "Conduct training of the application"
    ]
  },
  {
    company: "Software House",
    role: "Fullstack Developer",
    period: "2015 - 2017",
    achievements: [
      "Designed and developed a web-based event ticketing application",
      "Delivered end-to-end website solutions for multiple clients"
    ]
  }
];
