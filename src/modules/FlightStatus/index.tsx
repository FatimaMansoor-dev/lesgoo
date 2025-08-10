import QuoteQR from 'modules/FitnessFun/components/QuoteQR';
import Sidebar from 'modules/TabletApp/components/Sidebar';
import SoulscapeTravelCard from 'modules/TravelSafe/components/SoulscapeTravelCard';
import React from 'react';

import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import RenewMeWatermark from 'src/components/renewme-watermark';
import ContentHeader from 'src/components/tablet/content-header';
import { cn } from 'src/lib/utils';

const FlightStatus: React.FC = () => {
  const router = useRouter();
  const isPremium = router.pathname.includes('/tablet-app-premium');
  const pageType = router.pathname.includes('soulscape') ? 'soulscape' : 'renewme';

  return (
    <section className="flex w-screen font-['Gilroy'] text-zinc-700 relative">
      <RenewMeWatermark />
      <Sidebar isPremium={isPremium} type={pageType} />
      <main
        className={cn(
          'ml-4 md:ml-[calc(280px+2rem)] py-4 w-[calc(100%-2rem)] mr-4 transition-all duration-300 ease-in-out overflow-x-visible'
        )}
      >
        <ContentHeader
          title="Flight Status"
          description="Stay updated on your flight's status effortlessly with our flight status checker."
          iconSrc={`${imageDomainUrl}/FlightStatus/flight-status-icon.png`}
          descriptionClassName="max-w-[23.5rem]"
        />

        <section className="w-full mb-4">
          <SoulscapeTravelCard
            centerImage
            decorationImage={`${imageDomainUrl}/FlightStatus/clouds.svg`}
            cardClassName="h-full"
            title="Flight Status"
            description="Track real-time flight status, departures and arrivals, airport delays, and airport information using FlightStats Global Flight Tracker."
            buttonText="Read More"
            image={`${imageDomainUrl}/FlightStatus/flight-status.png`}
            link="/flight-status"
          />
        </section>

        <QuoteQR quote="Everywhere you go, be balanced." />
      </main>
    </section>
  );
};

export default FlightStatus;
