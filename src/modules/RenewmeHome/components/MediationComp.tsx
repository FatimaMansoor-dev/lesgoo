// MeditationComp.tsx
import SubscriptionModal from 'modules/Subscription/components/SubscriptionModal';
import React, { useState } from 'react';
import { User } from 'src/types/user';
import Track from '../common/Track';

interface MeditationCompProps {
  data: Array<{
    premium: boolean;
    preview: string | null;
    title: string | null;
    album: {
      title: string | null;
    };
    url?: string;
  }>;
  swiperRef?: React.MutableRefObject<any>;
  user?: User | null;
}

const MeditationComp = ({ data, swiperRef, user }: MeditationCompProps) => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  return (
    <>
      <div className="mt-[32px] sm:mt-[48px] lg:mt-[54px] block w-full">
        {/* Match Sleep layout: wider outer container, left-aligned heading */}
        <div className="flex flex-col items-start justify-center w-full max-w-7xl mx-auto px-4">
          <h1 className="w-full text-left text-2xl sm:text-3xl font-medium tracking-normal text-white mb-6">
            Meditation
          </h1>

          <div className="w-full space-y-4 sm:space-y-5 lg:space-y-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-6xl mx-auto rounded-xl sm:rounded-2xl p-6 sm:p-7 lg:p-8 bg-black/20 backdrop-blur-md shadow-xl border border-white/10 transition-all duration-200 ease-in-out"
              >
                <Track
                  item={item}
                  needControls={true}
                  needVolumes={false}
                  classNames="default"
                  subscriptionStatus={user?.subscriptionStatus || ''}
                  onLock={() => {
                    setIsSubscriptionModalOpen(true);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <SubscriptionModal
        isSubscriptionModalOpen={isSubscriptionModalOpen}
        setIsSubscriptionModalOpen={setIsSubscriptionModalOpen}
      />
    </>
  );
};

export default MeditationComp;
