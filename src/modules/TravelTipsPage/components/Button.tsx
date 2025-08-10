import React from 'react';

import { useRouter } from 'next/router';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { TravelTip } from '../constant/travel-tips';

interface ButtonProps {
  currentIndex: number;
  data: TravelTip[];
}

const Button: React.FC<ButtonProps> = ({ currentIndex, data }) => {
  const router = useRouter();
  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex === data.length - 1;

  const handlePrev = () => {
    if (!isFirstPage) {
      const prevIndex = currentIndex - 1;
      router.push(`/soulscape/travel-tips/${data[prevIndex].slug}`);
    }
  };

  const handleNext = () => {
    if (!isLastPage) {
      const nextIndex = currentIndex + 1;
      router.push(`/soulscape/travel-tips/${data[nextIndex].slug}`);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center mt-[20px] mb-[15px] px-[24px]">
        <button
          onClick={() => handlePrev()}
          className={`${
            isFirstPage ? 'opacity-20 cursor-not-allowed' : ''
          } flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#00000040]`}
          disabled={isFirstPage}
        >
          <ChevronLeft size={16} className="-ml-[2px] text-[#FFFFFF]" />
        </button>
        <button
          onClick={() => handleNext()}
          className={`${
            isLastPage ? 'opacity-20 cursor-not-allowed' : ''
          } flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#00000040]`}
          disabled={isLastPage}
        >
          <ChevronRight size={16} className="text-[#FFFFFF]" />
        </button>
      </div>
    </>
  );
};

export default Button;
