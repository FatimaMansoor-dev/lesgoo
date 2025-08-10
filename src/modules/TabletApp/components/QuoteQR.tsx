import React from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { cn } from 'src/lib/utils';

interface QuoteQRProps {
  quote: string;
  classNameWrapper?: string;
  className?: string;
  quoteClassName?: string;
  hideQRCode?: boolean;
}

const QuoteQR: React.FC<QuoteQRProps> = ({
  quote,
  classNameWrapper,
  className,
  quoteClassName = 'max-w-md',
  hideQRCode = false,
}: QuoteQRProps) => {
  return (
    <section
      className={cn(
        'w-full flex-col md:flex-row flex gap-4',
        hideQRCode && 'h-full',
        classNameWrapper
      )}
    >
      <div
        className={cn(
          'md:basis-[85%] bg-[#E3F7F7] rounded-3xl p-8 flex flex-col items-center justify-center',
          hideQRCode && 'w-full h-full basis-full md:basis-full',
          className
        )}
      >
        <h1 className={cn('text-2xl font-semibold mb-2 max-w-xl text-center', quoteClassName)}>
          &quot;{quote}&quot;
        </h1>
        <p className="text-center text-lg font-medium text-zinc-600">
          Founder of RenewMe, Dr. Lisa Palmer
        </p>
      </div>
      {!hideQRCode && (
        <div className="w-full md:basis-[20%] p-3 outline-2 outline-zinc-100 rounded-3xl bg-[#00C0C5] flex flex-col justify-between hover:bg-[#00A8AD] transition-colors duration-300 hover:outline-[#E3F7F7] hover:outline-4">
          <div className="mb-2 flex items-center justify-center">
            <div className="p-4 bg-white rounded-2xl">
              <Image
                src={`${imageDomainUrl}/TabletApp/travel-soulscape.png`}
                alt="QR Code"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-white text-xs text-center flex gap-2 font-medium">
              Download RenewMe
            </h4>
            <p className="text-white text-center text-xs">Listen on-the-go!</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuoteQR;
