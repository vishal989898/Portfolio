import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle } from '../components/Section';
import { 
  Code2, 
  Layers, 
  Wrench, 
  Terminal, 
  Cpu, 
  Globe 
} from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="text-blue-500" />,
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Java (Core & Advanced)", "C (Basics)", "Python (Basics)"]
  },
  {
    title: "Frameworks",
    icon: <Layers className="text-emerald-500" />,
    skills: ["React JS", "Spring Boot","MySQL"]
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="text-purple-500" />,
    skills: ["GitHub", "MATLAB", "VS Code", "IntelliJ IDEA","Postman"]
  }
];

const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle subtitle="Expertise">Technical Skills</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card p-8 group transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-sm transition-all group-hover:border-white/10 group-hover:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
