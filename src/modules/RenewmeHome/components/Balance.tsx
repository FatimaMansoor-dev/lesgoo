import React, { useEffect, useState } from 'react';
import type { Swiper } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
import { fetchMeditationAlbums } from 'src/services/meditation-albums-service';
import HomeTitle from '../common/HomeTitle';
import { MeditationAlbum } from '../types';

interface BalanceProps {
  swiperRef: React.MutableRefObject<Swiper | null>;
}

const Balance = ({ swiperRef }: BalanceProps) => {
  const [balanceData, setBalanceData] = useState<MeditationAlbum[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchMeditationAlbums('RenewMe', 'Living in Balance', 1, 10);
      if ('collection' in result) {
        setBalanceData(result.collection);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="gap-10">
      <HomeTitle text="Balance" link="balance" swiperRef={swiperRef} />

      <div className="mt-10">
        {/* Responsive grid: 1 col on xs, 2 cols on sm, 3 cols on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {balanceData.map((data, index) => (
            <Link href={`/${encodeURIComponent(data.slug)}`} key={index}>
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={data.coverSmallLandscape}
                  alt={`Balance ${data.title}`}
                  loading="lazy"
                  fill
                  unoptimized
                  className="rounded-2xl object-cover"
                />
              </div>
              <p className="mt-4 leading-snug text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                {data.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Balance;
