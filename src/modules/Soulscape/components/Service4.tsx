import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import InfoSvg from 'shared/assets/svg/Soulscape/s4-info.svg';

import { SOULSCAPE_IMAGES } from '../constants';
import { Service4Wrapper } from './Service4.styled';

interface Props {
  className?: string;
}

const Service4: React.FC<Props> = ({ className }) => {
  return (
    <Service4Wrapper
      className={classNames(
        `relative h-fit`,
        `md:h-[calc(470px+221px+60px+90px)]`,
        `lg:h-[calc(613px+244px+90px+90px)]`,
        `xl:h-[calc(666px+244px+90px+90px)]`,
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
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:top-[0] md:left-[calc(50%-250px*-1.5)] md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%-320px*-1.5)] lg:max-w-[300px]`,
            `xl:left-[calc(50%-395px*-1.5)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s4-phone-4'].url}
          width={SOULSCAPE_IMAGES['s4-phone-4'].width}
          height={SOULSCAPE_IMAGES['s4-phone-4'].height}
          alt={SOULSCAPE_IMAGES['s4-phone-4'].alt}
        />
        <div
          className={classNames(
            `flex flex-col-reverse items-center`,
            `md:absolute md:top-0 md:left-[calc(50%-250px/2)] md:translate-x-[-50%] md:flex-col`,
            `lg:left-[calc(50%-320px/2)]`,
            `xl:left-[calc(50%-395px/2)]`
          )}
        >
          <div
            className={classNames(
              `mt-[40px] flex w-[270px] flex-col items-center gap-2 transition-opacity duration-1000`,
              `md:mb-[90px] md:w-[200px]`,
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
              Mindful Traveler
            </p>
            <p
              className={classNames(
                `text-justify font-['Gilroy'] text-sm font-[400] text-gray-3`,
                `md:text-base`,
                `lg:text-lg`
              )}
            >
              Immerse yourself in a suite of meditations designed to enhance a state of peace and
              tranquility, whether you&apos;re on the move at the airport or unwinding in the
              comfort of your hotel.
            </p>
          </div>
          <Image
            className={classNames(
              `block w-full max-w-[230px] transition-opacity duration-1000`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={SOULSCAPE_IMAGES['s4-phone-2'].url}
            width={SOULSCAPE_IMAGES['s4-phone-2'].width}
            height={SOULSCAPE_IMAGES['s4-phone-2'].height}
            alt={SOULSCAPE_IMAGES['s4-phone-2'].alt}
          />
        </div>
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:bottom-[calc(100px*2)] md:left-[calc(50%+250px/2)] md:block md:translate-x-[-50%]`,
            `lg:bottom-[calc(90px*2)] lg:left-[calc(50%+320px/2)] lg:max-w-[300px]`,
            `xl:bottom-[calc(80px*2)] xl:left-[calc(50%+395px/2)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s4-phone-3'].url}
          width={SOULSCAPE_IMAGES['s4-phone-3'].width}
          height={SOULSCAPE_IMAGES['s4-phone-3'].height}
          alt={SOULSCAPE_IMAGES['s4-phone-3'].alt}
        />
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:top-[0] md:left-[calc(50%+250px*-1.5)] md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%+320px*-1.5)] lg:max-w-[300px]`,
            `xl:left-[calc(50%+395px*-1.5)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s4-phone-1'].url}
          width={SOULSCAPE_IMAGES['s4-phone-1'].width}
          height={SOULSCAPE_IMAGES['s4-phone-1'].height}
          alt={SOULSCAPE_IMAGES['s4-phone-1'].alt}
        />
      </div>
    </Service4Wrapper>
  );
};

export default Service4;
