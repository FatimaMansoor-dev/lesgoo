import { useEffect, useState } from 'react';

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from 'src/components/ui/carousel';
import { fetchTracks } from 'src/services/meditation-albums-service';

import HomeTitle from '../common/HomeTitle';
import Track from '../common/Track';
import { MeditationAlbum, TrackItem } from '../types';

const Affirmations = () => {
  const [affirmationsData, setAffirmationsData] = useState<TrackItem[]>([]);
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchTracks('RenewMe', 'Affirmations', 1, 20);
        if (result.collection) {
          setAffirmationsData(
            (result.collection as MeditationAlbum[]).map((item: MeditationAlbum) => ({
              premium: item.premium || false,
              preview: item.preview || null,
              title: item.title,
              album: { title: null },
              url: item.preview || '',
            }))
          );
        }
      } catch (error) {
        // Optionally handle error state
      }
    }
    fetchData();
  }, []);

  // Group into chunks of 6 (3 cols × 2 rows)
  const chunkedData = [];
  for (let i = 0; i < affirmationsData.length; i += 6) {
    chunkedData.push(affirmationsData.slice(i, i + 6));
  }

  return (
    <div className="gap-[39px] mt-8">
      <HomeTitle text="Affirmations" link="user/renewme-home/affirmations" carouselApi={api} />

      <div className="mt-[39px] overflow-hidden">
        <Carousel
          opts={{ align: 'start', loop: false, dragFree: false }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-2 touch-none select-none">
            {chunkedData.map((group, groupIndex) => (
              <CarouselItem key={groupIndex} className="pl-2 basis-full lg:basis-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.map((item, idx) => (
                    <Track
                      item={item}
                      needControls={false}
                      needVolumes={false}
                      styleType="minimal"
                    />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Affirmations;
