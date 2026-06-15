import { Project, TechCategory, OpenSourceContribution, ExperienceHighlight } from "./types";

export const DEV_NAME = "Inka Putri";
export const DEV_TITLE = "Lead Systems & Infrastructure Engineer";
export const DEV_LOCATION = "Jakarta, ID (Remote Friendly)";
export const DEV_EMAIL = "inka.putri.dev@gmail.com";

export const SOCIAL_LINKS = {
  github: "https://github.com/inka-putri-telemetry",
  linkedin: "https://linkedin.com/in/inka-putri-infra",
  email: "inka.putri.dev@gmail.com",
};

export const DEV_BIO = 
  "I am a Lead Systems and Infrastructure Engineer specializing in designing and implementing high-throughput, low-latency distributed networks, custom API routing gateways, and reliable telemetry processing cores. I write clean, performant modules in Rust, Go, and Kotlin, orchestrating secure multi-cloud structures using Terraform or Kubernetes with focus on predictable p99 limits and reliable double-entry financial ledger operations.";

export const ABOUT_ME_DETAILED = {
  introduction: "Hi, I'm Inka. Over the last 8+ years, I have lived at the intersection of systems software development and automated cloud infrastructure. I believe backend code shouldn't just be functional—it should be fast, memory-safe, predictable under extreme load, and highly observable.",
  philosophy: "Instead of throwing more hardware at scale challenges, I focus on optimizing garbage collection pauses, avoiding unnecessary memory allocations, designing clean non-blocking network I/O, and ensuring eventual consistency stays consistently accurate.",
  currentFocus: "Currently, I lead core platform workloads, helping enterprise organizations build internal gateway developer portals, scale transactional ledgers, and establish robust telemetry pipelines that can process millions of concurrent payloads."
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
      { name: "Rust", level: "Expert" },
      { name: "Go", level: "Expert" },
      { name: "Kotlin", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
      { name: "C++", level: "Familiar" }
    ]
  },
  {
    category: "Databases & Streams",
    items: [
      { name: "Apache Kafka", level: "Expert" },
      { name: "ScyllaDB / Cassandra", level: "Expert" },
      { name: "PostgreSQL", level: "Expert" },
      { name: "Redis Cluster", level: "Expert" },
      { name: "Elasticsearch", level: "Proficient" }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Kubernetes (EKS/GKE)", level: "Expert" },
      { name: "Terraform / IAC", level: "Expert" },
      { name: "Docker / Podman", level: "Expert" },
      { name: "AWS", level: "Expert" },
      { name: "GCP", level: "Proficient" }
    ]
  },
  {
    category: "Frameworks & Tooling",
    items: [
      { name: "gRPC", level: "Expert" },
      { name: "Envoy Proxy", level: "Expert" },
      { name: "eBPF Tools", level: "Proficient" },
      { name: "Prometheus & Grafana", level: "Expert" },
      { name: "React (for Portals)", level: "Proficient" }
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
    company: "SagaStream Financial",
    role: "Lead Distributed Infrastructure Engineer",
    period: "2023 - Present",
    achievements: [
      "Spearheaded redesign of core banking ledger backend modules, supporting a baseline scaling performance of up to 450,000 real-time payment coordinates per second.",
      "Engineered a zero-downtime database migration routine using Change Data Capture (CDC) pipelines, moving over 1.4 Billion entries from a legacy MS SQL server cluster onto high-performance Cassandra shards.",
      "Established multi-cloud active-active state replication, strictly adhering to compliance policies and proving less than a 500ms regional cluster cut-over failover threshold."
    ]
  },
  {
    company: "NetCore Systems",
    role: "Senior Systems software Engineer",
    period: "2020 - 2023",
    achievements: [
      "Built a custom Go-based edge routing system replacing costly commercial appliance nodes, saving $2.4M annually in licensing fees.",
      "Integrated automated cloud canary releases directly into Kubernetes ingress routing systems, reducing deployment error incidents to zero.",
      "Configured global tracing mechanisms (OpenTelemetry) across 150+ microservices, equipping developers to quickly debug server blockages."
    ]
  },
  {
    company: "HexaScale Technologies",
    role: "Backend & Systems Software Developer",
    period: "2018 - 2020",
    achievements: [
      "Maintained low-level network packet interceptors writing Linux kernel models and user-space modules in C++ & Go.",
      "Designed data ingestion jobs in Spark/Scala, handling analytical records across multi-petabyte database clusters.",
      "Reduced cloud computing over-provisioning waste by 42% by configuring dynamic HPA parameters based on custom queue-length metric loops."
    ]
  },
  {
    company: "Apex Cloud Engineering",
    role: "Cloud Systems Architect",
    period: "2016 - 2018",
    achievements: [
      "Designed highly available multi-region infrastructure platforms supporting enterprise e-commerce workloads.",
      "Automated complete network topologies using Terraform and Ansible, shrinking disaster response recovery windows by over 75%.",
      "Maintained 99.99% system uptime across microservice orchestrations hosting million-user daily campaigns."
    ]
  },
  {
    company: "ByteLogic Laboratories",
    role: "Senior Software Generalist",
    period: "2014 - 2016",
    achievements: [
      "Refactored custom in-house cache layers to support asynchronous database query queuing, alleviating persistent database timeouts.",
      "Developed secure client-facing REST APIs and integrated payment merchant token flows under compliance regulations.",
      "Mentored junior platform developers across Agile sprint environments, standardizing robust automated integration test suites."
    ]
  },
  {
    company: "ProtoCore Solutions",
    role: "Infrastructure Engineer Intern",
    period: "2012 - 2014",
    achievements: [
      "Maintained local test configurations, staging environments, and configured build pipelines minimizing deployment packaging times.",
      "Constructed automated server diagnostic reports monitoring server RAM patterns and network packet loss metrics.",
      "Contributed modular bug fixes across legacy enterprise services to verify successful PHP and python security updates."
    ]
  }
];
