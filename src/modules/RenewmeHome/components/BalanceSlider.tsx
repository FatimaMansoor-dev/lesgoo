import React, { useEffect, useState } from 'react';
import type { Swiper } from 'swiper';
import 'swiper/css';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

import { fetchMeditationAlbums } from 'src/services/meditation-albums-service';
import HomeTitle from 'modules/RenewmeHome/common/HomeTitle';
import { MeditationAlbum } from 'modules/RenewmeHome/types';

interface BalanceSliderProps {
  swiperRef: React.MutableRefObject<Swiper | null>;
}

const BalanceSlider = ({ swiperRef }: BalanceSliderProps) => {
  const [balanceData, setBalanceData] = useState<MeditationAlbum[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchMeditationAlbums('RenewMe', 'Living in Balance', 1, 10);
        console.log('API result in BalanceSlider:', result);

        if (result && 'collection' in result && Array.isArray(result.collection)) {
          const validData = result.collection.filter(
            item => item && typeof item.title === 'string' && item.slug
          );
          console.log('Filtered validData in BalanceSlider:', validData);
          setBalanceData(validData);
        } else {
          console.warn('Unexpected API shape in BalanceSlider:', result);
          setError('Failed to load balance data');
        }
      } catch (err) {
        console.error('Fetch error in BalanceSlider:', err);
        setError('Failed to load balance data');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSwiper = (swiper: Swiper) => {
    swiperRef.current = swiper;
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!balanceData.length) return <div className="text-yellow-400">No Balance items found</div>;

  return (
    <div className="gap-6 px-4 sm:px-6 lg:px-8 -mt-4">
      <HomeTitle text="Balance" link="balance" swiperRef={swiperRef} />

      <div className="mt-6">
        <SwiperComponent
          className="mySwiper"
          style={{ paddingBottom: '20px' }}
          spaceBetween={20}
          slidesPerView={3.5}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1.3 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
          onSwiper={handleSwiper}
        >
          {balanceData.map((data, index) => (
            <SwiperSlide key={data.slug ?? index} className="w-full">
              <Link href={`/${encodeURIComponent(data.slug)}`}>
                <div className="cursor-pointer">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800/10 flex items-center justify-center">
                    <span className="text-white text-sm">Card {index + 1}</span>
                  </div>
                  <p className="mt-4 leading-snug text-center xl:text-lg lg:text-base md:text-sm text-xs">
                    {data.title}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
    </div>
  );
};

export default BalanceSlider;
