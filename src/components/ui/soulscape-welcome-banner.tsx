import React from 'react';

import { useRouter } from 'next/router';

import { ChevronLeft } from 'lucide-react';

interface SoulscapeWelcomeBannerProps {
  header: string;
}

const SoulscapeWelcomeBanner: React.FC<SoulscapeWelcomeBannerProps> = ({
  header
}) => {
  const router = useRouter();
  return (
    <>
      <div className='flex items-center relative mb-2'>
        <button className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#E1FEFF]">
          <ChevronLeft
            onClick={() => router.push('/soulscape')}
            className="-ml-[2px] text-[#02C1C5]"
          />
        </button>
        <h2 className="text-[#3A3A3B] text-base font-semibold absolute left-1/2 -translate-x-1/2">{header}</h2>
      </div>
    </>
  );
};

export default SoulscapeWelcomeBanner;
