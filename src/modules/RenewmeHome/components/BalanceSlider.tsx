import React, { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import Image from 'next/image';
import Link from 'next/link';

import { fetchMeditationAlbums } from 'src/services/meditation-albums-service';

import HomeTitle from '../common/HomeTitle';
import { MeditationAlbum } from '../types';

interface BalanceSliderProps {
  swiperRef: React.MutableRefObject<SwiperType | null>;
}

const BalanceSlider = ({ swiperRef }: BalanceSliderProps) => {
  const [balanceData, setBalanceData] = useState<MeditationAlbum[]>([]);

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
      <HomeTitle text="Balance" link="balance" swiperRef={swiperRef} />

      <div className="mt-[39px]">
        <Swiper
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay]}
          spaceBetween={34}
          direction="horizontal"
          slidesPerView={2}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 34 },
            1024: { slidesPerView: 3, spaceBetween: 34 },
            1440: { slidesPerView: 3, spaceBetween: 34 },
          }}
          className="w-full"
        >
          {balanceData.map((data, index) => (
            <SwiperSlide key={index}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BalanceSlider;
