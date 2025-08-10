import QuoteQR from 'modules/TabletApp/components/QuoteQR';
import Sidebar from 'modules/TabletApp/components/Sidebar';
import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from 'src/components/ui/button';
import { cn } from 'src/lib/utils';

import { ChevronRight } from 'lucide-react';

import BookATripDisclaimerDialog from './components/BookATripDisclaimerDialog';

interface TripItem {
  name: string;
  link: string;
}

interface TripItems {
  description: string;
  list: TripItem[];
}

interface TripSectionProps {
  title: string;
  description: string;
  items: TripItems;
}

const TripSection: React.FC<TripSectionProps> = ({ title, description, items }) => (
  <section className="w-full mb-6">
    <p className="max-w-xl font-medium text-sm md:text-base text-zinc-500 mb-2">{title}</p>
    <h1 className="text-2xl md:text-3xl font-bold mb-2">{description}</h1>
    <p className="max-w-sm font-medium text-sm md:text-base text-zinc-500 mb-4">
      {items.description}
    </p>
    <div className="flex flex-col md:flex-row flex-wrap gap-4">
      {items.list.map((item: TripItem, index: number) => (
        <Link
          key={index}
          href={item.link}
          className="basis-full md:basis-[calc(50%-0.5rem)] p-6 border-[2px] border-zinc-200 rounded-3xl flex justify-between items-center cursor-pointer bg-white hover:bg-zinc-100/50 transition-all duration-200"
        >
          <p className="text-xl font-bold">{item.name}</p>
          <div className="flex gap-4 items-center">
            <Button className="bg-[#00CACB] hover:bg-[#2aa8a8]">Show and Save</Button>
            <ChevronRight size={24} />
          </div>
        </Link>
      ))}
    </div>
  </section>
);

const BookATrip: React.FC = () => {
  const router = useRouter();
  const isPremium = router.pathname.includes('/tablet-app-premium');
  const pageType = router.pathname.includes('soulscape') ? 'soulscape' : 'renewme';
  const baseUrl = router.pathname;

  const shopTravelItems: TripItems = {
    description: 'Simplify your travel planning with hassle-free bookings for your next adventure.',
    list: [
      { name: 'Expedia', link: `${baseUrl}/expedia` },
      { name: 'Travelocity', link: `${baseUrl}/travelocity` },
      { name: 'Tripadvisor', link: `${baseUrl}/tripadvisor` },
      { name: 'Travel + Leisure', link: `${baseUrl}/travel-and-leisure` },
      { name: 'Booking.com', link: `${baseUrl}/booking-com` },
      { name: 'Hopper', link: `${baseUrl}/hopper` },
      { name: 'Hotel Tonight', link: `${baseUrl}/hotel-tonight` },
      { name: 'airbnb', link: `${baseUrl}/airbnb` },
    ],
  };

  const findADealItems: TripItems = {
    description:
      'Discover hassle-free airline reservations and seamless planning at your fingertips.',
    list: [
      { name: 'Delta', link: `${baseUrl}/delta` },
      { name: 'American Airlines', link: `${baseUrl}/american-airlines` },
      { name: 'Virgin Atlantic', link: `${baseUrl}/virgin-atlantic` },
      { name: 'Spirit', link: `${baseUrl}/spirit` },
      { name: 'Southwest', link: `${baseUrl}/southwest` },
      { name: 'British Airways', link: `${baseUrl}/british-airways` },
      { name: 'United', link: `${baseUrl}/united` },
      { name: 'Jetblue', link: `${baseUrl}/jetblue` },
    ],
  };

  return (
    <section className="flex w-screen font-['Gilroy'] text-zinc-700 relative">
      {/* <RenewMeWatermark /> */}
      <BookATripDisclaimerDialog />
      <Sidebar isPremium={isPremium} type={pageType} />
      <main
        className={cn(
          'ml-4 md:ml-[calc(280px+2rem)] py-4 w-[calc(100%-2rem)] mr-4 transition-all duration-300 ease-in-out overflow-x-visible'
        )}
      >
        <section className="w-full mb-6">
          <p className="max-w-xl font-medium text-sm md:text-base text-zinc-500 mb-2">
            Book an Adventure
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Spend less, so you can enjoy more!
          </h1>
        </section>

        <TripSection title="Book a Trip" description="Shop Travel" items={shopTravelItems} />
        <TripSection title="Book an Airline" description="Find a Deal" items={findADealItems} />

        <QuoteQR quote="Everywhere you go, be balanced." quoteClassName="max-w-xl" />
      </main>
    </section>
  );
};

export default BookATrip;
