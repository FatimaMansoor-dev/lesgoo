import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import InfoSvg from 'shared/assets/svg/Home/s3-info.svg';

import { HOME_IMAGES } from '../constants';
import { Service3WrapperRelaxRenew } from './Service3RelaxRenew.styled';

interface Props {
  className?: string;
}

const Service3RelaxRenew: React.FC<Props> = ({ className }) => {
  return (
    <Service3WrapperRelaxRenew
      className={classNames(
        `relative h-fit`,
        `md:h-[calc(470px+269px+100px+90px)]`,
        `lg:h-[calc(613px+300px+120px+60px)]`,
        `xl:h-[calc(666px+300px+120px+30px)]`,
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
            src={HOME_IMAGES['s3-phone-2'].url}
            width={HOME_IMAGES['s3-phone-2'].width}
            height={HOME_IMAGES['s3-phone-2'].height}
            alt={HOME_IMAGES['s3-phone-2'].alt}
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
                `text-center font-['Gilroy'] text-2xl font-medium text-black-1`,
                `md:text-start md:text-xl`,
                `lg:pt-[8px] lg:text-3xl`
              )}
            >
              Relax & Renew
            </p>
            <p
              className={classNames(
                `hidden text-justify font-['Gilroy'] text-sm font-[400] text-gray-3`,
                `md:block md:text-base`,
                `lg:text-lg`
              )}
            >
              Relieve tension and cultivate a positive mindset with audio tracks ranging from 1 to
              10 minutes. Enhance your well-being, self-esteem, mindfulness, motivation,
              relationships, body image, confidence, coping skills, self-awareness, and happiness in
              just a few minutes a day.
            </p>

            <p
              className={classNames(
                `block text-justify font-['Gilroy'] text-sm font-[400] text-gray-3`,
                `md:hidden md:text-base`,
                `lg:text-lg`
              )}
            >
              Enhance your well-being, self-esteem, mindfulness, motivation, relationships, body
              image, confidence, coping skills, self-awareness, and happiness in just a few minutes
              a day.
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
          src={HOME_IMAGES['s3-phone-1'].url}
          width={HOME_IMAGES['s3-phone-1'].width}
          height={HOME_IMAGES['s3-phone-1'].height}
          alt={HOME_IMAGES['s3-phone-1'].alt}
        />
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:top-[50%] md:right-[calc(50%-250px)] md:block md:translate-x-[50%] md:translate-y-[-50%]`,
            `lg:right-[calc(50%-320px)] lg:max-w-[300px]`,
            `xl:right-[calc(50%-395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s3-phone-3'].url}
          width={HOME_IMAGES['s3-phone-3'].width}
          height={HOME_IMAGES['s3-phone-3'].height}
          alt={HOME_IMAGES['s3-phone-3'].alt}
        />
      </div>
    </Service3WrapperRelaxRenew>
  );
};

export default Service3RelaxRenew;
