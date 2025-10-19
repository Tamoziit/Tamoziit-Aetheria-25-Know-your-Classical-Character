import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const characters = [
    {
      name: "Cleopatra",
      title: "Regal",
      description: "The ultimate embodiment of royal elegance and power",
      image: "👑",
      color: "from-purple-600 to-gold"
    },
    {
      name: "Sherlock Holmes",
      title: "Intellectual", 
      description: "Sharp wit meets sophisticated Victorian style",
      image: "🕵️",
      color: "from-blue-800 to-gray-600"
    },
    {
      name: "Juliet",
      title: "Romantic",
      description: "Timeless beauty and passionate grace",
      image: "🌹",
      color: "from-rose-500 to-pink-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 parchment-bg relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gold/30 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-gold/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gold-light/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-bronze mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About the <span className="text-gradient-gold">Show</span>
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-gold mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          />
          
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl font-elegant text-bronze/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Atheria is where the grandeur of classical literature comes alive through fashion. 
            Step into a world where iconic characters from timeless tales inspire contemporary elegance, 
            creating a unique fusion of literary heritage and modern style.
          </motion.p>
        </motion.div>

        {/* Character Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {characters.map((character, index) => (
            <motion.div
              key={character.name}
              variants={cardVariants}
              className="character-card rounded-2xl p-8 lg:p-10 text-center group cursor-pointer"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Character Icon */}
              <motion.div 
                className="text-6xl lg:text-7xl mb-6"
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {character.image}
              </motion.div>

              {/* Character Name */}
              <motion.h3 
                className="text-2xl lg:text-3xl font-serif font-bold text-bronze mb-2"
                whileHover={{ color: "#d4af37" }}
              >
                {character.name}
              </motion.h3>

              {/* Character Title */}
              <motion.div 
                className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${character.color} text-white font-elegant font-semibold mb-4`}
                whileHover={{ scale: 1.05 }}
              >
                {character.title}
              </motion.div>

              {/* Character Description */}
              <motion.p 
                className="text-bronze/70 font-elegant text-base lg:text-lg leading-relaxed"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {character.description}
              </motion.p>

              {/* Hover Effect Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-gold/5 to-gold-light/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Quote */}
        <motion.div 
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.blockquote 
            className="text-xl lg:text-2xl font-elegant italic text-bronze/60 max-w-3xl mx-auto"
            whileHover={{ scale: 1.02, color: "#d4af37" }}
            transition={{ duration: 0.3 }}
          >
            "Fashion fades, but style is eternal. Literature lives forever, and when they meet, magic happens."
          </motion.blockquote>
          <motion.div 
            className="w-16 h-0.5 bg-gold mx-auto mt-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;