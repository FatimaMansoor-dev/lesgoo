import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { imageDomainUrl } from 'shared/constants/Assets';

import Container from './Container';

interface AdvertiseProps {
  bgColor?: string;
}

const Advertise: React.FC<AdvertiseProps> = ({ bgColor }) => {
  return (
    <>
      <Container className="mb-[16.5px] w-full mt-1">
        <div
          className={`${bgColor} rounded-[17px] p-[38px_41px_50px_40px] flex items-center justify-center flex-col relative`}
        >
          <Image
            src={`${imageDomainUrl}/KarmaTravelDemo/Icon/advertise.svg`}
            alt="logo"
            height={70}
            width={70}
          />
          <h4 className="text-[22px] font-semibold mt-[11px] leading-[26px] text-white text-center">
            Advertise with us
          </h4>
          <p className="text-white text-[14px] font-normal mt-[5px] leading-[20px]">
            Contact us at
          </p>
          <Link
            href={'mailto:info@myrenewme.com'}
            className="text-[14px] font-semibold leading-[20px] text-white"
          >
            info@myrenewme.com
          </Link>
          <Image
            src={`${imageDomainUrl}/KarmaTravelDemo/Icon/advertise.svg`}
            alt="advertise"
            height={102}
            width={102}
            className="scale-x-[-1] opacity-[10%] absolute left-[-11px] bottom-[-17px]"
          />
        </div>
      </Container>
    </>
  );
};

export default Advertise;
