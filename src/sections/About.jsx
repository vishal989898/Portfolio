import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle } from '../components/Section';
import { GraduationCap, Award, Zap } from 'lucide-react';

const About = () => {
  return (
    <Section id="about">
      <SectionTitle subtitle="Information">About Me</SectionTitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-gray-400 text-lg leading-relaxed">
            I am a dedicated Computer Science Engineering student with a strong foundation in Java Spring Boot. 
            My journey in tech is driven by curiosity and building responsive web applications using Java Spring Boot and React Js with efficient code and clean architecture.
          </p>
          
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <Zap className="text-blue-500" size={20} /> Strengths
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Quick Learner', 'Flexible', 'Problem Solver', 'Curious'].map((strength) => (
                <span key={strength} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 space-y-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
              <GraduationCap size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Bachelor of Technology</h4>
              <p className="text-blue-400 text-sm mb-1">Computer Science & Engineering</p>
              <p className="text-gray-500 text-sm">College of Engineering and Rural Technology, Meerut</p>
              <div className="mt-3 inline-block px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs font-bold">
                CGPA: 8.59 (2022–2026)
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
