import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { User, Award, Code, Target } from 'lucide-react';
import { Card } from './ui/card';

const CounterCard = ({ icon: Icon, value, label, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      className="text-center"
    >
      <div className="mb-3 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-cyan-400/30">
        <Icon className="h-8 w-8 text-cyan-400" />
      </div>
      <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
        {count}+
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </motion.div>
  );
};

const About = () => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-blue-950/40 via-purple-950/40 to-cyan-950/40 backdrop-blur-xl border border-cyan-400/30 p-8 sm:p-12 rounded-3xl shadow-2xl shadow-blue-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <a
                  href="https://in.linkedin.com/in/krishkrishna"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Krishna Prakash Isabi's LinkedIn profile"
                  className="relative w-64 h-64 rounded-full focus:outline-none focus:ring-4 focus:ring-cyan-400/60"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse" />
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-cyan-400/50 flex items-center justify-center overflow-hidden hover:border-cyan-300 transition-colors">
                    <User className="w-32 h-32 text-white" />
                  </div>
                </a>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  Krishna Prakash Isabi
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I completed my <span className="text-cyan-400 font-semibold">BCA (Communication & Computer Science)</span> from 2021 to 2024, building a strong foundation in programming and software development.
                  </p>
                  <p>
                    Currently, I'm undergoing specialized training in <span className="text-purple-400 font-semibold">Software Testing at QSpiders</span>, where I'm mastering both manual and automation testing techniques.
                  </p>
                  <p>
                    I'm passionate about <span className="text-blue-400 font-semibold">Automation Testing & Java Development</span>, with expertise in Selenium, Oracle SQL, and JIRA for comprehensive software quality assurance.
                  </p>
                  <p>
                    My goal is to work in a reputed company like <span className="text-cyan-400 font-semibold">Wipro</span>, where I can contribute to building robust, high-quality software solutions.
                  </p>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <CounterCard icon={Code} value="10" label="Projects Completed" delay={0} />
          <CounterCard icon={Award} value="6" label="Skills Mastered" delay={0.1} />
          <CounterCard icon={Target} value="5" label="Certifications" delay={0.2} />
          <CounterCard icon={User} value="100" label="Test Cases Written" delay={0.3} />
        </div>
      </div>
    </section>
  );
};

export default About;
