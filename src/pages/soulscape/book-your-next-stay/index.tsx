import React, { useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import SoulscapeFooter from 'src/components/ui/soulscape-footer';

const BookYourNextStay: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (router.asPath.startsWith('/book-your-next-stay')) {
        sessionStorage.setItem('comingFromCode', 'true');
      }
    };
  }, [router.asPath]);

  return (
    <div className="relative flex w-screen flex-col items-center py-4 font-['Gilroy'] transition-all duration-150 ease-in-out">
      {/* <div className="w-full max-w-[375px] px-2  bg-white">
        <div className="flex items-center justify-between relative border-b border-[#E5E9F2] pb-4 ">
          <button
            onClick={() => router.back()}
            className="absolute left-0 p-2 rounded-full bg-[#F2F5FB] hover:bg-[#E5E9F2] transition-all duration-150"
          >
            <ChevronLeft className="text-[#4D5D71]" size={20} />
          </button>
          <h1 className="font-['Urbanist'] text-[16px] font-semibold text-[#303030] w-full text-center">
            Book a trip
          </h1>
        </div>
      </div> */}
      <div className="mb-9  w-full max-w-[360px] px-[19px] bg-[#F7F9FA] ">
        <div className="flex justify-start py-4">
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

        <div className="mb-6">
          <h2 className="text-[20px] font-semibold mb-1">Book Your Next Stay!</h2>
          <p className="text-gray-600">Find a reserveration</p>
        </div>

        <Link
          href={'https://www.expedia.com'}
          target="_blank"
          className="mx-[2px] mb-[24.44px] block"
        >
          <Image
            src={`${imageDomainUrl}/Soulscape/svg/book-stay-cover.svg`}
            alt="travel-safety-cover"
            width={317}
            height={579}
          />
        </Link>
        <SoulscapeFooter
          title="A balanced adventurer finds harmony in exploring new horizons while grounding themselves in mindful pauses."
          pTagRequired={true}
        />
      </div>
    </div>
  );
};

export default BookYourNextStay;
