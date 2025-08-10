import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import CommonSection from './CommonSection';
import RedirectArrowButton from './RedirectArrowButton';

const StressHormonesSocial = () => {
  const router = useRouter();

  return (
    <div>
      <div
        onClick={() => router.push('/mood-hub/stress-levels')}
        className="group h-[118px] w-full cursor-pointer rounded-[28px] bg-[#B38DB2] p-[12px_11px_0_13px] transition-all duration-150 hover:bg-[#ab80aa]"
      >
        <div className="flex items-center gap-[21px]">
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#FFFFFF] transition-transform duration-150 group-hover:scale-110">
            <Image
              src={`${imageDomainUrl}/MoodHub/Icon/main/stress-level.svg`}
              height={36}
              width={36}
              alt="icon"
            />
          </div>
          <div className="max-w-[180px]">
            <h2 className="mb-[2px] font-['Urbanist'] text-[20px] leading-[24px] font-semibold text-[#FFFFFF]">
              Stress levels
            </h2>
            <p className="font-['Urbanist'] text-[14px] font-semibold leading-[17px] text-[#FFFFFF]">
              Chronic or acute stress can negatively affect mood
            </p>
          </div>
        </div>
        <div className="flex justify-end pb-[11px]">
          <RedirectArrowButton
            imgUrl="/MoodHub/Icon/main/arrow-up-white.svg"
            bgColor="bg-[#ffffff80]"
          />
        </div>
      </div>
      <div className="mt-[15px] flex items-center justify-between gap-[14px]">
        <CommonSection
          slug="hormones"
          name="Hormones"
          icon={`${imageDomainUrl}/MoodHub/Icon/main/hormones.svg`}
          bgColor="bg-[#00C0C5]"
          hoverColor="hover:bg-[#35a3a7]"
        />
        <CommonSection
          slug="social-interactions"
          name="Social interactions"
          icon={`${imageDomainUrl}/MoodHub/Icon/main/social.svg`}
          bgColor="bg-[#D96D99]"
          hoverColor="hover:bg-[#c45b88]"
        />
      </div>
    </div>
  );
};

export default StressHormonesSocial;
