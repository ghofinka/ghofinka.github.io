import React, { useState, useEffect, useRef } from "react";
import { OS_CONTRIBUTIONS } from "../data";
import { GitBranch, Star, ExternalLink, Award, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function OpenSource() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const len = OS_CONTRIBUTIONS.length;

  // Autoplay timer
  useEffect(() => {
    if (isPlaying) {
      timeoutRef.current = setInterval(() => {
        setActiveIdx((prevIdx) => (prevIdx + 1) % len);
      }, 4000);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPlaying, len]);

  const handleNext = () => {
    setActiveIdx((prevIdx) => (prevIdx + 1) % len);
  };

  const handlePrev = () => {
    setActiveIdx((prevIdx) => (prevIdx - 1 + len) % len);
  };

  // We rotate indices to construct a 3-panel view
  const visibleContribs = [
    { ...OS_CONTRIBUTIONS[activeIdx % len], isStarred: true, position: 0 },
    { ...OS_CONTRIBUTIONS[(activeIdx + 1) % len], isStarred: false, position: 1 },
    { ...OS_CONTRIBUTIONS[(activeIdx + 2) % len], isStarred: false, position: 2 }
  ];

  return (
    <div id="open_source_contributions" className="space-y-6">
      {/* Header element */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <GitBranch size={20} className="text-[#a78bfa]" />
            Open Source Contributions
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            Active upstream optimization patches and core components merged into production-grade systems
          </p>
        </div>

        {/* Carousel buttons */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white text-[11px] font-mono rounded-lg transition-colors cursor-pointer"
            title="Toggle autoplay"
          >
            {isPlaying ? <Pause size={10} /> : <Play size={10} />}
            <span>{isPlaying ? "ON" : "PAUSED"}</span>
          </button>
          
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
            <button
              onClick={handlePrev}
              className="p-1 hover:bg-white/10 text-slate-400 hover:text-white rounded transition-colors cursor-pointer"
              aria-label="Previous contributions slide"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={handleNext}
              className="p-1 hover:bg-white/10 text-slate-400 hover:text-white rounded transition-colors cursor-pointer"
              aria-label="Next contributions slide"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid structure infinite carousel */}
      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {visibleContribs.map((contrib) => {
          return (
            <motion.div
              layout
              key={contrib.repo}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className={`glass-panel p-5 sm:p-6 flex flex-col justify-between gap-5 relative overflow-hidden transition-all duration-300 border-l-4 cursor-pointer group hover:scale-[1.01] ${
                contrib.isStarred
                  ? "border-l-[#ff6b25] bg-white/[0.04] shadow-lg shadow-[#ff6b25]/5" 
                  : "border-l-white/10 opacity-75 hover:opacity-100 hover:border-l-white/30"
              }`}
              onClick={handleNext}
            >
              {/* Top accent gradient loop */}
              {contrib.isStarred && isPlaying && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b25]/5 to-transparent pointer-events-none" />
              )}

              <div className="space-y-3">
                {/* Meta details repo */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-bold tracking-wider ${
                    contrib.isStarred 
                      ? "bg-[#ff6b25]/10 text-[#ff6b25] border border-[#ff6b25]/20" 
                      : "bg-white/5 text-slate-400 border border-white/5"
                  }`}>
                    {contrib.isStarred ? "AUTOPLAY SPOTLIGHT" : "UPSTREAM PATCH"}
                  </span>

                  {contrib.stars && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                      <Star size={10} className="text-[#ff6b25] fill-[#ff6b25]/20" />
                      <span className="font-bold text-white">{(contrib.stars / 1000).toFixed(1)}k</span>
                    </span>
                  )}
                </div>

                {/* Title & Git Link */}
                <div className="space-y-1">
                  <a 
                    href={contrib.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`font-mono text-sm font-black flex items-center gap-1.5 transition-colors cursor-pointer ${
                      contrib.isStarred ? "text-white hover:text-[#d5e03b]" : "text-slate-200 hover:text-white"
                    }`}
                  >
                    {contrib.repo}
                    <ExternalLink size={12} className="opacity-60 group-hover:opacity-100 transition-opacity text-[#a78bfa] shrink-0" />
                  </a>
                </div>

                {/* Description content */}
                <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-4">
                  {contrib.description}
                </p>
              </div>

              {/* Bottom details block */}
              <div className="border-t border-white/5 pt-3 space-y-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className={`text-[9px] font-mono tracking-wider uppercase font-bold px-2 py-0.5 rounded border ${
                    contrib.isStarred 
                      ? "text-[#ff6b25] bg-[#ff6b25]/5 border-[#ff6b25]/20" 
                      : "text-slate-400 bg-white/5 border-white/10"
                  }`}>
                    {contrib.role}
                  </span>
                </div>

                {contrib.impact && (
                  <div className={`flex gap-1.5 items-start p-2 rounded-lg border ${
                    contrib.isStarred 
                      ? "bg-[#d5e03b]/5 border-[#d5e03b]/15" 
                      : "bg-white/[0.02] border-white/5"
                  }`}>
                    <Award size={12} className={`shrink-0 mt-0.5 ${contrib.isStarred ? "text-[#d5e03b]" : "text-slate-400"}`} />
                    <p className="text-[10px] text-slate-300 font-sans leading-tight">
                      <span className="text-slate-400 font-mono text-[9px] uppercase font-bold mr-1">Impact:</span> 
                      {contrib.impact}
                    </p>
                  </div>
                )}

                {/* Autoplay status bar */}
                {contrib.isStarred && isPlaying && (
                  <div className="relative w-full h-[2px] bg-white/5 rounded-full overflow-hidden pt-1">
                    <motion.div 
                      key={activeIdx}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4, ease: "linear" }}
                      className="absolute left-0 top-0 h-full bg-[#ff6b25]"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
