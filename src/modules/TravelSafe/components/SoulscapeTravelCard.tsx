import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from 'src/components/ui/button';
import { cn } from 'src/lib/utils';

import { ArrowRight } from 'lucide-react';

interface SoulscapeTravelCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
  cardClassName?: string;
  decorationImage?: string;
  centerImage?: boolean;
}

const SoulscapeTravelCard: React.FC<SoulscapeTravelCardProps> = ({
  title,
  description,
  image,
  link,
  buttonText,
  cardClassName = '',
  decorationImage,
  centerImage = false,
}) => {
  const router = useRouter();

  const baseUrl = router.pathname;
  link = `${baseUrl}${link}`;

  return (
    <Link href={link}>
      <div
        className={cn(
          'w-full bg-gradient-to-br from-[#00C0C5] to-[#2ed8de] text-white p-6 md:p-20 rounded-3xl flex justify-end gap-2 relative overflow-hidden border-[2px] border-[#278F92]/40 group transition-all duration-300 ease-in-out hover:shadow-lg items-center',
          cardClassName
        )}
      >
        <div
          className={cn(
            'absolute -bottom-30 -left-40 transition-transform duration-300 ease-in-out group-hover:scale-105',
            centerImage
              ? 'mt-4 top-1/2 transform -translate-y-1/2'
              : 'group-hover:translate-y-[-20px]',
            // Change opacity on every breakpoint
            'opacity-10 md:opacity-40 lg:opacity-80 xl:opacity-100'
          )}
        >
          <Image className="w-[30vw]" src={image} alt={title} height={500} width={500} />
        </div>
        <div className="max-w-md">
          {decorationImage && (
            <Image
              className="mb-10"
              src={decorationImage}
              alt="decoration"
              height={200}
              width={200}
            />
          )}
          <h2 className="font-bold text-2xl md:text-3xl mb-3">{title}</h2>
          <p className="font-medium text-lg">{description}</p>
          <Button
            variant="ghost"
            size="lg"
            className="mt-4 p-0 text-lg group/button hover:bg-transparent hover:p-0 hover:text-white/80"
          >
            {buttonText}
            <ArrowRight
              size={16}
              className="ml-1 transition-transform duration-300 ease-in-out group-hover/button:translate-x-[2px]"
            />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default SoulscapeTravelCard;
