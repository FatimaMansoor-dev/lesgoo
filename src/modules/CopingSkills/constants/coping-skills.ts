// Type
interface CopingSkill {
  slug: string;
  skill: string;
  description: string;
  descriptionLong: string;
  icon: string;
  subIcon: string;
  subSkills: SubSkill[];
  gradient: string;
  stroke?: string;
  text?: string;
  descriptionClassname?: string;
}

interface SubSkill {
  title: string;
  description: string;
}

export const skillfulLivingItems: CopingSkill[] = [
  {
    slug: 'build-confidence',
    skill: 'Build Confidence',
    description:
      'Boosting confidence is all about giving yourself props for the wins, big or small. ',
    descriptionLong:
      "Confidence isn't something you're just born with — it's a skill you can work on. So, keep at it, give yourself a high-five for every little win!",
    icon: 'build-confidence.svg',
    subIcon: 'SubSkills/build-confidence.svg',
    subSkills: [
      {
        title: 'Set Realistic Goals',
        description:
          'Break down larger goals into smaller, achievable tasks to build confidence through accomplishment.',
      },
      {
        title: 'Practice Self-Compassion',
        description:
          'Treat yourself with kindness and understanding, acknowledging your strengths and areas for growth.',
      },
      {
        title: 'Celebrate Your Achievements',
        description:
          'Take time to celebrate even small victories, recognizing your progress and accomplishments.',
      },
      {
        title: 'Use Positive Affirmations',
        description:
          'Replace negative self-talk with positive affirmations to reinforce self-belief and confidence.',
      },
    ],
    gradient: 'bg-gradient-to-br from-[#ffffff] to-[#CCF3F4]',
    stroke: 'border-[2px] border-[#00C0C5]',
    text: 'text-[#00C0C5]',
    descriptionClassname: 'max-w-[31rem] lg:max-w-[82%]',
  },
  {
    slug: 'increase-motivation',
    skill: 'Increase Motivation',
    description: "Dive into challenges like they're adventures, knowing they'll make you.",
    descriptionLong:
      'Motivation is the spark that ignites action and drives you to keep pushing forward. So, tap into motivation and harness its power!',
    icon: 'increase-motivation.svg',
    subIcon: 'SubSkills/increase-motivation.svg',
    subSkills: [
      {
        title: 'Set Clear Goals',
        description:
          'Establish specific, measurable, and achievable goals to provide direction and purpose.',
      },
      {
        title: 'Break Tasks into Manageable Steps',
        description:
          'Divide larger tasks into smaller, more manageable steps to prevent overwhelm and maintain momentum.',
      },
      {
        title: 'Find Your Why',
        description:
          'Identify the underlying reasons behind your goals and connect with your deeper motivations for pursuing them.',
      },
      {
        title: 'Celebrate Your Achievements',
        description:
          'Take time to celebrate even small victories, recognizing your progress and accomplishments.',
      },
    ],
    gradient: 'bg-gradient-to-br from-[#ffffff] to-[#E9EDE3]',
    stroke: 'border-[2px] border-[#689647]',
    text: 'text-[#689647]',
    descriptionClassname: 'max-w-[31rem] lg:max-w-[82%]',
  },
  {
    slug: 'reduce-stress',
    skill: 'Reduce Stress',
    description:
      'Reducing stress is like hitting the reset button. Your mind & body will thank you.',
    descriptionLong:
      "When you cut down on stress, you're not just giving yourself a mental breather; you're also doing your body a huge favor!",
    icon: 'reduce-stress.svg',
    subIcon: 'SubSkills/reduce-stress.svg',
    subSkills: [
      {
        title: 'Practice Deep Breathing',
        description:
          "Take slow, deep breaths to activate the body's relaxation response and calm the nervous system.",
      },
      {
        title: 'Engage in Physical Activity',
        description: 'Exercise regularly to release endorphins, reduce tension, and improve mood.',
      },
      {
        title: 'Prioritize Self-Care',
        description:
          'Make time for activities that bring you joy and relaxation, such as reading, listening to music, or taking a bath.',
      },
      {
        title: 'Practice Mindfulness',
        description:
          'Incorporate mindfulness techniques such as meditation or yoga to increase present-moment awareness and reduce stress.',
      },
    ],
    gradient: 'bg-gradient-to-br from-[#ffffff] to-[#F9E6F8]',
    stroke: 'border-[2px] border-[#E485E1]',
    text: 'text-[#E485E1]',
    descriptionClassname: 'max-w-[32.3125rem] lg:max-w-[82%]',
  },
  {
    slug: 'develop-awareness',
    skill: 'Develop Awareness',
    description: "When you tune in to yourself and get what makes you tick, it's like unlocking.",
    descriptionLong:
      'Heightened awareness allows you to navigate life with greater clarity and intentionality, making conscious choices aligned with your values!',
    icon: 'develop-awareness.svg',
    subIcon: 'SubSkills/develop-awareness.svg',
    subSkills: [
      {
        title: 'Practice Mindfulness',
        description:
          'Engage in mindfulness exercises such as meditation, deep breathing, or body scans to cultivate present-moment awareness.',
      },
      {
        title: 'Observe Your Thoughts',
        description:
          'Notice your thoughts without judgment, observing them as they come and go without getting caught up in them.',
      },
      {
        title: 'Pay Attention to Your Senses',
        description:
          'Tune into your senses and become more aware of the sights, sounds, smells, tastes, and sensations around you.',
      },
      {
        title: 'Practice Active Listening',
        description:
          'Listen attentively to others without interrupting or planning your response, focusing on understanding their perspective.',
      },
    ],
    gradient: 'bg-gradient-to-br from-[#ffffff] to-[#FCDED4]',
    stroke: 'border-[2px] border-[#F07E58]',
    text: 'text-[#F07E58]',
    descriptionClassname: 'max-w-[31rem] lg:max-w-[82%]',
  },
  {
    slug: 'improve-relationships',
    skill: 'Improve Relationships',
    description:
      'Improving relationships makes life sweeter! Find out how to strengthen and deepen connections.',
    descriptionLong:
      'Investing in connections, open communication, and expressions of gratitude can profoundly impact your relationships and life balance!',
    icon: 'improve-relationships.svg',
    subIcon: 'SubSkills/improve-relationships.svg',
    subSkills: [
      {
        title: 'Effective Communication',
        description:
          "Practice active listening, express your thoughts and feelings openly, and strive to understand your partner's perspective.",
      },
      {
        title: 'Show Appreciation',
        description:
          "Acknowledge and express gratitude for your partner's efforts, strengths, and positive qualities regularly.",
      },
      {
        title: 'Prioritize Quality Time',
        description:
          'Dedicate uninterrupted time to spend together, engaging in activities that strengthen your bond and connection.',
      },
      {
        title: 'Foster Trust',
        description:
          'Be honest, reliable, and consistent in your words and actions to build trust and reliability in your relationship.',
      },
    ],
    gradient: 'bg-gradient-to-br from-[#ffffff] to-[#CCF3F4]',
    stroke: 'border-[2px] border-[#00C0C5]',
    text: 'text-[#00C0C5]',
    descriptionClassname: 'max-w-[31rem] lg:max-w-[82%]',
  },
  {
    slug: 'boost-happiness',
    skill: 'Boost Happiness',
    description:
      "Boosting happiness is like adding fuel to your soul's engine—it powers you through life with a smile.",
    descriptionLong:
      'Why not sprinkle a little extra happiness into your day? Whether it’s gratitude or pursuing your passions, every moment is a step towards happiness!',
    icon: 'boost-happiness.svg',
    subIcon: 'SubSkills/boost-happiness.svg',
    subSkills: [
      {
        title: 'Practice Gratitude',
        description:
          "Take time each day to reflect on the things you're grateful for, no matter how small, and express appreciation for them.",
      },
      {
        title: 'Cultivate Positive Relationships',
        description:
          'Surround yourself with supportive, positive people who uplift and encourage you, and invest time and effort into nurturing those relationships.',
      },
      {
        title: 'Engage in Acts of Kindness',
        description:
          "Perform random acts of kindness for others, whether it's a smile, a compliment, or a helping hand, to boost your own mood and well-being.",
      },
      {
        title: 'Practice Mindfulness',
        description:
          'Be present in the moment, focusing on the here and now, and engage in mindfulness practices such as meditation or deep breathing to reduce stress and increase happiness.',
      },
    ],
    gradient: 'bg-gradient-to-br from-[#ffffff] to-[#E9EDE3]',
    stroke: 'border-[2px] border-[#689647]',
    text: 'text-[#689647]',
    descriptionClassname: 'max-w-[31rem] lg:max-w-[82%]',
  },
  {
    slug: 'enhance-self-love',
    skill: 'Enhance Self-Love',
    description:
      'By nurturing a deep sense of self-worth and appreciation, you cultivate a foundation of strength.',
    descriptionLong:
      'Self-love is the ultimate act of kindness towards yourself. It’s about accepting yourself as you are with kindness and compassion!',
    icon: 'enhance-self-love.svg',
    subIcon: 'SubSkills/enhance-self-love.svg',
    subSkills: [
      {
        title: 'Practice Self-Compassion',
        description:
          'Treat yourself with kindness, understanding, and empathy, especially during difficult times or when facing challenges.',
      },
      {
        title: 'Cultivate Positive Self-Talk',
        description:
          'Challenge negative self-talk and replace it with affirming, supportive statements that acknowledge your worth and value.',
      },
      {
        title: 'Set Boundaries',
        description:
          'Establish and maintain healthy boundaries in your relationships and commitments to prioritize your well-being and protect your emotional health.',
      },
      {
        title: 'Practice Self-Care',
        description:
          'Make self-care a priority by engaging in activities that nourish your body, mind, and spirit, such as exercise, meditation, hobbies, and relaxation techniques.',
      },
    ],
    gradient: 'bg-gradient-to-br from-[#ffffff] to-[#F9E6F8]',
    stroke: 'border-[2px] border-[#E485E1]',
    text: 'text-[#E485E1]',
    descriptionClassname: 'max-w-[31rem] lg:max-w-[82%]',
  },
  {
    slug: 'explore-coping-skills',
    skill: 'Explore Coping Skills',
    description:
      'Discover effective coping strategies to navigate life’s challenges with resilience and grace.',
    descriptionLong:
      'Life isn’t just about getting through tough times, it’s about thriving. Building healthy coping skills can empower you to live your best life!',
    icon: 'explore-coping-skills.svg',
    subIcon: 'SubSkills/explore-coping-skills.svg',
    subSkills: [
      {
        title: 'Spend time in nature',
        description:
          'Take a walk in the park, hike in the woods, or sit by a body of water to connect with the natural world and promote feelings of calm and well-being.',
      },
      {
        title: 'Practice mindfulness',
        description:
          'Engage in mindfulness activities such as meditation, deep breathing, or yoga to cultivate present-moment awareness and reduce stress.',
      },
      {
        title: 'Listen to music',
        description:
          'Create a playlist of your favorite songs or explore new genres to uplift your mood and boost your spirits.',
      },
      {
        title: 'Engage in hobbies',
        description:
          "Dedicate time to activities you enjoy, whether it's painting, gardening, cooking, or playing a musical instrument, to promote relaxation and creativity.",
      },
    ],
    gradient: 'bg-gradient-to-br from-[#ffffff] to-[#FCDED4]',
    stroke: 'border-[2px] border-[#F07E58]',
    text: 'text-[#F07E58]',
    descriptionClassname: 'max-w-[31rem] lg:max-w-[82%]',
  },
];
