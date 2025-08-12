// MusicComp.tsx
import SubscriptionModal from 'modules/Subscription/components/SubscriptionModal';
import React, { useState, useMemo, useEffect } from 'react';

import { User } from 'src/types/user';

import Track from '../common/Track';
import Pagination from '../common/Pagination';

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
  // Server-side pagination support (optional)
  serverSide?: boolean;
  totalCount?: number; // total number of audios (from API metadata)
  onPageChange?: (page: number) => void; // called when serverSide=true and page changes
  swiperRef?: React.MutableRefObject<any>;
  user?: User | null;
}

const MusicComp = ({
  data = [],
  serverSide = false,
  totalCount,
  onPageChange,
  swiperRef,
  user,
}: MusicCompProps) => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 10;

  // Compute total pages from totalCount (server) or data length (client)
  const totalPages = useMemo(() => {
    const base = typeof totalCount === 'number' ? totalCount : data.length;
    return Math.max(1, Math.ceil(base / limit));
  }, [totalCount, data.length, limit]);

  // Notify parent when page changes in server-side mode
  useEffect(() => {
    if (serverSide && typeof onPageChange === 'function') {
      onPageChange(currentPage);
    }
  }, [currentPage, serverSide, onPageChange]);

  // Reset page if it becomes invalid (data/count shrinks)
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * limit;
  const paginatedData = useMemo(
    () => (serverSide ? data : data.slice(startIndex, startIndex + limit)),
    [data, serverSide, startIndex, limit]
  );

  return (
    <>
      <div className="mt-[32px] sm:mt-[48px] lg:mt-[54px] block w-full">
        <div className="flex flex-col items-start justify-center w-full max-w-7xl mx-auto px-4">
           <h1
  className="text-[40px] font-semibold text-white leading-[48px] mb-8 ml-4 font-urbanist"
>Music
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

export default MusicComp;
