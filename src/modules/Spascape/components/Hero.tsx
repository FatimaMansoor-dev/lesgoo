import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Button } from 'src/components/ui/button';
import { toast } from 'src/components/ui/use-toast';
import { cn } from 'src/lib/utils';

import { Play } from 'lucide-react';

import { SPASCAPE_IMAGES } from '../constants';
import { HeroWrapper } from './Hero.styled';

const Hero: React.FC = () => {
  return (
    <HeroWrapper className="relative">
      <Image
        className={classNames(
          `absolute hidden h-[1440px] w-[2560px] object-cover object-center brightness-95 contrast-[110%] md:block`
        )}
        src={SPASCAPE_IMAGES['h-bg'].url}
        alt={SPASCAPE_IMAGES['h-bg'].alt}
        fill
        priority
      />
      <Image
        className={classNames(
          `absolute block h-[1440px] w-[2560px] object-cover object-center brightness-95 contrast-[110%] md:hidden`
        )}
        src={SPASCAPE_IMAGES['h-bg-mobile'].url}
        alt={SPASCAPE_IMAGES['h-bg-mobile'].alt}
        fill
      />

      <div
        className={classNames(
          `container isolate mx-auto flex h-full flex-col items-center px-6 pt-16`
        )}
      >
        <div className={classNames(`flex flex-col items-center py-[80px] pb-6`)}>
          <h1
            className={classNames(
              `hero-text pb-4 text-center font-['Gilroy'] text-5xl font-medium leading-10 text-white`,
              `md:text-7xl`
            )}
          >
            Spascape
          </h1>
          <p
            className={classNames(
              `hero-text max-w-[300px] text-center font-['Gilroy'] text-base font-[500] text-white`,
              `md:max-w-lg`,
              `lg:max-w-xl lg:text-lg`,
              `xl:max-w-2xl xl:text-xl`
            )}
          >
            Spascape offers a curated escape while you indulge at spa destinations, providing an
            immersive experience for those seeking relaxation and rejuvenation of mind and body.
          </p>
        </div>
        <div className={classNames(`hero-buttons flex gap-4 font-['Gilroy'] text-base md:text-lg`)}>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-4">
              <div className={cn('flex flex-col items-center justify-center gap-2')}>
                <p className={cn('text-white font-medium', 'lg:text-sm', 'xl:text-base')}>
                  Stay Tuned!
                </p>
                <Image
                  className="h-auto w-[110px] cursor-pointer"
                  src={`${imageDomainUrl}/Code/app-store-button.png`}
                  alt="Download Icon"
                  width={1200}
                  height={1200}
                  onClick={() => {
                    toast({
                      title: `Coming Soon!`,
                      className: 'bg-white rounded-xl',
                      description: 'RenewMe is coming! Will be available in the App Store soon!',
                    });
                  }}
                />
              </div>
            </div>

            {/* Listen to a sampler */}
            <Button
              variant="secondary"
              className="flex rounded-full text-white hover:bg-white/10 bg-white/0 items-center gap-1 text-base font-medium"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);

                toast({
                  title: `Link Copied!`,
                  className: 'bg-white rounded-xl',
                  description: 'Share with friends! RenewMe is coming soon!',
                });
              }}
            >
              <Link
                className="flex items-center gap-0.5"
                href="https://www.myrenewme.com/renewme/code/peace369"
                target="_blank"
                rel="noreferrer"
              >
                <Play className="w-4 h-auto" />  <span className="mt-0.5">Listen to a sampler</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className={classNames(`my-10 flex w-full justify-center`, `xl:my-20`)}>
        <div
          className={classNames(
            `flex flex-col items-center justify-center gap-[20px]`,
            `lg:flex-row lg:gap-[40px]`,
            `xl:gap-[70px]`
          )}
        >
          <Image
            className={classNames(
              `z-10 h-auto w-full max-w-[230px] drop-shadow-phone-shadow`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={SPASCAPE_IMAGES['h-phone-1'].url}
            alt={SPASCAPE_IMAGES['h-phone-1'].alt}
            width={SPASCAPE_IMAGES['h-phone-1'].width}
            height={SPASCAPE_IMAGES['h-phone-1'].height}
            priority
          />
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
