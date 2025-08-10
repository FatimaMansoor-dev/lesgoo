import React, { useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { ChevronRight } from 'lucide-react';

import Container from './Container';
import FitnessFunDialog from './FitnessFunDialog';

// Import the dialog component

const GeneralAndMental: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<'General Health' | 'Mental Wellness'>(
    'General Health'
  );

  const openDialog = (type: 'General Health' | 'Mental Wellness') => {
    setDialogType(type);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Container className="mb-[39.5px] mt-[15px] flex h-[164px] w-full gap-[15px] text-white">
        <div
          className="group relative h-full w-[60%] cursor-pointer text-[20px] font-['Urbanist'] rounded-2xl bg-[#A251AB] p-4 transition-all duration-150 ease-in-out hover:bg-[#A251AB]"
          onClick={() => openDialog('General Health')}
        >
          <h1 className="font-semibold leading-tight font-['Urbanist']">General Health</h1>
          <Image
            className="absolute -bottom-2 -left-[43px] w-[110px] opacity-40 transition-all duration-150 ease-in-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:scale-110"
            src={`${imageDomainUrl}/YourBrandSample/Icon/general-health.svg`}
            width={800}
            height={800}
            alt="General Health Icon"
          />
          <div className="absolute -bottom-0 -right-0 m-[14px] flex aspect-square h-auto w-[23px] items-center justify-center rounded-full bg-white/50">
            <ChevronRight size={16} />
          </div>
        </div>
        <div
          className="group relative h-full w-full text-[20px] font-['Urbanist'] cursor-pointer rounded-2xl bg-[#132979] p-4 transition-all duration-150 ease-in-out hover:bg-[#132979]"
          onClick={() => openDialog('Mental Wellness')}
        >
          <h1 className="font-semibold">Mental Wellness</h1>
          <Image
            className="group-hover:-scale-x-[105% opacity-40] absolute -bottom-4 right-[4.48px] w-[120px] -scale-x-[100%] opacity-40 transition-all duration-150 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1"
            src={`${imageDomainUrl}/YourBrandSample/Icon/mental-wellness.svg`}
            width={800}
            height={800}
            alt="Mental Wellness Icon"
          />
          <div className="absolute -bottom-0 -left-0 m-[14px] flex aspect-square h-auto w-[23px] items-center justify-center rounded-full bg-white/50">
            <ChevronRight size={16} />
          </div>
        </div>
      </Container>

      {/* Dialog Component */}
      <FitnessFunDialog isOpen={isDialogOpen} onClose={closeDialog} type={dialogType} />
    </>
  );
};

export default GeneralAndMental;
