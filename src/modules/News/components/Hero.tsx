/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Image from 'next/image';

import ABCSvg from 'shared/assets/svg/n-abc.svg';
import CBSSvg from 'shared/assets/svg/n-cbs.svg';
import CNNSvg from 'shared/assets/svg/n-cnn.svg';
import FOXSvg from 'shared/assets/svg/n-fox.svg';
import NBCSvg from 'shared/assets/svg/n-nbc.svg';
import SKYSvg from 'shared/assets/svg/n-sky.svg';
import { imageDomainUrl } from 'shared/constants/Assets';

import { HeroWrapper } from './Hero.styled';
import Navbar from 'shared/components/Partials/Navbar';

const Hero: React.FC = () => {
  return (
    <HeroWrapper className="relative">
        <Navbar />
      <div className="w-full relative flex h-full flex-col items-center justify-center px-6 pt-36 mb-8 md:mb-40">

        <Image
          className="w-7 md:w-12 mb-4 md:mb-12"
          src={`${imageDomainUrl}/News/Icon/news-icon.svg`}
          width={600}
          height={600}
          alt="News Icon"
        />
        <h1 className="hero-text pb-3 md:pb-9 font-['Gilroy'] text-center text-3xl font-medium leading-10 text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
          News & Updates
        </h1>
        <p className="hero-text text-center font-['Gilroy'] text-base md:text-xl font-medium text-black-1 max-w-2xl">
          America's leading psychotherapist, healer, and a regularly featured national and
          international television personality, Dr. Lisa Palmer wants you to lead a more healthy and
          balanced life. <br />
          <br />
          Founder of RenewMe, Dr. Lisa Palmer is seen on networks:
        </p>
        <div className="grid grid-cols-3 grid-rows-2 items-center justify-items-center gap-8 pt-12 md:grid-cols-6 md:grid-rows-1">
          <div className="h-[27px] xl:h-[33px]">
            <CBSSvg className="h-full w-auto" />
          </div>
          <div className="h-[18px] xl:h-[24px]">
            <NBCSvg className="h-full w-auto" />
          </div>
          <div className="h-[20px] xl:h-[26px]">
            <FOXSvg className="h-full w-auto" />
          </div>
          <div className="h-[21px] xl:h-[27px]">
            <CNNSvg className="h-full w-auto" />
          </div>
          <div className="h-[31px] xl:h-[37px]">
            <SKYSvg className="h-full w-auto" />
          </div>
          <div className="h-[29px] xl:h-[35px]">
            <ABCSvg className="h-full w-auto" />
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
