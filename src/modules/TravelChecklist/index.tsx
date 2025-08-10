import QuoteQR from 'modules/TabletApp/components/QuoteQR';
import Sidebar from 'modules/TabletApp/components/Sidebar';
import SoulscapeBanner from 'modules/TabletApp/components/SoulscapeBanner';
import React from 'react';

import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import ContentHeader from 'src/components/tablet/content-header';
import { cn } from 'src/lib/utils';

import ChecklistSection from './components/ChecklistSection';
import { travelChecklists } from './constants/travel-checklists';

const TravelChecklist: React.FC = () => {
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
          title="Travel Checklist"
          description="Plan on stress-free adventures from packing essentials to important documents!"
          iconSrc={`${imageDomainUrl}/TabletApp/Icons/travel-checklist-icon.svg`}
          descriptionClassName="max-w-full"
          spacerClassname="w-[10%]"
        />

        {travelChecklists.map((section, index) => (
          <ChecklistSection key={index} {...section} />
        ))}

        <QuoteQR
          quote="Harmonize the thrill of discovery with the peace of rejuvenation."
          quoteClassName="max-w-md"
        />
      </main>
    </section>
  );
};

export default TravelChecklist;
