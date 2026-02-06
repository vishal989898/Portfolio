import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle } from '../components/Section';
import { FileText, Download, Eye } from 'lucide-react';

const Resume = () => {
  const resumeUrl = "/assets/Vishal_Resume.pdf";

  return (
    <Section id="resume" className="bg-blue-500/[0.02]">
      <SectionTitle subtitle="Curriculum Vitae">Resume</SectionTitle>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 overflow-hidden relative"
        >
          {/* Decorative background icon */}
          <FileText size={200} className="absolute -right-10 -bottom-10 text-white/[0.03] rotate-12" />

          <div className="relative shrink-0">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <FileText size={64} className="text-blue-500 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Looking for my detailed profile?</h3>
            <p className="text-gray-400 leading-relaxed">
              Download my complete resume to see my detailed work experience, 
              projects, and technical certifications. Available in PDF format.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20"
              >
                <Eye size={18} /> View Resume
              </motion.a>
              <motion.a
                href={resumeUrl}
                download="Vishal_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold flex items-center gap-2 transition-all"
              >
                <Download size={18} /> Download
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Resume;
