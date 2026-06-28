'use client';

import { motion } from 'framer-motion';
import Avatar from './Avatar';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '60+', label: 'Client Projects' },
  { value: '13+', label: 'Hackathons' },
  { value: '2', label: 'Startups Founded' },
];

export default function About() {
  return (
    <section id="about" aria-label="About Ndubuisi Ekeh — Backend AI Engineer Lagos Nigeria" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <Avatar src="/avatar.png" alt="Ndubuisi Ekeh — Fullstack AI & Backend Engineer, Lagos Nigeria" />
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-purple-600/30 rounded-2xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-2xl">🤖</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600/30 rounded-2xl backdrop-blur-sm border border-blue-500/30 flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Building AI Systems That Actually Ship
            </h3>
            <p className="text-gray-400 text-lg mb-4 leading-relaxed">
              I&apos;m <strong className="text-white">Ndubuisi Ekeh</strong> — a Lagos-based Fullstack AI &amp; Backend Engineer
              with 5+ years of experience and 60+ client projects across fintech, healthcare, e-commerce, and SaaS.
              I specialize in multi-agent AI systems, scalable REST APIs, and production-grade fullstack applications.
            </p>
            <p className="text-gray-400 text-lg mb-4 leading-relaxed">
              I founded{' '}
              <a href="https://irokoai.site" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                Iroko AI
              </a>
              {' '}— an autonomous compliance intelligence platform built for Nigerian microfinance banks and fintechs,
              using Python, FastAPI, Azure OpenAI, and Semantic Kernel. We placed <strong className="text-white">4th at the
              TeKnowledge × Microsoft 2026 Agentic AI Hackathon Finale</strong>, with the strongest crowd reaction of the event.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I&apos;m also a <strong className="text-white">3MTT Fellow</strong>, <strong className="text-white">Microsoft Student Ambassador</strong>,
              and Microsoft Azure Certified (AZ-204 &amp; AZ-102). Currently pursuing a BSc Computer Science (AI Track) at
              IU International University of Applied Sciences, Germany.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                'Multi-Agent AI Systems',
                'Backend Architecture',
                'Azure OpenAI',
                'Fintech & Compliance',
                'Fullstack Development',
                'Lagos, Nigeria',
              ].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all">
              <p className="text-4xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
