import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const projects = [
  {
    title: 'Selenium Automation Testing Framework',
    description: 'Developed a comprehensive automation testing framework using Selenium WebDriver with Page Object Model (POM) design pattern. Implemented data-driven testing with TestNG and generated detailed HTML reports.',
    techStack: ['Java', 'Selenium', 'TestNG', 'Maven', 'POM'],
    github: 'https://github.com/krishkrishna29/Flipcart-India',
    demo: '#',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'College Web Application Testing',
    description: 'Executed end-to-end manual and automation testing for a college management system. Created 150+ test cases covering functional, integration, and regression testing. Reported and tracked 50+ bugs using JIRA.',
    techStack: ['Manual Testing', 'JIRA', 'Test Cases', 'Bug Tracking'],
    github: 'https://github.com/krishkrishna29/Automation-Project',
    demo: '#',
    gradient: 'from-purple-600 to-blue-600',
  },
  {
    title: 'SQL Database Management System',
    description: 'Designed and implemented a robust database for student management system using Oracle SQL. Performed database testing including data validation, integrity checks, and query optimization.',
    techStack: ['Oracle SQL', 'Database Testing', 'Data Validation'],
    github: 'https://github.com/krishkrishna29/ActiTime_Project',
    demo: '#',
    gradient: 'from-cyan-600 to-purple-600',
  },
  {
    title: 'API Testing Project',
    description: 'Performed comprehensive API testing using Postman and RestAssured. Validated REST APIs for various endpoints, tested authentication, and automated API test suites with detailed assertions.',
    techStack: ['Postman', 'RestAssured', 'API Testing', 'Java'],
    github: 'https://github.com/krishkrishna29',
    demo: '#',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    title: 'Test Case Repository',
    description: 'Created a comprehensive repository of test cases for e-commerce applications. Includes functional, UI, security, and performance test scenarios with detailed steps and expected results.',
    techStack: ['Test Design', 'Documentation', 'QA Best Practices'],
    github: 'https://github.com/krishkrishna29',
    demo: '#',
    gradient: 'from-purple-600 to-cyan-600',
  },
  {
    title: 'Bug Tracking Dashboard',
    description: 'Developed a bug tracking and reporting system integrated with JIRA. Tracked defect lifecycle, generated metrics reports, and implemented automated notifications for critical bugs.',
    techStack: ['JIRA', 'Bug Tracking', 'Reporting', 'Analytics'],
    github: 'https://github.com/krishkrishna29',
    demo: '#',
    gradient: 'from-cyan-600 to-blue-600',
  },
];

const ProjectCard = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-[400px] cursor-pointer"
      style={{ perspective: '1000px' }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full rounded-2xl"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <div className="relative w-full h-full bg-gradient-to-br from-blue-950/60 via-purple-950/60 to-cyan-950/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 flex flex-col">
            {/* Gradient overlay */}
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient} rounded-t-2xl`} />

            <h3 className="text-2xl font-bold text-white mb-3 mt-2">{project.title}</h3>
            <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <Badge
                  key={i}
                  className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-cyan-400/30 text-cyan-400 hover:bg-blue-600/30"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-4">Hover to see actions</p>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full rounded-2xl"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className={`relative w-full h-full bg-gradient-to-br ${project.gradient} rounded-2xl p-6 flex flex-col items-center justify-center`}>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">{project.title}</h3>

            <div className="space-y-4 w-full max-w-xs">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, '_blank');
                  }}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </motion.div>

            </div>

            <p className="text-white/80 text-sm mt-6">Click to open links</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my testing and development projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
