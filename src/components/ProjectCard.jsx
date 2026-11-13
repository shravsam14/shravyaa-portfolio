
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Info } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import ProjectModal from './ProjectModal';

export default function ProjectCard({ project, index = 0 }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
        whileHover={{ y: -6 }}
        className="group relative flex flex-col rounded-3xl glass-card overflow-hidden transition-all duration-300 border border-[#D4D1C8] dark:border-[#30313A] hover:shadow-xl hover:shadow-[#145CFF]/10 hover:border-[#145CFF]/50 dark:hover:border-[#C6FF00]/60 dark:hover:shadow-[#C6FF00]/5"
      >
        {/* Project Image Thumbnail */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E7E5DE] dark:bg-[#191C25]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Pill */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-[#FAF9F4]/95 dark:bg-[#191C25]/95 text-[#171923] dark:text-[#F4F1E8] backdrop-blur-md border border-[#145CFF]/25 dark:border-[#C6FF00]/30 shadow-sm">
              {project.category}
            </span>
          </div>

          {/* Quick Details Trigger Overlay Button */}
          <button
            onClick={() => setModalOpen(true)}
            aria-label={`View details for ${project.title}`}
            className="absolute bottom-4 right-4 p-2.5 rounded-full bg-[#FAF9F4]/95 dark:bg-[#191C25]/95 text-[#145CFF] dark:text-[#C6FF00] opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 shadow-md backdrop-blur-md"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3
              onClick={() => setModalOpen(true)}
              className="text-xl font-bold tracking-tight text-[#171923] dark:text-[#F4F1E8] group-hover:text-[#145CFF] dark:group-hover:text-[#C6FF00] transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-[#626574] dark:text-[#B9B9C2] line-clamp-2 mb-4 leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tag}
                className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono border transition-colors duration-300 ${tagIndex % 2 === 0
                    ? 'bg-[#145CFF]/[0.06] text-[#145CFF] border-[#145CFF]/20 dark:bg-[#145CFF]/10 dark:text-[#91ACFF] dark:border-[#145CFF]/25'
                    : 'bg-[#A3B85A]/[0.10] text-[#667D22] border-[#A3B85A]/30 dark:bg-[#C6FF00]/[0.07] dark:text-[#C6FF00] dark:border-[#C6FF00]/20'
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions: GitHub & Live Demo */}
          <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#D4D1C8] dark:border-[#30313A]">
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-medium text-[#686B77] dark:text-[#A4A6B0] hover:text-[#145CFF] dark:hover:text-[#C6FF00] transition-colors flex items-center gap-1"
            >
              <span>Learn more</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View GitHub repository for ${project.title}`}
                className="p-2 rounded-xl text-[#626574] dark:text-[#A4A6B0] hover:text-[#145CFF] dark:hover:text-[#C6FF00] hover:bg-[#145CFF]/[0.06] dark:hover:bg-[#C6FF00]/[0.08] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#145CFF] dark:bg-[#C6FF00] text-white dark:text-[#101116] hover:bg-[#0F4FE0] dark:hover:bg-[#D8FF4D] transition-colors shadow-sm"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </motion.article>

      {/* Detail Modal */}
      <ProjectModal
        project={project}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
