'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Backend',
    icon: '🖥️',
    skills: [
      { name: 'Node.js', level: 95 },
      { name: 'Express', level: 90 },
      { name: 'Supabase', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'Framer Motion', level: 82 },
    ],
  },
  {
    title: 'AI & Tools',
    icon: '🤖',
    skills: [
      { name: 'OpenAI API', level: 90 },
      { name: 'Vapi', level: 85 },
      { name: 'LangChain', level: 80 },
      { name: 'Vector DBs', level: 78 },
      { name: 'Prompt Engineering', level: 88 },
    ],
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative bg-black/30">
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
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 rounded-2xl transition-all duration-300" />

                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.4,
                      }}
                    >
                      {/* Skill Name */}
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-purple-400 text-sm">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                            duration: 1,
                            ease: 'easeOut',
                          }}
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'Docker', 'AWS', 'Redis', 'GraphQL', 'WebSocket', 'CI/CD', 'Linux'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
