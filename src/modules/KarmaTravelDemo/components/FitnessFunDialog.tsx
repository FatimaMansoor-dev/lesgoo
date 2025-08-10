import { PanInfo, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from 'src/components/ui/carousel';
import { Dialog, DialogClose, DialogContent } from 'src/components/ui/dialog';
import { cn } from 'src/lib/utils';

import { ChevronLeft } from 'lucide-react';
import { FITNESS_FUN_CONTENTS } from '../constants/fitness-fun';

interface FitnessFunDialogProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'Nutrition' | 'Exercise' | 'General Health' | 'Mental Wellness';
}

const FitnessFunDialog: React.FC<FitnessFunDialogProps> = ({ isOpen, onClose, type }) => {
  const content = FITNESS_FUN_CONTENTS.find(item => item.type === type);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on('select', onSelect);
    onSelect();

    return () => {
      carouselApi.off('select', onSelect);
    };
  }, [carouselApi]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 50) {
      carouselApi?.scrollPrev();
    } else if (info.offset.x < -50) {
      carouselApi?.scrollNext();
    }
  };

  if (!content) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        hideCloseButton
        className={`w-full h-full font-['Gilroy'] ${content.bgColor} text-white flex flex-col justify-center items-start p-8`}
      >
        <DialogClose className="absolute top-0 right-0 aspect-square bg-white rounded-full p-1 m-8">
          <ChevronLeft className={cn('w-6 h-6 pr-0.5', content.textColor)} />
        </DialogClose>
        <Image
          className="w-28 opacity-50 absolute top-0 left-0 m-8"
          src={content.icon}
          width={800}
          height={800}
          alt={`${type} Icon`}
        />
        <section className="w-full flex flex-col !justify-between pt-[140px] mt-[120px] h-full">
          <div>
            <div className="bg-white/20 text-[16px] max-w-fit font-semibold px-4 py-2 mb-4 rounded-full">
              {content.title}
            </div>
            <Carousel
              opts={{ align: 'center', axis: 'y' }}
              setApi={setCarouselApi}
              className="w-full overflow-hidden mb-[20px]"
            >
              <CarouselContent className="h-full">
                {content.facts.map((fact, index) => (
                  <CarouselItem key={index} className="flex justify-start items-start h-full">
                    <motion.div
                      className="flex justify-start items-start h-full"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={handleDragEnd}
                    >
                      <p className="text-left text-2xl font-bold w-full max-w-[278px] font-['Gilroy'] h-full leading-normal">
                        {fact}
                      </p>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="w-full flex justify-start items-center gap-1">
            {content.facts.map((_, index) => (
              <div
                key={index}
                onClick={() => carouselApi?.scrollTo(index)}
                className={cn(
                  'w-[20px] h-[8px] rounded-2xl cursor-pointer transition-all duration-150 ease-in-out',
                  selectedIndex === index ? 'bg-white w-[30px]' : 'bg-zinc-100/20'
                )}
              ></div>
            ))}
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default FitnessFunDialog;
