import Track from 'modules/RenewmeHome/common/Track';
import Layout from 'modules/RenewmeHome/layout';
import SubscriptionModal from 'modules/Subscription/components/SubscriptionModal';
import { useEffect, useState } from 'react';

import { useAuthStore } from 'shared/store/Auth';

import { fetchAlbum } from 'src/services/meditation-albums-service';

interface Track {
  id: string;
  title: string;
  url: string;
  premium: boolean;
  preview: string | null;
  duration?: string;
  album: {
    title: string | null;
  };
}

interface AlbumData {
  title: string;
  author: string;
  narrator: string;
  totalTracks: number;
  totalDuration: string;
  tracks: Track[];
}

const JourneyToHappiness = () => {
  const [albumData, setAlbumData] = useState<AlbumData | null>(null);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const { user } = useAuthStore();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchAlbum('journey-to-happiness');
        if (result && result.title) {
          setAlbumData({
            title: result.title,
            author: result.author || 'Dr. Lisa Palmer',
            narrator: result.narrator || 'Dr. Lisa Palmer',
            totalTracks: result.tracks?.length || 7,
            totalDuration: result.duration || '67.36 min',
            tracks: (result.tracks || []).map((track: any, idx: number) => ({
              id: String(idx + 1),
              title: track.title,
              url: track.track,
              premium: track.premium || false,
              preview: track.preview || null,
              duration: track.duration,
              album: { title: track.album?.title || result.title },
            })),
          });
        }
      } catch (error) {
        console.error('Error fetching album data:', error);
        setAlbumData({
          title: 'Journey to Happiness',
          author: 'Dr. Lisa Palmer',
          narrator: 'Dr. Lisa Palmer',
          totalTracks: 7,
          totalDuration: '67.36 min',
          tracks: [
            {
              id: '1',
              title: 'Your Life Journey',
              url: '/assets/audio/awakening-balance/your-life-journey.mp3',
              premium: false,
              preview: null,
              duration: '1:58',
              album: { title: 'Journey to Happiness' },
            },
            {
              id: '2',
              title: 'Balance Yin & Yang',
              url: '/assets/audio/awakening-balance/balance-yin-and-yang.mp3',
              premium: false,
              preview: null,
              duration: '1:64',
              album: { title: 'Journey to Happiness' },
            },
            {
              id: '3',
              title: 'Reduce Life Stress',
              url: '/assets/audio/awakening-balance/reduce-life-stress.mp3',
              premium: false,
              preview: null,
              duration: '2:29',
              album: { title: 'Journey to Happiness' },
            },
            {
              id: '4',
              title: 'Speak Your Truth',
              url: '/assets/audio/awakening-balance/speak-your-truth.mp3',
              premium: false,
              preview: null,
              duration: '2:13',
              album: { title: 'Journey to Happiness' },
            },
            {
              id: '5',
              title: 'Detox Your Life',
              url: '/assets/audio/awakening-balance/detox-your-life.mp3',
              premium: false,
              preview: null,
              duration: '3:15',
              album: { title: 'Journey to Happiness' },
            },
            {
              id: '6',
              title: 'Let Go of Perfection',
              url: '/assets/audio/awakening-balance/let-go-of-perfection.mp3',
              premium: false,
              preview: null,
              duration: '2:45',
              album: { title: 'Journey to Happiness' },
            },
            {
              id: '7',
              title: 'Power of Self-Love',
              url: '/assets/audio/awakening-balance/power-of-self-love.mp3',
              premium: false,
              preview: null,
              duration: '3:30',
              album: { title: 'Journey to Happiness' },
            },
          ],
        });
      }
    }
    fetchData();
  }, []);

  if (!albumData) {
    return (
      <div
        className="min-h-screen relative overflow-hidden"
        style={{
          backgroundImage: 'url(assets/Renewme-home/home-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Layout>
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
          </div>
        </Layout>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(assets/Renewme-home/home-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Layout>
        <div className="mt-[32px] sm:mt-[48px] lg:mt-[54px] block w-full">
          <div className="flex flex-col items-start justify-center w-full max-w-7xl mx-auto px-4">
            {/* Decorative dots */}
            <div className="w-full relative mb-8">
              <div className="absolute top-0 left-1/4 w-2 h-2 bg-white rounded-full opacity-60"></div>
              <div className="absolute top-8 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
              <div className="absolute top-16 left-3/4 w-2 h-2 bg-white rounded-full opacity-50"></div>
              <div className="absolute bottom-4 left-1/6 w-1 h-1 bg-white rounded-full opacity-30"></div>
              <div className="absolute bottom-8 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h1 className="font-urbanist font-bold text-white text-[49px] leading-[34px] mb-4">
                    {albumData.title}
                  </h1>
                  <div className="flex items-center gap-6 text-white/80">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white/80"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path
                          d="M12 6v6l4 2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                      <span className="font-urbanist font-medium text-white text-[20px] leading-[24px]">
                        {Math.floor(Number(albumData.totalDuration) / 60)}:{''}
                        {Number(albumData.totalDuration) % 60} min
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="10,8 16,12 10,16" fill="white" stroke="none" />
                      </svg>
                      <span className="font-urbanist font-medium text-white text-[20px] leading-[24px]">
                        {albumData.totalTracks} tracks
                      </span>
                    </div>
                  </div>
                </div>

                {/* Large play button */}
                <div className="flex-shrink-0 ml-8">
                  <button className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                    <svg
                      className="w-12 h-12 sm:w-14 sm:h-14 text-black"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="7,4 20,12 7,20" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Author and Narrator */}
            <div className="w-full mb-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-white/90">
                <div>
                  <span className="font-urbanist text-[20px] font-medium">
                    Author
                  </span>
                  <p className="font-urbanist text-[20px] font-medium">{albumData.author}</p>
                </div>
                <div>
                  <span className="font-urbanist text-[20px] font-medium">
                    Narrator
                  </span>
                  <p className="font-urbanist text-[20px] font-medium">{albumData.narrator}</p>
                </div>
              </div>
            </div>

            {/* Tracks */}
            <div className="w-full space-y-4 sm:space-y-5 lg:space-y-6">
              {albumData.tracks.map((item) => (
                <Track
                  key={item.id}
                  item={item}
                  needControls={true}
                  needVolumes={false}
                  classNames="default"
                  subscriptionStatus={user?.subscriptionStatus || ''}
                  onLock={() => setIsSubscriptionModalOpen(true)}
                />
              ))}
            </div>
          </div>
        </div>

        <SubscriptionModal
          isSubscriptionModalOpen={isSubscriptionModalOpen}
          setIsSubscriptionModalOpen={setIsSubscriptionModalOpen}
        />
      </Layout>
    </div>
  );
};

export default JourneyToHappiness;
