import QuoteQR from 'modules/FitnessFun/components/QuoteQR';
import Sidebar from 'modules/TabletApp/components/Sidebar';
import SoulscapeBanner from 'modules/TabletApp/components/SoulscapeBanner';
import React from 'react';

import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import ContentHeader from 'src/components/tablet/content-header';
import { cn } from 'src/lib/utils';

import HealthArticleItem from './components/HealthArticle';
import { healthArticles } from './constants/health-articles';

const StayHealthy: React.FC = () => {
  const router = useRouter();
  const isPremium = router.pathname.includes('/tablet-app-premium');
  const pageType = router.pathname.includes('soulscape') ? 'soulscape' : 'renewme';

  return (
    <section className="flex w-screen h-screen font-['Gilroy'] text-zinc-700 relative">
      {/* <RenewMeWatermark /> */}
      <Sidebar isPremium={isPremium} type={pageType} />
      <main
        className={cn(
          'ml-4 md:ml-[calc(280px+2rem)] h-full py-4 w-[calc(100%-2rem)] mr-4 transition-all duration-300 ease-in-out overflow-y-auto flex flex-col'
        )}
      >
        <SoulscapeBanner />

        <ContentHeader
          title="Healthy Mind"
          description="Learn quick and powerful ways to decrease stress and boost wellness!"
          iconSrc={`${imageDomainUrl}/TabletApp/Icons/healthy-mind-icon.svg`}
          descriptionClassName="max-w-full"
          spacerClassname="w-[20%]"
        />

        <section className="w-full flex flex-col md:flex-row gap-4 mb-4">
          {healthArticles.slice(0, 2).map((article, index) => (
            <HealthArticleItem key={index} {...article} />
          ))}
        </section>

        <QuoteQR
          hideQRCode
          quote="Harmonize the thrill of discovery with the peace of rejuvenation."
          quoteClassName="max-w-[380px]"
        />
      </main>
    </section>
  );
};

export default StayHealthy;
