import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Bug, Database, FileCheck, GitBranch, TestTube } from 'lucide-react';

const skills = [
  {
    name: 'Java',
    icon: Code,
    level: 85,
    description: 'Core Java, OOP Concepts',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Automation Testing',
    icon: TestTube,
    level: 90,
    description: 'Selenium WebDriver',
    color: 'from-purple-500 to-blue-500',
  },
  {
    name: 'Manual Testing',
    icon: Bug,
    level: 95,
    description: 'Test Case Design',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Selenium',
    icon: GitBranch,
    level: 88,
    description: 'Test Automation Framework',
    color: 'from-blue-500 to-purple-500',
  },
  {
    name: 'Oracle SQL',
    icon: Database,
    level: 80,
    description: 'Database Testing',
    color: 'from-purple-500 to-cyan-500',
  },
  {
    name: 'JIRA',
    icon: FileCheck,
    level: 85,
    description: 'Bug Reporting & Tracking',
    color: 'from-cyan-500 to-purple-500',
  },
];

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 10,
        z: 50,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        transformStyle: 'preserve-3d',
      }}
      className="relative group"
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`}
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
      />

      {/* Card */}
      <div className="relative bg-gradient-to-br from-blue-950/60 via-purple-950/60 to-cyan-950/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 h-full">
        {/* Icon */}
        <motion.div
          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 shadow-lg`}
          animate={isHovered ? { rotateY: 360 } : { rotateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          <skill.icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Skill name */}
        <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{skill.description}</p>

        {/* Progress bar */}
        <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          />
        </div>
        <p className="text-right text-cyan-400 text-sm mt-2 font-semibold">{skill.level}%</p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proficient in modern testing frameworks and development tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;