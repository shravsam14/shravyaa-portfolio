
import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowDown,
  Sparkles,
  Code2,
  Layers3,
  BrainCircuit,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const experienceAreas = [
  {
    icon: Code2,
    title: 'Full Stack',
    subtitle: 'Development',
    color: 'text-[#145CFF] dark:text-[#83A6FF]',
  },
  {
    icon: Workflow,
    title: 'DevOps',
    subtitle: 'Internship',
    color: 'text-[#527DFF] dark:text-[#C6FF00]',
  },
  {
    icon: BrainCircuit,
    title: 'Data Science',
    subtitle: 'Machine Learning',
    color: 'text-[#145CFF] dark:text-[#83A6FF]',
  },
];

const codeLines = [
  <><span className="text-[#83A6FF]">const</span> <span className="text-[#F5F7FF]">ideas</span> = <span className="text-[#C6FF00]">"curiosity"</span>;</>,
  <><span className="text-[#83A6FF]">const</span> <span className="text-[#F5F7FF]">skills</span> = <span className="text-[#C6FF00]">"continuous learning"</span>;</>,
  <><span className="text-[#83A6FF]">function</span> <span className="text-[#527DFF]">buildFuture</span>() {'{'}</>,
  <span className="text-[#8493B2]">  // Turning ideas into impact</span>,
  <>  <span className="text-[#83A6FF]">return</span> <span className="text-[#527DFF]">create</span>(ideas, skills);</>,
  <>{'}'}</>,
];

export default function Hero() {
  const scrollToIntroduction = (event) => {
    event.preventDefault();

    document.getElementById('introduction')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="relative overflow-hidden bg-[#FAFAFC] text-[#101B35] dark:bg-[#080D18] dark:text-[#F5F7FF] transition-colors duration-500">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[85vh] flex items-center pt-28 pb-16 md:pt-32">

        {/* Background atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-30 dark:opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(#AAB1BE 0.65px, transparent 0.65px)',
              backgroundSize: '22px 22px',
            }}
          />

          <div className="absolute w-[600px] h-[600px] rounded-full bg-[#145CFF]/[0.045] dark:bg-[#145CFF]/[0.10] blur-[140px] top-[-180px] right-[-100px]" />

          <div className="absolute w-[450px] h-[450px] rounded-full bg-[#DDE2EA]/40 dark:bg-[#C6FF00]/[0.025] blur-[130px] bottom-[-180px] left-[-100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-8 items-center">

          {/* LEFT: INTRODUCTION */}
          <div className="relative z-10">

            {/* Availability badge */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#E2E5EC] dark:border-[#527DFF]/30 bg-white/90 dark:bg-[#101B35]/75 backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#145CFF] dark:bg-[#C6FF00] animate-pulse" />

              <span className="text-[10px] sm:text-xs tracking-[0.16em] font-semibold uppercase text-[#52617D] dark:text-[#D5DDF0]">
                Available for opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-sm md:text-base font-medium tracking-[0.18em] uppercase text-[#52617D] dark:text-[#B9C5DD] mb-4"
            >
              Hello there, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.18 }}
              className="text-[clamp(2.35rem,5.5vw,5.3rem)] leading-[1.08] font-extrabold tracking-[-0.065em] text-[#101B35] dark:text-white whitespace-nowrap"
            >
              Shravyaa{' '}
              <span className="bg-gradient-to-r from-[#145CFF] via-[#527DFF] to-[#8AA8FF] dark:from-[#527DFF] dark:via-[#83A6FF] dark:to-[#C6FF00] bg-clip-text text-transparent">
                S.
              </span>
            </motion.h1>

            {/* Accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 76 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="h-[3px] bg-gradient-to-r from-[#145CFF] to-[#C6FF00] mt-7 mb-6 rounded-full"
            />

            {/* Description */}
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.35 }}
              className="max-w-xl text-base sm:text-lg leading-relaxed text-[#52617D] dark:text-[#B9C5DD]"
            >
              A Computer Science student passionate about software development,
              creative problem-solving, and exploring Artificial Intelligence
              and Machine Learning.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.48 }}
              className="flex flex-wrap items-center gap-3 mt-8"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-5 px-6 py-3.5 rounded-xl bg-[#145CFF] dark:bg-[#527DFF] text-white font-semibold text-sm shadow-lg shadow-[#145CFF]/15 dark:shadow-[#527DFF]/20 hover:-translate-y-1 hover:bg-[#1049D0] dark:hover:bg-[#6D91FF] hover:shadow-xl transition-all duration-300"
              >
                Explore my work

                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.a
              href="#introduction"
              onClick={scrollToIntroduction}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              whileHover={{ y: 4 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 mt-12 text-[#8490A8] dark:text-[#8493B2] cursor-pointer group"
              aria-label="Scroll to introduction"
            >
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase group-hover:text-[#145CFF] dark:group-hover:text-[#C6FF00] transition-colors">
                Scroll to discover
              </span>

              <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-[#145CFF] dark:group-hover:text-[#C6FF00] transition-colors" />

              <span className="h-px w-12 bg-[#E2E5EC] dark:bg-[#263858] group-hover:bg-[#145CFF] dark:group-hover:bg-[#C6FF00] transition-colors" />
            </motion.a>

          </div>

          {/* ================= RIGHT: DIGITAL CANVAS ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative min-h-[390px] sm:min-h-[480px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-[490px] aspect-square">

              {/* Ambient glow */}
              <div className="absolute inset-[15%] rounded-full bg-[#145CFF]/[0.055] dark:bg-[#145CFF]/[0.12] blur-[90px]" />
              <div className="absolute inset-[30%] rounded-full bg-[#DDE2EA]/50 dark:bg-[#C6FF00]/[0.04] blur-[80px]" />

              {/* Background grid */}
              <div
                className="absolute inset-[8%] rounded-[35px] border border-[#E2E5EC] dark:border-[#527DFF]/25"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(120,130,150,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(120,130,150,0.07) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                  transform: 'perspective(700px) rotateX(8deg) rotateY(-8deg)',
                }}
              />

              {/* Floating code editor */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [-1, 1, -1] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute left-[7%] top-[16%] w-[86%] rounded-2xl overflow-hidden border border-[#263858] bg-[#101B35] shadow-[0_30px_80px_rgba(16,27,53,0.18)]"
              >

                {/* Editor header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.04]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#527DFF]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF00]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#68E0B4]" />
                  </div>

                  <span className="text-[10px] font-mono text-[#8493B2]">
                    creative-thinking.jsx
                  </span>

                  <Code2 className="w-4 h-4 text-[#83A6FF]" />
                </div>

                {/* Editor code */}
                <div className="p-5 sm:p-6 font-mono text-[10px] sm:text-xs leading-[2.1]">
                  <div className="flex gap-4">
                    <div className="text-[#52617D] select-none">
                      01<br />
                      02<br />
                      03<br />
                      04<br />
                      05<br />
                      06
                    </div>

                    <div className="flex-1 min-w-0">
                      {codeLines.map((line, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.8 + index * 0.35,
                            duration: 0.45,
                          }}
                          className="whitespace-nowrap"
                        >
                          {line}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Editor status */}
                  <div className="flex items-center justify-between gap-2 mt-5 pt-3 border-t border-white/10 text-[9px] text-[#8493B2]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF00]" />
                      READY TO BUILD
                    </span>

                    <span>JavaScript · React</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating data visualisation */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-[9%] left-[1%] w-[48%] p-4 rounded-2xl border border-[#E5E7EB] dark:border-[#263858] bg-white/95 dark:bg-[#101B35]/95 backdrop-blur-xl shadow-xl shadow-black/[0.06] dark:shadow-black/20"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-[10px] text-[#8490A8] dark:text-[#8493B2] uppercase tracking-wider">
                      Data insights
                    </p>

                    <p className="text-sm font-bold text-[#101B35] dark:text-white mt-1">
                      Explore patterns
                    </p>
                  </div>

                  <BrainCircuit className="w-5 h-5 text-[#145CFF] dark:text-[#C6FF00]" />
                </div>

                <div className="flex items-end gap-2 h-16">
                  {[35, 55, 42, 78, 58, 90, 68, 100].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: '10%' }}
                      animate={{
                        height: [
                          `${height * 0.55}%`,
                          `${height}%`,
                          `${height * 0.7}%`,
                          `${height}%`,
                        ],
                      }}
                      transition={{
                        duration: 3 + index * 0.2,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'easeInOut',
                      }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-[#145CFF] via-[#527DFF] to-[#C6FF00]"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating AI icon */}
              <motion.div
                animate={{ y: [0, 12, 0], rotate: [2, -2, 2] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-[5%] right-[0%] p-4 rounded-2xl border border-[#E5E7EB] dark:border-[#263858] bg-white/95 dark:bg-[#101B35]/95 backdrop-blur-xl shadow-xl shadow-black/[0.06] dark:shadow-black/20"
              >
                <Sparkles className="w-6 h-6 text-[#145CFF] dark:text-[#C6FF00]" />
              </motion.div>

              {/* Floating label */}
              <motion.div
                animate={{ x: [0, 7, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-[12%] right-[0%] flex items-center gap-2 px-4 py-3 rounded-xl border border-[#E5E7EB] dark:border-[#263858] bg-white/95 dark:bg-[#101B35]/95 shadow-lg shadow-black/[0.06] dark:shadow-black/20"
              >
                <Layers3 className="w-4 h-4 text-[#145CFF] dark:text-[#C6FF00]" />

                <span className="text-xs font-semibold text-[#101B35] dark:text-[#F5F7FF]">
                  Ideas into impact
                </span>
              </motion.div>

              {/* Animated connection dots */}
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.4, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-[10%] left-[20%] w-2 h-2 rounded-full bg-[#145CFF] shadow-[0_0_10px_#145CFF]"
              />

              <motion.span
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.4, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.7 }}
                className="absolute top-[65%] right-[5%] w-2 h-2 rounded-full bg-[#C6FF00] shadow-[0_0_10px_#C6FF00]"
              />

              <motion.span
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.4, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
                className="absolute bottom-[5%] left-[55%] w-2 h-2 rounded-full bg-[#527DFF] shadow-[0_0_10px_#527DFF]"
              />

            </div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5E7EB] dark:via-[#263858] to-transparent" />
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section
        id="introduction"
        className="relative scroll-mt-20 py-20 md:py-28 bg-[#F3F4F6] dark:bg-[#0B1220]"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            {/* Introduction heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#145CFF] dark:text-[#83A6FF]">
                01 / A little introduction
              </span>

              <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.055em] leading-[1.05] text-[#101B35] dark:text-white">
                Thoughtful code.
                <span className="block bg-gradient-to-r from-[#A3D900] via-[#C6FF00] to-[#91C900] dark:from-[#C6FF00] dark:via-[#D9FF66] dark:to-[#A3D900] bg-clip-text text-transparent">
                  Meaningful impact.
                </span>
              </h2>
            </motion.div>

            {/* Introduction description */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:pt-10"
            >
              <p className="text-base sm:text-lg leading-[1.9] text-[#52617D] dark:text-[#B9C5DD]">
                I enjoy turning ideas into useful digital experiences. I believe
                good work comes from curiosity, thoughtful design, clean
                execution, and the willingness to keep improving. My goal is
                to create things that are not only functional, but genuinely
                meaningful to the people who use them.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#101B35] dark:text-white hover:text-[#145CFF] dark:hover:text-[#C6FF00] transition-colors"
                >
                  More about me

                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>

                <span className="h-px w-14 bg-[#D1D5DB] dark:bg-[#263858]" />

                <span className="text-xs tracking-wide text-[#8490A8] dark:text-[#8493B2]">
                  Curiosity · Creativity · Consistency
                </span>
              </div>
            </motion.div>
          </div>

          {/* Experience highlights */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 pt-8 border-t border-[#E0E2E7] dark:border-[#263858]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#52617D] dark:text-[#B9C5DD]">
                Experience in practice
              </span>

              <span className="text-xs text-[#8490A8] dark:text-[#8493B2]">
                Learning through real-world exposure
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {experienceAreas.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#E9EAED] dark:bg-[#101B35] flex items-center justify-center group-hover:bg-[#145CFF]/10 dark:group-hover:bg-[#C6FF00]/10 transition-colors">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#101B35] dark:text-white">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#52617D] dark:text-[#B9C5DD]">
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
