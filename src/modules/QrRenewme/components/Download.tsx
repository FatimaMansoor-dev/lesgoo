import React from 'react';

import Image from 'next/image';

// import Link from 'next/link';
import { imageDomainUrl } from 'shared/constants/Assets';

// import { DownloadIcon } from 'lucide-react';
import Container from './Container';

const Download: React.FC = () => {
  return (
    <Container className="mt-4 flex h-16 w-full gap-3 text-white">
      <div
        onClick={() => {
          const element = document.getElementById('mindfulness-audios');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="group relative flex h-full w-full text-[20px] font-['Urbanist'] cursor-pointer items-center overflow-hidden rounded-2xl bg-[#A850B2] p-3 font-semibold leading-tight transition-all duration-300 ease-in-out hover:bg-[#A850B2]"
      >
        Mindfulness Audios
        <Image
          src={`${imageDomainUrl}/YourBrandSample/Icon/waveform.svg`}
          alt="Download Background"
          width={400}
          height={400}
          className="group-hover:tranform absolute bottom-[7px] right-[12px] w-16 opacity-40 transition-all duration-300 ease-in-out group-hover:scale-125"
        />
      </div>
      {/* <Link
        href="/renewme/code/peace369"
        className="w-full bg-[#DD69DA] hover:bg-[#ce61ca] transition-all duration-150 ease-in-out cursor-pointer h-full p-2 flex flex-col justify-center items-center rounded-2xl outline outline-2 outline-[#C45CC1] group"
      >
        <div className="flex gap-2 items-center">
          <h1 className="text-sm w-fit font-semibold leading-none text-center">Download RenewMe</h1>
          <DownloadIcon
            className="group-hover:transform group-hover:translate-y-[2px] transition-all duration-150 ease-in-out hidden xs:block"
            size={18}
          />
        </div>
        <p className="text-xs text-center">Listen on-the-go!</p>
      </Link> */}
    </Container>
  );
};

export default Download;
