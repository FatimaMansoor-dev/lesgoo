import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import SoulscapeFooter from 'src/components/ui/soulscape-footer';
import SoulscapeWelcomeBanner from 'src/components/ui/soulscape-welcome-banner';

import { Loader2 } from 'lucide-react';

const TravelSafetyDetail: React.FC = () => {
  const router = useRouter();

  const { healthyMindId } = router.query;

  if (healthyMindId !== 'achieve-inner-peace') {
    return (
      <section className="flex w-screen items-center justify-center text-[#00C0C5]">
        <Loader2 className="h-12 w-12 animate-spin" />
      </section>
    );
  }

  return (
    <div>
      <div className="relative flex w-screen flex-col items-center py-[25px] font-['Gilroy'] transition-all duration-150 ease-in-out">
        <div className="mb-9 w-full max-w-[360px] px-[33px]">
          <SoulscapeWelcomeBanner header="Stay Healthy" />
          <div className="mx-auto">
            <div className="mt-[24px]">
              <Image
                src={`${imageDomainUrl}/Soulscape/Icon/healthy-mind-icon.svg`}
                alt="checklist-icon"
                width={27}
                height={26}
              />
            </div>
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
    </div>
  );
};

export default TravelSafetyDetail;
