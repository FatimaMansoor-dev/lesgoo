import React, { useEffect } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { Search } from 'lucide-react';

import HelpHubGeneralDetails from './components/GeneralDetails';
import HelpHubStatiticsDetails from './components/StatiticsDetails';

const HelpHub: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (router.asPath.startsWith('/help-hub')) {
        sessionStorage.setItem('comingFromCode', 'true');
      }
    };
  }, [router.asPath]);

  return (
    <div className="relative flex w-screen flex-col items-center transition-all duration-150 ease-in-out">
      <div className="bg-[#F9FBFC]">
        <div className="mb-9 w-full max-w-[375px]">
          {/* <div
            onClick={() => router.push('/')}
            className="relative flex cursor-pointer items-center rounded-b-[20px] bg-white pb-[20px] pl-[20px] pt-[10px] shadow-md"
          >
            <button className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#F2F5FB]">
              <ChevronLeft className="-ml-[2px] text-[#4D5D71]" />
            </button>
            <h2 className="absolute left-0 right-0 text-center font-['Urbanist'] text-[16px] text-[#3A3A3B] font-medium">
              Help Hub
            </h2>
          </div> */}
          <div className="mx-[20px]">
            <div className="mb-[24px] mt-[20px]">
              <div className="mb-[24px] mt-[20px]">
                <div className="flex max-w-[335px] items-center gap-[18px] rounded-[6px] border-[1px] border-[#D9D9D9] bg-[#FFFFFF] p-[11px_10px_10px_19px]">
                  <Search className="h-[26px] w-[26px] text-[#D9D9D9]" />
                  <input
                    type="text"
                    placeholder="search help lines"
                    className="w-full border-none bg-transparent font-['Urbanist'] text-[12px] text-black placeholder-[#D9D9D9] outline-none"
                  />
                </div>
              </div>
            </div>
            <h2 className="mb-[13px] font-['Urbanist'] text-[14px] text-[#4D5D71] font-medium">
              General
            </h2>

            <HelpHubGeneralDetails />
          </div>
          <div className="mx-[20px]">
            <div className="mb-[14px] mt-[30px] flex items-center justify-between">
              <h2 className="font-['Urbanist'] text-[14px] font-medium text-[#4D5D71]">
                Statistics
              </h2>
              <div className="group relative">
                <div className="relative flex h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-full bg-[#EBEBEB]">
                  <Image src={'/circle-help.svg'} height={13.75} width={13.75} alt="icon" />
                </div>
                <div className="relative">
                  <div className="bg-tooltip absolute right-[-14px] top-[2px] hidden h-[155px] w-[270px] group-hover:block">
                    <p className="absolute left-[18px] top-[31px] z-[1] max-w-[230px] rounded-[3px] font-['Urbanist'] text-[10px] text-[#4D5D71]">
                      Here are the most recent statistics on mental health conditions in the United
                      States. The data is primarily from organizations such as the National
                      Institute of Mental Health (NIMH), Substance Abuse and Mental Health Services
                      Administration (SAMHSA), and the Centers for Disease Control and Prevention
                      (CDC).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <HelpHubStatiticsDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpHub;
