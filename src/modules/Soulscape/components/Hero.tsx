import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';


import Navbar from 'shared/components/Partials/Navbar';
import { Badge } from 'src/components/ui/badge';



import { useRouter } from 'next/router';
import { SOULSCAPE_IMAGES } from '../constants';
import { HeroWrapper } from './Hero.styled';

const Hero: React.FC = () => {
    const router = useRouter();
  
  return (
    <HeroWrapper className="relative">
      <Image
        className={classNames(
          `absolute top-0 hidden h-[1440px] w-[2560px] object-cover object-top md:block`
        )}
        src={SOULSCAPE_IMAGES['soulscape-h-bg'].url}
        alt={SOULSCAPE_IMAGES['soulscape-h-bg'].alt}
        quality={100}
        fill
        priority
      />
      <Image
        className={classNames(
          `absolute top-0 block h-[1440px] w-[2560px] object-cover object-top md:hidden`
        )}
        src={SOULSCAPE_IMAGES['soulscape-h-bg-mobile'].url}
        alt={SOULSCAPE_IMAGES['soulscape-h-bg-mobile'].alt}
        quality={100}
        fill
        priority
      />
       <Navbar />

      <div className={classNames(`bg-bot`)}></div>

      <div
        className={classNames(
          `container isolate mx-auto flex h-full flex-col items-center px-6 pt-16`
        )}
      >
             

        <div className={classNames(`flex flex-col items-center pb-2`)}>
          <Badge className="text-white font-['Gilroy'] text-base mb-10 pt-1" variant="outline">
            Coming Soon
          </Badge>
          <h1
            className={classNames(
              `hero-text pb-4 text-center font-['Gilroy'] text-5xl font-medium leading-10 text-white`,
              `md:text-7xl`
            )}
          >
            Soulscape
          </h1>
          <p
            className={classNames(
              `hero-text max-w-[450px] text-center font-['Gilroy'] text-base font-[500] text-white`,
              `md:max-w-lg`,
              `lg:max-w-xl lg:text-lg`,
              `xl:max-w-2xl xl:text-xl`
            )}
          >
            A new and refreshing wellness brand inspiring you to lead a happier and more balanced life.
          </p>

           <button 
              className="bg-white font-['Urbanist'] rounded-[70px] md:my-[77px] my-[56px] md:max-w-[309px] max-w-[200px] w-full font-medium md:h-[72px] h-[50px] md:text-2xl text-lg cursor-pointer mx-auto" 
              onClick={() => router.push('/login')}>
              Get Started Now
            </button>
        </div>
      
      </div>

      <div
        className={classNames(
          `relative mt-20 flex h-[500px] w-full justify-center overflow-hidden`,
          `lg:h-[650px]`,
          `xl:h-[700px]`
        )}
      >
        <div
          className={classNames(
            `hero-image absolute flex h-auto justify-center gap-[20px]`,
            `lg:gap-[20px]`,
            `xl:gap-[70px]`
          )}
        >
          <Image
            className={classNames(
              `h-auto w-full max-w-[230px]`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={SOULSCAPE_IMAGES['h-phone-2'].url}
            height={SOULSCAPE_IMAGES['h-phone-2'].height}
            width={SOULSCAPE_IMAGES['h-phone-2'].width}
            alt={SOULSCAPE_IMAGES['h-phone-2'].alt}
          />
          <Image
            className={classNames(
              `h-auto w-full max-w-[230px]`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={SOULSCAPE_IMAGES['h-phone-3'].url}
            height={SOULSCAPE_IMAGES['h-phone-3'].height}
            width={SOULSCAPE_IMAGES['h-phone-3'].width}
            alt={SOULSCAPE_IMAGES['h-phone-3'].alt}
          />
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
