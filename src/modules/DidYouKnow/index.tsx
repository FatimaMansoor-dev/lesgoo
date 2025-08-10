import Sidebar from 'modules/TabletApp/components/Sidebar';
import { useCallback, useState } from 'react';

import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import ContentHeader from 'src/components/tablet/content-header';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'src/components/ui/carousel';
import { cn } from 'src/lib/utils';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import CarouselItemComponent from './component/CarouselItem';
import { didYouKnowItemsCategorized } from './constants';

const DidYouKnow = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  const router = useRouter();

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleNavigation = useCallback(
    (direction: 'next' | 'prev') => {
      if (isNavigating || !carouselApi) return;

      setIsNavigating(true);
      if (direction === 'next') {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollPrev();
      }
      setActiveIndex(null);

      setTimeout(() => {
        setIsNavigating(false);
      }, 1000); // Increased to 2 seconds (2000 milliseconds)
    },
    [carouselApi, isNavigating]
  );

  const handleNextClick = () => handleNavigation('next');
  const handlePreviousClick = () => handleNavigation('prev');

  const chunkedItems = [];
  for (let i = 0; i < didYouKnowItemsCategorized.length; i += 2) {
    chunkedItems.push(didYouKnowItemsCategorized.slice(i, i + 2));
  }

  const isPremium = router.pathname.includes('/tablet-app-premium');
  const pageType = router.pathname.includes('soulscape') ? 'soulscape' : 'renewme';

  return (
    <section className="relative flex w-screen font-['Gilroy'] text-zinc-700">
      {/* <RenewMeWatermark /> */}
      <Sidebar isPremium={isPremium} type={pageType} />
      <main
        className={cn(
          'relative ml-4 mr-4 flex h-[100vh] w-full flex-col items-center justify-start overflow-x-hidden py-4 transition-all duration-500 ease-in-out md:ml-[calc(280px+2rem)]'
        )}
      >
        <section className="mb-[1.875rem] flex w-full items-end justify-between">
          <ContentHeader
            className="mb-0"
            title="Did You Know"
            description="Discover intriguing insights and surprising wellness facts to spark your curiosity!"
            iconSrc={`${imageDomainUrl}/TabletApp/Icons/did-you-know-icon.svg`}
            iconAlt="Did You Know"
            descriptionClassName="max-w-[341px] lg:max-w-[90%]"
          />

          <div className="flex justify-center gap-2">
            <button
              className={cn(
                'h-fit rounded-full border-2 bg-white p-2 shadow-sm transition-all duration-300 ease-in-out',
                isNavigating && 'cursor-not-allowed opacity-50'
              )}
              onClick={handlePreviousClick}
              disabled={isNavigating}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={cn(
                'h-fit rounded-full border-2 bg-white p-2 shadow-sm transition-all duration-300 ease-in-out',
                isNavigating && 'cursor-not-allowed opacity-50'
              )}
              onClick={handleNextClick}
              disabled={isNavigating}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>

        <section
          className={cn('relative w-full', isNavigating ? 'pointer-events-none' : 'cursor-pointer')}
        >
          <Carousel
            opts={{
              align: 'start',
              dragFree: true,
            }}
            className="w-full overflow-visible"
            setApi={setCarouselApi}
          >
            <CarouselContent className="overflow-visible">
              {chunkedItems.map((items, index) => (
                <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/4">
                  <CarouselItemComponent
                    items={items}
                    startIndex={index * 2}
                    activeIndex={activeIndex}
                    handleItemClick={handleItemClick}
                    isNavigating={isNavigating}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>
    </section>
  );
};

export default DidYouKnow;
