import { SoulscapeTravelCardItemType } from 'modules/TravelSafe/constants/travel-safe-items';

import { imageDomainUrl } from 'shared/constants/Assets';

export const stayHealthyItems: SoulscapeTravelCardItemType[] = [
  {
    slug: 'achieve-inner-peace',
    title: 'Achieve Inner Peace',
    description: `Traveling is better when you are grateful. Learn ways to align with an attitude of gratitude and enjoy peace of mind.`,
    url: 'https://www.therenewcenter.com/embed/blogs',
    quote: 'Combine the joy of new horizons with the calm of inner peace',
    iconSrc: `${imageDomainUrl}/StayHealthy/healthy-mind-icon.svg`,
    iconAlt: 'Healthy Mind Icon',
    descriptionClassName: 'max-w-[25.5rem]',
  },
  // Removed
  // {
  //   slug: 'the-balanced-traveler',
  //   title: 'Balanced Traveler',
  //   description:
  //     'Learn quick and powerful ways to decrease stress and boost well-being while you soulscape to your favorite destinations. ',
  //   url: 'https://gratefulness.org',
  //   quote: 'Harmonize the thrill of discovery with the peace of rejuvenation.',
  //   iconSrc: `${imageDomainUrl}/StayHealthy/healthy-mind-icon.svg`,
  //   iconAlt: 'Healthy Mind Icon',
  //   descriptionClassName: 'max-w-[25.5rem]',
  // },
  // Removed
  // {
  //   slug: 'words-of-wisdom',
  //   title: 'Words of Wisdom',
  //   description:
  //     'Souslcaping is better when you are motivated. Embrace wisdoms from popular gurus to inspire an energized, balanced, and motivated mindset while on-the-go.',
  //   url: 'https://addicted2success.com/',
  //   quote:
  //     'Souslcaping is better when you are motivated. Embrace wisdoms from popular gurus to inspire an energized, balanced, and motivated mindset while on-the-go. ',
  //   iconSrc: `${imageDomainUrl}/StayHealthy/healthy-mind-icon.svg`,
  //   iconAlt: 'Healthy Mind Icon',
  //   descriptionClassName: 'max-w-[25.5rem]',
  // },
];
