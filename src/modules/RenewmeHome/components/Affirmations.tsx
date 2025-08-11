import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from 'src/components/ui/carousel';
import { fetchTracks } from 'src/services/meditation-albums-service';
import HomeTitle from '../common/HomeTitle';
import { TrackItem } from '../types';

const Affirmations = () => {
  const [affirmationsData, setAffirmationsData] = useState<TrackItem[]>([]);
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchTracks('RenewMe', 'Affirmations', 1, 20);
        if (result.collection) {
          setAffirmationsData(result.collection as TrackItem[]);
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
              <CarouselItem
                key={groupIndex}
                className="pl-2 basis-full lg:basis-full"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 w-full h-20 backdrop-blur-lg bg-black/20 border border-white/20 rounded-2xl px-4 py-4 text-white shadow-md hover:bg-black/30 transition cursor-pointer"
                    >
                      <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition">
                        <Play size={16} />
                      </button>
                      <div className="flex flex-col overflow-hidden">
                        <h3 className="text-sm font-medium truncate">
                          {item.title ?? 'Untitled'}
                        </h3>
                        <p className="text-xs text-white/50 truncate">
                          {item.title ?? 'Untitled'}
                        </p>
                      </div>
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

export default Affirmations;
