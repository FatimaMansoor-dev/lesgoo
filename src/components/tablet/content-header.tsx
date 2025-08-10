import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { cn } from 'src/lib/utils';

import { ChevronLeft } from 'lucide-react';

interface ContentHeaderProps {
  iconSrc?: string;
  iconAlt?: string;
  title: string;
  subtitle?: string;
  description: string;
  className?: string;
  descriptionClassName?: string;
  showBackButton?: boolean;
  spacerClassname?: string;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({
  iconSrc,
  iconAlt,
  title,
  subtitle,
  description,
  className = '',
  descriptionClassName = '',
  showBackButton = false,
  spacerClassname = '',
}) => {
  const router = useRouter();

  return (
    <section className={cn('relative mb-[1.875rem] flex w-full flex-col', className)}>
      {showBackButton && (
        <div className="absolute right-0 top-0 rounded-full bg-[#E1FEFF] p-2 text-[#00C0C5]">
          <ChevronLeft className="h-8 w-8 cursor-pointer" onClick={() => router.back()} />
        </div>
      )}
      <div className="flex flex-col items-start text-left">
        {iconSrc && (
          <Image
            className="mb-[1.25rem] h-[2.75rem] w-auto"
            src={iconSrc}
            alt={iconAlt || ''}
            width={80}
            height={80}
          />
        )}
        <div className="w-full">
          {subtitle && <p className="mb-2 text-sm font-medium text-zinc-500">{subtitle}</p>}
          <h1 className="mb-[.375rem] text-2xl font-bold md:text-3xl">{title}</h1>
          <div className="flex w-full gap-4">
            <p
              className={cn(
                'max-w-[27.5rem] text-[1.125rem] font-medium text-zinc-700 md:text-lg',
                descriptionClassName
              )}
            >
              {description}
            </p>
            <p className={cn('w-[40%] opacity-0', spacerClassname)}>Not Visible</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentHeader;
