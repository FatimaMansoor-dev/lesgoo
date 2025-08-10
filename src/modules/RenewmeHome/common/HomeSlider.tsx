import SubscriptionModal from 'modules/Subscription/components/SubscriptionModal';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import { User } from 'src/types/user';

import Track from './Track';

interface HomeSliderProps {
  data: Array<{
    premium: boolean;
    preview: string | null;
    title: string | null;
    album: {
      title: string | null;
    };
    url?: string;
  }>;
  swiperRef: React.MutableRefObject<SwiperType | null>;
  user?: User | null;
}

const HomeSlider = ({ data, swiperRef, user }: HomeSliderProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const groupItems = (array: HomeSliderProps['data'] = []) => {
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
    <>
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
                  <Track
                    item={item}
                    key={itemIndex}
                    needControls={false}
                    needVolumes={false}
                    classNames="slider"
                    subscriptionStatus={user?.subscriptionStatus || ''}
                    onLock={handleLock}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Modal can be added here when needed */}
      <SubscriptionModal
        isSubscriptionModalOpen={modalOpen}
        setIsSubscriptionModalOpen={setModalOpen}
      />
    </>
  );
};

export default HomeSlider;
