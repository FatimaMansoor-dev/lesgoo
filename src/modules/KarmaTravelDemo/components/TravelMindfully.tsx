import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from 'src/components/ui/carousel';
import { cn } from 'src/lib/utils';

import { TRAVEL_MINDFULLY_CONTENTS } from '../constants/travel-mindfully';

const dotsPerPage = 3;
const TravelMindfully: React.FC = () => {
  const [tipsApi, setTipsApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentDotSet, setCurrentDotSet] = useState<number>(0);

  useEffect(() => {
    if (!tipsApi) return;

    const onSelect = () => {
      const selectedIndex = tipsApi.selectedScrollSnap();
      setCurrentIndex(selectedIndex);
      setCurrentDotSet(Math.floor(selectedIndex / dotsPerPage));
    };

    tipsApi.on('select', onSelect);
    return () => {
      tipsApi.off('select', onSelect);
    };
  }, [tipsApi]);

  const handleClick = (index: number) => {
    tipsApi?.scrollTo(index);
  };

  const visibleDots = TRAVEL_MINDFULLY_CONTENTS.slice(
    currentDotSet * dotsPerPage,
    (currentDotSet + 1) * dotsPerPage
  );
  return (
    <>
      <div className="max-w-[375px] mb-[20px] w-full px-[18px]">
        <div className="mb-[31px]">
          <h1 className="font-semibold text-[22px] mb-[9px] text-[#303030] leading-[26.4px] font-['Urbanist']">
            Travel Mindfully
          </h1>
          <p className="text-sm text-[#707070] font-medium font-['Urbanist'] leading-[16.8px]">
            Simplify your travels for peace of mind.
          </p>
        </div>
        <Carousel
          opts={{ align: 'start' }}
          setApi={setTipsApi}
          className="relative w-full max-w-full overflow-hidden px-0.5"
        >
          <CarouselContent>
            {TRAVEL_MINDFULLY_CONTENTS.map((category, index) => (
              <CarouselItem key={index} className="basis-[100%]">
                <motion.div initial={false} transition={{ duration: 0.6 }}>
                  <div className="bg-[#fff] border-2 border-[#4F65CC] rounded-[17px] p-[21px_16px_19px_16px]">
                    <h2 className="text-[#3A3A3B] text-[20px] font-bold leading-6">
                      {category.title}
                    </h2>
                    <div className="pl-[6px] mt-[19px] flex flex-col gap-[11px]">
                      {category.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-center gap-[11px]">
                          <span className="w-[22px] h-[22px] bg-[#4F65CC] text-white rounded-full text-[11px] font-extrabold flex justify-center items-center">
                            {tipIndex + 1}
                          </span>
                          <p className="text-[#4D5D71] text-sm font-normal leading-[16px]">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-[18px] flex justify-center">
            <div className="relative mx-auto flex items-center justify-between pb-[22px]">
              <div className="flex items-center gap-1">
                {visibleDots.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(currentDotSet * dotsPerPage + index)}
                    className={cn(
                      'h-[8px] cursor-pointer rounded-full transition-all duration-150 ease-in-out',
                      currentIndex === currentDotSet * dotsPerPage + index
                        ? 'bg-[#A251AB] w-[35px]'
                        : 'bg-zinc-200 w-[13px]'
                    )}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default TravelMindfully;
