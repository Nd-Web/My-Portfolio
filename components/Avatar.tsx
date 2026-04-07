'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Avatar({ src, alt = 'Profile avatar', size = 'xl' }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64 md:w-80 md:h-80',
  };

  return (
    <div className="relative">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse" />

      {/* Avatar Container */}
      <motion.div
        className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-4 border-white/10`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 flex items-center justify-center">
            {/* Placeholder Avatar */}
            <svg
              className="w-32 h-32 md:w-40 md:h-40 text-white/80"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </motion.div>
    </div>
  );
}
