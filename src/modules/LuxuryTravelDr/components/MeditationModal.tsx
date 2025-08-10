import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import { X } from 'lucide-react';

const MeditationModal = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10 ">
      <div className="relative shadow-lg w-[306px] bg-white rounded-[14px]">
        <button onClick={onClose} className="absolute top-[11px] right-[17.25px]">
          <X
            className="border border-[#898989] text-[#898989] rounded-full text-lg p-[2px]"
            size={16}
          />
        </button>
        <div className="flex flex-col justify-center items-center mt-2">
          <Image
            src={`${imageDomainUrl}/LuxuryTravelDR/Icon/meditation.png`}
            alt="luxury-travel-logo"
            width={306}
            height={100}
          />
          {/* <Image src={Icon} alt="Icon" className="pt-1" /> */}
        </div>
        <div className="flex flex-col justify-center items-center absolute top-[191px]">
          <div className="flex h-[27px] w-[89px] cursor-pointer items-center rounded-[24px] bg-[#F0F0F033] py-[3.38px]">
            <div className="ml-[3.68px] flex h-[18.97px] w-[18.97px] items-center justify-center rounded-full bg-[#FFFFFF] text-center">
              <Image
                src={`${imageDomainUrl}/MoodHub/Icon/main/renewme-logo.svg`}
                alt="logo"
                height={13.86}
                width={13.86}
              />
            </div>
            <h4 className="ml-[2.62px] text-center font-['Urbanist'] pb-0 text-[11px] font-medium text-[#fff]">
              RenewMe
            </h4>
          </div>
          <p className="text-white text-[22px] leading-[27px] my-[13px] text-center font-semibold">
            Take a Deep Breath - Your Moment of Calm Awaits
          </p>
          <p className="text-white text-[14px] font-['Urbanist'] leading-[19px] text-center w-full max-w-[245px]">
            Discover more guided meditations, soothing sounds, motivations, and mindful moments just
            for you.
          </p>
          <button
            onClick={() => router.push('/meditations')}
            className={
              "bg-[#FFFFFF] w-full max-w-[259px] h-[46px] flex justify-center items-center rounded-full mt-[23px] text-[#0A1548] text-[14px] font-semibold font-['Urbanist']"
            }
          >
            Start Your Journey
          </button>
        </div>
        <div className="bg-[#0A1548] h-[27px] w-full rounded-[0_0_14px_14px]"></div>
      </div>
    </div>
  );
};

export default MeditationModal;
