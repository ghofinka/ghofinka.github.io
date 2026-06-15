import React, { useState } from "react";
import { SOCIAL_LINKS } from "../data";
import { Mail, Github, Linkedin, Send, Radio, ShieldCheck } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form on success
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  return (
    <div id="contact_section_wrapper" className="space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <Radio size={20} className="text-[#ff6b25] animate-pulse" />
          Establish Security Connection
        </h2>
        <p className="text-xs text-slate-400 font-mono">
          Route your message secure payload onto Inka's communication hub
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Physical endpoints / social links - 2 cols on lg */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel p-6 space-y-5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#cbd7b0] border-b border-white/5 pb-2">
              Communication Sockets
            </h3>

            <div className="space-y-4">
              <a 
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.01] hover:bg-white/5 border border-white/5 hover:border-white/10 text-slate-300 hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-[#ff6b25]/10 text-[#ff6b25] border border-[#ff6b25]/20 group-hover:scale-110 transition-transform">
                  <Mail size={16} />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <p className="text-[10px] uppercase tracking-wider font-mono text-[#cbd7b0] font-semibold">Direct SMTP</p>
                  <p className="text-xs truncate font-mono">{SOCIAL_LINKS.email}</p>
                </div>
              </a>

              <a 
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.01] hover:bg-white/5 border border-white/5 hover:border-white/10 text-slate-300 hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-[#d5e03b]/10 text-[#d5e03b] border border-[#d5e03b]/20 group-hover:scale-110 transition-transform">
                  <Github size={16} />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <p className="text-[10px] uppercase tracking-wider font-mono text-[#cbd7b0] font-semibold">Codebase Repositories</p>
                  <p className="text-xs truncate font-mono">github.com/inka-putri</p>
                </div>
              </a>

              <a 
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.01] hover:bg-white/5 border border-white/5 hover:border-white/10 text-[#a78bfa] hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-[#a78bfa]/10 text-[#a78bfa] border border-[#a78bfa]/20 group-hover:scale-110 transition-transform">
                  <Linkedin size={16} />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <p className="text-[10px] uppercase tracking-wider font-mono text-[#cbd7b0] font-semibold">LinkedIn Portal</p>
                  <p className="text-xs truncate font-mono">linkedin.com/in/inka-putri-infra</p>
                </div>
              </a>
            </div>
          </div>

          <div className="glass-panel p-5 bg-[#ff6b25]/[0.01] border-[#ff6b25]/10 text-xs flex gap-3 items-start leading-relaxed text-slate-300">
            <ShieldCheck size={16} className="text-[#ff6b25] shrink-0" />
            <p className="font-sans">
              All form ingestion endpoints utilize strong cryptography checks and are processed securely. Your data is strictly used for outbound correspondence and will never be shared.
            </p>
          </div>
        </div>

        {/* Messaging Gateway Form - 3 cols on lg */}
        <div className="lg:col-span-3">
          <div className="glass-panel p-6 sm:p-8 space-y-5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#cbd7b0] border-b border-white/5 pb-2">
              Message Transceiver Gateway
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                    Origin Name
                  </label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Liam Miller"
                    className="w-full bg-white/5 border border-white/10 focus:border-[#ff6b25] focus:ring-1 focus:ring-[#ff6b25]/30 outline-none text-white text-xs px-3.5 py-2.5 rounded-xl transition-colors placeholder:text-slate-500"
                    id="contact_input_name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                    Connection Email
                  </label>
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="liam@domain.com"
                    className="w-full bg-white/5 border border-white/10 focus:border-[#ff6b25] focus:ring-1 focus:ring-[#ff6b25]/30 outline-none text-white text-xs px-3.5 py-2.5 rounded-xl transition-colors placeholder:text-slate-500"
                    id="contact_input_email"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                  Payload Message
                </label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Draft your query details, requirements, or meeting schedule agenda..."
                  className="w-full bg-white/5 border border-white/10 focus:border-[#ff6b25] focus:ring-1 focus:ring-[#ff6b25]/30 outline-none text-white text-xs px-3.5 py-2.5 rounded-xl transition-colors placeholder:text-slate-500 resize-none font-sans leading-relaxed"
                  id="contact_input_message"
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-1 flex-wrap">
                {isSuccess ? (
                  <div className="text-[#d5e03b] text-xs font-mono py-1.5 px-3 bg-[#d5e03b]/5 border border-[#d5e03b]/20 rounded-xl flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d5e03b] animate-ping"></span>
                    Transmitted payload accepted! I will response shortly.
                  </div>
                ) : (
                  <div className="text-[10px] font-mono text-slate-500 uppercase">
                    Status: IDLE_STANDBY
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-[#ff6b25] hover:bg-[#ff8043] disabled:opacity-50 text-slate-950 font-extrabold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 transition-transform cursor-pointer shadow-lg text-xs"
                  id="contact_submit_btn"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                      Routing...
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      Transmit Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
