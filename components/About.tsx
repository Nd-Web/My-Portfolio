'use client';

import { motion } from 'framer-motion';
import Avatar from './Avatar';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
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

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Avatar Component - replace src with your actual image path */}
              <Avatar src="/avatar.jpg" alt="Ndubuisi" />

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-purple-600/30 rounded-2xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600/30 rounded-2xl backdrop-blur-sm border border-blue-500/30 flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Building the Future, One Line at a Time
            </h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I&apos;m a passionate developer specializing in building robust backend
              systems and integrating cutting-edge AI solutions. With expertise in
              designing scalable architectures and real-time applications, I turn
              complex problems into elegant, efficient solutions.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              My focus lies in creating systems that are not just functional, but
              truly impactful—whether it&apos;s a high-performance API, an intelligent
              automation tool, or a seamless real-time platform.
            </p>

            {/* Tech Focus Tags */}
            <div className="flex flex-wrap gap-3">
              {['Backend Systems', 'AI Integration', 'Real-time Apps', 'Scalable Architecture'].map((tag, index) => (
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
      </div>
    </section>
  );
}
