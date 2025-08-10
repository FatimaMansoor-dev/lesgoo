import React from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { REMINDERS_CONTENTS } from './constants/reminders';

const WellnessHub: React.FC = () => {
  return (
    <div className="relative flex w-screen flex-col items-center py-[30px] font-['Gilroy'] transition-all duration-150 ease-in-out">
      <div className="mb-9 w-full max-w-[375px] px-5">
        <div className="mb-6">
          <div className="flex items-center gap-2 bg-[#F0F0F0] w-fit px-3 py-2 rounded-full">
            <div className="w-5 h-5 p-[2px] bg-white rounded-full">
              <Image
                src={`${imageDomainUrl}/MoodHub/Icon/main/renewme-logo.svg`}
                width={18}
                height={18}
                alt="RenewMe Icon"
              />
            </div>
            <span className="text-gray-700 text-[11px]">RenewMe</span>
          </div>
        </div>
        {/* <div className="mb-[29px] w-full">
          <section className="flex w-full items-center justify-between gap-2">
            <div>
              <h1 className="font-['Urbanist'] text-[22px] font-semibold text-[#303030]">
                Mindful Moments
              </h1>
            </div>
          </section>
        </div> */}
        <div className="mb-[41px] flex items-center justify-between">
          <p className="max-w-[206px] text-[14px] font-medium text-[#707070] font-['Urbanist'] leading-[16.8px]">
            Small, consistent actions lead to a healthier, happier you.
          </p>
          {/* <div className="flex aspect-square w-[40px] h-[40px] items-center justify-center rounded-full bg-zinc-400/20">
            <Image
              className="w-[21px]"
              src={`${imageDomainUrl}/YourBrandSample/Icon/bulb.svg`}
              width={21.33}
              height={21.33}
              alt="Bulb Icon"
            />
          </div> */}
        </div>
        <div className="flex flex-col gap-[27px] ">
          {REMINDERS_CONTENTS.map((item, index) => (
            <div
              key={index}
              className="flex h-[107px] relative items-start py-[13.5px] justify-between rounded-[10px] bg-white shadow-[0px_4px_10.2px_rgba(0,0,0,0.09)]"
            >
              <div className="pl-[23px]">
                <h2
                  className={`font-['Urbanist'] text-[20px] font-semibold leading-[24px] ${item.color}`}
                >
                  {item.title}
                </h2>
                <p
                  className={`mt-[8px] ${item.maxWidth} font-['Urbanist'] text-[15px] font-normal text-[#858585] leading-[18px]`}
                >
                  {item.description}
                </p>
              </div>
              <div className={`${item.class} absolute`}>
                <Image src={item.img} width={item.width} height={item.height} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellnessHub;
