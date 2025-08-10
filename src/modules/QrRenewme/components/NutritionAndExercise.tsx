import React, { useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { ChevronRight } from 'lucide-react';

import Container from './Container';
import FitnessFunDialog from './FitnessFunDialog';

const NutritionAndExercise: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<'Nutrition' | 'Exercise'>('Nutrition');

  const openDialog = (type: 'Nutrition' | 'Exercise') => {
    setDialogType(type);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Container className="mt-[15px] flex h-[164px] w-full gap-[15px] text-white">
        <div
          className="group relative h-full w-full cursor-pointer text-[20px] font-['Urbanist'] overflow-hidden rounded-2xl bg-[#4F65CC] p-[14px] transition-all duration-150 ease-in-out hover:bg-[#4F65CC]"
          onClick={() => openDialog('Nutrition')}
        >
          <h1 className="font-semibold">Nutrition</h1>
          <Image
            className="absolute -bottom-4 -right-4 w-[140px] opacity-40 transition-all duration-150 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:scale-110"
            src={`${imageDomainUrl}/YourBrandSample/Icon/nutrition.svg`}
            width={140}
            height={140}
            alt="Nutrition Icon"
          />
          <div className="absolute -bottom-0 -left-0 m-[14px] flex aspect-square h-auto w-[23px] items-center justify-center rounded-full bg-white/50">
            <ChevronRight size={16} className="ml-[2px]" />
          </div>
        </div>
        <div
          className="group relative h-full w-[60%] text-[20px] font-['Urbanist'] cursor-pointer overflow-hidden rounded-2xl bg-[#2C38BC] p-[14px] transition-all duration-150 ease-in-out hover:bg-[#2C38BC]"
          onClick={() => openDialog('Exercise')}
        >
          <h1 className="font-semibold">Exercise</h1>
          <Image
            className="absolute bottom-[-38px] left-[-36px] w-[140px] opacity-40 transition-all duration-150 ease-in-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:scale-110"
            src={`${imageDomainUrl}/YourBrandSample/Icon/exercise.svg`}
            width={140}
            height={140}
            alt="Exercise Icon"
          />
          <div className="absolute -bottom-0 -right-0 m-[14px] flex aspect-square h-auto w-[23px] items-center justify-center rounded-full bg-white/50">
            <ChevronRight size={16} className="ml-[2px]" />
          </div>
        </div>
      </Container>

      {/* Dialog Component */}
      <FitnessFunDialog isOpen={isDialogOpen} onClose={closeDialog} type={dialogType} />
    </>
  );
};

export default NutritionAndExercise;
