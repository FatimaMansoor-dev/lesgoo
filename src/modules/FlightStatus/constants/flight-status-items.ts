import { SoulscapeTravelCardItemType } from 'modules/TravelSafe/constants/travel-safe-items';

import { imageDomainUrl } from 'shared/constants/Assets';

export const flightStatusItems: SoulscapeTravelCardItemType[] = [
  {
    slug: 'flight-status',
    title: 'Flight Status',
    description:
      'Track real-time flight status, departures and arrivals, airport delays, and airport information. ',
    url: 'https://www.grr.org/real-time-flight-tracker',
    quote: 'Harmonize the thrill of discovery with the peace of rejuvenation.',
    descriptionClassName: 'max-w-[25.125rem]',
    iconSrc: `${imageDomainUrl}/FlightStatus/flight-status-icon.png`,
    iconAlt: 'Flight Status Icon',
  },
];
