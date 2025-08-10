import React from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';
import Container from 'modules/KarmaTravelDemo/components/Container';


const Welcome: React.FC = () => {
  return (
    <Container className="w-full items-end flex gap-3 text-white">
      <div className="group relative h-[146px] w-full rounded-2xl bg-[#4F65CC] px-3 py-[27px] cursor-pointer hover:bg-[#3b54b0] h-[146px] flex items-center justify-start ">
        <div>
          <h2 className="text-[34px] leading-[40px] max-w-[180px] font-bold text-white font-['Urbanist']">
            Soulscape
          </h2>
          <p className="max-w-[214px] text-[14px] font-medium leading-[22px]">
            Travel well and mindfully.
          </p>
        </div>
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
