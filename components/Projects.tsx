'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Iroko AI — Autonomous Compliance Intelligence',
    description:
      'Co-founded and built a 5-agent compliance platform for Nigerian microfinance banks and fintechs. Features parallel Semantic Kernel agent dispatch (asyncio.gather), hybrid BM25 + vector retrieval via Azure AI Search, NDPA-compliant hash-chained audit trails, and a hallucination confidence gate. Placed 4th (crowd favourite) at TeKnowledge × Microsoft 2026 Agentic AI Hackathon Finale.',
    techStack: ['Python', 'FastAPI', 'Azure OpenAI', 'Semantic Kernel', 'Azure AI Search', 'PostgreSQL', 'React', 'Next.js'],
    image: '/projects/iroko-ai.png',
    imageAlt: 'Iroko AI compliance intelligence dashboard — multi-agent AI system for Nigerian fintechs',
    liveUrl: 'https://irokoai.site',
    githubUrl: 'https://github.com/Nd-Web',
    gradient: 'from-purple-600 to-blue-600',
    badge: '🏆 4th Place — TeKnowledge × Microsoft 2026',
  },
  {
    title: 'Clinic Management SaaS — Live UK Deployment',
    description:
      'Built a multi-tenant SaaS for UK clinics: patient records, appointments, billing, and AI-powered clinical decision support. Multi-agent Anthropic API architecture automates workflows. Integrated Vapi (voice AI), Twilio (SMS), and Stripe metered billing with credit-based subscriptions. Delivered and deployed for a live UK clinic.',
    techStack: ['Python', 'Flask', 'Anthropic API', 'Vapi', 'Supabase', 'Twilio', 'Stripe', 'PostgreSQL'],
    image: '/projects/clinic-saas.png',
    imageAlt: 'Clinic Management SaaS platform — multi-agent AI for UK healthcare',
    liveUrl: 'https://github.com/Nd-Web',
    githubUrl: 'https://github.com/Nd-Web',
    gradient: 'from-green-600 to-teal-600',
    badge: '🏥 Live Production Deployment',
  },
  {
    title: 'AI Personal Finance Platform — African Market',
    description:
      'Production-ready AI finance platform purpose-built for African users. Integrates Mono API for real-time Nigerian bank account connectivity, and Claude API for intelligent spending analysis and personalised financial insights. Built on Supabase with row-level security and real-time subscriptions.',
    techStack: ['Next.js', 'Supabase', 'Claude API', 'Mono API', 'Tailwind CSS', 'TypeScript'],
    image: '/projects/finance-platform.png',
    imageAlt: 'AI Personal Finance Platform for African users — Claude API and Mono API integration',
    liveUrl: 'https://github.com/Nd-Web',
    githubUrl: 'https://github.com/Nd-Web',
    gradient: 'from-orange-600 to-yellow-600',
    badge: '💰 African Fintech',
  },
  {
    title: 'Digital Banking Platform',
    description:
      'Production-grade digital banking web app with account creation, balance management, real-time transfers, and Stripe payment processing. Built with Supabase real-time subscriptions for near-zero-latency updates. Modular React + TypeScript frontend with full type safety.',
    techStack: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'Stripe'],
    image: '/projects/digital-banking.png',
    imageAlt: 'Digital Banking Platform — real-time fintech web app with Supabase and Stripe',
    liveUrl: 'https://github.com/Nd-Web',
    githubUrl: 'https://github.com/Nd-Web',
    gradient: 'from-blue-600 to-cyan-600',
    badge: '🏦 Fullstack Fintech',
  },
  {
    title: 'SentinelAI — B2B Telecom Fraud Detection',
    description:
      'Real-time scam detection SaaS built for Nigerian banks, fintechs, telcos, and call centres. Architected the full AI core: threat feed, scan history, and live GPT-powered message analysis endpoint. Built on Azure OpenAI and Semantic Kernel for the TeKnowledge × Microsoft 2026 qualifier round.',
    techStack: ['Python', 'FastAPI', 'Azure OpenAI', 'Semantic Kernel', 'Microsoft Azure'],
    image: '/projects/sentinel-ai.png',
    imageAlt: 'SentinelAI — B2B telecom fraud detection platform for Nigerian fintechs',
    liveUrl: 'https://github.com/Nd-Web',
    githubUrl: 'https://github.com/Nd-Web',
    gradient: 'from-red-600 to-pink-600',
    badge: '🛡️ Fraud Intelligence SaaS',
  },
  {
    title: 'Scalable Microservices Backend System',
    description:
      'Modular microservices architecture with User, Order, Payment, and Notification services. Implemented API Gateway, Redis caching, inter-service communication, and centralised error handling. All services containerised with Docker for consistent deployment.',
    techStack: ['Docker', 'Node.js', 'PostgreSQL', 'Redis', 'REST', 'API Gateway'],
    image: '/projects/microservices.png',
    imageAlt: 'Scalable microservices backend system — Docker, Redis, Node.js architecture',
    liveUrl: 'https://github.com/Nd-Web',
    githubUrl: 'https://github.com/Nd-Web',
    gradient: 'from-indigo-600 to-violet-600',
    badge: '⚙️ Backend Architecture',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  hover: { y: -10, scale: 1.02, transition: { duration: 0.3 } },
};

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects by Ndubuisi Ekeh — AI systems, fintech, SaaS" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production-grade AI systems, agentic platforms, and fullstack applications — shipped and deployed.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="relative h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Badge */}
                <span className="inline-block mb-3 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-purple-300">
                  {project.badge}
                </span>

                {/* Project Image */}
                <motion.div
                  className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover relative z-10"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement!;
                      parent.classList.add('flex', 'items-center', 'justify-center');
                      const fallback = document.createElement('span');
                      fallback.className = 'text-6xl relative z-10';
                      const emojiMap: Record<string, string> = {
                        '/projects/iroko-ai.png': '🤖',
                        '/projects/clinic-saas.png': '🏥',
                        '/projects/finance-platform.png': '💰',
                        '/projects/digital-banking.png': '🏦',
                        '/projects/sentinel-ai.png': '🛡️',
                        '/projects/microservices.png': '⚙️',
                      };
                      fallback.textContent = emojiMap[project.image] || '📁';
                      parent.appendChild(fallback);
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Live
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-white/50 text-white rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Nd-Web"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more projects by Ndubuisi Ekeh on GitHub"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/5 hover:border-purple-500/50 transition-all"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
