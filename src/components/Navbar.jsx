
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4"
    >
      <nav
        aria-label="Main navigation"
        className="glass-nav relative mx-auto flex max-w-[1500px] items-center justify-between gap-4 rounded-full px-4 py-3 shadow-[0_8px_35px_rgba(20,92,255,0.10)] sm:px-6 lg:px-8"
      >
        {/* Personal brand */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Shravyaa S. home"
          className="group flex shrink-0 items-center gap-3 sm:gap-4"
        >
          {/* Electric Cobalt monogram */}
          <div className="relative flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12">
            <span className="absolute -left-0.5 top-0 font-serif text-[43px] italic leading-none text-[#101B35] transition-all duration-300 group-hover:-translate-x-1 group-hover:text-[#145CFF] dark:text-[#F5F7FF] dark:group-hover:text-[#3D79FF]">
              S
            </span>

            <span className="absolute left-4 top-1 font-serif text-[43px] italic leading-none text-[#145CFF] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C6FF00] dark:text-[#C6FF00]">
              S
            </span>
          </div>

          <span className="h-10 w-px bg-[#D8E0F2] dark:bg-[#263858]" />

          {/* Name and tagline */}
          <div className="flex flex-col">
            <span className="font-serif text-xl font-medium tracking-tight text-[#101B35] dark:text-[#F5F7FF] sm:text-[25px]">
              Shravyaa{' '}
              <span className="text-[#145CFF] dark:text-[#C6FF00]">
                S.
              </span>
            </span>

            <span className="mt-1 whitespace-nowrap text-[8px] font-semibold tracking-[0.2em] text-[#8490A8] dark:text-[#8493B2] sm:text-[9px]">
              DESIGN · BUILD · LEARN
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex lg:gap-2">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                aria-current={active ? 'page' : undefined}
                className={`relative rounded-full px-4 py-3 text-sm font-medium transition-colors duration-300 lg:px-5 ${active
                  ? 'text-[#145CFF] dark:text-[#C6FF00]'
                  : 'text-[#52617D] hover:text-[#145CFF] dark:text-[#B9C5DD] dark:hover:text-[#C6FF00]'
                  }`}
              >
                {link.name}

                {active && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#145CFF] to-[#C6FF00]"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <ThemeToggle />

          <a
            href="/resume.pdf"
            download="Shravyaa_Resume.pdf"
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#145CFF] bg-[#145CFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(20,92,255,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C6FF00] hover:bg-[#C6FF00] hover:text-[#050B1A] hover:shadow-[0_7px_28px_rgba(20,92,255,0.28)]"
          >
            <Download
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />

            Download Resume

            <ArrowUpRight
              size={14}
              className="opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="rounded-full border border-[#D8E0F2] p-2.5 text-[#101B35] transition duration-300 hover:border-[#145CFF] hover:text-[#145CFF] dark:border-[#263858] dark:text-[#F5F7FF] dark:hover:border-[#C6FF00] dark:hover:text-[#C6FF00]"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass-nav mx-auto mt-2 max-w-[1500px] overflow-hidden rounded-3xl shadow-xl lg:hidden"
          >
            <div className="space-y-2 p-4">
              {navLinks.map((link, index) => {
                const active = location.pathname === link.path;

                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${active
                        ? 'bg-[#145CFF]/10 text-[#145CFF] dark:bg-[#C6FF00]/10 dark:text-[#C6FF00]'
                        : 'text-[#52617D] hover:bg-[#E9EEFF] dark:text-[#B9C5DD] dark:hover:bg-white/5'
                        }`}
                    >
                      {link.name}

                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#145CFF] dark:bg-[#C6FF00]" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="flex items-center justify-between gap-3 border-t border-[#D8E0F2] pt-4 dark:border-[#263858]">
                <ThemeToggle />

                <a
                  href="/resume.pdf"
                  download="Shravyaa_Resume.pdf"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 rounded-full bg-[#145CFF] px-4 py-3 text-xs font-semibold text-white transition duration-300 hover:bg-[#C6FF00] hover:text-[#050B1A]"
                >
                  <Download size={15} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
