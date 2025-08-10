import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Image from 'next/image';

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from 'src/components/ui/carousel';
import { cn } from 'src/lib/utils';

import { SLIDER_DATA } from '../constants/slider-data';

const dotsPerPage = 2;

const Slider = () => {
  const [sliderApi, setSliderApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentDotSet, setCurrentDotSet] = useState<number>(0);

  useEffect(() => {
    if (!sliderApi) return;

    const onSelect = () => {
      const selectedIndex = sliderApi.selectedScrollSnap();
      setCurrentIndex(selectedIndex);
      setCurrentDotSet(Math.floor(selectedIndex / dotsPerPage));
    };

    sliderApi.on('select', onSelect);
    return () => {
      sliderApi.off('select', onSelect);
    };
  }, [sliderApi]);

  const handleClick = (index: number) => {
    sliderApi?.scrollTo(index);
  };

  const visibleDots = SLIDER_DATA.slice(
    currentDotSet * dotsPerPage,
    (currentDotSet + 1) * dotsPerPage
  );
  return (
    <div className="">
      <Carousel
        opts={{ align: 'start' }}
        setApi={setSliderApi}
        className="relative w-full max-w-full overflow-hidden px-0.5"
      >
        <CarouselContent>
          {SLIDER_DATA.map((review, index) => (
            <CarouselItem key={index} className="basis-[100%]">
              <motion.div initial={false} transition={{ duration: 0.6 }} className='flex flex-col items-center gap-6'>
                <Image
                  src={review.img}
                  width={240}
                  height={214}
                  alt="slide"
                />
                <p className="text-[22px] font-semibold font-['Urbanist'] leading-[26px] text-center max-w-[230px]">
                  {review.title}
                </p>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 flex justify-center">
          <div className="relative mx-auto flex items-center justify-between pb-[22px]">
            <div className="flex items-center gap-1">
              {visibleDots.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(currentDotSet * dotsPerPage + index)}
                  className={cn(
                    'h-[8px] cursor-pointer rounded-full transition-all duration-150 ease-in-out',
                    currentIndex === currentDotSet * dotsPerPage + index
                      ? 'bg-[#A850B2] w-[35px]'
                      : 'bg-zinc-200 w-[13px]'
                  )}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
