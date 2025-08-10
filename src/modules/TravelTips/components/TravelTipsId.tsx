import { AnimatePresence, motion } from 'framer-motion';
import QuoteQR from 'modules/TabletApp/components/QuoteQR';
import Sidebar from 'modules/TabletApp/components/Sidebar';
import React, { useMemo } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { cn } from 'src/lib/utils';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import { travelTips } from '../constants/travel-tips';

interface TravelTipsIdProps {
  id: string;
}

const TravelTipsId: React.FC<TravelTipsIdProps> = ({ id }) => {
  const router = useRouter();
  const isPremium = router.pathname.includes('/tablet-app-premium');
  const pageType = router.pathname.includes('soulscape') ? 'soulscape' : 'renewme';

  const { travelTip, prevTip, nextTip } = useMemo(() => {
    const currentIndex = travelTips.findIndex(tip => tip.slug === id);
    return {
      travelTip: travelTips[currentIndex],
      prevTip: currentIndex > 0 ? travelTips[currentIndex - 1] : null,
      nextTip: currentIndex < travelTips.length - 1 ? travelTips[currentIndex + 1] : null,
    };
  }, [id]);

  if (!travelTip) {
    return <div>Travel tip not found</div>;
  }

  const path = router.pathname.replace('/[travelTipsId]', '');

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const navigateTip = (tipSlug: string) => {
    router.push(`${path}/${tipSlug}`);
  };

  const hasFirstColumn = travelTip.firstColumn && travelTip.firstColumn.title;
  const hasSecondColumn = travelTip.secondColumn && travelTip.secondColumn.title;

  const renderColumnHeader = (column: any) => (
    <div className="w-full flex flex-col items-center justify-center mb-[1.875rem]">
      <h1 className="font-bold text-[1.5rem] md:text-2xl mb-[.375rem] text-center">
        {column.title}
      </h1>
      <p className="font-medium text-[1.125rem] text-center max-w-[20.4375rem]">
        {column.description}
      </p>
    </div>
  );

  const renderColumnItems = (column: any, isFirst: boolean) => (
    <div className="w-full">
      <div className="w-full border-[2px] border-zinc-100 p-4 md:p-6 rounded-3xl font-medium text-base md:text-lg bg-white relative">
        {isFirst && prevTip && (
          <div
            onClick={() => navigateTip(prevTip.slug)}
            className="absolute z-10 bg-white p-2 -left-8 aspect-square border-[2px] rounded-full transform -translate-y-1/2 top-1/2 border-[#00B0B0] shadow-md text-[#00C0C5] cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
          >
            <ChevronLeftIcon />
          </div>
        )}
        {!isFirst && nextTip && (
          <div
            onClick={() => navigateTip(nextTip.slug)}
            className="absolute z-10 bg-white p-2 -right-8 aspect-square border-[2px] rounded-full transform -translate-y-1/2 top-1/2 border-[#00B0B0] shadow-md text-[#00C0C5] cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
          >
            <ChevronRightIcon className="ml-0.5" />
          </div>
        )}

        {column.items.map((item: any, index: number) => (
          <React.Fragment key={item.no}>
            <div
              className={cn(
                'flex items-center justify-between',
                index === column.items.length - 1 ? 'mb-0' : 'mb-3 md:mb-4'
              )}
            >
              <p className="text-zinc-400 font-normal text-[.875rem]">{item.no}</p>
              <p className="text-[1.125rem] max-w-[210px] text-center">{item.title}</p>
              <div />
            </div>
            {index !== column.items.length - 1 && (
              <div className="mb-3 w-full h-[1px] md:h-[2px] bg-zinc-100" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <section className="flex flex-col md:flex-row w-screen font-['Gilroy'] text-zinc-700 relative">
      {/* <RenewMeWatermark /> */}
      <Sidebar isPremium={isPremium} type={pageType} />
      <AnimatePresence mode="wait">
        <motion.main
          key={travelTip.slug}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
          className={cn(
            'ml-4 md:ml-[calc(280px+2rem)] py-4 w-[calc(100%-2rem)] mr-4 transition-all duration-300 ease-in-out overflow-x-visible'
          )}
        >
          <section className="mb-[1.875rem] w-full h-fit bg-[#00B0B0] rounded-2xl flex flex-col items-center justify-center text-white text-center p-12">
            <Image
              className="mb-3 md:mb-4"
              src={travelTip.icon}
              alt={travelTip.title}
              width={48}
              height={48}
            />
            <h1 className="font-bold text-[2rem] md:text-3xl">{travelTip.title}</h1>
          </section>

          <section className="mb-6 w-full flex flex-col items-center">
            {hasFirstColumn && hasSecondColumn ? (
              <div className="w-full flex flex-col md:flex-row md:items-start gap-4 px-6">
                <div className="w-full">
                  {renderColumnHeader(travelTip.firstColumn)}
                  {renderColumnItems(travelTip.firstColumn, true)}
                </div>
                <div className="w-full">
                  {renderColumnHeader(travelTip.secondColumn)}
                  {renderColumnItems(travelTip.secondColumn, false)}
                </div>
              </div>
            ) : (
              <>
                <div className="w-full flex flex-col items-center justify-center">
                  {renderColumnHeader(
                    hasFirstColumn ? travelTip.firstColumn : travelTip.secondColumn
                  )}
                </div>
                <div className="w-full flex flex-col md:flex-row md:items-start gap-4 px-6">
                  {renderColumnItems(travelTip.firstColumn, true)}
                  {renderColumnItems(travelTip.secondColumn, false)}
                </div>
              </>
            )}
          </section>

          <QuoteQR quote={travelTip.quote} quoteClassName="max-w-xl" />
        </motion.main>
      </AnimatePresence>
    </section>
  );
};

export default TravelTipsId;
