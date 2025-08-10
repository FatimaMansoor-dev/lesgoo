import Layout from 'modules/RenewmeHome/layout';
import { useEffect, useRef, useState } from 'react';
import type { Swiper } from 'swiper';

import { useAuthStore } from 'shared/store/Auth';

import MusicComp from 'src/modules/RenewmeHome/components/MusicComp';
import { MeditationAlbum } from 'src/modules/RenewmeHome/types';
import { fetchMusics } from 'src/services/meditation-albums-service';

interface TrackItem {
  premium: boolean;
  preview: string | null;
  title: string | null;
  album: {
    title: string | null;
  };
  url?: string;
}

const Music = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [musicData, setMusicData] = useState<TrackItem[]>([]);
  const { user } = useAuthStore();

  useEffect(() => {
    async function fetchData() {
      const result = await fetchMusics('RenewMe', 1, 10);
      if (result.collection) {
        setMusicData(
          (result.collection as MeditationAlbum[]).map((item: MeditationAlbum) => ({
            premium: item.premium || false,
            preview: item.preview || null,
            title: item.title,
            album: { title: null },
            url: item.preview || '',
          }))
        );
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-[url(/assets/Renewme-home/Music.png)] bg-cover bg-center bg-fixed min-h-screen">
      <Layout>
        <div className="sm:mt-[48px] mt-[27px] xl:pr-[158px] lg:pr-[44px] lg:px-0 sm:px-[20px] px-[30px] xl:pl-[116px]">
          <MusicComp data={musicData} swiperRef={swiperRef} user={user} />
        </div>
      </Layout>
    </div>
  );
};

export default Music;
