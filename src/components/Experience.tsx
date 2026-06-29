import React, { useState } from "react";
import { EXPERIENCE_HIGHLIGHTS } from "../data";
import { Briefcase, Calendar, Check, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  // Divide into default displayed list (first 3) and hidden ones (the rest)
  const visibleExperiences = showAll ? EXPERIENCE_HIGHLIGHTS : EXPERIENCE_HIGHLIGHTS.slice(0, 3);
  const remainingCount = EXPERIENCE_HIGHLIGHTS.length - 3;

  return (
    <div id="experience_timeline" className="space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <Briefcase size={20} className="text-[#a78bfa]" />
          Experiences
        </h2>
        {/* <p className="text-xs text-slate-400 font-mono">
          Chronological professional trace building and delivering scalable systems
        </p> */}
      </div>

      <div className="relative border-l border-white/10 ml-3 pl-6 space-y-8 py-2">
        <AnimatePresence initial={false}>
          {visibleExperiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={idx >= 3 ? { opacity: 0, y: 15, height: 0 } : false}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -15, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative group overflow-hidden"
            >
              {/* Dot marker */}
              <span className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-[#ff6b25] flex items-center justify-center transition-all group-hover:scale-110">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b25]"></span>
              </span>

              {/* Exp block */}
              <div className="glass-panel p-6 space-y-4 hover:border-white/15 transition-colors duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div className="space-y-0.5">
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-mono text-[#d5e03b]">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono bg-white/5 border border-white/10 px-2.5 py-1 rounded-md self-start sm:self-auto text-slate-300">
                    <Calendar size={12} className="text-[#d5e03b]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Accomplishments list */}
                <ul className="space-y-2.5">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex gap-2.5 items-start text-xs leading-relaxed font-sans text-slate-200">
                      <Check size={13} className="text-[#ff6b25] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show more button toggle */}
      {EXPERIENCE_HIGHLIGHTS.length > 3 && (
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 bg-[#ff6b25]/5 hover:bg-[#ff6b25]/10 border border-[#ff6b25]/20 hover:border-[#ff6b25]/40 text-[#ff6b25] text-xs font-mono font-bold rounded-xl transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer shadow-inner uppercase tracking-wider"
            id="experience_toggle_more_btn"
          >
            {showAll ? (
              <>
                <ChevronUp size={16} />
                Show Less Milestones
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                Show More Milestones ({remainingCount} hidden)
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
