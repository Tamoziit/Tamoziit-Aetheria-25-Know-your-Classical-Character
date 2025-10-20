import React, { useState } from 'react';
import { motion } from 'framer-motion';
import QuestionPage from './QuestionPage';
import ResultPage from './ResultPage';
import LeaderboardPage from './LeaderboardPage';

const HeroSection = () => {
  const [currentView, setCurrentView] = useState('hero'); // 'hero', 'question', 'result', 'leaderboard'
  const [quizResult, setQuizResult] = useState(null);

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
      {/* Enhanced 3D Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold-light/20"></div>
        <div className="absolute inset-0 bg-parchment-texture"></div>
      </div>

      {/* 3D Floating Bubbles - Large */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`bubble-large-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.sin(i * 2) * 30}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: `radial-gradient(circle at 30% 30%, 
                rgba(255, 255, 255, 0.8) 0%, 
                rgba(212, 175, 55, 0.3) 30%, 
                rgba(212, 175, 55, 0.1) 70%, 
                transparent 100%)`,
              backdropFilter: 'blur(2px)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
            }}
            animate={{
              y: [0, -100, -200, -300],
              x: [0, Math.sin(i * 3) * 50, Math.cos(i * 2) * 30, 0],
              scale: [0.5, 1, 1.2, 0],
              opacity: [0, 0.8, 0.6, 0],
              rotateX: [0, 180, 360],
              rotateY: [0, 90, 180],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* 3D Floating Bubbles - Medium */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`bubble-medium-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${80 + Math.random() * 20}%`,
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              background: `radial-gradient(circle at 25% 25%, 
                rgba(255, 255, 255, 0.9) 0%, 
                rgba(244, 228, 166, 0.4) 40%, 
                rgba(139, 69, 19, 0.2) 80%, 
                transparent 100%)`,
              backdropFilter: 'blur(1px)',
              border: '0.5px solid rgba(244, 228, 166, 0.3)',
            }}
            animate={{
              y: [0, -150, -300, -450],
              x: [0, Math.sin(i * 4) * 40, Math.cos(i * 3) * 20, 0],
              scale: [0.3, 0.8, 1.1, 0],
              opacity: [0, 1, 0.7, 0],
              rotateZ: [0, 180, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* 3D Floating Bubbles - Small */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`bubble-small-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${90 + Math.random() * 10}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: `radial-gradient(circle at 20% 20%, 
                rgba(255, 255, 255, 1) 0%, 
                rgba(212, 175, 55, 0.5) 50%, 
                transparent 100%)`,
              filter: 'blur(0.5px)',
              border: '0.2px solid rgba(255, 255, 255, 0.4)',
            }}
            animate={{
              y: [0, -200, -400, -600],
              x: [0, Math.sin(i * 5) * 30, 0],
              scale: [0.2, 0.6, 0.9, 0],
              opacity: [0, 1, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* 3D Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i * 2) * 20, 0],
              rotateX: [0, 360],
              rotateY: [0, 180],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <div 
              className={`w-6 h-6 bg-gradient-to-br ${
                i % 3 === 0 ? 'from-gold/40 to-gold-light/20' :
                i % 3 === 1 ? 'from-bronze/30 to-gold/20' :
                'from-gold-light/30 to-bronze/20'
              } rounded-full shadow-lg backdrop-blur-sm border border-gold/20`}
              style={{
                transform: `perspective(100px) rotateX(${i * 15}deg) rotateY(${i * 20}deg)`,
                filter: 'drop-shadow(0 4px 8px rgba(212, 175, 55, 0.2))'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* 3D Floating Books/Pages */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`book-${i}`}
            className="absolute"
            style={{
              left: `${10 + (i * 20)}%`,
              top: `${30 + (i * 15)}%`,
            }}
            animate={{
              y: [0, -25, 0],
              rotateZ: [0, 15, -15, 0],
              rotateX: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut"
            }}
          >
            <div 
              className="w-8 h-10 bg-gradient-to-b from-parchment/60 to-gold/40 rounded-sm shadow-xl border border-gold/30"
              style={{
                transform: `perspective(200px) rotateY(${i * 10}deg)`,
                background: `linear-gradient(135deg, 
                  rgba(244, 228, 166, 0.6) 0%, 
                  rgba(212, 175, 55, 0.4) 100%)`,
                boxShadow: '0 8px 20px rgba(0,0,0,0.1), inset 0 1px 3px rgba(255,255,255,0.2)'
              }}
            >
              <div className="w-full h-1 bg-gold/50 mt-1 rounded"></div>
              <div className="w-3/4 h-0.5 bg-bronze/40 mt-1 ml-1 rounded"></div>
              <div className="w-2/3 h-0.5 bg-bronze/30 mt-1 ml-1 rounded"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3D Spiral Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`spiral-${i}`}
            className="absolute w-3 h-3"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [
                Math.cos(i * (Math.PI / 6)) * 150,
                Math.cos(i * (Math.PI / 6) + Math.PI) * 200,
                Math.cos(i * (Math.PI / 6)) * 150
              ],
              y: [
                Math.sin(i * (Math.PI / 6)) * 150,
                Math.sin(i * (Math.PI / 6) + Math.PI) * 200,
                Math.sin(i * (Math.PI / 6)) * 150
              ],
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.8, 0.2],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          >
            <div 
              className="w-full h-full bg-gradient-radial from-gold/60 to-transparent rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(212, 175, 55, 0.6) 0%, transparent 70%)`,
                filter: 'blur(1px)'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Enhanced Original Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Content with 3D Perspective */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        variants={staggerChildren}
        initial="initial"
        animate={["animate", {
          y: [0, -10, 0],
          rotateX: [0, 1, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }]}
        style={{ 
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
        whileHover={{
          rotateX: 2,
          rotateY: 2,
          transition: { duration: 0.3 }
        }}
      >
        {/* Main Title with Logo */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col items-center justify-center mb-6"
        >
          {/* Fashion Clock Logo */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0, rotate: -360, rotateY: -180 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0, 
              rotateY: 0,
              rotateX: [0, 5, 0],
              rotateZ: [0, 2, 0]
            }}
            transition={{ 
              duration: 2,
              ease: "easeOut",
              delay: 0.3,
              rotateX: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotateZ: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{
              scale: 1.1,
              rotateY: 15,
              transition: { duration: 0.3 }
            }}
            style={{
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="relative">
              {/* Clock Container */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52">
                
                {/* Clock Face with 3D Effect */}
                <div 
                  className="absolute inset-0 border-4 border-gold rounded-full bg-gradient-to-br from-gold/20 via-parchment/30 to-gold-light/20 shadow-2xl"
                  style={{
                    transform: 'translateZ(20px)',
                    boxShadow: `
                      0 0 50px rgba(212, 175, 55, 0.3),
                      inset 0 0 20px rgba(255, 255, 255, 0.1),
                      0 10px 30px rgba(0, 0, 0, 0.2)
                    `,
                    background: `
                      conic-gradient(from 0deg, 
                        rgba(212, 175, 55, 0.2) 0deg,
                        rgba(244, 228, 166, 0.3) 90deg,
                        rgba(212, 175, 55, 0.2) 180deg,
                        rgba(244, 228, 166, 0.3) 270deg,
                        rgba(212, 175, 55, 0.2) 360deg
                      )
                    `
                  }}
                >
                  
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

        {/* CTA Button with 3D Effects */}
        <motion.div variants={fadeInUp}>
          <motion.button
            onClick={() => setCurrentView('question')}
            className="vintage-button text-white font-serif font-semibold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full inline-flex items-center gap-3 group"
            whileHover={{ 
              scale: 1.05,
              rotateX: -5,
              rotateY: 5,
              z: 50,
              transition: { duration: 0.3 }
            }}
            whileTap={{ 
              scale: 0.95,
              rotateX: 5,
              rotateY: -5
            }}
            animate={{
              y: [0, -3, 0],
              boxShadow: [
                "0 10px 30px rgba(212, 175, 55, 0.3)",
                "0 15px 40px rgba(212, 175, 55, 0.4)",
                "0 10px 30px rgba(212, 175, 55, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              transformStyle: 'preserve-3d',
              transform: 'perspective(1000px)',
              filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))'
            }}
          >
            <span>Play Now</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-0 h-0 border-l-[8px] border-l-white border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent"
            />
          </motion.button>
        </motion.div>

        {/* Enhanced 3D Decorative Elements */}
        <motion.div 
          className="absolute -top-20 -left-20 w-40 h-40 border-2 border-gold/30 rounded-full"
          animate={{ 
            rotate: 360,
            rotateY: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            rotateY: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            transformStyle: 'preserve-3d',
            filter: 'drop-shadow(0 4px 8px rgba(212, 175, 55, 0.2))'
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-32 h-32 border-2 border-gold/20 rounded-full"
          animate={{ 
            rotate: -360,
            rotateX: [0, 180, 360],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            transformStyle: 'preserve-3d',
            filter: 'drop-shadow(0 4px 8px rgba(212, 175, 55, 0.15))'
          }}
        />
        
        {/* Additional 3D Floating Rings */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-24 h-24 border border-bronze/20 rounded-full"
          animate={{ 
            rotateZ: 360,
            rotateX: [0, 90, 180, 270, 360],
            y: [0, -20, 0]
          }}
          transition={{ 
            rotateZ: { duration: 30, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            transformStyle: 'preserve-3d',
            filter: 'drop-shadow(0 2px 6px rgba(139, 69, 19, 0.1))'
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-16 h-16 border border-gold-light/25 rounded-full"
          animate={{ 
            rotateY: -360,
            rotateZ: [0, 45, -45, 0],
            x: [0, 15, 0]
          }}
          transition={{ 
            rotateY: { duration: 18, repeat: Infinity, ease: "linear" },
            rotateZ: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            transformStyle: 'preserve-3d',
            filter: 'drop-shadow(0 3px 7px rgba(244, 228, 166, 0.15))'
          }}
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

      {/* Modals */}
      {currentView === 'question' && (
        <QuestionPage 
          onClose={() => setCurrentView('hero')}
          onComplete={(result) => {
            console.log('Quiz completed with result:', result);
            setQuizResult(result);
            
            // Save to localStorage for leaderboard
            const savedResults = JSON.parse(localStorage.getItem('aetheria_leaderboard') || '[]');
            const newEntry = {
              name: `Player_${Date.now()}`, // Could be enhanced to ask for name
              character: result.character,
              score: result.score,
              date: new Date().toISOString().split('T')[0],
              timestamp: Date.now()
            };
            savedResults.push(newEntry);
            savedResults.sort((a, b) => b.score - a.score); // Sort by score descending
            localStorage.setItem('aetheria_leaderboard', JSON.stringify(savedResults.slice(0, 50))); // Keep top 50
            
            setCurrentView('result');
          }}
        />
      )}
      
      {currentView === 'result' && quizResult && (
        <ResultPage 
          result={quizResult}
          onClose={() => setCurrentView('hero')}
          onPlayAgain={() => {
            setQuizResult(null);
            setCurrentView('question');
          }}
          onViewLeaderboard={() => setCurrentView('leaderboard')}
        />
      )}
      
      {currentView === 'leaderboard' && (
        <LeaderboardPage 
          onClose={() => setCurrentView('hero')}
          onBackToHome={() => setCurrentView('hero')}
        />
      )}
    </section>
  );
};

export default HeroSection;