// TRAIT_NAMES = ['bravery', 'introspection', 'curiosity', 'sociability', 'empathy', 'impulsiveness', 'loyalty', 'resourcefulness'];

export const questions = [
  {
    id: 1,
    category: 'personality',
    question: "When faced with an unexpected danger, you most often:",
    emoji: "⚠️",
    image: "/images/characters/Q1.png",
    options: [
      { id: 'a', text: "Strategize calmly before moving.", delta: [0.05, 0.15, 0.04, -0.06, 0.03, -0.05, 0.07, 0.10] },
      { id: 'b', text: "Rush in to protect others.", delta: [0.18, -0.03, 0.03, 0.10, 0.07, 0.12, 0.08, 0.04] },
      { id: 'c', text: "Freeze and overthink consequences.", delta: [0.00, 0.18, 0.02, -0.05, 0.05, -0.06, 0.02, 0.00] },
      { id: 'd', text: "Find a clever, unconventional escape.", delta: [0.08, 0.05, 0.12, -0.02, 0.02, 0.05, 0.04, 0.15] },
    ],
  },

  {
    id: 2,
    category: 'personality',
    question: "In conversations you are usually:",
    emoji: "💬",
    image: "/images/characters/Q2.png",
    options: [
      { id: 'a', text: "Reserved and thoughtful.", delta: [0.01, 0.16, 0.03, -0.06, 0.02, -0.03, 0.05, 0.02] },
      { id: 'b', text: "Warm and expressive.", delta: [0.06, 0.00, 0.03, 0.14, 0.10, 0.05, 0.06, 0.03] },
      { id: 'c', text: "Witty, observant, and probing.", delta: [0.05, 0.07, 0.12, -0.01, 0.03, 0.01, 0.03, 0.06] },
      { id: 'd', text: "Quiet but intensely curious.", delta: [0.02, 0.13, 0.14, -0.03, 0.03, -0.01, 0.02, 0.04] },
    ],
  },

  {
    id: 3,
    category: 'personality',
    question: "Your friends would describe you as:",
    emoji: "👥",
    image: "/images/characters/Q3.png",
    options: [
      { id: 'a', text: "Unshakably loyal.", delta: [0.03, 0.04, 0.02, 0.00, 0.05, -0.02, 0.18, 0.02] },
      { id: 'b', text: "Brave and bold.", delta: [0.18, -0.03, 0.05, 0.06, 0.03, 0.12, 0.06, 0.06] },
      { id: 'c', text: "Deep, introspective, maybe moody.", delta: [0.02, 0.18, 0.05, -0.03, 0.08, -0.03, 0.03, 0.01] },
      { id: 'd', text: "Helpful and inventive.", delta: [0.05, 0.04, 0.08, 0.00, 0.06, 0.01, 0.05, 0.14] },
    ],
  },

  {
    id: 4,
    category: 'personality',
    question: "When a moral dilemma appears, you:",
    emoji: "⚖️",
    image: "/images/characters/Q4.png",
    options: [
      { id: 'a', text: "Overthink and weigh every angle.", delta: [0.00, 0.16, 0.04, -0.03, 0.05, -0.04, 0.04, 0.01] },
      { id: 'b', text: "Follow your heart and instincts.", delta: [0.08, -0.02, 0.02, 0.06, 0.10, 0.09, 0.04, 0.04] },
      { id: 'c', text: "Seek the most empathetic resolution.", delta: [0.02, 0.07, 0.03, 0.02, 0.18, -0.02, 0.04, 0.02] },
      { id: 'd', text: "Use intellect to minimize harm.", delta: [0.05, 0.04, 0.10, -0.01, 0.03, 0.04, 0.03, 0.12] },
    ],
  },

  {
    id: 5,
    category: 'personality',
    question: "Your ideal weekend:",
    emoji: "🏖️",
    image: "/images/characters/Q5.png",
    options: [
      { id: 'a', text: "Reading or journaling quietly.", delta: [0.00, 0.20, 0.03, -0.06, 0.04, -0.02, 0.04, 0.02] },
      { id: 'b', text: "Spontaneous trips and challenges.", delta: [0.15, -0.03, 0.07, 0.07, 0.04, 0.12, 0.04, 0.07] },
      { id: 'c', text: "Hosting or connecting with friends.", delta: [0.03, 0.03, 0.04, 0.14, 0.12, 0.01, 0.04, 0.03] },
      { id: 'd', text: "Tinkering, building, or experimenting.", delta: [0.06, 0.04, 0.14, -0.01, 0.02, 0.04, 0.03, 0.14] },
    ],
  },

  {
    id: 6,
    category: 'personality',
    question: "Under pressure you typically:",
    emoji: "🔥",
    image: "/images/characters/Q6.png",
    options: [
      { id: 'a', text: "Analyze and delay action slightly.", delta: [0.00, 0.18, 0.03, -0.04, 0.04, -0.05, 0.04, 0.03] },
      { id: 'b', text: "Act boldly and fast.", delta: [0.15, -0.01, 0.04, 0.05, 0.04, 0.15, 0.05, 0.05] },
      { id: 'c', text: "Lean on empathy and teamwork.", delta: [0.03, 0.07, 0.03, 0.10, 0.17, 0.00, 0.04, 0.02] },
      { id: 'd', text: "Improvise smart, creative solutions.", delta: [0.07, 0.03, 0.10, -0.01, 0.02, 0.05, 0.03, 0.13] },
    ],
  },

  {
    id: 7,
    category: 'personality',
    question: "You value most:",
    emoji: "🏆",
    image: "/images/characters/Q7.png",
    options: [
      { id: 'a', text: "Truth and intellectual honesty.", delta: [0.02, 0.14, 0.04, -0.03, 0.03, -0.02, 0.05, 0.03] },
      { id: 'b', text: "Bravery and protecting others.", delta: [0.16, -0.03, 0.05, 0.04, 0.05, 0.11, 0.06, 0.05] },
      { id: 'c', text: "Curiosity and exploration.", delta: [0.03, 0.05, 0.20, 0.00, 0.03, 0.00, 0.02, 0.05] },
      { id: 'd', text: "Practical skill and adaptability.", delta: [0.07, 0.03, 0.07, -0.02, 0.02, 0.05, 0.03, 0.15] },
    ],
  },

  {
    id: 8,
    category: 'personality',
    question: "How do you respond to betrayal?",
    emoji: "💔",
    image: "/images/characters/Q8.png",
    options: [
      { id: 'a', text: "Withdraw and reflect deeply.", delta: [0.00, 0.16, 0.03, -0.05, 0.07, -0.03, 0.03, 0.02] },
      { id: 'b', text: "Confront head-on with passion.", delta: [0.12, -0.02, 0.02, 0.05, 0.04, 0.14, 0.04, 0.05] },
      { id: 'c', text: "Feel hurt but empathize and forgive.", delta: [0.02, 0.12, 0.03, 0.02, 0.18, -0.01, 0.03, 0.01] },
      { id: 'd', text: "Plan a smart recovery.", delta: [0.06, 0.04, 0.06, -0.01, 0.02, 0.04, 0.03, 0.12] },
    ],
  },

  {
    id: 9,
    category: 'personality',
    question: "In a group you are usually:",
    emoji: "👥",
    image: "/images/characters/C1.png",
    options: [
      { id: 'a', text: "The silent observer.", delta: [0.01, 0.15, 0.03, -0.05, 0.03, -0.03, 0.04, 0.02] },
      { id: 'b', text: "The charismatic leader.", delta: [0.13, -0.02, 0.05, 0.08, 0.05, 0.12, 0.06, 0.06] },
      { id: 'c', text: "The empath and supporter.", delta: [0.03, 0.07, 0.04, 0.10, 0.16, -0.01, 0.04, 0.02] },
      { id: 'd', text: "The problem-solver behind the scenes.", delta: [0.06, 0.04, 0.09, -0.02, 0.03, 0.04, 0.03, 0.13] },
    ],
  },

  {
    id: 10,
    category: 'personality',
    question: "Your long-term goal style:",
    emoji: "🎯",
    image: "/images/characters/C3.png",
    options: [
      { id: 'a', text: "To seek inner meaning and truth.", delta: [0.00, 0.20, 0.05, -0.04, 0.06, -0.02, 0.03, 0.02] },
      { id: 'b', text: "To achieve greatness and adventure.", delta: [0.14, -0.03, 0.05, 0.06, 0.04, 0.12, 0.04, 0.08] },
      { id: 'c', text: "To build love and connection.", delta: [0.03, 0.05, 0.05, 0.13, 0.15, -0.01, 0.04, 0.03] },
      { id: 'd', text: "To master skill and strategy.", delta: [0.07, 0.03, 0.11, -0.02, 0.02, 0.05, 0.03, 0.14] },
    ],
  },
];