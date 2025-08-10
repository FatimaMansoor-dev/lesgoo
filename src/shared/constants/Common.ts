import { imageDomainUrl } from './Assets';

export enum Zones {
  Develop = 'develop',
  Staging = 'staging',
  Production = 'prod',
}

export const COMMON_IMAGES = {
  banner: {
    url: `${imageDomainUrl}/banner.webp`,
    width: 1048,
    height: 1536,
  },
};
