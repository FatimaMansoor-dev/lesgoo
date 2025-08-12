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
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchMeditationAlbums('RenewMe', 'Living in Balance', 1, 10);
      if ('collection' in result) {
        setBalanceData(result.collection);
      }
    }
    fetchData();
  }, []);

  // detect mobile (match Tailwind 'sm' breakpoint: 640px)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 640px)');

    const handle = (ev: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(ev.matches);
    };

    // initial
    handle(mq);

    // listen
    if (mq.addEventListener) {
      mq.addEventListener('change', handle as any);
      return () => mq.removeEventListener('change', handle as any);
    } else {
      // safari fallback
      mq.addListener(handle as any);
      return () => mq.removeListener(handle as any);
    }
  }, []);

  return (
    <div className="gap-[39px]">
      <HomeTitle text="Balance" link="user/renewme-home/balance" carouselApi={api} />

      <div className="mt-[39px]">
        <Carousel
          opts={{
            align: 'start',
            loop: false,
            // keep dragFree false (we want normal snap behavior)
            dragFree: false,
            // watchDrag controls whether dragging/swiping is observed —
            // enable it only on mobile so touch swipes work there
            watchDrag: isMobile,
          }}
          setApi={setApi}
          className="w-full overflow-hidden"
        >
          {/* when not mobile, block pointer events so desktop mouse can't drag */}
          <CarouselContent
            className={`-ml-2 ${isMobile ? 'pointer-events-auto' : 'pointer-events-none'}`}
            // touch-action: allow horizontal panning on mobile to improve swipe UX
            style={{ touchAction: isMobile ? 'pan-x' : 'auto' }}
          >
            {balanceData.map((data, index) => (
              <CarouselItem
                key={index}
                // added pr-3 to create space between items, kept pl-2 as before
                className="pl-2 pr-3 basis-1/2 md:basis-1/2 lg:basis-[calc(100%/3.5)] pointer-events-auto"
              >
                <Link href={`/${encodeURIComponent(data.slug)}`}>
                  {/* reduced visual width slightly and centered (w-[95%] + mx-auto)
                      this makes images a little narrower and creates space on each side */}
                  <div className="relative w-[95%] mx-auto h-[270px]">
                    <Image
                      src={data.coverSmallLandscape}
                      alt={`Balance ${data.title}`}
                      loading="lazy"
                      fill
                      unoptimized
                      className="rounded-2xl object-cover"
                    />
                  </div>
                  {/* Title font changed to Urbanist 400 with exact size/line-height you gave */}
                  <p
                    style={{
                      fontFamily: 'Urbanist, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      color: 'rgb(255, 255, 255)',
                      fontSize: '24px',
                      lineHeight: '29px',
                      marginTop: '15px',
                      // preserve text scaling behavior if needed (optional)
                    }}
                  >
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
