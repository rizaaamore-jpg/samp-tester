'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Database, Cloud, Cpu, Smartphone } from 'lucide-react'

const skills = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
    ]
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "PostgreSQL", level: 60 },
    ]
  },
  {
    category: "UI/UX",
    icon: <Palette className="w-6 h-6" />,
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 75 },
      { name: "Prototyping", level: 80 },
      { name: "User Research", level: 70 },
    ]
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold">MY SKILLS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a wide range of technologies in web development.
            Here are my primary skills and proficiency levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB', 'Figma', 'Git'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  {tech.charAt(0)}
                </div>
                <p className="text-center mt-2 text-sm">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
