/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { DEV_NAME, DEV_TITLE } from "./data";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import OpenSource from "./components/OpenSource";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CvModal from "./components/CvModal";
import { Menu, X, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor document scrolling to display Back-To-Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Quick anchor scroll helper
  const scrollTo = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    // Slight delay to allow layout transitions to settle before measuring/scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 120);
  };

  const menuItems = [
    { label: "About", id: "hero_section" },
    { label: "Skills", id: "skills_section" },
    { label: "Projects", id: "projects_section" },
    { label: "Open Source", id: "open_source_section" },
    { label: "Experience", id: "experience_section" },
    { label: "Contact", id: "contact_section" }
  ];

  return (
    <div className="min-h-screen relative text-slate-100 flex flex-col antialiased selection:bg-[#ff6b25]/20 selection:text-[#ff6b25]">
      {/* Mesh background for premium frosted glass gradients */}
      <div className="mesh-bg"></div>

      {/* Main Container */}
      <div className="max-w-6xl w-full mx-auto p-4 md:p-8 flex-1 flex flex-col gap-12 relative z-10">
        
        {/* Simple navigation bar */}
        <header className="border-b border-white/10 pb-6 relative z-50">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <h1 className="text-2xl font-extrabold font-sans tracking-tight text-white font-display">
                {DEV_NAME}
              </h1>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-xs font-mono tracking-wider font-semibold text-slate-300 hover:text-[#ff6b25] transition-all duration-200 cursor-pointer uppercase relative py-1.5 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff6b25] transition-all duration-200 group-hover:w-full" />
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsCvOpen(true)}
                className="px-4 py-2 bg-[#ff6b25]/5 hover:bg-[#ff6b25]/10 border border-[#ff6b25]/20 hover:border-[#ff6b25]/40 text-[#ff6b25] text-xs font-mono font-medium rounded-xl transition-all duration-200 active:scale-95 cursor-pointer"
                id="nav_request_cv"
              >
                Request CV
              </button>
            </div>

            {/* Tablet / Mobile Toggles */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 bg-white/5 border border-white/10 text-[#cbd7b0] hover:text-white rounded-xl transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Drooped Down Mobile & Tablet Drawer Panel */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="lg:hidden absolute top-[100%] inset-x-0 bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-40 overflow-hidden"
              >
                {/* Visual strip divider */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#ff6b25] via-[#d5e03b] to-[#a78bfa]" />

                <div className="flex flex-col gap-3.5">
                  <p className="text-[10px] font-mono text-slate-500 tracking-widest uppercase font-bold">
                    Telemetry Navigation Links
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className="p-3 text-left bg-white/[0.02] hover:bg-[#ff6b25]/5 border border-white/5 hover:border-[#ff6b25]/20 rounded-xl transition-all font-mono text-[11px] font-bold text-slate-300 hover:text-[#ff6b25] cursor-pointer"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  <div className="border-t border-white/5 pt-3.5 flex items-center justify-between gap-4">
                    <span className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d5e03b] animate-ping" />
                      SYSTEM STATUS: ONLINE
                    </span>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsCvOpen(true);
                      }}
                      className="px-4 py-2 bg-[#ff6b25] text-slate-950 font-extrabold font-mono text-xs rounded-xl hover:bg-[#ff8043] transition-colors cursor-pointer"
                    >
                      REQUEST CV
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Section 1: Hero & Identity Profiling */}
        <motion.section 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          id="hero_section"
          className="scroll-mt-20 sm:scroll-mt-24"
        >
          <Hero onRequestCv={() => setIsCvOpen(true)} />
        </motion.section>

        {/* Divider line */}
        <div className="border-t border-white/5" />

        {/* Section 2: Technical Skill categories */}
        <motion.section 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          id="skills_section"
          className="scroll-mt-20 sm:scroll-mt-24"
        >
          <TechStack />
        </motion.section>

        {/* Divider line */}
        <div className="border-t border-white/5" />

        {/* Section 3: Featured Production Workloads */}
        <motion.section 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          id="projects_section"
          className="scroll-mt-20 sm:scroll-mt-24"
        >
          <Projects />
        </motion.section>

        {/* Divider line */}
        <div className="border-t border-white/5" />

        {/* Section 4: Open Source contributions stack */}
        <motion.section 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          id="open_source_section"
          className="scroll-mt-20 sm:scroll-mt-24"
        >
          <OpenSource />
        </motion.section>

        {/* Divider line */}
        <div className="border-t border-white/5" />

        {/* Section 5: Professional Milestones / Experience timeline */}
        <motion.section 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          id="experience_section"
          className="scroll-mt-20 sm:scroll-mt-24"
        >
          <Experience />
        </motion.section>

        {/* Divider line */}
        <div className="border-t border-white/5" />

        {/* Section 6: Transceiver Contact connection gateway */}
        <motion.section 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          id="contact_section"
          className="scroll-mt-20 sm:scroll-mt-24"
        >
          <Contact />
        </motion.section>

      </div>

      {/* Styled Minimalist Footer */}
      <footer className="border-t border-white/10 bg-white/[0.01] backdrop-blur-sm py-6 mt-16 shrink-0 relative z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 pb-8">
          <p>© {new Date().getFullYear()} {DEV_NAME}. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      {/* Dynamic Request CV Dialog Modal */}
      <AnimatePresence>
        {isCvOpen && (
          <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
        )}
      </AnimatePresence>

      {/* Floating Back to Top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 p-3 mr-1 mb-1 rounded-full bg-[#ff6b25] text-slate-950 border border-[#ff6b25]/30 hover:bg-[#ff8043] shadow-2xl shadow-[#ff6b25]/15 hover:shadow-[#ff6b25]/40 hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center group"
            id="floating_back_to_top"
            title="Back to Top"
          >
            <ArrowUp size={18} className="text-slate-950 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

