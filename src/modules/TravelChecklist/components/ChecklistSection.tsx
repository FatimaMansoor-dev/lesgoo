import React from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { cn } from 'src/lib/utils';

import { Dot } from 'lucide-react';

interface ChecklistSectionProps {
  title: string;
  items: string[];
  imageSrc: string;
  isReversed: boolean;
}

const ChecklistSection: React.FC<ChecklistSectionProps> = ({
  title,
  items,
  imageSrc,
  isReversed,
}) => {
  return (
    <section
      className={cn(
        'w-full mb-4 flex justify-between gap-4 items-center',
        isReversed && 'flex-row-reverse'
      )}
    >
      <div className="basis-full px-4 xl:px-8">
        <h1 className="text-2xl font-medium mb-4">{title}</h1>
        <ul className="font-medium text-lg text-zinc-500">
          {items.map((item, index) => (
            <li key={index} className="flex">
              <Dot /> {item}
            </li>
          ))}
        </ul>
      </div>
      <Image
        className="rounded-3xl basis-full h-[260px] object-cover"
        src={`${imageDomainUrl}${imageSrc}`}
        alt={title.toLowerCase().replace(' ', '-')}
        width={400}
        height={400}
      />
    </section>
  );
};

export default ChecklistSection;
