'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface CopyEmailProps {
  email: string;
  className?: string;
}

export default function CopyEmail({ email, className = '' }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      className={`relative px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:border-purple-500/50 hover:text-purple-400 transition-all ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={copied ? 'Copied!' : `Copy email: ${email}`}
    >
      <span className="flex items-center gap-2">
        {copied ? (
          <>
            <svg
              className="w-4 h-4 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-green-400 text-sm">Copied!</span>
          </>
        ) : (
          <>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm">{email}</span>
          </>
        )}
      </span>
    </motion.button>
  );
}
