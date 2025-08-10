interface CardItems {
  title: string;
  description: string[];
}

interface MoodHubDetailsItem {
  slug: string;
  title: string;
  description?: string;
  img?: string;
  cardItem?: CardItems[];
}

// Define the mood-hub details contents
const MOOD_HUB_DETAILS: MoodHubDetailsItem[] = [
  {
    slug: 'sleep',
    title: 'Sleep',
    description: 'To enhance sleep quality and improve mood, consider these strategies',
    img: '/MoodHub/Icon/subpage/sleep.svg',
    cardItem: [
      {
        title: 'Consistent sleep schedule',
        description: [
          'Go to bed and wake up at the same time daily, even on weekends.',
          'This helps regulate your body\'s internal clock.',
        ],
      },
      {
        title: 'Create a relaxing bedtime routine',
        description: [
          'Engage in calming activities like reading, gentle stretching, or meditation.',
          'Avoid screens 1-2 hours before bed due to blue light exposure.',
        ],
      },
      {
        title: 'Optimize your sleep environment',
        description: [
          'Keep your bedroom dark, quiet, and cool (around 65°F or 18°C).',
          'Invest in a comfortable mattress and pillows.',
        ],
      },
      {
        title: 'Manage light exposure',
        description: [
          'Get sunlight during the day to reinforce your circadian rhythm.',
          'Use blackout curtains or an eye mask at night if needed.',
        ],
      },
      {
        title: 'Exercise regularly',
        description: [
          'Aim for at least 30 minutes of moderate exercise most days.',
          'Avoid vigorous exercise close to bedtime.',
        ],
      },
      {
        title: 'Watch your diet',
        description: [
          'Limit caffeine, especially in the afternoon and evening.',
          'Avoid large meals close to bedtime.',
          'Consider a light snack with sleep-promoting nutrients (e.g., tryptophan-rich foods).',
        ],
      },
      {
        title: 'Manage stress',
        description: [
          'Practice relaxation techniques like deep breathing or progressive muscle relaxation.',
          'Try journaling to process thoughts before bed.',
        ],
      },
      {
        title: 'Limit naps',
        description: ['If you nap, keep it short (20-30 minutes) and not too late in the day.'],
      },
      {
        title: 'Consider cognitive behavioral therapy for insomnia (CBT-I)',
        description: ['This can help address underlying thought patterns affecting sleep.'],
      },
      {
        title: 'Limit alcohol and nicotine',
        description: [
          'Both can disrupt sleep patterns, even if they seem to help you fall asleep initially.',
        ],
      },
      {
        title: 'Natural light alarm clocks',
        description: ['These can help you wake up more naturally, potentially improving mood.'],
      },
      {
        title: 'Mindfulness and meditation',
        description: ['Regular practice can improve both sleep quality and mood.'],
      },
    ],
  },
  {
    slug: 'diet',
    title: 'Diet',
    description:
      'Improving your diet can have a significant impact on mood.',
    img: '/MoodHub/Icon/subpage/diet.svg',
    cardItem: [
      {
        title: 'Increase omega-3 fatty acids',
        description: [
          'Found in fatty fish (salmon, mackerel, sardines), walnuts, and flaxseeds.',
          'Associated with reduced depression and improved brain function.',
        ],
      },
      {
        title: 'Consume more complex carbohydrates',
        description: [
          'Whole grains, legumes, and vegetables.',
          'Help stabilize blood sugar and boost serotonin production.',
        ],
      },
      {
        title: 'Include protein-rich foods',
        description: [
          'Lean meats, fish, eggs, and plant-based proteins.',
          'Provide amino acids necessary for neurotransmitter production.',
        ],
      },
      {
        title: 'Boost B vitamins',
        description: [
          'Found in leafy greens, legumes, nuts, and whole grains.',
          'Important for brain health and mood regulation.',
        ],
      },
      {
        title: 'Increase fermented foods',
        description: [
          'Yogurt, kefir, sauerkraut, kimchi.',
          'Support gut health, which is linked to mood via the gut-brain axis.',
        ],
      },
      {
        title: 'Incorporate more fruits and vegetables',
        description: [
          'Rich in antioxidants and nutrients that support brain health.',
          'Aim for a variety of colors to get diverse nutrients.',
        ],
      },
      {
        title: 'Stay hydrated',
        description: [
          'Even mild dehydration can negatively affect mood.',
          'Aim for 8-10 glasses of water daily.',
        ],
      },
      {
        title: 'Limit processed foods and added sugars',
        description: ['Can lead to blood sugar spikes and crashes, affecting mood.'],
      },
      {
        title: 'Consider probiotic-rich foods',
        description: ['May help reduce anxiety and depression symptoms.'],
      },
      {
        title: 'Include mood-boosting spices',
        description: [
          'Turmeric, saffron, and oregano have shown potential mood-enhancing properties.',
        ],
      },
      {
        title: 'Moderate caffeine intake',
        description: ['While it can boost mood short-term, excessive intake may increase anxiety.'],
      },
    ],
  },
  {
    slug: 'exercise',
    title: 'Exercise',
    description:
      'Improving your exercise routine can have a significant positive impact on mood.',
    img: '/MoodHub/Icon/subpage/exercise.svg',
    cardItem: [
      {
        title: 'Consistency',
        description: [
          'Aim for regular exercise, ideally 30 minutes most days of the week.',
          'Consistent exercise has more lasting effects on mood than sporadic intense workouts.',
        ],
      },
      {
        title: 'Aerobic exercise',
        description: [
          'Activities like jogging, cycling, swimming, or brisk walking.',
          'Releases endorphins, the body\'s natural mood elevators.',
        ],
      },
      {
        title: 'Strength training',
        description: [
          'Can boost self-esteem and reduce symptoms of depression.',
          'Aim for 2-3 sessions per week, targeting major muscle groups.',
        ],
      },
      {
        title: 'Yoga or tai chi',
        description: [
          'Combines physical activity with mindfulness.',
          'Can reduce stress, anxiety, and improve overall mood.',
        ],
      },
      {
        title: 'Outdoor exercise',
        description: [
          'Exercising in nature can provide additional mood benefits.',
          'Try hiking, trail running, or outdoor cycling.',
        ],
      },
      {
        title: 'Group fitness classes',
        description: [
          'Provides social interaction along with physical activity.',
          'Can increase motivation and enjoyment.',
        ],
      },
      {
        title: 'High-Intensity Interval Training (HIIT)',
        description: [
          'Short bursts of intense exercise followed by rest periods.',
          'Can be more time-efficient and boost mood quickly.',
        ],
      },
      {
        title: 'Dance',
        description: [
          'Combines physical activity with music, which can enhance mood.',
          'Try dance classes or just dance at home.',
        ],
      },
      {
        title: 'Set achievable goals',
        description: [
          'Accomplishing fitness goals can boost self-esteem and mood.',
          'Start small and gradually increase difficulty.',
        ],
      },
      {
        title: 'Morning exercise',
        description: [
          'Can set a positive tone for the day.',
          'May improve sleep quality, further enhancing mood.',
        ],
      },
      {
        title: 'Mindful exercise',
        description: [
          'Focus on your body and breathing during exercise.',
          'Can enhance the mood-boosting effects.',
        ],
      },
      {
        title: 'Variety',
        description: [
          'Try different types of exercise to prevent boredom.',
          'Challenges your body in new ways, potentially increasing mood benefits.',
        ],
      },
    ],
  },
  {
    slug: 'stress-levels',
    title: 'Stress levels',
    description:
      'Balancing stress levels is crucial for regulating mood. Here are effective strategies to manage stress and improve your overall emotional well-being',
    img: '/MoodHub/Icon/subpage/stress.svg',
    cardItem: [
      {
        title: 'Practice mindfulness and meditation',
        description: [
          'Daily mindfulness exercises can reduce stress and anxiety.',
          'Start with short sessions (5-10 minutes) and gradually increase.',
        ],
      },
      {
        title: 'Time management',
        description: [
          'Prioritize tasks and break large projects into smaller, manageable steps.',
          'Use tools like calendars or to-do lists to stay organized.',
        ],
      },
      {
        title: 'Set boundaries',
        description: [
          'Learn to say no to additional commitments when you\'re at capacity.',
          'Establish clear work-life boundaries, especially if working from home.',
        ],
      },
      {
        title: 'Regular exercise',
        description: [
          'Aim for at least 150 minutes of moderate exercise per week.',
          'Choose activities you enjoy to make it sustainable.',
        ],
      },
      {
        title: 'Adequate sleep',
        description: [
          'Maintain a consistent sleep schedule.',
          'Aim for 7-9 hours of quality sleep per night.',
        ],
      },
      {
        title: 'Deep breathing exercises',
        description: [
          'Practice techniques like box breathing or diaphragmatic breathing.',
          'Can quickly reduce stress in challenging moments.',
        ],
      },
      {
        title: 'Connect with others',
        description: [
          'Maintain strong social connections.',
          'Share your feelings with trusted friends or family members.',
        ],
      },
      {
        title: 'Limit caffeine and alcohol',
        description: ['Both can exacerbate stress and anxiety if consumed in excess.'],
      },
      {
        title: 'Practice gratitude',
        description: [
          'Keep a gratitude journal or share things you\'re grateful for daily.',
          'Helps shift focus from stressors to positive aspects of life.',
        ],
      },
      {
        title: 'Engage in hobbies',
        description: [
          'Regular participation in enjoyable activities can reduce stress.',
          'Make time for activities that bring you joy and relaxation.',
        ],
      },
      {
        title: 'Professional help',
        description: [
          'Consider talking to a therapist or counselor for additional support.',
          'They can provide personalized strategies for stress management.',
        ],
      },
      {
        title: 'Nature exposure',
        description: [
          'Spend time in nature or green spaces.',
          'Even short periods can reduce stress and improve mood.',
        ],
      },
      {
        title: 'Progressive muscle relaxation',
        description: [
          'Systematically tense and relax muscle groups.',
          'Can help reduce physical symptoms of stress.',
        ],
      },
      {
        title: 'Limit information overload',
        description: [
          'Set boundaries on news and social media consumption.',
          'Choose specific times to check updates rather than constant monitoring.',
        ],
      },
      {
        title: 'Nutrition',
        description: [
          'Maintain a balanced diet rich in fruits, vegetables, and whole grains.',
          'Avoid skipping meals, which can affect mood and stress levels.',
        ],
      },
    ],
  },
  {
    slug: 'hormones',
    title: 'Hormones',
    description:
      'Balancing hormone levels can significantly impact mood regulation. Here are some ways to help balance hormones naturally',
    img: '/MoodHub/Icon/subpage/hormones.svg',
    cardItem: [
      {
        title: 'Optimize sleep',
        description: [
          'Aim for 7-9 hours of quality sleep nightly.',
          'Consistent sleep-wake cycles help regulate cortisol and other hormones.',
        ],
      },
      {
        title: 'Manage stress',
        description: [
          'Practice stress-reduction techniques like meditation or yoga.',
          'Chronic stress can disrupt hormonal balance, especially cortisol levels.',
        ],
      },
      {
        title: 'Regular exercise',
        description: [
          'Engage in moderate exercise most days of the week.',
          'Helps regulate insulin, reduces cortisol, and boosts endorphins.',
        ],
      },
      {
        title: 'Balanced diet',
        description: [
          'Eat a diet rich in whole foods, lean proteins, and healthy fats.',
          'Include foods with hormone-balancing properties like cruciferous vegetables and fatty fish.',
        ],
      },
      {
        title: 'Limit sugar and refined carbs',
        description: [
          'Excessive intake can lead to insulin imbalances.',
          'Choose complex carbohydrates instead.',
        ],
      },
      {
        title: 'Stay hydrated',
        description: ['Proper hydration is crucial for hormone production and balance.'],
      },
      {
        title: 'Consider adaptogenic herbs',
        description: [
          'Herbs like ashwagandha, rhodiola, and holy basil may help balance stress hormones.',
          'Consult a healthcare provider before starting any herbal regimen.',
        ],
      },
      {
        title: 'Manage weight',
        description: [
          'Maintain a healthy weight as excess body fat can influence hormone production.',
        ],
      },
      {
        title: 'Limit alcohol consumption',
        description: ['Excessive alcohol can disrupt hormone balance, especially in women.'],
      },
      {
        title: 'Support gut health',
        description: [
          'A healthy gut microbiome can influence hormone balance.',
          'Include probiotic-rich foods or consider a probiotic supplement.',
        ],
      },
      {
        title: 'Get enough sunlight',
        description: [
          'Sunlight exposure helps regulate melatonin and vitamin D, which influence other hormones.',
        ],
      },
      {
        title: 'Regular health check-ups',
        description: [
          'Get hormone levels checked periodically, especially if experiencing symptoms.',
          'Work with a healthcare provider to address any imbalances.',
        ],
      },
      {
        title: 'Manage thyroid health',
        description: [
          'Have thyroid function checked regularly, especially if mood issues persist.',
          'Ensure adequate iodine intake through diet or supplements if recommended by a doctor.',
        ],
      },
      {
        title: 'Limit caffeine',
        description: ['Excessive caffeine can impact cortisol levels and sleep quality.'],
      },
    ],
  },
  {
    slug: 'social-interactions',
    title: 'Social interactions',
    description: 'Quality of relationships and social support systems play a crucial role in mood.',
    img: '/MoodHub/Icon/subpage/social.svg',
    cardItem: [
      {
        title: 'Set boundaries',
        description: [
          'Limit interactions with people who drain your energy or create stress. Prioritize time with those who uplift and support you.',
        ],
      },
      {
        title: 'Practice active listening',
        description: [
          'Focus on truly understanding others during conversations. Engaging deeply can help you feel more connected and appreciated.',
        ],
      },
      {
        title: 'Choose uplifting company',
        description: [
          'Surround yourself with positive, supportive people who contribute to your well-being.',
        ],
      },
      {
        title: 'Engage in meaningful conversations',
        description: [
          'Discuss topics that interest and inspire you rather than dwelling on negativity or gossip.',
        ],
      },
      {
        title: 'Take breaks from socializing',
        description: [
          'It\'s okay to take some time alone to recharge if social interactions feel overwhelming.',
        ],
      },
      {
        title: 'Seek out like-minded communities',
        description: [
          'Engage in groups or activities where you share common goals or interests, such as fitness classes, hobby groups, or mindfulness sessions.',
        ],
      },
      {
        title: 'Manage social media exposure',
        description: [
          'Limit time spent on social media if it tends to impact your mood negatively. Curate your feed to include uplifting or inspiring content.',
        ],
      },
      {
        title: 'Practice assertive communication',
        description: [
          'Be honest about your needs and feelings in social interactions. This helps prevent resentment and ensures healthier relationships.',
        ],
      },
      {
        title: 'Plan enjoyable social activities',
        description: [
          'Arrange social gatherings around activities you enjoy, like going for a walk, playing games, or attending events.',
        ],
      },
      {
        title: 'Be mindful of your emotional energy',
        description: [
          'Recognize when you\'re feeling drained or anxious and take action, such as excusing yourself from social situations or taking a deep breath to center yourself.',
        ],
      },
    ],
  },
  {
    slug: 'weather-and-seasons',
    title: 'Weather and Seasons',
    description:
      'Some people experience mood changes related to seasonal shifts or weather patterns.',
    img: '/MoodHub/Icon/subpage/weather.svg',
    cardItem: [
      {
        title: 'Maximize Natural Light Exposure',
        description: [
          'Spend time outdoors, especially in the morning, to soak up natural light even when it\'s cloudy.',
          'Increase exposure to sunlight in your living and working spaces.',
          'Light therapy can mimic natural sunlight and help improve mood, especially during darker months.',
        ],
      },
      {
        title: 'Maintain a Consistent Routine',
        description: [
          'Try to wake up and go to bed at the same time every day to regulate your body\'s internal clock.',
          'Regular exercise can boost mood and energy levels. Try indoor activities like yoga, stretching, or dancing when the weather is uninviting.',
        ],
      },
      {
        title: 'Eat a Balanced, Mood-Boosting Diet',
        description: [
          'Foods like salmon, walnuts, and flaxseeds can help improve brain function and mood.',
          'These can lead to energy crashes and worsen mood instability.',
          'Supplement your diet with foods like fortified dairy, mushrooms, and fatty fish, as vitamin D can be harder to get when there\'s less sunlight.',
        ],
      },
      {
        title: 'Stay Socially Connected',
        description: [
          'Even if you\'re feeling down, maintaining social connections can help lift your spirits.',
          'Look for indoor hobbies, clubs, or events to stay engaged with others, which can provide emotional support and reduce feelings of isolation.',
        ],
      },
      {
        title: 'Practice Mindfulness and Relaxation Techniques',
        description: [
          'Mindfulness practices can reduce stress and improve emotional regulation.',
          'Writing down things you\'re grateful for can shift your focus away from negative feelings triggered by seasonal changes.',
          'Hobbies like reading, crafting, or playing music can keep your mind active and reduce stress.',
        ],
      },
      {
        title: 'Get Professional Help if Needed',
        description: [
          'Cognitive-behavioral therapy (CBT) has been shown to help individuals cope with Seasonal Affective Disorder (SAD) or mood instability linked to weather changes.',
          'In some cases, medications like antidepressants can be helpful, especially if you\'re struggling with severe symptoms.',
        ],
      },
      {
        title: 'Exercise Regularly',
        description: [
          'Activities like yoga, home workouts, or indoor sports can help maintain a positive mood even when it\'s too cold or rainy outside.',
          'If the weather permits, outdoor activities, even in cooler temperatures, can elevate mood and provide fresh air.',
        ],
      },
      {
        title: 'Stay Warm and Cozy',
        description: [
          'Make your home inviting by using warm blankets, cozy lighting, and soothing scents.',
          'Relaxing in a warm bath can relieve tension and help combat the discomfort of colder weather.',
        ],
      },
    ],
  },
  {
    slug: 'work-environment',
    title: 'Work Environment',
    description:
      'Job satisfaction and workplace stress can affect your overall mood.',
    img: '/MoodHub/Icon/subpage/work.svg',
    cardItem: [
      {
        title: 'Take Short Breaks',
        description: [
          'Taking brief walks or even stepping outside for fresh air can help reset your mind and reduce stress.',
          'Every 20 minutes, look at something 20 feet away for at least 20 seconds to reduce eye strain and mental fatigue.',
        ],
      },
      {
        title: 'Practice Mindfulness',
        description: [
          'If you\'re feeling overwhelmed, take a few minutes to practice deep breathing to calm your nervous system.',
          'Even a quick 2-5 minute meditation during your break can help clear your mind and improve focus.',
        ],
      },
      {
        title: 'Stay Organized',
        description: [
          'Prioritize tasks in a to-do list and break larger projects into manageable chunks to avoid feeling overwhelmed.',
          'A clutter-free environment can promote a clearer mind and reduce stress.',
        ],
      },
      {
        title: 'Manage Expectations',
        description: [
          'If you\'re feeling overwhelmed or unsure about a task, ask for clarity or help rather than struggling in silence.',
          'Avoid overloading yourself with too many tasks. Be realistic about what you can achieve in a given time.',
        ],
      },
      {
        title: 'Practice Gratitude',
        description: [
          'Take a moment to appreciate the progress you\'ve made, even if it\'s just completing a small task.',
          'Instead of dwelling on challenges, try to think of one thing you\'re grateful for each day at work.',
        ],
      },
      {
        title: 'Take Care of Your Physical Health',
        description: [
          'Drink water regularly throughout the day to stay energized and focused.',
          'Keep energy-boosting snacks like nuts, fruits, or yogurt at your desk to avoid energy slumps.',
        ],
      },
      {
        title: 'Use Positive Self-Talk',
        description: [
          'When things get tough, remind yourself that you can handle challenges. Practice self-compassion and avoid harsh self-criticism.',
          'If you start feeling discouraged, try to reframe your thoughts into more constructive, solution-focused ones.',
        ],
      },
      {
        title: 'Stay Physically Active',
        description: [
          'Simple stretches can release tension and improve blood flow, boosting your mood and focus.',
          'Incorporating small amounts of physical activity, like walking or using the stairs, can help lift your spirits.',
        ],
      },
      {
        title: 'Stay Socially Connected',
        description: [
          'Having a supportive social circle at work can help reduce stress and create a more enjoyable work environment.',
          'Use your break time to chat or grab a coffee with a coworker. These interactions can boost mood and offer emotional support.',
        ],
      },
      {
        title: 'Set Boundaries',
        description: [
          'Learn to say no to extra tasks when you\'re already feeling overwhelmed.',
          'Avoid burnout by setting clear boundaries for when work ends, especially if you\'re working from home.',
        ],
      },
      {
        title: 'Focus on the Big Picture',
        description: [
          'If you\'re feeling stressed or frustrated, take a step back and remind yourself why you\'re doing your job, how it fits into your larger goals, or how it helps others.',
        ],
      },
      {
        title: 'Practice Emotional Regulation',
        description: [
          'Don\'t suppress your feelings. Acknowledge when you\'re feeling stressed, and take steps to address it—whether through a quick break or reaching out to a colleague.',
          'Find what helps you regain composure, whether it\'s deep breathing, journaling, or listening to calming music during breaks.',
        ],
      },
    ],
  },
  {
    slug: 'financial-situation',
    title: 'Financial Situation',
    description:
      'Economic stress or stability can influence mental well-being.',
    img: '/MoodHub/Icon/subpage/finance.svg',
    cardItem: [
      {
        title: 'Focus on What You Can Control',
        description: [
          'Take small steps to organize your finances by creating a budget, tracking expenses, and prioritizing essential spending.',
          'Focus on actions you can control, like reducing unnecessary expenses or saving even a small amount.',
        ],
      },
      {
        title: 'Practice Stress-Reduction Techniques',
        description: [
          'Practicing breathing techniques can help calm your nervous system and reduce feelings of overwhelm.',
          'These practices help keep you grounded in the present moment and reduce anxiety about the future.',
        ],
      },
      {
        title: 'Maintain Perspective',
        description: [
          'Remind yourself that financial difficulties can be temporary, and that with time and effort, things can improve.',
          'Shift your attention to what you do have, such as supportive relationships, health, or skills, to reduce the emotional burden of financial stress.',
        ],
      },
      {
        title: 'Prioritize Physical and Mental Health',
        description: [
          'Exercise, even if it\'s just a walk, can boost endorphins and help alleviate stress.',
          'A nutritious diet helps regulate mood and energy levels, even during times of stress.',
          'Prioritize rest, as poor sleep can make it harder to manage emotions.',
        ],
      },
      {
        title: 'Reach Out for Support',
        description: [
          'Share your feelings with trusted friends, family, or a therapist. Expressing your worries can relieve some emotional pressure.',
          'There are online or local groups where people facing financial stress can share experiences and coping strategies.',
        ],
      },
      {
        title: 'Practice Gratitude',
        description: [
          'Practicing gratitude, even in tough times, can shift your mindset from focusing solely on financial difficulties to recognizing areas of abundance in your life.',
          'Write down three things you\'re grateful for each day, no matter how small. This can help lift your mood.',
        ],
      },
      {
        title: 'Find Low-Cost or Free Enjoyable Activities',
        description: [
          'Doing things you enjoy, like reading, drawing, or playing music, can help you manage stress without spending money.',
          'Nature is a great mood booster and it\'s free! Taking a walk or spending time in a park can help reduce stress.',
        ],
      },
      {
        title: 'Avoid Comparing Yourself to Others',
        description: [
          'Seeing others\' material success can worsen feelings of inadequacy. Take a break from social media if it\'s contributing to your stress.',
          'Financial struggles are common, and many people face similar challenges. Focus on your progress, not others\'.',
        ],
      },
      {
        title: 'Practice Positive Self-Talk',
        description: [
          'When you catch yourself thinking negatively about your situation, reframe your thoughts. Instead of "I\'ll never get out of this," try "I\'m taking steps to improve my situation."',
          'Acknowledge that financial challenges can happen to anyone, and self-compassion will help you navigate them more effectively.',
        ],
      },
      {
        title: 'Focus on Long-Term Growth',
        description: [
          'If possible, take advantage of free or low-cost educational resources to improve your skills, which can lead to better financial opportunities in the future.',
          'Connect with people who might offer advice or support in managing finances or finding job opportunities.',
        ],
      },
      {
        title: 'Create a “Financial Wins” List',
        description: [
          'Keep a list of any financial accomplishments, no matter how minor. Paying off a small debt, saving a little more, or sticking to a budget for a week are all wins worth celebrating.',
        ],
      },
      {
        title: 'Seek Professional Help if Needed',
        description: [
          'A financial advisor or counselor can help you create a plan and reduce the stress of figuring it out on your own.',
          'If financial stress is significantly affecting your mood and well-being, consider seeking therapy to help you manage anxiety and emotional distress.',
        ],
      },
      {
        title: 'Practice Patience',
        description: [
          'Focus on small, manageable changes. Patience and persistence will help you move forward, even if progress feels slow.',
          'Recognize the steps you are taking, no matter how small, to regain financial stability.',
        ],
      },
    ],
  },
  {
    slug: 'health-conditions',
    title: 'Health Conditions',
    description:
      'Chronic illnesses or pain can impact your mood and wellbeing.',
    img: '/MoodHub/Icon/subpage/health.svg',
    cardItem: [
      {
        title: 'Practice Self-Compassion',
        description: [
          'Recognize that it\'s okay to feel frustrated or down at times. Treat yourself with the same kindness and patience you would offer a friend going through a tough time.',
          'Accept that there may be days when you can\'t do as much, and that\'s okay. Avoid self-criticism on these days.',
        ],
      },
      {
        title: 'Focus on What You Can Control',
        description: [
          'Break tasks into manageable steps that align with your current energy levels. Even small achievements can help boost your mood.',
          'Having a routine gives structure to your day and helps create a sense of normalcy, which can reduce feelings of uncertainty.',
        ],
      },
      {
        title: 'Stay Connected',
        description: [
          'Share your feelings and experiences with family and friends, who can offer emotional support and encouragement.',
          'Connecting with others who have similar experiences can provide comfort and reduce feelings of isolation. There are many online and in-person support groups for people dealing with chronic illnesses.',
        ],
      },
      {
        title: 'Practice Stress-Reduction Techniques',
        description: [
          'Practicing mindfulness, meditation, or progressive muscle relaxation can help calm your mind and body, reducing feelings of stress or anxiety.',
          'If possible, engage in light physical activity like yoga, which can improve your mood, reduce stress, and ease physical discomfort.',
        ],
      },
      {
        title: 'Focus on Self-Care',
        description: [
          'Ensure you get enough rest, as poor sleep can worsen mood and exacerbate symptoms of chronic illness.',
          'A healthy, balanced diet can help improve mood and energy levels. Consult with a doctor or nutritionist if you have specific dietary restrictions related to your illness.',
          'Dehydration can impact mood and energy levels, so it\'s important to drink enough water throughout the day.',
        ],
      },
      {
        title: 'Celebrate Small Wins',
        description: [
          'Celebrate even the smallest achievements or improvements in your condition, no matter how minor they may seem.',
          'After completing tasks or making it through a difficult day, do something small and enjoyable for yourself as a reward.',
        ],
      },
      {
        title: 'Set Boundaries and Communicate',
        description: [
          'Don\'t be afraid to communicate your needs or ask for help when necessary. Setting boundaries allows you to conserve your energy and reduce stress.',
          'It\'s okay to turn down commitments or social activities if you\'re feeling overwhelmed or need rest.',
        ],
      },
      {
        title: 'Engage in Enjoyable Activities',
        description: [
          'Engage in activities you enjoy and can do comfortably, whether it\'s reading, crafting, painting, or watching a favorite movie.',
          'Incorporate brief breaks to do something you enjoy throughout the day, which can lift your mood and provide mental respite.',
        ],
      },
      {
        title: 'Stay Physically Active (When Possible)',
        description: [
          'Physical activity, even if it\'s low-impact like walking or swimming, can release endorphins, which help boost mood. Consult your doctor about what types of exercise are safe for you.',
          'Stretching can relieve tension and improve your overall sense of well-being.',
        ],
      },
      {
        title: 'Limit Negative Input',
        description: [
          'Limit exposure to things that may unnecessarily worsen your stress or mood, such as negative news, social media, or toxic conversations.',
          'Create a positive environment by surrounding yourself with uplifting music, books, or people who support your mental and emotional health.',
        ],
      },
      {
        title: 'Focus on Mindfulness',
        description: [
          'Practice being present and engaged in each moment, rather than worrying about the future or dwelling on the past. Mindfulness practices can help reduce anxiety and increase emotional resilience.',
          'Write down your feelings and experiences, which can help process difficult emotions and provide perspective on your progress over time.',
        ],
      },
      {
        title: 'Accept Emotional Ups and Downs',
        description: [
          'Recognize that it\'s normal to have a range of emotions, from frustration to sadness to acceptance. Let yourself experience those feelings without judgment.',
          'When you\'re having a tough day, remind yourself that this moment will pass, and better days are ahead.',
        ],
      },
      {
        title: 'Seek Professional Support',
        description: [
          'Consider working with a mental health professional who can help you navigate the emotional challenges of living with a chronic illness.',
          'Programs like MBSR are designed to help individuals with chronic illness manage stress and improve emotional well-being through mindfulness practices.',
        ],
      },
      {
        title: 'Pace Yourself',
        description: [
          'Break tasks into small, manageable steps, and pace your activities to avoid burnout. Overextending yourself can worsen physical symptoms and impact your mood.',
          'Don\'t feel guilty about taking time to rest. Allow yourself breaks to recharge physically and emotionally.',
        ],
      },
    ],
  },
  {
    slug: 'substance-use',
    title: 'Substance Use',
    description:
      'Alcohol, drugs, and even caffeine can affect mood short-term and long-term.',
    img: '/MoodHub/Icon/subpage/substance.svg',
    cardItem: [
      {
        title: 'Seek Professional Help',
        description: [
          'Regular therapy, such as Cognitive Behavioral Therapy (CBT), can help you understand and manage the emotional triggers behind your addiction.',
          'Attending support groups like Alcoholics Anonymous (AA), Narcotics Anonymous (NA), or other recovery groups can provide emotional support and help you stay connected with others who understand your struggles.',
        ],
      },
      {
        title: 'Identify and Manage Triggers',
        description: [
          'Pay attention to situations, feelings, or people that make you want to turn to your addiction. Common triggers include stress, loneliness, or boredom.',
          'When you identify a trigger, use healthier alternatives to cope, such as exercising, journaling, or talking to someone for support.',
        ],
      },
      {
        title: 'Practice Mindfulness',
        description: [
          'Mindfulness techniques, such as meditation or deep breathing, can help you stay present and manage cravings or emotional distress. These techniques teach you to observe your emotions without reacting impulsively.',
          'Staying mindful of the present day helps prevent overwhelm from thinking too far ahead in your recovery process.',
        ],
      },
      {
        title: 'Establish a Routine',
        description: [
          'A consistent daily routine can provide stability and reduce stress. Filling your day with positive, productive activities can also reduce the likelihood of relapse.',
          'Break down your day into manageable tasks. Setting and achieving small, positive goals can boost your mood and sense of accomplishment.',
        ],
      },
      {
        title: 'Stay Active',
        description: [
          'Physical activity can reduce stress and improve mood by releasing endorphins, the body\'s natural mood enhancers.',
          'Activities like walking, yoga, or swimming can help clear your mind and reduce anxiety and depression often linked to addiction.',
        ],
      },
      {
        title: 'Use Positive Self-Talk',
        description: [
          'Addiction recovery is difficult, and setbacks can happen. Avoid negative self-criticism, and instead, remind yourself of the progress you’ve made.',
          'If you catch yourself thinking "I can\'t do this," replace it with "I\'m working hard to get better every day."',
        ],
      },
      {
        title: 'Stay Connected with Support Systems',
        description: [
          'Talk to friends, family, or mentors when you\'re struggling. Building a strong support network can reduce feelings of isolation.',
          'Isolation can worsen negative emotions and increase the temptation to relapse. Stay connected with positive influences who encourage your recovery.',
        ],
      },
      {
        title: 'Practice Gratitude',
        description: [
          'During recovery, focus on the small victories and what\'s going well in your life, even on hard days.',
          'Writing down things you\'re grateful for each day, no matter how small, can help shift your focus from negative emotions to positive ones.',
        ],
      },
      {
        title: 'Avoid High-Risk Situations',
        description: [
          'Avoid places, people, or situations that remind you of your addiction, especially in the early stages of recovery.',
          'Replace addictive behaviors with new, positive habits, like spending time with sober friends, pursuing a hobby, or learning something new.',
        ],
      },
      {
        title: 'Prioritize Self-Care',
        description: [
          'Poor sleep can worsen mood swings and reduce your ability to cope with stress. Aim for a consistent sleep schedule to help regulate your emotions.',
          'A balanced diet helps stabilize your energy levels and mood, which is essential during recovery.',
          'Activities like deep breathing, meditation, or taking a warm bath can help relax your body and mind during stressful times.',
        ],
      },
      {
        title: 'Celebrate Progress',
        description: [
          'Whether it\'s staying sober for a week or managing stress without turning to your addiction, celebrate your progress. Recognizing your growth can keep you motivated.',
          'Set up small rewards for reaching specific goals in your recovery journey. Positive reinforcement can boost your mood and encourage healthy behaviors.',
        ],
      },
      {
        title: 'Embrace Healthy Distractions',
        description: [
          'Rediscover hobbies or interests you may have neglected during your addiction. Creative activities like painting, writing, or cooking can help lift your mood.',
          'Attend social events or activities that don\'t involve your addiction. Connecting with others in positive, healthy environments can help you maintain emotional balance.',
        ],
      },
      {
        title: 'Use Relapse as a Learning Opportunity',
        description: [
          'If you experience a setback, it doesn\'t mean you\'ve failed. View relapse as an opportunity to learn more about your triggers and what you need to adjust.',
          'If a relapse occurs, reach out to a sponsor, therapist, or loved one to help you get back on track. Talking to someone can help you process emotions and regain control.',
        ],
      },
      {
        title: 'Manage Stress',
        description: [
          'Be proactive in identifying stress and addressing it before it escalates. Stress is a major trigger for relapse, so managing it is crucial to maintaining emotional stability.',
          'Don\'t take on too many responsibilities or stressors that could overwhelm you. Protect your mental health by setting boundaries.',
        ],
      },
      {
        title: 'Stay Patient and Persistent',
        description: [
          'Managing addiction is a long process with ups and downs. Remind yourself that progress is not always linear, and it\'s okay to take things day by day.',
          'Every day you stay committed to recovery is a victory. Focus on your resilience and the effort you\'re putting into your well-being.',
        ],
      },
    ],
  },
  {
    slug: 'hormonal-cycle',
    title: 'Hormonal cycle',
  },
];

// Export data and types
export { MOOD_HUB_DETAILS };
export type { MoodHubDetailsItem };
