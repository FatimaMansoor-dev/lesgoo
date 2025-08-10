import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import RedirectArrowButton from './RedirectArrowButton';

interface CommonSectionProps {
  slug: string;
  name: string;
  icon: string;
  bgColor: string;
  hoverColor: string;
}

const CommonSection: React.FC<CommonSectionProps> = ({ slug, name, icon, bgColor, hoverColor }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/mood-hub/${slug}`)}
      className={`group flex h-[140px] w-full max-w-[100%] flex-col justify-between rounded-[28px] sm:max-w-[161px] ${bgColor} ${hoverColor} cursor-pointer transition-all duration-150`}
    >
      <div className="px-[16px] pt-[12px]">
        <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#FFFFFF] transition-transform duration-150 group-hover:scale-110">
          <Image src={icon} alt="icon" height={36} width={36} />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between pb-[10px] pl-[16px] pr-[11px]">
          <h2 className="flex h-[44px] items-center font-['Urbanist'] text-[14px] font-semibold leading-[22px] text-[#FFFFFF] sm:w-[101px] sm:text-[20px]">
            {name}
          </h2>
          <RedirectArrowButton
            imgUrl="/MoodHub/Icon/main/arrow-up-white.svg"
            bgColor="bg-[#ffffff80]"
          />
        </div>
      </div>
    </div>
  );
};

export default CommonSection;
