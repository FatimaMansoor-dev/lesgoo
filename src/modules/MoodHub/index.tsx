import React, { useEffect } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import FemaleHormonalCycle from './components/FemaleHormonalCycle';
import SleepDietExercise from './components/SleepDietExercise';
import StressHormonesSocial from './components/StressHormonesSocial';
import WeatherToSubstance from './components/WeatherToSubstance';

const MoodHub: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (router.asPath.startsWith('/mood-hub')) {
        sessionStorage.setItem('comingFromCode', 'true');
      }
    };
  }, [router.asPath]);

  return (
    <div className="relative flex w-screen flex-col items-center transition-all duration-150 ease-in-out">
      <div className="mb-9 w-full max-w-[375px] px-5">
        <div
          onClick={() => router.push('/')}
          className="mb-[7px] mt-[29.02px] flex h-[27px] w-[89px] cursor-pointer items-center rounded-[24px] bg-[#F0F0F0] py-[3.38px]"
        >
          <div className="ml-[3.68px] flex h-[18.97px] w-[18.97px] items-center justify-center rounded-full bg-[#FFFFFF] text-center">
            <Image
              src={`${imageDomainUrl}/MoodHub/Icon/main/renewme-logo.svg`}
              alt="logo"
              height={13.86}
              width={13.86}
            />
          </div>
          <h4 className="ml-[5.38px] text-center font-['Urbanist'] text-[11px] font-medium text-[#000000]">
            RenewMe
          </h4>
        </div>
        <div>
          <p className="mb-[15px] w-full max-w-[315px] font-['Urbanist'] text-[14px] leading-[17px] text-[#4D5D71]">
            Here are some important factors that can influence your mood and overall well-being.
          </p>
        </div>
        <SleepDietExercise />
        <StressHormonesSocial />
        <WeatherToSubstance />
        <FemaleHormonalCycle />
      </div>
    </div>
  );
};

export default MoodHub;
