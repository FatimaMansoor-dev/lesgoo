// Define the type for reflection items
interface ReflectionsItem {
  category: string;
  questions: string[];
  color: string;
  hoverColor: string;
  borderColor: string;
}

// Define a mapping for colors based on categories
const REFLECTIONS_COLORS: Record<string, { color: string; hoverColor: string; borderColor: string }> = {
  'Gratitude': {
    color: 'bg-[#00C0C5]',
    hoverColor: 'hover:bg-[#35a3a7]',
    borderColor: 'border-[#00C0C5]',
  },
  'Motivation': {
    color: 'bg-[#F07E58]',
    hoverColor: 'hover:bg-[#df714c]',
    borderColor: 'border-[#F07E58]',
  },
  'Self Discovery': {
    color: 'bg-[#B38DB2]',
    hoverColor: 'hover:bg-[#ab80aa]',
    borderColor: 'border-[#B38DB2]',
  },
  'Goals': {
    color: 'bg-[#9AC17E]',
    hoverColor: 'hover:bg-[#89b46b]',
    borderColor: 'border-[#9AC17E]',
  },
  'Celebrate Wins': {
    color: 'bg-[#539ED9]',
    hoverColor: 'hover:bg-[#4b90c4]',
    borderColor: 'border-[#539ED9]',
  },
  'Manifesting': {
    color: 'bg-[#D96D99]',
    hoverColor: 'hover:bg-[#c45b88]',
    borderColor: 'border-[#D96D99]',
  },
};

// Define the reflection contents without the color properties
const RAW_REFLECTIONS_CONTENTS: Omit<ReflectionsItem, 'color' | 'borderColor' | 'hoverColor'>[] = [
  {
    category: 'Gratitude',
    questions: [
      "What are three things you're thankful for today?",
      'Who is someone in your life that you appreciate, and why?',
      'Describe a small moment from today that brought you joy.',
      'What challenges have you faced recently, and what have they taught you to be grateful for?',
      'Write about a place that makes you feel peaceful and grateful to visit.',
    ],
  },
  {
    category: 'Motivation',
    questions: [
      "What is one thing you've accomplished recently that you're proud of?",
      'What motivates you to get out of bed each morning?',
      'Describe a time when you overcame a challenge - what kept you going?',
      'What are three things you can do today to move closer to your goals?',
      'Who inspires you, and what qualities do they have that you admire?',
    ],
  },
  {
    category: 'Self Discovery',
    questions: [
      'What are your top three core values, and how do they guide your decisions?',
      'When do you feel most like yourself? Describe that moment.',
      'What activities make you lose track of time because you enjoy them so much?',
      'How do you handle stress, and what have you learned about yourself through stressful situations?',
      "What is a belief or habit you'd like to change, and why?",
    ],
  },
  {
    category: 'Goals',
    questions: [
      'What is one short-term goal you want to achieve this month? What steps will you take?',
      'Where do you see yourself in five years, and what do you need to do to get there?',
      "What's one skill you'd like to develop, and why is it important to you?",
      'How do you measure success in your life? Are your current goals aligned with this definition?',
      'Reflect on a past goal you achieved. What did you learn from the process, and how can you apply it to future goals?',
    ],
  },
  {
    category: 'Celebrate Wins',
    questions: [
      'What is one small win you achieved today, and how did it make you feel?',
      'Reflect on a recent challenge. What small steps did you take that moved you closer to your goal?',
      'Describe a moment when you felt proud of yourself this week. What made it a win for you?',
      'How have small wins in the past contributed to your larger successes?',
      'What is one small habit or routine that has made a positive difference in your daily life?',
    ],
  },
  {
    category: 'Manifesting',
    questions: [
      'What is my wish or desire, and how can I vividly imagine it as already fulfilled?',
      'How can I feel the emotions of having already achieved my goal?',
      'If my dream life were already true, how would I think, feel, and act?',
      'What assumptions do I currently hold about myself that I need to change in order to align with my desired reality?',
      'Before I fall asleep, what specific scene can I imagine that implies my wish has been fulfilled?',
      'How can I bring more awareness to my inner conversations to ensure they reflect my desired outcomes?',
      'What evidence of my manifestation can I recognize in my current life, no matter how small?',
      'What does faith mean to me, and how can I deepen my faith in the power of my imagination?',
    ],
  },
];

// Map through the raw reflection contents and assign colors dynamically
const REFLECTIONS_CONTENTS: ReflectionsItem[] = RAW_REFLECTIONS_CONTENTS.map(item => ({
  ...item,
  ...REFLECTIONS_COLORS[item.category],
}));

// Export type and data
export { REFLECTIONS_CONTENTS };
export type { ReflectionsItem };
