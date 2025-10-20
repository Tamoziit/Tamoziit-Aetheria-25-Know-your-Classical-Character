import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LeaderboardPage = ({ onClose, onBackToHome }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Dummy leaderboard data for UI design
  const dummyLeaderboardData = [
    {
      rank: 1,
      name: "Literary_Scholar_23",
      character: { name: "Sherlock Holmes", image: "🕵️", title: "The Master Detective" },
      score: 98,
      date: "2025-10-19",
      badge: "🥇"
    },
    {
      rank: 2,
      name: "BookLover_Jane",
      character: { name: "Elizabeth Bennet", image: "🌹", title: "The Independent Spirit" },
      score: 95,
      date: "2025-10-19",
      badge: "🥈"
    },
    {
      rank: 3,
      name: "ClassicReader",
      character: { name: "Hermione Granger", image: "📚", title: "The Brilliant Scholar" },
      score: 92,
      date: "2025-10-18",
      badge: "🥉"
    },
    {
      rank: 4,
      name: "VintageVibes",
      character: { name: "Jay Gatsby", image: "🥂", title: "The Romantic Dreamer" },
      score: 89,
      date: "2025-10-18",
      badge: "🏅"
    },
    {
      rank: 5,
      name: "RegalReader",
      character: { name: "Cleopatra", image: "👑", title: "The Royal Empress" },
      score: 87,
      date: "2025-10-17",
      badge: "🏅"
    },
    {
      rank: 6,
      name: "SouthernCharm",
      character: { name: "Scarlett O'Hara", image: "🌺", title: "The Southern Belle" },
      score: 84,
      date: "2025-10-17",
      badge: "🏅"
    },
    {
      rank: 7,
      name: "MysteryFan",
      character: { name: "Sherlock Holmes", image: "🕵️", title: "The Master Detective" },
      score: 82,
      date: "2025-10-16",
      badge: "🏅"
    },
    {
      rank: 8,
      name: "RomanceReader",
      character: { name: "Elizabeth Bennet", image: "🌹", title: "The Independent Spirit" },
      score: 80,
      date: "2025-10-16",
      badge: "🏅"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Players', icon: '🌟' },
    { id: 'today', label: 'Today', icon: '📅' },
    { id: 'week', label: 'This Week', icon: '📊' }
  ];

  const getFilteredData = () => {
    // For UI design, we'll just return all data regardless of filter
    return dummyLeaderboardData;
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-black/90 via-bronze/20 to-black/90 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gradient-to-br from-parchment via-gold-light/30 to-parchment max-w-6xl w-full max-h-[95vh] overflow-y-auto rounded-3xl shadow-2xl relative"
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

        {/* Header */}
        <div className="relative p-8 text-center border-b border-gold/20">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl mb-4"
          >
            🏆
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-bronze mb-3"
          >
            Hall of Literary Fame
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl font-elegant text-bronze/80 mb-6"
          >
            Discover the greatest character matches in Aetheria
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-elegant font-semibold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gold text-white shadow-lg scale-105'
                    : 'bg-white/50 text-bronze hover:bg-white/70'
                }`}
              >
                <span className="mr-2">{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Leaderboard Content */}
        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {/* Top 3 Podium */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-bronze mb-8 text-center">Top Champions</h2>
              <div className="flex justify-center items-end gap-4 mb-8">
                {getFilteredData().slice(0, 3).map((player, index) => (
                  <motion.div
                    key={player.rank}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.2 }}
                    className={`text-center ${
                      index === 0 ? 'order-2' : index === 1 ? 'order-1' : 'order-3'
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-br from-white to-gold-light/30 rounded-2xl p-6 shadow-xl border-2 ${
                        index === 0 ? 'border-yellow-400 h-48' : 'border-gold/30 h-40'
                      }`}
                    >
                      <div className="text-4xl mb-2">{player.badge}</div>
                      <div className="text-3xl mb-2">{player.character.image}</div>
                      <div className="font-elegant font-bold text-bronze text-sm mb-1">
                        {player.name}
                      </div>
                      <div className="text-xs text-bronze/70 mb-2">
                        {player.character.name}
                      </div>
                      <div className="text-lg font-bold text-gold">
                        {player.score}%
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Full Leaderboard Table */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-bronze mb-6 text-center">Complete Rankings</h2>
              <div className="bg-white/70 rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-gold/20 to-gold-dark/20 p-4 border-b border-gold/20">
                  <div className="grid grid-cols-12 gap-4 font-elegant font-semibold text-bronze text-sm">
                    <div className="col-span-1 text-center">Rank</div>
                    <div className="col-span-3">Player</div>
                    <div className="col-span-4">Character Match</div>
                    <div className="col-span-2 text-center">Score</div>
                    <div className="col-span-2 text-center">Date</div>
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {getFilteredData().map((player, index) => (
                    <motion.div
                      key={`${player.rank}-${player.name}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 + index * 0.1 }}
                      className={`grid grid-cols-12 gap-4 p-4 border-b border-gold/10 hover:bg-gold/5 transition-colors ${
                        index < 3 ? 'bg-gold/10' : ''
                      }`}
                    >
                      <div className="col-span-1 text-center">
                        <span className="text-2xl">{player.badge}</span>
                        <div className="text-sm font-bold text-bronze">#{player.rank}</div>
                      </div>
                      <div className="col-span-3">
                        <div className="font-elegant font-semibold text-bronze">
                          {player.name}
                        </div>
                      </div>
                      <div className="col-span-4 flex items-center gap-3">
                        <span className="text-2xl">{player.character.image}</span>
                        <div>
                          <div className="font-elegant font-semibold text-bronze">
                            {player.character.name}
                          </div>
                          <div className="text-xs text-bronze/70">
                            {player.character.title}
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 text-center">
                        <div className="text-lg font-bold text-gold">{player.score}%</div>
                      </div>
                      <div className="col-span-2 text-center">
                        <div className="text-sm text-bronze/70 font-elegant">
                          {new Date(player.date).toLocaleDateString()}
                        </div>
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
              <button
                onClick={onBackToHome}
                className="bg-gradient-to-r from-gold to-gold-dark text-white px-8 py-4 rounded-full font-elegant font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                🏠 Back to Home
              </button>
              <button
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-elegant font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                🎯 Take Quiz
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-parchment-texture"></div>
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold/30 rounded-full"
              style={{
                left: `${10 + (i * 10)}%`,
                top: `${20 + Math.sin(i) * 30}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
                y: [0, -50, -100],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.8,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LeaderboardPage;