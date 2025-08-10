import { Service10Wrapper } from './Service10.styled';

import { HOME_IMAGES } from '../constants';

import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import InfoSvg from 'shared/assets/svg/Home/s10-info.svg';

interface Props {
  className?: string;
}

const Service10: React.FC<Props> = ({ className }) => {
  return (
    <Service10Wrapper
      className={classNames(
        `relative h-[calc(470px+145px+40px)]`, // {phone height} + {info height} + {margin between phone and info}
        `md:h-[calc(470px+177px+60px)]`,
        `lg:h-[calc(613px+220px+90px)]`,
        `xl:h-[calc(666px+220px+90px)]`,
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
            `md:absolute md:top-[60px]`,
            `lg:top-[90px] lg:max-w-[300px]`,
            `xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s10-phone-2'].url}
          width={HOME_IMAGES['s10-phone-2'].width}
          height={HOME_IMAGES['s10-phone-2'].height}
          alt={HOME_IMAGES['s10-phone-2'].alt}
        />
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:left-[calc(50%-250px)] md:top-[calc(60px*2)] md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%-320px)] lg:top-[calc(90px*2)] lg:max-w-[300px]`,
            `xl:left-[calc(50%-395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s10-phone-1'].url}
          width={HOME_IMAGES['s10-phone-1'].width}
          height={HOME_IMAGES['s10-phone-1'].height}
          alt={HOME_IMAGES['s10-phone-1'].alt}
        />
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:left-[calc(50%+250px)] md:top-0 md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%+320px)] lg:max-w-[300px]`,
            `xl:left-[calc(50%+395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s10-phone-3'].url}
          width={HOME_IMAGES['s10-phone-3'].width}
          height={HOME_IMAGES['s10-phone-3'].height}
          alt={HOME_IMAGES['s10-phone-3'].alt}
        />
        <div
          className={classNames(
            `absolute bottom-0 flex w-[305px] flex-col items-center gap-2 transition-opacity duration-1000`,
            `md:left-[calc(50%+250px)] md:w-[230px] md:translate-x-[-50%] md:items-start`,
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
            Resources & <br /> Treatment
          </p>
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-sm font-[400] text-gray-3`,
              `md:text-start md:text-base`,
              `lg:text-lg`
            )}
          >
            Discover articles, resources, and treatment to empower self-growth and recovery.
          </p>
        </div>
      </div>
    </Service10Wrapper>
  );
};

export default Service10;
