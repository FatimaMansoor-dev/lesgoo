import { Service6Wrapper } from './Service6.styled';

import { SOULSCAPE_IMAGES } from '../constants';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import InfoSvg from 'shared/assets/svg/Soulscape/s6-info.svg';

interface Props {
  className?: string;
}

const Service6: React.FC<Props> = ({ className }) => {
  return (
    <Service6Wrapper
      className={classNames(
        `relative mt-[-40px] h-[calc(470px+165px+40px+80px)]`, // {phone height} + {info height} + {margin between phone and info}
        `md:mt-[-60px] md:h-[calc(470px+120px)]`,
        `lg:mt-[-80px] lg:h-[calc(613px+160px)]`,
        `xl:h-[calc(666px+160px)]`,
        className
      )}
    >
      <Image
        className={classNames(
          `absolute top-0 h-[100%] w-full object-cover object-right`,
          `md:object-center`,
          `lg:object-right`
        )}
        src={SOULSCAPE_IMAGES['s6-bg'].url}
        height={SOULSCAPE_IMAGES['s6-bg'].height}
        width={SOULSCAPE_IMAGES['s6-bg'].width}
        alt={SOULSCAPE_IMAGES['s6-bg'].alt}
      />
      <div
        className={classNames(
          `relative isolate flex h-full w-screen flex-col items-center justify-between`,
          `md:justify-start`
        )}
      >
        <Image
          className={classNames(
            `relative top-[40px] block w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:left-[calc(50%-250px)] md:top-[50%] md:block md:translate-x-[-50%] md:translate-y-[-50%]`,
            `lg:left-[calc(50%-320px)] lg:max-w-[300px]`,
            `xl:left-[calc(50%-395px)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s6-phone-1'].url}
          width={SOULSCAPE_IMAGES['s6-phone-1'].width}
          height={SOULSCAPE_IMAGES['s6-phone-1'].height}
          alt={SOULSCAPE_IMAGES['s6-phone-1'].alt}
        />
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:left-[50%] md:top-[50%] md:block md:translate-x-[-50%] md:translate-y-[-50%]`,
            `lg:max-w-[300px]`,
            `xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s6-phone-2'].url}
          width={SOULSCAPE_IMAGES['s6-phone-2'].width}
          height={SOULSCAPE_IMAGES['s6-phone-2'].height}
          alt={SOULSCAPE_IMAGES['s6-phone-2'].alt}
        />
        <div
          className={classNames(
            `absolute bottom-[40px] flex w-[305px] flex-col items-center gap-2 transition-opacity duration-1000`,
            `md:bottom-[unset] md:top-[50%] md:left-[calc(50%+250px)] md:w-[230px] md:translate-x-[-50%] md:translate-y-[-50%] md:items-start`,
            `lg:left-[calc(50%+320px)] lg:w-[300px]`,
            `xl:left-[calc(50%+395px)] xl:w-[326px]`
          )}
        >
          <InfoSvg className={classNames(`h-[33px] w-[auto]`, `lg:h-[48px]`)} />
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-lg font-[600] text-black-1`,
              `md:text-start md:text-xl`,
              `lg:pt-[8px] lg:text-2xl`
            )}
          >
            Spa Finder
          </p>
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-sm font-[400] text-gray-3`,
              `md:text-start md:text-base`,
              `lg:text-start lg:text-lg`
            )}
          >
            Pep Talks, affirmations, and spotlight influencers inspire you to lead a more productive
            and balanced life.
          </p>
          <Link legacyBehavior href={'#'}>
            <a
              className={classNames(
                `font-['Gilroy'] text-sm font-[600] text-blue-3 underline`,
                `md:text-base`,
                `lg:text-lg`
              )}
            >
              Find a Resort & Spa
            </a>
          </Link>
        </div>
      </div>
    </Service6Wrapper>
  );
};

export default Service6;
