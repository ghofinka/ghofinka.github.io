import React, { useState } from "react";
import { motion } from "motion/react";
import { X, Send, CheckCircle, FileText } from "lucide-react";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    purpose: "Recruitment / Hiring",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    
    // Simulate highly precise, professional webhook ingestion delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      purpose: "Recruitment / Hiring",
      message: ""
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background shadow layer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        onClick={resetAndClose}
      />

      {/* Modal Card wrapper */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="glass-panel w-full max-w-lg p-6 sm:p-8 relative z-10 overflow-hidden shadow-2xl space-y-6"
        id="cv_request_modal"
      >
        {/* Banner element */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#ff6b25] via-[#d5e03b] to-[#a78bfa]" />

        {/* Modal headers */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[#ff6b25]/10 text-[#ff6b25] border border-[#ff6b25]/20">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-sans">
                Request CV Access
              </h3>
              <p className="text-[11px] text-[#cbd7b0] font-mono">
                VERIFY_CREDENTIAL_INGESTION
              </p>
            </div>
          </div>

          <button 
            onClick={resetAndClose}
            className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
            title="Close model"
            id="modal_close_btn"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal body contents */}
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
            <p className="text-slate-300 leading-relaxed font-sans text-xs">
              Please declare your info below to instantly receive Inka's CV payload. We request authentic credentials to maintain security records.
            </p>

            {/* Grid fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rachel Green"
                  className="w-full bg-white/5 border border-white/10 focus:border-[#ff6b25] focus:ring-1 focus:ring-[#ff6b25]/30 outline-none text-white text-xs px-3.5 py-2.5 rounded-xl transition-colors placeholder:text-slate-500"
                  id="cv_input_name"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                  Business Email *
                </label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="rachel@company.com"
                  className="w-full bg-white/5 border border-white/10 focus:border-[#ff6b25] focus:ring-1 focus:ring-[#ff6b25]/30 outline-none text-white text-xs px-3.5 py-2.5 rounded-xl transition-colors placeholder:text-slate-500"
                  id="cv_input_email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                  Organization / Company
                </label>
                <input 
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Hexa Tech"
                  className="w-full bg-white/5 border border-white/10 focus:border-[#ff6b25] focus:ring-1 focus:ring-[#ff6b25]/30 outline-none text-white text-xs px-3.5 py-2.5 rounded-xl transition-colors placeholder:text-slate-500"
                  id="cv_input_company"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                  Purpose of Query
                </label>
                <select
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full bg-slate-900 border border-white/10 focus:border-[#ff6b25] outline-none text-white text-xs px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer"
                  id="cv_input_purpose"
                >
                  <option value="Recruitment / Hiring">Recruitment / Hiring</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="General Conversation">General Conversation</option>
                  <option value="Security Consultation">Security Consultation</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                Message / Details
              </label>
              <textarea 
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Include details about any role or project..."
                className="w-full bg-white/5 border border-white/10 focus:border-[#ff6b25] focus:ring-1 focus:ring-[#ff6b25]/30 outline-none text-white text-xs px-3.5 py-2.5 rounded-xl transition-colors placeholder:text-slate-500 resize-none"
                id="cv_input_message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#ff6b25] hover:bg-[#ff8043] disabled:opacity-50 text-slate-950 font-extrabold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 transition-transform cursor-pointer shadow-lg shadow-[#ff6b25]/10 text-xs mt-2"
              id="cv_submit_btn"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                  Processing credentials...
                </>
              ) : (
                <>
                  <Send size={14} />
                  Authorize & Ingest Request
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#d5e03b]/10 text-[#d5e03b] flex items-center justify-center mx-auto border border-[#d5e03b]/20 status-dot-glow">
              <CheckCircle size={24} />
            </div>
            
            <div className="space-y-1.5">
              <h4 className="text-base font-bold text-white font-sans">
                Request Authorized Successfully!
              </h4>
              <p className="text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out, <span className="text-[#d5e03b] font-semibold">{formData.name}</span>. The resume credentials payload was securely cataloged. A PDF copy has been emailed directly to <span className="text-[#a78bfa] font-mono font-semibold">{formData.email}</span>.
              </p>
            </div>

            <button
              onClick={resetAndClose}
              className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-white text-xs rounded-xl transition-colors cursor-pointer"
              id="cv_success_close_btn"
            >
              Done
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
