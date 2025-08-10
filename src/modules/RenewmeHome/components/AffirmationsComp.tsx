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
  const [modalOpen, setModalOpen] = useState(false);

  const handleLock = () => {
    setModalOpen(true);
  };

  return (
    <AuthenticatedRoute>
      <div className="mt-[32px] sm:mt-[48px] lg:mt-[54px] block w-full">
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4">
          <div className="w-full space-y-4 sm:space-y-5 lg:space-y-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-3xl mx-auto rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 bg-black/20 backdrop-blur-md shadow-xl border border-white/10 hover:bg-black/30 hover:border-white/20 transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl"
              >
                <Track
                  item={item}
                  needControls={true}
                  needVolumes={false}
                  subscriptionStatus={user?.subscriptionStatus || ''}
                  onLock={handleLock}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <SubscriptionModal
        isSubscriptionModalOpen={modalOpen}
        setIsSubscriptionModalOpen={setModalOpen}
      />
    </AuthenticatedRoute>
  );
};

export default AffirmationsComp;
