'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'AI & Agentic Systems',
    icon: '🤖',
    skills: [
      { name: 'Azure OpenAI / GPT-4o', level: 93 },
      { name: 'Semantic Kernel', level: 90 },
      { name: 'Anthropic Claude API', level: 92 },
      { name: 'Multi-Agent Systems', level: 88 },
      { name: 'RAG & Vector Search', level: 85 },
    ],
  },
  {
    title: 'Backend Engineering',
    icon: '⚙️',
    skills: [
      { name: 'Python / FastAPI / Flask', level: 93 },
      { name: 'Node.js / Express', level: 90 },
      { name: 'PostgreSQL / Supabase', level: 88 },
      { name: 'REST API Design', level: 95 },
      { name: 'Docker / Microservices', level: 85 },
    ],
  },
  {
    title: 'Frontend & Cloud',
    icon: '🎨',
    skills: [
      { name: 'React.js / Next.js', level: 90 },
      { name: 'TypeScript', level: 87 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Microsoft Azure', level: 85 },
      { name: 'GitHub Actions (CI/CD)', level: 82 },
    ],
  },
];

const extraTech = [
  'Redis', 'MongoDB', 'MySQL', 'JWT / RBAC', 'Stripe', 'Vapi', 'Twilio',
  'Mono API', 'Postman', 'Swagger', 'Figma', 'React Native', 'WebSocket',
  'OpenAI API', 'Burp Suite', 'Wireshark', 'Linux / Bash',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  return (
    <section id="skills" aria-label="Technical skills of Ekeh Ndubuisi — AI, Backend, Fullstack" className="py-24 px-6 relative bg-black/30">
      <div className="max-w-6xl mx-auto">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={cardVariants} className="group relative">
              <div className="relative h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 rounded-2xl transition-all duration-300" />
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + categoryIndex * 0.2 + skillIndex * 0.1, duration: 0.4 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-purple-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1, duration: 1, ease: 'easeOut' }}
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

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl"
        >
          <h3 className="text-lg font-semibold text-white mb-4">🎓 Certifications & Recognition</h3>
          <div className="flex flex-wrap gap-3">
            {[
              '☁️ Microsoft Azure Developer Associate (AZ-204)',
              '🤖 Microsoft AI Engineer Associate (AZ-102)',
              '📦 IBM Full-Stack JavaScript Developer',
              '🔙 IBM Backend JavaScript Developer',
              '🎨 IBM Frontend Developer',
              '🔒 Google Foundations of Cybersecurity',
              '🏆 3MTT Fellow (FE/23/29099235)',
              '🧑‍💼 Microsoft Student Ambassador',
            ].map((cert) => (
              <span key={cert} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                {cert}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Additional tech */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 mb-6">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {extraTech.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.04, duration: 0.3 }}
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
