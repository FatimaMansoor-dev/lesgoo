import Image from 'next/image';
import React from 'react';
import { imageDomainUrl } from 'shared/constants/Assets';
import Container from './Container';

const Mindfulness: React.FC = () => {
  return (
    <Container className="mt-4 flex h-16 w-full gap-3 text-white">
      <div
        onClick={() => {
          const element = document.getElementById('mindfulness-audios');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="group relative flex h-full w-full text-[20px] font-['Urbanist'] cursor-pointer items-center overflow-hidden rounded-2xl bg-[#A850B2] p-3 font-semibold leading-tight transition-all duration-300 ease-in-out hover:bg-[#8e3f94]"
      >
        Mindfulness Audios
        <Image
          src={`${imageDomainUrl}/KarmaTravelDemo/Icon/waveform.svg`}
          alt="Download Background"
          width={400}
          height={400}
          className="group-hover:tranform absolute bottom-[7px] right-[12px] w-16 opacity-40 transition-all duration-300 ease-in-out group-hover:scale-125"
        />
      </div>
    </Container>
  );
};

export default Mindfulness;
