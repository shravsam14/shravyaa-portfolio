
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Check,
  Send,
  ArrowUpRight,
  MapPin,
} from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from './BrandIcons';
import confetti from 'canvas-confetti';
import { personalInfo, socialLinks } from '../data/portfolioData';

const iconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Instagram: InstagramIcon,
  Mail,
};

export default function ContactSection({ isFullPage = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const emailAddress = 'shravyaa06@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setErrorMessage('Unable to copy email. Please copy it manually.');
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setErrorMessage('');
    setStatus('loading');

    // Demo submission animation only.
    // Connect an email service for actual message delivery.
    setTimeout(() => {
      setStatus('success');

      try {
        confetti({
          particleCount: 65,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch {
        // Confetti is optional.
      }

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1200);
  };

  const inputStyle = `
    w-full rounded-xl
    border border-[#DCD6C9]
    bg-[#FFFDF7]
    px-4 py-3
    text-sm text-[#282820]
    placeholder:text-[#AAA496]
    outline-none
    transition-all duration-300
    focus:border-[#6667C5]
    focus:ring-2 focus:ring-[#6667C5]/10
  `;

  return (
    <section
      id="contact"
      className={`relative overflow-hidden ${isFullPage ? 'py-12 md:py-16' : 'py-20 md:py-28'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            A little space for
            <span className="font-serif italic font-normal text-indigo-500">
              {' '}good conversations.
            </span>
          </h2>
        </motion.div>

        {/* Digital Postcard */}
        <motion.div
          initial={{ opacity: 0, y: 35, rotateX: 3 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="
            relative overflow-hidden
            rounded-[28px]
            bg-[#E9E5DA]
            border border-[#D7D0C2]
            shadow-[0_25px_80px_rgba(0,0,0,0.12)]
          ">

            {/* Paper Texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.18]"
              style={{
                backgroundImage:
                  'radial-gradient(#8C8578 0.6px, transparent 0.6px)',
                backgroundSize: '7px 7px',
              }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-2">

              {/* Left Side: Postcard Message */}
              <div className="
                relative p-7 sm:p-10 md:p-12
                flex flex-col justify-between
                min-h-[480px]
              ">

                <div>
                  <div className="flex items-center justify-between mb-12">
                    <span className="text-[10px] tracking-[0.22em] font-mono font-semibold text-[#777166]">
                      A NOTE FROM MY DESK
                    </span>

                    <span className="text-[10px] font-mono text-[#777166]">
                      EST. 2026
                    </span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="
                      font-serif italic
                      text-5xl sm:text-6xl
                      text-[#25272D]
                      tracking-tight mb-7
                    ">
                      hello, there.
                    </h3>

                    <h4 className="
                      max-w-md
                      text-3xl sm:text-4xl
                      font-bold leading-[1.15]
                      tracking-tight
                      text-[#25272D]
                    ">
                      Every great connection starts somewhere.
                    </h4>

                    <p className="
                      max-w-sm mt-6
                      text-sm sm:text-base
                      leading-7 text-[#69665E]
                    ">
                      Maybe yours starts with a message.
                      I'd love to hear what you're working on,
                      an opportunity you're exploring, or simply
                      an interesting idea.
                    </p>
                  </motion.div>
                </div>

                {/* Postcard Footer */}
                <div className="mt-12">
                  <div className="
                    border-t border-dashed border-[#BDB5A6]
                    pt-5 flex flex-wrap justify-between
                    items-end gap-4
                  ">
                    <div>
                      <p className="text-[9px] tracking-[0.2em] font-mono text-[#898276] mb-2">
                        MADE WITH CURIOSITY
                      </p>

                      <p className="font-serif italic text-xl text-[#35352F]">
                        Warm regards,
                      </p>

                      <p className="text-sm font-semibold tracking-wide text-[#35352F] mt-1">
                        Shravyaa S.
                      </p>
                    </div>

                    {/* Clickable Animated Email Stamp */}
                    <motion.button
                      type="button"
                      onClick={handleCopyEmail}
                      whileHover={{
                        scale: 1.07,
                        rotate: 5,
                        y: -4,
                      }}
                      whileTap={{ scale: 0.92 }}
                      animate={
                        copied
                          ? {
                            rotate: [3, -8, 5, 0],
                            scale: [1, 1.12, 1],
                          }
                          : {}
                      }
                      transition={{ duration: 0.45 }}
                      title="Click to copy my email address"
                      aria-label="Copy email address"
                      className="
                        relative w-[104px] h-[100px]
                        border-2 border-dashed
                        border-[#7775A9]
                        bg-[#DAD9E8]
                        flex flex-col items-center justify-center
                        rotate-3 text-[#55558E]
                        cursor-pointer
                        transition-colors duration-300
                        hover:bg-[#CFCEE5]
                        focus:outline-none
                        focus:ring-2 focus:ring-[#7775A9]
                      "
                    >
                      <span className="text-[8px] font-mono tracking-widest">
                        {copied ? 'SUCCESS' : 'MY EMAIL'}
                      </span>

                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.div
                            key="copied"
                            initial={{ scale: 0, rotate: -30 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0 }}
                          >
                            <Check className="w-7 h-7 my-2" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="mail"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Mail className="w-7 h-7 my-2" />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <span className="text-[9px] font-mono font-bold">
                        {copied ? 'COPIED!' : 'TAP HERE'}
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Right Side: Write a Letter */}
              <div className="
                relative bg-[#F7F4EB]
                p-7 sm:p-10 md:p-12
                border-t lg:border-t-0 lg:border-l
                border-[#D7D0C2]
              ">

                {/* Decorative Postmark */}
                <div className="
                  absolute top-7 right-7 hidden sm:flex
                  flex-col items-center justify-center
                  w-16 h-16 rounded-full
                  border border-dashed border-[#C7C0B2]
                  rotate-12
                ">
                  <span className="text-[8px] font-mono text-[#999184]">
                    SEND
                  </span>

                  <ArrowUpRight className="w-5 h-5 text-[#7775A9]" />

                  <span className="text-[8px] font-mono text-[#999184]">
                    WITH CARE
                  </span>
                </div>

                <p className="text-[10px] tracking-[0.2em] font-mono text-[#898276] mb-3">
                  YOUR MESSAGE
                </p>

                <h3 className="font-serif italic text-3xl text-[#292A30] mb-2">
                  Write me a note.
                </h3>

                <p className="text-sm text-[#77736B] mb-8">
                  I'd be happy to hear from you.
                </p>

                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="
                        min-h-[330px]
                        flex flex-col items-center
                        justify-center text-center
                      "
                    >
                      <div className="
                        w-16 h-16 rounded-full
                        bg-[#E2E4D7]
                        flex items-center justify-center mb-5
                      ">
                        <Check className="w-8 h-8 text-[#68734C]" />
                      </div>

                      <h4 className="font-serif italic text-3xl text-[#292A30]">
                        What a lovely note!
                      </h4>

                      <p className="text-sm text-[#77736B] mt-3 max-w-xs leading-6">
                        Thank you for reaching out.
                        This demo form has completed its submission animation.
                      </p>

                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-7 text-sm font-semibold text-[#55558E] hover:underline"
                      >
                        Write another note →
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {errorMessage && (
                        <p className="text-xs text-red-600">
                          {errorMessage}
                        </p>
                      )}

                      <div>
                        <label className="block text-xs font-semibold text-[#55534C] mb-2">
                          YOUR NAME *
                        </label>

                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="What should I call you?"
                          className={inputStyle}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#55534C] mb-2">
                          YOUR EMAIL *
                        </label>

                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Where can I write back?"
                          className={inputStyle}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#55534C] mb-2">
                          SUBJECT
                        </label>

                        <input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What's on your mind?"
                          className={inputStyle}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#55534C] mb-2">
                          YOUR NOTE *
                        </label>

                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Start writing your message here..."
                          className={`${inputStyle} resize-none`}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="
                          w-full rounded-xl
                          bg-[#292A30] text-white
                          py-3.5 px-5
                          flex items-center justify-center gap-3
                          text-sm font-semibold
                          hover:bg-[#45466F]
                          transition-all duration-300
                          disabled:opacity-60 group
                        "
                      >
                        {status === 'loading' ? (
                          <>
                            <span className="
                              w-4 h-4 rounded-full
                              border-2 border-white
                              border-t-transparent animate-spin
                            " />
                            Preparing your note...
                          </>
                        ) : (
                          <>
                            Send your note
                            <Send className="
                              w-4 h-4
                              group-hover:translate-x-1
                              transition-transform
                            " />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Postcard Bottom Edge */}
            <div className="
              relative border-t border-dashed border-[#C9C1B3]
              px-7 sm:px-10 py-5
              flex flex-col sm:flex-row
              justify-between items-start sm:items-center gap-4
            ">
              <div className="flex items-center gap-2 text-xs text-[#77736B]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{personalInfo.location}</span>
              </div>

              {/* Social Links Only — No Copy Email Text */}
              <div className="flex flex-wrap items-center gap-4">
                {socialLinks.map((item) => {
                  const Icon = iconMap[item.icon] || Mail;

                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      title={item.name}
                      className="
                        flex items-center gap-2
                        text-xs font-medium text-[#68645B]
                        hover:text-[#55558E]
                        transition-colors
                      "
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <p className="
          text-center text-[10px] tracking-[0.2em]
          text-neutral-500 dark:text-neutral-500
          mt-8 font-mono
        ">
          EVERY GOOD PROJECT BEGINS WITH A CONVERSATION.
        </p>
      </div>
    </section>
  );
}
