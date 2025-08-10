import React, { useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import SoulscapeFooter from 'src/components/ui/soulscape-footer';

const TravelSafe: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (router.asPath.startsWith('/travel-safe')) {
        sessionStorage.setItem('comingFromCode', 'true');
      }
    };
  }, [router.asPath]);

  return (
    <div>
      <div className="relative flex w-screen flex-col items-center py-[22px] font-['Urbanist'] transition-all duration-150 ease-in-out">
        <div className=" w-full max-w-[360px] px-8 mb-4  bg-white">
          {/* <div className="flex items-center justify-between relative mb-4 border-b border-[#E5E9F2] pb-4 shadow-sm">
            <button
              onClick={() => router.back()}
              className="absolute left-0 p-2 rounded-full bg-[#F2F5FB] hover:bg-[#E5E9F2] transition-all duration-150"
            >
              <ChevronLeft className="text-[#4D5D71]" size={20} />
            </button>
            <h1 className="font-['Urbanist'] text-[16px] font-semibold text-[#303030] w-full text-center">
              Travel Safe
            </h1>
          </div> */}
          <div className="flex justify-start">
            <div className="flex items-center gap-2 bg-[#F0F0F0] rounded-full px-4 py-2">
              <Image
                src={`${imageDomainUrl}/Code/renewme-icon.png`}
                alt="RenewMe Icon"
                width={18}
                height={18}
              />
              <span className="font-['Urbanist'] text-[12px] text-[#000000]">RenewMe</span>
            </div>
          </div>
        </div>

        <div className="mb-9 w-full max-w-[360px] px-5">
          <div className="mx-[12px]">
            <div className="mb-[26.78px] mt-[7px] mx-[5px]">
              <p className="mt-[4.22px] max-w-[250px] font-['Urbanist'] text-sm leading-[17px] text-[#434343]">
                Before you travel be sure to keep in mind security and safety considerations.
              </p>
            </div>
            <Link href={'https://www.cdc.gov/'} target="_blank" className="mb-[25.53px] block">
              <Image
                src={`${imageDomainUrl}/Soulscape/svg/travel-safety-cover.svg`}
                alt="travel-safety-cover"
                width={294}
                height={578}
              />
            </Link>
          </div>
          <SoulscapeFooter
            title="The best travelers balance spontaneity with preparation."
            classes="max-w-[245px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TravelSafe;
