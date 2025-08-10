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
      // Pagination can be added here if needed
    }
    fetchData();
  }, []);

  return (
    <div className="gap-[39px]">
      <HomeTitle text="Balance" link="balance" carouselApi={carouselApi} />

      <div className="mt-[39px]">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-[34px]">
          {balanceData.map((data, index) => (
            <Link href={`/${encodeURIComponent(data.slug)}`} key={index}>
              <div className="relative w-[368px] h-[267px]">
                <Image
                  src={data.coverSmallLandscape}
                  alt={`Balance ${data.title}`}
                  loading="lazy"
                  fill
                  unoptimized
                  className="md:w-[368px] md:h-[267px] w-auto h-auto rounded-2xl object-cover"
                />
              </div>
              <p className="mt-[25px] leading-[29px] xl:text-[24px] lg:text-[20px] md:text-[18px] text-[15px]">
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
