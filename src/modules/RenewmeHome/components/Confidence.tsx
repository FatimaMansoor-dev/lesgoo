import { useEffect, useState } from 'react';
import { fetchTracks } from 'src/services/meditation-albums-service';
import { TrackItem } from '../types';
import { Play } from 'lucide-react';

const Confidence = () => {
  const [confidencesData, setConfidencesData] = useState<TrackItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchTracks('RenewMe', 'Boost Confidence', 1, 6);
      if (result.collection) {
        setConfidencesData(result.collection as TrackItem[]);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mt-8">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Confidence</h2>
        <button className="text-sm text-white/70 hover:text-white transition">See All</button>
      </div>

      {/* Fully responsive 3-column grid on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {confidencesData.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white shadow-md hover:bg-white/15 transition cursor-pointer"
          >
            {/* Play button */}
            <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition">
              <Play size={16} />
            </button>

            {/* Text */}
            <div className="flex flex-col overflow-hidden">
              <h3 className="text-sm font-medium truncate">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Confidence;
