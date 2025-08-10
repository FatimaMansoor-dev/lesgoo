import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  NextButton,
  PreviousButton,
} from 'src/components/ui/carousel';
import { cn } from 'src/lib/utils';

import { ChevronLeft } from 'lucide-react';

import { MoodHubDetailsItem } from '../constants/moodHubDetails';

interface Props {
  moodHubData: MoodHubDetailsItem;
}

const MoodHubIdPage: React.FC<Props> = ({ moodHubData }) => {
  const [moodHubApi, setMoodHubApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentDotSet, setCurrentDotSet] = useState<number>(0);
  const dotsPerPage = 4;

  useEffect(() => {
    if (!moodHubApi) {
      return;
    }

    const onSelect = () => {
      const selectedIndex = moodHubApi.selectedScrollSnap();
      setCurrentIndex(selectedIndex);
      const newDotSet = Math.floor(selectedIndex / dotsPerPage);
      setCurrentDotSet(newDotSet);
    };

    moodHubApi.on('select', onSelect);

    return () => {
      moodHubApi.off('select', onSelect);
    };
  }, [moodHubApi, moodHubData?.cardItem?.length]);

  const handleClick = (index: number) => {
    moodHubApi?.scrollTo(index);
  };

  const visibleDots = moodHubData.cardItem?.slice(
    currentDotSet * dotsPerPage,
    (currentDotSet + 1) * dotsPerPage
  );

  const router = useRouter();

  return (
    <div className="relative flex w-screen flex-col items-center transition-all duration-150 ease-in-out">
      <div className="min-h-screen w-full max-w-[375px] bg-[#F9FBFC]">
        <div className="w-full max-w-[375px] pt-4 bg-white">
          <div className="flex items-center justify-between relative border-b border-[#E5E9F2] pb-4 ">
            <button
              onClick={() => router.back()}
              className="absolute left-0 p-2 rounded-full bg-[#F2F5FB] hover:bg-[#E5E9F2] transition-all duration-150"
            >
              <ChevronLeft className="text-[#4D5D71]" size={20} />
            </button>
            <h1 className="font-['Urbanist'] text-[16px] font-semibold text-[#303030] w-full text-center">
              Mood
            </h1>
          </div>
        </div>
        <div>
          <p className="mt-[40px] mx-[20px] pb-[26px] text-center font-['Urbanist'] text-[15px] leading-[24px] text-[#4D5D71] max-w-[322px] mx-auto">
            {moodHubData.description}
          </p>
          <div className="relative">
            <Carousel
              opts={{ align: 'start' }}
              setApi={setMoodHubApi}
              className="relative w-full max-w-full overflow-hidden px-0.5"
            >
              <div className="pl-[18px] xs:pl-[33px]">
                <CarouselContent>
                  {moodHubData.cardItem?.map((item, index) => (
                    <CarouselItem key={index} className="mx-auto p-0 xs:basis-[87%]">
                      <motion.div
                        initial={false}
                        transition={{ duration: 0.6 }}
                        style={{ perspective: '1000px' }}
                      >
                        <motion.div
                          style={{
                            transformStyle: 'preserve-3d',
                            position: 'relative',
                            height: '100%',
                            width: '100%',
                          }}
                        >
                          <div className="mx-auto w-full max-w-[271px] rounded-[28px] bg-white pt-[41px] shadow-[0px_4px_14.9px_0px_#0000001a]">
                            <div className="mx-auto flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#F6F6F6]">
                              <Image
                                src={`${imageDomainUrl}${moodHubData.img}`}
                                alt="icon"
                                height={36}
                                width={36}
                              />
                            </div>
                            <h2 className="mx-auto max-w-[210px] py-[28px] text-center font-['Urbanist'] text-[20px] font-semibold leading-[25px] text-black">
                              {item.title}
                            </h2>
                            <div className="flex flex-col gap-[18px] pb-[41px]">
                              {item.description?.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-start justify-center gap-[12px] px-[19.5px]"
                                >
                                  <Image
                                    src={`${imageDomainUrl}/MoodHub/Icon/subpage/bulb.svg`}
                                    alt="icon"
                                    height={22}
                                    width={22}
                                  />
                                  <p className="w-full max-w-[193.7px] text-start font-['Urbanist'] text-[14px] leading-[21px] text-[#000000]">
                                    {item}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>
              <div className="mt-[26px] xs:ml-[-40px]">
                <div className="relative mx-auto flex w-full max-w-[196px] items-center justify-between pb-6">
                  <PreviousButton
                    className={cn(
                      'relative bottom-[initial] left-[initial] top-[initial] z-10 min-h-[32px] min-w-[32px] translate-x-0 translate-y-0 border-transparent bg-[#F07E58] text-white hover:bg-[#d26d4b] hover:text-white'
                    )}
                  />
                  <div className="flex w-full items-center justify-center gap-1">
                    {visibleDots?.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleClick(currentDotSet * dotsPerPage + index)}
                        className={cn(
                          'h-[6px] w-[6px] cursor-pointer rounded-full transition-all duration-150 ease-in-out',
                          currentIndex === currentDotSet * dotsPerPage + index
                            ? 'bg-red-400'
                            : 'bg-zinc-200'
                        )}
                      ></div>
                    ))}
                  </div>
                  <NextButton
                    className={cn(
                      'relative bottom-[initial] right-[initial] top-[initial] z-10 min-h-[32px] min-w-[32px] translate-x-0 translate-y-0 border-transparent bg-[#F07E58] text-white hover:bg-[#d26d4b] hover:text-white'
                    )}
                  />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodHubIdPage;
