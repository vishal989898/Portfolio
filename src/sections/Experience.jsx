import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle } from '../components/Section';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Internship (Radar Technology)",
    company: "DRDO – LRDE",
    location: "Bangalore (On-site)",
    duration: "2 Months",
    description: [
      "Radar Technology fundamentals and defense exposure",
      "MATLAB 2D & 3D radar simulations",
      "Gained deep insights into electronic warfare systems"
    ]
  },
  {
    title: "Java Trainee",
    company: "SyntecxHub",
    location: "Virtual",
    duration: "Training Period",
    description: [
      "Core Java & Object-Oriented Programming (OOP)",
      "Developed mini projects using Java",
      "Focus on clean and modular coding practices"
    ]
  }
];

const Experience = () => {
  return (
    <Section id="experience">
      <SectionTitle subtitle="Professional Journey">Experience</SectionTitle>
      
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#030014] text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase size={18} />
            </div>

            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[45%] glass-card p-6 hover:border-blue-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <div className="flex items-center gap-1 text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                  <Calendar size={12} /> {exp.duration}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-1.5">
                  <Briefcase size={14} className="text-blue-500" />
                  {exp.company}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-blue-500" />
                  {exp.location}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
