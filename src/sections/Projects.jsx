import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle } from '../components/Section';
import { Github, ExternalLink, Award } from 'lucide-react';

const projects = [
  {
    title: "YouTube Tools Web App",
    tech: ["Spring Boot", "Thymeleaf", "YouTube API v3"],
    description: "A comprehensive tool for YouTube creators featuring SEO tags generator, thumbnail downloader, and video description fetcher.",
    github: "https://github.com/vishal989898/Youtube_Tools",
    features: ["SEO tags generator", "Thumbnail downloader", "Video description fetcher"],
    image: "/assets/youtube-tools.png"
  },
  {
    title: "Job Hook Website",
    tech: ["React JS", "Tailwind CSS", "Mantine UI", "Tabler Icons"],
    description: "Modern job portal with dynamic listings and a clean, responsive component architecture.",
    github: "https://github.com/vishal989898/Job-Hook-",
    features: ["Responsive job portal", "Dynamic job listings", "Clean component architecture"],
    image: "/assets/jobhook.png"
  },
  {
    title: "Emoji Translator Web App",
    tech: ["React JS"],
    description: "Real-time emoji translation app with a smooth and playful user interface.",
    github: "https://github.com/vishal989898/Emoji",
    features: ["Real-time emoji translation", "Smooth UI"],
    image: "/assets/emoji-translator.png"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group glass-card overflow-hidden flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>

        <div className="mt-auto pt-6 flex items-center gap-4">
          <motion.a
            href={project.github}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <Github size={18} /> Code
          </motion.a>
          {project.demo && (
            <motion.a
              href={project.demo}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              <ExternalLink size={18} /> Live
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle subtitle="Featured Work">Projects</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
