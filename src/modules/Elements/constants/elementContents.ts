import { imageDomainUrl } from 'shared/constants/Assets';

// Define the type for element content items
interface Content {
  title: string;
  description: string;
}

interface ElementContentsItem {
  element: string;
  title: string;
  img1: string;
  img2: string;
  badge: string[];
  contents: Content[];
}

// Define the reminders contents
const ELEMENTS_CONTENTS: ElementContentsItem[] = [
  {
    element: 'earth',
    title: 'Try these coping skills for more stability',
    img1: `${imageDomainUrl}/Elements/Icon/earth-bg.svg`,
    img2: `${imageDomainUrl}/Elements/Icon/earth-icon.svg`,
    badge: ['earth', 'grounding'],
    contents: [
      {
        title: 'Mindful Breathing',
        description: 'Focus on slow, deep breaths to calm the nervous system.',
      },
      {
        title: 'Guided Meditation',
        description: 'Use apps or recordings to practice meditation with structured guidance.',
      },
      {
        title: 'Body Scan Meditation',
        description: 'Gently bring attention to different parts of the body to release tension.',
      },
      {
        title: 'Progressive Muscle Relaxation',
        description: 'Tense and relax muscle groups, promoting physical and mental relaxation.',
      },
      {
        title: 'Visualization',
        description: 'Imagine calming, peaceful places or situations to reduce stress.',
      },
      {
        title: 'Gratitude Journaling',
        description:
          'Reflect and write about things you’re grateful for, fostering a positive mindset.',
      },
      {
        title: 'Affirmation Practice',
        description: 'Use positive affirmations to shift your mindset and calm self-doubt.',
      },
      {
        title: 'Yoga or Gentle Stretching',
        description: 'Engage in slow, mindful movement to release physical and emotional tension.',
      },
      {
        title: 'Mindful Walking',
        description:
          'Walk slowly, focusing on each step and the present moment, engaging all your senses.',
      },
      {
        title: 'Creative Visualization',
        description: 'Picture yourself achieving goals or finding calm in stressful situations.',
      },
      {
        title: 'Grounding Techniques',
        description: 'Use the 5-4-3-2-1 method to bring yourself back to the present moment.',
      },
      {
        title: 'Mindful Coloring',
        description: 'Use adult coloring books as a form of meditative, relaxing activity.',
      },
      {
        title: 'Aromatherapy',
        description: 'Engage the senses with calming essential oils like lavender or chamomile.',
      },
      {
        title: 'Listening to Gentle Music',
        description: 'Listen to peaceful music or nature sounds to encourage deep relaxation.',
      },
      {
        title: 'Mindful Eating',
        description:
          'Eat slowly and savor each bite, paying attention to flavors, textures, and sensations.',
      },
      {
        title: 'Tea Meditation',
        description:
          'Engage in a mindful tea ritual, paying attention to the preparation, aroma, and taste.',
      },
      {
        title: 'Journaling',
        description: 'Reflect quietly on your thoughts and feelings, gaining clarity and peace.',
      },
      {
        title: 'Self-Massage',
        description:
          'Use gentle, mindful self-massage techniques, such as hand or foot massages, to promote relaxation.',
      },
      {
        title: 'Bubble Bath or Warm Shower',
        description: 'Practice mindfulness by focusing on the warmth and sensation of the water.',
      },
      {
        title: 'Candle Gazing',
        description:
          'Sit in a quiet space and focus on the flicker of a candle flame, letting thoughts pass without attachment.',
      },
    ],
  },
  {
    element: 'fire',
    title: 'Try these coping skills for more energy',
    img1: `${imageDomainUrl}/Elements/Icon/fire-bg.svg`,
    img2: `${imageDomainUrl}/Elements/Icon/fire-icon.svg`,
    badge: ['fire', 'passion'],
    contents: [
      {
        title: 'Cardio Exercise',
        description:
          'Go for a run, bike ride, or brisk walk to release endorphins and reduce stress.',
      },
      {
        title: 'Dancing',
        description:
          'Put on your favorite music and dance to boost your mood and get your body moving.',
      },
      {
        title: 'High-Intensity Interval Training (HIIT)',
        description:
          'Engage in short bursts of intense exercise to release energy and feel invigorated.',
      },
      {
        title: 'Sports or Group Activities',
        description:
          'Play basketball, soccer, tennis, or any team-based sport to stay active and socially connected.',
      },
      {
        title: 'Kickboxing or Martial Arts',
        description: 'Channel stress into focused movements and empowering techniques.',
      },
      {
        title: 'Strength Training',
        description:
          'Lift weights or use resistance bands to channel energy into building physical strength.',
      },
      {
        title: 'Outdoor Hiking',
        description:
          'Explore nature while getting a good workout, clearing your mind in the process.',
      },
      {
        title: 'Jump Rope',
        description: 'A quick, fun way to get your heart rate up and burn off excess energy.',
      },
      {
        title: 'Swimming',
        description:
          'Use the water as resistance for a full-body workout, or just swim laps to feel refreshed.',
      },
      {
        title: 'Biking',
        description:
          "Whether it's mountain biking or cycling through the city, biking provides a mix of movement and mindfulness.",
      },
      {
        title: 'Yoga Flow or Power Yoga',
        description:
          'For those who enjoy active stretching, flowing movements that keep you engaged.',
      },
      {
        title: 'Pilates',
        description:
          'Build core strength and flexibility with controlled, flowing exercises that focus on precision and movement.',
      },
      {
        title: 'Rock Climbing',
        description:
          'A mentally and physically engaging activity that combines strength, focus, and problem-solving.',
      },
      {
        title: 'Trampoline Workouts',
        description:
          'Jumping on a trampoline can be an exhilarating way to reduce stress and release energy.',
      },
      {
        title: 'Rowing or Paddling',
        description:
          'Engage your full body with rhythmic, calming motions on a rowing machine or while kayaking.',
      },
      {
        title: 'Dancing Workouts (Zumba, etc.)',
        description: 'Combine the fun of dancing with a structured workout class.',
      },
      {
        title: 'Jumping Jacks or Burpees',
        description: 'Short bursts of movement you can do anywhere to quickly boost energy.',
      },
      {
        title: 'Frisbee or Disc Golf',
        description: 'Engage in a playful outdoor activity that requires movement and focus.',
      },
      {
        title: 'Hula Hooping',
        description:
          'Fun and playful, this activity is a great way to stay active and move the body.',
      },
      {
        title: 'Active Hobbies (Gardening, DIY)',
        description:
          'Stay physically engaged by working on projects that require movement, lifting, and creativity.',
      },
    ],
  },
  {
    element: 'space',
    title: 'Try these coping skills for more balance',
    img1: `${imageDomainUrl}/Elements/Icon/space-bg.svg`,
    img2: `${imageDomainUrl}/Elements/Icon/space-icon.svg`,
    badge: ['space', 'rejuvenation'],
    contents: [
      {
        title: 'Outdoor Adventure',
        description:
          'Try activities like hiking, kayaking, or rock climbing to experience nature and a sense of freedom.',
      },
      {
        title: 'Travel or Exploring New Places',
        description:
          'Visit new locations, even within your city, to break free from routine and gain fresh perspectives.',
      },
      {
        title: 'Decluttering Your Space',
        description:
          'Free yourself from clutter by organizing your home or workspace, creating a sense of mental and physical liberation.',
      },
      {
        title: 'Digital Detox',
        description:
          'Take a break from social media, emails, and devices to recharge and reconnect with yourself.',
      },
      {
        title: 'Dancing Freely',
        description:
          'Move without any rules or routines, letting your body express itself in whatever way feels freeing.',
      },
      {
        title: 'Mindful Walking',
        description:
          'Walk without a specific destination, enjoying the freedom of movement and being in the moment.',
      },
      {
        title: 'Creative Expression',
        description:
          'Engage in art, writing, or music without following any rules or guidelines, allowing pure creativity to flow.',
      },
      {
        title: 'Breathwork',
        description:
          'Practice deep, intentional breathing exercises to release tension and experience emotional and physical freedom.',
      },
      {
        title: 'Time in Open Spaces',
        description:
          'Visit wide, open areas like beaches, mountains, or parks to feel a sense of expansion and freedom.',
      },
      {
        title: 'Freewriting',
        description:
          'Write continuously for a set time without editing or restricting your thoughts, allowing for self-expression and mental release.',
      },
      {
        title: 'Letting Go of Perfectionism',
        description:
          'Practice doing something imperfectly, like drawing or cooking, to release the pressure of always getting it right.',
      },
      {
        title: 'Saying No to Obligations',
        description:
          'Set boundaries by saying no to unnecessary commitments, giving yourself the freedom to focus on what rejuvenates you.',
      },
      {
        title: "Creating a 'Free Day'",
        description:
          'Set aside a day with no plans, commitments, or tasks, allowing yourself to do whatever feels most freeing in the moment.',
      },
      {
        title: 'Stretching or Yoga in Nature',
        description:
          'Practice yoga or stretch outdoors, embracing both the freedom of your body and the energy of nature.',
      },
      {
        title: 'Forest Bathing',
        description:
          'Spend time in the woods or a quiet natural area, fully immersing yourself in nature for a sense of peace and liberation.',
      },
      {
        title: 'Listening to Uplifting Music',
        description:
          'Play music that energizes and uplifts you, creating a feeling of emotional release and freedom.',
      },
      {
        title: 'Solo Retreat or Day Trip',
        description:
          'Take a break from your usual surroundings by going on a solo retreat or day trip to recharge and find clarity.',
      },
      {
        title: 'Trying Something New',
        description:
          'Step outside your comfort zone by taking up a new hobby, learning a new skill, or exploring new experiences.',
      },
      {
        title: 'Meditation on Freedom',
        description:
          'Practice a guided meditation focused on letting go of limiting thoughts and embracing a sense of inner freedom.',
      },
      {
        title: 'Journaling for Self-Discovery',
        description:
          'Write about what freedom means to you and how you can create more space for it in your life.',
      },
      {
        title: 'Letting Go of Old Habits',
        description:
          'Identify habits or routines that no longer serve you and actively work on releasing them to create space for growth.',
      },
      {
        title: 'Cold Water Therapy',
        description:
          'Take a dip in cold water, like in a pool or ocean, to invigorate the senses and experience a refreshing reset.',
      },
      {
        title: 'Spontaneity',
        description:
          'Allow yourself to be spontaneous in your daily life by doing something unplanned or unexpected, embracing the thrill of the unknown.',
      },
      {
        title: 'Singing or Shouting',
        description:
          'Use your voice loudly, whether singing a favorite song or shouting into the wind, to release pent-up emotions and feel liberated.',
      },
      {
        title: 'Reflecting on Personal Growth',
        description:
          'Take time to reflect on how far you’ve come, celebrating the freedom and rejuvenation that comes with growth and change.',
      },
    ],
  },
  {
    element: 'social',
    title: 'Try these coping skills for more socialization',
    img1: `${imageDomainUrl}/Elements/Icon/social-bg.svg`,
    img2: `${imageDomainUrl}/Elements/Icon/social-icon.svg`,
    badge: [],
    contents: [
      {
        title: 'Talking with Friends',
        description: 'Reach out to close friends to chat or vent about what’s on your mind.',
      },
      {
        title: 'Joining a Support Group',
        description:
          'Participate in group sessions, either in-person or online, to connect with others who share similar experiences.',
      },
      {
        title: 'Social Media Connections',
        description:
          'Use social media to stay in touch with friends and family, share updates, and feel connected.',
      },
      {
        title: 'FaceTime or Video Chats',
        description:
          'Have face-to-face virtual conversations with loved ones, especially when meeting in person isn’t possible.',
      },
      {
        title: 'Group Exercise Classes',
        description:
          'Attend a group fitness class, like yoga, Zumba, or spin, to bond with others while staying active.',
      },
      {
        title: 'Volunteering',
        description:
          'Get involved in community service, which provides a sense of purpose while connecting with others who share similar values.',
      },
      {
        title: 'Game Night with Friends',
        description:
          'Host or join a game night (online or in person) to have fun and unwind with others.',
      },
      {
        title: 'Participating in Clubs',
        description:
          'Join a book club, hobby group, or social organization to meet new people and bond over shared interests.',
      },
      {
        title: 'Texting or Group Chats',
        description:
          'Stay engaged with friends through group messaging or chats, sharing daily thoughts or funny moments.',
      },
      {
        title: 'Attending Social Events',
        description:
          'Go to social gatherings, dinners, or parties where you can interact and bond with others.',
      },
      {
        title: 'Sharing Meals with Loved Ones',
        description:
          'Eat with family or friends, whether at home or dining out, to build stronger connections.',
      },
      {
        title: 'Online Communities',
        description:
          'Engage in online communities centered around your interests or challenges to exchange advice and support.',
      },
      {
        title: 'Collaborative Hobbies',
        description:
          'Engage in team-based activities or hobbies, such as a collaborative art project, writing a group story, or playing in a band.',
      },
      {
        title: 'Phone Conversations',
        description:
          'Call a friend or family member for a quick conversation or to talk through something weighing on your mind.',
      },
      {
        title: 'Hosting Gatherings',
        description:
          'Organize a get-together, such as a dinner party or BBQ, to create opportunities for socializing and bonding.',
      },
      {
        title: 'Attending Meetups',
        description:
          'Join local or online meetups related to your interests to meet new people and expand your social circle.',
      },
      {
        title: 'Talking to a Therapist or Counselor',
        description:
          'Engage in one-on-one conversations with a mental health professional to talk through emotions and challenges.',
      },
      {
        title: 'Participating in Team Sports',
        description:
          'Join a sports league or recreational team where you can connect with teammates while staying active.',
      },
      {
        title: 'Peer Mentoring or Coaching',
        description:
          'Offer or receive guidance in a mentorship or coaching role, fostering deeper connections and personal growth.',
      },
      {
        title: 'Co-working with Friends',
        description:
          'Work alongside friends or peers, either in person or in virtual spaces, to stay connected while being productive.',
      },
    ],
  },
  {
    element: 'wind',
    title: 'Try these coping skills for more expression',
    img1: `${imageDomainUrl}/Elements/Icon/wind-bg.svg`,
    img2: `${imageDomainUrl}/Elements/Icon/wind-icon.svg`,
    badge: ['wind', 'freedom'],
    contents: [
      {
        title: 'Drawing or Sketching',
        description: 'Use pencils, pens, or digital tools to express emotions through art.',
      },
      {
        title: 'Painting',
        description:
          'Experiment with watercolors, acrylics, or oils to visually express feelings and ideas.',
      },
      {
        title: 'Journaling',
        description:
          'Write freely about your thoughts, emotions, or experiences to gain clarity and process feelings.',
      },
      {
        title: 'Creative Writing',
        description:
          'Write poetry, short stories, or even personal narratives to channel emotions into words.',
      },
      {
        title: 'Playing a Musical Instrument',
        description:
          'Express yourself through guitar, piano, drums, or any instrument that resonates with you.',
      },
      {
        title: 'Songwriting',
        description:
          'Combine music and words to create songs that reflect your emotional state or experiences.',
      },
      {
        title: 'Photography',
        description:
          'Capture moments, landscapes, or objects that evoke a certain mood or tell a story.',
      },
      {
        title: 'Collage or Scrapbooking',
        description:
          'Gather images, words, and textures to create meaningful visual stories or memories.',
      },
      {
        title: 'Sculpting or Pottery',
        description: 'Work with clay or other materials to create tangible, expressive art.',
      },
      {
        title: 'Sewing, Knitting, or Crocheting',
        description:
          'Engage in repetitive, calming craft activities that produce something beautiful and functional.',
      },
      {
        title: 'Graphic Design or Digital Art',
        description:
          'Use digital tools to create designs or illustrations that reflect your inner world.',
      },
      {
        title: 'Calligraphy or Hand Lettering',
        description: 'Channel focus into creating beautiful, artistic writing.',
      },
      {
        title: 'Dance Choreography',
        description: 'Develop a dance routine to express emotions through movement.',
      },
      {
        title: 'Origami or Paper Crafts',
        description:
          'Fold paper into creative shapes and designs, focusing on precision and beauty.',
      },
      {
        title: 'Woodworking or Carpentry',
        description:
          'Craft something useful or artistic from wood, channeling focus into physical creativity.',
      },
      {
        title: 'Making Jewelry',
        description:
          'Design and create personalized pieces of jewelry that reflect your style and emotions.',
      },
      {
        title: 'Creative Cooking or Baking',
        description:
          'Experiment with new recipes or baking techniques as a form of self-expression.',
      },
      {
        title: 'Acting or Improvisation',
        description:
          'Engage in acting exercises or improv games to explore emotions and creativity through performance.',
      },
      {
        title: 'Storytelling',
        description:
          'Share personal stories or fictional tales, whether spoken or written, as a way to release emotions.',
      },
      {
        title: 'Crafting (DIY Projects)',
        description:
          'Create handmade items or engage in DIY projects that offer a tangible outlet for your creativity.',
      },
    ],
  },
  {
    element: 'water',
    title: 'Try these coping skills for more compassion',
    img1: `${imageDomainUrl}/Elements/Icon/water-bg.svg`,
    img2: `${imageDomainUrl}/Elements/Icon/water-icon.svg`,
    badge: ['water', 'compassion'],
    contents: [
      {
        title: 'Loving-Kindness Meditation',
        description:
          'Practice sending thoughts of love and compassion to yourself and others through this meditation technique.',
      },
      {
        title: 'Self-Compassion Affirmations',
        description:
          "Repeat affirmations such as 'I am enough' or 'I deserve kindness' to cultivate self-love.",
      },
      {
        title: 'Journaling with Compassion',
        description:
          'Write down your struggles or those of others, and reflect on them with empathy, offering yourself or others kind words.',
      },
      {
        title: 'Practicing Gratitude',
        description:
          'Reflect on the positive qualities of yourself and those around you, fostering appreciation and kindness.',
      },
      {
        title: 'Forgiveness Practice',
        description:
          'Reflect on situations where you can forgive yourself or others, releasing anger or guilt in favor of compassion.',
      },
      {
        title: 'Random Acts of Kindness',
        description:
          'Perform small, thoughtful acts for others, like leaving kind notes or offering help, to foster feelings of connection and empathy.',
      },
      {
        title: 'Active Listening',
        description:
          'Practice truly listening to others without judgment or interruption, fostering understanding and compassion.',
      },
      {
        title: 'Mindful Self-Talk',
        description:
          'Be conscious of the way you speak to yourself, replacing harsh or critical thoughts with words of kindness and encouragement.',
      },
      {
        title: 'Volunteering',
        description:
          'Help others in need, whether through community service or acts of charity, to build compassion for those facing challenges.',
      },
      {
        title: 'Sending a Thoughtful Message',
        description:
          'Write or call someone to express appreciation, empathy, or support, reminding them (and yourself) of the value of kindness.',
      },
      {
        title: 'Empathy Exercises',
        description:
          'Put yourself in someone else’s shoes by imagining their feelings, circumstances, and perspectives to deepen compassion.',
      },
      {
        title: 'Mirror Work',
        description:
          'Look at yourself in the mirror and say kind, encouraging things to build self-compassion and self-acceptance.',
      },
      {
        title: 'Mindful Breathing',
        description:
          'While practicing deep breathing, imagine inhaling compassion for yourself and exhaling compassion for others.',
      },
      {
        title: 'Inspiring Stories of Compassion',
        description:
          'Read stories or biographies of individuals who practice compassion, to inspire your own acts of kindness.',
      },
      {
        title: 'Body Gratitude Practice',
        description:
          'Focus on parts of your body and thank them for what they do, cultivating self-compassion and appreciation.',
      },
      {
        title: 'Nonviolent Communication',
        description:
          'Use compassionate language when addressing conflicts or misunderstandings, focusing on feelings and needs rather than blame.',
      },
      {
        title: 'Mentorship or Peer Support',
        description:
          'Offer guidance or emotional support to someone who may need it, building a sense of compassion and connection.',
      },
      {
        title: 'Compassionate Letter Writing',
        description:
          'Write a letter to yourself or someone else, expressing understanding, kindness, and forgiveness.',
      },
      {
        title: 'Self-Care as an Act of Compassion',
        description:
          'Engage in nurturing self-care practices as a way to show love and kindness to yourself.',
      },
      {
        title: 'Reflecting on Shared Humanity',
        description:
          'Remind yourself that everyone experiences pain, joy, and challenges, helping you feel connected to the shared human experience.',
      },
      {
        title: 'Practicing Patience',
        description:
          'Consciously practice patience with yourself and others, allowing space for mistakes, growth, and understanding.',
      },
      {
        title: 'Mindful Acts of Service',
        description:
          'Do something kind for someone without expecting anything in return, focusing on the joy of giving.',
      },
      {
        title: 'Morning Rituals',
        description:
          'Start your day with a ritual of kindness, such as a loving-kindness meditation or gratitude journaling.',
      },
      {
        title: 'Observing Compassion in Others',
        description:
          'Notice compassionate acts around you and reflect on how these small gestures impact the world positively.',
      },
      {
        title: 'Offering Compliments',
        description:
          'Genuinely compliment yourself and others for specific qualities or achievements, fostering positivity and compassion.',
      },
    ],
  },
];

// Export data
export { ELEMENTS_CONTENTS };
export type { ElementContentsItem };
