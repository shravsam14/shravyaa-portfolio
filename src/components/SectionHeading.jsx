import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${isCentered ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide mb-3 ${
          isCentered ? 'mx-auto' : ''
        } bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 border border-neutral-200/80 dark:border-neutral-700/60`}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
