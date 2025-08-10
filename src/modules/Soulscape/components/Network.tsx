import { NetworkWrapper } from './Network.styled';

import React from 'react';
import ABCSvg from 'shared/assets/svg/n-abc.svg';
import CBSSvg from 'shared/assets/svg/n-cbs.svg';
import CNNSvg from 'shared/assets/svg/n-cnn.svg';
import FOXSvg from 'shared/assets/svg/n-fox.svg';
import NBCSvg from 'shared/assets/svg/n-nbc.svg';
import SKYSvg from 'shared/assets/svg/n-sky.svg';

const Network: React.FC = () => {
  return (
    <NetworkWrapper className="z-[2] bg-[#FAFAFA]">
      <div className="container mx-auto flex h-full flex-col gap-10 px-6 pt-10 sm:pt-16">
        <span className="text-center font-['Gilroy'] text-base font-[400] text-black-1 md:text-lg lg:text-xl">
          CEO of RenewMe, Dr. Lisa Palmer is seen on the following networks:
        </span>
        <div className="grid grid-cols-3 grid-rows-2 items-center justify-items-center gap-10 md:grid-cols-6 md:grid-rows-1 ">
          <div className="h-[27px] lg:h-[33px] xl:h-[40px]">
            <CBSSvg className="h-full w-auto" />
          </div>
          <div className="h-[18px] lg:h-[24px] xl:h-[30px]">
            <NBCSvg className="h-full w-auto" />
          </div>
          <div className="h-[20px] lg:h-[26px] xl:h-[32px]">
            <FOXSvg className="h-full w-auto" />
          </div>
          <div className="h-[21px] lg:h-[27px] xl:h-[34px]">
            <CNNSvg className="h-full w-auto" />
          </div>
          <div className="h-[31px] lg:h-[37px] xl:h-[41px]">
            <SKYSvg className="h-full w-auto" />
          </div>
          <div className="h-[29px] lg:h-[35px] xl:h-[42px]">
            <ABCSvg className="h-full w-auto" />
          </div>
        </div>
      </div>
    </NetworkWrapper>
  );
};

export default Network;
