import React from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

interface RedirectArrowButtonProps {
  imgUrl: string;
  bgColor: string;
}
const RedirectArrowButton: React.FC<RedirectArrowButtonProps> = ({ imgUrl, bgColor }) => {
  return (
    <button
      className={`flex h-[28px] min-w-[28px] items-center justify-center rounded-full ${bgColor}`}
    >
      <Image src={`${imageDomainUrl}${imgUrl}`} height={12} width={12} alt="icon" />
    </button>
  );
};

export default RedirectArrowButton;
