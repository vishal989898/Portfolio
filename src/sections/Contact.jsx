import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section, { SectionTitle } from '../components/Section';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

   emailjs.sendForm(
      'service_4cxt0dd',
      'template_ufbodsn',
      formRef.current,
      'L4O2QOq9ZUachZ_vz'
    )
    .then((result) => {
        setIsSubmitting(false);
        setIsSent(true);
        setFormData({ user_name: '', user_email: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
    }, (error) => {
        console.log(error.text);
        setIsSubmitting(false);
        alert("Failed to send message. Please try again or use the email link directly.");
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact">
      <SectionTitle subtitle="Get in touch">Contact Me</SectionTitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-gray-400 text-lg">
            I'm currently looking for new opportunities. Whether you have a question 
            or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-4 bg-white/5 rounded-2xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Email Me</p>
                <a href="mailto:vk98370972@gmail.com" className="text-lg text-white font-bold hover:text-blue-400 transition-colors">
                  vk98370972@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-4 bg-white/5 rounded-2xl text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Location</p>
                <p className="text-lg text-white font-bold">Ghaziabad, Uttar Pradesh</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: <Github size={20} />, link: "https://github.com/vishal989898", label: "Github" },
              { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/vishal-55a069310", label: "LinkedIn" }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.form
                key="contact-form"
                ref={formRef}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="glass-card p-8 space-y-4"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    placeholder="Your message here..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors resize-none" 
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all mt-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 text-center space-y-4 flex flex-col items-center justify-center min-h-[400px]"
              >
                <CheckCircle size={60} className="text-emerald-500" />
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400">Your message has been delivered to Vishal.</p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="text-blue-500 hover:underline text-sm font-medium"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
