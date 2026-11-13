
import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  CalendarDays,
  Sparkles,
} from 'lucide-react';

import { timelineExperiences } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const filters = ['All', 'Experience', 'Education'];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
    filter: 'blur(5px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    scale: 0.97,
    transition: { duration: 0.2 },
  },
};

export default function Timeline() {
  const [filter, setFilter] = useState('All');

  const filteredItems = useMemo(() => {
    if (filter === 'All') return timelineExperiences;

    return timelineExperiences.filter(
      (item) => item.type === filter
    );
  }, [filter]);

  return (
    <section
      id="timeline"
      className="relative isolate overflow-hidden py-20 md:py-28"
    >
      {/* Electric background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-32 h-96 w-96 rounded-full bg-[#145CFF]/10 blur-[130px] dark:bg-[#145CFF]/20" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#C6FF00]/10 blur-[130px] dark:bg-[#C6FF00]/[0.07]" />

        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #527DFF 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">

        {/* Heading */}
        <SectionHeading
          badge="THE JOURNEY"
          title="Experience & Education"
          subtitle="A journey of learning, exploring new possibilities, and growing through every experience."
        />

        {/* Intro and filters */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mb-12 mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#145CFF] dark:text-[#83A6FF]">
              My journey so far
            </p>

            <h3 className="text-3xl font-bold leading-tight tracking-tight text-[#101B35] dark:text-white sm:text-4xl">
              Every step
              <br />
              <span className="bg-gradient-to-r from-[#145CFF] via-[#527DFF] to-[#C6FF00] bg-clip-text text-transparent">
                shapes my story.
              </span>
            </h3>
          </div>

          {/* Filters */}
          <div className="flex w-fit gap-1 rounded-xl border border-[#D8E0F2] bg-white/80 p-1.5 shadow-sm backdrop-blur-xl dark:border-[#263858] dark:bg-[#101B35]/80">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={`relative rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${filter === item
                    ? 'text-white dark:text-[#050B1A]'
                    : 'text-[#52617D] hover:text-[#145CFF] dark:text-[#B9C5DD] dark:hover:text-[#C6FF00]'
                  }`}
              >
                {filter === item && (
                  <motion.span
                    layoutId="timeline-filter"
                    className="absolute inset-0 rounded-lg bg-[#145CFF] dark:bg-[#C6FF00]"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 28,
                    }}
                  />
                )}

                <span className="relative z-10">{item}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Timeline area */}
        <div className="relative">

          {/* Central glowing line */}
          <div className="absolute bottom-5 left-[19px] top-5 w-px bg-gradient-to-b from-[#145CFF] via-[#527DFF]/60 to-[#C6FF00]/10 md:left-1/2 md:-translate-x-1/2" />

          <motion.div
            key={filter}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 md:space-y-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const isEducation = item.type === 'Education';
                const Icon = isEducation
                  ? GraduationCap
                  : Briefcase;

                const isLeft = index % 2 === 0;

                return (
                  <motion.article
                    key={`${item.role}-${item.company}`}
                    layout
                    variants={cardVariants}
                    className="relative grid grid-cols-[40px_minmax(0,1fr)] gap-3 md:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] md:gap-4"
                  >
                    {/* Glowing timeline node */}
                    <div className="relative z-10 col-start-1 row-start-1 flex justify-center md:col-start-2">
                      <motion.div
                        whileHover={{ scale: 1.13 }}
                        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#145CFF]/40 bg-white shadow-[0_0_22px_rgba(20,92,255,0.12)] dark:border-[#3D79FF]/50 dark:bg-[#101B35] dark:shadow-[0_0_25px_rgba(20,92,255,0.20)] md:h-11 md:w-11"
                      >
                        <motion.span
                          animate={{
                            scale: [1, 1.35, 1],
                            opacity: [0.2, 0.5, 0.2],
                          }}
                          transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className="absolute inset-0 rounded-full bg-[#145CFF]/15 dark:bg-[#3D79FF]/20"
                        />

                        <Icon
                          size={18}
                          className="relative text-[#145CFF] dark:text-[#C6FF00]"
                        />
                      </motion.div>
                    </div>

                    {/* Timeline card */}
                    <div
                      className={`col-start-2 row-start-1 min-w-0 ${isLeft
                          ? 'md:col-start-1 md:justify-self-end'
                          : 'md:col-start-3 md:justify-self-start'
                        }`}
                    >
                      <motion.div
                        whileHover={{
                          y: -5,
                          transition: { duration: 0.25 },
                        }}
                        className="group relative w-full max-w-[420px] overflow-hidden rounded-2xl border border-[#D8E0F2] bg-white/90 p-5 shadow-[0_10px_35px_rgba(16,27,53,0.06)] backdrop-blur-xl transition-all duration-500 hover:border-[#145CFF]/60 hover:shadow-[0_18px_45px_rgba(20,92,255,0.13)] dark:border-[#263858] dark:bg-[#101B35]/90 dark:hover:border-[#3D79FF]/60 dark:hover:shadow-[0_18px_45px_rgba(20,92,255,0.16)] sm:p-6"
                      >
                        {/* Card glow */}
                        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#145CFF]/10 opacity-0 blur-[65px] transition-opacity duration-500 group-hover:opacity-100 dark:bg-[#145CFF]/20" />

                        <div className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-[#C6FF00]/[0.07] opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="relative">

                          {/* Card top row */}
                          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#145CFF]/15 bg-[#145CFF]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#145CFF] dark:border-[#3D79FF]/20 dark:bg-[#145CFF]/15 dark:text-[#83A6FF]">
                              <Sparkles size={11} />
                              {isEducation ? 'Education' : 'Experience'}
                            </span>

                            <span className="flex items-center gap-1.5 text-[11px] font-medium text-[#8490A8] dark:text-[#8493B2]">
                              <CalendarDays size={12} />
                              {item.period}
                            </span>
                          </div>

                          {/* Company / institution */}
                          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#145CFF] dark:text-[#C6FF00]">
                            {item.company}
                          </p>

                          {/* Role */}
                          <h4 className="mb-3 text-lg font-bold leading-snug text-[#101B35] transition-colors dark:text-white sm:text-xl">
                            {item.role}
                          </h4>

                          {/* Description */}
                          <p className="text-[13px] leading-6 text-[#52617D] dark:text-[#B9C5DD] sm:text-sm">
                            {item.description}
                          </p>

                          {/* Optional highlights */}
                          {item.achievements?.length > 0 && (
                            <div className="mt-5 border-t border-[#D8E0F2] pt-4 dark:border-[#263858]">
                              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8490A8] dark:text-[#8493B2]">
                                Highlights
                              </p>

                              <ul className="space-y-2.5">
                                {item.achievements.map(
                                  (achievement, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{
                                        opacity: 0,
                                        x: -8,
                                      }}
                                      whileInView={{
                                        opacity: 1,
                                        x: 0,
                                      }}
                                      viewport={{ once: true }}
                                      transition={{
                                        delay: i * 0.08,
                                        duration: 0.35,
                                      }}
                                      className="flex items-start gap-2.5 text-[13px] leading-5 text-[#52617D] dark:text-[#D0DAEE]"
                                    >
                                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#145CFF] shadow-[0_0_8px_rgba(20,92,255,0.5)] dark:bg-[#C6FF00] dark:shadow-[0_0_8px_rgba(198,255,0,0.35)]" />

                                      {achievement}
                                    </motion.li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* End of journey */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#145CFF]/60" />

          <p className="text-xs font-medium tracking-wide text-[#8490A8] dark:text-[#B9C5DD]">
            The journey continues...
          </p>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C6FF00]/60" />
        </motion.div>
      </div>
    </section>
  );
}
