import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import CommonSection from './CommonSection';
import RedirectArrowButton from './RedirectArrowButton';

const SleepDietExercise = () => {
  const router = useRouter();

  return (
    <div className="mb-[15px] flex justify-between gap-[15px]">
      <div
        onClick={() => router.push('/mood-hub/sleep')}
        className="group flex h-[295px] w-full cursor-pointer flex-col justify-between rounded-[28px] bg-[#9AC17E] hover:bg-[#89b46b] sm:max-w-[160px] transition-all duration-150"
      >
        <div className="flex justify-between px-[13px] pt-[12px]">
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#FFFFFF] transition-transform duration-150 group-hover:scale-110">
            <Image
              src={`${imageDomainUrl}/MoodHub/Icon/main/sleep.svg`}
              alt="icon"
              height={36}
              width={36}
            />
          </div>
          <RedirectArrowButton
            imgUrl="/MoodHub/Icon/main/arrow-up-white.svg"
            bgColor="bg-[#ffffff80]"
          />
        </div>
        <div className="px-[20px]">
          <h2 className="mb-[9px] font-['Urbanist'] text-[20px] font-semibold leading-[24px] text-[#FFFFFF]">
            Sleep
          </h2>
          <p className="pb-[28px] font-['Urbanist'] text-[14px] w-full max-w-[121px] font-semibold leading-[17px] text-[#FFFFFF]">
            Quality and quantity of sleep significantly impact mood regulation
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between sm:w-auto">
        <CommonSection
          slug="diet"
          name="Diet"
          icon={`${imageDomainUrl}/MoodHub/Icon/main/diet.svg`}
          bgColor="bg-[#F07E59]"
          hoverColor="hover:bg-[#df714c]"
        />
        <CommonSection
          slug="exercise"
          name="Exercise"
          icon={`${imageDomainUrl}/MoodHub/Icon/main/exercise.svg`}
          bgColor="bg-[#539ED9]"
          hoverColor="hover:bg-[#4b90c4]"
        />
      </div>
    </div>
  );
};

export default SleepDietExercise;
