import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import SoulscapeFooter from 'src/components/ui/soulscape-footer';

import { ChevronLeft, Loader2 } from 'lucide-react';

const TravelSafetyDetail: React.FC = () => {
  const router = useRouter();

  const { travelSafeId } = router.query;
  if (travelSafeId !== 'travel-safety') {
    return (
      <section className="flex w-screen items-center justify-center text-[#00C0C5]">
        <Loader2 className="h-12 w-12 animate-spin" />
      </section>
    );
  }

  return (
    <div>
      <div className="relative flex w-screen flex-col items-center py-[22px] font-['Urbanist'] transition-all duration-150 ease-in-out">
        <div className="mb-9 w-full max-w-[360px] px-5">
          <div className="flex items-center relative">
            <button className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#E1FEFF]">
              <ChevronLeft
                onClick={() => router.push('/soulscape/travel-safe')}
                className="-ml-[2px] text-[#02C1C5]"
              />
            </button>
            <h2 className="text-[#3A3A3B] text-base font-semibold absolute left-1/2 -translate-x-1/2">
              Travel Safe
            </h2>
          </div>
          <div className="mx-[12px]">
            <div className="mt-[22.31px]">
              <Image
                src={`${imageDomainUrl}/Soulscape/Icon/travel-safe-icon.svg`}
                alt="checklist-icon"
                width={27}
                height={26}
              />
            </div>
            <div className="mb-[26.78px] mt-[7px]">
              <h2 className="font-['Urbanist'] text-[20px] leading-[27px] text-[#343636] font-bold">
                Travel Safety
              </h2>
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

export default TravelSafetyDetail;
