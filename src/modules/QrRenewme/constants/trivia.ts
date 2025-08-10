// Define the type for trivia items
interface TriviaItem {
  category: string;
  question: string;
  answer: string;
  color: string;
  borderColor: string;
  lightBgColor: string;
  textColor: string;
}

// Define a mapping for colors based on categories
const CATEGORY_COLORS: Record<
  string,
  { color: string; borderColor: string; lightBgColor: string; textColor: string }
> = {
  'Fun Fact': {
    color: 'bg-[#132979]',
    borderColor: 'border-[#132979]',
    lightBgColor: 'bg-white',
    textColor: 'text-[#132979]',
  },
  'Guess What': {
    color: 'bg-[#A251AB]',
    borderColor: 'border-[#A251AB]',
    lightBgColor: 'bg-white',
    textColor: 'text-[#A251AB]',
  },
  'Ever Wondered': {
    color: 'bg-[#4F65CC]',
    borderColor: 'border-[#4F65CC]',
    lightBgColor: 'bg-white',
    textColor: 'text-[#4F65CC]',
  },
};

// Define the trivia contents without the color properties
const RAW_TRIVIA_CONTENTS: Omit<
  TriviaItem,
  'color' | 'borderColor' | 'lightBgColor' | 'textColor'
>[] = [
  {
    category: 'Fun Fact',
    question: 'What is the recommended daily intake of fruits and vegetables for adults?',
    answer: 'Adults should eat at least five portions of fruits and vegetables per day.',
  },
  {
    category: 'Fun Fact',
    question: 'Which type of exercise is recommended for improving cardiovascular health?',
    answer: 'Aerobic exercise is recommended for improving cardiovascular health.',
  },
  {
    category: 'Fun Fact',
    question: "What is the recommended duration for a good night's sleep for adults?",
    answer: 'Adults should aim for 7-9 hours of sleep per night.',
  },
  {
    category: 'Fun Fact',
    question: 'Which nutrient is essential for building and repairing body tissues?',
    answer: 'Protein is essential for building and repairing body tissues.',
  },
  {
    category: 'Guess What',
    question: 'What is the recommended frequency for performing strength training exercises?',
    answer: 'Strength training exercises should be performed at least twice a week.',
  },
  {
    category: 'Guess What',
    question: 'What is the average body temperature in degrees Celsius?',
    answer: 'The average body temperature is 37 degrees Celsius.',
  },
  {
    category: 'Guess What',
    question: 'What is the primary function of the immune system?',
    answer: 'The primary function of the immune system is to protect the body from infections.',
  },
  {
    category: 'Guess What',
    question: 'What are the three macronutrients essential for human nutrition?',
    answer: 'The three macronutrients are carbohydrates, proteins, and fats.',
  },
  {
    category: 'Ever Wondered',
    question: 'What is the primary benefit of consuming dietary fiber?',
    answer:
      'Dietary fiber helps to regulate bowel movements and maintain a healthy digestive system.',
  },
  {
    category: 'Ever Wondered',
    question: 'Which vitamin is essential for healthy vision and immune function?',
    answer:
      'Vitamin A is essential for healthy vision and immune function. It is found in foods like carrots and sweet potatoes.',
  },
  {
    category: 'Ever Wondered',
    question: 'What is the primary benefit of omega-3 fatty acids?',
    answer: 'Omega-3 fatty acids help to reduce inflammation in the body and support brain health.',
  },
  {
    category: 'Ever Wondered',
    question: 'Which vitamin is known for its antioxidant properties and skin health benefits?',
    answer: 'Vitamin E is known for its antioxidant properties and skin health benefits.',
  },
];

// Map through the raw trivia contents and assign colors dynamically
const TRIVIA_CONTENTS: TriviaItem[] = RAW_TRIVIA_CONTENTS.map(item => ({
  ...item,
  ...CATEGORY_COLORS[item.category],
}));

// Export type and data
export { TRIVIA_CONTENTS };
export type { TriviaItem };
