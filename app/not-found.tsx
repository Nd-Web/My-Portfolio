'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </motion.div>

        {/* Floating Elements */}
        <div className="relative h-32 mb-8">
          <motion.div
            className="absolute top-0 left-1/4 w-16 h-16 bg-purple-600/20 rounded-full blur-xl"
            animate={{ y: [0, -20, 0], x: [0, 30, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-16 h-16 bg-blue-600/20 rounded-full blur-xl"
            animate={{ y: [0, 20, 0], x: [0, -30, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="relative z-10 w-20 h-20 mx-auto bg-white/5 border border-white/10 rounded-full flex items-center justify-center"
          >
            <svg
              className="w-10 h-10 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Go Home
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-3 border border-white/20 rounded-full font-semibold text-white hover:bg-white/5 hover:border-purple-500/50 transition-all"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Decorative Code */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <code className="text-xs text-gray-500">
            {`// Error: Page not found
// Status: 404
// Time: ${new Date().toLocaleTimeString()}`}
          </code>
        </motion.div>
      </div>
    </div>
  );
}
