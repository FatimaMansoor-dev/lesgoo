
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import type { CarouselApi } from 'src/components/ui/carousel';

import { fetchMeditationAlbums } from 'src/services/meditation-albums-service';
import HomeTitle from '../common/HomeTitle';
import { MeditationAlbum } from '../types';

interface BalanceProps {
  carouselApi?: CarouselApi | null;
}

const Balance = ({ carouselApi }: BalanceProps) => {
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

    <div className="gap-[39px]">
      <HomeTitle text="Balance" link="balance" carouselApi={carouselApi} />


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
