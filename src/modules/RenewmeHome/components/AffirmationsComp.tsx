// AffirmationsComp.tsx
import SubscriptionModal from 'modules/Subscription/components/SubscriptionModal';
import React, { useState } from 'react';

import { User } from 'src/types/user';
import { TrackItem } from '../types';
import Track from '../common/Track';
import AuthenticatedRoute from 'shared/components/AuthenticatedRoute';

interface AffirmationsCompProps {
  data: TrackItem[];
  swiperRef?: React.MutableRefObject<any>;
  user?: User | null;
}

const AffirmationsComp = ({ data, swiperRef, user }: AffirmationsCompProps) => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  const handleLock = () => {
    setIsSubscriptionModalOpen(true);
  };

  return (
    <AuthenticatedRoute>
      <div className="mt-[32px] sm:mt-[48px] lg:mt-[54px] block w-full">
        {/* Match Meditation layout: wider outer container, left-aligned heading */}
        <div className="flex flex-col items-start justify-center w-full max-w-7xl mx-auto px-4">
          <h1 className="w-full text-left text-2xl sm:text-3xl font-medium tracking-normal text-white mb-6">
            Affirmations
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
                  onLock={handleLock}
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
    </AuthenticatedRoute>
  );
};

export default AffirmationsComp;
