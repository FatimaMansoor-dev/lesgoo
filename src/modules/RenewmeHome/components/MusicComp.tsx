// MusicComp.tsx
import SubscriptionModal from 'modules/Subscription/components/SubscriptionModal';
import React, { useState } from 'react';

import { User } from 'src/types/user';

import Track from '../common/Track';

interface MusicCompProps {
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

const MusicComp = ({ data, swiperRef, user }: MusicCompProps) => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  return (
    <>
      <div className="mt-[32px] sm:mt-[48px] lg:mt-[54px] block w-full">
        {/* Match Meditation layout: wider outer container, left-aligned heading */}
        <div className="flex flex-col items-start justify-center w-full max-w-7xl mx-auto px-4">
          <h1 className="w-full text-left text-2xl sm:text-3xl font-medium tracking-normal text-white mb-6">
            Music
          </h1>

          <div className="w-full space-y-4 sm:space-y-5 lg:space-y-6">
            {data.map((item, index) => (
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

export default MusicComp;
