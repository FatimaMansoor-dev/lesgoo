import { motion } from 'framer-motion';
import { REVIEWS_DATA } from 'modules/KarmaTravelDemo/constants/reviews';
import { useEffect, useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from 'src/components/ui/carousel';
import { cn } from 'src/lib/utils';

const dotsToShow = 5;

const Reviews = () => {
  const [reviewApi, setReviewApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (!reviewApi) return;

    const onSelect = () => {
      const selectedIndex = reviewApi.selectedScrollSnap();
      setCurrentIndex(selectedIndex);
    };

    reviewApi.on('select', onSelect);
    return () => {
      reviewApi.off('select', onSelect);
    };
  }, [reviewApi]);

  const handleClick = (index: number) => {
    reviewApi?.scrollTo(index);
  };

  const totalDots = REVIEWS_DATA.length;
  const halfDots = Math.floor(dotsToShow / 2);

  const start = Math.max(0, Math.min(currentIndex - halfDots, totalDots - dotsToShow));
  const end = Math.min(totalDots, start + dotsToShow);

  const visibleDots = Array.from({ length: end - start }, (_, i) => start + i);

  return (
    <div className="max-w-[400px] px-4 mb-[48px] w-full">
      <div className="border-b-[#E7E7E7] border-b px-[20px] pb-[15px]">
        <h2 className="text-[#303030] text-[22px] font-semibold mb-1 leading-[26.4px] font-['Urbanist]">
          What users are saying
        </h2>
        <p className="text-[#707070] text-sm leading-[16.8px] font-medium font-['Urbanist]">
          {REVIEWS_DATA.length} reviews
        </p>
      </div>
      <Carousel
        opts={{ align: 'start' }}
        setApi={setReviewApi}
        className="relative w-full max-w-full overflow-hidden px-0.5"
      >
        <CarouselContent>
          {REVIEWS_DATA.map((review, index) => (
            <CarouselItem key={index} className="basis-[100%]">
              <motion.div initial={false} transition={{ duration: 0.6 }}>
                <div className="px-[20px]">
                  <div className="flex items-center justify-between py-[17px]">
                    <div>
                      <p className="text-[14px] font-semibold leading-[16.8px] font-['Urbanist]">
                        {review.name}
                      </p>
                      <div className="flex gap-[3px] items-center mt-[7px]">
                        {[...Array(5)].map((_, i) => (
                          <Image
                            key={i}
                            src={`${imageDomainUrl}/YourBrandSample/Icon/${
                              i < review.rating ? 'fill-star' : 'star'
                            }.svg`}
                            width={13}
                            height={13}
                            alt="star"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-[#A7A7A7] text-[12px] font-semibold font-['Urbanist]">
                      {review.date}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[16px] font-semibold leading-[19.2px] font-['Urbanist]">
                      {review.title}
                    </h2>
                    <p className="text-[#716F6F] text-[16px] font-['Urbanist] leading-[25px] mt-[7px]">
                      {review.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-[18px] flex justify-center">
          <div className="relative mx-auto flex items-center justify-between pb-[22px]">
            {/* <PreviousButton className="min-h-[32px] min-w-[32px] bg-[#F07E58] text-white hover:bg-[#d26d4b]" /> */}
            <div className="flex items-center gap-1">
              {start > 0 && (
                <div
                  onClick={() => handleClick(currentIndex - 1)}
                  className="cursor-pointer w-[13px] h-[8px] bg-zinc-300 rounded-full"
                />
              )}
              {visibleDots.map(index => (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className={cn(
                    'h-[8px] cursor-pointer rounded-full transition-all duration-150 ease-in-out',
                    currentIndex === index ? 'bg-red-400 w-[35px]' : 'bg-zinc-200 w-[13px]'
                  )}
                ></div>
              ))}
              {end < totalDots && (
                <div
                  onClick={() => handleClick(currentIndex + 1)}
                  className="cursor-pointer w-[13px] h-[8px] bg-zinc-300 rounded-full"
                />
              )}
            </div>
            {/* <NextButton className="min-h-[32px] min-w-[32px] bg-[#F07E58] text-white hover:bg-[#d26d4b]" /> */}
          </div>
        </div>
      </Carousel>
      <button
        data-senja-collector-open="myrenewme"
        data-url="https://senja.io/p/myrenewme/r/HN1DJF"
        className="bg-[#F07E58] text-white max-w-[299px] justify-center font-semibold mx-auto w-full rounded-[5px] h-[51px] flex items-center gap-[7px]"
      >
        Leave us a review{' '}
        <Image
          src={`${imageDomainUrl}/YourBrandSample/Icon/top-arrow.svg`}
          width={13}
          height={13}
          alt="top-arrow"
        />
      </button>
    </div>
  );
};

export default Reviews;
