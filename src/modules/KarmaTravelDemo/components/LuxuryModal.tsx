import Image from 'next/image';
import Link from 'next/link';

import { imageDomainUrl } from 'shared/constants/Assets';

import { X } from 'lucide-react';

const LuxuryModal = ({
  onClose,
  buttonClass = 'bg-[#132979]',
}: {
  onClose: () => void;
  buttonClass?: string;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10 ">
      <div className="relative shadow-lg w-[306px] bg-white rounded-[14px]">
        <button onClick={onClose} className="absolute top-[11px] right-[17.25px]">
          <X
            className="border border-[#898989] text-[#898989] rounded-full text-lg p-[2px]"
            size={16}
          />
        </button>
        <div className="flex flex-col justify-center items-center mt-[32px]">
          <Image
            src={`${imageDomainUrl}/KarmaTravelDemo/Icon/luxury-travel-logo.png`}
            alt="luxury-travel-logo"
            width={294}
            height={100}
          />
          {/* <Image src={Icon} alt="Icon" className="pt-1" /> */}
        </div>
        <div className="flex flex-col justify-center items-center mt-[10px]">
          <p className="text-[#191919] text-[14px] leading-[19px] mb-[10px]">
            Elegance Redefined...
          </p>
          <p className="text-[#191919] text-[14px] font-['Urbanist'] leading-[19px] text-center w-full max-w-[255px]">
            Discover luxury bespoke experiences in the Dominican Republic focusing on elegance, and
            unparalleled service.
          </p>
          <div>
            <button
              className={`${buttonClass} w-[256px] h-[46px] flex justify-center items-center rounded-full mt-[39px] mb-[27px] text-[#FFFFFF] text-[14px] font-semibold font-['Urbanist']`}
            >
              <Link
                onClick={e => {
                  e.preventDefault();
                  let width = 800;
                  let height = 600;
                  if (window.matchMedia('(max-width: 480px)').matches) {
                    width = 320;
                    height = 450;
                  } else if (window.matchMedia('(max-width: 768px)').matches) {
                    width = 400;
                    height = 550;
                  } else if (window.matchMedia('(max-width: 1024px)').matches) {
                    width = 500;
                    height = 600;
                  }
                  const left = window.screen.width / 2 - width / 2;
                  const top = window.screen.height / 2 - height / 2;

                  window.open(
                    'https://luxurytraveldr.com',
                    '_blank',
                    `width=${width},height=${height},scrollbars=yes,resizable=yes,top=${top},left=${left}`
                  );
                }}
                href="https://luxurytraveldr.com"
              >
                Start Your Journey
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryModal;
