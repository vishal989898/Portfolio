import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export const SectionTitle = ({ children, subtitle }) => {
  return (
    <div className="mb-8 md:mb-12">
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-500 font-medium tracking-wider uppercase text-sm mb-2"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold text-white tracking-tight"
      >
        {children}
      </motion.h2>
    </div>
  );
};

export default Section;
