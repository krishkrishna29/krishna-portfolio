import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'BCA (Communication & Computer Science)',
    institution: 'University',
    period: '2021 – 2024',
    description: 'Completed Bachelor of Computer Applications with focus on communication technologies and computer science fundamentals. Built strong foundation in programming, data structures, and software development.',
    icon: GraduationCap,
  },
  {
    degree: 'Software Testing Course',
    institution: 'QSpiders',
    period: 'Current',
    description: 'Comprehensive training in Manual and Automation Testing. Mastering Selenium WebDriver, Java, TestNG, and industry-standard testing methodologies and best practices.',
    icon: Award,
  },
];

const TimelineItem = ({ item, index, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content */}
      <div className="flex-1">
        <motion.div
          whileHover={{ scale: 1.02, rotateY: 5 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative bg-gradient-to-br from-blue-950/60 via-purple-950/60 to-cyan-950/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 shadow-xl"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all" />

          <div className="relative">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                <p className="text-cyan-400 font-semibold">{item.institution}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-3">{item.description}</p>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-cyan-400/30 rounded-lg">
              <p className="text-cyan-400 font-semibold">{item.period}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="relative flex-shrink-0 hidden md:flex">
        <motion.div
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          className="relative z-10"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(34, 211, 238, 0.5)',
                '0 0 40px rgba(34, 211, 238, 0.8)',
                '0 0 20px rgba(34, 211, 238, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-[#0f0f1a]"
          />
        </motion.div>
      </div>

      {/* Spacer for alignment */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Education & Training
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and professional training
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 hidden md:block transform -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;