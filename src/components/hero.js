import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const HeroSection = ({ hero, socialLinks, heroVariant, heroBackgrounds }) => {
  return (
    <section className={`relative min-h-screen ${heroBackgrounds[heroVariant]} transition-all duration-1000`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-10">
        <img 
          src={hero} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 h-screen">
        <div className="h-full flex flex-col justify-center max-w-4xl">
          {/* Decorative Element */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-1 bg-blue-400 mb-8"
          />

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-7xl md:text-8xl font-light tracking-tighter text-white mb-6"
          >
            <span className="font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              ULTIMATE
            </span>
            <br />
            <span>Concept Studios</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl text-blue-100 max-w-2xl leading-relaxed mb-12"
          >
            Crafting visual narratives that transcend the boundaries of traditional photography, revealing stories beyond the frame.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-blue-500 text-white rounded-lg flex items-center gap-2 transition-all hover:bg-blue-600"
              >
                Explore Portfolio
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
              </motion.button>
            </Link>
            <Link
              to="footer"
              smooth={true}
              duration={100}
            >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all"
            >
              Contact Us
            </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex gap-8"
          >
            {/* {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#60A5FA' }}
                className="text-white/80 hover:text-white transition-colors"
              >
                <social.icon size={24} strokeWidth={1.5} />
              </motion.a>
            ))} */}
          </motion.div>

          {/* Floating Camera Icon */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-12 right-12 bg-blue-500/30 backdrop-blur-xl p-6 rounded-full"
          >
            <Camera className="text-white" size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;