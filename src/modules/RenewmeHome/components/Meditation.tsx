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

const Meditation = () => {
  const [meditationData, setMeditationData] = useState<TrackItem[]>([]);
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchTracks('RenewMe', 'Meditations', 1, 20);
      if (result.collection) {
        setMeditationData(
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

  // Group into chunks of 6 (3 cols × 2 rows)
  const chunkedData = [];
  for (let i = 0; i < meditationData.length; i += 6) {
    chunkedData.push(meditationData.slice(i, i + 6));
  }

  return (
    <div className="gap-[39px] mt-8">
      {/* Section Header */}
      <HomeTitle text="Meditation" link="user/renewme-home/meditation" carouselApi={api} />

      {/* Carousel */}
      <div className="mt-[39px] overflow-hidden">
        <Carousel
          opts={{
            align: 'start',
            loop: false,
            dragFree: false,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-2 touch-none select-none">
            {chunkedData.map((group, groupIndex) => (
              <CarouselItem key={groupIndex} className="pl-2 basis-full lg:basis-full">
                {/* Grid inside each slide */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 w-full h-20 backdrop-blur-lg bg-black/20 border border-white/20 rounded-2xl px-4 py-4 text-white shadow-md hover:bg-black/30 transition cursor-pointer"
                    >
                      <Track
                        item={item}
                        needControls={false}
                        needVolumes={false}
                        classNames="sliderClass"
                      />
                    </div>
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

export default Meditation;
