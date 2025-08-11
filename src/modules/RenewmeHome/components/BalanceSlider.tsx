import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from 'src/components/ui/carousel';
import { fetchMeditationAlbums } from 'src/services/meditation-albums-service';

import HomeTitle from '../common/HomeTitle';
import { MeditationAlbum } from '../types';

interface BalanceSliderProps {
  carouselApi?: CarouselApi;
}

const BalanceSlider = ({ carouselApi }: BalanceSliderProps) => {
  const [balanceData, setBalanceData] = useState<MeditationAlbum[]>([]);
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchMeditationAlbums('RenewMe', 'Living in Balance', 1, 10);
      if ('collection' in result) {
        setBalanceData(result.collection);
      }
      // Pagination can be added here if needed
    }
    fetchData();
  }, []);

  return (
    <div className="gap-[39px]">
      <HomeTitle text="Balance" link="user/renewme-home/balance" carouselApi={api} />

      <div className="mt-[39px]">
       <Carousel
  opts={{
    align: 'start',
    loop: false,
    dragFree: false, // disable free dragging
    watchDrag: false, // prevent any dragging
  }}
  setApi={setApi}
  className="w-full overflow-hidden" // ensure no horizontal scroll bar appears
>
  <CarouselContent className="-ml-2 pointer-events-none"> {/* prevent mouse/touch drag */}
    {balanceData.map((data, index) => (
      <CarouselItem
        key={index}
        className="pl-2 basis-1/2 md:basis-1/2 lg:basis-[calc(100%/3.5)] pointer-events-auto" // keep 3.5 items in a row
      >
        <Link href={`/${encodeURIComponent(data.slug)}`}>
          <div className="relative w-full h-[270px]">
            <Image
              src={data.coverSmallLandscape}
              alt={`Balance ${data.title}`}
              loading="lazy"
              fill
              unoptimized
              className="rounded-2xl object-cover"
            />
          </div>
          <p className="mt-[15px] leading-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] text-white">
            {data.title}
          </p>
        </Link>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>


      </div>
    </div>
  );
};

export default BalanceSlider;
