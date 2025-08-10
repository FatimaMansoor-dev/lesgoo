import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

const RenewMeWatermark = () => {
  return (
    <Image
      className="fixed w-screen h-screen z-20 pointer-events-none opacity-[0.08] object-cover"
      src={`${imageDomainUrl}/YourBrandSample/renewme-watermark.png`}
      alt="KARMA Water"
      width={4000}
      height={4000}
    />
  );
};

export default RenewMeWatermark;
