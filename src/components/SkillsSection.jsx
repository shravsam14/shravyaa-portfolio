
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Monitor,
  Layout,
  Server,
  Brain,
  Wrench,
  Code2,
  Palette,
  Globe,
  Layers,
  Terminal,
  Coffee,
  Braces,
  Database,
  Workflow,
  Network,
  GitBranch,
  Sparkles,
  Atom,
  Blocks,
  MonitorCog,
  Boxes,
  BrainCircuit,
  ChartNoAxesCombined,
  Microchip,
  CodeXml,
  NotebookTabs,
  Zap,
  Waves,
  Cpu,
  BookOpen,
  FileCode,
  CloudUpload,
  Eye,
} from 'lucide-react';

import { GithubIcon } from './BrandIcons';
import { skillCategories } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const iconMap = {
  Monitor,
  Layout,
  Server,
  Brain,
  Wrench,
  Code2,
  Palette,
  Globe,
  Layers,
  Terminal,
  Coffee,
  Braces,
  Database,
  Workflow,
  Network,
  GitBranch,
  Github: GithubIcon,
  Sparkles,
  Atom,
  Blocks,
  MonitorCog,
  Boxes,
  BrainCircuit,
  ChartNoAxesCombined,
  Microchip,
  CodeXml,
  NotebookTabs,
  Zap,
  Waves,
  Cpu,
  BookOpen,
  FileCode,
  CloudUpload,
  Eye,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const categoryVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

export default function SkillsSection({ isFullPage = false }) {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    'All',
    ...skillCategories.map((category) => category.category),
  ];

  const displayedCategories =
    activeTab === 'All'
      ? skillCategories
      : skillCategories.filter(
        (category) => category.category === activeTab
      );

  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden py-20 md:py-28"
    >
      {/* Electric background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#145CFF]/10 blur-[130px] dark:bg-[#145CFF]/20" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#C6FF00]/10 blur-[130px] dark:bg-[#C6FF00]/[0.07]" />

        <div className="absolute inset-0 bg-[radial-gradient(#145CFF_0.7px,transparent_0.7px)] bg-[size:28px_28px] opacity-[0.07] dark:opacity-[0.10]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <SectionHeading
          badge="EXPERTISE"
          title="Skills & Technologies"
          subtitle="A growing toolkit of programming languages, technical fundamentals and tools I use to build meaningful digital experiences."
        />

        {/* Category filters */}
        <div className="mb-10 mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => {
            const isActive = activeTab === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveTab(category)}
                aria-pressed={isActive}
                className={`relative overflow-hidden rounded-full border px-5 py-2.5 text-[11px] font-semibold tracking-wide transition-all duration-300 ${isActive
                    ? 'border-[#145CFF] bg-[#145CFF] text-white shadow-[0_5px_22px_rgba(20,92,255,0.25)] dark:border-[#C6FF00] dark:bg-[#C6FF00] dark:text-[#050B1A] dark:shadow-[0_5px_22px_rgba(198,255,0,0.12)]'
                    : 'border-[#D8E0F2] bg-white/80 text-[#52617D] hover:border-[#145CFF] hover:text-[#145CFF] dark:border-[#263858] dark:bg-[#101B35]/70 dark:text-[#B9C5DD] dark:hover:border-[#C6FF00] dark:hover:text-[#C6FF00]'
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills category grid */}
        <motion.div
          layout
          className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((catGroup) => {
              const GroupIcon = iconMap[catGroup.icon] || Layout;

              return (
                <motion.div
                  layout
                  key={catGroup.category}
                  variants={categoryVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group relative overflow-hidden rounded-2xl border border-[#D8E0F2] bg-white/85 p-5 shadow-[0_8px_35px_rgba(16,27,53,0.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#145CFF]/50 hover:shadow-[0_18px_45px_rgba(20,92,255,0.12)] dark:border-[#263858] dark:bg-[#101B35]/80 dark:shadow-[0_8px_35px_rgba(0,0,0,0.15)] dark:hover:border-[#3D79FF]/60 dark:hover:shadow-[0_18px_45px_rgba(20,92,255,0.15)] sm:p-6"
                >
                  {/* Decorative corner glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#145CFF]/10 opacity-0 blur-[65px] transition-opacity duration-500 group-hover:opacity-100 dark:bg-[#145CFF]/20" />

                  <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-full bg-[#C6FF00]/[0.06] opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">

                    {/* Category heading */}
                    <div className="mb-5 flex items-center gap-3.5">
                      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#145CFF]/20 bg-[#145CFF]/10 text-[#145CFF] transition-all duration-300 group-hover:rotate-[-5deg] group-hover:scale-110 dark:border-[#3D79FF]/30 dark:bg-[#145CFF]/15 dark:text-[#83A6FF]">
                        <GroupIcon className="h-5 w-5" />

                        <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-[#C6FF00] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-base font-bold tracking-tight text-[#101B35] dark:text-[#F5F7FF] sm:text-lg">
                          {catGroup.category}
                        </h3>

                        <p className="mt-1 text-[11px] leading-4 text-[#8490A8] dark:text-[#8493B2]">
                          {catGroup.description}
                        </p>
                      </div>

                      <div className="ml-auto hidden h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D8E0F2] text-[#145CFF] dark:border-[#263858] dark:text-[#C6FF00] sm:flex">
                        <span className="text-xs">↗</span>
                      </div>
                    </div>

                    {/* Skill tiles */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.15,
                      }}
                      className="grid grid-cols-2 gap-3"
                    >
                      {catGroup.skills.map((skill, skillIdx) => {
                        const SkillIcon =
                          iconMap[skill.icon] || Code2;

                        return (
                          <motion.div
                            key={skill.name}
                            variants={{
                              hidden: {
                                opacity: 0,
                                y: 12,
                              },
                              visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                  duration: 0.4,
                                  delay: skillIdx * 0.035,
                                },
                              },
                            }}
                            whileHover={{
                              y: -3,
                              transition: { duration: 0.2 },
                            }}
                            className="group/skill flex min-w-0 flex-col gap-3 rounded-xl border border-[#D8E0F2] bg-[#F5F7FF]/80 p-3 transition-all duration-300 hover:border-[#145CFF]/50 hover:bg-[#E9EEFF] hover:shadow-[0_5px_18px_rgba(20,92,255,0.08)] dark:border-[#263858] dark:bg-[#0B1429]/80 dark:hover:border-[#3D79FF]/60 dark:hover:bg-[#142344] sm:p-3.5"
                          >
                            {/* Skill name and percentage */}
                            <div className="flex min-w-0 items-center justify-between gap-1.5">
                              <div className="flex min-w-0 items-center gap-2">
                                <SkillIcon className="h-4 w-4 shrink-0 text-[#145CFF] transition-colors group-hover/skill:text-[#527DFF] dark:text-[#83A6FF] dark:group-hover/skill:text-[#C6FF00]" />

                                <span className="truncate text-xs font-semibold text-[#101B35] dark:text-[#E6EDFF]">
                                  {skill.name}
                                </span>
                              </div>

                              <span className="shrink-0 font-mono text-[10px] font-semibold text-[#8490A8] dark:text-[#8493B2]">
                                {skill.level}%
                              </span>
                            </div>

                            {/* Animated progress bar */}
                            <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-[#D8E0F2] dark:bg-[#263858]">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{
                                  width: `${skill.level}%`,
                                }}
                                viewport={{
                                  once: true,
                                  amount: 0.5,
                                }}
                                transition={{
                                  duration: 1.1,
                                  delay: 0.12 + skillIdx * 0.035,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative h-full rounded-full bg-gradient-to-r from-[#145CFF] via-[#527DFF] to-[#C6FF00]"
                              >
                                <span className="absolute right-0 top-0 h-full w-2 rounded-full bg-white/70 blur-[2px]" />
                              </motion.div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
