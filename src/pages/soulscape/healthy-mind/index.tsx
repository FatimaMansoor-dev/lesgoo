import React, { useEffect } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import SoulscapeFooter from 'src/components/ui/soulscape-footer';

import { ChevronLeft } from 'lucide-react';

const HealthyMind: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (router.asPath.startsWith('/healthy-mind')) {
        sessionStorage.setItem('comingFromCode', 'true');
      }
    };
  }, [router.asPath]);

  return (
    <div className="relative flex w-screen flex-col items-center py-[25px] font-['Gilroy'] transition-all duration-150 ease-in-out">
      <div className="w-full max-w-[375px] px-[33px] bg-white">
        <div className="flex items-center justify-between relative border-b border-[#E5E9F2] pb-4 ">
          <button
            onClick={() => router.back()}
            className="absolute left-0 p-2 rounded-full bg-[#F2F5FB] hover:bg-[#E5E9F2] transition-all duration-150"
          >
            <ChevronLeft className="text-[#4D5D71]" size={20} />
          </button>
          <h1 className="font-['Urbanist'] text-[16px] font-semibold text-[#303030] w-full text-center">
            Stay healthy
          </h1>
        </div>
      </div>
      <div className="mb-9 w-full max-w-[360px] px-[33px]">
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
        <div className="mx-auto">
          <div className="mb-[27.78px] mt-[17.73px]">
            <h2 className="font-['Urbanist'] text-[20px] font-bold text-[#343636] leading-[24px]">
              Achieve Inner Peace
            </h2>
            <p className="font-['Urbanist'] text-[14px] font-medium text-[#434343] mt-[4.22px] leading-[16.8px]">
              Traveling is better when you align with an attitude of gratitude and enjoy peace of
              mind.
            </p>
          </div>
          <section className="mx-auto h-[578px]">
            <iframe
              src={'https://www.therenewcenter.com/embed/blogs'}
              title="Achieve Inner Peace"
              className="h-full w-full rounded-[14px] border-[1px] border-[#02C1C5]"
              allowFullScreen
            />
          </section>
        </div>
        <div className="pt-[8px]">
          <SoulscapeFooter
            title="Combine the joy of new horizons with the calm of inner peace"
            classes="max-w-[236px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HealthyMind;
