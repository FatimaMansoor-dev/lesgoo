import { imageDomainUrl } from 'shared/constants/Assets';

export interface TravelTip {
  slug: string;
  icon: string;
  title: string;
  description: string;
  firstColumn: {
    title?: string;
    description?: string;
    items: { no: number; title: string }[];
  };
  secondColumn: {
    title?: string;
    description?: string;
    items: { no: number; title: string }[];
  };
  quote: string;
}

export const travelTips: TravelTip[] = [
  {
    slug: 'guests-on-the-go',
    icon: `${imageDomainUrl}/TravelTips/Icons/guests-on-the-go.svg`,
    title: 'Guests on the Go',
    description:
      'You deserve to feel balanced at your hotel! Here are some travel tips to enjoy your stay.',
    firstColumn: {
      title: 'Checking In',
      description: 'We hope you enjoy your stay and are here assist you every step of the way.',
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
    secondColumn: {
      title: 'Hotel Etiquette',
      description: 'Here are some tips to ensure a hassle-free experience during your stay. ',
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
        {
          no: 10,
          title: 'Provide Feedback',
        },
      ],
    },
    quote: 'Wander the world, balanced in every step.',
  },
  {
    slug: 'cruising-on-the-go',
    icon: `${imageDomainUrl}/TravelTips/Icons/cruising-on-the-go.svg`,
    title: 'Cruising on the Go',
    description:
      'Cruising is better when you are balanced! Here are some travel tips to enjoy your voyage.',
    firstColumn: {
      title: 'Before Your Cruise',
      description: 'Get cruise-ready and ensure a smooth and balanced sailing experience.',
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
          title: 'Plan excursions adventures',
        },
        {
          no: 5,
          title: 'Contact banks for local currency',
        },
      ],
    },
    secondColumn: {
      items: [
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
  },
  {
    slug: 'jet-setter-on-the-go',
    icon: `${imageDomainUrl}/TravelTips/Icons/jet-setter-on-the-go.svg`,
    title: 'Jet-Setter on the Go',
    description:
      'Flying is better when you are balanced! Here are some travel tips to enjoy your adventure.',
    firstColumn: {
      title: 'Packing for Your Trip',
      description: 'Streamline your travels with expert packing tips for your upcoming flight.',
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
    secondColumn: {
      title: 'Technology on the Go',
      description: 'Stay connected and entertained on board and enjoy your flight.',
      items: [
        {
          no: 6,
          title: 'Pack headphones',
        },
        {
          no: 7,
          title: 'Remember devices',
        },
        {
          no: 8,
          title: 'Fully charge devices',
        },
        {
          no: 9,
          title: 'Bring extra chargers',
        },
        {
          no: 10,
          title: 'Utilize in-flight Wi-Fi',
        },
      ],
    },
    quote: 'Travel far, find balance within.',
  },
];
