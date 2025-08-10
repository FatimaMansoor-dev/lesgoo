import { assetVersion, imageDomainUrl } from 'shared/constants/Assets';

export enum LockLocalStorage {
  Password = 'lock_password',
  Expiration = 'lock_expiration',
}

export const LOCK_IMAGES = {
  phone: {
    url: `${imageDomainUrl}/Lock/phone.png?v=${assetVersion}`,
    width: 548,
    height: 699,
    alt: 'image',
  },
};
