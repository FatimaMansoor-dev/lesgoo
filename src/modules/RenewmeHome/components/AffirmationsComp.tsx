import SubscriptionModal from 'modules/Subscription/components/SubscriptionModal';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import { User } from 'src/types/user';

import Track from '../common/Track';
import { TrackItem } from '../types';
import AuthenticatedRoute from 'shared/components/AuthenticatedRoute';

interface AffirmationsCompProps {
  data: TrackItem[];
  swiperRef: React.MutableRefObject<SwiperType | null>;
  user?: User | null;
}

const AffirmationsComp = ({ data, swiperRef, user }: AffirmationsCompProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const groupItems = (array: TrackItem[] = []) => {
    const grouped = [];
    for (let i = 0; i < array.length; i += 2) {
      grouped.push(array.slice(i, i + 2));
    }
    return grouped;
  };

  const groupedItems = groupItems(data);

  const handleLock = () => {
    setModalOpen(true);
  };

  return (
    <AuthenticatedRoute>
      <div className="mt-[54px] block">
        <Swiper
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={22}
          slidesPerView={1}
          autoplay={{
            delay: 1000,
          }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
            1440: { slidesPerView: 3 },
          }}
        >
          {groupedItems.map((group, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <div className="flex-col flex gap-[22px] w-full">
                {group.map((item, itemIndex) => (
                  // wrapper gives the long glass-card look
                  <div
                    key={itemIndex}
                    className="rounded-2xl p-4 bg-transparent backdrop-blur-md shadow-lg border border-white/20 w-full min-h-[80px] flex items-center"
                  >
                    <Track
                      item={item}
                      needControls={false}
                      needVolumes={false}
                      classNames="slider"
                      subscriptionStatus={user?.subscriptionStatus || ''}
                      onLock={handleLock}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <SubscriptionModal
        isSubscriptionModalOpen={modalOpen}
        setIsSubscriptionModalOpen={setModalOpen}
      />
    </AuthenticatedRoute>
  );
};

export default AffirmationsComp;
