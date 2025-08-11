import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { CarouselApi } from 'src/components/ui/carousel';

import { fetchMeditationAlbums } from 'src/services/meditation-albums-service';
import { MeditationAlbum } from '../types';
import Pagination from '../common/Pagination';

interface BalanceProps {
  carouselApi?: CarouselApi | null;
}

const Balance = ({ carouselApi }: BalanceProps) => {
  const [balanceData, setBalanceData] = useState<MeditationAlbum[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(10);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchMeditationAlbums('RenewMe', 'Living in Balance', currentPage, limit);
      if ('collection' in result) {
        setBalanceData(result.collection);
      }
      if (result.metadata?.totalPages) {
        setTotalPages(result.metadata.totalPages);
      }
    }
    fetchData();
  }, [currentPage, limit]);

  return (
    <div className="gap-[39px]">
      <div className="w-full">
        {/* Heading with matching font style/family */}
        <h2
          className="text-[48px] font-bold text-white leading-[58px] mb-8 ml-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Balance
        </h2>

        {/* Image grid aligned with same margin as heading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 ml-4">
          {balanceData.map((data, index) => (
            <Link
              href={`/${encodeURIComponent(data.slug)}`}
              key={index}
              className="block"
            >
              <div className="flex justify-center md:justify-start">
                <div
                  className="w-[380px] h-[275px] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-200 hover:scale-105"
                >
                  <Image
                    src={data.coverSmallLandscape}
                    alt={`Balance ${data.title}`}
                    loading="lazy"
                    unoptimized
                    width={380}
                    height={275}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="mt-4 text-left text-white text-xl md:text-2xl leading-snug">
  {data.title}
</p>

            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Balance;
