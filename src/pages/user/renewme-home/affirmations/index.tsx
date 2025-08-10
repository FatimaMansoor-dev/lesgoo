import Layout from 'modules/RenewmeHome/layout';
import { useEffect, useRef, useState } from 'react';
import type { Swiper } from 'swiper';

import { useAuthStore } from 'shared/store/Auth';

import AffirmationsComp from 'src/modules/RenewmeHome/components/AffirmationsComp';
import { MeditationAlbum, TrackItem } from 'src/modules/RenewmeHome/types';
import { fetchTracks } from 'src/services/meditation-albums-service';

const Affirmations = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [affirmationsData, setAffirmationsData] = useState<TrackItem[]>([]);
  const { user } = useAuthStore();

  useEffect(() => {
    async function fetchData() {
      const result = await fetchTracks('RenewMe', 'Affirmations', 1, 10);
      if (result.collection) {
        const transformedData: TrackItem[] = result.collection.map((item: MeditationAlbum) => ({
          premium: item.premium || false,
          preview: item.preview || null,
          title: item.title,
          album: { title: null },
          url: item.preview || '',
        }));
        setAffirmationsData(transformedData);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* background layer behind all content */}
      <div
        className="absolute inset-0 bg-[url('/assets/Renewme-home/Affirmation.png')] bg-cover bg-center bg-fixed -z-10"
        aria-hidden="true"
      />

      {/* foreground content */}
      <Layout>
        <div className="relative z-10 sm:mt-[48px] mt-[27px] xl:pr-[158px] lg:pr-[44px] lg:px-0 sm:px-[20px] px-[30px] xl:pl-[116px] bg-transparent">
          <AffirmationsComp data={affirmationsData} swiperRef={swiperRef} user={user} />
        </div>
      </Layout>
    </div>
  );
};

export default Affirmations;
