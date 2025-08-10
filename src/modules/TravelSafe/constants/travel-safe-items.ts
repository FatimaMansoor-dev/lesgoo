import { imageDomainUrl } from 'shared/constants/Assets';

export interface SoulscapeTravelCardItemType {
  subtitle?: string;
  slug: string;
  title: string;
  description?: string;
  url: string;
  quote: string;
  quoteClassName?: string;
  descriptionClassName?: string;
  iconSrc?: string;
  iconAlt?: string;
}

export const travelSafeItems: SoulscapeTravelCardItemType[] = [
  // Removed because they already have weather and news updates
  // {
  //   slug: 'weather-updates',
  //   title: 'Weather Updates',
  //   description:
  //     'Stay prepared and get real-time weather forecasts, alerts, and conditions to ensure a smooth and safe trip.',
  //   url: 'https://www.accuweather.com/',
  //   quote: 'Harmonize the thrill of new experiences with the calm of quiet reflection.',
  //   descriptionClassName: 'max-w-[28.8125rem]',
  //   iconSrc: `${imageDomainUrl}/TravelSafe/travel-safe-icon.svg`,
  //   iconAlt: 'Travel Safe Icon',
  // },
  // {
  //   slug: 'news-updates',
  //   title: 'News Updates',
  //   description:
  //     'Stay informed with the latest news updates. Plan your journey to ensure a smooth trip.',
  //   url: 'https://apnews.com/',
  //   quote:
  //     'Explore new horizons with curiosity while staying informed to navigate the journey wisely.',
  //   descriptionClassName: 'max-w-[23.5rem]',
  //   iconSrc: `${imageDomainUrl}/TravelSafe/travel-safe-icon.svg`,
  //   iconAlt: 'Travel Safe Icon',
  // },
  {
    slug: 'travel-safety',
    title: 'Travel Safety',
    description: 'Before you travel be sure to keep in mind security and safety considerations.',
    url: 'https://wwwnc.cdc.gov/travel/',
    quote: 'The best travelers balance spontaneity with preparation.',
    iconSrc: `${imageDomainUrl}/TravelSafe/travel-safe-icon.svg`,
    iconAlt: 'Travel Safe Icon',
    descriptionClassName: 'max-w-[23.5rem]',
  },
];
