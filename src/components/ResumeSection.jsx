import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2, Award, GraduationCap, ExternalLink } from 'lucide-react';
import { resumeDetails, personalInfo } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function ResumeSection() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Simulate real resume download trigger
    setTimeout(() => {
      // Create a dummy printable resume file or trigger download
      const element = document.createElement("a");
      const file = new Blob([
        `===================================================\n` +
        `${personalInfo.fullName.toUpperCase()} - RESUME\n` +
        `${personalInfo.title}\n` +
        `Location: ${personalInfo.location}\n` +
        `Contact: hello@shravyaa.dev | https://github.com\n` +
        `===================================================\n\n` +
        `SUMMARY:\n${resumeDetails.summary}\n\n` +
        `EDUCATION:\n${resumeDetails.education.degree}\n` +
        `${resumeDetails.education.institution} (${resumeDetails.education.period})\n` +
        `GPA: ${resumeDetails.education.gpa} | ${resumeDetails.education.honors}\n\n` +
        `CORE COMPETENCIES:\n- ` + resumeDetails.coreCompetencies.join('\n- ') + `\n\n` +
        `CERTIFICATIONS:\n- ` + resumeDetails.certifications.join('\n- ') + `\n\n` +
        `SKILLS:\n- Frontend: React, Tailwind CSS, JavaScript, HTML/CSS\n- Backend: Node.js, Express\n- AI/ML: Python, TensorFlow, OpenCV\n- Tools: Git, GitHub, Vercel, Figma\n`
      ], { type: 'text/plain' });
      
      element.href = URL.createObjectURL(file);
      element.download = "Shravyaa_Resume.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setDownloading(false);
    }, 600);
  };

  return (
    <section id="resume" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="CURRICULUM VITAE"
          title="Resume & Credentials"
          subtitle="A quick overview of my academic foundation, certifications, and verified skill competencies."
        />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl glass-card p-6 sm:p-10 border border-neutral-200/80 dark:border-neutral-800 shadow-xl relative overflow-hidden"
        >
          {/* Subtle Top Accent Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400" />

          {/* Header with Title and Download Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-neutral-200/70 dark:border-neutral-800/70">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-5 h-5 text-blue-500" />
                <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  {personalInfo.fullName}
                </h3>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {personalInfo.title}
              </p>
            </div>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
            >
              <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
              <span>{downloading ? 'Preparing File...' : 'Download Resume'}</span>
            </button>
          </div>

          {/* Summary */}
          <div className="py-6 border-b border-neutral-200/70 dark:border-neutral-800/70">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold mb-2">
              Professional Summary
            </h4>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {resumeDetails.summary}
            </p>
          </div>

          {/* Education & Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-b border-neutral-200/70 dark:border-neutral-800/70">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold mb-3">
                <GraduationCap className="w-4 h-4 text-blue-500" />
                <span>Education</span>
              </div>
              <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                {resumeDetails.education.degree}
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                {resumeDetails.education.institution} • {resumeDetails.education.period}
              </div>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                {resumeDetails.education.honors}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold mb-3">
                <Award className="w-4 h-4 text-blue-500" />
                <span>Certifications</span>
              </div>
              <ul className="space-y-1.5">
                {resumeDetails.certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="pt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold mb-3">
              Core Competencies
            </h4>
            <div className="flex flex-wrap gap-2">
              {resumeDetails.coreCompetencies.map((comp) => (
                <span
                  key={comp}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/70 dark:border-neutral-700/60"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
