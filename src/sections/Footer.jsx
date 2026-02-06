import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/5 bg-[#030014]">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="flex items-center gap-6">
          <motion.a
            href="https://github.com/vishal989898"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Github size={22} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/vishal-55a069310"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Linkedin size={22} />
          </motion.a>
        </div>

        <div className="text-center space-y-2">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Designed & Built by <span className="text-white font-bold">Vishal</span>
          </p>
          <p className="text-gray-600 text-sm">
            © {currentYear} • All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
