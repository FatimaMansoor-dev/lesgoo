import QuoteQR from 'modules/TabletApp/components/QuoteQR';
import Sidebar from 'modules/TabletApp/components/Sidebar';
import SoulscapeBanner from 'modules/TabletApp/components/SoulscapeBanner';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import ContentHeader from 'src/components/tablet/content-header';
import { cn } from 'src/lib/utils';

const TravelTips: React.FC = () => {
  const router = useRouter();

  // Check if isPremium is true by checking if /tablet-app-premium includes in the pathname, dont use ==, just find if there is a match
  const isPremium = router.pathname.includes('/tablet-app-premium');

  // Check if renewme or soulscape is included in the pathname, dont use ==, just find if there is a match
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
        {/* Banner */}
        <SoulscapeBanner />

        <ContentHeader
          iconSrc={`${imageDomainUrl}/TabletApp/Icons/travel-tips-icon.svg`}
          iconAlt="Trivia Tips Icon"
          title="Travel Tips"
          description="Streamline your travels and discover packing tips for ease and peace of mind!"
          descriptionClassName="max-w-full"
          spacerClassname="w-[12%]"
        />

        {/* 1st Row */}
        <section className="w-full flex gap-6 mb-4">
          <Link
            href="/tablet-app-premium-soulscape/travel-tips/guests-on-the-go"
            className="border-[2px] border-zinc-200 p-6 rounded-3xl flex gap-6 items-center bg-white basis-full drop-shadow-sm cursor-pointer"
          >
            <Image
              className="w-20"
              src={`${imageDomainUrl}/TravelTips/Seal/guests-on-the-go.png`}
              alt="Guests on the Go"
              width={400}
              height={400}
            />
            <div>
              <h1 className="mb-2 font-semibold text-[1.25rem]">Guests on the Go</h1>
              <p className="max-w-md font-medium text-[1.125rem] text-[#505050]">
                You deserve to feel relaxed at your hotel! Here are some travel tips for your next
                stay.
              </p>
            </div>
          </Link>
          <Link
            href="/tablet-app-premium-soulscape/travel-tips/cruising-on-the-go"
            className="border-[2px] border-zinc-200 p-6 rounded-3xl flex gap-6 items-center bg-white basis-full drop-shadow-sm cursor-pointer"
          >
            <Image
              className="w-20"
              src={`${imageDomainUrl}/TravelTips/Seal/cruising-on-the-go.png`}
              alt="Cruising on the Go"
              width={400}
              height={400}
            />
            <div>
              <h1 className="mb-2 font-semibold text-[1.25rem]">Cruising on the Go</h1>
              <p className="max-w-md font-medium text-[1.125rem] text-[#505050]">
                Cruising is better when you are balanced! Here are some travel tips for your next
                voyage.
              </p>
            </div>
          </Link>
        </section>

        {/* 2nd Row */}
        <section className="w-full flex justify-center">
          <section className="w-full mb-6 max-w-[28.1875rem]">
            <Link
              href="/tablet-app-premium-soulscape/travel-tips/jet-setter-on-the-go"
              className="border-[2px] border-zinc-200 p-6 rounded-3xl flex gap-6 items-center bg-white basis-full drop-shadow-sm cursor-pointer"
            >
              <Image
                className="w-20"
                src={`${imageDomainUrl}/TravelTips/Seal/jet-setter-on-the-go.png`}
                alt="Jet Setter on the Go"
                width={400}
                height={400}
              />
              <div>
                <h1 className="mb-2 font-semibold text-[1.25rem]">Jet-Setter on the Go</h1>
                <p className="max-w-md font-medium text-[1.125rem] text-[#505050]">
                  Experience peace on your next flight! Here are some travel tips for your upcoming
                  journey.
                </p>
              </div>
            </Link>
          </section>
        </section>

        <QuoteQR quote="Everywhere you go, be balanced." />
      </main>
    </section>
  );
};

export default TravelTips;
