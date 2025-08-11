// ConfidenceComp.tsx
import SubscriptionModal from 'modules/Subscription/components/SubscriptionModal';
import React, { useState, useMemo, useEffect } from 'react';

import { User } from 'src/types/user';

import Track from '../common/Track';
import Pagination from '../common/Pagination';

interface ConfidenceCompProps {
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

const ConfidenceComp = ({ data = [], swiperRef, user }: ConfidenceCompProps) => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  // Pagination state (client-side)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 100;

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil((data?.length ?? 0) / limit)),
    [data, limit]
  );

  // Ensure currentPage remains valid when data changes
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * limit;
  const paginatedData = useMemo(
    () => (data ? data.slice(startIndex, startIndex + limit) : []),
    [data, startIndex, limit]
  );

  return (
    <>
      <div className="mt-[32px] sm:mt-[48px] lg:mt-[54px] block w-full">
        <div className="flex flex-col items-start justify-center w-full max-w-7xl mx-auto px-4">
          <h1 className="w-full text-left text-2xl sm:text-3xl font-medium tracking-normal text-white mb-6">
            Confidence
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

export default ConfidenceComp;
