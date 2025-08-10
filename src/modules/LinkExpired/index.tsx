import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import { MoveRight } from 'lucide-react';

const LinkExpired: React.FC = () => {
  const router = useRouter();
  return (
    <div className="relative flex w-screen flex-col items-center font-['Gilroy'] transition-all duration-150 ease-in-out">
      <div className="w-full max-w-[375px] px-[20px] h-screen flex flex-col justify-center py-4">
        <div className="mb-[30px] w-full flex flex-col items-center">
          <Image
            src={`${imageDomainUrl}/LuxuryTravelDR/Icon/link-expired-logo.svg`}
            width={82}
            height={82}
            alt="logo"
            className="mb-[55px]"
          />
          <h2 className="text-[28px] font-semibold text-center leading-[34px] max-w-[304px] font-['Urbanist']">
            This Wellness Experience Has Expired
          </h2>
          <p className="font-['Urbanist'] leading-[25px] text-center mt-[38px] max-w-[300px] font-normal">
            Oops! The event or wellness support page you&apos;re looking for has expired, but your
            path to relaxation and mindfulness continues.
          </p>
          <button
            onClick={() => router.push('/meditations')}
            className="bg-[#132979] max-w-[259px] w-full h-[46px] flex justify-center items-center rounded-full mt-[39px] text-[#FFFFFF] text-[14px] font-semibold font-['Urbanist'] gap-[10px]"
          >
            Continue to Meditation <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkExpired;
