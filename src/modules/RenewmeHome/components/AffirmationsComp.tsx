// AffirmationsComp.tsx
import SubscriptionModal from 'modules/Subscription/components/SubscriptionModal';
import React, { useState, useMemo, useEffect } from 'react';

import AuthenticatedRoute from 'shared/components/AuthenticatedRoute';

import { User } from 'src/types/user';

import Track from '../common/Track';
import Pagination from '../common/Pagination';
import { TrackItem } from '../types';

interface AffirmationsCompProps {
  data: TrackItem[];
  serverSide?: boolean;
  totalCount?: number; // total number of audios from API metadata (optional)
  onPageChange?: (page: number) => void; // parent callback when serverSide=true
  swiperRef?: React.MutableRefObject<any>;
  user?: User | null;
}

const AffirmationsComp = ({
  data = [],
  serverSide = false,
  totalCount,
  onPageChange,
  swiperRef,
  user,
}: AffirmationsCompProps) => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  const handleLock = () => {
    setIsSubscriptionModalOpen(true);
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 10;

  const totalPages = useMemo(() => {
    const base = typeof totalCount === 'number' ? totalCount : data.length;
    return Math.max(1, Math.ceil(base / limit));
  }, [totalCount, data.length, limit]);

  // Notify parent when page changes (server-side mode)
  useEffect(() => {
    if (serverSide && typeof onPageChange === 'function') {
      onPageChange(currentPage);
    }
  }, [currentPage, serverSide, onPageChange]);

  // Reset page if it becomes invalid when data/count changes
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * limit;
  const paginatedData = useMemo(
    () => (serverSide ? data : data.slice(startIndex, startIndex + limit)),
    [data, serverSide, startIndex, limit]
  );

  return (
    <AuthenticatedRoute>
      <div className="mt-[32px] sm:mt-[48px] lg:mt-[54px] block w-full">
        <div className="flex flex-col items-start justify-center w-full max-w-7xl mx-auto px-4">
          <h1 className="w-full text-left text-2xl sm:text-3xl font-medium tracking-normal text-white mb-6">
            Affirmations
          </h1>

          <div className="w-full space-y-4 sm:space-y-5 lg:space-y-6">
            {paginatedData.map((item, index) => (
              <Track
                key={`${item.title ?? 'affirmation'}-${startIndex + index}`}
                item={item}
                needControls={true}
                needVolumes={false}
                classNames="default"
                subscriptionStatus={user?.subscriptionStatus || ''}
                onLock={handleLock}
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
    </AuthenticatedRoute>
  );
};

export default AffirmationsComp;
