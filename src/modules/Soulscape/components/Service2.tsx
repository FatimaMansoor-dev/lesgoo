import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import InfoSvg from 'shared/assets/svg/Soulscape/s2-info.svg';

import { SOULSCAPE_IMAGES } from '../constants';
import { Service2Wrapper } from './Service2.styled';

interface Props {
  className?: string;
}

const Service2: React.FC<Props> = ({ className }) => {
  return (
    <Service2Wrapper
      className={classNames(
        `relative h-fit`,
        `md:h-[calc(470px+120px)]`,
        `lg:h-[calc(613px+120px)]`,
        `xl:h-[calc(666px+120px)]`,
        className
      )}
    >
      <div className={classNames(`bg mt-[-20%]`, `md:mt-[-50px]`, `lg:mt-[-80px]`)}></div>
      <div
        className={classNames(
          `relative isolate flex h-full w-screen flex-col items-center justify-between`,
          `md:justify-start`
        )}
      >
        <div className="flex flex-col items-center md:absolute md:left-[calc(50%-250px)] md:bottom-0 md:translate-x-[-50%] lg:left-[calc(50%-320px)] xl:left-[calc(50%-395px)]">
          <Image
            className={classNames(
              `block w-full max-w-[230px] transition-opacity duration-1000`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={SOULSCAPE_IMAGES['s2-phone-1'].url}
            width={SOULSCAPE_IMAGES['s2-phone-1'].width}
            height={SOULSCAPE_IMAGES['s2-phone-1'].height}
            alt={SOULSCAPE_IMAGES['s2-phone-1'].alt}
          />
          <div
            className={classNames(
              `mt-[40px] flex w-[270px] flex-col items-center gap-2 transition-opacity duration-1000`,
              `md:hidden`
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
              Travel Safe
            </p>
            <p
              className={classNames(
                `text-justify font-['Gilroy'] text-sm font-[400] text-gray-3`,
                `md:text-base`,
                `lg:text-lg`
              )}
            >
              Ensure a balanced and secure travel experience by staying informed. Check for news
              updates, weather forecasts, safety considerations, and essential travel tips. A
              well-prepared traveler is a stress-free and thoroughly enjoyable one on their journey.
            </p>
          </div>
        </div>
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:left-[calc(50%+250px)] md:top-0 md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%+320px)] lg:max-w-[300px]`,
            `xl:left-[calc(50%+395px)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s2-phone-2'].url}
          width={SOULSCAPE_IMAGES['s2-phone-2'].width}
          height={SOULSCAPE_IMAGES['s2-phone-2'].height}
          alt={SOULSCAPE_IMAGES['s2-phone-2'].alt}
        />
        <div
          className={classNames(
            `hidden w-[270px] flex-col items-center gap-2 transition-opacity duration-1000`,
            `md:absolute md:top-[50%] md:left-[50%] md:flex md:w-[200px] md:translate-x-[-50%] md:translate-y-[-50%]`,
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
            Travel Safe
          </p>
          <p
            className={classNames(
              `text-justify font-['Gilroy'] text-sm font-[400] text-gray-3`,
              `md:text-base`,
              `lg:text-lg`
            )}
          >
            Ensure a balanced and secure travel experience by staying informed. Check for news
            updates, weather forecasts, safety considerations, and essential travel tips. A
            well-prepared traveler is a stress-free and thoroughly enjoyable one on their journey.
          </p>
        </div>
      </div>
    </Service2Wrapper>
  );
};

export default Service2;
