import React from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { cn } from 'src/lib/utils';

interface WelcomeBannerProps {
  type?: 'renewme' | 'soulscape';
}

const bannerConfig = {
  renewme: {
    title: 'A World of Balance',
    description: 'Refreshing wellness inspiring you to lead a happier and more balanced life.',
    image: 'recovery-banner.png',
    maxWidth: 'max-w-[424px]',
  },
  soulscape: {
    title: 'Soulscape',
    description:
      'A soothing experience for the mindful traveler to relax and balance on their journeys.',
    image: 'soulscape-banner.png',
    maxWidth: 'max-w-[491px]',
  },
};

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ type = 'renewme' }) => {
  const config = bannerConfig[type];

  return (
    <section className="flex flex-col md:flex-row gap-4">
      {/* Left Banner */}
      <div className="relative p-6 rounded-3xl w-full border-2 border-zinc-100 flex flex-col justify-center overflow-hidden">
        <Image
          fill
          className="object-cover -z-10"
          src={`${imageDomainUrl}/TabletApp/${config.image}`}
          alt={`${config.title} Banner`}
          quality={100}
        />
        <div>
          <h2 className="text-[45px] font-['Gilroy'] font-bold leading-[58.22px] text-white text-center">
            {config.title}
          </h2>
          <p
            className={cn(
              'font-medium text-[#fffffe] text-base font-["Gilroy"] text-center mx-auto mt-[11px] leading-[19.2px]',
              config.maxWidth
            )}
          >
            {config.description}
          </p>
        </div>
      </div>

      {/* QR Code Section */}
      <aside className="w-full md:w-52 p-3 border-2 border-zinc-100 rounded-3xl bg-[#00C0C5] flex flex-col justify-between">
        <div className="mb-2 flex items-center justify-center">
          <div className="p-2 bg-white rounded-2xl">
            <Image
              src={`${imageDomainUrl}/TabletApp/qr-renewme.jpeg`}
              alt="QR Code for downloading RenewMe app"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-[3px] items-center">
            <h4 className="text-white text-xs text-center flex gap-1 font-medium">
              Download RenewMe
            </h4>
            <Image
              src={`${imageDomainUrl}/TabletApp/Icons/download.svg`}
              alt="Download icon"
              width={12}
              height={12}
            />
          </div>
          <p className="text-white text-center text-xs">Listen on-the-go!</p>
        </div>
      </aside>
    </section>
  );
};

export default WelcomeBanner;
