import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuestionPage = ({ onClose, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Quiz questions data
  const questions = [
    {
      id: 1,
      category: 'personality',
      question: "At a grand masquerade ball, which role would you naturally gravitate towards?",
      image: "🎭",
      options: [
        { text: "The mysterious observer watching from the balcony", id: 'a', traits: ['analytical', 'observant', 'independent'] },
        { text: "The charismatic host welcoming every guest", id: 'b', traits: ['regal', 'charismatic', 'dramatic'] },
        { text: "The elegant dancer commanding the ballroom", id: 'c', traits: ['dramatic', 'ambitious', 'passionate'] },
        { text: "The witty conversationalist holding court by the fireplace", id: 'd', traits: ['witty', 'intelligent', 'spirited'] }
      ]
    },
    {
      id: 2,
      category: 'values',
      question: "What drives you most in life?",
      image: "⭐",
      options: [
        { text: "The pursuit of knowledge and truth", id: 'a', traits: ['brilliant', 'studious', 'logical'] },
        { text: "Building meaningful relationships and connections", id: 'b', traits: ['loyal', 'spirited', 'principled'] },
        { text: "Achieving greatness and leaving a lasting legacy", id: 'c', traits: ['ambitious', 'regal', 'determined'] },
        { text: "Following your dreams no matter the cost", id: 'd', traits: ['romantic', 'optimistic', 'passionate'] }
      ]
    },
    {
      id: 3,
      category: 'problem-solving',
      question: "When faced with a complex challenge, your approach is:",
      image: "🧩",
      options: [
        { text: "Analyze every detail methodically until the solution emerges", id: 'a', traits: ['analytical', 'brilliant', 'logical'] },
        { text: "Trust your instincts and act with conviction", id: 'b', traits: ['strong-willed', 'brave', 'independent'] },
        { text: "Rally others to help and tackle it as a team", id: 'c', traits: ['charismatic', 'loyal', 'resourceful'] },
        { text: "Find a creative, unconventional solution", id: 'd', traits: ['spirited', 'optimistic', 'extravagant'] }
      ]
    },
    {
      id: 4,
      category: 'social',
      question: "In your social circle, you're known as:",
      image: "👥",
      options: [
        { text: "The brilliant mind everyone turns to for advice", id: 'a', traits: ['brilliant', 'observant', 'studious'] },
        { text: "The natural leader who takes charge", id: 'b', traits: ['regal', 'ambitious', 'charismatic'] },
        { text: "The loyal friend who's always there", id: 'c', traits: ['loyal', 'principled', 'brave'] },
        { text: "The passionate dreamer who inspires others", id: 'd', traits: ['romantic', 'passionate', 'dramatic'] }
      ]
    },
    {
      id: 5,
      category: 'lifestyle',
      question: "Your ideal evening would be:",
      image: "🌙",
      options: [
        { text: "Solving puzzles or reading by candlelight", id: 'a', traits: ['analytical', 'studious', 'independent'] },
        { text: "Hosting an elegant dinner party", id: 'b', traits: ['regal', 'charismatic', 'dramatic'] },
        { text: "Quiet time with close friends and family", id: 'c', traits: ['loyal', 'principled', 'spirited'] },
        { text: "Dancing under the stars at a lavish celebration", id: 'd', traits: ['romantic', 'optimistic', 'extravagant'] }
      ]
    },
    {
      id: 6,
      category: 'adversity',
      question: "When things don't go according to plan, you:",
      image: "⚡",
      options: [
        { text: "Carefully reassess and develop a new strategy", id: 'a', traits: ['logical', 'observant', 'brilliant'] },
        { text: "Adapt quickly and turn it into an opportunity", id: 'b', traits: ['resourceful', 'strong-willed', 'resilient'] },
        { text: "Stand firm in your principles and persevere", id: 'c', traits: ['principled', 'brave', 'determined'] },
        { text: "Keep believing that everything will work out beautifully", id: 'd', traits: ['optimistic', 'romantic', 'passionate'] }
      ]
    },
    {
      id: 7,
      category: 'communication',
      question: "Your communication style is best described as:",
      image: "💬",
      options: [
        { text: "Precise and intellectual, choosing words carefully", id: 'a', traits: ['analytical', 'brilliant', 'logical'] },
        { text: "Commanding and influential, inspiring action", id: 'b', traits: ['regal', 'charismatic', 'ambitious'] },
        { text: "Warm and sincere, building genuine connections", id: 'c', traits: ['loyal', 'spirited', 'principled'] },
        { text: "Passionate and expressive, wearing your heart on your sleeve", id: 'd', traits: ['dramatic', 'passionate', 'romantic'] }
      ]
    },
    {
      id: 8,
      category: 'legacy',
      question: "How would you want to be remembered?",
      image: "�️",
      options: [
        { text: "As someone who solved the unsolvable and advanced human knowledge", id: 'a', traits: ['brilliant', 'analytical', 'observant'] },
        { text: "As a powerful leader who changed the world", id: 'b', traits: ['regal', 'ambitious', 'charismatic'] },
        { text: "As someone who stood up for what's right and helped others", id: 'c', traits: ['principled', 'brave', 'loyal'] },
        { text: "As someone who loved deeply and lived passionately", id: 'd', traits: ['romantic', 'passionate', 'dramatic'] }
      ]
    }
  ];

  const totalQuestions = questions.length;
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (selectedOption) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      } else {
        // Quiz completed - calculate result
        const result = calculateResult(newAnswers);
        setIsTransitioning(false);
        onComplete(result);
      }
    }, 500);
  };

  const calculateResult = (userAnswers) => {
    const traitCounts = {};
    
    // Count trait occurrences
    userAnswers.forEach(answer => {
      answer.traits.forEach(trait => {
        traitCounts[trait] = (traitCounts[trait] || 0) + 1;
      });
    });

    // Character definitions with their key traits
    const characters = {
      'sherlock-holmes': {
        name: 'Sherlock Holmes',
        title: 'The Master Detective',
        image: '🕵️',
        color: 'from-gray-600 via-blue-700 to-gray-800',
        traits: ['analytical', 'observant', 'logical', 'independent', 'brilliant'],
        description: 'Your sharp intellect and keen observation skills make you a natural problem-solver. You appreciate classic, well-tailored fashion that reflects your sophisticated and analytical nature.',
        quote: 'The game is afoot!',
        modernStyle: 'Sharp tailoring, classic coats, structured pieces with attention to detail',
        era: 'Victorian England'
      },
      'elizabeth-bennet': {
        name: 'Elizabeth Bennet',
        title: 'The Independent Spirit',
        image: '🌹',
        color: 'from-rose-400 via-pink-500 to-rose-600',
        traits: ['witty', 'independent', 'spirited', 'intelligent', 'principled'],
        description: 'You possess a perfect balance of strength and grace. Your independent spirit and quick wit, combined with your appreciation for timeless elegance, make you truly captivating.',
        quote: 'I am only resolved to act in that manner, which will, in my own opinion, constitute my happiness.',
        modernStyle: 'Romantic femininity with modern confidence, flowing dresses, delicate details',
        era: 'Regency England'
      },
      'hermione-granger': {
        name: 'Hermione Granger',
        title: 'The Brilliant Scholar',
        image: '📚',
        color: 'from-amber-500 via-orange-500 to-red-500',
        traits: ['brilliant', 'studious', 'loyal', 'brave', 'resourceful'],
        description: 'Your intelligence and determination are your greatest assets. You value substance over style but have a natural elegance that comes from confidence and kindness.',
        quote: 'Books! And cleverness! There are more important things, but friendship and bravery.',
        modernStyle: 'Smart casual, comfortable yet polished, functional accessories',
        era: 'Modern Magic'
      },
      'jay-gatsby': {
        name: 'Jay Gatsby',
        title: 'The Romantic Dreamer',
        image: '🥂',
        color: 'from-emerald-400 via-teal-500 to-cyan-600',
        traits: ['romantic', 'optimistic', 'extravagant', 'mysterious', 'passionate'],
        description: 'You are a dreamer with exquisite taste and an eye for the finer things in life. Your style is bold and glamorous, reflecting your optimistic and romantic nature.',
        quote: 'So we beat on, boats against the current, borne back ceaselessly into the past.',
        modernStyle: 'Luxury fashion, statement pieces, Art Deco influences, bold colors',
        era: '1920s America'
      },
      'cleopatra': {
        name: 'Cleopatra VII',
        title: 'The Royal Empress',
        image: '👑',
        color: 'from-yellow-400 via-yellow-500 to-yellow-600',
        traits: ['regal', 'intelligent', 'charismatic', 'ambitious', 'dramatic'],
        description: 'You embody the essence of royal elegance and commanding presence. Like the legendary Egyptian queen, you possess natural leadership qualities and an eye for luxury.',
        quote: 'I will not be triumphed over.',
        modernStyle: 'Power dressing with gold accents, statement jewelry, commanding silhouettes',
        era: 'Ancient Egypt'
      },
      'scarlett-ohara': {
        name: 'Scarlett O\'Hara',
        title: 'The Southern Belle',
        image: '🌺',
        color: 'from-red-500 via-pink-500 to-red-600',
        traits: ['determined', 'strong-willed', 'dramatic', 'resilient', 'ambitious'],
        description: 'You have an indomitable spirit and aren\'t afraid to stand out. Your dramatic flair and determination make you unforgettable, just like your bold fashion choices.',
        quote: 'Tomorrow is another day!',
        modernStyle: 'Bold colors, dramatic silhouettes, statement accessories, feminine power dressing',
        era: 'Civil War Era'
      }
    };

    // Calculate scores for each character
    const characterScores = {};
    Object.keys(characters).forEach(characterId => {
      let score = 0;
      characters[characterId].traits.forEach(trait => {
        score += (traitCounts[trait] || 0) * 2;
      });
      characterScores[characterId] = score;
    });

    // Find winning character
    const winningCharacterId = Object.keys(characterScores).reduce((a, b) => 
      characterScores[a] > characterScores[b] ? a : b
    );

    const maxScore = characterScores[winningCharacterId];
    const percentage = Math.min(Math.round((maxScore / (totalQuestions * 2)) * 100), 100);

    return {
      character: characters[winningCharacterId],
      score: percentage,
      correctAnswers: Math.round((percentage / 100) * totalQuestions),
      totalQuestions: totalQuestions
    };
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-black/90 via-bronze/20 to-black/90 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* 3D Quiz Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Quiz Large Bubbles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`quiz-bubble-large-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${10 + (i * 20)}%`,
              top: `${15 + Math.sin(i * 3) * 35}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: `radial-gradient(circle at 30% 30%, 
                rgba(255, 255, 255, 0.8) 0%, 
                rgba(212, 175, 55, 0.4) 35%, 
                rgba(139, 69, 19, 0.2) 70%, 
                transparent 100%)`,
              backdropFilter: 'blur(3px)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
            }}
            animate={{
              y: [0, -70, -140, -210],
              x: [0, Math.sin(i * 2) * 50, Math.cos(i * 3) * 30, 0],
              scale: [0.4, 1, 1.2, 0],
              opacity: [0, 0.8, 0.6, 0],
              rotateX: [0, 120, 240, 360],
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 9 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.8,
              ease: "easeOut"
            }}
          />
        ))}
        
        {/* Quiz Medium Bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`quiz-bubble-medium-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${70 + Math.random() * 30}%`,
              width: `${12 + Math.random() * 20}px`,
              height: `${12 + Math.random() * 20}px`,
              background: `radial-gradient(circle at 25% 25%, 
                rgba(255, 255, 255, 0.9) 0%, 
                rgba(244, 228, 166, 0.5) 40%, 
                rgba(212, 175, 55, 0.3) 75%, 
                transparent 100%)`,
              backdropFilter: 'blur(2px)',
              border: '0.5px solid rgba(244, 228, 166, 0.4)',
            }}
            animate={{
              y: [0, -100, -200, -300],
              x: [0, Math.sin(i * 4) * 40, Math.cos(i * 2) * 25, 0],
              scale: [0.3, 0.8, 1.1, 0],
              opacity: [0, 1, 0.7, 0],
              rotateZ: [0, 180, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Quiz Small Bubbles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`quiz-bubble-small-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${85 + Math.random() * 15}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: `radial-gradient(circle at 20% 20%, 
                rgba(255, 255, 255, 1) 0%, 
                rgba(212, 175, 55, 0.6) 50%, 
                transparent 100%)`,
              filter: 'blur(0.5px)',
              border: '0.2px solid rgba(255, 255, 255, 0.5)',
            }}
            animate={{
              y: [0, -150, -300, -450],
              x: [0, Math.sin(i * 5) * 20, 0],
              scale: [0.2, 0.6, 0.8, 0],
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
      <motion.div
        className="bg-gradient-to-br from-parchment via-gold-light/30 to-parchment max-w-5xl w-full max-h-[95vh] overflow-y-auto rounded-3xl shadow-2xl relative"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-bronze/20 hover:bg-bronze/30 rounded-full flex items-center justify-center text-bronze hover:text-bronze-dark transition-colors z-10"
        >
          ✕
        </button>

        {/* Progress Header */}
        <div className="p-6 pb-0 border-b border-gold/20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-bronze font-elegant text-sm">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
            <span className="text-bronze font-elegant text-sm">
              {Math.round(progressPercentage)}% Complete
            </span>
          </div>
          <div className="w-full bg-gold/20 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-gold-dark rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Question Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Category Badge */}
              <motion.div
                className="inline-block bg-gradient-to-r from-gold/20 to-gold-dark/20 text-bronze px-6 py-3 rounded-full text-sm font-elegant font-semibold mb-8 capitalize"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {question.category}
              </motion.div>

              {/* Character Image/Icon */}
              <motion.div
                className="text-8xl mb-8"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring", bounce: 0.5 }}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              >
                {question.image}
              </motion.div>

              {/* Question Text */}
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-bronze mb-12 leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {question.question}
              </motion.h2>

              {/* Answer Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {question.options.map((option, index) => (
                  <motion.button
                    key={option.id}
                    onClick={() => handleAnswer(option)}
                    disabled={isTransitioning}
                    className="group p-6 bg-white/70 hover:bg-white/90 rounded-2xl text-left transition-all duration-300 border-2 border-transparent hover:border-gold/50 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: isTransitioning ? 1 : 1.02, y: isTransitioning ? 0 : -5 }}
                    whileTap={{ scale: isTransitioning ? 1 : 0.98 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full border-2 border-gold/40 group-hover:border-gold group-hover:bg-gold/10 flex items-center justify-center text-gold font-bold transition-all duration-300 flex-shrink-0 mt-1">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-bronze font-elegant text-base sm:text-lg leading-relaxed group-hover:text-bronze-dark transition-colors">
                        {option.text}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-12">
                {Array.from({ length: totalQuestions }, (_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index < currentQuestion ? 'bg-gold scale-110' : 'bg-gold/30'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-parchment-texture"></div>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold/40 rounded-full"
              style={{
                left: `${15 + (i * 12)}%`,
                top: `${25 + Math.sin(i) * 25}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                y: [0, -40, -80],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuestionPage;