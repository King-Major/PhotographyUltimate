import React from 'react';
import { motion } from 'framer-motion';

const PortfolioSection = ({ portfolioSections }) => {
  return (
    <div id="portfolio" className="bg-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.7),rgba(24,24,27,0.9))]" />

      {portfolioSections.map((section, index) => (
        <motion.section
          key={section.category}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative py-24 overflow-hidden"
        >
          <div className="container mx-auto px-6">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="text-5xl font-light text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  {section.category}
                </span>
              </h2>
              <div className="w-24 h-1 bg-blue-500/30 mx-auto" />
            </motion.div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  
                  {/* Image Container */}
                  <div className="relative">
                    <motion.img
                      src={section.image}
                      alt={section.category}
                      className="rounded-2xl shadow-2xl w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    
                    {/* Icon Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg"
                    >
                      <section.icon className="text-white" size={32} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="space-y-8">
                  {/* Quote */}
                  <blockquote className="relative">
                    <div className="absolute -top-4 -left-4 text-6xl text-blue-500/20">"</div>
                    <p className="text-xl text-gray-300 italic relative z-10 pl-8">
                      {section.description}
                    </p>
                  </blockquote>

                  {/* Details */}
                  <div className="prose prose-lg prose-invert">
                    <p className="text-gray-400 leading-relaxed">
                      {section.details}
                    </p>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-3 bg-blue-600/20 hover:bg-blue-600 rounded-lg border border-blue-500/30 hover:border-blue-500 transition-all duration-300"
                  >
                    <span className="text-blue-400 group-hover:text-white transition-colors">
                      View {section.category} Gallery
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default PortfolioSection;