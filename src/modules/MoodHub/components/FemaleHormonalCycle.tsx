import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

const FemaleHormonalCycle = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/mood-hub/hormonal-cycle')}
      className="group relative cursor-pointer transition-all duration-150"
    >
      <div className="absolute -top-[45px] left-[50%] flex h-[72px] w-[72px] translate-x-[-50%] items-center justify-center rounded-full bg-[#FFFFFF] shadow-[0px_-2px_5.5px_0px_#0000000f] transition-transform duration-150 group-hover:scale-110">
        <Image
          src={`${imageDomainUrl}/MoodHub/Icon/main/bulb.svg`}
          height={43}
          width={35.85}
          alt="icon"
        />
      </div>
      <div className="mt-[65px] w-full max-w-[335px] rounded-[28px] bg-[#539ED9] hover:bg-[#4b90c4]">
        <h2 className="pt-[41px] text-center font-['Urbanist'] text-[20px] font-semibold leading-[24px] text-[#FFFFFF]">
          female hormonal cycle
        </h2>
        <p className="mx-auto max-w-[334px] px-[21px] pt-[13px] text-center font-['Urbanist'] text-[14px] leading-[20px] text-[#FFFFFF]">
          The female hormonal cycle, also known as the{' '}
          <span className="font-bold">menstrual cycle</span>, is a natural process that usually
          lasts about 28 days (though it can vary). It&apos;s divided into four main phases, and
          throughout the cycle, hormone levels fluctuate, which can influence mood and energy
          levels. Let&apos;s break it down in simple terms.
        </p>
        <div className="mt-[-10px] flex justify-end pb-[14px] pr-[15px]">
          <button className="flex h-[38px] min-w-[38px] items-center justify-center rounded-full bg-[#ffffff80]">
            <Image
              src={`${imageDomainUrl}/MoodHub/Icon/main/arrow-up-white.svg`}
              height={17}
              width={17}
              alt="icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FemaleHormonalCycle;
