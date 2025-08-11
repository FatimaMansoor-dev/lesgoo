import Link from 'next/link';
import { HomeTitleProps } from '../types';

const HomeTitle = ({ text, link, carouselApi }: HomeTitleProps) => {
  const handlePrev = () => carouselApi?.scrollPrev();
  const handleNext = () => carouselApi?.scrollNext();

  return (
    <div className="flex justify-between items-center">
      {/* Left side: Title */}
      <h2 className="xl:text-[32px] lg:text-[28px] md:text-[24px] text-[20px] font-medium text-white">
        {text}
      </h2>

      {/* Right side: Buttons + See All */}
      <div className="flex items-center gap-[10px]">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="bg-[#0C2340] text-white xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px] rounded-full flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="xl:w-[20px] xl:h-[20px] lg:w-[18px] lg:h-[18px] md:w-[16px] md:h-[16px] w-[12px] h-[12px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="bg-[#0C2340] text-white xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px] rounded-full flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="xl:w-[20px] xl:h-[20px] lg:w-[18px] lg:h-[18px] md:w-[16px] md:h-[16px] w-[12px] h-[12px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* See All */}
        <Link href={`/${link}`}>
          <div className="flex items-center text-white font-medium xl:text-[21] lg:text-[19px] md:text-[15px] text-[12px] ml-2 cursor-pointer hover:underline">
            See All
            <span className="ml-1 text-lg">{'>'}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeTitle;
