import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { HomeIcon, Library } from 'lucide-react';

import { SidebarItem, Track } from '../types';

export const sidebarItems: SidebarItem[] = [
  {
    title: 'Home',
    icon: <HomeIcon className="w-4 h-auto" />,
    link: '/tablet-app-premium',
  },
  {
    title: 'Mindfulness',
    items: [
      {
        title: 'Meditation',
        link: '/tablet-app-premium#audio-tracks-row-1',
        icon: <Library size={18} />,
      },
      {
        title: 'Guided Imagery',
        link: '/tablet-app-premium#audio-tracks-row-1',
        icon: <Library size={18} />,
      },
      {
        title: 'Affirmations',
        link: '/tablet-app-premium#audio-tracks-row-1',
        icon: <Library size={18} />,
      },
      {
        title: 'Gratitude',
        link: '/tablet-app-premium#audio-tracks-row-1',
        icon: <Library size={18} />,
      },
      {
        title: 'Motivations',
        link: '/tablet-app-premium#motivation-tracks',
        icon: <Library size={18} />,
      },
      {
        title: 'Inspirations',
        link: '/tablet-app-premium#inspirations-tracks',
        icon: <Library size={18} />,
      },
      {
        title: 'Sleep Escape',
        link: '/tablet-app-premium#sleep-escape-tracks',
        icon: <Library size={18} />,
      },
      {
        title: 'Skillful Living',
        link: '/tablet-app-premium#skillful-living-tracks',
        icon: <Library size={18} />,
      },
      {
        title: 'Easy Listening',
        link: '/tablet-app-premium#easy-listening-tracks',
        icon: <Library size={18} />,
      },
    ],
  },
  {
    title: 'Health Hub',
    items: [
      {
        title: 'Fitness Fun',
        link: '/tablet-app-premium/fitness-fun',
        icon: (
          <Image
            className="w-5"
            src={`${imageDomainUrl}/TabletApp/SidebarIcons/fitness-fun-icon.svg`}
            alt="Fitness Fun Icon"
            width={500}
            height={500}
          />
        ),
      },
      {
        title: 'Daily Pep Talk',
        link: '/tablet-app-premium/daily-pep-talk',
        icon: (
          <Image
            className="w-5"
            src={`${imageDomainUrl}/TabletApp/SidebarIcons/daily-pep-talk-icon.svg`}
            alt="Daily Pep Talk Icon"
            width={500}
            height={500}
          />
        ),
      },
      {
        title: 'Did You Know',
        link: '/tablet-app-premium/did-you-know',
        icon: (
          <Image
            className="w-5"
            src={`${imageDomainUrl}/TabletApp/SidebarIcons/did-you-know-icon.svg`}
            alt="Did You Know Icon"
            width={500}
            height={500}
          />
        ),
      },
      {
        title: 'Coping Skills',
        link: '/tablet-app-premium/coping-skills',
        icon: (
          <Image
            className="w-5"
            src={`${imageDomainUrl}/TabletApp/SidebarIcons/coping-skills-icon.svg`}
            alt="Coping Skills Icon"
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
            alt="Stay Healthy"
            width={500}
            height={500}
          />
        ),
      },
    ],
  },
  {
    title: 'Entertainment',
    items: [
      {
        title: 'Trivia Zone',
        link: '/tablet-app-premium/trivia-zone',
        icon: (
          <Image
            className="w-5"
            src={`${imageDomainUrl}/TabletApp/SidebarIcons/trivia-zone-icon.svg`}
            alt="Trivia Zone Icon"
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
        link: '/tablet-app-premium#inspirations-tracks',
        className: '',
        audio: 'path-to-prosperity.mp3',
      } as Track,
    ],
  },
];
