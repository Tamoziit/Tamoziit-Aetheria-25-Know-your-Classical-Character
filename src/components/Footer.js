import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  const socialLinks = [
    {
      name: "Instagram",
      icon: "📷",
      href: "#",
      hoverColor: "hover:text-pink-500"
    },
    {
      name: "Website",
      icon: "🌐",
      href: "#",
      hoverColor: "hover:text-blue-500"
    },
    {
      name: "Email",
      icon: "📧",
      href: "#",
      hoverColor: "hover:text-green-500"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      href: "#",
      hoverColor: "hover:text-blue-600"
    }
  ];

  return (
    <footer ref={ref} className="relative overflow-hidden bg-gradient-to-br from-bronze to-bronze/90">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-parchment-texture"></div>
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 border border-gold/30 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 border border-gold/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-gold/20 rounded-full blur-sm"></div>
        <div className="absolute top-1/4 right-1/4 w-10 h-10 bg-gold-light/20 rounded-full blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Decorative Divider */}
        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-12"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Main Footer Content */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Brand Section */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3 
              className="text-3xl lg:text-4xl font-serif font-bold text-gradient-gold mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Atheria 2025
            </motion.h3>
            <motion.p 
              className="text-gold-light font-elegant text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Where Fashion Meets Literature
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center items-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                className={`group relative flex items-center justify-center w-12 h-12 bg-gold/20 hover:bg-gold/30 rounded-full border border-gold/30 hover:border-gold transition-all duration-300 ${social.hoverColor}`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  boxShadow: "0 8px 25px rgba(212, 175, 55, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              >
                <span className="text-xl text-gold group-hover:text-white transition-colors duration-300">
                  {social.icon}
                </span>
                
                {/* Tooltip */}
                <motion.div 
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gold text-bronze text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                  initial={{ opacity: 0, y: 5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  {social.name}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          {/* Heritage Fashion Club Section */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.h4 
              className="text-xl font-serif font-semibold text-gold mb-3"
              whileHover={{ scale: 1.02 }}
            >
              The Heritage Fashion Club
            </motion.h4>
            <motion.p 
              className="text-gold-light/80 font-elegant max-w-2xl mx-auto leading-relaxed"
              whileHover={{ color: "#f4e4a6" }}
              transition={{ duration: 0.3 }}
            >
              Celebrating the timeless intersection of literature, culture, and fashion through innovative events and experiences.
            </motion.p>
          </motion.div>

          {/* Copyright and Credits */}
          <motion.div 
            className="border-t border-gold/20 pt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.p 
              className="text-gold-light/70 font-elegant text-sm lg:text-base mb-2"
              whileHover={{ color: "#f4e4a6" }}
              transition={{ duration: 0.3 }}
            >
              © 2025 Heritage Fashion Club | Designed for Atheria Event
            </motion.p>
            <motion.p 
              className="text-gold-light/50 font-elegant text-xs lg:text-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Crafted with passion for literary fashion enthusiasts
            </motion.p>
          </motion.div>

          {/* Decorative Quote */}
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.blockquote 
              className="text-gold-light/60 font-elegant italic text-sm lg:text-base max-w-xl mx-auto"
              whileHover={{ 
                scale: 1.02, 
                color: "#d4af37",
                transition: { duration: 0.3 }
              }}
            >
              "In every thread lies a story, in every style lives a character."
            </motion.blockquote>
          </motion.div>
        </motion.div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold/40 rounded-full"
              style={{
                left: `${20 + (i * 25)}%`,
                top: `${30 + Math.sin(i) * 20}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;