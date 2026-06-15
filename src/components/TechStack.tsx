import React from "react";
import { TECH_STACK_DATA } from "../data";
import { Code, Terminal, Layers } from "lucide-react";

export default function TechStack() {
  return (
    <div id="tech_stack_section" className="space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <Layers size={20} className="text-[#ff6b25]" />
          Technical Specialization & Stack
        </h2>
        <p className="text-xs text-slate-400 font-mono">
          Rigorous hands-on expertise across modern languages, distributed stores, and cloud native technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TECH_STACK_DATA.map((cat, idx) => (
          <div 
            key={idx} 
            className="glass-panel p-5 space-y-4 hover:border-white/15 transition-colors duration-200"
          >
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#d5e03b] flex items-center gap-2 border-b border-white/5 pb-2">
              <Code size={14} />
              {cat.category}
            </h3>
            
            <div className="space-y-2.5">
              {cat.items.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-200 font-semibold">{item.name}</span>
                  {item.level && (
                    <span className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${
                      item.level === "Expert" 
                        ? "bg-[#d5e03b]/10 text-[#d5e03b] border border-[#d5e03b]/20"
                        : item.level === "Proficient"
                        ? "bg-[#a78bfa]/10 text-[#a78bfa] border border-[#a78bfa]/25"
                        : "bg-[#ff6b25]/10 text-[#ff6b25] border border-[#ff6b25]/25"
                    }`}>
                      {item.level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
