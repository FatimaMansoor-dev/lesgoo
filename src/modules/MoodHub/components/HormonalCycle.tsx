import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import { ChevronDown } from 'lucide-react';

import { HORMONAL_CYCLE_DETAILS } from '../constants/hormonalCycle';

const HormonalCycle: React.FC = () => {
  const router = useRouter();
  const PHASE_IDS: { [key: string]: string } = {
    'Menstrual Phase': 'menstrual',
    'Follicular Phase': 'follicular',
    'Ovulation Phase': 'ovulation',
    'Luteal Phase': 'luteal',
  };
  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="relative flex w-screen flex-col items-center transition-all duration-150 ease-in-out">
      <div className="pb-9 w-full max-w-[375px] bg-[#F9FBFC]">
        <div className="relative mt-[3.78px] flex items-center rounded-b-[28px] bg-white p-[10px_0_20px_20px] shadow-[0px_2px_20px_rgba(0,0,0,0.06)]">
          <button
            onClick={() => router.push('/mood-hub')}
            className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#F2F5FB]"
          >
            <ChevronDown className="mt-[1px] h-[24px] w-[24px] text-[#4D5D71]" />
          </button>
          <p className='text-[#3A3A3B] text-base font-semibold leading-[19px] font-["Urbanist"] absolute left-1/2 -translate-x-1/2'>Hormonal Cycles</p>
        </div>
        <div className="py-[35px]">
          <h2 className="text-center font-['Urbanist'] text-[20px] font-semibold text-[#4D5D71]">
            Know your monthly cycles
          </h2>
        </div>
        {HORMONAL_CYCLE_DETAILS.map((item, index) => (
          <div key={index} className="px-[14px] pb-[42px]">
            <div
              id={PHASE_IDS[item.title]}
              className={`z-1 relative w-full max-w-[337px] rounded-[28px] pt-[21px] before:absolute before:right-[-10px] before:top-[10px] before:z-[0] before:h-full before:w-full before:rounded-[28px] before:opacity-30 ${item.color} ${item.shadow}`}
            >
              <div className="relative z-[1] flex items-center gap-[18px] border-b-[2px] border-b-[rgba(255,255,255,0.1)] pb-[20.5px]">
                <div className="pl-[15.5px]">
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white">
                    <Image
                      src={`${imageDomainUrl}${item.img}`}
                      height={30.69}
                      width={30.69}
                      alt="icon"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="font-['Urbanist'] text-[16px] font-bold leading-[19px] text-[#FFFFFF]">
                    {item.title}
                  </h2>
                  <h2 className="font-['Urbanist'] text-[16px] font-bold leading-[19px] text-[#FFFFFF]">
                    {item.days}
                  </h2>
                </div>
              </div>
              <div className="relative z-[1] flex flex-col gap-[10px] p-[14.5px_19px_32px_21px]">
                {item.description.map((item, index) => (
                  <div key={index}>
                    <h2 className="pb-[8px] font-['Urbanist'] text-[15px] font-bold text-[#FFFFFF] leading-[18px]">
                      {item.question}
                    </h2>
                    <p className="font-['Urbanist'] text-[14px] font-medium leading-[20px] text-[#ffffffb2]">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="mt-[8px] p-[0_19px_0_20px]">
          <div>
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#fe242411]">
              <Image
                src={`${imageDomainUrl}/MoodHub/Icon/subpage/low.svg`}
                height={18}
                width={33}
                alt="icon"
              />
            </div>
            <h2 className="mt-[5px] text-[16px] font-semibold font-['Urbanist'] leading-[20px]">Low mood</h2>
            <p className="mt-[5px] font-['Urbanist'] text-[14px] text-[#4D5D71] font-normal">
              Often experienced during the{' '}
              <Link
                href="#menstrual"
                onClick={e => handleSmoothScroll(e, '#menstrual')}
                className="text-[#F07E59] underline font-medium"
              >
                Menstrual Phase
              </Link>{' '}
              (due to low hormone levels) and late{' '}
              <Link
                href="#luteal"
                onClick={e => handleSmoothScroll(e, '#luteal')}
                className="text-[#F07E59] underline font-medium"
              >
                Luteal Phase
              </Link>{' '}
              (just before the next period, due to the drop in estrogen and progesterone).
            </p>
          </div>
          <div className="mt-[21px]">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#9ee26d11]">
              <Image
                src={`${imageDomainUrl}/MoodHub/Icon/subpage/high.svg`}
                height={18}
                width={33}
                alt="icon"
              />
            </div>
            <h2 className="mt-[5px] text-[16px] font-semibold font-['Urbanist'] leading-[20px]">High Mood</h2>
            <p className="mt-[5px] font-['Urbanist'] text-[14px] text-[#4D5D71] font-normal">
              Many women feel their best during the{' '}
              <Link
                href="#follicular"
                onClick={e => handleSmoothScroll(e, '#follicular')}
                className="text-[#F07E59] underline font-medium"
              >
                Follicular Phase
              </Link>{' '}
              and{' '}
              <Link
                href="#ovulation"
                onClick={e => handleSmoothScroll(e, '#ovulation')}
                className="text-[#F07E59] underline font-medium"
              >
                Ovulation
              </Link>{' '}
              , thanks to the rise in estrogen, which can boost mood, energy, and even creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HormonalCycle;