import QuoteQR from 'modules/TabletApp/components/QuoteQR';
import Sidebar from 'modules/TabletApp/components/Sidebar';
import SoulscapeBanner from 'modules/TabletApp/components/SoulscapeBanner';
import React from 'react';

import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import ContentHeader from 'src/components/tablet/content-header';
import { cn } from 'src/lib/utils';

import SoulscapeTravelCard from './components/SoulscapeTravelCard';
import { travelSafeItems } from './constants/travel-safe';

const TravelSafe: React.FC = () => {
  const router = useRouter();

  const isPremium = router.pathname.includes('/tablet-app-premium');
  const pageType = router.pathname.includes('soulscape') ? 'soulscape' : 'renewme';

  return (
    <section className="flex w-screen font-['Gilroy'] text-zinc-700 relative">
      {/* <RenewMeWatermark /> */}
      <Sidebar isPremium={isPremium} type={pageType} />
      <main
        className={cn(
          'ml-4 md:ml-[calc(280px+2rem)] py-4 w-[calc(100%-2rem)] mr-4 transition-all duration-300 ease-in-out overflow-x-visible'
        )}
      >
        <SoulscapeBanner />

        <ContentHeader
          title="Travel Safe"
          description="Embark on your next adventure with confidence and peace of mind!"
          iconSrc={`${imageDomainUrl}/TabletApp/Icons/travel-safe-icon.svg`}
          iconAlt="Travel Safe Icon"
          descriptionClassName="max-w-full"
          spacerClassname="w-[20%]"
        />

        <section className="w-full flex flex-col gap-4 mb-4">
          {travelSafeItems.map((item, index) => (
            <SoulscapeTravelCard key={index} {...item} />
          ))}
        </section>
        <QuoteQR
          quote="Balance the thrill of travel with the calm of being grounded."
          quoteClassName="max-w-sm"
        />
      </main>
    </section>
  );
};

export default TravelSafe;
