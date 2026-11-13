
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

export default function ProjectsSection({ limit, isFullPage = false }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Full Stack', 'AI/ML', 'Frontend', 'Backend'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const query = searchQuery.toLowerCase();

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <section
      id="projects"
      className={`relative bg-[#F0EEE7] text-[#171923] transition-colors duration-300 dark:bg-[#101116] dark:text-[#F4F1E8] ${isFullPage ? 'py-12 md:py-16' : 'py-20 md:py-28'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          badge="FEATURED WORK"
          title="Engineered Projects & Experiments"
          subtitle="A showcase of applications and systems built through practical development."
        />

        {/* Category Filters and Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-10">

          {/* Category Filters */}
          <div className="
            flex flex-wrap items-center gap-1
            p-1.5 rounded-full
            bg-[#E7E5DE] border border-[#D4D1C8]
            dark:bg-[#191C25] dark:border-[#30313A]
            backdrop-blur-md
            self-stretch sm:self-auto
          ">
            {categories.map((cat, index) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
                  px-4 py-2 rounded-full
                  text-xs sm:text-sm font-medium font-mono
                  whitespace-nowrap
                  transition-all duration-300
                  ${selectedCategory === cat
                    ? index % 2 === 0
                      ? 'bg-[#145CFF] text-white shadow-md shadow-[#145CFF]/20'
                      : 'bg-[#C6FF00] text-[#171923] shadow-md shadow-[#C6FF00]/20'
                    : 'text-[#626574] hover:bg-[#FAF9F4] hover:text-[#145CFF] dark:text-[#B9B9C2] dark:hover:bg-[#252832] dark:hover:text-[#C6FF00]'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-[280px] shrink-0">

            <Search
              className="
                w-4 h-4
                absolute left-4 top-1/2
                -translate-y-1/2
                text-[#858691]
                dark:text-[#A4A6B0]
                pointer-events-none
              "
            />

            <input
              type="text"
              placeholder="Search projects or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
                w-full h-11
                rounded-full
                bg-[#FAF9F4] border border-[#D4D1C8]
                dark:bg-[#191C25] dark:border-[#30313A]
                px-4 pl-11
                text-sm text-[#171923]
                dark:text-[#F4F1E8]
                placeholder:text-[#858691]
                dark:placeholder:text-[#777985]
                outline-none
                transition-all duration-300
                focus:border-[#145CFF]
                dark:focus:border-[#C6FF00]
                focus:ring-2 focus:ring-[#145CFF]/10
                dark:focus:ring-[#C6FF00]/15
              "
            />
          </div>
        </div>

        {/* Projects Grid */}
        {displayedProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <div className="
            py-16 text-center rounded-3xl
            bg-[#FAF9F4] border border-[#D4D1C8]
            dark:bg-[#191C25] dark:border-[#30313A]
          ">
            <p className="text-sm text-[#686B77] dark:text-[#A4A6B0]">
              No projects found matching "{searchQuery}" in {selectedCategory}.
            </p>

            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-[#145CFF] hover:underline dark:text-[#C6FF00]"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* View All Projects */}
        {limit && projects.length > limit && (
          <div className="mt-14 text-center">
            <Link
              to="/projects"
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-full
                border border-[#D4D1C8] dark:border-[#30313A]
                bg-[#FAF9F4] dark:bg-[#191C25]
                text-[#171923] dark:text-[#F4F1E8]
                text-xs font-semibold
                hover:border-[#145CFF] dark:hover:border-[#C6FF00]
                transition-all duration-300
                hover:scale-105 shadow-sm group
              "
            >
              <span>Explore All {projects.length} Projects</span>

              <ArrowRight className="
                w-3.5 h-3.5 text-[#145CFF] dark:text-[#C6FF00]
                transition-transform
                group-hover:translate-x-1
              " />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
