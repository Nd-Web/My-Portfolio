'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechStart',
    content:
      "Ndubuisi transformed our backend infrastructure. The real-time features he built increased user engagement by 40%. His attention to scalability and performance is exceptional.",
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager at InnovateCo',
    content:
      "The AI integration Ndubuisi implemented saved our team countless hours. His ability to understand complex requirements and deliver elegant solutions is impressive.",
    avatar: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder at DataFlow',
    content:
      "Working with Ndubuisi was a game-changer. He delivered our voice-to-payment system ahead of schedule and the quality exceeded our expectations.",
    avatar: 'ER',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 relative">
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
            <span className="gradient-text">What People Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feedback from clients and colleagues I've had the pleasure to work with.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-purple-500/20">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Content */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
