export const questions = [
  {
    id: 1,
    category: 'personality',
    question: "When faced with an unexpected danger, you most often:",
    emoji: "⚠️",
    image: "/images/characters/Q1.png",
    options: [
      { id: 'a', text: "Strategize calmly before moving.", delta: [0.05, 0.12, 0.03, -0.05, 0.04, -0.03, 0.06, 0.02] },
      { id: 'b', text: "Rush in to protect others.", delta: [0.14, -0.02, 0.04, 0.08, 0.06, 0.12, 0.08, 0.06] },
      { id: 'c', text: "Freeze and think about consequences.", delta: [0.00, 0.10, 0.02, -0.03, 0.05, -0.04, 0.03, 0.01] },
      { id: 'd', text: "Find an unconventional escape / trick.", delta: [0.07, 0.04, 0.10, -0.01, 0.02, 0.06, 0.03, 0.14] },
    ],
  },

  {
    id: 2,
    category: 'personality',
    question: "In conversations you are usually:",
    emoji: "💬",
    image: "/images/characters/Q2.png",
    options: [
      { id: 'a', text: "Reserved and thoughtful.", delta: [0.02, 0.14, 0.03, -0.05, 0.03, -0.02, 0.04, 0.01] },
      { id: 'b', text: "Warm and easy to approach.", delta: [0.06, -0.01, 0.03, 0.10, 0.08, 0.03, 0.06, 0.02] },
      { id: 'c', text: "Witty, observant, skeptical.", delta: [0.04, 0.05, 0.08, 0.00, 0.02, 0.00, 0.02, 0.03] },
      { id: 'd', text: "Quiet but intensely curious.", delta: [0.01, 0.10, 0.14, -0.02, 0.03, -0.01, 0.02, 0.05] },
    ],
  },

  {
    id: 3,
    category: 'personality',
    question: "Your friends would describe you as:",
    emoji: "👥",
    image: "/images/characters/Q3.png",
    options: [
      { id: 'a', text: "Loyal to a fault.", delta: [0.03, 0.05, 0.02, 0.01, 0.06, -0.01, 0.14, 0.02] },
      { id: 'b', text: "Adventurous and brave.", delta: [0.15, -0.02, 0.06, 0.06, 0.04, 0.10, 0.05, 0.07] },
      { id: 'c', text: "Deep, moody, reflective.", delta: [0.01, 0.16, 0.05, -0.02, 0.10, -0.02, 0.03, 0.01] },
      { id: 'd', text: "Helpful, quietly resourceful.", delta: [0.06, 0.04, 0.06, 0.00, 0.05, 0.01, 0.05, 0.12] },
    ],
  },

  {
    id: 4,
    category: 'personality',
    question: "When a moral dilemma appears, you:",
    emoji: "⚖️",
    image: "/images/characters/Q4.png",
    options: [
      { id: 'a', text: "Overthink and weigh every option.", delta: [0.00, 0.14, 0.03, -0.02, 0.06, -0.03, 0.03, 0.01] },
      { id: 'b', text: "Follow your heart (often spontaneously).", delta: [0.08, -0.03, 0.03, 0.04, 0.08, 0.08, 0.05, 0.03] },
      { id: 'c', text: "Try to choose the fairest, empathetic path.", delta: [0.02, 0.08, 0.04, 0.03, 0.16, -0.01, 0.04, 0.02] },
      { id: 'd', text: "Use cleverness to avoid harm to allies.", delta: [0.05, 0.02, 0.09, -0.01, 0.03, 0.05, 0.03, 0.10] },
    ],
  },

  {
    id: 5,
    category: 'personality',
    question: "Your ideal weekend:",
    emoji: "🏖️",
    image: "/images/characters/Q5.png",
    options: [
      { id: 'a', text: "Reading & introspection.", delta: [0.01, 0.18, 0.04, -0.06, 0.03, -0.02, 0.03, 0.01] },
      { id: 'b', text: "A spontaneous trip / challenge.", delta: [0.13, -0.03, 0.07, 0.05, 0.05, 0.10, 0.04, 0.08] },
      { id: 'c', text: "Hanging out with close friends.", delta: [0.03, 0.04, 0.05, 0.12, 0.10, 0.00, 0.04, 0.02] },
      { id: 'd', text: "Learning something hands-on / tinkering.", delta: [0.06, 0.03, 0.12, -0.01, 0.02, 0.04, 0.02, 0.12] },
    ],
  },

  {
    id: 6,
    category: 'personality',
    question: "Under pressure you typically:",
    emoji: "🔥",
    image: "/images/characters/Q6.png",
    options: [
      { id: 'a', text: "Analyze and hesitate.", delta: [0.00, 0.16, 0.03, -0.04, 0.04, -0.05, 0.03, 0.03] },
      { id: 'b', text: "Act quickly and decisively.", delta: [0.12, -0.01, 0.04, 0.06, 0.05, 0.14, 0.05, 0.06] },
      { id: 'c', text: "Rely on friends / emotional support.", delta: [0.02, 0.08, 0.04, 0.08, 0.16, -0.01, 0.04, 0.02] },
      { id: 'd', text: "Improvise clever solutions.", delta: [0.06, 0.03, 0.10, -0.01, 0.03, 0.06, 0.03, 0.12] },
    ],
  },

  {
    id: 7,
    category: 'personality',
    question: "You value most:",
    emoji: "🏆",
    image: "/images/characters/Q7.png",
    options: [
      { id: 'a', text: "Truth and internal consistency.", delta: [0.02, 0.12, 0.04, -0.03, 0.04, -0.02, 0.05, 0.02] },
      { id: 'b', text: "Courage and protecting others.", delta: [0.14, -0.02, 0.05, 0.04, 0.06, 0.10, 0.06, 0.05] },
      { id: 'c', text: "Curiosity and learning.", delta: [0.03, 0.06, 0.18, 0.00, 0.03, 0.00, 0.02, 0.04] },
      { id: 'd', text: "Practical skill and survival.", delta: [0.08, 0.03, 0.07, -0.02, 0.02, 0.05, 0.03, 0.14] },
    ],
  },

  {
    id: 8,
    category: 'personality',
    question: "How do you respond to betrayal?",
    emoji: "💔",
    image: "/images/characters/Q8.png",
    options: [
      { id: 'a', text: "Retreat and think.", delta: [0.00, 0.14, 0.03, -0.04, 0.06, -0.03, 0.03, 0.02] },
      { id: 'b', text: "Confront and defend.", delta: [0.10, -0.02, 0.03, 0.04, 0.05, 0.12, 0.04, 0.05] },
      { id: 'c', text: "Feel deeply hurt but try to understand.", delta: [0.01, 0.12, 0.04, 0.01, 0.18, -0.01, 0.03, 0.01] },
      { id: 'd', text: "Plan a pragmatic way forward.", delta: [0.06, 0.04, 0.06, -0.01, 0.03, 0.05, 0.03, 0.10] },
    ],
  },

  {
    id: 9,
    category: 'personality',
    question: "In a group you are usually:",
    emoji: "👥",
    image: "/images/characters/C1.png",
    options: [
      { id: 'a', text: "The quiet observer.", delta: [0.01, 0.14, 0.03, -0.05, 0.03, -0.02, 0.03, 0.02] },
      { id: 'b', text: "The one who takes lead.", delta: [0.12, -0.01, 0.05, 0.07, 0.05, 0.10, 0.06, 0.05] },
      { id: 'c', text: "The emotionally supportive friend.", delta: [0.02, 0.08, 0.04, 0.10, 0.14, -0.01, 0.04, 0.02] },
      { id: 'd', text: "The problem solver / fixer.", delta: [0.07, 0.03, 0.09, -0.02, 0.03, 0.05, 0.03, 0.12] },
    ],
  },

  {
    id: 10,
    category: 'personality',
    question: "Your long-term goal style:",
    emoji: "🎯",
    image: "/images/characters/C3.png",
    options: [
      { id: 'a', text: "Search for meaning / answers.", delta: [0.01, 0.18, 0.05, -0.04, 0.06, -0.02, 0.03, 0.02] },
      { id: 'b', text: "Seek big adventures & achievements.", delta: [0.13, -0.03, 0.06, 0.05, 0.05, 0.10, 0.04, 0.08] },
      { id: 'c', text: "Build close bonds & community.", delta: [0.03, 0.07, 0.05, 0.12, 0.14, -0.01, 0.05, 0.02] },
      { id: 'd', text: "Master practical skills and craft.", delta: [0.07, 0.04, 0.12, -0.01, 0.02, 0.04, 0.03, 0.12] },
    ],
  },
];