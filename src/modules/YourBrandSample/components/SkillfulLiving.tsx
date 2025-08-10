import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from 'src/components/ui/carousel';
import { cn } from 'src/lib/utils';

import { ArrowRight } from 'lucide-react';

import { SKILLFUL_LIVING_CONTENTS } from '../constants/skillful-living';
import Container from './Container';
import SkillfulLivingDialog from './SkillfulLivingDialog';

const SkillfulLiving: React.FC = () => {
  const [mainApi, setMainApi] = useState<CarouselApi | null>(null);
  const [topApi, setTopApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (!mainApi || !topApi) {
      return;
    }

    setActiveIndex(mainApi.selectedScrollSnap());

    mainApi.on('select', () => {
      setActiveIndex(mainApi.selectedScrollSnap());
      topApi.scrollTo(mainApi.selectedScrollSnap());
    });
  }, [mainApi, topApi]);

  const handleDialogOpen = () => {
    document.body.style.overflow = 'hidden';
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    document.body.style.overflow = 'auto';
    setDialogOpen(false);
  };

  return (
    <Container className="w-full font-['Gilroy'] mb-9">
      <div className="xs:mb-4 mb-[34px] flex justify-between gap-2 items-start">
        <div>
          <h1 className="font-semibold text-[22px] mb-1 text-[#303030] font-['Urbanist'] leading-[26.4px]">
            Skillful Living
          </h1>
          <p className="text-[14px] text-[#707070] font-medium leading-[16.8px]">
            Unleash your potential and live skillfully.
          </p>
        </div>
      </div>

      <div className="relative -mt-8">
        <Carousel
          setApi={setTopApi}
          className="relative top-0 pr-[9.16px] -mb-8 z-10 overflow-hidden"
        >
          <CarouselContent>
            {SKILLFUL_LIVING_CONTENTS.map(item => (
              <CarouselItem key={item.type} className="flex justify-end">
                <div
                  className={cn(
                    'aspect-square p-4 rounded-full flex justify-center items-center',
                    item.bgPrimaryColor
                  )}
                >
                  <Image
                    className="w-8"
                    src={item.icon}
                    width={100}
                    height={100}
                    alt={`${item.type} Icon`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Carousel setApi={setMainApi} className="relative overflow-hidden">
          <CarouselContent>
            {SKILLFUL_LIVING_CONTENTS.map(item => (
              <CarouselItem
                key={item.type}
                className="flex items-center relative w-full flex-col justify-start"
              >
                <div
                  className={cn(
                    'text-white p-5 rounded-2xl flex flex-col justify-between w-full h-fit',
                    item.bgSecondaryColor
                  )}
                  onClick={handleDialogOpen}
                >
                  <div>
                    <h1 className="font-semibold text-[22px] leading-[26.4px] mb-[13.3px]">
                      {item.type}
                    </h1>
                    <p className="text-[14px] font-['Gilroy'] leading-[16.8px] font-medium mb-[13.3px]">
                      {item.description}
                    </p>
                  </div>
                  <div
                    className={cn(
                      'bg-white flex items-center justify-between p-4 rounded-2xl',
                      item.textPrimaryColor
                    )}
                  >
                    <h1 className={cn('font-medium text-xl')}>Open</h1>
                    <ArrowRight className="text-[14px]" />
                    <CarouselNext className="ml-2" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious
            size="default"
            className={cn(
              `absolute top-1/2 left-0 transform -translate-y-1/2 z-10 shadow-2xl bg-white p-2 rounded-full border-2 h-10 w-10`,
              SKILLFUL_LIVING_CONTENTS[activeIndex].textPrimaryColor,
              SKILLFUL_LIVING_CONTENTS[activeIndex].outlineColor
            )}
          />
          <CarouselNext
            className={cn(
              `absolute top-1/2 right-0 transform -translate-y-1/2 z-10 shadow-2xl bg-white p-2 rounded-full border-2 h-10 w-10`,
              SKILLFUL_LIVING_CONTENTS[activeIndex].textPrimaryColor,
              SKILLFUL_LIVING_CONTENTS[activeIndex].outlineColor
            )}
          /> */}
        </Carousel>
      </div>

      {SKILLFUL_LIVING_CONTENTS[activeIndex] && (
        <SkillfulLivingDialog
          open={dialogOpen}
          onClose={handleDialogClose}
          content={SKILLFUL_LIVING_CONTENTS[activeIndex]}
        />
      )}
    </Container>
  );
};

export default SkillfulLiving;
