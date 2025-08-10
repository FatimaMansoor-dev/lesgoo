import Link from 'next/link';

import { HomeTitleProps } from '../types';

const HomeTitle = ({ text, link, swiperRef }: HomeTitleProps) => {
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-[10px] items-center">
        <h2 className="xl:text-[32px] lg:text-[28px] md:text-[24px] text-[20px] font-medium text-white">
          {text}
        </h2>
        <Link href={`/${link}`}>
          <p className="text-[#00000080] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[10px]">
            See All
          </p>
        </Link>
      </div>
      <div className="flex gap-[10px]">
        <button
          onClick={handlePrev}
          className="xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px] rounded-full border border-[#00000080] flex justify-center items-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="xl:w-[24px] xl:h-[24px] lg:w-[20px] lg:h-[20px] md:w-[16px] md:h-[16px] w-[12px] h-[12px]"
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="#00000080"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px] rounded-full border border-[#00000080] flex justify-center items-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="xl:w-[24px] xl:h-[24px] lg:w-[20px] lg:h-[20px] md:w-[16px] md:h-[16px] w-[12px] h-[12px]"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="#00000080"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomeTitle;
