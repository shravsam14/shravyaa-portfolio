
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { socialLinks, personalInfo } from '../data/portfolioData';

const iconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Instagram: InstagramIcon,
  Mail: Mail,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#E2E5EC] dark:border-[#202838] bg-[#FAFBFF] dark:bg-[#080D18] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#145CFF] to-[#527DFF] dark:from-[#145CFF] dark:to-[#527DFF] text-white flex items-center justify-center font-mono font-bold text-lg shadow-lg shadow-[#145CFF]/30 group-hover:scale-105 transition-transform duration-300">
                S
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#C6FF00] border-2 border-[#EDF2FF] dark:border-[#050B1A]" />
              </div>
              <span className="block font-bold text-xl tracking-tight text-[#101B35] dark:text-white">
                Shravyaa<span className="text-[#145CFF] dark:text-[#C6FF00]">.</span>
              </span>
            </Link>

            <p className="text-sm text-[#52617D] dark:text-[#AEBEDC] max-w-sm leading-relaxed">
              Crafting minimal, high-performance web applications and intelligent machine learning systems with modern architectures.
            </p>

            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#145CFF]/10 text-[#145CFF] dark:text-[#C6FF00] border border-[#145CFF]/25 dark:border-[#C6FF00]/30 shadow-sm shadow-[#145CFF]/5">
              <span className="w-2 h-2 rounded-full bg-[#145CFF] dark:bg-[#C6FF00] shadow-[0_0_8px_rgba(198,255,0,0.65)] animate-pulse" />
              <span>{personalInfo.status}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#145CFF] dark:text-[#83A6FF] font-bold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#52617D] dark:text-[#B9C5DD] hover:text-[#145CFF] dark:hover:text-[#C6FF00] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[#52617D] dark:text-[#B9C5DD] hover:text-[#145CFF] dark:hover:text-[#C6FF00] transition-colors">
                  Projects Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#52617D] dark:text-[#B9C5DD] hover:text-[#145CFF] dark:hover:text-[#C6FF00] transition-colors">
                  About & Journey
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#52617D] dark:text-[#B9C5DD] hover:text-[#145CFF] dark:hover:text-[#C6FF00] transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#145CFF] dark:text-[#83A6FF] font-bold mb-4">
              Connect
            </h3>
            <div className="flex flex-col space-y-2.5">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || Mail;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-sm text-[#52617D] dark:text-[#B9C5DD] hover:text-[#145CFF] dark:hover:text-[#C6FF00] transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#8490A8] dark:text-[#8493B2] group-hover:text-[#145CFF] dark:group-hover:text-[#C6FF00] transition-colors" />
                      <span>{link.name}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[#145CFF] dark:text-[#C6FF00]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#145CFF]/20 dark:border-[#263858] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8490A8] dark:text-[#8493B2]">
          <p>© {currentYear} Shravyaa. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
