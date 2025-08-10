import useEmblaCarousel from 'embla-carousel-react';
import React, { useEffect, useState } from 'react';

import { cn } from 'src/lib/utils';

import { Mic } from 'lucide-react';

import Container from './Container';

const pepTalkItems = [
  {
    id: 1,
    text: 'I embrace my unique qualities.',
  },
  {
    id: 2,
    text: 'I am worthy of love and respect.',
  },
  {
    id: 3,
    text: 'I am capable of achieving my goals.',
  },
  {
    id: 4,
    text: 'I trust myself and my decisions.',
  },
  {
    id: 5,
    text: 'I am constantly growing and improving.',
  },
  {
    id: 6,
    text: 'I am in charge of my own happiness.',
  },
  {
    id: 7,
    text: 'I am grateful for the gift of today.',
  },
  {
    id: 8,
    text: 'I am proud of my progress.',
  },
];

const DailyPepTalk: React.FC = () => {
  return (
    <React.Fragment>
      <Container className="w-full mb-[41px]">
        <div className="outline outline-2 outline-[#B38DB2] flex flex-col items-center p-[30px] rounded-2xl">
          <Mic size={26} className="text-[#B38DB2] mb-2" />
          <h1 className="text-[#303030] font-semibold text-[22px] font-Urbanist">
            Daily Pep Talks
          </h1>
          <p className="text-sm font-medium text-center max-w-[200px] mb-4 font-Urbanist mt-1 text-[#707070]">
            Start strong. Daily dose of positivity & power.
          </p>
          <EmblaCarousel />
        </div>
      </Container>
    </React.Fragment>
  );
};

const EmblaCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    axis: 'y',
    loop: false,
    skipSnaps: true,
  });

  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(2);

  useEffect(() => {
    const onSelect = () => {
      if (!emblaApi) return;
      // setPrevBtnEnabled(emblaApi.canScrollPrev());
      // setNextBtnEnabled(emblaApi.canScrollNext());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    if (emblaApi) {
      emblaApi.on('select', onSelect);
      emblaApi.scrollTo(1); // Scroll to the 2nd item on initialization
      onSelect();
    }

    return () => {
      if (emblaApi) {
        emblaApi.off('select', onSelect);
      }
    };
  }, [emblaApi]);

  // const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  // const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <>
      {/* Embla */}
      <div
        className="overflow-hidden w-full mx-auto flex items-center justify-center"
        ref={emblaRef}
      >
        <div className={cn('flex flex-col h-[350px] gap-[5px]')}>
          {pepTalkItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                'w-full flex justify-center items-center transition-opacity duration-700',
                selectedIndex === index ? 'text-[#A75DA5]' : 'text-black',
                index === 0 && 'mt-[7rem]',
                index === pepTalkItems.length - 1 && 'mb-[7rem]',
                selectedIndex === index && 'opacity-100',
                selectedIndex - 1 === index && 'text-[#34363624]',
                selectedIndex + 1 === index && 'text-[#34363624]',
                selectedIndex - 2 === index && 'text-[#3436360A]',
                selectedIndex + 2 === index && 'text-[#3436360A]',
                selectedIndex - 3 === index && 'opacity-10',
                selectedIndex + 3 === index && 'opacity-10',
                selectedIndex - 4 === index && 'opacity-5',
                selectedIndex + 4 === index && 'opacity-5'
              )}
            >
              <h1 className="font-bold text-[22px] text-center font-['Urbanist]">{item.text}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Prev. & Next */}
      {/* <div className="mt-4 flex justify-center gap-2">
        <button
          className="bg-[#B38DB2] text-white px-4 py-2 rounded-full disabled:opacity-50 font-semibold hover:bg-[#A75DA5] hover:shadow-md transition-all duration-300 flex items-center gap-1"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <ArrowLeft size={16} />
          Prev
        </button>
        <button
          className="bg-[#B38DB2] flex items-center gap-1 text-white px-4 py-1 rounded-full disabled:opacity-50 font-semibold hover:bg-[#A75DA5] hover:shadow-md transition-all duration-300"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          Next <ArrowRight size={16} />
        </button>
      </div> */}
    </>
  );
};

export default DailyPepTalk;
