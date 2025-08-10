import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from 'src/components/ui/carousel';
import { cn } from 'src/lib/utils';

import { TRIVIA_CONTENTS, TriviaItem } from '../constants/trivia';
import Container from './Container';

const TriviaZone: React.FC = () => {
  const [triviaApi, setTriviaApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTrivia, setSelectedTrivia] = useState<number | null>(null);

  const categories = ['Fun Fact', 'Guess What', 'Ever Wondered'];

  const sequencedTriviaItems: TriviaItem[] = TRIVIA_CONTENTS.reduce((result, item, index) => {
    const category = categories[index % categories.length];
    const matchingItem = TRIVIA_CONTENTS.find(trivia => trivia.category === category);
    if (matchingItem) {
      result.push(matchingItem);
    }
    return result;
  }, [] as TriviaItem[]);

  useEffect(() => {
    if (!triviaApi) {
      return;
    }

    const onSelect = () => {
      const selectedIndex = triviaApi.selectedScrollSnap();
      setCurrentIndex(selectedIndex);
    };

    triviaApi.on('select', onSelect);

    return () => {
      triviaApi.off('select', onSelect);
    };
  }, [triviaApi, sequencedTriviaItems.length]);

  const handleClick = (index: number) => {
    triviaApi?.scrollTo(index);
  };

  return (
    <Container className="mb-[22.5px] w-full pr-0">
      <div className={'mb-2.5 flex items-center justify-between gap-4 pr-5'}>
        <div>
          <h1 className="mb-1 text-[22px] font-semibold leading-[26.4px] font-['Urbanist'] text-[#303030]">
            Trivia Zone
          </h1>
          <p className="max-w-[184px] text-[14px] leading-[16.8px] font-medium text-[#707070]">
            Dive into fascinating facts!
          </p>
        </div>
        <div className="flex aspect-square h-12 items-center justify-center rounded-full bg-zinc-400/20">
          <Image
            className="w-6"
            src={`${imageDomainUrl}/YourBrandSample/Icon/bulb.svg`}
            width={100}
            height={100}
            alt="Bulb Icon"
          />
        </div>
      </div>

      <div className="relative">
        <Carousel
          opts={{ align: 'start' }}
          setApi={setTriviaApi}
          className="relative w-full max-w-full overflow-hidden px-0.5"
        >
          <CarouselContent>
            {sequencedTriviaItems.map((item, index) => (
              <CarouselItem key={index} className="basis-[42%]">
                <motion.div
                  className={cn(
                    'h-[209px] w-full max-w-[140px] cursor-pointer rounded-xl border-2 border-zinc-200 bg-white p-[14px]',
                    item.lightBgColor,
                    item.borderColor
                  )}
                  onClick={() => setSelectedTrivia(selectedTrivia === index ? null : index)}
                  initial={false}
                  animate={{ rotateY: selectedTrivia === index ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ perspective: '1000px' }}
                >
                  <motion.div
                    style={{
                      transform: selectedTrivia === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      transformStyle: 'preserve-3d',
                      position: 'relative',
                      height: '100%',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        backfaceVisibility: 'hidden',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <div
                        className={cn(
                          'mb-2 w-fit rounded-full px-2 py-0.5 text-[14px] font-["Urbanist"] font-medium text-white whitespace-nowrap',
                          item.color
                        )}
                      >
                        {item.category}
                      </div>
                      <h1
                        className={cn(
                          `mb-2 text-[14px] font-medium leading-tight ${item.textColor}`,
                          selectedTrivia === index ? '-rotate-180 -scale-y-100' : ''
                        )}
                      >
                        {item.question}
                      </h1>
                      <p className="text-[14px] text-[#9BB3B2] font font-['Urbanist']">
                        Click to view answer.
                      </p>
                    </div>

                    <div
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <h1
                        className={cn(
                          'mb-2 text-sm font-medium leading-tight',
                          selectedTrivia === index ? '-rotate-180 -scale-y-100' : ''
                        )}
                      >
                        {item.answer}
                      </h1>
                      <p className="-rotate-180 -scale-y-100 text-sm text-zinc-400">
                        Click to hide answer.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="mt-[28.5px] flex w-full items-center justify-center gap-1">
        {sequencedTriviaItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={cn(
              'h-[8px] w-[20px] cursor-pointer rounded-2xl transition-all duration-150 ease-in-out',
              currentIndex === index ? `${item.color} w-[32px]` : 'bg-zinc-200'
            )}
          ></div>
        ))}
      </div>
    </Container>
  );
};

export default TriviaZone;
