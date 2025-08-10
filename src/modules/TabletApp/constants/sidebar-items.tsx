import { HomeIcon, Library } from 'lucide-react';

import { SidebarItem, Track } from '../types';

export const sidebarItems: SidebarItem[] = [
  {
    title: 'Home',
    icon: <HomeIcon className="w-4 h-auto" />,
    link: '/tablet-app',
  },
  {
    title: 'Mindfulness',
    items: [
      {
        title: 'Meditation',
        link: '/tablet-app#audio-tracks-row-1',
        icon: <Library size={18} />,
      },
      {
        title: 'Guided Imagery',
        link: '/tablet-app#audio-tracks-row-1',
        icon: <Library size={18} />,
      },
      {
        title: 'Affirmations',
        link: '/tablet-app#audio-tracks-row-1',
        icon: <Library size={18} />,
      },
      { title: 'Gratitude', link: '/tablet-app#audio-tracks-row-1', icon: <Library size={18} /> },
      {
        title: 'Motivations',
        link: '/tablet-app#motivation-tracks',
        icon: <Library size={18} />,
      },
      {
        title: 'Inspirations',
        link: '/tablet-app#inspirations-tracks',
        icon: <Library size={18} />,
      },
      {
        title: 'Sleep Escape',
        link: '/tablet-app#sleep-escape-tracks',
        icon: <Library size={18} />,
      },
      {
        title: 'Easy Listening',
        link: '/tablet-app#easy-listening-tracks',
        icon: <Library size={18} />,
      },
    ],
  },
  {
    title: 'Skillful Thinking',
    items: [
      {
        id: 'keys-to-optimism',
        title: 'Keys to Optimism',
        category: 'Happiness',
        image: 'keys-to-optimism.png',
        className: 'object-center',
        video: 'keys-to-optimism.mp4',
      } as Track,
      {
        id: 'jump-start-your-day',
        title: 'Jump Start Your Day',
        category: 'Motivation',
        image: 'jump-start-your-day.png',
        className: 'object-center',
        video: 'jump-start-your-day.mp4',
      } as Track,
    ],
  },
  {
    title: 'Contemplative',
    items: [
      {
        id: 'path-to-prosperity',
        title: 'Path to Prosperity',
        category: 'Contemplative',
        image: 'path-to-prosperity.png',
        link: '/tablet-app#inspirations-tracks',
        className: '',
        audio: 'path-to-prosperity.mp3',
      } as Track,
    ],
  },
];
