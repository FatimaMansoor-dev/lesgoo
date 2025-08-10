import { useEffect, useState } from 'react';

import { fetchTracks } from 'src/services/meditation-albums-service';

import { Play } from 'lucide-react';

import { TrackItem } from '../types';

const Sleep = () => {
  const [sleepData, setSleepData] = useState<TrackItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchTracks('RenewMe', 'Bedtime Stories', 1, 6);
      if (result.collection) {
        setSleepData(result.collection as TrackItem[]);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mt-8 w-full">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4 px-1 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">Sleep</h2>
        <button className="text-sm sm:text-base text-white/70 hover:text-white transition">
          See All
        </button>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {sleepData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center min-h-[100px] backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 text-white shadow-md hover:bg-white/15 transition cursor-pointer"
          >
            <div className="flex items-center gap-3">
              {/* Play Button */}
              <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition shrink-0">
                <Play size={16} />
              </button>

              {/* Title & Subtitle */}
              <div className="flex flex-col overflow-hidden">
                <h3 className="text-sm sm:text-base font-medium truncate">
                  {item.title ?? 'Untitled'}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sleep;
