import React, { useEffect } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import { ELEMENTS_DATA } from './constants/element';

const Elements: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (router.asPath.startsWith('/elements')) {
        sessionStorage.setItem('comingFromCode', 'true');
      }
    };
  }, [router.asPath]);

  const handleCardClick = (element: string) => {
    router.push(`/elements/${element}`);
  };

  return (
    <div className="relative flex w-screen flex-col items-center font-['Gilroy'] transition-all duration-150 ease-in-out">
      <div className="bg-[#F9FBFC] pb-4 h-screen">
        {/* Header Section
        <div className="w-full bg-white shadow-sm px-4 py-6">
          <div className="flex items-center relative mb-2">
            <button
              onClick={() => router.push('/')}
              className="flex h-[32px] w-[32px] items-center justify-center bg-[#F2F5FB] rounded-full absolute left-0"
            >
              <ChevronLeft className="h-6 w-6 text-[#1C1B1F]" />
            </button>
            <span className="text-[16px] font-semibold text-[#1C1B1F] flex-1 text-center">
              Coping
            </span>
          </div>
        </div> */}

        {/* RenewMe Logo */}

        <div className="flex items-center mt-4 pl-4">
          <div className="inline-flex items-center gap-2 bg-[#F0F0F0] rounded-full px-3 py-1.5">
            <div className="w-4 h-4 rounded-full bg-[#FFFFFF] p-[1px] flex items-center justify-center">
              <Image
                src={`${imageDomainUrl}/MoodHub/Icon/main/renewme-logo.svg`}
                width={20}
                height={20}
                alt="RenewMe Icon"
              />
            </div>
            <span className="text-[14px] font-medium text-[#4D5D71]">RenewMe</span>
          </div>
        </div>

        <div className="w-full max-w-[375px] px-4 mt-6">
          <div className="grid grid-cols-2 gap-x-[28.83px] gap-y-[44px]">
            {ELEMENTS_DATA.map((item, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(item.element)}
                className="group cursor-pointer rounded-[21px] bg-white p-[6.85px] shadow-[0px_4px_4px_rgba(0,0,0,0.12)] transition-all duration-150"
              >
                <div
                  className={`rounded-[21px] ${item.bgcolor} hover:bg-[${item.hoverColor}] transition-transform duration-150`}
                >
                  <div className="flex justify-center pb-[25px] pt-[53px] transition-transform duration-150 group-hover:scale-110">
                    <Image src={`${item.img1}`} width={58} height={58} alt={`${item.element}`} />
                  </div>
                  <div className="relative">
                    <Image
                      src={`${item.img2}`}
                      width={142}
                      height={50}
                      alt={`${item.element}-shape icon`}
                    />
                    <p
                      className={`absolute left-[50%] translate-x-[-50%] text-center font-['Urbanist'] text-[16px] font-semibold leading-[20px] ${item.textcolor} transition-transform duration-150 hover:text-[${item.hoverColor}] top-[30px]`}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elements;
