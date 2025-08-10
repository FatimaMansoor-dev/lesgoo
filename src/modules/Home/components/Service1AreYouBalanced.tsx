import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import InfoSvg from 'shared/assets/svg/Home/s1-info.svg';

import { HOME_IMAGES } from '../constants';
import { Service1WrapperAreYouBalanced } from './Service1AreYouBalanced.styled';

interface Props {
  className?: string;
}

const Service1AreYouBalanced: React.FC<Props> = ({ className }) => {
  return (
    <Service1WrapperAreYouBalanced
      className={classNames(
        `relative h-fit`,
        `md:h-[calc(470px+245px+60px)]`,
        `lg:h-[calc(613px+272px+90px+60px)]`,
        `xl:h-[calc(666px+272px+90px)]`,
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
        <div className="flex flex-col items-center">
          <Image
            className={classNames(
              `block w-full max-w-[230px] transition-opacity duration-1000`,
              `md:max-w-[230px] md:translate-y-[60px]`,
              `lg:max-w-[300px] lg:translate-y-[90px]`,
              `xl:max-w-[326px]`
            )}
            src={HOME_IMAGES['s1-phone-2'].url}
            width={HOME_IMAGES['s1-phone-2'].width}
            height={HOME_IMAGES['s1-phone-2'].height}
            alt={HOME_IMAGES['s1-phone-2'].alt}
          />
          <div
            className={classNames(
              `mt-[40px] flex w-[270px] flex-col items-center justify-center gap-2 transition-opacity duration-1000`,
              `md:hidden`,
              `lg:hidden`,
              `xl:hidden`
            )}
          >
            <InfoSvg className={classNames(`h-[33px] w-[auto]`, `lg:h-[48px]`)} />
            <p
              className={classNames(
                `text-center font-['Gilroy'] text-2xl font-medium text-black-1`,
                `md:text-xl`,
                `lg:pt-[8px] lg:text-3xl`
              )}
            >
              Are You Balanced?
            </p>
            <p
              className={classNames(
                `text-justify font-['Gilroy'] text-sm font-[400] text-gray-3`,
                `md:text-base`,
                `lg:text-lg`
              )}
            >
              Discover a simple and enjoyable test to evaluate your goals and gauge your life
              balance. Identify your strengths and weaknesses, and embark on the path to a more
              fulfilling and joyous life!
            </p>
          </div>
        </div>

        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:left-[calc(50%-250px)] md:top-[calc(60px*2)] md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%-320px)] lg:top-[calc(90px*2)] lg:max-w-[300px]`,
            `xl:left-[calc(50%-395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s1-phone-1'].url}
          width={HOME_IMAGES['s1-phone-1'].width}
          height={HOME_IMAGES['s1-phone-1'].height}
          alt={HOME_IMAGES['s1-phone-1'].alt}
        />

        <div
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:left-[calc(50%+250px)] md:top-0 md:flex md:translate-x-[-50%] md:flex-col md:items-center`,
            `lg:left-[calc(50%+320px)] lg:max-w-[300px]`,
            `xl:left-[calc(50%+395px)] xl:max-w-[326px]`
          )}
        >
          <Image
            className={classNames(
              `w-full max-w-[230px] transition-opacity duration-1000`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={HOME_IMAGES['s1-phone-3'].url}
            width={HOME_IMAGES['s1-phone-3'].width}
            height={HOME_IMAGES['s1-phone-3'].height}
            alt={HOME_IMAGES['s1-phone-3'].alt}
          />
          <div
            className={classNames(
              `mt-[40px] hidden w-[270px] flex-col items-center justify-center gap-2 transition-opacity duration-1000`,
              `md:flex md:w-[200px]`,
              `lg:mt-[90px] lg:w-[250px]`,
              `xl:w-[276px]`
            )}
          >
            <InfoSvg className={classNames(`h-[33px] w-[auto]`, `lg:h-[48px]`)} />
            <p
              className={classNames(
                `text-center font-['Gilroy'] text-2xl font-medium text-black-1`,
                `md:text-xl`,
                `lg:pt-[8px] lg:text-3xl`
              )}
            >
              Are You Balanced?
            </p>
            <p
              className={classNames(
                `text-justify font-['Gilroy'] text-sm font-[400] text-gray-3`,
                `md:text-base`,
                `lg:text-lg`
              )}
            >
              Discover a simple and enjoyable test to evaluate your goals and gauge your life
              balance. Identify your strengths and weaknesses, and embark on the path to a more
              fulfilling and joyous life!
            </p>
          </div>
        </div>
      </div>
    </Service1WrapperAreYouBalanced>
  );
};

export default Service1AreYouBalanced;
