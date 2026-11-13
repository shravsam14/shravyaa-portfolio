import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InitialLoader({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if user has already visited in this session
    const hasLoaded = sessionStorage.getItem('portfolio_initial_loaded');
    if (hasLoaded) {
      setVisible(false);
      if (onComplete) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('portfolio_initial_loaded', 'true');
      if (onComplete) onComplete();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFFFF] dark:bg-[#0A0A0A]"
        >
          {/* Glowing Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex items-center justify-center mb-6"
          >
            <div className="absolute w-20 h-20 rounded-full bg-blue-500/20 blur-xl animate-pulse" />
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#111111] to-[#222222] dark:from-[#161616] dark:to-[#222222] border border-[#E5E5E5] dark:border-[#333333] shadow-lg flex items-center justify-center">
              <span className="text-xl font-bold tracking-tight text-white font-mono">
                S<span className="text-blue-500">.</span>
              </span>
            </div>
          </motion.div>

          {/* Minimalist Progress Line */}
          <div className="w-36 h-[2px] bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
              className="w-full h-full bg-blue-500"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase"
          >
            Loading Experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
