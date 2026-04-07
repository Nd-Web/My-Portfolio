'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Fintech App',
    description:
      'A real-time financial platform with fake money transactions, live balance updates, and instant peer-to-peer transfers. Built with WebSocket for real-time communication.',
    techStack: ['Node.js', 'Express', 'Supabase', 'WebSocket', 'React'],
    image: '💰',
    liveUrl: 'https://github.com/ndubuisi/fintech-app',
    githubUrl: 'https://github.com/ndubuisi/fintech-app',
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Voice-to-Payment AI',
    description:
      'AI-powered voice payment system that processes natural language commands to execute transactions. Integrates OpenAI and payment APIs for seamless voice commerce.',
    techStack: ['OpenAI', 'Vapi', 'Node.js', 'Stripe API', 'React'],
    image: '🎤',
    liveUrl: 'https://github.com/ndubuisi/voice-payment-ai',
    githubUrl: 'https://github.com/ndubuisi/voice-payment-ai',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Scholarship Finder AI',
    description:
      'Intelligent scholarship matching platform using AI to analyze student profiles and recommend relevant opportunities. Features automated application tracking.',
    techStack: ['Next.js', 'OpenAI', 'Supabase', 'Tailwind', 'TypeScript'],
    image: '🎓',
    liveUrl: 'https://github.com/ndubuisi/scholarship-finder-ai',
    githubUrl: 'https://github.com/ndubuisi/scholarship-finder-ai',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Real-time Chat App',
    description:
      'Feature-rich messaging platform with instant messaging, group chats, file sharing, and end-to-end encryption. Supports online presence and typing indicators.',
    techStack: ['React', 'Socket.io', 'Node.js', 'Redis', 'MongoDB'],
    image: '💬',
    liveUrl: 'https://github.com/ndubuisi/realtime-chat',
    githubUrl: 'https://github.com/ndubuisi/realtime-chat',
    gradient: 'from-orange-600 to-red-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            A showcase of my recent work in backend systems, AI integration, and
            real-time applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Glow Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  style={{
                    boxShadow: `0 0 60px rgba(124, 58, 237, 0.15), inset 0 0 60px rgba(124, 58, 237, 0.05)`,
                  }}
                />

                {/* Project Image Placeholder */}
                <motion.div
                  className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                  />
                  <span className="text-6xl relative z-10">{project.image}</span>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.liveUrl}
                      className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="px-4 py-2 border border-white/50 text-white rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </motion.div>

                {/* Project Info */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/5 hover:border-purple-500/50 transition-all"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
