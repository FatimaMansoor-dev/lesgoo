import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import InfoSvg from 'shared/assets/svg/Home/s4-info.svg';

import { HOME_IMAGES } from '../constants';
import { SleepEscapeWrapper } from './SleepEscape.styled';

interface Props {
  className?: string;
}

const SleepEscape: React.FC<Props> = ({ className }) => {
  return (
    <SleepEscapeWrapper
      className={classNames(
        `relative h-fit py-[40px]`,
        `md:h-[calc(470px+245px+100px+240px)]`,
        `lg:h-[calc(613px+272px+120px+240px)] md:py-[160px]`,
        `xl:h-[calc(666px+272px+120px+240px)]`,
        className
      )}
    >
      <Image
        className="object-cover brightness-75 contrast-100"
        src={HOME_IMAGES['s6-bg'].url}
        alt={HOME_IMAGES['s6-bg'].alt}
        fill
        quality={100}
      />
      <div
        className={classNames(
          `relative isolate flex h-full w-screen flex-col items-center justify-between`,
          `md:justify-start`
        )}
      >
        <div className="top-0 flex flex-col items-center md:absolute">
          <Image
            className={classNames(
              `block w-full max-w-[230px] drop-shadow-phone-shadow transition-opacity duration-1000`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={HOME_IMAGES['s4-phone-1'].url}
            width={HOME_IMAGES['s4-phone-1'].width}
            height={HOME_IMAGES['s4-phone-1'].height}
            alt={HOME_IMAGES['s4-phone-1'].alt}
          />
          <div
            className={classNames(
              `mt-[40px] flex w-[270px] flex-col items-center justify-center gap-2 transition-opacity duration-1000`,
              `md:mt-[90px] md:w-[200px]`,
              `lg:w-[250px]`,
              `xl:w-[276px]`
            )}
          >
            <InfoSvg className={classNames(`h-[33px] w-[auto]`, `lg:h-[48px]`)} />
            <p
              className={classNames(
                `text-center font-['Gilroy'] text-lg font-[600] text-white`,
                `md:text-xl`,
                `lg:pt-[8px] lg:text-2xl`
              )}
            >
              Sleep Escape
            </p>
            <p
              className={classNames(
                `text-justify font-['Gilroy'] text-sm font-[400] text-white`,
                `md:text-base`,
                `lg:text-lg`
              )}
            >
              Embark on serene bedtime journeys crafted to nurture your well-being, fostering
              relaxation, imagination, and positive beliefs as you peacefully rest your mind.
            </p>
          </div>
        </div>
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] drop-shadow-phone-shadow transition-opacity duration-1000`,
            `bottom-0 md:absolute md:left-[calc(50%-250px)] md:block md:translate-x-[-50%]`,
            `lg:bottom-0 lg:left-[calc(50%-320px)] lg:max-w-[300px]`,
            `xl:left-[calc(50%-395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s4-phone-2'].url}
          width={HOME_IMAGES['s4-phone-2'].width}
          height={HOME_IMAGES['s4-phone-2'].height}
          alt={HOME_IMAGES['s4-phone-2'].alt}
        />
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] drop-shadow-phone-shadow transition-opacity duration-1000`,
            `md:absolute md:top-[50%] md:right-[calc(50%-250px)] md:block md:translate-x-[50%] md:translate-y-[-50%]`,
            `lg:right-[calc(50%-320px)] lg:max-w-[300px]`,
            `xl:right-[calc(50%-395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s4-phone-3'].url}
          width={HOME_IMAGES['s4-phone-3'].width}
          height={HOME_IMAGES['s4-phone-3'].height}
          alt={HOME_IMAGES['s4-phone-3'].alt}
        />
      </div>
    </SleepEscapeWrapper>
  );
};

export default SleepEscape;
