import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import { ChevronRight } from 'lucide-react';

import { REFLECTIONS_CONTENTS } from './constants/reflections';

const JournalHub: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (router.asPath.startsWith('/journal-hub')) {
        sessionStorage.setItem('comingFromCode', 'true');
      }
    };
  }, [router.asPath]);

  // const handleBack = () => {
  //   router.back();
  // };

  const toggleAccordion = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="relative flex w-screen flex-col items-center py-[30px] font-['Gilroy'] transition-all duration-150 ease-in-out">
      <div className="mb-9 w-full max-w-[375px] px-[20px]">
        {/* Header Section */}
        <div className="mb-6">
          {/* <div className="flex items-center justify-between relative mb-4 border-b border-[#E5E9F2] pb-4">
            <button 
              onClick={handleBack}
              className="absolute left-0 p-2 rounded-full bg-[#F2F5FB] hover:bg-[#E5E9F2] transition-all duration-150"
            >
              <ChevronLeft className="text-[#4D5D71]" size={20} />
            </button>
            <h1 className="font-['Gilroy'] text-[18px] font-semibold text-[#303030] w-full text-center">
              Daily Reflections
            </h1>
          </div> */}
          <div className="flex justify-start mb-6">
            <div className="flex items-center gap-2 bg-[#F0F0F0] rounded-full px-4 py-2">
              <Image
                src={`${imageDomainUrl}/Code/renewme-icon.png`}
                alt="RenewMe Icon"
                className="h-8 w-8"
                width={18}
                height={18}
              />
              <span className="font-['Gilroy'] text-[12px] text-[#000000]">RenewMe</span>
            </div>
          </div>
        </div>

        <div className="mb-[23px] flex items-center justify-between">
          <p className="max-w-[238px] w-full font-['Urbanist'] text-[15px] font-medium text-[#707070] leading-[100%]">
            Empower your mind and enjoy daily prompts for self-growth.
          </p>
          {/* <div className="flex aspect-square h-[40px] items-center justify-center rounded-full bg-zinc-400/20">
            <Image
              className="w-[21px]"
              src={`${imageDomainUrl}/YourBrandSample/Icon/bulb.svg`}
              width={21.38}
              height={21.38}
              alt="Bulb Icon"
            />
          </div> */}
        </div>
        {REFLECTIONS_CONTENTS.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => toggleAccordion(index)}
              className={`${
                openCategory === index
                  ? 'h-[60px] rounded-[10px_10px_0_0]'
                  : 'h-[87px] rounded-[10px]'
              } flex cursor-pointer items-center justify-between ${item.color} group px-[14px] ${
                item.hoverColor
              } transition-all duration-150 ease-in-out`}
            >
              <p className="font-['Urbanist'] text-[20px] font-semibold leading-[normal] text-white">
                {item.category}
              </p>
              <div className="flex items-center gap-[27px]">
                <Image
                  src={`${imageDomainUrl}/JournalHub/Icon/${item.category.toLowerCase()}.svg`}
                  alt={item.category}
                  width={100}
                  height={100}
                  className={`${
                    openCategory === index ? 'h-[76px] w-[76px]' : 'h-[90px] w-[90px]'
                  } transition-transform duration-150 group-hover:scale-110`}
                />
                <button
                  className={`${
                    openCategory === index ? '-rotate-90' : ''
                  } flex min-h-[23px] min-w-[23px] items-center justify-center rounded-full bg-[#ffffff80]`}
                >
                  <ChevronRight size={16} className="text-white stroke-[3px] ml-[2px]" />
                </button>
              </div>
            </div>

            <div
              className={`${
                openCategory === index
                  ? 'mb-[23px] border-t-0 py-[14px]'
                  : '!border-transparent h-[10px]'
              } rounded-[0_0_10px_10px] border-[2px] ${
                item.borderColor
              } transition-all duration-300 ease-in-out`}
            >
              <div
                className={`${
                  openCategory === index ? 'max-h-[500px]' : 'my-[5px] max-h-0'
                }  overflow-hidden transition-[max-height] duration-300 ease-in-out`}
              >
                {item.questions.map((question, qIndex) => (
                  <div key={qIndex} className="mb-2.5 flex items-center gap-[10px] px-[14px]">
                    <span
                      className={`block min-h-[6px] min-w-[6px] rounded-full ${item.color}`}
                    ></span>
                    <p
                      className={`font-['Urbanist'] text-[14px] font-medium text-[#7B7C7D] leading-[100%]`}
                    >
                      &quot;{question}&quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalHub;
