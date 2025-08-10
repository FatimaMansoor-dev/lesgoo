import Sidebar from 'modules/TabletApp/components/Sidebar';
import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import ContentHeader from 'src/components/tablet/content-header';
import { cn } from 'src/lib/utils';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { dailyPepTalkItems } from './constants/daily-pep-talk';

const meditationVectors = ['blue', 'green', 'orange', 'purple'];

const DailyPepTalk: React.FC = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardOffset = 200; // Changed from state to a constant
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleNavigation = (direction: 'prev' | 'next') => {
    setCurrentIndex(prevIndex => {
      if (direction === 'next') {
        return (prevIndex + 1) % dailyPepTalkItems.length;
      } else {
        return (prevIndex - 1 + dailyPepTalkItems.length) % dailyPepTalkItems.length;
      }
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handleNavigation('prev');
      } else if (event.key === 'ArrowRight') {
        handleNavigation('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isPremium = router.pathname.includes('/tablet-app-premium');
  const pageType = router.pathname.includes('soulscape') ? 'soulscape' : 'renewme';

  return (
    <section className="relative flex w-screen font-['Gilroy'] text-zinc-700">
      {/* <RenewMeWatermark /> */}
      <Sidebar isPremium={isPremium} type={pageType} />
      <main className="relative ml-4 mr-4 flex h-[100vh] w-full flex-col items-center justify-start overflow-x-hidden py-4 transition-all duration-500 ease-in-out md:ml-[calc(280px+2rem)]">
        <ContentHeader
          title="Daily Pep Talk"
          description="Boost your day right by infusing it with positive affirmations to fuel greatness!"
          iconSrc={`${imageDomainUrl}/TabletApp/Icons/daily-pep-talk-icon.svg`}
          iconAlt="Daily Pep Talk Icon"
          descriptionClassName="max-w-[490px] lg:max-w-[82%]"
        />

        <div className="flex w-full flex-col items-center">
          <div className="relative flex w-full items-center justify-start ">
            <button
              onClick={() => handleNavigation('prev')}
              className="absolute left-0 top-1/2 z-[9999] hidden -translate-y-1/2 transform items-center justify-center rounded-full border-[2px] border-[#00C0C5] bg-white p-4 text-[#00C0C5] shadow-lg md:flex"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => handleNavigation('next')}
              className="absolute right-0 top-1/2 z-[9999] hidden -translate-y-1/2 transform items-center justify-center rounded-full border-[2px] border-[#00C0C5] bg-white p-4 text-[#00C0C5] shadow-lg md:flex"
            >
              <ChevronRight size={24} />
            </button>
            <div className="relative h-[450px] w-full max-w-[1000px] overflow-visible">
              {dailyPepTalkItems.map((item, index) => {
                const vectorColor = meditationVectors[index % meditationVectors.length];
                const isActive = index === currentIndex;
                const offset =
                  (index - currentIndex + dailyPepTalkItems.length) % dailyPepTalkItems.length;
                const zIndex = dailyPepTalkItems.length - offset;
                const opacity = Math.max(0, 1 - offset * 0.1);

                return (
                  <div
                    key={index}
                    ref={el => (cardRefs.current[index] = el)}
                    className={cn(
                      'absolute left-0 top-1/2 m-8 flex w-[260px] flex-col items-center justify-between rounded-2xl border-2 p-4 transition-all duration-300',
                      isActive ? 'border-2 border-[#00C0C5] bg-white' : 'border-zinc-200 bg-white'
                    )}
                    style={{
                      transform: `translate(${offset * cardOffset}px, -50%) scale(${
                        isActive ? 1.05 : 1
                      }) rotate(${isActive ? -4 : 0}deg)`,
                      zIndex,
                      opacity,
                    }}
                  >
                    <Image
                      className="my-4"
                      src={`${imageDomainUrl}/DailyPepTalk/renewme-teal-logo.svg`}
                      alt="Quote"
                      width={50}
                      height={50}
                    />
                    <p className="text-center text-[1.375rem] font-bold leading-snug">{item}</p>
                    <div className="my-4 h-0.5 w-full bg-zinc-100" />
                    <Image
                      className="transition-transform duration-1000 ease-in-out"
                      src={`${imageDomainUrl}/DailyPepTalk/meditation-vectors/meditation-${vectorColor}.svg`}
                      alt={`Meditation Vector ${vectorColor}`}
                      width={180}
                      height={140}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-28 text-sm text-zinc-500">
            {currentIndex + 1} of {dailyPepTalkItems.length}
          </div>
        </div>

        <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 md:hidden">
          <button
            onClick={() => handleNavigation('prev')}
            className="flex items-center justify-center rounded-full border-[2px] border-[#00C0C5] bg-white p-3 text-[#00C0C5] shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => handleNavigation('next')}
            className="flex items-center justify-center rounded-full border-[2px] border-[#00C0C5] bg-white p-3 text-[#00C0C5] shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </main>
    </section>
  );
};

export default DailyPepTalk;
