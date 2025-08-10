import React, { useEffect, useRef } from 'react';

import { Badge } from 'src/components/ui/badge';
import { cn } from 'src/lib/utils';

import { ChevronDown } from 'lucide-react';

interface Item {
  question: string;
  answer: string;
  category: {
    name: string;
    color: string;
  };
}

interface CarouselItemComponentProps {
  items: Item[];
  startIndex: number;
  activeIndex: number | null;
  handleItemClick: (index: number) => void;
  isNavigating: boolean;
}

const CarouselItemComponent: React.FC<CarouselItemComponentProps> = ({
  items,
  startIndex,
  activeIndex,
  handleItemClick,
  isNavigating,
}) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (activeIndex !== null && !isNavigating) {
      const activeElement = itemRefs.current[activeIndex - startIndex];
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [activeIndex, startIndex, isNavigating]);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, idx) => {
        const index = startIndex + idx;
        return (
          <div
            key={index}
            ref={el => (itemRefs.current[idx] = el)}
            className={cn(
              'bg-white rounded-3xl p-6 border-2 border-zinc-100 transition-all duration-300 ease-in-out shadow-md',
              activeIndex === index ? 'border-zinc-200' : '',
              isNavigating ? 'pointer-events-none' : 'cursor-pointer'
            )}
            onClick={() => !isNavigating && handleItemClick(index)}
          >
            <div className="w-full flex justify-between gap-2 items-center mb-4">
              <Badge className={cn('py-1 text-sm', item.category.color)}>
                {item.category.name}
              </Badge>
              <ChevronDown
                size={24}
                className={cn('transition-transform duration-500 ease-in-out', {
                  'rotate-180': activeIndex === index,
                })}
              />
            </div>
            <h1 className="font-semibold text-lg md:text-xl">{item.question}</h1>
            <div className="w-10 h-[2px] bg-zinc-200 my-4" />
            <p
              className={cn(
                'italic font-medium transition-all duration-500 ease-in-out text-sm md:text-base',
                activeIndex === index ? 'text-zinc-300' : 'text-zinc-500'
              )}
            >
              Click to {activeIndex === index ? 'hide' : 'view'} answer
            </p>
            <div
              className={cn(
                'overflow-hidden transition-[max-height] duration-500 ease-in-out mt-4 text-sm md:text-base',
                {
                  'max-h-0': activeIndex !== index,
                  'max-h-[500px]': activeIndex === index,
                }
              )}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselItemComponent;
