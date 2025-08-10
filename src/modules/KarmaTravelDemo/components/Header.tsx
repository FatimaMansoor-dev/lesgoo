import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import Container from './Container';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Container className="mb-[16.5px] w-full">
        <div
          onClick={() => router.push('/')}
          className="mt-[28.5px] flex h-[27px] w-[89px] cursor-pointer items-center rounded-[24px] bg-[#F0F0F0] py-[3.38px]"
        >
          <div className="ml-[3.68px] flex h-[18.97px] w-[18.97px] items-center justify-center rounded-full bg-[#FFFFFF] text-center">
            <Image
              src={`${imageDomainUrl}/MoodHub/Icon/main/renewme-logo.svg`}
              alt="logo"
              height={13.86}
              width={13.86}
            />
          </div>
          <h4 className="ml-[5.38px] text-center font-['Urbanist'] pb-0 text-[11px] font-medium text-[#000000]">
            RenewMe
          </h4>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold font-['Urbanist'] mt-[4px] text-[#303030] leading-[26px]">
           Daily Check-In
          </h2>
        </div>
      </Container>
    </>
  );
};

export default Header;
