import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const InteractiveSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const shimmerVariants = {
    animate: {
      backgroundPosition: ["200% 0%", "-200% 0%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-parchment via-gold-light/20 to-parchment">
        <div className="absolute inset-0 bg-parchment-texture opacity-30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -50, -100],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Geometric Decorations */}
        <motion.div 
          className="absolute top-20 left-10 w-24 h-24 border-2 border-gold/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-32 h-32 border border-gold/15"
          animate={{ rotate: -360, scale: [1, 0.9, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Coming Soon Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-white px-6 py-2 rounded-full text-sm font-elegant font-semibold mb-8"
            variants={floatingVariants}
            animate="animate"
          >
            <motion.div 
              className="w-2 h-2 bg-white rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Coming Soon
          </motion.div>

          {/* Main Game Card */}
          <motion.div 
            className="character-card max-w-4xl mx-auto p-8 lg:p-12 rounded-3xl text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {/* Shimmer Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              style={{ backgroundSize: "200% 100%" }}
              variants={shimmerVariants}
              animate="animate"
            />

            {/* Game Icon */}
            <motion.div 
              className="text-6xl lg:text-8xl mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.5 }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
            >
              🎭
            </motion.div>

            {/* Title */}
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-bronze mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              The <span className="text-gradient-gold">Atheria Challenge</span> Game
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl font-elegant text-bronze/70 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Discover your inner literary character through an immersive fashion and personality experience. 
              Step into the shoes of iconic figures from classical literature.
            </motion.p>

            {/* Features List */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {[
                { icon: "📚", text: "Literary Quiz" },
                { icon: "👗", text: "Fashion Match" },
                { icon: "🎨", text: "Style Discovery" }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center gap-2"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <span className="text-bronze font-elegant font-semibold">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="vintage-button text-white font-serif font-semibold text-lg px-10 py-4 rounded-full inline-flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 4px 15px rgba(212, 175, 55, 0.3)",
                    "0 4px 25px rgba(212, 175, 55, 0.5)",
                    "0 4px 15px rgba(212, 175, 55, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span>Start Your Journey</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              </motion.button>
            </motion.div>

            {/* Progress Indicator */}
            <motion.div 
              className="mt-8 pt-6 border-t border-gold/20"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="flex items-center justify-center gap-4 text-bronze/60 font-elegant">
                <span>Development Progress:</span>
                <div className="w-32 h-2 bg-gold/20 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-gold to-gold-dark rounded-full"
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: "75%" } : {}}
                    transition={{ duration: 2, delay: 1.7, ease: "easeInOut" }}
                  />
                </div>
                <span className="font-semibold">75%</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveSection;