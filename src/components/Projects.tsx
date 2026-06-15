import React, { useState, useEffect, useRef } from "react";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";
import { 
  Zap, 
  Code, 
  Award, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  Eye, 
  X, 
  Layers, 
  Cpu, 
  TrendingUp, 
  ListFilter,
  Plus
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Inline Retro SVG Diagrams custom-designed to match the user's uploaded asset aesthetics.
// Includes beautiful organic green/orange/yellow color configurations and coordinates.
function OmniBrokerSvg() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background layer */}
      <rect width="400" height="300" rx="16" fill="#121905" />
      
      {/* Grids and pixel blocks like the first drawing */}
      <g opacity="0.3">
        <path d="M40 0V300M80 0V300M120 0V300M160 0V300M200 0V300M240 0V300M280 0V300M320 0V300M360 0V300" stroke="#d5e03b" strokeWidth="0.5" strokeDasharray="4 4" />
        <path d="M0 40H400M0 80H400M0 120H400M0 160H400M0 200H400M0 240H400M0 280H400" stroke="#d5e03b" strokeWidth="0.5" strokeDasharray="4 4" />
      </g>

      {/* Decorative whimsical pixel patterns reminiscent of the first image */}
      {/* Group of checkers */}
      <g fill="#ff6b25" opacity="0.8">
        <rect x="40" y="40" width="15" height="15" rx="2" />
        <rect x="60" y="60" width="15" height="15" rx="2" />
        <rect x="40" y="80" width="15" height="15" rx="2" />
        <rect x="80" y="40" width="15" height="15" rx="2" />
        <rect x="100" y="80" width="15" height="15" rx="2" />
      </g>
      
      <g fill="#d5e03b" opacity="0.75">
        <rect x="280" y="160" width="15" height="15" rx="2" />
        <rect x="300" y="180" width="15" height="15" rx="2" />
        <rect x="260" y="200" width="15" height="15" rx="2" />
        <rect x="320" y="160" width="15" height="15" rx="2" />
      </g>

      <g fill="#a78bfa" opacity="0.85">
        <rect x="240" y="40" width="15" height="15" rx="2" />
        <rect x="220" y="60" width="15" height="15" rx="2" />
        <rect x="260" y="80" width="15" height="15" rx="2" />
      </g>

      {/* Dynamic Gateway routing visual flow (OmniBroker API Gateway diagram) */}
      <path d="M 40,150 C 130,150 110,60 200,60 C 290,60 270,240 360,240" stroke="#ff6b25" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" className="animate-[dash_8s_linear_infinite]" />
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -40;
          }
        }
      `}</style>
      <path d="M 40,150 C 130,150 110,60 200,60 C 290,60 270,240 360,240" stroke="#d5e03b" strokeWidth="1.5" strokeLinecap="round" />

      {/* Retro flower-accent gate matching the organic drawing */}
      <g transform="translate(200, 60)">
        <circle cx="0" cy="0" r="14" fill="#a78bfa" />
        {/* Flower petals */}
        <circle cx="0" cy="-14" r="8" fill="#ff6b25" opacity="0.9" />
        <circle cx="0" cy="14" r="8" fill="#ff6b25" opacity="0.9" />
        <circle cx="-14" cy="0" r="8" fill="#ff6b25" opacity="0.9" />
        <circle cx="14" cy="0" r="8" fill="#ff6b25" opacity="0.9" />
        <circle cx="0" cy="0" r="6" fill="#121905" />
      </g>

      <g transform="translate(360, 240)">
        <circle cx="0" cy="0" r="8" fill="#d5e03b" />
        <circle cx="0" cy="0" r="4" fill="#121905" />
      </g>

      <g transform="translate(40, 150)">
        <circle cx="0" cy="0" r="8" fill="#ff6b25" />
        <circle cx="0" cy="0" r="3" fill="#ffffff" />
      </g>

      {/* Labels / Technical Indicators */}
      <rect x="55" y="180" width="110" height="36" rx="6" fill="#1d270e" stroke="rgba(213,224,59,0.2)" strokeWidth="1" />
      <text x="65" y="196" fill="#d5e03b" fontSize="10" fontFamily="monospace" fontWeight="bold">REVERSE PROXY</text>
      <text x="65" y="208" fill="#faf9f6" fontSize="8" fontFamily="monospace">eBPF ROUTE ACCELERATED</text>

      <rect x="215" y="110" width="115" height="36" rx="6" fill="#2d1c38" stroke="rgba(167,139,250,0.2)" strokeWidth="1" />
      <text x="225" y="126" fill="#a78bfa" fontSize="10" fontFamily="monospace" fontWeight="bold">CIRCUIT BREAKER</text>
      <text x="225" y="138" fill="#faf9f6" fontSize="8" fontFamily="monospace">RATE_LIMIT: ACTIVE</text>
    </svg>
  );
}

function ChronosSvg() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background layer */}
      <rect width="400" height="300" rx="16" fill="#121905" />

      {/* Grids and coordinate boxes */}
      <g opacity="0.25">
        <path d="M50 0V300M100 0V300M150 0V300M200 0V300M250 0V300M300 0V300M350 0V300" stroke="#faf9f6" strokeWidth="0.5" />
        <path d="M0 50H400M0 100H400M0 150H400M0 200H400M0 250H400" stroke="#faf9f6" strokeWidth="0.5" />
      </g>

      {/* Hand-drawn organic waves representing time segments */}
      <path d="M 50,220 Q 90,80 140,200 T 230,220 T 320,120 T 370,180" stroke="#a78bfa" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M 50,220 Q 90,80 140,200 T 230,220 T 320,120 T 370,180" stroke="#d5e03b" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Double-delta chunked cells visual */}
      <g fill="#ff6b25" opacity="0.9">
        <circle cx="90" cy="115" r="5" />
        <line x1="90" y1="115" x2="140" y2="200" stroke="#ff6b25" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="140" cy="200" r="4" />
        <circle cx="200" cy="210" r="5" />
        <circle cx="320" cy="120" r="5" />
      </g>

      {/* Concentric rings/dial mimicking time compression telemetry */}
      <g transform="translate(280, 80)" opacity="0.85">
        <circle cx="0" cy="0" r="30" stroke="#d5e03b" strokeWidth="2.5" strokeDasharray="10 5" className="animate-[spin_12s_linear_infinite]" />
        <circle cx="0" cy="0" r="18" stroke="#ff6b25" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="6" fill="#a78bfa" />
      </g>

      {/* Abstract structural brackets like the second drawing [ , ] */}
      <g transform="translate(50, 60)" stroke="#d5e03b" strokeWidth="3" fill="none">
        <path d="M 12,0 L 0,0 L 0,32 L 12,32" />
        <rect x="20" y="10" width="8" height="12" rx="1" fill="#ff6b25" stroke="none" />
        <path d="M 38,0 L 50,0 L 50,32 L 38,32" />
      </g>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Indicators and diagnostic data labels */}
      <rect x="65" y="240" width="135" height="36" rx="6" fill="#1d270e" stroke="rgba(213,224,59,0.2)" strokeWidth="1" />
      <text x="75" y="256" fill="#d5e03b" fontSize="10" fontFamily="monospace" fontWeight="bold">CHUNKING ADAPTER</text>
      <text x="75" y="268" fill="#faf9f6" fontSize="8" fontFamily="monospace">COMPRESSION RATIO: 12.4x</text>

      <rect x="250" y="235" width="115" height="36" rx="6" fill="#2d1c38" stroke="rgba(167,139,250,0.2)" strokeWidth="1" />
      <text x="260" y="251" fill="#a78bfa" fontSize="10" fontFamily="monospace" fontWeight="bold">RING BUFFER</text>
      <text x="260" y="263" fill="#faf9f6" fontSize="8" fontFamily="monospace">LOCK-FREE WRITE SLOTS</text>
    </svg>
  );
}

function EventStreamSvg() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background layer */}
      <rect width="400" height="300" rx="16" fill="#121905" />

      {/* Grids of pixels like drawing 1 */}
      <g opacity="0.3">
        <path d="M30 0V300M60 0V300M90 0V300M120 0V300M150 0V300M180 0V300M210 0V300M240 0V300M270 0V300M300 0V300M330 0V300M360 0V300" stroke="#ff6b25" strokeWidth="0.5" strokeDasharray="3 3" />
        <path d="M0 30H400M0 60H400M0 90H400M0 120H400M0 150H400M0 180H400M0 210H400M0 240H400M0 270H400" stroke="#ff6b25" strokeWidth="0.5" strokeDasharray="3 3" />
      </g>

      {/* Saga transactions chain coordinate flows */}
      <g stroke="#faf9f6" strokeWidth="2">
        <line x1="80" y1="120" x2="180" y2="120" strokeDasharray="4 2" />
        <line x1="180" y1="120" x2="280" y2="120" strokeDasharray="4 2" />
        {/* Branch rollbacks */}
        <path d="M 280,120 Q 180,200 80,120" stroke="#ff6b25" strokeWidth="2" strokeDasharray="3 3" fill="none" />
      </g>

      {/* Saga step nodes with hand-drawn block style */}
      <g transform="translate(80, 120)">
        <rect x="-24" y="-24" width="48" height="48" rx="8" fill="#1d270e" stroke="#d5e03b" strokeWidth="2" />
        <text x="0" y="4" fill="#d5e03b" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PREPARE</text>
        <circle cx="0" cy="-24" r="5" fill="#ff6b25" />
      </g>

      <g transform="translate(180, 120)">
        <rect x="-24" y="-24" width="48" height="48" rx="8" fill="#1d270e" stroke="#a78bfa" strokeWidth="2" />
        <text x="0" y="4" fill="#a78bfa" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">COMMIT</text>
        <circle cx="0" cy="-24" r="5" fill="#d5e03b" />
      </g>

      <g transform="translate(280, 120)">
        <rect x="-24" y="-24" width="48" height="48" rx="8" fill="#1d270e" stroke="#ff6b25" strokeWidth="2" />
        <text x="0" y="4" fill="#ff6b25" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SETTLE</text>
        <circle cx="0" cy="-24" r="5" fill="#a78bfa" />
      </g>

      {/* An elegant vector icon matching the cute cartoon hand in the 2nd illustration */}
      <g transform="translate(200, 210)" opacity="0.8">
        <path d="M 0,20 Q 15,0 35,12 T 20,40 Z" fill="#ff6b25" />
        <circle cx="35" cy="12" r="6" fill="#a78bfa" />
        <circle cx="0" cy="20" r="4" fill="#d5e03b" />
      </g>

      {/* Tech labels */}
      <rect x="35" y="230" width="130" height="36" rx="6" fill="#1d270e" stroke="rgba(213,224,59,0.2)" strokeWidth="1" />
      <text x="45" y="246" fill="#d5e03b" fontSize="10" fontFamily="monospace" fontWeight="bold">SAGA ENGINES</text>
      <text x="45" y="258" fill="#faf9f6" fontSize="8" fontFamily="monospace">MUTEX LOCK SET: ACTIVE</text>

      <rect x="235" y="25" width="130" height="36" rx="6" fill="#2d1c38" stroke="rgba(167,139,250,0.2)" strokeWidth="1" />
      <text x="245" y="41" fill="#a78bfa" fontSize="10" fontFamily="monospace" fontWeight="bold">LEDGER RECORD</text>
      <text x="245" y="53" fill="#faf9f6" fontSize="8" fontFamily="monospace">PARTITION BALANCES: OK</text>
    </svg>
  );
}

// Map project ID to its graphic SVG component
const PROJECT_SVGS: Record<string, React.ReactNode> = {
  omnibroker: <OmniBrokerSvg />,
  chronos: <ChronosSvg />,
  eventstream: <EventStreamSvg />
};

// Generates 3 mock specs diagrams for inside the slides modal of each project
const MOCK_MODAL_DIAGRAMS: Record<string, Array<{title: string, svg: React.ReactNode}>> = {
  omnibroker: [
    {
      title: "Diagram A: Edge Ingress Multiplexing Loop",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
          <rect width="400" height="200" rx="12" fill="#172107" />
          <path d="M 30,100 L 150,100 L 250,50 L 370,150" stroke="#ff6b25" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="150" cy="100" r="8" fill="#d5e03b" />
          <text x="150" y="125" fill="#d5e03b" fontSize="9" fontFamily="monospace" textAnchor="middle">eBPF Intercept Point</text>
          <text x="200" y="25" fill="#faf9f6" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Zero-Allocation Parse (0 alloc/byte)</text>
          <circle cx="250" cy="50" r="8" fill="#a78bfa" />
        </svg>
      )
    },
    {
      title: "Diagram B: Rate Limit Sliding Token-Bucket Stack",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
          <rect width="400" height="200" rx="12" fill="#172107" />
          <rect x="150" y="40" width="100" height="120" rx="6" stroke="#a78bfa" strokeWidth="2" fill="#121905" />
          <rect x="160" y="110" width="80" height="40" rx="4" fill="#ff6b25" opacity="0.8" />
          <rect x="160" y="60" width="80" height="40" rx="4" fill="#d5e03b" opacity="0.8" />
          <text x="200" y="132" fill="#121905" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">TOKEN ACCUM</text>
          <text x="200" y="82" fill="#121905" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">FREE LIMIT</text>
          <text x="200" y="185" fill="#faf9f6" fontSize="10" fontFamily="sans-serif" textAnchor="middle">Distributed Redis Cluster lock protection</text>
        </svg>
      )
    }
  ],
  chronos: [
    {
      title: "Diagram A: Double-Delta Compression Algorithm",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
          <rect width="400" height="200" rx="12" fill="#172107" />
          <path d="M 30,150 L 100,100 L 170,120 L 240,40 L 310,90 L 370,50" stroke="#d5e03b" strokeWidth="2.5" />
          <line x1="100" y1="100" x2="100" y2="150" stroke="#ff6b25" strokeWidth="1" strokeDasharray="3 3" />
          <text x="110" y="140" fill="#ff6b25" fontSize="9" fontFamily="monospace">$\Delta$ Delta offset</text>
          <line x1="240" y1="40" x2="240" y2="120" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3 3" />
          <text x="245" y="80" fill="#a78bfa" fontSize="9" fontFamily="monospace">$\Delta^2$ Second Compression</text>
        </svg>
      )
    },
    {
      title: "Diagram B: Lock-free Loop & IO Flushing Gate",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
          <rect width="400" height="200" rx="12" fill="#172107" />
          <circle cx="200" cy="100" r="45" stroke="#a78bfa" strokeWidth="3" strokeDasharray="10 4" />
          <rect x="260" y="85" width="80" height="30" rx="4" fill="#ff6b25" />
          <text x="300" y="103" fill="#121905" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">DISK FLUSH</text>
          <text x="200" y="104" fill="#d5e03b" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">RING REG</text>
        </svg>
      )
    }
  ],
  eventstream: [
    {
      title: "Diagram A: Saga Coordinator Action Loop",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
          <rect width="400" height="200" rx="12" fill="#172107" />
          <rect x="40" y="60" width="80" height="60" rx="6" fill="#121905" stroke="#ff6b25" />
          <text x="80" y="95" fill="#ff6b25" fontSize="10" fontFamily="monospace" textAnchor="middle">LEDGER</text>
          <path d="M 120,90 Q 200,40 280,90" stroke="#d5e03b" strokeWidth="2.5" strokeDasharray="4 2" fill="none" />
          <path d="M 280,105 Q 200,165 120,105" stroke="#a78bfa" strokeWidth="2.5" fill="none" />
          <rect x="280" y="60" width="80" height="60" rx="6" fill="#121905" stroke="#d5e03b" />
          <text x="320" y="95" fill="#d5e03b" fontSize="10" fontFamily="monospace" textAnchor="middle">SETTLE</text>
        </svg>
      )
    },
    {
      title: "Diagram B: Idempotent Gate Lock Verification",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
          <rect width="400" height="200" rx="12" fill="#172107" />
          <rect x="130" y="60" width="140" height="80" rx="8" fill="#121905" stroke="#a78bfa" strokeWidth="2" />
          <circle cx="200" cy="90" r="14" fill="#ff6b25" />
          <rect x="195" y="90" width="10" height="15" fill="#d5e03b" />
          <text x="200" y="125" fill="#faf9f6" fontSize="10" fontFamily="monospace" textAnchor="middle">IDEMPOTENCY LOCK</text>
        </svg>
      )
    }
  ]
};

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSpecTab, setActiveSpecTab] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Prevent body scroll when project modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Autoplay function
  useEffect(() => {
    if (isPlaying && !showAll) {
      timeoutRef.current = setInterval(() => {
        setActiveIdx((prevIdx) => (prevIdx + 1) % PROJECTS_DATA.length);
      }, 5000);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPlaying, showAll]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIdx((prevIdx) => (prevIdx + 1) % PROJECTS_DATA.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIdx((prevIdx) => (prevIdx - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  };

  const openSpecModal = (project: Project) => {
    setSelectedProject(project);
    setActiveSpecTab(0);
  };

  const currentProject = PROJECTS_DATA[activeIdx];

  return (
    <div id="projects_portfolio" className="space-y-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Zap size={20} className="text-[#ff6b25]" />
            Featured Production Workloads
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            Engineered solutions deployed to address critical scaling bottlenecks
          </p>
        </div>

        {/* More Projects toggle / simulated route trigger */}
        <button
          onClick={() => {
            setShowAll(!showAll);
            // Scroll smoothly into focus
            setTimeout(() => {
              document.getElementById("projects_layout_stage")?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#d5e03b]/5 hover:bg-[#d5e03b]/15 border border-[#d5e03b]/20 hover:border-[#d5e03b]/40 text-[#d5e03b] text-xs font-mono font-bold rounded-xl transition-all cursor-pointer shadow-sm uppercase shrink-0"
          id="btn_toggle_more_projects"
        >
          <Layers size={14} />
          {showAll ? "View Slideshow Carousel" : "Explore All Works"}
        </button>
      </div>

      <div id="projects_layout_stage" className="relative">
        <AnimatePresence mode="wait">
          {!showAll ? (
            /* ========================================================
               1. AUTOPLAY CAROUSEL VIEW
               ======================================================== */
            <motion.div
              key="carousel_mode"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="relative"
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              {/* Carousel container card */}
              <div 
                onClick={() => openSpecModal(currentProject)}
                className="glass-panel p-6 md:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10 items-center relative overflow-hidden transition-all duration-300 hover:border-[#ff6b25]/25 hover:shadow-lg hover:shadow-[#ff6b25]/5 group cursor-pointer"
                id={`carousel_card_${currentProject.id}`}
              >
                {/* Decorative retro tag indicators */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-[#ff6b25]/10 border border-[#ff6b25]/20 rounded-lg text-[#ff6b25] text-[10px] font-mono uppercase font-bold tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b25] animate-ping" />
                  Running Lead Tech Demo
                </div>

                {/* Left block: Graphics SVG panel */}
                <div className="w-full lg:w-[45%] h-56 sm:h-64 rounded-xl overflow-hidden relative shrink-0 border border-white/5 shadow-inner">
                  {PROJECT_SVGS[currentProject.id] || (
                    <div className="w-full h-full bg-[#121905] flex items-center justify-center text-slate-500 font-mono text-xs">
                      SPEC_SYSTEMS_LOADED
                    </div>
                  )}
                  {/* Glass indicator overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121905]/45 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 right-3 px-2.5 py-1.5 bg-[#121905]/80 backdrop-blur-md rounded-lg text-[9px] font-mono text-slate-300 flex items-center gap-1 border border-white/10 group-hover:border-[#d5e03b]/30">
                    <Eye size={10} className="text-[#d5e03b]" />
                    Interactive blueprint
                  </div>
                </div>

                {/* Right block: Context details */}
                <div className="w-full lg:flex-1 space-y-4 text-left">
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display hover:text-[#ff6b25] transition-colors">
                      {currentProject.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <p className="text-xs font-mono text-[#d5e03b] font-bold">
                        Role: {currentProject.role}
                      </p>
                      <span className="hidden sm:inline text-white/20">•</span>
                      <p className="text-[10px] font-mono text-slate-400">
                        Autoplay status: {isPlaying ? "Active (Hover to pause)" : "Paused"}
                      </p>
                    </div>
                  </div>

                  {/* Overview description */}
                  <p className="text-slate-200 text-sm leading-relaxed font-sans font-medium">
                    {currentProject.description}
                  </p>

                  {/* Tech stack items row */}
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-mono tracking-wider text-[#cbd7b0] uppercase font-bold">
                      Infrastructure Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {currentProject.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 text-[10px] font-mono rounded-lg bg-[#a78bfa]/5 border border-[#a78bfa]/15 text-[#a78bfa] font-extrabold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom triggers: Specs activation */}
                  <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1 hover:text-[#ff6b25] transition-colors">
                      <Code size={12} className="text-[#ff6b25]" />
                      Click anywhere to review telemetry details
                    </div>
                    
                    <span className="px-3.5 py-1.5 bg-[#ff6b25] hover:bg-[#ff8043] text-slate-950 font-extrabold text-[11px] uppercase tracking-wider rounded-lg flex items-center gap-1.5 transition-colors shadow">
                      Inspect Blueprints
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation overlay controls */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1.5">
                  {PROJECTS_DATA.map((_, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => setActiveIdx(pIdx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        pIdx === activeIdx 
                          ? "w-6 bg-[#ff6b25]" 
                          : "w-2 bg-[#ff6b25]/20 hover:bg-[#ff6b25]/40"
                      }`}
                      aria-label={`Go to slide ${pIdx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                    aria-label="Previous Project"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                    aria-label="Next Project"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ========================================================
               2. ALL WORKS GRID VIEW (expanded "More Projects" catalog)
               ======================================================== */
            <motion.div
              key="all_grid_mode"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {PROJECTS_DATA.map((project) => (
                <div 
                  key={project.id} 
                  onClick={() => openSpecModal(project)}
                  className="glass-panel p-5 sm:p-6 flex flex-col justify-between gap-5 relative overflow-hidden transition-all duration-300 hover:border-[#ff6b25]/25 hover:shadow-lg hover:shadow-[#ff6b25]/5 group cursor-pointer"
                  id={`grid_card_${project.id}`}
                >
                  <div className="space-y-4">
                    {/* Compact Image SVG Header */}
                    <div className="w-full h-40 rounded-xl overflow-hidden relative border border-white/5 bg-[#121905]/80">
                      {PROJECT_SVGS[project.id] || (
                        <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-xs">
                          SYSTEM_ASSET_LOADED
                        </div>
                      )}
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white tracking-tight font-display group-hover:text-[#ff6b25] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs font-mono text-[#d5e03b] font-semibold">
                        Role: {project.role}
                      </p>
                    </div>

                    <p className="text-slate-300 text-xs leading-relaxed font-sans line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-3 border-t border-white/5">
                    {/* Tech stacks row */}
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-0.5 text-[9px] font-mono rounded bg-[#a78bfa]/5 border border-[#a78bfa]/15 text-[#a78bfa] font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-0.5 text-[9px] font-mono rounded bg-white/5 text-slate-400">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400 group-hover:text-[#ff6b25]">
                        Inspect full blueprints
                      </span>
                      <span className="text-xs font-mono font-bold text-[#ff6b25] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Verify spec &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* End of results card */}
              <div className="glass-panel p-6 border-dashed border-[#d5e03b]/20 flex flex-col justify-center items-center text-center space-y-4">
                <div className="p-3 bg-[#d5e03b]/10 text-[#d5e03b] border border-[#d5e03b]/20 rounded-full">
                  <Plus size={20} />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-white font-sans">
                    Additional Services Roadmap
                  </h4>
                  <p className="text-xs text-slate-400 max-w-xs font-sans">
                    Future workloads ledger streams and eBPF network layers will be indexable as the platform topology expands.
                  </p>
                </div>
                <button
                  onClick={() => setShowAll(false)}
                  className="px-4 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-slate-300 rounded-lg transition-colors cursor-pointer"
                >
                  Return to Slide Deck
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ========================================================
         3. DYNAMIC TELEMETRY / DETAILED PROJECT MODAL
         ======================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-8 bg-slate-950/85 backdrop-blur-md flex justify-center items-start outline-none"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass-panel w-full max-w-2xl shadow-2xl relative bg-slate-950/95 space-y-6 p-5 sm:p-8 my-4 md:my-8 focus:outline-none focus:ring-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Retro top border line matching colors */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#ff6b25] via-[#d5e03b] to-[#a78bfa]" />

              {/* Header block */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#ff6b25]/10 border border-[#ff6b25]/20 rounded text-[#ff6b25] text-[10px] font-mono uppercase font-bold">
                      VERIFIED SPECIFICATION
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      ID: {selectedProject.id.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                    {selectedProject.name}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/5"
                  aria-label="Close Specification modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Image slideshow section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono tracking-widest text-[#cbd7b0] uppercase font-bold flex items-center gap-1">
                    <Layers size={12} className="text-[#d5e03b]" />
                    Interactive Architecture blueprint images
                  </h4>
                  {/* Selectors tabs for image slides */}
                  <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
                    {(MOCK_MODAL_DIAGRAMS[selectedProject.id] || []).map((diag, dIdx) => (
                      <button
                        key={dIdx}
                        onClick={() => setActiveSpecTab(dIdx)}
                        className={`px-2 py-1 text-[9px] font-mono rounded transition-colors cursor-pointer ${
                          activeSpecTab === dIdx 
                            ? "bg-[#ff6b25] text-slate-950 font-bold" 
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Slide {dIdx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-white/10 bg-[#121905] relative flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSpecTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="w-full h-full"
                    >
                      {(MOCK_MODAL_DIAGRAMS[selectedProject.id] || [])[activeSpecTab]?.svg || (
                        <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-xs">
                          DIAGRAM_LOAD_PAUSED
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Small subtitle overlay for slide */}
                  <div className="absolute bottom-2 inset-x-0 text-center pointer-events-none">
                    <span className="px-2.5 py-1 bg-slate-950/80 backdrop-blur rounded text-[9px] font-mono text-slate-300 border border-white/5">
                      {(MOCK_MODAL_DIAGRAMS[selectedProject.id] || [])[activeSpecTab]?.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Specifications panel columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Highlights List side */}
                <div className="glass-panel bg-white/[0.01] p-5 space-y-3 border-white/5">
                  <h4 className="text-xs font-mono tracking-widest text-[#a78bfa] uppercase font-bold flex items-center gap-1.5 border-b border-white/5 pb-2">
                    <Code size={14} className="text-[#a78bfa]" />
                    Architectural Highlights
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.interestingFeatures.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans leading-relaxed">
                        <CheckCircle2 size={14} className="text-[#d5e03b] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Performance challenge side */}
                <div className="glass-panel bg-white/[0.01] p-5 space-y-3 border-[#ff6b25]/15">
                  <h4 className="text-xs font-mono tracking-widest text-[#ff6b25] uppercase font-bold flex items-center gap-1.5 border-b border-white/5 pb-2">
                    <Award size={14} className="text-[#ff6b25]" />
                    Performance Challenge Solved
                  </h4>
                  <div className="text-xs text-slate-300 font-sans leading-relaxed space-y-2">
                    <p className="text-slate-400 font-mono italic">
                      The Challenge & Core Bottleneck
                    </p>
                    <p className="bg-[#ff6b25]/5 border border-[#ff6b25]/15 p-3.5 rounded-xl text-slate-200 leading-relaxed">
                      {selectedProject.challengesSolved}
                    </p>
                  </div>
                </div>
              </div>

              {/* Infrastructure details */}
              <div className="border-t border-white/5 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Deployed Tech:</span>
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-slate-300 font-mono text-[9px]">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 bg-white/10 hover:bg-white/15 text-white font-mono text-[10px] rounded-lg transition-colors cursor-pointer shadow uppercase font-bold"
                >
                  Close Blueprint
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
