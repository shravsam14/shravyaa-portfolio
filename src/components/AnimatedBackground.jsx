import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 grid-pattern opacity-60 dark:opacity-30" />

      {/* Primary Accent Ambient Glow */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[130px]"
      />

      {/* Secondary Ambient Glow */}
      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 45, -30, 0],
          scale: [1, 1.05, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-500/8 dark:bg-sky-500/8 blur-[150px]"
      />

      {/* Bottom Subtle Blob */}
      <motion.div
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-40 left-1/3 w-[450px] h-[450px] rounded-full bg-purple-500/5 dark:bg-blue-400/5 blur-[140px]"
      />
    </div>
  );
}
