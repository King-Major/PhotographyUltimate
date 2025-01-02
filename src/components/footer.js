import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = ({ socialLinks }) => {
  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative bg-gray-900 pt-24 pb-12 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(24,24,27,0.5),rgba(24,24,27,0.9))]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-4xl font-light text-white mb-4">
                Let's Create
                <span className="block font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Visual Magic
                </span>
              </h3>
              <div className="w-20 h-1 bg-blue-500/30" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Ready to transform your moments into extraordinary visual stories? Let's collaborate to create something truly remarkable together.
            </motion.p>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <a href="mailto:princestepha@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
                <span>princestepha@gmail.com</span>
              </a>
              <a href="tel:+2348106838587" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                <Phone size={20} />
                <span>+(234) 810-683-8587</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={20} />
                <span>Sokoto<br/>Sokoto State</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:pl-12 lg:border-l border-gray-800">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              {/* Social Links Grid */}
              <div className="grid grid-cols-2 gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <social.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {social.platform || social.icon.name}
                        </span>
                        <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20"
              >
                Schedule a Consultation
              </motion.button> */}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500"
        >
          <p>© {new Date().getFullYear()} Ultimate Concept Photography. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;