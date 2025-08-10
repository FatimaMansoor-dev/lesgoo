import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import InfoSvg from 'shared/assets/svg/Soulscape/s5-info.svg';

import { SOULSCAPE_IMAGES } from '../constants';
import { Service5Wrapper } from './Service5.styled';

interface Props {
  className?: string;
}

const Service5: React.FC<Props> = ({ className }) => {
  return (
    <Service5Wrapper
      className={classNames(
        `relative h-fit`,
        `md:h-[calc(470px+253px+100px+30px)]`,
        `lg:h-[calc(613px+280px+120px+30px)]`,
        `xl:h-[calc(666px+280px+120px)]`,
        className
      )}
    >
      <div className={classNames(`bg mt-[-20%]`, `md:mt-[unset]`)}></div>
      <div
        className={classNames(
          `relative isolate flex h-full w-screen flex-col items-center justify-between`,
          `md:justify-start`
        )}
      >
        <div className="top-0 flex flex-col items-center md:absolute">
          <Image
            className={classNames(
              `block w-full max-w-[230px] transition-opacity duration-1000`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={SOULSCAPE_IMAGES['s5-phone-3'].url}
            width={SOULSCAPE_IMAGES['s5-phone-3'].width}
            height={SOULSCAPE_IMAGES['s5-phone-3'].height}
            alt={SOULSCAPE_IMAGES['s5-phone-3'].alt}
          />
          <div
            className={classNames(
              `mt-[40px] flex w-[270px] flex-col items-center gap-2 transition-opacity duration-1000`,
              `md:mt-[90px] md:w-[200px]`,
              `lg:w-[250px]`,
              `xl:w-[276px]`
            )}
          >
            <InfoSvg className={classNames(`h-[33px] w-[auto]`, `lg:h-[48px]`)} />
            <p
              className={classNames(
                `text-center font-['Gilroy'] text-lg font-[600] text-black-1`,
                `md:text-xl`,
                `lg:pt-[8px] lg:text-2xl`
              )}
            >
              Book a Trip
            </p>
            <p
              className={classNames(
                `text-justify font-['Gilroy'] text-sm font-[400] text-gray-3`,
                `md:text-base`,
                `lg:text-lg`
              )}
            >
              Simplify your vacation planning with Soulscape. Book flights, hotels, and more,
              effortlessly discovering the best deals for your favorite destinations. Travel
              planning made easy.
            </p>
          </div>
        </div>
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:bottom-[60px] md:left-[calc(50%-250px)] md:block md:translate-x-[-50%]`,
            `lg:bottom-[90px] lg:left-[calc(50%-320px)] lg:max-w-[300px]`,
            `xl:left-[calc(50%-395px)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s5-phone-1'].url}
          width={SOULSCAPE_IMAGES['s5-phone-1'].width}
          height={SOULSCAPE_IMAGES['s5-phone-1'].height}
          alt={SOULSCAPE_IMAGES['s5-phone-1'].alt}
        />
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:top-[50%] md:right-[calc(50%-250px)] md:block md:translate-x-[50%] md:translate-y-[-50%]`,
            `lg:right-[calc(50%-320px)] lg:max-w-[300px]`,
            `xl:right-[calc(50%-395px)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s5-phone-2'].url}
          width={SOULSCAPE_IMAGES['s5-phone-2'].width}
          height={SOULSCAPE_IMAGES['s5-phone-2'].height}
          alt={SOULSCAPE_IMAGES['s5-phone-2'].alt}
        />
      </div>
    </Service5Wrapper>
  );
};

export default Service5;
