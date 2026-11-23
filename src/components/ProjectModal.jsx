
import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Activity } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6">

        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-2xl max-h-[calc(100dvh-24px)] sm:max-h-[90dvh] bg-[#FAF9F4] dark:bg-[#191C25] rounded-3xl border border-[#D4D1C8] dark:border-[#30313A] shadow-2xl overflow-hidden flex flex-col"
        >

          {/* Header Image */}
          <div className="relative h-44 sm:h-64 shrink-0 w-full overflow-hidden bg-[#191C25]">

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-90"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-black/80 border border-white/50 text-white shadow-xl backdrop-blur-md hover:bg-[#145CFF] transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#145CFF]/25 text-[#B8CAFF] border border-[#145CFF]/60 mb-2">
                {project.category}
              </span>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 min-h-0 flex-1 overflow-y-auto space-y-6">

            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#145CFF] dark:text-[#C6FF00] font-semibold mb-2">
                Overview
              </h4>

              <p className="text-[#555968] dark:text-[#C2C1C9] text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Performance Metric */}
            {project.metrics && (
              <div className="p-3.5 rounded-2xl bg-[#145CFF]/[0.06] dark:bg-[#145CFF]/10 border border-[#145CFF]/20 dark:border-[#145CFF]/25 flex items-center gap-3">

                <Activity className="w-5 h-5 text-[#145CFF] dark:text-[#83A0FF] shrink-0" />

                <div>
                  <div className="text-xs font-mono text-[#686B77] dark:text-[#A4A6B0]">
                    Key Metric
                  </div>

                  <div className="text-sm font-semibold text-[#171923] dark:text-[#F4F1E8]">
                    {project.metrics}
                  </div>
                </div>
              </div>
            )}

            {/* Architecture & Features */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#667D22] dark:text-[#C6FF00] font-semibold mb-3">
                  Architecture & Features
                </h4>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-sm text-[#555968] dark:text-[#C2C1C9]"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${index % 2 === 0
                            ? 'text-[#145CFF] dark:text-[#83A0FF]'
                            : 'text-[#829B32] dark:text-[#C6FF00]'
                          }`}
                      />

                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Used */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#145CFF] dark:text-[#C6FF00] font-semibold mb-3">
                Technologies Used
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border ${index % 2 === 0
                        ? 'bg-[#145CFF]/[0.06] text-[#145CFF] border-[#145CFF]/20 dark:bg-[#145CFF]/10 dark:text-[#91ACFF] dark:border-[#145CFF]/25'
                        : 'bg-[#A3B85A]/[0.10] text-[#667D22] border-[#A3B85A]/30 dark:bg-[#C6FF00]/[0.07] dark:text-[#C6FF00] dark:border-[#C6FF00]/20'
                      }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 shrink-0 border-t border-[#D4D1C8] dark:border-[#30313A] flex items-center gap-3 bg-[#F0EEE7]/70 dark:bg-[#15171E]">

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-[#145CFF]/30 dark:border-[#30313A] hover:border-[#145CFF] dark:hover:border-[#C6FF00] hover:bg-[#145CFF]/[0.06] dark:hover:bg-[#C6FF00]/[0.06] text-[#171923] dark:text-[#F4F1E8] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
