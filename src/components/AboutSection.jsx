
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Compass,
  Lightbulb,
  ShieldCheck,
  ChevronDown,
  Code2,
  BrainCircuit,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const interests = [
  'Creative Problem Solving',
  'Building Meaningful Ideas',
  'Learning Through Experience',
  'Thoughtful Design',
];

const journey = [
  {
    number: '01',
    title: 'Building my foundation',
    description:
      'My Computer Science journey introduced me to programming, problem-solving, and the ideas behind the software we use every day. Step by step, I began turning concepts into practical skills.',
    icon: Code2,
  },
  {
    number: '02',
    title: 'Learning by building',
    description:
      'Working on projects helps me connect what I learn with real applications. From developing interfaces to working with programming logic, I enjoy experimenting, solving errors, and improving my approach.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Exploring what comes next',
    description:
      'I am expanding my knowledge of software development, Python, artificial intelligence, and machine learning. My goal is to keep growing into an engineer who can turn thoughtful ideas into useful technology.',
    icon: BrainCircuit,
  },
];

const waysOfThinking = [
  {
    title: 'Stay Curious.',
    tagline: 'Every interesting idea begins with a question.',
    detail:
      'I love exploring how things work, trying unfamiliar tools, and discovering better ways to solve a problem.',
    icon: Lightbulb,
    number: '01',
  },
  {
    title: 'Make It Matter.',
    tagline: 'Code should do more than just work.',
    detail:
      'I care about creating useful applications with thoughtful interfaces and experiences that feel natural to people.',
    icon: Compass,
    number: '02',
  },
  {
    title: 'Keep Evolving.',
    tagline: 'Every attempt is a chance to improve.',
    detail:
      'I learn by building, making mistakes, and refining my approach. Progress matters more to me than pretending to know everything.',
    icon: ShieldCheck,
    number: '03',
  },
];

function SectionLabel({ children }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-[#A4A6B0]">
      <span className="h-px w-7 bg-gradient-to-r from-[#145CFF] to-[#C6FF00]" />
      {children}
    </p>
  );
}

export default function AboutSection({ isFullPage = false }) {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F0EEE7] text-[#171923] transition-colors duration-300 dark:bg-[#101116] dark:text-[#F4F1E8]"
    >
      {/* Subtle dotted background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle, #8490A8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Blue + neon ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#145CFF]/[0.10] to-[#C6FF00]/[0.09] blur-[120px]"
      />

      <div
        className={`relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-12 ${isFullPage ? 'py-4 md:py-6' : 'py-12 md:py-16'
          }`}
      >
        {/* SECTION 1 — ABOUT ME */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-6 max-w-4xl"
          >
            <SectionLabel>A little about me</SectionLabel>

            <h1 className="text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Turning curiosity
              <br />
              into{' '}
              <span className="bg-gradient-to-r from-[#145CFF] via-[#C6FF00] to-[#145CFF] bg-clip-text text-transparent">
                creations.
              </span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 items-center gap-12 md:gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-5"
            >
              <div className="group relative mx-auto w-full max-w-[420px]">
                <div
                  aria-hidden="true"
                  className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-3xl border-r border-t border-[#145CFF]/70 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 dark:border-[#C6FF00]/80"
                />

                <div className="relative overflow-hidden rounded-2xl border border-[#145CFF]/20 bg-[#E7E5DE] p-2 dark:border-[#C6FF00]/20 dark:bg-[#191C25]">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl">
                    <img
                      src={personalInfo.avatarUrl}
                      alt="Portrait of Shravyaa"
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-4 left-4 rounded-xl border border-[#145CFF]/15 bg-[#FAF9F4]/95 px-4 py-3 shadow-lg backdrop-blur dark:border-[#C6FF00]/25 dark:bg-[#191C25]/95">
                  <p className="text-sm font-semibold">Shravyaa S.</p>
                  <p className="mt-1 text-xs text-[#626574] dark:text-[#B9B9C2]">
                    CSE Student · Aspiring Developer
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Personal introduction */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="pt-3 lg:col-span-7 lg:pl-2"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#145CFF] dark:text-[#C6FF00]">
                Hey, I'm Shravyaa
              </p>

              <h2 className="mb-6 max-w-xl text-2xl font-bold leading-snug tracking-tight sm:text-3xl md:text-4xl">
                I love exploring ideas and bringing them to life through
                technology.
              </h2>

              <div className="max-w-2xl space-y-4">
                <p className="text-base leading-8 text-[#555968] dark:text-[#C2C1C9] sm:text-lg">
                  I'm a Computer Science and Engineering student who enjoys asking
                  questions, exploring new ideas, and finding creative ways to turn
                  them into something meaningful. I see every challenge as an
                  opportunity to think differently, learn something new, and create
                  something that makes a difference.
                </p>

                <p className="text-sm leading-7 text-[#686B77] dark:text-[#A4A6B0] sm:text-base">
                  I enjoy the process of taking an idea from its earliest stages
                  and gradually shaping it into something real. I enjoy learning
                  by building, experimenting with new tools, and discovering
                  how each piece of a project fits together.
                </p>
              </div>

              <div className="mt-8 border-t border-[#D4D1C8] pt-6 dark:border-[#30313A]">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#686B77] dark:text-[#A4A6B0]">
                  What inspires me
                </p>

                <div className="flex flex-wrap gap-2">
                  {interests.map((item, index) => (
                    <span
                      key={item}
                      className={`rounded-full border bg-[#FAF9F4] px-3 py-2 text-xs font-medium transition-all duration-300 dark:bg-[#191C25] dark:text-[#D1D0D7] sm:text-sm ${index % 2 === 0
                          ? 'border-[#145CFF]/25 text-[#145CFF] hover:border-[#145CFF] hover:bg-[#145CFF]/10 dark:border-[#145CFF]/30 dark:text-[#83A0FF] dark:hover:border-[#145CFF]'
                          : 'border-[#A3B85A]/40 text-[#667D22] hover:border-[#A3B85A] hover:bg-[#A3B85A]/10 dark:border-[#A3B85A]/40 dark:text-[#C6FF00] dark:hover:border-[#C6FF00]'
                        }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SECTION 3 — THE WAY I THINK */}
        <div className="mt-16 border-t border-[#D4D1C8] pt-14 dark:border-[#30313A] md:mt-24 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-10 max-w-3xl"
          >
            <SectionLabel>What guides the way I build</SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              The Way I Think
              <span className="bg-gradient-to-r from-[#145CFF] to-[#C6FF00] bg-clip-text text-transparent">.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#555968] dark:text-[#C2C1C9] sm:text-lg">
              I'm not trying to know everything already. I'm focused on
              staying curious, creating things that matter, and becoming a
              little better with every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {waysOfThinking.map((item, index) => {
              const Icon = item.icon;
              const isExpanded = expandedCard === index;

              return (
                <motion.article
                  key={item.number}
                  layout
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -5 }}
                  className={`group relative overflow-hidden rounded-2xl border bg-[#FAF9F4] transition-all duration-300 dark:bg-[#191C25] ${index === 1
                      ? 'border-[#C6FF00]/40 hover:border-[#C6FF00] dark:border-[#C6FF00]/30 dark:hover:border-[#C6FF00]'
                      : 'border-[#145CFF]/20 hover:border-[#145CFF]/60 dark:border-[#145CFF]/30 dark:hover:border-[#145CFF]'
                    }`}
                >
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setExpandedCard(isExpanded ? null : index)
                    }
                    className="w-full p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#145CFF] dark:focus-visible:ring-[#C6FF00] sm:p-7"
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${index % 2 === 0
                            ? 'bg-[#145CFF]/10 text-[#145CFF] dark:bg-[#145CFF]/15 dark:text-[#83A0FF] dark:group-hover:bg-[#145CFF] dark:group-hover:text-white'
                            : 'bg-[#A3B85A]/15 text-[#667D22] dark:bg-[#C6FF00]/10 dark:text-[#C6FF00] dark:group-hover:bg-[#C6FF00] dark:group-hover:text-[#101116]'
                          }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="font-mono text-xs tracking-widest text-[#858691] dark:text-[#A4A6B0]">
                        / {item.number}
                      </span>
                    </div>

                    <h3 className="mb-3 text-xl font-bold tracking-tight sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="min-h-[56px] text-sm leading-7 text-[#555968] dark:text-[#C2C1C9]">
                      {item.tagline}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-[#D4D1C8] pt-4 dark:border-[#30313A]">
                      <span
                        className={`text-xs font-semibold uppercase tracking-[0.16em] ${index % 2 === 0
                            ? 'text-[#145CFF] dark:text-[#83A0FF]'
                            : 'text-[#667D22] dark:text-[#C6FF00]'
                          }`}
                      >
                        {isExpanded ? 'Read less' : 'Read more'}
                      </span>

                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={index % 2 === 0 ? 'text-[#145CFF] dark:text-[#83A0FF]' : 'text-[#8A9F43] dark:text-[#C6FF00]'}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-7 text-sm leading-7 text-[#555968] dark:text-[#C2C1C9] sm:px-7">
                          {item.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>

          {/* Closing line */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center md:mt-16"
          >
            <Sparkles className="mx-auto mb-5 h-5 w-5 text-[#C6FF00] dark:text-[#C6FF00]" />

            <p className="text-lg font-semibold leading-relaxed tracking-tight sm:text-xl md:text-2xl">
              Curiosity starts it.{' '}
              <span className="bg-gradient-to-r from-[#145CFF] to-[#C6FF00] bg-clip-text text-transparent">
                Creativity
              </span>{' '}
              shapes it.
              <br className="hidden sm:block" /> Consistency builds it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
