import { imageDomainUrl } from 'shared/constants/Assets';

// Define the type for trivia items
interface ChecklistItem {
  title: string;
  items: string[];
  img: string;
}

// Define a mapping for colors based on categories
const CHECKLIST_CONTENTS: ChecklistItem[] = [
  {
    title: 'Staying Balanced',
    items: [
      'Be open-minded & flexible.',
      'Pack nutritious snacks.',
      'Focus on what is positive.',
      'Don’t rush & plan your time.',
      'Make time for wellness.',
    ],
    img: `${imageDomainUrl}/Soulscape/svg/checklist-cover-4.svg`,
  },
  {
    title: 'Traveling with Kids',
    items: [
      'Pick kid-friendly locations.',
      'Explore family vacation deals.',
      'Keep kids busy with activities.',
      'Bring food comforts from home.',
      'Pack a first-aid kit just in case.',
    ],
    img: `${imageDomainUrl}/Soulscape/svg/checklist-cover-5.svg`,
  },
  {
    title: 'Essential Travel Tips',
    items: [
      'Pack important documents.',
      'Be aware of your surroundings.',
      'Check the weather conditions.',
      'Keep your belongings safe.',
      'Carry-on important items.',
    ],
    img: `${imageDomainUrl}/Soulscape/svg/checklist-cover-6.svg`,
  },
  {
    title: 'Enjoying Your Stay ',
    items: [
      'Explore the amenities.',
      'Ask for what you need.',
      'Indulge in spa services.',
      'Enjoy your room service.',
      'Meditate and relax. ',
    ],
    img: `${imageDomainUrl}/Soulscape/svg/checklist-cover-7.svg`,
  },
];

// Export data
export { CHECKLIST_CONTENTS };
