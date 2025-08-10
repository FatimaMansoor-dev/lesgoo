import React from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import Container from './Container';

const Welcome: React.FC = () => {
  return (
    <Container className="w-full items-end flex gap-3 text-white">
      <div className="group relative h-full w-full rounded-2xl bg-[#132979] px-3 py-[37.5px] cursor-pointer hover:bg-[#0f2162]">
        <h2 className="text-[36px] leading-[43.2px] font-bold text-white font-['Urbanist'] mb-[11px]">
          Soulscape
        </h2>
        <p className="max-w-[214px] text-[14px] font-medium leading-[22px]">
          Travel well and mindfully.
        </p>
        <Image
          src={`${imageDomainUrl}/KarmaTravelDemo/Icon/jet-airplane.svg`}
          alt="Download Background"
          width={108}
          height={108}
          className="absolute top-[17px] right-[6px] group-hover:tranform group-hover:scale-125 transition-all duration-300 ease-in-out"
        />
      </div>
    </Container>
  );
};

export default Welcome;
