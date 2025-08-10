import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import InfoSvg from 'shared/assets/svg/Soulscape/s3-info.svg';

import { SOULSCAPE_IMAGES } from '../constants';
import { Service3Wrapper } from './Service3.styled';

interface Props {
  className?: string;
}

const Service3: React.FC<Props> = ({ className }) => {
  return (
    <Service3Wrapper
      className={classNames(
        `relative h-fit`,
        `md:h-[calc(470px+173px+100px)]`,
        `lg:h-[calc(613px+216px+120px)]`,
        `xl:h-[calc(666px+216px+120px)]`,
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
        <div className="flex flex-col items-center md:absolute md:top-[calc(80px*2)] md:left-[calc(50%-250px/2)] md:translate-x-[-50%] lg:top-[calc(70px*2)] lg:left-[calc(50%-320px/2)] xl:top-[calc(60px*2)] xl:left-[calc(50%-395px/2)]">
          <Image
            className={classNames(
              `block w-full max-w-[230px] transition-opacity duration-1000`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={SOULSCAPE_IMAGES['s3-phone-2'].url}
            width={SOULSCAPE_IMAGES['s3-phone-2'].width}
            height={SOULSCAPE_IMAGES['s3-phone-2'].height}
            alt={SOULSCAPE_IMAGES['s3-phone-2'].alt}
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
                `md:text-start md:text-xl`,
                `lg:pt-[8px] lg:text-2xl`
              )}
            >
              Healthy Living
            </p>
            <p
              className={classNames(
                `text-justify font-['Gilroy'] text-sm font-[400] text-gray-3`,
                `md:text-base`,
                `lg:text-lg`
              )}
            >
              Discover an oasis of wellness resources designed to help you maintain a healthier
              mind, body, and soul while traveling to your favorite beautiful destinations.
            </p>
          </div>
        </div>
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:bottom-[0] md:left-[calc(50%-250px*-1.5)] md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%-320px*-1.5)] lg:max-w-[300px]`,
            `xl:left-[calc(50%-395px*-1.5)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s3-phone-4'].url}
          width={SOULSCAPE_IMAGES['s3-phone-4'].width}
          height={SOULSCAPE_IMAGES['s3-phone-4'].height}
          alt={SOULSCAPE_IMAGES['s3-phone-4'].alt}
        />
        <div
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:top-0 md:left-[calc(50%+250px/2)] md:flex md:translate-x-[-50%] md:flex-col md:items-center`,
            `lg:left-[calc(50%+320px/2)] lg:max-w-[300px]`,
            `xl:left-[calc(50%+395px/2)] xl:max-w-[326px]`
          )}
        >
          <Image
            className={classNames(
              `w-full max-w-[230px] transition-opacity duration-1000`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={SOULSCAPE_IMAGES['s3-phone-3'].url}
            width={SOULSCAPE_IMAGES['s3-phone-3'].width}
            height={SOULSCAPE_IMAGES['s3-phone-3'].height}
            alt={SOULSCAPE_IMAGES['s3-phone-3'].alt}
          />
          <div
            className={classNames(
              `mt-[90px] hidden w-[200px] flex-col items-center gap-2 transition-opacity duration-1000`,
              `md:flex`,
              `lg:w-[250px]`,
              `xl:w-[276px]`
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
              Healthy Living
            </p>
            <p
              className={classNames(
                `text-justify font-['Gilroy'] text-sm font-[400] text-gray-3`,
                `md:text-base`,
                `lg:text-lg`
              )}
            >
              Discover an oasis of wellness resources designed to help you maintain a healthier
              mind, body, and soul while traveling to your favorite beautiful destinations.
            </p>
          </div>
        </div>
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:bottom-[0] md:left-[calc(50%+250px*-1.5)] md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%+320px*-1.5)] lg:max-w-[300px]`,
            `xl:left-[calc(50%+395px*-1.5)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s3-phone-1'].url}
          width={SOULSCAPE_IMAGES['s3-phone-1'].width}
          height={SOULSCAPE_IMAGES['s3-phone-1'].height}
          alt={SOULSCAPE_IMAGES['s3-phone-1'].alt}
        />
      </div>
    </Service3Wrapper>
  );
};

export default Service3;
