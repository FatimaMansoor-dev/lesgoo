import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from 'src/components/ui/carousel';
import { cn } from 'src/lib/utils';

import { ChevronDown, ChevronUp } from 'lucide-react';

// Import the dynamically generated Did You Know items
import { DID_YOU_KNOW_ITEMS } from '../constants/did-you-know';
import Container from './Container';
import QuestionMark from './QuestionMark';

const DidYouKnow: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrentItemIndex(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrentItemIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const handleItemClick = (itemId: number) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  const handleNext = () => {
    if (api && currentItemIndex < DID_YOU_KNOW_ITEMS.length - 1) {
      api.scrollNext();
    }
  };

  const handlePrev = () => {
    if (api && currentItemIndex > 0) {
      api.scrollPrev();
    }
  };

  const currentColor = DID_YOU_KNOW_ITEMS[currentItemIndex]?.color || 'bg-gray-500';
  const currentHexColor = DID_YOU_KNOW_ITEMS[currentItemIndex]?.hexColor || '#000000';

  const isPrevDisabled = currentItemIndex === 0;
  const isNextDisabled = currentItemIndex === DID_YOU_KNOW_ITEMS.length - 1;

  return (
    <React.Fragment>
      <Container className="w-full mt-5">
        <div className="mb-[9px]">
          <h1 className="font-semibold text-[22px] mb-[4px] text-[#303030] leading-[26.4px] font-['Urbanist']">
            Did You Know?
          </h1>
          <p className="text-sm text-[#707070] font-medium font-['Urbanist'] leading-[16.8px]">
            Small differences add up to big results.
          </p>
        </div>
      </Container>

      <Container className="w-full flex mb-[38px] gap-4 px-0">
        <Carousel
          opts={{ align: 'start' }}
          orientation="vertical"
          className="w-full max-w-xs overflow-hidden relative"
          setApi={setApi}
        >
          {/* Top Gradient */}
          {/* <div
            className={cn(
              'absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none transition-opacity duration-500',
              currentItemIndex === 0 ? 'opacity-0' : 'opacity-100'
            )}
          /> */}
          {/* Bottom Gradient */}
          {/* <div
            className={cn(
              'absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none transition-opacity duration-500',
              currentItemIndex === DID_YOU_KNOW_ITEMS.length - 1 ? 'opacity-0' : 'opacity-100'
            )}
          /> */}
          <CarouselContent className="-mt-1 h-[360px]">
            {DID_YOU_KNOW_ITEMS.map((item, index) => (
              <CarouselItem key={index} className="pt-1 basis-1/3 h-[360px] min-h-[360px]">
                <div className="flex w-full h-full">
                  <motion.div
                    className={cn(
                      'p-6 rounded-r-xl w-full transition-colors duration-500',
                      activeItem === index ? 'rounded-b-none' : '',
                      item.color
                      // If last item, add bottom margin
                    )}
                    onClick={() => handleItemClick(index)}
                  >
                    <div
                      className={cn(
                        'bg-white rounded-full text-[14px] font-semibold font-["Urbanist"] px-4 py-1 w-fit mb-6 pt-1 transition-colors duration-500',
                        item.textColor
                      )}
                    >
                      {item.category}
                    </div>
                    <h1 className="text-white font-semibold text-[22px] w-full leading-tight mb-[19px]">
                      {item.fact}
                    </h1>
                    <div className="w-[40px] bg-white h-0.5"></div>
                    <p className="font-['Urbanist'] text-[14px] font-medium italic text-white mt-[19px]">
                      Click to open answer
                    </p>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex flex-col justify-center gap-8 items-center">
          <button
            onClick={handlePrev}
            disabled={isPrevDisabled}
            className={cn(
              'aspect-square flex justify-center items-center p-2 rounded-full text-white shadow-md transition-colors duration-500',
              currentColor,
              isPrevDisabled ? 'opacity-50 cursor-not-allowed' : ''
            )}
          >
            <ChevronUp className="mb-0.5" size={24} />
          </button>
          <QuestionMark strokeWidth={14} strokeColor={currentHexColor} />
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className={cn(
              'aspect-square flex justify-center items-center p-2 rounded-full text-white shadow-md transition-colors duration-500',
              currentColor,
              isNextDisabled ? 'opacity-50 cursor-not-allowed' : ''
            )}
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default DidYouKnow;
