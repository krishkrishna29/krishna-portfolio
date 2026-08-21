import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const emailAddress = 'krishnaip733@gmail.com';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'krishnaip733@gmail.com',
      href: `mailto:${emailAddress}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6360435780',
      href: 'tel:+916360435780',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out by email, phone, or through my professional profiles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-blue-950/60 via-purple-950/60 to-cyan-950/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Krishna Prakash Isabi</h3>
            <p className="text-gray-300">
              I&apos;m open to opportunities in software testing and Java development.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                whileHover={{ scale: 1.03, y: -4 }}
                className="flex flex-col items-center gap-3 p-4 bg-blue-950/30 border border-cyan-400/30 rounded-xl hover:border-cyan-400/60 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{info.label}</p>
                  <p className="text-white font-semibold break-all">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Connect with me:</p>
            <div className="flex justify-center gap-4">
              {[
                { icon: Github, href: 'https://github.com/krishkrishna29', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/krishkrishna/', label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${emailAddress}`, label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-cyan-400/30 flex items-center justify-center backdrop-blur-sm hover:border-cyan-400/60 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-cyan-400" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-cyan-400/20 text-center"
        >
          <p className="text-gray-400">© 2024 Krishna Prakash Isabi. Built with passion and dedication.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
