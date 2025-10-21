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
      {/* Background Pattern with 3D Bubbles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-parchment-texture"></div>
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 border border-gold/30 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 border border-gold/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-gold/20 rounded-full blur-sm"></div>
        <div className="absolute top-1/4 right-1/4 w-10 h-10 bg-gold-light/20 rounded-full blur-sm"></div>
      </div>

      {/* 3D Footer Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Footer Large Bubbles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`footer-bubble-large-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${20 + (i * 25)}%`,
              top: `${60 + Math.random() * 40}%`,
              width: `${25 + Math.random() * 35}px`,
              height: `${25 + Math.random() * 35}px`,
              background: `radial-gradient(circle at 40% 40%, 
                rgba(255, 255, 255, 0.6) 0%, 
                rgba(212, 175, 55, 0.3) 35%, 
                rgba(139, 69, 19, 0.1) 70%, 
                transparent 100%)`,
              backdropFilter: 'blur(2px)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
            }}
            animate={{
              y: [0, -60, -120, -180],
              x: [0, Math.sin(i * 3) * 40, Math.cos(i * 2) * 25, 0],
              scale: [0.5, 1.1, 1.4, 0],
              opacity: [0, 0.7, 0.5, 0],
              rotateX: [0, 180, 360],
              rotateY: [0, 90, 180],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeOut"
            }}
          />
        ))}
        
        {/* Footer Medium Bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`footer-bubble-medium-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${80 + Math.random() * 20}%`,
              width: `${12 + Math.random() * 18}px`,
              height: `${12 + Math.random() * 18}px`,
              background: `radial-gradient(circle at 35% 35%, 
                rgba(255, 255, 255, 0.7) 0%, 
                rgba(244, 228, 166, 0.4) 45%, 
                rgba(212, 175, 55, 0.2) 75%, 
                transparent 100%)`,
              backdropFilter: 'blur(1px)',
              border: '0.5px solid rgba(244, 228, 166, 0.3)',
            }}
            animate={{
              y: [0, -90, -180, -270],
              x: [0, Math.sin(i * 4) * 35, Math.cos(i * 3) * 20, 0],
              scale: [0.4, 0.8, 1.1, 0],
              opacity: [0, 0.9, 0.6, 0],
              rotateZ: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Footer Small Bubbles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`footer-bubble-small-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${90 + Math.random() * 10}%`,
              width: `${5 + Math.random() * 10}px`,
              height: `${5 + Math.random() * 10}px`,
              background: `radial-gradient(circle at 30% 30%, 
                rgba(255, 255, 255, 0.9) 0%, 
                rgba(212, 175, 55, 0.5) 55%, 
                transparent 100%)`,
              filter: 'blur(0.3px)',
              border: '0.2px solid rgba(255, 255, 255, 0.4)',
            }}
            animate={{
              y: [0, -120, -240, -360],
              x: [0, Math.sin(i * 5) * 20, 0],
              scale: [0.3, 0.6, 0.9, 0],
              opacity: [0, 1, 0.7, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Decorative Divider */}
        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-4"
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
            className="mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3 
              className="text-2xl lg:text-3xl font-serif font-bold text-gradient-gold mb-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              🕐etheria 2025
            </motion.h3>
            <motion.p 
              className="text-gold-light font-elegant text-base"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Where Fashion Meets Literature
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center items-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                className={`group relative flex items-center justify-center w-10 h-10 bg-gold/20 hover:bg-gold/30 rounded-full border border-gold/30 hover:border-gold transition-all duration-300 ${social.hoverColor}`}
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
                <span className="text-lg text-gold group-hover:text-white transition-colors duration-300">
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

          {/* Copyright and Credits */}
          <motion.div 
            className="border-t border-gold/20 pt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.p 
              className="text-gold-light/70 font-elegant text-sm mb-1"
              whileHover={{ color: "#f4e4a6" }}
              transition={{ duration: 0.3 }}
            >
              © 2025 Heritage Fashion Club | Designed for Atheria Event
            </motion.p>
            <motion.p 
              className="text-gold-light/50 font-elegant text-xs"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Crafted with passion for literary fashion enthusiasts
            </motion.p>
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