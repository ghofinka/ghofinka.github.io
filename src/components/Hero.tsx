import React from "react";
import { DEV_NAME, DEV_TITLE, DEV_LOCATION, DEV_EMAIL, DEV_BIO, SOCIAL_LINKS, ABOUT_ME_DETAILED } from "../data";
import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";

interface HeroProps {
  onRequestCv: () => void;
}

export default function Hero({ onRequestCv }: HeroProps) {
  return (
    <div className="section-container space-y-8">
      {/* Visual Header / Welcome */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Identity block */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">

            
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b25] via-[#d5e03b] to-[#a78bfa] font-display">{DEV_NAME}</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 tracking-wide">
              {DEV_TITLE}
            </h2>
          </div>

          <p className="text-slate-300 text-base leading-relaxed max-w-2xl font-sans">
            {ABOUT_ME_DETAILED.introduction}
          </p>

          {/* Social Links & CV request btn */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onRequestCv}
              className="px-5 py-2.5 bg-[#ff6b25] hover:bg-[#ff8043] text-slate-950 font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-[#ff6b25]/10 hover:shadow-[#ff6b25]/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm"
              id="cta_request_cv"
            >
              <FileText size={18} />
              Request CV / Resume
            </button>

            <div className="flex items-center gap-2">
              <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-xl glass-panel hover:bg-white/10 text-slate-400 hover:text-[#d5e03b] hover:border-[#d5e03b]/35 transition-all hover:scale-105 cursor-pointer"
                title="Review GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-xl glass-panel hover:bg-white/10 text-slate-400 hover:text-[#d5e03b] hover:border-[#d5e03b]/35 transition-all hover:scale-105 cursor-pointer"
                title="Review LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${SOCIAL_LINKS.email}`} 
                className="p-2.5 rounded-xl glass-panel hover:bg-white/10 text-slate-400 hover:text-[#d5e03b] hover:border-[#d5e03b]/35 transition-all hover:scale-105 cursor-pointer flex items-center justify-center"
                title="Send secure email inquiries"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Facts Card (About Me sideblock) */}
        <div className="glass-panel p-6 space-y-4">
          <h3 className="text-xs font-mono tracking-widest text-[#d5e03b] uppercase font-bold">
            Identity Blueprint
          </h3>
          
          <div className="space-y-3.5 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#d5e03b] shrink-0" />
              <span>{DEV_LOCATION}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#d5e03b] shrink-0" />
              <span>{DEV_EMAIL}</span>
            </div>
            <div className="border-t border-white/5 pt-3 mt-1 text-slate-300 italic font-sans leading-relaxed">
              "{DEV_BIO}"
            </div>
          </div>
        </div>
      </div>

      {/* About Section details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <div className="glass-panel p-6 space-y-3">
          <h4 className="text-sm font-semibold tracking-wide text-[#ff6b25] uppercase font-mono">
            Systems Philosophy
          </h4>
          <p className="text-slate-300 text-xs leading-relaxed font-sans">
            {ABOUT_ME_DETAILED.philosophy}
          </p>
        </div>
        
        <div className="glass-panel p-6 space-y-3">
          <h4 className="text-sm font-semibold tracking-wide text-[#a78bfa] uppercase font-mono">
            Current Workloads
          </h4>
          <p className="text-slate-300 text-xs leading-relaxed font-sans">
            {ABOUT_ME_DETAILED.currentFocus}
          </p>
        </div>
      </div>
    </div>
  );
}
