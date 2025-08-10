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
      <HomeTitle text="Balance" link="balance" carouselApi={api} />

      <div className="mt-[39px]">
        <Carousel
          opts={{
            align: 'start',
            loop: false,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {balanceData.map((data, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/2 lg:basis-1/3">
                <Link href={`/${encodeURIComponent(data.slug)}`}>
                  <div className="relative w-full aspect-[368/267]">
                    <Image
                      src={data.coverSmallLandscape}
                      alt={`Balance ${data.title}`}
                      loading="lazy"
                      fill
                      unoptimized
                      className="rounded-2xl object-cover"
                    />
                  </div>
                  <p className="mt-[25px] leading-[29px] xl:text-[24px] lg:text-[20px] md:text-[18px] text-[15px] text-white">
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
