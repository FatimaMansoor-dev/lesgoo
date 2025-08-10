import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { HomeIcon, Library } from 'lucide-react';

import { SidebarItem, Track } from '../types';

export const sidebarItems: SidebarItem[] = [
  {
    title: 'Home',
    icon: <HomeIcon className="w-4 h-auto" />,
    link: '/tablet-app-premium-soulscape',
  },
  {
    title: 'Mindfulness',
    items: [
      {
        title: 'Soulscape',
        link: '/tablet-app-premium-soulscape#audio-tracks-row-1',
        icon: <Library size={18} />,
      },
      {
        title: 'Meditation',
        link: '/tablet-app-premium-soulscape#audio-tracks-row-1',
        icon: <Library size={18} />,
      },
      {
        title: 'Affirmations',
        link: '/tablet-app-premium-soulscape#audio-tracks-row-1',
        icon: <Library size={18} />,
      },
      {
        title: 'Gratitude',
        link: '/tablet-app-premium-soulscape#audio-tracks-row-1',
        icon: <Library size={18} />,
      },
      {
        title: 'Motivations',
        link: '/tablet-app-premium-soulscape#motivation-tracks',
        icon: <Library size={18} />,
      },
      {
        title: 'Inspirations',
        link: '/tablet-app-premium-soulscape#inspirations-tracks',
        icon: <Library size={18} />,
      },
      {
        title: 'Sleep Escape',
        link: '/tablet-app-premium-soulscape#sleep-escape-tracks',
        icon: <Library size={18} />,
      },
      {
        title: 'Skillful Living',
        link: '/tablet-app-premium-soulscape#skillful-living-tracks',
        icon: <Library size={18} />,
      },
      {
        title: 'Easy Listening',
        link: '/tablet-app-premium-soulscape/#easy-listening-tracks',
        icon: <Library size={18} />,
      },
    ],
  },
  {
    title: 'Soulscape',
    items: [
      {
        title: 'Travel Tips',
        link: '/tablet-app-premium-soulscape/travel-tips',
        icon: (
          <Image
            className="w-5"
            src={`${imageDomainUrl}/TabletApp/SidebarIcons/travel-tips-icon.svg`}
            alt="Travel Tips Icon"
            width={500}
            height={500}
          />
        ),
      },

      {
        title: 'Travel Checklist',
        link: '/tablet-app-premium-soulscape/travel-checklist',
        icon: (
          <Image
            className="w-5"
            src={`${imageDomainUrl}/TabletApp/SidebarIcons/travel-checklist-icon.svg`}
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

      {
        title: 'Travel Safe',
        link: '/tablet-app-premium-soulscape/travel-safe',
        icon: (
          <Image
            className="w-5"
            src={`${imageDomainUrl}/TabletApp/SidebarIcons/travel-safe-icon.svg`}
            alt="Travel Safe Icon"
            width={500}
            height={500}
          />
        ),
      },
      // Removed
      // {
      //   title: 'Flight Status',
      //   link: '/tablet-app-premium-soulscape/flight-status',
      //   icon: (
      //     <Image
      //       className="w-5"
      //       src={`${imageDomainUrl}/TabletApp/Icons/flight-status.svg`}
      //       alt="Coping Skills Icon"
      //       width={500}
      //       height={500}
      //     />
      //   ),
      // },
      {
        title: 'Book a Trip',
        link: '/tablet-app-premium-soulscape/book-a-trip/luxury-travel',
        icon: (
          <Image
            className="w-5"
            src={`${imageDomainUrl}/TabletApp/SidebarIcons/book-a-trip-icon.svg`}
            alt="Coping Skills Icon"
            width={500}
            height={500}
          />
        ),
      },
    ],
  },

  {
    title: 'Health Hub',
    items: [
      {
        title: 'Fitness Fun',
        link: '/tablet-app-premium-soulscape/fitness-fun',
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
        link: '/tablet-app-premium-soulscape/daily-pep-talk',
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
        link: '/tablet-app-premium-soulscape/did-you-know',
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
        link: '/tablet-app-premium-soulscape/coping-skills',
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
    ],
  },
  {
    title: 'Entertainment',
    items: [
      {
        title: 'Trivia Zone',
        link: '/tablet-app-premium-soulscape/trivia-zone',
        icon: (
          <Image
            className="w-5"
            src={`${imageDomainUrl}/TabletApp/SidebarIcons/did-you-know-icon.svg`}
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
        link: '/tablet-app-premium-soulscape#inspirations-tracks',
        className: '',
        audio: 'path-to-prosperity.mp3',
      } as Track,
    ],
  },
];
