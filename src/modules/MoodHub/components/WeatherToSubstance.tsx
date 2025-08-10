import { useRouter } from 'next/router';

import { MAIN_PAGE_CONTENTS } from '../constants/mainPageData';
import RedirectArrowButton from './RedirectArrowButton';

const WeatherToSubstance = () => {
  const router = useRouter();

  return (
    <>
      {MAIN_PAGE_CONTENTS.map((item, index) => (
        <div
          key={index}
          onClick={() => router.push(`/mood-hub/${item.slug}`)}
          className="mt-[15px] w-full max-w-[336px] cursor-pointer rounded-[28px] border-[1px] border-[000000] bg-[#FFFFFF] pb-[27.54px]"
        >
          <div className="flex items-center justify-between border-b-[1px] border-b-[000000] px-[20px] pb-[8.98px] pt-[15px]">
            <h2 className="font-['Urbanist'] text-[20px] font-semibold leading-[17px]">
              {item.title}
            </h2>
            <RedirectArrowButton
              imgUrl="/MoodHub/Icon/main/arrow-up-dark.svg"
              bgColor="bg-[#EEEEEE]"
            />
          </div>
          <p className="pl-[22px] pt-[6.93px] font-['Urbanist'] text-[14px] w-full max-w-[295px] leading-[22px] text-[#4D5D71]">
            {item.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default WeatherToSubstance;
