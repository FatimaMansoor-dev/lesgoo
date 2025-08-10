import gsap from 'gsap';
import Sidebar from 'modules/TabletApp/components/Sidebar';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import ContentHeader from 'src/components/tablet/content-header';
import { cn } from 'src/lib/utils';

import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';

import { triviaItems } from './constants/trivias';

const TriviaZone: React.FC = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [activeTrivia, setActiveTrivia] = useState<number>(0);
  const [flippedTrivia, setFlippedTrivia] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const triviasPerPage = 6;
  const totalPages = Math.ceil(triviaItems.length / triviasPerPage);

  const animatePageTransition = useCallback(
    (direction: 'next' | 'prev') => {
      if (cardsContainerRef.current) {
        const isMobile = window.innerWidth < 768;
        const offset = direction === 'next' ? -100 : 100;
        const property = isMobile ? 'y' : 'x';

        gsap.to(cardsContainerRef.current, {
          [property]: `${offset}%`,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
          onComplete: () => {
            setCurrentPage(prev =>
              direction === 'next' ? (prev + 1) % totalPages : (prev - 1 + totalPages) % totalPages
            );
            setActiveTrivia(direction === 'next' ? 0 : triviasPerPage - 1);
            setFlippedTrivia(null);
            gsap.set(cardsContainerRef.current, { [property]: `${-offset}%` });
            gsap.to(cardsContainerRef.current, {
              [property]: '0%',
              opacity: 1,
              duration: 0.5,
              ease: 'power2.inOut',
            });
          },
        });
      }
    },
    [totalPages, triviasPerPage]
  );

  const handleCardClick = useCallback(
    (index: number) => {
      if (activeTrivia === index) {
        setFlippedTrivia(flippedTrivia === index ? null : index);
      } else {
        setActiveTrivia(index);
        setFlippedTrivia(null);
      }
    },
    [activeTrivia, flippedTrivia]
  );

  const handleNavigation = useCallback(
    (direction: 'prev' | 'next') => {
      if (direction === 'next') {
        if (activeTrivia === triviasPerPage - 1) {
          animatePageTransition('next');
        } else {
          setActiveTrivia(prev => prev + 1);
        }
      } else {
        if (activeTrivia === 0) {
          animatePageTransition('prev');
        } else {
          setActiveTrivia(prev => prev - 1);
        }
      }
      setFlippedTrivia(null);
    },
    [activeTrivia, animatePageTransition]
  );

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, triviasPerPage);
  }, []);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        const distance = Math.abs(index - activeTrivia);
        const zIndex = triviasPerPage - distance;
        const opacity = 1 - distance * 0.03;

        gsap.to(card, {
          scale: activeTrivia === index ? 1.05 : 1,
          rotateY: flippedTrivia === index ? 180 : 0,
          rotateZ: activeTrivia === index ? -6 : 0,
          zIndex: activeTrivia === index ? triviasPerPage + 1 : zIndex,
          opacity: opacity,
          x: `${(index - activeTrivia) * 30}px`,
          duration: 0,
          ease: 'power2.inOut',
        });
      }
    });

    if (flippedTrivia === null) {
      setTimeout(() => {
        if (window.innerWidth < 768 && cardRefs.current[activeTrivia]) {
          cardRefs.current[activeTrivia]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }, 330);
    }
  }, [activeTrivia, flippedTrivia, handleNavigation]);

  const isPremium = router.pathname.includes('/tablet-app-premium');
  const pageType = router.pathname.includes('soulscape') ? 'soulscape' : 'renewme';

  return (
    <section className="relative flex w-screen font-['Gilroy'] text-zinc-700">
      {/* <RenewMeWatermark /> */}
      <Sidebar isPremium={isPremium} type={pageType} />
      <main
        className={cn(
          'ml-4 mr-4 flex h-[100vh] w-full flex-col items-center justify-start overflow-x-hidden py-4 transition-all duration-500 ease-in-out md:ml-[calc(280px+2rem)]'
        )}
      >
        <ContentHeader
          title="Trivia Zone"
          descriptionClassName="max-w-[600px]"
          description="Healthy choices set the stage for a balanced life, giving you the energy and vitality to chase your passions and thrive."
          iconSrc={`${imageDomainUrl}/TabletApp/Icons/trivia-zone-icon.svg`}
          iconAlt="Trivia Zone"
        />

        <div className="mt-16 flex w-full flex-col items-center">
          <div className="relative flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-4">
            <button
              onClick={() => handleNavigation('prev')}
              className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 transform items-center justify-center rounded-full border-[2px] border-[#00C0C5] bg-white p-4 text-[#00C0C5] shadow-lg md:flex"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => handleNavigation('next')}
              className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 transform items-center justify-center rounded-full border-[2px] border-[#00C0C5] bg-white p-4 text-[#00C0C5] shadow-lg md:flex"
            >
              <ChevronRight size={24} />
            </button>
            <div
              ref={cardsContainerRef}
              className="flex w-full flex-col gap-6 md:w-auto md:flex-row md:gap-0"
            >
              {triviaItems
                .slice(currentPage * triviasPerPage, (currentPage + 1) * triviasPerPage)
                .map((trivia, index) => (
                  <div
                    key={index}
                    ref={el => (cardRefs.current[index] = el)}
                    className={cn(
                      'absolute left-0 right-0 mx-auto flex h-[400px] w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 p-3 transition-all duration-300 [transform-style:preserve-3d] md:relative md:-mx-[114px] md:w-[300px]',
                      activeTrivia === index
                        ? 'border-[2px] border-[#00C0C5] bg-gradient-to-br from-[#ffffff] to-[#CCF3F4]'
                        : 'border-zinc-200 bg-white'
                    )}
                    style={{
                      zIndex: triviasPerPage - Math.abs(index - activeTrivia),
                    }}
                    onClick={() => handleCardClick(index)}
                  >
                    {/* Front side */}
                    <div
                      className={cn(
                        'backface-hidden flex h-full w-full flex-col items-center justify-between gap-6 p-6 text-center',
                        flippedTrivia === index ? 'pointer-events-none opacity-0' : 'opacity-100'
                      )}
                    >
                      <div className="w-full items-start justify-start">
                        <Image
                          src={`${imageDomainUrl}/TabletApp/Icons/trivia-zone-icon-teal.svg`}
                          width={50}
                          height={50}
                          alt="Trivia Zone Icon"
                        />
                      </div>
                      <div className="flex flex-col items-start">
                        <h1 className="mb-2 text-left text-[1.375rem] font-semibold">
                          {trivia.question}
                        </h1>
                        <p className="text-left text-base text-zinc-600">
                          Flip the card to reveal the answer.
                        </p>
                      </div>
                      <div className="mt-4 flex w-full items-center justify-end">
                        <span className="mr-1 text-sm md:text-base">Flip</span>
                        <ChevronRight className="text-[#00C0C5]" size={20} />
                      </div>
                    </div>
                    {/* Back side */}
                    <div
                      className={cn(
                        'backface-hidden absolute flex h-full w-full flex-col items-center justify-between p-6 text-center [transform:rotateY(180deg)]',
                        flippedTrivia === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                      )}
                    >
                      <div className="mb-10 w-full opacity-0" />
                      <div className="flex w-full flex-col items-center">
                        <h3 className="mb-2 text-xs md:text-sm">Answer</h3>
                        <p className="mb-4 text-left text-xl font-semibold leading-snug text-zinc-600">
                          {trivia.answer}
                        </p>
                      </div>
                      <div
                        className="mt-4 flex w-full cursor-pointer items-center justify-end"
                        onClick={e => {
                          e.stopPropagation();
                          handleNavigation('next');
                        }}
                      >
                        <span className="mr-1 text-sm md:text-base">
                          {index < triviasPerPage - 1 ? 'Next' : 'View More'}
                        </span>
                        <ChevronRight className="text-[#00C0C5]" size={20} />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="fixed bottom-4 right-4 z-10 flex flex-col gap-2 md:hidden">
          <button
            onClick={() => handleNavigation('prev')}
            className="flex items-center justify-center rounded-full border-[2px] border-[#00C0C5] bg-white p-3 text-[#00C0C5] shadow-lg"
          >
            <ChevronUp size={24} />
          </button>
          <button
            onClick={() => handleNavigation('next')}
            className="flex items-center justify-center rounded-full border-[2px] border-[#00C0C5] bg-white p-3 text-[#00C0C5] shadow-lg"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </main>
    </section>
  );
};

export default TriviaZone;
