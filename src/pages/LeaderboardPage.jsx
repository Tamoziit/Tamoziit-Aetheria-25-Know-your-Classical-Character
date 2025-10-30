import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LeaderboardPage = () => {
  const [leaderBoard, setLeaderBoard] = useState(null);

  const fetchLeaderBoard = async () => {
    let data = JSON.parse(localStorage.getItem("leaderboard")) || [];
    data.sort((a, b) => parseFloat(b.frequency) - parseFloat(a.frequency));
    setLeaderBoard(data);
  }

  useEffect(() => {
    fetchLeaderBoard();
  }, []);

  if (!leaderBoard) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/80 text-gold font-elegant text-2xl">
        Loading your Leaderboard...
      </div>
    );
  }

  console.log(leaderBoard)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden parchment-bg p-4">
      {/* Background layers */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold-light/20"></div>
        <div className="absolute inset-0 bg-parchment-texture"></div>
      </div>

      <motion.div
        className="absolute inset-0 bg-bronze/80 z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="relative z-[20] bg-center bg-cover bg-no-repeat w-full max-w-4xl min-h-[124vh] mx-4 flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url("/images/Scroll.png")`,
          filter: 'brightness(1.05) contrast(1.05)'
        }}
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Close Button */}
        <Link
          to="/"
          className="absolute top-6 right-10 w-10 h-10 bg-bronze/20 hover:bg-bronze/30 rounded-full flex items-center justify-center text-bronze hover:text-bronze-dark transition-colors z-10 font-semibold cursor-pointer"
        >
          ✕
        </Link>

        {/* Header */}
        <div className="relative text-center p-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-bronze"
          >
            Hall of Literary Fame
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl font-elegant text-bronze/80 mb-2"
          >
            Discover the greatest character matches in Aetheria
          </motion.p>
        </div>

        {/* Leaderboard Content */}
        <div className="p-4 flex flex-col items-center justify-center w-[90%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {/* Top 3 Podium */}
            <div className="mb-6">
              <h2 className="text-2xl font-serif font-bold text-bronze mb-3 text-center mt-2">Top 3 Characters</h2>
              <div className="flex justify-center items-end gap-4 mb-4">
                {leaderBoard.slice(0, 3).map((character, index) => (
                  <motion.div
                    key={character.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.2 }}
                    className={`text-center ${index === 0 ? 'order-2' : index === 1 ? 'order-1' : 'order-3'
                      }`}
                  >
                    <div
                      className={`flex flex-col items-center justify-center bg-gradient-to-br from-white to-gold-light/30 rounded-2xl p-6 shadow-xl border-2 ${index === 0 ? 'border-yellow-400 h-50' : 'border-gold/30 h-48'
                        }`}
                    >
                      <img
                        src={character.image}
                        alt={character.id}
                        className={`${index === 0 ? 'size-24' : 'size-20'}`}
                      />
                      <div className="font-elegant text-2xl font-semibold text-bronze">{character.name}</div>
                      <div className="font-elegant font-bold text-sm">
                        {character.title}
                      </div>
                      <div className="text-xl font-bold text-gold">
                        {character.frequency}%
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Full Leaderboard Table */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-bronze mb-2 text-center">
                Complete Rankings
              </h2>

              <div className="bg-white/70 rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-gold/20 to-gold-dark/20 p-3 border-b border-gold/20">
                  <div className="grid grid-cols-12 place-items-center font-elegant font-semibold text-bronze text-base">
                    <div className="col-span-2">Rank</div>
                    <div className="col-span-8">Character</div>
                    <div className="col-span-2">Compatibility</div>
                  </div>
                </div>

                <div className="max-h-80 overflow-y-auto">
                  {leaderBoard.map((character, index) => (
                    <motion.div
                      key={`${character.id}-${character.name}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.05 }}
                      className={`grid grid-cols-12 place-items-center p-2 border-b border-gold/10 hover:bg-gold/5 transition-colors ${index < 3 ? 'bg-gold/10' : ''
                        }`}
                    >
                      <div className="col-span-2 flex items-center justify-center">
                        {index === 0 ? (
                          <span className="text-2xl">🥇</span>
                        ) : index === 1 ? (
                          <span className="text-2xl">🥈</span>
                        ) : index === 2 ? (
                          <span className="text-2xl">🥉</span>
                        ) : (
                          <div className="text-xl font-bold text-bronze">#{index + 1}</div>
                        )}
                      </div>

                      <div className="col-span-8">
                        <div className="flex items-center justify-center gap-4">
                          <img
                            src={character.image}
                            alt={character.name}
                            className="w-16 h-16 rounded-md object-contain"
                          />
                          <div className="font-elegant font-semibold text-bronze">
                            {character.name}
                            <div className="text-sm text-bronze/70 font-normal">{character.title}</div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-2">
                        <div className="text-lg font-bold text-gold">{character.frequency}%</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Link
                to="/"
                className="bg-gradient-to-r from-gold to-gold-dark text-white px-8 py-4 rounded-full font-elegant font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                🏠 Back to Home
              </Link>
              <Link
                to="/question"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-elegant font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                🎯 Take Quiz
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-end pointer-events-none">
          <motion.img
            src="/images/Layer2.png"
            alt="Layer 2"
            className="absolute bottom-[20vh] w-full object-cover z-[1]"
            initial={{ y: 200, scale: 0.9, opacity: 0 }}
            animate={{ y: [0, -20, 0], opacity: 1, scale: 1 }}
            transition={{
              duration: 1.4,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
              y: {
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />

          <motion.img
            src="/images/Layer1.png"
            alt="Layer 1"
            className="absolute bottom-0 w-full object-cover z-[2]"
            initial={{ y: 200, scale: 0.9, opacity: 0 }}
            animate={{ y: [0, -15, 0], opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
              y: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
        </div>
      </AnimatePresence>
    </section>
  );
};

export default LeaderboardPage;