import React from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import Container from './Container';

const Welcome: React.FC = () => {
  return (
    <Container className="w-full items-end flex gap-3 text-white">
      <div className="group relative w-full rounded-2xl bg-[#A1589F] px-3 py-[25px] cursor-pointer hover:bg-[#A1589F] h-[146px] flex items-center justify-start">
        <div>
          <h2 className="text-[36px] leading-[43.2px] font-bold text-white font-['Urbanist']">
            Be Balanced
          </h2>
          <p className="max-w-[214px] text-[14px] font-medium leading-[22px]">
            {/* Join us in making the world better. Enjoy your life and find balance with mindfulness. */}
            Breathe deeply, live mindfully.
          </p>
        </div>
        <Image
          src={`${imageDomainUrl}/YourBrandSample/Icon/hand-heart.svg`}
          alt="Download Background"
          width={109}
          height={152}
          className="absolute bottom-0 right-2 group-hover:tranform group-hover:scale-125 transition-all duration-300 ease-in-out"
        />
      </div>
      {/* <Link
        href="/health-hub/renewme/code/peace369"
        className="w-[35%] bg-[#01C1C6] h-[60%] rounded-2xl p-6 flex items-center justify-center hover:bg-[#38aaae] cursor-pointer group transition-all duration-150 ease-in-out"
      >
        <ArrowUp
          size={58}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform rotate-45 transition-all duration-150 ease-in-out"
        />
      </Link> */}
    </Container>
  );
};

export default Welcome;
