import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import InfoSvg from 'shared/assets/svg/Home/s6-info.svg';

import { HOME_IMAGES } from '../constants';
import { Service5WrapperStayMotivated } from './Service5StayMotivated.styled';

interface Props {
  className?: string;
}

const Service5StayMotivated: React.FC<Props> = ({ className }) => {
  return (
    <Service5WrapperStayMotivated
      className={classNames(
        `relative h-fit`,
        `md:h-[calc(470px+273px+100px)]`,
        `lg:h-[calc(613px+304px+120px)]`,
        `xl:h-[calc(666px+304px+120px)]`,
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
            src={HOME_IMAGES['s6-phone-1'].url}
            width={HOME_IMAGES['s6-phone-1'].width}
            height={HOME_IMAGES['s6-phone-1'].height}
            alt={HOME_IMAGES['s6-phone-1'].alt}
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
                `text-center font-['Gilroy'] text-2xl font-[600] text-black-1`,
                `md:text-start md:text-xl`,
                `lg:pt-[8px] lg:text-3xl`
              )}
            >
              Stay Motivated
            </p>
            <p
              className={classNames(
                `text-justify font-['Gilroy'] text-sm font-[400] text-gray-3`,
                `md:text-base`,
                `lg:text-lg`
              )}
            >
              Ignite your motivation with daily doses of pep talks, affirmations, and insights
              inspiring you to attain a balanced lifestyle.
            </p>
          </div>
        </div>
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `bottom-0 md:absolute md:left-[calc(50%-250px)] md:block md:translate-x-[-50%]`,
            `lg:bottom-0 lg:left-[calc(50%-320px)] lg:max-w-[300px]`,
            `xl:left-[calc(50%-395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s6-phone-2'].url}
          width={HOME_IMAGES['s6-phone-2'].width}
          height={HOME_IMAGES['s6-phone-2'].height}
          alt={HOME_IMAGES['s6-phone-2'].alt}
        />
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:top-[50%] md:right-[calc(50%-250px)] md:block md:translate-x-[50%] md:translate-y-[-50%]`,
            `lg:right-[calc(50%-320px)] lg:max-w-[300px]`,
            `xl:right-[calc(50%-395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s6-phone-3'].url}
          width={HOME_IMAGES['s6-phone-3'].width}
          height={HOME_IMAGES['s6-phone-3'].height}
          alt={HOME_IMAGES['s6-phone-3'].alt}
        />
      </div>
    </Service5WrapperStayMotivated>
  );
};

export default Service5StayMotivated;
