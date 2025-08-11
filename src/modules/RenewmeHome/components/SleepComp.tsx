import SubscriptionModal from 'modules/Subscription/components/SubscriptionModal';
import React, { useState, useMemo, useEffect } from 'react';

import { User } from 'src/types/user';

import Track from '../common/Track';
import Pagination from '../common/Pagination';

interface SleepCompProps {
  data: Array<{
    premium: boolean;
    preview: string | null;
    title: string | null;
    album: {
      title: string | null;
    };
    url?: string;
  }>;
  // If you use server-side pagination:
  serverSide?: boolean; // default false => client-side pagination
  totalCount?: number; // total number of audios (from API metadata)
  onPageChange?: (page: number) => void; // called when serverSide=true and page changes
  swiperRef?: React.MutableRefObject<any>;
  user?: User | null;
}

const SleepComp = ({
  data = [],
  serverSide = false,
  totalCount,
  onPageChange,
  swiperRef,
  user,
}: SleepCompProps) => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 100;

  // totalPages: prefer totalCount (server metadata) when provided, otherwise derive from data
  const totalPages = useMemo(() => {
    const base = typeof totalCount === 'number' ? totalCount : data.length;
    return Math.max(1, Math.ceil(base / limit));
  }, [totalCount, data.length, limit]);

  // If server-side mode, notify parent when page changes
  useEffect(() => {
    if (serverSide && typeof onPageChange === 'function') {
      onPageChange(currentPage);
    }
  }, [currentPage, serverSide, onPageChange]);

  // If current page becomes invalid (data/count shrinks), reset to 1
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [currentPage, totalPages]);

  // For client-side mode, slice the data
  const startIndex = (currentPage - 1) * limit;
  const paginatedData = useMemo(
    () => (serverSide ? data : data.slice(startIndex, startIndex + limit)),
    [data, serverSide, startIndex, limit]
  );

  return (
    <>
      <div className="mt-[32px] sm:mt-[48px] lg:mt-[54px] block w-full">
        <div className="flex flex-col items-start justify-center w-full max-w-7xl mx-auto px-4">
          <h1 className="w-full text-left text-2xl sm:text-3xl font-medium tracking-normal text-white mb-6">
            Sleep
          </h1>

          <div className="w-full space-y-4 sm:space-y-5 lg:space-y-6">
            {paginatedData.map((item, index) => (
              <Track
                key={`${item.url ?? item.title ?? 'track'}-${startIndex + index}`}
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

            {paginatedData.length === 0 && (
              <p className="text-sm text-muted-foreground">No audios available.</p>
            )}
          </div>

          <div className="mt-6 flex justify-center w-full">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
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

export default SleepComp;
