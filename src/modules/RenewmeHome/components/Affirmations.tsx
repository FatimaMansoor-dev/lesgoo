import { useEffect, useState } from 'react';
import { fetchTracks } from 'src/services/meditation-albums-service';
import { TrackItem } from '../types';
import { Play } from 'lucide-react';

const Affirmations = () => {
  const [affirmationsData, setAffirmationsData] = useState<TrackItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchTracks('RenewMe', 'Affirmations', 1, 6);
        if (result.collection) {
          setAffirmationsData(result.collection as TrackItem[]);
        }
      } catch (error) {
        // Optionally handle error state
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mt-8">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Affirmations</h2>
        <button className="text-sm text-white/70 hover:text-white transition">See All</button>
      </div>

      {/* Fully responsive grid - 3 columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {affirmationsData.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white shadow-md hover:bg-white/15 transition cursor-pointer"
          >
            {/* Play button */}
            <button className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 transition">
              <Play size={14} />
            </button>

            {/* Text */}
            <div className="flex flex-col overflow-hidden">
              <h3 className="text-xs font-medium truncate">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Affirmations;
