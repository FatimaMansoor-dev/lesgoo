import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { HomeIcon, Library } from 'lucide-react';

import { SidebarItem, Track } from '../types';

export const sidebarItems: SidebarItem[] = [
  {
    title: 'Home',
    icon: <HomeIcon className="w-4 h-auto" />,
    link: '/tablet-app-soulscape',
  },
  {
    title: 'Mindfulness',
    items: [
      {
        title: 'Soulscape',
        link: '/tablet-app-soulscape#audio-tracks-row-1',
        icon: <Library size={18} />,
      },
      {
        title: 'Meditation',
        link: '/tablet-app-soulscape#audio-tracks-row-1',
        icon: <Library size={18} />,
      },
      {
        title: 'Affirmations',
        link: '/tablet-app-soulscape#audio-tracks-row-1',
        icon: <Library size={18} />,
      },
      {
        title: 'Gratitude',
        link: '/tablet-app-soulscape#audio-tracks-row-1',
        icon: <Library size={18} />,
      },
      {
        title: 'Motivations',
        link: '/tablet-app-soulscape#motivation-tracks',
        icon: <Library size={18} />,
      },
      {
        title: 'Inspirations',
        link: '/tablet-app-soulscape#inspirations-tracks',
        icon: <Library size={18} />,
      },
      {
        title: 'Sleep Escape',
        link: '/tablet-app-soulscape#sleep-escape-tracks',
        icon: <Library size={18} />,
      },

      {
        title: 'Easy Listening',
        link: '/tablet-app-soulscape/#easy-listening-tracks',
        icon: <Library size={18} />,
      },
    ],
  },
  {
    title: 'Soulscape',
    items: [
      {
        title: 'Travel Checklist',
        link: '/tablet-app-soulscape/travel-checklist',
        icon: (
          <Image
            className="w-5"
            src={`${imageDomainUrl}/TabletApp/SidebarIcons/travel-checklist-icon.svg`}
            alt="Travel Checklist Icon"
            width={500}
            height={500}
          />
        ),
      },
      {
        title: 'Stay Healthy',
        link: 'https://www.therenewcenter.com/blog',
        icon: (
          <Image
            className="w-5"
            src={`${imageDomainUrl}/TabletApp/SidebarIcons/healthy-mind-icon.svg`}
            alt="Stay Healthy Icon"
            width={500}
            height={500}
          />
        ),
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
        link: '/tablet-app-soulscape#inspirations-tracks',
        className: '',
        audio: 'path-to-prosperity.mp3',
      } as Track,
    ],
  },
];
