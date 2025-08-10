import { Service8Wrapper } from './Service8.styled';

import { HOME_IMAGES } from '../constants';

import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import InfoSvg from 'shared/assets/svg/Home/s8-info.svg';

interface Props {
  className?: string;
}

const Service8: React.FC<Props> = ({ className }) => {
  return (
    <Service8Wrapper
      className={classNames(
        `relative h-[calc(470px+137px+40px)]`, // {phone height} + {info height} + {margin between phone and info}
        `md:h-[calc(470px+120px)]`,
        `lg:h-[calc(613px+120px)]`,
        `xl:h-[calc(666px+120px)]`,
        className
      )}
    >
      <div className={classNames(`bg mt-[-20%]`, `md:mt-[-60px]`, `lg:mt-[-90px]`)}></div>
      <div
        className={classNames(
          `relative isolate flex h-full w-screen flex-col items-center justify-between`,
          `md:justify-start`
        )}
      >
        <Image
          className={classNames(
            `top-[-10px] block w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:left-[calc(50%-250px)] md:top-0 md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%-320px)] lg:max-w-[300px]`,
            `xl:left-[calc(50%-395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s8-phone-1'].url}
          width={HOME_IMAGES['s8-phone-1'].width}
          height={HOME_IMAGES['s8-phone-1'].height}
          alt={HOME_IMAGES['s8-phone-1'].alt}
        />
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:left-[calc(50%+250px)] md:bottom-0 md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%+320px)] lg:max-w-[300px]`,
            `xl:left-[calc(50%+395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s8-phone-2'].url}
          width={HOME_IMAGES['s8-phone-2'].width}
          height={HOME_IMAGES['s8-phone-2'].height}
          alt={HOME_IMAGES['s8-phone-2'].alt}
        />
        <div
          className={classNames(
            `absolute bottom-0 flex w-[305px] flex-col items-center gap-2 transition-opacity duration-1000`,
            `md:bottom-[unset] md:top-[50%] md:left-[50%] md:w-[230px] md:translate-x-[-50%] md:translate-y-[-50%]`,
            `lg:w-[300px]`,
            `xl:w-[326px]`
          )}
        >
          <InfoSvg className={classNames(`h-[33px] w-[auto]`, `lg:h-[48px]`)} />
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-lg font-[600] text-black-1`,
              `md:text-start`,
              `lg:pt-[8px] lg:text-2xl`
            )}
          >
            Fitness on the Go
          </p>
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-sm font-[400] text-gray-3`,
              `md:text-base`,
              `lg:text-lg`
            )}
          >
            Stay healthy and fit whether at home or traveling with simple exercises to help you
            regain and maintain balance and vitality.
          </p>
        </div>
      </div>
    </Service8Wrapper>
  );
};

export default Service8;
