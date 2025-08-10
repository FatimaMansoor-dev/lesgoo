import { assetVersion, imageDomainUrl } from 'shared/constants/Assets';

export const SPASCAPE_IMAGES = {
  'h-bg': {
    url: `${imageDomainUrl}/Spascape/h-bg.png`,
    width: 2560,
    height: 1440,
    alt: 'image',
  },
  'h-bg-mobile': {
    url: `${imageDomainUrl}/Spascape/h-bg-mobile.png`,
    width: 2560,
    height: 1440,
    alt: 'Spascape Hero Background',
  },
  'h-phone-1': {
    url: `${imageDomainUrl}/Spascape/h-phone-1.png?v=${assetVersion}`,
    width: 823,
    height: 1680,
    alt: 'image',
  },
  'h-phone-2': {
    url: `${imageDomainUrl}/Spascape/h-phone-2.png?v=${assetVersion}`,
    width: 823,
    height: 1680,
    alt: 'image',
  },
  's1-phone-1': {
    url: `${imageDomainUrl}/Spascape/s1-phone-1.png`,
    width: 2560,
    height: 1440,
    alt: 'image',
  },
  'es-bg': {
    url: `${imageDomainUrl}/Spascape/es-bg.jpg?v=${assetVersion}`,
    width: 2560,
    height: 900,
    alt: 'image',
  },
};
