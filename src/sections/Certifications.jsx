import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle } from '../components/Section';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    name: "Six Sigma Yellow Belt",
    org: "College of Engineering and Rural Technology",
    link: "https://www.linkedin.com/posts/vishal-55a069310_sixsigma-yellowbelt-qualitymanagement-activity-7425501968179163136-4Pb4?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAE8H5dYBwVj0Opnvh1GOlJBXc1pVOO-5WBc&utm_campaign=copy_link"
  },
  {
    name: "ReactJS – WSCube Tech",
    org: "WSCube Tech",
    link: "https://www.linkedin.com/posts/vishal-55a069310_reactjs-webdevelopment-ecommerce-activity-7398323925128105984-Oqjh?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAE8H5dYBwVj0Opnvh1GOlJBXc1pVOO-5WBc&utm_campaign=copy_link"
  },
  {
    name: "SkillEcted Full Stack Development Roadmap",
    org: "SkillEcted",
    link: "https://www.linkedin.com/posts/vishal-55a069310_webinar-fullstackdevelopment-learningjourney-activity-7344542876992720896-5ynd?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAE8H5dYBwVj0Opnvh1GOlJBXc1pVOO-5WBc&utm_campaign=copy_link"
  },
  {
    name: "Yuva AI for All – India AI",
    org: "India AI",
    link: "https://www.linkedin.com/posts/vishal-55a069310_artificialintelligence-aiforall-upskilling-activity-7417816174308143104-GNGg?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAE8H5dYBwVj0Opnvh1GOlJBXc1pVOO-5WBc&utm_campaign=copy_link"
  },
  {
    name: "Techno Philia",
    org: "Dewan Vs Institute Of Engineering and Technoogy",
    link: "https://www.linkedin.com/posts/vishal-55a069310_technophilia-projectexpo-technicalskills-activity-7425502201965400064-Cu2A?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAE8H5dYBwVj0Opnvh1GOlJBXc1pVOO-5WBc&utm_campaign=copy_link"
  },
  {
    name: "Hack'N Hustle",
    org: "College of engineering and Rural Technology",
    link: "https://www.linkedin.com/posts/vishal-55a069310_hackathon-hacknhustle-problemsolving-activity-7425502349047046144-XYsj?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAE8H5dYBwVj0Opnvh1GOlJBXc1pVOO-5WBc&utm_campaign=copy_link"
  },
  {
    name: "Master Github",
    org: "WSCUBE TECH",
    link: "https://www.linkedin.com/posts/vishal-55a069310_fullstackdevelopment-masterclass-wscubetech-activity-7401654047843524608-thTn?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAE8H5dYBwVj0Opnvh1GOlJBXc1pVOO-5WBc&utm_campaign=copy_link"
  }
];

const CertificateCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ 
      rotateY: 5, 
      rotateX: -5,
      y: -5,
      boxShadow: "0 20px 40px -20px rgba(59,130,246,0.3)"
    }}
    className="glass-card p-6 flex flex-col justify-between group cursor-default transition-all duration-300 hover:border-blue-500/40"
  >
    <div className="mb-8">
      <div className="p-3 bg-blue-500/10 rounded-xl w-fit text-blue-500 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform">
        <Award size={24} />
      </div>
      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{cert.name}</h3>
      <p className="text-sm text-gray-500">{cert.org}</p>
    </div>
    
    <motion.a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 5 }}
      className="flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors"
    >
      View Certificate <ExternalLink size={14} />
    </motion.a>
  </motion.div>
);

const Certifications = () => {
  return (
    <Section id="certifications">
      <SectionTitle subtitle="Achievements">Certifications</SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 [perspective:1000px]">
        {certificates.map((cert, idx) => (
          <CertificateCard key={cert.name} cert={cert} index={idx} />
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
