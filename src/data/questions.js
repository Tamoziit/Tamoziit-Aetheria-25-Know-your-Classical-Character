export const questions = [import { characters } from './characters';

  {

    id: 1,export const questions = [

    category: 'personality',  {

    question: "At a grand masquerade ball, which role would you naturally gravitate towards?",    id: 1,

    image: "🎭",    category: 'personality',

    options: [    question: "You're at a grand party. What draws you most?",

      {     options: [

        id: 'a',      { 

        text: "The mysterious observer watching from the balcony",         text: "The intellectual conversations by the library", 

        traits: ['analytical', 'observant', 'independent']        traits: ['intellectual', 'analytical', 'studious'],

      },        fashion: ['classic', 'sophisticated']

      {       },

        id: 'b',      { 

        text: "The charismatic host welcoming every guest",         text: "Being the center of attention on the dance floor", 

        traits: ['regal', 'charismatic', 'dramatic']        traits: ['charismatic', 'dramatic', 'confident'],

      },        fashion: ['bold', 'glamorous']

      {       },

        id: 'c',      { 

        text: "The elegant dancer commanding the ballroom",         text: "Quietly observing people and their interactions", 

        traits: ['dramatic', 'ambitious', 'passionate']        traits: ['observant', 'independent', 'analytical'],

      },        fashion: ['understated', 'practical']

      {       },

        id: 'd',      { 

        text: "The witty conversationalist holding court by the fireplace",         text: "Organizing and ensuring everyone has a good time", 

        traits: ['witty', 'intelligent', 'spirited']        traits: ['compassionate', 'loyal', 'determined'],

      }        fashion: ['elegant', 'versatile']

    ]      }

  },    ]

  {  },

    id: 2,  {

    category: 'values',    id: 2,

    question: "What drives you most in life?",    category: 'style',

    image: "⭐",    question: "Your ideal outfit for a special occasion would be:",

    options: [    options: [

      {       { 

        id: 'a',        text: "A flowing, romantic dress with delicate details", 

        text: "The pursuit of knowledge and truth",         traits: ['romantic', 'independent', 'spirited'],

        traits: ['brilliant', 'studious', 'logical']        fashion: ['romantic', 'feminine', 'elegant']

      },      },

      {       { 

        id: 'b',        text: "A sharp, tailored suit that commands respect", 

        text: "Building meaningful relationships and connections",         traits: ['analytical', 'brilliant', 'logical'],

        traits: ['loyal', 'spirited', 'principled']        fashion: ['classic', 'tailored', 'sophisticated']

      },      },

      {       { 

        id: 'c',        text: "Something bold and glamorous that turns heads", 

        text: "Achieving greatness and leaving a lasting legacy",         traits: ['dramatic', 'passionate', 'ambitious'],

        traits: ['ambitious', 'regal', 'determined']        fashion: ['luxurious', 'bold', 'attention-grabbing']

      },      },

      {       { 

        id: 'd',        text: "Comfortable yet polished - style with substance", 

        text: "Following your dreams no matter the cost",         traits: ['studious', 'practical', 'resourceful'],

        traits: ['romantic', 'optimistic', 'passionate']        fashion: ['practical', 'smart', 'comfortable']

      }      }

    ]    ]

  },  },

  {  {

    id: 3,    id: 3,

    category: 'problem-solving',    category: 'values',

    question: "When faced with a complex challenge, your approach is:",    question: "What matters most to you in life?",

    image: "🧩",    options: [

    options: [      { 

      {         text: "Knowledge and understanding the world around me", 

        id: 'a',        traits: ['brilliant', 'intellectual', 'curious'],

        text: "Analyze every detail methodically until the solution emerges",         fashion: ['sophisticated', 'classic']

        traits: ['analytical', 'brilliant', 'logical']      },

      },      { 

      {         text: "Love, family, and meaningful relationships", 

        id: 'b',        traits: ['compassionate', 'loyal', 'honest'],

        text: "Trust your instincts and act with conviction",         fashion: ['romantic', 'feminine', 'elegant']

        traits: ['strong-willed', 'brave', 'independent']      },

      },      { 

      {         text: "Power, influence, and leaving a lasting legacy", 

        id: 'c',        traits: ['ambitious', 'regal', 'strategic'],

        text: "Rally others to help and tackle it as a team",         fashion: ['luxurious', 'dramatic', 'golden']

        traits: ['charismatic', 'loyal', 'resourceful']      },

      },      { 

      {         text: "Adventure, dreams, and endless possibilities", 

        id: 'd',        traits: ['optimistic', 'romantic', 'passionate'],

        text: "Find a creative, unconventional solution",         fashion: ['glamorous', 'trendy', 'bold']

        traits: ['spirited', 'optimistic', 'extravagant']      }

      }    ]

    ]  },

  },  {

  {    id: 4,

    id: 4,    category: 'challenge',

    category: 'social',    question: "When faced with a difficult problem, you:",

    question: "In your social circle, you're known as:",    options: [

    image: "👥",      { 

    options: [        text: "Analyze every detail until you find the logical solution", 

      {         traits: ['analytical', 'observant', 'methodical'],

        id: 'a',        fashion: ['structured', 'timeless', 'sophisticated']

        text: "The brilliant mind everyone turns to for advice",       },

        traits: ['brilliant', 'observant', 'studious']      { 

      },        text: "Trust your instincts and act decisively", 

      {         traits: ['strong-willed', 'determined', 'resilient'],

        id: 'b',        fashion: ['bold', 'dramatic', 'colorful']

        text: "The natural leader who takes charge",       },

        traits: ['regal', 'ambitious', 'charismatic']      { 

      },        text: "Research thoroughly and consider all perspectives", 

      {         traits: ['studious', 'brilliant', 'perfectionist'],

        id: 'c',        fashion: ['practical', 'versatile', 'smart']

        text: "The loyal friend who's always there",       },

        traits: ['loyal', 'principled', 'brave']      { 

      },        text: "Use your charm and wit to navigate the situation", 

      {         traits: ['charismatic', 'witty', 'intelligent'],

        id: 'd',        fashion: ['elegant', 'classic', 'feminine']

        text: "The passionate dreamer who inspires others",       }

        traits: ['romantic', 'passionate', 'dramatic']    ]

      }  },

    ]  {

  },    id: 5,

  {    category: 'lifestyle',

    id: 5,    question: "Your ideal way to spend a weekend is:",

    category: 'lifestyle',    options: [

    question: "Your ideal evening would be:",      { 

    image: "🌙",        text: "Curled up with a fascinating book and a cup of tea", 

    options: [        traits: ['studious', 'intellectual', 'independent'],

      {         fashion: ['comfortable', 'understated', 'practical']

        id: 'a',      },

        text: "Solving puzzles or reading by candlelight",       { 

        traits: ['analytical', 'studious', 'independent']        text: "Attending an elegant social gathering or cultural event", 

      },        traits: ['sophisticated', 'charismatic', 'cultured'],

      {         fashion: ['elegant', 'classic', 'sophisticated']

        id: 'b',      },

        text: "Hosting an elegant dinner party",       { 

        traits: ['regal', 'charismatic', 'dramatic']        text: "Planning an elaborate celebration or adventure", 

      },        traits: ['dramatic', 'ambitious', 'passionate'],

      {         fashion: ['luxurious', 'bold', 'glamorous']

        id: 'c',      },

        text: "Quiet time with close friends and family",       { 

        traits: ['loyal', 'principled', 'spirited']        text: "Spending quality time with close friends and family", 

      },        traits: ['loyal', 'compassionate', 'honest'],

      {         fashion: ['romantic', 'feminine', 'versatile']

        id: 'd',      }

        text: "Dancing under the stars at a lavish celebration",     ]

        traits: ['romantic', 'optimistic', 'extravagant']  },

      }  {

    ]    id: 6,

  },    category: 'fashion',

  {    question: "Which fashion philosophy resonates with you most?",

    id: 6,    options: [

    category: 'adversity',      { 

    question: "When things don't go according to plan, you:",        text: "Timeless elegance never goes out of style", 

    image: "⚡",        traits: ['classic', 'sophisticated', 'refined'],

    options: [        fashion: ['timeless', 'elegant', 'structured']

      {       },

        id: 'a',      { 

        text: "Carefully reassess and develop a new strategy",         text: "Fashion should be bold and make a statement", 

        traits: ['logical', 'observant', 'brilliant']        traits: ['dramatic', 'confident', 'ambitious'],

      },        fashion: ['bold', 'attention-grabbing', 'luxurious']

      {       },

        id: 'b',      { 

        text: "Adapt quickly and turn it into an opportunity",         text: "Comfort and practicality are most important", 

        traits: ['resourceful', 'strong-willed', 'resilient']        traits: ['practical', 'resourceful', 'down-to-earth'],

      },        fashion: ['comfortable', 'practical', 'versatile']

      {       },

        id: 'c',      { 

        text: "Stand firm in your principles and persevere",         text: "Style should reflect your inner romantic soul", 

        traits: ['principled', 'brave', 'determined']        traits: ['romantic', 'spirited', 'dreamy'],

      },        fashion: ['romantic', 'feminine', 'flowing']

      {       }

        id: 'd',    ]

        text: "Keep believing that everything will work out beautifully",   },

        traits: ['optimistic', 'romantic', 'passionate']  {

      }    id: 7,

    ]    category: 'social',

  },    question: "In your friend group, you're known as:",

  {    options: [

    id: 7,      { 

    category: 'communication',        text: "The brilliant problem-solver everyone turns to", 

    question: "Your communication style is best described as:",        traits: ['brilliant', 'analytical', 'resourceful'],

    image: "💬",        fashion: ['smart', 'sophisticated', 'classic']

    options: [      },

      {       { 

        id: 'a',        text: "The natural leader who takes charge", 

        text: "Precise and intellectual, choosing words carefully",         traits: ['regal', 'confident', 'strategic'],

        traits: ['analytical', 'brilliant', 'logical']        fashion: ['luxurious', 'dramatic', 'commanding']

      },      },

      {       { 

        id: 'b',        text: "The loyal friend who's always there for others", 

        text: "Commanding and influential, inspiring action",         traits: ['loyal', 'compassionate', 'protective'],

        traits: ['regal', 'charismatic', 'ambitious']        fashion: ['elegant', 'dependable', 'classic']

      },      },

      {       { 

        id: 'c',        text: "The dreamer who inspires others to reach for more", 

        text: "Warm and sincere, building genuine connections",         traits: ['optimistic', 'romantic', 'idealistic'],

        traits: ['loyal', 'spirited', 'principled']        fashion: ['glamorous', 'trendy', 'inspiring']

      },      }

      {     ]

        id: 'd',  },

        text: "Passionate and expressive, wearing your heart on your sleeve",   {

        traits: ['dramatic', 'passionate', 'romantic']    id: 8,

      }    category: 'goals',

    ]    question: "Your ultimate life goal is to:",

  },    options: [

  {      { 

    id: 8,        text: "Make groundbreaking discoveries and advance human knowledge", 

    category: 'legacy',        traits: ['brilliant', 'intellectual', 'curious'],

    question: "How would you want to be remembered?",        fashion: ['sophisticated', 'timeless', 'understated']

    image: "🏛️",      },

    options: [      { 

      {         text: "Build an empire and leave a powerful legacy", 

        id: 'a',        traits: ['ambitious', 'regal', 'strategic'],

        text: "As someone who solved the unsolvable and advanced human knowledge",         fashion: ['luxurious', 'golden', 'commanding']

        traits: ['brilliant', 'analytical', 'observant']      },

      },      { 

      {         text: "Find true love and create a beautiful life together", 

        id: 'b',        traits: ['romantic', 'passionate', 'idealistic'],

        text: "As a powerful leader who changed the world",         fashion: ['romantic', 'elegant', 'dreamy']

        traits: ['regal', 'ambitious', 'charismatic']      },

      },      { 

      {         text: "Protect and help those you care about most", 

        id: 'c',        traits: ['loyal', 'compassionate', 'brave'],

        text: "As someone who stood up for what's right and helped others",         fashion: ['practical', 'dependable', 'strong']

        traits: ['principled', 'brave', 'loyal']      }

      },    ]

      {   }

        id: 'd',];

        text: "As someone who loved deeply and lived passionately", 

        traits: ['romantic', 'passionate', 'dramatic']export const calculateCharacterMatch = (answers) => {

      }  const traitScores = {};

    ]  const fashionScores = {};

  }

];  // Calculate scores based on answers

  answers.forEach(answer => {

// Character matching algorithm    answer.traits.forEach(trait => {

export const calculateCharacterMatch = (answers) => {      traitScores[trait] = (traitScores[trait] || 0) + 1;

  const traitCounts = {};    });

      answer.fashion.forEach(style => {

  // Count trait occurrences from answers      fashionScores[style] = (fashionScores[style] || 0) + 1;

  answers.forEach(answer => {    });

    answer.traits.forEach(trait => {  });

      traitCounts[trait] = (traitCounts[trait] || 0) + 1;

    });  // Calculate match scores for each character

  });  const characterScores = characters.map(character => {

    let score = 0;

  // Character scoring based on traits    

  const characterScores = {    // Score based on personality traits

    'sherlock-holmes': 0,    character.traits.forEach(trait => {

    'elizabeth-bennet': 0,      if (traitScores[trait]) {

    'hermione-granger': 0,        score += traitScores[trait] * 2; // Weight personality traits more heavily

    'jay-gatsby': 0,      }

    'cleopatra': 0,    });

    'scarlett-ohara': 0

  };    // Score based on fashion preferences

    character.fashion.forEach(style => {

  // Sherlock Holmes traits      if (fashionScores[style]) {

  ['analytical', 'observant', 'logical', 'independent', 'brilliant'].forEach(trait => {        score += fashionScores[style];

    characterScores['sherlock-holmes'] += (traitCounts[trait] || 0) * 2;      }

  });    });



  // Elizabeth Bennet traits    return {

  ['witty', 'independent', 'spirited', 'intelligent', 'principled'].forEach(trait => {      character,

    characterScores['elizabeth-bennet'] += (traitCounts[trait] || 0) * 2;      score,

  });      matchPercentage: Math.min(Math.round((score / (answers.length * 2)) * 100), 100)

    };

  // Hermione Granger traits  });

  ['brilliant', 'studious', 'loyal', 'brave', 'resourceful'].forEach(trait => {

    characterScores['hermione-granger'] += (traitCounts[trait] || 0) * 2;  // Sort by score and return top matches

  });  characterScores.sort((a, b) => b.score - a.score);

  

  // Jay Gatsby traits  return {

  ['romantic', 'optimistic', 'extravagant', 'mysterious', 'passionate'].forEach(trait => {    primaryMatch: characterScores[0],

    characterScores['jay-gatsby'] += (traitCounts[trait] || 0) * 2;    secondaryMatches: characterScores.slice(1, 3),

  });    allMatches: characterScores

  };

  // Cleopatra traits};
  ['regal', 'intelligent', 'charismatic', 'ambitious', 'dramatic'].forEach(trait => {
    characterScores['cleopatra'] += (traitCounts[trait] || 0) * 2;
  });

  // Scarlett O'Hara traits
  ['determined', 'strong-willed', 'dramatic', 'resilient', 'ambitious'].forEach(trait => {
    characterScores['scarlett-ohara'] += (traitCounts[trait] || 0) * 2;
  });

  // Find the character with the highest score
  const winner = Object.keys(characterScores).reduce((a, b) => 
    characterScores[a] > characterScores[b] ? a : b
  );

  const maxScore = characterScores[winner];
  const percentage = Math.min(Math.round((maxScore / (answers.length * 2)) * 100), 100);

  return {
    characterId: winner,
    score: percentage,
    correctAnswers: Math.round((percentage / 100) * answers.length),
    totalQuestions: answers.length,
    traitCounts
  };
};