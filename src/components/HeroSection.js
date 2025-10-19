import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden parchment-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold-light/20"></div>
        <div className="absolute inset-0 bg-parchment-texture"></div>
      </div>


      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        {/* Main Title with Logo */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col items-center justify-center mb-6"
        >
          {/* Fashion Clock Logo */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0, rotate: -360 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 2,
              ease: "easeOut",
              delay: 0.3
            }}
          >
            <div className="relative">
              {/* Clock Container */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52">
                
                {/* Clock Face */}
                <div className="absolute inset-0 border-4 border-gold rounded-full bg-gradient-to-br from-gold/20 via-parchment/30 to-gold-light/20 shadow-2xl">
                  
                  {/* Hour Markers */}
                  <div className="absolute inset-2 rounded-full">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-4 bg-gold rounded-full origin-bottom"
                        style={{
                          left: '50%',
                          top: '8px',
                          transform: `translateX(-50%) rotate(${i * 30}deg)`,
                          transformOrigin: '50% calc(100% + 60px)'
                        }}
                      />
                    ))}
                  </div>

                  {/* Fashion Girl Silhouette in Center */}
                  <div className="absolute inset-8 flex items-center justify-center">
                    <svg className="w-full h-full text-gold" viewBox="0 0 100 140" fill="currentColor">
                      {/* Head */}
                      <circle cx="50" cy="20" r="8" />
                      
                      {/* Hair/Hat */}
                      <path d="M42 15 Q50 10 58 15 Q60 12 58 18 Q50 22 42 18 Q40 12 42 15" />
                      
                      {/* Body & Dress */}
                      <path d="M50 28 Q48 32 46 40 Q44 50 42 65 Q40 80 38 95 Q36 110 34 125
                               L38 125 Q42 120 46 115 L54 115 Q58 120 62 125 L66 125
                               Q64 110 62 95 Q60 80 58 65 Q56 50 54 40 Q52 32 50 28" />
                      
                      {/* Arms */}
                      <path d="M46 35 Q40 38 35 42 Q38 45 44 42 Q46 40 48 38" />
                      <path d="M54 35 Q60 38 65 42 Q62 45 56 42 Q54 40 52 38" />
                      
                      {/* Legs/Heels */}
                      <rect x="42" y="125" width="3" height="8" />
                      <rect x="55" y="125" width="3" height="8" />
                      <ellipse cx="43.5" cy="135" rx="4" ry="2" />
                      <ellipse cx="56.5" cy="135" rx="4" ry="2" />
                    </svg>
                  </div>

                  {/* Clock Hands */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    {/* Hour Hand */}
                    <div className="absolute w-1 h-12 bg-gold rounded-full" 
                         style={{ bottom: '50%', left: '50%', transformOrigin: 'bottom', transform: 'translateX(-50%)' }} />
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  >
                    {/* Minute Hand */}
                    <div className="absolute w-0.5 h-16 bg-gold rounded-full" 
                         style={{ bottom: '50%', left: '50%', transformOrigin: 'bottom', transform: 'translateX(-50%)' }} />
                  </motion.div>

                  {/* Center Dot */}
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-gold rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10" />
                </div>

                {/* Vintage Corner Elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-gold/60"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-gold/60"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-gold/60"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-gold/60"></div>

                {/* Outer Glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(212, 175, 55, 0.3)',
                      '0 0 50px rgba(212, 175, 55, 0.5)',
                      '0 0 30px rgba(212, 175, 55, 0.3)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>

              {/* Brand Name */}
              <motion.div
                className="text-center mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
              >
                <p className="text-xs sm:text-sm font-elegant text-gold/80 tracking-[0.3em]">
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold">
            <div className="overflow-hidden">
              <motion.span 
                className="text-gradient-gold inline-block"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ 
                  duration: 2,
                  ease: "easeOut",
                  delay: 0.8
                }}
              >
                Aetheria
              </motion.span>
            </div>
            <motion.span 
              className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-elegant font-normal text-bronze mt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut",
                delay: 1.5
              }}
            >
              2025
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          variants={fadeInUp}
          className="text-xl sm:text-2xl lg:text-3xl font-elegant italic text-bronze mb-4"
        >
          Where Fashion Meets Literature
        </motion.p>

        {/* Organizer */}
        <motion.p 
          variants={fadeInUp}
          className="text-lg sm:text-xl font-elegant text-bronze/80 mb-12"
        >
          Presented by <span className="font-semibold text-gold">The Heritage Fashion Club</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeInUp}>
          <motion.button
            className="vintage-button text-white font-serif font-semibold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full inline-flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Play Now</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-0 h-0 border-l-[8px] border-l-white border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent"
            />
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute -top-20 -left-20 w-40 h-40 border border-gold/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-32 h-32 border border-gold/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-gold rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;