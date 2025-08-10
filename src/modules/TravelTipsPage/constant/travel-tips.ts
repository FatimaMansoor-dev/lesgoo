import { imageDomainUrl } from 'shared/constants/Assets';

interface TravelTip {
  slug: string;
  icon: string;
  coverIcon: string;
  title: string;
  description1: string;
  description2: string;
  firstDiv: {
    title?: string;
    description?: string;
    items: { no: number; title: string }[];
  };
  secondDiv?: {
    title?: string;
    description?: string;
    items: { no: number; title: string }[];
  };
  quote: string;
  classes: string;
}

const TRAVEL_TIPS: TravelTip[] = [
  {
    slug: 'guests-on-the-go',
    icon: `${imageDomainUrl}/Soulscape/Icon/guest-icon.svg`,
    coverIcon: `${imageDomainUrl}/Soulscape/Icon/guest-icon-cover.svg`,
    title: 'Guests on the Go',
    description1: 'You deserve to feel balanced at your hotel!',
    description2: 'Here are some travel tips for your next stay.',
    firstDiv: {
      title: 'Checking In',
      description:
        'Our dedicated team is here to assist you every step of the way, from registration to concierge services. ',
      items: [
        {
          no: 1,
          title: 'Know check-in time',
        },
        {
          no: 2,
          title: 'Ask about resort fees',
        },
        {
          no: 3,
          title: 'Lock your valuables',
        },
        {
          no: 4,
          title: 'Enjoy hotel amenities',
        },
        {
          no: 5,
          title: 'Book spa reservations',
        },
      ],
    },
    secondDiv: {
      title: 'Hotel Etiquette',
      description: 'Here are some tips to ensure a  hassle-free check-out experience.',
      items: [
        {
          no: 6,
          title: 'Know check-out time',
        },
        {
          no: 7,
          title: 'Pack all your belongings',
        },
        {
          no: 8,
          title: 'Tip valet and housekeeping',
        },
        {
          no: 9,
          title: 'Review your itemized bill',
        },
        // {
        //   no: 10,
        //   title: 'Provide Feedback',
        // },
      ],
    },
    quote: 'Wander the world, balanced in every step.',
    classes: 'font-semibold max-w-[156px]',
  },
  {
    slug: 'cruising-on-the-go',
    icon: `${imageDomainUrl}/Soulscape/Icon/cruising-icon.svg`,
    coverIcon: `${imageDomainUrl}/Soulscape/Icon/cruising-icon-cover.svg`,
    title: 'Cruising on the Go',
    description1: 'Cruising is better when you are balanced!',
    description2: 'Here are some travel tips for your next voyage.',
    firstDiv: {
      title: 'Before Your Cruise',
      description:
        'Get cruise-ready with these essential pre-departure tips. From packing to documentation, ensure a smooth sailing experience.',
      items: [
        {
          no: 1,
          title: 'Get to know your ship',
        },
        {
          no: 2,
          title: 'Gather travel documents',
        },
        {
          no: 3,
          title: 'Create your packing list',
        },
        {
          no: 4,
          title: 'Plan excursions and adventures',
        },
        {
          no: 5,
          title: 'Contact banks for local currency',
        },
        {
          no: 6,
          title: 'Get tests and immunizations',
        },
        {
          no: 7,
          title: 'Book airport transfers and hotels',
        },
        {
          no: 8,
          title: 'Pack a day bag for embarkation',
        },
        {
          no: 9,
          title: 'Make restaurant reservations',
        },
        {
          no: 10,
          title: 'Get an international calling plan',
        },
      ],
    },
    quote: 'Journey to new places, find your center.',
    classes: 'font-semibold max-w-[156px]',
  },
  {
    slug: 'jet-setter-on-the-go',
    icon: `${imageDomainUrl}/Soulscape/Icon/jet-icon.svg`,
    coverIcon: `${imageDomainUrl}/Soulscape/Icon/jet-icon-cover.svg`,
    title: 'Jet-Setter on the Go',
    description1: 'You deserve to feel balanced when you fly!',
    description2: 'Here are some travel tips for your journey.',
    firstDiv: {
      title: 'Packing for Your Trip',
      description:
        'Streamline your travel experience with expert packing tips for your upcoming flight. Pack smarter, lighter, and stress-free.',
      items: [
        {
          no: 1,
          title: 'Remember that less is more',
        },
        {
          no: 2,
          title: 'Make your luggage stand out',
        },
        {
          no: 3,
          title: 'Organize your carry-on',
        },
        {
          no: 4,
          title: 'Take medication on board',
        },
        {
          no: 5,
          title: 'Bring a sweater and pillow',
        },
      ],
    },
    secondDiv: {
      title: 'Technology on the Go',
      description:
        'Stay connected and entertained in the air and make the most of your flight time with ease',
      items: [
        {
          no: 6,
          title: 'Check-in online',
        },
        {
          no: 7,
          title: 'Remember devices',
        },
        {
          no: 8,
          title: 'Bring extra chargers',
        },
        {
          no: 9,
          title: 'Pack headphones',
        },
      ],
    },
    quote: 'Travel far, find balance within.',
    classes: 'font-semibold max-w-[206px]',
  },
];

export { TRAVEL_TIPS };
export type { TravelTip };
