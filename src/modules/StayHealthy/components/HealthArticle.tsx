import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Button } from 'src/components/ui/button';

import { MoveRight } from 'lucide-react';

interface HealthArticleItemProps {
  title: string;
  description: string;
  imageName: string;
  link: string;
}

const HealthArticle: React.FC<HealthArticleItemProps> = ({
  title,
  description,
  imageName,
  link,
}) => {
  const router = useRouter();

  const baseUrl = router.pathname;
  link = `${baseUrl}${link}`;

  return (
    <Link className="flex h-[239px] w-full group" href={link}>
      <Image
        className="object-cover w-[269px] rounded-l-3xl"
        src={`${imageDomainUrl}/StayHealthy/${imageName}`}
        alt={`${title} Image`}
        width={1000}
        height={1000}
      />
      <div className="p-8 bg-white rounded-r-3xl border-[2px] border-zinc-100 group-hover:bg-zinc-100/60 transition-all duration-200 ease-in-out group-hover:border-[#00CACB]/20 flex flex-col items-start justify-between w-full">
        <div>
          <h1 className="text-[2rem] font-bold line-clamp-3 mb-2">{title}</h1>
          <p className="font-medium text-[1.125rem] max-w-[393px] mb-2 line-clamp-3">
            {description}
          </p>
        </div>

        <Button
          variant="ghost"
          className="p-0 m-0 text-[#30aeae] text-base hover:bg-transparent hover:text-[#338a8a]"
        >
          Read More <MoveRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Link>
  );
};

export default HealthArticle;
