import QuoteQR from 'modules/TabletApp/components/QuoteQR';
import Sidebar from 'modules/TabletApp/components/Sidebar';
import React from 'react';

import { useRouter } from 'next/router';

import ContentHeader from 'src/components/tablet/content-header';
import { cn } from 'src/lib/utils';

import { Loader2 } from 'lucide-react';

import { SoulscapeTravelCardItemType } from '../constants/travel-safe-items';

const SoulscapeTravelCardItem: React.FC<{ item?: SoulscapeTravelCardItemType }> = ({ item }) => {
  const router = useRouter();

  const isPremium = router.pathname.includes('/tablet-app-premium');
  const pageType = router.pathname.includes('soulscape') ? 'soulscape' : 'renewme';

  if (!item) {
    return (
      <section className="flex w-screen items-center justify-center font-['Gilroy'] text-[#00C0C5]">
        <Loader2 className="w-12 h-12 animate-spin" />
      </section>
    );
  }

  return (
    <section className="flex w-screen font-['Gilroy'] text-zinc-700 relative">
      {/* <RenewMeWatermark /> */}
      <Sidebar isPremium={isPremium} type={pageType} />
      <main
        className={cn(
          'ml-4 md:ml-[calc(280px+2rem)] py-4 w-[calc(100%-2rem)] mr-4 transition-all duration-300 ease-in-out overflow-x-visible'
        )}
      >
        <ContentHeader
          showBackButton
          title={item.title}
          description={item.description || ''}
          descriptionClassName={item.descriptionClassName}
          className="mb-4"
          iconSrc={item.iconSrc}
          iconAlt={item.iconAlt}
        />

        <section className="w-full h-[calc(100vh-300px)] min-h-[400px] mb-4">
          <iframe
            src={item.url}
            title={item.title}
            className="w-full h-full border-2 border-[#00C0C5] rounded-2xl"
            allowFullScreen
          />
        </section>
        <QuoteQR quote={item.quote} quoteClassName={item.quoteClassName} />
      </main>
    </section>
  );
};

export default SoulscapeTravelCardItem;
