import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, MessageCircle, Camera, Layers, Aperture, ArrowRight  } from 'lucide-react';
import { Link } from 'react-scroll';
import one from './asset/one.jpg';
import two from './asset/UCS_9550re.jpg';
import three from './asset/three.jpg';
import four from './asset/four.jpg';
import five from './asset/five.jpg';
import six from './asset/six.jpg';
import seven from './asset/seven.jpg';
import eight from './asset/eight.jpg';
import nine from './asset/nine.jpg';
import ten from './asset/ten.jpg';
import hero from './asset/download.png'
import HeroSection from './components/hero';
import PortfolioSection from './components/section';
import Footer from './components/footer';
const portfolioSections = [
  {
    category: 'Portraits',
    icon: Aperture,
    image: seven,
    description: 'Transforming products into visual masterpieces',
    details: 'Blending technical precision with artistic vision to showcase your brand\'s unique identity.'
  },
  {
    category: 'Weddings',
    icon: Camera,
    image: ten,
    description: 'Capturing ethereal moments of love with cinematic precision',
    details: 'Transforming wedding memories into timeless, luminous narratives that transcend traditional photography.'
  },
  {
    category: 'Corporate Events',
    icon: Layers,
    image: three,
    description: 'Elevating corporate storytelling through visionary imagery',
    details: 'Crafting visual experiences that capture the essence of your brand\'s innovation and spirit.'
  },
  {
    category: 'Newborn',
    icon: Aperture,
    image: four,
    description: 'Capturing the purest moments of new life',
    details: 'Preserving the innocence and beauty of your newborn through timeless, heartwarming photography that tells a story of love and new beginnings.'
  },
  {
    category: 'Professional',
    icon: Aperture,
    image: five,
    description: 'Elevating your brand with precision and expertise',
    details: 'Delivering high-quality, expertly crafted visuals that reflect the essence of your business, with a keen eye for detail and a commitment to excellence.'
  },
  {
    category: 'Modelling',
    icon: Aperture,
    image: eight,
    description: 'Bringing fashion and personality to life through the lens',
    details: 'Showcasing striking visuals that highlight beauty, confidence, and style, capturing the unique essence of every model with precision and artistry.'
  },
];

const UltimateConceptFuturisticMotion = () => {
  const images = [
    one,
    two,
    hero,
    four
  ]

  const [heroVariant, setHeroVariant] = useState(0);
  const [BG, setBG] = useState(images[0]);


  

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setBG(images[randomIndex]);
    }, 1000);

    return () => clearTimeout(timer);
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroVariant((prev) => (prev + 1) % 3);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const heroBackgrounds = [
    'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
    'bg-gradient-to-br from-blue-900 via-gray-900 to-black',
    'bg-gradient-to-br from-purple-900 via-gray-900 to-black'
  ];

  const heroVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 1,
        type: "spring",
        stiffness: 50
      } 
    },
    exit: { opacity: 0, x: 50 }
  };

  const socialLinks = [
    {
      icon: Instagram,
      link: 'https://www.instagram.com/ultimateconcept01/profilecard/?igsh=MXQycjAwMTVieTJ0Zw==', 
    },
    {
      icon: Facebook,
      link: 'https://www.facebook.com/profile.php?id=61556833987474&mibextid=ZbWKwL', 
    },
    {
      icon: MessageCircle,
      link: 'https://wa.me/message/6KWQEOYJWV5AE1',
    },
  ];

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection
      hero={BG}
      socialLinks={socialLinks}
      heroVariant={heroVariants}
      heroBackgrounds={heroBackgrounds}
      />
      {/* Portfolio Sections */}
      <PortfolioSection portfolioSections={portfolioSections}/>
      {/* Footer */}
      <Footer socialLinks={socialLinks}/>
    </div>
  );
};

export default UltimateConceptFuturisticMotion;